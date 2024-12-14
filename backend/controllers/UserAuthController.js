const mongoose = require("mongoose");
const UserAuthModel = require("../models/UserAuthModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup user cntroller
const signUp = async (request, response) => {
  const { validId, fullname, username, email, password } = request.body;
  try {
    const existUser = await UserAuthModel.findOne({ email });
    if (!existUser) {
      // genarate salt and hashed the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const createUser = await UserAuthModel.create({
        validId,
        fullname,
        username,
        email,
        password: hashedPassword,
      });

      if (!createUser) {
        return response.status(500).json({
          message: "Oops! Something went wrong, user is not created",
        });
      }
      return response.status(201).json({
        message: "user is registered",
        registerData: createUser,
      });
    }
    return response.status(500).json({
      message: "Email is already resgitered",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

// signIn user
const signIn = async (request, response) => {
  const { email, password } = request.body;
  try {
    const findUser = await UserAuthModel.findOne({ email });
    if (!findUser) {
      return response.status(404).json({
        message: "Oops! Unable to find user with this email",
      });
    }
    // compare password
    const comparePassword = await bcrypt.compare(password, findUser.password);
    if (!comparePassword) {
      return response.status(401).json({
        message: "Entered password is incorrect",
      });
    }
    // generate jwt
    const token = await jwt.sign(
      {
        validId: findUser.validId,
        email: email,
      },
      "secret",
      { expiresIn: "24h" }
    );
    return response.status(200).json({
      message: "user signin success",
      signInEmail: email,
      jwt: token,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

const getUserData = async (request, response) => {
  try {
    const userData = await UserAuthModel.find();
    if (!userData) {
      return response.status(404).json({
        message: "No user found",
      });
    }
    return response.status(200).json({
      message: "fetching all users in database",
      data: userData,
    });
  } catch (error) {
    return response.status(404).json({
      message: error.message,
    });
  }
};

const getUserDataById = async (request, response) => {
  const { id } = request.params;
  try {
    const getUserData = await UserAuthModel.findById(id);
    if (!getUserData) {
      return response.status(404).json({
        message: "No user found with this id",
      });
    }
    return response.status(200).json({
      message: "User Found",
      data: getUserData,
    });
  } catch (error) {
    return response.status(404).json({
      message: error.message,
    });
  }
};

const updateUser = async (request, response) => {
  try {
    const requstData = await request.body;
    const { id } = request.params;
    const updateData = await UserAuthModel.findByIdAndUpdate(id, requstData);
    if (!updateData) {
      return response.status(500).json({
        message: "User data is not updated",
      });
    }

    return response.status(201).json({
      message: "user data is updated",
      data: updateData,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

const deleteUser = async (request, response) => {
  try {
    const { id } = request.params;
    const deleteData = await UserAuthModel.findByIdAndDelete(id);
    if (!deleteData) {
      return response.status(500).json({
        message: "User data is not deleted",
      });
    }
    return response.status(200).json({
      message: "User data is deleted",
      deletedData: deleteData,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  signUp,
  signIn,
  getUserData,
  getUserDataById,
  updateUser,
  deleteUser,
};

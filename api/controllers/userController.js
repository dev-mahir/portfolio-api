import User from "../models/User.js";
import { createOTPCode } from "../utility/codeGenerator.js";
import createError from "../utility/createError.js";
import { hash, passwordVarify } from "../utility/hash.js";
import { sendActivationCode } from "../utility/sendMail.js";
import { createToken } from "../utility/token.js";
import { isEmail, isPhone } from "../utility/validate.js";

/**
 * @access public
 * @route /api/v1/user/register
 * @method POST
 */

export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(createError(400, "All fields are required"));
    }
    // create activation code
    const code = createOTPCode();
    if (isEmail(email)) {
      // create user
      const user = await User.create({
        ...req.body,
        access_token: code,
        password: hash(password),
      });

      if (!user) {
        return next(createError(400, "Registration failed, try again."));
      } else {
        // send activation code
        sendActivationCode(user.email, { code: code, name: user.name });

        res.status(201).json({
          message: "Registration successfull",
        });
      }
    } else {
      return next(createError(400, "Invalid email address"));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/user/login
 * @method POST
 */

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password) {
      next(createError(400, "All fields are required"));
    }

    if (isEmail(email)) {
      // check user
      const user = await User.findOne({ email: email });
      if (!user) {
        next(createError(400, "User not exists"));
      } else {
        if (!passwordVarify(password, user.password)) {
          next(createError(400, "Invalid password"));
        } else {
          // create token
          const token = createToken({ id: user._id }, "30d");
          res
            .status(200)
            .cookie("access_token", token, {
              expires: new Date(Date.now() + 1000 * 60 * 15)
            })
            .json({
              message: "Login success",
              user,
            });
        }
      }
    } else {
      return next(createError(400, "Invalid  email"));
    }
  } catch (error) {
    next(error);
  }
};

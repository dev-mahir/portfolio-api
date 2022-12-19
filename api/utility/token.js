import jwt from "jsonwebtoken";




/**
 * Create JWT
 * @param {*} payload 
 * @param {*} exp 
 * @returns token
 */
export const createToken = (payload, exp) => {
  // create token
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: exp,
  });
  return token;
};




/**
 *  jwt verify
 */
export const tokenVerify = (token) => {
  // create token
  return token = jwt.verify(token, process.env.JWT_SECRET_KEY);
};

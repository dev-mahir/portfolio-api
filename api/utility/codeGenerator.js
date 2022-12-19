


/**
 * Create  OTP code
 * @returns code
 */

export const createOTPCode = () => {
  return Math.floor(Math.random() * (100000 - 999999)) + 999999;
};




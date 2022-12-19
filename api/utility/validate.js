import { networkInterfaces } from "os";

/**
 * Email validate
 * @param {*} email
 * @returns true/false
 */

export const isEmail = (email) => {
  return /^[^\.-/][a-z0-9-_\.]{1,}@[a-z0-9]{1,}\.[a-z\.]{2,}$/.test(email);
};

/**
 * Phone number validate
 * @param {*} phone
 * @returns true/false
 */

export const isPhone = (phone) => {
  return /^\+?(88)?0?1[3456789][0-9]{8}\b/.test(phone);
};

/**
 * password validate
 * @param {*} phone
 * @returns true/false
 */

export const isPassword = (password) => {
  return /^[#&!a-z\.@1+-_]{4,}$/.test(password);
};


/**
 * Find mac address
 * @params {*}
 * @returns mac address
 */

export const findMacAddress = () => {
  return networkInterfaces().Ethernet[0].mac;
};



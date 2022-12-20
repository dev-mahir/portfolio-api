import Contact from "../models/Contact.js";
import createError from "../utility/createError.js";

/**
 * @access public
 * @route /api/v1/contact
 * @method POST
 */

export const addContact = async (req, res, next) => {
  try {
    const { email, phone, address } = req.body;

    // validate
    if (!email || !phone || !address ) {
      next(createError(400, "All fields are required"));
    } else {
      // create contact
      const contact = await Contact.create(req.body);
      res.status(200).json({
        message: "Contact create successfully",
        contact,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/contact
 * @method GET
 */

export const getAllContact = async (req, res, next) => {
  try {
    const contact = await Contact.find();

    if (contact.length === 0) {
      next(createError(404, "contact not found"));
    } else {
      res.status(200).json(contact);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/contact/:id
 * @method UPDATE
 */
export const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndUpdate(id, {
      ...req.body,
    });
    console.log(contact);
    if (!contact) {
      next(createError(400, "Contact update Failed"));
    }
    if (contact) {
      res.status(200).json({
        message: "Contact updated",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/contact/:id
 * @method DELETE
 */
export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      next(createError(400, "Failed"));
    }
    if (contact) {
      res.status(200).json({
        message: "Contact deleted",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/contact/:id
 * @method GET
 */
export const getSingleContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact) {
      next(createError(400, "Not found"));
    }
    if (contact) {
      res.status(200).json(contact);
    }
  } catch (error) {
    next(error);
  }
};

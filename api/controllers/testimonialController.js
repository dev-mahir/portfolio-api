import Testimonial from "../models/Testimonial.js";
import createError from "../utility/createError.js";

/**
 * @access public
 * @route /api/v1/testimonial
 * @method POST
 */

export const addTestmonial = async (req, res, next) => {
  try {
    const { name, rating, photo, description } = req.body;

    // validate
    if (!name || !rating || !description) {
      next(createError(400, "All fields are required"));
    } else {
      // create Testmonial
      const testimonial = await Testimonial.create({
        ...req.body,
        photo: req.files.photo[0].filename,
      });
      res.status(200).json({
        messages: "Testimonial create successfully",
        testimonial,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/testmonial
 * @method GET
 */

export const getAllTestmonial = async (req, res, next) => {
  try {
    const testmonial = await Testimonial.find();

    if (testmonial.length === 0) {
      next(createError(404, "Testmonial not found"));
    } else {
      res.status(200).json(testmonial);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/testmonial/:id
 * @method UPDATE
 */
export const updateTestmonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findByIdAndUpdate(id, {
      ...req.body,
    });
    console.log(testimonial);
    if (!testimonial) {
      next(createError(400, "Testimonial update Failed"));
    }
    if (testimonial) {
      res.status(200).json({
        message: "Testimonial updated",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/testimonial/:id
 * @method DELETE
 */
export const deleteTestmonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findByIdAndDelete(id);
    if (!testimonial) {
      next(createError(400, "Failed"));
    }
    if (testimonial) {
      res.status(200).json({
        message: "Testimonial deleted",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/testimonial/:id
 * @method GET
 */
export const getSingleTestmonial = async (req, res, next) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      next(createError(400, "Not found"));
    }
    if (testimonial) {
      res.status(200).json(testimonial);
    }
  } catch (error) {
    next(error);
  }
};

import { check, validationResult } from "express-validator";


export const userValidation = [
    check("name").isString().isLength({ min: 3, max: 50 }).not().isEmpty().escape(),
    check("cityId").isInt().not().isEmpty().escape(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },      
    ];


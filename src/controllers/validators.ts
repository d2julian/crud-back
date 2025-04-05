import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const hotelValidator = [body('name').notEmpty().withMessage('El nombre del hotel es obligatorio.'), body('address').notEmpty().withMessage('La dirección del hotel es obligatoria.')];
export const clientValidator = [
  body('name').notEmpty().withMessage('El nombre del cliente es obligatorio.'),
  body('address').notEmpty().withMessage('La dirección del cliente es obligatoria.'),
  body('phone').notEmpty().withMessage('El teléfono del cliente es obligatorio.'),
];

export const bookingValidator = [
  body('hotelId').notEmpty().withMessage('El id del hotel es obligatorio.'),
  body('clientId').notEmpty().withMessage('El id del cliente es obligatorio.'),
  body('name').notEmpty().withMessage('El nombre de la reserva es obligatorio.'),
  body('address').notEmpty().withMessage('La dirección de la reserva es obligatorio.'),
];

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};

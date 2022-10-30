import Joi from 'joi';

export const TshirtSchema = Joi.object({
  name: Joi.string().min(3).required(),
  picUrl: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
  price: Joi.string().required(),
  preorders: Joi.number().required(),
})

export const BookSchema = Joi.object({
  name: Joi.string().min(3).required(),
  author: Joi.string().min(3).required(),
  picUrl: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
  price: Joi.string().required(),
  preorders: Joi.number().required(),
})
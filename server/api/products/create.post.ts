import TshirtModel from '~/server/models/tshirts.model';
import { TshirtSchema } from '~/server/validation';

const validateTshirt = (body) => {
  let { error } = TshirtSchema.validate(body);
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false,
    })
  }
}

const createTshirt = async (body) => {
  try {
    await TshirtModel.create(body);
    return {
      message: 'New t-shirt added!'
    }
  } catch ({ message }) {
    throw createError({
      message
    })
  }
}

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  validateTshirt(body);
  return createTshirt(body);
})
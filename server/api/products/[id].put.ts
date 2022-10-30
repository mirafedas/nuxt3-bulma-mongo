import TshirtModel from '~/server/models/tshirts.model';
import { TshirtSchema } from '~/server/validation';

const validateTshirt = (body) => {
  let { error } = TshirtSchema.validate(body, { abortEarly: true, allowUnknown: true });
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false,
    })
  }
}

const updateTshirt = async ({id, body}) => {
  try {
    await TshirtModel.findByIdAndUpdate(id, body);
    return { message: "T-shirt updated!" }
  } catch ({ message }) {
    throw createError({
      message,
    })
  }
}

export default defineEventHandler(async (event) => {
  const body = useBody(event);
  const id = event.context.params.id;
  validateTshirt(body);
  await updateTshirt({id, body})
})
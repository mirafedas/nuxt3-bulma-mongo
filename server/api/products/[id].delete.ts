import TshirtModel from '~/server/models/tshirts.model';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  try {
    await TshirtModel.findByIdAndDelete(id);
    return { message: "T-shirt removed!"};
  } catch ({message}) {
    throw createError({
      message,
    })
  }
})
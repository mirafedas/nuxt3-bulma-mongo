import TshirtModel from '~/server/models/tshirts.model';

export default defineEventHandler(async () => {
  return TshirtModel.find()
})


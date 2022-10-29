import tshirtsModel from '~/server/models/tshirts.model';

export default defineEventHandler(async () => {
  return tshirtsModel.find()
})


import booksModel from '~/server/models/books.model';

export default defineEventHandler(async () => {
  return booksModel.find()
})
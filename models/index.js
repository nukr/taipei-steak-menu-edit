import mongoose, { Schema } from 'mongoose'

mongoose.connect('mongodb://192.168.99.100/taipei_steak')

const MealSchema = new Schema({
  name: String,
  order: Number,
  category: String,
  price: Number,
  remark: String
})

export default mongoose.model('Meal', MealSchema)

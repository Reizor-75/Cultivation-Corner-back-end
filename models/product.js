import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
  productName: { type: String, required: true },
  quantity: { type:Number,  min: 0, default: 0},
  price: { type: Number, required: true},
  productType: {
    type: String,
    enum:['plant', 'soil', 'fertilizer', 'planters' ],
    default: 'plant'
  }
},{
  timestamps: true,
})

const Product = mongoose.model('Product', productSchema)

export { Product }
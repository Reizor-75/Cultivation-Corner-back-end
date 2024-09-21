import mongoose from 'mongoose'

const Schema = mongoose.Schema

const inventorySchema = new Schema({
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

const Inventory = mongoose.model('inventory', inventorySchema)

export { Inventory }
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema({
  recipient: { type: Schema.Types.ObjectId, ref: 'Profile'},
  orderNumber: { type: String, required: true },
  date: { type: Date, required: true },
  orderList: [{ type: Schema.Types.ObjectId, ref: 'Product'}],
  delivery: {
    type: String,
    enum:['pick up', 'shipping', 'delivery' ],
    default: 'shipping'
  },
  fulfilled : { type: Boolean, default: false},
  address: { type: String }
},{
  timestamps: true,
})

const Order = mongoose.model('order', orderSchema)

export { Order }
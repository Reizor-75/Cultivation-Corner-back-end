import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema({
  recipient: { type: Schema.Types.ObjectId, ref: 'Profile'},
  orderNumber: { type: String, required: true },
  orderList: [{ type: Schema.Types.ObjectId, ref: 'Product'}],
  delivery: {
    type: String,
    enum:['pick up', 'shipping', 'delivery' ],
    default: 'shipping'
  },
  fulfilled : {
    type: String,
    enum:['canceled', 'pending', 'completed' ],
    default: 'pending'
  },
  address: { type: String }
},{
  timestamps: true,
})

const Order = mongoose.model('Order', orderSchema)

export { Order }
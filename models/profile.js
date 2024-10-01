import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order'}],
  address: String,
  aboutMe: String,
  role: {type: Number, default:100 }
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }

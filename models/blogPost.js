import mongoose from 'mongoose'

const Schema = mongoose.Schema

const blogPostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Profile'},
  postTitle: { type: String, required: true },
  content: { type: String, required: true },
  productList: [{ type: Schema.Types.ObjectId, ref: 'Product'}],
},{
  timestamps: true,
})

const BlogPost = mongoose.model('BlogPost', blogPostSchema)

export { BlogPost }
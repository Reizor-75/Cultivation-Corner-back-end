import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema= new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  commenter: { type: Schema.Types.ObjectId, ref: 'Profile' }
}, {
  timestamps: true
})

const blogPostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Profile'},
  postTitle: { type: String, required: true },
  content: { type: String, required: true },
  productList: [{ type: Schema.Types.ObjectId, ref: 'Product'}],
  comments: [commentSchema],
},{
  timestamps: true,
})

const BlogPost = mongoose.model('BlogPost', blogPostSchema)

export { BlogPost }
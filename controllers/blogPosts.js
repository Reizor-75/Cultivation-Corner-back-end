import { BlogPost } from '../models/blogPost.js'

async function index(req, res){
  try {
    const post = await BlogPost.find({}).populate(['author', 'productList'])
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export{
  index,
}
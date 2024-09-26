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

async function create(req, res){
  try {
    const post = await BlogPost.create(req.body)
    res.status(200).json(post)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export{
  index,
  create,
}
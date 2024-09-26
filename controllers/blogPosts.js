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

async function show(req, res){
  try{
    const post = await BlogPost.findById(req.params.postId).populate(['author', 'productList'])
    res.status(200).json(post)
  } catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

async function update(req, res){
  try{
    const post = await BlogPost.findByIdAndUpdate(
      req.params.postId,
      req.body,
      { new: true }
    )
    res.status(200).json(post)
  } catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}

async function deletePost(req, res){
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.postId)
    res.status(200).json(post)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export{
  index,
  create,
  show,
  update,
  deletePost as delete,
}
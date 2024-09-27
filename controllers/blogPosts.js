import { BlogPost } from '../models/blogPost.js'
import { Profile } from '../models/profile.js'

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
    req.body.author = req.user.profile
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

async function createComment(req, res) {
  try{
    req.body.commenter = req.user.profile
    const post = await BlogPost.findById(rew.params.postId)
    post.comments.push(req.body)
    await post.save()

    const newComment = post.comments[post.comments.length - 1]
    const profile = await Profile.findById(req.user.profile)
    newComment.commenter = profile
    res.status(201).json(newComment)
  } catch (err){
    console.log(err)
    res.status(500).json(err)
  }
}

async function deleteComment(req, res){
  try {
    const post = await BlogPost.findById(req.params.postId)
    post.comments.remove({ _id: req.params.commentId })
    await post.save()
    res.status(200).json(post)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function updateComment(req, res){
  try {
    const post = await BlogPost.findById(req.params.postId)
    const comment = post.comments.id(req.params.commentId)
    comment = req.body
    await post.save()
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
  createComment,
  deleteComment,
  updateComment,
}
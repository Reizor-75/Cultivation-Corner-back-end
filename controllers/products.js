import { Product } from '../models/product.js'

async function index(req, res){
  try {
    const product = await Product.find({})
    res.status(200).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res){
  try{
    const product = await Product.create(req.body)
    res.status(201).json(product)
  }
  catch (err){    
    console.log(err)
    res.status(500).json(err)
  }
}

async function update(req, res){
  try{
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    )
    res.status(200).json(product)
  }
  catch (err){    
    console.log(err)
    res.status(500).json(err)
  }
}

export {
  index,
  create,
  update,
}
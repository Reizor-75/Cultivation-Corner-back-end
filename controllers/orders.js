import { Order } from '../models/order.js'

async function index(req, res){
  try {
    const order = await Order.find({})
    res.status(200).json(order)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res){
  try{
    const order = await Order.create(req.body)
    res.status(201).json(order)
  }
  catch (err){    
    console.log(err)
    res.status(500).json(err)
  }
}

export {
  index,
  create,
}
import { Order } from '../models/order.js'

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
  create,
}
import { Order } from '../models/order.js'
import { Profile } from '../models/profile.js'

async function index(req, res){
  try {
    const order = await Order.find({}).populate(['recipient', 'orderList'])
    res.status(200).json(order)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res){
  try{
    req.body.recipient = req.user.profile
    const order = await Order.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { orders: order } },
      { new: true }
    )
    order.recipient = profile
    res.status(201).json(order)
  }
  catch (err){    
    console.log(err)
    res.status(500).json(err)
  }
}

async function update(req, res){
  try{
    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      req.body,
      { new: true }
    )
    res.status(200).json(order)
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
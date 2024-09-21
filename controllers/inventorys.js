import { Inventory, Inventory } from "../models/inventory"; 

async function index(req, res){
  try {
    const workshops = await Inventory.find({})
    res.status(200).json(workshops)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res){
  try{
    const inventory = await Inventory.create(req.body)
    res.status(201).json(inventory)
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
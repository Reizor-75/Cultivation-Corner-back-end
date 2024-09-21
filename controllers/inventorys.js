import { Inventory } from "../models/inventory"; 

async function index(req, res){
  try {
    const workshops = await Inventory.find({})
    res.status(200).json(workshops)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  index,
}
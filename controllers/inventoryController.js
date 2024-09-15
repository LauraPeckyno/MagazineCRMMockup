const Inventory = require('../models/inventory');

// create inventory
const createInventory = async (req, res) => {
  const { issueNum, issueName, pubDate, inventoryNum } = req.body;
  const inventory = await Inventory.create({
    issueNum: issueNum,
    issueName: issueName,
    pubDate: pubDate,
    inventoryNum: inventoryNum
  })
  res.json({ inventory: inventory })
};

// read inventory
const readInventory = async (req, res) => {
  const inventory = await Inventory.find();
  console.log('fetch all inventory');
  res.json({ inventory: inventory })
};

// read inventory by ID
const readInventoryById = async (req, res) => {
  const inventoryID = req.params.id //find by ID
  const thisInventory = await Inventory.findById(inventoryID);
  console.log('fetch inventory by id');
  res.json({ inventory: thisInventory })
};

// update inventory
const updateInventory = async (req, res) => {
  const inventoryId = req.params.id
  const { issueNum, issueName, pubDate, inventoryNum } = req.body;
  const inventory = await Inventory.findByIdAndUpdate(inventoryId, {
    issueNum: issueNum,
    issueName: issueName,
    pubDate: pubDate,
    inventoryNum: inventoryNum
  })
  const updatedInventory = await Inventory.findById(inventoryId)
  console.log('update inventory');
  res.json({ inventory: updatedInventory})
};

// delete inventory
const deleteInventory = async (req, res) => {
  const inventoryId = req.params.id
  await Inventory.deleteOne({
    _id: inventoryId 
  })
  res.json({ success: "inventory deleted" })
};

module.exports = { createInventory, readInventory, updateInventory, deleteInventory, readInventoryById }


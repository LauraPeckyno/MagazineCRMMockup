const Magazine = require('../models/magazines');

// create magazine
const createMagazine = async (req, res) => {
  const { issueNum, issueName, pubDate, inventoryNum } = req.body;
  const magazine = await Magazine.create({
    issueNum: issueNum,
    issueName: issueName,
    pubDate: pubDate,
    inventoryNum: inventoryNum
  })
  res.json({magazine: magazine})
};

// read magazine
const readMagazine = async (req, res) => {
    const magazine = await Magazine.find(); 
    console.log('fetch all magazines');
    res.json({ magazine: magazine });
};

// read magazine by ID
const readMagazineById = async (req, res) => {
  const magazineID = req.params.id //find by ID
  const thisMagazine = await Magazine.findById(magazineID);
  console.log('fetch magazine by id');
  res.json({magazine: thisMagazine})
};

// update magazine
const updateMagazine = async (req, res) => {
  const magazineId = req.params.id
  const { issueNum, issueName, pubDate, inventoryNum } = req.body;
  const magazine = await Magazine.findByIdAndUpdate(magazineId, {
    issueNum: issueNum,
    issueName: issueName,
    pubDate: pubDate,
    inventoryNum: inventoryNum
  })
  const updatedMagazine = await Magazine.findById(magazineId)
  console.log('update magazine');
  res.json({ magazine: updatedMagazine})
};

// delete magazine
const deleteMagazine = async (req, res) => {
  const magazineId = req.params.id
  await Magazine.deleteOne({
    _id: magazineId 
  })
  res.json({ success: "magazine deleted" })
};

module.exports = { createMagazine, readMagazine, updateMagazine, deleteMagazine, readMagazineById }
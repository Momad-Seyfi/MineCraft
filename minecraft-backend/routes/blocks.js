// minecraft-backend/routes/blocks.js
const express = require('express');
const router = express.Router();
const Block = require('../models/Block');

router.get('/', async (req, res) => {
  const blocks = await Block.find();
  res.json(blocks);
});

router.get('/:id', async (req, res) => {
  const block = await Block.findById(req.params.id);
  res.json(block);
});

router.post('/', async (req, res) => {
  const newBlock = new Block(req.body);
  await newBlock.save();
  res.status(201).json(newBlock);
});

module.exports = router;

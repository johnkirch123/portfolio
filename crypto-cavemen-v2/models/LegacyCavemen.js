const mongoose = require('mongoose');

const CavemenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  caveman: {
    type: Number,
    required: true
  },
  attributes: [
    {
      rarityType: {
        type: String,
        required: true
      }
    },
    {
      rarityRank: {
        type: Number,
        required: true
      }
    },
    {
      background: {
        type: String,
        required: true
      }
    },
    {
      body: {
        type: String,
        required: true
      }
    },
    {
      feet: {
        type: String,
        required: true
      }
    },
    {
      clothing: {
        type: String,
        required: true
      }
    },
    {
      hair: {
        type: String,
        required: true
      }
    },
    {
      arms: {
        type: String,
        required: true
      }
    },
    {
      environment: {
        type: String,
        required: true
      }
    },
    {
      head: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Caveman = mongoose.model('caveman', CavemenSchema);

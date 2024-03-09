// model/travelModel.js
const mongoose = require('mongoose');

const travelVlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const TravelVlog = mongoose.model('TravelVlog', travelVlogSchema);

module.exports = TravelVlog;

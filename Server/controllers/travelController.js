// controller/travelController.js
const TravelVlog = require('../model/travelModel');

module.exports = {
    addTravelVlog: async function (req, res) {
        try {
            const { title, description, userId } = req.body;

            const newTravelVlog = new TravelVlog({
                title: title,
                description: description,
                userId: userId
            });

            newTravelVlog.save((err, travelVlog) => {
                if (err) {
                    res.status(500).send('Error adding travel vlog.');
                } else {
                    res.status(200).send('Travel vlog added successfully.');
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error adding travel vlog.');
        }
    },

    updateTravelVlog: async function (req, res) {
        try {
            const { vlogId, updatedDetails } = req.body;

            TravelVlog.findByIdAndUpdate(vlogId, updatedDetails, { new: true }, (err, travelVlog) => {
                if (err) {
                    res.status(500).send('Error updating travel vlog details.');
                } else {
                    res.status(200).json(travelVlog);
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error updating travel vlog details.');
        }
    },

    getTravelVlogDetails: async function (req, res) {
        try {
            const { vlogId } = req.params;

            TravelVlog.findById(vlogId, (err, travelVlog) => {
                if (err) {
                    res.status(500).send('Error fetching travel vlog details.');
                } else {
                    res.status(200).json(travelVlog);
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).send('Error fetching travel vlog details.');
        }
    }
};

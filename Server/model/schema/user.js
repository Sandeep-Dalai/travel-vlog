// /model/schema/user
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: { 
        type: Number
    },
    user_name: { 
        type: String,
        required: true
    },
    email: { 
        type: String
    },
    password: { 
        type: String
    },
    created_by: { 
        type: Number
    },
    created_at: { 
        type: Date
    },
    updated_by: { 
        type: Number
    },
    updated_at: { 
        type: Date
    },
    record_status: { 
        type: Number,
        default: 1 
    }
});

module.exports = mongoose.model('User_Masters', userSchema);
const mongoose = require('mongoose');

const suscribersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('suscribers', suscribersSchema);
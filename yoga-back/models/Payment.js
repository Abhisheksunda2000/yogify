const mongoose = require("mongoose");

const { Schema } = mongoose;

const paymentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        default: 500
    }
});

module.exports = mongoose.model("Payment", paymentSchema);

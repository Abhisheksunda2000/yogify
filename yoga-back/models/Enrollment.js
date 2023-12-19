const mongoose = require("mongoose");

const { Schema } = mongoose;

const enrollmentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    month: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        enum: ['6-7AM', '7-8AM', '8-9AM', '5-6PM'],
        required: true
    }
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);

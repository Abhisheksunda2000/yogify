const mongoose = require('mongoose');

// Define a schema for the batch enrollment
const BatchEnrollmentSchema = new mongoose.Schema({
  selectedMonth: {
    type: String,
    required: true
  },
  selectedYear: {
    type: String,
    required: true
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  },
  batchDetails: { // Reference to batch_item collection
    type: mongoose.Schema.Types.ObjectId,
    ref: 'batch_item'
  },
  email:{
    type:String,
    required:true
  }
});

const BatchEnrollment = mongoose.model('BatchEnrollment', BatchEnrollmentSchema);

module.exports = BatchEnrollment;

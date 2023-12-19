const express = require('express');
const router = express.Router();
const BatchEnrollment = require('../models/BatchEnrollment');

router.post('/enrole', [
  // You can add validation logic for selectedMonth and selectedYear if needed
], async (req, res) => {
  const { selectedMonth, selectedYear, email, batchDetails } = req.body;
  console.log(batchDetails);

  try {
    // Create a new batch enrollment instance using the model
    const newEnrollment = new BatchEnrollment({
      selectedMonth,
      selectedYear,
      email,
      batchDetails
    });

    // Save the enrollment data to the database
    await newEnrollment.save();

    return res.json({success:true});
  } catch (err) {
    res.json({success:false});
  }
});


module.exports = router;

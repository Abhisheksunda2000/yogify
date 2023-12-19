// const express = require('express');
// const router = express.Router();
// const Payment = require('../models/Payment');

// // Create a new payment
// router.post('/', async (req, res) => {
//     try {
//         const payment = await Payment.create(req.body);
//         res.status(201).json(payment);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Get all payments
// router.get('/', async (req, res) => {
//     try {
//         const payments = await Payment.find();
//         res.json(payments);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Get a payment by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const payment = await Payment.findById(req.params.id);
//         if (!payment) {
//             return res.status(404).json({ message: 'Payment not found' });
//         }
//         res.json(payment);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Update a payment by ID
// router.patch('/:id', async (req, res) => {
//     try {
//         const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!payment) {
//             return res.status(404).json({ message: 'Payment not found' });
//         }
//         res.json(payment);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Delete a payment by ID
// router.delete('/:id', async (req, res) => {
//     try {
//         const payment = await Payment.findByIdAndDelete(req.params.id);
//         if (!payment) {
//             return res.status(404).json({ message: 'Payment not found' });
//         }
//         res.json({ message: 'Payment deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// module.exports = router;

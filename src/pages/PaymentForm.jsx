import React, { useState, useEffect } from 'react';

export default function PaymentForm() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '',
    enrolledMonth: '',
    batchPreference: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [currentMonth, setCurrentMonth] = useState('');
  const [availableMonths, setAvailableMonths] = useState([]);

  useEffect(() => {
    const date = new Date();
    setCurrentMonth(months[date.getMonth()]);
    const monthsFromNow = months.slice(date.getMonth()); // Display months from current month
    setAvailableMonths(monthsFromNow);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    // Validation checks for required fields
    if (!paymentData.cardNumber) {
      errors.cardNumber = 'Card number is required';
    }
    if (!paymentData.expiryDate) {
      errors.expiryDate = 'Expiry date is required';
    }
    if (!paymentData.cvv) {
      errors.cvv = 'CVV is required';
    }
    if (!paymentData.amount) {
      errors.amount = 'Amount is required';
    }
    if (!paymentData.enrolledMonth) {
      errors.enrolledMonth = 'Enrolled month is required';
    }
    if (!paymentData.batchPreference) {
      errors.batchPreference = 'Batch preference is required';
    }

    if (Object.keys(errors).length === 0) {
      // If no errors, submit the payment data (you can perform API calls or other operations here)
      console.log('Payment data:', paymentData);
      // Reset the form after submission
      setPaymentData({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        amount: '',
        enrolledMonth: '',
        batchPreference: '',
      });
      setFormErrors({});
    } else {
      // If there are errors, update the formErrors state to display error messages
      setFormErrors(errors);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: '400px' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumberInput">Card Number</label>
            <input
              type="text"
              className="form-control"
              id="cardNumberInput"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
            />
            {formErrors.cardNumber && <p style={{ color: 'red' }}>{formErrors.cardNumber}</p>}
          </div>

          {/* Other input fields for expiry date, CVV, amount, etc. */}

          <div className="form-group">
            <label htmlFor="enrolledMonthInput">Enrolled Month</label>
            <select
              className="form-control"
              id="enrolledMonthInput"
              name="enrolledMonth"
              value={paymentData.enrolledMonth}
              onChange={handleChange}
            >
              <option value="">Select enrolled month</option>
              {availableMonths.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            {formErrors.enrolledMonth && <p style={{ color: 'red' }}>{formErrors.enrolledMonth}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="batchPreferenceInput">Batch Preference for {currentMonth}</label>
            <select
              className="form-control"
              id="batchPreferenceInput"
              name="batchPreference"
              value={paymentData.batchPreference}
              onChange={handleChange}
            >
              <option value="">Select a batch</option>
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
            {formErrors.batchPreference && <p style={{ color: 'red' }}>{formErrors.batchPreference}</p>}
          </div>

          <button type="submit" className="btn btn-primary text-white bg-success m-2">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

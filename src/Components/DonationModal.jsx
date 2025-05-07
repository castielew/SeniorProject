import React, { useState } from 'react';
import '../Css/DonationModal.css';

export default function DonationModal({ onClose, studentName, studentImage }) {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState('');
  const [coverFees, setCoverFees] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
    
  const [amountError, setAmountError] = useState('');

  const baseAmounts = [25, 50, 100, 500];
  const selectedAmount = customAmount ? parseFloat(customAmount) : amount;
  const totalAmount = coverFees ? (selectedAmount * 1.08696).toFixed(2) : selectedAmount.toFixed(2);

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal-overlay') onClose();
  };

  const handleConfirm = () => {
    const emailRegex = /[^@]+@[^.]+\..+/;
    const cardRegex = /^\d{16}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvRegex = /^\d{3,4}$/;

    if (!emailRegex.test(email)) return alert('Invalid email');
    if (!cardRegex.test(cardNumber)) return alert('Invalid card number');
    if (!expiryRegex.test(expiry)) return alert('Invalid expiry');
    if (!cvvRegex.test(cvv)) return alert('Invalid CVV');

    alert('Donation submitted successfully!');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        {step === 1 && (
          <>
           <div className="student-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0 }}>Donate to {studentName}</h2>
                {studentImage && (
                    <img src={studentImage} alt={studentName} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                )}
            </div>

            <div className="amount-buttons">
              {baseAmounts.map((amt) => (
                <button
                  key={amt}
                  className={amount === amt ? 'selected-amount' : ''}
                  onClick={() => { setAmount(amt); setCustomAmount(''); }}
                >
                  ${amt}
                </button>
              ))}
              <input
                type="number"
                placeholder="Other amount"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setAmount(0); }}
              />
            </div>
            <div className="form-check mb-4">
              <label className="form-check-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={coverFees}
                  onChange={() => setCoverFees(!coverFees)}
                />
                Cover processing fees
              </label>
            </div>
            <div className="action-buttons">
               <button className="back" onClick={onClose}>Back</button>
               <button
                    className="confirm"
                    onClick={() => {
                        const selected = customAmount ? parseFloat(customAmount) : amount;
                        if (!selected || selected <= 0 || isNaN(selected)) return;
                        setStep(2);
                    }}
                    >
                    Next Step
                </button>
            </div>
          </>
        )}

{step === 2 && (
  <>
    <h2 className="modal-title">Enter Payment Details</h2>

    <div className="form-row" style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
      <input
        type="email"
        className="form-control"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ flex: 1 }}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ flex: 1 }}
      />
    </div>

    <label className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
      <input
        type="checkbox"
        checked={anonymous}
        onChange={() => setAnonymous(!anonymous)}
      />
      Hide my name, show anonymous instead.
    </label>

    <input
      type="text"
      className="form-control"
      placeholder="Card Number"
      value={cardNumber}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 16) setCardNumber(value);
      }}
      maxLength={16}
      inputMode="numeric"
      style={{ width: '100%', marginBottom: '12px' }}
    />

    <div className="form-row" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        className="form-control"
        placeholder="MM/YY"
        value={expiry}
        onChange={(e) => {
          let value = e.target.value.replace(/[^0-9]/g, '');
          if (value.length > 4) value = value.slice(0, 4);
          if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
          setExpiry(value);
        }}
        maxLength={5}
        inputMode="numeric"
        style={{ flex: 1 }}
      />
      <input
        type="text"
        className="form-control"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, '');
          if (value.length <= 3) setCvv(value);
        }}
        maxLength={3}
        inputMode="numeric"
        style={{ flex: 1 }}
      />
    </div>

    <p className="total-amount">Total Amount: ${totalAmount}</p>

    <div className="action-buttons">
      <button className="back" onClick={() => setStep(1)}>Back</button>
      <button className="confirm" onClick={handleConfirm}>Confirm</button>
    </div>
  </>
)}

      </div>
    </div>
  );
}
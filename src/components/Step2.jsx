import React, { useState } from 'react'

const emailRegex = /^\S+@\S+\.\S+$/

export default function Step2({ data, update, onNext, onBack }){
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const errors = {
    email: data.email.trim() ? (emailRegex.test(data.email) ? '' : 'Enter a valid email') : 'Email is required',
    password: data.password.length >= 8 ? '' : 'Password must be at least 8 characters',
    confirmPassword: data.confirmPassword === data.password ? '' : 'Passwords do not match'
  }

  const isValid = !errors.email && !errors.password && !errors.confirmPassword

  return (
    <div className="step">
      <h2>Account Details</h2>

      <label>
        Email
        <input
          type="email"
          value={data.email}
          onChange={e => update({ email: e.target.value })}
        />
      </label>
      {errors.email && <div className="error">{errors.email}</div>}

      <label className="pw">
        Password
        <div className="pw-wrap">
          <input
            type={showPassword ? 'text' : 'password'}
            value={data.password}
            onChange={e => update({ password: e.target.value })}
            aria-label="Password"
          />
          <button
            type="button"
            className="eye"
            onClick={() => setShowPassword(s => !s)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3L21 21" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.58 10.58A3 3 0 0 0 13.42 13.42" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.94 12.12A13 13 0 0 1 12 5c5 0 9.27 2.79 11.06 7-1.02 2.43-2.8 4.4-4.95 5.6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </label>
      {errors.password && <div className="error">{errors.password}</div>}

      <label className="pw">
        Confirm Password
        <div className="pw-wrap">
          <input
            type={showConfirm ? 'text' : 'password'}
            value={data.confirmPassword}
            onChange={e => update({ confirmPassword: e.target.value })}
            aria-label="Confirm password"
          />
          <button
            type="button"
            className="eye"
            onClick={() => setShowConfirm(s => !s)}
            aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
            title={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
          >
            {showConfirm ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3L21 21" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.58 10.58A3 3 0 0 0 13.42 13.42" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.94 12.12A13 13 0 0 1 12 5c5 0 9.27 2.79 11.06 7-1.02 2.43-2.8 4.4-4.95 5.6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </label>
      {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

      <div className="nav">
        <button className="btn" onClick={onBack}>Back</button>
        <button className="btn" onClick={onNext} disabled={!isValid}>Next</button>
      </div>
    </div>
  )
}

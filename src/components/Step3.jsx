import React from 'react'

const emailRegex = /^\S+@\S+\.\S+$/

export default function Step3({ data, onBack, onSubmit }){
  const errors = {
    firstName: data.firstName.trim() ? '' : 'First name is required',
    lastName: data.lastName.trim() ? '' : 'Last name is required',
    dob: data.dob.trim() ? '' : 'DOB required',
    email: data.email.trim() ? (emailRegex.test(data.email) ? '' : 'Enter a valid email') : 'Email required',
    password: data.password.length >= 8 ? '' : 'Password must be at least 8 characters',
    confirmPassword: data.confirmPassword === data.password ? '' : 'Passwords do not match'
  }

  const isValid = Object.values(errors).every(e => !e)

  return (
    <div className="step">
      <h2>Review & Submit</h2>

      <div className="review">
        <div><strong>First name:</strong> {data.firstName}</div>
        <div><strong>Last name:</strong> {data.lastName}</div>
        <div><strong>DOB:</strong> {data.dob}</div>
        <div><strong>Email:</strong> {data.email}</div>
      </div>

      {!isValid && <div className="error">Please fix errors in previous steps before submitting.</div>}

      <div className="nav">
        <button className="btn" onClick={onBack}>Back</button>
        <button className="btn" onClick={onSubmit} disabled={!isValid}>Submit</button>
      </div>
    </div>
  )
}

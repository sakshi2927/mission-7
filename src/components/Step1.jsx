import React from 'react'

export default function Step1({ data, update, onNext }){
  const errors = {
    firstName: data.firstName.trim() ? '' : 'First name is required',
    lastName: data.lastName.trim() ? '' : 'Last name is required',
    dob: data.dob.trim() ? '' : 'Date of birth is required'
  }

  const isValid = !errors.firstName && !errors.lastName && !errors.dob

  return (
    <div className="step">
      <h2>Personal Info</h2>

      <label>
        First name
        <input
          type="text"
          value={data.firstName}
          onChange={e => update({ firstName: e.target.value })}
        />
      </label>
      {errors.firstName && <div className="error">{errors.firstName}</div>}

      <label>
        Last name
        <input
          type="text"
          value={data.lastName}
          onChange={e => update({ lastName: e.target.value })}
        />
      </label>
      {errors.lastName && <div className="error">{errors.lastName}</div>}

      <label>
        Date of birth
        <input
          type="date"
          value={data.dob}
          onChange={e => update({ dob: e.target.value })}
        />
      </label>
      {errors.dob && <div className="error">{errors.dob}</div>}

      <div className="nav">
        <button disabled className="btn disabled">Back</button>
        <button className="btn" onClick={onNext} disabled={!isValid}>Next</button>
      </div>
    </div>
  )
}

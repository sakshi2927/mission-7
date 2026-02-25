import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import './wizard.css'

export default function RegistrationWizard(){
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (patch) => setData(prev => ({...prev, ...patch}))

  const handleNext = () => setStep(s => Math.min(3, s+1))
  const handleBack = () => setStep(s => Math.max(1, s-1))

  const handleSubmit = () => {
    console.log('Final registration data:', data)
    setSubmitted(true)
  }

  if(submitted) return (
    <div className="wizard success">
      <h2>Success!</h2>
      <p>Registration completed.</p>
    </div>
  )

  return (
    <div className="wizard">
      <div className="progress-wrap">
        <div className="progress-bar" style={{width: `${(step-1)/2*100}%`}} />
        <div className="progress-steps">Step {step} of 3</div>
      </div>

      {step === 1 && (
        <Step1 data={data} update={update} onNext={handleNext} />
      )}
      {step === 2 && (
        <Step2 data={data} update={update} onNext={handleNext} onBack={handleBack} />
      )}
      {step === 3 && (
        <Step3 data={data} onBack={handleBack} onSubmit={handleSubmit} />
      )}
    </div>
  )
}

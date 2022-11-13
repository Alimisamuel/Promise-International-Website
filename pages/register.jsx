import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import dayjs from 'dayjs';
import Image from 'next/image'
import logo from '../public/logo.png'
import { FormControlLabel, FormLabel, InputLabel, Paper, RadioGroup, StepContent, Typography } from '@mui/material'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField'
import { Container } from '@mui/system'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
const initialValues = {
  id: 0,
  firstName: '',
  middleName: '',
  LastName: '',
  email: '',
}

const getStepContent = (step) => {
  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
  const [level, setLevel] = React.useState('');

  const handleChangeLevel = (event) => {
    setLevel(event.target.value);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  switch (step) {
    case 0:
      return (
        <>
        <div>
            <TextField size="small" label="First Name " fullWidth></TextField>
            <TextField size="small" label="Surname" fullWidth></TextField>
        </div>
        
        
        </>
      )
    case 1:
      return (
        <>
          <TextField
            id="outlined-basic"
            fullWidth
            label=" Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            fullWidth
            label=" Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            fullWidth
            label=" Name"
            variant="outlined"
          />
        </>
      )
    case 2:
      return (
        <>
          <TextField
            id="outlined-basic"
            fullwidth
            label="First Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            fullwidth
            label="First Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            fullwidth
            label="First Name"
            variant="outlined"
          />
        </>
      )
    default:
      return 'unknown step'
  }
}

const register = () => {
  const [activeStep, setActiveStep] = useState(0)
  const nextStep = () => {
    setActiveStep((currentStep) => currentStep + 1)
  }
  const prevStep = () => {
    if (activeStep !== -1) setActiveStep((currentStep) => currentStep - 1)
  }
  return (
    <>
      <div className="register_container">
        <div className={styles.left}>
          <div>
            <Image src={logo} width="160" height="160" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: '600',
                fontSize: '30px',
                color: 'white',
                marginBottom: '30px',
              }}
            >
              Promise Int'l School
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: '12px', color: 'white', textAlign: 'center' }}
            >
              welcome to the new world of education, where your dreams are being
              carved{' '}
            </Typography>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <p>Go back ho</p>
          </div>
          <Container >
            <Paper sx={{ p: 5 }}>
              <Stepper alternativeLabel activeStep={activeStep}>
                <Step sx={{ fontSize: '8px' }}>
                  <StepLabel>Student details</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Parant/Guardian details</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Upload documents</StepLabel>
                </Step>
              </Stepper>

              {activeStep === 3 ? (
                <Typography variant="h3" align="center">
                  Thanks
                </Typography>
              ) : (
                <>
                  <form>{getStepContent(activeStep)}</form>
                  <Button
                  variant='outlined'
                    onClick={() => prevStep()}
                    disabled={activeStep === 0}
                  >
                    <ArrowCircleLeftIcon />
                    Previous
                  </Button>
                  <Button 
                  variant='outlined'
                  onClick={() => nextStep()}>
                    {activeStep === 2 ? 'Submit' : 'Next '}
                    <ArrowCircleRightIcon />
                  </Button>
                </>
              )}
            </Paper>
          </Container>
        </div>
      </div>
    </>
  )
}

export default register

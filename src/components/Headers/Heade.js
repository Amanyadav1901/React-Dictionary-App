import React from 'react'
import './Header.css'
import { TextField, ThemeProvider, createTheme, MenuItem } from '@mui/material'

const Header = () => {

  const darkTheme = createTheme({
    palette: {
      primary:{
        main:'#fff',
      },
      mode: 'dark',
    },
  });


  return (
    <div className='header'>
        <span className='title'>
            Advanced Learners
        </span>
        <div className='inputs'>
          <ThemeProvider theme={darkTheme}>
          <TextField id="outlined-basic" label="Search Here..." variant="outlined" />
          <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </ThemeProvider>
        </div>
    </div>
  )
}

export default Header
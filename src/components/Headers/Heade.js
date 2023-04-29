import React from 'react'
import './Header.css'
import { TextField, ThemeProvider, createTheme, MenuItem } from '@mui/material'
import categories from "../Data/category";


const Header = ({setCategory , category , word, setWord}) => {

  const darkTheme = createTheme({
    palette: {
      primary:{
        main:'#fff',
      },
      mode: 'dark',
    },
  });

  const handleChange = (Language) => {
    setCategory(Language);
    setWord("");
  }
  return (
    <div className='header'>
        <span className='title'>
            {word ? word : "Advanced Learners"}
        </span>
        <div className='inputs'>
          <ThemeProvider theme={darkTheme}>
          <TextField className='search' label="Search Here..." variant="outlined" 
          value={word} onChange={(e)=> setWord(e.target.value)}/>
          <TextField
          className='select'
          select
          label="choose Language"
          value={category}
          onChange={(e)=>handleChange(e.target.value)}
          variant="standard"
        >
          {
            categories.map((option) => (
              <MenuItem key={option.label} value={option.value}>
            {option.value}
          </MenuItem>
            ))
          }
        
        </TextField>
        </ThemeProvider>
        </div>
    </div>
  )
}

export default Header
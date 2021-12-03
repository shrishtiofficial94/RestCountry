import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import SearchIconWrapper from './searchIconWrapper';
import Search from './search';
import StyledInputBase from './styledInputBase';
import config from '../config/config';
import axios from 'axios';
import CountryList from '../countryList/countryList';
import { getByDisplayValue } from '@testing-library/dom';

 const SearchCountry=()=>{

  const [countryList, setCountryList ] = useState([]);
  const [value , setValue] = useState(null);


  const handleOnChange= async (e)=>{
    let response = await axios.get(`https://restcountries.com/v3.1/name/${e.target.value}`);
      if(response.status === 200){
          setCountryList(response.data);
          setValue(e.target.value);
      }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>handleOnChange(e)}
            />
          </Search>
        </Toolbar>
      </AppBar>
      {console.log("countryList>",countryList)}
      {countryList.length > 0  ? <CountryList listData={countryList} queryvalue={value}/> : ""}
    </Box>
  );
}

export default SearchCountry;

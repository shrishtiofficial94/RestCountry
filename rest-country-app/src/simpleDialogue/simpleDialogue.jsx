import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import config from '../config/config';
import axios from 'axios';

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [weatherData , setweatherData] = useState([]);

  const handleClose = () => {
    onClose(selectedValue);
  };

 
  useEffect(() => {
   let response =  axios.get(config.weather_url+`/current?access_key=${config.weather_key}&query=${selectedValue}`);
   //setweatherData()
  },[selectedValue])

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {/* {emails.map((email) => (
          <ListItem key={email}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))} */}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
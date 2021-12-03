import React , {useState}from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import SimpleDialog from '../simpleDialogue/simpleDialogue';

const CountryList =(props)=>{

  const [open , setOpen] = useState(false);
  const [selectedValue , setSelectedValue] = useState(false);

  const handleClickOpen = ()=>{
    setOpen(true);
  }

  const handleClose = () =>{
    setOpen(false);
  }
  return (
    <>
    {props?.listData?.map((data,i)=>{
      return(
        <Card key={data} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Country Name :-{data.name.common}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Capital:- {data.capital}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Population:- {data.population}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Latitude / Longitude:- {data.latlng}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Country flag:- {data.flag}
          </Typography>
          <Button variant="outlined" onClick={handleClickOpen}>
           See Weather 
         </Button>
          <SimpleDialog
              selectedValue={props.queryvalue}
              open={open}
              onClose={handleClose}
            />
         
        </CardContent>
      </CardActionArea>
    </Card>
      )
    })}
    
    </>
   
  );
}

export default CountryList;

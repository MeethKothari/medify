import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import blogImage from './assets/blog-image.png';
import doctorImage from './assets/doctor-image.png';


const Blogs = () => {
  return (
    <div style={{textAlign:'center', marginTop:'25px'}}>
    <h4 style={{color:'rgba(42, 167, 255, 1)', fontFamily:'Poppins'}}>Blogs & News</h4>
    <h1 style={{color:'rgba(27, 60, 116, 1)', fontFamily:'Poppins'}}>Read Our Latest News</h1>
    
    
    <div style={{display:'flex',justifyContent:'center', marginTop:'25px', justifyContent:'space-evenly'}}>
    
    
    <Card sx={{ maxWidth: 345, height: 350 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={blogImage}
        title="Home Made Remedy"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Medical | March 31, 2022
        </Typography>
        <Typography gutterBottom variant="p" component="div">
        6 Tips To Protect Your Mental Health When You’re Sick
        When You’re Sick
        </Typography>
        <Typography gutterBottom variant="p" component="div" style={{display:'flex', alignItems:'center', columnGap:'10px'}}>
        <img src={doctorImage} alt='Rebecca Lee'/>
        <h3>Rebecca Lee</h3>
        </Typography>
      </CardContent>
    </Card>

    
    <Card sx={{ maxWidth: 345, height: 350 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={blogImage}
        title="Home Made Remedy"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Medical | March 31, 2022
        </Typography>
        <Typography gutterBottom variant="p" component="div">
        6 Tips To Protect Your Mental Health When You’re Sick
        When You’re Sick
        </Typography>
        <Typography gutterBottom variant="p" component="div" style={{display:'flex', alignItems:'center', columnGap:'10px'}}>
        <img src={doctorImage} alt='Rebecca Lee'/>
        <h3>Rebecca Lee</h3>
        </Typography>
      </CardContent>
    </Card>

    
    <Card sx={{ maxWidth: 345, height: 350 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={blogImage}
        title="Home Made Remedy"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Medical | March 31, 2022
        </Typography>
        <Typography gutterBottom variant="p" component="div" style={{color:'rgba(27, 60, 116, 1)'}}>
        6 Tips To Protect Your Mental Health When You’re Sick
        When You’re Sick
        </Typography>
        <Typography gutterBottom variant="p" component="div" style={{display:'flex', alignItems:'center', columnGap:'10px'}}>
        <img src={doctorImage} alt='Rebecca Lee'/>
        <h3>Rebecca Lee</h3>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}


export default Blogs;
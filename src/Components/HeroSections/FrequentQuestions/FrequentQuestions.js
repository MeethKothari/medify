import React from 'react';
import './FrequentQuestions.css';
import {ReactComponent as FooterImage} from '../../../Assets/footer-image.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';

const FrequentQuestions = () => {
return (
  <div style={{backgroundColor:'#ffff'}}>
    <div className='frequentQuestions-heading'>
      <h3>Get Your Answer</h3>
      <h1>Frequently Asked Questions</h1>
    </div>
    
    
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
    <FooterImage/>
    <div style={{width:'25vw', border:'none'}}>
      <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<AddIcon className='accordianButton'/>}
          aria-controls="panel1-content"
          id="panel1-header" 
          className='accordianTitle' 
          >
          Why choose our medical for your family?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<AddIcon className='accordianButton'/>}
          aria-controls="panel1-content"
          id="panel1-header" 
          className='accordianTitle' 
          >
          Why we are different from others?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<AddIcon className='accordianButton'/>}
          aria-controls="panel1-content"
          id="panel1-header" 
          className='accordianTitle'
          >
          Trusted & experience senior care & love
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
        <AccordionSummary
          expandIcon={<AddIcon className='accordianButton'/>}
          aria-controls="panel2-content"
          id="panel2-header" 
          className='accordianTitle'
          >
          How to get appointment for emergency cases ?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  {/* <div>
  <DownloadTab/>
  <LinksTab/>
  </div> */}
</div>
  )
}


export default FrequentQuestions;
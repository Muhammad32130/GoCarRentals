import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Accord({Answer, question}) {
  return (
    <div className='mb-6'> 
      <Accordion className='accordi'>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography className='typo' variant="h6">{question}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography className='typo'>
{Answer}
      </Typography>
    </AccordionDetails>
  </Accordion>
  </div>
  )
}

export default Accord
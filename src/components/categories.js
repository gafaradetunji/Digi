import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Categories = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return(
            <div className='site-category mt-3 col-xl-3'>
                <h3 className=''>Categories</h3>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <img src={require('../images/electrical_services.jpg')} alt='icon living' className='accordion-img' />
          </Typography>
          <Typography>
            <span className='accordion-span'>Electrical Products</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
                <li><Link to={`/electrical`} className='elect-a flex justify-between'>Building Materials <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/electrical`} className='elect-a flex justify-between'>Computers and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/electrical`} className='elect-a flex justify-between'>Phone and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/electrical`} className='elect-a flex justify-between'>Solar Pannels <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/electrical`} className='elect-a flex justify-between'>Others <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
            </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}><img src={require('../images/science.jpg')} alt='icon living' className='accordion-img' /></Typography>
          <Typography>
            <span className='accordion-span'>Chemical Products</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
                <li><Link to={`/chemical`} className='elect-a flex justify-between'>Building Materials <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/chemical`} className='elect-a flex justify-between'>Computers and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/chemical`} className='elect-a flex justify-between'>Phone and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/chemical`} className='elect-a flex justify-between'>Solar Pannels <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/chemical`} className='elect-a flex justify-between'>Others <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
            </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <img src={require('../images/agriculture.jpg')} alt='icon living' className='accordion-img' />
          </Typography>
          <Typography>
            <span className='accordion-span'>Farm Products</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
                <li><Link to={`/farm`} className='elect-a flex justify-between'>Building Materials <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/farm`} className='elect-a flex justify-between'>Computers and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/farm`} className='elect-a flex justify-between'>Phone and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/farm`} className='elect-a flex justify-between'>Solar Pannels <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/farm`} className='elect-a flex justify-between'>Others <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
            </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}><img src={require('../images/precision_manufacturing.jpg')} alt='icon living' className='accordion-img' /></Typography>
          <Typography>
            <span className='accordion-span'>Mechanical Products</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
                <li><Link to={`/mechanical`} className='elect-a flex justify-between'>Building Materials <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/mechanical`} className='elect-a flex justify-between'>Computers and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/mechanical`} className='elect-a flex justify-between'>Phone and accessories <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/mechanical`} className='elect-a flex justify-between'>Solar Pannels <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
                <li><Link to={`/mechanical`} className='elect-a flex justify-between'>Others <ExpandMoreIcon className='rotate-[276deg]'/></Link></li>
            </ul>
        </AccordionDetails>
      </Accordion>
    </div>         
    )
}
export default Categories

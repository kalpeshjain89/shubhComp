import React from 'react';
import "../../styles/Footer.scss";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';

const socialMediaActions = [
  { icon: <FacebookIcon />, name: 'Facebook', url: 'https://www.facebook.com/shubhamcomputersbynaresh' },
  { icon: <WhatsAppIcon />, name: 'WhatsApp', url: 'https://wa.me/917021531651?text=' },
  { icon: <InstagramIcon />, name: 'Instagram', url: 'https://www.instagram.com/shubhamcomputersbynaresh/?igshid=YmMyMTA2M2Y%3D' },
  { icon: <TelegramIcon />, name: 'Telegram', url: 'https://t.me/+RRCFqO62AcP8UUpR' },
];

function Footer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div style={{background: '#242424'}}>
    <Container maxWidth="xl">
      <div className='footer-wrapper'>
        <div className='footer-links'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://m.facebook.com/1171466706257889/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />Facebook
            </a>
            {/* <a href="//api.whatsapp.com/send?phone=919322249976&text=https://www.shubhamcomputers.com/%0A%0AI'm interested in your products and I have a few questions. Can you help?" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a> */}
            
            <a href="https://wa.me/917021531651?text=" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
            <a href="https://instagram.com/shubhamcomputersbynaresh?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />Instagram
            </a>
            <a href="https://t.me/+RRCFqO62AcP8UUpR" target="_blank" rel="noopener noreferrer">
              <TelegramIcon />Telegram
            </a>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <a href="tel:9322249976">
              <CallIcon /> +91 9322249976
            </a>
            <a href="tel:9222785781">
              <CallIcon /> +91 9222785781
            </a>
            <a href="mailto:shubhamcomputers@hotmail.com?subject=Inquiry%20about%20Shubham%20Computers%20Products%20&body=Hi, %0D%0A%0D%0A">
              <EmailIcon /> shubhamcomputers@hotmail.com
            </a>
          </div>
        </div>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img className="branding-logo" src={Logo} alt="logo" />
              Shubham Computers
            </Link>
          </div>
          <div className="website-rights">Copyright © 2015-<span>{new Date().getFullYear()}</span> All Rights Reserved</div>
        </div>
        {/* <Fab color="success" component="a" href="//api.whatsapp.com/send?phone=919322249976&text=https://www.shubhamcomputers.com/%0A%0AI'm interested in your products and I have a few questions. Can you help?" aria-label="WhatsApp" className="fabButton" target="_blank">
        <WhatsAppIcon />
      </Fab> */}
        <SpeedDial
          icon={<ShareIcon />}
          open={open}
          onOpen={handleOpen}
          onClose={handleOpen}
          ariaLabel="Social media menu"
          className="fabButton"
          color="primary"
        >
          {socialMediaActions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              href={action.url}
              component="a"
              target="_blank"
            />
          ))}
        </SpeedDial>
      </div>
    </Container>
    </div>
  );
}

export default React.memo(Footer);

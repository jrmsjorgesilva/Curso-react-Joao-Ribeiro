import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SocialWidget = () => {

  const withLink = (to, children) => <Link to={to} target='_blank'>{children}</Link>

  const actions = [
    { icon: withLink('facebook.com', <FaFacebook />), name: 'Facebook' },
    { icon: withLink('instagram.com', <FaInstagram />), name: 'Instagram' },
    { icon: withLink('linkedin.com', <FaLinkedin />), name: 'Linkedin' },
    { icon: withLink('www.youtube.com', <FaYoutube />), name: 'Youtube' },
    { icon: withLink('business.whatsapp.com', <FaWhatsapp />), name: 'Whatsapp' },
  ];

  return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
  );
}

export default SocialWidget

import React from 'react';

const Footer = () => {
  return (
    <footer className='footerStyle'>
      <p>&copy; {new Date().getFullYear()} Musify App. All rights reserved.</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </p>
    </footer>
  );
};
export default Footer;
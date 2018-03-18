import React from 'react';
// import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../assets/Footer.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2016 &middot; Hashnode &middot; LinearBytes Inc.</p>
      {/* <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a></p> */}
    </footer>
  );
}

export default Footer;

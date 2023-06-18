import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} by <span><a href="https://krishcodz.github.io/personal_website/" target="_blank" rel="noreferrer">Krishcodz</a></span></p>
    </footer>
  );
}

export default Footer;

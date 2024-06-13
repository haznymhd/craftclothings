import React from "react"
import "./footer.css"

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+94717777668'; // Your provided phone number
    const message = 'Hello, I have a question regarding your services.'; // Customize your message
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>Click the button to chat with me in whatsapp</p>
            </div>
            <button className='btn5' onClick={handleWhatsAppClick}>whatsapp</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logow.png' alt='' />
              <h2>Crafted with Precision and Passion with CraftClothing</h2>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 CraftClothings. Designed By Orea Digital.</span>
      </div>
    </>
  );
}

export default Footer;

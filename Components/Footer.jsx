import React from 'react';

function Footer() {
  return (
    <>
      <footer className="text-white px-8 py-6 bg-gray-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Example</h3>
            <p className="mb-2">Example</p>
            <p className="mb-2">123 Example Street, Example City, Example Country</p>
            <p className="mb-2"><button className="hover:text-yellow-400" onClick={() => window.location.href = 'tel:+1514890000'}>1-514-890-0000</button></p>
            <p><button className="hover:text-yellow-400" onClick={() => window.location.href = 'mailto:calinscompagnies@calins.com'}>calinscompagnies@calins.com</button></p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Example</h3>
            <ul>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = '#'}>About Us</button></li>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = '#'}>Delivery Policy</button></li>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = '#'}>Contact Us</button></li>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = '#'}>Our Stores</button></li>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = '#'}>Help</button></li>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = '#'}>Work at Hugs</button></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Example</h3>
            <ul>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = '#'}>My Personal Information</button></li>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = '#'}>My Addresses</button></li>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = '#'}>My Orders</button></li>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = '#'}>My Favorites</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="mb-4">
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = 'tel:+1514890000'}>1-514-890-0000</button></li>
              <li><button className="hover:text-yellow-400" onClick={() => window.location.href = 'mailto:calinscompagnies@calins.com'}>Send mail</button></li>
            </ul>
            <div className="mt-4 icons">
              <button className="mr-2" onClick={() => window.location.href = '#'}><i className="fab fa-facebook fa-2x"></i></button>
              <button className="mr-2" onClick={() => window.location.href = '#'}><i className="fab fa-instagram fa-2x"></i></button>
              <button onClick={() => window.location.href = 'mailto:calinscompagnies@calins.com'}><i className="far fa-envelope fa-2x"></i></button>
            </div>
          </div>
        </div>
        <p className="text-center mt-8">&copy; 2024 - All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;

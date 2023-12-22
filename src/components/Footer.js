import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Shop</h3>
            <ul className="text-gray-400">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Help</h3>
            <ul className="text-gray-400">
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Policy</h3>
            <ul className="text-gray-400">
              <li>Returns Policy</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul className="text-gray-400">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
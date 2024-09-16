import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="w-full bg-[#333333] text-white py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left side - Google Maps and Contact Info */}
        <div className="space-y-6">
          {/* Google Maps Embed */}
          <div className="w-full h-64 md:h-56">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508916!2d144.95373631550403!3d-37.81627977975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57771f8284d6b7a!2sVictoria%20Harbour!5e0!3m2!1sen!2sau!4v1573724916629!5m2!1sen!2sau"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-2xl">Contact Us</h4>
            <p className="text-gray-400 mt-2">
              Vytenio g. 51, Vilnius<br />
              info@seraphinescent.com<br />
              +37064444432
            </p>
          </div>
        </div>

        {/* Right side - Links */}
        <div className="space-y-6 md:flex md:flex-col md:justify-between">
          <div>
            <h4 className="font-bold text-2xl">Important Links</h4>
            <div className="flex flex-col mt-2 space-y-2">
              <Link to="privacy-policy" className="text-gray-400 hover:text-white transition duration-300">
                Privacy Policy
              </Link>
              <Link to="terms" className="text-gray-400 hover:text-white transition duration-300">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Seraphine Scent. Designed by Diego Callegari.
      </div>
    </div>
  );
};

export default Footer;

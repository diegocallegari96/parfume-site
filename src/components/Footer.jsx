import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="w-full bg-[#333333] text-white py-12 px-6">
      {/* Main content area for the footer */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Google Maps Embed */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <div className="w-full h-64">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.654440072004!2d5.698413276592733!3d51.55623520713462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c71963e766917f%3A0x964b3456b453c9c4!2sDiego%20Callegari!5e0!3m2!1sen!2sau!4v1726543789347!5m2!1sen!2sau"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="font-bold text-2xl">Contact Us</h4>
          <p className="text-gray-400 mt-2">
            Wijst 93, Gemert<br />
            diegoocallegari@gmail.com<br />
            +31624728289
          </p>
        </div>

        {/* Links */}
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
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

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Seraphine Scent. Designed by Diego Callegari.
      </div>
    </div>
  );
};

export default Footer;

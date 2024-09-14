import React from 'react';
import bg from '../assets/agebg.jpg'

function RestrictedAccess() {
  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}} className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Restricted Access</h1>
        <p className="mb-6">
          You must be at least 20 years old to enter this site.
          <br />
          ขอโทษครับ คุณต้องมีอายุอย่างน้อย 20 ปีถึงจะสามารถเข้าเว็บไซต์นี้ได้
        </p>
      </div>
    </div>
  );
}

export default RestrictedAccess;

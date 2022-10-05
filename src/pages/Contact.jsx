import React from "react";
import Navbar from "../components/Navbar";
import Greenbelt from "../assets/Greenbelt.png";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className='main'>
      <Navbar />
      <div>
        <img 
          className=''
          src={Greenbelt} 
          alt="" 
        />
        </div>
        <div className='content'>
          <h1 className='mt-20'>Contact Us</h1>
            <form className='opacity-90 h-max' 
              action='https://getform.io/f/7f383f7b-4250-4a39-b280-728f486f7c7c'
              method='POST'
              enctype='multipart/form-data'
            >
              <input className='grid md:grid-cols-2 gap-4 w-full py-2 p-2 text-black mt-4' type='text' name='First Name' placeholder="First Name" />
              <input className='grid md:grid-cols-2 gap-4 w-full py-2 p-2 text-black mt-4' type='text' name='Last Name' placeholder="Last Name" />
              <input className='grid md:grid-cols-2 gap-4 w-full py-2 p-2 text-black mt-4' type='email' name='Email' placeholder="Email" />
              <input className='grid md:grid-cols-2 gap-4 w-full py-2 p-2 text-black mt-4' type='text' name='Phone Number' placeholder="Phone Number" />
              <select name="Issue" className='grid md:grid-cols-2 gap-4 w-full py-2 p-2 text-black mt-4' placeholder="Issues">
                  <option value="Logging into Account">Logging into Account</option>
                  <option value="Payment">Completing Payment</option>
                  <option value="Content">Viewing Content</option>
                  <option value="File Upload">Uploading Files</option>
                  <option value="Other">Other</option>
              </select>
              <textarea className='w-full p-2 text-black mt-4'  name='message' cols='30' rows='10' placeholder='Message' />
              <button className='w-full p-4 text-white rounded-lg shadow px-20 py-3' type='submit'>Submit</button>
          </form>
        </div>
      <Footer />
    </div>
   
  
  );
};

export default Contact;

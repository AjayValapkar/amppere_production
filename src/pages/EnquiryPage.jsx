// src/EnquiryPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import imagePath from '../constant/imagePath';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields');
      return;
    }

    setLoading(true);

    try {
      await axios.post('/api/sendMail', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setSuccess('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setError('Error sending message. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white">
      <div className="bg-gradient-to-t from-black to-gray-800 h-[500px] md:h-[650px] flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-[95%] md:max-w-[800px] px-4">
          <p className="text-lg md:text-3xl text-[#FF0000] font-bold mb-8">Send an enquiry:</p>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full md:w-[600px] h-[30px] md:h-[40px] px-3 py-2 text-white border rounded bg-transparent"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-[600px] h-[30px] md:h-[40px] px-3 py-2 text-white border rounded bg-transparent"
              placeholder="Your Email"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full md:w-[600px] h-[30px] md:h-[40px] px-3 py-2 text-white border rounded bg-transparent"
              placeholder="Your Phone Number"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full md:w-[600px] h-[80px] md:h-[100px] px-3 py-2 text-white border rounded bg-transparent"
              placeholder="Your Message"
            />

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                type="submit"
                className="w-full md:w-[200px] h-[40px] text-base md:text-xl bg-white text-[#AE1B1B] rounded-full hover:bg-[#AE1B1B] hover:text-white transition duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'SEND ENQUIRY'}
              </button>
              <button
                type="button"
                onClick={() => setFormData({ name: '', email: '', phone: '', message: '' })}
                className="w-full md:w-[200px] h-[40px] text-base md:text-xl bg-[#A5A5A5] text-white rounded-full hover:bg-white hover:text-red-600 transition duration-300"
              >
                CLEAR ALL
              </button>
            </div>

          </form>
        </div>
      </div>

      <div className="w-full py-14 md:py-0 bg-black flex justify-center items-center">
        <div className="flex flex-col w-full max-w-[95%] md:max-w-[800px] px-4 md:px-0">
          <p className="text-lg md:text-3xl text-[#FF0000] font-bold mb-4">Locate us:</p>
          <p className="text-white text-sm md:text-lg">
            Shed no. 28/A, 1&2, Survey no. 47, Hi-Tech Industrial Area, Alyali, Tal-Dist.Palghar, Palghar 401404, Maharashtra, India
          </p>
          <a href="https://maps.app.goo.gl/DP5cXrrRg5Awmg2a8?g_st=iw" target="_blank" rel="noopener noreferrer">
            <img src={imagePath.map} alt="Map" className="w-full mt-10 rounded-md" />
          </a>
        </div>
      </div>
    </div>
  );
}

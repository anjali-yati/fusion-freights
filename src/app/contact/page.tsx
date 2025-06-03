"use client"
import React, { useState } from "react";
import { getStrings } from "../components/strings";
import Notification from "../components/Notification";
import Loader from "../components/Loader";
import { useToast } from "../components/ToastContext";

const Contact = () => {
  const strings = getStrings()

  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setData({
      ...data,
      [key]: e.target.value
    })
  }

  const sendMessage = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // <<< prevent page reload
    setLoading(true)
    try {
      const res = await fetch('/api/send-quotation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
      });
      setLoading(false)
      if (res.ok) {
        setData({ email: '', name: '', message: '' }) //Reset form data
        showToast("Your request for quotation was sent successfully!", "success");

      } else {
        showToast("Failed to send email!", "error");
        console.error('Failed to send email');
      }
    } catch (error) {
      setLoading(false)
      showToast("Failed to send email!", "error");
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <section className="py-12 px-4 md:px-0 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto md:flex md:items-center md:space-x-8">
          {/* Left Grid */}
          <div className="md:w-1/2 md:pr-8 md:pl-8">
            <div className="text-center md:text-left">
              <h2 className="text-lg  font-bold text-gray-800">{strings.getInTouchCaps}</h2>
              <p className="mt-4 text-5xl mb-6 text-gray-600">{strings.contactUs}</p>
              <p className="mb-4 text-lg ">
                {strings.inquiries}
              </p>
              <p className="mb-4 text-lg text-gray-700">
                {strings.contactNum}
              </p>
              <p style={{ fontWeight: 'bold', color: '#000', fontFamily: 'Poppins-Bold' }} className="mb-4 font-extrabold text-xl text-gray-700">{strings.email}</p>
            </div>
          </div>

          {/* Right Grid */}
          <div data-aos="flip-right" className="mt-8 md:mt-0 md:w-1/2">
            <div className="bg-white p-12 shadow-md rounded-lg">
              <form>
                <div className="mb-6">
                  <input
                    onChange={(e) => onChangeText(e, 'name')}
                    style={{ borderBottomColor: '#eeeeee' }}
                    type="text"
                    value={data.name}
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border-b-2 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    onChange={(e) => onChangeText(e, 'email')}
                    style={{ borderBottomColor: '#eeeeee' }}
                    type="email"
                    value={data.email}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border-b-2 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    onChange={(e) => onChangeText(e, 'message')}
                    style={{ borderBottomColor: '#eeeeee' }}
                      value={data.message}
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border-b-2 focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    onClick={sendMessage}
                    style={{ background: "#dd5745", color: 'white' }}
                    type="submit"
                    className="w-full py-3 mt-6 md:mt-10 rounded-lg focus:outline-none hover:bg-primary"
                  >
                    {strings.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {loading && <Loader />}

    </>

  );
};

export default Contact;

import React, { useState } from "react";
import Heading from "../../components/Heading";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white opacity-90 flex items-center justify-center z-999">
      <div className="w-16 h-16 border-4 border-t-mgreen-500 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
}

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // await axios.post(`http://localhost:4000/api/send-email`, form);
      await axios.post(`${apiUrl}/api/send-email`, form);
      alert("Email has been sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(form);
      alert("Failed to send the email");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-9 relative w-full h-screen">
      {loading && <LoadingOverlay />}
      <p
        className="absolute text-sm text-gray-400 max-xs:hidden"
        style={{
          transform: "rotate(270deg)",
          transformOrigin: "left",
          bottom: "160px",
          left: "46px",
        }}
      >
        © 2025 by SuyeonJang. All Rights Reserved.
      </p>
      <div className="contact-page absolute top-1/2 lg:w-1/2 w-full">
        <form onSubmit={handleSubmit}>
          <div className="w-full sm:w-2/3 max-lg:m-auto max-sm:px-10 max-xs:p-0">
            <div className="flex items-center w-full gap-3">
              <div className="w-1/2">
                <p className="mb-2">Name</p>
                <input
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-mgreen-600 placeholder-gray-300"
                />
              </div>
              <div className="w-1/2">
                <p className="mb-2">Mail</p>
                <input
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="youremail@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-mgreen-600 placeholder-gray-300"
                />
              </div>
            </div>
            <div className="my-4">
              <p className="mb-2">Message</p>
              <textarea
                rows={5}
                value={form.message}
                onChange={handleChange}
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-mgreen-600 placeholder-gray-300 resize-none align-top"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center my-4 py-3 px-4 rounded-lg bg-mgreen-500 hover:shadow-md cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_171_3)">
                  <path
                    d="M31.1312 0.349995C31.7625 0.787495 32.0937 1.54374 31.975 2.29999L27.975 28.3C27.8812 28.9062 27.5125 29.4375 26.975 29.7375C26.4375 30.0375 25.7937 30.075 25.225 29.8375L17.75 26.7312L13.4687 31.3625C12.9125 31.9687 12.0375 32.1687 11.2687 31.8687C10.5 31.5687 10 30.825 10 30V24.775C10 24.525 10.0937 24.2875 10.2625 24.1062L20.7375 12.675C21.1 12.2812 21.0875 11.675 20.7125 11.3C20.3375 10.925 19.7312 10.9 19.3375 11.2562L6.62499 22.55L1.10624 19.7875C0.443745 19.4562 0.0187448 18.7937 -5.15633e-06 18.0562C-0.0187552 17.3187 0.368745 16.6312 1.00624 16.2625L29.0062 0.262495C29.675 -0.118755 30.5 -0.0812552 31.1312 0.349995Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_171_3">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="ml-2 font-medium text-white">Send</span>
            </button>
            <div className="flex gap-3">
              <a
                target="_blank"
                href="https://github.com/skyejang"
                className="w-1/2 flex items-center text-mgreen-600 py-3 px-4 rounded-lg border border-mgreen-500 hover:shadow-md cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_88_475)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.0116 0C6.26354 0 0 6.30972 0 14.1157C0 20.3554 4.01327 25.6372 9.58073 27.5066C10.2768 27.6472 10.5318 27.2029 10.5318 26.8292C10.5318 26.502 10.5088 25.3803 10.5088 24.2115C6.61115 25.053 5.79949 22.5288 5.79949 22.5288C5.17311 20.8929 4.245 20.4724 4.245 20.4724C2.96929 19.6077 4.33793 19.6077 4.33793 19.6077C5.75303 19.7012 6.49557 21.0567 6.49557 21.0567C7.74804 23.2066 9.76629 22.5991 10.5782 22.2251C10.6941 21.3136 11.0655 20.6827 11.4599 20.3322C8.3512 20.005 5.08047 18.7898 5.08047 13.3677C5.08047 11.8253 5.63687 10.5633 6.51851 9.58188C6.37941 9.2314 5.89213 7.78217 6.6579 5.84251C6.6579 5.84251 7.84097 5.46852 10.5085 7.29145C11.6506 6.98246 12.8284 6.82528 14.0116 6.82396C15.1947 6.82396 16.4007 6.98772 17.5143 7.29145C20.1822 5.46852 21.3653 5.84251 21.3653 5.84251C22.131 7.78217 21.6435 9.2314 21.5044 9.58188C22.4092 10.5633 22.9427 11.8253 22.9427 13.3677C22.9427 18.7898 19.672 19.9814 16.5401 20.3322C17.0506 20.7762 17.4911 21.6174 17.4911 22.9496C17.4911 24.8425 17.4682 26.3617 17.4682 26.8289C17.4682 27.2029 17.7234 27.6472 18.4192 27.5069C23.9867 25.6369 27.9999 20.3554 27.9999 14.1157C28.0229 6.30972 21.7364 0 14.0116 0Z"
                      fill="#35927C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_88_475">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="ml-2 font-medium">Github</span>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/suyeon-jang-95196026a/"
                className="w-1/2 flex items-center text-mgreen-600 py-3 px-4 rounded-lg border border-mgreen-500 hover:shadow-md cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_88_476)">
                    <path
                      d="M25.9273 0H2.06719C0.924219 0 0 0.902344 0 2.01797V25.9766C0 27.0922 0.924219 28 2.06719 28H25.9273C27.0703 28 28 27.0922 28 25.982V2.01797C28 0.902344 27.0703 0 25.9273 0ZM8.30703 23.8602H4.15078V10.4945H8.30703V23.8602ZM6.22891 8.67344C4.89453 8.67344 3.81719 7.59609 3.81719 6.26719C3.81719 4.93828 4.89453 3.86094 6.22891 3.86094C7.55781 3.86094 8.63516 4.93828 8.63516 6.26719C8.63516 7.59062 7.55781 8.67344 6.22891 8.67344ZM23.8602 23.8602H19.7094V17.3633C19.7094 15.8156 19.682 13.8195 17.5492 13.8195C15.3891 13.8195 15.0609 15.5094 15.0609 17.2539V23.8602H10.9156V10.4945H14.8969V12.3211H14.9516C15.5039 11.2711 16.8602 10.1609 18.8781 10.1609C23.0836 10.1609 23.8602 12.9281 23.8602 16.5266V23.8602V23.8602Z"
                      fill="#35927C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_88_476">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="ml-2 font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className="contact-heading absolute bottom-9 flex items-baseline justify-between flex-col md:flex-row md:gap-y-0 gap-y-3">
        <Heading as="h1" color="mgreen" text="CONTACT." outline={true} />
        <div className="md:w-1/2 w-full h-4 bg-mgreen-500" />
      </div>
    </div>
  );
};
export default ContactPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NotificationBar from "./NotificationBar";

const Contact = () => {
  const server_url = import.meta.env.VITE_SERVER_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("");
  const [showNotification, setShowNotification] = useState(false)

  const [formValue, setFormValue] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleShowNotification = () => {
setShowNotification(true)

setTimeout(() => {
  setShowNotification(false)
}, 2000);
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${server_url}/send-message`,
        formValue
      );
      if (response.data?.success) {
        handleShowNotification()
        setNotificationMessage("Message sent successfully!");
        setNotificationType("success");
      }
    } catch (error) {
      console.log("error : ", error);
      handleShowNotification()
      setNotificationMessage(
        error?.response?.data?.message || "Something went wrong"
      );
      setNotificationType("error");
    } finally {
      setFormValue({fullname: '', email: '', message: ''})
      setIsLoading(false);
    }
  };

  return (
    <div className=" text-white py-12 px-4 sm:px-6 lg:px-8 mb-9">
    {showNotification && (
      <NotificationBar message={notificationMessage} type={notificationType} />
    )}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-sm w-fit m-auto bg-white font-bold text-black text-center py-1 px-2 rounded">
          Contact
        </h1>
        <div className=" mt-3">
          <p className="text-xl font-sans">
            Wanna connect with me? Drop me a message on my{" "}
            <Link
              to="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </Link>
            <br />
            See you there✨
          </p>
        </div>

        <form className=" mt-10" onSubmit={handleSendMessage}>
          <div className="mb-6">
            <label
              htmlFor="fullname"
              className="block text-sm font-semibold text-gray-200 mb-2"
            ></label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              value={formValue.fullname}
              onChange={handleChangeInput}
              disabled={isLoading}
              className="w-full px-4 py-2 bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 resize-none"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-200 mb-2"
            ></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isLoading}
              value={formValue.email}
              onChange={handleChangeInput}
              className="w-full px-4 py-2  bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 resize-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-200 mb-2"
            ></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formValue.message}
              onChange={handleChangeInput}
              disabled={isLoading}
              required
              className="w-full px-4 py-2  bg-transparent text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

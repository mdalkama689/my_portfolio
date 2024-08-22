import React from 'react';

const NotificationBar = ({ message, type }) => {
  if (!message) return null;

  return (
    <div
    className={`fixed top-2 left-1/2 transform -translate-x-1/2 text-base font-normal px-4 py-2 rounded-lg  text-white ${type === 'success' ? 'bg-black border border-gray-200' : 'bg-red-500'} shadow-lg`}
  >
    <div className="flex items-center justify-center">
      <span>{message}</span>
    </div>
  </div>
  );
};

export default NotificationBar;

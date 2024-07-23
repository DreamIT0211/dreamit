import React from 'react';

const TextComponent = ({ imageUrl, text }) => {
    return (
        <div className="relative group">
          <img
            className="w-full h-full object-cover rounded-lg transition duration-500 ease-in-out group-hover:opacity-75"
            src={imageUrl}
            alt={text}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-0 group-hover:opacity-75 transition duration-500 ease-in-out">
            <p className="text-white text-center font-bold">{text}</p>
          </div>
        </div>
      );
};

export default TextComponent;
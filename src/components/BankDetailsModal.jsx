// src/components/BankDetailsModal.jsx

import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const BankDetailsModal = ({ isOpen, onClose }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Copied to clipboard: ${text}`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative m-2 w-auto md:w-1/3 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-400">Bank Details</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 transition duration-300 ease-in-out hover:text-red-700"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div className="mt-4 text-justify">
          <p className="mt-2">
            <span className="font-bold">Account Holder:</span>
            <span
              onClick={() =>
                copyToClipboard("DREAM IT INFOTECH PRIVATE LIMITED")
              }
              className="cursor-pointer transition duration-300 ease-in-out hover:text-orange-700"
            >
              {" "}
              DREAM IT INFOTECH PRIVATE LIMITED
            </span>
          </p>
          <p>
            <span className="font-bold">Account Number:</span>
            <span
              onClick={() => copyToClipboard("50200091802054")}
              className="cursor-pointer transition duration-300 ease-in-out hover:text-orange-700"
            >
              {" "}
              50200091802054
            </span>
          </p>
          <p>
            <span className="font-bold">IFSC:</span>
            <span
              onClick={() => copyToClipboard("HDFC0000183")}
              className="cursor-pointer transition duration-300 ease-in-out hover:text-orange-700"
            >
              {" "}
              HDFC0000183
            </span>
          </p>
          <p>
            <span className="font-bold">Branch:</span>
            <span
              onClick={() => copyToClipboard("ANAND - GUJARAT")}
              className="cursor-pointer transition duration-300 ease-in-out hover:text-orange-700"
            >
              {" "}
              ANAND - GUJARAT
            </span>
          </p>
          <p>
            <span className="font-bold">Account Type:</span>
            <span
              onClick={() => copyToClipboard("CURRUNT")}
              className="cursor-pointer transition duration-300 ease-in-out hover:text-orange-700"
            >
              {" "}
              CURRUNT
            </span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

BankDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BankDetailsModal;

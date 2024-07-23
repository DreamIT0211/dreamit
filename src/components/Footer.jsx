import React from "react";
import { Typography } from "@material-tailwind/react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../assets/footer/logo.svg";
import qr from "../assets/footer/qr.jpg";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: FaLinkedin,
    hoverColor: "text-blue-500",
    underlineColor: "bg-blue-500",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dreamitinfotech0211/",
    icon: FaInstagram,
    hoverColor: "text-pink-600",
    underlineColor: "bg-pink-600",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Dream-IT-Infotech/61554146165293/?mibextid=ZbWKwL",
    icon: FaFacebook,
    hoverColor: "text-blue-900",
    underlineColor: "bg-blue-900",
  },
];

const Footer = () => {
  return (
    <div className="bg-black py-6 px-4 sm:px-10">
      <div className="flex flex-col sm:flex-row justify-between items-center md:pl-10 md:pr-10 pl-0 pr-0">
        <div className="text-white text-center sm:text-left mb-4 sm:mb-0 md:ml-10 ml-0">
          <span className="font-bold"> Address:</span>
          <br />{" "}
          <a
            href="https://www.google.com/maps/place/Dream+IT+Infotech+Pvt.+Ltd./@22.5564558,72.9618899,17z/data=!3m1!4b1!4m6!3m5!1s0x395e4f5e3996f535:0xc433d069f66e687f!8m2!3d22.5564558!4d72.9644648!16s%2Fg%2F11vr04dxxm?entry=ttu"
            target="_blank"
          >
            Dream IT Infotech Pvt. Ltd.
            <br />
            <span className="transition duration-700 ease-in-out hover:text-cyan-400">
              500, Kishor Plaza, Station Road, Anand-388001.
            </span>
          </a>
        </div>
        <div className="text-white text-center sm:text-left mb-4 sm:mb-0">
          <span className="font-bold"> Phone:</span>
          <br /> Vipul Patel{" "}
          <span className="transition duration-700 ease-in-out hover:text-cyan-400">
            <a href="tel:+91 89057 52287">+91 89057 52287</a>
          </span>{" "}
          <br /> Rohan Patel{" "}
          <span className="transition duration-700 ease-in-out hover:text-cyan-400">
            <a href="tel:+91 97730 32402">+91 97730 32402</a>
          </span>
        </div>
        <div className="text-white text-center sm:text-left md:mr-24 mr-0">
          <span className="font-bold"> Email:</span> <br />
          <span className="transition duration-700 ease-in-out hover:text-cyan-400">
            <a href="mailto:support@dreamitinfotech.in">
              support@dreamitinfotech.in
            </a>
          </span>
        </div>
      </div>
      <div className="mt-6 mb-5">
        <hr className="border-white" />
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-64 space-y-4 sm:space-y-0 items-center">
        <img
          src={logo}
          alt="white"
          className="h-36 w-36 mt-4 hidden sm:block"
        />
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mb-4 text-white">
            <h2 className="text-lg font-semibold select-none">
              STAY IN THE LOOP
            </h2>
            <p className="text-2xl transition duration-300 ease-in-out hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              <span className="text-white select-none">Follow </span>{" "}
              #DreamITLife
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col items-center group transition duration-700"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white transition duration-700 ${
                    link.name === "LinkedIn"
                      ? "group-hover:text-blue-500"
                      : link.name === "Instagram"
                      ? "group-hover:text-pink-600"
                      : "group-hover:text-blue-900"
                  }`}
                >
                  <link.icon className={`w-8 h-8`} />
                </a>
                <span
                  className={`text-white transition duration-700 relative group-hover:${link.hoverColor}`}
                >
                  {link.name}
                  <span
                    className={`block absolute bottom-0 left-1/2 w-0 h-0.5 ${link.underlineColor} transition-all duration-700 group-hover:w-full group-hover:left-0`}
                  ></span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <img src={qr} alt="qr" className="h-36 w-36 mt-4 hidden sm:block" />
      </div>
      <div className="flex justify-center items-center mt-5 mb-4 md:hidden">
        <a href="https://qr-codes.io/q2uzNE" target="_blank" rel="noopener noreferrer">
          <img src={qr} alt="qr" className="h-36 w-36" />
        </a>
      </div>

      <Typography
        variant="small"
        className="-mb-1 mt-3 text-center font-normal text-white md:mb-0"
      >
        &copy; {currentYear}{" "}
        <span className="text-cyan-300 transition duration-700 hover:text-cyan-600">
          <a href="https://www.dreamitinfotech.in/">
            DreamIT Infotech Private Limited
          </a>
          .
        </span>{" "}
        All Rights Reserved.
      </Typography>
    </div>
  );
};

export default Footer;

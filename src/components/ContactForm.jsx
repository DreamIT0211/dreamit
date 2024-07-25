import React, { useRef, useState, useEffect } from "react";
import {
  Input,
  Textarea,
  Button,
  Card,
  CardBody,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import CompanyMap from "./CompanyMap";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopover, setShowPopover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.to_name) {
      newErrors.to_name = "Name is required.";
    }

    if (!formData.from_name) {
      newErrors.from_name = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.from_name)) {
      newErrors.from_name = "Email is invalid.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid.";
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm(
          "service_ehvfkxi",
          "template_hw8qzt6",
          form.current,
          "nafr6AhBQPVivlgEB"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setFormData({ to_name: "", from_name: "", message: "", phone: "" });
            setShowPopover(false); // Hide the popover on successful submit
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      setErrors(formErrors);
      setShowPopover(true);
      setTimeout(() => setShowPopover(false), 3000); // Hide after 3 seconds
    }
  };

  return (
    <>
      <div className="h-auto w-full mt-4 md:mt-0 lg:mt-0">
        <div className="h-auto w-full mt-10">
          <div className="relative h-auto min-h-[500px] w-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-auto min-h-[500px] w-full relative z-0">
              <div className="hidden md:block shadow-lg bg-gradient-to-r from-blue-300 to-blue-500 h-[700px] w-1/2 rounded-[150px] rotate-45 absolute -mr-[290px] mt-[50px] right-0 bottom-0 top-0"></div>
              <div className="hidden md:block shadow-lg bg-gradient-to-r from-orange-300 to-red-400 h-[400px] w-[400px] rounded-[75px] rounded-tl-none rotate-45 absolute -mr-[200px] mt-[200px] right-0"></div>
            </div>
            <div className="absolute inset-0 mt-5 text-white text-center text-3xl font-bold">
              Contact Us
            </div>
            <div className="absolute inset-1 flex flex-col md:flex-row items-center justify-center space-x-4">
              <div className="hidden md:block h-96 w-96 rotate-0 rounded-3xl bg-white overflow-hidden transition duration-700 ease-in-out hover:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] mb-4 md:mb-0 md:mr-[140px]">
                <CompanyMap />
              </div>
              <Card className="h-auto md:h-96 w-11/12 md:w-1/3 bg-transparent border-black hover:border-2 text-black transition duration-700 ease-in-out hover:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]">
                <CardBody className="flex flex-col space-y-4">
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col space-y-4"
                  >
                    <Input
                      type="text"
                      placeholder="Full Name"
                      className="!border !border-black bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                      name="to_name"
                      value={formData.to_name}
                      onChange={handleChange}
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="!border !border-black bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="!border !border-black bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <Textarea
                      placeholder="Message"
                      className="!border !border-black bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <Popover
                      placement={isMobile ? "bottom" : "left-end"}
                      open={showPopover}
                      handler={() => setShowPopover(!showPopover)}
                    >
                      <PopoverHandler>
                        <Button
                          type="submit"
                          className="bg-blue-500 text-white shadow-xl transition duration-500 ease-in-out hover:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)]"
                          ripple={true}
                        >
                          Submit
                        </Button>
                      </PopoverHandler>
                      <PopoverContent>
                        {Object.keys(errors).map((error, index) => (
                          <div key={index} className="text-red-500">
                            {errors[error]}
                          </div>
                        ))}
                      </PopoverContent>
                    </Popover>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaServer,
  FaCode,
  FaMobileAlt,
  FaChalkboardTeacher,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-white" />,
    title: "Custom Software Development",
    description:
      "Our team develops tailor-made software solutions to streamline your business processes, ensuring efficiency and scalability. Partner with us to bring your unique software vision to life.",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-white" />,
    title: "E-Commerce Development",
    description:
      "We create robust eCommerce platforms with intuitive user interfaces and secure payment systems to enhance your online retail business. Transform your eCommerce experience with our expertise.",
  },
  {
    icon: <FaServer className="text-4xl text-white" />,
    title: "Cloud Solutions",
    description:
      "Leverage the power of the cloud with our comprehensive solutions. We offer cloud migration, management, and optimization services to enhance your business’s agility and performance.",
  },
  {
    icon: <FaCode className="text-4xl text-white" />,
    title: "Full Stack Development",
    description:
      "Our full stack development services cover both frontend and backend, ensuring a seamless integration and robust performance for your web applications. Elevate your digital presence with our expertise.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-white" />,
    title: "Mobile App Development",
    description:
      "We specialize in creating high-quality mobile applications that provide a superior user experience on both Android and iOS platforms. Enhance your mobile strategy with our innovative solutions.",
  },
  {
    icon: <FaSearch className="text-4xl text-white" />,
    title: "SEO",
    description:
      "Boost your website's visibility with our SEO services, including keyword optimization, quality content, and technical enhancements to drive organic traffic and improve rankings.",
  },
  {
    icon: <FaBullhorn className="text-4xl text-white" />,
    title: "Digital Marketing",
    description:
      "Promote your products with our Digital Marketing services using content marketing, social media, PPC, email, and influencer partnerships to engage your audience and drive conversions.",
  },  
  {
    icon: <FaChalkboardTeacher className="text-4xl text-white" />,
    title: "Professional Training",
    description:
      "Empower your team with our professional training programs. We offer specialized training in software development, IT project management, and emerging technologies to boost your team’s skills and productivity.",
  },
];

const Services = () => {
  return (
    <>
      <div className="flex justify-center items-center md:-mt-10 lg:-mt-10 mt-0">
        <h1 className="text-center text-3xl font-bold mb-8">Our Services</h1>
      </div>
      <div className="container mx-auto p-6 lg:p-12 bg-transparent">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {services.map((service) => (
            <Card
              className="transition-all duration-700 ease-in-out border-2 border-transparent hover:border-cyan-500 hover:shadow-2xl hover:scale-105 rounded-lg"
              key={service.title}
            >
              <CardHeader
                color="cyan"
                className="relative h-24 flex items-center justify-center"
              >
                {service.icon}
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  {service.title}
                </Typography>
                <Typography className="text-lg">
                  {service.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

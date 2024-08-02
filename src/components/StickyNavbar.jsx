import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { logo } from "../assets";
import classNames from "classnames";
import {
  Navbar,
  Collapse,
  Typography,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { GrTechnology } from "react-icons/gr";
import BankDetailsModal from "./BankDetailsModal";

const navLinks = [
  { id: "home", title: "Home" },
  { id: "services", title: "Services" },
  { id: "work", title: "Our Work" },
  { id: "about", title: "About Us" },
  { id: "technologies", title: "Technologies" },
  { id: "team", title: "Our Team" },
  { id: "contactus", title: "Contact Us" },
  { id: "bank", title: "Bank Details" },
];

const navStyles = {
  navbar: {
    bg: "bg-white",
    text: "text-black md:text-black",
    highlight: "bg-white",
    highlightText: "text-gray-900",
  },
  menuItem: {
    base: "flex items-center gap-3 lg:rounded-md transition duration-500 ease-in-out hover:bg-white hover:text-cyan-400",
    highlight: "bg-blue-50 rounded-md text-cyan-400",
    text: "text-gray-700",
  },
};

function NavList({ selectedItem, handleSelect, handleBankClick }) {
  return (
    <ul className="mt-2 mb-2 mr-16 p-3 md:p-0 lg:p-0 flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navLinks.map((navLink) => {
        const isSelected = selectedItem === navLink.id;
        return (
          <Typography
            key={navLink.id}
            as="a"
            href={navLink.id !== "bank" ? `#${navLink.id}` : "#"}
            variant="small"
            className={`font-bold ${navStyles.navbar.text}`}
            onClick={(e) => {
              e.preventDefault();
              if (navLink.id === "bank") {
                handleBankClick();
              } else {
                handleSelect(navLink.id);
              }
            }}
          >
            <MenuItem
              key={navLink.id}
              className={classNames(
                navStyles.menuItem.base,
                isSelected ? navStyles.menuItem.highlight : ""
              )}
            >
              {navLink.title}
            </MenuItem>
          </Typography>
        );
      })}
    </ul>
  );
}

const StickyNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [isUserSelect, setIsUserSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState("home");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const location = useLocation();
  const sectionRefs = useRef({});

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  const handleSelect = useCallback(
    (id) => {
      setIsUserSelect(true);
      setSelectedItem(id);
      setIsNavOpen(false); // Close the navigation menu
      setTimeout(() => {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
        });
      }, 0);
    },
    [setIsUserSelect, setSelectedItem, setIsNavOpen]
  );

  const handleBankClick = () => {
    setIsBankModalOpen(true);
    setIsNavOpen(false); // Close the navigation menu
  };

  const handleCloseBankModal = () => {
    setIsBankModalOpen(false);
  };

  useEffect(() => {
    const path = location.pathname.substring(1);
    if (path === "") {
      setSelectedItem("home");
    } else {
      const currentNavItem = navLinks.find((navLink) => navLink.id === path);
      if (currentNavItem) {
        setSelectedItem(currentNavItem.id);
      } else {
        setSelectedItem(null);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.keys(sectionRefs.current).forEach((key) => {
      const section = document.getElementById(key);
      if (section) {
        sectionRefs.current[key] = section;
        observer.observe(section);
      }
    });

    return () => {
      Object.keys(sectionRefs.current).forEach((key) => {
        const section = sectionRefs.current[key];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (currentSection && !isUserSelect) {
      setSelectedItem(currentSection);
    }
  }, [currentSection, isUserSelect]);

  useEffect(() => {
    if (isUserSelect) {
      setIsUserSelect(false);
    }
  }, [selectedItem]);

  return (
    <div className="fixed top-0 left-0 flex flex-col w-full z-50">
      <Navbar
        className={classNames(
          `w-full max-w-full z-30 border-none -p-4 ${navStyles.navbar.bg}`,
          {
            "rounded-none": windowWidth >= 960 || !isNavOpen,
            "rounded-xl": windowWidth < 960 && isNavOpen,
          }
        )}
      >
        <div
          className={`flex items-center justify-between ${navStyles.navbar.text}`}
        >
          <img
            src={logo}
            alt="DreamIT"
            className="h-[120px] w-[120px] ml-32 md:ml-28 lg:ml-28 mx-auto object-contain select-none"
          />
          <div className="hidden lg:block">
            <NavList
              selectedItem={selectedItem}
              handleSelect={handleSelect}
              handleBankClick={handleBankClick}
            />
          </div>
          <IconButton
            size="sm"
            variant="text"
            onClick={toggleIsNavOpen}
            className={`ml-auto mr-2 lg:hidden ${navStyles.navbar.text}`}
          >
            <GrTechnology className="h-10 w-10 mt-5 mb-2 mr-2 p-2 text-cyan-400 hover:text-blue-600" />
          </IconButton>
        </div>
        <Collapse
          open={isNavOpen}
          className={classNames(
            "overflow-scroll transition-all duration-700 ease-out",
            { "mt-1": isNavOpen }
          )}
        >
          <NavList
            selectedItem={selectedItem}
            handleSelect={handleSelect}
            handleBankClick={handleBankClick}
          />
        </Collapse>
      </Navbar>
      <BankDetailsModal
        isOpen={isBankModalOpen}
        onClose={handleCloseBankModal}
      />
    </div>
  );
};

export default StickyNavbar;

"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isManuOpen, SetisManuOpen] = useState(false);

  const toggleMenu = () => {
    setIsDrawerOpen(!isDrawerOpen); // Flip state
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsDrawerOpen(false);
    }
  };

  return (
    <nav className="border border-[#151D30] fixed top-0 w-full z-50 transition-all backdrop-blur-[30px] supports-[backdrop-filter] duration-300">
      <div>
        <div className="relative max-w-7xl flex justify-between items-center sm:px-6 lg:px-8 mx-auto my-2 py-4">
          {/* Desktop Menu */}

          <div className="absolute right-0 hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              (item, index) => (
                <div key={index} className="relative group">
                  <button
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                    }}
                    className="!text-[#F59F14] text-lg tracking-widest font-medium"
                  >
                    {item}
                  </button>
                  <div className="absolute bottom-[-3px] bg-[#1CC3BA] left-0 w-0 h-[3px] transition-all duration-500 group-hover:w-full"></div>
                </div>
              )
            )}
          </div>
          <div className="mb-1 mx-5 md:hidden">
            {isDrawerOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
               onClick={() => {
                  toggleMenu();
                  SetisManuOpen(false);
                }}
                className="h-9 w-9"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                  toggleMenu();
                  SetisManuOpen(true);
                }}
                className="h-9 w-9"
              />
            )}
          </div>
        </div>

        <div className="overflow-hidden w-full fixed bg-[#0B111E] z-99">
          {isManuOpen && (
            <div className="w-full  backdrop-blur-[30px] supports-[backdrop-filter] h-[55vh]">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item, index) => (
                  <div key={index}>
                    <button
                      onClick={() => {
                        scrollToSection(item.toLowerCase());
                        SetisManuOpen(false);
                      }}
                      className="text-[#F59F14] w-26 p-3 h-15 mb-2 text-3xl block tracking-widest font-medium cursor-pointer"
                    >
                      {item}
                    </button>
                      </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

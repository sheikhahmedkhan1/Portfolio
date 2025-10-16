"use client";



export default function Navigation() {


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <nav
      className="border border-[#151D30] fixed top-0 w-full z-50 transition-all backdrop-blur-[30px] supports-[backdrop-filter] duration-300">
    
      <div className="relative max-w-7xl flex justify-between items-center sm:px-6 lg:px-8 mx-auto my-2 py-4">
        {/* Desktop Menu */}
        <div className="absolute right-0 hidden md:flex space-x-8">
          {["Home", "About","Projects", "Skills",  "Contact"].map((item,index) => (
            <div key={index} className="relative group">
              <button
                
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-lg tracking-widest font-medium"
              >
                {item}
              </button>
              <div className="absolute bottom-[-3px] bg-[#1CC3BA] left-0 w-0 h-[3px] transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

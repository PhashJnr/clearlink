import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo/ClearLink logo.svg";
import hamburgerIcon from "../assets/icon/hamburger-menu.svg";
import closeIcon from "../assets/icon/cancel-close-menu.svg";
import dropdownicon from "../assets/icon/drop down icon.svg";
import Button from "../components/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navBar max-w-[1372px] px-3  mx-auto mt-[25px] fixed z-10 lg:absolute left-0 right-0 ">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          staggerChildren: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="flex justify-between items-center rounded-[100px]  lg:pr-7 px-[16px] py-[10px] border border-[#d0d5dd] bg-[#f2f4f7]"
      >
        <div className="navBarLogo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="navBarLinks hidden lg:flex font-InterSemiBold shrink-0">
          <ul className="flex lg:gap-[30px] text-[18px] text-[#667085]">
            <li className="flex items-center">
              Products <img src={dropdownicon} alt="drowdownicon" />
            </li>
            <li className="flex items-center">
              Solutions <img src={dropdownicon} alt="drowdownicon" />
            </li>
            <li className="flex items-center">
              Resources <img src={dropdownicon} alt="drowdownicon" />
            </li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="navBtn hidden  lg:flex lg:gap-[10px]">
          <Button
            customClass="bg-[#fff] py-[8px] shrink-0 border border-[#98a2b3] rounded-[100px]"
            text="Talk to sales"
          />
          <Button
            customClass="bg-[#175CD3] py-[8px] text-[#fff] rounded-[100px]"
            text="Sign up for free"
          />
        </div>

        {/* Hamburger Icon */}

        <div className="hamburgerIcon lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              className="h-[24px]"
              src={isOpen ? closeIcon : hamburgerIcon}
              alt="hamburgerIcon"
            />
          </button>
        </div>
      </motion.div>

      {/* Hamburger Menu */}
      {/* <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.2,
          // staggerChildren: 0.5,
          ease: "easeIn",
          // type: "spring",
          damping: 10,
        }}
        className={`${
          isOpen ? "visible" : "hidden"
        } navBarLinks lg:hidden font-InterSemiBold absolute overflow-x-hidden z-10 left-0 right-0 mt-2 rounded-[16px] h-[100dvh] bg-[#f2f4f7] py-[10px] border border-[#d0d5dd]`}
      >
        <ul className="flex flex-col items-center gap-[40px] mt-[30px] text-[18px] text-[#667085]">
          <motion.li
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.2,
              staggerChildren: 0.5,
              ease: "easeIn",
              type: "spring",
              damping: 10,
            }}
            className="flex items-center"
          >
            Products <img src={dropdownicon} alt="drowdownicon" />
          </motion.li>

          <motion.li
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.35,
              delay: 0.35,
              staggerChildren: 0.5,
              ease: "easeIn",
              type: "spring",
              damping: 10,
            }}
            className="flex items-center"
          >
            Solutions <img src={dropdownicon} alt="drowdownicon" />
          </motion.li>

          <motion.li
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              staggerChildren: 0.5,
              ease: "easeIn",
              type: "spring",
              damping: 10,
            }}
            className="flex items-center"
          >
            Resources <img src={dropdownicon} alt="drowdownicon" />
          </motion.li>

          <motion.li
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: 0.65,
              staggerChildren: 0.5,
              ease: "easeIn",
              type: "spring",
              damping: 10,
            }}
            className="flex items-center"
          >
            Pricing
          </motion.li>
        </ul>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            staggerChildren: 0.5,
            ease: "easeIn",
            type: "spring",
            damping: 10,
          }}
          className="navBtn flex flex-col items-center mt-[30px] gap-[20px]"
        >
          <Button
            customClass="bg-[#fff] py-[12px] shrink-0 border border-[#98a2b3] rounded-[100px]"
            text="Talk to sales"
          />
          <Button
            customClass="bg-[#175CD3] py-[12px] text-[#fff] rounded-[100px]"
            text="Sign up for free"
          />
        </motion.div>
      </motion.div> */}
    </nav>
  );
}

export default Navbar;

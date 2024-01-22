import { motion } from "framer-motion";
import Logo from "../assets/logo/ClearLink logo.svg";
import dropdownicon from "../assets/icon/drop down icon.svg";
import Button from "../components/Button";

function Navbar() {
  return (
    <nav className="navBar max-w-[1372px] mx-auto mt-[25px] absolute left-0 right-0 px-4 ">
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
        className="flex justify-between items-center  rounded-[100px] px-[16px] py-[10px] border border-[#d0d5dd] bg-[#f2f4f7]"
      >
        <div className="navBar__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navBarLinks font-InterSemiBold shrink-0">
          <ul className="flex gap-[30px] text-[18px] text-[#667085]">
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

        <div className="navBtn flex gap-[10px]">
          <Button
            customClass="bg-[#fff] py-[8px] shrink-0 border border-[#98a2b3] rounded-[100px]"
            text="Talk to sales"
          />
          <Button
            customClass="bg-[#175CD3] py-[8px] text-[#fff] rounded-[100px]"
            text="Sign up for free"
          />
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;

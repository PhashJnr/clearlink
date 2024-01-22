import { motion } from "framer-motion";
import ClearLinkLogo from "../assets/logo/ClearLink logo.svg";
import googlePlay from "../assets/logo/Google Store.svg";
import appleStore from "../assets/logo/App Store.svg";
import facebook from "../assets/icon/Facebook.svg";
import twitter from "../assets/icon/Twitter.svg";
import instagram from "../assets/icon/Instagram.svg";
import linkedin from "../assets/icon/LinkedIN.svg";
import youtube from "../assets/icon/Youtube.svg";
import gitHub from "../assets/icon/Github.svg";

function Footer() {
  return (
    <>
      <footer className="footer px-[30px] ">
        <div className="footerContainer py-[40px]  mx-auto flex flex-col lg:flex-row justify-between max-w-[1400px] ">
          <div className="footerLogo max-w-[400px] ">
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
                staggerChildren: 0.2,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              src={ClearLinkLogo}
              alt="ClearLink Logo"
            />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                staggerChildren: 0.2,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className="font-InterRegular text-[18px] text-[#475467] mt-[20px] "
            >
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </motion.p>
          </div>

          <div className="footerLink grid grid-cols-2 sm:grid-cols-4  gap-[70px]  mt-7 lg:mt-0 lg:flex lg:gap-[100px] ">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.4,
                staggerChildren: 0.2,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className="footerLinkItem"
            >
              <h3 className="font-InterSemiBold text-[18px] text-[#667085] mb-[20px]">
                Product
              </h3>
              <ul className="font-InterSemiBold text-[#475467] text-[16px] flex flex-col gap-[10px] ">
                <li>Overview</li>
                <li>Features</li>
                <li>Solutions</li>
                <li>Tutorials</li>
                <li>Pricing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                staggerChildren: 0.2,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className="footerLinkItem"
            >
              <h3 className="font-InterSemiBold text-[18px] text-[#667085] mb-[20px]">
                Company
              </h3>
              <ul className="font-InterSemiBold text-[#475467] text-[16px] flex flex-col gap-[10px]  ">
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                staggerChildren: 0.2,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className="footerLinkItem"
            >
              <h3 className="font-InterSemiBold text-[18px] text-[#667085] mb-[20px]">
                Resources
              </h3>
              <ul className="font-InterSemiBold text-[#475467] text-[16px] flex flex-col gap-[10px]  ">
                <li>Blog</li>
                <li>Events</li>
                <li>Help center</li>
                <li>Tutorials</li>
                <li>Support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                staggerChildren: 0.2,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className="footerLinkItem"
            >
              <h3 className="font-InterSemiBold text-[18px] text-[#667085] mb-[20px]">
                Legal
              </h3>
              <ul className="font-InterSemiBold text-[#475467] text-[16px] flex flex-col gap-[10px]  ">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Contact</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              staggerChildren: 0.2,
              ease: "easeInOut",
              type: "spring",
              damping: 10,
            }}
            className="footerMobileStoreLink mt-7 sm:mt-5 lg:mt-0 "
          >
            <p className="font-InterSemiBold text-[#004eeb] ">Get the app</p>
            <div className="flex mt-[20px]  lg:flex-col gap-[10px]">
              <img src={appleStore} alt="Apple Store" />
              <img src={googlePlay} alt="Google Play" />
            </div>
          </motion.div>
        </div>
      </footer>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.9,
          staggerChildren: 0.2,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
        }}
        className="footerSocial px-[40px]  bg-[#f9fafb] py-[30px]"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center max-w-[1400px] mx-auto ">
          <p className="font-InterRegular text-[#667085] text-[14px]">
            © 2023 ClearLink. All rights reserved.
          </p>
          <div className="footerSocialLink flex gap-[20px]">
            <img src={linkedin} alt="Linkedin" />
            <img src={twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={gitHub} alt="Github" />
            <img src={youtube} alt="Youtube" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Footer;

import { motion } from "framer-motion";
import Button from "./Button";
import AIbot from "../assets/icon/AI Icon.svg";
import HeroImg from "../assets/img/Hero Img.svg";
import ReviewAvatar from "../assets/img/Hero Avatars.svg";
import Stars from "../assets/icon/Stars.svg";

function Hero() {
  return (
    <section className="heroSection bg-heroBg flex justify-center items-center mx-auto max-w-[1300px]">
      <div className="mt-[90px] heroSectionContainer">
        <div className="flex ring-[#fff] ">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              staggerChildren: 0.5,
              ease: "easeInOut",
              type: "spring",
              damping: 10,
            }}
            className="heroTxt max-w-[680px]"
          >
            <h1 className="font-InterSemiBold text-[54px]  mb-[20px] text-[#1D2939] leading-[1.2] ">
              Uniting the world,<br></br> one video call at a time
            </h1>

            <p className="text-[#667085] font-InterRegular text-[20px] leading-[1.1] ">
              Experience the future of communication with ClearLink – <br></br>{" "}
              where crystal-clear video conferencing meets <br></br>{" "}
              unparalleled simplicity.
            </p>

            <div className="flex my-[45px] gap-[10px]">
              <Button
                customClass="bg-[#175cd3] rounded-[100px] text-[#fff]"
                text="Start your free trial"
              />
              <Button
                imgSrc={AIbot}
                imgClass="mr-[8px]  "
                altText="AI Bot Logo"
                customClass="text-[#175cd3] flex rounded[100px]"
                text="Discover AI assistant"
              />
            </div>

            <div className="review flex gap-[10px]">
              <img src={ReviewAvatar} alt="Review Avatars" />
              <div>
                <div className="flex">
                  <img src={Stars} alt="Stars" />
                  <span className="font-InterSemiBold ml-[5px] text-[#344054]">
                    5.0
                  </span>
                </div>

                <p className="text-[#344054] font-IntersemiBold text-[px] leading-none ">
                  from 3,000+ reviews
                </p>
              </div>
            </div>
          </motion.div>

          <div className="heroImg">
            <motion.img
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.9,
                staggerChildren: 0.5,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className="max-w-[584px]"
              src={HeroImg}
              alt="hero img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
import { motion } from "framer-motion";
import Button from "../components/Button";
import planImg from "../assets/img/plans Img.svg";
import blueCheckMark from "../assets/icon/Check icon.svg";

function Plans() {
  return (
    <section className="plansSection my-[40px] flex justify-end pl-[50px] overflow-x-hidden  ">
      <div className="w-[1400px]  ">
        <div className="flex flex-col lg:flex-row justify-between  ">
          <div className="max-w-[520px] sm:mb-7 pr-[20px] ">
            <motion.h2
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
              className=" text-[#101828] text-[40px] font-InterSemiBold leading-[45px] "
            >
              Ready to clear the path to perfect communication?
            </motion.h2>

            <ul className="flex flex-col my-[20px] gap-[10px]">
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                  // staggerChildren: 0.2,
                  ease: "easeOut",
                  type: "spring",
                  damping: 10,
                }}
                className=" text-[#475467] inline-flex items-center gap-[9px] "
              >
                <img src={blueCheckMark} alt="checkmark" /> 30 days free trial
              </motion.li>
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  // staggerChildren: 0.2,
                  ease: "easeOut",
                  type: "spring",
                  damping: 10,
                }}
                className=" text-[#475467] inline-flex items-center gap-[9px]  "
              >
                {" "}
                <img src={blueCheckMark} alt="checkmark" /> Cancel at any time
              </motion.li>
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  // staggerChildren: 0.2,
                  ease: "easeOut",
                  type: "spring",
                  damping: 10,
                }}
                className=" text-[#475467] inline-flex items-center gap-[9px]  "
              >
                <img src={blueCheckMark} alt="checkmark" /> Access to all
                features
              </motion.li>
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                  // staggerChildren: 0.2,
                  ease: "easeOut",
                  type: "spring",
                  damping: 10,
                }}
                className=" text-[#475467] inline-flex items-center gap-[9px]  "
              >
                <img src={blueCheckMark} alt="checkmark" /> Peronalized
                onboarding
              </motion.li>
            </ul>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                // staggerChildren: 0.2,
                ease: "easeOut",
                type: "spring",
                damping: 10,
              }}
              className="planBtn mt-[25px] mb-8 sm:mb-0 flex gap-[10px]"
            >
              <Button
                customClass="bg-[#fff]  shrink-0 border border-[#98a2b3] rounded-[100px]"
                text="Talk to sales"
              />
              <Button
                customClass="bg-[#175CD3]  text-[#fff] rounded-[100px]"
                text="Sign up for free"
              />
            </motion.div>
          </div>

          <div className="plansImg">
            <motion.img
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.9,
                // staggerChildren: 0.2,
                ease: "easeIn",
                type: "just",
                damping: 10,
              }}
              src={planImg}
              alt="plans"
              className="sm:max-w-[704px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;

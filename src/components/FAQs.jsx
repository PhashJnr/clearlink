import { motion } from "framer-motion";
import minusIcon from "../assets/icon/Minus Icon.svg";
import plusIcon from "../assets/icon/Plus Icon.svg";

function FAQs() {
  return (
    <section className="faqSection my-[60px] ">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          staggerChildren: 0.2,
          ease: "easeIn",
          type: "spring",
          damping: 30,
        }}
        className="flex flex-col lg:flex-row px-6 justify-around grow-0 overflow-x-hidden
       mx-auto max-w-[1400px] "
      >
        <div className="faqText max-w-[470px] pr-[30px] mb-6 sm:mb-0 sm:mx-auto lg:mx-0 ">
          <p className="text-[#175cd3] font-InterSemiBold ">Support</p>
          <h3 className="font-InterSemiBold text-[#1d2939] text-[48px] ">
            FAQs
          </h3>
          <p className="text-[#667085] font-InterRegular ">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please{" "}
            <span>chat to our friendly team.</span>
          </p>
        </div>

        <div className="faqAccordion  ">
          <div className="max-w-[630px] sm:mx-auto sm:mt-9 ">
            <div className="">
              <motion.div
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
                className="bg-[#f9fafb] rounded-[32px] border border-[#eaecf0] p-6 flex"
              >
                <div className="pr-7">
                  <p className="accordionHeader mb-[10px] font-InterSemiBold text-[#101828]">
                    How many participants can join a ClearLink video conference?
                  </p>
                  <p className="accordionText font-InterRegular text-[#475467] ">
                    ClearLink offers flexible meeting options. Depending on your
                    subscription plan, you can host meetings with varying
                    numbers of participants. Our plans are designed to
                    accommodate small team collaborations and large-scale
                    webinars, ensuring you have the right fit for your needs.
                  </p>
                </div>
                <img
                  className="self-start"
                  src={minusIcon}
                  alt="accordion close icon"
                />
              </motion.div>

              <motion.div
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
                className="py-7 border-b border-[#eaecf0] "
              >
                <div className="flex justify-between px-6">
                  <p className="font-InterSemiBold text-[#101828] pr-3 ">
                    Can I use ClearLink on multiple devices?
                  </p>
                  <img
                    className="self-start"
                    src={plusIcon}
                    alt="accordion open icon"
                  />
                </div>
              </motion.div>

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
                className="py-7 border-b border-[#eaecf0] "
              >
                <div className="flex justify-between  px-6">
                  <p className="font-InterSemiBold text-[#101828] pr-3  ">
                    Is ClearLink compatible with other video conferencing
                    platforms?
                  </p>
                  <img
                    className="self-start"
                    src={plusIcon}
                    alt="accordion open icon"
                  />
                </div>
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
                className="py-7 border-b border-[#eaecf0] "
              >
                <div className="flex justify-between  px-6">
                  <p className="font-InterSemiBold pr-3 text-[#101828] ">
                    How does ClearLink ensure the security of my video
                    conferences?
                  </p>
                  <img
                    className="self-start"
                    src={plusIcon}
                    alt="accordion open icon"
                  />
                </div>
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
                className="py-7 border-b border-[#eaecf0] "
              >
                <div className="flex justify-between px-6">
                  <p className="font-InterSemiBold text-[#101828] pr-3  ">
                    Do I need to download any software to use ClearLink?
                  </p>
                  <img
                    className="self-start "
                    src={plusIcon}
                    alt="accordion open icon"
                  />
                </div>
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
                className="py-7  "
              >
                <div className="flex justify-between px-6">
                  <p className="font-InterSemiBold text-[#101828]  ">
                    What kind of customer support does ClearLink provide?
                  </p>
                  <img
                    className="self-start"
                    src={plusIcon}
                    alt="accordion open icon"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FAQs;

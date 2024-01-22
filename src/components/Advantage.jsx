import { motion } from "framer-motion";
import Advantageimg from "../assets/img/Advantage Img.svg";
import audioicon from "../assets/icon/audio icon.svg";
import calendericon from "../assets/icon/calendar icon.svg";
import lockicon from "../assets/icon/lock icon.svg";
import cameraicon from "../assets/icon/camera icon.svg";
import handdrawnarrow from "../assets/icon/Hand-drawn arrow.svg";

function Advantage() {
  return (
    <section className="advantageSection flex items-center  justify-center my-[60px] ">
      <div className="max-w-[1400px] px-4 sm:px-[50px] relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            staggerChildren: 0.2,
            ease: "easeIn",
            type: "spring",
            damping: 30,
          }}
          className="max-w-[650px] pr-[55px]"
        >
          <p className="text-[#175cd3] font-InterSemiBold ">
            The ClearLink Advantage
          </p>
          <h2 className="text-[#1d2939] text-[38px] ">Why choose ClearLink?</h2>

          <p className="text-InterRegular">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </motion.div>
        <img
          className="absolute hidden sm:visible z-[10] h-[150px] right-[250px] top-[55px]  "
          src={handdrawnarrow}
          alt="hand drawn arrow"
        />

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
          className="flex flex-col-reverse lg:flex-row mt-[55px] "
        >
          <div className="grid grid-cols-1 mt-[50px] sm:mt-0 sm:grid-cols-2 gap-5 max-w-[800px] pr-[50px]">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                staggerChildren: 0.5,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className="advantageTxt "
            >
              <div>
                <img
                  className="mb-[15px]"
                  src={cameraicon}
                  alt="Advantage Img"
                />
              </div>
              <div>
                <h3 className="text-[#101828] text-[24px] font-InterSemiBold ">
                  Crystal-clear HD video
                </h3>
                <p className="text-[#475467] text-[18px] font-InterRegular leading-[22px] ">
                  No more pixelation or blurriness – just stunning, lifelike
                  clarity that brings your team closer in meetings.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                staggerChildren: 0.5,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className="advantageTxt"
            >
              <div>
                <img
                  className="mb-[15px]"
                  src={audioicon}
                  alt="Advantage Img"
                />
              </div>
              <div>
                <h3 className="text-[#101828] text-[24px] font-InterSemiBold ">
                  Noise-canceling audio
                </h3>
                <p className="text-[#475467] text-[18px] leading-[20px] font-InterRegular ">
                  Say goodbye to distractions with our advanced audio tech for
                  crisp, interruption-free conversations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                staggerChildren: 0.5,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className="advantageTxt"
            >
              <div>
                <img
                  className="mb-[15px]"
                  src={calendericon}
                  alt="Advantage Img"
                />
              </div>
              <div>
                <h3 className="text-[#101828] text-[24px] font-InterSemiBold ">
                  Scheduling made easy
                </h3>
                <p className="text-[#475467] text-[18px] font-InterRegular leading-[22px] ">
                  Streamline your agenda with ClearLink's intuitive scheduling.
                  Set up meetings, send invitations, and receive reminders in
                  one place.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.9,
                staggerChildren: 0.5,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className="advantageTxt"
            >
              <div>
                <img className="mb-[15px]" src={lockicon} alt="Advantage Img" />
              </div>
              <div>
                <h3 className="text-[#101828] text-[24px] font-InterSemiBold ">
                  Bank-grade security
                </h3>
                <p className="text-[#475467] text-[18px] font-InterRegular leading-[22px]">
                  Your privacy is our priority with bank-grade security
                  protocols safeguarding your meetings and data from unwanted
                  intruders.
                </p>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.img
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                staggerChildren: 0.5,
                ease: "easeInOut",
                type: "spring",
                damping: 10,
              }}
              className=" sm:mx-auto sm:mb-6 "
              src={Advantageimg}
              alt="Advantage Img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Advantage;

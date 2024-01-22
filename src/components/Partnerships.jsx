import { motion } from "framer-motion";
import Shopify from "../assets/logo/Shopify.com svg.svg";
import coinbase from "../assets/logo/Coinbase svg.svg";
import dropbox from "../assets/logo/Dropbox svg.svg";
import intercom from "../assets/logo/Intercom svg.svg";
import marvel from "../assets/logo/Marvel svg.svg";
import automattic from "../assets/logo/Automattic svg.svg";

function Partnerships() {
  return (
    <section className="partnershipSection my-[90px] flex justify-center ">
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
        className="partnershipSection flex flex-col justify-center   "
      >
        <div className="partnerShipSectionTxt">
          <p className="font-InterSemiBold text-[18px] text-center mb-[20px]  text-[#475467]">
            Join 1,500+ companies already video conferencing the ClearLink way
          </p>
        </div>

        <div className="partnershipSectionLogos flex gap-[30px]  ">
          <img src={Shopify} alt="Shopify" />
          <img src={coinbase} alt="coinbase" />
          <img src={dropbox} alt="dropbox" />
          <img src={intercom} alt="intercom" />
          <img src={marvel} alt="marvel" />
          <img src={automattic} alt="automattic" />
        </div>
      </motion.div>
    </section>
  );
}

export default Partnerships;

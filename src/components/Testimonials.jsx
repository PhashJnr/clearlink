import { motion } from "framer-motion";
import Shopifylogo from "../assets/logo/Shopify.com svg.svg";
import ratingsStar from "../assets/icon/Stars.svg";
import testimonialAvatar from "../assets/img/Sarah Vatar.svg";
import testimonialimg from "../assets/img/Testimonials Img.svg";
import leftArrow from "../assets/icon/Arrow Left.svg";
import rightArrow from "../assets/icon/Arrow Right.svg";

function Testimonials() {
  return (
    <section className="testimonialSection bg-[#f9fafb] py-[80px]">
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
        className="testimonialContainer max-w-[1400px] mx-auto "
      >
        <div className="flex justify-between px-[20px] ">
          <div className="testimonialText max-w-[660px]">
            <img className="mb-[15px]" src={Shopifylogo} alt="shopify logo" />
            <img src={ratingsStar} alt="ratings star" />

            <h3 className="text-[#101828] my-[30px] pr-[20px] text-[44px] leading-[50px] font-InterMedium">
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and top-notch security make it essential for our
              team.
            </h3>

            <div className="flex justify-between">
              <div className="testimonialAvatar flex">
                <img src={testimonialAvatar} alt="testimonial avatar" />
                <div className="flex flex-col ml-[15px] justify-between">
                  <p className="font-InterSemiBold text-[#101828] text-[18px]">
                    Sarah Thompson
                  </p>
                  <p className="text-[#475467] font-InterRegular">
                    Project Manager, Shopify
                  </p>
                </div>
              </div>
              <div className="arrows flex gap-[25px]">
                <img src={leftArrow} alt="arrow left" />
                <img src={rightArrow} alt="arrow right" />
              </div>
            </div>
          </div>

          <div className="testimonialImg">
            <img src={testimonialimg} alt="testimonial img" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;

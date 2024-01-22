function Button({ text, customClass, imgSrc, altText, imgClass }) {
  return (
    <button
      className={`${customClass} font-InterSemiBold  text-[16px] py-[14px] px-[24px] `}
    >
      <img src={imgSrc} alt={altText} className={`${imgClass}`} />
      {text}
    </button>
  );
}

export default Button;

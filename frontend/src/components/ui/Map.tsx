const MapComponent = () => {
  return (
    <div
      style={{ width: "100%", height: "500px" }}
      className="w-full flex justify-center items-center lg:my-16 px-5 sm:px-0"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5992.732813479113!2d7.386506055174039!3d6.848689820718791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044e9ae7dea5901%3A0x34900e204966a2ca!2sSt.%20Joseph&#39;s%20Hospital!5e0!3m2!1sen!2sng!4v1736347905923!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{border: 1}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;

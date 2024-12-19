const MapComponent = () => {
  return (
    <div
      style={{ width: "100%", height: "400px" }}
      className="w-full flex justify-center items-center my-16"
    >
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.16825464386824!2d7.384068685567572!3d6.849057700778539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044e9ae7dea5901%3A0x34900e204966a2ca!2s44B%20New%20Anglican%20Road%2C%20Nsukka!5e0!3m2!1sen!2sng!4v1734173529547!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;

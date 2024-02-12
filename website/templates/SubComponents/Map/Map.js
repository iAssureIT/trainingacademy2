import React from "react";

const Map = (props) => {
  return (
    <section>
      <div id="embededMap" className="">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          // src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1074.5502142114376!2d73.82105751614164!3d18.500458802500418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSiddharth%20Tower%201%2C%20Sangam%20Press%20Road%2C%20Near%20Karishma%20Soc%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411029!5e0!3m2!1sen!2sin!4v1687351455565!5m2!1sen!2sin"
          src={props.locationPath}
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;

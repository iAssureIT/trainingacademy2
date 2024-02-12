import React from "react";

const Map = (props) => {
  return (
    <section id="embededMap" >
      {props?.dash ?
        <div className="w-full mb-4">
          <ul className="place-content-center flex flex-wrap">
            <li className={"dash1 " + props.dash}></li>
            <li className={"dash2 " + props.dash}></li>
            <li className={"dash3 " + props.dash}></li>
          </ul>
        </div>
        :
        null
      }
      {
        props?.pageTitle ?
          <h2 className={props?.pageTitleCss ? props?.pageTitleCss : "block font-extrabold uppercase text-3xl text-center md:text-4xl lg:text-5xl xl:text-5xl xxl:text-6xl"}
            dangerouslySetInnerHTML={{
              __html: props?.pageTitle,
            }}>
          </h2>
          :
          null
      }
      <div className={props?.mapCss ? props.mapCss : " pr-10 h-full"}>
        <iframe
          className="w-full h-full rounded-xl"
          src={props.locationPath}
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;

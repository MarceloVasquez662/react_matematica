import React from "react";

function Banner(props) {
  return (
    <div className="text-center p-5 col-12">
      <h1>MatematicApp</h1>
      <p>{props.subtitulo}</p>
    </div>
  );
}

export default Banner;

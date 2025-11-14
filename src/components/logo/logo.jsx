import React from "react";
import "./style.css"

const MySvgImage = () => {
  const svgData =` 
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
      <defs>
        <mask id="cut">
          <rect width="100%" height="100%" fill="black" />
          <rect x="10" y="30" width="40" height="40" fill="white"/>
          <rect x="30" y="10" width="40" height="40" fill="white"/>
          <rect x="30" y="30" width="20" height="20" fill="black"/>
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="white" mask="url(#cut)" />
    </svg>`
  ;

  const encodedSvg = encodeURIComponent(svgData);

  return (
    <img
    className="flicker"
      src={`data:image/svg+xml,${encodedSvg}`}
      alt="Custom SVG"
      width={40}
      height={40}
    />
  );
};

export default MySvgImage;
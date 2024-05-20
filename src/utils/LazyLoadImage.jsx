import React, { useState, useEffect } from "react";

const LazyLoadImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setImageSrc(src);

    return () => {
      image.onload = null;
    };
  }, [src]);

  return <img src={imageSrc} alt={alt} />;
};

export default LazyLoadImage;

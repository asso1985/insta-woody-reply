import React from "react";
import ContentLoader from "react-content-loader";

const SIZE_MAP = {
  thin: "20",
  small: "32",
  standard: "50",
};

const ItemPicLoader = ({ size }) => {
  return (
    <div
      height="100%"
      width="100%"
      style={{ borderRadius: "100%", overflow: "hidden", display: "flex" }}
    >
      <ContentLoader
        speed={2}
        backgroundColor="#f2f2f2"
        foregroundColor="#ddd"
        height={SIZE_MAP[size]}
        width={SIZE_MAP[size]}
        viewBox={`0 0 ${SIZE_MAP[size]} ${SIZE_MAP[size]}`}
      >
        <rect x="0" y="0" height={SIZE_MAP[size]} width={SIZE_MAP[size]}></rect>
      </ContentLoader>
    </div>
  );
};

export default ItemPicLoader;

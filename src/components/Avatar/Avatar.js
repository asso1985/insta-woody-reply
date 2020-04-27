import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledAvatar } from "./Avatar.styles";
import AvatarLoader from "./AvatarLoader";

const Avatar = ({ pic, size, alt }) => {
  const [isLoaded, SetIsLoaded] = useState(false);

  return (
    <StyledAvatar size={size}>
      {!isLoaded && <AvatarLoader size={size} />}
      <img
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
        onLoad={() => {
          SetIsLoaded(true);
        }}
        alt={alt}
        src={pic}
      />
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["small", "standard", "thin"]),
  pic: PropTypes.string,
};

Avatar.defaultProps = {
  size: "standard",
};

export default Avatar;

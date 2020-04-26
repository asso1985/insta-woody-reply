import React from "react";
import PropTypes from "prop-types";
import { StyledAvatar } from "./Avatar.styles";

const Avatar = ({ pic, size, alt }) => {
  return (
    <StyledAvatar size={size}>
      <img alt={alt} src={pic} />
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

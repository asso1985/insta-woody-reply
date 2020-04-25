import React from "react";
import PropTypes from "prop-types";
import SVG_PATHS from "../../../../svg.json";
import StyledPostButton from "./PostButton.syles";

const PostButton = ({ type, filled, onButtonClick }) => {
  return (
    <StyledPostButton onClick={onButtonClick}>
      <svg
        fill={!filled ? "#262626" : "rgb(237, 73, 86)"}
        height="24"
        viewBox="0 0 48 48"
        width="24"
      >
        <path clipRule="evenodd" d={SVG_PATHS[type]} fillRule="evenodd"></path>
      </svg>
    </StyledPostButton>
  );
};

PostButton.propTypes = {
  type: PropTypes.oneOf(["comment", "like", "like_full", "share"]),
  filled: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

PostButton.defaultProps = {
  type: "heart",
  filled: false,
};

export default PostButton;

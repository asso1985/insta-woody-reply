import React from "react";
import PropTypes from "prop-types";
import {
  StyledUserContainer,
  StyledUserInfoAvatar,
  StyledUserInfo,
  StyledUserHandle,
  StyledUserDisplayName,
} from "./UserInfo.styles";

const UserInfo = ({ user, type }) => {
  const avatarSize = type === "header" ? "small" : "standard";
  return (
    <StyledUserContainer>
      <StyledUserInfoAvatar size={avatarSize}>
        <img alt={user.handle} src={user.avatar} />
      </StyledUserInfoAvatar>
      <StyledUserInfo>
        <StyledUserHandle type={type}>{user.handle}</StyledUserHandle>
        {type === "standard" && (
          <StyledUserDisplayName>{user.display_name}</StyledUserDisplayName>
        )}
      </StyledUserInfo>
    </StyledUserContainer>
  );
};

UserInfo.propTypes = {
  type: PropTypes.oneOf(["header", "standard"]),
  user: PropTypes.shape({
    id: PropTypes.string,
    handle: PropTypes.string,
    avatar: PropTypes.string,
    display_name: PropTypes.string,
  }),
};

UserInfo.defaultProps = {
  type: "standard",
  user: {
    id: "UDHUHI$HU",
    handle: "omarassadi",
    display_name: "Omar Assadi",
    avatar:
      "https://scontent-mxp1-1.cdninstagram.com/v/t51.2885-19/s150x150/87596830_2610629612527261_3519250022854033408_n.jpg?_nc_ht=scontent-mxp1-1.cdninstagram.com&_nc_ohc=wP5p1ehkFkwAX_pNVFD&oh=8acb2afce538fbdd904bc0aaff1f0105&oe=5ECD8837",
  },
};

export default UserInfo;

import React from "react";
import PropTypes from "prop-types";
import {
  StyledUserContainer,
  StyledUserInfo,
  StyledUserHandle,
  StyledUserDisplayName,
} from "./UserInfo.styles";

import Avatar from "../Avatar";

const AVATAR_SIZE_MAP = {
  header: "small",
  comment: "thin",
  standard: "standard",
};

const UserInfo = ({ user, type }) => {
  const avatarSize = AVATAR_SIZE_MAP[type];
  const showAvatar = type !== "comment";
  return (
    <StyledUserContainer>
      {showAvatar && <Avatar alt={user.display_name} pic={user.avatar} size={avatarSize} />}

      <StyledUserInfo type={type}>
        <StyledUserHandle type={type}>{user.handle}</StyledUserHandle>
        {type === "standard" && (
          <StyledUserDisplayName>{user.display_name}</StyledUserDisplayName>
        )}
      </StyledUserInfo>
    </StyledUserContainer>
  );
};

UserInfo.propTypes = {
  type: PropTypes.oneOf(["header", "standard", "comment"]),
  user: PropTypes.shape({
    id: PropTypes.string,
    handle: PropTypes.string,
    avatar: PropTypes.string,
    display_name: PropTypes.string,
  }),
};

UserInfo.defaultProps = {
  type: "standard",
};

export default UserInfo;

import React from "react";
import {
  StyledHeaderContainer,
  StyledHeader,
  StyledHeaderInner,
  StyledHeaderLogo,
} from "./Header.styles";

const Header = () => (
  <StyledHeaderContainer>
    <StyledHeader>
      <StyledHeaderInner>
        <StyledHeaderLogo>
          <img
            width="120px"
            alt="Instagram"
            src={process.env.PUBLIC_URL + "/logo-post.png"}
          />
        </StyledHeaderLogo>
      </StyledHeaderInner>
    </StyledHeader>
  </StyledHeaderContainer>
);

export default Header;

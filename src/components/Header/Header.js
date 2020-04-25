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
            width="103px"
            alt="Instagram"
            src={process.env.PUBLIC_URL + "/logo.png"}
          />
        </StyledHeaderLogo>
      </StyledHeaderInner>
    </StyledHeader>
  </StyledHeaderContainer>
);

export default Header;

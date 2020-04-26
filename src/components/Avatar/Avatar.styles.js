import styled from "styled-components";

const SIZE_MAP = {
  thin: "20px",
  small: "32px",
  standard: "50px",
};

const StyledAvatar = styled.div`
  height: ${(props) => SIZE_MAP[props.size]};
  width: ${(props) => SIZE_MAP[props.size]};
  > img {
    width: 100%;
    border-radius: 50%;
  }
`;

export { StyledAvatar };

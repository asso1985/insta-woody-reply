import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { UserInfo } from "../../components";

const SideAreaContent = styled.div`
  position: sticky;
  top: 89px;
`;

const GuestContainer = ({ user }) => {
  return (
    <SideAreaContent>
      <UserInfo user={user} />
    </SideAreaContent>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  user: state.guest,
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestContainer);

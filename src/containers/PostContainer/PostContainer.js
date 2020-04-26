import React from "react";
import { connect } from "react-redux";
import { Post } from "../../components";

const PostContainer = ({ user, comments }) => {
  return <Post user={user} comments={comments} />;
};

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  comments: state.comments,
  user: state.me
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

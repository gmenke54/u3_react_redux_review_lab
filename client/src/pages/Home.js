import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadPosts } from '../store/actions/PostActions';
import PostCard from '../components/PostCard';

const mapStateToProps = ({ postState }) => {
  return { postState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  };
};

const Home = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <div>
      <h1>Travelocity!</h1>
      {props.postState.posts.map((post) => (
        <ul key={post._id}>
          {/* {post.name} */}
          <PostCard post={post} />
          {/* <Link to={`/departments/${department.id}`}>{department.name}</Link> */}
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

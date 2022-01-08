import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UpdatePost, LoadPosts } from '../store/actions/PostActions';
import Reviews from './Reviews';

const mapStateToProps = ({ postState }) => {
  return { postState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (upd, id) => dispatch(UpdatePost(upd, id)),
    fetchPosts: () => dispatch(LoadPosts())
  };
};

const PostCard = (props) => {
  // const [renderDetails, setRenderDetails] = useState(false);
  // const toggleDetails = () => {
  //   if (renderDetails === true) {
  //     setRenderDetails(false);
  //   } else {
  //     setRenderDetails(true);
  //   }
  // };
  
  const incrementLikes = () => {
    console.log('running incrementLikes')
    let curLikes = parseInt(props.post.likes)
    let newLikes = curLikes + 1
    let update = { "likes": newLikes }
    let curId = props.post._id
    props.updatePost(update, curId)
  }

  const incrementLikesPic = () => {
    let curLikes = parseInt(props.post.likes)
    let newLikes = curLikes + 1
    let update = { "likes": newLikes }
    let curId = props.post._id
    props.updatePost(update, curId)
  }
  
  return (
    <div className="post-card">
      <Link to={`/posts/${props.post._id}`}>
        <div>
          {props.post.name}
          <img onDoubleClick={incrementLikesPic}
            className="poster"
            src={props.post.url}
          />
        </div>
        
      </Link>
      <div>{props.post.description}</div>
      <button onClick={incrementLikes}>Like</button>
      <div>Likes: {props.post.likes}</div>
      {/* <Reviews cur_post_id = {props.post._id} /> */}
      {/* <AddReview cur_post_id = {props.post._id} /> */}
      {/* <div>
        {renderDetails === true ? (
          <section className="details">
            <div>Released {props.movie.release_date}</div>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
            />
            <div>{props.movie.overview}</div>
            <div>{props.movie.vote_average}/10 Potatoes</div>
            <Link to={`/movies/${props.movie.id}`}>
              More info about "{props.movie.title}"
            </Link>
          </section>
        ) : null}
      </div> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);


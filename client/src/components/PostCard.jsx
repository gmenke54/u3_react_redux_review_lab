import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  // const [renderDetails, setRenderDetails] = useState(false);

  // const toggleDetails = () => {
  //   if (renderDetails === true) {
  //     setRenderDetails(false);
  //   } else {
  //     setRenderDetails(true);
  //   }
  // };

  return (
    <div className="post-card">
      <Link to={`/posts/${props.post._id}`}>
        {props.post.name}
      </Link>
      <img
        className="poster"
        src={props.post.url}
      />
      <div>{props.post.description}</div>
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

export default PostCard;
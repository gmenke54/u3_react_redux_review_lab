import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReviewCard from '../components/ReviewCard';
import {
  LoadReviews,
  CreateReview,
  DeleteReview,
  LoadPost
} from '../store/actions/PostActions';

const mapStateToProps = ({ reviewState, postState }) => {
  return { reviewState, postState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (id) => dispatch(LoadReviews(id)),
    addReview: (rev) => dispatch(CreateReview(rev)),
    deleteReview: (id) => dispatch(DeleteReview(id)),
    fetchPost: (id) => dispatch(LoadPost(id))
  };
};

const Details = (props) => {
  const [curReview, setCurReview] = useState({
    name: ``,
    comments: ``,
    ratings: ``,
    post_id: props.match.params.id
  });

  useEffect(() => {
    props.fetchReviews(props.match.params.id);
    props.fetchPost(props.match.params.id);
  }, [props.match.params.id]);

  const submit = (e) => {
    e.preventDefault();
    props.addReview(curReview);
    let anotherReview = {
      name: ``,
      comments: ``,
      ratings: ``
    };
    setCurReview(anotherReview);
  };

  const handle = (e) => {
    const newestReview = { ...curReview };
    newestReview[e.target.id] = e.target.value;
    setCurReview(newestReview);
    console.log(newestReview);
  };

  return (
    <div>
      <h1>{props.postState.curPost.name} Reviews</h1>
      {props.reviewState.reviews.map((review) => (
        <div key={review._id} className="revs-cont">
          <ReviewCard review={review} />
        </div>
      ))}
      <div className="review-form">
        <form onSubmit={(e) => submit(e)}>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            value={curReview.name}
            onChange={(e) => handle(e)}
            id="name"
          />
          <input
            type="text"
            name="comments"
            placeholder="enter your comments"
            value={curReview.comments}
            onChange={(e) => handle(e)}
            id="comments"
          />
          <input
            type="number"
            name="ratings"
            placeholder="enter your rating (1-5)"
            value={curReview.ratings}
            onChange={(e) => handle(e)}
            id="ratings"
          />
          <button type="submit">Post Review</button>
        </form>
      </div>
      {/* <AddReview 
        post_id={props.match.params.id} 
        newReview={props.reviewState.newReview}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      /> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

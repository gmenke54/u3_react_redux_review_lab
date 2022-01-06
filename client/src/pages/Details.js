import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { LoadReviews, CreateReview } from '../store/actions/PostActions';
import AddReview from '../components/AddReview';

const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (id) => dispatch(LoadReviews(id)),
    addReview: (rev) => dispatch(CreateReview(rev))
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
    // props.createTodo(e.target.value);
  };

  return (
    <div>
      {/* BONUS: DISPLAY LOCATION NAME HERE */}
      <h1>Reviews</h1>
      {props.reviewState.reviews.map((review) => (
        <ul key={review._id}>
          "{review.comments}" - {review.ratings}/5 Stars
        </ul>
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

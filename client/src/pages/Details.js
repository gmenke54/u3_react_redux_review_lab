import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadReviews } from '../store/actions/PostActions';

const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: (id) => dispatch(LoadReviews(id))
  };
};

const Details = (props) => {
  useEffect(() => {
    props.fetchReviews(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      <h1>Reviews</h1>
      {props.reviewState.reviews.map((review) => (
        <ul key={review._id}>
          "{review.comments}" - {review.ratings}/5 Stars
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

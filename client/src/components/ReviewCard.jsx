import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DeleteReview } from '../store/actions/PostActions';

const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (rev) => dispatch(DeleteReview(rev))
  };
};

const ReviewCard = (props) => {

  const handleDelete = (rev) => {
    props.deleteReview(rev);
  };

  return (
    <div className="rev-card">
      <div>
        "{props.review.comments}" - {props.review.ratings}/5 Stars{' '}
      </div>
      <button onClick={() => handleDelete(props.review)}>del</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard);
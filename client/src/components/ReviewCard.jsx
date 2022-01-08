import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DeleteReview } from '../store/actions/PostActions';

const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (id) => dispatch(DeleteReview(id))
  };
};

const ReviewCard = (props) => {

  const handleDelete = (revId) => {
    props.deleteReview(revId);
  };

  return (
    <div className="rev-card">
      <div>
        "{props.review.comments}" - {props.review.ratings}/5 Stars{' '}
      </div>
      <button onClick={() => handleDelete(props.review._id)}>del</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard);
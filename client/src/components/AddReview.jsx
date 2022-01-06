import React from 'react';

const AddReview = (props) => {
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder='enter your name'
        value={props.newReview.name}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="comments"
        placeholder='enter your comments'
        value={props.newReview.comments}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="ratings"
        placeholder='enter your rating (1-5)'
        value={props.newReview.ratings}
        onChange={props.handleChange}
      /> 
      <button type="submit" onClick={props.handleSubmit}>
        Post Review
      </button>
    </form>
  );
};

export default AddReview;
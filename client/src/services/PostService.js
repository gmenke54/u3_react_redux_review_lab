import axios from 'axios';

export const GetPosts = async () => {
  try {
    const res = await axios.get('http://localhost:3001/api/posts');
    return res.data.posts;
  } catch (error) {
    throw error;
  }
};

export const GetReviews = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3001/api/reviews/${id}`);
    return res.data.reviews;
  } catch (error) {
    throw error;
  }
};

export const PostReview = async (rev) => {
  try {
    const res = await axios.post(`http://localhost:3001/api/reviews`, rev);
    return res.data.review;
  } catch (error) {
    throw error;
  }
};

export const PutPost = async (upd, id) => {
  try {
    const res = await axios.put(
      `http://localhost:3001/api/posts/details/${id}`,
      upd
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const DelReview = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/api/reviews/details/${id}`);
  } catch (error) {
    throw error;
  }
};

export const GetPost = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:3001/api/posts/details/${id}`
    );
    return res.data.post;
  } catch (error) {
    throw error;
  }
};

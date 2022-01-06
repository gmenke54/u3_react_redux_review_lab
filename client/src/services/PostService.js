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

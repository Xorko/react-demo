import axios from 'utils/axios-config';

export async function fetchPosts() {
  const res = await axios.get('/posts');
  return res.data;
}

export async function getPost(postId: number) {
  const res = await axios.get(`/posts/${postId}`);
  return res.data;
}

export async function getPostAuthor(userId: number) {
  const res = await axios.get(`/users/${userId}`);
  return res.data;
}

export async function getPostComments(postId: number) {
  const res = await axios.get(`/posts/${postId}/comments`);
  return res.data;
}

type PostData = {
  author: string;
  title: string;
  body: string;
};

export async function postPost(postData: PostData) {
  const res = await axios.post('/posts', postData);
  return res.data;
}

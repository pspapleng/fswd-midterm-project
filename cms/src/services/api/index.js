import request from "../request";

const api = {
  getAllPost: async () => {
    try {
      const response = await request.get(`/posts`);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  getPostById: async (id) => {
    try {
      const response = await request.get(`/posts/${id}`);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  getAllComment: async () => {
    try {
      const response = await request.get(`/comments`);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  getAllUser: async () => {
    try {
      const response = await request.get(`/users`);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  getUserById: async (id) => {
    try {
      const response = await request.get(`/users/${id}`);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  getAllCategory: async () => {
    try {
      const response = await request.get(`/categories`);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  getCategoryById: async (id) => {
    try {
      const response = await request.get(`/categories/${id}`);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
  getAllTag: async () => {
    try {
      const response = await request.get(`/tags`);
      return response;
    } catch (e) {
      console.log(e);
    }
  },
};

export default api;

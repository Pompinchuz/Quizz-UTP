// src/services/api.js
const API_URL = 'http://localhost:8080/api';

export const authService = {
  async register(userData) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  async login(credentials) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return response.json();
  },

  async updateScore(userId, score) {
    const response = await fetch(`${API_URL}/auth/score/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score })
    });
    return response.json();
  }
};

export const questionService = {
  async getRandomQuestions(count) {
    const response = await fetch(`${API_URL}/questions/random/${count}`);
    return response.json();
  }
};

export const adminService = {
  async getAllQuestions() {
    const response = await fetch(`${API_URL}/admin/questions`);
    return response.json();
  },

  async getQuestionById(id) {
    const response = await fetch(`${API_URL}/admin/questions/${id}`);
    return response.json();
  },

  async createQuestion(questionData) {
    const response = await fetch(`${API_URL}/admin/questions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(questionData)
    });
    return response.json();
  },

  async updateQuestion(id, questionData) {
    const response = await fetch(`${API_URL}/admin/questions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(questionData)
    });
    return response.json();
  },

  async deleteQuestion(id) {
    const response = await fetch(`${API_URL}/admin/questions/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  async getStats() {
    const response = await fetch(`${API_URL}/admin/stats`);
    return response.json();
  }
};
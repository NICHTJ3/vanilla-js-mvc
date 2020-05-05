const API_URL = 'https://barkwireapi.brooks.now.sh/dogs';

export default {
  async getDogs() {
    const response = await fetch(API_URL);
    return response.json();
  },
  async getDog(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  },
};

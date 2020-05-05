import API from '../lib/API.js';

const getDogTemplate = (dog) => `
<div class="container d-flex h-100">
    <div class="row justify-content-center align-self-center">
      <div class="single card h-100">
        <img src="${dog.url}" class="card-img-top" alt="${dog.name}" />
        <div class="card-body">
            <h3 class="name">${dog.name}</h3>
            <p class="card-text">${dog.description}</p>
        </div>
      </div>
  </div>
</div>
`;

export default {
  name: 'dog',
  model: {
    dog: {},
  },
  view(model) {
    return `${getDogTemplate(model.dog)}`;
  },
  async controller(model, params) {
    const dog = await API.getDog(params[1]);
    model.dog = dog;
  },
};

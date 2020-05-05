import API from '../lib/API.js';

const getDogListTemplate = (dog) => `
<div class="card h-100">
  <a href="#/${dog.id}">
  <img src="${dog.url}" class="card-img-top" alt="${dog.name}" />
  <div class="card-body">
      <h3 class="name">${dog.name}</h3>
      <p class="card-text">${dog.description}</p>
  </div>
  </a>
</div>
`;

export default {
  name: 'dogs',
  model: {
    dogs: [],
  },
  view(model) {
    return `
    <div class="container-fluid content-row">
      <div class="row">
      ${model.dogs
        .map(
          (dog) =>
            `<div class="dog col-sm-12 col-lg-6">
              ${getDogListTemplate(dog)}
            </div>`,
        )
        .join('')}
      </div >
    </div>
    `;
  },
  async controller(model, _) {
    const dogs = await API.getDogs();
    model.dogs = dogs;
  },
};

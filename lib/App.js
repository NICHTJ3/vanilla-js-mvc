export default class App {
  constructor(selector) {
    this.appElement = document.querySelector(selector);
    this.components = {};
  }

  addComponent(component) {
    this.components[component.name] = component;
    component.model = this.proxify(component.model);
  }

  async showComponent(name, params) {
    this.currentComponent = this.components[name];
    if (this.currentComponent) {
      await this.currentComponent.controller(
        this.currentComponent.model,
        params,
      );
    }
    this.updateView();
  }

  updateView() {
    if (this.currentComponent) {
      this.appElement.innerHTML = this.currentComponent.view(
        this.currentComponent.model,
      );
    }
  }
  proxify(model) {
    return new Proxy(model, {
      set: (target, property, value) => {
        console.log(
          'Changing',
          property,
          'from',
          target[property],
          'to',
          value,
        );
        target[property] = value;
        this.updateView();
        return true;
      },
    });
  }
}

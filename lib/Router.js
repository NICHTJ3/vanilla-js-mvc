export default class Router {
  constructor(app) {
    this.app = app;
    this.routes = [];
    this.params = [];
    this.hashChange = this.hashChange.bind(this);
    window.addEventListener('hashchange', this.hashChange);
    window.addEventListener('DOMContentLoaded', this.hashChange);
  }

  addRoute(name, path) {
    this.routes.push({ name, path });
  }

  async hashChange() {
    const { hash } = window.location;
    const route = this.routes.find((route) => {
      return hash.match(new RegExp(route.path));
    });
    if (route) {
      const params = new RegExp(route.path).exec(hash);
      this.params = params;
      await this.app.showComponent(route.name, params);
    }
  }
}

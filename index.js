import App from './lib/App.js';
import Router from './lib/Router.js';

// Import compoenents
import Dog from './components/singleDog.js';
import Dogs from './components/dogsList.js';

const app = new App('#app');
const router = new Router(app);

// Add components to app
app.addComponent(Dogs);
app.addComponent(Dog);

// Show dogs on #/
router.addRoute(Dogs.name, '^#/$');
// Show dog on #/id
router.addRoute(Dog.name, '^#/([0-9]+)$');

// Show dogs by default
app.showComponent(Dogs.name);

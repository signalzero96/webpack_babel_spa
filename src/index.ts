import App from './app';

const $app = document.querySelector('#app');

const render = () => {
  const app = new App($app as HTMLElement);
  console.log(app);
};

render();

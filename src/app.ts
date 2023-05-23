import Component from './core/Component';

import Header from './components/Header';

export default class App extends Component {
  constructor(target: HTMLElement, props?: unknown) {
    super(target);
    this.state = {};
  }

  protected componentDidMount(): void {
    const $header = document.querySelector('#header');
    const header = new Header($header as HTMLElement);
  }

  protected template(): string {
    return `
        <header id="header"></header>
        <main id="main">Here is main section</main>
      `;
  }
}

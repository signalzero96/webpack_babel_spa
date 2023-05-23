import Component from '../core/Component';

class Header extends Component {
  constructor(target: HTMLElement, props?: unknown) {
    super(target);
  }
  protected initialState(): void {
    super.initialState();
  }
  protected template(): string {
    return `<div class="header-wrapper">
            This is App's header
        <a href="/" class="nav_link" data-link>Home</a>
        <a href="/login" class="nav_link" data-link>Login</a>
      </div>`;
  }
}

export default Header;

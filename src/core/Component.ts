import type { UnknownObject } from '../types/Core';

export default class Component {
  constructor(
    private target: HTMLElement,
    protected element?: HTMLElement,
    protected key?: String,
    protected props?: UnknownObject,
    protected state?: UnknownObject
  ) {
    // 인스턴스 생성시 명시적으로 내부 함수 실행
    this.initialState();
  }

  protected initialState() {
    this.render();
  }

  protected setState(nextState: object) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  protected componentDidMount() {}
  protected template() {
    return ``;
  }

  protected render() {
    this.element = this.target;
    this.target.innerHTML = this.template();

    this.componentDidMount();
  }
}

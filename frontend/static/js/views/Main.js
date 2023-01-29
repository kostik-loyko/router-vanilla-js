import TemplateView from './TemplateView.js';

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle('Main');
  }

  async getHtml() {
    return `<h1 class="content">This is main page</h1>`;
  }
}
import TemplateView from './TemplateView.js';

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle('Posts');
  }

  async getHtml() {
    return `<h1 class="content">My best posts</h1>`;
  }
}
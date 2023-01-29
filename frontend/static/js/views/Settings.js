import TemplateView from './TemplateView.js';

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle('Settings');
  }

  async getHtml() {
    return `<h1 class="content">Settings is GOOD</h1>`;
  }
}
const { html } = require('common-tags');

function CheckboxGroup({ title, link, linkText, raised }) {
  return html`
  <div class="m-checkbox-group">
    <h2>${title}</h2>
    <p>Some copy about cool cards here.</p>
    <a href="${link}">${linkText}</a>
  </div>`;
}

module.exports = Card;
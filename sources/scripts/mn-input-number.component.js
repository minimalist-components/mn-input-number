'use strict';

let prototype = Object.create(HTMLElement.prototype);
prototype.createdCallback = mnInput;
document.registerElement('mn-number', {prototype});

function mnInput() {
  let element = this;

  let inputAttributes = [
    {
      name: 'type',
      default: 'number',
    },
    {
      name: 'placeholder',
      default: 'undefined',
    },
    {
      name: 'value',
    },
    {
      name: 'name',
    },
    {
      name: 'autocomplete',
      default: 'off',
    },
    {
      name: 'autofocus',
    },
    {
      name: 'pattern',
    },
    {
      name: 'readonly',
    },
    {
      name: 'required',
    },
    {
      name: 'disabled',
    },
    {
      name: 'max',
    },
    {
      name: 'min',
    },
  ];

  // input element
  let input = document.createElement('input');
  inputAttributes.map(setInputAttribute);
  element.appendChild(input);

  // label element
  let placeholder = element.getAttribute('placeholder');
  if (placeholder) {
    let label = document.createElement('label');
    label.textContent = element.getAttribute('disabled')
      ? `${placeholder} disabled`
      : placeholder;
    element.appendChild(label);
  }

  function setInputAttribute(attribute) {
    let isDefaultAttribute = attribute.hasOwnProperty('default');
    let attributeValue = element.getAttribute(attribute.name);

    if (isDefaultAttribute) {
      let isValidValue = attribute.hasOwnProperty('values')
        && attribute.values.indexOf(attributeValue) >= 0;

      let value = isValidValue
        ? attributeValue
        : attribute.default;

      input.setAttribute(attribute.name, value);
    } else if (attributeValue) {
      input.setAttribute(attribute.name, attributeValue);
    }
  }
}

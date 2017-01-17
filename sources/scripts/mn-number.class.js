class MnNumber extends window.MnInput {
  constructor(self) {
    self = super(self)
    this.querySelector('input').setAttribute('type', 'number')
    return self
  }
}

// let attributeSpecs = [
//     {
//       name: 'type',
//       default: 'number',
//     },
//     {
//       name: 'placeholder',
//       default: 'undefined',
//     },
//     {
//       name: 'value',
//     },
//     {
//       name: 'name',
//     },
//     {
//       name: 'autocomplete',
//       default: 'off',
//     },
//     {
//       name: 'autofocus',
//     },
//     {
//       name: 'pattern',
//     },
//     {
//       name: 'readonly',
//     },
//     {
//       name: 'required',
//     },
//     {
//       name: 'disabled',
//     },
//     {
//       name: 'max',
//     },
//     {
//       name: 'min',
//     },
//   ]

customElements.define('mn-number', MnNumber)

class MnNumber extends window.MnInput {
  constructor(self) {
    self = super(self)
    const input = this.querySelector('input')
    input.setAttribute('type', 'number')

    // const mask = document.createElement('input')
    // mask.classList.add('mask')
    // this.appendChild(mask)

    const attributes = Array
      .from(this.attributes)
      .map(attr => {
        const name = attr.name
        const value = attr.value

        return {name, value}
      })

    const attributeSpecs = [
      {
        name: 'max',
      },
      {
        name: 'min',
      },
      {
        name: 'step',
      },
    ]

    attributeSpecs
      .filter(implemented)
      .forEach(setAttribute)

    if (this.getAttribute('decimal')) {
      const precision = !isNaN(this.getAttribute('decimal'))
        ? Number(this.getAttribute('decimal'))
        : 2

      input.addEventListener('change', () => {
        if (this.value) {
          const value = Number(this.value).toFixed(precision)
          this.value = 0
          this.value = value
          this.setAttribute('value', value)
          // mask.value = value + ' %'

          console.log('this.value', this.value)
        }
      })

    }

    return self

    function implemented(defaultAttr) {
      return attributes.some(attr => attr.name === defaultAttr.name)
    }

    function setAttribute(attribute) {
      const value = attributes.filter(attr => attr.name === attribute.name)[0].value
      input.setAttribute(attribute.name, value)
    }
  }
}

window.customElements.define('mn-number', MnNumber)

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

      const mask = document.createElement('div')
      mask.classList.add('mask')
      this.appendChild(mask)

      const value = Number(this.value).toFixed(precision)
      this.value = value
      mask.setAttribute('value', input.value.replace('.', ','))
      this.classList.add('has-value')

      input.addEventListener('keydown', () => {
        mask.setAttribute('value', input.value.replace('.', ','))
      })

      input.addEventListener('keyup', () => {
        mask.setAttribute('value', input.value.replace('.', ','))

        if (input.value.length) {
          this.classList.add('has-value')
        } else {
          this.classList.remove('has-value')
        }
      })

      input.addEventListener('change', () => {
        if (this.value) {
          const value = Number(this.value).toFixed(precision)
          this.value = 0
          this.value = value
          mask.setAttribute('value', input.value.replace('.', ','))
          this.setAttribute('value', value)
          // mask.value = value + ' %'

          // console.log('this.value', this.value)
        }
      })
    } else {
      input.addEventListener('keydown', event => {
        if (event.key === ',') {
          event.preventDefault()
        }
      })

      input.addEventListener('paste', event => {
        event.preventDefault()
        const value = event.clipboardData.getData('Text')
        const number = parseInt(value)
        if (!isNaN(number)) {
          this.value = number
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

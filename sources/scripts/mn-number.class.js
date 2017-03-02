class MnNumber extends window.MnInput {
  constructor(self) {
    self = super(self)
    const input = this.querySelector('input')
    input.setAttribute('type', 'number')

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

    const maskType = this.getAttribute('decimal')
      || this.getAttribute('percentage')
      || this.getAttribute('currency')

    if (maskType) {
      const precision = !isNaN(maskType)
        ? Number(maskType)
        : 2

      const mask = document.createElement('div')
      mask.classList.add('mask')
      this.appendChild(mask)

      if (this.value) {
        const value = Number(this.value).toFixed(precision)
        this.value = value
        mask.setAttribute('value', input.value.replace('.', ','))
        this.classList.add('has-value')
      }

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
        }
      })
    } else {
      input.addEventListener('paste', event => {
        event.preventDefault()
        const value = event.clipboardData.getData('Text')
        const number = parseInt(value)
        if (!isNaN(number)) {
          this.value = number
        }
      })

      input.addEventListener('change', () => {
        this.value = parseInt(input.value)
      })
    }

    input.addEventListener('blur', () => {
      if (!input.value) {
        input.value = ''
      }
    })

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

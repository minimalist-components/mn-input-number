class MnNumber extends window.MnInput {
  constructor(self) {
    self = super(self)
    const instance = this
    const input = this.querySelector('input')
    this.input = input
    input.setAttribute('type', 'number')

    const maskAttribute = this.getAttribute('decimal')
      || this.getAttribute('percentage')
      || this.getAttribute('currency')
      || undefined

    this.precision = !isNaN(maskAttribute)
      ? Number(maskAttribute)
      : 2

    const attributes = Array
      .from(this.attributes)
      .map(nameAndValue)

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

    const maskType = this.getAttribute('decimal') && 'decimal'
      || this.getAttribute('percentage') && 'percentage'
      || this.getAttribute('currency') && 'currency'
      || undefined

    maskType
      ? setMaskEvents()
      : setIntegerEvents()

    input.addEventListener('blur', () => {
      if (!input.value) {
        input.value = ''
      }
    })

    return self

    function setMaskEvents() {
      const mask = document.createElement('div')
      mask.classList.add('mask')
      instance.appendChild(mask)

      if (instance.value) {
        const value = maskType === 'percentage'
          ? Number(instance.value * 100).toFixed(instance.precision)
          : Number(instance.value).toFixed(instance.precision)
        instance.value = value
        mask.setAttribute('value', input.value.replace('.', ','))
        instance.classList.add('has-value')
      }

      input.addEventListener('keydown', () => {
        mask.setAttribute('value', input.value.replace('.', ','))
      })

      input.addEventListener('keyup', () => {
        mask.setAttribute('value', input.value.replace('.', ','))

        if (input.value.length) {
          instance.classList.add('has-value')
        } else {
          instance.classList.remove('has-value')
        }
      })

      input.addEventListener('change', () => {
        if (instance.value) {
          const value = maskType === 'percentage'
            ? Number(instance.value * 100).toFixed(instance.precision)
            : Number(instance.value).toFixed(instance.precision)
          instance.value = 0
          instance.value = value
          mask.setAttribute('value', input.value.replace('.', ','))
          instance.setAttribute('value', value)
        }
      })
    }

    function setIntegerEvents() {
      input.addEventListener('paste', event => {
        event.preventDefault()
        const value = event.clipboardData.getData('Text')
        const number = parseInt(value)
        if (!isNaN(number)) {
          instance.value = number
        }
      })

      input.addEventListener('change', () => {
        const value = parseInt(input.value)
        const isANumber = !isNaN(value)

        if (isANumber) {
          instance.value = value
        }
      })
    }

    function nameAndValue(attr) {
      const name = attr.name
      const value = attr.value

      return {name, value}
    }

    function implemented(defaultAttr) {
      return attributes.some(attr => attr.name === defaultAttr.name)
    }

    function setAttribute(attribute) {
      const value = attributes.filter(attr => attr.name === attribute.name)[0].value
      input.setAttribute(attribute.name, value)
    }
  }

  get value() {
    const isPercentage = this.getAttribute('percentage')
    const val = +this.input.value
    return this.input.value
      ? isPercentage
        // ? val / 100
        ? (val * 100) / 10000
        : val
      : undefined

  }

  set value(value) {
    if (value && !Number.isNaN(value)) {
      this.input.value = value
    }
  }
}

window.customElements.define('mn-number', MnNumber)

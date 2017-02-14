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

    input.addEventListener('keydown', event => {
      const invalidCharacters = [
        ','
      ]

      const isInvalidCharacter = invalidCharacters.indexOf(event.key) >= 0
      if (isInvalidCharacter) {
        event.preventDefault()
      }
    })

    input.addEventListener('change', () => {
    //   input.value = input.value.replace(',', '.')
    //   this.value = input.value
      console.log(input.value)
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

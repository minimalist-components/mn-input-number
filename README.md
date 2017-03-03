[![npm version](https://badge.fury.io/js/mn-number.svg)](https://badge.fury.io/js/mn-number)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-number.svg)](https://gemnasium.com/github.com/minimalist-components/mn-number)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-number

A input component (type number), with minimalist design.

See the [demo](https://minimalist-components.github.io/mn-number/)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-number/master/preview.gif)](https://minimalist-components.github.io/mn-number/) 

### Install

```sh
npm install --save mn-number
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-select/tree/master/dist) with your preferred tool.

### Usage

And then, in your html, you can use the tag ```mn-number``` e.g.

```html
<mn-number placeholder="Number"></mn-number>
<mn-number placeholder="Number (with max 10)" max="10"></mn-number>
```

The following attributes from inputs are supported in this component

- [max](http://www.w3schools.com/tags/att_input_max.asp)
- [min](http://www.w3schools.com/tags/att_input_min.asp)
- [step](http://www.w3schools.com/tags/att_input_step.asp)

### Integer or Float

By default, `mn-number` accept only integer numbers, if you want a float number, use the attribute `decimal` and assign to it a precision, by default is 2, e.g.

```html
<mn-number placeholder="Float number" decimal></mn-number>
<mn-number placeholder="Float number with precision 3" decimal="2"></mn-number>
```

You can use too, `currency` and `percentage`

```html
<mn-number placeholder="money" currency></mn-number>
<mn-number placeholder="money with high precision" currency="4"></mn-number>
<mn-number placeholder="percentage" percentage></mn-number>
```

### Suffix

Maybe you need a different suffix, like `10 m` (meters), or `10 mph` (miles per hour). So, to implement your own suffix, just add a CSS selector, like:

```css
mn-number.mph .mask:after {
  content: 'mph';
}
```

and sure, add the class `.mph` to your mn-number

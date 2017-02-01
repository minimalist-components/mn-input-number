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

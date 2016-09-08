# Minimalist input number

A input component (type number), with minimalist design.

<!-- See the [demo](http://codepen.io/darlanmendonca/full/akgXQq)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-input/master/sources/example/mn-input.gif)](http://codepen.io/darlanmendonca/full/akgXQq) -->

### Install

With bower

```sh
bower install --save mn-number
```

Or just download the main files ```dist/mn-number.css, dist/mn-number.js``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/dist/mn-number.css">
<script src="path/to/dist/mn-number.css"></script>
```

### Usage

And then, in your html, you can use the tag ```mn-number``` i.e.

```html
<mn-number placeholder="Number"></mn-number>
<mn-number placeholder="Number (with max 10)" max="10"></mn-number>
```

The following attributes from inputs are supported in this component

- [max](http://www.w3schools.com/tags/att_input_max.asp)
- [min](http://www.w3schools.com/tags/att_input_min.asp)
- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [pattern](http://www.w3schools.com/tags/att_input_pattern.asp)
- [readonly](http://www.w3schools.com/tags/att_input_readonly.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)

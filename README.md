# Typo Checker Library

A simple npm library that provides a default function for checking typos in strings.

## Usage

```javascript
const checkTypo = require('typo-detector');

// Check for typos in a string
const inputString = 'sp,e text wotj tu[ps';
const string2 = "some text with typos";
const hasTypos = checkTypo(inputString, string2);

if (hasTypos) {
  console.log('Typos found!');
} else {
  console.log('No typos found.');
}
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

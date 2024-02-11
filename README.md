# Typo Checker Library

A simple npm library that provides a default function for checking typos in strings.

## Usage

```javascript
const checkTypo = require('typo-detector');

// Check for typos in a string
const inputString = 'sp,e text wotj tu[ps';
const hasTypos = checkTypo(inputString);

if (hasTypos) {
  console.log('Typos found!');
} else {
  console.log('No typos found.');
}
```

## API

### `typoChecker(options)`

Creates a new instance of the typo checker with the specified options.

- `options` (optional): Configuration options for the typo checker.

### Instance Methods

#### `checkTypos(inputString: string): boolean`

Checks for typos in the provided string and returns `true` if typos are found, otherwise `false`.

## Example

```javascript
const typoChecker = require('typo-checker-library');

// Create a typo checker instance with custom settings
const customChecker = typoChecker({
  ignoreCommonTypos: true,
  customDictionary: ['custom', 'words', 'to', 'ignore'],
});

// Check for typos in another string
const anotherString = 'checking for typos';
const hasTypos = customChecker.checkTypos(anotherString);

if (hasTypos) {
  console.log('Typos found!');
} else {
  console.log('No typos found.');
}
```

## Options

- `ignoreCommonTypos` (optional, default: `false`): Ignores common typos in the English language.
- `customDictionary` (optional, default: `[]`): An array of custom words to ignore during typo checking.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Make sure to replace `typo-checker-library` with the actual name of your npm library and adjust the content as needed. Additionally, you might want to create a `LICENSE` file with the appropriate license text and information.

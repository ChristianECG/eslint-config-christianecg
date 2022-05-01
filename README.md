# eslint-config-christianecg

![eslint-logo](https://img.shields.io/badge/eslint--config--christianecg-v1.0.0-green)
![GitHub followers](https://img.shields.io/github/followers/christianecg?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/christianecg_?style=social)

This package provides a ChristianECG extensible eslint configuration.

## Usage

I provide an exported configuration object in the package. To use it, you should install the `eslint-plugin-import` and our package.

```shell
npm i eslint-plugin-import eslint-config-christianecg -D
```

Then, you can use it in your eslint configuration as an extended configuration on your .eslintrc.js file.

```javascript
module.exports = {
	...
	"extends": [
		...
		"christianecg",
		...
	],
	...
}
```

Feel free to modify the rules and add your own when you want.

## Contributing

If you want to contribute, you can fork the repository and make your own changes.

I am very open to any contribution, and I will try to add it to the package as soon as possible.

## License

To guarantee the quality of the package, I will only release it under the MIT license. You can find the license in the [LICENSE](LICENSE) file.

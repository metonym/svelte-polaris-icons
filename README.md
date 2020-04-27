# svelte-polaris-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Shopify Polaris SVG icons as Svelte components.

This library builds icons from [Shopify Polaris](https://polaris-icons.shopify.com/) as Svelte components with zero dependencies.

## Install

```bash
yarn add -D svelte-polaris-icons
```

## Usage

```html
<script>
  import { AddImageMajorMonotone } from "svelte-polaris-icons";
</script>

<AddImageMajorMonotone />
```

Refer to [docs/README.md](docs/README.md) for a full list of icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-polaris-icons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-polaris-icons
[build]: https://travis-ci.com/metonym/svelte-polaris-icons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-polaris-icons

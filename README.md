# svelte-polaris-icons

[![NPM][npm]][npm-url]

> Shopify Polaris SVG icons as Svelte components.

This library builds icons from [Shopify Polaris](https://polaris-icons.shopify.com/) as Svelte components with zero dependencies.

Try it in the [Svelte REPL](https://svelte.dev/repl/52cb5e5d624b4f2cbb60a110b76161f0?version=3.30.0).

<!-- REPO_URL -->

---

<!-- TOC -->

## Install

```bash
yarn add -D svelte-polaris-icons
# OR
npm i -D svelte-polaris-icons
```

## Usage

### Base import

```svelte
<script>
  import {
    AddMajor,
    ArrowUpMinor,
    CategoriesMajor,
    MobilePlusMajor,
  } from "svelte-polaris-icons";
</script>

<AddMajor width={20} />
<ArrowUpMinor width={20} />
<CategoriesMajor width={20} />
<MobilePlusMajor width={20} />
```

Refer to [ICON_INDEX.md](./ICON_INDEX.md) for list of icons.

### Direct import

The direct import method is recommended because it can lead to faster compile times.

```html
<script>
  import TypeMajor from "svelte-polaris-icons/lib/TypeMajor";
</script>
```

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## Using svelte:component

```svelte
<script>
  import * as Icons from "svelte-polaris-icons";
</script>

{#each Object.keys(Icons) as icon}
  <div>
    <svelte:component title="{icon}" this={Icons[icon]} width={20} />
    {icon}
  </div>
{/each}
```

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-polaris-icons.svg?color=%23ff3e00&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-polaris-icons

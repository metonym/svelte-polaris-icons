# svelte-polaris-icons

[![NPM][npm]][npm-url]

> Shopify Polaris SVG icons as Svelte components.

<!-- REPO_URL -->

This library builds icons from [Shopify Polaris](https://polaris-icons.shopify.com/) as Svelte components with zero dependencies.

Try it in the [Svelte REPL](https://svelte.dev/repl/52cb5e5d624b4f2cbb60a110b76161f0).

---

<!-- TOC -->

## Installation

```bash
# Yarn
yarn add -D svelte-polaris-icons

# NPM
npm i -D svelte-polaris-icons

# pnpm
pnpm i -D svelte-polaris-icons
```

## Usage

Refer to [ICON_INDEX.md](./ICON_INDEX.md) for a list of available icons.

### Base import

```svelte
<script>
  import {
    AddMajor,
    ArrowUpMinor,
    MobilePlusMajor,
    StoreMinor,
  } from "svelte-polaris-icons";
</script>

<AddMajor width={20} />
<ArrowUpMinor width={20} />
<MobilePlusMajor width={20} />
<StoreMinor width={20} />
```

### Direct import

The direct import method is recommended because it can lead to faster compile times.

```html
<script>
  import ExportMinor from "svelte-polaris-icons/lib/ExportMinor.svelte";
</script>
```

## Using `svelte:component`

```svelte
<script>
  import * as Icons from "svelte-polaris-icons";
</script>

{#each Object.keys(Icons) as icon}
  <div>
    <svelte:component this={Icons[icon]} title={icon} width={20} />
    {icon}
  </div>
{/each}
```

## TypeScript

Svelte version 3.31 or greater is required to use this library with TypeScript.

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-polaris-icons.svg?color=%23ff3e00&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-polaris-icons

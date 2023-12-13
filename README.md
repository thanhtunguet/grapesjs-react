grapesjs-react
==============
_A React wrapper library for [GrapesJS](https://grapesjs.com)_

[Online Demo](https://thanhtunguet.github.io/grapesjs-react)

## Installation

```shell
npm i -S grapesjs grapesjs-react grapesjs-blocks-basic
```

or

```shell
yarn add grapesjs grapesjs-react grapesjs-blocks-basic
```

## Usage

#### WebPage

You need to install the [grapesjs-preset-webpage](https://www.npmjs.com/package/grapesjs-preset-webpage) plugin

```tsx
import 'grapesjs/dist/css/grapes.min.css';
import gjspresetwebpage from 'grapesjs-preset-webpage';
import gjsblockbasic from 'grapesjs-blocks-basic'

export const Primary = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      gjspresetwebpage,
      gjsblockbasic
    ]}
  />;
};
```

#### Newsletter

You need to install the [grapesjs-preset-newsletter](https://www.npmjs.com/package/grapesjs-preset-newsletter) plugin

```tsx
import 'grapesjs/dist/css/grapes.min.css';
import gjsblockbasic from 'grapesjs-blocks-basic'
import gjspresetnewsletter from 'grapesjs-preset-newsletter';

export const Newsletter = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      gjsblockbasic, 
      gjspresetnewsletter
    ]}
  />;
};
```

#### MJML

You need to install the [grapesjs-mjml](https://www.npmjs.com/package/grapesjs-mjml) plugin

```tsx
import 'grapesjs/dist/css/grapes.min.css';
import gjsblockbasic from 'grapesjs-blocks-basic'
import gjsmjml from 'grapesjs-mjml';

export const MJML = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      gjsblockbasic,
      gjsmjml
    ]}
  />;
};
```

## Props detail

Editor's props extends the base GrapesJS editor options.

| Name | Desc | Type |
| -- | -- | -- |
| id | string | Editor container id |
| children | ReactNode[] | Children to init (using fromElement) |
| onInit | Function<Editor> | Function will be called after editor was initialized |
| onDestroy | Function<void> | Function will be called when editor unmounted |

The rest props will be passed as options to initialize editor. You can use any options of grapesjs like *plugins*, *blockManager*, *styleManager*, *storageManager*, ...

## Contribution

If you find a bug or need any help, please create an issue.

Pull requests are welcome.

&copy;2021 [thanhtunguet](https://thanhtunguet.github.io)

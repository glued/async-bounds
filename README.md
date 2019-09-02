# async-bounds

Uses [IntersectionObserver](https://developers.google.com/web/updates/2016/04/intersectionobserver) to get the bounds of an element without causing browser re-layout as an alternative to `element.getBoundingClientRect()`

[![npm version](https://img.shields.io/npm/v/async-bounds.svg)](https://www.npmjs.com/package/async-bounds)

## Install

```
npm install async-bounds --save
```

## Usage

Single element

```ts
import asyncBounds from 'async-bounds';
asyncBounds(element).then(bounds => {
  const { x, y, width, height } = bounds;
  console.log(bounds);
});
```

Or async

```ts
import asyncBounds from 'async-bounds';
const { x, y, width, height } = await getBoundingClientRectsAsync(element);
```

Or Multiple elements

```ts
import asyncBounds from 'async-bounds';

// Spread array in, array out
const elements = document.querySelectorAll('div');
getBoundingClientRectsAsync(...elements).then(boundsArray => {
  for (const bounds of boundsArray) {
    const { x, y, width, height } = bounds;
  }
});
```

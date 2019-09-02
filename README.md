# async-bounds

Uses [IntersectionObserver](https://developers.google.com/web/updates/2016/04/intersectionobserver) to get the bounds of an element without causing browser re-layout as an alternative to `element.getBoundingClientRect()`

### usage

Single element

```ts
getBoundingClientRectsAsync(element).then(bounds => {
  const { x, y, width, height } = bounds;
});
```

Or async

```ts
const { x, y, width, height } = await getBoundingClientRectsAsync(element);
```

Or Multiple elements

```ts
// Spread array in, array out
const elements = document.querySelectorAll('div');
getBoundingClientRectsAsync(...elements).then(boundsArray => {
  for (const bounds of boundsArray) {
    const { x, y, width, height } = bounds;
  }
});
```

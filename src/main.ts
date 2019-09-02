type Rect = { x: number; y: number; width: number; height: number };

const getBoundingClientRectsAsync = (...elements: Element[]): Promise<Rect | Rect[]> =>
  new Promise(resolve => {
    const observer = new IntersectionObserver((entries, ob) => {
      ob.disconnect();
      const rects: Rect[] = [];
      for (const entry of entries) {
        const { boundingClientRect } = entry;
        const { top, left, width, height } = boundingClientRect;
        rects.push({ x: left, y: top, width, height });
      }
      const result = rects.length === 1 ? rects[0] : rects;
      resolve(result);
    });

    for (const element of elements) {
      observer.observe(element);
    }
  });

export default getBoundingClientRectsAsync;

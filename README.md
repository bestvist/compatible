# compatible

兼容行 polyfill

## pdf.js 兼容 ie

```js
if (window.CanvasPixelArray) {
  CanvasPixelArray.prototype.set = function (arr) {
    var l = this.length,
      i = 0;

    for (; i < l; i++) {
      this[i] = arr[i];
    }
  };
}
```

## requestAnimationFrame

```js
(function () {
  var lastTime = 0;
  var vendors = ["webkit", "moz"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] ||
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }
  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
})();
```

## performance.now

```js
if (!window.performance.now) {
  window.performance.now = function () {
    return +new Date() - window.performance.timing.navigationStart;
  };
}
```

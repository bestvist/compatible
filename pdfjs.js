if (window.CanvasPixelArray) {
  CanvasPixelArray.prototype.set = function(arr) {
      var l=this.length, i=0;

      for(;i<l;i++) {
          this[i] = arr[i];
      }
  };
}

function myDebounce(fn, delay, immediate = false, cb) {
  let timer = null;
  /** 判断是防抖还是立即执行模式 */
  let isInvoke = false;
  function _debounce(...args) {
    if (timer) clearTimeout(timer);
    if (immediate && !isInvoke) {
      const res = fn.apply(this, args);
      if (cb) cb(res);

      isInvoke = true;
    } else {
      timer = setTimeout(() => {
        const res = fn.apply(this, args);
        if (cb) cb(res);
        isInvoke = false;
      }, delay);
    }
  }
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    isInvoke = false;
    timer = null;
  };

  return _debounce;
}

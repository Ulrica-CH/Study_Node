function throttle(
  func,
  interval,
  options = { leading: true, trailing: false }
) {
  // 1.记录上一次的开始时间
  const { leading, trailing } = options;
  // 每次点击时,重置当前最新时间
  let lastTime = 0;
  // 记录
  let timer = null;
  function _throttle() {
    // 获取"第一次"调用时间
    let nowTime = new Date().getTime();
    //必须第一次执行(lastTime) 且 用户传参调节为首次不立即执行(leading)
    if (!lastTime && !leading) lastTime = nowTime;
    // 获取冷却时间：节流间隔时间-第一次响应时间+发起响应时间
    const remainTime = interval - (nowTime - lastTime);
    //达到冷却，可以执行响应函数
    if (remainTime <= 0) {
      // 如果节流间隔后存在正常响应函数,将"最后一次响应函数"的定时器清除
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      func();
      //记录函数上一次被成功调用的时间戳
      lastTime = nowTime;
      return;
    }
    //节流最后一次也可以执行的判断逻辑
    if (trailing && !timer) {
      // 返回timer,只有冷却归零后还未存在正常调用,timer尚未清零才能调用,一旦调用则重置timer
      timer = setTimeout(() => {
        func();
      }, remainTime);
    }
  }

  return _throttle;
}

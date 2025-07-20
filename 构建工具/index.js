const module = {
  getName: function () {
    console.log("getName");
  },
};
(function (global) {
  global.name = "hello";
})(window);

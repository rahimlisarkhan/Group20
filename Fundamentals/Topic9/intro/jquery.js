const $ = {
  el: null,

  sec: function (selector) {
    this.el = document.querySelector(selector);

    return this;
  },

  css: function () {
    for (let cssIndex in cssobj) {
      this.button.style[cssIndex] = cssobj[cssIndex];
    }

    return this;
  },

  record: function () {
    const media = new navigator.mediaDevices("");
  },

  attr: function (name, value) {
    if (!value) {
      return this.el.getAttribute(name);
    }

    return this.el.setAttribute(name, value);
  },
};

const Cookie = {
  getItem: function (key) {
    const cookies = document.cookie.split("; ");

    let cookiesObj = {};

    for (el of cookies) {
      const subList = el.split("=");

      const subKey = subList[0];
      const subValue = subList[1];

      cookiesObj[subKey] = subValue;
    }

    return cookiesObj[key];
  },

  setItem: function (key, value) {
    document.cookie = key + "=" + value + ";";
  },
};

// 设置主题
export const setTheme = (name) => {
  document.body.className = name;
};

//表单序列化
export const serialize = (data) => {
  let list = [];
  Object.keys(data).forEach((ele) => {
    list.push(`${ele}=${data[ele]}`);
  });
  return list.join("&");
};

// 判断对象类型
export const getObjType = (obj) => {
  var toString = Object.prototype.toString;
  var map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
  };
  if (obj instanceof Element) {
    return "element";
  }
  return map[toString.call(obj)];
};

// 深拷贝
export const deepClone = (data) => {
  var type = getObjType(data);
  var obj;
  if (type === "array") {
    obj = [];
  } else if (type === "object") {
    obj = {};
  } else {
    //不再具有下一层次
    return data;
  }
  if (type === "array") {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]));
    }
  } else if (type === "object") {
    for (var key in data) {
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
};

// 求次幂
function pow1024(num) {
  return Math.pow(1024, num);
}

// 文件大小 字节转换单位
export const filterSize = (size) => {
  if (!size) return "";
  return size < 1024
    ? size + " B"
    : size < pow1024(2)
    ? (size / 1024).toFixed(2) + " KB"
    : size < pow1024(3)
    ? (size / pow1024(2)).toFixed(2) + " MB"
    : size < pow1024(4)
    ? (size / pow1024(3)).toFixed(2) + " GB"
    : (size / pow1024(4)).toFixed(2) + " TB";
};

// 全屏开关
export const fullscreenToggel = () => {
  if (fullscreenEnable()) {
    exitFullScreen();
  } else {
    reqFullScreen();
  }
};

// 判断浏览器是否全屏
export const fullscreenEnable = () => {
  var isFullscreen =
    document.isFullScreen ||
    document.mozIsFullScreen ||
    document.webkitIsFullScreen;
  return isFullscreen;
};

// 监听esc退出全屏
export const listenfullscreen = (callback) => {
  function listen() {
    callback();
  }
  document.addEventListener("fullscreenchange", function () {
    listen();
  });
  document.addEventListener("mozfullscreenchange", function () {
    listen();
  });
  document.addEventListener("webkitfullscreenchange", function () {
    listen();
  });
  document.addEventListener("msfullscreenchange", function () {
    listen();
  });
};

// 浏览器全屏
export const reqFullScreen = () => {
  if (document.documentElement.requestFullScreen) {
    document.documentElement.requestFullScreen();
  } else if (document.documentElement.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  }
};

// 退出浏览器全屏
export const exitFullScreen = () => {
  if (document.documentElement.requestFullScreen) {
    document.exitFullScreen();
  } else if (document.documentElement.webkitRequestFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.mozCancelFullScreen();
  }
};

// 动态插入css
export const loadStyle = (url) => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(link);
};

// 生成随机len位数字
export const randomLenNum = (len, date) => {
  let random = "";
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substr(0, len ? len : 4);
  if (date) random = random + Date.now();
  return random;
};

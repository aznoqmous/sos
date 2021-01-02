/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var charenc = {\n  // UTF-8 encoding\n  utf8: {\n    // Convert a string to a byte array\n    stringToBytes: function(str) {\n      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));\n    },\n\n    // Convert a byte array to a string\n    bytesToString: function(bytes) {\n      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));\n    }\n  },\n\n  // Binary encoding\n  bin: {\n    // Convert a string to a byte array\n    stringToBytes: function(str) {\n      for (var bytes = [], i = 0; i < str.length; i++)\n        bytes.push(str.charCodeAt(i) & 0xFF);\n      return bytes;\n    },\n\n    // Convert a byte array to a string\n    bytesToString: function(bytes) {\n      for (var str = [], i = 0; i < bytes.length; i++)\n        str.push(String.fromCharCode(bytes[i]));\n      return str.join('');\n    }\n  }\n};\n\nmodule.exports = charenc;\n\n\n//# sourceURL=webpack:///./node_modules/charenc/charenc.js?");

/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\n  var base64map\n      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',\n\n  crypt = {\n    // Bit-wise rotation left\n    rotl: function(n, b) {\n      return (n << b) | (n >>> (32 - b));\n    },\n\n    // Bit-wise rotation right\n    rotr: function(n, b) {\n      return (n << (32 - b)) | (n >>> b);\n    },\n\n    // Swap big-endian to little-endian and vice versa\n    endian: function(n) {\n      // If number given, swap endian\n      if (n.constructor == Number) {\n        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;\n      }\n\n      // Else, assume array and swap all items\n      for (var i = 0; i < n.length; i++)\n        n[i] = crypt.endian(n[i]);\n      return n;\n    },\n\n    // Generate an array of any length of random bytes\n    randomBytes: function(n) {\n      for (var bytes = []; n > 0; n--)\n        bytes.push(Math.floor(Math.random() * 256));\n      return bytes;\n    },\n\n    // Convert a byte array to big-endian 32-bit words\n    bytesToWords: function(bytes) {\n      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)\n        words[b >>> 5] |= bytes[i] << (24 - b % 32);\n      return words;\n    },\n\n    // Convert big-endian 32-bit words to a byte array\n    wordsToBytes: function(words) {\n      for (var bytes = [], b = 0; b < words.length * 32; b += 8)\n        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);\n      return bytes;\n    },\n\n    // Convert a byte array to a hex string\n    bytesToHex: function(bytes) {\n      for (var hex = [], i = 0; i < bytes.length; i++) {\n        hex.push((bytes[i] >>> 4).toString(16));\n        hex.push((bytes[i] & 0xF).toString(16));\n      }\n      return hex.join('');\n    },\n\n    // Convert a hex string to a byte array\n    hexToBytes: function(hex) {\n      for (var bytes = [], c = 0; c < hex.length; c += 2)\n        bytes.push(parseInt(hex.substr(c, 2), 16));\n      return bytes;\n    },\n\n    // Convert a byte array to a base-64 string\n    bytesToBase64: function(bytes) {\n      for (var base64 = [], i = 0; i < bytes.length; i += 3) {\n        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];\n        for (var j = 0; j < 4; j++)\n          if (i * 8 + j * 6 <= bytes.length * 8)\n            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));\n          else\n            base64.push('=');\n      }\n      return base64.join('');\n    },\n\n    // Convert a base-64 string to a byte array\n    base64ToBytes: function(base64) {\n      // Remove non-base-64 characters\n      base64 = base64.replace(/[^A-Z0-9+\\/]/ig, '');\n\n      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;\n          imod4 = ++i % 4) {\n        if (imod4 == 0) continue;\n        bytes.push(((base64map.indexOf(base64.charAt(i - 1))\n            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))\n            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));\n      }\n      return bytes;\n    }\n  };\n\n  module.exports = crypt;\n})();\n\n\n//# sourceURL=webpack:///./node_modules/crypt/crypt.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\n// The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\nmodule.exports = function (obj) {\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\n}\n\nfunction isBuffer (obj) {\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer (obj) {\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function(){\r\n  var crypt = __webpack_require__(/*! crypt */ \"./node_modules/crypt/crypt.js\"),\r\n      utf8 = __webpack_require__(/*! charenc */ \"./node_modules/charenc/charenc.js\").utf8,\r\n      isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\"),\r\n      bin = __webpack_require__(/*! charenc */ \"./node_modules/charenc/charenc.js\").bin,\r\n\r\n  // The core\r\n  md5 = function (message, options) {\r\n    // Convert to byte array\r\n    if (message.constructor == String)\r\n      if (options && options.encoding === 'binary')\r\n        message = bin.stringToBytes(message);\r\n      else\r\n        message = utf8.stringToBytes(message);\r\n    else if (isBuffer(message))\r\n      message = Array.prototype.slice.call(message, 0);\r\n    else if (!Array.isArray(message) && message.constructor !== Uint8Array)\r\n      message = message.toString();\r\n    // else, assume byte array already\r\n\r\n    var m = crypt.bytesToWords(message),\r\n        l = message.length * 8,\r\n        a =  1732584193,\r\n        b = -271733879,\r\n        c = -1732584194,\r\n        d =  271733878;\r\n\r\n    // Swap endian\r\n    for (var i = 0; i < m.length; i++) {\r\n      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |\r\n             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;\r\n    }\r\n\r\n    // Padding\r\n    m[l >>> 5] |= 0x80 << (l % 32);\r\n    m[(((l + 64) >>> 9) << 4) + 14] = l;\r\n\r\n    // Method shortcuts\r\n    var FF = md5._ff,\r\n        GG = md5._gg,\r\n        HH = md5._hh,\r\n        II = md5._ii;\r\n\r\n    for (var i = 0; i < m.length; i += 16) {\r\n\r\n      var aa = a,\r\n          bb = b,\r\n          cc = c,\r\n          dd = d;\r\n\r\n      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);\r\n      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);\r\n      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);\r\n      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);\r\n      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);\r\n      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);\r\n      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);\r\n      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);\r\n      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);\r\n      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);\r\n      c = FF(c, d, a, b, m[i+10], 17, -42063);\r\n      b = FF(b, c, d, a, m[i+11], 22, -1990404162);\r\n      a = FF(a, b, c, d, m[i+12],  7,  1804603682);\r\n      d = FF(d, a, b, c, m[i+13], 12, -40341101);\r\n      c = FF(c, d, a, b, m[i+14], 17, -1502002290);\r\n      b = FF(b, c, d, a, m[i+15], 22,  1236535329);\r\n\r\n      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);\r\n      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);\r\n      c = GG(c, d, a, b, m[i+11], 14,  643717713);\r\n      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);\r\n      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);\r\n      d = GG(d, a, b, c, m[i+10],  9,  38016083);\r\n      c = GG(c, d, a, b, m[i+15], 14, -660478335);\r\n      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);\r\n      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);\r\n      d = GG(d, a, b, c, m[i+14],  9, -1019803690);\r\n      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);\r\n      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);\r\n      a = GG(a, b, c, d, m[i+13],  5, -1444681467);\r\n      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);\r\n      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);\r\n      b = GG(b, c, d, a, m[i+12], 20, -1926607734);\r\n\r\n      a = HH(a, b, c, d, m[i+ 5],  4, -378558);\r\n      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);\r\n      c = HH(c, d, a, b, m[i+11], 16,  1839030562);\r\n      b = HH(b, c, d, a, m[i+14], 23, -35309556);\r\n      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);\r\n      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);\r\n      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);\r\n      b = HH(b, c, d, a, m[i+10], 23, -1094730640);\r\n      a = HH(a, b, c, d, m[i+13],  4,  681279174);\r\n      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);\r\n      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);\r\n      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);\r\n      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);\r\n      d = HH(d, a, b, c, m[i+12], 11, -421815835);\r\n      c = HH(c, d, a, b, m[i+15], 16,  530742520);\r\n      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);\r\n\r\n      a = II(a, b, c, d, m[i+ 0],  6, -198630844);\r\n      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);\r\n      c = II(c, d, a, b, m[i+14], 15, -1416354905);\r\n      b = II(b, c, d, a, m[i+ 5], 21, -57434055);\r\n      a = II(a, b, c, d, m[i+12],  6,  1700485571);\r\n      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);\r\n      c = II(c, d, a, b, m[i+10], 15, -1051523);\r\n      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);\r\n      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);\r\n      d = II(d, a, b, c, m[i+15], 10, -30611744);\r\n      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);\r\n      b = II(b, c, d, a, m[i+13], 21,  1309151649);\r\n      a = II(a, b, c, d, m[i+ 4],  6, -145523070);\r\n      d = II(d, a, b, c, m[i+11], 10, -1120210379);\r\n      c = II(c, d, a, b, m[i+ 2], 15,  718787259);\r\n      b = II(b, c, d, a, m[i+ 9], 21, -343485551);\r\n\r\n      a = (a + aa) >>> 0;\r\n      b = (b + bb) >>> 0;\r\n      c = (c + cc) >>> 0;\r\n      d = (d + dd) >>> 0;\r\n    }\r\n\r\n    return crypt.endian([a, b, c, d]);\r\n  };\r\n\r\n  // Auxiliary functions\r\n  md5._ff  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (b & c | ~b & d) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n  md5._gg  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (b & d | c & ~d) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n  md5._hh  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (b ^ c ^ d) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n  md5._ii  = function (a, b, c, d, x, s, t) {\r\n    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;\r\n    return ((n << s) | (n >>> (32 - s))) + b;\r\n  };\r\n\r\n  // Package private blocksize\r\n  md5._blocksize = 16;\r\n  md5._digestsize = 16;\r\n\r\n  module.exports = function (message, options) {\r\n    if (message === undefined || message === null)\r\n      throw new Error('Illegal argument ' + message);\r\n\r\n    var digestbytes = crypt.wordsToBytes(md5(message, options));\r\n    return options && options.asBytes ? digestbytes :\r\n        options && options.asString ? bin.bytesToString(digestbytes) :\r\n        crypt.bytesToHex(digestbytes);\r\n  };\r\n\r\n})();\r\n\n\n//# sourceURL=webpack:///./node_modules/md5/md5.js?");

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\nclass Canvas {\r\n\r\n    constructor(options={}) {\r\n        this.options = Object.assign({\r\n            width: 32,\r\n            height: 32,\r\n            background: '#000',\r\n            zoom: 3\r\n        }, options)\r\n\r\n        this.build()\r\n    }\r\n\r\n    build(){\r\n        this.c = document.createElement('canvas')\r\n        this.c.width = this.options.width\r\n        this.c.height = this.options.height\r\n        this.ctx = this.c.getContext('2d')\r\n\r\n        document.body.appendChild(this.c)\r\n\r\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setStyles({\r\n            imageRendering: 'pixelated'\r\n        }, this.c)\r\n\r\n        this.fill()\r\n    }\r\n\r\n    setFill(color){\r\n        this.ctx.fillStyle = color\r\n    }\r\n\r\n    setStroke(color) {\r\n        this.ctx.strokeStyle = color\r\n    }\r\n\r\n    fill(color=null){\r\n        if(color) this.setFill(color)\r\n        else this.setFill(this.options.background)\r\n        this.ctx.fillRect(0, 0, this.c.width, this.c.height)\r\n    }\r\n\r\n    arc(x, y, size){\r\n        this.ctx.beginPath()\r\n        x = this.c.width / 2 + x * this.options.zoom\r\n        y = this.c.height / 2 + y * this.options.zoom\r\n        size *= this.options.zoom\r\n        this.ctx.arc(x, y, size, 0, 2 * Math.PI)\r\n        this.ctx.fill()\r\n    }\r\n\r\n    fillRect(x, y, w, h){\r\n        x = this.c.width / 2 + x * this.options.zoom\r\n        y = this.c.height / 2 + y * this.options.zoom\r\n\r\n        w *= this.options.zoom\r\n        h *= this.options.zoom\r\n\r\n        this.ctx.fillRect(x, y, w, h)\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/canvas.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DOM; });\nclass DOM {\r\n\r\n    static loaded(){\r\n        return new Promise(res =>{\r\n            if(document.body) return res(document.body)\r\n            document.addEventListener('DOMContentLoaded', ()=>{\r\n                return res(document.body)\r\n            })\r\n        })\r\n        .then(body => {\r\n            DOM.setStyles({\r\n                padding: 0,\r\n                margin: 0,\r\n                overflow: 'hidden',\r\n                width: '100vw',\r\n                height: '100vh'\r\n            }, body)\r\n            return body\r\n        })\r\n    }\r\n\r\n    static setStyles(styles, element){\r\n        for(let key in styles) element.style[key] = styles[key]\r\n    }\r\n\r\n    static wheelup(callback){\r\n        document.addEventListener('wheel', (e)=>{\r\n            if(e.deltaY > 0) callback()\r\n        })\r\n    }\r\n    static wheeldown(callback){\r\n        document.addEventListener('wheel', (e)=>{\r\n            if(e.deltaY < 0) callback()\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/entities/character.js":
/*!***********************************!*\
  !*** ./src/entities/character.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Character; });\n/* harmony import */ var _generators_character_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/character-generator */ \"./src/generators/character-generator.js\");\n\r\n\r\nclass Character {\r\n    constructor(options) {\r\n        options = Object.assign({\r\n            x: 0,\r\n            y: 0,\r\n            secret: 'sinospace'\r\n        }, options)\r\n        for(let key in options) this[key] = options[key]\r\n        this.skeleton = _generators_character_generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].generate(this.secret)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/entities/character.js?");

/***/ }),

/***/ "./src/entities/planet.js":
/*!********************************!*\
  !*** ./src/entities/planet.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Planet; });\n/* harmony import */ var _generators_character_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/character-generator */ \"./src/generators/character-generator.js\");\n/* harmony import */ var _generators_planet_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/planet-generator */ \"./src/generators/planet-generator.js\");\n\r\n\r\n\r\nclass Planet {\r\n    constructor(options) {\r\n        options = Object.assign({\r\n            x: 0,\r\n            y: 0,\r\n            secret: 'sos'\r\n        }, options)\r\n        for(let key in options) this[key] = options[key]\r\n        this.skeleton = _generators_planet_generator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].generate(this.secret)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/entities/planet.js?");

/***/ }),

/***/ "./src/entities/spaceship.js":
/*!***********************************!*\
  !*** ./src/entities/spaceship.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Spaceship; });\n/* harmony import */ var _generators_spaceship_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/spaceship-generator */ \"./src/generators/spaceship-generator.js\");\n\r\n\r\nclass Spaceship {\r\n    constructor(options) {\r\n        options = Object.assign({\r\n            x: 0,\r\n            y: 0,\r\n            th: 0,\r\n            secret: 'sinospace'\r\n        }, options)\r\n        for(let key in options) this[key] = options[key]\r\n        this.skeleton = _generators_spaceship_generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].generate(this.secret)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/entities/spaceship.js?");

/***/ }),

/***/ "./src/generators/character-generator.js":
/*!***********************************************!*\
  !*** ./src/generators/character-generator.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CharacterGenerator; });\n/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ \"./src/generators/generator.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\r\n\r\n\r\nclass CharacterGenerator {\r\n\r\n    static generate(secret){\r\n        secret = _generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSaltedArr(secret, 10)\r\n\r\n        let headWidth = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].minMax(secret[0] / 9 * 4, 1)\r\n        let headHeight = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].minMax(secret[1] / 9 * 4, headWidth * 0.5, headWidth * 2)\r\n        let bodyWidth = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].minMax(secret[2] / 9 * 8, headWidth)\r\n        let bodyHeight = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].minMax(secret[3] / 9 * 8, bodyWidth)\r\n        let legWidth = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].minMax(secret[4] / 9 * bodyWidth / 2, 1, Math.floor((bodyWidth-1) / 2))\r\n        let legHeight = secret[5] / 9 * 7 + 1\r\n        let armHeight = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].minMax((secret[7] / 9) * bodyHeight, 1, bodyHeight)\r\n        let armWidth  = _utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].minMax((secret[6] / 9) * bodyWidth / 2, 1, armHeight / 2)\r\n\r\n        let width = bodyWidth + armWidth * 2\r\n        let height = headHeight + bodyHeight + legHeight\r\n\r\n        let headColor = `hsl(${secret[1] * secret[2] * secret[3] % 255 * 255}, 30%, 60%)`\r\n        let bodyColor = `hsl(${secret[4] * secret[5] * secret[6] % 255 * 255}, 30%, 70%)`\r\n        let legColor  = `hsl(${secret[7] * secret[8] * secret[9] % 255 * 255}, 30%, 50%)`\r\n        let armColor  = `hsl(${secret[7] * secret[8] * secret[9] % 255 * 255}, 30%, 50%)`\r\n\r\n        return {\r\n            headWidth: Math.floor(headWidth),\r\n            headHeight: Math.floor(headHeight),\r\n            bodyWidth: Math.floor(bodyWidth),\r\n            bodyHeight: Math.floor(bodyHeight),\r\n            legWidth: Math.floor(legWidth),\r\n            legHeight: Math.floor(legHeight),\r\n            armHeight: Math.floor(armHeight),\r\n            armWidth: Math.floor(armWidth),\r\n            width: Math.floor(width),\r\n            height: Math.floor(height),\r\n            headColor,\r\n            bodyColor,\r\n            legColor,\r\n            armColor\r\n        }\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/generators/character-generator.js?");

/***/ }),

/***/ "./src/generators/generator.js":
/*!*************************************!*\
  !*** ./src/generators/generator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Generator; });\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ \"./node_modules/md5/md5.js\");\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Generator {\r\n    static getSalted(string, length=null){\r\n        let res = md5__WEBPACK_IMPORTED_MODULE_0___default()(string)\r\n            .split('')\r\n            .map(char => {\r\n                if(parseInt(char)) return char\r\n                else return ((char.charCodeAt(0)+'').split(''))[0]\r\n            })\r\n        if(length) res.splice(length)\r\n        return res.join('')\r\n    }\r\n\r\n    static getSaltedArr(string, length=null){\r\n        return Generator.getSalted(string, length).split('').map(char => parseInt(char))\r\n    }\r\n\r\n    static getColor(secret){\r\n        secret = Generator.getSaltedArr(secret, 3)\r\n        return  `hsl(${secret[0] * secret[1] * secret[2] * secret[0] * secret[1] * secret[2] % 255}, 50%, 60%)`\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/generators/generator.js?");

/***/ }),

/***/ "./src/generators/planet-generator.js":
/*!********************************************!*\
  !*** ./src/generators/planet-generator.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlanetGenerator; });\n/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ \"./src/generators/generator.js\");\n\r\n\r\nclass PlanetGenerator {\r\n    static generate(secret){\r\n        secret = _generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSaltedArr(secret)\r\n        return {\r\n            color: _generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getColor(secret.join('')),\r\n            size: parseInt(secret[0])\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/generators/planet-generator.js?");

/***/ }),

/***/ "./src/generators/spaceship-generator.js":
/*!***********************************************!*\
  !*** ./src/generators/spaceship-generator.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpaceshipGenerator; });\n/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ \"./src/generators/generator.js\");\n\r\n\r\nclass SpaceshipGenerator {\r\n    static generate(secret){\r\n        let color = _generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getColor(secret)\r\n        secret = _generator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSaltedArr(secret)\r\n\r\n        return {\r\n            noseHeight: secret[0] + 1,\r\n            noseWidth: secret[1] + 1,\r\n            cabinHeight: secret[2] + 1,\r\n            cabinWidth: secret[3] + 3,\r\n            bodyHeight: secret[4] + 4,\r\n            bodyWidth: secret[5] + 4,\r\n            wing: secret[6] + 1,\r\n            engineHeight: secret[7] + 1,\r\n            engineWidth: secret[8] + 1,\r\n            tail: secret[9] + 1,\r\n            color: color\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/generators/spaceship-generator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _entities_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/character */ \"./src/entities/character.js\");\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer */ \"./src/renderer.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n/* harmony import */ var _entities_planet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/planet */ \"./src/entities/planet.js\");\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! md5 */ \"./node_modules/md5/md5.js\");\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _entities_spaceship__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/spaceship */ \"./src/entities/spaceship.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loaded()\r\n    .then(()=>{\r\n\r\n        let canvas = new _canvas__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\r\n            width: document.body.getBoundingClientRect().width,\r\n            height: document.body.getBoundingClientRect().height\r\n        })\r\n        let renderer = new _renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas)\r\n\r\n        generateRandomEntities(renderer)\r\n\r\n        renderer.addSpaceship(new _entities_spaceship__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({}))\r\n        renderer.play()\r\n\r\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wheelup(()=>{\r\n            canvas.options.zoom *= 1.1\r\n        })\r\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wheeldown(()=>{\r\n            canvas.options.zoom /= 1.1\r\n        })\r\n\r\n        function generateRandomEntities(){\r\n            let countX = 20\r\n            let size = canvas.options.width / countX\r\n            let countY = canvas.options.height / size\r\n            for(let y = 0; y < countY; y++){\r\n                for(let x = 0; x < countX; x++){\r\n                    renderer.addSpaceship(new _entities_spaceship__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\r\n                        secret: md5__WEBPACK_IMPORTED_MODULE_5___default()(x+'o'+y),\r\n                        x: - canvas.options.width/2 + x * size,\r\n                        y: - canvas.options.height/2 + y * size\r\n                    }))\r\n                    renderer.addPlanet(new _entities_planet__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\r\n                        secret: md5__WEBPACK_IMPORTED_MODULE_5___default()(x+'o'+y),\r\n                        x: - canvas.options.width/2 + x * size,\r\n                        y: - canvas.options.height/2 + y * size\r\n                    }))\r\n                    renderer.addCharacter(new _entities_character__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\r\n                        secret: md5__WEBPACK_IMPORTED_MODULE_5___default()(x+'o'+y),\r\n                        x: - canvas.options.width/2 + x * size,\r\n                        y: - canvas.options.height/2 + y * size\r\n                    }))\r\n                }\r\n            }\r\n        }\r\n    })\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderer; });\nclass Renderer {\r\n\r\n    constructor(canvas) {\r\n        this.canvas = canvas\r\n\r\n        this.planets = []\r\n        this.characters = []\r\n        this.spaceships = []\r\n\r\n        this.playing = false\r\n    }\r\n\r\n    play(){\r\n        this.playing = true\r\n        this.loop()\r\n    }\r\n    stop(){\r\n        this.playing = false\r\n    }\r\n    loop(){\r\n        this.render()\r\n        if(this.playing) requestAnimationFrame(this.loop.bind(this))\r\n    }\r\n\r\n    render(){\r\n        this.canvas.fill()\r\n        this.planets.map(p => {\r\n            this.renderPlanet(p)\r\n        })\r\n        this.spaceships.map(s => {\r\n            this.renderSpaceship(s)\r\n        })\r\n        this.characters.map(c => {\r\n            this.renderCharacter(c)\r\n        })\r\n    }\r\n\r\n    addPlanet(planet){\r\n        this.planets.push(planet)\r\n    }\r\n\r\n    addCharacter(character){\r\n        this.characters.push(character)\r\n    }\r\n\r\n    addSpaceship(spaceship){\r\n        this.spaceships.push(spaceship)\r\n    }\r\n\r\n    renderPlanet(planet){\r\n        let x = planet.x\r\n        let y = planet.y\r\n        this.canvas.setFill(planet.skeleton.color)\r\n        this.canvas.arc(x, y, planet.skeleton.size)\r\n    }\r\n\r\n    renderCharacter(character){\r\n\r\n        let x = character.x - character.skeleton.width / 2\r\n        let y = character.y - character.skeleton.height\r\n\r\n        /**\r\n         * head\r\n         */\r\n        this.canvas.setFill(character.skeleton.headColor)\r\n        this.canvas.fillRect(\r\n            x + character.skeleton.width / 2 - character.skeleton.headWidth / 2,\r\n            y,\r\n            character.skeleton.headWidth,\r\n            character.skeleton.headHeight\r\n        )\r\n\r\n        /**\r\n         * body\r\n         */\r\n        this.canvas.setFill(character.skeleton.bodyColor)\r\n        this.canvas.fillRect(\r\n            x + character.skeleton.width / 2 - character.skeleton.bodyWidth / 2,\r\n            y + character.skeleton.headHeight,\r\n            character.skeleton.bodyWidth,\r\n            character.skeleton.bodyHeight\r\n        )\r\n\r\n        /**\r\n         * arms\r\n         */\r\n        this.canvas.setFill(character.skeleton.armColor)\r\n        this.canvas.fillRect(\r\n            x,\r\n            y + character.skeleton.headHeight + this.getBreath(),\r\n            character.skeleton.armWidth,\r\n            character.skeleton.armHeight\r\n        )\r\n        this.canvas.fillRect(\r\n            x + character.skeleton.armWidth + character.skeleton.bodyWidth,\r\n            y + character.skeleton.headHeight + this.getBreath(),\r\n            character.skeleton.armWidth,\r\n            character.skeleton.armHeight\r\n        )\r\n\r\n        /**\r\n         * legs\r\n         */\r\n        this.canvas.setFill(character.skeleton.legColor)\r\n        this.canvas.fillRect(\r\n            x + character.skeleton.width / 2 - character.skeleton.bodyWidth / 2,\r\n            y + character.skeleton.headHeight + character.skeleton.bodyHeight,\r\n            character.skeleton.legWidth,\r\n            character.skeleton.legHeight\r\n        )\r\n        this.canvas.fillRect(\r\n            x + character.skeleton.width / 2 + character.skeleton.bodyWidth / 2 - character.skeleton.legWidth,\r\n            y + character.skeleton.headHeight + character.skeleton.bodyHeight,\r\n            character.skeleton.legWidth,\r\n            character.skeleton.legHeight\r\n        )\r\n    }\r\n\r\n    renderSpaceship(spaceship){\r\n        let s = spaceship.skeleton\r\n        let height = s.noseHeight + s.cabinHeight + s.bodyHeight + s.engineHeight\r\n        let width = s.noseWidth + s.cabinWidth + s.bodyWidth + s.engineWidth\r\n        let x = spaceship.x + width / 2\r\n        let y = spaceship.y - height / 2\r\n\r\n\r\n        this.canvas.setFill(s.color)\r\n\r\n        // nose\r\n        this.canvas.fillRect(\r\n            x - s.noseWidth / 2, y - height / 2,\r\n            s.noseWidth, s.noseHeight\r\n        )\r\n        // cabin\r\n        this.canvas.fillRect(\r\n            x - s.cabinWidth / 2, y - height / 2 + s.noseHeight,\r\n            s.cabinWidth, s.cabinHeight\r\n        )\r\n        // body\r\n        this.canvas.fillRect(\r\n            x - s.bodyWidth / 2, y - height / 2 + s.noseHeight + s.cabinHeight,\r\n            s.bodyWidth, s.bodyHeight\r\n        )\r\n        // engine\r\n        this.canvas.fillRect(\r\n            x - s.engineWidth / 2, y + height / 2 - s.engineHeight,\r\n            s.engineWidth, s.engineHeight\r\n        )\r\n        // wings\r\n        this.canvas.fillRect(\r\n            x - s.bodyWidth / 2 - s.wing, y - height / 2 + s.noseHeight + s.cabinHeight,\r\n            s.wing, s.bodyHeight - 1\r\n        )\r\n        this.canvas.fillRect(\r\n            x + s.bodyWidth / 2, y - height / 2 + s.noseHeight + s.cabinHeight,\r\n            s.wing, s.bodyHeight - 1\r\n        )\r\n\r\n    }\r\n\r\n    getBreath(time=1000){\r\n        return ( Math.sin(Date.now() / time * 2 ) + 1 ) / 2\r\n    }\r\n\r\n    clear(){\r\n        this.characters = []\r\n        this.planets = []\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/renderer.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Utils; });\nclass Utils {\r\n    static minMax(value, min=0, max=null){\r\n        if(value < min) return min\r\n        if(max !== null && value > max) return max\r\n        return value\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
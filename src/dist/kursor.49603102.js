// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"libraries/Kursor-master/dist/kursor.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Kursor v0.1.5
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  */
(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("kursor", [], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["kursor"] = factory();else root["kursor"] = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "/dist/";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/

      /*! no static exports found */

      /***/
      function srcIndexJs(module, exports, __webpack_require__) {
        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n__webpack_require__(/*! ./styles/index.styl */ \"./src/styles/index.styl\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar key = 1;\n\nvar kursor =\n/*#__PURE__*/\nfunction () {\n  function kursor() {\n    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, kursor);\n\n    var _props = {\n      type: 1,\n      ...props\n    };\n    this.props = _props;\n    this.key = key === 1 ? '' : key;\n    key++;\n    this.render();\n    this.hovers();\n    this.mousemove();\n    this.down();\n  }\n\n  _createClass(kursor, [{\n    key: \"color\",\n    value: function color(colorx) {\n      (0, _utils.setColor)('color', colorx, this.kursor);\n      (0, _utils.setColor)('color', colorx, this.kursorChild);\n    }\n  }, {\n    key: \"hidden\",\n    value: function hidden() {\n      var isHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n\n      if (isHidden) {\n        this.addClass('kursor--hidden');\n        this.addClass('kursorChild--hidden', true);\n      } else {\n        this.removeClass('kursor--hidden');\n        this.removeClass('kursorChild--hidden', true);\n      }\n    }\n  }, {\n    key: \"createWrapper\",\n    value: function createWrapper() {\n      var wrapper = document.createElement('div');\n      wrapper.setAttribute('id', 'kursorWrapper');\n      document.querySelector(this.props.el).insertBefore(wrapper, document.querySelector(this.props.el).firstChild);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.mobileAndTabletcheck()) {\n        return;\n      }\n\n      this.createCursor('kursorChild');\n      this.createCursor('kursor');\n\n      if (this.props.hasOwnProperty('removeDefaultCursor')) {\n        if (this.props.removeDefaultCursor) {\n          document.body.classList.add('notCursor');\n        }\n      }\n\n      if (this.props.hasOwnProperty('type')) {\n        this.addClass(\"kursor--\".concat(this.props.type));\n      }\n    }\n  }, {\n    key: \"down\",\n    value: function down() {\n      var _this = this;\n\n      document.addEventListener('mousedown', function (e) {\n        _this.addClass('kursor--down');\n      });\n      document.addEventListener('mouseup', function (e) {\n        _this.removeClass('kursor--down');\n      });\n    }\n  }, {\n    key: \"mobileAndTabletcheck\",\n    value: function mobileAndTabletcheck() {\n      var check = false;\n\n      (function (a) {\n        if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4))) check = true;\n      })(navigator.userAgent || navigator.vendor || window.opera);\n\n      return check;\n    }\n  }, {\n    key: \"mousemove\",\n    value: function mousemove() {\n      var _this2 = this;\n\n      var hasEl = this.props.hasOwnProperty('el');\n      var el = window;\n\n      if (hasEl) {\n        el = document.querySelector(this.props.el);\n      }\n\n      el.addEventListener('mousemove', function (e) {\n        var cursor = document.querySelector('.kursor' + _this2.key);\n        var cursorChild = document.querySelector('.kursorChild' + _this2.key);\n\n        if (hasEl) {\n          var notEl = e.target !== document.querySelector(_this2.props.el);\n          var parentEl = e.target.closest(_this2.props.el);\n\n          if (notEl) {\n            cursor = parentEl.querySelector('.kursor' + _this2.key);\n            cursorChild = parentEl.querySelector('.kursorChild' + _this2.key);\n          } else {\n            cursor = e.target.querySelector('.kursor' + _this2.key);\n            cursorChild = e.target.querySelector('.kursorChild' + _this2.key);\n          }\n\n          cursor.style.left = \"\".concat(notEl ? e.offsetX + e.target.offsetLeft : e.offsetX, \"px\");\n          cursor.style.top = \"\".concat(notEl ? e.offsetY + e.target.offsetTop : e.offsetY, \"px\");\n          cursorChild.style.left = \"\".concat(notEl ? e.offsetX + e.target.offsetLeft : e.offsetX, \"px\");\n          cursorChild.style.top = \"\".concat(notEl ? e.offsetY + e.target.offsetTop : e.offsetY, \"px\");\n        } else {\n          cursor.style.left = \"\".concat(e.x, \"px\");\n          cursor.style.top = \"\".concat(e.y, \"px\");\n          cursorChild.style.left = \"\".concat(e.x, \"px\");\n          cursorChild.style.top = \"\".concat(e.y, \"px\");\n        }\n      });\n      var doc = document;\n\n      if (hasEl) {\n        doc = document.querySelector(this.props.el);\n      }\n\n      doc.addEventListener('mouseenter', function (e) {\n        _this2.removeClass('kursor--hidden');\n\n        _this2.removeClass('kursorChild--hidden', true);\n      });\n      doc.addEventListener('mouseleave', function (e) {\n        _this2.addClass('kursor--hidden');\n\n        _this2.addClass('kursorChild--hidden', true);\n      });\n    }\n  }, {\n    key: \"hovers\",\n    value: function hovers() {\n      var _this3 = this;\n\n      var hovers = document.querySelectorAll('.k-hover' + this.key);\n      console.log(hovers);\n      hovers.forEach(function (item) {\n        item.addEventListener('mouseenter', function () {\n          _this3.addClass('--hover');\n        });\n        item.addEventListener('mouseleave', function () {\n          _this3.removeClass('--hover');\n        });\n      });\n    }\n  }, {\n    key: \"createCursor\",\n    value: function createCursor(name) {\n      this[name] = document.createElement('div');\n      this[name].setAttribute('class', name);\n      this[name].classList.add(name + this.key);\n      this[name].setAttribute('style', '--k-color: 0,0,0');\n\n      if (this.props.hasOwnProperty('el')) {\n        this[name].classList.add(\"\".concat(name, \"--hidden\"));\n        this[name].classList.add('kursor--absolute');\n        document.querySelector(this.props.el).insertBefore(this[name], document.querySelector(this.props.el).firstChild);\n      } else {\n        document.body.insertBefore(this[name], document.body.firstChild);\n      }\n\n      if (this.props.hasOwnProperty('color')) {\n        (0, _utils.setColor)('color', this.props.color, this[name]);\n      }\n    }\n  }, {\n    key: \"addClass\",\n    value: function addClass(classx) {\n      var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      document.querySelector(child ? '.kursorChild' + this.key : '.kursor' + this.key).classList.add(classx);\n    }\n  }, {\n    key: \"removeClass\",\n    value: function removeClass(classx) {\n      var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      document.querySelector(child ? '.kursorChild' + this.key : '.kursor' + this.key).classList.remove(classx);\n    }\n  }, {\n    key: \"name\",\n    get: function get() {\n      return this._name;\n    }\n  }]);\n\n  return kursor;\n}();\n\nexports.default = kursor;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://kursor/./src/index.js?");
        /***/
      },

      /***/
      "./src/styles/index.styl":
      /*!*******************************!*\
        !*** ./src/styles/index.styl ***!
        \*******************************/

      /*! no static exports found */

      /***/
      function srcStylesIndexStyl(module, exports, __webpack_require__) {
        eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://kursor/./src/styles/index.styl?");
        /***/
      },

      /***/
      "./src/utils/index.js":
      /*!****************************!*\
        !*** ./src/utils/index.js ***!
        \****************************/

      /*! no static exports found */

      /***/
      function srcUtilsIndexJs(module, exports, __webpack_require__) {
        "use strict";

        eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setColor = void 0;\n\nvar setVar = function setVar(propertyName, value, el) {\n  if (!el) {\n    document.documentElement.style.setProperty(\"--k-\".concat(propertyName), value);\n  } else {\n    el.style.setProperty(\"--k-\".concat(propertyName), value);\n  }\n};\n\nvar setColor = function setColor(colorName, color, el) {\n  function hexToRgb(hex) {\n    var shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\n    hex = hex.replace(shorthandRegex, function (m, r, g, b) {\n      return r + r + g + g + b + b;\n    });\n    var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n    return result ? {\n      r: parseInt(result[1], 16),\n      g: parseInt(result[2], 16),\n      b: parseInt(result[3], 16)\n    } : null;\n  }\n\n  var isRGB = /^(rgb|rgba)/.test(color);\n  var isHEX = /^(#)/.test(color);\n  var newColor;\n\n  if (isRGB) {\n    var arrayColor = color.replace(/[rgba()]/g, '').split(',');\n    newColor = \"\".concat(arrayColor[0], \",\").concat(arrayColor[1], \",\").concat(arrayColor[2]);\n    setVar(colorName, newColor, el);\n  } else if (isHEX) {\n    var rgb = hexToRgb(color);\n    newColor = \"\".concat(rgb.r, \",\").concat(rgb.g, \",\").concat(rgb.b);\n    setVar(colorName, newColor, el);\n  }\n};\n\nexports.setColor = setColor;\n\n//# sourceURL=webpack://kursor/./src/utils/index.js?");
        /***/
      }
      /******/

    })
  );
});
},{}],"../../../../../../Users/sandrinele/.nvm/versions/node/v15.7.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62669" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../Users/sandrinele/.nvm/versions/node/v15.7.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","libraries/Kursor-master/dist/kursor.js"], null)
//# sourceMappingURL=/kursor.49603102.js.map
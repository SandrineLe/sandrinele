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
})({"libraries/Kursor-master/dist/kursor.min.js":[function(require,module,exports) {
var define;
function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Kursor v0.1.0
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define("kursor", [], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.kursor = t() : e.kursor = t();
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function r(o) {
      if (t[o]) return t[o].exports;
      var s = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(s.exports, s, s.exports, r), s.l = !0, s.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: o
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var o = Object.create(null);
      if (r.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var s in e) {
        r.d(o, s, function (t) {
          return e[t];
        }.bind(null, s));
      }
      return o;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "/dist/", r(r.s = 0);
  }([function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0, r(1);
    var o = r(2);

    function s(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    var n = 1,
        u = function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);

        var r = _objectSpread2({
          type: 1
        }, t);

        this.props = r, this.key = 1 === n ? "" : n, n++, this.render(), this.hovers(), this.mousemove(), this.down();
      }

      var t, r, u;
      return t = e, (r = [{
        key: "color",
        value: function value(e) {
          (0, o.setColor)("color", e, this.kursor), (0, o.setColor)("color", e, this.kursorChild);
        }
      }, {
        key: "hidden",
        value: function value() {
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? (this.addClass("kursor--hidden"), this.addClass("kursorChild--hidden", !0)) : (this.removeClass("kursor--hidden"), this.removeClass("kursorChild--hidden", !0));
        }
      }, {
        key: "createWrapper",
        value: function value() {
          var e = document.createElement("div");
          e.setAttribute("id", "kursorWrapper"), document.querySelector(this.props.el).insertBefore(e, document.querySelector(this.props.el).firstChild);
        }
      }, {
        key: "render",
        value: function value() {
          this.createCursor("kursorChild"), this.createCursor("kursor"), this.props.hasOwnProperty("removeDefaultCursor") && this.props.removeDefaultCursor && document.body.classList.add("notCursor"), this.props.hasOwnProperty("type") && this.addClass("kursor--".concat(this.props.type));
        }
      }, {
        key: "down",
        value: function value() {
          var e = this;
          document.addEventListener("mousedown", function (t) {
            e.addClass("kursor--down");
          }), document.addEventListener("mouseup", function (t) {
            e.removeClass("kursor--down");
          });
        }
      }, {
        key: "mousemove",
        value: function value() {
          var e = this,
              t = this.props.hasOwnProperty("el"),
              r = window;
          t && (r = document.querySelector(this.props.el)), r.addEventListener("mousemove", function (r) {
            var o = document.querySelector(".kursor" + e.key),
                s = document.querySelector(".kursorChild" + e.key);

            if (t) {
              var n = r.target !== document.querySelector(e.props.el),
                  u = r.target.closest(e.props.el);
              n ? (o = u.querySelector(".kursor" + e.key), s = u.querySelector(".kursorChild" + e.key)) : (o = r.target.querySelector(".kursor" + e.key), s = r.target.querySelector(".kursorChild" + e.key)), o.style.left = "".concat(n ? r.offsetX + r.target.offsetLeft : r.offsetX, "px"), o.style.top = "".concat(n ? r.offsetY + r.target.offsetTop : r.offsetY, "px"), s.style.left = "".concat(n ? r.offsetX + r.target.offsetLeft : r.offsetX, "px"), s.style.top = "".concat(n ? r.offsetY + r.target.offsetTop : r.offsetY, "px");
            } else o.style.left = "".concat(r.x, "px"), o.style.top = "".concat(r.y, "px"), s.style.left = "".concat(r.x, "px"), s.style.top = "".concat(r.y, "px");
          });
          var o = document;
          t && (o = document.querySelector(this.props.el)), o.addEventListener("mouseenter", function (t) {
            e.removeClass("kursor--hidden"), e.removeClass("kursorChild--hidden", !0);
          }), o.addEventListener("mouseleave", function (t) {
            e.addClass("kursor--hidden"), e.addClass("kursorChild--hidden", !0);
          });
        }
      }, {
        key: "hovers",
        value: function value() {
          var e = this,
              t = document.querySelectorAll(".k-hover" + this.key);
          console.log(t), t.forEach(function (t) {
            t.addEventListener("mouseenter", function () {
              e.addClass("--hover");
            }), t.addEventListener("mouseleave", function () {
              e.removeClass("--hover");
            });
          });
        }
      }, {
        key: "createCursor",
        value: function value(e) {
          this[e] = document.createElement("div"), this[e].setAttribute("class", e), this[e].classList.add(e + this.key), this[e].setAttribute("style", "--k-color: 0,0,0"), this.props.hasOwnProperty("el") ? (this[e].classList.add("".concat(e, "--hidden")), this[e].classList.add("kursor--absolute"), document.querySelector(this.props.el).insertBefore(this[e], document.querySelector(this.props.el).firstChild)) : document.body.insertBefore(this[e], document.body.firstChild), this.props.hasOwnProperty("color") && (0, o.setColor)("color", this.props.color, this[e]);
        }
      }, {
        key: "addClass",
        value: function value(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          document.querySelector(t ? ".kursorChild" + this.key : ".kursor" + this.key).classList.add(e);
        }
      }, {
        key: "removeClass",
        value: function value(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          document.querySelector(t ? ".kursorChild" + this.key : ".kursor" + this.key).classList.remove(e);
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
      }]) && s(t.prototype, r), u && s(t, u), e;
    }();

    t.default = u, e.exports = t.default;
  }, function (e, t, r) {}, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.setColor = void 0;

    var o = function o(e, t, r) {
      r ? r.style.setProperty("--k-".concat(e), t) : document.documentElement.style.setProperty("--k-".concat(e), t);
    };

    t.setColor = function (e, t, r) {
      var s,
          n = /^(rgb|rgba)/.test(t),
          u = /^(#)/.test(t);

      if (n) {
        var i = t.replace(/[rgba()]/g, "").split(",");
        s = "".concat(i[0], ",").concat(i[1], ",").concat(i[2]), o(e, s, r);
      } else if (u) {
        var a = function (e) {
          e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, r, o) {
            return t + t + r + r + o + o;
          });
          var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return t ? {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16)
          } : null;
        }(t);

        s = "".concat(a.r, ",").concat(a.g, ",").concat(a.b), o(e, s, r);
      }
    };
  }]);
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
},{}]},{},["../../../../../../Users/sandrinele/.nvm/versions/node/v15.7.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","libraries/Kursor-master/dist/kursor.min.js"], null)
//# sourceMappingURL=/kursor.min.3886f020.js.map
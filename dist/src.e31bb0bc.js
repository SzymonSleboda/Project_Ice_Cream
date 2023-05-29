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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\mobile\\bigice1x.png":[["bigice1x.da996d77.png","images/mobile/bigice1x.png"],"images/mobile/bigice1x.png"],"./..\\images\\mobile\\ellipse1x.png":[["ellipse1x.db175ab3.png","images/mobile/ellipse1x.png"],"images/mobile/ellipse1x.png"],"./..\\images\\tablet\\bigice2x.png":[["bigice2x.7df03e36.png","images/tablet/bigice2x.png"],"images/tablet/bigice2x.png"],"./..\\images\\tablet\\ellipse3@1x.png":[["ellipse3@1x.a1d1ef5d.png","images/tablet/ellipse3@1x.png"],"images/tablet/ellipse3@1x.png"],"./..\\images\\desktop\\bigice.png":[["bigice.3b47d3bd.png","images/desktop/bigice.png"],"images/desktop/bigice.png"],"./..\\images\\desktop\\ellipse3.png":[["ellipse3.b30e439c.png","images/desktop/ellipse3.png"],"images/desktop/ellipse3.png"],"./..\\images\\tablet\\ellipse1@1x.png":[["ellipse1@1x.35ad119a.png","images/tablet/ellipse1@1x.png"],"images/tablet/ellipse1@1x.png"],"./..\\images\\desktop\\ellipse1.png":[["ellipse1.00af0bed.png","images/desktop/ellipse1.png"],"images/desktop/ellipse1.png"],"./..\\images\\tablet\\sotastypic@1x.png":[["sotastypic@1x.0fd287fa.png","images/tablet/sotastypic@1x.png"],"images/tablet/sotastypic@1x.png"],"./..\\images\\desktop\\headerwoman1x.png":[["headerwoman1x.087b1eca.png","images/desktop/headerwoman1x.png"],"images/desktop/headerwoman1x.png"],"./..\\images\\tablet\\milk1x.png":[["milk1x.51e99bb7.png","images/tablet/milk1x.png"],"images/tablet/milk1x.png"],"./..\\images\\desktop\\milk1x.png":[["milk1x.835698ad.png","images/desktop/milk1x.png"],"images/desktop/milk1x.png"],"./..\\images\\SVG\\icons.svg":[["icons.3d3774d2.svg","images/SVG/icons.svg"],"images/SVG/icons.svg"],"./..\\images\\mobile\\pink-ice1x.png":[["pink-ice1x.9e2488b0.png","images/mobile/pink-ice1x.png"],"images/mobile/pink-ice1x.png"],"./..\\images\\mobile\\ice-coffe1x.png":[["ice-coffe1x.1a790669.png","images/mobile/ice-coffe1x.png"],"images/mobile/ice-coffe1x.png"],"./..\\images\\mobile\\shake1x.png":[["shake1x.f42cfd15.png","images/mobile/shake1x.png"],"images/mobile/shake1x.png"],"C:\\Users\\mnisz\\Desktop\\MyGit2\\Project_Group_16\\src\\images\\PNG\\dots-product.png":[["dots-product.dcdb5ff6.png","images/PNG/dots-product.png"],"images/PNG/dots-product.png"],"./..\\images\\mobile\\milkback1x.png":[["milkback1x.8b6e056b.png","images/mobile/milkback1x.png"],"images/mobile/milkback1x.png"],"./..\\images\\mobile\\milkback2x.png":[["milkback2x.1ffb17db.png","images/mobile/milkback2x.png"],"images/mobile/milkback2x.png"],"./..\\images\\desktop\\milkback2x.png":[["milkback2x.a25426e0.png","images/desktop/milkback2x.png"],"images/desktop/milkback2x.png"],"./..\\images\\desktop\\milkback1x.png":[["milkback1x.47de90d1.png","images/desktop/milkback1x.png"],"images/desktop/milkback1x.png"],"./..\\images\\mobile\\icon1@1x.png":[["icon1@1x.d272a160.png","images/mobile/icon1@1x.png"],"images/mobile/icon1@1x.png"],"./..\\images\\mobile\\icon2@1x.png":[["icon2@1x.6c6b2bfd.png","images/mobile/icon2@1x.png"],"images/mobile/icon2@1x.png"],"./..\\images\\mobile\\icon3@1x.png":[["icon3@1x.db4fecc8.png","images/mobile/icon3@1x.png"],"images/mobile/icon3@1x.png"],"./..\\images\\mobile\\icon1@2x.png":[["icon1@2x.cd0115b6.png","images/mobile/icon1@2x.png"],"images/mobile/icon1@2x.png"],"./..\\images\\mobile\\icon2@2x.png":[["icon2@2x.37f93aef.png","images/mobile/icon2@2x.png"],"images/mobile/icon2@2x.png"],"./..\\images\\mobile\\icon3@2x.png":[["icon3@2x.6f7e0a85.png","images/mobile/icon3@2x.png"],"images/mobile/icon3@2x.png"],"./..\\images\\tablet\\icon1@1x.png":[["icon1@1x.625de6c7.png","images/tablet/icon1@1x.png"],"images/tablet/icon1@1x.png"],"./..\\images\\tablet\\icon2@1x.png":[["icon2@1x.e21c40d5.png","images/tablet/icon2@1x.png"],"images/tablet/icon2@1x.png"],"./..\\images\\tablet\\icon3@1x.png":[["icon3@1x.186ad8bd.png","images/tablet/icon3@1x.png"],"images/tablet/icon3@1x.png"],"./..\\images\\tablet\\icon1@2x.png":[["icon1@2x.ff263565.png","images/tablet/icon1@2x.png"],"images/tablet/icon1@2x.png"],"./..\\images\\tablet\\icon2@2x.png":[["icon2@2x.a35c3471.png","images/tablet/icon2@2x.png"],"images/tablet/icon2@2x.png"],"./..\\images\\tablet\\icon3@2x.png":[["icon3@2x.4052505d.png","images/tablet/icon3@2x.png"],"images/tablet/icon3@2x.png"],"./..\\images\\desktop\\icon1@1x.png":[["icon1@1x.555eb7d8.png","images/desktop/icon1@1x.png"],"images/desktop/icon1@1x.png"],"./..\\images\\desktop\\icon2@1x.png":[["icon2@1x.a09fc413.png","images/desktop/icon2@1x.png"],"images/desktop/icon2@1x.png"],"./..\\images\\desktop\\icon3@1x.png":[["icon3@1x.db465ca5.png","images/desktop/icon3@1x.png"],"images/desktop/icon3@1x.png"],"./..\\images\\desktop\\icon1@2x.png":[["icon1@2x.74dea4f5.png","images/desktop/icon1@2x.png"],"images/desktop/icon1@2x.png"],"./..\\images\\desktop\\icon2@2x.png":[["icon2@2x.d0858282.png","images/desktop/icon2@2x.png"],"images/desktop/icon2@2x.png"],"./..\\images\\desktop\\icon3@2x.png":[["icon3@2x.dc6eafce.png","images/desktop/icon3@2x.png"],"images/desktop/icon3@2x.png"],"./..\\images\\PNG\\quote.png":[["quote.a5b586ac.png","images/PNG/quote.png"],"images/PNG/quote.png"],"./..\\images\\PNG\\dots-clients.png":[["dots-clients.b39e58cd.png","images/PNG/dots-clients.png"],"images/PNG/dots-clients.png"],"./..\\images\\desktop\\clients.back2x.png":[["clients.back2x.417484a0.png","images/desktop/clients.back2x.png"],"images/desktop/clients.back2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50690" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map
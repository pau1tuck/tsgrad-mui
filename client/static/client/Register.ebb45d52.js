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
})({"../node_modules/@material-ui/icons/AccountCircleOutlined.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"
}), 'AccountCircleOutlined');

exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"modules/User/validations/register.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationSchema = exports.fieldNames = void 0;

var yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var fieldNames;
exports.fieldNames = fieldNames;

(function (fieldNames) {
  fieldNames["firstname"] = "firstname";
  fieldNames["lastname"] = "lastname";
  fieldNames["email"] = "email";
  fieldNames["password"] = "password";
})(fieldNames || (exports.fieldNames = fieldNames = {}));

const validationSchema = yup.object().shape({
  [fieldNames.firstname]: yup.string().required().label("First name"),
  [fieldNames.lastname]: yup.string().required().label("Last name"),
  [fieldNames.email]: yup.string().email().required().label("Email address"),
  [fieldNames.password]: yup.string().min(8).max(30).required().label("Password")
});
exports.validationSchema = validationSchema;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fieldNames, "fieldNames", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/validations/register.tsx");
  reactHotLoader.register(validationSchema, "validationSchema", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/validations/register.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{"yup":"../node_modules/yup/lib/index.js"}],"modules/User/components/RegisterForm.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _AccountCircleOutlined = _interopRequireDefault(require("@material-ui/icons/AccountCircleOutlined"));

var _Input = _interopRequireDefault(require("./Input"));

var _reactHookForm = require("react-hook-form");

var _register = require("../validations/register");

var _graphql = require("../../../config/graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

const useStyles = (0, _styles.makeStyles)(({
  spacing,
  palette
}) => (0, _styles.createStyles)({
  paper: {
    marginTop: spacing(4),
    padding: spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: spacing(1),
    backgroundColor: palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: spacing(3)
  },
  submit: {
    margin: spacing(3, 0, 2)
  },
  options: {
    justifyContent: "center"
  }
}));

const RegisterForm = () => {
  const classes = useStyles();
  const history = (0, _reactRouterDom.useHistory)();
  const [createUser, {
    loading,
    error
  }] = (0, _graphql.useRegisterMutation)();
  const {
    register,
    errors,
    control,
    handleSubmit
  } = (0, _reactHookForm.useForm)({
    validationSchema: _register.validationSchema,
    mode: "onBlur",
    reValidateMode: "onSubmit"
  });

  _react.default.useEffect(() => {
    Object.keys(_register.fieldNames).forEach(key => {
      register({
        name: key
      });
    });
  });

  const onFormSubmit = values => __awaiter(void 0, void 0, void 0, function* () {
    const {
      firstname,
      lastname,
      email,
      password
    } = values;
    const response = yield createUser({
      variables: {
        firstname,
        lastname,
        email,
        password
      }
    });
    console.log("Form submitted");
    console.log(response);
    history.push("/verify");
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    className: classes.avatar
  }, /*#__PURE__*/_react.default.createElement(_AccountCircleOutlined.default, null)), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "h1",
    variant: "h5"
  }, "Sign up"), /*#__PURE__*/_react.default.createElement("form", {
    className: classes.form,
    noValidate: true,
    onSubmit: handleSubmit(onFormSubmit)
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "firstname",
    register: register,
    autofocus: true
  }), /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "lastname",
    register: register
  }), /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "email",
    register: register
  }), /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "password",
    register: register
  }), /*#__PURE__*/_react.default.createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    color: "primary",
    fullWidth: true,
    className: classes.submit
  }, "Sign up"), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    className: classes.options
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_core.Link, {
    component: _reactRouterDom.Link,
    to: "/login",
    variant: "body2"
  }, "Already have an account? Sign in")))));
};

exports.RegisterForm = RegisterForm;

__signature__(RegisterForm, "useStyles{classes}\nuseHistory{history}\nuseRegisterMutation{[createUser, { loading, error }]}\nuseForm{{ register, errors, control, handleSubmit }}\nuseEffect{}", () => [useStyles, _reactRouterDom.useHistory, _graphql.useRegisterMutation, _reactHookForm.useForm]);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__awaiter, "__awaiter", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/components/RegisterForm.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/components/RegisterForm.tsx");
  reactHotLoader.register(RegisterForm, "RegisterForm", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/components/RegisterForm.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{"react":"../node_modules/react/index.js","react-router-dom":"../node_modules/react-router-dom/esm/react-router-dom.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","@material-ui/icons/AccountCircleOutlined":"../node_modules/@material-ui/icons/AccountCircleOutlined.js","./Input":"modules/User/components/Input.tsx","react-hook-form":"../node_modules/react-hook-form/dist/react-hook-form.es.js","../validations/register":"modules/User/validations/register.tsx","../../../config/graphql":"config/graphql.tsx"}],"modules/User/pages/Register.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _RegisterForm = require("../components/RegisterForm");

var _Footer = require("../../../components/Footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const useStyles = (0, _styles.makeStyles)(({
  spacing
}) => (0, _styles.createStyles)({
  paper: {
    marginTop: spacing(4),
    padding: spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const Register = () => {
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.Container, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
    elevation: 3,
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(_RegisterForm.RegisterForm, null))), /*#__PURE__*/_react.default.createElement(_Footer.Footer, null));
};

__signature__(Register, "useStyles{classes}", () => [useStyles]);

const _default = Register;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/pages/Register.tsx");
  reactHotLoader.register(Register, "Register", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/pages/Register.tsx");
  reactHotLoader.register(_default, "default", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/pages/Register.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{"react":"../node_modules/react/index.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../components/RegisterForm":"modules/User/components/RegisterForm.tsx","../../../components/Footer":"components/Footer.tsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46747" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Register.ebb45d52.js.map
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
})({"../node_modules/@material-ui/icons/LockOutlined.js":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
}), 'LockOutlined');

exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","react":"../node_modules/react/index.js","./utils/createSvgIcon":"../node_modules/@material-ui/icons/utils/createSvgIcon.js"}],"modules/User/validations/login.tsx":[function(require,module,exports) {
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
  fieldNames["email"] = "email";
  fieldNames["password"] = "password";
})(fieldNames || (exports.fieldNames = fieldNames = {}));

const validationSchema = yup.object().shape({
  [fieldNames.email]: yup.string().email().min(6).max(30).required().label("This field"),
  [fieldNames.password]: yup.string().min(8).max(30).required().label("Password")
});
exports.validationSchema = validationSchema;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fieldNames, "fieldNames", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/validations/login.tsx");
  reactHotLoader.register(validationSchema, "validationSchema", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/validations/login.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{"yup":"../node_modules/yup/lib/index.js"}],"config/constants/variables.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authToken = exports.LOCAL_STORAGE = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var LOCAL_STORAGE;
exports.LOCAL_STORAGE = LOCAL_STORAGE;

(function (LOCAL_STORAGE) {
  LOCAL_STORAGE["token"] = "x-token";
})(LOCAL_STORAGE || (exports.LOCAL_STORAGE = LOCAL_STORAGE = {}));

let authToken = "";
exports.authToken = authToken;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LOCAL_STORAGE, "LOCAL_STORAGE", "/home/paul/Public/dev/tsgrad-mui/client/src/config/constants/variables.tsx");
  reactHotLoader.register(authToken, "authToken", "/home/paul/Public/dev/tsgrad-mui/client/src/config/constants/variables.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{}],"modules/User/hooks/useAuthToken.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _client = require("@apollo/client");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _reactRouterDom = require("react-router-dom");

var _variables = require("../../../config/constants/variables");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const useAuthToken = () => {
  const client = (0, _client.useApolloClient)();
  const history = (0, _reactRouterDom.useHistory)();

  const setAuthCookie = (jwtToken, refreshToken) => {
    localStorage.setItem(_variables.LOCAL_STORAGE.token, jwtToken);

    _jsCookie.default.set("jwttoken", jwtToken);

    _jsCookie.default.set("refreshtoken", refreshToken);

    history.push("/dashboard");
  };

  const logout = () => {
    client.resetStore();
    localStorage.clear();

    /*#__PURE__*/
    _react.default.createElement(_reactRouterDom.Redirect, {
      to: "/home"
    });
  };

  return {
    setAuthCookie,
    logout
  };
};

__signature__(useAuthToken, "useApolloClient{client}\nuseHistory{history}", () => [_client.useApolloClient, _reactRouterDom.useHistory]);

const _default = useAuthToken;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useAuthToken, "useAuthToken", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/hooks/useAuthToken.tsx");
  reactHotLoader.register(_default, "default", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/hooks/useAuthToken.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{"react":"../node_modules/react/index.js","@apollo/client":"../node_modules/@apollo/client/index.js","js-cookie":"../node_modules/js-cookie/src/js.cookie.js","react-router-dom":"../node_modules/react-router-dom/esm/react-router-dom.js","../../../config/constants/variables":"config/constants/variables.tsx"}],"../node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _utils = require("@material-ui/core/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
var _default = (0, _utils.createSvgIcon)( /*#__PURE__*/React.createElement("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined');

exports.default = _default;
},{"react":"../node_modules/react/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _utils = require("@material-ui/core/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
var _default = (0, _utils.createSvgIcon)( /*#__PURE__*/React.createElement("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined');

exports.default = _default;
},{"react":"../node_modules/react/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _utils = require("@material-ui/core/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
var _default = (0, _utils.createSvgIcon)( /*#__PURE__*/React.createElement("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline');

exports.default = _default;
},{"react":"../node_modules/react/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _utils = require("@material-ui/core/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
var _default = (0, _utils.createSvgIcon)( /*#__PURE__*/React.createElement("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined');

exports.default = _default;
},{"react":"../node_modules/react/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _utils = require("@material-ui/core/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @ignore - internal component.
 */
var _default = (0, _utils.createSvgIcon)( /*#__PURE__*/React.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

exports.default = _default;
},{"react":"../node_modules/react/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/Alert/Alert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _SuccessOutlined = _interopRequireDefault(require("../internal/svg-icons/SuccessOutlined"));

var _ReportProblemOutlined = _interopRequireDefault(require("../internal/svg-icons/ReportProblemOutlined"));

var _ErrorOutline = _interopRequireDefault(require("../internal/svg-icons/ErrorOutline"));

var _InfoOutlined = _interopRequireDefault(require("../internal/svg-icons/InfoOutlined"));

var _Close = _interopRequireDefault(require("../internal/svg-icons/Close"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _utils = require("@material-ui/core/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  var getColor = theme.palette.type === 'light' ? _styles.darken : _styles.lighten;
  var getBackgroundColor = theme.palette.type === 'light' ? _styles.lighten : _styles.darken;
  return {
    /* Styles applied to the root element. */
    root: (0, _extends2.default)({}, theme.typography.body2, {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'transparent',
      display: 'flex',
      padding: '6px 16px'
    }),

    /* Styles applied to the root element if `variant="standard"` and `color="success"`. */
    standardSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.success.main, 0.9),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="info"`. */
    standardInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.info.main, 0.9),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="warning"`. */
    standardWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.warning.main, 0.9),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="error"`. */
    standardError: {
      color: getColor(theme.palette.error.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.9),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="success"`. */
    outlinedSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      border: "1px solid ".concat(theme.palette.success.main),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="info"`. */
    outlinedInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      border: "1px solid ".concat(theme.palette.info.main),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
    outlinedWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      border: "1px solid ".concat(theme.palette.warning.main),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="error"`. */
    outlinedError: {
      color: getColor(theme.palette.error.main, 0.6),
      border: "1px solid ".concat(theme.palette.error.main),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="filled"` and `color="success"`. */
    filledSuccess: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="info"`. */
    filledInfo: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.info.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="warning"`. */
    filledWarning: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.warning.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="error"`. */
    filledError: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.error.main
    },

    /* Styles applied to the icon wrapper element. */
    icon: {
      marginRight: 12,
      padding: '7px 0',
      display: 'flex',
      fontSize: 22,
      opacity: 0.9
    },

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};

exports.styles = styles;
var defaultIconMapping = {
  success: /*#__PURE__*/React.createElement(_SuccessOutlined.default, {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/React.createElement(_ReportProblemOutlined.default, {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/React.createElement(_ErrorOutline.default, {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/React.createElement(_InfoOutlined.default, {
    fontSize: "inherit"
  })
};

var _ref = /*#__PURE__*/React.createElement(_Close.default, {
  fontSize: "small"
});

var Alert = /*#__PURE__*/React.forwardRef(function Alert(props, ref) {
  var action = props.action,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
      color = props.color,
      icon = props.icon,
      _props$iconMapping = props.iconMapping,
      iconMapping = _props$iconMapping === void 0 ? defaultIconMapping : _props$iconMapping,
      onClose = props.onClose,
      _props$role = props.role,
      role = _props$role === void 0 ? 'alert' : _props$role,
      _props$severity = props.severity,
      severity = _props$severity === void 0 ? 'success' : _props$severity,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0, _objectWithoutProperties2.default)(props, ["action", "children", "classes", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"]);
  return /*#__PURE__*/React.createElement(_Paper.default, (0, _extends2.default)({
    role: role,
    square: true,
    elevation: 0,
    className: (0, _clsx.default)(classes.root, classes["".concat(variant).concat((0, _utils.capitalize)(color || severity))], className),
    ref: ref
  }, other), icon !== false ? /*#__PURE__*/React.createElement("div", {
    className: classes.icon
  }, icon || iconMapping[severity] || defaultIconMapping[severity]) : null, /*#__PURE__*/React.createElement("div", {
    className: classes.message
  }, children), action != null ? /*#__PURE__*/React.createElement("div", {
    className: classes.action
  }, action) : null, action == null && onClose ? /*#__PURE__*/React.createElement("div", {
    className: classes.action
  }, /*#__PURE__*/React.createElement(_IconButton.default, {
    size: "small",
    "aria-label": closeText,
    title: closeText,
    color: "inherit",
    onClick: onClose
  }, _ref)) : null);
});
"development" !== "production" ? Alert.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: _propTypes.default.node,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText: _propTypes.default.string,

  /**
   * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
   */
  color: _propTypes.default.oneOf(['error', 'info', 'success', 'warning']),

  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   */
  icon: _propTypes.default.node,

  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: _propTypes.default.shape({
    error: _propTypes.default.node,
    info: _propTypes.default.node,
    success: _propTypes.default.node,
    warning: _propTypes.default.node
  }),

  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: _propTypes.default.func,

  /**
   * The ARIA role attribute of the element.
   */
  role: _propTypes.default.string,

  /**
   * The severity of the alert. This defines the color and icon used.
   */
  severity: _propTypes.default.oneOf(['error', 'info', 'success', 'warning']),

  /**
   * The variant to use.
   */
  variant: _propTypes.default.oneOf(['filled', 'outlined', 'standard'])
} : void 0;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiAlert'
})(Alert);

exports.default = _default;
},{"@babel/runtime/helpers/esm/objectWithoutProperties":"../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js","@babel/runtime/helpers/esm/extends":"../node_modules/@babel/runtime/helpers/esm/extends.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","clsx":"../node_modules/clsx/dist/clsx.m.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","@material-ui/core/Paper":"../node_modules/@material-ui/core/esm/Paper/index.js","../internal/svg-icons/SuccessOutlined":"../node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js","../internal/svg-icons/ReportProblemOutlined":"../node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js","../internal/svg-icons/ErrorOutline":"../node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js","../internal/svg-icons/InfoOutlined":"../node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js","../internal/svg-icons/Close":"../node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js","@material-ui/core/IconButton":"../node_modules/@material-ui/core/esm/IconButton/index.js","@material-ui/core/utils":"../node_modules/@material-ui/core/esm/utils/index.js"}],"../node_modules/@material-ui/lab/esm/Alert/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Alert.default;
  }
});

var _Alert = _interopRequireDefault(require("./Alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Alert":"../node_modules/@material-ui/lab/esm/Alert/Alert.js"}],"components/ErrorMessage.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const ErrorMessage = ({
  errors,
  type
}) => {
  const [open, setOpen] = _react.default.useState(true);

  (0, _react.useEffect)(() => {
    if (errors[type]) {
      setOpen(true);
    }
  });
  (0, _react.useEffect)(() => {
    if (!errors[type]) {
      setOpen(false);
    }
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if (!errors[type]) return null;
  return /*#__PURE__*/_react.default.createElement(_core.Snackbar, {
    open: open,
    autoHideDuration: 2000,
    onClose: handleClose
  }, /*#__PURE__*/_react.default.createElement(_Alert.default, {
    onClose: handleClose,
    severity: "error"
  }, errors[type].message));
};

exports.ErrorMessage = ErrorMessage;

__signature__(ErrorMessage, "useState{[open, setOpen](true)}\nuseEffect{}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorMessage, "ErrorMessage", "/home/paul/Public/dev/tsgrad-mui/client/src/components/ErrorMessage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{"react":"../node_modules/react/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","@material-ui/lab/Alert":"../node_modules/@material-ui/lab/esm/Alert/index.js"}],"modules/User/components/LoginForm.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _LockOutlined = _interopRequireDefault(require("@material-ui/icons/LockOutlined"));

var _Input = _interopRequireDefault(require("./Input"));

var _reactHookForm = require("react-hook-form");

var _login = require("../validations/login");

var _graphql = require("../../../config/graphql");

var _useAuthToken = _interopRequireDefault(require("../hooks/useAuthToken"));

var _ErrorMessage = require("../../../components/ErrorMessage");

var _client = require("@apollo/client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

const LoginForm = () => {
  const classes = useStyles();
  const history = (0, _reactRouterDom.useHistory)();
  const [login] = (0, _graphql.useLoginMutation)();
  const {
    register,
    handleSubmit,
    errors,
    control
  } = (0, _reactHookForm.useForm)({
    validationSchema: _login.validationSchema,
    mode: "onChange"
  });
  const {
    setAuthCookie
  } = (0, _useAuthToken.default)();
  const [isLoggedIn, setIsLoggedIn] = (0, _react.useState)(false);
  const client = (0, _client.useApolloClient)();

  const onFormSubmit = values => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;

    const {
      email,
      password
    } = values;
    const response = yield login({
      variables: {
        email,
        password
      }
    });

    if (response && response.data) {
      const jwtToken = (_a = response.data.login) === null || _a === void 0 ? void 0 : _a.token;
      console.log("Login response: " + response.data);
      const refreshToken = (_b = response.data.login) === null || _b === void 0 ? void 0 : _b.refreshToken;

      if (jwtToken) {
        setAuthCookie(jwtToken, refreshToken);
        client.writeFragment({
          id: "5",
          fragment: (0, _client.gql)`
            fragment MyTodo on me {
              completed
            }
          `,
          data: {
            completed: true
          }
        });
      }
    }
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    className: classes.avatar
  }, /*#__PURE__*/_react.default.createElement(_LockOutlined.default, null)), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "h1",
    variant: "h5"
  }, "Sign in"), /*#__PURE__*/_react.default.createElement("form", {
    className: classes.form,
    noValidate: true,
    onSubmit: handleSubmit(onFormSubmit)
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "email",
    register: register,
    autofocus: true
  }), /*#__PURE__*/_react.default.createElement(_ErrorMessage.ErrorMessage, {
    errors: errors,
    type: _login.fieldNames.email
  }), /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "password",
    register: register
  }), /*#__PURE__*/_react.default.createElement(_ErrorMessage.ErrorMessage, {
    errors: errors,
    type: _login.fieldNames.password
  }), /*#__PURE__*/_react.default.createElement(_core.FormControlLabel, {
    control: /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
      as: _core.Checkbox,
      control: control,
      defaultValue: false,
      name: "remember-me",
      color: "primary"
    }),
    label: "Remember me"
  }), /*#__PURE__*/_react.default.createElement(_core.Button, {
    type: "submit",
    variant: "contained",
    color: "primary",
    fullWidth: true,
    className: classes.submit
  }, "Sign in"), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    className: classes.options
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: true
  }, /*#__PURE__*/_react.default.createElement(_core.Link, {
    component: _reactRouterDom.Link,
    to: "/",
    variant: "body2"
  }, "Forgot password?")), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_core.Link, {
    component: _reactRouterDom.Link,
    to: "/register",
    variant: "body2"
  }, "Don't have an account? Sign up")))));
};

__signature__(LoginForm, "useStyles{classes}\nuseHistory{history}\nuseLoginMutation{[login]}\nuseForm{{ register, handleSubmit, errors, control }}\nuseAuthToken{{ setAuthCookie }}\nuseState{[isLoggedIn, setIsLoggedIn](false)}\nuseApolloClient{client}", () => [useStyles, _reactRouterDom.useHistory, _graphql.useLoginMutation, _reactHookForm.useForm, _useAuthToken.default, _client.useApolloClient]);

const _default = LoginForm;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__awaiter, "__awaiter", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/components/LoginForm.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/components/LoginForm.tsx");
  reactHotLoader.register(LoginForm, "LoginForm", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/components/LoginForm.tsx");
  reactHotLoader.register(_default, "default", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/components/LoginForm.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{"react":"../node_modules/react/index.js","react-router-dom":"../node_modules/react-router-dom/esm/react-router-dom.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","@material-ui/icons/LockOutlined":"../node_modules/@material-ui/icons/LockOutlined.js","./Input":"modules/User/components/Input.tsx","react-hook-form":"../node_modules/react-hook-form/dist/react-hook-form.es.js","../validations/login":"modules/User/validations/login.tsx","../../../config/graphql":"config/graphql.tsx","../hooks/useAuthToken":"modules/User/hooks/useAuthToken.tsx","../../../components/ErrorMessage":"components/ErrorMessage.tsx","@apollo/client":"../node_modules/@apollo/client/index.js"}],"modules/User/pages/Login.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _checkAuth = _interopRequireDefault(require("../hooks/checkAuth"));

var _LoginForm = _interopRequireDefault(require("../components/LoginForm"));

var _Footer = require("../../../components/Footer");

var _routes = require("../../../config/routes");

var _Page = require("../../../components/Page");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

const Login = () => {
  const classes = useStyles();
  const loggedIn = (0, _checkAuth.default)();
  const history = (0, _reactRouterDom.useHistory)();
  (0, _react.useEffect)(() => {
    if (loggedIn) {
      console.log("Logged in:" + loggedIn);
      history.push(_routes.ROUTES.dashboard);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Page.Page, null, /*#__PURE__*/_react.default.createElement(_core.Container, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
    elevation: 3,
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(_LoginForm.default, null))), /*#__PURE__*/_react.default.createElement(_Footer.Footer, null));
};

__signature__(Login, "useStyles{classes}\nuseHistory{history}\nuseEffect{}", () => [useStyles, _reactRouterDom.useHistory]);

const _default = Login;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/pages/Login.tsx");
  reactHotLoader.register(Login, "Login", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/pages/Login.tsx");
  reactHotLoader.register(_default, "default", "/home/paul/Public/dev/tsgrad-mui/client/src/modules/User/pages/Login.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
},{"react":"../node_modules/react/index.js","react-router-dom":"../node_modules/react-router-dom/esm/react-router-dom.js","@material-ui/core/styles":"../node_modules/@material-ui/core/esm/styles/index.js","@material-ui/core":"../node_modules/@material-ui/core/esm/index.js","../hooks/checkAuth":"modules/User/hooks/checkAuth.tsx","../components/LoginForm":"modules/User/components/LoginForm.tsx","../../../components/Footer":"components/Footer.tsx","../../../config/routes":"config/routes.tsx","../../../components/Page":"components/Page.tsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40001" + '/');

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
//# sourceMappingURL=/Login.672ca285.js.map
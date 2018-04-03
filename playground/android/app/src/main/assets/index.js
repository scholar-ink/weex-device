// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(9)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zhouchao/vagrant/web/weex-plugin/device/examples/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-9a45ece8"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _weexRouter = __webpack_require__(3);

	var _weexRouter2 = _interopRequireDefault(_weexRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		data: {
			value: '',
			index: 0,
			txtChange: ''
		},
		created: function created() {
			var globalEvent = weex.requireModule('globalEvent');
			globalEvent.addEventListener('category', function (e) {
				console.log('addEventListener CallBack', e);
			});
		},
		methods: {
			createAction: function createAction() {
				_weexRouter2.default.push('/login');
			}
		}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pageRouter = __webpack_require__(4);

	function push(url) {
	  url = getURL(url);

	  console.log(url);

	  var navigator = weex.requireModule('navigator');

	  var platform = getOs();

	  if (platform === 'web') {
	    url = '?page=/dist' + url;
	  }

	  if (navigator) {
	    navigator.push({
	      'url': url,
	      'animated': 'true'
	    }, function () {
	      console.log('skip complete');
	    });
	  }
	}
	function getURL(url) {
	  var platform = getOs();

	  var bundleUrl = weex.config.bundleUrl;

	  console.log(bundleUrl);

	  var mainUrl = (0, _pageRouter.pageRouter)(url).split('examples')[1];

	  mainUrl = mainUrl.replace(/\\/g, '/');

	  mainUrl = mainUrl.split('.')[0];

	  var fullUrl = '';

	  if (bundleUrl.lastIndexOf('file://') !== -1) {
	    if (platform === 'ios') {
	      bundleUrl = bundleUrl.substr(0, bundleUrl.lastIndexOf('bundlejs'));

	      fullUrl = bundleUrl + 'bundlejs' + mainUrl + '.js';
	    } else if (platform === 'android') {
	      bundleUrl = bundleUrl.substr(0, bundleUrl.lastIndexOf('dist'));

	      fullUrl = bundleUrl + 'dist' + mainUrl + '.js';
	    } else {}
	  } else {
	    if (platform === 'web') {
	      fullUrl = mainUrl + '.js';
	    } else {
	      bundleUrl = bundleUrl.substr(0, bundleUrl.lastIndexOf('dist'));

	      fullUrl = bundleUrl + 'dist' + mainUrl + '.js';
	    }
	  }

	  return fullUrl;
	}

	function getOs() {
	  var platform = weex.config.env ? weex.config.env.platform : weex.config.platform;

	  return platform.toLowerCase();
	}

	exports.default = {
	  push: push,
	  getURL: getURL,
	  getOs: getOs
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _login = __webpack_require__(5);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = [{
	  path: '/login',
	  component: _login2.default
	}];

	exports.pageRouter = function (url) {
	  console.log(url);
	  var base = router.find(function (obj) {
	    return obj.path === url;
	  });
	  return base.component.__file;
	};

	// // 页面传参设置
	// exports.pageRouter = function (url, params) {
	//   var base = router.find(function (obj) {
	//     return obj.path === url
	//   })
	//   if (!params) {
	//     return base.component.__file
	//   } else {
	//     return {
	//       url: base.component.__file,
	//       params: params
	//     }
	//   }
	// }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(6)
	)

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zhouchao/vagrant/web/weex-plugin/device/examples/login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7c84aca3"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1
	  }
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	var navigator = weex.requireModule('navigator');
	var plugin = weex.requireModule('Device');
	module.exports = {
		data: {
			value: '',
			index: 0,
			txtChange: ''
		},
		methods: {
			createAction: function createAction() {
				plugin.show("category", { "test": 'test' });
				navigator.pop({ animation: 'ture' }, function () {});
			}
		}
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["conatiner"]
	  }, [_c('text', {
	    staticStyle: {
	      marginBottom: "20px"
	    }
	  }, [_vm._v("weex plugin examples")]), _c('div', {
	    staticStyle: {
	      margin: "20px",
	      padding: "20px",
	      backgroundColor: "#1ba1e2",
	      color: "#fff"
	    },
	    on: {
	      "click": _vm.createAction
	    }
	  }, [_c('text', {
	    staticStyle: {
	      color: "#fff"
	    }
	  }, [_vm._v("hello world")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["conatiner"]
	  }, [_c('text', {
	    staticStyle: {
	      marginBottom: "20px"
	    }
	  }, [_vm._v("weex plugin examples")]), _c('div', {
	    staticStyle: {
	      margin: "20px",
	      padding: "20px",
	      backgroundColor: "#1ba1e2",
	      color: "#fff"
	    },
	    on: {
	      "click": _vm.createAction
	    }
	  }, [_c('text', {
	    staticStyle: {
	      color: "#fff"
	    }
	  }, [_vm._v("hello world")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);
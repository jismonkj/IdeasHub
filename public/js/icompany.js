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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59);


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {


Vue.component('idea-shared', __webpack_require__(60));
Vue.component('modal-pay', __webpack_require__(63));
var company = new Vue({
    el: '#companyHome',
    data: {
        uid: "",
        iList: null,
        iReviewList: [],
        iBoughtList: [],
        preFix: "background-image:/",
        csrfToken: $('meta[name="csrf-token"]').attr('content'),
        showModal: false,
        payAmount: '...',
        walletBalance: '..',
        user_id: '',
        iid: '',
        iindex: ''
    },
    mounted: function mounted() {
        //ideas for review
        axios.post('company/list/ideas/r').then(function (response) {
            this.iReviewList = response.data;
            // console.log(response.data);
        }.bind(this)).catch(function (error) {
            // console.log(error);
        });
        //paid ideas
        axios.post('company/list/ideas/p').then(function (response) {
            this.iBoughtList = response.data;
            // console.log(response.data);
        }.bind(this)).catch(function (error) {
            // console.log(error);
        });
        //interested ideas
        axios.post('company/list/ideas/i').then(function (response) {
            this.iList = response.data;
            // console.log(response.data);
        }.bind(this)).catch(function (error) {
            // console.log(error);
        });
    },
    methods: {
        showInterestOnIdea: function showInterestOnIdea(index, id) {
            //update idea status
            var status = "interested";
            this.changeIdeaStatus(id, status);
            this.iReviewList[index]['status'] = 'interested';
            this.iList.push(this.iReviewList[index]);
            this.iReviewList.splice(index, 1);
        },
        delInteresteOnIdea: function delInteresteOnIdea(index, id) {
            //update idea status
            var status = "notinterested";
            this.changeIdeaStatus(id, status);
            this.iList.splice(index, 1);
        },
        changeIdeaStatus: function changeIdeaStatus(id, status) {
            axios.post('company/change/idea/s', { 'status': status, 'id': id }).then(function (response) {
                //success
            }).catch(function (error) {
                // console.log(error);
            });
        }
    }
});

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(61)
/* template */
var __vue_template__ = __webpack_require__(62)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/IdeaForReview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51d082ba", Component.options)
  } else {
    hotAPI.reload("data-v-51d082ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["index", "id", "c_id", "company", "title", "summary", "uid", "price", "status"],
    data: function data() {
        return {
            csrfToken: $('meta[name="csrf-token"]').attr('content')
        };
    },
    methods: {
        startWalletPay: function startWalletPay() {},
        showModal: function showModal() {
            //depreciated method
            this.$parent.showModal = true;
            this.$parent.payAmount = this.price;
            this.$parent.user_id = this.uid;
            this.$parent.iid = this.id;
            this.$parent.iindex = this.index;

            //wallet balance
            axios.get('wallet/get/balance').then(function (response) {
                this.$parent.walletBalance = response.data;
                // console.log(response.data);
            }.bind(this)).catch(function (error) {
                // console.log(error);
            });
        }
    }
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { "leave-active-class": "animated fadeOut faster" } },
    [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "p-2" }, [
          _c(
            "div",
            { staticClass: "card-header s-bg p-color idea-paragraph" },
            [
              _vm._v(_vm._s(_vm.title) + " "),
              _c("span", { staticClass: "float-right" }, [
                _vm._v(_vm._s(_vm.company))
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("h5", [_vm._v("Summary")]),
                _vm._v(" "),
                _c("p", { staticClass: "idea-paragraph" }, [
                  _vm._v(_vm._s(_vm.summary))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "float-right" }, [
                  _vm.status == "paid"
                    ? _c(
                        "form",
                        {
                          staticClass: "d-inline-block",
                          attrs: { action: "company/view/idea", method: "post" }
                        },
                        [
                          _c("input", {
                            attrs: { name: "_token", hidden: "" },
                            domProps: { value: _vm.csrfToken }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            attrs: { type: "hidden", name: "iid" },
                            domProps: { value: _vm.id }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-success",
                              attrs: { type: "submit", title: "More" }
                            },
                            [_c("i", { staticClass: "fas fa-play" })]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.status == "authorised"
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-success",
                          attrs: { type: "submit", title: "More" },
                          on: { click: _vm.showModal }
                        },
                        [_c("i", { staticClass: "fas fa-play" })]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticClass: "d-inline-block",
                      attrs: { action: "company/view/user", method: "post" }
                    },
                    [
                      _c("input", {
                        attrs: { name: "_token", hidden: "" },
                        domProps: { value: _vm.csrfToken }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "hidden", name: "uid" },
                        domProps: { value: _vm.uid }
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-primary",
                          attrs: { type: "submit", title: "User Profile" }
                        },
                        [_c("i", { staticClass: "fas fa-user-check" })]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.status == "fresh" || _vm.status == "notinterested"
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-info",
                          attrs: { title: "This is interesting?" },
                          on: {
                            click: function($event) {
                              _vm.$emit("remove")
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-thumbs-up" })]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  ((_vm.status == "fresh" && _vm.status != "authorised") ||
                    _vm.status != "notinterested") &&
                  _vm.status != "authorised"
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-danger",
                          attrs: { title: "Not Interesting" },
                          on: {
                            click: function($event) {
                              _vm.$emit("remove")
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-thumbs-down" })]
                      )
                    : _vm._e()
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-51d082ba", module.exports)
  }
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(82)
/* template */
var __vue_template__ = __webpack_require__(64)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ModalPay.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61384672", Component.options)
  } else {
    hotAPI.reload("data-v-61384672", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c("div", { staticClass: "modal-container" }, [
          !_vm.refillWallet
            ? _c(
                "div",
                { staticClass: "modal-body" },
                [
                  !_vm.transferComplete
                    ? _vm._t("body", [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header bg-success text-white"
                            },
                            [
                              _vm._v(
                                "\n                    Confirm Payment\n                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-body" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col" }, [
                                _vm._v(
                                  "\n                        //\n                    "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row pt-3" }, [
                              _c("div", { staticClass: "col" }, [
                                _c(
                                  "button",
                                  { staticClass: "btn btn-primary" },
                                  [
                                    _vm._v(
                                      "Wallet Balance : \n                            "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "badge badge-default" },
                                      [_c("b", [_vm._v(_vm._s(_vm.balance))])]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  { staticClass: "btn btn-primary" },
                                  [
                                    _vm._v(
                                      "Amount to Transfer : \n                            "
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "badge badge-default" },
                                      [_c("b", [_vm._v(_vm._s(_vm.amount))])]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-success",
                                    attrs: { title: "Transfer" },
                                    on: { click: _vm.transferAmount }
                                  },
                                  [
                                    !_vm.transfer
                                      ? _c("span", [_vm._v("Transfer")])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.transfer
                                      ? _c("i", {
                                          staticClass: "fas fa-spinner fa-pulse"
                                        })
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-secondary",
                                    on: {
                                      click: function($event) {
                                        _vm.$emit("close")
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            Close\n                        "
                                    )
                                  ]
                                )
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "alert alert-info" }, [
                          _c("em", [
                            _vm._v(
                              "\n                If you find the proposal misleading you can report it and get your money back!\n                "
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "transition",
                    { attrs: { name: "modal" } },
                    [
                      _vm.transferComplete
                        ? _vm._t("body", [
                            _c("div", { staticClass: "card" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-header bg-success text-white"
                                },
                                [
                                  _vm._v(
                                    "\n                        Transfer Complete\n                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-body" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col" }, [
                                    _c(
                                      "div",
                                      { staticClass: "alert alert-success" },
                                      [
                                        _vm._v(
                                          "\n                                You have now full access to the proposal!\n                                Wallet balance : "
                                        ),
                                        _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-primary"
                                          },
                                          [
                                            _vm._v(
                                              " " + _vm._s(_vm.balance) + " "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row pt-3" }, [
                                  _c("div", { staticClass: "col" }, [
                                    _c(
                                      "form",
                                      {
                                        staticClass: "d-inline-block",
                                        attrs: {
                                          action: "company/view/idea",
                                          method: "post"
                                        }
                                      },
                                      [
                                        _c("input", {
                                          attrs: { name: "_token", hidden: "" },
                                          domProps: { value: _vm.csrfToken }
                                        }),
                                        _vm._v(" "),
                                        _c("input", {
                                          attrs: {
                                            type: "hidden",
                                            name: "iid"
                                          },
                                          domProps: { value: _vm.referid }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-primary",
                                            attrs: {
                                              type: "submit",
                                              title: "More"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                   You can view the proposal here!\n                                "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary btn-sm",
                                        on: {
                                          click: function($event) {
                                            _vm.$emit("close")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Close\n                            "
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ])
                        : _vm._e()
                    ],
                    2
                  )
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.refillWallet
            ? _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _vm._t("body", [
                    _c("div", { staticClass: "card" }, [
                      _c(
                        "div",
                        { staticClass: "card-header bg-danger text-white" },
                        [
                          _vm._v(
                            "\n                    Low Balance\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "row pt-3" }, [
                          _c("div", { staticClass: "col" }, [
                            _c("div", { staticClass: "alert alert-info" }, [
                              _vm._v(
                                "\n                            Please refill your wallet.\n                            "
                              ),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary btn-sm",
                                  attrs: { href: "wallet/view" }
                                },
                                [
                                  _vm._v(
                                    "\n                            Wallet\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary btn-sm",
                                  on: {
                                    click: function($event) {
                                      _vm.$emit("close")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Close\n                            "
                                  )
                                ]
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ],
                2
              )
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61384672", module.exports)
  }
}

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["uid", "referid", "amount", "balance"],
    data: function data() {
        return {
            transfer: false,
            transferComplete: false,
            csrfToken: $('meta[name="csrf-token"]').attr('content'),
            refillWallet: false
        };
    },
    mounted: function mounted() {
        if (this.amount > balance) {
            this.refillWallet = true;
        }
    },
    methods: {
        transferAmount: function transferAmount() {
            this.transfer = true;
            //ajax 
            axios.post('wallet/transfer/t', { 'did': this.uid, 'refer_id': this.referid, 'amount': this.amount, 'type': 'debit' }).then(function (response) {
                this.balance = response.data;
                this.transferComplete = true;
                var status = "paid";
                var index = this.$parent.iindex;
                this.$parent.iList[index]['status'] = status;
                this.$parent.iBoughtList.push(this.$parent.iList[index]);
                this.$parent.iList.splice(index, 1);
            }.bind(this));
        }
    }
});

/***/ })

/******/ });
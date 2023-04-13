exports.ids = [3];
exports.modules = {

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6675f4f8", content, true, context)
};

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6fc4956f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6fc4956f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6fc4956f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6fc4956f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6fc4956f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6fc4956f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(60);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".bg-image[data-v-6fc4956f]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:top}.bg-color[data-v-6fc4956f]{background-color:#070a52}.text-color[data-v-6fc4956f]{color:#070a52}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/331426255_1411753576305242_272167460667299199_n.93bd5d0.jpg";

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=6fc4956f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_vm._ssrNode("<div class=\"bg-image py-32\" data-v-6fc4956f><div class=\"lg:mx-24 p-8 py-4\" data-v-6fc4956f><h2 class=\"lg:text-5xl text-4xl text-white font-bold uppercase pb-4 text-center mb-8\" data-v-6fc4956f>Contactez-Nous</h2></div></div> <div class=\"bg-gray-200 shadow-xl lg:rounded-md lg:mx-12 transform -translate-y-40 bottom-0 left-0 px-8 py-12\" data-v-6fc4956f><div class=\"lg:flex lg:flex-row sm:flex sm:flex-col lg:justify-betwen lg:gap-8\" data-v-6fc4956f><div class=\"text-lg sm:text-lg lg:w-2/3\" data-v-6fc4956f><form action=\"#\" class=\"mb-8\" data-v-6fc4956f><div class=\"flex flex-wrap mb-6 -mx-4\" data-v-6fc4956f><div class=\"w-full md:w-1/2 mb-6 md:mb-0 px-4\" data-v-6fc4956f><label for=\"name\" class=\"block mb-2 text-copy-primary\" data-v-6fc4956f>\n                                Noms\n                            </label> <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Jon Snow\" required=\"required\" class=\"block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4\" data-v-6fc4956f></div> <div class=\"w-full px-4 md:w-1/2\" data-v-6fc4956f><label for=\"email\" class=\"block text-copy-primary mb-2\" data-v-6fc4956f>\n                                Email Addresse\n                            </label> <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"email@example.com\" required=\"required\" class=\"block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4\" data-v-6fc4956f></div></div> <div class=\"flex flex-wrap mb-6 -mx-4\" data-v-6fc4956f><div class=\"w-full md:w-1/2 mb-6 md:mb-0 px-4\" data-v-6fc4956f><label for=\"number\" class=\"block mb-2 text-copy-primary\" data-v-6fc4956f>\n                                Numero de telephone\n                            </label> <input type=\"number\" name=\"number\" id=\"number\" placeholder=\"+228 90046079\" required=\"required\" class=\"block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4\" data-v-6fc4956f></div> <div class=\"w-full px-4 md:w-1/2\" data-v-6fc4956f><label for=\"email\" class=\"block text-copy-primary mb-2\" data-v-6fc4956f>\n                                Sujet\n                            </label> <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Project Proposal\" required=\"required\" class=\"block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4\" data-v-6fc4956f></div></div> <div class=\"w-full mb-8\" data-v-6fc4956f><label for=\"message\" class=\"block text-copy-primary mb-2\" data-v-6fc4956f>\n                            Message\n                        </label> <textarea id=\"message\" rows=\"5\" name=\"message\" placeholder=\"Enter your message here.\" required=\"required\" class=\"block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4\" data-v-6fc4956f></textarea></div> <div class=\"flex justify-start w-full\" data-v-6fc4956f><input type=\"submit\" value=\"Envoyer\" class=\"block bg-color hover:bg-blue-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3\" data-v-6fc4956f></div></form></div> <div data-v-6fc4956f><div class=\"bg-gray-100 rounded-lg shadow-lg px-4 pt-4 items-center\" data-v-6fc4956f><div class=\"flex flex-col gap-3 pb-4\" data-v-6fc4956f><h1 class=\"font-bold text-2xl text-color\" data-v-6fc4956f>Contact details:</h1> <span class=\"flex gap-2 text-md\" data-v-6fc4956f><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"home\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" class=\"w-4 mr-4\" data-v-6fc4956f><path fill=\"currentColor\" d=\"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z\" data-v-6fc4956f></path></svg>123 Boulevard, Brazzaville, Congo</span> <span class=\"flex gap-2 text-md\" data-v-6fc4956f><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"envelope\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"w-4 mr-4\" data-v-6fc4956f><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\" data-v-6fc4956f></path></svg>info@moneytransferagency.com</span> <span class=\"flex gap-2 text-md\" data-v-6fc4956f><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"phone\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"w-4 mr-4\" data-v-6fc4956f><path fill=\"currentColor\" d=\"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z\" data-v-6fc4956f></path></svg> +242 065918117</span> <span class=\"flex gap-4 text-md\" data-v-6fc4956f><svg fill=\"#000000\" viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-10\" data-v-6fc4956f><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\" data-v-6fc4956f></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-6fc4956f></g><g id=\"SVGRepo_iconCarrier\" data-v-6fc4956f><title data-v-6fc4956f>time</title> <path d=\"M11.188 27.188c-6.188 0-11.188-5-11.188-11.188s5-11.219 11.188-11.219 11.219 5.031 11.219 11.219-5.031 11.188-11.219 11.188zM11.188 7.563c-4.625 0-8.375 3.813-8.375 8.438s3.75 8.375 8.375 8.375 8.438-3.75 8.438-8.375-3.813-8.438-8.438-8.438zM14.219 20.281l-3.969-2.906c-0.281-0.219-0.563-0.688-0.563-1.063v-6.344c0-0.344 0.313-0.625 0.688-0.625h1.313c0.344 0 0.625 0.281 0.625 0.625v5c0 0.375 0.281 0.844 0.563 1.063l2.906 2.094c0.281 0.219 0.344 0.656 0.125 0.938l-0.781 1.063c-0.219 0.281-0.625 0.344-0.906 0.156z\" data-v-6fc4956f></path></g></svg>\n                            Monday - Friday: 9am - 5pm, Saturday: 10am - 2pm, Sunday: Closed</span></div></div></div></div></div> <div class=\"rounded-lg\" data-v-6fc4956f><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.417412837234!2d-73.98579178521707!3d40.74844194225139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259d75c5f5c5d%3A0x93a74d47b46dbd65!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635024562182!5m2!1sen!2sus\" width=\"100%\" height=\"500\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" style=\"border:0;\" data-v-6fc4956f></iframe></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=6fc4956f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
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
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  data() {
    return {
      videoSrc: 'https://web.whatsapp.com/whatsapp-webclient-login_c09223f0813e7c3adc16476cba2a5d0d.mp4'
    };
  }

});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6fc4956f",
  "4aaab1d9"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map
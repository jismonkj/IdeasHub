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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.vue2Dropzone=t()}(this,function(){"use strict";var n={getSignedURL:function(o,s){var a={filePath:o.name,contentType:o.type};return new Promise(function(e,t){var n=new FormData,r=new XMLHttpRequest,i="function"==typeof s.signingURL?s.signingURL(o):s.signingURL;r.open("POST",i),r.onload=function(){200==r.status?e(JSON.parse(r.response)):t(r.statusText)},r.onerror=function(e){console.error("Network Error : Could not send request to AWS (Maybe CORS errors)"),t(e)},!0===s.withCredentials&&(r.withCredentials=!0),Object.entries(s.headers||{}).forEach(function(e){var t=e[0],i=e[1];r.setRequestHeader(t,i)}),a=Object.assign(a,s.params||{}),Object.entries(a).forEach(function(e){var t=e[0],i=e[1];n.append(t,i)}),r.send(n)})},sendFile:function(t,e,i){var n=i?this.setResponseHandler:this.sendS3Handler;return this.getSignedURL(t,e).then(function(e){return n(e,t)}).catch(function(e){return e})},setResponseHandler:function(e,t){t.s3Signature=e.signature,t.s3Url=e.postEndpoint},sendS3Handler:function(e,t){var o=new FormData,i=e.signature;return Object.keys(i).forEach(function(e){o.append(e,i[e])}),o.append("file",t),new Promise(function(i,n){var r=new XMLHttpRequest;r.open("POST",e.postEndpoint),r.onload=function(){if(201==r.status){var e=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[0].innerHTML;i({success:!0,message:e})}else{var t=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[0].innerHTML;n({success:!1,message:t+". Request is marked as resolved when returns as status 201"})}},r.onerror=function(e){var t=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[1].innerHTML;n({success:!1,message:t})},r.send(o)})}};var e,t=(function(e){var t=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(){l(this,e)}return t(e,[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(e){this._callbacks=this._callbacks||{};var t=this._callbacks[e];if(t){for(var i=arguments.length,n=Array(1<i?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];for(var o=0,s=s=t;;){if(o>=s.length)break;s[o++].apply(this,n)}}return this}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var i=this._callbacks[e];if(!i)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(var n=0;n<i.length;n++){if(i[n]===t){i.splice(n,1);break}}return this}}]),e}(),r=function(e){function b(e,t){l(this,b);var i,n=a(this,(b.__proto__||Object.getPrototypeOf(b)).call(this)),r=void 0;if(n.element=e,n.version=b.version,n.defaultOptions.previewTemplate=n.defaultOptions.previewTemplate.replace(/\n*/g,""),n.clickableElements=[],n.listeners=[],n.files=[],"string"==typeof n.element&&(n.element=document.querySelector(n.element)),!n.element||null==n.element.nodeType)throw new Error("Invalid dropzone element.");if(n.element.dropzone)throw new Error("Dropzone already attached.");b.instances.push(n),n.element.dropzone=n;var o,s=null!=(i=b.optionsForElement(n.element))?i:{};if(n.options=b.extend({},n.defaultOptions,s,null!=t?t:{}),n.options.forceFallback||!b.isBrowserSupported())return o=n.options.fallback.call(n),a(n,o);if(null==n.options.url&&(n.options.url=n.element.getAttribute("action")),!n.options.url)throw new Error("No URL provided.");if(n.options.acceptedFiles&&n.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(n.options.uploadMultiple&&n.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");return n.options.acceptedMimeTypes&&(n.options.acceptedFiles=n.options.acceptedMimeTypes,delete n.options.acceptedMimeTypes),null!=n.options.renameFilename&&(n.options.renameFile=function(e){return n.options.renameFilename.call(n,e.name,e)}),n.options.method=n.options.method.toUpperCase(),(r=n.getExistingFallback())&&r.parentNode&&r.parentNode.removeChild(r),!1!==n.options.previewsContainer&&(n.options.previewsContainer?n.previewsContainer=b.getElement(n.options.previewsContainer,"previewsContainer"):n.previewsContainer=n.element),n.options.clickable&&(!0===n.options.clickable?n.clickableElements=[n.element]:n.clickableElements=b.getElements(n.options.clickable,"clickable")),n.init(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(b,i),t(b,null,[{key:"initClass",value:function(){this.prototype.Emitter=i,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(e,t,i){if(i)return{dzuuid:i.file.upload.uuid,dzchunkindex:i.index,dztotalfilesize:i.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:i.file.upload.totalChunkCount,dzchunkbyteoffset:i.index*this.options.chunkSize}},accept:function(e,t){return t()},chunksUploaded:function(e,t){t()},fallback:function(){var e=void 0;this.element.className=this.element.className+" dz-browser-not-supported";for(var t=0,i=i=this.element.getElementsByTagName("div");;){if(t>=i.length)break;var n=i[t++];if(/(^| )dz-message($| )/.test(n.className)){(e=n).className="dz-message";break}}e||(e=b.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e));var r=e.getElementsByTagName("span")[0];return r&&(null!=r.textContent?r.textContent=this.options.dictFallbackMessage:null!=r.innerText&&(r.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,i,n){var r={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},o=e.width/e.height;null==t&&null==i?(t=r.srcWidth,i=r.srcHeight):null==t?t=i*o:null==i&&(i=t/o);var s=(t=Math.min(t,r.srcWidth))/(i=Math.min(i,r.srcHeight));if(r.srcWidth>t||r.srcHeight>i)if("crop"===n)s<o?(r.srcHeight=e.height,r.srcWidth=r.srcHeight*s):(r.srcWidth=e.width,r.srcHeight=r.srcWidth/s);else{if("contain"!==n)throw new Error("Unknown resizeMethod '"+n+"'");s<o?i=t/o:t=i*o}return r.srcX=(e.width-r.srcWidth)/2,r.srcY=(e.height-r.srcHeight)/2,r.trgWidth=t,r.trgHeight=i,r},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:function(e){},dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:function(e){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(t){var i=this;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){t.previewElement=b.createElement(this.options.previewTemplate.trim()),t.previewTemplate=t.previewElement,this.previewsContainer.appendChild(t.previewElement);for(var e=0,n=n=t.previewElement.querySelectorAll("[data-dz-name]");;){if(e>=n.length)break;var r=n[e++];r.textContent=t.name}for(var o=0,s=s=t.previewElement.querySelectorAll("[data-dz-size]");!(o>=s.length);)(r=s[o++]).innerHTML=this.filesize(t.size);this.options.addRemoveLinks&&(t._removeLink=b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),t.previewElement.appendChild(t._removeLink));for(var a=function(e){return e.preventDefault(),e.stopPropagation(),t.status===b.UPLOADING?b.confirm(i.options.dictCancelUploadConfirmation,function(){return i.removeFile(t)}):i.options.dictRemoveFileConfirmation?b.confirm(i.options.dictRemoveFileConfirmation,function(){return i.removeFile(t)}):i.removeFile(t)},l=0,u=u=t.previewElement.querySelectorAll("[data-dz-remove]");;){if(l>=u.length)break;u[l++].addEventListener("click",a)}}},removedfile:function(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-thumbnail]");;){if(i>=n.length)break;var r=n[i++];r.alt=e.name,r.src=t}return setTimeout(function(){return e.previewElement.classList.add("dz-image-preview")},1)}},error:function(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error);for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-errormessage]");;){if(i>=n.length)break;n[i++].textContent=t}}},errormultiple:function(){},processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.textContent=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(e,t,i){if(e.previewElement)for(var n=0,r=r=e.previewElement.querySelectorAll("[data-dz-uploadprogress]");;){if(n>=r.length)break;var o=r[n++];"PROGRESS"===o.nodeName?o.value=t:o.style.width=t+"%"}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(e){return this.emit("error",e,this.options.dictUploadCanceled)},canceledmultiple:function(){},complete:function(e){if(e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}},this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"extend",value:function(e){for(var t=arguments.length,i=Array(1<t?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];for(var r=0,o=o=i;;){if(r>=o.length)break;var s=o[r++];for(var a in s){var l=s[a];e[a]=l}}return e}}]),t(b,[{key:"getAcceptedFiles",value:function(){return this.files.filter(function(e){return e.accepted}).map(function(e){return e})}},{key:"getRejectedFiles",value:function(){return this.files.filter(function(e){return!e.accepted}).map(function(e){return e})}},{key:"getFilesWithStatus",value:function(t){return this.files.filter(function(e){return e.status===t}).map(function(e){return e})}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(b.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(b.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(b.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter(function(e){return e.status===b.UPLOADING||e.status===b.QUEUED}).map(function(e){return e})}},{key:"init",value:function(){var o=this;if("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(b.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length){!function r(){return o.hiddenFileInput&&o.hiddenFileInput.parentNode.removeChild(o.hiddenFileInput),o.hiddenFileInput=document.createElement("input"),o.hiddenFileInput.setAttribute("type","file"),(null===o.options.maxFiles||1<o.options.maxFiles)&&o.hiddenFileInput.setAttribute("multiple","multiple"),o.hiddenFileInput.className="dz-hidden-input",null!==o.options.acceptedFiles&&o.hiddenFileInput.setAttribute("accept",o.options.acceptedFiles),null!==o.options.capture&&o.hiddenFileInput.setAttribute("capture",o.options.capture),o.hiddenFileInput.style.visibility="hidden",o.hiddenFileInput.style.position="absolute",o.hiddenFileInput.style.top="0",o.hiddenFileInput.style.left="0",o.hiddenFileInput.style.height="0",o.hiddenFileInput.style.width="0",document.querySelector(o.options.hiddenInputContainer).appendChild(o.hiddenFileInput),o.hiddenFileInput.addEventListener("change",function(){var e=o.hiddenFileInput.files;if(e.length)for(var t=0,i=i=e;!(t>=i.length);){var n=i[t++];o.addFile(n)}return o.emit("addedfiles",e),r()})}()}this.URL=null!==window.URL?window.URL:window.webkitURL;for(var e=0,t=t=this.events;;){if(e>=t.length)break;var i=t[e++];this.on(i,this.options[i])}this.on("uploadprogress",function(){return o.updateTotalUploadProgress()}),this.on("removedfile",function(){return o.updateTotalUploadProgress()}),this.on("canceled",function(e){return o.emit("complete",e)}),this.on("complete",function(e){if(0===o.getAddedFiles().length&&0===o.getUploadingFiles().length&&0===o.getQueuedFiles().length)return setTimeout(function(){return o.emit("queuecomplete")},0)});var n=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:function(e){return o.emit("dragstart",e)},dragenter:function(e){return n(e),o.emit("dragenter",e)},dragover:function(e){var t=void 0;try{t=e.dataTransfer.effectAllowed}catch(e){}return e.dataTransfer.dropEffect="move"===t||"linkMove"===t?"move":"copy",n(e),o.emit("dragover",e)},dragleave:function(e){return o.emit("dragleave",e)},drop:function(e){return n(e),o.drop(e)},dragend:function(e){return o.emit("dragend",e)}}}],this.clickableElements.forEach(function(t){return o.listeners.push({element:t,events:{click:function(e){return(t!==o.element||e.target===o.element||b.elementInside(e.target,o.element.querySelector(".dz-message")))&&o.hiddenFileInput.click(),!0}}})}),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),(null!=this.hiddenFileInput?this.hiddenFileInput.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,b.instances.splice(b.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var e=void 0,t=0,i=0;if(this.getActiveFiles().length){for(var n=0,r=r=this.getActiveFiles();;){if(n>=r.length)break;var o=r[n++];t+=o.upload.bytesSent,i+=o.upload.total}e=100*t/i}else e=100;return this.emit("totaluploadprogress",e,i,t)}},{key:"_getParamName",value:function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")}},{key:"_renameFile",value:function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}},{key:"getFallbackForm",value:function(){var e,t=void 0;if(e=this.getExistingFallback())return e;var i='<div class="dz-fallback">';this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>';var n=b.createElement(i);return"FORM"!==this.element.tagName?(t=b.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(n):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=t?t:n}},{key:"getExistingFallback",value:function(){for(var e=function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];if(/(^| )fallback($| )/.test(n.className))return n}},t=["div","form"],i=0;i<t.length;i++){var n,r=t[i];if(n=e(this.element.getElementsByTagName(r)))return n}}},{key:"setupEventListeners",value:function(){return this.listeners.map(function(n){return function(){var e=[];for(var t in n.events){var i=n.events[t];e.push(n.element.addEventListener(t,i,!1))}return e}()})}},{key:"removeEventListeners",value:function(){return this.listeners.map(function(n){return function(){var e=[];for(var t in n.events){var i=n.events[t];e.push(n.element.removeEventListener(t,i,!1))}return e}()})}},{key:"disable",value:function(){var t=this;return this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),this.disabled=!0,this.files.map(function(e){return t.cancelUpload(e)})}},{key:"enable",value:function(){return delete this.disabled,this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()}},{key:"filesize",value:function(e){var t=0,i="b";if(0<e){for(var n=["tb","gb","mb","kb","b"],r=0;r<n.length;r++){var o=n[r];if(Math.pow(this.options.filesizeBase,4-r)/10<=e){t=e/Math.pow(this.options.filesizeBase,4-r),i=o;break}}t=Math.round(10*t)/10}return"<strong>"+t+"</strong> "+this.options.dictFileSizeUnits[i]}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(e){if(e.dataTransfer){this.emit("drop",e);for(var t=[],i=0;i<e.dataTransfer.files.length;i++)t[i]=e.dataTransfer.files[i];if(this.emit("addedfiles",t),t.length){var n=e.dataTransfer.items;n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)}}}},{key:"paste",value:function(e){if(null!=(t=null!=e?e.clipboardData:void 0,i=function(e){return e.items},null!=t?i(t):void 0)){var t,i;this.emit("paste",e);var n=e.clipboardData.items;return n.length?this._addFilesFromItems(n):void 0}}},{key:"handleFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];this.addFile(n)}}},{key:"_addFilesFromItems",value:function(o){var s=this;return function(){for(var e=[],t=0,i=i=o;;){if(t>=i.length)break;var n,r=i[t++];null!=r.webkitGetAsEntry&&(n=r.webkitGetAsEntry())?n.isFile?e.push(s.addFile(r.getAsFile())):n.isDirectory?e.push(s._addFilesFromDirectory(n,n.name)):e.push(void 0):null!=r.getAsFile&&(null==r.kind||"file"===r.kind)?e.push(s.addFile(r.getAsFile())):e.push(void 0)}return e}()}},{key:"_addFilesFromDirectory",value:function(e,o){var s=this,t=e.createReader(),i=function(t){return e=console,i="log",n=function(e){return e.log(t)},null!=e&&"function"==typeof e[i]?n(e,i):void 0;var e,i,n};return function r(){return t.readEntries(function(e){if(0<e.length){for(var t=0,i=i=e;!(t>=i.length);){var n=i[t++];n.isFile?n.file(function(e){if(!s.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath=o+"/"+e.name,s.addFile(e)}):n.isDirectory&&s._addFilesFromDirectory(n,o+"/"+n.name)}r()}return null},i)}()}},{key:"accept",value:function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):b.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}},{key:"addFile",value:function(t){var i=this;return t.upload={uuid:b.uuidv4(),progress:0,total:t.size,bytesSent:0,filename:this._renameFile(t),chunked:this.options.chunking&&(this.options.forceChunking||t.size>this.options.chunkSize),totalChunkCount:Math.ceil(t.size/this.options.chunkSize)},this.files.push(t),t.status=b.ADDED,this.emit("addedfile",t),this._enqueueThumbnail(t),this.accept(t,function(e){return e?(t.accepted=!1,i._errorProcessing([t],e)):(t.accepted=!0,i.options.autoQueue&&i.enqueueFile(t)),i._updateMaxFilesReachedClass()})}},{key:"enqueueFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];this.enqueueFile(n)}return null}},{key:"enqueueFile",value:function(e){var t=this;if(e.status!==b.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=b.QUEUED,this.options.autoProcessQueue)return setTimeout(function(){return t.processQueue()},0)}},{key:"_enqueueThumbnail",value:function(e){var t=this;if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(){return t._processThumbnailQueue()},0)}},{key:"_processThumbnailQueue",value:function(){var t=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0;var i=this._thumbnailQueue.shift();return this.createThumbnail(i,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,function(e){return t.emit("thumbnail",i,e),t._processingThumbnail=!1,t._processThumbnailQueue()})}}},{key:"removeFile",value:function(e){if(e.status===b.UPLOADING&&this.cancelUpload(e),this.files=n(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(e){null==e&&(e=!1);for(var t=0,i=i=this.files.slice();;){if(t>=i.length)break;var n=i[t++];(n.status!==b.UPLOADING||e)&&this.removeFile(n)}return null}},{key:"resizeImage",value:function(r,e,t,i,o){var s=this;return this.createThumbnail(r,e,t,i,!1,function(e,t){if(null==t)return o(r);var i=s.options.resizeMimeType;null==i&&(i=r.type);var n=t.toDataURL(i,s.options.resizeQuality);return"image/jpeg"!==i&&"image/jpg"!==i||(n=u.restore(r.dataURL,n)),o(b.dataURItoBlob(n))})}},{key:"createThumbnail",value:function(e,t,i,n,r,o){var s=this,a=new FileReader;return a.onload=function(){if(e.dataURL=a.result,"image/svg+xml"!==e.type)return s.createThumbnailFromUrl(e,t,i,n,r,o);null!=o&&o(a.result)},a.readAsDataURL(e)}},{key:"createThumbnailFromUrl",value:function(o,s,a,l,t,u,e){var d=this,c=document.createElement("img");return e&&(c.crossOrigin=e),c.onload=function(){var e=function(e){return e(1)};return"undefined"!=typeof EXIF&&null!==EXIF&&t&&(e=function(e){return EXIF.getData(c,function(){return e(EXIF.getTag(this,"Orientation"))})}),e(function(e){o.width=c.width,o.height=c.height;var t=d.options.resize.call(d,o,s,a,l),i=document.createElement("canvas"),n=i.getContext("2d");switch(i.width=t.trgWidth,i.height=t.trgHeight,4<e&&(i.width=t.trgHeight,i.height=t.trgWidth),e){case 2:n.translate(i.width,0),n.scale(-1,1);break;case 3:n.translate(i.width,i.height),n.rotate(Math.PI);break;case 4:n.translate(0,i.height),n.scale(1,-1);break;case 5:n.rotate(.5*Math.PI),n.scale(1,-1);break;case 6:n.rotate(.5*Math.PI),n.translate(0,-i.height);break;case 7:n.rotate(.5*Math.PI),n.translate(i.width,-i.height),n.scale(-1,1);break;case 8:n.rotate(-.5*Math.PI),n.translate(-i.width,0)}p(n,c,null!=t.srcX?t.srcX:0,null!=t.srcY?t.srcY:0,t.srcWidth,t.srcHeight,null!=t.trgX?t.trgX:0,null!=t.trgY?t.trgY:0,t.trgWidth,t.trgHeight);var r=i.toDataURL("image/png");if(null!=u)return u(r,i)})},null!=u&&(c.onerror=u),c.src=o.dataURL}},{key:"processQueue",value:function(){var e=this.options.parallelUploads,t=this.getUploadingFiles().length,i=t;if(!(e<=t)){var n=this.getQueuedFiles();if(0<n.length){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,e-t));for(;i<e;){if(!n.length)return;this.processFile(n.shift()),i++}}}}},{key:"processFile",value:function(e){return this.processFiles([e])}},{key:"processFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];n.processing=!0,n.status=b.UPLOADING,this.emit("processing",n)}return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}},{key:"_getFilesWithXhr",value:function(t){return this.files.filter(function(e){return e.xhr===t}).map(function(e){return e})}},{key:"cancelUpload",value:function(e){if(e.status===b.UPLOADING){for(var t=this._getFilesWithXhr(e.xhr),i=0,n=n=t;;){if(i>=n.length)break;n[i++].status=b.CANCELED}void 0!==e.xhr&&e.xhr.abort();for(var r=0,o=o=t;;){if(r>=o.length)break;var s=o[r++];this.emit("canceled",s)}this.options.uploadMultiple&&this.emit("canceledmultiple",t)}else e.status!==b.ADDED&&e.status!==b.QUEUED||(e.status=b.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(e){if("function"==typeof e){for(var t=arguments.length,i=Array(1<t?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return e.apply(this,i)}return e}},{key:"uploadFile",value:function(e){return this.uploadFiles([e])}},{key:"uploadFiles",value:function(a){var l=this;this._transformFiles(a,function(e){if(a[0].upload.chunked){var r=a[0],o=e[0];r.upload.chunks=[];var n=function(){for(var e=0;void 0!==r.upload.chunks[e];)e++;if(!(e>=r.upload.totalChunkCount)){0;var t=e*l.options.chunkSize,i=Math.min(t+l.options.chunkSize,r.size),n={name:l._getParamName(0),data:o.webkitSlice?o.webkitSlice(t,i):o.slice(t,i),filename:r.upload.filename,chunkIndex:e};r.upload.chunks[e]={file:r,index:e,dataBlock:n,status:b.UPLOADING,progress:0,retries:0},l._uploadData(a,[n])}};if(r.upload.finishedChunkUpload=function(e){var t=!0;e.status=b.SUCCESS,e.dataBlock=null;for(var i=0;i<r.upload.totalChunkCount;i++){if(void 0===r.upload.chunks[i])return n();r.upload.chunks[i].status!==b.SUCCESS&&(t=!1)}t&&l.options.chunksUploaded(r,function(){l._finished(a,"",null)})},l.options.parallelChunkUploads)for(var t=0;t<r.upload.totalChunkCount;t++)n();else n()}else{for(var i=[],s=0;s<a.length;s++)i[s]={name:l._getParamName(s),data:e[s],filename:a[s].upload.filename};l._uploadData(a,i)}})}},{key:"_getChunk",value:function(e,t){for(var i=0;i<e.upload.totalChunkCount;i++)if(void 0!==e.upload.chunks[i]&&e.upload.chunks[i].xhr===t)return e.upload.chunks[i]}},{key:"_uploadData",value:function(t,e){for(var i=this,n=new XMLHttpRequest,r=0,o=o=t;;){if(r>=o.length)break;o[r++].xhr=n}t[0].upload.chunked&&(t[0].upload.chunks[e[0].chunkIndex].xhr=n);var s=this.resolveOption(this.options.method,t),a=this.resolveOption(this.options.url,t);n.open(s,a,!0),n.timeout=this.resolveOption(this.options.timeout,t),n.withCredentials=!!this.options.withCredentials,n.onload=function(e){i._finishedUploading(t,n,e)},n.onerror=function(){i._handleUploadError(t,n)},(null!=n.upload?n.upload:n).onprogress=function(e){return i._updateFilesUploadProgress(t,n,e)};var l={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};for(var u in this.options.headers&&b.extend(l,this.options.headers),l){var d=l[u];d&&n.setRequestHeader(u,d)}var c=new FormData;if(this.options.params){var p=this.options.params;for(var h in"function"==typeof p&&(p=p.call(this,t,n,t[0].upload.chunked?this._getChunk(t[0],n):null)),p){var f=p[h];c.append(h,f)}}for(var m=0,v=v=t;;){if(m>=v.length)break;var g=v[m++];this.emit("sending",g,n,c)}this.options.uploadMultiple&&this.emit("sendingmultiple",t,n,c),this._addFormElementData(c);for(var k=0;k<e.length;k++){var y=e[k];c.append(y.name,y.data,y.filename)}this.submitRequest(n,c,t)}},{key:"_transformFiles",value:function(i,n){for(var e=this,r=[],o=0,t=function(t){e.options.transformFile.call(e,i[t],function(e){r[t]=e,++o===i.length&&n(r)})},s=0;s<i.length;s++)t(s)}},{key:"_addFormElementData",value:function(e){if("FORM"===this.element.tagName)for(var t=0,i=i=this.element.querySelectorAll("input, textarea, select, button");;){if(t>=i.length)break;var n=i[t++],r=n.getAttribute("name"),o=n.getAttribute("type");if(o&&(o=o.toLowerCase()),null!=r)if("SELECT"===n.tagName&&n.hasAttribute("multiple"))for(var s=0,a=a=n.options;;){if(s>=a.length)break;var l=a[s++];l.selected&&e.append(r,l.value)}else(!o||"checkbox"!==o&&"radio"!==o||n.checked)&&e.append(r,n.value)}}},{key:"_updateFilesUploadProgress",value:function(e,t,i){var n=void 0;if(void 0!==i){if(n=100*i.loaded/i.total,e[0].upload.chunked){var r=e[0],o=this._getChunk(r,t);o.progress=n,o.total=i.total,o.bytesSent=i.loaded;r.upload.progress=0,r.upload.total=0;for(var s=r.upload.bytesSent=0;s<r.upload.totalChunkCount;s++)void 0!==r.upload.chunks[s]&&void 0!==r.upload.chunks[s].progress&&(r.upload.progress+=r.upload.chunks[s].progress,r.upload.total+=r.upload.chunks[s].total,r.upload.bytesSent+=r.upload.chunks[s].bytesSent);r.upload.progress=r.upload.progress/r.upload.totalChunkCount}else for(var a=0,l=l=e;;){if(a>=l.length)break;var u=l[a++];u.upload.progress=n,u.upload.total=i.total,u.upload.bytesSent=i.loaded}for(var d=0,c=c=e;;){if(d>=c.length)break;var p=c[d++];this.emit("uploadprogress",p,p.upload.progress,p.upload.bytesSent)}}else{var h=!0;n=100;for(var f=0,m=m=e;;){if(f>=m.length)break;var v=m[f++];100===v.upload.progress&&v.upload.bytesSent===v.upload.total||(h=!1),v.upload.progress=n,v.upload.bytesSent=v.upload.total}if(h)return;for(var g=0,k=k=e;;){if(g>=k.length)break;var y=k[g++];this.emit("uploadprogress",y,n,y.upload.bytesSent)}}}},{key:"_finishedUploading",value:function(e,t,i){var n=void 0;if(e[0].status!==b.CANCELED&&4===t.readyState){if("arraybuffer"!==t.responseType&&"blob"!==t.responseType&&(n=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{n=JSON.parse(n)}catch(e){i=e,n="Invalid JSON response from server."}this._updateFilesUploadProgress(e),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t)):this._finished(e,n,i):this._handleUploadError(e,t,n)}}},{key:"_handleUploadError",value:function(e,t,i){if(e[0].status!==b.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){var n=this._getChunk(e[0],t);if(n.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[n.dataBlock]);console.warn("Retried this chunk too often. Giving up.")}for(var r=0,o=o=e;;){if(r>=o.length)break;o[r++];this._errorProcessing(e,i||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}}},{key:"submitRequest",value:function(e,t,i){e.send(t)}},{key:"_finished",value:function(e,t,i){for(var n=0,r=r=e;;){if(n>=r.length)break;var o=r[n++];o.status=b.SUCCESS,this.emit("success",o,t,i),this.emit("complete",o)}if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(e,t,i){for(var n=0,r=r=e;;){if(n>=r.length)break;var o=r[n++];o.status=b.ERROR,this.emit("error",o,t,i),this.emit("complete",o)}if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}]),b}();r.initClass(),r.version="5.4.0",r.options={},r.optionsForElement=function(e){return e.getAttribute("id")?r.options[o(e.getAttribute("id"))]:void 0},r.instances=[],r.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},r.autoDiscover=!0,r.discover=function(){var o=void 0;if(document.querySelectorAll)o=document.querySelectorAll(".dropzone");else{o=[];var e=function(r){return function(){for(var e=[],t=0,i=i=r;;){if(t>=i.length)break;var n=i[t++];/(^| )dropzone($| )/.test(n.className)?e.push(o.push(n)):e.push(void 0)}return e}()};e(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))}return function(){for(var e=[],t=0,i=i=o;;){if(t>=i.length)break;var n=i[t++];!1!==r.optionsForElement(n)?e.push(new r(n)):e.push(void 0)}return e}()},r.blacklistedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],r.isBrowserSupported=function(){var e=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(var t=0,i=i=r.blacklistedBrowsers;;){if(t>=i.length)break;i[t++].test(navigator.userAgent)&&(e=!1)}else e=!1;else e=!1;return e},r.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),r=new Uint8Array(n),o=0,s=t.length,a=0<=s;a?o<=s:s<=o;a?o++:o--)r[o]=t.charCodeAt(o);return new Blob([n],{type:i})};var n=function(e,t){return e.filter(function(e){return e!==t}).map(function(e){return e})},o=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})};r.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},r.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},r.getElement=function(e,t){var i=void 0;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},r.getElements=function(e,t){var i=void 0,n=void 0;if(e instanceof Array){n=[];try{for(var r=0,o=o=e;!(r>=o.length);)i=o[r++],n.push(this.getElement(i,t))}catch(e){n=null}}else if("string"==typeof e){n=[];for(var s=0,a=a=document.querySelectorAll(e);!(s>=a.length);)i=a[s++],n.push(i)}else null!=e.nodeType&&(n=[e]);if(null==n||!n.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return n},r.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},r.isValidFile=function(e,t){if(!t)return!0;t=t.split(",");for(var i=e.type,n=i.replace(/\/.*$/,""),r=0,o=o=t;;){if(r>=o.length)break;var s=o[r++];if("."===(s=s.trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length))return!0}else if(/\/\*$/.test(s)){if(n===s.replace(/\/.*$/,""))return!0}else if(i===s)return!0}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new r(this,e)})}),null!==e?e.exports=r:window.Dropzone=r,r.ADDED="added",r.QUEUED="queued",r.ACCEPTED=r.QUEUED,r.UPLOADING="uploading",r.PROCESSING=r.UPLOADING,r.CANCELED="canceled",r.ERROR="error",r.SUCCESS="success";var p=function(e,t,i,n,r,o,s,a,l,u){var d=function(e){e.naturalWidth;var t=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=t;var n=i.getContext("2d");n.drawImage(e,0,0);for(var r=n.getImageData(1,0,1,t).data,o=0,s=t,a=t;o<a;)0===r[4*(a-1)+3]?s=a:o=a,a=s+o>>1;var l=a/t;return 0===l?1:l}(t);return e.drawImage(t,i,n,r,o,s,a,l,u/d)},u=function(){function e(){l(this,e)}return t(e,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(e){for(var t="",i=void 0,n=void 0,r="",o=void 0,s=void 0,a=void 0,l="",u=0;o=(i=e[u++])>>2,s=(3&i)<<4|(n=e[u++])>>4,a=(15&n)<<2|(r=e[u++])>>6,l=63&r,isNaN(n)?a=l=64:isNaN(r)&&(l=64),t=t+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(l),i=n=r="",o=s=a=l="",u<e.length;);return t}},{key:"restore",value:function(e,t){if(!e.match("data:image/jpeg;base64,"))return t;var i=this.decode64(e.replace("data:image/jpeg;base64,","")),n=this.slice2Segments(i),r=this.exifManipulation(t,n);return"data:image/jpeg;base64,"+this.encode64(r)}},{key:"exifManipulation",value:function(e,t){var i=this.getExifArray(t),n=this.insertExif(e,i);return new Uint8Array(n)}},{key:"getExifArray",value:function(e){for(var t=void 0,i=0;i<e.length;){if(255===(t=e[i])[0]&225===t[1])return t;i++}return[]}},{key:"insertExif",value:function(e,t){var i=e.replace("data:image/jpeg;base64,",""),n=this.decode64(i),r=n.indexOf(255,3),o=n.slice(0,r),s=n.slice(r),a=o;return a=(a=a.concat(t)).concat(s)}},{key:"slice2Segments",value:function(e){for(var t=0,i=[];;){if(255===e[t]&218===e[t+1])break;if(255===e[t]&216===e[t+1])t+=2;else{var n=t+(256*e[t+2]+e[t+3])+2,r=e.slice(t,n);i.push(r),t=n}if(t>e.length)break}return i}},{key:"decode64",value:function(e){var t=void 0,i=void 0,n="",r=void 0,o=void 0,s="",a=0,l=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");t=this.KEY_STR.indexOf(e.charAt(a++))<<2|(r=this.KEY_STR.indexOf(e.charAt(a++)))>>4,i=(15&r)<<4|(o=this.KEY_STR.indexOf(e.charAt(a++)))>>2,n=(3&o)<<6|(s=this.KEY_STR.indexOf(e.charAt(a++))),l.push(t),64!==o&&l.push(i),64!==s&&l.push(n),t=i=n="",r=o=s="",a<e.length;);return l}}]),e}();u.initClass();r._autoDiscoverFunction=function(){if(r.autoDiscover)return r.discover()},function(i,n){var r=!1,e=!0,o=i.document,s=o.documentElement,t=o.addEventListener?"addEventListener":"attachEvent",a=o.addEventListener?"removeEventListener":"detachEvent",l=o.addEventListener?"":"on",u=function e(t){if("readystatechange"!==t.type||"complete"===o.readyState)return("load"===t.type?i:o)[a](l+t.type,e,!1),!r&&(r=!0)?n.call(i,t.type||t):void 0};if("complete"!==o.readyState){if(o.createEventObject&&s.doScroll){try{e=!i.frameElement}catch(e){}e&&function t(){try{s.doScroll("left")}catch(e){return void setTimeout(t,50)}return u("poll")}()}o[t](l+"DOMContentLoaded",u,!1),o[t](l+"readystatechange",u,!1),i[t](l+"load",u,!1)}}(window,r._autoDiscoverFunction)}(e={exports:{}},e.exports),e.exports);return t.autoDiscover=!1,{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"dropzoneElement",class:{"vue-dropzone dropzone":e.includeStyling},attrs:{id:e.id}},[e.useCustomSlot?i("div",{staticClass:"dz-message"},[e._t("default",[e._v("Drop files here to upload")])],2):e._e()])},staticRenderFns:[],props:{id:{type:String,required:!0,default:"dropzone"},options:{type:Object,required:!0},includeStyling:{type:Boolean,default:!0,required:!1},awss3:{type:Object,required:!1,default:null},destroyDropzone:{type:Boolean,default:!0,required:!1},duplicateCheck:{type:Boolean,default:!1,required:!1},useCustomSlot:{type:Boolean,default:!1,required:!1}},data:function(){return{isS3:!1,isS3OverridesServerPropagation:!1,wasQueueAutoProcess:!0}},computed:{dropzoneSettings:function(){var t={thumbnailWidth:200,thumbnailHeight:200};return Object.keys(this.options).forEach(function(e){t[e]=this.options[e]},this),null!==this.awss3&&(t.autoProcessQueue=!1,this.isS3=!0,this.isS3OverridesServerPropagation=!1===this.awss3.sendFileToServer,void 0!==this.options.autoProcessQueue&&(this.wasQueueAutoProcess=this.options.autoProcessQueue),this.isS3OverridesServerPropagation&&(t.url=function(e){return e[0].s3Url})),t}},methods:{manuallyAddFile:function(e,t){if(e.manuallyAdded=!0,this.dropzone.emit("addedfile",e),this.dropzone.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.dropzone.options.maxThumbnailFilesize*1024){t&&this.dropzone.emit("thumbnail",e,t);for(var i=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),n=0;n<i.length;n++)i[n].style.width=this.dropzoneSettings.thumbnailWidth+"px",i[n].style.height=this.dropzoneSettings.thumbnailHeight+"px",i[n].style["object-fit"]="contain"}this.dropzone.emit("complete",e),this.dropzone.options.maxFiles&&this.dropzone.options.maxFiles--,this.dropzone.files.push(e),this.$emit("vdropzone-file-added-manually",e)},setOption:function(e,t){this.dropzone.options[e]=t},removeAllFiles:function(e){this.dropzone.removeAllFiles(e)},processQueue:function(){var t=this,e=this.dropzone;this.isS3&&!this.wasQueueAutoProcess?this.getQueuedFiles().forEach(function(e){t.getSignedAndUploadToS3(e)}):this.dropzone.processQueue(),this.dropzone.on("success",function(){e.options.autoProcessQueue=!0}),this.dropzone.on("queuecomplete",function(){e.options.autoProcessQueue=!1})},init:function(){return this.dropzone.init()},destroy:function(){return this.dropzone.destroy()},updateTotalUploadProgress:function(){return this.dropzone.updateTotalUploadProgress()},getFallbackForm:function(){return this.dropzone.getFallbackForm()},getExistingFallback:function(){return this.dropzone.getExistingFallback()},setupEventListeners:function(){return this.dropzone.setupEventListeners()},removeEventListeners:function(){return this.dropzone.removeEventListeners()},disable:function(){return this.dropzone.disable()},enable:function(){return this.dropzone.enable()},filesize:function(e){return this.dropzone.filesize(e)},accept:function(e,t){return this.dropzone.accept(e,t)},addFile:function(e){return this.dropzone.addFile(e)},removeFile:function(e){this.dropzone.removeFile(e)},getAcceptedFiles:function(){return this.dropzone.getAcceptedFiles()},getRejectedFiles:function(){return this.dropzone.getRejectedFiles()},getFilesWithStatus:function(){return this.dropzone.getFilesWithStatus()},getQueuedFiles:function(){return this.dropzone.getQueuedFiles()},getUploadingFiles:function(){return this.dropzone.getUploadingFiles()},getAddedFiles:function(){return this.dropzone.getAddedFiles()},getActiveFiles:function(){return this.dropzone.getActiveFiles()},getSignedAndUploadToS3:function(t){var i=this,e=n.sendFile(t,this.awss3,this.isS3OverridesServerPropagation);this.isS3OverridesServerPropagation?e.then(function(){setTimeout(function(){return i.dropzone.processFile(t)})}):e.then(function(e){e.success?(t.s3ObjectLocation=e.message,setTimeout(function(){return i.dropzone.processFile(t)}),i.$emit("vdropzone-s3-upload-success",e.message)):void 0!==e.message?i.$emit("vdropzone-s3-upload-error",e.message):i.$emit("vdropzone-s3-upload-error","Network Error : Could not send request to AWS. (Maybe CORS error)")}),e.catch(function(e){alert(e)})},setAWSSigningURL:function(e){this.isS3&&(this.awss3.signingURL=e)}},mounted:function(){if(!this.$isServer||!this.hasBeenMounted){this.hasBeenMounted=!0,this.dropzone=new t(this.$refs.dropzoneElement,this.dropzoneSettings);var r=this;this.dropzone.on("thumbnail",function(e,t){r.$emit("vdropzone-thumbnail",e,t)}),this.dropzone.on("addedfile",function(e){var t,i;if(r.duplicateCheck&&this.files.length)for(t=0,i=this.files.length;t<i-1;t++)this.files[t].name===e.name&&this.files[t].size===e.size&&this.files[t].lastModifiedDate.toString()===e.lastModifiedDate.toString()&&(this.removeFile(e),!0,r.$emit("vdropzone-duplicate-file",e));r.$emit("vdropzone-file-added",e),r.isS3&&r.wasQueueAutoProcess&&r.getSignedAndUploadToS3(e)}),this.dropzone.on("addedfiles",function(e){r.$emit("vdropzone-files-added",e)}),this.dropzone.on("removedfile",function(e){r.$emit("vdropzone-removed-file",e),e.manuallyAdded&&r.dropzone.options.maxFiles++}),this.dropzone.on("success",function(e,t){if(r.$emit("vdropzone-success",e,t),r.isS3){if(r.isS3OverridesServerPropagation){var i=(new window.DOMParser).parseFromString(t,"text/xml").firstChild.children[0].innerHTML;r.$emit("vdropzone-s3-upload-success",i)}r.wasQueueAutoProcess&&r.setOption("autoProcessQueue",!1)}}),this.dropzone.on("successmultiple",function(e,t){r.$emit("vdropzone-success-multiple",e,t)}),this.dropzone.on("error",function(e,t,i){r.$emit("vdropzone-error",e,t,i),this.isS3&&r.$emit("vdropzone-s3-upload-error")}),this.dropzone.on("errormultiple",function(e,t,i){r.$emit("vdropzone-error-multiple",e,t,i)}),this.dropzone.on("sending",function(e,t,i){if(r.isS3)if(r.isS3OverridesServerPropagation){var n=e.s3Signature;Object.keys(n).forEach(function(e){i.append(e,n[e])})}else i.append("s3ObjectLocation",e.s3ObjectLocation);r.$emit("vdropzone-sending",e,t,i)}),this.dropzone.on("sendingmultiple",function(e,t,i){r.$emit("vdropzone-sending-multiple",e,t,i)}),this.dropzone.on("complete",function(e){r.$emit("vdropzone-complete",e)}),this.dropzone.on("completemultiple",function(e){r.$emit("vdropzone-complete-multiple",e)}),this.dropzone.on("canceled",function(e){r.$emit("vdropzone-canceled",e)}),this.dropzone.on("canceledmultiple",function(e){r.$emit("vdropzone-canceled-multiple",e)}),this.dropzone.on("maxfilesreached",function(e){r.$emit("vdropzone-max-files-reached",e)}),this.dropzone.on("maxfilesexceeded",function(e){r.$emit("vdropzone-max-files-exceeded",e)}),this.dropzone.on("processing",function(e){r.$emit("vdropzone-processing",e)}),this.dropzone.on("processing",function(e){r.$emit("vdropzone-processing",e)}),this.dropzone.on("processingmultiple",function(e){r.$emit("vdropzone-processing-multiple",e)}),this.dropzone.on("uploadprogress",function(e,t,i){r.$emit("vdropzone-upload-progress",e,t,i)}),this.dropzone.on("totaluploadprogress",function(e,t,i){r.$emit("vdropzone-total-upload-progress",e,t,i)}),this.dropzone.on("reset",function(){r.$emit("vdropzone-reset")}),this.dropzone.on("queuecomplete",function(){r.$emit("vdropzone-queue-complete")}),this.dropzone.on("drop",function(e){r.$emit("vdropzone-drop",e)}),this.dropzone.on("dragstart",function(e){r.$emit("vdropzone-drag-start",e)}),this.dropzone.on("dragend",function(e){r.$emit("vdropzone-drag-end",e)}),this.dropzone.on("dragenter",function(e){r.$emit("vdropzone-drag-enter",e)}),this.dropzone.on("dragover",function(e){r.$emit("vdropzone-drag-over",e)}),this.dropzone.on("dragleave",function(e){r.$emit("vdropzone-drag-leave",e)}),r.$emit("vdropzone-mounted")}},beforeDestroy:function(){this.destroyDropzone&&this.dropzone.destroy()}}});
//# sourceMappingURL=vue2Dropzone.js.map


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(47);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 47 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_dropzone__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue2_dropzone_dist_vue2Dropzone_min_css__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue2_dropzone_dist_vue2Dropzone_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue2_dropzone_dist_vue2Dropzone_min_css__);
window.vueDropzone = __webpack_require__(12);




Vue.component('company-list-item', __webpack_require__(52));
Vue.component('idea-shared', __webpack_require__(55));

var user = new Vue({
    el: '#userHome',
    data: {
        uid: "",
        cList: null,
        iList: null,
        preFix: "background-image:/",
        csrfToken: $('meta[name="csrf-token"]').attr('content')
    },
    mounted: function mounted() {
        axios.post('/list/company').then(function (response) {
            this.cList = response.data;
        }.bind(this)).catch(function (error) {
            // console.log(error);
        });

        axios.post('/list/idea').then(function (response) {
            this.iList = response.data;
            // console.log(response.data);
        }.bind(this)).catch(function (error) {
            // console.log(error);
        });
    },
    methods: {
        delIdea: function delIdea(index, id) {
            this.iList.splice(index, 1);
            //del idea on db
            axios.post('/del/idea', { 'iid': id }).then(function (response) {
                // console.log(response.data);
            });
        }
    },
    components: {
        vueDropzone: vueDropzone
    }
});

var drop = new Vue({
    el: '#info',
    components: {
        vueDropzone: __WEBPACK_IMPORTED_MODULE_0_vue2_dropzone___default.a
    },
    data: function data() {
        return {
            dropzoneOptions: {
                duplicateCheck: true,
                url: '/idea/upload',
                thumbnailWidth: 150,
                maxFilesize: 2,
                autoProcessQueue: false,
                acceptedFiles: 'image/*,application/pdf',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            }
        };
    },
    methods: {
        vdropzoneSuccess: function vdropzoneSuccess(file, response) {
            console.log(response);
            if (response) {
                //
            }
        },
        uploadDropzone: function uploadDropzone() {
            this.$refs.myVueDropzone.processQueue();
        },
        removeAll: function removeAll() {
            this.$refs.myVueDropzone.removeAllFiles();
        },
        redirectHome: function redirectHome() {
            window.location.href = "/home";
        },
        ideaPreview: function ideaPreview() {
            window.location.href = "/idea/preview";
        }

    }
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(46)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./vue2Dropzone.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./vue2Dropzone.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px);transform:translateY(-40px)}}@-moz-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px);transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-40px);-moz-transform:translateY(-40px);-ms-transform:translateY(-40px);-o-transform:translateY(-40px);transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}@-moz-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}@-moz-keyframes pulse{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,0.3);background:white;padding:20px 20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:white}.dropzone .dz-preview.dz-image-preview .dz-details{-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;-ms-transition:opacity .2s linear;-o-transition:opacity .2s linear;transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:0}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,0.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,0.8);background-color:rgba(255,255,255,0.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:rgba(255,255,255,0.4);padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{-webkit-transform:scale(1.05,1.05);-moz-transform:scale(1.05,1.05);-ms-transform:scale(1.05,1.05);-o-transform:scale(1.05,1.05);transform:scale(1.05,1.05);-webkit-filter:blur(8px);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(0.77,0,0.175,1);-moz-animation:passing-through 3s cubic-bezier(0.77,0,0.175,1);-ms-animation:passing-through 3s cubic-bezier(0.77,0,0.175,1);-o-animation:passing-through 3s cubic-bezier(0.77,0,0.175,1);animation:passing-through 3s cubic-bezier(0.77,0,0.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(0.77,0,0.175,1);-moz-animation:slide-in 3s cubic-bezier(0.77,0,0.175,1);-ms-animation:slide-in 3s cubic-bezier(0.77,0,0.175,1);-o-animation:slide-in 3s cubic-bezier(0.77,0,0.175,1);animation:slide-in 3s cubic-bezier(0.77,0,0.175,1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;-webkit-transition:all .2s linear;-moz-transition:all .2s linear;-ms-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;-webkit-transition:opacity .4s ease-in;-moz-transition:opacity .4s ease-in;-ms-transition:opacity .4s ease-in;-o-transition:opacity .4s ease-in;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;-moz-animation:pulse 6s ease infinite;-ms-animation:pulse 6s ease infinite;-o-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:rgba(255,255,255,0.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(to bottom,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;-webkit-transition:width 300ms ease-in-out;-moz-transition:width 300ms ease-in-out;-ms-transition:width 300ms ease-in-out;-o-transition:width 300ms ease-in-out;transition:width 300ms ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;-webkit-transition:opacity .3s ease;-moz-transition:opacity .3s ease;-ms-transition:opacity .3s ease;-o-transition:opacity .3s ease;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(to bottom,#be2626,#a92222);padding:.5em 1.2em;color:white}.dropzone .dz-preview .dz-error-message:after{content:'';position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}.vue-dropzone{border:2px solid #e5e5e5;font-family:'Arial',sans-serif;letter-spacing:.2px;color:#777;transition:background-color .2s linear}.vue-dropzone:hover{background-color:#f6f6f6}.vue-dropzone i{color:#CCC}.vue-dropzone .dz-preview .dz-image{border-radius:0;width:100%;height:100%}.vue-dropzone .dz-preview .dz-image img:not([src]){width:200px;height:200px}.vue-dropzone .dz-preview .dz-image:hover img{transform:none;-webkit-filter:none}.vue-dropzone .dz-preview .dz-details{bottom:0;top:0;color:white;background-color:rgba(33,150,243,0.8);transition:opacity .2s linear;text-align:left}.vue-dropzone .dz-preview .dz-details .dz-filename{overflow:hidden}.vue-dropzone .dz-preview .dz-details .dz-filename span,.vue-dropzone .dz-preview .dz-details .dz-size span{background-color:transparent}.vue-dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:0}.vue-dropzone .dz-preview .dz-details .dz-filename:hover span{background-color:transparent;border:0}.vue-dropzone .dz-preview .dz-progress .dz-upload{background:#ccc}.vue-dropzone .dz-preview .dz-remove{position:absolute;z-index:30;color:white;margin-left:15px;padding:10px;top:inherit;bottom:15px;border:2px white solid;text-decoration:none;text-transform:uppercase;font-size:.8rem;font-weight:800;letter-spacing:1.1px;opacity:0}.vue-dropzone .dz-preview:hover .dz-remove{opacity:1}.vue-dropzone .dz-preview .dz-success-mark,.vue-dropzone .dz-preview .dz-error-mark{margin-left:auto;margin-top:auto;width:100%;top:35%;left:0}.vue-dropzone .dz-preview .dz-success-mark svg,.vue-dropzone .dz-preview .dz-error-mark svg{margin-left:auto;margin-right:auto}.vue-dropzone .dz-preview .dz-error-message{top:calc(15%);margin-left:auto;margin-right:auto;left:0;width:100%}.vue-dropzone .dz-preview .dz-error-message:after{bottom:-6px;top:initial;border-top:6px solid #a92222;border-bottom:0}", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(53)
/* template */
var __vue_template__ = __webpack_require__(54)
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
Component.options.__file = "resources/assets/js/components/CompanyList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1caf0e58", Component.options)
  } else {
    hotAPI.reload("data-v-1caf0e58", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      content: null,
      showoverlay: false
    };
  },
  props: ["c_id", "uni_name", "industries", "location", "bio", "avatar", "path"],
  methods: {
    detCompanyView: function detCompanyView() {
      if (this.content == null) {
        axios.get("/view/company/" + this.c_id).then(function (response) {
          this.content = response.data;
          // console.log(response);
        }.bind(this)).catch(function (error) {
          console.log(error);
        });
      }
      this.showoverlay = true;
    },
    hideOverLay: function hideOverLay() {
      this.showoverlay = false;
    },
    sellIdea: function sellIdea() {
      window.location.href = "/idea/sell/" + this.c_id;
    }
  }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "p-2" }, [
      _c("div", { staticClass: "card-header s-bg p-color" }, [
        _vm._v(_vm._s(_vm.uni_name))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body", style: _vm.path + _vm.avatar }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "my-auto" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.industries) +
                  " | " +
                  _vm._s(_vm.location) +
                  " | " +
                  _vm._s(_vm.bio) +
                  "\n                "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "float-right" }, [
              _c(
                "button",
                {
                  key: "sellId" + _vm.c_id,
                  staticClass: "btn btn-sm btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.sellIdea }
                },
                [_vm._v("Got Some Ideas?")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  key: "follow" + _vm.c_id,
                  staticClass: "btn btn-sm btn-primary",
                  attrs: { type: "button" }
                },
                [_vm._v("Follow")]
              ),
              _vm._v(" "),
              !_vm.showoverlay
                ? _c(
                    "button",
                    {
                      key: "moreBtn" + _vm.c_id,
                      staticClass: "btn btn-sm btn-primary",
                      attrs: { "data-id": _vm.c_id },
                      on: { click: _vm.detCompanyView }
                    },
                    [_vm._v("More")]
                  )
                : _c(
                    "button",
                    {
                      key: "closeBtm" + _vm.c_id,
                      staticClass: "btn btn-sm btn-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.hideOverLay }
                    },
                    [_vm._v("Close")]
                  )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c(
                "transition",
                {
                  attrs: {
                    "enter-active-class": "animated fadeIn",
                    "leave-active-class": "animated fadeOut faster"
                  }
                },
                [
                  _vm.showoverlay
                    ? _c(
                        "div",
                        { domProps: { innerHTML: _vm._s(_vm.content) } },
                        [
                          _vm._v(
                            " \n                      " +
                              _vm._s(_vm.content) +
                              "\n                  "
                          )
                        ]
                      )
                    : _vm._e()
                ]
              )
            ],
            1
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-1caf0e58", module.exports)
  }
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(56)
/* template */
var __vue_template__ = __webpack_require__(57)
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
Component.options.__file = "resources/assets/js/components/IdeaShared.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a8951b3", Component.options)
  } else {
    hotAPI.reload("data-v-2a8951b3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 56 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id", "c_id", "company", "title", "summary", "cid"],
  data: function data() {
    return {
      csrfToken: $('meta[name="csrf-token"]').attr('content')
    };
  },
  methods: {
    viewIdea: function viewIdea() {
      window.location.href = "idea/view/" + this.id;
    }
  }
});

/***/ }),
/* 57 */
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
                  _c(
                    "form",
                    {
                      staticClass: "d-inline",
                      attrs: { method: "post", action: "/idea/view" }
                    },
                    [
                      _c("input", {
                        attrs: { name: "_token", hidden: "" },
                        domProps: { value: _vm.csrfToken }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { name: "id", hidden: "" },
                        domProps: { value: _vm.id }
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          key: "vi" + _vm.id,
                          staticClass: "btn btn-sm btn-primary",
                          attrs: { type: "submit" },
                          on: { click: _vm.viewIdea }
                        },
                        [
                          _vm._v(
                            "\n                                    View\n                                "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticClass: "d-inline",
                      attrs: { method: "post", action: "/idea/edit" }
                    },
                    [
                      _c("input", {
                        attrs: { name: "_token", hidden: "" },
                        domProps: { value: _vm.csrfToken }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { name: "id", hidden: "" },
                        domProps: { value: _vm.id }
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          key: "ed" + _vm.c_id,
                          staticClass: "btn btn-sm btn-primary",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n                                    Edit\n                                "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      key: "del" + _vm.c_id,
                      staticClass: "btn btn-sm btn-danger",
                      on: {
                        click: function($event) {
                          _vm.$emit("remove")
                        }
                      }
                    },
                    [_vm._v("Remove")]
                  )
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
    require("vue-hot-reload-api")      .rerender("data-v-2a8951b3", module.exports)
  }
}

/***/ })
/******/ ]);
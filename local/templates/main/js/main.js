function createCookie(e, t, n) {
	var i = "";
	if (n) {
		var r = new Date;
		r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + r.toGMTString()
	} else i = "";
	document.cookie = e + "=" + t + i + "; path=/"
}

function readCookie(e) {
	for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
		for (var r = n[i];
			" " == r.charAt(0);) r = r.substring(1, r.length);
		if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
	}
	return null
}! function () {
	var e = document.querySelector(".preloader");
	if (e) {
		var t = document.querySelector(".wrapper");
		document.addEventListener("DOMContentLoaded", function () {
			null !== readCookie("preloader") ? e.parentNode.removeChild(e) : (createCookie("preloader", 1, 7), e.classList.add("preloader--visible"), t.classList.add("wrapper--animated"), setTimeout(function () {
				e.classList.add("preloader--done")
			}, 5e3), setTimeout(function () {
				t.classList.remove("wrapper--animated")
			}, 1e4))
		})
	}
}();
var _createClass = function () {
	function i(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}
	return function (e, t, n) {
		return t && i(e.prototype, t), n && i(e, n), e
	}
}();

function _possibleConstructorReturn(e, t) {
	if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
	if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
	e.prototype = Object.create(t && t.prototype, {
		constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		}
	}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}

function _classCallCheck(e, t) {
	if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var Emitter = function () {
		function e() {
			_classCallCheck(this, e)
		}
		return _createClass(e, [{
			key: "on",
			value: function (e, t) {
				return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this
			}
		}, {
			key: "emit",
			value: function (e) {
				this._callbacks = this._callbacks || {};
				var t = this._callbacks[e];
				if (t) {
					for (var n = arguments.length, i = Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
					for (var a = 0, o = o = t;;) {
						if (a >= o.length) break;
						o[a++].apply(this, i)
					}
				}
				return this
			}
		}, {
			key: "off",
			value: function (e, t) {
				if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
				var n = this._callbacks[e];
				if (!n) return this;
				if (1 === arguments.length) return delete this._callbacks[e], this;
				for (var i = 0; i < n.length; i++) {
					if (n[i] === t) {
						n.splice(i, 1);
						break
					}
				}
				return this
			}
		}]), e
	}(),
	Dropzone = function (e) {
		function _(e, t) {
			_classCallCheck(this, _);
			var n, i = _possibleConstructorReturn(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this)),
				r = void 0;
			if (i.element = e, i.version = _.version, i.defaultOptions.previewTemplate = i.defaultOptions.previewTemplate.replace(/\n*/g, ""), i.clickableElements = [], i.listeners = [], i.files = [], "string" == typeof i.element && (i.element = document.querySelector(i.element)), !i.element || null == i.element.nodeType) throw new Error("Invalid dropzone element.");
			if (i.element.dropzone) throw new Error("Dropzone already attached.");
			_.instances.push(i), i.element.dropzone = i;
			var a, o = null != (n = _.optionsForElement(i.element)) ? n : {};
			if (i.options = _.extend({}, i.defaultOptions, o, null != t ? t : {}), i.options.forceFallback || !_.isBrowserSupported()) return a = i.options.fallback.call(i), _possibleConstructorReturn(i, a);
			if (null == i.options.url && (i.options.url = i.element.getAttribute("action")), !i.options.url) throw new Error("No URL provided.");
			if (i.options.acceptedFiles && i.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
			if (i.options.uploadMultiple && i.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
			return i.options.acceptedMimeTypes && (i.options.acceptedFiles = i.options.acceptedMimeTypes, delete i.options.acceptedMimeTypes), null != i.options.renameFilename && (i.options.renameFile = function (e) {
				return i.options.renameFilename.call(i, e.name, e)
			}), i.options.method = i.options.method.toUpperCase(), (r = i.getExistingFallback()) && r.parentNode && r.parentNode.removeChild(r), !1 !== i.options.previewsContainer && (i.options.previewsContainer ? i.previewsContainer = _.getElement(i.options.previewsContainer, "previewsContainer") : i.previewsContainer = i.element), i.options.clickable && (!0 === i.options.clickable ? i.clickableElements = [i.element] : i.clickableElements = _.getElements(i.options.clickable, "clickable")), i.init(), i
		}
		return _inherits(_, Emitter), _createClass(_, null, [{
			key: "initClass",
			value: function () {
				this.prototype.Emitter = Emitter, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype.defaultOptions = {
					url: null,
					method: "post",
					withCredentials: !1,
					timeout: 3e4,
					parallelUploads: 2,
					uploadMultiple: !1,
					chunking: !1,
					forceChunking: !1,
					chunkSize: 2e6,
					parallelChunkUploads: !1,
					retryChunks: !1,
					retryChunksLimit: 3,
					maxFilesize: 256,
					paramName: "file",
					createImageThumbnails: !0,
					maxThumbnailFilesize: 10,
					thumbnailWidth: 120,
					thumbnailHeight: 120,
					thumbnailMethod: "crop",
					resizeWidth: null,
					resizeHeight: null,
					resizeMimeType: null,
					resizeQuality: .8,
					resizeMethod: "contain",
					filesizeBase: 1e3,
					maxFiles: null,
					headers: null,
					clickable: !0,
					ignoreHiddenFiles: !0,
					acceptedFiles: null,
					acceptedMimeTypes: null,
					autoProcessQueue: !0,
					autoQueue: !0,
					addRemoveLinks: !1,
					previewsContainer: null,
					hiddenInputContainer: "body",
					capture: null,
					renameFilename: null,
					renameFile: null,
					forceFallback: !1,
					dictDefaultMessage: "Drop files here to upload",
					dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
					dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
					dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
					dictInvalidFileType: "You can't upload files of this type.",
					dictResponseError: "Server responded with {{statusCode}} code.",
					dictCancelUpload: "Cancel upload",
					dictUploadCanceled: "Upload canceled.",
					dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
					dictRemoveFile: "Remove file",
					dictRemoveFileConfirmation: null,
					dictMaxFilesExceeded: "You can not upload any more files.",
					dictFileSizeUnits: {
						tb: "TB",
						gb: "GB",
						mb: "MB",
						kb: "KB",
						b: "b"
					},
					init: function () {},
					params: function (e, t, n) {
						if (n) return {
							dzuuid: n.file.upload.uuid,
							dzchunkindex: n.index,
							dztotalfilesize: n.file.size,
							dzchunksize: this.options.chunkSize,
							dztotalchunkcount: n.file.upload.totalChunkCount,
							dzchunkbyteoffset: n.index * this.options.chunkSize
						}
					},
					accept: function (e, t) {
						return t()
					},
					chunksUploaded: function (e, t) {
						t()
					},
					fallback: function () {
						var e = void 0;
						this.element.className = this.element.className + " dz-browser-not-supported";
						for (var t = 0, n = n = this.element.getElementsByTagName("div");;) {
							if (t >= n.length) break;
							var i = n[t++];
							if (/(^| )dz-message($| )/.test(i.className)) {
								(e = i).className = "dz-message";
								break
							}
						}
						e || (e = _.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e));
						var r = e.getElementsByTagName("span")[0];
						return r && (null != r.textContent ? r.textContent = this.options.dictFallbackMessage : null != r.innerText && (r.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
					},
					resize: function (e, t, n, i) {
						var r = {
								srcX: 0,
								srcY: 0,
								srcWidth: e.width,
								srcHeight: e.height
							},
							a = e.width / e.height;
						null == t && null == n ? (t = r.srcWidth, n = r.srcHeight) : null == t ? t = n * a : null == n && (n = t / a);
						var o = (t = Math.min(t, r.srcWidth)) / (n = Math.min(n, r.srcHeight));
						if (r.srcWidth > t || r.srcHeight > n)
							if ("crop" === i) o < a ? (r.srcHeight = e.height, r.srcWidth = r.srcHeight * o) : (r.srcWidth = e.width, r.srcHeight = r.srcWidth / o);
							else {
								if ("contain" !== i) throw new Error("Unknown resizeMethod '" + i + "'");
								o < a ? n = t / a : t = n * a
							} return r.srcX = (e.width - r.srcWidth) / 2, r.srcY = (e.height - r.srcHeight) / 2, r.trgWidth = t, r.trgHeight = n, r
					},
					transformFile: function (e, t) {
						return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e)
					},
					previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
					drop: function (e) {
						return this.element.classList.remove("dz-drag-hover")
					},
					dragstart: function (e) {},
					dragend: function (e) {
						return this.element.classList.remove("dz-drag-hover")
					},
					dragenter: function (e) {
						return this.element.classList.add("dz-drag-hover")
					},
					dragover: function (e) {
						return this.element.classList.add("dz-drag-hover")
					},
					dragleave: function (e) {
						return this.element.classList.remove("dz-drag-hover")
					},
					paste: function (e) {},
					reset: function () {
						return this.element.classList.remove("dz-started")
					},
					addedfile: function (t) {
						var n = this;
						if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
							t.previewElement = _.createElement(this.options.previewTemplate.trim()), t.previewTemplate = t.previewElement, this.previewsContainer.appendChild(t.previewElement);
							for (var e = 0, i = i = t.previewElement.querySelectorAll("[data-dz-name]");;) {
								if (e >= i.length) break;
								var r = i[e++];
								r.textContent = t.name
							}
							for (var a = 0, o = o = t.previewElement.querySelectorAll("[data-dz-size]"); !(a >= o.length);)(r = o[a++]).innerHTML = this.filesize(t.size);
							this.options.addRemoveLinks && (t._removeLink = _.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), t.previewElement.appendChild(t._removeLink));
							for (var l = function (e) {
									return e.preventDefault(), e.stopPropagation(), t.status === _.UPLOADING ? _.confirm(n.options.dictCancelUploadConfirmation, function () {
										return n.removeFile(t)
									}) : n.options.dictRemoveFileConfirmation ? _.confirm(n.options.dictRemoveFileConfirmation, function () {
										return n.removeFile(t)
									}) : n.removeFile(t)
								}, s = 0, c = c = t.previewElement.querySelectorAll("[data-dz-remove]");;) {
								if (s >= c.length) break;
								c[s++].addEventListener("click", l)
							}
						}
					},
					removedfile: function (e) {
						return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass()
					},
					thumbnail: function (e, t) {
						if (e.previewElement) {
							e.previewElement.classList.remove("dz-file-preview");
							for (var n = 0, i = i = e.previewElement.querySelectorAll("[data-dz-thumbnail]");;) {
								if (n >= i.length) break;
								var r = i[n++];
								r.alt = e.name, r.src = t
							}
							return setTimeout(function () {
								return e.previewElement.classList.add("dz-image-preview")
							}, 1)
						}
					},
					error: function (e, t) {
						if (e.previewElement) {
							e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error);
							for (var n = 0, i = i = e.previewElement.querySelectorAll("[data-dz-errormessage]");;) {
								if (n >= i.length) break;
								i[n++].textContent = t
							}
						}
					},
					errormultiple: function () {},
					processing: function (e) {
						if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.innerHTML = this.options.dictCancelUpload
					},
					processingmultiple: function () {},
					uploadprogress: function (e, t, n) {
						if (e.previewElement)
							for (var i = 0, r = r = e.previewElement.querySelectorAll("[data-dz-uploadprogress]");;) {
								if (i >= r.length) break;
								var a = r[i++];
								"PROGRESS" === a.nodeName ? a.value = t : a.style.width = t + "%"
							}
					},
					totaluploadprogress: function () {},
					sending: function () {},
					sendingmultiple: function () {},
					success: function (e) {
						if (e.previewElement) return e.previewElement.classList.add("dz-success")
					},
					successmultiple: function () {},
					canceled: function (e) {
						return this.emit("error", e, this.options.dictUploadCanceled)
					},
					canceledmultiple: function () {},
					complete: function (e) {
						if (e._removeLink && (e._removeLink.innerHTML = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete")
					},
					completemultiple: function () {},
					maxfilesexceeded: function () {},
					maxfilesreached: function () {},
					queuecomplete: function () {},
					addedfiles: function () {}
				}, this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1
			}
		}, {
			key: "extend",
			value: function (e) {
				for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
				for (var r = 0, a = a = n;;) {
					if (r >= a.length) break;
					var o = a[r++];
					for (var l in o) {
						var s = o[l];
						e[l] = s
					}
				}
				return e
			}
		}]), _createClass(_, [{
			key: "getAcceptedFiles",
			value: function () {
				return this.files.filter(function (e) {
					return e.accepted
				}).map(function (e) {
					return e
				})
			}
		}, {
			key: "getRejectedFiles",
			value: function () {
				return this.files.filter(function (e) {
					return !e.accepted
				}).map(function (e) {
					return e
				})
			}
		}, {
			key: "getFilesWithStatus",
			value: function (t) {
				return this.files.filter(function (e) {
					return e.status === t
				}).map(function (e) {
					return e
				})
			}
		}, {
			key: "getQueuedFiles",
			value: function () {
				return this.getFilesWithStatus(_.QUEUED)
			}
		}, {
			key: "getUploadingFiles",
			value: function () {
				return this.getFilesWithStatus(_.UPLOADING)
			}
		}, {
			key: "getAddedFiles",
			value: function () {
				return this.getFilesWithStatus(_.ADDED)
			}
		}, {
			key: "getActiveFiles",
			value: function () {
				return this.files.filter(function (e) {
					return e.status === _.UPLOADING || e.status === _.QUEUED
				}).map(function (e) {
					return e
				})
			}
		}, {
			key: "init",
			value: function () {
				var a = this;
				if ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(_.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length) {
					! function r() {
						return a.hiddenFileInput && a.hiddenFileInput.parentNode.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), a.hiddenFileInput.setAttribute("type", "file"), (null === a.options.maxFiles || 1 < a.options.maxFiles) && a.hiddenFileInput.setAttribute("multiple", "multiple"), a.hiddenFileInput.className = "dz-hidden-input", null !== a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), null !== a.options.capture && a.hiddenFileInput.setAttribute("capture", a.options.capture), a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", a.hiddenFileInput.style.width = "0", _.getElement(a.options.hiddenInputContainer, "hiddenInputContainer").appendChild(a.hiddenFileInput), a.hiddenFileInput.addEventListener("change", function () {
							var e = a.hiddenFileInput.files;
							if (e.length)
								for (var t = 0, n = n = e; !(t >= n.length);) {
									var i = n[t++];
									a.addFile(i)
								}
							return a.emit("addedfiles", e), r()
						})
					}()
				}
				this.URL = null !== window.URL ? window.URL : window.webkitURL;
				for (var e = 0, t = t = this.events;;) {
					if (e >= t.length) break;
					var n = t[e++];
					this.on(n, this.options[n])
				}
				this.on("uploadprogress", function () {
					return a.updateTotalUploadProgress()
				}), this.on("removedfile", function () {
					return a.updateTotalUploadProgress()
				}), this.on("canceled", function (e) {
					return a.emit("complete", e)
				}), this.on("complete", function (e) {
					if (0 === a.getAddedFiles().length && 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length) return setTimeout(function () {
						return a.emit("queuecomplete")
					}, 0)
				});
				var i = function (e) {
					return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1
				};
				return this.listeners = [{
					element: this.element,
					events: {
						dragstart: function (e) {
							return a.emit("dragstart", e)
						},
						dragenter: function (e) {
							return i(e), a.emit("dragenter", e)
						},
						dragover: function (e) {
							var t = void 0;
							try {
								t = e.dataTransfer.effectAllowed
							} catch (e) {}
							return e.dataTransfer.dropEffect = "move" === t || "linkMove" === t ? "move" : "copy", i(e), a.emit("dragover", e)
						},
						dragleave: function (e) {
							return a.emit("dragleave", e)
						},
						drop: function (e) {
							return i(e), a.drop(e)
						},
						dragend: function (e) {
							return a.emit("dragend", e)
						}
					}
				}], this.clickableElements.forEach(function (t) {
					return a.listeners.push({
						element: t,
						events: {
							click: function (e) {
								return (t !== a.element || e.target === a.element || _.elementInside(e.target, a.element.querySelector(".dz-message"))) && a.hiddenFileInput.click(), !0
							}
						}
					})
				}), this.enable(), this.options.init.call(this)
			}
		}, {
			key: "destroy",
			value: function () {
				return this.disable(), this.removeAllFiles(!0), (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, _.instances.splice(_.instances.indexOf(this), 1)
			}
		}, {
			key: "updateTotalUploadProgress",
			value: function () {
				var e = void 0,
					t = 0,
					n = 0;
				if (this.getActiveFiles().length) {
					for (var i = 0, r = r = this.getActiveFiles();;) {
						if (i >= r.length) break;
						var a = r[i++];
						t += a.upload.bytesSent, n += a.upload.total
					}
					e = 100 * t / n
				} else e = 100;
				return this.emit("totaluploadprogress", e, n, t)
			}
		}, {
			key: "_getParamName",
			value: function (e) {
				return "function" == typeof this.options.paramName ? this.options.paramName(e) : this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "")
			}
		}, {
			key: "_renameFile",
			value: function (e) {
				return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e)
			}
		}, {
			key: "getFallbackForm",
			value: function () {
				var e, t = void 0;
				if (e = this.getExistingFallback()) return e;
				var n = '<div class="dz-fallback">';
				this.options.dictFallbackText && (n += "<p>" + this.options.dictFallbackText + "</p>"), n += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>';
				var i = _.createElement(n);
				return "FORM" !== this.element.tagName ? (t = _.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>')).appendChild(i) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != t ? t : i
			}
		}, {
			key: "getExistingFallback",
			value: function () {
				for (var e = function (e) {
						for (var t = 0, n = n = e;;) {
							if (t >= n.length) break;
							var i = n[t++];
							if (/(^| )fallback($| )/.test(i.className)) return i
						}
					}, t = ["div", "form"], n = 0; n < t.length; n++) {
					var i, r = t[n];
					if (i = e(this.element.getElementsByTagName(r))) return i
				}
			}
		}, {
			key: "setupEventListeners",
			value: function () {
				return this.listeners.map(function (i) {
					return function () {
						var e = [];
						for (var t in i.events) {
							var n = i.events[t];
							e.push(i.element.addEventListener(t, n, !1))
						}
						return e
					}()
				})
			}
		}, {
			key: "removeEventListeners",
			value: function () {
				return this.listeners.map(function (i) {
					return function () {
						var e = [];
						for (var t in i.events) {
							var n = i.events[t];
							e.push(i.element.removeEventListener(t, n, !1))
						}
						return e
					}()
				})
			}
		}, {
			key: "disable",
			value: function () {
				var t = this;
				return this.clickableElements.forEach(function (e) {
					return e.classList.remove("dz-clickable")
				}), this.removeEventListeners(), this.disabled = !0, this.files.map(function (e) {
					return t.cancelUpload(e)
				})
			}
		}, {
			key: "enable",
			value: function () {
				return delete this.disabled, this.clickableElements.forEach(function (e) {
					return e.classList.add("dz-clickable")
				}), this.setupEventListeners()
			}
		}, {
			key: "filesize",
			value: function (e) {
				var t = 0,
					n = "b";
				if (0 < e) {
					for (var i = ["tb", "gb", "mb", "kb", "b"], r = 0; r < i.length; r++) {
						var a = i[r];
						if (Math.pow(this.options.filesizeBase, 4 - r) / 10 <= e) {
							t = e / Math.pow(this.options.filesizeBase, 4 - r), n = a;
							break
						}
					}
					t = Math.round(10 * t) / 10
				}
				return "<strong>" + t + "</strong> " + this.options.dictFileSizeUnits[n]
			}
		}, {
			key: "_updateMaxFilesReachedClass",
			value: function () {
				return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
			}
		}, {
			key: "drop",
			value: function (e) {
				if (e.dataTransfer) {
					this.emit("drop", e);
					for (var t = [], n = 0; n < e.dataTransfer.files.length; n++) t[n] = e.dataTransfer.files[n];
					if (this.emit("addedfiles", t), t.length) {
						var i = e.dataTransfer.items;
						i && i.length && null != i[0].webkitGetAsEntry ? this._addFilesFromItems(i) : this.handleFiles(t)
					}
				}
			}
		}, {
			key: "paste",
			value: function (e) {
				if (null != __guard__(null != e ? e.clipboardData : void 0, function (e) {
						return e.items
					})) {
					this.emit("paste", e);
					var t = e.clipboardData.items;
					return t.length ? this._addFilesFromItems(t) : void 0
				}
			}
		}, {
			key: "handleFiles",
			value: function (e) {
				for (var t = 0, n = n = e;;) {
					if (t >= n.length) break;
					var i = n[t++];
					this.addFile(i)
				}
			}
		}, {
			key: "_addFilesFromItems",
			value: function (a) {
				var o = this;
				return function () {
					for (var e = [], t = 0, n = n = a;;) {
						if (t >= n.length) break;
						var i, r = n[t++];
						null != r.webkitGetAsEntry && (i = r.webkitGetAsEntry()) ? i.isFile ? e.push(o.addFile(r.getAsFile())) : i.isDirectory ? e.push(o._addFilesFromDirectory(i, i.name)) : e.push(void 0) : null != r.getAsFile && (null == r.kind || "file" === r.kind) ? e.push(o.addFile(r.getAsFile())) : e.push(void 0)
					}
					return e
				}()
			}
		}, {
			key: "_addFilesFromDirectory",
			value: function (e, a) {
				var o = this,
					t = e.createReader(),
					n = function (t) {
						return __guardMethod__(console, "log", function (e) {
							return e.log(t)
						})
					};
				return function r() {
					return t.readEntries(function (e) {
						if (0 < e.length) {
							for (var t = 0, n = n = e; !(t >= n.length);) {
								var i = n[t++];
								i.isFile ? i.file(function (e) {
									if (!o.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return e.fullPath = a + "/" + e.name, o.addFile(e)
								}) : i.isDirectory && o._addFilesFromDirectory(i, a + "/" + i.name)
							}
							r()
						}
						return null
					}, n)
				}()
			}
		}, {
			key: "accept",
			value: function (e, t) {
				return this.options.maxFilesize && e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : _.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType)
			}
		}, {
			key: "addFile",
			value: function (t) {
				var n = this;
				return t.upload = {
					uuid: _.uuidv4(),
					progress: 0,
					total: t.size,
					bytesSent: 0,
					filename: this._renameFile(t),
					chunked: this.options.chunking && (this.options.forceChunking || t.size > this.options.chunkSize),
					totalChunkCount: Math.ceil(t.size / this.options.chunkSize)
				}, this.files.push(t), t.status = _.ADDED, this.emit("addedfile", t), this._enqueueThumbnail(t), this.accept(t, function (e) {
					return e ? (t.accepted = !1, n._errorProcessing([t], e)) : (t.accepted = !0, n.options.autoQueue && n.enqueueFile(t)), n._updateMaxFilesReachedClass()
				})
			}
		}, {
			key: "enqueueFiles",
			value: function (e) {
				for (var t = 0, n = n = e;;) {
					if (t >= n.length) break;
					var i = n[t++];
					this.enqueueFile(i)
				}
				return null
			}
		}, {
			key: "enqueueFile",
			value: function (e) {
				var t = this;
				if (e.status !== _.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
				if (e.status = _.QUEUED, this.options.autoProcessQueue) return setTimeout(function () {
					return t.processQueue()
				}, 0)
			}
		}, {
			key: "_enqueueThumbnail",
			value: function (e) {
				var t = this;
				if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout(function () {
					return t._processThumbnailQueue()
				}, 0)
			}
		}, {
			key: "_processThumbnailQueue",
			value: function () {
				var t = this;
				if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) {
					this._processingThumbnail = !0;
					var n = this._thumbnailQueue.shift();
					return this.createThumbnail(n, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function (e) {
						return t.emit("thumbnail", n, e), t._processingThumbnail = !1, t._processThumbnailQueue()
					})
				}
			}
		}, {
			key: "removeFile",
			value: function (e) {
				if (e.status === _.UPLOADING && this.cancelUpload(e), this.files = without(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset")
			}
		}, {
			key: "removeAllFiles",
			value: function (e) {
				null == e && (e = !1);
				for (var t = 0, n = n = this.files.slice();;) {
					if (t >= n.length) break;
					var i = n[t++];
					(i.status !== _.UPLOADING || e) && this.removeFile(i)
				}
				return null
			}
		}, {
			key: "resizeImage",
			value: function (r, e, t, n, a) {
				var o = this;
				return this.createThumbnail(r, e, t, n, !0, function (e, t) {
					if (null == t) return a(r);
					var n = o.options.resizeMimeType;
					null == n && (n = r.type);
					var i = t.toDataURL(n, o.options.resizeQuality);
					return "image/jpeg" !== n && "image/jpg" !== n || (i = ExifRestore.restore(r.dataURL, i)), a(_.dataURItoBlob(i))
				})
			}
		}, {
			key: "createThumbnail",
			value: function (e, t, n, i, r, a) {
				var o = this,
					l = new FileReader;
				return l.onload = function () {
					if (e.dataURL = l.result, "image/svg+xml" !== e.type) return o.createThumbnailFromUrl(e, t, n, i, r, a);
					null != a && a(l.result)
				}, l.readAsDataURL(e)
			}
		}, {
			key: "createThumbnailFromUrl",
			value: function (a, o, l, s, t, c, e) {
				var u = this,
					d = document.createElement("img");
				return e && (d.crossOrigin = e), d.onload = function () {
					var e = function (e) {
						return e(1)
					};
					return "undefined" != typeof EXIF && null !== EXIF && t && (e = function (e) {
						return EXIF.getData(d, function () {
							return e(EXIF.getTag(this, "Orientation"))
						})
					}), e(function (e) {
						a.width = d.width, a.height = d.height;
						var t = u.options.resize.call(u, a, o, l, s),
							n = document.createElement("canvas"),
							i = n.getContext("2d");
						switch (n.width = t.trgWidth, n.height = t.trgHeight, 4 < e && (n.width = t.trgHeight, n.height = t.trgWidth), e) {
							case 2:
								i.translate(n.width, 0), i.scale(-1, 1);
								break;
							case 3:
								i.translate(n.width, n.height), i.rotate(Math.PI);
								break;
							case 4:
								i.translate(0, n.height), i.scale(1, -1);
								break;
							case 5:
								i.rotate(.5 * Math.PI), i.scale(1, -1);
								break;
							case 6:
								i.rotate(.5 * Math.PI), i.translate(0, -n.width);
								break;
							case 7:
								i.rotate(.5 * Math.PI), i.translate(n.height, -n.width), i.scale(-1, 1);
								break;
							case 8:
								i.rotate(-.5 * Math.PI), i.translate(-n.height, 0)
						}
						drawImageIOSFix(i, d, null != t.srcX ? t.srcX : 0, null != t.srcY ? t.srcY : 0, t.srcWidth, t.srcHeight, null != t.trgX ? t.trgX : 0, null != t.trgY ? t.trgY : 0, t.trgWidth, t.trgHeight);
						var r = n.toDataURL("image/png");
						if (null != c) return c(r, n)
					})
				}, null != c && (d.onerror = c), d.src = a.dataURL
			}
		}, {
			key: "processQueue",
			value: function () {
				var e = this.options.parallelUploads,
					t = this.getUploadingFiles().length,
					n = t;
				if (!(e <= t)) {
					var i = this.getQueuedFiles();
					if (0 < i.length) {
						if (this.options.uploadMultiple) return this.processFiles(i.slice(0, e - t));
						for (; n < e;) {
							if (!i.length) return;
							this.processFile(i.shift()), n++
						}
					}
				}
			}
		}, {
			key: "processFile",
			value: function (e) {
				return this.processFiles([e])
			}
		}, {
			key: "processFiles",
			value: function (e) {
				for (var t = 0, n = n = e;;) {
					if (t >= n.length) break;
					var i = n[t++];
					i.processing = !0, i.status = _.UPLOADING, this.emit("processing", i)
				}
				return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
			}
		}, {
			key: "_getFilesWithXhr",
			value: function (t) {
				return this.files.filter(function (e) {
					return e.xhr === t
				}).map(function (e) {
					return e
				})
			}
		}, {
			key: "cancelUpload",
			value: function (e) {
				if (e.status === _.UPLOADING) {
					for (var t = this._getFilesWithXhr(e.xhr), n = 0, i = i = t;;) {
						if (n >= i.length) break;
						i[n++].status = _.CANCELED
					}
					void 0 !== e.xhr && e.xhr.abort();
					for (var r = 0, a = a = t;;) {
						if (r >= a.length) break;
						var o = a[r++];
						this.emit("canceled", o)
					}
					this.options.uploadMultiple && this.emit("canceledmultiple", t)
				} else e.status !== _.ADDED && e.status !== _.QUEUED || (e.status = _.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
				if (this.options.autoProcessQueue) return this.processQueue()
			}
		}, {
			key: "resolveOption",
			value: function (e) {
				if ("function" == typeof e) {
					for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
					return e.apply(this, n)
				}
				return e
			}
		}, {
			key: "uploadFile",
			value: function (e) {
				return this.uploadFiles([e])
			}
		}, {
			key: "uploadFiles",
			value: function (l) {
				var s = this;
				this._transformFiles(l, function (e) {
					if (l[0].upload.chunked) {
						var r = l[0],
							a = e[0];
						r.upload.chunks = [];
						var i = function () {
							for (var e = 0; void 0 !== r.upload.chunks[e];) e++;
							if (!(e >= r.upload.totalChunkCount)) {
								0;
								var t = e * s.options.chunkSize,
									n = Math.min(t + s.options.chunkSize, r.size),
									i = {
										name: s._getParamName(0),
										data: a.webkitSlice ? a.webkitSlice(t, n) : a.slice(t, n),
										filename: r.upload.filename,
										chunkIndex: e
									};
								r.upload.chunks[e] = {
									file: r,
									index: e,
									dataBlock: i,
									status: _.UPLOADING,
									progress: 0,
									retries: 0
								}, s._uploadData(l, [i])
							}
						};
						if (r.upload.finishedChunkUpload = function (e) {
								var t = !0;
								e.status = _.SUCCESS, e.dataBlock = null, e.xhr = null;
								for (var n = 0; n < r.upload.totalChunkCount; n++) {
									if (void 0 === r.upload.chunks[n]) return i();
									r.upload.chunks[n].status !== _.SUCCESS && (t = !1)
								}
								t && s.options.chunksUploaded(r, function () {
									s._finished(l, "", null)
								})
							}, s.options.parallelChunkUploads)
							for (var t = 0; t < r.upload.totalChunkCount; t++) i();
						else i()
					} else {
						for (var n = [], o = 0; o < l.length; o++) n[o] = {
							name: s._getParamName(o),
							data: e[o],
							filename: l[o].upload.filename
						};
						s._uploadData(l, n)
					}
				})
			}
		}, {
			key: "_getChunk",
			value: function (e, t) {
				for (var n = 0; n < e.upload.totalChunkCount; n++)
					if (void 0 !== e.upload.chunks[n] && e.upload.chunks[n].xhr === t) return e.upload.chunks[n]
			}
		}, {
			key: "_uploadData",
			value: function (t, e) {
				for (var n = this, i = new XMLHttpRequest, r = 0, a = a = t;;) {
					if (r >= a.length) break;
					a[r++].xhr = i
				}
				t[0].upload.chunked && (t[0].upload.chunks[e[0].chunkIndex].xhr = i);
				var o = this.resolveOption(this.options.method, t),
					l = this.resolveOption(this.options.url, t);
				i.open(o, l, !0), i.timeout = this.resolveOption(this.options.timeout, t), i.withCredentials = !!this.options.withCredentials, i.onload = function (e) {
					n._finishedUploading(t, i, e)
				}, i.onerror = function () {
					n._handleUploadError(t, i)
				}, (null != i.upload ? i.upload : i).onprogress = function (e) {
					return n._updateFilesUploadProgress(t, i, e)
				};
				var s = {
					Accept: "application/json",
					"Cache-Control": "no-cache",
					"X-Requested-With": "XMLHttpRequest"
				};
				for (var c in this.options.headers && _.extend(s, this.options.headers), s) {
					var u = s[c];
					u && i.setRequestHeader(c, u)
				}
				var d = new FormData;
				if (this.options.params) {
					var p = this.options.params;
					for (var h in "function" == typeof p && (p = p.call(this, t, i, t[0].upload.chunked ? this._getChunk(t[0], i) : null)), p) {
						var f = p[h];
						d.append(h, f)
					}
				}
				for (var m = 0, v = v = t;;) {
					if (m >= v.length) break;
					var g = v[m++];
					this.emit("sending", g, i, d)
				}
				this.options.uploadMultiple && this.emit("sendingmultiple", t, i, d), this._addFormElementData(d);
				for (var C = 0; C < e.length; C++) {
					var y = e[C];
					d.append(y.name, y.data, y.filename)
				}
				this.submitRequest(i, d, t)
			}
		}, {
			key: "_transformFiles",
			value: function (n, i) {
				for (var e = this, r = [], a = 0, t = function (t) {
						e.options.transformFile.call(e, n[t], function (e) {
							r[t] = e, ++a === n.length && i(r)
						})
					}, o = 0; o < n.length; o++) t(o)
			}
		}, {
			key: "_addFormElementData",
			value: function (e) {
				if ("FORM" === this.element.tagName)
					for (var t = 0, n = n = this.element.querySelectorAll("input, textarea, select, button");;) {
						if (t >= n.length) break;
						var i = n[t++],
							r = i.getAttribute("name"),
							a = i.getAttribute("type");
						if (a && (a = a.toLowerCase()), null != r)
							if ("SELECT" === i.tagName && i.hasAttribute("multiple"))
								for (var o = 0, l = l = i.options;;) {
									if (o >= l.length) break;
									var s = l[o++];
									s.selected && e.append(r, s.value)
								} else(!a || "checkbox" !== a && "radio" !== a || i.checked) && e.append(r, i.value)
					}
			}
		}, {
			key: "_updateFilesUploadProgress",
			value: function (e, t, n) {
				var i = void 0;
				if (void 0 !== n) {
					if (i = 100 * n.loaded / n.total, e[0].upload.chunked) {
						var r = e[0],
							a = this._getChunk(r, t);
						a.progress = i, a.total = n.total, a.bytesSent = n.loaded;
						r.upload.progress = 0, r.upload.total = 0;
						for (var o = r.upload.bytesSent = 0; o < r.upload.totalChunkCount; o++) void 0 !== r.upload.chunks[o] && void 0 !== r.upload.chunks[o].progress && (r.upload.progress += r.upload.chunks[o].progress, r.upload.total += r.upload.chunks[o].total, r.upload.bytesSent += r.upload.chunks[o].bytesSent);
						r.upload.progress = r.upload.progress / r.upload.totalChunkCount
					} else
						for (var l = 0, s = s = e;;) {
							if (l >= s.length) break;
							var c = s[l++];
							c.upload.progress = i, c.upload.total = n.total, c.upload.bytesSent = n.loaded
						}
					for (var u = 0, d = d = e;;) {
						if (u >= d.length) break;
						var p = d[u++];
						this.emit("uploadprogress", p, p.upload.progress, p.upload.bytesSent)
					}
				} else {
					var h = !0;
					i = 100;
					for (var f = 0, m = m = e;;) {
						if (f >= m.length) break;
						var v = m[f++];
						100 === v.upload.progress && v.upload.bytesSent === v.upload.total || (h = !1), v.upload.progress = i, v.upload.bytesSent = v.upload.total
					}
					if (h) return;
					for (var g = 0, C = C = e;;) {
						if (g >= C.length) break;
						var y = C[g++];
						this.emit("uploadprogress", y, i, y.upload.bytesSent)
					}
				}
			}
		}, {
			key: "_finishedUploading",
			value: function (e, t, n) {
				var i = void 0;
				if (e[0].status !== _.CANCELED && 4 === t.readyState) {
					if ("arraybuffer" !== t.responseType && "blob" !== t.responseType && (i = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))) try {
						i = JSON.parse(i)
					} catch (e) {
						n = e, i = "Invalid JSON response from server."
					}
					this._updateFilesUploadProgress(e), 200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t)) : this._finished(e, i, n) : this._handleUploadError(e, t, i)
				}
			}
		}, {
			key: "_handleUploadError",
			value: function (e, t, n) {
				if (e[0].status !== _.CANCELED) {
					if (e[0].upload.chunked && this.options.retryChunks) {
						var i = this._getChunk(e[0], t);
						if (i.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [i.dataBlock]);
						console.warn("Retried this chunk too often. Giving up.")
					}
					for (var r = 0, a = a = e;;) {
						if (r >= a.length) break;
						a[r++];
						this._errorProcessing(e, n || this.options.dictResponseError.replace("{{statusCode}}", t.status), t)
					}
				}
			}
		}, {
			key: "submitRequest",
			value: function (e, t, n) {
				e.send(t)
			}
		}, {
			key: "_finished",
			value: function (e, t, n) {
				for (var i = 0, r = r = e;;) {
					if (i >= r.length) break;
					var a = r[i++];
					a.status = _.SUCCESS, this.emit("success", a, t, n), this.emit("complete", a)
				}
				if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
			}
		}, {
			key: "_errorProcessing",
			value: function (e, t, n) {
				for (var i = 0, r = r = e;;) {
					if (i >= r.length) break;
					var a = r[i++];
					a.status = _.ERROR, this.emit("error", a, t, n), this.emit("complete", a)
				}
				if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
			}
		}], [{
			key: "uuidv4",
			value: function () {
				return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
					var t = 16 * Math.random() | 0;
					return ("x" === e ? t : 3 & t | 8).toString(16)
				})
			}
		}]), _
	}();
Dropzone.initClass(), Dropzone.version = "5.5.0", Dropzone.options = {}, Dropzone.optionsForElement = function (e) {
	return e.getAttribute("id") ? Dropzone.options[camelize(e.getAttribute("id"))] : void 0
}, Dropzone.instances = [], Dropzone.forElement = function (e) {
	if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
	return e.dropzone
}, Dropzone.autoDiscover = !0, Dropzone.discover = function () {
	var a = void 0;
	if (document.querySelectorAll) a = document.querySelectorAll(".dropzone");
	else {
		a = [];
		var e = function (r) {
			return function () {
				for (var e = [], t = 0, n = n = r;;) {
					if (t >= n.length) break;
					var i = n[t++];
					/(^| )dropzone($| )/.test(i.className) ? e.push(a.push(i)) : e.push(void 0)
				}
				return e
			}()
		};
		e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"))
	}
	return function () {
		for (var e = [], t = 0, n = n = a;;) {
			if (t >= n.length) break;
			var i = n[t++];
			!1 !== Dropzone.optionsForElement(i) ? e.push(new Dropzone(i)) : e.push(void 0)
		}
		return e
	}()
}, Dropzone.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], Dropzone.isBrowserSupported = function () {
	var e = !0;
	if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
		if ("classList" in document.createElement("a"))
			for (var t = 0, n = n = Dropzone.blacklistedBrowsers;;) {
				if (t >= n.length) break;
				n[t++].test(navigator.userAgent) && (e = !1)
			} else e = !1;
		else e = !1;
	return e
}, Dropzone.dataURItoBlob = function (e) {
	for (var t = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(t.length), r = new Uint8Array(i), a = 0, o = t.length, l = 0 <= o; l ? a <= o : o <= a; l ? a++ : a--) r[a] = t.charCodeAt(a);
	return new Blob([i], {
		type: n
	})
};
var without = function (e, t) {
		return e.filter(function (e) {
			return e !== t
		}).map(function (e) {
			return e
		})
	},
	camelize = function (e) {
		return e.replace(/[\-_](\w)/g, function (e) {
			return e.charAt(1).toUpperCase()
		})
	};
Dropzone.createElement = function (e) {
	var t = document.createElement("div");
	return t.innerHTML = e, t.childNodes[0]
}, Dropzone.elementInside = function (e, t) {
	if (e === t) return !0;
	for (; e = e.parentNode;)
		if (e === t) return !0;
	return !1
}, Dropzone.getElement = function (e, t) {
	var n = void 0;
	if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e), null == n) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
	return n
}, Dropzone.getElements = function (e, t) {
	var n = void 0,
		i = void 0;
	if (e instanceof Array) {
		i = [];
		try {
			for (var r = 0, a = a = e; !(r >= a.length);) n = a[r++], i.push(this.getElement(n, t))
		} catch (e) {
			i = null
		}
	} else if ("string" == typeof e) {
		i = [];
		for (var o = 0, l = l = document.querySelectorAll(e); !(o >= l.length);) n = l[o++], i.push(n)
	} else null != e.nodeType && (i = [e]);
	if (null == i || !i.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
	return i
}, Dropzone.confirm = function (e, t, n) {
	return window.confirm(e) ? t() : null != n ? n() : void 0
}, Dropzone.isValidFile = function (e, t) {
	if (!t) return !0;
	t = t.split(",");
	for (var n = e.type, i = n.replace(/\/.*$/, ""), r = 0, a = a = t;;) {
		if (r >= a.length) break;
		var o = a[r++];
		if ("." === (o = o.trim()).charAt(0)) {
			if (-1 !== e.name.toLowerCase().indexOf(o.toLowerCase(), e.name.length - o.length)) return !0
		} else if (/\/\*$/.test(o)) {
			if (i === o.replace(/\/.*$/, "")) return !0
		} else if (n === o) return !0
	}
	return !1
}, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (e) {
	return this.each(function () {
		return new Dropzone(this, e)
	})
}), "undefined" != typeof module && null !== module ? module.exports = Dropzone : window.Dropzone = Dropzone, Dropzone.ADDED = "added", Dropzone.QUEUED = "queued", Dropzone.ACCEPTED = Dropzone.QUEUED, Dropzone.UPLOADING = "uploading", Dropzone.PROCESSING = Dropzone.UPLOADING, Dropzone.CANCELED = "canceled", Dropzone.ERROR = "error", Dropzone.SUCCESS = "success";
var detectVerticalSquash = function (e) {
		e.naturalWidth;
		var t = e.naturalHeight,
			n = document.createElement("canvas");
		n.width = 1, n.height = t;
		var i = n.getContext("2d");
		i.drawImage(e, 0, 0);
		for (var r = i.getImageData(1, 0, 1, t).data, a = 0, o = t, l = t; a < l;) {
			0 === r[4 * (l - 1) + 3] ? o = l : a = l, l = o + a >> 1
		}
		var s = l / t;
		return 0 === s ? 1 : s
	},
	drawImageIOSFix = function (e, t, n, i, r, a, o, l, s, c) {
		var u = detectVerticalSquash(t);
		return e.drawImage(t, n, i, r, a, o, l, s, c / u)
	},
	ExifRestore = function () {
		function e() {
			_classCallCheck(this, e)
		}
		return _createClass(e, null, [{
			key: "initClass",
			value: function () {
				this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
			}
		}, {
			key: "encode64",
			value: function (e) {
				for (var t = "", n = void 0, i = void 0, r = "", a = void 0, o = void 0, l = void 0, s = "", c = 0; a = (n = e[c++]) >> 2, o = (3 & n) << 4 | (i = e[c++]) >> 4, l = (15 & i) << 2 | (r = e[c++]) >> 6, s = 63 & r, isNaN(i) ? l = s = 64 : isNaN(r) && (s = 64), t = t + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(l) + this.KEY_STR.charAt(s), n = i = r = "", a = o = l = s = "", c < e.length;);
				return t
			}
		}, {
			key: "restore",
			value: function (e, t) {
				if (!e.match("data:image/jpeg;base64,")) return t;
				var n = this.decode64(e.replace("data:image/jpeg;base64,", "")),
					i = this.slice2Segments(n),
					r = this.exifManipulation(t, i);
				return "data:image/jpeg;base64," + this.encode64(r)
			}
		}, {
			key: "exifManipulation",
			value: function (e, t) {
				var n = this.getExifArray(t),
					i = this.insertExif(e, n);
				return new Uint8Array(i)
			}
		}, {
			key: "getExifArray",
			value: function (e) {
				for (var t = void 0, n = 0; n < e.length;) {
					if (255 === (t = e[n])[0] & 225 === t[1]) return t;
					n++
				}
				return []
			}
		}, {
			key: "insertExif",
			value: function (e, t) {
				var n = e.replace("data:image/jpeg;base64,", ""),
					i = this.decode64(n),
					r = i.indexOf(255, 3),
					a = i.slice(0, r),
					o = i.slice(r),
					l = a;
				return l = (l = l.concat(t)).concat(o)
			}
		}, {
			key: "slice2Segments",
			value: function (e) {
				for (var t = 0, n = [];;) {
					if (255 === e[t] & 218 === e[t + 1]) break;
					if (255 === e[t] & 216 === e[t + 1]) t += 2;
					else {
						var i = t + (256 * e[t + 2] + e[t + 3]) + 2,
							r = e.slice(t, i);
						n.push(r), t = i
					}
					if (t > e.length) break
				}
				return n
			}
		}, {
			key: "decode64",
			value: function (e) {
				var t = void 0,
					n = void 0,
					i = "",
					r = void 0,
					a = void 0,
					o = "",
					l = 0,
					s = [];
				for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(l++)) << 2 | (r = this.KEY_STR.indexOf(e.charAt(l++))) >> 4, n = (15 & r) << 4 | (a = this.KEY_STR.indexOf(e.charAt(l++))) >> 2, i = (3 & a) << 6 | (o = this.KEY_STR.indexOf(e.charAt(l++))), s.push(t), 64 !== a && s.push(n), 64 !== o && s.push(i), t = n = i = "", r = a = o = "", l < e.length;);
				return s
			}
		}]), e
	}();
ExifRestore.initClass();
var contentLoaded = function (n, i) {
	var r = !1,
		e = !0,
		a = n.document,
		o = a.documentElement,
		t = a.addEventListener ? "addEventListener" : "attachEvent",
		l = a.addEventListener ? "removeEventListener" : "detachEvent",
		s = a.addEventListener ? "" : "on",
		c = function e(t) {
			if ("readystatechange" !== t.type || "complete" === a.readyState) return ("load" === t.type ? n : a)[l](s + t.type, e, !1), !r && (r = !0) ? i.call(n, t.type || t) : void 0
		};
	if ("complete" !== a.readyState) {
		if (a.createEventObject && o.doScroll) {
			try {
				e = !n.frameElement
			} catch (e) {}
			e && function t() {
				try {
					o.doScroll("left")
				} catch (e) {
					return void setTimeout(t, 50)
				}
				return c("poll")
			}()
		}
		return a[t](s + "DOMContentLoaded", c, !1), a[t](s + "readystatechange", c, !1), n[t](s + "load", c, !1)
	}
};

function __guard__(e, t) {
	return null != e ? t(e) : void 0
}

function __guardMethod__(e, t, n) {
	return null != e && "function" == typeof e[t] ? n(e, t) : void 0
}
Dropzone._autoDiscoverFunction = function () {
	if (Dropzone.autoDiscover) return Dropzone.discover()
}, contentLoaded(window, Dropzone._autoDiscoverFunction);
var black = "#231f20",
	white = "#fbfbfb",
	red = "#e4151b",
	green = "#008f4c",
	lgray = "#e1e1e1",
	lblue = "#6dcef5",
	$orange = "#f9a51a";

function archivePagination() {
	var e = document.querySelectorAll(".js-archive-page");
	0 !== e.length && e.forEach(function (e) {
		var t = e.href;
		e.addEventListener("click", function (e) {
			e.preventDefault(), axios.get(t, {}).then(function (e) {
				var t = document.createElement("div");
				t.innerHTML = e.data;
				var n = t.querySelector(".js-archive-results"),
					i = document.querySelector(".js-archive-results"),
					r = document.querySelector(".js-archive-wrapper"),
					a = t.querySelector(".js-archive-shown"),
					o = document.querySelector(".js-archive-shown"),
					l = document.querySelector(".js-archive-shown-wrapper");
				r.replaceChild(n, i), l.replaceChild(a, o), archivePagination()
			})
		})
	})
}

function checkInputLength(e, t) {
	var n = e.value,
		i = e.closest(".form__label");
	return n.length < t ? (i.classList.remove("form__label--gj"), i.classList.add("form__label--with-error"), !1) : (i.classList.remove("form__label--with-error"), i.classList.add("form__label--gj"), !0)
}

function searchShowMoreResults() {
	var s = document.querySelector(".js-search-show-more");
	s && s.addEventListener("click", function (e) {
		e.preventDefault();
		var t = parseInt(this.dataset.page),
			o = parseInt(this.dataset.count),
			n = this.dataset.pagination,
			i = this.dataset.queue,
			l = t + 1,
			r = new URLSearchParams;
		r.append("PAGEN_" + n, l), r.append("q", i), axios.get("/search", {
			params: r
		}).then(function (e) {
			var t = document.createElement("div");
			t.innerHTML = e.data;
			var n = t.querySelector(".js-search-results"),
				i = t.querySelector(".js-search-show-more"),
				r = document.querySelector(".js-search-wrapper"),
				a = document.querySelector(".search__button-holder");
			r.insertBefore(n, a), l === o ? s.classList.add("no-display") : a.replaceChild(i, s), searchShowMoreResults()
		})
	})
}
AOS.init(),
	function () {
		var n = document.querySelector(".header");
		if (n) {
			var i = n.offsetHeight,
				r = document.querySelector(".mobile-menu");
			window.addEventListener("scroll", function (e) {
				var t = window.pageYOffset;
				0 < t && !r.classList.contains("mobile-menu--visible") ? n.classList.add("header--in-progress") : n.classList.remove("header--in-progress"), this.oldScroll > this.scrollY && i < t ? n.classList.add("header--fixed") : (this.oldScroll < this.scrollY || 0 === t) && n.classList.remove("header--fixed"), this.oldScroll = this.scrollY
			}, !1)
		}
	}(),
	function () {
		if (0 !== document.querySelectorAll(".video-block__content").length) GLightbox({
			selector: "glightbox1"
		}), GLightbox({
			selector: "glightbox2"
		}), GLightbox({
			selector: "glightbox3"
		})
	}(),
	function () {
		var t = document.querySelector(".mobile-menu");
		if (t) {
			var n = document.querySelector("html"),
				i = document.body,
				r = document.querySelector(".wrapper"),
				a = document.querySelector(".header"),
				e = a.querySelector(".header__button--burger"),
				o = t.querySelector(".mobile-menu__close-button"),
				l = a.querySelector(".header__tablet-content"),
				s = l.querySelector(".header__navigation-list--tablet").clientHeight;
			e.addEventListener("click", function (e) {
				e.preventDefault(), window.matchMedia("(max-width: 767px)").matches && (t.classList.contains("mobile-menu--visible") ? (a.classList.remove("header--opened"), t.classList.remove("mobile-menu--visible"), n.classList.remove("lock"), r.classList.remove("wrapper--mobile-animate")) : (a.classList.add("header--opened"), t.classList.add("mobile-menu--visible"), n.classList.add("lock"), r.classList.add("wrapper--mobile-animate"))), window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches && (a.classList.toggle("header--trigerred"), a.classList.contains("header--trigerred") ? l.style.maxHeight = s + "px" : l.style.maxHeight = "0px")
			}), o.addEventListener("click", function (e) {
				e.preventDefault(), window.scrollTo(0, void 0), t.classList.remove("mobile-menu--visible"), i.classList.remove("lock")
			})
		}
	}(),
	function () {
		var t = document.querySelector(".site-map");
		if (t) {
			var n, e = document.querySelectorAll(".footer__map-link a"),
				i = t.querySelector(".site-map__close-button"),
				r = document.body;
			e.forEach(function (e) {
				e.addEventListener("click", function (e) {
					e.preventDefault(), n = window.pageYOffset, r.classList.add("lock"), t.classList.add("site-map--visible")
				})
			}), i.addEventListener("click", function (e) {
				e.preventDefault(), t.classList.remove("site-map--visible"), r.classList.remove("lock"), window.scrollTo(0, n)
			})
		}
	}(),
	function () {
		var t = document.querySelector(".search");
		if (t) {
			var n, e = document.querySelectorAll(".link-search"),
				i = t.querySelector(".search__close-button"),
				r = document.body,
				a = t.querySelector(".search__input");
			e.forEach(function (e) {
				e.addEventListener("click", function (e) {
					e.preventDefault(), n = window.pageYOffset, r.classList.add("lock"), t.classList.add("search--visible")
				})
			}), i.addEventListener("click", function (e) {
				e.preventDefault(), t.classList.remove("search--visible"), r.classList.remove("lock"), window.scrollTo(0, n)
			}), a.addEventListener("input", function () {
				0 !== this.value.length ? this.classList.add("search__input--focused") : this.classList.remove("search__input--focused")
			})
		}
	}(),
	function () {
		var e = document.querySelectorAll(".tabs");
		0 !== e.length && e.forEach(function (n) {
			var i = n.querySelectorAll(".tabs__tab"),
				o = n.querySelector(".tabs__scroller");
			i.forEach(function (t) {
				t.addEventListener("click", function (e) {
					n.classList.contains("its-links") || e.preventDefault(), i.forEach(function (e) {
						e.classList.remove("tabs__tab--active"), n.classList.contains("tabs--info") && (t.querySelector("input").checked = !1)
					}), t.classList.add("tabs__tab--active"), n.classList.contains("tabs--info") && (t.querySelector("input").checked = !0)
				})
			});
			var e = o.querySelector(".tabs__tab--active");
			if (e) {
				var t = o.clientWidth,
					r = e.clientWidth,
					a = e.offsetLeft,
					l = a < t / 2,
					s = t < a + r;
				o.scrollLeft = s && l ? 0 : a - t / 2 + r / 2
			}
			window.onload = function () {
				var e = o.querySelector(".tabs__tab--active");
				if (e) {
					var t = o.clientWidth,
						n = e.clientWidth,
						i = e.offsetLeft,
						r = i < t / 2,
						a = t < i + n;
					o.scrollLeft = a && r ? 0 : i - t / 2 + n / 2
				}
			}, n.addEventListener("click", function (e) {
				if (e.target.closest(".info--donate")) {
					var t = o.querySelector(".tabs__tab--active"),
						n = o.clientWidth,
						i = t.clientWidth,
						r = t.offsetLeft;
					o.scrollLeft = r - n / 2 + i / 2
				}
			})
		})
	}(), document.querySelectorAll(".form").forEach(function (e) {
		if (e) {
			var t = e.querySelectorAll("input"),
				n = e.querySelector("textarea"),
				i = e.querySelectorAll(".form__input--number"),
				r = e.querySelectorAll(".form__input--tel");
			t.forEach(function (e) {
				e.addEventListener("input", function () {
					e.value ? e.closest(".form__label").querySelector(".form__input-placeholder") && (e.closest(".form__label").querySelector(".form__input-placeholder").style.opacity = 0) : e.closest(".form__label").querySelector(".form__input-placeholder").style.opacity = 1
				})
			}), n && n.addEventListener("change", function () {
				n.value ? n.closest(".form__label").querySelector(".form__input-placeholder") && (n.closest(".form__label").querySelector(".form__input-placeholder").style.opacity = 0) : n.closest(".form__label").querySelector(".form__input-placeholder").style.opacity = 1
			}), 0 !== i.length && i.forEach(function (e) {
				e.onkeydown = function (e) {
					return 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 8 == e.which || 37 <= e.which && e.which <= 40 || 46 == e.which
				}
			}), 0 !== r.length && r.forEach(function (e) {
				function t(e) {
					var t = "+7 (___) ___ ____",
						n = 0,
						i = t.replace(/\D/g, ""),
						r = this.value.replace(/\D/g, "");
					i.length >= r.length && (r = i), this.value = t.replace(/./g, function (e) {
						return /[_\d]/.test(e) && n < r.length ? r.charAt(n++) : n >= r.length ? "" : e
					}), "blur" === e.type ? 2 === this.value.length && (this.value = "") : function (e, t) {
						if (t.focus(), t.setSelectionRange) t.setSelectionRange(e, e);
						else if (t.createTextRange) {
							var n = t.createTextRange();
							n.collapse(!0), n.moveEnd("character", e), n.moveStart("character", e), n.select()
						}
					}(this.value.length, this)
				}
				e.addEventListener("input", t, !1), e.addEventListener("focus", t, !1), e.addEventListener("blur", t, !1)
			})
		}
	}),
	function () {
		var t = document.querySelector(".footer__search-input");
		t && t.addEventListener("input", function (e) {
			t.classList.toggle("footer__search-input--not-empty", t.value)
		})
	}(),
	function () {
		var S = document.querySelector(".map-selects");
		S && ymaps.ready(function () {
			axios({
				method: "GET",
				url: "/api/projects-map.php"
			}).then(function (e) {
				for (var t, a = document.querySelector(".map-selects__button-holder"), o = [56.838011, 60.597465], n = [], i = [], r = [], l = [], s = Array.from(e.data.regions), c = Array.from(e.data.projects), u = 0; u < c.length; u++) {
					var d = c[u].coords.split(", "),
						p = [];
					d.forEach(function (e) {
						p.push(+e)
					}), n.push(p), i.push(c[u].name), r.push(c[u].hint)
				}
				s.forEach(function (e) {
					l.push(e.coords)
				});
				var h = document.querySelector("#map-projects"),
					f = S.querySelectorAll(".map-selects__select-container"),
					m = S.querySelector(".map-selects__select-container--projects"),
					v = S.querySelectorAll("#select-target option"),
					g = S.querySelector("#select-region"),
					C = S.querySelector("#select-target");
				f.forEach(function (t) {
					if (window.matchMedia("(max-width: 1024px)").matches)(r = t.querySelector(".map-selects__select")).addEventListener("change", function () {
						r.previousElementSibling.querySelector("span").textContent = r.value
					});
					else {
						var n = t.querySelector("label"),
							i = document.createElement("ul"),
							r = t.querySelector("select"),
							e = t.querySelectorAll("option");
						i.classList.add("map-selects__dropdown-list"), e.forEach(function (e) {
							var t = document.createElement("li"),
								n = document.createElement("a");
							n.textContent = e.value, n.setAttribute("href", ""), e.hasAttribute("data-project") && n.setAttribute("data-project", e.getAttribute("data-project")), e.hasAttribute("data-region") && n.setAttribute("data-region", e.getAttribute("data-region")), t.appendChild(n), i.appendChild(t)
						}), t.appendChild(i), n.addEventListener("click", function (e) {
							e.preventDefault(), t.classList.toggle("map-selects__select-container--trigerred")
						}), t.querySelectorAll("a").forEach(function (t) {
							t.addEventListener("click", function (e) {
								e.preventDefault(), n.querySelector("span").textContent = e.target.textContent, f.forEach(function (e) {
									e.classList.remove("map-selects__select-container--trigerred")
								}), r.selectedIndex = t.getAttribute("data-value")
							})
						}), document.addEventListener("click", function (e) {
							e.target.closest(".map-selects__select-container") || f.forEach(function (e) {
								e.classList.remove("map-selects__select-container--trigerred")
							})
						})
					}
				});
				for (var y = new ymaps.Map(h, {
						center: o,
						zoom: 4,
						controls: []
					}), _ = new ymaps.control.ZoomControl({
						options: {
							size: "small",
							position: {
								left: 30,
								bottom: 30
							},
							zoomDuration: 400
						}
					}), b = new ymaps.Clusterer({
						preset: "islands#darkGreenClusterIcons",
						iconColor: "#008f4c"
					}), k = 0; k < n.length; k++)(t = new ymaps.Placemark(n[k], {
					hintContent: i[k],
					balloonContent: r[k],
					clusterCaption: i[k]
				}, {
					iconLayout: "default#image",
					iconImageHref: "/img/ic-geo-filled.svg",
					iconImageSize: [32, 43],
					iconImageOffset: [-16, -21]
				})).events.add("click", function (e) {
					var t = e.get("target");
					y.setCenter(t.geometry._coordinates), y.setZoom(15)
				}), b.add(t);
				y.setBounds(b.getBounds(), {
					checkZoomRange: !0
				}), y.geoObjects.add(b), y.controls.add(_);
				var E = function () {
						C.addEventListener("change", function (e) {
							var t = 0;
							t = -1 !== this.selectedIndex ? this.selectedIndex : t;
							var r = this.options[t].getAttribute("data-project");
							c.forEach(function (e, t) {
								if (e.id == r) {
									var n = c[t].coords.split(", "),
										i = [];
									n.forEach(function (e) {
										i.push(+e)
									}), y.setZoom(15), y.setCenter(i), a.classList.remove("map-selects__button-holder--hidden")
								}
							})
						})
					},
					w = function (t) {
						var n = [];
						if (C.innerHTML = "", v.forEach(function (e) {
								e.getAttribute("data-region") === t && n.push(e)
							}), n.forEach(function (e) {
								C.appendChild(e)
							}), C.value = "", 1 < n.length) m.querySelector(".map-selects__label span").textContent = "Выберите проект";
						else {
							var e = new Event("change");
							C.dispatchEvent(e), m.querySelector(".map-selects__label span").textContent = C.querySelector("option").textContent
						}
						if (window.matchMedia("(min-width: 1025px)").matches) {
							var i = m.querySelector("ul");
							m.removeChild(i);
							var r = m.querySelector("label"),
								a = document.createElement("ul"),
								o = n;
							a.classList.add("map-selects__dropdown-list"), o.forEach(function (e) {
								var t = document.createElement("li"),
									n = document.createElement("a");
								n.textContent = e.value, n.setAttribute("href", ""), e.hasAttribute("data-project") && n.setAttribute("data-project", e.getAttribute("data-project")), e.hasAttribute("data-region") && n.setAttribute("data-region", e.getAttribute("data-region")), t.appendChild(n), a.appendChild(t)
							}), m.appendChild(a), a.querySelectorAll("a").forEach(function (e) {
								e.addEventListener("click", function (e) {
									e.preventDefault(), r.querySelector("span").textContent = e.target.textContent, f.forEach(function (e) {
										e.classList.remove("map-selects__select-container--trigerred")
									})
								})
							})
						}
						E()
					};
				a.addEventListener("click", function (e) {
					e.preventDefault(), y.setCenter(o), y.setZoom(4), a.classList.add("map-selects__button-holder--hidden"), S.querySelector(".map-selects__select-container--regions .map-selects__label span").textContent = "Выберите регион", m.querySelector(".map-selects__label span").textContent = "Выберите проект", window.matchMedia("(min-width: 1025px)").matches ? function () {
						var e = m.querySelector("ul");
						m.removeChild(e);
						var n = m.querySelector("label"),
							i = document.createElement("ul"),
							r = m.querySelector("select");
						v.forEach(function (e) {
							r.appendChild(e)
						});
						var t = r.querySelectorAll("option");
						i.classList.add("map-selects__dropdown-list"), t.forEach(function (e) {
							var t = document.createElement("li"),
								n = document.createElement("a");
							n.textContent = e.value, n.setAttribute("href", ""), e.hasAttribute("data-project") && n.setAttribute("data-project", e.getAttribute("data-project")), e.hasAttribute("data-region") && n.setAttribute("data-region", e.getAttribute("data-region")), t.appendChild(n), i.appendChild(t)
						}), m.appendChild(i), m.querySelectorAll("a").forEach(function (t) {
							t.addEventListener("click", function (e) {
								e.preventDefault(), n.querySelector("span").textContent = e.target.textContent, f.forEach(function (e) {
									e.classList.remove("map-selects__select-container--trigerred")
								}), r.selectedIndex = t.getAttribute("data-value")
							})
						}), document.addEventListener("click", function (e) {
							e.target.closest(".map-selects__select-container") || f.forEach(function (e) {
								e.classList.remove("map-selects__select-container--trigerred")
							})
						})
					}() : (C.innerHTML = "", v.forEach(function (e) {
						C.appendChild(e)
					}), g.options[0].selected = !0, C.options[0].selected = !0)
				}), window.matchMedia("(min-width: 1025px)").matches ? g.nextElementSibling.querySelectorAll("a").forEach(function (t) {
					t.addEventListener("click", function (e) {
						e.preventDefault();
						var r = t.getAttribute("data-region");
						s.forEach(function (e, t) {
							if (e.id == r) {
								var n = s[t].coords.split(", "),
									i = [];
								n.forEach(function (e) {
									i.push(+e)
								}), y.setZoom(7), y.setCenter(i), a.classList.remove("map-selects__button-holder--hidden"), w(r)
							}
						})
					})
				}) : g.addEventListener("change", function (e) {
					var r = this.options[this.selectedIndex].getAttribute("data-region");
					s.forEach(function (e, t) {
						if ("all" == r && (y.setCenter(o), y.setZoom(4), C.innerHTML = "", v.forEach(function (e) {
								C.appendChild(e)
							}), C.options[0].selected = !0, m.querySelector(".map-selects__label span").textContent = "Выберите проект"), e.id == r) {
							var n = s[t].coords.split(", "),
								i = [];
							n.forEach(function (e) {
								i.push(+e)
							}), y.setZoom(7), y.setCenter(i), a.classList.remove("map-selects__button-holder--hidden"), w(r)
						}
					})
				}), window.matchMedia("(min-width: 1025px)").matches ? (C.nextElementSibling.querySelectorAll("a"), document.addEventListener("click", function (e) {
					var t = e.target;
					if (t.closest(".map-selects__select-container--projects a")) {
						e.preventDefault();
						var r = t.getAttribute("data-project");
						c.forEach(function (e, t) {
							if (e.id == r) {
								var n = c[t].coords.split(", "),
									i = [];
								n.forEach(function (e) {
									i.push(+e)
								}), y.setZoom(15), y.setCenter(i), a.classList.remove("map-selects__button-holder--hidden")
							}
						})
					}
				})) : E()
			}).catch(function (e) {
				console.log(e)
			})
		})
	}(),
	function () {
		var e = document.querySelector(".info__tabs");
		if (e) {
			var t = e.querySelectorAll(".tabs__tab"),
				i = document.querySelectorAll(".info__two-columns");
			t.forEach(function (n) {
				n.addEventListener("click", function (e) {
					e.preventDefault();
					var t = n.getAttribute("data-tab");
					i.forEach(function (e) {
						e.style.display = "none", e.getAttribute("data-show") == t && (e.style.display = "block")
					})
				})
			})
		}
	}(),
	function () {
		var e = document.querySelector(".info__dropdown-block");
		e && e.querySelectorAll(".info__dropdown").forEach(function (n) {
			var e = n.querySelector(".info__dropdown-head"),
				i = n.querySelector(".info__dropdown-body");
			e.addEventListener("click", function (e) {
				var t = n.querySelector(".info__dropdown-content").clientHeight;
				e.preventDefault(), n.classList.toggle("info__dropdown--opened"), n.classList.contains("info__dropdown--opened") ? i.style.maxHeight = t + "px" : i.style.maxHeight = "0px"
			})
		})
	}(),
	function () {
		var e = document.querySelectorAll(".info__file-container--upload");
		0 !== e.length && e.forEach(function (e) {})
	}(),
	function () {
		var e = document.querySelectorAll(".js-achieve-select"),
			i = document.querySelectorAll(".js-achievements");
		0 !== e.length && e.forEach(function (e) {
			var t = e.dataset.id,
				n = document.querySelector('.js-achievements[data-id="' + t + '"]');
			e.addEventListener("click", function (e) {
				i.forEach(function (e) {
					e.classList.add("no-display"), n.classList.remove("no-display")
				})
			})
		})
	}(),
	function () {
		var e = document.getElementById("js-search-form");
		e && e.addEventListener("submit", function (e) {
			e.preventDefault();
			var t = document.getElementById("search").value;
			axios.get("/search/", {
				params: {
					q: t
				}
			}).then(function (e) {
				var t = document.createElement("div");
				t.innerHTML = e.data;
				var n = document.querySelector(".js-search-result");
				n.replaceChild(t, n.firstChild), searchShowMoreResults()
			})
		})
	}(),
	function () {
		var e = document.querySelector(".js-content-slider"),
			t = document.querySelector(".js-content-slider-wrapper");
		e && t && t.appendChild(e)
	}(),
	function () {
		var i = document.getElementById("form-phone"),
			r = document.getElementById("form-name"),
			a = document.getElementById("form-textarea"),
			o = document.getElementById("form-email");
		if (i && r && a && o) {
			i.addEventListener("keyup", function () {
				checkInputLength(this, 17)
			}), r.addEventListener("keyup", function () {
				checkInputLength(this, 2)
			}), a.addEventListener("keyup", function () {
				checkInputLength(this, 2)
			});
			var l = document.getElementById("js-ask-form");
			if (l) {
				var s = l.querySelectorAll("label");
				l.addEventListener("submit", function (e) {
					e.preventDefault();
					var t = document.querySelector(".success-message");
					if (1 < r.value.length && 1 < o.value.length && 1 < a.value.length) {
						var n = new FormData;
						n.append("name", r.value), n.append("phone", i.value), n.append("email", o.value), n.append("question", a.value), grecaptcha.ready(function () {
							grecaptcha.execute("6LcMap0UAAAAAEf7X2qhfjm005T4M2Tet1bc40DD", {
								action: "ask_form"
							}).then(function (e) {
								n.append("token", e), console.log("token received"), axios({
									method: "POST",
									url: "/ajax/ask-form.php",
									data: n
								}).then(function (e) {
									"ok" === e.data && (t.classList.add("success-message--visible"), l.reset(), s.forEach(function (e) {
										e.classList.remove("form__label--with-error"), e.classList.remove("form__label--gj")
									}))
								}).catch(function (e) {})
							})
						})
					} else checkInputLength(i, 17), checkInputLength(r, 2), checkInputLength(a, 2)
				})
			}
		}
	}(),
	function () {
		var e = document.querySelectorAll(".js-achieve-select"),
			i = document.querySelectorAll(".js-achievements");
		0 !== e.length && e.forEach(function (e) {
			var t = e.dataset.id,
				n = document.querySelector('.js-achievements[data-id="' + t + '"]');
			e.addEventListener("click", function (e) {
				i.forEach(function (e) {
					e.classList.add("no-display"), n.classList.remove("no-display")
				})
			})
		})
	}(),
	function () {
		var e = document.querySelectorAll(".js-year-select"),
			i = document.querySelectorAll(".js-docs");
		0 !== e.length && e.forEach(function (e) {
			var t = e.dataset.year,
				n = document.querySelector('.js-docs[data-year="' + t + '"]');
			e.addEventListener("click", function (e) {
				i.forEach(function (e) {
					e.classList.add("no-display"), n.classList.remove("no-display")
				})
			})
		})
	}(),
	function () {
		var e = document.querySelectorAll(".js-archive-year");
		archivePagination(), 0 !== e.length && e.forEach(function (e) {
			var t = e.dataset.year,
				n = window.location.href;
			e.addEventListener("click", function (e) {
				e.preventDefault(), axios.get(n, {
					params: {
						year: t
					}
				}).then(function (e) {
					var t = document.createElement("div");
					t.innerHTML = e.data;
					var n = t.querySelector(".js-archive-results"),
						i = document.querySelector(".js-archive-results"),
						r = document.querySelector(".js-archive-wrapper"),
						a = t.querySelector(".js-archive-shown"),
						o = document.querySelector(".js-archive-shown"),
						l = document.querySelector(".js-archive-shown-wrapper");
					r.replaceChild(n, i), l.replaceChild(a, o), archivePagination()
				})
			})
		})
	}(),
	function o() {
		var l = document.querySelector(".js-show-more");
		if (l) {
			var s = l.dataset.url;
			l.addEventListener("click", function (e) {
				e.preventDefault();
				var t = parseInt(this.dataset.page),
					r = parseInt(this.dataset.count),
					n = this.dataset.pagination,
					a = t + 1,
					i = new URLSearchParams;
				i.append("PAGEN_" + n, a), axios.get(s, {
					params: i
				}).then(function (e) {
					var t = document.createElement("div");
					t.innerHTML = e.data;
					var n = t.querySelector(".other-projects__list"),
						i = t.querySelector(".js-show-more");
					(document.querySelector(".other-projects__scroller").appendChild(n), a === r) ? l.classList.add("no-display"): (document.querySelector(".other-projects__button-holder").replaceChild(i, l), o())
				})
			})
		}
	}(),
	function () {
		var e = document.querySelectorAll(".success-message");
		0 !== e.length && e.forEach(function (t) {
			t.querySelector(".success-message__close-button").addEventListener("click", function (e) {
				e.preventDefault(), t.classList.remove("success-message--visible")
			})
		})
	}(),
	function () {
		var e = document.querySelector("#send-application");
		if (e) {
			var t = document.querySelector(".application"),
				n = t.querySelector(".application__close-button");
			e.addEventListener("click", function (e) {
				e.preventDefault(), t.classList.add("application--visible"), document.body.classList.add("lock")
			}), n.addEventListener("click", function (e) {
				e.preventDefault(), document.body.classList.remove("lock"), t.classList.remove("application--visible")
			})
		}
	}(),
	function () {
		var a = document.querySelectorAll(".form__app-input--select");
		0 !== a.length && (window.matchMedia("(max-width: 1024px)").matches ? a.forEach(function (e) {
			var t = e.querySelector("select"),
				n = e.querySelector("label");
			t.addEventListener("change", function () {
				n.textContent = t.value
			})
		}) : (a.forEach(function (t) {
			var n = t.querySelector("label"),
				r = document.createElement("ul"),
				i = (document.querySelectorAll("select"), t.querySelector("select")),
				e = t.querySelectorAll("option");
			r.classList.add("form__dropdown-list"), e.forEach(function (e, t) {
				var n = document.createElement("li"),
					i = document.createElement("a");
				i.textContent = e.value, i.setAttribute("href", ""), i.setAttribute("data-value", t), n.appendChild(i), r.appendChild(n)
			}), t.appendChild(r), n.addEventListener("click", function (e) {
				e.preventDefault(), t.classList.toggle("form__app-input--trigerred")
			}), t.querySelectorAll("a").forEach(function (t) {
				t.addEventListener("click", function (e) {
					e.preventDefault(), n.textContent = e.target.textContent, a.forEach(function (e) {
						e.classList.remove("form__app-input--trigerred")
					}), i.selectedIndex = t.getAttribute("data-value")
				})
			})
		}), document.addEventListener("click", function (e) {
			e.target.closest(".form__app-input--trigerred") || a.forEach(function (e) {
				e.classList.remove("form__app-input--trigerred")
			})
		})))
	}(),
	function () {
		function h(e) {
			var t = e.value,
				n = e.closest(".form__label");
			return -1 === t.indexOf("@") ? (n.classList.remove("form__label--gj"), n.classList.add("form__label--with-error"), !1) : (n.classList.remove("form__label--with-error"), n.classList.add("form__label--gj"), !0)
		}
		document.querySelector(".application") && function () {
			var r = document.querySelector(".application"),
				a = document.querySelectorAll(".js-step-form"),
				e = document.querySelectorAll(".js-prev-step"),
				s = document.getElementById("js-application"),
				o = document.getElementById("final-step"),
				l = s.querySelectorAll("input"),
				c = s.querySelectorAll("textarea"),
				u = s.querySelectorAll("select"),
				d = s.querySelectorAll("label"),
				t = document.querySelector("#template");
			t.id = "";
			var n = t.parentNode.innerHTML;
			t.parentNode.removeChild(t);
			var p = new Dropzone(".container", {
				url: "/ajax/need-help-form.php",
				thumbnailWidth: 40,
				thumbnailHeight: 40,
				parallelUploads: 20,
				previewTemplate: n,
				maxFilesize: 3,
				autoProcessQueue: !0,
				previewsContainer: "#previews",
				clickable: ".fileinput-button"
			});
			p.on("addedfile", function (e) {}), l.forEach(function (e) {
				e.addEventListener("keyup", function () {
					switch (this.type) {
						case "text":
							checkInputLength(e, 2);
							break;
						case "tel":
							checkInputLength(e, 17);
							break;
						case "email":
							h(e)
					}
				})
			}), o.addEventListener("submit", function (e) {
				e.preventDefault();
				var t = new FormData,
					n = document.querySelector(".success-message");
				l.forEach(function (e) {
					t.append(e.id, e.value)
				}), c.forEach(function (e) {
					t.append(e.id, e.value)
				}), u.forEach(function (e) {
					t.append(e.id, e.value)
				}), p.processQueue();
				for (var i = 0; i < p.files.length; i++) t.append("file" + i, p.files[i]);
				axios({
					method: "POST",
					url: "/ajax/need-help-form.php",
					data: t,
					headers: {
						"Content-Type": "multipart/form-data"
					}
				}).then(function (e) {
					"ok" === e.data && (r.classList.remove("application--visible"), s.classList.remove("application__content--step-three"), s.classList.add("application__content--step-one"), n.classList.add("success-message--visible"), o.reset(), a.forEach(function (e) {
						e.reset()
					}), d.forEach(function (e) {
						e.classList.remove("form__label--with-error"), e.classList.remove("form__label--gj")
					}))
				}).catch(function (e) {})
			}), a.forEach(function (l) {
				l.addEventListener("submit", function (e) {
					e.preventDefault();
					var t = l.querySelector(".js-next-step"),
						n = l.querySelectorAll("input"),
						i = t.dataset.next,
						r = "",
						a = "",
						o = [];
					switch (n.forEach(function (e) {
						var t = !1;
						switch (e.type) {
							case "text":
								t = checkInputLength(e, 2);
								break;
							case "tel":
								t = checkInputLength(e, 17);
								break;
							case "email":
								t = h(e)
						}
						o.push(t)
					}), i) {
						case "2":
							r = "application__content--step-two", a = "application__content--step-one";
							break;
						case "3":
							r = "application__content--step-three", a = "application__content--step-two"
					}
					o.indexOf(!1) < 0 && (s.classList.remove(a), s.classList.add(r))
				})
			}), e.forEach(function (e) {
				e.addEventListener("click", function (e) {
					e.preventDefault();
					var t = "",
						n = "";
					switch (this.dataset.prev) {
						case "1":
							t = "application__content--step-one", n = "application__content--step-two";
							break;
						case "2":
							t = "application__content--step-two", n = "application__content--step-three"
					}
					s.classList.remove(n), s.classList.add(t)
				})
			})
		}()
	}(),
	function () {
		var e = document.querySelector(".footer__search-form");
		if (t) {
			var t = document.querySelector(".footer__search-icon");
			e.addEventListener("submit", function (e) {
				e.preventDefault(), n()
			}), t.addEventListener("click", function (e) {
				e.preventDefault(), n()
			})
		}

		function n() {
			var e = document.getElementById("footer-search").value;
			document.querySelector(".search").classList.add("search--visible");
			var t = document.getElementById("js-search-form"),
				n = t.querySelector("#search"),
				i = t.querySelector(".search__link-icon");
			n.value = e, i.click()
		}
	}(),
	function () {
		var e = document.querySelector(".main-slider");
		if (e) {
			var t = e.querySelector(".main-slider__content");
			new Swiper(t, {
				loop: !0,
				slidesPerView: 1,
				speed: 500,
				spaceBetween: 1200,
				pagination: {
					el: ".swiper-pagination",
					type: "fraction"
				},
				navigation: {
					nextEl: ".main-slider__navigation-arrow--next",
					prevEl: ".main-slider__navigation-arrow--prev"
				},
				effect: "fade",
				fadeEffect: {
					crossFade: !0
				},
				touchRatio: 0,
				breakpoints: {
					1024: {
						touchRatio: 1
					}
				}
			})
		}
	}(),
	function () {
		var e = document.querySelector(".projects");
		if (e && !window.matchMedia("(min-width: 768px)").matches) {
			var t = e.querySelector(".projects__content");
			new Swiper(t, {
				speed: 400,
				loop: !0,
				autoHeight: !0,
				autoplay: {
					delay: 15e3
				},
				freeMode: !1,
				slidesPerView: 1,
				pagination: {
					el: ".projects__pagination",
					type: "bullets"
				}
			})
		}
	}(),
	function () {
		var e = document.querySelector(".slider--programms");
		if (e && !window.matchMedia("(min-width: 768px)").matches) {
			var t = e.querySelector(".slider__wrapper"),
				n = e.querySelector(".programms__list"),
				i = e.querySelectorAll(".programms__item");
			t.classList.add("swiper-container"), n.classList.add("swiper-wrapper"), i.forEach(function (e) {
				e.classList.add("swiper-slide")
			});
			new Swiper(t, {
				loop: !0,
				autoplay: {
					delay: 15e3
				},
				slidesPerView: 1,
				speed: 500,
				pagination: {
					el: ".slider__pagination",
					type: "bullets"
				},
				navigation: {
					nextEl: ".slider__navigation-arrow--next",
					prevEl: ".slider__navigation-arrow--prev"
				},
				effect: "fade",
				fadeEffect: {
					crossFade: !0
				}
			})
		}
	}(),
	function () {
		var e = document.querySelector(".slider--project-header");
		if (e) {
			var t = e.querySelectorAll(".project-header__item"),
				n = e.querySelectorAll(".project-header__navigation-arrow");
			if (t.length <= 1) n.forEach(function (e) {
				e.style.display = "none"
			});
			else new Swiper(e, {
				loop: !0,
				autoplay: {
					delay: 15e3
				},
				slidesPerView: 1,
				speed: 500,
				pagination: {
					el: ".slider__pagination",
					type: "bullets"
				},
				navigation: {
					nextEl: ".slider--project-header .nav-arrow--next",
					prevEl: ".slider--project-header .nav-arrow--prev"
				}
			})
		}
	}(),
	function () {
		var e = document.querySelectorAll(".project__slider-container");
		0 !== e.length && e.forEach(function (e) {
			var t = e.querySelectorAll(".project__slider-slide"),
				n = e.querySelectorAll(".project__slider-navigation");
			t.length <= 1 ? n.forEach(function (e) {
				e.style.display = "none"
			}) : new Swiper(e, {
				loop: !0,
				autoplay: {
					delay: 15e3
				},
				slidesPerView: 1,
				speed: 500,
				pagination: {
					el: ".project__slider-pagination",
					type: "bullets"
				},
				navigation: {
					nextEl: ".nav-arrow--next",
					prevEl: ".nav-arrow--prev"
				},
				spaceBetween: 30,
				effect: "fade",
				crossFade: !0
			})
		})
	}(),
	function () {
		var h = document.querySelector("#addresses-map");
		h && ymaps.ready(function () {
			var s, c = [],
				u = [],
				d = [],
				p = document.querySelectorAll(".adr__link");
			axios({
				method: "GET",
				url: "/api/mailbox-map.php"
			}).then(function (e) {
				for (var t = Array.from(e.data), n = 0; n < t.length; n++) {
					var i = t[n].coords.split(", "),
						r = [];
					i.forEach(function (e) {
						r.push(+e)
					}), c.push(r), u.push(t[n].name), d.push(t[n].hint)
				}
				for (var a = new ymaps.Map(h, {
						center: [55.785579, 37.66565],
						zoom: 9,
						controls: []
					}), o = 0; o < c.length; o++)(s = new ymaps.Placemark(c[o], {
					hintContent: u[o],
					balloonContent: d[o]
				}, {
					iconLayout: "default#image",
					iconImageHref: "../img/ic-geo-filled.svg",
					iconImageSize: [32, 43],
					iconImageOffset: [-16, -21]
				})).events.add("click", function (e) {
					var t = e.get("target");
					a.setCenter(t.geometry._coordinates), a.setZoom(15)
				}), a.geoObjects.add(s);
				var l = new ymaps.control.ZoomControl({
					options: {
						size: "small",
						position: {
							left: 30,
							bottom: 30
						},
						zoomDuration: 400
					}
				});
				a.controls.add(l), p.forEach(function (e, n) {
					e.addEventListener("click", function (e, t) {
						e.preventDefault(), h.scrollIntoView({
							behavior: "smooth",
							block: "center"
						}), a.setCenter(c[n]), a.setZoom(14)
					})
				})
			}).catch(function (e) {
				console.log(e)
			})
		})
	}(),
	function () {
		var i = document.querySelector("#contacts-map");
		i && ymaps.ready(function () {
			var e = new ymaps.Map(i, {
					center: [55.785579, 37.66565],
					zoom: 15,
					controls: []
				}),
				t = new ymaps.Placemark(e.getCenter(), {
					hintContent: "Офис",
					balloonContent: 'Офис БФ "Ашан"'
				}, {
					iconLayout: "default#image",
					iconImageHref: "../img/ic-geo-filled.svg",
					iconImageSize: [32, 43],
					iconImageOffset: [-16, -21]
				}),
				n = new ymaps.control.ZoomControl({
					options: {
						size: "small",
						position: {
							left: 30,
							bottom: 30
						},
						zoomDuration: 400
					}
				});
			e.geoObjects.add(t), e.controls.add(n)
		})
	}(),
	function () {
		var l = document.querySelector("#project-inner-map");
		if (l) {
			var e = document.querySelector(".project-header__map-link"),
				t = document.querySelector(".project-map"),
				n = t.querySelector(".project-map__button"),
				i = e.getAttribute("data-id");
			e.addEventListener("click", function (e) {
				e.preventDefault(), t.classList.add("project-map--visible")
			}), n.addEventListener("click", function (e) {
				e.preventDefault(), t.classList.remove("project-map--visible")
			}), ymaps.ready(function () {
				axios({
					method: "GET",
					url: "/api/project-map.php?id=" + i
				}).then(function (e) {
					var t = e.data,
						n = t.coords.split(", "),
						i = [];
					n.forEach(function (e) {
						i.push(+e)
					});
					var r = new ymaps.Map(l, {
							center: i,
							zoom: 15,
							controls: []
						}),
						a = new ymaps.Placemark(r.getCenter(), {
							hintContent: t.name,
							balloonContent: t.hint
						}, {
							iconLayout: "default#image",
							iconImageHref: "/img/ic-geo-filled.svg",
							iconImageSize: [32, 43],
							iconImageOffset: [-16, -21]
						}),
						o = new ymaps.control.ZoomControl({
							options: {
								size: "small",
								position: {
									left: 30,
									bottom: 30
								},
								zoomDuration: 400
							}
						});
					r.geoObjects.add(a), r.controls.add(o)
				}).catch(function (e) {
					console.log(e)
				})
			})
		}

		/*
				targets: ".main-slider__image--desktop .path",
				d: [{
					value: "M703.54,625.78 C432.53,526.8 380.35,584.83 211.19,605.31 C42.04,625.79 -81.03,518.79 67.38,424.84 C215.79,330.89 77.34,225.61 150.95,139.99 C224.56,54.37 324.25,175.09 545.24,36.47 C649.11,-28.67 825.08,-3.11 892.78,99.27 C993.99,252.33 974.54,724.75 703.54,625.78 Z"
				}, {
					value: "M690.54,626.78 C407.804687,550.492188 361.640625,606.31 198.19,606.31 C34.739375,606.31 -67.5703125,526.746094 54.38,425.84 C176.330312,324.933906 56.6835937,205.914063 135.640625,138.210938 C214.597656,70.5078125 311.25,176.09 532.24,37.47 C636.11,-27.67 825.637106,-5.75491181 879.78,100.27 C961.984375,261.246094 973.275312,703.067813 690.54,626.78 Z"
				}, {
					value: "M670.54,623.78 C414.154219,555.134219 292.247187,608.366094 178.19,603.31 C64.1328125,598.253906 -60.7226562,526.140625 34.38,422.84 C129.482656,319.539375 42.0742188,207.742187 121.03125,140.039062 C199.988281,72.3359375 350.519531,125.476563 512.24,34.47 C620.953194,-26.7072535 795.941406,-6.546875 859.78,97.27 C956.376698,254.359414 926.925781,692.425781 670.54,623.78 Z"
				}, {
					value: "M690.54,626.78 C407.804687,550.492188 361.640625,606.31 198.19,606.31 C34.739375,606.31 -67.5703125,526.746094 54.38,425.84 C176.330312,324.933906 56.6835937,205.914063 135.640625,138.210938 C214.597656,70.5078125 311.25,176.09 532.24,37.47 C636.11,-27.67 825.637106,-5.75491181 879.78,100.27 C961.984375,261.246094 973.275312,703.067813 690.54,626.78 Z"
				}, {
					value: "M685.54,638.78 C447.33,547.90375 361.535,602.3325 192.375,622.8125 C23.225,643.2925 -59.49,522.863594 49.38,437.84 C158.25,352.816406 28.984375,227.984375 132.95,152.99 C236.915625,77.995625 288.967217,173.188312 527.24,49.47 C705.601563,-43.140625 818.87717,6.5625793 874.78,112.27 C956.54,266.871094 923.75,729.65625 685.54,638.78 Z"
				}, {
					value: "M678.54,619.78 C463.0175,538.614688 354.111719,597.132812 185.375,603.8125 C16.6382813,610.492187 -50.3923437,504.543281 42.38,418.84 C135.152344,333.136719 16.6382813,196.007344 125.95,133.99 C235.261719,71.9726562 254.612088,134.459653 518.355469,39.5859375 C704.046875,-27.2109375 802.452638,-8.3167957 858.355469,97.390625 C940.115469,251.991719 894.0625,700.945312 678.54,619.78 Z"
				}, {
					value: "M685.54,638.78 C447.33,547.90375 361.535,602.3325 192.375,622.8125 C23.225,643.2925 -59.49,522.863594 49.38,437.84 C158.25,352.816406 28.984375,227.984375 132.95,152.99 C236.915625,77.995625 288.967217,173.188312 527.24,49.47 C705.601563,-43.140625 818.87717,6.5625793 874.78,112.27 C956.54,266.871094 923.75,729.65625 685.54,638.78 Z"
				}, {
					value: "M703.54,625.78 C432.53,526.8 380.35,584.83 211.19,605.31 C42.04,625.79 -81.03,518.79 67.38,424.84 C215.79,330.89 77.34,225.61 150.95,139.99 C224.56,54.37 324.25,175.09 545.24,36.47 C649.11,-28.67 825.08,-3.11 892.78,99.27 C993.99,252.33 974.54,724.75 703.54,625.78 Z"
				}],
		 */

	}(), document.addEventListener("DOMContentLoaded", function () {
		! function () {
			anime({
				targets: ".main-slider__image--desktop .path",
				d: [,],
				easing: "linear",
				duration: 4e4,
				loop: !0
			}), anime({
				targets: ".main-slider__svg-holder--decorate11 .path",
				d: [{
					value: "M99.2834014,150.954055 C-46.6073064,154.113456 18.6944474,-6.81252965 161.214463,21.2978675 C303.734478,49.4082647 245.174109,147.794655 99.2834014,150.954055 Z"
				}, {
					value: "M113.090837,151 C-32.7998708,154.1594 8.88018391,-10.1103972 151.400199,18 C293.920215,46.1103972 258.981545,147.8406 113.090837,151 Z"
				}, {
					value: "M116.696588,151 C-29.1941192,154.1594 8.70591541,-7.45298796 151.225931,20.6574092 C293.745946,48.7678064 262.587296,147.8406 116.696588,151 Z"
				}, {
					value: "M123.734895,158.333352 C-22.1558131,161.492753 6.07500692,-7.45298796 148.595022,20.6574092 C291.115038,48.7678064 269.625602,155.173952 123.734895,158.333352 Z"
				}, {
					value: "M99.2834014,150.954055 C-46.6073064,154.113456 18.6944474,-6.81252965 161.214463,21.2978675 C303.734478,49.4082647 245.174109,147.794655 99.2834014,150.954055 Z"
				}],
				easing: "linear",
				duration: 15e3,
				loop: !0
			}), anime({
				targets: ".main-slider__svg-holder--decorate13 .path",
				d: [{
					value: "M28.597839,16.2085261 C20.2959457,11.299431 9.00045427,22.3861118 18.7991466,30.8006432 C28.597839,39.2151746 36.8997323,21.1176212 28.597839,16.2085261 Z"
				}, {
					value: "M30.4920729,16.7837164 C22.1901796,11.8746214 7.10622039,23.6565668 18.7991466,30.8006432 C30.4920729,37.9447196 38.7939662,21.6928115 30.4920729,16.7837164 Z"
				}, {
					value: "M28.597839,16.2085261 C19.6651241,11.56223 5.98529032,22.2848666 18.7991466,30.8006432 C31.613003,39.3164198 37.530554,20.8548222 28.597839,16.2085261 Z"
				}, {
					value: "M28.597839,16.2085261 C20.2959457,11.299431 9.00045427,22.3861118 18.7991466,30.8006432 C28.597839,39.2151746 36.8997323,21.1176212 28.597839,16.2085261 Z"
				}],
				easing: "linear",
				duration: 7500,
				loop: !0
			}), anime({
				targets: ".main-slider__svg-holder--decorate14 .path",
				d: [{
					value: "M26.7581837,12.3291243 C13.5102673,8.95521869 8.89705684,32.5600928 21.0793446,35.7068554 C33.2616324,38.8536179 40.0061,15.7030299 26.7581837,12.3291243 Z"
				}, {
					value: "M26.7581837,12.3291243 C7.81356571,7.92412586 7.09008773,30.5995483 19.2723755,33.7463109 C31.4546633,36.8930734 45.7028016,16.7341227 26.7581837,12.3291243 Z"
				}, {
					value: "M26.7581837,12.3291243 C11.7384643,9.23032055 0.287060979,31.430579 17.7904075,34.0781417 C35.2937541,36.7257045 41.777903,15.4279281 26.7581837,12.3291243 Z"
				}, {
					value: "M26.7581837,12.3291243 C13.5102673,8.95521869 8.89705684,32.5600928 21.0793446,35.7068554 C33.2616324,38.8536179 40.0061,15.7030299 26.7581837,12.3291243 Z"
				}],
				easing: "linear",
				duration: 7500,
				loop: !0
			}), anime({
				targets: ".video-block__ameoba-container .path",
				d: [{
					value: "M27.7541448,31.4271798 C77.1381361,1.38880949 305.665993,28.8394172 343.998133,81.2560625 C382.330274,133.672708 255.960371,195.451947 142.911903,177.979732 C29.8634359,160.507517 -21.6298465,61.46555 27.7541448,31.4271798 Z"
				}, {
					value: "M32.908424,46.180417 C73.0853409,1.1826837 300.005415,9.47561335 338.337556,61.8922587 C376.669697,114.308904 276.311845,191.459575 169.221478,181 C62.1311112,170.540425 -7.26849281,91.1781502 32.908424,46.180417 Z"
				}, {
					value: "M39.4786588,25.7381335 C88.8626502,-4.30023679 333.348992,8.34963682 343.998133,81.2560625 C354.647274,154.162488 237.601195,188.816295 124.552728,171.34408 C11.5042606,153.871865 -9.90533246,55.7765037 39.4786588,25.7381335 Z"
				}, {
					value: "M27.7541448,31.4271798 C70.4736377,-10.9507254 313.529428,10.5777112 334.232088,72.9541036 C354.934748,135.330496 265.171868,187.168925 149.863462,175.804084 C34.5550553,164.439243 -14.9653481,73.8050849 27.7541448,31.4271798 Z"
				}, {
					value: "M27.7541448,31.4271798 C71.1592266,-8.0355254 314.32957,17.2216412 343.998133,81.2560625 C373.666696,145.290484 277.249648,195.284737 163.627949,177.377355 C50.0062508,159.469972 -15.650937,70.8898849 27.7541448,31.4271798 Z"
				}, {
					value: "M27.7541448,31.4271798 C77.1381361,1.38880949 305.665993,28.8394172 343.998133,81.2560625 C382.330274,133.672708 255.960371,195.451947 142.911903,177.979732 C29.8634359,160.507517 -21.6298465,61.46555 27.7541448,31.4271798 Z"
				}],
				easing: "linear",
				duration: 15e3,
				loop: !0
			}), anime({
				targets: ".projects__svg-mask--1 .path",
				d: [{
					value: "M50.2277923,78.3482952 C-6.00765665,132.325629 50.2277923,251.291673 154.204075,256.854513 C258.180358,262.417354 357.491569,106.924531 326.108475,52.9471969 C294.725381,-1.03013695 106.463241,24.3709613 50.2277923,78.3482952 Z"
				}, {
					value: "M80.3897696,78.8729975 C24.1543207,132.850331 50.2277923,251.291673 154.204075,256.854513 C258.180358,262.417354 334.299894,138.306386 318.40154,68.4557542 C302.503185,-1.39487746 136.625219,24.8956636 80.3897696,78.8729975 Z"
				}, {
					value: "M64.2015766,71.2432908 C4.54829506,119.144017 12.7437345,251.437159 116.720018,257 C220.696301,262.562841 360,172.164641 328.735661,82.005061 C297.471321,-8.15451916 123.854858,23.3425641 64.2015766,71.2432908 Z"
				}, {
					value: "M65.5068027,63.2941136 C9.27135376,117.271447 14.8758254,226.925344 118.852108,232.488184 C222.828391,238.051025 339.756548,208.503373 331.362617,119.815332 C322.968687,31.1272902 121.742252,9.31677973 65.5068027,63.2941136 Z"
				}, {
					value: "M50.2277923,78.3482952 C-6.00765665,132.325629 50.2277923,251.291673 154.204075,256.854513 C258.180358,262.417354 357.491569,106.924531 326.108475,52.9471969 C294.725381,-1.03013695 106.463241,24.3709613 50.2277923,78.3482952 Z"
				}],
				easing: "linear",
				duration: 16e3,
				loop: !0
			}), anime({
				targets: ".projects__svg-mask--2 .path",
				d: [{
					value: "M158.352622,250.92331 C-86.9503382,256.196896 22.8490709,-12.4164029 262.484495,34.5047112 C502.119919,81.4258252 403.655582,245.649724 158.352622,250.92331 Z"
				}, {
					value: "M175.685284,251 C-69.6176758,256.273586 5.90763673,-7.90288799 245.543061,39.0182261 C485.178485,85.9393401 420.988244,245.726414 175.685284,251 Z"
				}, {
					value: "M189.781034,251.077962 C-55.5219258,256.351548 48.96899,25.0921273 262.484495,34.5047112 C476,43.917295 435.083994,245.804377 189.781034,251.077962 Z"
				}, {
					value: "M210,251 C-35.3029599,256.273586 -39.4743374,39.4498863 225.781393,34.2249431 C491.037124,29 455.30296,245.726414 210,251 Z"
				}, {
					value: "M226.397357,251.166817 C-18.9056031,256.440403 -63.2039154,54.3023916 194.506187,34.2249431 C452.216289,14.1474947 471.700317,245.893232 226.397357,251.166817 Z"
				}, {
					value: "M158.352622,250.92331 C-86.9503382,256.196896 22.8490709,-12.4164029 262.484495,34.5047112 C502.119919,81.4258252 403.655582,245.649724 158.352622,250.92331 Z"
				}],
				easing: "linear",
				duration: 18e3,
				loop: !0
			}), anime({
				targets: ".projects__svg-mask--3 .path",
				d: [{
					value: "M177.037226,243.382813 C14.9940867,278.82773 -30.5896793,100.095241 78.5036622,51.7136183 C187.597004,3.33199591 339.080365,52.4491808 387.497103,108.134652 C435.913842,163.820123 339.080365,207.937895 177.037226,243.382813 Z"
				}, {
					value: "M210,241.238123 C48.9182888,234.476246 -10.7641978,128.940557 66.9858488,74.2860708 C144.735896,19.6315846 330.009558,38.7904392 378.426296,94.4759104 C426.843035,150.161382 371.081711,248 210,241.238123 Z"
				}, {
					value: "M221.249303,241.571095 C55.0015033,241.571095 -4.97305,109.858605 74.3516713,64.0290495 C153.676393,18.199494 329.320827,28.182589 377.737565,83.8680602 C426.154304,139.553531 387.497103,241.571095 221.249303,241.571095 Z"
				}, {
					value: "M223.269729,241.571095 C61.7950911,241.571095 -8.07055026,153.107187 62.008077,94.0851194 C132.086704,35.0630518 336.327628,28.2953462 384.744367,83.9808174 C433.161106,139.666289 384.744367,241.571095 223.269729,241.571095 Z"
				}, {
					value: "M242.47937,241.571095 C97.4616373,241.571095 -41.5541741,180.557458 38.5140441,83.4922027 C118.582262,-13.5730526 318.753351,27.8067315 367.170089,83.4922027 C415.586828,139.177674 387.497103,241.571095 242.47937,241.571095 Z"
				}, {
					value: "M177.037226,243.382813 C14.9940867,278.82773 -30.5896793,100.095241 78.5036622,51.7136183 C187.597004,3.33199591 339.080365,52.4491808 387.497103,108.134652 C435.913842,163.820123 339.080365,207.937895 177.037226,243.382813 Z"
				}],
				easing: "linear",
				duration: 2e4,
				loop: !0
			}), anime({
				targets: ".main__ask-form-mask .path",
				d: [{
					value: "M703.54,625.78 C432.53,526.8 380.35,584.83 211.19,605.31 C42.04,625.79 -81.03,518.79 67.38,424.84 C215.79,330.89 77.34,225.61 150.95,139.99 C224.56,54.37 324.25,175.09 545.24,36.47 C649.11,-28.67 825.08,-3.11 892.78,99.27 C993.99,252.33 974.54,724.75 703.54,625.78 Z"
				}, {
					value: "M690.54,626.78 C407.804687,550.492188 361.640625,606.31 198.19,606.31 C34.739375,606.31 -67.5703125,526.746094 54.38,425.84 C176.330312,324.933906 56.6835937,205.914063 135.640625,138.210938 C214.597656,70.5078125 311.25,176.09 532.24,37.47 C636.11,-27.67 825.637106,-5.75491181 879.78,100.27 C961.984375,261.246094 973.275312,703.067813 690.54,626.78 Z"
				}, {
					value: "M670.54,623.78 C414.154219,555.134219 292.247187,608.366094 178.19,603.31 C64.1328125,598.253906 -60.7226562,526.140625 34.38,422.84 C129.482656,319.539375 42.0742188,207.742187 121.03125,140.039062 C199.988281,72.3359375 350.519531,125.476563 512.24,34.47 C620.953194,-26.7072535 795.941406,-6.546875 859.78,97.27 C956.376698,254.359414 926.925781,692.425781 670.54,623.78 Z"
				}, {
					value: "M690.54,626.78 C407.804687,550.492188 361.640625,606.31 198.19,606.31 C34.739375,606.31 -67.5703125,526.746094 54.38,425.84 C176.330312,324.933906 56.6835937,205.914063 135.640625,138.210938 C214.597656,70.5078125 311.25,176.09 532.24,37.47 C636.11,-27.67 825.637106,-5.75491181 879.78,100.27 C961.984375,261.246094 973.275312,703.067813 690.54,626.78 Z"
				}, {
					value: "M685.54,638.78 C447.33,547.90375 361.535,602.3325 192.375,622.8125 C23.225,643.2925 -59.49,522.863594 49.38,437.84 C158.25,352.816406 28.984375,227.984375 132.95,152.99 C236.915625,77.995625 288.967217,173.188312 527.24,49.47 C705.601563,-43.140625 818.87717,6.5625793 874.78,112.27 C956.54,266.871094 923.75,729.65625 685.54,638.78 Z"
				}, {
					value: "M678.54,619.78 C463.0175,538.614688 354.111719,597.132812 185.375,603.8125 C16.6382813,610.492187 -50.3923437,504.543281 42.38,418.84 C135.152344,333.136719 16.6382813,196.007344 125.95,133.99 C235.261719,71.9726562 254.612088,134.459653 518.355469,39.5859375 C704.046875,-27.2109375 802.452638,-8.3167957 858.355469,97.390625 C940.115469,251.991719 894.0625,700.945312 678.54,619.78 Z"
				}, {
					value: "M685.54,638.78 C447.33,547.90375 361.535,602.3325 192.375,622.8125 C23.225,643.2925 -59.49,522.863594 49.38,437.84 C158.25,352.816406 28.984375,227.984375 132.95,152.99 C236.915625,77.995625 288.967217,173.188312 527.24,49.47 C705.601563,-43.140625 818.87717,6.5625793 874.78,112.27 C956.54,266.871094 923.75,729.65625 685.54,638.78 Z"
				}, {
					value: "M703.54,625.78 C432.53,526.8 380.35,584.83 211.19,605.31 C42.04,625.79 -81.03,518.79 67.38,424.84 C215.79,330.89 77.34,225.61 150.95,139.99 C224.56,54.37 324.25,175.09 545.24,36.47 C649.11,-28.67 825.08,-3.11 892.78,99.27 C993.99,252.33 974.54,724.75 703.54,625.78 Z"
				}],
				easing: "linear",
				duration: 4e4,
				loop: !0
			}), anime({
				targets: ".main__ask-form-small-svg .path-small",
				d: [{
					value: "M15.523162,32.5057584 C38.2672995,-22.61848 73.3227021,30.4424518 50.6815987,44.8816801 C28.0418164,59.3209084 8.27378186,50.0752056 15.523162,32.5057584 Z"
				}, {
					value: "M14.6930587,22.1994114 C38.0201807,-4.87413322 67.3466877,31.1076163 52.6834342,44.7860002 C38.0201807,58.4643841 1.96758084,36.9686484 14.6930587,22.1994114 Z"
				}, {
					value: "M15.523162,32.5057584 C38.2672995,-22.61848 73.3227021,30.4424518 50.6815987,44.8816801 C28.0418164,59.3209084 8.27378186,50.0752056 15.523162,32.5057584 Z"
				}, {
					value: "M14.6930587,22.1994114 C38.0201807,-4.87413322 67.3466877,31.1076163 52.6834342,44.7860002 C38.0201807,58.4643841 1.96758084,36.9686484 14.6930587,22.1994114 Z"
				}, {
					value: "M15.523162,32.5057584 C38.2672995,-22.61848 73.3227021,30.4424518 50.6815987,44.8816801 C28.0418164,59.3209084 8.27378186,50.0752056 15.523162,32.5057584 Z"
				}],
				easing: "linear",
				duration: 7500,
				loop: !0
			}), anime({
				targets: ".achieve__item-ameoba--l-blue .path",
				d: [{
					value: "M18.0924153,72.8913923 C-14.7557328,35.0857139 58.3258292,8.21627789 130.701193,19.6649766 C203.076557,31.1136753 50.9405634,110.697071 18.0924153,72.8913923 Z"
				}, {
					value: "M24.660695,75.4455308 C-8.18745312,37.6398524 67.8129994,-3.50786692 130.701193,19.6649766 C193.589387,42.8378201 57.5088431,113.251209 24.660695,75.4455308 Z"
				}, {
					value: "M18.0924153,72.8913923 C-9.55492168,29.1062858 119.990474,-12.2306745 140.536296,28.6771807 C161.082118,69.5850359 45.7397523,116.676499 18.0924153,72.8913923 Z"
				}, {
					value: "M16.5199337,66.7185217 C-16.5724816,20.4144522 105.881933,5.39292948 140.5152,37.5257276 C175.148467,69.6585257 49.612349,113.022591 16.5199337,66.7185217 Z"
				}, {
					value: "M15.2864239,63.2739617 C-17.8059914,10.7969302 122.434102,5.61229044 144.543389,32.5871416 C166.652676,59.5619928 48.3788392,115.750993 15.2864239,63.2739617 Z"
				}, {
					value: "M18.0924153,72.8913923 C-14.7557328,35.0857139 58.3258292,8.21627789 130.701193,19.6649766 C203.076557,31.1136753 50.9405634,110.697071 18.0924153,72.8913923 Z"
				}],
				easing: "linear",
				duration: 2e4,
				loop: !0
			}), anime({
				targets: ".achieve__item-ameoba--green .path",
				d: [{
					value: "M11,33.9311873 C11,7.33703243 169,16.6317386 169,58.9098656 C169,86.4214372 121.942597,83.0439753 80.6606831,71.1611251 C35.3150142,58.1085378 11,45.9608404 11,33.9311873 Z"
				}, {
					value: "M12.4749912,31.2858503 C23.2214371,5.05304998 162.095832,14.9799685 162.095832,57.2580955 C162.095832,84.7696671 113.238083,86.4214372 76.905844,80 C26.7653267,71.1380583 5.37978164,48.605736 12.4749912,31.2858503 Z"
				}, {
					value: "M19.0066213,30.5819072 C34.2019413,4.86839314 146.749546,20.2329966 162.153911,60.1428622 C172.626525,87.2754707 111.255924,87.6343248 70.834346,80 C20.564529,70.5056623 10.6595156,44.7068759 19.0066213,30.5819072 Z"
				}, {
					value: "M15.4308835,26.8453602 C33.9445701,1.1946485 164.133134,20.9179105 164.133134,63.1960376 C164.133134,90.7076092 109.407679,85.9720967 68.8247904,76.2328909 C28.5196752,66.5603462 4.43088354,42.0858596 15.4308835,26.8453602 Z"
				}, {
					value: "M24.7981455,24.3963675 C55.4194337,0.668742009 168.496825,24.3963675 164.437657,60.2631122 C161.328465,87.7358725 98.8638569,83.9142148 57.5819426,72.0313646 C12.2362737,58.9787772 7.40589795,37.8731597 24.7981455,24.3963675 Z"
				}, {
					value: "M11,33.9311873 C11,7.33703243 169,16.6317386 169,58.9098656 C169,86.4214372 121.942597,83.0439753 80.6606831,71.1611251 C35.3150142,58.1085378 11,45.9608404 11,33.9311873 Z"
				}],
				easing: "linear",
				duration: 2e4,
				loop: !0
			}), anime({
				targets: ".achieve__item-ameoba--orange .path",
				d: [{
					value: "M23.6877495,51.9660955 C42.5104582,28.3698041 147.894596,13.0832942 156.149924,27.7640271 C164.405253,42.4447599 144.441959,67.1577051 108.066849,74.4796476 C71.6917378,81.80159 7.04291653,72.8321854 23.6877495,51.9660955 Z"
				}, {
					value: "M23.2505222,53.2918376 C29.7710243,14.4090363 149.821552,11.9648411 155.614365,38.8523384 C161.407178,65.7398356 121.785544,78.3257421 89.33994,78.3257421 C56.8943363,78.3257421 19.5824016,75.16543 23.2505222,53.2918376 Z"
				}, {
					value: "M23.3446838,42.6878015 C28.0070547,12.7249199 149.55102,19.0608831 155.37458,37.9961475 C161.19814,56.9314119 135.071625,75.8904764 98.4650819,77.3551829 C61.8585388,78.8198894 18.702135,72.523296 23.3446838,42.6878015 Z"
				}, {
					value: "M21.8612707,37.5849401 C31.308805,9.36897423 154.079791,24.0521604 159.616636,45.4667232 C165.153482,66.881286 113.192872,79.7318578 83.0156294,77.8079796 C52.8383865,75.8841014 10.6055734,71.2011577 21.8612707,37.5849401 Z"
				}, {
					value: "M23.2828911,39.6824766 C34.8563815,17.6852254 148.471421,9.50959777 157.296125,39.6824766 C166.120829,69.8553554 138.239338,79.8676938 91.1006861,79.8676938 C43.9620337,79.8676938 11.9724631,61.1797362 23.2828911,39.6824766 Z"
				}, {
					value: "M23.6877495,51.9660955 C42.5104582,28.3698041 147.894596,13.0832942 156.149924,27.7640271 C164.405253,42.4447599 144.441959,67.1577051 108.066849,74.4796476 C71.6917378,81.80159 7.04291653,72.8321854 23.6877495,51.9660955 Z"
				}],
				easing: "linear",
				duration: 2e4,
				loop: !0
			}), anime({
				targets: ".achieve__item-ameoba--red .path",
				d: [{
					value: "M21.3900121,18.599902 C43.4828504,5.06409317 145.718997,17.4338114 162.867586,41.0536578 C180.016175,64.6735042 123.482271,92.5122971 72.9079567,84.6390149 C22.3336424,76.7657328 -0.702826072,32.1357108 21.3900121,18.599902 Z"
				}, {
					value: "M17.0515171,22.8519569 C39.3579721,4.25205489 132.686335,14.791675 149.834925,38.4115213 C166.983514,62.0313677 135.251329,93.8732821 84.6770149,86 C34.1027006,78.1267179 -5.25493789,41.4518589 17.0515171,22.8519569 Z"
				}, {
					value: "M20.5016192,30.4566537 C34.1460246,7.58095176 157.724325,-3.76350602 165.787644,36.2582828 C173.850963,76.2800715 129.958643,93.8732821 79.3843286,86 C28.8100143,78.1267179 6.85721385,53.3323556 20.5016192,30.4566537 Z"
				}, {
					value: "M25.6577279,30.6233536 C53.285746,8.47204257 155.286526,6.71143151 164.336642,36.0193124 C173.386759,65.3271934 132.845647,85.4122698 77.0397922,85.4122698 C21.2339371,85.4122698 -1.97029015,52.7746646 25.6577279,30.6233536 Z"
				}, {
					value: "M19.0734207,31.2585465 C37.947443,4.47766609 138.348535,9.74463659 161.311502,31.2585465 C184.274469,52.7724564 151.326326,93.285552 100.752011,85.4122698 C50.1776971,77.5389877 0.199398363,58.0394269 19.0734207,31.2585465 Z"
				}, {
					value: "M21.3900121,18.599902 C43.4828504,5.06409317 145.718997,17.4338114 162.867586,41.0536578 C180.016175,64.6735042 123.482271,92.5122971 72.9079567,84.6390149 C22.3336424,76.7657328 -0.702826072,32.1357108 21.3900121,18.599902 Z"
				}],
				easing: "linear",
				duration: 2e4,
				loop: !0
			}), anime({
				targets: ".programms__svg-programm--1 .path-programm1",
				d: [{
					value: "M56.943265,347.265101 C40.1699967,263.175736 90.1491744,85.3463541 335.652282,137.365695 C549.714192,182.722584 653.557007,103.171925 710.660533,154.544566 C742.646735,183.319436 678.797481,220.807048 688.602303,311.610025 C698.405816,402.413001 860.173593,429.409119 786.643976,539.845278 C729.474944,625.706836 566.850359,510.742466 393.925732,558.619254 C245.306164,599.766689 90.1491744,513.730666 56.943265,347.265101 Z"
				}, {
					value: "M49.6690207,375.933994 C32.8957524,291.84463 50.0756498,93.9583267 295.578758,145.977668 C509.640667,191.334556 567.069119,101.314224 658.205393,128 C721.021514,146.393302 700.855711,213.690495 710.660533,304.493472 C720.464046,395.296448 842.033295,421.515168 783.075641,524.024317 C731.700826,613.349251 600.743894,542.657171 398.683649,572.745937 C217.27335,599.759722 82.8749301,542.399559 49.6690207,375.933994 Z"
				}, {
					value: "M57.9753678,347.265101 C57.9753678,223.549227 126.022679,87.7871196 371.525788,139.806461 C585.587697,185.163349 662.828935,76.2388897 710.660533,154.544566 C730.441404,186.928064 672.550062,264.10903 697.613374,347.265101 C722.676687,430.421173 787.716174,504.347633 737.756718,559.15955 C664.643706,639.373883 534.226398,522.229693 355.450659,559.15955 C166.412221,598.209382 57.9753678,507.137195 57.9753678,347.265101 Z"
				}, {
					value: "M56.943265,347.265101 C56.943265,207.45519 229.205406,118.732888 396.089849,151.818835 C603.80422,192.999586 593.036088,80.9761609 683.200174,128 C765.252711,170.793372 691.203718,269.333496 712.89943,356.599558 C734.595141,443.865619 818.833032,477.632059 758.553731,549.174591 C698.274429,620.717122 518.048283,506.42269 347.014522,572.745937 C207.80927,626.726766 56.943265,496.315181 56.943265,347.265101 Z"
				}, {
					value: "M56.5285885,313.029777 C75.9544589,199.948218 170.177512,129.815009 361.925847,158.776909 C583.395025,192.227882 615.599409,53.1476865 688.602303,129.815009 C717.396796,160.05486 744.925498,228.014216 727.664609,324.31801 C710.403721,420.621804 835.09658,468.87479 766.288901,558.619254 C702.172765,642.244632 510.811635,523.538801 347.520713,585.177224 C151.021211,659.351093 27.8788512,479.805159 56.5285885,313.029777 Z"
				}, {
					value: "M56.943265,347.265101 C40.1699967,263.175736 90.1491744,85.3463541 335.652282,137.365695 C549.714192,182.722584 653.557007,103.171925 710.660533,154.544566 C742.646735,183.319436 678.797481,220.807048 688.602303,311.610025 C698.405816,402.413001 860.173593,429.409119 786.643976,539.845278 C729.474944,625.706836 566.850359,510.742466 393.925732,558.619254 C245.306164,599.766689 90.1491744,513.730666 56.943265,347.265101 Z"
				}],
				easing: "linear",
				duration: 4e4,
				loop: !0
			}), anime({
				targets: ".programms__svg-programm--2 .path-programm2",
				d: [{
					value: "M631.747023,577.59716 C360.284418,534.671801 163.931501,657.708224 81.7854228,600.55273 C1.34319645,544.582699 38.754783,469.678824 136.989916,323.628854 C180.781041,258.524502 96.3154076,186.536225 190.3854,140.120081 C267.656146,101.991498 407.365897,159.122581 544.625027,148.752449 C681.885681,138.382317 855.16497,68.2065626 907.467734,177.32867 C948.236731,262.384504 917.152866,622.727146 631.747023,577.59716 Z"
				}, {
					value: "M670.620847,566.677382 C399.158242,523.752022 302.561743,608.363251 162.467129,592.980205 C22.3725156,577.59716 -13.5332448,416.588897 100.519168,350 C180.392509,303.366372 117.75676,223.204034 181.181829,161.860483 C243.490653,101.596543 342.74087,150.490213 480,140.120081 C617.260654,129.749948 782,73.0082604 873,176.024313 C942.380306,254.565908 956.02669,611.807367 670.620847,566.677382 Z"
				}, {
					value: "M685.544849,561.312581 C414.082243,518.387221 336.490924,593.421094 220,594.875246 C103.509076,596.329397 25.7648669,501.093197 124,355.043227 C167.791125,289.938875 125.930007,185.72995 220,139.313806 C297.270746,101.185224 377.37586,192.300361 518.900293,154.650181 C660.424725,117 821.267979,64.3956486 907.467734,177.32867 C969.256966,258.280696 970.950692,606.442566 685.544849,561.312581 Z"
				}, {
					value: "M665.38893,594.891667 C393.926324,551.966308 227.90448,638.882423 133.77132,594.891667 C39.6381609,550.900911 49.9727299,465.365011 123.348169,386.202212 C180.44622,324.600654 102.007285,210.211885 178.711932,160.281153 C246.104127,116.412343 374.547549,179.888995 506.834496,140.120081 C639.121443,100.351166 837.267575,85.0750185 900.677537,210.211885 C943.608897,294.935099 950.794773,640.021653 665.38893,594.891667 Z"
				}, {
					value: "M601.280728,575.216955 C329.818123,532.291595 251.618728,607.704215 162.565416,591.464053 C73.5121034,575.22389 52.8437593,496.04997 151.078892,350 C194.870017,284.895648 112.468863,178.230005 206.538855,131.81386 C283.809601,93.685278 407.365897,159.122581 544.625027,148.752449 C681.885681,138.382317 851.65295,101.110204 903.955714,210.232312 C944.724711,295.288145 886.686571,620.346941 601.280728,575.216955 Z"
				}, {
					value: "M631.747023,577.59716 C360.284418,534.671801 163.931501,657.708224 81.7854228,600.55273 C1.34319645,544.582699 38.754783,469.678824 136.989916,323.628854 C180.781041,258.524502 96.3154076,186.536225 190.3854,140.120081 C267.656146,101.991498 407.365897,159.122581 544.625027,148.752449 C681.885681,138.382317 855.16497,68.2065626 907.467734,177.32867 C948.236731,262.384504 917.152866,622.727146 631.747023,577.59716 Z"
				}],
				easing: "linear",
				duration: 4e4,
				loop: !0
			}), anime({
				targets: ".programms__svg-programm--3 .path-programm3",
				d: [{
					value: "M63.0485984,321.40976 C58.9565657,54.6929614 314.356183,175.927248 421.593771,105.880923 C528.83273,35.8332298 707.391542,35.8332298 754.485573,111.269418 C821.156635,218.05635 672.308943,321.40976 793.746598,345.656617 C915.185624,369.903475 857.308867,486.266759 634.527578,528.855855 C507.692389,553.104081 67.1982268,591.932457 63.0485984,321.40976 Z"
				}, {
					value: "M46.5298972,252.077258 C83.9155492,36.5484208 318.191304,136.828987 450.266805,92.8260464 C582.342306,48.8231053 760.82666,50.3893606 807.920692,125.825549 C874.591754,232.612481 723.93673,272.171503 784.987944,393.039649 C846.039158,513.907795 525.560296,549.288355 339.961321,530.49286 C208.660946,517.196151 9.14424512,467.606094 46.5298972,252.077258 Z"
				}, {
					value: "M55.0563905,273.168798 C70.8934867,63.0284558 314.494278,166.484667 421.593771,105.880923 C528.693264,45.277179 703.213542,65.9216734 750.307573,141.357862 C816.978635,248.144794 707.710334,293.045775 788.53148,388.177458 C869.352627,483.30914 630.603804,549.9505 357.206977,526.559877 C354.256548,526.307452 39.5588324,478.803855 55.0563905,273.168798 Z"
				}, {
					value: "M58.1200268,412.247473 C23.959872,248.213352 224.707641,139.160759 327.837213,111.269418 C430.966785,83.3780765 624.815719,68.4746734 721.098511,111.269418 C817.381304,154.064163 866.882945,286.822838 793.746598,345.656617 C720.610251,404.490396 892.353463,488.673281 669.572173,531.262377 C542.736985,555.510603 92.2801816,576.281594 58.1200268,412.247473 Z"
				}, {
					value: "M87,350.945111 C87,157.495769 208.969646,114.856855 316.528842,102.890356 C424.088037,90.9238573 711.284006,105.233004 778.499006,164.451344 C887.291364,260.300526 738.618486,296.304431 812.954925,366.254631 C887.291364,436.204831 744.823666,483.748897 522.042377,526.337993 C395.207188,550.586219 87,544.394452 87,350.945111 Z"
				}, {
					value: "M63.0485984,321.40976 C58.9565657,54.6929614 314.356183,175.927248 421.593771,105.880923 C528.83273,35.8332298 707.391542,35.8332298 754.485573,111.269418 C821.156635,218.05635 672.308943,321.40976 793.746598,345.656617 C915.185624,369.903475 857.308867,486.266759 634.527578,528.855855 C507.692389,553.104081 67.1982268,591.932457 63.0485984,321.40976 Z"
				}],
				easing: "linear",
				duration: 4e4,
				loop: !0
			});
			anime()
		}()
	}), document.addEventListener("DOMContentLoaded", function () {
		document.querySelector(".js-header__nav-link--dropdown").onclick = function (e) {
			e.preventDefault(), this.querySelector(".header__nav-icon-dropdown").classList.toggle("header__nav-icon-dropdown--active"), this.nextElementSibling.classList.toggle("header__nav-dropdown--active")
		}
	});
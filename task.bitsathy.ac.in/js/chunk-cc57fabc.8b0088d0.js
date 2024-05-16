(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-cc57fabc"], {
    "01b4": function(t, e, a) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("ul", {
                staticClass: "list-group"
            }, [t._l(t.viewData.addnlData, (function(e, s) {
                return [t.viewData.addnlData.captions && t.viewData.addnlData.captions[s] ? a("li", {
                    key: "k" + s + e,
                    staticClass: "list-group-item c-default d-flex"
                }, [a("span", {
                    staticClass: "col-2 font-weight-bold p-0"
                }, [t._v(" " + t._s(t.viewData.addnlData.captions[s]) + ": ")]), "rating" == t.guessTheResult(e, s) ? a("span", {
                    staticClass: "col-10"
                }, [a("star-rating", {
                    staticClass: "custom-starrating-label",
                    staticStyle: {
                        "margin-top": "-3.5px"
                    },
                    attrs: {
                        rating: e,
                        "star-size": 20,
                        "read-only": !0,
                        increment: .01
                    }
                })], 1) : "text" == t.guessTheResult(e, s) ? a("span", {
                    staticClass: "col-10"
                }, [t._v(t._s(e) + " ")]) : "boolean" == t.guessTheResult(e, s) ? a("span", {
                    staticClass: "col-10"
                }, [a("b-form-checkbox", {
                    staticClass: "checkbox-disabled-opacity-1",
                    staticStyle: {
                        top: "-1em"
                    },
                    attrs: {
                        checked: e,
                        name: s,
                        disabled: ""
                    }
                })], 1) : "dateHyphen" == t.guessTheResult(e, s) ? a("span", {
                    staticClass: "col-10"
                }, [t._v(t._s(t.formatHyphenDate(e)) + " ")]) : "dateDot" == t.guessTheResult(e, s) ? a("span", {
                    staticClass: "col-10"
                }, [t._v(t._s(t.formatDotDate(e)) + " ")]) : "url" == t.guessTheResult(e, s) ? a("span", {
                    staticClass: "col-10"
                }, [a("div", {
                    staticClass: "row"
                }, [a("svg", {
                    staticClass: "col-1 mr-0 pr-0",
                    attrs: {
                        "aria-hidden": "true",
                        focusable: "false",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32"
                    }
                }, [a("g", {
                    attrs: {
                        fill: "none",
                        fillRule: "evenodd"
                    }
                }, [a("rect", {
                    staticClass: "uppy-ProviderIconBg",
                    attrs: {
                        fill: "#FF753E",
                        width: "32",
                        height: "32",
                        rx: "16"
                    }
                }), a("path", {
                    attrs: {
                        d: "M22.788 15.389l-2.199 2.19a3.184 3.184 0 0 1-.513.437c-.806.584-1.686.876-2.638.876a4.378 4.378 0 0 1-3.519-1.752c-.22-.292-.146-.802.147-1.021.293-.22.806-.146 1.026.146.953 1.313 2.785 1.532 4.105.583a.571.571 0 0 0 .293-.292l2.199-2.189c1.1-1.167 1.1-2.992-.073-4.086a2.976 2.976 0 0 0-4.105 0l-1.246 1.24a.71.71 0 0 1-1.026 0 .703.703 0 0 1 0-1.022l1.246-1.24a4.305 4.305 0 0 1 6.083 0c1.833 1.605 1.906 4.451.22 6.13zm-7.183 5.035l-1.246 1.24a2.976 2.976 0 0 1-4.105 0c-1.172-1.094-1.172-2.991-.073-4.086l2.2-2.19.292-.291c.66-.438 1.393-.657 2.2-.584.805.146 1.465.51 1.905 1.168.22.292.733.365 1.026.146.293-.22.367-.73.147-1.022-.733-.949-1.76-1.532-2.859-1.678-1.1-.22-2.272.073-3.225.802l-.44.438-2.199 2.19c-1.686 1.75-1.612 4.524.074 6.202.88.803 1.979 1.241 3.078 1.241 1.1 0 2.199-.438 3.079-1.24l1.246-1.241a.703.703 0 0 0 0-1.022c-.294-.292-.807-.365-1.1-.073z",
                        fill: "#FFF",
                        fillRule: "nonzero"
                    }
                })])]), a("a", {
                    staticClass: "col-11 ml-0 pl-0",
                    attrs: {
                        href: e
                    }
                }, [a("div", {
                    staticClass: "trim-text"
                }, [t._v(t._s(e))])])])]) : "attachment" == t.guessTheResult(e, s) ? a("ul", {
                    staticClass: "col-10"
                }, t._l(e, (function(e, s) {
                    return a("li", {
                        key: "fil" + s,
                        staticClass: "list-unstyled"
                    }, [a("div", {
                        staticClass: "row"
                    }, [a("div", {
                        staticClass: "col-11"
                    }, [a("a", {
                        attrs: {
                            download: "",
                            target: "_blank",
                            href: t.$imageDomain + e.storedUrl
                        }
                    }, [a("i", {
                        staticClass: "fa fa-paperclip"
                    }), t._v(" " + t._s(e.uploadedFilename) + " ")])]), a("div", {
                        staticClass: "col-1"
                    }, [t.allowtoRemoveAttachment ? a("b-button", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        staticClass: "p-0",
                        staticStyle: {
                            height: "1.6rem",
                            width: "1.6rem"
                        },
                        attrs: {
                            variant: "danger",
                            size: "sm",
                            title: "Delete Attachment"
                        },
                        on: {
                            click: function(a) {
                                return t.deleteAttachment(e.id)
                            }
                        }
                    }, [a("b-icon", {
                        attrs: {
                            icon: "trash",
                            "font-scale": "1"
                        }
                    })], 1) : t._e()], 1)])])
                }
                )), 0) : t._e()]) : t._e()]
            }
            ))], 2)])
        }
          , i = []
          , r = (a("caad"),
        a("a15b"),
        a("4d63"),
        a("ac1f"),
        a("25f0"),
        a("2532"),
        a("1276"),
        a("53ca"))
          , n = a("5b3d")
          , o = a.n(n)
          , l = {
            components: {
                StarRating: o.a
            },
            props: {
                viewData: [Object, Array],
                allowtoRemoveAttachment: !1
            },
            watch: {
                viewData: function(t) {}
            },
            methods: {
                guessTheResult: function(t, e) {
                    var a = Object(r["a"])(t);
                    switch (a) {
                    case "number":
                        return e.includes("rating") ? "rating" : "number";
                    case "string":
                        return RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(t) ? "url" : RegExp(/(([0-9]{4})-([0-9]{2})-([0-9]{2}))/g).test(t) ? "dateHyphen" : RegExp(/(([0-9]{4}).([0-9]{2}).([0-9]{2}))/g).test(t) ? "dateDot" : "text";
                    case "object":
                        return this.viewData && "attachments" == this.viewData.addnlData.captions[e].toLowerCase() ? "attachment" : "text";
                    case "boolean":
                        return "boolean";
                    case "string":
                        return this.viewData && "fileUrl" == this.viewData.addnlData.captions[e].toLowerCase() ? "attachment" : "text";
                    default:
                        return "text"
                    }
                },
                formatHyphenDate: function(t) {
                    if (t)
                        try {
                            var e = t.split("-").reverse().join("-");
                            return e
                        } catch (a) {
                            return t
                        }
                },
                formatDotDate: function(t) {
                    if (t)
                        try {
                            var e = t.split(".").reverse().join(".");
                            return e
                        } catch (a) {
                            return t
                        }
                },
                deleteAttachment: function(t) {
                    this.$emit("deleteAttchment", t)
                }
            }
        }
          , c = l
          , d = (a("47d8"),
        a("2877"))
          , u = Object(d["a"])(c, s, i, !1, null, null, null);
        e["a"] = u.exports
    },
    "05df": function(t, e, a) {
        "use strict";
        var s = a("e083")
          , i = a.n(s);
        i.a
    },
    "06c5": function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return i
        }
        ));
        a("a630"),
        a("fb6a"),
        a("b0c0"),
        a("d3b7"),
        a("25f0"),
        a("3ca3");
        var s = a("6b75");
        function i(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return Object(s["a"])(t, e);
                var a = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === a && t.constructor && (a = t.constructor.name),
                "Map" === a || "Set" === a ? Array.from(a) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Object(s["a"])(t, e) : void 0
            }
        }
    },
    "113f": function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return n
        }
        ));
        a("c975"),
        a("ac1f"),
        a("5319"),
        a("1276"),
        a("4360");
        var s = a("5a0c")
          , i = a.n(s)
          , r = a("7c15")
          , n = {
            data: function() {
                return {
                    devWidth: 1e3,
                    dpLoading: !1,
                    adaptiveLabel: "",
                    minDateConfig: {
                        dateFormat: "Y-m-d",
                        wrap: !0,
                        altFormat: "d-m-Y",
                        altInput: !0,
                        disableMobile: !0
                    },
                    todayDateConfig: {
                        dateFormat: "Y-m-d",
                        minDate: i()().format("YYYY-MM-DD"),
                        wrap: !0,
                        altInput: !0,
                        disableMobile: !0
                    },
                    localSubmitUrl: this.SubmitUrl,
                    commonVar: "",
                    triggerName: ""
                }
            },
            watch: {
                dpLoading: function(t, e) {
                    this.$root.$children[0].isLoading = 1 == t
                }
            },
            methods: {
                convertTheDate: function(t) {
                    return null == t || void 0 == t ? "-" : i()(t).format("YYYY-MM-DD")
                },
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : i()(t).format("DD-MM-YYYY")
                },
                convertToDateTime: function(t) {
                    return null == t || void 0 == t ? "-" : i()(t).format("DD-MM-YY | hh:mm a")
                },
                now: function() {
                    return i()().format("YYYY-MM-DD")
                },
                getReadablePriority: function(t) {
                    var e = ["Low", "Normal", "Important", "Critical"];
                    return e[t - 1]
                },
                taskActionHandler: function(t, e) {
                    var a = this
                      , s = "";
                    if (t.api ? s = t.api : t.props.api && (s = t.props.api),
                    s) {
                        var i = {
                            taskId: this.commonVar,
                            parameters: JSON.stringify(e),
                            triggerName: this.triggerName
                        };
                        Object(r["a"])(s, "post", i).then((function(t) {
                            a.taskActionHandlerResponse(t)
                        }
                        )).catch((function(t) {
                            console.log(t),
                            a.taskActionHandlerError(t.response)
                        }
                        ))
                    }
                },
                getDateDiffInDays: function(t, e) {
                    var a = i()(t)
                      , s = "";
                    return s = "today" == e ? i()().format("YYYY-MM-DDTHH:mm:ss") : e,
                    a.diff(s, "minute")
                },
                taskDelete: function(t) {
                    var e = this;
                    if (console.log(t),
                    t.id) {
                        var a = "/api/bitTask/Tasks/delete";
                        Object(r["a"])(a, "post", {
                            id: t.id
                        }).then((function(t) {
                            e.refreshTaskList(),
                            e.showToast("", t, "success", 3)
                        }
                        )).catch((function(t) {
                            console.log(t),
                            e.showToast("ERROR", t.message, "danger", 5)
                        }
                        ))
                    }
                },
                showToast: function(t, e, a, s) {
                    var i = s || 0
                      , r = this.$createElement
                      , n = "my-toast-".concat(i++)
                      , o = r("label", e || "");
                    this.$bvToast.toast([o], {
                        id: n,
                        title: t,
                        noCloseButton: !1,
                        variant: a || "primary",
                        toaster: "b-toaster-bottom-right"
                    })
                },
                changeColor: function(t, e) {
                    if (e) {
                        var a = e
                          , s = /rejected|approved|Rejected|Approved|completd|Completed/gi
                          , i = String(s)
                          , r = i.replace("/g", "|").substring(1)
                          , n = r.split("|");
                        (n.indexOf("rejected") > -1 || n.indexOf("Rejected") > -1) && (a = a.replace(/rejected|Rejected/g, '<span class="text-danger font-weight-700">Rejected</span>')),
                        (n.indexOf("completd") > -1 || n.indexOf("Completed") > -1) && (a = a.replace(/Completed|Completed/g, '<span class="text-success font-weight-700">Completed</span>')),
                        (n.indexOf("approved") > -1 || n.indexOf("Approved") > -1) && (a = a.replace(/approved|Approved/g, '<span class="text-success font-weight-700">Approved</span>')),
                        setTimeout((function() {
                            document.getElementById(t).innerHTML = a
                        }
                        ), 50)
                    }
                }
            }
        }
    },
    "129f": function(t, e) {
        t.exports = Object.is || function(t, e) {
            return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e
        }
    },
    "1c1c": function(t, e, a) {
        !function(e, a) {
            t.exports = a()
        }(0, (function() {
            "use strict";
            return function(t, e, a) {
                var s = "h:mm A"
                  , i = {
                    lastDay: "[Yesterday at] " + s,
                    sameDay: "[Today at] " + s,
                    nextDay: "[Tomorrow at] " + s,
                    nextWeek: "dddd [at] " + s,
                    lastWeek: "[Last] dddd [at] " + s,
                    sameElse: "MM/DD/YYYY"
                };
                e.prototype.calendar = function(t, e) {
                    var s = e || this.$locale().calendar || i
                      , r = a(t || void 0).startOf("d")
                      , n = this.diff(r, "d", !0)
                      , o = n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                      , l = s[o] || i[o];
                    return "function" == typeof l ? l.call(this, a()) : this.format(l)
                }
            }
        }
        ))
    },
    2526: function(t, e, a) {},
    2532: function(t, e, a) {
        "use strict";
        var s = a("23e7")
          , i = a("5a34")
          , r = a("1d80")
          , n = a("ab13");
        s({
            target: "String",
            proto: !0,
            forced: !n("includes")
        }, {
            includes: function(t) {
                return !!~String(r(this)).indexOf(i(t), arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    2909: function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return l
        }
        ));
        var s = a("6b75");
        function i(t) {
            if (Array.isArray(t))
                return Object(s["a"])(t)
        }
        a("a4d3"),
        a("e01a"),
        a("d28b"),
        a("a630"),
        a("e260"),
        a("d3b7"),
        a("3ca3"),
        a("ddb0");
        function r(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }
        var n = a("06c5");
        function o() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function l(t) {
            return i(t) || r(t) || Object(n["a"])(t) || o()
        }
    },
    "36ca": function(t, e, a) {},
    "47d8": function(t, e, a) {
        "use strict";
        var s = a("36ca")
          , i = a.n(s);
        i.a
    },
    "4bf2": function(t, e, a) {},
    "4d63": function(t, e, a) {
        var s = a("83ab")
          , i = a("da84")
          , r = a("94ca")
          , n = a("7156")
          , o = a("9bf2").f
          , l = a("241c").f
          , c = a("44e7")
          , d = a("ad6d")
          , u = a("9f7f")
          , p = a("6eeb")
          , h = a("d039")
          , f = a("69f3").set
          , m = a("2626")
          , g = a("b622")
          , v = g("match")
          , b = i.RegExp
          , _ = b.prototype
          , w = /a/g
          , C = /a/g
          , y = new b(w) !== w
          , S = u.UNSUPPORTED_Y
          , k = s && r("RegExp", !y || S || h((function() {
            return C[v] = !1,
            b(w) != w || b(C) == C || "/a/i" != b(w, "i")
        }
        )));
        if (k) {
            var x = function(t, e) {
                var a, s = this instanceof x, i = c(t), r = void 0 === e;
                if (!s && i && t.constructor === x && r)
                    return t;
                y ? i && !r && (t = t.source) : t instanceof x && (r && (e = d.call(t)),
                t = t.source),
                S && (a = !!e && e.indexOf("y") > -1,
                a && (e = e.replace(/y/g, "")));
                var o = n(y ? new b(t,e) : b(t, e), s ? this : _, x);
                return S && a && f(o, {
                    sticky: a
                }),
                o
            }
              , M = function(t) {
                t in x || o(x, t, {
                    configurable: !0,
                    get: function() {
                        return b[t]
                    },
                    set: function(e) {
                        b[t] = e
                    }
                })
            }
              , T = l(b)
              , D = 0;
            while (T.length > D)
                M(T[D++]);
            _.constructor = x,
            x.prototype = _,
            p(i, "RegExp", x)
        }
        m("RegExp")
    },
    "4df4": function(t, e, a) {
        "use strict";
        var s = a("0366")
          , i = a("7b0b")
          , r = a("9bdd")
          , n = a("e95a")
          , o = a("50c4")
          , l = a("8418")
          , c = a("35a1");
        t.exports = function(t) {
            var e, a, d, u, p, h, f = i(t), m = "function" == typeof this ? this : Array, g = arguments.length, v = g > 1 ? arguments[1] : void 0, b = void 0 !== v, _ = c(f), w = 0;
            if (b && (v = s(v, g > 2 ? arguments[2] : void 0, 2)),
            void 0 == _ || m == Array && n(_))
                for (e = o(f.length),
                a = new m(e); e > w; w++)
                    h = b ? v(f[w], w) : f[w],
                    l(a, w, h);
            else
                for (u = _.call(f),
                p = u.next,
                a = new m; !(d = p.call(u)).done; w++)
                    h = b ? r(u, v, [d.value, w], !0) : d.value,
                    l(a, w, h);
            return a.length = w,
            a
        }
    },
    "50e2": function(t, e, a) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("b-modal", {
                attrs: {
                    id: t.id,
                    "header-text-variant": t.headerText,
                    "body-text-variant": t.bodyText,
                    "footer-text-variant": t.footerText,
                    "no-close-on-backdrop": t.backdrop,
                    "no-close-on-esc": t.noCloseOnEsc,
                    size: t.mdClass,
                    "hide-header-close": !t.defaultCloseBtn
                },
                model: {
                    value: t.show,
                    callback: function(e) {
                        t.show = e
                    },
                    expression: "show"
                }
            }, [a("div", {
                attrs: {
                    slot: "modal-title"
                },
                slot: "modal-title"
            }, [t._t("title")], 2), a("div", {
                attrs: {
                    slot: "modal-header-close"
                },
                slot: "modal-header-close"
            }, [t.defaultCloseBtn ? a("button", {
                staticClass: "close pull-right",
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.btnCloseEvent
                }
            }, [t._v("×")]) : t._e()]), a("b-container", {
                attrs: {
                    fluid: ""
                }
            }, [t._t("body")], 2), a("div", {
                staticClass: "w-100",
                attrs: {
                    slot: "modal-footer"
                },
                slot: "modal-footer"
            }, [t._t("footer")], 2)], 1)
        }
          , i = []
          , r = (a("ff05"),
        {
            props: {
                defaultCloseBtn: {
                    default: !0
                },
                id: {
                    type: String,
                    default: "bvm"
                },
                backdrop: {
                    type: Boolean,
                    default: !0
                },
                noCloseOnEsc: {
                    type: Boolean,
                    default: !0
                },
                headerText: {
                    type: String,
                    default: "dark"
                },
                bodyText: {
                    type: String,
                    default: "dark"
                },
                footerText: {
                    type: String,
                    default: "dark"
                },
                modalClass: String
            },
            computed: {
                mdClass: function() {
                    return this.devWidth > 768 ? "small" == this.modalClass ? "sm" : "medium" == this.modalClass ? "md" : "large" == this.modalClass ? "lg" : "full" == this.modalClass ? "dp-full" : "viewOnly" == this.modalClass ? "dp-viewOnly" : "eightyPercentWidth" == this.modalClass ? "dp-eightypercent" : "seventyPercentWidth" == this.modalClass ? "dp-seventyPercentWidth" : "sixtyPercentWidth" == this.modalClass ? "dp-sixtyPercentWidth" : "fiftyPercentWidth" == this.modalClass ? "dp-fiftyPercentWidth" : "fortyPercentWidth" == this.modalClass ? "dp-fortyPercentWidth" : "thirtyPercentWidth" == this.modalClass ? "dp-thirtyPercentWidth" : "md" : "md"
                }
            },
            data: function() {
                return {
                    show: !1,
                    thm: "old",
                    devWidth: window.innerWidth
                }
            },
            mounted: function() {},
            methods: {
                Open: function() {
                    this.show = !0,
                    this.thm = localStorage.getItem(btoa("theme"))
                },
                Close: function() {
                    this.show = !1,
                    this.thm = localStorage.getItem(btoa("theme")),
                    this.$emit("doOnModalClose", "")
                },
                btnCloseEvent: function() {
                    this.$emit("ModalBtnClosed")
                }
            }
        })
          , n = r
          , o = (a("c01a"),
        a("2877"))
          , l = Object(o["a"])(n, s, i, !1, null, null, null);
        e["a"] = l.exports
    },
    5319: function(t, e, a) {
        "use strict";
        var s = a("d784")
          , i = a("825a")
          , r = a("7b0b")
          , n = a("50c4")
          , o = a("a691")
          , l = a("1d80")
          , c = a("8aa5")
          , d = a("14c3")
          , u = Math.max
          , p = Math.min
          , h = Math.floor
          , f = /\$([$&'`]|\d\d?|<[^>]*>)/g
          , m = /\$([$&'`]|\d\d?)/g
          , g = function(t) {
            return void 0 === t ? t : String(t)
        };
        s("replace", 2, (function(t, e, a, s) {
            var v = s.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
              , b = s.REPLACE_KEEPS_$0
              , _ = v ? "$" : "$0";
            return [function(a, s) {
                var i = l(this)
                  , r = void 0 == a ? void 0 : a[t];
                return void 0 !== r ? r.call(a, i, s) : e.call(String(i), a, s)
            }
            , function(t, s) {
                if (!v && b || "string" === typeof s && -1 === s.indexOf(_)) {
                    var r = a(e, t, this, s);
                    if (r.done)
                        return r.value
                }
                var l = i(t)
                  , h = String(this)
                  , f = "function" === typeof s;
                f || (s = String(s));
                var m = l.global;
                if (m) {
                    var C = l.unicode;
                    l.lastIndex = 0
                }
                var y = [];
                while (1) {
                    var S = d(l, h);
                    if (null === S)
                        break;
                    if (y.push(S),
                    !m)
                        break;
                    var k = String(S[0]);
                    "" === k && (l.lastIndex = c(h, n(l.lastIndex), C))
                }
                for (var x = "", M = 0, T = 0; T < y.length; T++) {
                    S = y[T];
                    for (var D = String(S[0]), O = u(p(o(S.index), h.length), 0), P = [], E = 1; E < S.length; E++)
                        P.push(g(S[E]));
                    var B = S.groups;
                    if (f) {
                        var N = [D].concat(P, O, h);
                        void 0 !== B && N.push(B);
                        var A = String(s.apply(void 0, N))
                    } else
                        A = w(D, h, O, P, B, s);
                    O >= M && (x += h.slice(M, O) + A,
                    M = O + D.length)
                }
                return x + h.slice(M)
            }
            ];
            function w(t, a, s, i, n, o) {
                var l = s + t.length
                  , c = i.length
                  , d = m;
                return void 0 !== n && (n = r(n),
                d = f),
                e.call(o, d, (function(e, r) {
                    var o;
                    switch (r.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return a.slice(0, s);
                    case "'":
                        return a.slice(l);
                    case "<":
                        o = n[r.slice(1, -1)];
                        break;
                    default:
                        var d = +r;
                        if (0 === d)
                            return e;
                        if (d > c) {
                            var u = h(d / 10);
                            return 0 === u ? e : u <= c ? void 0 === i[u - 1] ? r.charAt(1) : i[u - 1] + r.charAt(1) : e
                        }
                        o = i[d - 1]
                    }
                    return void 0 === o ? "" : o
                }
                ))
            }
        }
        ))
    },
    "53ca": function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return s
        }
        ));
        a("a4d3"),
        a("e01a"),
        a("d28b"),
        a("e260"),
        a("d3b7"),
        a("3ca3"),
        a("ddb0");
        function s(t) {
            return s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            s(t)
        }
    },
    "5a0c": function(t, e, a) {
        !function(e, a) {
            t.exports = a()
        }(0, (function() {
            "use strict";
            var t = "millisecond"
              , e = "second"
              , a = "minute"
              , s = "hour"
              , i = "day"
              , r = "week"
              , n = "month"
              , o = "quarter"
              , l = "year"
              , c = "date"
              , d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
              , u = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
              , p = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            }
              , h = function(t, e, a) {
                var s = String(t);
                return !s || s.length >= e ? t : "" + Array(e + 1 - s.length).join(a) + t
            }
              , f = {
                s: h,
                z: function(t) {
                    var e = -t.utcOffset()
                      , a = Math.abs(e)
                      , s = Math.floor(a / 60)
                      , i = a % 60;
                    return (e <= 0 ? "+" : "-") + h(s, 2, "0") + ":" + h(i, 2, "0")
                },
                m: function t(e, a) {
                    if (e.date() < a.date())
                        return -t(a, e);
                    var s = 12 * (a.year() - e.year()) + (a.month() - e.month())
                      , i = e.clone().add(s, n)
                      , r = a - i < 0
                      , o = e.clone().add(s + (r ? -1 : 1), n);
                    return +(-(s + (a - i) / (r ? i - o : o - i)) || 0)
                },
                a: function(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                },
                p: function(d) {
                    return {
                        M: n,
                        y: l,
                        w: r,
                        d: i,
                        D: c,
                        h: s,
                        m: a,
                        s: e,
                        ms: t,
                        Q: o
                    }[d] || String(d || "").toLowerCase().replace(/s$/, "")
                },
                u: function(t) {
                    return void 0 === t
                }
            }
              , m = "en"
              , g = {};
            g[m] = p;
            var v = function(t) {
                return t instanceof C
            }
              , b = function(t, e, a) {
                var s;
                if (!t)
                    return m;
                if ("string" == typeof t)
                    g[t] && (s = t),
                    e && (g[t] = e,
                    s = t);
                else {
                    var i = t.name;
                    g[i] = t,
                    s = i
                }
                return !a && s && (m = s),
                s || !a && m
            }
              , _ = function(t, e) {
                if (v(t))
                    return t.clone();
                var a = "object" == typeof e ? e : {};
                return a.date = t,
                a.args = arguments,
                new C(a)
            }
              , w = f;
            w.l = b,
            w.i = v,
            w.w = function(t, e) {
                return _(t, {
                    locale: e.$L,
                    utc: e.$u,
                    x: e.$x,
                    $offset: e.$offset
                })
            }
            ;
            var C = function() {
                function p(t) {
                    this.$L = b(t.locale, null, !0),
                    this.parse(t)
                }
                var h = p.prototype;
                return h.parse = function(t) {
                    this.$d = function(t) {
                        var e = t.date
                          , a = t.utc;
                        if (null === e)
                            return new Date(NaN);
                        if (w.u(e))
                            return new Date;
                        if (e instanceof Date)
                            return new Date(e);
                        if ("string" == typeof e && !/Z$/i.test(e)) {
                            var s = e.match(d);
                            if (s) {
                                var i = s[2] - 1 || 0
                                  , r = (s[7] || "0").substring(0, 3);
                                return a ? new Date(Date.UTC(s[1], i, s[3] || 1, s[4] || 0, s[5] || 0, s[6] || 0, r)) : new Date(s[1],i,s[3] || 1,s[4] || 0,s[5] || 0,s[6] || 0,r)
                            }
                        }
                        return new Date(e)
                    }(t),
                    this.$x = t.x || {},
                    this.init()
                }
                ,
                h.init = function() {
                    var t = this.$d;
                    this.$y = t.getFullYear(),
                    this.$M = t.getMonth(),
                    this.$D = t.getDate(),
                    this.$W = t.getDay(),
                    this.$H = t.getHours(),
                    this.$m = t.getMinutes(),
                    this.$s = t.getSeconds(),
                    this.$ms = t.getMilliseconds()
                }
                ,
                h.$utils = function() {
                    return w
                }
                ,
                h.isValid = function() {
                    return !("Invalid Date" === this.$d.toString())
                }
                ,
                h.isSame = function(t, e) {
                    var a = _(t);
                    return this.startOf(e) <= a && a <= this.endOf(e)
                }
                ,
                h.isAfter = function(t, e) {
                    return _(t) < this.startOf(e)
                }
                ,
                h.isBefore = function(t, e) {
                    return this.endOf(e) < _(t)
                }
                ,
                h.$g = function(t, e, a) {
                    return w.u(t) ? this[e] : this.set(a, t)
                }
                ,
                h.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                h.valueOf = function() {
                    return this.$d.getTime()
                }
                ,
                h.startOf = function(t, o) {
                    var d = this
                      , u = !!w.u(o) || o
                      , p = w.p(t)
                      , h = function(t, e) {
                        var a = w.w(d.$u ? Date.UTC(d.$y, e, t) : new Date(d.$y,e,t), d);
                        return u ? a : a.endOf(i)
                    }
                      , f = function(t, e) {
                        return w.w(d.toDate()[t].apply(d.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), d)
                    }
                      , m = this.$W
                      , g = this.$M
                      , v = this.$D
                      , b = "set" + (this.$u ? "UTC" : "");
                    switch (p) {
                    case l:
                        return u ? h(1, 0) : h(31, 11);
                    case n:
                        return u ? h(1, g) : h(0, g + 1);
                    case r:
                        var _ = this.$locale().weekStart || 0
                          , C = (m < _ ? m + 7 : m) - _;
                        return h(u ? v - C : v + (6 - C), g);
                    case i:
                    case c:
                        return f(b + "Hours", 0);
                    case s:
                        return f(b + "Minutes", 1);
                    case a:
                        return f(b + "Seconds", 2);
                    case e:
                        return f(b + "Milliseconds", 3);
                    default:
                        return this.clone()
                    }
                }
                ,
                h.endOf = function(t) {
                    return this.startOf(t, !1)
                }
                ,
                h.$set = function(r, o) {
                    var d, u = w.p(r), p = "set" + (this.$u ? "UTC" : ""), h = (d = {},
                    d[i] = p + "Date",
                    d[c] = p + "Date",
                    d[n] = p + "Month",
                    d[l] = p + "FullYear",
                    d[s] = p + "Hours",
                    d[a] = p + "Minutes",
                    d[e] = p + "Seconds",
                    d[t] = p + "Milliseconds",
                    d)[u], f = u === i ? this.$D + (o - this.$W) : o;
                    if (u === n || u === l) {
                        var m = this.clone().set(c, 1);
                        m.$d[h](f),
                        m.init(),
                        this.$d = m.set(c, Math.min(this.$D, m.daysInMonth())).$d
                    } else
                        h && this.$d[h](f);
                    return this.init(),
                    this
                }
                ,
                h.set = function(t, e) {
                    return this.clone().$set(t, e)
                }
                ,
                h.get = function(t) {
                    return this[w.p(t)]()
                }
                ,
                h.add = function(t, o) {
                    var c, d = this;
                    t = Number(t);
                    var u = w.p(o)
                      , p = function(e) {
                        var a = _(d);
                        return w.w(a.date(a.date() + Math.round(e * t)), d)
                    };
                    if (u === n)
                        return this.set(n, this.$M + t);
                    if (u === l)
                        return this.set(l, this.$y + t);
                    if (u === i)
                        return p(1);
                    if (u === r)
                        return p(7);
                    var h = (c = {},
                    c[a] = 6e4,
                    c[s] = 36e5,
                    c[e] = 1e3,
                    c)[u] || 1
                      , f = this.$d.getTime() + t * h;
                    return w.w(f, this)
                }
                ,
                h.subtract = function(t, e) {
                    return this.add(-1 * t, e)
                }
                ,
                h.format = function(t) {
                    var e = this;
                    if (!this.isValid())
                        return "Invalid Date";
                    var a = t || "YYYY-MM-DDTHH:mm:ssZ"
                      , s = w.z(this)
                      , i = this.$locale()
                      , r = this.$H
                      , n = this.$m
                      , o = this.$M
                      , l = i.weekdays
                      , c = i.months
                      , d = function(t, s, i, r) {
                        return t && (t[s] || t(e, a)) || i[s].substr(0, r)
                    }
                      , p = function(t) {
                        return w.s(r % 12 || 12, t, "0")
                    }
                      , h = i.meridiem || function(t, e, a) {
                        var s = t < 12 ? "AM" : "PM";
                        return a ? s.toLowerCase() : s
                    }
                      , f = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: o + 1,
                        MM: w.s(o + 1, 2, "0"),
                        MMM: d(i.monthsShort, o, c, 3),
                        MMMM: d(c, o),
                        D: this.$D,
                        DD: w.s(this.$D, 2, "0"),
                        d: String(this.$W),
                        dd: d(i.weekdaysMin, this.$W, l, 2),
                        ddd: d(i.weekdaysShort, this.$W, l, 3),
                        dddd: l[this.$W],
                        H: String(r),
                        HH: w.s(r, 2, "0"),
                        h: p(1),
                        hh: p(2),
                        a: h(r, n, !0),
                        A: h(r, n, !1),
                        m: String(n),
                        mm: w.s(n, 2, "0"),
                        s: String(this.$s),
                        ss: w.s(this.$s, 2, "0"),
                        SSS: w.s(this.$ms, 3, "0"),
                        Z: s
                    };
                    return a.replace(u, (function(t, e) {
                        return e || f[t] || s.replace(":", "")
                    }
                    ))
                }
                ,
                h.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }
                ,
                h.diff = function(t, c, d) {
                    var u, p = w.p(c), h = _(t), f = 6e4 * (h.utcOffset() - this.utcOffset()), m = this - h, g = w.m(this, h);
                    return g = (u = {},
                    u[l] = g / 12,
                    u[n] = g,
                    u[o] = g / 3,
                    u[r] = (m - f) / 6048e5,
                    u[i] = (m - f) / 864e5,
                    u[s] = m / 36e5,
                    u[a] = m / 6e4,
                    u[e] = m / 1e3,
                    u)[p] || m,
                    d ? g : w.a(g)
                }
                ,
                h.daysInMonth = function() {
                    return this.endOf(n).$D
                }
                ,
                h.$locale = function() {
                    return g[this.$L]
                }
                ,
                h.locale = function(t, e) {
                    if (!t)
                        return this.$L;
                    var a = this.clone()
                      , s = b(t, e, !0);
                    return s && (a.$L = s),
                    a
                }
                ,
                h.clone = function() {
                    return w.w(this.$d, this)
                }
                ,
                h.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                h.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                h.toISOString = function() {
                    return this.$d.toISOString()
                }
                ,
                h.toString = function() {
                    return this.$d.toUTCString()
                }
                ,
                p
            }()
              , y = C.prototype;
            return _.prototype = y,
            [["$ms", t], ["$s", e], ["$m", a], ["$H", s], ["$W", i], ["$M", n], ["$y", l], ["$D", c]].forEach((function(t) {
                y[t[1]] = function(e) {
                    return this.$g(e, t[0], t[1])
                }
            }
            )),
            _.extend = function(t, e) {
                return t.$i || (t(e, C, _),
                t.$i = !0),
                _
            }
            ,
            _.locale = b,
            _.isDayjs = v,
            _.unix = function(t) {
                return _(1e3 * t)
            }
            ,
            _.en = g[m],
            _.Ls = g,
            _.p = {},
            _
        }
        ))
    },
    "5a34": function(t, e, a) {
        var s = a("44e7");
        t.exports = function(t) {
            if (s(t))
                throw TypeError("The method doesn't accept regular expressions");
            return t
        }
    },
    "5b3d": function(t, e, a) {
        t.exports = function(t) {
            var e = {};
            function a(s) {
                if (e[s])
                    return e[s].exports;
                var i = e[s] = {
                    i: s,
                    l: !1,
                    exports: {}
                };
                return t[s].call(i.exports, i, i.exports, a),
                i.l = !0,
                i.exports
            }
            return a.m = t,
            a.c = e,
            a.d = function(t, e, s) {
                a.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: s
                })
            }
            ,
            a.r = function(t) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            a.t = function(t, e) {
                if (1 & e && (t = a(t)),
                8 & e)
                    return t;
                if (4 & e && "object" === typeof t && t && t.__esModule)
                    return t;
                var s = Object.create(null);
                if (a.r(s),
                Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var i in t)
                        a.d(s, i, function(e) {
                            return t[e]
                        }
                        .bind(null, i));
                return s
            }
            ,
            a.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t["default"]
                }
                : function() {
                    return t
                }
                ;
                return a.d(e, "a", e),
                e
            }
            ,
            a.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            a.p = "",
            a(a.s = "fb15")
        }({
            "27c2": function(t, e, a) {
                var s = a("4bad");
                e = s(!1),
                e.push([t.i, ".vue-star-rating-star[data-v-fde73a0c]{display:inline-block}.vue-star-rating-pointer[data-v-fde73a0c]{cursor:pointer}.vue-star-rating[data-v-fde73a0c]{display:flex;align-items:center}.vue-star-rating-inline[data-v-fde73a0c]{display:inline-flex}.vue-star-rating-rating-text[data-v-fde73a0c]{margin-left:7px}.vue-star-rating-rtl[data-v-fde73a0c]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-fde73a0c]{margin-right:10px;direction:rtl}.sr-only[data-v-fde73a0c]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}", ""]),
                t.exports = e
            },
            "2b2b": function(t, e, a) {
                "use strict";
                var s = a("3c76")
                  , i = a.n(s);
                i.a
            },
            "3c76": function(t, e, a) {
                var s = a("27c2");
                "string" === typeof s && (s = [[t.i, s, ""]]),
                s.locals && (t.exports = s.locals);
                var i = a("499e").default;
                i("af45d76c", s, !0, {
                    sourceMap: !1,
                    shadowMode: !1
                })
            },
            "499e": function(t, e, a) {
                "use strict";
                function s(t, e) {
                    for (var a = [], s = {}, i = 0; i < e.length; i++) {
                        var r = e[i]
                          , n = r[0]
                          , o = r[1]
                          , l = r[2]
                          , c = r[3]
                          , d = {
                            id: t + ":" + i,
                            css: o,
                            media: l,
                            sourceMap: c
                        };
                        s[n] ? s[n].parts.push(d) : a.push(s[n] = {
                            id: n,
                            parts: [d]
                        })
                    }
                    return a
                }
                a.r(e),
                a.d(e, "default", (function() {
                    return f
                }
                ));
                var i = "undefined" !== typeof document;
                if ("undefined" !== typeof DEBUG && DEBUG && !i)
                    throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var r = {}
                  , n = i && (document.head || document.getElementsByTagName("head")[0])
                  , o = null
                  , l = 0
                  , c = !1
                  , d = function() {}
                  , u = null
                  , p = "data-vue-ssr-id"
                  , h = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
                function f(t, e, a, i) {
                    c = a,
                    u = i || {};
                    var n = s(t, e);
                    return m(n),
                    function(e) {
                        for (var a = [], i = 0; i < n.length; i++) {
                            var o = n[i]
                              , l = r[o.id];
                            l.refs--,
                            a.push(l)
                        }
                        e ? (n = s(t, e),
                        m(n)) : n = [];
                        for (i = 0; i < a.length; i++) {
                            l = a[i];
                            if (0 === l.refs) {
                                for (var c = 0; c < l.parts.length; c++)
                                    l.parts[c]();
                                delete r[l.id]
                            }
                        }
                    }
                }
                function m(t) {
                    for (var e = 0; e < t.length; e++) {
                        var a = t[e]
                          , s = r[a.id];
                        if (s) {
                            s.refs++;
                            for (var i = 0; i < s.parts.length; i++)
                                s.parts[i](a.parts[i]);
                            for (; i < a.parts.length; i++)
                                s.parts.push(v(a.parts[i]));
                            s.parts.length > a.parts.length && (s.parts.length = a.parts.length)
                        } else {
                            var n = [];
                            for (i = 0; i < a.parts.length; i++)
                                n.push(v(a.parts[i]));
                            r[a.id] = {
                                id: a.id,
                                refs: 1,
                                parts: n
                            }
                        }
                    }
                }
                function g() {
                    var t = document.createElement("style");
                    return t.type = "text/css",
                    n.appendChild(t),
                    t
                }
                function v(t) {
                    var e, a, s = document.querySelector("style[" + p + '~="' + t.id + '"]');
                    if (s) {
                        if (c)
                            return d;
                        s.parentNode.removeChild(s)
                    }
                    if (h) {
                        var i = l++;
                        s = o || (o = g()),
                        e = _.bind(null, s, i, !1),
                        a = _.bind(null, s, i, !0)
                    } else
                        s = g(),
                        e = w.bind(null, s),
                        a = function() {
                            s.parentNode.removeChild(s)
                        }
                        ;
                    return e(t),
                    function(s) {
                        if (s) {
                            if (s.css === t.css && s.media === t.media && s.sourceMap === t.sourceMap)
                                return;
                            e(t = s)
                        } else
                            a()
                    }
                }
                var b = function() {
                    var t = [];
                    return function(e, a) {
                        return t[e] = a,
                        t.filter(Boolean).join("\n")
                    }
                }();
                function _(t, e, a, s) {
                    var i = a ? "" : s.css;
                    if (t.styleSheet)
                        t.styleSheet.cssText = b(e, i);
                    else {
                        var r = document.createTextNode(i)
                          , n = t.childNodes;
                        n[e] && t.removeChild(n[e]),
                        n.length ? t.insertBefore(r, n[e]) : t.appendChild(r)
                    }
                }
                function w(t, e) {
                    var a = e.css
                      , s = e.media
                      , i = e.sourceMap;
                    if (s && t.setAttribute("media", s),
                    u.ssrId && t.setAttribute(p, e.id),
                    i && (a += "\n/*# sourceURL=" + i.sources[0] + " */",
                    a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"),
                    t.styleSheet)
                        t.styleSheet.cssText = a;
                    else {
                        while (t.firstChild)
                            t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(a))
                    }
                }
            },
            "4bad": function(t, e, a) {
                "use strict";
                function s(t, e) {
                    var a = t[1] || ""
                      , s = t[3];
                    if (!s)
                        return a;
                    if (e && "function" === typeof btoa) {
                        var r = i(s)
                          , n = s.sources.map((function(t) {
                            return "/*# sourceURL=".concat(s.sourceRoot || "").concat(t, " */")
                        }
                        ));
                        return [a].concat(n).concat([r]).join("\n")
                    }
                    return [a].join("\n")
                }
                function i(t) {
                    var e = btoa(unescape(encodeURIComponent(JSON.stringify(t))))
                      , a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
                    return "/*# ".concat(a, " */")
                }
                t.exports = function(t) {
                    var e = [];
                    return e.toString = function() {
                        return this.map((function(e) {
                            var a = s(e, t);
                            return e[2] ? "@media ".concat(e[2], " {").concat(a, "}") : a
                        }
                        )).join("")
                    }
                    ,
                    e.i = function(t, a, s) {
                        "string" === typeof t && (t = [[null, t, ""]]);
                        var i = {};
                        if (s)
                            for (var r = 0; r < this.length; r++) {
                                var n = this[r][0];
                                null != n && (i[n] = !0)
                            }
                        for (var o = 0; o < t.length; o++) {
                            var l = [].concat(t[o]);
                            s && i[l[0]] || (a && (l[2] ? l[2] = "".concat(a, " and ").concat(l[2]) : l[2] = a),
                            e.push(l))
                        }
                    }
                    ,
                    e
                }
            },
            "70a0": function(t, e, a) {
                var s = a("812a");
                "string" === typeof s && (s = [[t.i, s, ""]]),
                s.locals && (t.exports = s.locals);
                var i = a("499e").default;
                i("4599b915", s, !0, {
                    sourceMap: !1,
                    shadowMode: !1
                })
            },
            "812a": function(t, e, a) {
                var s = a("4bad");
                e = s(!1),
                e.push([t.i, ".vue-star-rating-star[data-v-ef4bc576]{overflow:visible!important}.vue-star-rating-star-rotate[data-v-ef4bc576]{transition:all .25s}.vue-star-rating-star-rotate[data-v-ef4bc576]:hover{transition:transform .25s;transform:rotate(-15deg) scale(1.3)}", ""]),
                t.exports = e
            },
            8875: function(t, e, a) {
                var s, i, r;
                (function(a, n) {
                    i = [],
                    s = n,
                    r = "function" === typeof s ? s.apply(e, i) : s,
                    void 0 === r || (t.exports = r)
                }
                )("undefined" !== typeof self && self, (function() {
                    function t() {
                        var e = Object.getOwnPropertyDescriptor(document, "currentScript");
                        if (!e && "currentScript"in document && document.currentScript)
                            return document.currentScript;
                        if (e && e.get !== t && document.currentScript)
                            return document.currentScript;
                        try {
                            throw new Error
                        } catch (h) {
                            var a, s, i, r = /.*at [^(]*\((.*):(.+):(.+)\)$/gi, n = /@([^@]*):(\d+):(\d+)\s*$/gi, o = r.exec(h.stack) || n.exec(h.stack), l = o && o[1] || !1, c = o && o[2] || !1, d = document.location.href.replace(document.location.hash, ""), u = document.getElementsByTagName("script");
                            l === d && (a = document.documentElement.outerHTML,
                            s = new RegExp("(?:[^\\n]+?\\n){0," + (c - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),
                            i = a.replace(s, "$1").trim());
                            for (var p = 0; p < u.length; p++) {
                                if ("interactive" === u[p].readyState)
                                    return u[p];
                                if (u[p].src === l)
                                    return u[p];
                                if (l === d && u[p].innerHTML && u[p].innerHTML.trim() === i)
                                    return u[p]
                            }
                            return null
                        }
                    }
                    return t
                }
                ))
            },
            ab73: function(t, e, a) {
                "use strict";
                var s = a("70a0")
                  , i = a.n(s);
                i.a
            },
            d4aa: function(t, e) {
                class a {
                    constructor(t) {
                        this.color = t
                    }
                    parseAlphaColor() {
                        return /^rgba\((\d{1,3}%?\s*,\s*){3}(\d*(?:\.\d+)?)\)$/.test(this.color) ? this.parseRgba() : /^hsla\(\d+\s*,\s*([\d.]+%\s*,\s*){2}(\d*(?:\.\d+)?)\)$/.test(this.color) ? this.parseHsla() : /^#([0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/.test(this.color) ? this.parseAlphaHex() : /^transparent$/.test(this.color) ? this.parseTransparent() : {
                            color: this.color,
                            opacity: "1"
                        }
                    }
                    parseRgba() {
                        return {
                            color: this.color.replace(/,(?!.*,).*(?=\))|a/g, ""),
                            opacity: this.color.match(/\.\d+|[01](?=\))/)[0]
                        }
                    }
                    parseHsla() {
                        return {
                            color: this.color.replace(/,(?!.*,).*(?=\))|a/g, ""),
                            opacity: this.color.match(/\.\d+|[01](?=\))/)[0]
                        }
                    }
                    parseAlphaHex() {
                        return {
                            color: 5 === this.color.length ? this.color.substring(0, 4) : this.color.substring(0, 7),
                            opacity: 5 === this.color.length ? (parseInt(this.color.substring(4, 5) + this.color.substring(4, 5), 16) / 255).toFixed(2) : (parseInt(this.color.substring(7, 9), 16) / 255).toFixed(2)
                        }
                    }
                    parseTransparent() {
                        return {
                            color: "#fff",
                            opacity: 0
                        }
                    }
                }
                t.exports = a
            },
            fb15: function(t, e, a) {
                "use strict";
                if (a.r(e),
                "undefined" !== typeof window) {
                    var s = window.document.currentScript
                      , i = a("8875");
                    s = i(),
                    "currentScript"in document || Object.defineProperty(document, "currentScript", {
                        get: i
                    });
                    var r = s && s.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                    r && (a.p = r[1])
                }
                var n = function() {
                    var t = this
                      , e = t.$createElement
                      , a = t._self._c || e;
                    return a("div", {
                        class: ["vue-star-rating", {
                            "vue-star-rating-rtl": t.rtl
                        }, {
                            "vue-star-rating-inline": t.inline
                        }]
                    }, [a("div", {
                        staticClass: "sr-only"
                    }, [t._t("screen-reader", [a("span", [t._v("Rated " + t._s(t.selectedRating) + " stars out of " + t._s(t.maxRating))])], {
                        rating: t.selectedRating,
                        stars: t.maxRating
                    })], 2), a("div", {
                        staticClass: "vue-star-rating",
                        on: {
                            mouseleave: t.resetRating
                        }
                    }, [t._l(t.maxRating, (function(e) {
                        return a("span", {
                            key: e,
                            class: [{
                                "vue-star-rating-pointer": !t.readOnly
                            }, "vue-star-rating-star"],
                            style: {
                                "margin-right": t.margin + "px"
                            }
                        }, [a("star", {
                            attrs: {
                                fill: t.fillLevel[e - 1],
                                size: t.starSize,
                                points: t.starPoints,
                                "star-id": e,
                                step: t.step,
                                "active-color": t.currentActiveColor,
                                "inactive-color": t.inactiveColor,
                                "border-color": t.borderColor,
                                "active-border-color": t.currentActiveBorderColor,
                                "border-width": t.borderWidth,
                                "rounded-corners": t.roundedCorners,
                                rtl: t.rtl,
                                glow: t.glow,
                                "glow-color": t.glowColor,
                                animate: t.animate
                            },
                            on: {
                                "star-selected": function(e) {
                                    return t.setRating(e, !0)
                                },
                                "star-mouse-move": t.setRating
                            }
                        })], 1)
                    }
                    )), t.showRating ? a("span", {
                        class: ["vue-star-rating-rating-text", t.textClass]
                    }, [t._v(" " + t._s(t.formattedRating))]) : t._e()], 2)])
                }
                  , o = []
                  , l = function() {
                    var t = this
                      , e = t.$createElement
                      , a = t._self._c || e;
                    return a("svg", {
                        class: ["vue-star-rating-star", {
                            "vue-star-rating-star-rotate": t.shouldAnimate
                        }],
                        attrs: {
                            height: t.starSize,
                            width: t.starSize,
                            viewBox: t.viewBox
                        },
                        on: {
                            mousemove: t.mouseMoving,
                            click: t.selected,
                            touchstart: t.touchStart,
                            touchend: t.touchEnd
                        }
                    }, [a("linearGradient", {
                        attrs: {
                            id: t.grad,
                            x1: "0",
                            x2: "100%",
                            y1: "0",
                            y2: "0"
                        }
                    }, [a("stop", {
                        attrs: {
                            offset: t.starFill,
                            "stop-color": t.rtl ? t.getColor(t.inactiveColor) : t.getColor(t.activeColor),
                            "stop-opacity": t.rtl ? t.getOpacity(t.inactiveColor) : t.getOpacity(t.activeColor)
                        }
                    }), a("stop", {
                        attrs: {
                            offset: t.starFill,
                            "stop-color": t.rtl ? t.getColor(t.activeColor) : t.getColor(t.inactiveColor),
                            "stop-opacity": t.rtl ? t.getOpacity(t.activeColor) : t.getOpacity(t.inactiveColor)
                        }
                    })], 1), a("filter", {
                        attrs: {
                            id: t.glowId,
                            height: "130%",
                            width: "130%",
                            filterUnits: "userSpaceOnUse"
                        }
                    }, [a("feGaussianBlur", {
                        attrs: {
                            stdDeviation: t.glow,
                            result: "coloredBlur"
                        }
                    }), a("feMerge", [a("feMergeNode", {
                        attrs: {
                            in: "coloredBlur"
                        }
                    }), a("feMergeNode", {
                        attrs: {
                            in: "SourceGraphic"
                        }
                    })], 1)], 1), t.glowColor && t.glow > 0 ? a("polygon", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.fill > 1,
                            expression: "fill > 1"
                        }],
                        attrs: {
                            points: t.starPointsToString,
                            fill: t.gradId,
                            stroke: t.glowColor,
                            filter: "url(#" + t.glowId + ")",
                            "stroke-width": t.border
                        }
                    }) : t._e(), a("polygon", {
                        attrs: {
                            points: t.starPointsToString,
                            fill: t.gradId,
                            stroke: t.getBorderColor,
                            "stroke-width": t.border,
                            "stroke-linejoin": t.strokeLinejoin
                        }
                    }), a("polygon", {
                        attrs: {
                            points: t.starPointsToString,
                            fill: t.gradId
                        }
                    })], 1)
                }
                  , c = []
                  , d = a("d4aa")
                  , u = a.n(d)
                  , p = {
                    name: "Star",
                    props: {
                        fill: {
                            type: Number,
                            default: 0
                        },
                        points: {
                            type: Array,
                            default() {
                                return []
                            }
                        },
                        size: {
                            type: Number,
                            default: 50
                        },
                        starId: {
                            type: Number,
                            required: !0
                        },
                        activeColor: {
                            type: String,
                            required: !0
                        },
                        inactiveColor: {
                            type: String,
                            required: !0
                        },
                        borderColor: {
                            type: String,
                            default: "#000"
                        },
                        activeBorderColor: {
                            type: String,
                            default: "#000"
                        },
                        borderWidth: {
                            type: Number,
                            default: 0
                        },
                        roundedCorners: {
                            type: Boolean,
                            default: !1
                        },
                        rtl: {
                            type: Boolean,
                            default: !1
                        },
                        glow: {
                            type: Number,
                            default: 0
                        },
                        glowColor: {
                            type: String,
                            default: null,
                            required: !1
                        },
                        animate: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data() {
                        return {
                            starPoints: [19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56],
                            grad: "",
                            glowId: "",
                            isStarActive: !0
                        }
                    },
                    computed: {
                        starPointsToString() {
                            return this.starPoints.join(",")
                        },
                        gradId() {
                            return "url(#" + this.grad + ")"
                        },
                        starSize() {
                            const t = this.roundedCorners && this.borderWidth <= 0 ? parseInt(this.size) - parseInt(this.border) : this.size;
                            return parseInt(t) + parseInt(this.border)
                        },
                        starFill() {
                            return this.rtl ? 100 - this.fill + "%" : this.fill + "%"
                        },
                        border() {
                            return this.roundedCorners && this.borderWidth <= 0 ? 6 : this.borderWidth
                        },
                        getBorderColor() {
                            return this.roundedCorners && this.borderWidth <= 0 ? this.fill <= 0 ? this.inactiveColor : this.activeColor : this.fill <= 0 ? this.borderColor : this.activeBorderColor
                        },
                        maxSize() {
                            return this.starPoints.reduce((function(t, e) {
                                return Math.max(t, e)
                            }
                            ))
                        },
                        viewBox() {
                            return "0 0 " + this.maxSize + " " + this.maxSize
                        },
                        shouldAnimate() {
                            return this.animate && this.isStarActive
                        },
                        strokeLinejoin() {
                            return this.roundedCorners ? "round" : "miter"
                        }
                    },
                    created() {
                        this.starPoints = this.points.length ? this.points : this.starPoints,
                        this.calculatePoints(),
                        this.grad = this.getRandomId(),
                        this.glowId = this.getRandomId()
                    },
                    methods: {
                        mouseMoving(t) {
                            "undefined" !== t.touchAction && this.$emit("star-mouse-move", {
                                event: t,
                                position: this.getPosition(t),
                                id: this.starId
                            })
                        },
                        touchStart() {
                            this.$nextTick(()=>{
                                this.isStarActive = !0
                            }
                            )
                        },
                        touchEnd() {
                            this.$nextTick(()=>{
                                this.isStarActive = !1
                            }
                            )
                        },
                        getPosition(t) {
                            var e = .92 * this.size;
                            const a = this.rtl ? Math.min(t.offsetX, 45) : Math.max(t.offsetX, 1);
                            var s = Math.round(100 / e * a);
                            return Math.min(s, 100)
                        },
                        selected(t) {
                            this.$emit("star-selected", {
                                id: this.starId,
                                position: this.getPosition(t)
                            })
                        },
                        getRandomId() {
                            return Math.random().toString(36).substring(7)
                        },
                        calculatePoints() {
                            this.starPoints = this.starPoints.map((t,e)=>{
                                const a = e % 2 === 0 ? 1.5 * this.border : 0;
                                return this.size / this.maxSize * t + a
                            }
                            )
                        },
                        getColor(t) {
                            return new u.a(t).parseAlphaColor().color
                        },
                        getOpacity(t) {
                            return new u.a(t).parseAlphaColor().opacity
                        }
                    }
                }
                  , h = p;
                a("ab73");
                function f(t, e, a, s, i, r, n, o) {
                    var l, c = "function" === typeof t ? t.options : t;
                    if (e && (c.render = e,
                    c.staticRenderFns = a,
                    c._compiled = !0),
                    s && (c.functional = !0),
                    r && (c._scopeId = "data-v-" + r),
                    n ? (l = function(t) {
                        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
                        t || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                        i && i.call(this, t),
                        t && t._registeredComponents && t._registeredComponents.add(n)
                    }
                    ,
                    c._ssrRegister = l) : i && (l = o ? function() {
                        i.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
                    }
                    : i),
                    l)
                        if (c.functional) {
                            c._injectStyles = l;
                            var d = c.render;
                            c.render = function(t, e) {
                                return l.call(e),
                                d(t, e)
                            }
                        } else {
                            var u = c.beforeCreate;
                            c.beforeCreate = u ? [].concat(u, l) : [l]
                        }
                    return {
                        exports: t,
                        options: c
                    }
                }
                var m = f(h, l, c, !1, null, "ef4bc576", null)
                  , g = m.exports
                  , v = {
                    components: {
                        star: g
                    },
                    model: {
                        prop: "rating",
                        event: "rating-selected"
                    },
                    props: {
                        increment: {
                            type: Number,
                            default: 1
                        },
                        rating: {
                            type: Number,
                            default: 0
                        },
                        roundStartRating: {
                            type: Boolean,
                            default: !0
                        },
                        activeColor: {
                            type: [String, Array],
                            default: "#ffd055"
                        },
                        inactiveColor: {
                            type: String,
                            default: "#d8d8d8"
                        },
                        maxRating: {
                            type: Number,
                            default: 5
                        },
                        starPoints: {
                            type: Array,
                            default() {
                                return []
                            }
                        },
                        starSize: {
                            type: Number,
                            default: 50
                        },
                        showRating: {
                            type: Boolean,
                            default: !0
                        },
                        readOnly: {
                            type: Boolean,
                            default: !1
                        },
                        textClass: {
                            type: String,
                            default: ""
                        },
                        inline: {
                            type: Boolean,
                            default: !1
                        },
                        borderColor: {
                            type: String,
                            default: "#999"
                        },
                        activeBorderColor: {
                            type: [String, Array],
                            default: null
                        },
                        borderWidth: {
                            type: Number,
                            default: 0
                        },
                        roundedCorners: {
                            type: Boolean,
                            default: !1
                        },
                        padding: {
                            type: Number,
                            default: 0
                        },
                        rtl: {
                            type: Boolean,
                            default: !1
                        },
                        fixedPoints: {
                            type: Number,
                            default: null
                        },
                        glow: {
                            type: Number,
                            default: 0
                        },
                        glowColor: {
                            type: String,
                            default: "#fff"
                        },
                        clearable: {
                            type: Boolean,
                            default: !1
                        },
                        activeOnClick: {
                            type: Boolean,
                            default: !1
                        },
                        animate: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data() {
                        return {
                            step: 0,
                            fillLevel: [],
                            currentRating: 0,
                            selectedRating: 0,
                            ratingSelected: !1
                        }
                    },
                    computed: {
                        formattedRating() {
                            return null === this.fixedPoints ? this.currentRating : this.currentRating.toFixed(this.fixedPoints)
                        },
                        shouldRound() {
                            return this.ratingSelected || this.roundStartRating
                        },
                        margin() {
                            return this.padding + this.borderWidth
                        },
                        activeColors() {
                            return Array.isArray(this.activeColor) ? this.padColors(this.activeColor, this.maxRating, this.activeColor.slice(-1)[0]) : new Array(this.maxRating).fill(this.activeColor)
                        },
                        currentActiveColor() {
                            return this.activeOnClick ? this.selectedRating > 0 ? this.activeColors[Math.ceil(this.selectedRating) - 1] : this.inactiveColor : this.currentRating > 0 ? this.activeColors[Math.ceil(this.currentRating) - 1] : this.inactiveColor
                        },
                        activeBorderColors() {
                            if (Array.isArray(this.activeBorderColor))
                                return this.padColors(this.activeBorderColor, this.maxRating, this.activeBorderColor.slice(-1)[0]);
                            let t = this.activeBorderColor ? this.activeBorderColor : this.borderColor;
                            return new Array(this.maxRating).fill(t)
                        },
                        currentActiveBorderColor() {
                            return this.activeOnClick ? this.selectedRating > 0 ? this.activeBorderColors[Math.ceil(this.selectedRating) - 1] : this.borderColor : this.currentRating > 0 ? this.activeBorderColors[Math.ceil(this.currentRating) - 1] : this.borderColor
                        }
                    },
                    watch: {
                        rating(t) {
                            this.currentRating = t,
                            this.selectedRating = t,
                            this.createStars(this.shouldRound)
                        }
                    },
                    created() {
                        this.step = 100 * this.increment,
                        this.currentRating = this.rating,
                        this.selectedRating = this.currentRating,
                        this.createStars(this.roundStartRating)
                    },
                    methods: {
                        setRating(t, e) {
                            if (!this.readOnly) {
                                const a = this.rtl ? (100 - t.position) / 100 : t.position / 100;
                                this.currentRating = (t.id + a - 1).toFixed(2),
                                this.currentRating = this.currentRating > this.maxRating ? this.maxRating : this.currentRating,
                                e ? (this.createStars(!0, !0),
                                this.clearable && this.currentRating === this.selectedRating ? this.selectedRating = 0 : this.selectedRating = this.currentRating,
                                this.$emit("rating-selected", this.selectedRating),
                                this.ratingSelected = !0) : (this.createStars(!0, !this.activeOnClick),
                                this.$emit("current-rating", this.currentRating))
                            }
                        },
                        resetRating() {
                            this.readOnly || (this.currentRating = this.selectedRating,
                            this.createStars(this.shouldRound))
                        },
                        createStars(t=!0, e=!0) {
                            t && this.round();
                            for (var a = 0; a < this.maxRating; a++) {
                                let t = 0;
                                a < this.currentRating && (t = this.currentRating - a > 1 ? 100 : 100 * (this.currentRating - a)),
                                e && (this.fillLevel[a] = Math.round(t))
                            }
                        },
                        round() {
                            var t = 1 / this.increment;
                            this.currentRating = Math.min(this.maxRating, Math.ceil(this.currentRating * t) / t)
                        },
                        padColors(t, e, a) {
                            return Object.assign(new Array(e).fill(a), t)
                        }
                    }
                }
                  , b = v
                  , _ = (a("2b2b"),
                f(b, n, o, !1, null, "fde73a0c", null))
                  , w = _.exports
                  , C = w;
                e["default"] = C
            }
        })
    },
    "6b75": function(t, e, a) {
        "use strict";
        function s(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var a = 0, s = new Array(e); a < e; a++)
                s[a] = t[a];
            return s
        }
        a.d(e, "a", (function() {
            return s
        }
        ))
    },
    "6fc7": function(t, e, a) {
        "use strict";
        var s = a("f0f4")
          , i = a.n(s);
        i.a
    },
    7699: function(t, e, a) {},
    "819a": function(t, e, a) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "card p-0 dp-slide-fade-in-right",
                staticStyle: {
                    "box-shadow": "none"
                }
            }, [a("common", {
                ref: "common"
            }), t.hideTopBar ? t._e() : a("div", {
                staticClass: "p-1 bg-gray-200"
            }, [a("div", {
                staticClass: "pull-right c-pointer px-2",
                on: {
                    click: t.CloseView
                }
            }, [a("i", {
                staticClass: "fa fa-chevron-right pt-2",
                staticStyle: {
                    "font-size": "16px"
                }
            })])]), t.hideTopBar ? t._e() : a("div", {
                staticClass: "px-3 py-0",
                style: t.overdueTask ? "background-color: #ec8f9942" : "background-color: #e8e8e8"
            }, [a("div", [a("div", [a("div", {
                staticClass: "solo-card-title col-12 p-0 dp-slide-fade-in-right",
                staticStyle: {
                    "font-size": "17px"
                }
            }, [t.taskData.isSubTask ? a("i", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "fa fa-mail-reply-all fa-rotate-180 mr-1 text-primary",
                attrs: {
                    title: "This is a subtask"
                }
            }) : t._e(), t._l(t.breadCrumbList, (function(e, s) {
                return a("span", {
                    key: "crumb" + s,
                    staticClass: "c-pointer",
                    class: s == t.breadCrumbList.length - 1 ? "text-primary" : "text-gray-900",
                    on: {
                        click: function(a) {
                            return t.breadCrumbClicked(e, s)
                        }
                    }
                }, [t._v(t._s(e.number)), s != t.breadCrumbList.length - 1 ? a("i", {
                    staticClass: "fa fa-chevron-right mx-1"
                }) : t._e()])
            }
            ))], 2), t.taskData.title ? a("div", {
                staticClass: "col-12 p-0 font-weight-600",
                staticStyle: {
                    "font-size": "20px"
                }
            }, [t._v(" " + t._s(t.taskData.title) + " ")]) : t._e(), t.taskData.taskDescription ? a("div", {
                staticClass: "col-12 p-0 mb-1 font-weight-light border-bottom",
                staticStyle: {
                    "font-size": "17px"
                }
            }, [t._v(" " + t._s(t.taskData.taskDescription) + " ")]) : t._e()]), a("div", {
                staticClass: "row mx-0"
            }, [a("div", {
                staticClass: "col-lg-4 col-md-6 row form-group",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("span", [t._v("Assigned to")]), t._v(": "), t.taskData.selfAssigned ? a("span", {
                staticClass: "text-primary font-weight-bold ml-1"
            }, [t._v("Self ")]) : !t.taskData.selfAssigned && t.taskData.assignedTo && 1 == t.taskData.assignedTo["length"] ? a("span", {
                staticClass: "text-primary font-weight-bold ml-1"
            }, [t._v(t._s(t.taskData.assignees) + " ")]) : !t.taskData.selfAssigned && t.taskData.assignedTo ? a("span", {
                staticClass: "ml-1 c-pointer font-weight-bold",
                staticStyle: {
                    "font-size": "12px",
                    color: "#460069"
                }
            }, [a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                attrs: {
                    title: t.taskData.assignees
                }
            }, [a("i", {
                staticClass: "fa fa-user-o"
            }), t._v(" +"), a("span", [t._v(t._s(t.taskData.assignedTo && t.taskData.assignedTo.length))])])]) : t._e(), t.taskData.awaitingAcceptanceStatus ? a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                attrs: {
                    title: "This task is awaiting acceptance"
                }
            }, [a("i", {
                staticClass: "fa fa-clock-o pl-1 text-muted"
            })]) : t._e()]), a("div", {
                staticClass: "col-lg-4 col-md-6 row form-group",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("span", [t._v("Created by")]), t._v(": "), a("span", {
                staticClass: "ml-1 text-primary font-weight-bold"
            }, [t._v(t._s(t.taskData.createdByName) + " ")])]), a("div", {
                staticClass: "col-lg-4 col-md-6 row form-group",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("span", {
                staticClass: "pr-1"
            }, [t._v(" Created on: ")]), a("span", {
                staticClass: "ml-1 text-primary font-weight-bold"
            }, [t._v(" " + t._s(t.normaliseDate(t.taskData.createdAt)) + " "), a("span", {
                staticClass: "text-gray-900 font-weight-normal"
            }, [t._v(" at ")]), t._v(" " + t._s(t.normaliseTime(t.taskData.createdAt)) + " ")])]), a("div", {
                staticClass: "col-lg-4 col-md-6 row form-group",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("span", {
                staticClass: "pr-1"
            }, [t._v(" Due on: ")]), a("span", {
                staticClass: "ml-1 text-primary font-weight-bold"
            }, [t._v(" " + t._s(t.normaliseDate(t.taskData.targetDate)) + " "), a("span", {
                staticClass: "text-gray-900 font-weight-normal"
            }, [t._v(" at ")]), t._v(" " + t._s(t.taskData.targetTime) + " ")])]), a("div", {
                staticClass: "col-lg-4 col-md-6 row form-group",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [t._v(" Task Type: "), t.taskData.typeName ? a("span", {
                staticClass: "ml-1 text-primary font-weight-bold"
            }, [t._v(t._s(t.taskData.typeName) + " ")]) : t._e()]), t.taskData.isSubTask ? a("div", {
                staticClass: "col-lg-4 col-md-6 row form-group",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [t._v(" Master Task "), a("span", {
                staticClass: "ml-1 text-primary font-weight-bold"
            }, [t._v(t._s(t.taskData.masterNumber) + " ")])]) : t._e()])])]), t.hideTopBar ? t._e() : a("div", {
                staticClass: "w-100 px-3 pb-0 row mx-0 mt-2 border-bottom",
                staticStyle: {}
            }, [a("div", {
                staticClass: "mx-2 row form-group c-default"
            }, [t.overdueTask ? a("div", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover.v-danger",
                    modifiers: {
                        hover: !0,
                        "v-danger": !0
                    }
                }],
                staticClass: "badge badge-danger",
                attrs: {
                    title: "This task has exceeded the due date!"
                }
            }, [t._v(" Overdue ")]) : t._e()]), t.taskData.clonable ? a("div", {
                staticClass: "mx-1 row form-group c-default"
            }, [a("span", {
                staticClass: "badge badge-primary"
            }, [t._v(" Clonable")])]) : t._e(), t.taskData.delegatable ? a("div", {
                staticClass: "mx-1 row form-group c-default"
            }, [a("span", {
                staticClass: "badge badge-primary"
            }, [t._v(" Delegatable")])]) : t._e(), t.taskData.tags ? a("div", {
                staticClass: "mx-1 row form-group"
            }, t._l(t.taskData.tags, (function(e, s) {
                return a("span", {
                    key: "tag" + s,
                    staticClass: "badge badge-warning mx-1 c-default",
                    staticStyle: {
                        "background-color": "#703ba9"
                    }
                }, [t._v(" " + t._s(e.value))])
            }
            )), 0) : t._e(), a("div", {
                staticClass: "mx-2 row form-group c-default"
            }, [t.taskData.iscloned ? a("div", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "badge badge-primary",
                attrs: {
                    title: "This task is cloned from another task"
                }
            }, [t._v(" Cloned ")]) : t._e()]), a("div", {
                staticClass: "mx-2 row form-group c-default"
            }, [t.taskData.isSubTask ? a("div", {
                staticClass: "badge badge-primary"
            }, [t._v("SubTask")]) : t._e(), 100 == t.taskData.status ? a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "badge badge-dark mx-2 bg-success",
                staticStyle: {
                    "font-size": "12px"
                },
                attrs: {
                    title: t.normaliseDate(t.taskData.completedDate) + " at " + t.normaliseTime(t.taskData.completedDate)
                }
            }, [t._v("Completed")]) : t._e()])]), a("div", {
                staticClass: "mb-5"
            }, [a("div", [t.taskData.subTasks && t.taskData.subTasks["length"] > 0 ? a("div", {
                staticClass: "row w-100"
            }, [[a("b-row", {
                staticClass: "w-100 mx-0"
            }, [a("b-col", {
                staticClass: "pl-0"
            }, [a("div", [a("ul", {
                staticClass: "list list-unstyled dp-slide-fade-in-left"
            }, [t._l(t.taskData.subTasks, (function(e, s) {
                return [a("li", {
                    key: t.collapseLevel1Name + "substsk" + s,
                    staticClass: "mx-2 w-100 c-default",
                    staticStyle: {
                        "font-size": "14px"
                    }
                }, [a("button", {
                    staticClass: "btn text-left bg-white font-weight-normal border-bottom pb-1 border-left ml-3",
                    class: t.collapseLevel1Name + "subsctskaccordion1-" + s,
                    on: {
                        click: function(e) {
                            return t.$root.$emit("bv::toggle::collapse", t.collapseLevel1Name + "subsctskaccordion1-" + s)
                        }
                    }
                }, [e.isSubTask || e.masterTaskId != t.taskData.id ? e.isSubTask && e.masterTaskId == t.taskData.id ? a("i", {
                    staticClass: "fa fa-mail-reply fa-rotate-180 mr-1 text-primary",
                    staticStyle: {
                        transition: "all 0.3s ease"
                    }
                }) : a("i", {
                    staticClass: "fa fa-arrows-h fa-rotate-180 mr-1 text-primary",
                    staticStyle: {
                        transition: "all 0.3s ease"
                    }
                }) : a("i", {
                    staticClass: "fa fa-copy mr-1 text-primary",
                    staticStyle: {
                        transition: "all 0.3s ease"
                    }
                }), a("span", {
                    staticClass: "mx-2 badge badge-outline-primary",
                    staticStyle: {
                        "font-size": "12px"
                    }
                }, [e.isSubTask || e.masterTaskId != t.taskData.id ? e.isSubTask && e.masterTaskId == t.taskData.id ? a("span", [t._v("Subtask")]) : a("span", [t._v("Referred")]) : a("span", [t._v("Cloned")])]), a("span", {
                    staticClass: "badge badge-dark bg-success",
                    staticStyle: {
                        "font-size": "12px"
                    }
                }, [t._v(t._s(e.number))]), a("span", {
                    staticClass: "mx-2 text-primary font-weight-bold"
                }, [t._v(t._s(e.title))]), a("span", {
                    staticClass: "text-danger",
                    staticStyle: {
                        "border-right": "2px solid",
                        opacity: "0.9"
                    }
                }), a("span", {
                    staticClass: "mx-2",
                    staticStyle: {
                        "font-size": "13px"
                    }
                }, [a("span", {
                    staticClass: "badge badge-primary"
                }, [t._v(t._s(t.normaliseDate(e.createdAt)))]), 100 == e.status ? a("span", {
                    directives: [{
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover",
                        modifiers: {
                            hover: !0
                        }
                    }],
                    staticClass: "badge badge-dark mx-2 badge-outline-success",
                    staticStyle: {
                        "font-size": "12px"
                    },
                    attrs: {
                        title: t.normaliseDate(e.completedDate) + " at " + t.normaliseTime(e.completedDate)
                    }
                }, [t._v("Completed")]) : t._e()])]), a("b-collapse", {
                    staticClass: "border-right border-bottom mb-2 ml-3",
                    attrs: {
                        id: t.collapseLevel1Name + "subsctskaccordion1-" + s,
                        accordion: "my-" + t.collapseLevel1Name + "subsctskaccordion1",
                        role: "tabpanel"
                    }
                }, [a("div", [a("span", {
                    staticClass: "d-block px-4 py-2"
                }, [e.createdByName ? a("span", [a("span", [t._v("Created by")]), a("span", {
                    staticClass: "ml-1 text-primary font-weight-bold"
                }, [t._v(t._s(e.createdByName))]), a("span", {
                    staticClass: "text-danger mx-2",
                    staticStyle: {
                        "border-right": "2px solid",
                        opacity: "0.9"
                    }
                })]) : t._e(), a("span", [t._v("Assigned to")]), e.selfAssigned ? a("span", {
                    staticClass: "text-primary font-weight-bold ml-1"
                }, [t._v("Self Assigned ")]) : !e.selfAssigned && e.assignedTo && 1 == e.assignedTo.length ? a("span", {
                    staticClass: "text-primary font-weight-bold ml-1"
                }, [a("b-button", {
                    directives: [{
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover.bottomLeft",
                        modifiers: {
                            hover: !0,
                            bottomLeft: !0
                        }
                    }],
                    staticClass: "btn-flat border-0 p-0 font-weight-bold bg-transparent primary-text",
                    attrs: {
                        id: "subAssigneesNamepopover-target-" + s,
                        variant: "",
                        title: "Click to show/hide assignees"
                    },
                    on: {
                        click: function(a) {
                            return t.getSelectedAssigneesList(e)
                        }
                    }
                }, [t._v(" " + t._s(e.assignees) + " ")]), e.awaitingAcceptanceStatus ? a("span", {
                    directives: [{
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover",
                        modifiers: {
                            hover: !0
                        }
                    }],
                    attrs: {
                        title: "This task is awaiting acceptance"
                    }
                }, [a("i", {
                    staticClass: "fa fa-clock-o pl-1 text-muted"
                })]) : t._e(), a("b-popover", {
                    attrs: {
                        target: "subAssigneesNamepopover-target-" + s,
                        triggers: "click",
                        placement: "top"
                    },
                    scopedSlots: t._u([{
                        key: "title",
                        fn: function() {
                            return [t._v(t._s(e.assignees))]
                        },
                        proxy: !0
                    }], null, !0)
                }, [a("div", {
                    staticClass: "row mx-0",
                    staticStyle: {
                        "overflow-x": "auto"
                    }
                }, t._l(t.selectedAssigneesList, (function(e, s) {
                    return a("div", {
                        key: "person" + s,
                        staticClass: "col-12 border-bottom py-1 mx-0 row px-1 text-center"
                    }, [a("i", {
                        staticClass: "fa fa-user-circle-o text-primary fa-2x"
                    }), a("div", {
                        staticClass: "col px-2 text-left",
                        staticStyle: {
                            "align-self": "center"
                        }
                    }, [t._v(" " + t._s(e.memberName) + " ")])])
                }
                )), 0)])], 1) : !e.selfAssigned && e.assignedTo ? a("span", {
                    staticClass: "ml-1 c-pointer font-weight-bold",
                    staticStyle: {
                        "font-size": "12px",
                        color: "#460069"
                    }
                }, [a("span", {
                    directives: [{
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover",
                        modifiers: {
                            hover: !0
                        }
                    }],
                    attrs: {
                        title: e.assignees
                    }
                }, [a("i", {
                    staticClass: "fa fa-user-o"
                }), t._v(" +"), a("span", [t._v(t._s(e.assignedTo && e.assignedTo.length))])])]) : t._e(), a("span", {
                    staticClass: "text-danger mx-2",
                    staticStyle: {
                        "border-right": "2px solid",
                        opacity: "0.9"
                    }
                }), a("span", [t._v("Due on")]), a("span", {
                    staticClass: "text-primary font-weight-bold"
                }, [t._v(" " + t._s(t.normaliseDate(e.targetDate)) + " "), a("span", {
                    staticClass: "text-gray-900 font-weight-normal"
                }, [t._v(" at ")]), t._v(" " + t._s(e.targetTime) + " ")])]), a("taskCardView", {
                    attrs: {
                        hideTopBar: !0,
                        taskDataProp: e,
                        collapseLevel1Name: "clvl-subscr" + e.id + "-",
                        adnlCollapseLevel1Name: "adclvl-subscr" + e.id + "-"
                    }
                })], 1)])], 1)]
            }
            ))], 2)])])], 1)]], 2) : t._e()]), t._l(t.taskData.additionalData, (function(e, s) {
                return a("div", {
                    key: t.adnlCollapseLevel1Name + "adt" + s,
                    staticClass: "mb-1 mt-1 px-2 dp-slide-fade-in-left"
                }, [a("button", {
                    staticClass: "btn col-12 text-left font-weight-bold d-flex align-items-center",
                    class: t.adnlCollapseLevel1Name + "accordion-" + s,
                    staticStyle: {
                        "background-color": "#f5f1f9"
                    },
                    on: {
                        click: function(e) {
                            return t.$root.$emit("bv::toggle::collapse", t.adnlCollapseLevel1Name + "accordion-" + s)
                        }
                    }
                }, [a("i", {
                    staticClass: "fa fa-chevron-right mr-1 rotatable text-primary",
                    staticStyle: {
                        transition: "all 0.3s ease"
                    }
                }), a("div", {
                    staticClass: "trim-text"
                }, [t._v(" " + t._s(e.stepName) + " "), a("span", {
                    staticClass: "text-danger mx-2",
                    staticStyle: {
                        "border-right": "2px solid",
                        opacity: "0.9"
                    }
                }), t._v(" " + t._s(e.user) + " "), a("span", {
                    staticClass: "text-danger mx-2",
                    staticStyle: {
                        "border-right": "2px solid",
                        opacity: "0.9"
                    }
                }), a("span", {
                    staticClass: "badge badge-outline-primary",
                    staticStyle: {
                        "font-size": "10px"
                    }
                }, [t._v(t._s(t.normaliseDate(e.createdAt)) + " "), a("span", {
                    staticClass: "text-gray-900 font-weight-normal"
                }, [t._v("at")]), t._v(" " + t._s(t.normaliseTime(e.createdAt)) + " ")])])]), a("b-collapse", {
                    attrs: {
                        id: t.adnlCollapseLevel1Name + "accordion-" + s,
                        accordion: "my-" + t.adnlCollapseLevel1Name + "accordion",
                        role: "tabpanel"
                    }
                }, [a("div", [a("adnlDataViewer", {
                    staticClass: "mt-1 ml-2",
                    attrs: {
                        viewData: e,
                        allowtoRemoveAttachment: t.taskData.status < 95
                    },
                    on: {
                        deleteAttchment: t.deleteAttchment
                    }
                })], 1), e.subTasks && e.subTasks["length"] > 0 ? a("div", {
                    staticClass: "row w-100"
                }, [[a("b-row", {
                    staticClass: "w-100 mx-0"
                }, [a("b-col", {
                    staticClass: "pl-0"
                }, [a("div", [a("ul", {
                    staticClass: "list list-unstyled dp-slide-fade-in-left"
                }, [t._l(e.subTasks, (function(e, s) {
                    return [a("li", {
                        key: t.collapseLevel1Name + "substsk" + s,
                        staticClass: "mx-2 w-100 c-default",
                        staticStyle: {
                            "font-size": "14px"
                        }
                    }, [a("button", {
                        staticClass: "btn text-left bg-white font-weight-normal border-bottom pb-1 border-left ml-3",
                        class: t.collapseLevel1Name + "subsctskaccordion-" + s,
                        on: {
                            click: function(e) {
                                return t.$root.$emit("bv::toggle::collapse", t.collapseLevel1Name + "subsctskaccordion-" + s)
                            }
                        }
                    }, [e.isSubTask || e.masterTaskId != t.taskData.id ? e.isSubTask && e.masterTaskId == t.taskData.id ? a("i", {
                        staticClass: "fa fa-mail-reply fa-rotate-180 mr-1 text-primary",
                        staticStyle: {
                            transition: "all 0.3s ease"
                        }
                    }) : a("i", {
                        staticClass: "fa fa-arrows-h fa-rotate-180 mr-1 text-primary",
                        staticStyle: {
                            transition: "all 0.3s ease"
                        }
                    }) : a("i", {
                        staticClass: "fa fa-copy mr-1 text-primary",
                        staticStyle: {
                            transition: "all 0.3s ease"
                        }
                    }), a("span", {
                        staticClass: "mx-2 badge badge-outline-primary",
                        staticStyle: {
                            "font-size": "12px"
                        }
                    }, [e.isSubTask || e.masterTaskId != t.taskData.id ? e.isSubTask && e.masterTaskId == t.taskData.id ? a("span", [t._v("Subtask")]) : a("span", [t._v("Referred")]) : a("span", [t._v("Cloned")])]), a("span", {
                        staticClass: "badge badge-dark bg-success",
                        staticStyle: {
                            "font-size": "12px"
                        }
                    }, [t._v(t._s(e.number))]), a("span", {
                        staticClass: "mx-2 text-primary font-weight-bold"
                    }, [t._v(t._s(e.title))]), a("span", {
                        staticClass: "text-danger",
                        staticStyle: {
                            "border-right": "2px solid",
                            opacity: "0.9"
                        }
                    }), a("span", {
                        staticClass: "mx-2",
                        staticStyle: {
                            "font-size": "13px"
                        }
                    }, [a("span", {
                        staticClass: "badge badge-primary"
                    }, [t._v(t._s(t.normaliseDate(e.createdAt)))]), 100 == e.status ? a("span", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        staticClass: "badge badge-dark mx-2 badge-outline-success",
                        staticStyle: {
                            "font-size": "12px"
                        },
                        attrs: {
                            title: t.normaliseDate(e.completedDate) + " at " + t.normaliseTime(e.completedDate)
                        }
                    }, [t._v("Completed")]) : t._e()])]), a("b-collapse", {
                        staticClass: "border-right border-top border-bottom mb-2 ml-3",
                        attrs: {
                            id: t.collapseLevel1Name + "subsctskaccordion-" + s,
                            accordion: "my-" + t.collapseLevel1Name + "subsctskaccordion",
                            role: "tabpanel"
                        }
                    }, [a("div", [a("span", {
                        staticClass: "d-block px-4 py-2"
                    }, [e.createdByName ? a("span", [a("span", [t._v("Created by")]), a("span", {
                        staticClass: "ml-1 text-primary font-weight-bold"
                    }, [t._v(t._s(e.createdByName))]), a("span", {
                        staticClass: "text-danger mx-2",
                        staticStyle: {
                            "border-right": "2px solid",
                            opacity: "0.9"
                        }
                    })]) : t._e(), a("span", [t._v("Assigned to")]), e.selfAssigned ? a("span", {
                        staticClass: "text-primary font-weight-bold ml-1"
                    }, [t._v("Self Assigned ")]) : !e.selfAssigned && e.assignedTo && 1 == e.assignedTo.length ? a("span", {
                        staticClass: "text-primary font-weight-bold ml-1"
                    }, [a("b-button", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover.bottomLeft",
                            modifiers: {
                                hover: !0,
                                bottomLeft: !0
                            }
                        }],
                        staticClass: "btn-flat border-0 p-0 font-weight-bold bg-transparent primary-text",
                        attrs: {
                            id: t.collapseLevel1Name + "popover-target-" + s,
                            variant: "",
                            title: "Click to show/hide assignees"
                        },
                        on: {
                            click: function(a) {
                                return t.getSelectedAssigneesList(e)
                            }
                        }
                    }, [t._v(" " + t._s(e.assignees) + " ")]), a("b-popover", {
                        attrs: {
                            target: t.collapseLevel1Name + "popover-target-" + s,
                            triggers: "click",
                            placement: "top"
                        },
                        scopedSlots: t._u([{
                            key: "title",
                            fn: function() {
                                return [t._v(t._s(e.assignees))]
                            },
                            proxy: !0
                        }], null, !0)
                    }, [a("div", {
                        staticClass: "row mx-0",
                        staticStyle: {
                            "overflow-x": "auto"
                        }
                    }, t._l(t.selectedAssigneesList, (function(e, s) {
                        return a("div", {
                            key: "person" + s,
                            staticClass: "col-12 border-bottom py-1 mx-0 row px-1 text-center"
                        }, [a("i", {
                            staticClass: "fa fa-user-circle-o text-primary fa-2x"
                        }), a("div", {
                            staticClass: "col px-2 text-left",
                            staticStyle: {
                                "align-self": "center"
                            }
                        }, [t._v(" " + t._s(e.memberName) + " ")])])
                    }
                    )), 0)])], 1) : !e.selfAssigned && e.assignedTo ? a("span", {
                        staticClass: "ml-1 c-pointer font-weight-bold",
                        staticStyle: {
                            "font-size": "12px",
                            color: "#460069"
                        }
                    }, [a("span", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        attrs: {
                            title: e.assignees
                        }
                    }, [a("i", {
                        staticClass: "fa fa-user-o"
                    }), t._v(" +"), a("span", [t._v(t._s(e.assignedTo && e.assignedTo.length))])])]) : t._e(), a("span", {
                        staticClass: "text-danger mx-2",
                        staticStyle: {
                            "border-right": "2px solid",
                            opacity: "0.9"
                        }
                    }), a("span", [t._v("Due on")]), a("span", {
                        staticClass: "text-primary font-weight-bold"
                    }, [t._v(" " + t._s(t.normaliseDate(e.targetDate)) + " "), a("span", {
                        staticClass: "text-gray-900 font-weight-normal"
                    }, [t._v(" at ")]), t._v(" " + t._s(e.targetTime) + " ")])]), a("taskCardView", {
                        attrs: {
                            hideTopBar: !0,
                            taskDataProp: e,
                            collapseLevel1Name: "clvl-subscr" + e.id + "-",
                            adnlCollapseLevel1Name: "adclvl-subscr" + e.id + "-"
                        }
                    })], 1)])], 1)]
                }
                ))], 2)])])], 1)]], 2) : t._e()])], 1)
            }
            )), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.taskData.upComingSteps && t.taskData.upComingSteps["length"] > 0,
                    expression: "taskData.upComingSteps && taskData.upComingSteps['length'] > 0"
                }],
                staticClass: "col-12 h5 font-weight-600 pt-2"
            }, [t._v(" Upcoming ")]), a("div", {
                staticClass: "col-12 px-2",
                staticStyle: {
                    opacity: "0.8"
                }
            }, t._l(t.taskData.upComingSteps, (function(e, s) {
                return a("div", {
                    key: "upcomingStepName" + s,
                    staticClass: "align-items-center btn col-12 d-flex font-weight-bold text-left mb-1 c-default",
                    staticStyle: {
                        "background-color": "rgb(245, 241, 249)",
                        cursor: "default"
                    }
                }, [a("i", {
                    staticClass: "fa fa-chevron-right mr-1 pl-2 rotatable"
                }), t._v(" " + t._s(e.stepName) + " ")])
            }
            )), 0), t.hideTopBar ? t._e() : a("div", {
                staticClass: "t-a-r pr-2 pt-2"
            }, [t.isShowCompleteButton() ? a("div", {
                staticClass: "btn btn-sm btn-success px-2 py-2",
                on: {
                    click: function(e) {
                        return t.openmarkTaskComplete()
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-check"
            }), a("span", {
                staticClass: "pl-1"
            }, [t._v("Mark Complete")])]) : t._e()])], 2), a("customModal", {
                ref: "taskCompleteModal",
                staticStyle: {
                    "z-index": "2000"
                },
                attrs: {
                    modalClass: "medium",
                    defaultCloseBtn: "false"
                },
                on: {
                    doOnModalClose: t.customContentModalClosed,
                    ModalBtnClosed: t.customContentModalClosed
                }
            }, [a("div", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("Please fill in these details")]), a("div", {
                staticClass: "pl-0",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [a("div", {
                staticStyle: {
                    "overflow-x": "hidden",
                    "overflow-y": "auto",
                    "max-height": "80vh"
                }
            }, [a("ValidationObserver", {
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        var s = e.invalid
                          , i = e.handleSubmit;
                        return [a("dpDynamic", {
                            staticClass: "native-validator-parent-4",
                            attrs: {
                                schema: t.taskCompletionschema.schema,
                                model: t.taskCompletionschema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.taskCompletionschema, "model", e)
                                }
                            }
                        }), a("button", {
                            staticClass: "btn btn-success pull-right",
                            attrs: {
                                disabled: s
                            },
                            on: {
                                click: function(e) {
                                    i(t.Completed(t.taskCompletionschema.model))
                                }
                            }
                        }, [t._v(" Complete ")])]
                    }
                }])
            })], 1)])])], 1)
        }
          , i = []
          , r = (a("a434"),
        a("a9e3"),
        a("96cf"),
        a("1da1"))
          , n = a("7bb1")
          , o = a("5a0c")
          , l = a.n(o)
          , c = a("7722")
          , d = a("7c15")
          , u = a("113f")
          , p = a("01b4")
          , h = a("50e2")
          , f = {
            name: "taskCardView",
            components: {
                common: c["a"],
                adnlDataViewer: p["a"],
                taskCardView: b,
                customModal: h["a"],
                ValidationObserver: n["a"]
            },
            mixins: [u["a"]],
            props: {
                taskDataProp: [Object, Array],
                hideTopBar: {
                    type: Boolean,
                    default: !1
                },
                taskId: [String, Number],
                inititalTaskCode: [String, Number],
                breadCrumbList: [Array, Object],
                collapseLevel1Name: {
                    type: String,
                    default: "clvl1-"
                },
                adnlCollapseLevel1Name: {
                    type: String,
                    default: "adclvl1-"
                },
                selectedTab: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    taskData: {
                        subTasks: [],
                        refferencedTasks: []
                    },
                    showTask: !1,
                    remarks: "",
                    qeKey: 0,
                    reorder: [{
                        name: "Pending",
                        list: [{
                            name: "Task 1",
                            id: 1
                        }, {
                            name: "Task 2",
                            id: 1
                        }, {
                            name: "Task 3",
                            id: 2
                        }, {
                            name: "Task 4",
                            id: 3
                        }, {
                            name: "Task 5",
                            id: 4
                        }]
                    }],
                    overdueTask: !1,
                    adnlDt: {},
                    selectedAssigneesList: [],
                    taskCompletionschema: {
                        schema: {
                            slot: "slot1",
                            submitUrl: "/test/api/submit",
                            rows: [{
                                styles: {
                                    class: "row"
                                },
                                fields: [{
                                    type: "",
                                    label: "Description",
                                    model: "description",
                                    props: {
                                        default: ""
                                    },
                                    styles: {
                                        class: "col-12",
                                        style: ""
                                    },
                                    control: "text",
                                    component: "dpTextarea",
                                    attributes: {
                                        name: "Text Area",
                                        cssStyle: "resize:none",
                                        disabled: "",
                                        readonly: "",
                                        maxlength: 200,
                                        placeholder: "Type here"
                                    },
                                    validation: {
                                        required: !1
                                    }
                                }]
                            }]
                        },
                        model: {}
                    }
                }
            },
            watch: {
                remarks: function(t) {
                    console.log(t)
                }
            },
            mounted: function() {
                this.taskDataProp ? (this.taskData = this.taskDataProp,
                this.taskData && this.taskData.tags && (this.taskData.tags = JSON.parse(this.taskData.tags)),
                this.overdueTask = this.isOverDue(this.taskData)) : this.getTaskById(),
                this.$root.$on("bv::collapse::state", (function(t, e) {
                    if (e) {
                        var a = document.querySelector("." + t + " > i.rotatable");
                        a && a.classList.add("fa-rotate-90")
                    } else {
                        var s = document.querySelector("." + t + " > i.rotatable");
                        s && s.classList.remove("fa-rotate-90")
                    }
                }
                ))
            },
            beforeDestroy: function() {
                this.$root.$off("bv::collapse::state", (function() {}
                ))
            },
            methods: {
                getTaskById: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/getbyid";
                    Object(d["a"])(e, "post", {
                        id: this.taskId
                    }).then((function(e) {
                        t.taskData = e.data.data,
                        t.taskData && t.taskData.tags && (t.taskData.tags = JSON.parse(t.taskData.tags)),
                        t.overdueTask = t.isOverDue(t.taskData)
                    }
                    ))
                },
                getAdnlData: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/GetTaskAdddata?TaskId=" + this.taskData.id + "&TypeId=" + this.taskData.taskType;
                    Object(d["a"])(e, "get", "").then((function(e) {
                        return t.adnlDt = e.data.data
                    }
                    ))
                },
                breadCrumbClicked: function(t, e) {
                    console.log(this.breadCrumbList[e]),
                    this.breadCrumbList.splice(e + 1),
                    this.getTaskById(),
                    this.$emit("OpenSubTaskcard", t)
                },
                subtask: function(t) {
                    this.breadCrumbList.push({
                        id: t.id,
                        number: t.number
                    }),
                    this.$emit("OpenSubTaskcard", t)
                },
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : l()(t).format("DD-MM-YYYY")
                },
                normaliseTime: function(t) {
                    return null == t || void 0 == t ? "-" : l()(t).format("hh:mm:ss")
                },
                CloseView: function() {
                    this.$emit("taskViewClose")
                },
                openmarkTaskComplete: function() {
                    this.$refs.taskCompleteModal.Open()
                },
                Completed: function(t) {
                    var e = this;
                    t.captions = {
                        description: "Description"
                    };
                    var a = this.$refs.common
                      , s = function() {
                        var a = Object(r["a"])(regeneratorRuntime.mark((function a() {
                            var s, i;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        s = {
                                            taskId: e.taskData.id,
                                            parameters: JSON.stringify(t)
                                        },
                                        i = "/api/bitTask/Tasks/MarkAsComplete",
                                        Object(d["a"])(i, "post", s).then((function(t) {
                                            e.$refs.common.ManageResponse(t),
                                            e.getTaskById(),
                                            e.$refs.taskCompleteModal.Close(),
                                            e.$emit("refreshTaskList")
                                        }
                                        )).catch((function(t) {
                                            e.getTaskById(),
                                            e.$refs.common.ManageResponse(t.response)
                                        }
                                        ));
                                    case 3:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )));
                        return function() {
                            return a.apply(this, arguments)
                        }
                    }();
                    a.ConfirmBox("Are you sure?", "This will mark the task as completed", "warning", "Yes", "No", s)
                },
                getSelectedAssigneesList: function(t) {
                    var e = this
                      , a = "/api/bitTask/TaskGroupMembers/getbygroupid";
                    console.log(t);
                    var s = t.assignedTo[0];
                    Object(d["a"])(a, "post", {
                        id: s
                    }).then((function(t) {
                        console.log(t.data.data),
                        e.selectedAssigneesList = t.data.data
                    }
                    )).catch((function(t) {
                        return console.log(t)
                    }
                    ))
                },
                customContentModalClosed: function() {},
                deleteAttchment: function(t) {
                    var e = this
                      , a = this.$refs.common
                      , s = function() {
                        var a = Object(r["a"])(regeneratorRuntime.mark((function a() {
                            var s, i;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        s = {
                                            taskId: e.taskData.id,
                                            attachmentId: t
                                        },
                                        i = "/api/bitTask/Tasks/DeleteAttachment",
                                        Object(d["a"])(i, "post", s).then((function(t) {
                                            e.$refs.common.ManageResponse(t),
                                            e.getTaskById(),
                                            e.$emit("refreshTaskList")
                                        }
                                        )).catch((function(t) {
                                            e.getTaskById(),
                                            e.$refs.common.ManageResponse(t.response)
                                        }
                                        ));
                                    case 3:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a)
                        }
                        )));
                        return function() {
                            return a.apply(this, arguments)
                        }
                    }();
                    a.ConfirmBox("Are you sure?", "Delete Attachment", "warning", "Yes", "No", s)
                },
                isOverDue: function(t) {
                    var e = this.getDateDiffInDays(l()(t.targetDate).format("YYYY-MM-DD") + "T" + t.targetTime, "today")
                      , a = this.getDateDiffInDays(l()(t.targetDate).format("YYYY-MM-DD") + "T" + t.targetTime, t.completedDate);
                    return e < 0 && "0001-01-01T00:00:00" == t.completedDate || "0001-01-01T00:00:00" != t.completedDate && a < 0
                },
                isShowCompleteButton: function() {
                    return 100 != this.taskData.status && 91.5 != this.taskData.status && 95.5 != this.taskData.status && !this.taskData.workFlowBased && 0 == this.selectedTab && !this.isOverDue(this.taskData)
                }
            }
        }
          , m = f
          , g = (a("6fc7"),
        a("e420"),
        a("2877"))
          , v = Object(g["a"])(m, s, i, !1, null, "66327b50", null)
          , b = e["a"] = v.exports
    },
    "81e5": function(t, e, a) {
        "use strict";
        var s = a("9419")
          , i = a.n(s);
        i.a
    },
    "841c": function(t, e, a) {
        "use strict";
        var s = a("d784")
          , i = a("825a")
          , r = a("1d80")
          , n = a("129f")
          , o = a("14c3");
        s("search", 1, (function(t, e, a) {
            return [function(e) {
                var a = r(this)
                  , s = void 0 == e ? void 0 : e[t];
                return void 0 !== s ? s.call(e, a) : new RegExp(e)[t](String(a))
            }
            , function(t) {
                var s = a(e, t, this);
                if (s.done)
                    return s.value;
                var r = i(t)
                  , l = String(this)
                  , c = r.lastIndex;
                n(c, 0) || (r.lastIndex = 0);
                var d = o(r, l);
                return n(r.lastIndex, c) || (r.lastIndex = c),
                null === d ? -1 : d.index
            }
            ]
        }
        ))
    },
    9029: function(t, e) {
        t.exports = function(t) {
            var e = {};
            function a(s) {
                if (e[s])
                    return e[s].exports;
                var i = e[s] = {
                    i: s,
                    l: !1,
                    exports: {}
                };
                return t[s].call(i.exports, i, i.exports, a),
                i.l = !0,
                i.exports
            }
            return a.m = t,
            a.c = e,
            a.d = function(t, e, s) {
                a.o(t, e) || Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: s
                })
            }
            ,
            a.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t["default"]
                }
                : function() {
                    return t
                }
                ;
                return a.d(e, "a", e),
                e
            }
            ,
            a.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            a.p = "",
            a(a.s = 0)
        }([function(t, e, a) {
            "use strict";
            var s = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = arguments[e];
                    for (var s in a)
                        Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s])
                }
                return t
            }
              , i = a(1)
              , r = a(3)
              , n = r.BROWSER_TYPES
              , o = r.OS_TYPES
              , l = r.DEVICE_TYPES
              , c = r.defaultData
              , d = new i
              , u = d.getBrowser()
              , p = d.getDevice()
              , h = d.getEngine()
              , f = d.getOS()
              , m = d.getUA()
              , g = n.CHROME
              , v = n.CHROMIUM
              , b = n.IE
              , _ = n.INTERNET_EXPLORER
              , w = n.OPERA
              , C = n.FIREFOX
              , y = n.SAFARI
              , S = n.EDGE
              , k = n.YANDEX
              , x = n.MOBILE_SAFARI
              , M = l.MOBILE
              , T = l.TABLET
              , D = l.SMART_TV
              , O = l.BROWSER
              , P = l.WEARABLE
              , E = l.CONSOLE
              , B = o.ANDROID
              , N = o.WINDOWS_PHONE
              , A = o.IOS
              , R = function(t) {
                switch (t) {
                case M:
                    return {
                        isMobile: !0
                    };
                case T:
                    return {
                        isTablet: !0
                    };
                case D:
                    return {
                        isSmartTV: !0
                    };
                case E:
                    return {
                        isConsole: !0
                    };
                case P:
                    return {
                        isWearable: !0
                    };
                case O:
                    return {
                        isBrowser: !0
                    };
                default:
                    return c
                }
            }
              , L = function(t, e, a, s, i) {
                return {
                    isBrowser: t,
                    browserMajorVersion: e.major,
                    browserFullVersion: e.version,
                    browserName: e.name,
                    engineName: a.name || !1,
                    engineVersion: a.version,
                    osName: s.name,
                    osVersion: s.version,
                    userAgent: i
                }
            }
              , $ = function(t, e, a, i) {
                return s({}, t, {
                    vendor: e.vendor,
                    model: e.model,
                    os: a.name,
                    osVersion: a.version,
                    ua: i
                })
            }
              , I = function(t, e, a, s) {
                return {
                    isSmartTV: t,
                    engineName: e.name,
                    engineVersion: e.version,
                    osName: a.name,
                    osVersion: a.version,
                    userAgent: s
                }
            }
              , j = function(t, e, a, s) {
                return {
                    isConsole: t,
                    engineName: e.name,
                    engineVersion: e.version,
                    osName: a.name,
                    osVersion: a.version,
                    userAgent: s
                }
            }
              , U = function(t, e, a, s) {
                return {
                    isWearable: t,
                    engineName: e.name,
                    engineVersion: e.version,
                    osName: a.name,
                    osVersion: a.version,
                    userAgent: s
                }
            }
              , W = function() {
                return p.type === M
            }
              , z = function() {
                return p.type === T
            }
              , V = function() {
                switch (p.type) {
                case M:
                case T:
                    return !0;
                default:
                    return !1
                }
            }
              , Y = function() {
                return p.type === D
            }
              , F = function() {
                return p.type === O
            }
              , H = function() {
                return p.type === P
            }
              , q = function() {
                return p.type === E
            }
              , G = function() {
                return f.name === B
            }
              , K = function() {
                return f.name === N
            }
              , X = function() {
                return f.name === A
            }
              , J = function() {
                return u.name === g
            }
              , Z = function() {
                return u.name === C
            }
              , Q = function() {
                return u.name === v
            }
              , tt = function() {
                return u.name === S
            }
              , et = function() {
                return u.name === k
            }
              , at = function() {
                return u.name === y || u.name === x
            }
              , st = function() {
                return u.name === x
            }
              , it = function() {
                return u.name === w
            }
              , rt = function() {
                return u.name === _ || u.name === b
            }
              , nt = function() {
                return u.major
            }
              , ot = function() {
                return u.version
            }
              , lt = function() {
                return f.version ? f.version : "none"
            }
              , ct = function() {
                return f.name ? f.name : "none"
            }
              , dt = function() {
                return u.name
            }
              , ut = function() {
                return p.vendor ? p.vendor : "none"
            }
              , pt = function() {
                return p.model ? p.model : "none"
            }
              , ht = function() {
                return h.name
            }
              , ft = function() {
                return h.version
            }
              , mt = function() {
                return m
            }
              , gt = function() {
                return p.type
            }
              , vt = Y()
              , bt = q()
              , _t = H()
              , wt = st()
              , Ct = Q()
              , yt = V()
              , St = W()
              , kt = z()
              , xt = F()
              , Mt = G()
              , Tt = K()
              , Dt = X()
              , Ot = J()
              , Pt = Z()
              , Et = at()
              , Bt = it()
              , Nt = rt()
              , At = lt()
              , Rt = ct()
              , Lt = nt()
              , $t = ot()
              , It = dt()
              , jt = ut()
              , Ut = pt()
              , Wt = ht()
              , zt = ft()
              , Vt = mt()
              , Yt = tt()
              , Ft = et()
              , Ht = gt()
              , qt = R(p.type);
            function Gt() {
                var t = qt.isBrowser
                  , e = qt.isMobile
                  , a = qt.isTablet
                  , s = qt.isSmartTV
                  , i = qt.isConsole
                  , r = qt.isWearable;
                return t ? L(t, u, h, f, m) : s ? I(s, h, f, m) : i ? j(i, h, f, m) : e || a ? $(qt, p, f, m) : r ? U(r, h, f, m) : void 0
            }
            t.exports = {
                deviceDetect: Gt,
                isSmartTV: vt,
                isConsole: bt,
                isWearable: _t,
                isMobileSafari: wt,
                isChromium: Ct,
                isMobile: yt,
                isMobileOnly: St,
                isTablet: kt,
                isBrowser: xt,
                isAndroid: Mt,
                isWinPhone: Tt,
                isIOS: Dt,
                isChrome: Ot,
                isFirefox: Pt,
                isSafari: Et,
                isOpera: Bt,
                isIE: Nt,
                osVersion: At,
                osName: Rt,
                fullBrowserVersion: Lt,
                browserVersion: $t,
                browserName: It,
                mobileVendor: jt,
                mobileModel: Ut,
                engineName: Wt,
                engineVersion: zt,
                getUA: Vt,
                isEdge: Yt,
                isYandex: Ft,
                deviceType: Ht
            }
        }
        , function(t, e, a) {
            var s;
            /*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
            (function(i, r) {
                "use strict";
                var n = "0.7.18"
                  , o = ""
                  , l = "?"
                  , c = "function"
                  , d = "undefined"
                  , u = "object"
                  , p = "string"
                  , h = "major"
                  , f = "model"
                  , m = "name"
                  , g = "type"
                  , v = "vendor"
                  , b = "version"
                  , _ = "architecture"
                  , w = "console"
                  , C = "mobile"
                  , y = "tablet"
                  , S = "smarttv"
                  , k = "wearable"
                  , x = "embedded"
                  , M = {
                    extend: function(t, e) {
                        var a = {};
                        for (var s in t)
                            e[s] && e[s].length % 2 === 0 ? a[s] = e[s].concat(t[s]) : a[s] = t[s];
                        return a
                    },
                    has: function(t, e) {
                        return "string" === typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
                    },
                    lowerize: function(t) {
                        return t.toLowerCase()
                    },
                    major: function(t) {
                        return typeof t === p ? t.replace(/[^\d\.]/g, "").split(".")[0] : r
                    },
                    trim: function(t) {
                        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                }
                  , T = {
                    rgx: function(t, e) {
                        var a, s, i, n, o, l, d = 0;
                        while (d < e.length && !o) {
                            var p = e[d]
                              , h = e[d + 1];
                            a = s = 0;
                            while (a < p.length && !o)
                                if (o = p[a++].exec(t),
                                o)
                                    for (i = 0; i < h.length; i++)
                                        l = o[++s],
                                        n = h[i],
                                        typeof n === u && n.length > 0 ? 2 == n.length ? typeof n[1] == c ? this[n[0]] = n[1].call(this, l) : this[n[0]] = n[1] : 3 == n.length ? typeof n[1] !== c || n[1].exec && n[1].test ? this[n[0]] = l ? l.replace(n[1], n[2]) : r : this[n[0]] = l ? n[1].call(this, l, n[2]) : r : 4 == n.length && (this[n[0]] = l ? n[3].call(this, l.replace(n[1], n[2])) : r) : this[n] = l || r;
                            d += 2
                        }
                    },
                    str: function(t, e) {
                        for (var a in e)
                            if (typeof e[a] === u && e[a].length > 0) {
                                for (var s = 0; s < e[a].length; s++)
                                    if (M.has(e[a][s], t))
                                        return a === l ? r : a
                            } else if (M.has(e[a], t))
                                return a === l ? r : a;
                        return t
                    }
                }
                  , D = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                }
                  , O = {
                    browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [m, b], [/(opios)[\/\s]+([\w\.]+)/i], [[m, "Opera Mini"], b], [/\s(opr)\/([\w\.]+)/i], [[m, "Opera"], b], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [m, b], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[m, "IE"], b], [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i], [[m, "Edge"], b], [/(yabrowser)\/([\w\.]+)/i], [[m, "Yandex"], b], [/(puffin)\/([\w\.]+)/i], [[m, "Puffin"], b], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[m, "UCBrowser"], b], [/(comodo_dragon)\/([\w\.]+)/i], [[m, /_/g, " "], b], [/(micromessenger)\/([\w\.]+)/i], [[m, "WeChat"], b], [/(qqbrowserlite)\/([\w\.]+)/i], [m, b], [/(QQ)\/([\d\.]+)/i], [m, b], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [m, b], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [m, b], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [m, b], [/(MetaSr)[\/\s]?([\w\.]+)/i], [m], [/(LBBROWSER)/i], [m], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [b, [m, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [b, [m, "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [b, [m, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[m, /(.+)/, "$1 WebView"], b], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[m, /(.+(?:g|us))(.+)/, "$1 $2"], b], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [b, [m, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [m, b], [/(dolfin)\/([\w\.]+)/i], [[m, "Dolphin"], b], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[m, "Chrome"], b], [/(coast)\/([\w\.]+)/i], [[m, "Opera Coast"], b], [/fxios\/([\w\.-]+)/i], [b, [m, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [b, [m, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [b, m], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[m, "GSA"], b], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [m, [b, T.str, D.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [m, b], [/(navigator|netscape)\/([\w\.-]+)/i], [[m, "Netscape"], b], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [m, b]],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[_, "amd64"]], [/(ia32(?=;))/i], [[_, M.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[_, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[_, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[_, /ower/, "", M.lowerize]], [/(sun4\w)[;\)]/i], [[_, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[_, M.lowerize]]],
                    device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [f, v, [g, y]], [/applecoremedia\/[\w\.]+ \((ipad)/], [f, [v, "Apple"], [g, y]], [/(apple\s{0,1}tv)/i], [[f, "Apple TV"], [v, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [v, f, [g, y]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [f, [v, "Amazon"], [g, y]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[f, T.str, D.device.amazon.model], [v, "Amazon"], [g, C]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [f, v, [g, C]], [/\((ip[honed|\s\w*]+);/i], [f, [v, "Apple"], [g, C]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [v, f, [g, C]], [/\(bb10;\s(\w+)/i], [f, [v, "BlackBerry"], [g, C]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [f, [v, "Asus"], [g, y]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[v, "Sony"], [f, "Xperia Tablet"], [g, y]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [f, [v, "Sony"], [g, C]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [v, f, [g, w]], [/android.+;\s(shield)\sbuild/i], [f, [v, "Nvidia"], [g, w]], [/(playstation\s[34portablevi]+)/i], [f, [v, "Sony"], [g, w]], [/(sprint\s(\w+))/i], [[v, T.str, D.device.sprint.vendor], [f, T.str, D.device.sprint.model], [g, C]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [v, f, [g, y]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [v, [f, /_/g, " "], [g, C]], [/(nexus\s9)/i], [f, [v, "HTC"], [g, y]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [f, [v, "Huawei"], [g, C]], [/(microsoft);\s(lumia[\s\w]+)/i], [v, f, [g, C]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [f, [v, "Microsoft"], [g, w]], [/(kin\.[onetw]{3})/i], [[f, /\./g, " "], [v, "Microsoft"], [g, C]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [f, [v, "Motorola"], [g, C]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [f, [v, "Motorola"], [g, y]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[v, M.trim], [f, M.trim], [g, S]], [/hbbtv.+maple;(\d+)/i], [[f, /^/, "SmartTV"], [v, "Samsung"], [g, S]], [/\(dtv[\);].+(aquos)/i], [f, [v, "Sharp"], [g, S]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[v, "Samsung"], f, [g, y]], [/smart-tv.+(samsung)/i], [v, [g, S], f], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[v, "Samsung"], f, [g, C]], [/sie-(\w*)/i], [f, [v, "Siemens"], [g, C]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[v, "Nokia"], f, [g, C]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [f, [v, "Acer"], [g, y]], [/android.+([vl]k\-?\d{3})\s+build/i], [f, [v, "LG"], [g, y]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[v, "LG"], f, [g, y]], [/(lg) netcast\.tv/i], [v, f, [g, S]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [f, [v, "LG"], [g, C]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [f, [v, "Lenovo"], [g, y]], [/linux;.+((jolla));/i], [v, f, [g, C]], [/((pebble))app\/[\d\.]+\s/i], [v, f, [g, k]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [v, f, [g, C]], [/crkey/i], [[f, "Chromecast"], [v, "Google"]], [/android.+;\s(glass)\s\d/i], [f, [v, "Google"], [g, k]], [/android.+;\s(pixel c)\s/i], [f, [v, "Google"], [g, y]], [/android.+;\s(pixel xl|pixel)\s/i], [f, [v, "Google"], [g, C]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[f, /_/g, " "], [v, "Xiaomi"], [g, C]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[f, /_/g, " "], [v, "Xiaomi"], [g, y]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [f, [v, "Meizu"], [g, y]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [f, [v, "OnePlus"], [g, C]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [f, [v, "RCA"], [g, y]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [f, [v, "Dell"], [g, y]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [f, [v, "Verizon"], [g, y]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[v, "Barnes & Noble"], f, [g, y]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [f, [v, "NuVision"], [g, y]], [/android.+;\s(k88)\sbuild/i], [f, [v, "ZTE"], [g, y]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [f, [v, "Swiss"], [g, C]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [f, [v, "Swiss"], [g, y]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [f, [v, "Zeki"], [g, y]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[v, "Dragon Touch"], f, [g, y]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [f, [v, "Insignia"], [g, y]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [f, [v, "NextBook"], [g, y]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[v, "Voice"], f, [g, C]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[v, "LvTel"], f, [g, C]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [f, [v, "Envizen"], [g, y]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [v, f, [g, y]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [f, [v, "MachSpeed"], [g, y]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [v, f, [g, y]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [f, [v, "Rotor"], [g, y]], [/android.+(KS(.+))\s+build/i], [f, [v, "Amazon"], [g, y]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [v, f, [g, y]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[g, M.lowerize], v, f], [/(android[\w\.\s\-]{0,9});.+build/i], [f, [v, "Generic"]]],
                    engine: [[/windows.+\sedge\/([\w\.]+)/i], [b, [m, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [m, b], [/rv\:([\w\.]{1,9}).+(gecko)/i], [b, m]],
                    os: [[/microsoft\s(windows)\s(vista|xp)/i], [m, b], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [m, [b, T.str, D.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[m, "Windows"], [b, T.str, D.os.windows.version]], [/\((bb)(10);/i], [[m, "BlackBerry"], b], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [m, b], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[m, "Symbian"], b], [/\((series40);/i], [m], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[m, "Firefox OS"], b], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [m, b], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[m, "Chromium OS"], b], [/(sunos)\s?([\w\.\d]*)/i], [[m, "Solaris"], b], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [m, b], [/(haiku)\s(\w+)/i], [m, b], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[b, /_/g, "."], [m, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[m, "Mac OS"], [b, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i], [m, b]]
                }
                  , P = function(t, e) {
                    if ("object" === typeof t && (e = t,
                    t = r),
                    !(this instanceof P))
                        return new P(t,e).getResult();
                    var a = t || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : o)
                      , s = e ? M.extend(O, e) : O;
                    return this.getBrowser = function() {
                        var t = {
                            name: r,
                            version: r
                        };
                        return T.rgx.call(t, a, s.browser),
                        t.major = M.major(t.version),
                        t
                    }
                    ,
                    this.getCPU = function() {
                        var t = {
                            architecture: r
                        };
                        return T.rgx.call(t, a, s.cpu),
                        t
                    }
                    ,
                    this.getDevice = function() {
                        var t = {
                            vendor: r,
                            model: r,
                            type: r
                        };
                        return T.rgx.call(t, a, s.device),
                        t
                    }
                    ,
                    this.getEngine = function() {
                        var t = {
                            name: r,
                            version: r
                        };
                        return T.rgx.call(t, a, s.engine),
                        t
                    }
                    ,
                    this.getOS = function() {
                        var t = {
                            name: r,
                            version: r
                        };
                        return T.rgx.call(t, a, s.os),
                        t
                    }
                    ,
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }
                    ,
                    this.getUA = function() {
                        return a
                    }
                    ,
                    this.setUA = function(t) {
                        return a = t,
                        this
                    }
                    ,
                    this
                };
                P.VERSION = n,
                P.BROWSER = {
                    NAME: m,
                    MAJOR: h,
                    VERSION: b
                },
                P.CPU = {
                    ARCHITECTURE: _
                },
                P.DEVICE = {
                    MODEL: f,
                    VENDOR: v,
                    TYPE: g,
                    CONSOLE: w,
                    MOBILE: C,
                    SMARTTV: S,
                    TABLET: y,
                    WEARABLE: k,
                    EMBEDDED: x
                },
                P.ENGINE = {
                    NAME: m,
                    VERSION: b
                },
                P.OS = {
                    NAME: m,
                    VERSION: b
                },
                typeof e !== d ? (typeof t !== d && t.exports && (e = t.exports = P),
                e.UAParser = P) : "function" === c && a(2) ? (s = function() {
                    return P
                }
                .call(e, a, e, t),
                s === r || (t.exports = s)) : i && (i.UAParser = P);
                var E = i && (i.jQuery || i.Zepto);
                if (typeof E !== d) {
                    var B = new P;
                    E.ua = B.getResult(),
                    E.ua.get = function() {
                        return B.getUA()
                    }
                    ,
                    E.ua.set = function(t) {
                        B.setUA(t);
                        var e = B.getResult();
                        for (var a in e)
                            E.ua[a] = e[a]
                    }
                }
            }
            )("object" === typeof window ? window : this)
        }
        , function(t, e) {
            (function(e) {
                t.exports = e
            }
            ).call(e, {})
        }
        , function(t, e, a) {
            "use strict";
            var s = {
                MOBILE: "mobile",
                TABLET: "tablet",
                SMART_TV: "smarttv",
                CONSOLE: "console",
                WEARABLE: "wearable",
                BROWSER: void 0
            }
              , i = {
                CHROME: "Chrome",
                FIREFOX: "Firefox",
                OPERA: "Opera",
                YANDEX: "Yandex",
                SAFARI: "Safari",
                INTERNET_EXPLORER: "Internet Explorer",
                EDGE: "Edge",
                CHROMIUM: "Chromium",
                IE: "IE",
                MOBILE_SAFARI: "Mobile Safari"
            }
              , r = {
                IOS: "iOS",
                ANDROID: "Android",
                WINDOWS_PHONE: "Windows Phone"
            }
              , n = {
                isMobile: !1,
                isTablet: !1,
                isBrowser: !1,
                isSmartTV: !1,
                isConsole: !1,
                isWearable: !1
            };
            t.exports = {
                BROWSER_TYPES: i,
                DEVICE_TYPES: s,
                OS_TYPES: r,
                defaultData: n
            }
        }
        ])
    },
    "93cb": function(t, e, a) {},
    9419: function(t, e, a) {},
    "9c01": function(t, e, a) {
        "use strict";
        var s = a("93cb")
          , i = a.n(s);
        i.a
    },
    a630: function(t, e, a) {
        var s = a("23e7")
          , i = a("4df4")
          , r = a("1c7e")
          , n = !r((function(t) {
            Array.from(t)
        }
        ));
        s({
            target: "Array",
            stat: !0,
            forced: n
        }, {
            from: i
        })
    },
    a9e3: function(t, e, a) {
        "use strict";
        var s = a("83ab")
          , i = a("da84")
          , r = a("94ca")
          , n = a("6eeb")
          , o = a("5135")
          , l = a("c6b6")
          , c = a("7156")
          , d = a("c04e")
          , u = a("d039")
          , p = a("7c73")
          , h = a("241c").f
          , f = a("06cf").f
          , m = a("9bf2").f
          , g = a("58a8").trim
          , v = "Number"
          , b = i[v]
          , _ = b.prototype
          , w = l(p(_)) == v
          , C = function(t) {
            var e, a, s, i, r, n, o, l, c = d(t, !1);
            if ("string" == typeof c && c.length > 2)
                if (c = g(c),
                e = c.charCodeAt(0),
                43 === e || 45 === e) {
                    if (a = c.charCodeAt(2),
                    88 === a || 120 === a)
                        return NaN
                } else if (48 === e) {
                    switch (c.charCodeAt(1)) {
                    case 66:
                    case 98:
                        s = 2,
                        i = 49;
                        break;
                    case 79:
                    case 111:
                        s = 8,
                        i = 55;
                        break;
                    default:
                        return +c
                    }
                    for (r = c.slice(2),
                    n = r.length,
                    o = 0; o < n; o++)
                        if (l = r.charCodeAt(o),
                        l < 48 || l > i)
                            return NaN;
                    return parseInt(r, s)
                }
            return +c
        };
        if (r(v, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
            for (var y, S = function(t) {
                var e = arguments.length < 1 ? 0 : t
                  , a = this;
                return a instanceof S && (w ? u((function() {
                    _.valueOf.call(a)
                }
                )) : l(a) != v) ? c(new b(C(e)), a, S) : C(e)
            }, k = s ? h(b) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++)
                o(b, y = k[x]) && !o(S, y) && m(S, y, f(b, y));
            S.prototype = _,
            _.constructor = S,
            n(i, v, S)
        }
    },
    ab13: function(t, e, a) {
        var s = a("b622")
          , i = s("match");
        t.exports = function(t) {
            var e = /./;
            try {
                "/./"[t](e)
            } catch (a) {
                try {
                    return e[i] = !1,
                    "/./"[t](e)
                } catch (s) {}
            }
            return !1
        }
    },
    b0c0: function(t, e, a) {
        var s = a("83ab")
          , i = a("9bf2").f
          , r = Function.prototype
          , n = r.toString
          , o = /^\s*function ([^ (]*)/
          , l = "name";
        s && !(l in r) && i(r, l, {
            configurable: !0,
            get: function() {
                try {
                    return n.call(this).match(o)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    },
    b85c: function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return i
        }
        ));
        a("a4d3"),
        a("e01a"),
        a("d28b"),
        a("e260"),
        a("d3b7"),
        a("3ca3"),
        a("ddb0");
        var s = a("06c5");
        function i(t) {
            if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = Object(s["a"])(t))) {
                    var e = 0
                      , a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, r, n = !0, o = !1;
            return {
                s: function() {
                    i = t[Symbol.iterator]()
                },
                n: function() {
                    var t = i.next();
                    return n = t.done,
                    t
                },
                e: function(t) {
                    o = !0,
                    r = t
                },
                f: function() {
                    try {
                        n || null == i["return"] || i["return"]()
                    } finally {
                        if (o)
                            throw r
                    }
                }
            }
        }
    },
    c01a: function(t, e, a) {
        "use strict";
        var s = a("e9de")
          , i = a.n(s);
        i.a
    },
    c052: function(t, e, a) {
        "use strict";
        var s = a("2526")
          , i = a.n(s);
        i.a
    },
    c7db: function(t, e, a) {
        "use strict";
        var s = a("2b0e");
        s = "default"in s ? s["default"] : s;
        var i = "2.2.2"
          , r = /^2\./.test(s.version);
        r || s.util.warn("VueClickaway " + i + " only supports Vue 2.x, and does not support Vue " + s.version);
        var n = "_vue_clickaway_handler";
        function o(t, e, a) {
            l(t);
            var s = a.context
              , i = e.value;
            if ("function" === typeof i) {
                var r = !1;
                setTimeout((function() {
                    r = !0
                }
                ), 0),
                t[n] = function(e) {
                    var a = e.path || (e.composedPath ? e.composedPath() : void 0);
                    if (r && (a ? a.indexOf(t) < 0 : !t.contains(e.target)))
                        return i.call(s, e)
                }
                ,
                document.documentElement.addEventListener("click", t[n], !1)
            }
        }
        function l(t) {
            document.documentElement.removeEventListener("click", t[n], !1),
            delete t[n]
        }
        var c = {
            bind: o,
            update: function(t, e) {
                e.value !== e.oldValue && o(t, e)
            },
            unbind: l
        }
          , d = {
            directives: {
                onClickaway: c
            }
        };
        e.version = i,
        e.directive = c,
        e.mixin = d
    },
    ca74: function(t, e, a) {
        "use strict";
        var s = a("7699")
          , i = a.n(s);
        i.a
    },
    caad: function(t, e, a) {
        "use strict";
        var s = a("23e7")
          , i = a("4d64").includes
          , r = a("44d2")
          , n = a("ae40")
          , o = n("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
        s({
            target: "Array",
            proto: !0,
            forced: !o
        }, {
            includes: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        r("includes")
    },
    e083: function(t, e, a) {},
    e420: function(t, e, a) {
        "use strict";
        var s = a("4bf2")
          , i = a.n(s);
        i.a
    },
    e9de: function(t, e, a) {},
    f0f4: function(t, e, a) {},
    f579: function(t, e, a) {
        "use strict";
        a.r(e);
        var s = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "app-admin-wrap layout-sidebar-compact clearfix",
                class: [t.getCompactSideBarToggleProperties.isSideNavOpen ? "sidenav-open" : "", t.getcompactLeftSideBarBgColor]
            }, [a("top-nav"), a("compactSidebar", {
                attrs: {
                    userMenu: t.userMenu.childMenus
                }
            }), a("div", {
                staticClass: "main-content-wrap d-flex flex-column p-3 pt-0"
            }, [a("transition", {
                attrs: {
                    name: "page",
                    mode: "out-in"
                }
            }, [a("router-view")], 1)], 1)], 1)
        }
          , i = []
          , r = (a("96cf"),
        a("1da1"))
          , n = a("5530")
          , o = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "main-header"
            }, [s("div", {
                staticClass: "logo"
            }), s("div", {
                staticClass: "menu-toggle",
                on: {
                    click: t.compactSideBarToggle
                }
            }, [s("div"), s("div"), s("div")]), s("div", {
                staticClass: "d-flex align-items-center"
            }, [s("div", {
                directives: [{
                    name: "on-clickaway",
                    rawName: "v-on-clickaway",
                    value: t.closeMegaMenu,
                    expression: "closeMegaMenu"
                }],
                staticClass: "dropdown mega-menu d-none d-md-block",
                class: {
                    show: t.isMegaMenuOpen
                }
            }, [s("a", {
                staticClass: "btn text-muted dropdown-toggle mr-3",
                attrs: {
                    href: "#",
                    id: "dropdownMegaMenuButton",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                },
                on: {
                    click: t.toggleMegaMenu
                }
            }, [t._v("Mega Menu")]), s("div", {
                staticClass: "dropdown-menu text-left",
                class: {
                    show: t.isMegaMenuOpen
                },
                attrs: {
                    "aria-labelledby": "dropdownMenuButton"
                }
            }, [t._m(0)])])]), s("div", {
                staticStyle: {
                    margin: "auto"
                }
            }), s("div", {
                staticClass: "header-part-right"
            }, [s("i", {
                staticClass: "i-Full-Screen header-icon d-none d-sm-inline-block",
                on: {
                    click: t.handleFullScreen
                }
            }), s("div", {
                staticClass: "dropdown"
            }, [s("b-dropdown", {
                staticClass: "m-md-2",
                attrs: {
                    id: "dropdown",
                    text: "Dropdown Button",
                    "toggle-class": "text-decoration-none",
                    "no-caret": "",
                    variant: "link"
                }
            }, [s("template", {
                slot: "button-content"
            }, [s("i", {
                staticClass: "i-Safe-Box text-muted header-icon",
                attrs: {
                    role: "button",
                    id: "dropdownMenuButton",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                }
            })]), s("div", {
                staticClass: "menu-icon-grid"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [s("i", {
                staticClass: "i-Shop-4"
            }), t._v(" Home ")]), s("a", {
                attrs: {
                    href: "#"
                }
            }, [s("i", {
                staticClass: "i-Library"
            }), t._v(" UI Kits ")]), s("a", {
                attrs: {
                    href: "#"
                }
            }, [s("i", {
                staticClass: "i-Drop"
            }), t._v(" Apps ")]), s("a", {
                attrs: {
                    href: "#"
                }
            }, [s("i", {
                staticClass: "i-File-Clipboard-File--Text"
            }), t._v(" Forms ")]), s("a", {
                attrs: {
                    href: "#"
                }
            }, [s("i", {
                staticClass: "i-Checked-User"
            }), t._v(" Sessions ")]), s("a", {
                attrs: {
                    href: "#"
                }
            }, [s("i", {
                staticClass: "i-Ambulance"
            }), t._v(" Support ")])])], 2)], 1), s("div", {
                staticClass: "dropdown"
            }, [s("b-dropdown", {
                staticClass: "m-md-2 badge-top-container",
                attrs: {
                    id: "dropdown-1",
                    text: "Dropdown Button",
                    "toggle-class": "text-decoration-none",
                    "no-caret": "",
                    variant: "link"
                }
            }, [s("template", {
                slot: "button-content"
            }, [s("span", {
                staticClass: "badge badge-primary"
            }, [t._v("3")]), s("i", {
                staticClass: "i-Bell text-muted header-icon"
            })]), s("vue-perfect-scrollbar", {
                ref: "myData",
                staticClass: "dropdown-menu-right rtl-ps-none notification-dropdown  ps scroll",
                attrs: {
                    settings: {
                        suppressScrollX: !0,
                        wheelPropagation: !1
                    }
                }
            }, [s("div", {
                staticClass: "dropdown-item d-flex"
            }, [s("div", {
                staticClass: "notification-icon"
            }, [s("i", {
                staticClass: "i-Speach-Bubble-6 text-primary mr-1"
            })]), s("div", {
                staticClass: "notification-details flex-grow-1"
            }, [s("p", {
                staticClass: "m-0 d-flex align-items-center"
            }, [s("span", [t._v("New message")]), s("span", {
                staticClass: "flex-grow-1"
            }), s("span", {
                staticClass: "text-small text-muted ml-auto"
            }, [t._v("10 sec ago")])]), s("p", {
                staticClass: "text-small text-muted m-0"
            }, [t._v(" James: Hey! are you busy? ")])])]), s("div", {
                staticClass: "dropdown-item d-flex"
            }, [s("div", {
                staticClass: "notification-icon"
            }, [s("i", {
                staticClass: "i-Receipt-3 text-success mr-1"
            })]), s("div", {
                staticClass: "notification-details flex-grow-1"
            }, [s("p", {
                staticClass: "m-0 d-flex align-items-center"
            }, [s("span", [t._v("New order received")]), s("span", {
                staticClass: "flex-grow-1"
            }), s("span", {
                staticClass: "text-small text-muted ml-auto"
            }, [t._v("2 hours ago")])]), s("p", {
                staticClass: "text-small text-muted m-0"
            }, [t._v("1 Headphone, 3 iPhone x")])])]), s("div", {
                staticClass: "dropdown-item d-flex"
            }, [s("div", {
                staticClass: "notification-icon"
            }, [s("i", {
                staticClass: "i-Empty-Box text-danger mr-1"
            })]), s("div", {
                staticClass: "notification-details flex-grow-1"
            }, [s("p", {
                staticClass: "m-0 d-flex align-items-center"
            }, [s("span", [t._v("Product out of stock")]), s("span", {
                staticClass: "flex-grow-1"
            }), s("span", {
                staticClass: "text-small text-muted ml-auto"
            }, [t._v("10 hours ago")])]), s("p", {
                staticClass: "text-small text-muted m-0"
            }, [t._v(" Headphone E67, R98, XL90, Q77 ")])])]), s("div", {
                staticClass: "dropdown-item d-flex"
            }, [s("div", {
                staticClass: "notification-icon"
            }, [s("i", {
                staticClass: "i-Data-Power text-success mr-1"
            })]), s("div", {
                staticClass: "notification-details flex-grow-1"
            }, [s("p", {
                staticClass: "m-0 d-flex align-items-center"
            }, [s("span", [t._v("Server Up!")]), s("span", {
                staticClass: "flex-grow-1"
            }), s("span", {
                staticClass: "text-small text-muted ml-auto"
            }, [t._v("14 hours ago")])]), s("p", {
                staticClass: "text-small text-muted m-0"
            }, [t._v(" Server rebooted successfully ")])])])])], 2)], 1), s("div", {
                staticClass: "dropdown"
            }, [s("b-dropdown", {
                staticClass: "m-md-2 user col align-self-end",
                attrs: {
                    id: "dropdown-1",
                    text: "Dropdown Button",
                    "toggle-class": "text-decoration-none",
                    "no-caret": "",
                    variant: "link"
                }
            }, [s("template", {
                slot: "button-content"
            }, [s("img", {
                attrs: {
                    src: a("6f92"),
                    id: "userDropdown",
                    alt: "",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                }
            })]), s("div", {
                staticClass: "dropdown-menu-right",
                attrs: {
                    "aria-labelledby": "userDropdown"
                }
            }, [s("div", {
                staticClass: "dropdown-header"
            }, [s("i", {
                staticClass: "i-Lock-User mr-1"
            }), t._v(" Timothy Carlson ")]), s("a", {
                staticClass: "dropdown-item"
            }, [t._v("Account settings")]), s("a", {
                staticClass: "dropdown-item"
            }, [t._v("Billing history")]), s("a", {
                staticClass: "dropdown-item",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.logoutUser(e)
                    }
                }
            }, [t._v("Sign out")])])], 2)], 1)]), s("search-component", {
                attrs: {
                    isSearchOpen: t.isSearchOpen
                },
                on: {
                    "update:isSearchOpen": function(e) {
                        t.isSearchOpen = e
                    },
                    "update:is-search-open": function(e) {
                        t.isSearchOpen = e
                    },
                    closeSearch: t.toggleSearch
                }
            })], 1)
        }
          , l = [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "row m-0"
            }, [a("div", {
                staticClass: "col-md-4 p-4 text-left bg-img"
            }, [a("h2", {
                staticClass: "title"
            }, [t._v(" Mega Menu "), a("br"), t._v("Sidebar ")]), a("p", [t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur. ")]), a("p", {
                staticClass: " mb-30"
            }, [t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat. ")]), a("button", {
                staticClass: "btn btn-lg btn-rounded btn-outline-warning"
            }, [t._v(" Learn More ")])]), a("div", {
                staticClass: "col-md-4 p-4 text-left"
            }, [a("p", {
                staticClass: "text-primary text--cap border-bottom-primary d-inline-block"
            }, [t._v(" Features ")]), a("div", {
                staticClass: "menu-icon-grid w-auto p-0"
            }, [a("a", {
                attrs: {
                    href: "#"
                }
            }, [a("i", {
                staticClass: "i-Shop-4"
            }), t._v(" Home ")]), a("a", {
                attrs: {
                    href: "#"
                }
            }, [a("i", {
                staticClass: "i-Library"
            }), t._v(" UI Kits ")]), a("a", {
                attrs: {
                    href: "#"
                }
            }, [a("i", {
                staticClass: "i-Drop"
            }), t._v(" Apps ")]), a("a", {
                attrs: {
                    href: "#"
                }
            }, [a("i", {
                staticClass: "i-File-Clipboard-File--Text"
            }), t._v(" Forms ")]), a("a", {
                attrs: {
                    href: "#"
                }
            }, [a("i", {
                staticClass: "i-Checked-User"
            }), t._v(" Sessions ")]), a("a", {
                attrs: {
                    href: "#"
                }
            }, [a("i", {
                staticClass: "i-Ambulance"
            }), t._v(" Support ")])])]), a("div", {
                staticClass: "col-md-4 p-4 text-left"
            }, [a("p", {
                staticClass: "text-primary text--cap border-bottom-primary d-inline-block"
            }, [t._v(" Components ")]), a("ul", {
                staticClass: "links"
            }, [a("li", [a("a", {
                attrs: {
                    href: "accordion.html"
                }
            }, [t._v("Accordion")])]), a("li", [a("a", {
                attrs: {
                    href: "alerts.html"
                }
            }, [t._v("Alerts")])]), a("li", [a("a", {
                attrs: {
                    href: "buttons.html"
                }
            }, [t._v("Buttons")])]), a("li", [a("a", {
                attrs: {
                    href: "badges.html"
                }
            }, [t._v("Badges")])]), a("li", [a("a", {
                attrs: {
                    href: "carousel.html"
                }
            }, [t._v("Carousels")])]), a("li", [a("a", {
                attrs: {
                    href: "lists.html"
                }
            }, [t._v("Lists")])]), a("li", [a("a", {
                attrs: {
                    href: "popover.html"
                }
            }, [t._v("Popover")])]), a("li", [a("a", {
                attrs: {
                    href: "tables.html"
                }
            }, [t._v("Tables")])]), a("li", [a("a", {
                attrs: {
                    href: "datatables.html"
                }
            }, [t._v("Datatables")])]), a("li", [a("a", {
                attrs: {
                    href: "modals.html"
                }
            }, [t._v("Modals")])]), a("li", [a("a", {
                attrs: {
                    href: "nouislider.html"
                }
            }, [t._v("Sliders")])]), a("li", [a("a", {
                attrs: {
                    href: "tabs.html"
                }
            }, [t._v("Tabs")])])])])])
        }
        ]
          , c = a("ed08")
          , d = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "search-ui",
                class: {
                    open: t.isSearchOpen
                },
                staticStyle: {
                    overflow: "auto"
                }
            }, [a("div", {
                staticClass: "search-header"
            }, [a("button", {
                staticClass: "search-close btn btn-icon bg-transparent float-right mt-2",
                on: {
                    click: t.closeSearch
                }
            }, [a("i", {
                staticClass: "i-Close-Window text-22 text-muted"
            })])]), a("div", {
                staticClass: "col-md-4"
            }, [a("b-input-group", {
                staticClass: "mb-2"
            }, [a("b-form-input", {
                ref: "searchInput",
                staticStyle: {
                    "font-size": "1rem",
                    border: "0",
                    "border-bottom": "1px solid var(--primary)"
                },
                attrs: {
                    "aria-label": "Text input with checkbox",
                    type: "text",
                    placeholder: "Type a question"
                },
                on: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.emitSearch(e)
                    }
                },
                model: {
                    value: t.search,
                    callback: function(e) {
                        t.search = e
                    },
                    expression: "search"
                }
            })], 1)], 1), a("div", {
                staticClass: "col-12"
            }, [a("button", {
                staticClass: "btn p-2 es-btn fa fa-plus btn-primary w-auto float-right",
                on: {
                    click: t.addNew
                }
            }, [a("span", {
                staticClass: "pl-1",
                staticStyle: {
                    "font-family": "sans-serif"
                }
            }, [t._v("Add New")])])]), a("div", {
                staticClass: "col-12 pl-0 pr-0 pt-12 row"
            }, t._l(t.filteredData, (function(e, s) {
                return a("div", {
                    key: s,
                    staticClass: "col-md-4 pt-2"
                }, [a("b-card", {
                    attrs: {
                        "body-class": "pb-1 pt-2",
                        "header-class": "pb-0"
                    }
                }, [a("div", {
                    staticClass: "text-center d-flex justify-content-between pb-12",
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [a("b-badge", {
                    staticStyle: {
                        "padding-top": "10px"
                    },
                    attrs: {
                        variant: "primary"
                    }
                }, [t._v(t._s(e.questionCode))]), a("div", {
                    staticClass: "item-title font-weight-bold pt-1 pl-1 text-muted"
                }, [a("span", {
                    staticStyle: {
                        "font-size": "1.2em"
                    }
                }, [t._v(t._s(e.subject.value))])]), a("div", [a("i", {
                    directives: [{
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover",
                        modifiers: {
                            hover: !0
                        }
                    }],
                    staticClass: "btn-circleClone pt-2 c-pointer fa fa-copy",
                    attrs: {
                        title: "Clone question"
                    },
                    on: {
                        click: function(a) {
                            return t.edit(e)
                        }
                    }
                })])], 1), a("div", [a("div", [a("span", {
                    staticClass: "text-muted font-weight-bold"
                }, [t._v("Question :")]), a("span", [t._v(t._s(e.question))])]), a("div", [a("span", {
                    staticClass: "text-muted font-weight-bold"
                }, [t._v("Question Type :")]), a("span", [t._v(t._s(e.type))])])])])], 1)
            }
            )), 0), a("b-card", {
                staticClass: "dense-card pr-3 d-none"
            }, [a("b-pagination", {
                staticClass: "mt-3 d-flex justify-content-end",
                attrs: {
                    "total-rows": t.noOfPages,
                    "per-page": t.perPage,
                    "aria-controls": "my-table"
                },
                model: {
                    value: t.currentPage,
                    callback: function(e) {
                        t.currentPage = e
                    },
                    expression: "currentPage"
                }
            })], 1)], 1)
        }
          , u = []
          , p = (a("ac1f"),
        a("841c"),
        {
            props: {
                isSearchOpen: Boolean,
                filteredData: {
                    type: [Object, Array]
                }
            },
            data: function() {
                return {
                    issearchClose: !1,
                    currentPage: 1,
                    lastPage: 10,
                    noOfPages: 100,
                    perPage: 10,
                    search: ""
                }
            },
            watch: {
                currentPage: function(t) {
                    t <= this.lastPage && this.getNextPage(t)
                }
            },
            mounted: function() {
                var t = this;
                setTimeout((function() {
                    t.$refs.searchInput.focus,
                    t.emitSearch()
                }
                ), 800)
            },
            methods: {
                closeSearch: function() {
                    this.$emit("closeSearch", {
                        isSearchOpen: !1
                    })
                },
                getNextPage: function(t) {},
                emitSearch: function() {
                    this.$emit("searchForQuestions", this.search.toLowerCase())
                },
                edit: function(t) {
                    this.$emit("addNewClicked", t),
                    this.$emit("closeSearch", {
                        isSearchOpen: !1
                    })
                },
                addNew: function() {
                    this.$emit("addNew"),
                    this.$emit("closeSearch", {
                        isSearchOpen: !1
                    })
                }
            },
            computed: {}
        })
          , h = p
          , f = a("2877")
          , m = Object(f["a"])(h, d, u, !1, null, null, null)
          , g = m.exports
          , v = a("9029")
          , b = a("2f62")
          , _ = a("c7db")
          , w = a("9d63")
          , C = a.n(w)
          , y = {
            mixins: [_["mixin"]],
            components: {
                searchComponent: g,
                VuePerfectScrollbar: C.a
            },
            data: function() {
                return {
                    isDisplay: !0,
                    isStyle: !0,
                    isSearchOpen: !1,
                    isMouseOnMegaMenu: !0,
                    isMegaMenuOpen: !1
                }
            },
            mounted: function() {},
            computed: Object(n["a"])({}, Object(b["c"])(["getCompactSideBarToggleProperties"])),
            methods: Object(n["a"])({}, Object(b["b"])(["changeCompactSidebarProperties", "changeThemeMode", "signOut"]), {
                logoutUser: function() {
                    this.signOut(),
                    this.$router.push("/app/sessions/signIn")
                },
                handleFullScreen: function() {
                    c["a"].toggleFullScreen()
                },
                closeMegaMenu: function() {
                    this.isMegaMenuOpen = !1
                },
                toggleMegaMenu: function() {
                    this.isMegaMenuOpen = !this.isMegaMenuOpen
                },
                toggleSearch: function() {
                    this.isSearchOpen = !this.isSearchOpen
                },
                compactSideBarToggle: function(t) {
                    this.getCompactSideBarToggleProperties.isSideNavOpen && v["isMobile"] || this.getCompactSideBarToggleProperties.isSideNavOpen ? this.changeCompactSidebarProperties() : this.getCompactSideBarToggleProperties.isSideNavOpen || this.getCompactSideBarToggleProperties.isActiveSecondarySideNav ? this.getCompactSideBarToggleProperties.isSideNavOpen || (this.changeCompactSidebarProperties(),
                    console.log("4")) : this.changeCompactSidebarProperties()
                }
            })
        }
          , S = y
          , k = Object(f["a"])(S, o, l, !1, null, null, null)
          , x = k.exports
          , M = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "main-header"
            }, [s("commonComp", {
                ref: "common",
                staticClass: "w-100"
            }), s("CustomModal", {
                ref: "changePassword",
                attrs: {
                    id: "changePassword",
                    modalClass: "large",
                    defaultCloseBtn: !0
                },
                on: {
                    ModalBtnClosed: t.passwordChange
                }
            }, [s("div", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("Change Password")]), s("div", {
                ref: "eventRef",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("changePassword", {
                attrs: {
                    email: t.userDetails.email
                },
                on: {
                    logOut: t.logoutUser
                }
            })], 1)]), s("CustomModal", {
                ref: "branchAssign",
                staticStyle: {
                    "z-index": "2000"
                },
                attrs: {
                    id: "branchAssignModal",
                    modalClass: "medium",
                    defaultCloseBtn: !1
                }
            }, [s("div", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("Please choose a default Branch")]), s("div", {
                staticClass: "px-0",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("ValidationObserver", {
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        var a = e.handleSubmit;
                        return [s("ValidationProvider", {
                            attrs: {
                                rules: "required"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    var a = e.errors;
                                    return [s("multiselect", {
                                        class: " " + (a.length > 0 ? "input-has-error" : "") + " ",
                                        attrs: {
                                            options: t.branchList,
                                            label: "branchName",
                                            "track-by": "id",
                                            name: "Workshop",
                                            placeholder: "type to search",
                                            searchable: !0,
                                            "preserve-search": !1,
                                            "allow-empty": !0,
                                            "hide-selected": !1
                                        },
                                        model: {
                                            value: t.selectedBranch,
                                            callback: function(e) {
                                                t.selectedBranch = e
                                            },
                                            expression: "selectedBranch"
                                        }
                                    }), s("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(a[0]))])]
                                }
                            }], null, !0)
                        }), s("div", {
                            staticClass: "mt-4"
                        }, [s("div", {
                            staticClass: "col-md-12 t-a-r"
                        }, [s("button", {
                            staticClass: "btn btn-sm btn-danger mr-2",
                            on: {
                                click: t.logOutFromModal
                            }
                        }, [s("i", {
                            staticClass: "fa fa-sign-out",
                            staticStyle: {
                                color: "white"
                            }
                        }), t._v(" Logout ")]), s("button", {
                            staticClass: "btn btn-sm btn-primary ml-2",
                            on: {
                                click: function(e) {
                                    return a(t.addWorkshop)
                                }
                            }
                        }, [s("i", {
                            staticClass: "fa fa-check",
                            staticStyle: {
                                color: "white"
                            }
                        }), t._v(" Update ")])])])]
                    }
                }])
            })], 1), s("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            })]), s("CustomModal", {
                ref: "changeWorkshop",
                attrs: {
                    modalClass: "Medium",
                    defaultCloseBtn: !0
                }
            }, [s("div", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("Select Default Branch")]), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("ValidationObserver", {
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        var a = e.handleSubmit;
                        return [s("ValidationProvider", {
                            attrs: {
                                rules: "required"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    var a = e.errors;
                                    return [s("multiselect", {
                                        class: " " + (a.length > 0 ? "input-has-error" : "") + " ",
                                        attrs: {
                                            options: t.branchList,
                                            label: "branchName",
                                            "track-by": "id",
                                            name: "Workshop",
                                            placeholder: "type to search",
                                            searchable: !0,
                                            "preserve-search": !1,
                                            "allow-empty": !0,
                                            "hide-selected": !1
                                        },
                                        model: {
                                            value: t.selectedBranch,
                                            callback: function(e) {
                                                t.selectedBranch = e
                                            },
                                            expression: "selectedBranch"
                                        }
                                    }), s("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(a[0]))])]
                                }
                            }], null, !0)
                        }), s("div", {
                            staticClass: "mt-4"
                        }, [s("input", {
                            staticClass: "btn btn-primary es-btn ml-2 m-t-n-sm pull-right btn-sm",
                            attrs: {
                                type: "button",
                                value: "Save",
                                disabled: t.workshopAddButtonDisable
                            },
                            on: {
                                click: function(e) {
                                    return a(t.addWorkshop)
                                }
                            }
                        }), s("input", {
                            staticClass: "btn es-btn cancel-btn m-t-n-sm pull-right btn-sm",
                            attrs: {
                                type: "button",
                                value: "Cancel",
                                disabled: t.workshopAddButtonDisable
                            },
                            on: {
                                click: t.onCancel
                            }
                        })])]
                    }
                }])
            })], 1)]), s("div", {
                staticClass: "logo"
            }, [s("img", {
                staticClass: "logoClass c-pointer",
                attrs: {
                    src: a("9d64"),
                    alt: ""
                },
                on: {
                    click: function(e) {
                        return t.$router.push("/")
                    }
                }
            })]), s("div", {
                staticClass: "menu-toggle",
                on: {
                    click: t.compactSideBarToggle
                }
            }, [s("div"), s("div"), s("div")]), s("div", [s("SearchBar")], 1), s("div", {
                staticClass: "d-flex align-items-center",
                staticStyle: {
                    display: "none !important"
                }
            }, [s("div", {
                directives: [{
                    name: "on-clickaway",
                    rawName: "v-on-clickaway",
                    value: t.closeMegaMenu,
                    expression: "closeMegaMenu"
                }],
                staticClass: "dropdown mega-menu d-none d-md-block",
                class: {
                    show: t.isMegaMenuOpen
                }
            }, [s("a", {
                staticClass: "btn text-muted dropdown-toggle mr-3",
                attrs: {
                    href: "#",
                    id: "dropdownMegaMenuButton",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                },
                on: {
                    click: t.toggleMegaMenu
                }
            }, [t._v("Quick Reports")]), s("div", {
                staticClass: "dropdown-menu text-left",
                class: {
                    show: t.isMegaMenuOpen
                },
                attrs: {
                    "aria-labelledby": "dropdownMenuButton"
                }
            }, [t._m(0)])])]), s("div", {
                staticStyle: {
                    margin: "auto"
                }
            }), s("div", {
                staticClass: "header-part-right"
            }, [this.defaultBranch.branchName ? s("div", {
                staticClass: "row m-0 c-pointer",
                staticStyle: {
                    display: "none"
                }
            }, [s("label", {
                staticClass: "badge badge-outline-secondary p-2 m-3 badge-pill c-pointer",
                on: {
                    click: t.changeWorkshop
                }
            }, [t._v(" " + t._s(this.defaultBranch.branchName) + " "), s("i", {
                staticClass: "fa fa-pencil pl-2"
            })])]) : t._e(), s("button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "btn text-gray-600 bg-transparent p-0",
                attrs: {
                    title: "Notifications"
                },
                on: {
                    click: t.getNotifications
                }
            }, [s("b-avatar", {
                attrs: {
                    icon: "bell",
                    variant: " outline"
                }
            })], 1), s("slide-out", {
                ref: "NotifSlideout",
                attrs: {
                    visible: t.showNotifSlideout,
                    dock: "right",
                    size: t.dWidth > 768 ? "35%" : "100%",
                    title: "Notifications",
                    "append-to": "#bittaskbody",
                    "allow-resize": ""
                },
                on: {
                    "update:visible": function(e) {
                        t.showNotifSlideout = e
                    },
                    close: t.notifSlideoutClosed
                }
            }, [s("notifications", {
                ref: "notifComp",
                attrs: {
                    listStyle: "list"
                }
            })], 1), s("i", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "i-Full-Screen header-icon d-none d-sm-inline-block",
                attrs: {
                    title: "Full-Screen"
                },
                on: {
                    click: t.handleFullScreen
                }
            }), s("div", {
                staticClass: "dropdown"
            }, [s("b-dropdown", {
                staticClass: "m-md-2 user col align-self-end",
                attrs: {
                    id: "dropdown-1",
                    text: "Dropdown Button",
                    "toggle-class": "text-decoration-none",
                    "no-caret": "",
                    variant: "link"
                }
            }, [s("template", {
                slot: "button-content"
            }, [s("img", {
                attrs: {
                    src: t.googleLoginDetails.imgUrl ? t.googleLoginDetails.imgUrl : "img/images/avatar/5s.png",
                    id: "userDropdown",
                    alt: "",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                },
                on: {
                    click: t.getUserDetailsFromStore
                }
            })]), s("div", {
                staticClass: "dropdown-menu-right",
                attrs: {
                    "aria-labelledby": "userDropdown"
                }
            }, [s("div", {
                staticClass: "dropdown-header"
            }, [s("i", {
                staticClass: "i-Lock-User mr-1"
            }), t._v(" " + t._s(t.googleLoginDetails.name ? t.googleLoginDetails.name : t.userDetails.userName) + " ")]), s("a", {
                staticClass: "dropdown-item",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.openPasswodChange(e)
                    }
                }
            }, [t._v("Change password")]), s("a", {
                staticClass: "dropdown-item",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.logoutUser(e)
                    }
                }
            }, [t._v("Sign out")])])], 2)], 1), t.$route.name ? s("div", {
                staticClass: "d-none d-md-block"
            }, [s("button", {
                staticClass: "btn btn-sm px-2 bg-transparent mr-2",
                attrs: {
                    id: "dp-backbtn",
                    title: "Go Back"
                },
                on: {
                    click: t.goBack
                }
            }, [s("i", {
                staticClass: "fa fa-chevron-left"
            }), s("span", {
                staticClass: "show-on-btn-hover"
            }, [t._v(t._s(t.$route.path))])])]) : t._e()], 1), s("search-component", {
                attrs: {
                    isSearchOpen: t.isSearchOpen
                },
                on: {
                    "update:isSearchOpen": function(e) {
                        t.isSearchOpen = e
                    },
                    "update:is-search-open": function(e) {
                        t.isSearchOpen = e
                    },
                    closeSearch: t.toggleSearch
                }
            }), s("div")], 1)
        }
          , T = [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "row m-0"
            }, [a("div", {
                staticClass: "col-md-4 p-4 text-left bg-img"
            }, [a("h2", {
                staticClass: "title"
            }, [t._v("Quick Reports")])]), a("div", {
                staticClass: "col-md-4 p-4 text-left"
            }, [a("p", {
                staticClass: "text-primary text--cap border-bottom-primary d-inline-block"
            }, [t._v(" Features ")]), a("div", {
                staticClass: "menu-icon-grid w-auto p-0"
            }, [a("a", {
                attrs: {
                    href: "#"
                }
            }, [a("i", {
                staticClass: "i-Shop-4"
            }), t._v(" Subscribers ")]), a("a", {
                attrs: {
                    href: "#"
                }
            }, [a("i", {
                staticClass: "i-Library"
            }), t._v(" Institutions ")]), a("a", {
                attrs: {
                    href: "#"
                }
            }, [a("i", {
                staticClass: "i-Drop"
            }), t._v(" Activities ")])])])])
        }
        ]
          , D = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "side-content-wrap",
                on: {
                    mouseenter: function(e) {
                        t.isMenuOver = !0
                    },
                    mouseleave: function(e) {
                        t.isMenuOver = !1
                    },
                    touchstart: function(e) {
                        t.isMenuOver = !0
                    }
                }
            }, [a("vue-perfect-scrollbar", {
                ref: "myData",
                staticClass: "sidebar-left rtl-ps-none ps scroll",
                class: {
                    open: t.getSideBarToggleProperties.isSideNavOpen
                },
                attrs: {
                    settings: {
                        suppressScrollX: !0,
                        wheelPropagation: !1
                    }
                }
            }, [a("div", [a("ul", {
                staticClass: "navigation-left"
            }, [t._l(t.userMenu, (function(e, s) {
                return [a("li", {
                    key: s,
                    staticClass: "nav-item",
                    class: {
                        active: t.selectedParentMenu == e.caption
                    },
                    attrs: {
                        "data-item": e.caption,
                        "data-submenu": !0
                    },
                    on: {
                        mouseenter: t.toggleSubMenu
                    }
                }, [a("a", {
                    staticClass: "nav-item-hold",
                    attrs: {
                        href: "#"
                    }
                }, [a("i", {
                    class: e.className
                }), a("span", {
                    staticClass: "nav-text"
                }, [t._v(t._s(e.caption))])]), a("div", {
                    staticClass: "triangle"
                })])]
            }
            ))], 2)])]), a("vue-perfect-scrollbar", {
                staticClass: "sidebar-left-secondary ps rtl-ps-none",
                class: {
                    open: t.getSideBarToggleProperties.isSecondarySideNavOpen
                },
                attrs: {
                    settings: {
                        suppressScrollX: !0,
                        wheelPropagation: !1
                    }
                }
            }, [a("div", {
                ref: "sidebarChild"
            }, [t._l(t.userMenu, (function(e, s) {
                return [a("ul", {
                    key: s,
                    staticClass: "childNav d-none",
                    class: {
                        "d-block": t.selectedParentMenu == e.caption
                    },
                    attrs: {
                        "data-parent": e.caption
                    }
                }, [t._l(e.childMenus, (function(e, s) {
                    return [null == s.parameter ? a("li", {
                        key: s,
                        staticClass: "nav-item"
                    }, [a("router-link", {
                        attrs: {
                            tag: "a",
                            to: {
                                name: e.url
                            }
                        }
                    }, [a("i", {
                        class: e.className
                    }), a("span", {
                        staticClass: "item-name"
                    }, [t._v(" " + t._s(e.caption) + " ")])])], 1) : a("li", {
                        key: s,
                        staticClass: "nav-item"
                    }, [a("router-link", {
                        attrs: {
                            tag: "a",
                            to: {
                                name: t.item.url,
                                params: t.item.parameter
                            }
                        }
                    }, [a("i", {
                        class: e.className
                    }), a("span", {
                        staticClass: "item-name"
                    }, [t._v(" " + t._s(e.caption) + " ")])])], 1)]
                }
                ))], 2)]
            }
            ))], 2)]), a("div", {
                staticClass: "sidebar-overlay",
                class: {
                    open: t.getSideBarToggleProperties.isSecondarySideNavOpen
                },
                on: {
                    click: function(e) {
                        return t.removeOverlay()
                    }
                }
            })], 1)
        }
          , O = []
          , P = (a("4de4"),
        a("4160"),
        a("fb6a"),
        a("1276"),
        a("159b"),
        {
            components: {
                Topnav: bt,
                VuePerfectScrollbar: C.a
            },
            props: {
                userMenu: {
                    type: [Object, Array]
                }
            },
            data: function() {
                return {
                    isDisplay: !0,
                    isMenuOver: !1,
                    isStyle: !0,
                    selectedParentMenu: "",
                    isMobile: v["isMobile"]
                }
            },
            mounted: function() {
                this.toggleSelectedParentMenu(),
                window.addEventListener("resize", this.handleWindowResize),
                document.addEventListener("click", this.returnSelectedParentMenu),
                this.handleWindowResize()
            },
            beforeDestroy: function() {
                document.removeEventListener("click", this.returnSelectedParentMenu),
                window.removeEventListener("resize", this.handleWindowResize)
            },
            computed: Object(n["a"])({}, Object(b["c"])(["getSideBarToggleProperties"])),
            methods: Object(n["a"])({}, Object(b["b"])(["changeSecondarySidebarProperties", "changeSecondarySidebarPropertiesViaMenuItem", "changeSecondarySidebarPropertiesViaOverlay", "changeSidebarProperties"]), {
                handleWindowResize: function() {
                    window.innerWidth <= 1200 ? (this.getSideBarToggleProperties.isSideNavOpen && this.changeSidebarProperties(),
                    this.getSideBarToggleProperties.isSecondarySideNavOpen && this.changeSecondarySidebarProperties()) : this.getSideBarToggleProperties.isSideNavOpen || this.changeSidebarProperties()
                },
                toggleSelectedParentMenu: function() {
                    var t = this.$route.path.split("/").filter((function(t) {
                        return "" !== t
                    }
                    ))[1];
                    this.selectedParentMenu = void 0 !== t || null !== t ? this.firstLetterToCaps(t) : "dashboards"
                },
                firstLetterToCaps: function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                toggleSubMenu: function(t) {
                    var e = t.target.dataset.submenu
                      , a = t.target.dataset.item;
                    e ? (this.selectedParentMenu = a,
                    this.changeSecondarySidebarPropertiesViaMenuItem(!0)) : (this.selectedParentMenu = a,
                    this.changeSecondarySidebarPropertiesViaMenuItem(!1))
                },
                removeOverlay: function() {
                    this.changeSecondarySidebarPropertiesViaOverlay(),
                    window.innerWidth <= 1200 && this.changeSidebarProperties(),
                    this.toggleSelectedParentMenu()
                },
                returnSelectedParentMenu: function() {
                    this.isMenuOver || this.toggleSelectedParentMenu()
                },
                toggleSidebarDropdwon: function(t) {
                    var e = this.$el.querySelectorAll(".dropdown-sidemenu.open");
                    t.currentTarget.classList.toggle("open"),
                    e.forEach((function(t) {
                        t.classList.remove("open")
                    }
                    ))
                }
            })
        })
          , E = P
          , B = Object(f["a"])(E, D, O, !1, null, "cce72cfe", null)
          , N = B.exports
          , A = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("common", {
                ref: "common"
            }), a("ValidationObserver", {
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        var s = e.invalid
                          , i = e.handleSubmit;
                        return [a("div", {
                            staticClass: "col-12 pb-2 dpCard defaultPadding"
                        }, [a("div", {
                            staticClass: "form-horizontal"
                        }, [a("div", {
                            staticClass: "form-group"
                        }, [a("label", {
                            staticClass: "col-12 control-label field-required mt-2"
                        }, [t._v("Current Password")]), a("div", {
                            staticClass: "col-12"
                        }, [a("ValidationProvider", {
                            attrs: {
                                rules: {
                                    required: !0
                                }
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [a("input", {
                                        directives: [{
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.reset.oldPassword,
                                            expression: "reset.oldPassword"
                                        }],
                                        class: e.errors.length > 0 ? "input-has-error form-control" : "form-control",
                                        attrs: {
                                            name: "Current Password",
                                            type: "password",
                                            placeholder: "Enter Current Password",
                                            autocomplete: "off"
                                        },
                                        domProps: {
                                            value: t.reset.oldPassword
                                        },
                                        on: {
                                            input: function(e) {
                                                e.target.composing || t.$set(t.reset, "oldPassword", e.target.value)
                                            }
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(e.errors[0]))])]
                                }
                            }], null, !0)
                        })], 1), a("label", {
                            staticClass: "col-12 control-label field-required mt-2"
                        }, [t._v("New Password")]), a("div", {
                            staticClass: "col-12"
                        }, [a("ValidationProvider", {
                            attrs: {
                                rules: {
                                    required: !0,
                                    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*_^#?&])[A-Za-z\d@$!%*_^#?&]{6,}$/
                                }
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [a("input", {
                                        directives: [{
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.reset.newPassword,
                                            expression: "reset.newPassword"
                                        }],
                                        class: e.errors.length > 0 ? "input-has-error form-control" : "form-control",
                                        attrs: {
                                            name: "New Password",
                                            type: "password",
                                            placeholder: "Enter New Password",
                                            autocomplete: "off"
                                        },
                                        domProps: {
                                            value: t.reset.newPassword
                                        },
                                        on: {
                                            input: function(e) {
                                                e.target.composing || t.$set(t.reset, "newPassword", e.target.value)
                                            }
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(e.errors[0]))])]
                                }
                            }], null, !0)
                        })], 1), a("label", {
                            staticClass: "col-12 control-label field-required mt-2"
                        }, [t._v("Confirm Password")]), a("div", {
                            staticClass: "col-12"
                        }, [a("ValidationProvider", {
                            attrs: {
                                rules: {
                                    required: !0,
                                    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*_^#?&])[A-Za-z\d@$!%*_^#?&]{6,}$/
                                }
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    return [a("input", {
                                        directives: [{
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.reset.confirmPassword,
                                            expression: "reset.confirmPassword"
                                        }],
                                        class: e.errors.length > 0 || t.reset.newPassword !== t.reset.confirmPassword ? "input-has-error form-control" : "form-control",
                                        attrs: {
                                            name: "Confirm Password",
                                            type: "password",
                                            placeholder: "Re-Enter New Password",
                                            autocomplete: "off"
                                        },
                                        domProps: {
                                            value: t.reset.confirmPassword
                                        },
                                        on: {
                                            input: function(e) {
                                                e.target.composing || t.$set(t.reset, "confirmPassword", e.target.value)
                                            }
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t.reset.newPassword !== t.reset.confirmPassword ? a("span", [t._v("New-password and Confirm-password must match!")]) : t._e(), t._v(" " + t._s(e.errors[0]))])]
                                }
                            }], null, !0)
                        })], 1)])])]), a("div", {
                            staticClass: "col-12",
                            staticStyle: {
                                "text-align": "right"
                            }
                        }, [a("button", {
                            staticClass: "btn btn-sm btn-primary mr-3",
                            attrs: {
                                disabled: s || t.reset.newPassword !== t.reset.confirmPassword
                            },
                            on: {
                                click: function(e) {
                                    i(t.resetPassword(t.reset, s))
                                }
                            }
                        }, [a("i", {
                            staticClass: "fa fa-check"
                        }), t._v(" Update ")])])]
                    }
                }])
            })], 1)
        }
          , R = []
          , L = a("7c15")
          , $ = a("7722")
          , I = a("7bb1")
          , j = {
            components: {
                common: $["a"],
                ValidationObserver: I["a"],
                ValidationProvider: I["b"]
            },
            data: function() {
                return {
                    reset: {
                        email: "",
                        oldPassword: "",
                        newPassword: "",
                        confirmPassword: ""
                    },
                    isSaveButtonDisable: !0
                }
            },
            watch: {
                "reset.confirmPassword": function(t, e) {
                    "" != this.reset.oldPassword && "" != this.reset.newPassword && "" != this.reset.confirmPassword ? this.isSaveButtonDisable = !1 : this.isSaveButtonDisable = !0
                }
            },
            mounted: function() {
                this.reset.email = this.email,
                this.reset.oldPassword = ""
            },
            methods: {
                resetPassword: function(t, e) {
                    var a = this;
                    if (!e) {
                        var s = this.$refs.common;
                        if (t.newPassword == t.confirmPassword) {
                            this.isSaveButtonDisable = !0;
                            var i = this
                              , r = "/api/Identity/ChangePassword";
                            Object(L["a"])(r, "post", t).then((function(t) {
                                i.isSaveButtonDisable = !1,
                                s.ManageResponse(t),
                                i.$store.commit("SET_LOGGEDOUT", !0),
                                a.$emit("logOut")
                            }
                            )).catch((function(t) {
                                i.isSaveButtonDisable = !1,
                                s.ManageResponse(t.response)
                            }
                            ))
                        } else
                            s.ShowToaster("Your password and confirmation password do not match", "warn")
                    }
                }
            },
            props: {
                email: String
            }
        }
          , U = j
          , W = Object(f["a"])(U, A, R, !1, null, null, null)
          , z = W.exports
          , V = a("50e2")
          , Y = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("div", {
                staticClass: "search-bar"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.searchString,
                    expression: "searchString"
                }],
                attrs: {
                    type: "text",
                    placeholder: "Search"
                },
                domProps: {
                    value: t.searchString
                },
                on: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.search(e)
                    },
                    keyup: t.menuSearch,
                    click: t.checkForMenuSearch,
                    input: function(e) {
                        e.target.composing || (t.searchString = e.target.value)
                    }
                }
            }), a("i", {
                staticClass: "search-icon text-muted i-Magnifi-Glass1"
            })]), t.searchParamList2.length > 0 ? a("div", {
                staticClass: "search-menu-list card"
            }, [a("ul", {
                staticClass: "list-group",
                staticStyle: {
                    "list-style": "none",
                    "padding-left": "0px"
                },
                attrs: {
                    id: "results"
                }
            }, t._l(t.searchParamList2, (function(e, s) {
                return a("li", {
                    key: s,
                    staticClass: "list-group-item-text target-r-active pb-2",
                    staticStyle: {
                        "font-weight": "bold"
                    },
                    on: {
                        click: function(e) {
                            t.searchString = ""
                        }
                    }
                }, [a("router-link", {
                    attrs: {
                        to: {
                            name: e.url
                        }
                    }
                }, [a("span", {
                    staticClass: "item-name"
                }, [t._v(" " + t._s(e.caption) + " ")])])], 1)
            }
            )), 0)]) : t._e()])
        }
          , F = []
          , H = (a("c975"),
        a("b85c"))
          , q = a("2909")
          , G = a("4a46")
          , K = {
            watch: {
                searchString: function(t) {
                    t || (this.searchParamList2 = [])
                }
            },
            data: function() {
                return {
                    searchString: "",
                    userMenu: [],
                    searchParamList: [],
                    searchParamList2: []
                }
            },
            created: function() {
                G["a"].$on("ClearSearchBar", this.clearSearchBar)
            },
            destroyed: function() {
                G["a"].$off("ClearSearchBar", this.clearSearchBar)
            },
            mounted: function() {
                setTimeout((function() {}
                ), 1e3)
            },
            methods: {
                search: function() {
                    void 0 != this.searchString && "?" != this.searchString[0] && G["a"].$emit("SearchRequest", this.searchString)
                },
                getSearchParamList: function() {
                    for (var t in this.userMenu = this.$store.getters.getMenuList,
                    this.userMenu.childMenus)
                        for (var e in this.userMenu.childMenus[t].childMenus)
                            if (this.searchParamList.push({
                                caption: this.userMenu.childMenus[t].childMenus[e].caption,
                                url: this.userMenu.childMenus[t].childMenus[e].url
                            }),
                            null != this.userMenu.childMenus[t].childMenus[e].childMenus)
                                for (var a in this.userMenu.childMenus[t].childMenus[e].childMenus)
                                    this.searchParamList.push({
                                        caption: this.userMenu.childMenus[t].childMenus[e].childMenus[a].caption,
                                        url: this.userMenu.childMenus[t].childMenus[e].childMenus[a].url
                                    });
                    this.searchParamList.sort((function(t, e) {
                        return t.caption > e.caption ? 1 : e.caption > t.caption ? -1 : 0
                    }
                    ))
                },
                menuSearch: function() {
                    if (void 0 != this.searchString && "?" == this.searchString[0]) {
                        var t = this.searchString;
                        while ("?" === t.charAt(0))
                            t = t.substr(1);
                        if (0 === t.length)
                            return this.searchParamList2 = [],
                            void (this.searchParamList2 = Object(q["a"])(this.searchParamList));
                        var e = this.searchParamList;
                        this.searchParamList2 = [];
                        var a, s = Object(H["a"])(e);
                        try {
                            for (s.s(); !(a = s.n()).done; ) {
                                var i = a.value
                                  , r = i.caption.toLowerCase();
                                r.indexOf(t.toLowerCase()) > -1 && this.searchParamList2.push(i)
                            }
                        } catch (n) {
                            s.e(n)
                        } finally {
                            s.f()
                        }
                    }
                },
                checkForMenuSearch: function() {
                    this.searchParamList = [],
                    this.getSearchParamList()
                },
                clearSearchBar: function() {
                    this.searchString = ""
                }
            }
        }
          , X = K
          , J = Object(f["a"])(X, Y, F, !1, null, null, null)
          , Z = J.exports
          , Q = a("8e5f")
          , tt = a.n(Q)
          , et = a("5f87")
          , at = a("231d")
          , st = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("b-tabs", {
                staticClass: "mt-2 notif-tab-pills",
                attrs: {
                    pills: "",
                    "content-class": "px-2"
                },
                model: {
                    value: t.currentTab,
                    callback: function(e) {
                        t.currentTab = e
                    },
                    expression: "currentTab"
                }
            }, [a("b-tab", {
                attrs: {
                    title: "Unread",
                    active: ""
                }
            }, [a("div", {
                staticClass: "t-a-r pr-1 text-primary underline-on-hover c-pointer",
                on: {
                    click: t.markAllAsRead
                }
            }, [t._v(" Mark all as read ")]), "list" == t.listStyle ? a("b-list-group", [t._l(t.notifications, (function(e, s) {
                return [e.readStatus ? t._e() : a("b-list-group-item", {
                    key: "n" + s,
                    staticClass: "c-default d-flex justify-content-between show-options-on-hover",
                    staticStyle: {
                        transition: "all 0.5s ease"
                    },
                    style: "animation: dpSlideFadeInRight ease " + s / 10 + "s;"
                }, [a("div", {
                    staticClass: "text-gray-900 font-weight-600 col pl-0 c-pointer",
                    attrs: {
                        id: "MessageContainerUR" + s
                    },
                    on: {
                        click: function(a) {
                            return t.gotoTask(e.notification)
                        }
                    }
                }), [t._v(" " + t._s(e.notification ? t.changeColor("MessageContainerUR" + s, e.notification.message) : "") + " ")], a("span", {
                    staticStyle: {
                        "font-size": "10px c-pointer"
                    },
                    on: {
                        click: function(a) {
                            return t.gotoTask(e.notification)
                        }
                    }
                }, [t._v(" " + t._s(e.notification ? t.normaliseDate(e.notification.issueAt) : "") + " ")]), a("div", {
                    staticClass: "shown dp-slide-fade-in-right",
                    staticStyle: {
                        position: "absolute",
                        right: "0"
                    }
                }, [a("button", {
                    staticClass: "btn",
                    attrs: {
                        title: "Mark as read"
                    },
                    on: {
                        click: function(a) {
                            return t.markNotifAsRead(e.id)
                        }
                    }
                }, [a("i", {
                    staticClass: "fa fa-check text-primary"
                })])])], 2)]
            }
            ))], 2) : t._e()], 1), a("b-tab", {
                attrs: {
                    title: "Read"
                }
            }, [t._l(t.notifications, (function(e, s) {
                return [e.readStatus ? a("b-list-group-item", {
                    key: "n" + s,
                    staticClass: "c-default d-flex justify-content-between",
                    style: "animation: dpSlideFadeInRight ease " + s / 10 + "s;"
                }, [a("div", {
                    staticClass: "text-gray-900 font-weight-600 col pl-0 c-pointer",
                    attrs: {
                        id: "MessageContainerR" + s
                    },
                    on: {
                        click: function(a) {
                            return t.gotoTask(e.notification)
                        }
                    }
                }), [t._v(" " + t._s(e.notification ? t.changeColor("MessageContainerR" + s, e.notification.message) : "") + " ")], a("span", {
                    staticStyle: {
                        "font-size": "10px"
                    },
                    on: {
                        click: function(a) {
                            return t.gotoTask(e.notification)
                        }
                    }
                }, [t._v(t._s(e.notification ? t.normaliseDate(e.notification.issueAt) : ""))])], 2) : t._e()]
            }
            ))], 2)], 1), a("slide-out", {
                ref: "showTask",
                staticClass: "not-task-view",
                attrs: {
                    visible: t.showTask,
                    dock: "right",
                    size: t.dWidth > 768 ? "60%" : "100%",
                    "append-to": "body",
                    "allow-resize": ""
                },
                on: {
                    "update:visible": function(e) {
                        t.showTask = e
                    },
                    close: t.taskViewClose
                }
            }, [a("div", [t.showTask ? a("TaskCardView", {
                key: t.tcvKey,
                ref: "taskView",
                attrs: {
                    taskId: t.taskData.id,
                    inititalTaskCode: t.taskData.number,
                    taskData: t.taskData,
                    breadCrumbList: t.breadCrumbList,
                    selectedTab: t.selectedTab
                },
                on: {
                    "update:breadCrumbList": function(e) {
                        t.breadCrumbList = e
                    },
                    "update:bread-crumb-list": function(e) {
                        t.breadCrumbList = e
                    },
                    taskViewClose: t.taskViewClose,
                    OpenSubTaskcard: t.OpenSubTaskcard,
                    refreshTaskList: t.refreshTaskList,
                    "update:selectedTab": function(e) {
                        t.selectedTab = e
                    },
                    "update:selected-tab": function(e) {
                        t.selectedTab = e
                    }
                }
            }) : t._e()], 1)])], 1)
        }
          , it = []
          , rt = (a("5319"),
        a("5a0c"))
          , nt = a.n(rt)
          , ot = a("819a")
          , lt = a("2d94")
          , ct = a.n(lt)
          , dt = (a("1e08"),
        a("1c1c"));
        nt.a.extend(dt);
        var ut = {
            components: {
                TaskCardView: ot["a"],
                SlideOut: ct.a
            },
            props: {
                listStyle: {
                    type: String,
                    default: "list"
                }
            },
            data: function() {
                return {
                    dWidth: window.innerWidth,
                    notifications: [],
                    showNotifSlideout: !1,
                    currentTab: 0,
                    showTask: !1,
                    taskData: {
                        id: null,
                        number: ""
                    },
                    breadCrumbList: [],
                    tcvKey: 1019181,
                    selectedTab: 0
                }
            },
            watch: {
                currentTab: function(t) {
                    this.getNotifications()
                }
            },
            mounted: function() {},
            methods: {
                taskViewClose: function() {
                    this.showTask = !1,
                    this.breadCrumbList = []
                },
                markAllAsRead: function() {
                    var t = this
                      , e = "/api/bitTask/SubscriberNotification/MarkAsReadAll";
                    Object(L["a"])(e, "post", "").then((function(e) {
                        t.getNotifications()
                    }
                    )).catch((function(t) {
                        console.log(t)
                    }
                    ))
                },
                getNotifications: function() {
                    var t = this
                      , e = !0;
                    e = 0 != this.currentTab;
                    var a = "/api/bitTask/SubscriberNotification/GetNotifications?ReadStatus=" + e;
                    Object(L["a"])(a, "get", "").then((function(e) {
                        t.notifications = e.data.data
                    }
                    ))
                },
                notifSlideoutClosed: function() {},
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : nt()().calendar(nt()(t))
                },
                markNotifAsRead: function(t) {
                    var e = this
                      , a = "/api/bitTask/SubscriberNotification/MarkAsRead";
                    Object(L["a"])(a, "post", {
                        id: t
                    }).then((function(t) {
                        e.getNotifications()
                    }
                    )).catch((function(t) {
                        console.log(t)
                    }
                    ))
                },
                changeColor: function(t, e) {
                    if (e) {
                        var a = e
                          , s = /rejected|approved|Rejected|Approved|completd|Completed/gi
                          , i = String(s)
                          , r = i.replace("/g", "|").substring(1)
                          , n = r.split("|");
                        (n.indexOf("rejected") > -1 || n.indexOf("Rejected") > -1) && (a = a.replace(/rejected|Rejected/g, '<span class="text-danger font-weight-700">Rejected</span>')),
                        (n.indexOf("completd") > -1 || n.indexOf("Completed") > -1) && (a = a.replace(/Completed|Completed/g, '<span class="text-success font-weight-630">Completed</span>')),
                        (n.indexOf("approved") > -1 || n.indexOf("Approved") > -1) && (a = a.replace(/approved|Approved/g, '<span class="text-success font-weight-700">Approved</span>')),
                        setTimeout((function() {
                            document.getElementById(t) && (document.getElementById(t).innerHTML = a)
                        }
                        ), 50)
                    }
                },
                OpenSubTaskcard: function(t) {
                    this.$refs.taskView.getTaskById(),
                    this.showTask = !0,
                    this.taskData = t,
                    this.tcvKey++
                },
                gotoTask: function(t) {
                    var e = {
                        id: t.taskId,
                        number: t.taskNumber
                    };
                    this.breadCrumbList["length"] < 1 && this.breadCrumbList.push({
                        id: e.id,
                        number: e.number
                    }),
                    this.showTask = !0,
                    this.taskData = e
                },
                refreshTaskList: function() {}
            }
        }
          , pt = ut
          , ht = (a("05df"),
        Object(f["a"])(pt, st, it, !1, null, null, null))
          , ft = ht.exports
          , mt = {
            mixins: [_["mixin"]],
            components: {
                Sidebar: N,
                searchComponent: g,
                changePassword: z,
                CustomModal: V["a"],
                SearchBar: Z,
                ValidationObserver: I["a"],
                ValidationProvider: I["b"],
                multiselect: tt.a,
                commonComp: $["a"],
                notifications: ft,
                SlideOut: ct.a
            },
            data: function() {
                return {
                    dWidth: window.innerWidth,
                    isDisplay: !0,
                    userDetails: {},
                    googleLoginDetails: {},
                    isStyle: !0,
                    isSearchOpen: !1,
                    isMouseOnMegaMenu: !0,
                    isMegaMenuOpen: !1,
                    showChangePassword: !1,
                    searchString: "",
                    workshopAddButtonDisable: !1,
                    branchList: [],
                    defaultBranch: [],
                    selectedBranch: {},
                    setDefaultBranch: {
                        branchId: null,
                        branchName: ""
                    },
                    notifications: 0,
                    notificationShow: !1,
                    showNotifSlideout: !1
                }
            },
            created: function() {},
            mounted: function() {
                this.userDetails = this.$store.getters.getUserDetails,
                this.googleLoginDetails = this.$store.getters.getGoogleLoginDetails,
                this.getDefBranch(),
                this.getBranch(),
                this.selectedBranch = {
                    id: this.defaultBranch.id,
                    branchName: this.defaultBranch.branchName
                }
            },
            computed: Object(n["a"])({}, Object(b["c"])(["getCompactSideBarToggleProperties", "getUserDetails", "getGoogleLoginDetails"])),
            watch: {
                getUserDetails: function(t) {
                    this.userDetails = t
                },
                selectedBranch: function(t) {
                    t && (this.setDefaultBranch.branchId = t.id,
                    this.setDefaultBranch.branchName = t.branchName)
                },
                showNotifSlideout: function(t) {
                    this.dWidth = window.innerWidth
                }
            },
            methods: Object(n["a"])({}, Object(b["b"])(["changeSecondarySidebarProperties", "changeCompactSidebarProperties", "changeThemeMode", "signOut"]), {
                getUserDetailsFromStore: function() {
                    var t = this;
                    Object(at["b"])().then((function(e) {
                        t.$store.commit("SET_USER_DETAILS", e.data.data),
                        t.userDetails = e.data.data
                    }
                    ))
                },
                notifSlideoutClosed: function() {
                    this.$refs.notifComp.notifications = []
                },
                openPasswodChange: function() {
                    this.$refs.changePassword.Open()
                },
                passwordChange: function() {},
                goBack: function() {
                    var t = this;
                    document.getElementById("dp-backbtn").classList.add("dp-slide-fade-left"),
                    setTimeout((function() {
                        document.getElementById("dp-backbtn").classList.remove("dp-slide-fade-left"),
                        t.$router.go(-1)
                    }
                    ), 200)
                },
                handleFullScreen: function() {
                    c["a"].toggleFullScreen()
                },
                logoutUser: function() {
                    this.signOut(),
                    this.$router.push("/app/sessions/signIn")
                },
                changePassword: function() {
                    this.showChangePassword = !0
                },
                closeMegaMenu: function() {
                    this.isMegaMenuOpen = !1
                },
                toggleMegaMenu: function() {
                    this.isMegaMenuOpen = !this.isMegaMenuOpen
                },
                toggleSearch: function() {
                    this.isSearchOpen = !this.isSearchOpen
                },
                compactSideBarToggle: function(t) {
                    this.getCompactSideBarToggleProperties.isSideNavOpen && v["isMobile"] || this.getCompactSideBarToggleProperties.isSideNavOpen ? this.changeCompactSidebarProperties() : this.getCompactSideBarToggleProperties.isSideNavOpen || this.getCompactSideBarToggleProperties.isActiveSecondarySideNav ? this.getCompactSideBarToggleProperties.isSideNavOpen || (this.changeCompactSidebarProperties(),
                    console.log("4")) : this.changeCompactSidebarProperties()
                },
                sideBarToggle: function(t) {
                    this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen && v["isMobile"] ? (this.changeSidebarProperties(),
                    this.changeSecondarySidebarProperties()) : this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen ? this.changeSecondarySidebarProperties() : this.getSideBarToggleProperties.isSideNavOpen ? this.changeSidebarProperties() : this.getSideBarToggleProperties.isSideNavOpen || this.getSideBarToggleProperties.isSecondarySideNavOpen || this.getSideBarToggleProperties.isActiveSecondarySideNav ? this.getSideBarToggleProperties.isSideNavOpen || this.getSideBarToggleProperties.isSecondarySideNavOpen || (this.changeSidebarProperties(),
                    this.changeSecondarySidebarProperties()) : this.changeSidebarProperties()
                },
                changeWorkshop: function() {
                    this.$refs.changeWorkshop.Open()
                },
                getDefBranch: function() {
                    var t = this
                      , e = (this.$refs.common,
                    "/api/Token/GetCurrentUserDefaultBranch");
                    Object(L["a"])(e, "post", "").then((function(e) {
                        t.defaultBranch = e.data.data,
                        t.defaultBranch || t.$refs.branchAssign.Open(),
                        t.selectedBranch = {
                            id: t.defaultBranch.id,
                            branchName: t.defaultBranch.branchName
                        }
                    }
                    )).catch((function(e) {
                        t.dpLoading = !1
                    }
                    ))
                },
                getBranch: function() {
                    var t = this
                      , e = this.$refs.common
                      , a = "/api/Token/GetUserBranches";
                    Object(L["a"])(a, "post", "").then((function(e) {
                        null != e.data.data && (t.branchList = e.data.data)
                    }
                    )).catch((function(a) {
                        t.dpLoading = !1,
                        e.ManageResponse(a.response)
                    }
                    ))
                },
                onCancel: function() {
                    this.selectedBranch = {},
                    this.$refs.changeWorkshop.Close(),
                    this.workshopAddButtonDisable = !1
                },
                addWorkshop: function() {
                    var t = this
                      , e = this.$refs.common;
                    this.workshopAddButtonDisable = !0;
                    var a = "/api/Identity/UpdateDefaultBranchId";
                    Object(L["a"])(a, "post", this.setDefaultBranch).then((function(e) {
                        t.$refs.changeWorkshop.Close(),
                        t.shouldLogOut ? (t.$store.commit("SET_LOGGEDOUT", !0),
                        location.reload()) : (t.$store.commit("SET_TOKEN", e.data.data.token),
                        Object(et["d"])(),
                        Object(et["e"])(e.data.data.token),
                        t.$router.push({
                            name: "home"
                        }),
                        location.reload()),
                        t.workshopAddButtonDisable = !1
                    }
                    )).catch((function(a) {
                        t.workshopAddButtonDisable = !1,
                        e.ManageResponse(a.response),
                        location.reload()
                    }
                    ))
                },
                getNotifications: function() {
                    this.showNotifSlideout = !0,
                    this.$refs.notifComp.getNotifications()
                },
                logOutFromModal: function() {
                    this.$refs.branchAssign.Close(),
                    this.logoutUser()
                }
            }, Object(b["b"])(["signOut"]))
        }
          , gt = mt
          , vt = (a("9c01"),
        Object(f["a"])(gt, M, T, !1, null, "7889bef3", null))
          , bt = vt.exports
          , _t = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "side-content-wrap dp-expand-nav-on-hover",
                on: {
                    mouseenter: function(e) {
                        t.isMenuOver = !0
                    },
                    mouseleave: function(e) {
                        t.hideSubMenu(),
                        t.isMenuOver = !1
                    },
                    touchstart: function(e) {
                        t.isMenuOver = !0
                    }
                }
            }, [s("vue-perfect-scrollbar", {
                ref: "myData",
                staticClass: "sidebar-left rtl-ps-none ps",
                class: {
                    open: t.getCompactSideBarToggleProperties.isSideNavOpen
                },
                staticStyle: {
                    "overflow-y": "auto !important"
                },
                attrs: {
                    settings: {
                        suppressScrollX: !0,
                        wheelPropagation: !1
                    }
                }
            }, [s("ul", {
                staticClass: "navigation-left expand-this"
            }, [s("div", {
                staticClass: "logo c-pointer",
                on: {
                    click: t.goHome,
                    mouseenter: t.hideSubMenu
                }
            }, [s("img", {
                staticClass: "logoClass",
                attrs: {
                    alt: "",
                    src: a("9d64")
                }
            }), s("span", {
                staticClass: "dp-show-on-parent-hover text-white font-weight-bold w-100",
                staticStyle: {
                    "font-size": "18px",
                    "padding-top": "10px"
                }
            }, [t._v("BIT Task")])]), s("li", {
                staticClass: "nav-item",
                class: {
                    active: "Home" == t.selectedParentMenu
                },
                attrs: {
                    "data-item": "Home",
                    "data-submenu": !1
                },
                on: {
                    mouseenter: t.hideSubMenu
                }
            }, [s("router-link", {
                attrs: {
                    tag: "a",
                    to: {
                        name: "home"
                    },
                    title: "Home"
                }
            }, [s("a", {
                staticClass: "nav-item-hold",
                attrs: {
                    href: "#"
                }
            }, [s("i", {
                staticClass: "i-Home1 nav-icon"
            }), s("span", {
                staticClass: "dp-show-on-parent-hover"
            }, [t._v("Home")])])]), s("div", {
                staticClass: "triangle"
            })], 1), t._l(t.userMenu, (function(e, a) {
                return [s("li", {
                    key: a,
                    staticClass: "nav-item",
                    class: {
                        active: t.selectedParentMenu == e.caption
                    },
                    attrs: {
                        "data-item": e.caption,
                        "data-submenu": !0
                    },
                    on: {
                        mouseenter: t.toggleSubMenu
                    }
                }, [s("router-link", {
                    attrs: {
                        tag: "a",
                        to: {
                            name: e.url
                        },
                        title: e.caption
                    }
                }, [s("a", {
                    staticClass: "nav-item-hold",
                    attrs: {
                        href: "#"
                    }
                }, [s("i", {
                    class: e.className
                }), s("span", {
                    staticClass: "dp-show-on-parent-hover"
                }, [t._v(t._s(e.caption))])])]), s("div", {
                    staticClass: "triangle"
                })], 1)]
            }
            )), s("div", {
                staticStyle: {
                    height: "50px"
                }
            })], 2)]), t.hideSecondaryMenu ? t._e() : s("div", {
                staticClass: "dp-slide-fade-in-right sidebar-left-secondary ps rtl-ps-none show-on-sidebar-left-hover"
            }, [s("div", {
                ref: "sidebarChild"
            }, [t._l(t.userMenu, (function(e, a) {
                return [s("ul", {
                    key: a,
                    staticClass: "childNav d-none",
                    class: {
                        "d-block": t.selectedParentMenu == e.caption
                    },
                    attrs: {
                        "data-parent": e.caption
                    }
                }, [t._l(e.childMenus, (function(e, a) {
                    return [null == a.parameter ? s("li", {
                        key: a,
                        staticClass: "nav-item pl-0"
                    }, [s("router-link", {
                        attrs: {
                            tag: "a",
                            to: {
                                name: e.url
                            }
                        }
                    }, [s("i", {
                        class: e.className
                    }), s("span", {
                        staticClass: "item-name"
                    }, [t._v(" " + t._s(e.caption) + " ")])])], 1) : s("li", {
                        key: a,
                        staticClass: "nav-item"
                    }, [s("router-link", {
                        attrs: {
                            tag: "a",
                            to: {
                                name: t.item.url,
                                params: t.item.parameter
                            }
                        }
                    }, [s("i", {
                        class: e.className
                    }), s("span", {
                        staticClass: "item-name"
                    }, [t._v(" " + t._s(e.caption) + " ")])])], 1)]
                }
                ))], 2)]
            }
            ))], 2)]), s("div", {
                staticClass: "sidebar-overlay",
                class: {
                    open: t.getCompactSideBarToggleProperties.isSideNavOpen && t.windowWidth <= 1200
                },
                on: {
                    click: function(e) {
                        return t.removeOverlay()
                    }
                }
            })], 1)
        }
          , wt = []
          , Ct = {
            components: {
                VuePerfectScrollbar: C.a
            },
            data: function() {
                return {
                    isMenuOver: !1,
                    selectedParentMenu: "",
                    isMobile: v["isMobile"],
                    windowWidth: window.innerWidth,
                    hideSecondaryMenu: !0
                }
            },
            props: {
                userMenu: {
                    type: [Object, Array]
                }
            },
            mounted: function() {
                this.toggleSelectedParentMenu(),
                window.addEventListener("resize", this.handleWindowResize),
                document.addEventListener("click", this.returnSelectedParentMenu),
                this.handleWindowResize()
            },
            beforeDestroy: function() {
                document.removeEventListener("click", this.returnSelectedParentMenu),
                window.removeEventListener("resize", this.handleWindowResize)
            },
            computed: Object(n["a"])({}, Object(b["c"])(["getCompactSideBarToggleProperties"])),
            methods: Object(n["a"])({}, Object(b["b"])(["changeCompactSidebarProperties"]), {
                goHome: function() {
                    this.$router.push("/").catch((function(t) {}
                    ))
                },
                removeOverlay: function() {
                    this.changeCompactSidebarProperties(),
                    this.toggleSelectedParentMenu()
                },
                compactSideBarToggle: function(t) {
                    this.getCompactSideBarToggleProperties.isSideNavOpen && this.changeCompactSidebarProperties()
                },
                handleWindowResize: function() {
                    this.windowWidth = window.innerWidth,
                    window.innerWidth <= 1200 ? this.getCompactSideBarToggleProperties.isSideNavOpen && this.changeCompactSidebarProperties() : this.getCompactSideBarToggleProperties.isSideNavOpen || this.changeCompactSidebarProperties()
                },
                toggleSelectedParentMenu: function() {
                    var t = this.$route.path.split("/").filter((function(t) {
                        return "" !== t
                    }
                    ))[1];
                    this.selectedParentMenu = t ? t.toLowerCase() : "dashboards"
                },
                toggleSubMenu: function(t) {
                    var e = t.target.dataset.submenu
                      , a = t.target.dataset.item;
                    e ? (this.selectedParentMenu = a,
                    this.hideSecondaryMenu || document.querySelector(".show-on-sidebar-left-hover").classList.add("show-sidebar-secondary")) : this.toggleSelectedParentMenu()
                },
                showSubMenu: function(t) {
                    this.hideSecondaryMenu || document.querySelector(".show-on-sidebar-left-hover").classList.add("show-sidebar-secondary")
                },
                hideSubMenu: function(t) {
                    this.hideSecondaryMenu || document.querySelector(".show-on-sidebar-left-hover").classList.remove("show-sidebar-secondary")
                },
                returnSelectedParentMenu: function() {
                    this.isMenuOver || this.toggleSelectedParentMenu()
                },
                toggleSidebarDropdwon: function(t) {
                    var e = this.$el.querySelectorAll(".dropdown-sidemenu.open");
                    t.currentTarget.classList.toggle("open"),
                    e.forEach((function(t) {
                        t.classList.remove("open")
                    }
                    ))
                }
            })
        }
          , yt = Ct
          , St = (a("c052"),
        a("ca74"),
        Object(f["a"])(yt, _t, wt, !1, null, "50d0a28c", null))
          , kt = St.exports
          , xt = a("1e5d")
          , Mt = {
            components: {
                TopNav: bt,
                compactTopbar: x,
                compactSidebar: kt,
                appFooter: xt["a"]
            },
            data: function() {
                return {
                    userMenu: []
                }
            },
            computed: Object(n["a"])({}, Object(b["c"])(["getCompactSideBarToggleProperties", "getcompactLeftSideBarBgColor", "getMenuList"])),
            mounted: function() {
                this.userMenu = this.$store.getters.getMenuList,
                this.getMenu()
            },
            watch: {
                getMenuList: function(t) {
                    this.userMenu = t
                }
            },
            methods: {
                getMenu: function() {
                    var t = this;
                    return Object(r["a"])(regeneratorRuntime.mark((function e() {
                        var a, s;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = t,
                                    s = "/api/Token/GetCurrentUserMenu",
                                    e.next = 4,
                                    Object(L["a"])(s, "post", "").then((function(e) {
                                        a.userMenu = e.data.data,
                                        t.$store.commit("SET_MENU_LIST", e.data.data);
                                        for (var s = 0; s < a.userMenu.childMenus.length; s++)
                                            if (null != a.userMenu.childMenus[s].childMenus)
                                                for (var i = 0; i < a.userMenu.childMenus[s].childMenus.length; i++)
                                                    if (null != a.userMenu.childMenus[s].childMenus[i].childMenus)
                                                        for (var r = 0; r < a.userMenu.childMenus[s].childMenus[i].childMenus.length; r++)
                                                            null != a.userMenu.childMenus[s].childMenus[i].childMenus[r].parameter && (a.userMenu.childMenus[s].childMenus[i].childMenus[r].parameter = JSON.parse(a.userMenu.childMenus[s].childMenus[i].childMenus[r].parameter));
                                                    else
                                                        null != a.userMenu.childMenus[s].childMenus[i].parameter && (a.userMenu.childMenus[s].childMenus[i].parameter = JSON.parse(a.userMenu.childMenus[s].childMenus[i].parameter))
                                    }
                                    )).catch((function(t) {
                                        console.log(t)
                                    }
                                    ));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            }
        }
          , Tt = Mt
          , Dt = (a("81e5"),
        Object(f["a"])(Tt, s, i, !1, null, "002d14a4", null));
        e["default"] = Dt.exports
    },
    ff05: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return mainMixins
        }
        ));
        var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb6a")
          , core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__)
          , regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("96cf")
          , regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__)
          , _home_descpro_Haris_Projects_BitTask_TaskUi_Bit_TaskManager_src_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1da1")
          , _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4360")
          , _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5f87")
          , dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5a0c")
          , dayjs__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__)
          , _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("7c15")
          , _encryptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7218")
          , _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("41cb")
          , mainMixins = {
            data: function() {
                return {
                    devWidth: 1e3,
                    dpLoading: !1,
                    footerCrumbs: "",
                    footerLoading: !1,
                    adaptiveLabel: "",
                    dateConfig: {
                        dateFormat: "Y-m-d",
                        wrap: !0,
                        altFormat: "d-m-Y",
                        altInput: !0,
                        disableMobile: !0
                    },
                    dateConfig1: {
                        dateFormat: "Y-m-d",
                        minDate: dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format("YYYY-MM-DD"),
                        wrap: !0,
                        altInput: !0,
                        disableMobile: !0
                    },
                    localSubmitUrl: this.SubmitUrl
                }
            },
            watch: {
                dpLoading: function(t, e) {
                    this.$root.$children[0].isLoading = 1 == t
                },
                footerLoading: function(t, e) {
                    this.$root.$children[0].footerLoading = !0 === t
                },
                footerCrumbs: function(t, e) {
                    this.$root.$children[0].footerCrumbs = t
                }
            },
            beforeRouteEnter: function(t, e, a) {
                var s = btoa("fromBelongs")
                  , i = btoa("toBelongs")
                  , r = btoa("SubmitUrl");
                void 0 != t.params.SubmitUrl && Object(_encryptor__WEBPACK_IMPORTED_MODULE_7__["c"])(t.params.SubmitUrl, r, 19),
                localStorage.getItem(btoa("Admin-Token")) ? sessionStorage.removeItem(btoa("external")) : t.matched && (t.matched[0].components.External ? sessionStorage.setItem(btoa("external"), !0) : sessionStorage.removeItem(btoa("external"))),
                a((function(a) {
                    a.encryptIt(e.meta.belongs, s, 19),
                    a.encryptIt(t.meta.belongs, i, 19);
                    var r = a.GetItem("SubmitUrl");
                    void 0 != r && "undefined" != r && (a.localSubmitUrl = r);
                    localStorage.getItem(btoa("Admin-Token"));
                    a.devWidth = window.innerWidth,
                    a.devWidth > 666 ? a.adaptiveLabel = "pull-right" : a.adaptiveLabel = "pull-left"
                }
                ))
            },
            methods: {
                capitalizeFirstLetter: function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                setFromBelongs: function(t) {
                    this.fromBelongs = t
                },
                setToBelongs: function(t) {
                    this.toBelongs = t
                },
                convertTheDate: function(t) {
                    return null == t || void 0 == t ? "-" : dayjs__WEBPACK_IMPORTED_MODULE_5___default()(t).format("YYYY-MM-DD")
                },
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : dayjs__WEBPACK_IMPORTED_MODULE_5___default()(t).format("DD-MM-YYYY")
                },
                convertToDateTime: function(t) {
                    return null == t || void 0 == t ? "-" : dayjs__WEBPACK_IMPORTED_MODULE_5___default()(t).format("DD-MM-YY | hh:mm a")
                },
                now: function() {
                    return dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format("YYYY-MM-DD")
                },
                encryptIt: function(t, e, a) {
                    Object(_encryptor__WEBPACK_IMPORTED_MODULE_7__["c"])(t, e, a)
                },
                decryptIt: function(t, e) {
                    return Object(_encryptor__WEBPACK_IMPORTED_MODULE_7__["b"])(t, e)
                },
                GetItem: function(t) {
                    var e = btoa(t)
                      , a = this.decryptIt(e, -19);
                    return a
                },
                OnEditCommon: function() {
                    var _OnEditCommon = Object(_home_descpro_Haris_Projects_BitTask_TaskUi_Bit_TaskManager_src_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function _callee(rowData, submitUrl, listTable, currentpage) {
                        var routename, url;
                        return regeneratorRuntime.wrap((function _callee$(_context) {
                            while (1)
                                switch (_context.prev = _context.next) {
                                case 0:
                                    routename = "";
                                    try {
                                        url = eval(submitUrl),
                                        routename = this.GetItem("toBelongs"),
                                        currentpage.$router.push({
                                            name: routename,
                                            params: {
                                                id: rowData.id,
                                                SubmitUrl: url
                                            }
                                        })
                                    } catch (err) {
                                        routename = this.GetItem("toBelongs"),
                                        currentpage.$router.push({
                                            name: routename,
                                            params: {
                                                id: rowData.id,
                                                SubmitUrl: submitUrl
                                            }
                                        })
                                    }
                                case 2:
                                case "end":
                                    return _context.stop()
                                }
                        }
                        ), _callee, this)
                    }
                    )));
                    function OnEditCommon(t, e, a, s) {
                        return _OnEditCommon.apply(this, arguments)
                    }
                    return OnEditCommon
                }(),
                OnDeleteCommon: function() {
                    var t = Object(_home_descpro_Haris_Projects_BitTask_TaskUi_Bit_TaskManager_src_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function t(e, a, s, i) {
                        var r, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    r = i.$refs.common,
                                    n = function() {
                                        var t = Object(_home_descpro_Haris_Projects_BitTask_TaskUi_Bit_TaskManager_src_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function t() {
                                            var i, n;
                                            return regeneratorRuntime.wrap((function(t) {
                                                while (1)
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return i = a,
                                                        n = {
                                                            id: e.id
                                                        },
                                                        t.next = 4,
                                                        Object(_utils_api__WEBPACK_IMPORTED_MODULE_6__["a"])(i, "post", n).then((function(t) {
                                                            r.ManageResponse(t),
                                                            s.$refs.vuetable.refresh()
                                                        }
                                                        )).catch((function(t) {
                                                            r.ManageResponse(t.response)
                                                        }
                                                        ));
                                                    case 4:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }(),
                                    r.ConfirmBox("Delete", "Are you sure you want to delete?", "warning", "Yes", "No", n);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e, a, s, i) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                OnDiscardDraftCommon: function() {
                    var t = Object(_home_descpro_Haris_Projects_BitTask_TaskUi_Bit_TaskManager_src_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function t(e, a, s, i) {
                        var r, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    r = i.$refs.common,
                                    n = function() {
                                        var t = Object(_home_descpro_Haris_Projects_BitTask_TaskUi_Bit_TaskManager_src_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function t() {
                                            var i, n;
                                            return regeneratorRuntime.wrap((function(t) {
                                                while (1)
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return i = a,
                                                        n = {
                                                            id: e.id,
                                                            version: e.version
                                                        },
                                                        t.next = 4,
                                                        Object(_utils_api__WEBPACK_IMPORTED_MODULE_6__["a"])(i, "post", n).then((function(t) {
                                                            r.ManageResponse(t),
                                                            s.$refs.vuetable.refresh()
                                                        }
                                                        )).catch((function(t) {
                                                            r.ManageResponse(t.response)
                                                        }
                                                        ));
                                                    case 4:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }(),
                                    r.ConfirmBox("", "<p>Are you sure you want to discard?</p>", "info", "Yes", "No", n);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e, a, s, i) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }
        }
    }
}]);

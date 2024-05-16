(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-bc798e6e"], {
    "01b4": function(t, e, a) {
        "use strict";
        var n = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("ul", {
                staticClass: "list-group"
            }, [t._l(t.viewData.addnlData, (function(e, n) {
                return [t.viewData.addnlData.captions && t.viewData.addnlData.captions[n] ? a("li", {
                    key: "k" + n + e,
                    staticClass: "list-group-item c-default d-flex"
                }, [a("span", {
                    staticClass: "col-2 font-weight-bold p-0"
                }, [t._v(" " + t._s(t.viewData.addnlData.captions[n]) + ": ")]), "rating" == t.guessTheResult(e, n) ? a("span", {
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
                })], 1) : "text" == t.guessTheResult(e, n) ? a("span", {
                    staticClass: "col-10"
                }, [t._v(t._s(e) + " ")]) : "boolean" == t.guessTheResult(e, n) ? a("span", {
                    staticClass: "col-10"
                }, [a("b-form-checkbox", {
                    staticClass: "checkbox-disabled-opacity-1",
                    staticStyle: {
                        top: "-1em"
                    },
                    attrs: {
                        checked: e,
                        name: n,
                        disabled: ""
                    }
                })], 1) : "dateHyphen" == t.guessTheResult(e, n) ? a("span", {
                    staticClass: "col-10"
                }, [t._v(t._s(t.formatHyphenDate(e)) + " ")]) : "dateDot" == t.guessTheResult(e, n) ? a("span", {
                    staticClass: "col-10"
                }, [t._v(t._s(t.formatDotDate(e)) + " ")]) : "url" == t.guessTheResult(e, n) ? a("span", {
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
                }, [t._v(t._s(e))])])])]) : "attachment" == t.guessTheResult(e, n) ? a("ul", {
                    staticClass: "col-10"
                }, t._l(e, (function(e, n) {
                    return a("li", {
                        key: "fil" + n,
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
          , s = []
          , o = (a("caad"),
        a("a15b"),
        a("4d63"),
        a("ac1f"),
        a("25f0"),
        a("2532"),
        a("1276"),
        a("53ca"))
          , r = a("5b3d")
          , i = a.n(r)
          , l = {
            components: {
                StarRating: i.a
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
                    var a = Object(o["a"])(t);
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
          , u = Object(d["a"])(c, n, s, !1, null, null, null);
        e["a"] = u.exports
    },
    "02bb": function(t, e, a) {},
    "06c5": function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return s
        }
        ));
        a("a630"),
        a("fb6a"),
        a("b0c0"),
        a("d3b7"),
        a("25f0"),
        a("3ca3");
        var n = a("6b75");
        function s(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return Object(n["a"])(t, e);
                var a = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === a && t.constructor && (a = t.constructor.name),
                "Map" === a || "Set" === a ? Array.from(a) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Object(n["a"])(t, e) : void 0
            }
        }
    },
    "113f": function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return r
        }
        ));
        a("c975"),
        a("ac1f"),
        a("5319"),
        a("1276"),
        a("4360");
        var n = a("5a0c")
          , s = a.n(n)
          , o = a("7c15")
          , r = {
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
                        minDate: s()().format("YYYY-MM-DD"),
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
                    return null == t || void 0 == t ? "-" : s()(t).format("YYYY-MM-DD")
                },
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : s()(t).format("DD-MM-YYYY")
                },
                convertToDateTime: function(t) {
                    return null == t || void 0 == t ? "-" : s()(t).format("DD-MM-YY | hh:mm a")
                },
                now: function() {
                    return s()().format("YYYY-MM-DD")
                },
                getReadablePriority: function(t) {
                    var e = ["Low", "Normal", "Important", "Critical"];
                    return e[t - 1]
                },
                taskActionHandler: function(t, e) {
                    var a = this
                      , n = "";
                    if (t.api ? n = t.api : t.props.api && (n = t.props.api),
                    n) {
                        var s = {
                            taskId: this.commonVar,
                            parameters: JSON.stringify(e),
                            triggerName: this.triggerName
                        };
                        Object(o["a"])(n, "post", s).then((function(t) {
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
                    var a = s()(t)
                      , n = "";
                    return n = "today" == e ? s()().format("YYYY-MM-DDTHH:mm:ss") : e,
                    a.diff(n, "minute")
                },
                taskDelete: function(t) {
                    var e = this;
                    if (console.log(t),
                    t.id) {
                        var a = "/api/bitTask/Tasks/delete";
                        Object(o["a"])(a, "post", {
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
                showToast: function(t, e, a, n) {
                    var s = n || 0
                      , o = this.$createElement
                      , r = "my-toast-".concat(s++)
                      , i = o("label", e || "");
                    this.$bvToast.toast([i], {
                        id: r,
                        title: t,
                        noCloseButton: !1,
                        variant: a || "primary",
                        toaster: "b-toaster-bottom-right"
                    })
                },
                changeColor: function(t, e) {
                    if (e) {
                        var a = e
                          , n = /rejected|approved|Rejected|Approved|completd|Completed/gi
                          , s = String(n)
                          , o = s.replace("/g", "|").substring(1)
                          , r = o.split("|");
                        (r.indexOf("rejected") > -1 || r.indexOf("Rejected") > -1) && (a = a.replace(/rejected|Rejected/g, '<span class="text-danger font-weight-700">Rejected</span>')),
                        (r.indexOf("completd") > -1 || r.indexOf("Completed") > -1) && (a = a.replace(/Completed|Completed/g, '<span class="text-success font-weight-700">Completed</span>')),
                        (r.indexOf("approved") > -1 || r.indexOf("Approved") > -1) && (a = a.replace(/approved|Approved/g, '<span class="text-success font-weight-700">Approved</span>')),
                        setTimeout((function() {
                            document.getElementById(t).innerHTML = a
                        }
                        ), 50)
                    }
                }
            }
        }
    },
    1276: function(t, e, a) {
        "use strict";
        var n = a("d784")
          , s = a("44e7")
          , o = a("825a")
          , r = a("1d80")
          , i = a("4840")
          , l = a("8aa5")
          , c = a("50c4")
          , d = a("14c3")
          , u = a("9263")
          , p = a("d039")
          , f = [].push
          , m = Math.min
          , h = 4294967295
          , v = !p((function() {
            return !RegExp(h, "y")
        }
        ));
        n("split", 2, (function(t, e, a) {
            var n;
            return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, a) {
                var n = String(r(this))
                  , o = void 0 === a ? h : a >>> 0;
                if (0 === o)
                    return [];
                if (void 0 === t)
                    return [n];
                if (!s(t))
                    return e.call(n, t, o);
                var i, l, c, d = [], p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), m = 0, v = new RegExp(t.source,p + "g");
                while (i = u.call(v, n)) {
                    if (l = v.lastIndex,
                    l > m && (d.push(n.slice(m, i.index)),
                    i.length > 1 && i.index < n.length && f.apply(d, i.slice(1)),
                    c = i[0].length,
                    m = l,
                    d.length >= o))
                        break;
                    v.lastIndex === i.index && v.lastIndex++
                }
                return m === n.length ? !c && v.test("") || d.push("") : d.push(n.slice(m)),
                d.length > o ? d.slice(0, o) : d
            }
            : "0".split(void 0, 0).length ? function(t, a) {
                return void 0 === t && 0 === a ? [] : e.call(this, t, a)
            }
            : e,
            [function(e, a) {
                var s = r(this)
                  , o = void 0 == e ? void 0 : e[t];
                return void 0 !== o ? o.call(e, s, a) : n.call(String(s), e, a)
            }
            , function(t, s) {
                var r = a(n, t, this, s, n !== e);
                if (r.done)
                    return r.value;
                var u = o(t)
                  , p = String(this)
                  , f = i(u, RegExp)
                  , g = u.unicode
                  , b = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (v ? "y" : "g")
                  , y = new f(v ? u : "^(?:" + u.source + ")",b)
                  , k = void 0 === s ? h : s >>> 0;
                if (0 === k)
                    return [];
                if (0 === p.length)
                    return null === d(y, p) ? [p] : [];
                var C = 0
                  , T = 0
                  , _ = [];
                while (T < p.length) {
                    y.lastIndex = v ? T : 0;
                    var x, w = d(y, v ? p : p.slice(T));
                    if (null === w || (x = m(c(y.lastIndex + (v ? 0 : T)), p.length)) === C)
                        T = l(p, T, g);
                    else {
                        if (_.push(p.slice(C, T)),
                        _.length === k)
                            return _;
                        for (var S = 1; S <= w.length - 1; S++)
                            if (_.push(w[S]),
                            _.length === k)
                                return _;
                        T = C = x
                    }
                }
                return _.push(p.slice(C)),
                _
            }
            ]
        }
        ), !v)
    },
    1453: function(t, e, a) {
        "use strict";
        var n = a("9853")
          , s = a.n(n);
        s.a
    },
    "23dd": function(t, e, a) {
        "use strict";
        var n = a("4380")
          , s = a.n(n);
        s.a
    },
    2532: function(t, e, a) {
        "use strict";
        var n = a("23e7")
          , s = a("5a34")
          , o = a("1d80")
          , r = a("ab13");
        n({
            target: "String",
            proto: !0,
            forced: !r("includes")
        }, {
            includes: function(t) {
                return !!~String(o(this)).indexOf(s(t), arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    2772: function(t, e, a) {
        (function(e, a) {
            t.exports = a()
        }
        )("undefined" !== typeof self && self, (function() {
            return function(t) {
                var e = {};
                function a(n) {
                    if (e[n])
                        return e[n].exports;
                    var s = e[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(s.exports, s, s.exports, a),
                    s.l = !0,
                    s.exports
                }
                return a.m = t,
                a.c = e,
                a.d = function(t, e, n) {
                    a.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: n
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
                    var n = Object.create(null);
                    if (a.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }),
                    2 & e && "string" != typeof t)
                        for (var s in t)
                            a.d(n, s, function(e) {
                                return t[e]
                            }
                            .bind(null, s));
                    return n
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
                a(a.s = 5)
            }([function(t, e, a) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.ExpressionDescriptor = void 0;
                var n = a(1)
                  , s = a(2)
                  , o = function() {
                    function t(e, a) {
                        this.expression = e,
                        this.options = a,
                        this.expressionParts = new Array(5),
                        t.locales[a.locale] ? this.i18n = t.locales[a.locale] : (console.warn("Locale '" + a.locale + "' could not be found; falling back to 'en'."),
                        this.i18n = t.locales["en"]),
                        void 0 === a.use24HourTimeFormat && (a.use24HourTimeFormat = this.i18n.use24HourTimeFormatByDefault())
                    }
                    return t.toString = function(e, a) {
                        var n = void 0 === a ? {} : a
                          , s = n.throwExceptionOnParseError
                          , o = void 0 === s || s
                          , r = n.verbose
                          , i = void 0 !== r && r
                          , l = n.dayOfWeekStartIndexZero
                          , c = void 0 === l || l
                          , d = n.use24HourTimeFormat
                          , u = n.locale
                          , p = void 0 === u ? "en" : u
                          , f = {
                            throwExceptionOnParseError: o,
                            verbose: i,
                            dayOfWeekStartIndexZero: c,
                            use24HourTimeFormat: d,
                            locale: p
                        }
                          , m = new t(e,f);
                        return m.getFullDescription()
                    }
                    ,
                    t.initialize = function(e) {
                        t.specialCharacters = ["/", "-", ",", "*"],
                        e.load(t.locales)
                    }
                    ,
                    t.prototype.getFullDescription = function() {
                        var t = "";
                        try {
                            var e = new s.CronParser(this.expression,this.options.dayOfWeekStartIndexZero);
                            this.expressionParts = e.parse();
                            var a = this.getTimeOfDayDescription()
                              , n = this.getDayOfMonthDescription()
                              , o = this.getMonthDescription()
                              , r = this.getDayOfWeekDescription()
                              , i = this.getYearDescription();
                            t += a + n + r + o + i,
                            t = this.transformVerbosity(t, this.options.verbose),
                            t = t.charAt(0).toLocaleUpperCase() + t.substr(1)
                        } catch (l) {
                            if (this.options.throwExceptionOnParseError)
                                throw "" + l;
                            t = this.i18n.anErrorOccuredWhenGeneratingTheExpressionD()
                        }
                        return t
                    }
                    ,
                    t.prototype.getTimeOfDayDescription = function() {
                        var e = this.expressionParts[0]
                          , a = this.expressionParts[1]
                          , s = this.expressionParts[2]
                          , o = "";
                        if (n.StringUtilities.containsAny(a, t.specialCharacters) || n.StringUtilities.containsAny(s, t.specialCharacters) || n.StringUtilities.containsAny(e, t.specialCharacters))
                            if (e || !(a.indexOf("-") > -1) || a.indexOf(",") > -1 || a.indexOf("/") > -1 || n.StringUtilities.containsAny(s, t.specialCharacters))
                                if (!e && s.indexOf(",") > -1 && -1 == s.indexOf("-") && -1 == s.indexOf("/") && !n.StringUtilities.containsAny(a, t.specialCharacters)) {
                                    var r = s.split(",");
                                    o += this.i18n.at();
                                    for (var i = 0; i < r.length; i++)
                                        o += " ",
                                        o += this.formatTime(r[i], a, ""),
                                        i < r.length - 2 && (o += ","),
                                        i == r.length - 2 && (o += this.i18n.spaceAnd())
                                } else {
                                    var l = this.getSecondsDescription()
                                      , c = this.getMinutesDescription()
                                      , d = this.getHoursDescription();
                                    o += l,
                                    o.length > 0 && c.length > 0 && (o += ", "),
                                    o += c,
                                    o.length > 0 && d.length > 0 && (o += ", "),
                                    o += d
                                }
                            else {
                                var u = a.split("-");
                                o += n.StringUtilities.format(this.i18n.everyMinuteBetweenX0AndX1(), this.formatTime(s, u[0], ""), this.formatTime(s, u[1], ""))
                            }
                        else
                            o += this.i18n.atSpace() + this.formatTime(s, a, e);
                        return o
                    }
                    ,
                    t.prototype.getSecondsDescription = function() {
                        var t = this
                          , e = this.getSegmentDescription(this.expressionParts[0], this.i18n.everySecond(), (function(t) {
                            return t
                        }
                        ), (function(e) {
                            return n.StringUtilities.format(t.i18n.everyX0Seconds(), e)
                        }
                        ), (function(e) {
                            return t.i18n.secondsX0ThroughX1PastTheMinute()
                        }
                        ), (function(e) {
                            return "0" == e ? "" : parseInt(e) < 20 ? t.i18n.atX0SecondsPastTheMinute() : t.i18n.atX0SecondsPastTheMinuteGt20() || t.i18n.atX0SecondsPastTheMinute()
                        }
                        ));
                        return e
                    }
                    ,
                    t.prototype.getMinutesDescription = function() {
                        var t = this
                          , e = this.expressionParts[0]
                          , a = this.expressionParts[2]
                          , s = this.getSegmentDescription(this.expressionParts[1], this.i18n.everyMinute(), (function(t) {
                            return t
                        }
                        ), (function(e) {
                            return n.StringUtilities.format(t.i18n.everyX0Minutes(), e)
                        }
                        ), (function(e) {
                            return t.i18n.minutesX0ThroughX1PastTheHour()
                        }
                        ), (function(n) {
                            try {
                                return "0" == n && -1 == a.indexOf("/") && "" == e ? t.i18n.everyHour() : parseInt(n) < 20 ? t.i18n.atX0MinutesPastTheHour() : t.i18n.atX0MinutesPastTheHourGt20() || t.i18n.atX0MinutesPastTheHour()
                            } catch (s) {
                                return t.i18n.atX0MinutesPastTheHour()
                            }
                        }
                        ));
                        return s
                    }
                    ,
                    t.prototype.getHoursDescription = function() {
                        var t = this
                          , e = this.expressionParts[2]
                          , a = this.getSegmentDescription(e, this.i18n.everyHour(), (function(e) {
                            return t.formatTime(e, "0", "")
                        }
                        ), (function(e) {
                            return n.StringUtilities.format(t.i18n.everyX0Hours(), e)
                        }
                        ), (function(e) {
                            return t.i18n.betweenX0AndX1()
                        }
                        ), (function(e) {
                            return t.i18n.atX0()
                        }
                        ));
                        return a
                    }
                    ,
                    t.prototype.getDayOfWeekDescription = function() {
                        var t = this
                          , e = this.i18n.daysOfTheWeek()
                          , a = null;
                        return a = "*" == this.expressionParts[5] ? "" : this.getSegmentDescription(this.expressionParts[5], this.i18n.commaEveryDay(), (function(t) {
                            var a = t;
                            return t.indexOf("#") > -1 ? a = t.substr(0, t.indexOf("#")) : t.indexOf("L") > -1 && (a = a.replace("L", "")),
                            e[parseInt(a)]
                        }
                        ), (function(e) {
                            return 1 == parseInt(e) ? "" : n.StringUtilities.format(t.i18n.commaEveryX0DaysOfTheWeek(), e)
                        }
                        ), (function(e) {
                            return t.i18n.commaX0ThroughX1()
                        }
                        ), (function(e) {
                            var a = null;
                            if (e.indexOf("#") > -1) {
                                var n = e.substring(e.indexOf("#") + 1)
                                  , s = null;
                                switch (n) {
                                case "1":
                                    s = t.i18n.first();
                                    break;
                                case "2":
                                    s = t.i18n.second();
                                    break;
                                case "3":
                                    s = t.i18n.third();
                                    break;
                                case "4":
                                    s = t.i18n.fourth();
                                    break;
                                case "5":
                                    s = t.i18n.fifth();
                                    break
                                }
                                a = t.i18n.commaOnThe() + s + t.i18n.spaceX0OfTheMonth()
                            } else if (e.indexOf("L") > -1)
                                a = t.i18n.commaOnTheLastX0OfTheMonth();
                            else {
                                var o = "*" != t.expressionParts[3];
                                a = o ? t.i18n.commaAndOnX0() : t.i18n.commaOnlyOnX0()
                            }
                            return a
                        }
                        )),
                        a
                    }
                    ,
                    t.prototype.getMonthDescription = function() {
                        var t = this
                          , e = this.i18n.monthsOfTheYear()
                          , a = this.getSegmentDescription(this.expressionParts[4], "", (function(t) {
                            return e[parseInt(t) - 1]
                        }
                        ), (function(e) {
                            return 1 == parseInt(e) ? "" : n.StringUtilities.format(t.i18n.commaEveryX0Months(), e)
                        }
                        ), (function(e) {
                            return t.i18n.commaMonthX0ThroughMonthX1() || t.i18n.commaX0ThroughX1()
                        }
                        ), (function(e) {
                            return t.i18n.commaOnlyInMonthX0 ? t.i18n.commaOnlyInMonthX0() : t.i18n.commaOnlyInX0()
                        }
                        ));
                        return a
                    }
                    ,
                    t.prototype.getDayOfMonthDescription = function() {
                        var t = this
                          , e = null
                          , a = this.expressionParts[3];
                        switch (a) {
                        case "L":
                            e = this.i18n.commaOnTheLastDayOfTheMonth();
                            break;
                        case "WL":
                        case "LW":
                            e = this.i18n.commaOnTheLastWeekdayOfTheMonth();
                            break;
                        default:
                            var s = a.match(/(\d{1,2}W)|(W\d{1,2})/);
                            if (s) {
                                var o = parseInt(s[0].replace("W", ""))
                                  , r = 1 == o ? this.i18n.firstWeekday() : n.StringUtilities.format(this.i18n.weekdayNearestDayX0(), o.toString());
                                e = n.StringUtilities.format(this.i18n.commaOnTheX0OfTheMonth(), r);
                                break
                            }
                            var i = a.match(/L-(\d{1,2})/);
                            if (i) {
                                var l = i[1];
                                e = n.StringUtilities.format(this.i18n.commaDaysBeforeTheLastDayOfTheMonth(), l);
                                break
                            }
                            if ("*" == a && "*" != this.expressionParts[5])
                                return "";
                            e = this.getSegmentDescription(a, this.i18n.commaEveryDay(), (function(e) {
                                return "L" == e ? t.i18n.lastDay() : t.i18n.dayX0 ? n.StringUtilities.format(t.i18n.dayX0(), e) : e
                            }
                            ), (function(e) {
                                return "1" == e ? t.i18n.commaEveryDay() : t.i18n.commaEveryX0Days()
                            }
                            ), (function(e) {
                                return t.i18n.commaBetweenDayX0AndX1OfTheMonth()
                            }
                            ), (function(e) {
                                return t.i18n.commaOnDayX0OfTheMonth()
                            }
                            ));
                            break
                        }
                        return e
                    }
                    ,
                    t.prototype.getYearDescription = function() {
                        var t = this
                          , e = this.getSegmentDescription(this.expressionParts[6], "", (function(t) {
                            return /^\d+$/.test(t) ? new Date(parseInt(t),1).getFullYear().toString() : t
                        }
                        ), (function(e) {
                            return n.StringUtilities.format(t.i18n.commaEveryX0Years(), e)
                        }
                        ), (function(e) {
                            return t.i18n.commaYearX0ThroughYearX1() || t.i18n.commaX0ThroughX1()
                        }
                        ), (function(e) {
                            return t.i18n.commaOnlyInYearX0 ? t.i18n.commaOnlyInYearX0() : t.i18n.commaOnlyInX0()
                        }
                        ));
                        return e
                    }
                    ,
                    t.prototype.getSegmentDescription = function(t, e, a, s, o, r) {
                        var i = null
                          , l = t.indexOf("/") > -1
                          , c = t.indexOf("-") > -1
                          , d = t.indexOf(",") > -1;
                        if (t)
                            if ("*" === t)
                                i = e;
                            else if (l || c || d)
                                if (d) {
                                    for (var u = t.split(","), p = "", f = 0; f < u.length; f++)
                                        if (f > 0 && u.length > 2 && (p += ",",
                                        f < u.length - 1 && (p += " ")),
                                        f > 0 && u.length > 1 && (f == u.length - 1 || 2 == u.length) && (p += this.i18n.spaceAnd() + " "),
                                        u[f].indexOf("/") > -1 || u[f].indexOf("-") > -1) {
                                            var m = u[f].indexOf("-") > -1 && -1 == u[f].indexOf("/")
                                              , h = this.getSegmentDescription(u[f], e, a, s, m ? this.i18n.commaX0ThroughX1 : o, r);
                                            m && (h = h.replace(", ", "")),
                                            p += h
                                        } else
                                            p += l ? this.getSegmentDescription(u[f], e, a, s, o, r) : a(u[f]);
                                    i = l ? p : n.StringUtilities.format(r(t), p)
                                } else if (l) {
                                    u = t.split("/");
                                    if (i = n.StringUtilities.format(s(u[1]), u[1]),
                                    u[0].indexOf("-") > -1) {
                                        var v = this.generateRangeSegmentDescription(u[0], o, a);
                                        0 != v.indexOf(", ") && (i += ", "),
                                        i += v
                                    } else if (-1 == u[0].indexOf("*")) {
                                        var g = n.StringUtilities.format(r(u[0]), a(u[0]));
                                        g = g.replace(", ", ""),
                                        i += n.StringUtilities.format(this.i18n.commaStartingX0(), g)
                                    }
                                } else
                                    c && (i = this.generateRangeSegmentDescription(t, o, a));
                            else
                                i = n.StringUtilities.format(r(t), a(t));
                        else
                            i = "";
                        return i
                    }
                    ,
                    t.prototype.generateRangeSegmentDescription = function(t, e, a) {
                        var s = ""
                          , o = t.split("-")
                          , r = a(o[0])
                          , i = a(o[1]);
                        i = i.replace(":00", ":59");
                        var l = e(t);
                        return s += n.StringUtilities.format(l, r, i),
                        s
                    }
                    ,
                    t.prototype.formatTime = function(t, e, a) {
                        var n = parseInt(t)
                          , s = ""
                          , o = !1;
                        this.options.use24HourTimeFormat || (o = this.i18n.setPeriodBeforeTime && this.i18n.setPeriodBeforeTime(),
                        s = o ? this.getPeriod(n) + " " : " " + this.getPeriod(n),
                        n > 12 && (n -= 12),
                        0 === n && (n = 12));
                        var r = e
                          , i = "";
                        return a && (i = ":" + ("00" + a).substring(a.length)),
                        "" + (o ? s : "") + ("00" + n.toString()).substring(n.toString().length) + ":" + ("00" + r.toString()).substring(r.toString().length) + i + (o ? "" : s)
                    }
                    ,
                    t.prototype.transformVerbosity = function(t, e) {
                        return e || (t = t.replace(new RegExp(", " + this.i18n.everyMinute(),"g"), ""),
                        t = t.replace(new RegExp(", " + this.i18n.everyHour(),"g"), ""),
                        t = t.replace(new RegExp(this.i18n.commaEveryDay(),"g"), ""),
                        t = t.replace(/\, ?$/, "")),
                        t
                    }
                    ,
                    t.prototype.getPeriod = function(t) {
                        return t >= 12 ? this.i18n.pm && this.i18n.pm() || "PM" : this.i18n.am && this.i18n.am() || "AM"
                    }
                    ,
                    t.locales = {},
                    t
                }();
                e.ExpressionDescriptor = o
            }
            , function(t, e, a) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.StringUtilities = void 0;
                var n = function() {
                    function t() {}
                    return t.format = function(t) {
                        for (var e = [], a = 1; a < arguments.length; a++)
                            e[a - 1] = arguments[a];
                        return t.replace(/%s/g, (function() {
                            return e.shift()
                        }
                        ))
                    }
                    ,
                    t.containsAny = function(t, e) {
                        return e.some((function(e) {
                            return t.indexOf(e) > -1
                        }
                        ))
                    }
                    ,
                    t
                }();
                e.StringUtilities = n
            }
            , function(t, e, a) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.CronParser = void 0;
                var n = a(3)
                  , s = function() {
                    function t(t, e) {
                        void 0 === e && (e = !0),
                        this.expression = t,
                        this.dayOfWeekStartIndexZero = e
                    }
                    return t.prototype.parse = function() {
                        var t = this.extractParts(this.expression);
                        return this.normalize(t),
                        this.validate(t),
                        t
                    }
                    ,
                    t.prototype.extractParts = function(t) {
                        if (!this.expression)
                            throw new Error("Expression is empty");
                        var e = t.trim().split(/[ ]+/);
                        if (e.length < 5)
                            throw new Error("Expression has only " + e.length + " part" + (1 == e.length ? "" : "s") + ". At least 5 parts are required.");
                        if (5 == e.length)
                            e.unshift(""),
                            e.push("");
                        else if (6 == e.length) {
                            var a = /\d{4}$/.test(e[5]) || "?" == e[4] || "?" == e[2];
                            a ? e.unshift("") : e.push("")
                        } else if (e.length > 7)
                            throw new Error("Expression has " + e.length + " parts; too many!");
                        return e
                    }
                    ,
                    t.prototype.normalize = function(t) {
                        var e = this;
                        if (t[3] = t[3].replace("?", "*"),
                        t[5] = t[5].replace("?", "*"),
                        t[2] = t[2].replace("?", "*"),
                        0 == t[0].indexOf("0/") && (t[0] = t[0].replace("0/", "*/")),
                        0 == t[1].indexOf("0/") && (t[1] = t[1].replace("0/", "*/")),
                        0 == t[2].indexOf("0/") && (t[2] = t[2].replace("0/", "*/")),
                        0 == t[3].indexOf("1/") && (t[3] = t[3].replace("1/", "*/")),
                        0 == t[4].indexOf("1/") && (t[4] = t[4].replace("1/", "*/")),
                        0 == t[6].indexOf("1/") && (t[6] = t[6].replace("1/", "*/")),
                        t[5] = t[5].replace(/(^\d)|([^#/\s]\d)/g, (function(t) {
                            var a = t.replace(/\D/, "")
                              , n = a;
                            return e.dayOfWeekStartIndexZero ? "7" == a && (n = "0") : n = (parseInt(a) - 1).toString(),
                            t.replace(a, n)
                        }
                        )),
                        "L" == t[5] && (t[5] = "6"),
                        "?" == t[3] && (t[3] = "*"),
                        t[3].indexOf("W") > -1 && (t[3].indexOf(",") > -1 || t[3].indexOf("-") > -1))
                            throw new Error("The 'W' character can be specified only when the day-of-month is a single day, not a range or list of days.");
                        var a = {
                            SUN: 0,
                            MON: 1,
                            TUE: 2,
                            WED: 3,
                            THU: 4,
                            FRI: 5,
                            SAT: 6
                        };
                        for (var n in a)
                            t[5] = t[5].replace(new RegExp(n,"gi"), a[n].toString());
                        var s = {
                            JAN: 1,
                            FEB: 2,
                            MAR: 3,
                            APR: 4,
                            MAY: 5,
                            JUN: 6,
                            JUL: 7,
                            AUG: 8,
                            SEP: 9,
                            OCT: 10,
                            NOV: 11,
                            DEC: 12
                        };
                        for (var o in s)
                            t[4] = t[4].replace(new RegExp(o,"gi"), s[o].toString());
                        "0" == t[0] && (t[0] = ""),
                        /\*|\-|\,|\//.test(t[2]) || !/\*|\//.test(t[1]) && !/\*|\//.test(t[0]) || (t[2] += "-" + t[2]);
                        for (var r = 0; r < t.length; r++)
                            if (-1 != t[r].indexOf(",") && (t[r] = t[r].split(",").filter((function(t) {
                                return "" !== t
                            }
                            )).join(",") || "*"),
                            "*/1" == t[r] && (t[r] = "*"),
                            t[r].indexOf("/") > -1 && !/^\*|\-|\,/.test(t[r])) {
                                var i = null;
                                switch (r) {
                                case 4:
                                    i = "12";
                                    break;
                                case 5:
                                    i = "6";
                                    break;
                                case 6:
                                    i = "9999";
                                    break;
                                default:
                                    i = null;
                                    break
                                }
                                if (null != i) {
                                    var l = t[r].split("/");
                                    t[r] = l[0] + "-" + i + "/" + l[1]
                                }
                            }
                    }
                    ,
                    t.prototype.validate = function(t) {
                        this.assertNoInvalidCharacters("DOW", t[5]),
                        this.assertNoInvalidCharacters("DOM", t[3]),
                        this.validateRange(t)
                    }
                    ,
                    t.prototype.validateRange = function(t) {
                        n.default.secondRange(t[0]),
                        n.default.minuteRange(t[1]),
                        n.default.hourRange(t[2]),
                        n.default.dayOfMonthRange(t[3]),
                        n.default.monthRange(t[4]),
                        n.default.dayOfWeekRange(t[5])
                    }
                    ,
                    t.prototype.assertNoInvalidCharacters = function(t, e) {
                        var a = e.match(/[A-KM-VX-Z]+/gi);
                        if (a && a.length)
                            throw new Error(t + " part contains invalid values: '" + a.toString() + "'")
                    }
                    ,
                    t
                }();
                e.CronParser = s
            }
            , function(t, e, a) {
                "use strict";
                function n(t, e) {
                    if (!t)
                        throw new Error(e)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var s = function() {
                    function t() {}
                    return t.secondRange = function(t) {
                        for (var e = t.split(","), a = 0; a < e.length; a++)
                            if (!isNaN(parseInt(e[a], 10))) {
                                var s = parseInt(e[a], 10);
                                n(s >= 0 && s <= 59, "seconds part must be >= 0 and <= 59")
                            }
                    }
                    ,
                    t.minuteRange = function(t) {
                        for (var e = t.split(","), a = 0; a < e.length; a++)
                            if (!isNaN(parseInt(e[a], 10))) {
                                var s = parseInt(e[a], 10);
                                n(s >= 0 && s <= 59, "minutes part must be >= 0 and <= 59")
                            }
                    }
                    ,
                    t.hourRange = function(t) {
                        for (var e = t.split(","), a = 0; a < e.length; a++)
                            if (!isNaN(parseInt(e[a], 10))) {
                                var s = parseInt(e[a], 10);
                                n(s >= 0 && s <= 23, "hours part must be >= 0 and <= 23")
                            }
                    }
                    ,
                    t.dayOfMonthRange = function(t) {
                        for (var e = t.split(","), a = 0; a < e.length; a++)
                            if (!isNaN(parseInt(e[a], 10))) {
                                var s = parseInt(e[a], 10);
                                n(s >= 1 && s <= 31, "DOM part must be >= 1 and <= 31")
                            }
                    }
                    ,
                    t.monthRange = function(t) {
                        for (var e = t.split(","), a = 0; a < e.length; a++)
                            if (!isNaN(parseInt(e[a], 10))) {
                                var s = parseInt(e[a], 10);
                                n(s >= 1 && s <= 12, "month part must be >= 1 and <= 12")
                            }
                    }
                    ,
                    t.dayOfWeekRange = function(t) {
                        for (var e = t.split(","), a = 0; a < e.length; a++)
                            if (!isNaN(parseInt(e[a], 10))) {
                                var s = parseInt(e[a], 10);
                                n(s >= 0 && s <= 6, "DOW part must be >= 0 and <= 6")
                            }
                    }
                    ,
                    t
                }();
                e.default = s
            }
            , function(t, e, a) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.en = void 0;
                var n = function() {
                    function t() {}
                    return t.prototype.atX0SecondsPastTheMinuteGt20 = function() {
                        return null
                    }
                    ,
                    t.prototype.atX0MinutesPastTheHourGt20 = function() {
                        return null
                    }
                    ,
                    t.prototype.commaMonthX0ThroughMonthX1 = function() {
                        return null
                    }
                    ,
                    t.prototype.commaYearX0ThroughYearX1 = function() {
                        return null
                    }
                    ,
                    t.prototype.use24HourTimeFormatByDefault = function() {
                        return !1
                    }
                    ,
                    t.prototype.anErrorOccuredWhenGeneratingTheExpressionD = function() {
                        return "An error occured when generating the expression description.  Check the cron expression syntax."
                    }
                    ,
                    t.prototype.everyMinute = function() {
                        return "every minute"
                    }
                    ,
                    t.prototype.everyHour = function() {
                        return "every hour"
                    }
                    ,
                    t.prototype.atSpace = function() {
                        return "At "
                    }
                    ,
                    t.prototype.everyMinuteBetweenX0AndX1 = function() {
                        return "Every minute between %s and %s"
                    }
                    ,
                    t.prototype.at = function() {
                        return "At"
                    }
                    ,
                    t.prototype.spaceAnd = function() {
                        return " and"
                    }
                    ,
                    t.prototype.everySecond = function() {
                        return "every second"
                    }
                    ,
                    t.prototype.everyX0Seconds = function() {
                        return "every %s seconds"
                    }
                    ,
                    t.prototype.secondsX0ThroughX1PastTheMinute = function() {
                        return "seconds %s through %s past the minute"
                    }
                    ,
                    t.prototype.atX0SecondsPastTheMinute = function() {
                        return "at %s seconds past the minute"
                    }
                    ,
                    t.prototype.everyX0Minutes = function() {
                        return "every %s minutes"
                    }
                    ,
                    t.prototype.minutesX0ThroughX1PastTheHour = function() {
                        return "minutes %s through %s past the hour"
                    }
                    ,
                    t.prototype.atX0MinutesPastTheHour = function() {
                        return "at %s minutes past the hour"
                    }
                    ,
                    t.prototype.everyX0Hours = function() {
                        return "every %s hours"
                    }
                    ,
                    t.prototype.betweenX0AndX1 = function() {
                        return "between %s and %s"
                    }
                    ,
                    t.prototype.atX0 = function() {
                        return "at %s"
                    }
                    ,
                    t.prototype.commaEveryDay = function() {
                        return ", every day"
                    }
                    ,
                    t.prototype.commaEveryX0DaysOfTheWeek = function() {
                        return ", every %s days of the week"
                    }
                    ,
                    t.prototype.commaX0ThroughX1 = function() {
                        return ", %s through %s"
                    }
                    ,
                    t.prototype.first = function() {
                        return "first"
                    }
                    ,
                    t.prototype.second = function() {
                        return "second"
                    }
                    ,
                    t.prototype.third = function() {
                        return "third"
                    }
                    ,
                    t.prototype.fourth = function() {
                        return "fourth"
                    }
                    ,
                    t.prototype.fifth = function() {
                        return "fifth"
                    }
                    ,
                    t.prototype.commaOnThe = function() {
                        return ", on the "
                    }
                    ,
                    t.prototype.spaceX0OfTheMonth = function() {
                        return " %s of the month"
                    }
                    ,
                    t.prototype.lastDay = function() {
                        return "the last day"
                    }
                    ,
                    t.prototype.commaOnTheLastX0OfTheMonth = function() {
                        return ", on the last %s of the month"
                    }
                    ,
                    t.prototype.commaOnlyOnX0 = function() {
                        return ", only on %s"
                    }
                    ,
                    t.prototype.commaAndOnX0 = function() {
                        return ", and on %s"
                    }
                    ,
                    t.prototype.commaEveryX0Months = function() {
                        return ", every %s months"
                    }
                    ,
                    t.prototype.commaOnlyInX0 = function() {
                        return ", only in %s"
                    }
                    ,
                    t.prototype.commaOnTheLastDayOfTheMonth = function() {
                        return ", on the last day of the month"
                    }
                    ,
                    t.prototype.commaOnTheLastWeekdayOfTheMonth = function() {
                        return ", on the last weekday of the month"
                    }
                    ,
                    t.prototype.commaDaysBeforeTheLastDayOfTheMonth = function() {
                        return ", %s days before the last day of the month"
                    }
                    ,
                    t.prototype.firstWeekday = function() {
                        return "first weekday"
                    }
                    ,
                    t.prototype.weekdayNearestDayX0 = function() {
                        return "weekday nearest day %s"
                    }
                    ,
                    t.prototype.commaOnTheX0OfTheMonth = function() {
                        return ", on the %s of the month"
                    }
                    ,
                    t.prototype.commaEveryX0Days = function() {
                        return ", every %s days"
                    }
                    ,
                    t.prototype.commaBetweenDayX0AndX1OfTheMonth = function() {
                        return ", between day %s and %s of the month"
                    }
                    ,
                    t.prototype.commaOnDayX0OfTheMonth = function() {
                        return ", on day %s of the month"
                    }
                    ,
                    t.prototype.commaEveryHour = function() {
                        return ", every hour"
                    }
                    ,
                    t.prototype.commaEveryX0Years = function() {
                        return ", every %s years"
                    }
                    ,
                    t.prototype.commaStartingX0 = function() {
                        return ", starting %s"
                    }
                    ,
                    t.prototype.daysOfTheWeek = function() {
                        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    }
                    ,
                    t.prototype.monthsOfTheYear = function() {
                        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    }
                    ,
                    t
                }();
                e.en = n
            }
            , function(t, e, a) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.toString = void 0;
                var n = a(0)
                  , s = a(6);
                n.ExpressionDescriptor.initialize(new s.enLocaleLoader),
                e.default = n.ExpressionDescriptor;
                var o = n.ExpressionDescriptor.toString;
                e.toString = o
            }
            , function(t, e, a) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.enLocaleLoader = void 0;
                var n = a(4)
                  , s = function() {
                    function t() {}
                    return t.prototype.load = function(t) {
                        t["en"] = new n.en
                    }
                    ,
                    t
                }();
                e.enLocaleLoader = s
            }
            ])
        }
        ))
    },
    2909: function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return l
        }
        ));
        var n = a("6b75");
        function s(t) {
            if (Array.isArray(t))
                return Object(n["a"])(t)
        }
        a("a4d3"),
        a("e01a"),
        a("d28b"),
        a("a630"),
        a("e260"),
        a("d3b7"),
        a("3ca3"),
        a("ddb0");
        function o(t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }
        var r = a("06c5");
        function i() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function l(t) {
            return s(t) || o(t) || Object(r["a"])(t) || i()
        }
    },
    "294c": function(t, e, a) {},
    "2a83": function(t, e, a) {
        "use strict";
        var n = a("832e")
          , s = a.n(n);
        s.a
    },
    "310e": function(t, e, a) {
        t.exports = function(t) {
            var e = {};
            function a(n) {
                if (e[n])
                    return e[n].exports;
                var s = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(s.exports, s, s.exports, a),
                s.l = !0,
                s.exports
            }
            return a.m = t,
            a.c = e,
            a.d = function(t, e, n) {
                a.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
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
                var n = Object.create(null);
                if (a.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var s in t)
                        a.d(n, s, function(e) {
                            return t[e]
                        }
                        .bind(null, s));
                return n
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
            "02f4": function(t, e, a) {
                var n = a("4588")
                  , s = a("be13");
                t.exports = function(t) {
                    return function(e, a) {
                        var o, r, i = String(s(e)), l = n(a), c = i.length;
                        return l < 0 || l >= c ? t ? "" : void 0 : (o = i.charCodeAt(l),
                        o < 55296 || o > 56319 || l + 1 === c || (r = i.charCodeAt(l + 1)) < 56320 || r > 57343 ? t ? i.charAt(l) : o : t ? i.slice(l, l + 2) : r - 56320 + (o - 55296 << 10) + 65536)
                    }
                }
            },
            "0390": function(t, e, a) {
                "use strict";
                var n = a("02f4")(!0);
                t.exports = function(t, e, a) {
                    return e + (a ? n(t, e).length : 1)
                }
            },
            "07e3": function(t, e) {
                var a = {}.hasOwnProperty;
                t.exports = function(t, e) {
                    return a.call(t, e)
                }
            },
            "0bfb": function(t, e, a) {
                "use strict";
                var n = a("cb7c");
                t.exports = function() {
                    var t = n(this)
                      , e = "";
                    return t.global && (e += "g"),
                    t.ignoreCase && (e += "i"),
                    t.multiline && (e += "m"),
                    t.unicode && (e += "u"),
                    t.sticky && (e += "y"),
                    e
                }
            },
            "0fc9": function(t, e, a) {
                var n = a("3a38")
                  , s = Math.max
                  , o = Math.min;
                t.exports = function(t, e) {
                    return t = n(t),
                    t < 0 ? s(t + e, 0) : o(t, e)
                }
            },
            1654: function(t, e, a) {
                "use strict";
                var n = a("71c1")(!0);
                a("30f1")(String, "String", (function(t) {
                    this._t = String(t),
                    this._i = 0
                }
                ), (function() {
                    var t, e = this._t, a = this._i;
                    return a >= e.length ? {
                        value: void 0,
                        done: !0
                    } : (t = n(e, a),
                    this._i += t.length,
                    {
                        value: t,
                        done: !1
                    })
                }
                ))
            },
            1691: function(t, e) {
                t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            },
            "1af6": function(t, e, a) {
                var n = a("63b6");
                n(n.S, "Array", {
                    isArray: a("9003")
                })
            },
            "1bc3": function(t, e, a) {
                var n = a("f772");
                t.exports = function(t, e) {
                    if (!n(t))
                        return t;
                    var a, s;
                    if (e && "function" == typeof (a = t.toString) && !n(s = a.call(t)))
                        return s;
                    if ("function" == typeof (a = t.valueOf) && !n(s = a.call(t)))
                        return s;
                    if (!e && "function" == typeof (a = t.toString) && !n(s = a.call(t)))
                        return s;
                    throw TypeError("Can't convert object to primitive value")
                }
            },
            "1ec9": function(t, e, a) {
                var n = a("f772")
                  , s = a("e53d").document
                  , o = n(s) && n(s.createElement);
                t.exports = function(t) {
                    return o ? s.createElement(t) : {}
                }
            },
            "20fd": function(t, e, a) {
                "use strict";
                var n = a("d9f6")
                  , s = a("aebd");
                t.exports = function(t, e, a) {
                    e in t ? n.f(t, e, s(0, a)) : t[e] = a
                }
            },
            "214f": function(t, e, a) {
                "use strict";
                a("b0c5");
                var n = a("2aba")
                  , s = a("32e9")
                  , o = a("79e5")
                  , r = a("be13")
                  , i = a("2b4c")
                  , l = a("520a")
                  , c = i("species")
                  , d = !o((function() {
                    var t = /./;
                    return t.exec = function() {
                        var t = [];
                        return t.groups = {
                            a: "7"
                        },
                        t
                    }
                    ,
                    "7" !== "".replace(t, "$<a>")
                }
                ))
                  , u = function() {
                    var t = /(?:)/
                      , e = t.exec;
                    t.exec = function() {
                        return e.apply(this, arguments)
                    }
                    ;
                    var a = "ab".split(t);
                    return 2 === a.length && "a" === a[0] && "b" === a[1]
                }();
                t.exports = function(t, e, a) {
                    var p = i(t)
                      , f = !o((function() {
                        var e = {};
                        return e[p] = function() {
                            return 7
                        }
                        ,
                        7 != ""[t](e)
                    }
                    ))
                      , m = f ? !o((function() {
                        var e = !1
                          , a = /a/;
                        return a.exec = function() {
                            return e = !0,
                            null
                        }
                        ,
                        "split" === t && (a.constructor = {},
                        a.constructor[c] = function() {
                            return a
                        }
                        ),
                        a[p](""),
                        !e
                    }
                    )) : void 0;
                    if (!f || !m || "replace" === t && !d || "split" === t && !u) {
                        var h = /./[p]
                          , v = a(r, p, ""[t], (function(t, e, a, n, s) {
                            return e.exec === l ? f && !s ? {
                                done: !0,
                                value: h.call(e, a, n)
                            } : {
                                done: !0,
                                value: t.call(a, e, n)
                            } : {
                                done: !1
                            }
                        }
                        ))
                          , g = v[0]
                          , b = v[1];
                        n(String.prototype, t, g),
                        s(RegExp.prototype, p, 2 == e ? function(t, e) {
                            return b.call(t, this, e)
                        }
                        : function(t) {
                            return b.call(t, this)
                        }
                        )
                    }
                }
            },
            "230e": function(t, e, a) {
                var n = a("d3f4")
                  , s = a("7726").document
                  , o = n(s) && n(s.createElement);
                t.exports = function(t) {
                    return o ? s.createElement(t) : {}
                }
            },
            "23c6": function(t, e, a) {
                var n = a("2d95")
                  , s = a("2b4c")("toStringTag")
                  , o = "Arguments" == n(function() {
                    return arguments
                }())
                  , r = function(t, e) {
                    try {
                        return t[e]
                    } catch (a) {}
                };
                t.exports = function(t) {
                    var e, a, i;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (a = r(e = Object(t), s)) ? a : o ? n(e) : "Object" == (i = n(e)) && "function" == typeof e.callee ? "Arguments" : i
                }
            },
            "241e": function(t, e, a) {
                var n = a("25eb");
                t.exports = function(t) {
                    return Object(n(t))
                }
            },
            "25eb": function(t, e) {
                t.exports = function(t) {
                    if (void 0 == t)
                        throw TypeError("Can't call method on  " + t);
                    return t
                }
            },
            "294c": function(t, e) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (e) {
                        return !0
                    }
                }
            },
            "2aba": function(t, e, a) {
                var n = a("7726")
                  , s = a("32e9")
                  , o = a("69a8")
                  , r = a("ca5a")("src")
                  , i = a("fa5b")
                  , l = "toString"
                  , c = ("" + i).split(l);
                a("8378").inspectSource = function(t) {
                    return i.call(t)
                }
                ,
                (t.exports = function(t, e, a, i) {
                    var l = "function" == typeof a;
                    l && (o(a, "name") || s(a, "name", e)),
                    t[e] !== a && (l && (o(a, r) || s(a, r, t[e] ? "" + t[e] : c.join(String(e)))),
                    t === n ? t[e] = a : i ? t[e] ? t[e] = a : s(t, e, a) : (delete t[e],
                    s(t, e, a)))
                }
                )(Function.prototype, l, (function() {
                    return "function" == typeof this && this[r] || i.call(this)
                }
                ))
            },
            "2b4c": function(t, e, a) {
                var n = a("5537")("wks")
                  , s = a("ca5a")
                  , o = a("7726").Symbol
                  , r = "function" == typeof o
                  , i = t.exports = function(t) {
                    return n[t] || (n[t] = r && o[t] || (r ? o : s)("Symbol." + t))
                }
                ;
                i.store = n
            },
            "2d00": function(t, e) {
                t.exports = !1
            },
            "2d95": function(t, e) {
                var a = {}.toString;
                t.exports = function(t) {
                    return a.call(t).slice(8, -1)
                }
            },
            "2fdb": function(t, e, a) {
                "use strict";
                var n = a("5ca1")
                  , s = a("d2c8")
                  , o = "includes";
                n(n.P + n.F * a("5147")(o), "String", {
                    includes: function(t) {
                        return !!~s(this, t, o).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            "30f1": function(t, e, a) {
                "use strict";
                var n = a("b8e3")
                  , s = a("63b6")
                  , o = a("9138")
                  , r = a("35e8")
                  , i = a("481b")
                  , l = a("8f60")
                  , c = a("45f2")
                  , d = a("53e2")
                  , u = a("5168")("iterator")
                  , p = !([].keys && "next"in [].keys())
                  , f = "@@iterator"
                  , m = "keys"
                  , h = "values"
                  , v = function() {
                    return this
                };
                t.exports = function(t, e, a, g, b, y, k) {
                    l(a, e, g);
                    var C, T, _, x = function(t) {
                        if (!p && t in M)
                            return M[t];
                        switch (t) {
                        case m:
                            return function() {
                                return new a(this,t)
                            }
                            ;
                        case h:
                            return function() {
                                return new a(this,t)
                            }
                        }
                        return function() {
                            return new a(this,t)
                        }
                    }, w = e + " Iterator", S = b == h, D = !1, M = t.prototype, O = M[u] || M[f] || b && M[b], E = O || x(b), A = b ? S ? x("entries") : E : void 0, R = "Array" == e && M.entries || O;
                    if (R && (_ = d(R.call(new t)),
                    _ !== Object.prototype && _.next && (c(_, w, !0),
                    n || "function" == typeof _[u] || r(_, u, v))),
                    S && O && O.name !== h && (D = !0,
                    E = function() {
                        return O.call(this)
                    }
                    ),
                    n && !k || !p && !D && M[u] || r(M, u, E),
                    i[e] = E,
                    i[w] = v,
                    b)
                        if (C = {
                            values: S ? E : x(h),
                            keys: y ? E : x(m),
                            entries: A
                        },
                        k)
                            for (T in C)
                                T in M || o(M, T, C[T]);
                        else
                            s(s.P + s.F * (p || D), e, C);
                    return C
                }
            },
            "32a6": function(t, e, a) {
                var n = a("241e")
                  , s = a("c3a1");
                a("ce7e")("keys", (function() {
                    return function(t) {
                        return s(n(t))
                    }
                }
                ))
            },
            "32e9": function(t, e, a) {
                var n = a("86cc")
                  , s = a("4630");
                t.exports = a("9e1e") ? function(t, e, a) {
                    return n.f(t, e, s(1, a))
                }
                : function(t, e, a) {
                    return t[e] = a,
                    t
                }
            },
            "32fc": function(t, e, a) {
                var n = a("e53d").document;
                t.exports = n && n.documentElement
            },
            "335c": function(t, e, a) {
                var n = a("6b4c");
                t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                    return "String" == n(t) ? t.split("") : Object(t)
                }
            },
            "355d": function(t, e) {
                e.f = {}.propertyIsEnumerable
            },
            "35e8": function(t, e, a) {
                var n = a("d9f6")
                  , s = a("aebd");
                t.exports = a("8e60") ? function(t, e, a) {
                    return n.f(t, e, s(1, a))
                }
                : function(t, e, a) {
                    return t[e] = a,
                    t
                }
            },
            "36c3": function(t, e, a) {
                var n = a("335c")
                  , s = a("25eb");
                t.exports = function(t) {
                    return n(s(t))
                }
            },
            3702: function(t, e, a) {
                var n = a("481b")
                  , s = a("5168")("iterator")
                  , o = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (n.Array === t || o[s] === t)
                }
            },
            "3a38": function(t, e) {
                var a = Math.ceil
                  , n = Math.floor;
                t.exports = function(t) {
                    return isNaN(t = +t) ? 0 : (t > 0 ? n : a)(t)
                }
            },
            "40c3": function(t, e, a) {
                var n = a("6b4c")
                  , s = a("5168")("toStringTag")
                  , o = "Arguments" == n(function() {
                    return arguments
                }())
                  , r = function(t, e) {
                    try {
                        return t[e]
                    } catch (a) {}
                };
                t.exports = function(t) {
                    var e, a, i;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (a = r(e = Object(t), s)) ? a : o ? n(e) : "Object" == (i = n(e)) && "function" == typeof e.callee ? "Arguments" : i
                }
            },
            4588: function(t, e) {
                var a = Math.ceil
                  , n = Math.floor;
                t.exports = function(t) {
                    return isNaN(t = +t) ? 0 : (t > 0 ? n : a)(t)
                }
            },
            "45f2": function(t, e, a) {
                var n = a("d9f6").f
                  , s = a("07e3")
                  , o = a("5168")("toStringTag");
                t.exports = function(t, e, a) {
                    t && !s(t = a ? t : t.prototype, o) && n(t, o, {
                        configurable: !0,
                        value: e
                    })
                }
            },
            4630: function(t, e) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            },
            "469f": function(t, e, a) {
                a("6c1c"),
                a("1654"),
                t.exports = a("7d7b")
            },
            "481b": function(t, e) {
                t.exports = {}
            },
            "4aa6": function(t, e, a) {
                t.exports = a("dc62")
            },
            "4bf8": function(t, e, a) {
                var n = a("be13");
                t.exports = function(t) {
                    return Object(n(t))
                }
            },
            "4ee1": function(t, e, a) {
                var n = a("5168")("iterator")
                  , s = !1;
                try {
                    var o = [7][n]();
                    o["return"] = function() {
                        s = !0
                    }
                    ,
                    Array.from(o, (function() {
                        throw 2
                    }
                    ))
                } catch (r) {}
                t.exports = function(t, e) {
                    if (!e && !s)
                        return !1;
                    var a = !1;
                    try {
                        var o = [7]
                          , i = o[n]();
                        i.next = function() {
                            return {
                                done: a = !0
                            }
                        }
                        ,
                        o[n] = function() {
                            return i
                        }
                        ,
                        t(o)
                    } catch (r) {}
                    return a
                }
            },
            "50ed": function(t, e) {
                t.exports = function(t, e) {
                    return {
                        value: e,
                        done: !!t
                    }
                }
            },
            5147: function(t, e, a) {
                var n = a("2b4c")("match");
                t.exports = function(t) {
                    var e = /./;
                    try {
                        "/./"[t](e)
                    } catch (a) {
                        try {
                            return e[n] = !1,
                            !"/./"[t](e)
                        } catch (s) {}
                    }
                    return !0
                }
            },
            5168: function(t, e, a) {
                var n = a("dbdb")("wks")
                  , s = a("62a0")
                  , o = a("e53d").Symbol
                  , r = "function" == typeof o
                  , i = t.exports = function(t) {
                    return n[t] || (n[t] = r && o[t] || (r ? o : s)("Symbol." + t))
                }
                ;
                i.store = n
            },
            5176: function(t, e, a) {
                t.exports = a("51b6")
            },
            "51b6": function(t, e, a) {
                a("a3c3"),
                t.exports = a("584a").Object.assign
            },
            "520a": function(t, e, a) {
                "use strict";
                var n = a("0bfb")
                  , s = RegExp.prototype.exec
                  , o = String.prototype.replace
                  , r = s
                  , i = "lastIndex"
                  , l = function() {
                    var t = /a/
                      , e = /b*/g;
                    return s.call(t, "a"),
                    s.call(e, "a"),
                    0 !== t[i] || 0 !== e[i]
                }()
                  , c = void 0 !== /()??/.exec("")[1]
                  , d = l || c;
                d && (r = function(t) {
                    var e, a, r, d, u = this;
                    return c && (a = new RegExp("^" + u.source + "$(?!\\s)",n.call(u))),
                    l && (e = u[i]),
                    r = s.call(u, t),
                    l && r && (u[i] = u.global ? r.index + r[0].length : e),
                    c && r && r.length > 1 && o.call(r[0], a, (function() {
                        for (d = 1; d < arguments.length - 2; d++)
                            void 0 === arguments[d] && (r[d] = void 0)
                    }
                    )),
                    r
                }
                ),
                t.exports = r
            },
            "53e2": function(t, e, a) {
                var n = a("07e3")
                  , s = a("241e")
                  , o = a("5559")("IE_PROTO")
                  , r = Object.prototype;
                t.exports = Object.getPrototypeOf || function(t) {
                    return t = s(t),
                    n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? r : null
                }
            },
            "549b": function(t, e, a) {
                "use strict";
                var n = a("d864")
                  , s = a("63b6")
                  , o = a("241e")
                  , r = a("b0dc")
                  , i = a("3702")
                  , l = a("b447")
                  , c = a("20fd")
                  , d = a("7cd6");
                s(s.S + s.F * !a("4ee1")((function(t) {
                    Array.from(t)
                }
                )), "Array", {
                    from: function(t) {
                        var e, a, s, u, p = o(t), f = "function" == typeof this ? this : Array, m = arguments.length, h = m > 1 ? arguments[1] : void 0, v = void 0 !== h, g = 0, b = d(p);
                        if (v && (h = n(h, m > 2 ? arguments[2] : void 0, 2)),
                        void 0 == b || f == Array && i(b))
                            for (e = l(p.length),
                            a = new f(e); e > g; g++)
                                c(a, g, v ? h(p[g], g) : p[g]);
                        else
                            for (u = b.call(p),
                            a = new f; !(s = u.next()).done; g++)
                                c(a, g, v ? r(u, h, [s.value, g], !0) : s.value);
                        return a.length = g,
                        a
                    }
                })
            },
            "54a1": function(t, e, a) {
                a("6c1c"),
                a("1654"),
                t.exports = a("95d5")
            },
            5537: function(t, e, a) {
                var n = a("8378")
                  , s = a("7726")
                  , o = "__core-js_shared__"
                  , r = s[o] || (s[o] = {});
                (t.exports = function(t, e) {
                    return r[t] || (r[t] = void 0 !== e ? e : {})
                }
                )("versions", []).push({
                    version: n.version,
                    mode: a("2d00") ? "pure" : "global",
                    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                })
            },
            5559: function(t, e, a) {
                var n = a("dbdb")("keys")
                  , s = a("62a0");
                t.exports = function(t) {
                    return n[t] || (n[t] = s(t))
                }
            },
            "584a": function(t, e) {
                var a = t.exports = {
                    version: "2.6.5"
                };
                "number" == typeof __e && (__e = a)
            },
            "5b4e": function(t, e, a) {
                var n = a("36c3")
                  , s = a("b447")
                  , o = a("0fc9");
                t.exports = function(t) {
                    return function(e, a, r) {
                        var i, l = n(e), c = s(l.length), d = o(r, c);
                        if (t && a != a) {
                            while (c > d)
                                if (i = l[d++],
                                i != i)
                                    return !0
                        } else
                            for (; c > d; d++)
                                if ((t || d in l) && l[d] === a)
                                    return t || d || 0;
                        return !t && -1
                    }
                }
            },
            "5ca1": function(t, e, a) {
                var n = a("7726")
                  , s = a("8378")
                  , o = a("32e9")
                  , r = a("2aba")
                  , i = a("9b43")
                  , l = "prototype"
                  , c = function(t, e, a) {
                    var d, u, p, f, m = t & c.F, h = t & c.G, v = t & c.S, g = t & c.P, b = t & c.B, y = h ? n : v ? n[e] || (n[e] = {}) : (n[e] || {})[l], k = h ? s : s[e] || (s[e] = {}), C = k[l] || (k[l] = {});
                    for (d in h && (a = e),
                    a)
                        u = !m && y && void 0 !== y[d],
                        p = (u ? y : a)[d],
                        f = b && u ? i(p, n) : g && "function" == typeof p ? i(Function.call, p) : p,
                        y && r(y, d, p, t & c.U),
                        k[d] != p && o(k, d, f),
                        g && C[d] != p && (C[d] = p)
                };
                n.core = s,
                c.F = 1,
                c.G = 2,
                c.S = 4,
                c.P = 8,
                c.B = 16,
                c.W = 32,
                c.U = 64,
                c.R = 128,
                t.exports = c
            },
            "5d73": function(t, e, a) {
                t.exports = a("469f")
            },
            "5f1b": function(t, e, a) {
                "use strict";
                var n = a("23c6")
                  , s = RegExp.prototype.exec;
                t.exports = function(t, e) {
                    var a = t.exec;
                    if ("function" === typeof a) {
                        var o = a.call(t, e);
                        if ("object" !== typeof o)
                            throw new TypeError("RegExp exec method returned something other than an Object or null");
                        return o
                    }
                    if ("RegExp" !== n(t))
                        throw new TypeError("RegExp#exec called on incompatible receiver");
                    return s.call(t, e)
                }
            },
            "626a": function(t, e, a) {
                var n = a("2d95");
                t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                    return "String" == n(t) ? t.split("") : Object(t)
                }
            },
            "62a0": function(t, e) {
                var a = 0
                  , n = Math.random();
                t.exports = function(t) {
                    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++a + n).toString(36))
                }
            },
            "63b6": function(t, e, a) {
                var n = a("e53d")
                  , s = a("584a")
                  , o = a("d864")
                  , r = a("35e8")
                  , i = a("07e3")
                  , l = "prototype"
                  , c = function(t, e, a) {
                    var d, u, p, f = t & c.F, m = t & c.G, h = t & c.S, v = t & c.P, g = t & c.B, b = t & c.W, y = m ? s : s[e] || (s[e] = {}), k = y[l], C = m ? n : h ? n[e] : (n[e] || {})[l];
                    for (d in m && (a = e),
                    a)
                        u = !f && C && void 0 !== C[d],
                        u && i(y, d) || (p = u ? C[d] : a[d],
                        y[d] = m && "function" != typeof C[d] ? a[d] : g && u ? o(p, n) : b && C[d] == p ? function(t) {
                            var e = function(e, a, n) {
                                if (this instanceof t) {
                                    switch (arguments.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(e);
                                    case 2:
                                        return new t(e,a)
                                    }
                                    return new t(e,a,n)
                                }
                                return t.apply(this, arguments)
                            };
                            return e[l] = t[l],
                            e
                        }(p) : v && "function" == typeof p ? o(Function.call, p) : p,
                        v && ((y.virtual || (y.virtual = {}))[d] = p,
                        t & c.R && k && !k[d] && r(k, d, p)))
                };
                c.F = 1,
                c.G = 2,
                c.S = 4,
                c.P = 8,
                c.B = 16,
                c.W = 32,
                c.U = 64,
                c.R = 128,
                t.exports = c
            },
            6762: function(t, e, a) {
                "use strict";
                var n = a("5ca1")
                  , s = a("c366")(!0);
                n(n.P, "Array", {
                    includes: function(t) {
                        return s(this, t, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }),
                a("9c6c")("includes")
            },
            6821: function(t, e, a) {
                var n = a("626a")
                  , s = a("be13");
                t.exports = function(t) {
                    return n(s(t))
                }
            },
            "69a8": function(t, e) {
                var a = {}.hasOwnProperty;
                t.exports = function(t, e) {
                    return a.call(t, e)
                }
            },
            "6a99": function(t, e, a) {
                var n = a("d3f4");
                t.exports = function(t, e) {
                    if (!n(t))
                        return t;
                    var a, s;
                    if (e && "function" == typeof (a = t.toString) && !n(s = a.call(t)))
                        return s;
                    if ("function" == typeof (a = t.valueOf) && !n(s = a.call(t)))
                        return s;
                    if (!e && "function" == typeof (a = t.toString) && !n(s = a.call(t)))
                        return s;
                    throw TypeError("Can't convert object to primitive value")
                }
            },
            "6b4c": function(t, e) {
                var a = {}.toString;
                t.exports = function(t) {
                    return a.call(t).slice(8, -1)
                }
            },
            "6c1c": function(t, e, a) {
                a("c367");
                for (var n = a("e53d"), s = a("35e8"), o = a("481b"), r = a("5168")("toStringTag"), i = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < i.length; l++) {
                    var c = i[l]
                      , d = n[c]
                      , u = d && d.prototype;
                    u && !u[r] && s(u, r, c),
                    o[c] = o.Array
                }
            },
            "71c1": function(t, e, a) {
                var n = a("3a38")
                  , s = a("25eb");
                t.exports = function(t) {
                    return function(e, a) {
                        var o, r, i = String(s(e)), l = n(a), c = i.length;
                        return l < 0 || l >= c ? t ? "" : void 0 : (o = i.charCodeAt(l),
                        o < 55296 || o > 56319 || l + 1 === c || (r = i.charCodeAt(l + 1)) < 56320 || r > 57343 ? t ? i.charAt(l) : o : t ? i.slice(l, l + 2) : r - 56320 + (o - 55296 << 10) + 65536)
                    }
                }
            },
            7726: function(t, e) {
                var a = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = a)
            },
            "774e": function(t, e, a) {
                t.exports = a("d2d5")
            },
            "77f1": function(t, e, a) {
                var n = a("4588")
                  , s = Math.max
                  , o = Math.min;
                t.exports = function(t, e) {
                    return t = n(t),
                    t < 0 ? s(t + e, 0) : o(t, e)
                }
            },
            "794b": function(t, e, a) {
                t.exports = !a("8e60") && !a("294c")((function() {
                    return 7 != Object.defineProperty(a("1ec9")("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }
                ))
            },
            "79aa": function(t, e) {
                t.exports = function(t) {
                    if ("function" != typeof t)
                        throw TypeError(t + " is not a function!");
                    return t
                }
            },
            "79e5": function(t, e) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (e) {
                        return !0
                    }
                }
            },
            "7cd6": function(t, e, a) {
                var n = a("40c3")
                  , s = a("5168")("iterator")
                  , o = a("481b");
                t.exports = a("584a").getIteratorMethod = function(t) {
                    if (void 0 != t)
                        return t[s] || t["@@iterator"] || o[n(t)]
                }
            },
            "7d7b": function(t, e, a) {
                var n = a("e4ae")
                  , s = a("7cd6");
                t.exports = a("584a").getIterator = function(t) {
                    var e = s(t);
                    if ("function" != typeof e)
                        throw TypeError(t + " is not iterable!");
                    return n(e.call(t))
                }
            },
            "7e90": function(t, e, a) {
                var n = a("d9f6")
                  , s = a("e4ae")
                  , o = a("c3a1");
                t.exports = a("8e60") ? Object.defineProperties : function(t, e) {
                    s(t);
                    var a, r = o(e), i = r.length, l = 0;
                    while (i > l)
                        n.f(t, a = r[l++], e[a]);
                    return t
                }
            },
            8378: function(t, e) {
                var a = t.exports = {
                    version: "2.6.5"
                };
                "number" == typeof __e && (__e = a)
            },
            8436: function(t, e) {
                t.exports = function() {}
            },
            "86cc": function(t, e, a) {
                var n = a("cb7c")
                  , s = a("c69a")
                  , o = a("6a99")
                  , r = Object.defineProperty;
                e.f = a("9e1e") ? Object.defineProperty : function(t, e, a) {
                    if (n(t),
                    e = o(e, !0),
                    n(a),
                    s)
                        try {
                            return r(t, e, a)
                        } catch (i) {}
                    if ("get"in a || "set"in a)
                        throw TypeError("Accessors not supported!");
                    return "value"in a && (t[e] = a.value),
                    t
                }
            },
            "8aae": function(t, e, a) {
                a("32a6"),
                t.exports = a("584a").Object.keys
            },
            "8e60": function(t, e, a) {
                t.exports = !a("294c")((function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }
                ))
            },
            "8f60": function(t, e, a) {
                "use strict";
                var n = a("a159")
                  , s = a("aebd")
                  , o = a("45f2")
                  , r = {};
                a("35e8")(r, a("5168")("iterator"), (function() {
                    return this
                }
                )),
                t.exports = function(t, e, a) {
                    t.prototype = n(r, {
                        next: s(1, a)
                    }),
                    o(t, e + " Iterator")
                }
            },
            9003: function(t, e, a) {
                var n = a("6b4c");
                t.exports = Array.isArray || function(t) {
                    return "Array" == n(t)
                }
            },
            9138: function(t, e, a) {
                t.exports = a("35e8")
            },
            9306: function(t, e, a) {
                "use strict";
                var n = a("c3a1")
                  , s = a("9aa9")
                  , o = a("355d")
                  , r = a("241e")
                  , i = a("335c")
                  , l = Object.assign;
                t.exports = !l || a("294c")((function() {
                    var t = {}
                      , e = {}
                      , a = Symbol()
                      , n = "abcdefghijklmnopqrst";
                    return t[a] = 7,
                    n.split("").forEach((function(t) {
                        e[t] = t
                    }
                    )),
                    7 != l({}, t)[a] || Object.keys(l({}, e)).join("") != n
                }
                )) ? function(t, e) {
                    var a = r(t)
                      , l = arguments.length
                      , c = 1
                      , d = s.f
                      , u = o.f;
                    while (l > c) {
                        var p, f = i(arguments[c++]), m = d ? n(f).concat(d(f)) : n(f), h = m.length, v = 0;
                        while (h > v)
                            u.call(f, p = m[v++]) && (a[p] = f[p])
                    }
                    return a
                }
                : l
            },
            9427: function(t, e, a) {
                var n = a("63b6");
                n(n.S, "Object", {
                    create: a("a159")
                })
            },
            "95d5": function(t, e, a) {
                var n = a("40c3")
                  , s = a("5168")("iterator")
                  , o = a("481b");
                t.exports = a("584a").isIterable = function(t) {
                    var e = Object(t);
                    return void 0 !== e[s] || "@@iterator"in e || o.hasOwnProperty(n(e))
                }
            },
            "9aa9": function(t, e) {
                e.f = Object.getOwnPropertySymbols
            },
            "9b43": function(t, e, a) {
                var n = a("d8e8");
                t.exports = function(t, e, a) {
                    if (n(t),
                    void 0 === e)
                        return t;
                    switch (a) {
                    case 1:
                        return function(a) {
                            return t.call(e, a)
                        }
                        ;
                    case 2:
                        return function(a, n) {
                            return t.call(e, a, n)
                        }
                        ;
                    case 3:
                        return function(a, n, s) {
                            return t.call(e, a, n, s)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
            },
            "9c6c": function(t, e, a) {
                var n = a("2b4c")("unscopables")
                  , s = Array.prototype;
                void 0 == s[n] && a("32e9")(s, n, {}),
                t.exports = function(t) {
                    s[n][t] = !0
                }
            },
            "9def": function(t, e, a) {
                var n = a("4588")
                  , s = Math.min;
                t.exports = function(t) {
                    return t > 0 ? s(n(t), 9007199254740991) : 0
                }
            },
            "9e1e": function(t, e, a) {
                t.exports = !a("79e5")((function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }
                ))
            },
            a159: function(t, e, a) {
                var n = a("e4ae")
                  , s = a("7e90")
                  , o = a("1691")
                  , r = a("5559")("IE_PROTO")
                  , i = function() {}
                  , l = "prototype"
                  , c = function() {
                    var t, e = a("1ec9")("iframe"), n = o.length, s = "<", r = ">";
                    e.style.display = "none",
                    a("32fc").appendChild(e),
                    e.src = "javascript:",
                    t = e.contentWindow.document,
                    t.open(),
                    t.write(s + "script" + r + "document.F=Object" + s + "/script" + r),
                    t.close(),
                    c = t.F;
                    while (n--)
                        delete c[l][o[n]];
                    return c()
                };
                t.exports = Object.create || function(t, e) {
                    var a;
                    return null !== t ? (i[l] = n(t),
                    a = new i,
                    i[l] = null,
                    a[r] = t) : a = c(),
                    void 0 === e ? a : s(a, e)
                }
            },
            a352: function(t, e) {
                t.exports = a("aa47")
            },
            a3c3: function(t, e, a) {
                var n = a("63b6");
                n(n.S + n.F, "Object", {
                    assign: a("9306")
                })
            },
            a481: function(t, e, a) {
                "use strict";
                var n = a("cb7c")
                  , s = a("4bf8")
                  , o = a("9def")
                  , r = a("4588")
                  , i = a("0390")
                  , l = a("5f1b")
                  , c = Math.max
                  , d = Math.min
                  , u = Math.floor
                  , p = /\$([$&`']|\d\d?|<[^>]*>)/g
                  , f = /\$([$&`']|\d\d?)/g
                  , m = function(t) {
                    return void 0 === t ? t : String(t)
                };
                a("214f")("replace", 2, (function(t, e, a, h) {
                    return [function(n, s) {
                        var o = t(this)
                          , r = void 0 == n ? void 0 : n[e];
                        return void 0 !== r ? r.call(n, o, s) : a.call(String(o), n, s)
                    }
                    , function(t, e) {
                        var s = h(a, t, this, e);
                        if (s.done)
                            return s.value;
                        var u = n(t)
                          , p = String(this)
                          , f = "function" === typeof e;
                        f || (e = String(e));
                        var g = u.global;
                        if (g) {
                            var b = u.unicode;
                            u.lastIndex = 0
                        }
                        var y = [];
                        while (1) {
                            var k = l(u, p);
                            if (null === k)
                                break;
                            if (y.push(k),
                            !g)
                                break;
                            var C = String(k[0]);
                            "" === C && (u.lastIndex = i(p, o(u.lastIndex), b))
                        }
                        for (var T = "", _ = 0, x = 0; x < y.length; x++) {
                            k = y[x];
                            for (var w = String(k[0]), S = c(d(r(k.index), p.length), 0), D = [], M = 1; M < k.length; M++)
                                D.push(m(k[M]));
                            var O = k.groups;
                            if (f) {
                                var E = [w].concat(D, S, p);
                                void 0 !== O && E.push(O);
                                var A = String(e.apply(void 0, E))
                            } else
                                A = v(w, p, S, D, O, e);
                            S >= _ && (T += p.slice(_, S) + A,
                            _ = S + w.length)
                        }
                        return T + p.slice(_)
                    }
                    ];
                    function v(t, e, n, o, r, i) {
                        var l = n + t.length
                          , c = o.length
                          , d = f;
                        return void 0 !== r && (r = s(r),
                        d = p),
                        a.call(i, d, (function(a, s) {
                            var i;
                            switch (s.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return t;
                            case "`":
                                return e.slice(0, n);
                            case "'":
                                return e.slice(l);
                            case "<":
                                i = r[s.slice(1, -1)];
                                break;
                            default:
                                var d = +s;
                                if (0 === d)
                                    return a;
                                if (d > c) {
                                    var p = u(d / 10);
                                    return 0 === p ? a : p <= c ? void 0 === o[p - 1] ? s.charAt(1) : o[p - 1] + s.charAt(1) : a
                                }
                                i = o[d - 1]
                            }
                            return void 0 === i ? "" : i
                        }
                        ))
                    }
                }
                ))
            },
            a4bb: function(t, e, a) {
                t.exports = a("8aae")
            },
            a745: function(t, e, a) {
                t.exports = a("f410")
            },
            aae3: function(t, e, a) {
                var n = a("d3f4")
                  , s = a("2d95")
                  , o = a("2b4c")("match");
                t.exports = function(t) {
                    var e;
                    return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == s(t))
                }
            },
            aebd: function(t, e) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            },
            b0c5: function(t, e, a) {
                "use strict";
                var n = a("520a");
                a("5ca1")({
                    target: "RegExp",
                    proto: !0,
                    forced: n !== /./.exec
                }, {
                    exec: n
                })
            },
            b0dc: function(t, e, a) {
                var n = a("e4ae");
                t.exports = function(t, e, a, s) {
                    try {
                        return s ? e(n(a)[0], a[1]) : e(a)
                    } catch (r) {
                        var o = t["return"];
                        throw void 0 !== o && n(o.call(t)),
                        r
                    }
                }
            },
            b447: function(t, e, a) {
                var n = a("3a38")
                  , s = Math.min;
                t.exports = function(t) {
                    return t > 0 ? s(n(t), 9007199254740991) : 0
                }
            },
            b8e3: function(t, e) {
                t.exports = !0
            },
            be13: function(t, e) {
                t.exports = function(t) {
                    if (void 0 == t)
                        throw TypeError("Can't call method on  " + t);
                    return t
                }
            },
            c366: function(t, e, a) {
                var n = a("6821")
                  , s = a("9def")
                  , o = a("77f1");
                t.exports = function(t) {
                    return function(e, a, r) {
                        var i, l = n(e), c = s(l.length), d = o(r, c);
                        if (t && a != a) {
                            while (c > d)
                                if (i = l[d++],
                                i != i)
                                    return !0
                        } else
                            for (; c > d; d++)
                                if ((t || d in l) && l[d] === a)
                                    return t || d || 0;
                        return !t && -1
                    }
                }
            },
            c367: function(t, e, a) {
                "use strict";
                var n = a("8436")
                  , s = a("50ed")
                  , o = a("481b")
                  , r = a("36c3");
                t.exports = a("30f1")(Array, "Array", (function(t, e) {
                    this._t = r(t),
                    this._i = 0,
                    this._k = e
                }
                ), (function() {
                    var t = this._t
                      , e = this._k
                      , a = this._i++;
                    return !t || a >= t.length ? (this._t = void 0,
                    s(1)) : s(0, "keys" == e ? a : "values" == e ? t[a] : [a, t[a]])
                }
                ), "values"),
                o.Arguments = o.Array,
                n("keys"),
                n("values"),
                n("entries")
            },
            c3a1: function(t, e, a) {
                var n = a("e6f3")
                  , s = a("1691");
                t.exports = Object.keys || function(t) {
                    return n(t, s)
                }
            },
            c649: function(t, e, a) {
                "use strict";
                (function(t) {
                    a.d(e, "c", (function() {
                        return u
                    }
                    )),
                    a.d(e, "a", (function() {
                        return c
                    }
                    )),
                    a.d(e, "b", (function() {
                        return r
                    }
                    )),
                    a.d(e, "d", (function() {
                        return d
                    }
                    ));
                    a("a481");
                    var n = a("4aa6")
                      , s = a.n(n);
                    function o() {
                        return "undefined" !== typeof window ? window.console : t.console
                    }
                    var r = o();
                    function i(t) {
                        var e = s()(null);
                        return function(a) {
                            var n = e[a];
                            return n || (e[a] = t(a))
                        }
                    }
                    var l = /-(\w)/g
                      , c = i((function(t) {
                        return t.replace(l, (function(t, e) {
                            return e ? e.toUpperCase() : ""
                        }
                        ))
                    }
                    ));
                    function d(t) {
                        null !== t.parentElement && t.parentElement.removeChild(t)
                    }
                    function u(t, e, a) {
                        var n = 0 === a ? t.children[0] : t.children[a - 1].nextSibling;
                        t.insertBefore(e, n)
                    }
                }
                ).call(this, a("c8ba"))
            },
            c69a: function(t, e, a) {
                t.exports = !a("9e1e") && !a("79e5")((function() {
                    return 7 != Object.defineProperty(a("230e")("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }
                ))
            },
            c8ba: function(t, e) {
                var a;
                a = function() {
                    return this
                }();
                try {
                    a = a || new Function("return this")()
                } catch (n) {
                    "object" === typeof window && (a = window)
                }
                t.exports = a
            },
            c8bb: function(t, e, a) {
                t.exports = a("54a1")
            },
            ca5a: function(t, e) {
                var a = 0
                  , n = Math.random();
                t.exports = function(t) {
                    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++a + n).toString(36))
                }
            },
            cb7c: function(t, e, a) {
                var n = a("d3f4");
                t.exports = function(t) {
                    if (!n(t))
                        throw TypeError(t + " is not an object!");
                    return t
                }
            },
            ce7e: function(t, e, a) {
                var n = a("63b6")
                  , s = a("584a")
                  , o = a("294c");
                t.exports = function(t, e) {
                    var a = (s.Object || {})[t] || Object[t]
                      , r = {};
                    r[t] = e(a),
                    n(n.S + n.F * o((function() {
                        a(1)
                    }
                    )), "Object", r)
                }
            },
            d2c8: function(t, e, a) {
                var n = a("aae3")
                  , s = a("be13");
                t.exports = function(t, e, a) {
                    if (n(e))
                        throw TypeError("String#" + a + " doesn't accept regex!");
                    return String(s(t))
                }
            },
            d2d5: function(t, e, a) {
                a("1654"),
                a("549b"),
                t.exports = a("584a").Array.from
            },
            d3f4: function(t, e) {
                t.exports = function(t) {
                    return "object" === typeof t ? null !== t : "function" === typeof t
                }
            },
            d864: function(t, e, a) {
                var n = a("79aa");
                t.exports = function(t, e, a) {
                    if (n(t),
                    void 0 === e)
                        return t;
                    switch (a) {
                    case 1:
                        return function(a) {
                            return t.call(e, a)
                        }
                        ;
                    case 2:
                        return function(a, n) {
                            return t.call(e, a, n)
                        }
                        ;
                    case 3:
                        return function(a, n, s) {
                            return t.call(e, a, n, s)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
            },
            d8e8: function(t, e) {
                t.exports = function(t) {
                    if ("function" != typeof t)
                        throw TypeError(t + " is not a function!");
                    return t
                }
            },
            d9f6: function(t, e, a) {
                var n = a("e4ae")
                  , s = a("794b")
                  , o = a("1bc3")
                  , r = Object.defineProperty;
                e.f = a("8e60") ? Object.defineProperty : function(t, e, a) {
                    if (n(t),
                    e = o(e, !0),
                    n(a),
                    s)
                        try {
                            return r(t, e, a)
                        } catch (i) {}
                    if ("get"in a || "set"in a)
                        throw TypeError("Accessors not supported!");
                    return "value"in a && (t[e] = a.value),
                    t
                }
            },
            dbdb: function(t, e, a) {
                var n = a("584a")
                  , s = a("e53d")
                  , o = "__core-js_shared__"
                  , r = s[o] || (s[o] = {});
                (t.exports = function(t, e) {
                    return r[t] || (r[t] = void 0 !== e ? e : {})
                }
                )("versions", []).push({
                    version: n.version,
                    mode: a("b8e3") ? "pure" : "global",
                    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                })
            },
            dc62: function(t, e, a) {
                a("9427");
                var n = a("584a").Object;
                t.exports = function(t, e) {
                    return n.create(t, e)
                }
            },
            e4ae: function(t, e, a) {
                var n = a("f772");
                t.exports = function(t) {
                    if (!n(t))
                        throw TypeError(t + " is not an object!");
                    return t
                }
            },
            e53d: function(t, e) {
                var a = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = a)
            },
            e6f3: function(t, e, a) {
                var n = a("07e3")
                  , s = a("36c3")
                  , o = a("5b4e")(!1)
                  , r = a("5559")("IE_PROTO");
                t.exports = function(t, e) {
                    var a, i = s(t), l = 0, c = [];
                    for (a in i)
                        a != r && n(i, a) && c.push(a);
                    while (e.length > l)
                        n(i, a = e[l++]) && (~o(c, a) || c.push(a));
                    return c
                }
            },
            f410: function(t, e, a) {
                a("1af6"),
                t.exports = a("584a").Array.isArray
            },
            f559: function(t, e, a) {
                "use strict";
                var n = a("5ca1")
                  , s = a("9def")
                  , o = a("d2c8")
                  , r = "startsWith"
                  , i = ""[r];
                n(n.P + n.F * a("5147")(r), "String", {
                    startsWith: function(t) {
                        var e = o(this, t, r)
                          , a = s(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length))
                          , n = String(t);
                        return i ? i.call(e, n, a) : e.slice(a, a + n.length) === n
                    }
                })
            },
            f772: function(t, e) {
                t.exports = function(t) {
                    return "object" === typeof t ? null !== t : "function" === typeof t
                }
            },
            fa5b: function(t, e, a) {
                t.exports = a("5537")("native-function-to-string", Function.toString)
            },
            fb15: function(t, e, a) {
                "use strict";
                var n;
                (a.r(e),
                "undefined" !== typeof window) && ((n = window.document.currentScript) && (n = n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)) && (a.p = n[1]));
                var s = a("5176")
                  , o = a.n(s)
                  , r = (a("f559"),
                a("a4bb"))
                  , i = a.n(r)
                  , l = a("a745")
                  , c = a.n(l);
                function d(t) {
                    if (c()(t))
                        return t
                }
                var u = a("5d73")
                  , p = a.n(u);
                function f(t, e) {
                    var a = []
                      , n = !0
                      , s = !1
                      , o = void 0;
                    try {
                        for (var r, i = p()(t); !(n = (r = i.next()).done); n = !0)
                            if (a.push(r.value),
                            e && a.length === e)
                                break
                    } catch (l) {
                        s = !0,
                        o = l
                    } finally {
                        try {
                            n || null == i["return"] || i["return"]()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return a
                }
                function m() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
                function h(t, e) {
                    return d(t) || f(t, e) || m()
                }
                a("6762"),
                a("2fdb");
                function v(t) {
                    if (c()(t)) {
                        for (var e = 0, a = new Array(t.length); e < t.length; e++)
                            a[e] = t[e];
                        return a
                    }
                }
                var g = a("774e")
                  , b = a.n(g)
                  , y = a("c8bb")
                  , k = a.n(y);
                function C(t) {
                    if (k()(Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t))
                        return b()(t)
                }
                function T() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }
                function _(t) {
                    return v(t) || C(t) || T()
                }
                var x = a("a352")
                  , w = a.n(x)
                  , S = a("c649");
                function D(t, e, a) {
                    return void 0 === a || (t = t || {},
                    t[e] = a),
                    t
                }
                function M(t, e) {
                    return t.map((function(t) {
                        return t.elm
                    }
                    )).indexOf(e)
                }
                function O(t, e, a, n) {
                    if (!t)
                        return [];
                    var s = t.map((function(t) {
                        return t.elm
                    }
                    ))
                      , o = e.length - n
                      , r = _(e).map((function(t, e) {
                        return e >= o ? s.length : s.indexOf(t)
                    }
                    ));
                    return a ? r.filter((function(t) {
                        return -1 !== t
                    }
                    )) : r
                }
                function E(t, e) {
                    var a = this;
                    this.$nextTick((function() {
                        return a.$emit(t.toLowerCase(), e)
                    }
                    ))
                }
                function A(t) {
                    var e = this;
                    return function(a) {
                        null !== e.realList && e["onDrag" + t](a),
                        E.call(e, t, a)
                    }
                }
                function R(t) {
                    return ["transition-group", "TransitionGroup"].includes(t)
                }
                function I(t) {
                    if (!t || 1 !== t.length)
                        return !1;
                    var e = h(t, 1)
                      , a = e[0].componentOptions;
                    return !!a && R(a.tag)
                }
                function N(t, e, a) {
                    return t[a] || (e[a] ? e[a]() : void 0)
                }
                function $(t, e, a) {
                    var n = 0
                      , s = 0
                      , o = N(e, a, "header");
                    o && (n = o.length,
                    t = t ? [].concat(_(o), _(t)) : _(o));
                    var r = N(e, a, "footer");
                    return r && (s = r.length,
                    t = t ? [].concat(_(t), _(r)) : _(r)),
                    {
                        children: t,
                        headerOffset: n,
                        footerOffset: s
                    }
                }
                function P(t, e) {
                    var a = null
                      , n = function(t, e) {
                        a = D(a, t, e)
                    }
                      , s = i()(t).filter((function(t) {
                        return "id" === t || t.startsWith("data-")
                    }
                    )).reduce((function(e, a) {
                        return e[a] = t[a],
                        e
                    }
                    ), {});
                    if (n("attrs", s),
                    !e)
                        return a;
                    var r = e.on
                      , l = e.props
                      , c = e.attrs;
                    return n("on", r),
                    n("props", l),
                    o()(a.attrs, c),
                    a
                }
                var L = ["Start", "Add", "Remove", "Update", "End"]
                  , j = ["Choose", "Unchoose", "Sort", "Filter", "Clone"]
                  , B = ["Move"].concat(L, j).map((function(t) {
                    return "on" + t
                }
                ))
                  , Y = null
                  , z = {
                    options: Object,
                    list: {
                        type: Array,
                        required: !1,
                        default: null
                    },
                    value: {
                        type: Array,
                        required: !1,
                        default: null
                    },
                    noTransitionOnDrag: {
                        type: Boolean,
                        default: !1
                    },
                    clone: {
                        type: Function,
                        default: function(t) {
                            return t
                        }
                    },
                    element: {
                        type: String,
                        default: "div"
                    },
                    tag: {
                        type: String,
                        default: null
                    },
                    move: {
                        type: Function,
                        default: null
                    },
                    componentData: {
                        type: Object,
                        required: !1,
                        default: null
                    }
                }
                  , F = {
                    name: "draggable",
                    inheritAttrs: !1,
                    props: z,
                    data: function() {
                        return {
                            transitionMode: !1,
                            noneFunctionalComponentMode: !1
                        }
                    },
                    render: function(t) {
                        var e = this.$slots.default;
                        this.transitionMode = I(e);
                        var a = $(e, this.$slots, this.$scopedSlots)
                          , n = a.children
                          , s = a.headerOffset
                          , o = a.footerOffset;
                        this.headerOffset = s,
                        this.footerOffset = o;
                        var r = P(this.$attrs, this.componentData);
                        return t(this.getTag(), r, n)
                    },
                    created: function() {
                        null !== this.list && null !== this.value && S["b"].error("Value and list props are mutually exclusive! Please set one or another."),
                        "div" !== this.element && S["b"].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props"),
                        void 0 !== this.options && S["b"].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props")
                    },
                    mounted: function() {
                        var t = this;
                        if (this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional(),
                        this.noneFunctionalComponentMode && this.transitionMode)
                            throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
                        var e = {};
                        L.forEach((function(a) {
                            e["on" + a] = A.call(t, a)
                        }
                        )),
                        j.forEach((function(a) {
                            e["on" + a] = E.bind(t, a)
                        }
                        ));
                        var a = i()(this.$attrs).reduce((function(e, a) {
                            return e[Object(S["a"])(a)] = t.$attrs[a],
                            e
                        }
                        ), {})
                          , n = o()({}, this.options, a, e, {
                            onMove: function(e, a) {
                                return t.onDragMove(e, a)
                            }
                        });
                        !("draggable"in n) && (n.draggable = ">*"),
                        this._sortable = new w.a(this.rootContainer,n),
                        this.computeIndexes()
                    },
                    beforeDestroy: function() {
                        void 0 !== this._sortable && this._sortable.destroy()
                    },
                    computed: {
                        rootContainer: function() {
                            return this.transitionMode ? this.$el.children[0] : this.$el
                        },
                        realList: function() {
                            return this.list ? this.list : this.value
                        }
                    },
                    watch: {
                        options: {
                            handler: function(t) {
                                this.updateOptions(t)
                            },
                            deep: !0
                        },
                        $attrs: {
                            handler: function(t) {
                                this.updateOptions(t)
                            },
                            deep: !0
                        },
                        realList: function() {
                            this.computeIndexes()
                        }
                    },
                    methods: {
                        getIsFunctional: function() {
                            var t = this._vnode.fnOptions;
                            return t && t.functional
                        },
                        getTag: function() {
                            return this.tag || this.element
                        },
                        updateOptions: function(t) {
                            for (var e in t) {
                                var a = Object(S["a"])(e);
                                -1 === B.indexOf(a) && this._sortable.option(a, t[e])
                            }
                        },
                        getChildrenNodes: function() {
                            if (this.noneFunctionalComponentMode)
                                return this.$children[0].$slots.default;
                            var t = this.$slots.default;
                            return this.transitionMode ? t[0].child.$slots.default : t
                        },
                        computeIndexes: function() {
                            var t = this;
                            this.$nextTick((function() {
                                t.visibleIndexes = O(t.getChildrenNodes(), t.rootContainer.children, t.transitionMode, t.footerOffset)
                            }
                            ))
                        },
                        getUnderlyingVm: function(t) {
                            var e = M(this.getChildrenNodes() || [], t);
                            if (-1 === e)
                                return null;
                            var a = this.realList[e];
                            return {
                                index: e,
                                element: a
                            }
                        },
                        getUnderlyingPotencialDraggableComponent: function(t) {
                            var e = t.__vue__;
                            return e && e.$options && R(e.$options._componentTag) ? e.$parent : !("realList"in e) && 1 === e.$children.length && "realList"in e.$children[0] ? e.$children[0] : e
                        },
                        emitChanges: function(t) {
                            var e = this;
                            this.$nextTick((function() {
                                e.$emit("change", t)
                            }
                            ))
                        },
                        alterList: function(t) {
                            if (this.list)
                                t(this.list);
                            else {
                                var e = _(this.value);
                                t(e),
                                this.$emit("input", e)
                            }
                        },
                        spliceList: function() {
                            var t = arguments
                              , e = function(e) {
                                return e.splice.apply(e, _(t))
                            };
                            this.alterList(e)
                        },
                        updatePosition: function(t, e) {
                            var a = function(a) {
                                return a.splice(e, 0, a.splice(t, 1)[0])
                            };
                            this.alterList(a)
                        },
                        getRelatedContextFromMoveEvent: function(t) {
                            var e = t.to
                              , a = t.related
                              , n = this.getUnderlyingPotencialDraggableComponent(e);
                            if (!n)
                                return {
                                    component: n
                                };
                            var s = n.realList
                              , r = {
                                list: s,
                                component: n
                            };
                            if (e !== a && s && n.getUnderlyingVm) {
                                var i = n.getUnderlyingVm(a);
                                if (i)
                                    return o()(i, r)
                            }
                            return r
                        },
                        getVmIndex: function(t) {
                            var e = this.visibleIndexes
                              , a = e.length;
                            return t > a - 1 ? a : e[t]
                        },
                        getComponent: function() {
                            return this.$slots.default[0].componentInstance
                        },
                        resetTransitionData: function(t) {
                            if (this.noTransitionOnDrag && this.transitionMode) {
                                var e = this.getChildrenNodes();
                                e[t].data = null;
                                var a = this.getComponent();
                                a.children = [],
                                a.kept = void 0
                            }
                        },
                        onDragStart: function(t) {
                            this.context = this.getUnderlyingVm(t.item),
                            t.item._underlying_vm_ = this.clone(this.context.element),
                            Y = t.item
                        },
                        onDragAdd: function(t) {
                            var e = t.item._underlying_vm_;
                            if (void 0 !== e) {
                                Object(S["d"])(t.item);
                                var a = this.getVmIndex(t.newIndex);
                                this.spliceList(a, 0, e),
                                this.computeIndexes();
                                var n = {
                                    element: e,
                                    newIndex: a
                                };
                                this.emitChanges({
                                    added: n
                                })
                            }
                        },
                        onDragRemove: function(t) {
                            if (Object(S["c"])(this.rootContainer, t.item, t.oldIndex),
                            "clone" !== t.pullMode) {
                                var e = this.context.index;
                                this.spliceList(e, 1);
                                var a = {
                                    element: this.context.element,
                                    oldIndex: e
                                };
                                this.resetTransitionData(e),
                                this.emitChanges({
                                    removed: a
                                })
                            } else
                                Object(S["d"])(t.clone)
                        },
                        onDragUpdate: function(t) {
                            Object(S["d"])(t.item),
                            Object(S["c"])(t.from, t.item, t.oldIndex);
                            var e = this.context.index
                              , a = this.getVmIndex(t.newIndex);
                            this.updatePosition(e, a);
                            var n = {
                                element: this.context.element,
                                oldIndex: e,
                                newIndex: a
                            };
                            this.emitChanges({
                                moved: n
                            })
                        },
                        updateProperty: function(t, e) {
                            t.hasOwnProperty(e) && (t[e] += this.headerOffset)
                        },
                        computeFutureIndex: function(t, e) {
                            if (!t.element)
                                return 0;
                            var a = _(e.to.children).filter((function(t) {
                                return "none" !== t.style["display"]
                            }
                            ))
                              , n = a.indexOf(e.related)
                              , s = t.component.getVmIndex(n)
                              , o = -1 !== a.indexOf(Y);
                            return o || !e.willInsertAfter ? s : s + 1
                        },
                        onDragMove: function(t, e) {
                            var a = this.move;
                            if (!a || !this.realList)
                                return !0;
                            var n = this.getRelatedContextFromMoveEvent(t)
                              , s = this.context
                              , r = this.computeFutureIndex(n, t);
                            o()(s, {
                                futureIndex: r
                            });
                            var i = o()({}, t, {
                                relatedContext: n,
                                draggedContext: s
                            });
                            return a(i, e)
                        },
                        onDragEnd: function() {
                            this.computeIndexes(),
                            Y = null
                        }
                    }
                };
                "undefined" !== typeof window && "Vue"in window && window.Vue.component("draggable", F);
                var U = F;
                e["default"] = U
            }
        })["default"]
    },
    3122: function(t, e, a) {
        "use strict";
        var n = function() {
            var t = this
              , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
          , s = [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("table", {
                staticClass: "table table-striped scrollable-tbl-body",
                staticStyle: {
                    "font-size": "11px"
                }
            }, [a("thead", [a("tr", [a("th", {
                staticStyle: {
                    width: "250px"
                },
                attrs: {
                    nowrap: "nowrap"
                }
            }, [t._v("Expression")]), a("th", {
                attrs: {
                    nowrap: "nowrap"
                }
            }, [t._v("Meaning")])])]), a("tbody", [a("tr", [a("td", [a("strong", [t._v("* * * ? * *")])]), a("td", [t._v("Every second")])]), a("tr", [a("td", [a("strong", [t._v("0 * * ? * *")])]), a("td", [t._v("Every minute")])]), a("tr", [a("td", [a("strong", [t._v("0 */2 * ? * *")])]), a("td", [t._v("Every even minute")])]), a("tr", [a("td", [a("strong", [t._v("0 1/2 * ? * *")])]), a("td", [t._v("Every uneven minute")])]), a("tr", [a("td", [a("strong", [t._v("0 */2 * ? * *")])]), a("td", [t._v("Every 2 minutes")])]), a("tr", [a("td", [a("strong", [t._v("0 */3 * ? * *")])]), a("td", [t._v("Every 3 minutes")])]), a("tr", [a("td", [a("strong", [t._v("0 */4 * ? * *")])]), a("td", [t._v("Every 4 minutes")])]), a("tr", [a("td", [a("strong", [t._v("0 */5 * ? * *")])]), a("td", [t._v("Every 5 minutes")])]), a("tr", [a("td", [a("strong", [t._v("0 */10 * ? * *")])]), a("td", [t._v("Every 10 minutes")])]), a("tr", [a("td", [a("strong", [t._v("0 */15 * ? * *")])]), a("td", [t._v("Every 15 minutes")])]), a("tr", [a("td", [a("strong", [t._v("0 */30 * ? * *")])]), a("td", [t._v("Every 30 minutes")])]), a("tr", [a("td", [a("strong", [t._v("0 15,30,45 * ? * *")])]), a("td", [t._v("Every hour at minutes 15, 30 and 45")])]), a("tr", [a("td", [a("strong", [t._v("0 0 * ? * *")])]), a("td", [t._v("Every hour")])]), a("tr", [a("td", [a("strong", [t._v("0 0 */2 ? * *")])]), a("td", [t._v("Every hour")])]), a("tr", [a("td", [a("strong", [t._v("0 0 0/2 ? * *")])]), a("td", [t._v("Every even hour")])]), a("tr", [a("td", [a("strong", [t._v("0 0 1/2 ? * *")])]), a("td", [t._v("Every uneven hour")])]), a("tr", [a("td", [a("strong", [t._v("0 0 */3 ? * *")])]), a("td", [t._v("Every three hours")])]), a("tr", [a("td", [a("strong", [t._v("0 0 */4 ? * *")])]), a("td", [t._v("Every four hours")])]), a("tr", [a("td", [a("strong", [t._v("0 0 */6 ? * *")])]), a("td", [t._v("Every six hours")])]), a("tr", [a("td", [a("strong", [t._v("0 0 */8 ? * *")])]), a("td", [t._v("Every eight hours")])]), a("tr", [a("td", [a("strong", [t._v("0 0 */12 ? * *")])]), a("td", [t._v("Every twelve hours")])]), a("tr", [a("td", [a("strong", [t._v("0 0 0 * * ?")])]), a("td", [t._v("Every day at midnight - 12am")])]), a("tr", [a("td", [a("strong", [t._v("0 0 1 * * ?")])]), a("td", [t._v("Every day at 1am")])]), a("tr", [a("td", [a("strong", [t._v("0 0 6 * * ?")])]), a("td", [t._v("Every day at 6am")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 * * ?")])]), a("td", [t._v("Every day at noon - 12pm")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 * * ?")])]), a("td", [t._v("Every day at noon - 12pm")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * SUN")])]), a("td", [t._v("Every Sunday at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * MON")])]), a("td", [t._v("Every Monday at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * TUE")])]), a("td", [t._v("Every Tuesday at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * WED")])]), a("td", [t._v("Every Wednesday at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * THU")])]), a("td", [t._v("Every Thursday at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * FRI")])]), a("td", [t._v("Every Friday at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * SAT")])]), a("td", [t._v("Every Saturday at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * MON-FRI")])]), a("td", [t._v("Every Weekday at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * SUN,SAT")])]), a("td", [t._v("Every Saturday and Sunday at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 */7 * ?")])]), a("td", [t._v("Every 7 days at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 1 * ?")])]), a("td", [t._v("Every month on the 1st, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 2 * ?")])]), a("td", [t._v("Every month on the 2nd, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 15 * ?")])]), a("td", [t._v("Every month on the 15th, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 1/2 * ?")])]), a("td", [t._v("Every 2 days starting on the 1st of the month, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 1/4 * ?")])]), a("td", [t._v("Every 4 days staring on the 1st of the month, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 L * ?")])]), a("td", [t._v("Every month on the last day of the month, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 L-2 * ?")])]), a("td", [t._v("Every month on the second to last day of the month, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 LW * ?")])]), a("td", [t._v("Every month on the last weekday, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 1L * ?")])]), a("td", [t._v("Every month on the last Sunday, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 2L * ?")])]), a("td", [t._v("Every month on the last Monday, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 6L * ?")])]), a("td", [t._v("Every month on the last Friday, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 1W * ?")])]), a("td", [t._v(" Every month on the nearest Weekday to the 1st of the month, at noon ")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 15W * ?")])]), a("td", [t._v(" Every month on the nearest Weekday to the 15th of the month, at noon ")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * 2#1")])]), a("td", [t._v("Every month on the first Monday of the Month, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * 6#1")])]), a("td", [t._v("Every month on the first Friday of the Month, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * 2#2")])]), a("td", [t._v("Every month on the second Monday of the Month, at noon")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? * 5#3")])]), a("td", [t._v("Every month on the third Thursday of the Month, at noon - 12pm")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? JAN *")])]), a("td", [t._v("Every day at noon in January only")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? JUN *")])]), a("td", [t._v("Every day at noon in June only")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? JAN,JUN *")])]), a("td", [t._v("Every day at noon in January and June")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? DEC *")])]), a("td", [t._v("Every day at noon in December only")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? JAN,FEB,MAR,APR *")])]), a("td", [t._v("Every day at noon in January, February, March and April")])]), a("tr", [a("td", [a("strong", [t._v("0 0 12 ? 9-12 *")])]), a("td", [t._v("Every day at noon between September and December")])])])])
        }
        ]
          , o = {}
          , r = o
          , i = a("2877")
          , l = Object(i["a"])(r, n, s, !1, null, null, null);
        e["a"] = l.exports
    },
    "36ca": function(t, e, a) {},
    "3fa7": function(t, e, a) {},
    "426d": function(t, e, a) {
        "use strict";
        var n = a("294c")
          , s = a.n(n);
        s.a
    },
    4380: function(t, e, a) {},
    "44e7": function(t, e, a) {
        var n = a("861d")
          , s = a("c6b6")
          , o = a("b622")
          , r = o("match");
        t.exports = function(t) {
            var e;
            return n(t) && (void 0 !== (e = t[r]) ? !!e : "RegExp" == s(t))
        }
    },
    "464d": function(t, e, a) {},
    "47d8": function(t, e, a) {
        "use strict";
        var n = a("36ca")
          , s = a.n(n);
        s.a
    },
    "4a4d": function(t, e, a) {
        "use strict";
        var n = a("dee1")
          , s = a.n(n);
        s.a
    },
    "4bf2": function(t, e, a) {},
    "4d63": function(t, e, a) {
        var n = a("83ab")
          , s = a("da84")
          , o = a("94ca")
          , r = a("7156")
          , i = a("9bf2").f
          , l = a("241c").f
          , c = a("44e7")
          , d = a("ad6d")
          , u = a("9f7f")
          , p = a("6eeb")
          , f = a("d039")
          , m = a("69f3").set
          , h = a("2626")
          , v = a("b622")
          , g = v("match")
          , b = s.RegExp
          , y = b.prototype
          , k = /a/g
          , C = /a/g
          , T = new b(k) !== k
          , _ = u.UNSUPPORTED_Y
          , x = n && o("RegExp", !T || _ || f((function() {
            return C[g] = !1,
            b(k) != k || b(C) == C || "/a/i" != b(k, "i")
        }
        )));
        if (x) {
            var w = function(t, e) {
                var a, n = this instanceof w, s = c(t), o = void 0 === e;
                if (!n && s && t.constructor === w && o)
                    return t;
                T ? s && !o && (t = t.source) : t instanceof w && (o && (e = d.call(t)),
                t = t.source),
                _ && (a = !!e && e.indexOf("y") > -1,
                a && (e = e.replace(/y/g, "")));
                var i = r(T ? new b(t,e) : b(t, e), n ? this : y, w);
                return _ && a && m(i, {
                    sticky: a
                }),
                i
            }
              , S = function(t) {
                t in w || i(w, t, {
                    configurable: !0,
                    get: function() {
                        return b[t]
                    },
                    set: function(e) {
                        b[t] = e
                    }
                })
            }
              , D = l(b)
              , M = 0;
            while (D.length > M)
                S(D[M++]);
            y.constructor = w,
            w.prototype = y,
            p(s, "RegExp", w)
        }
        h("RegExp")
    },
    "4d9f": function(t, e, a) {
        "use strict";
        var n = a("464d")
          , s = a.n(n);
        s.a
    },
    "4df4": function(t, e, a) {
        "use strict";
        var n = a("0366")
          , s = a("7b0b")
          , o = a("9bdd")
          , r = a("e95a")
          , i = a("50c4")
          , l = a("8418")
          , c = a("35a1");
        t.exports = function(t) {
            var e, a, d, u, p, f, m = s(t), h = "function" == typeof this ? this : Array, v = arguments.length, g = v > 1 ? arguments[1] : void 0, b = void 0 !== g, y = c(m), k = 0;
            if (b && (g = n(g, v > 2 ? arguments[2] : void 0, 2)),
            void 0 == y || h == Array && r(y))
                for (e = i(m.length),
                a = new h(e); e > k; k++)
                    f = b ? g(m[k], k) : m[k],
                    l(a, k, f);
            else
                for (u = y.call(m),
                p = u.next,
                a = new h; !(d = p.call(u)).done; k++)
                    f = b ? o(u, g, [d.value, k], !0) : d.value,
                    l(a, k, f);
            return a.length = k,
            a
        }
    },
    "502f": function(t, e, a) {
        "use strict";
        var n = a("9403")
          , s = a.n(n);
        s.a
    },
    "50e2": function(t, e, a) {
        "use strict";
        var n = function() {
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
          , s = []
          , o = (a("ff05"),
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
          , r = o
          , i = (a("c01a"),
        a("2877"))
          , l = Object(i["a"])(r, n, s, !1, null, null, null);
        e["a"] = l.exports
    },
    5124: function(t, e, a) {
        "use strict";
        var n = a("9331")
          , s = a.n(n);
        s.a
    },
    "51df": function(t) {
        t.exports = JSON.parse('{"schema":[{"slot":"slot1","submitUrl":"/test/api/submit","rows":[{"styles":{"class":"row"},"fields":[{"component":"dpInput","control":"input","type":"text","model":"name","label":"Name","validation":{"required":true},"attributes":{"placeholder":"enter name","readonly":"","disabled":"","required":true},"styles":{"class":"col-6","style":""},"props":{"default":""}},{"component":"dpInput","control":"input","type":"number","model":"age","label":"Age","validation":{"required":true,"min_value":1,"max_value":120},"attributes":{"placeholder":"enter age","readonly":"","disabled":""},"styles":{"class":"col-6","style":""},"props":{"default":""}},{"component":"dpInput","control":"input","type":"time","model":"time","label":"Choose a time","validation":{"required":false},"styles":{"class":"col-6"},"attributes":{},"props":{}},{"component":"dpMultiselect","control":"custom","type":"number","model":"class","label":"Class","validation":{"required":true},"attributes":{"placeholder":"Type to search","readonly":"","disabled":"","name":"Class","items":[{"id":"00001","value":"Test"},{"id":"00002","value":"Test 2"},{"id":"00003","value":"Test-3"}],"internalSearch":false,"label":"value","trackBy":"id","preserveSearch":false,"multiple":false,"allowEmpty":true,"preselectFirst":false,"closeOnSelect":true},"styles":{"class":"col-6","style":""},"props":{"default":""}},{"component":"dpFlatpicker","control":"","type":"","model":"date","label":"Date","validation":{"required":false},"attributes":{"dateFormat":"Y-m-d H:m","minDate":"1990-12-31 12:00","enableTime":true,"allowInput":true},"styles":{"class":"col-6","style":""},"props":{"default":""}},{"component":"dpTextarea","control":"textarea","type":"","model":"textArea","label":"Text Area","validation":{"required":true},"attributes":{"placeholder":"Type here","readonly":"","disabled":"","name":"Text Area","maxlength":300,"cssStyle":"resize:none"},"styles":{"class":"col-6","style":""},"props":{"default":""}},{"component":"dpLink","type":""},{"component":"dpMarkdown","model":"markd","styles":{"class":"col-6","style":"","tabsStyle":""},"attributes":{"editor":{"rows":6},"preview":{}}},{"component":"dpCheckbox","control":"checkbox","type":"","model":"checkbox","label":"I agree","validation":{"required":true},"attributes":{},"styles":{"class":"col-6 mt-28","style":""},"props":{"default":""}},{"component":"dpRadioButton","control":"radiogroup","type":"","model":"radio","label":"Gender","validation":{"required":true},"attributes":{"options":["Male","Female","Other"]},"styles":{"class":"col-6","style":""},"props":{"default":""}},{"component":"dpCheckEnabledComponent","control":"checkEnabledComponent","props":{"checkChildBehaviour":"visible","targetVModel":"checkbox","checked":{"fields":[{"component":"dpInput","control":"input","type":"time","model":"checkEnabledTime","label":"Choose a time","validation":{"required":false},"styles":{"class":"col-12"},"attributes":{},"props":{}},{"component":"dpInput","control":"input","type":"time","model":"checkEnabledTime2","label":"Choose a time","validation":{"required":false},"styles":{"class":"col-12"},"attributes":{},"props":{}}]}}},{"component":"dpCheckEnabledComponent","control":"checkEnabledComponent","props":{"checkChildBehaviour":"disabled","targetVModel":"textArea","checked":{"fields":[{"component":"dpInput","control":"input","type":"text","model":"checkEnabledText","label":"Enter text","validation":{"required":false},"styles":{"class":"col-12"},"attributes":{"disabled":true},"props":{}},{"component":"dpInput","control":"input","type":"text","model":"checkEnabledText2","label":"Enter text","validation":{"required":false},"styles":{"class":"col-12"},"attributes":{"disabled":true},"props":{}}]}}},{"component":"dpVuefileAgent","control":"","type":"","model":"files","label":"","validation":{},"attributes":{},"styles":{"class":"col-12 mt-2","style":""},"props":{"default":""}},{"component":"dpUppyUpload","control":"","type":"","model":"uppyFiles","label":"","validation":{},"attributes":{"numberOfFiles":2,"showControls":true},"styles":{"class":"col-6 mt-2","style":""},"props":{"default":""}},{"component":"dpRichTextEditor","control":"","type":"","model":"textEditor","label":"","validation":{"required":true},"attributes":{"editorOption":{"modules":{"toolbar":[["bold","italic","underline"],[{"header":[false,1,2,3,4,5,6]}],["blockquote"],[{"list":"ordered"},{"list":"bullet"}],[{"indent":"-1"},{"indent":"+1"}],[{"align":[]}]],"history":{"delay":1000,"maxStack":50,"userOnly":false}}}},"styles":{"class":"col-6 mt-2","style":"","componentStyle":"height:90%"},"props":{"default":""}}]},{"fields":[{"component":"dpHrLine","styles":{"class":"col","componentClass":"my-3"}},{"component":"dpButton","control":"button","type":"button","label":"More Options 1","styles":{"class":"col-12 t-a-r","style":"","btnClass":"btn btn-success pl-2","prependIconClass":"fa fa-cog"},"props":{},"validation":"","attributes":{"readonly":false,"disabled":false},"actions":{"evalType":"openModal","modalId":"customModal1"}}]},{"component":"dpContainer","fields":[{"component":"dpButton","control":"button","label":"More Options","styles":{"class":"col-12 t-a-r","style":"","btnClass":"btn btn-warning mt-2 pl-2","prependIconClass":"fa fa-eye"},"props":{},"validation":"","attributes":{"readonly":false,"disabled":false},"actions":{"evalType":"openSlideout","modalId":"customSlideout1"}}]},{"fields":[{"component":"dpTabs","control":"tab","styles":{"class":"col-12 mt-2","style":""},"props":{"default":""},"tabs":[{"title":"tab1","fields":[{"component":"dpInput","control":"input","type":"time","model":"time","label":"Choose a time","validation":{"required":false},"styles":{"class":"col-6"},"attributes":{"min":"06:00","max":"12:00"},"props":{}},{"component":"dpInput","control":"input","type":"time","model":"secondTime","label":"Choose a time","validation":{"required":false},"styles":{"class":"col-6"},"attributes":{},"props":{}}]},{"title":"tab2","fields":[{"component":"dpInput","control":"input","type":"text","model":"firstName","label":"First Name","validation":{"required":true},"attributes":{"placeholder":"enter name","readonly":"","disabled":""},"styles":{"class":"col-6","style":""},"props":{"default":""}},{"component":"dpInput","control":"input","type":"text","model":"secondName","label":"Second Name","validation":{"required":true},"attributes":{"placeholder":"enter name","readonly":"","disabled":""},"styles":{"class":"col-6","style":""},"props":{"default":""}}]}]}]},{"fields":[{"component":"dpModal","title":"Custom modal","control":"modal","styles":{"class":"col-6 mt-2","style":"","showLaunchButtonClass":"btn es-btn btn-primary w-auto"},"attributes":{"id":"customModal1","ref":"customModal","noCloseOnEsc":false},"props":{"showLaunchButton":true,"showLaunchButtonText":"Open Modal"},"modalBody":{"fields":[{"component":"dpInput","control":"input","type":"text","model":"modalData1","label":"Modal Data 1","validation":{"required":true},"attributes":{"placeholder":"enter name","readonly":"","disabled":""},"styles":{"class":"col-6","style":""},"props":{"default":""}},{"component":"dpInput","control":"input","type":"time","model":"modalTime","label":"Choose a time","validation":{"required":false},"styles":{"class":"col-6"},"attributes":{},"props":{}},{"component":"dpHrLine","styles":{"class":"w-100","componentClass":"my-0"}},{"component":"dpButton","control":"button","type":"submit","label":"Submit","styles":{"class":"col-12 t-a-r","style":"","btnClass":"btn btn-success mt-2 pl-2","prependIconClass":"fa fa-check"},"props":{"submitFunction":"dashboardSave"},"validation":"","attributes":{"readonly":false,"disabled":false}}]}},{"control":"","model-from":""}]},{"fields":[{"component":"dpSlideout","title":"Click to open slideout","control":"slideOut","styles":{"class":"col-6 mt-2","style":""},"attributes":{"visibility":false,"title":"Slide Out","ref":"slideOut","dock":"right","size":"40%"},"props":{"default":""},"slideoutBody":{"fields":[{"component":"dpInput","control":"input","type":"text","model":"slideOutData","label":"Slide out Data","validation":{"required":true},"attributes":{"placeholder":"enter name","readonly":"","disabled":""},"styles":{"class":"col-6","style":""},"props":{"default":""}},{"component":"dpInput","control":"input","type":"time","model":"modalTime","label":"Choose a time","validation":{"required":false},"styles":{"class":"col-6"},"attributes":{},"props":{}}]}},{"control":"","model-from":""}]},{}]}]}')
    },
    5319: function(t, e, a) {
        "use strict";
        var n = a("d784")
          , s = a("825a")
          , o = a("7b0b")
          , r = a("50c4")
          , i = a("a691")
          , l = a("1d80")
          , c = a("8aa5")
          , d = a("14c3")
          , u = Math.max
          , p = Math.min
          , f = Math.floor
          , m = /\$([$&'`]|\d\d?|<[^>]*>)/g
          , h = /\$([$&'`]|\d\d?)/g
          , v = function(t) {
            return void 0 === t ? t : String(t)
        };
        n("replace", 2, (function(t, e, a, n) {
            var g = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
              , b = n.REPLACE_KEEPS_$0
              , y = g ? "$" : "$0";
            return [function(a, n) {
                var s = l(this)
                  , o = void 0 == a ? void 0 : a[t];
                return void 0 !== o ? o.call(a, s, n) : e.call(String(s), a, n)
            }
            , function(t, n) {
                if (!g && b || "string" === typeof n && -1 === n.indexOf(y)) {
                    var o = a(e, t, this, n);
                    if (o.done)
                        return o.value
                }
                var l = s(t)
                  , f = String(this)
                  , m = "function" === typeof n;
                m || (n = String(n));
                var h = l.global;
                if (h) {
                    var C = l.unicode;
                    l.lastIndex = 0
                }
                var T = [];
                while (1) {
                    var _ = d(l, f);
                    if (null === _)
                        break;
                    if (T.push(_),
                    !h)
                        break;
                    var x = String(_[0]);
                    "" === x && (l.lastIndex = c(f, r(l.lastIndex), C))
                }
                for (var w = "", S = 0, D = 0; D < T.length; D++) {
                    _ = T[D];
                    for (var M = String(_[0]), O = u(p(i(_.index), f.length), 0), E = [], A = 1; A < _.length; A++)
                        E.push(v(_[A]));
                    var R = _.groups;
                    if (m) {
                        var I = [M].concat(E, O, f);
                        void 0 !== R && I.push(R);
                        var N = String(n.apply(void 0, I))
                    } else
                        N = k(M, f, O, E, R, n);
                    O >= S && (w += f.slice(S, O) + N,
                    S = O + M.length)
                }
                return w + f.slice(S)
            }
            ];
            function k(t, a, n, s, r, i) {
                var l = n + t.length
                  , c = s.length
                  , d = h;
                return void 0 !== r && (r = o(r),
                d = m),
                e.call(i, d, (function(e, o) {
                    var i;
                    switch (o.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return a.slice(0, n);
                    case "'":
                        return a.slice(l);
                    case "<":
                        i = r[o.slice(1, -1)];
                        break;
                    default:
                        var d = +o;
                        if (0 === d)
                            return e;
                        if (d > c) {
                            var u = f(d / 10);
                            return 0 === u ? e : u <= c ? void 0 === s[u - 1] ? o.charAt(1) : s[u - 1] + o.charAt(1) : e
                        }
                        i = s[d - 1]
                    }
                    return void 0 === i ? "" : i
                }
                ))
            }
        }
        ))
    },
    "53ca": function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return n
        }
        ));
        a("a4d3"),
        a("e01a"),
        a("d28b"),
        a("e260"),
        a("d3b7"),
        a("3ca3"),
        a("ddb0");
        function n(t) {
            return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            n(t)
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
              , n = "hour"
              , s = "day"
              , o = "week"
              , r = "month"
              , i = "quarter"
              , l = "year"
              , c = "date"
              , d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
              , u = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
              , p = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            }
              , f = function(t, e, a) {
                var n = String(t);
                return !n || n.length >= e ? t : "" + Array(e + 1 - n.length).join(a) + t
            }
              , m = {
                s: f,
                z: function(t) {
                    var e = -t.utcOffset()
                      , a = Math.abs(e)
                      , n = Math.floor(a / 60)
                      , s = a % 60;
                    return (e <= 0 ? "+" : "-") + f(n, 2, "0") + ":" + f(s, 2, "0")
                },
                m: function t(e, a) {
                    if (e.date() < a.date())
                        return -t(a, e);
                    var n = 12 * (a.year() - e.year()) + (a.month() - e.month())
                      , s = e.clone().add(n, r)
                      , o = a - s < 0
                      , i = e.clone().add(n + (o ? -1 : 1), r);
                    return +(-(n + (a - s) / (o ? s - i : i - s)) || 0)
                },
                a: function(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                },
                p: function(d) {
                    return {
                        M: r,
                        y: l,
                        w: o,
                        d: s,
                        D: c,
                        h: n,
                        m: a,
                        s: e,
                        ms: t,
                        Q: i
                    }[d] || String(d || "").toLowerCase().replace(/s$/, "")
                },
                u: function(t) {
                    return void 0 === t
                }
            }
              , h = "en"
              , v = {};
            v[h] = p;
            var g = function(t) {
                return t instanceof C
            }
              , b = function(t, e, a) {
                var n;
                if (!t)
                    return h;
                if ("string" == typeof t)
                    v[t] && (n = t),
                    e && (v[t] = e,
                    n = t);
                else {
                    var s = t.name;
                    v[s] = t,
                    n = s
                }
                return !a && n && (h = n),
                n || !a && h
            }
              , y = function(t, e) {
                if (g(t))
                    return t.clone();
                var a = "object" == typeof e ? e : {};
                return a.date = t,
                a.args = arguments,
                new C(a)
            }
              , k = m;
            k.l = b,
            k.i = g,
            k.w = function(t, e) {
                return y(t, {
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
                var f = p.prototype;
                return f.parse = function(t) {
                    this.$d = function(t) {
                        var e = t.date
                          , a = t.utc;
                        if (null === e)
                            return new Date(NaN);
                        if (k.u(e))
                            return new Date;
                        if (e instanceof Date)
                            return new Date(e);
                        if ("string" == typeof e && !/Z$/i.test(e)) {
                            var n = e.match(d);
                            if (n) {
                                var s = n[2] - 1 || 0
                                  , o = (n[7] || "0").substring(0, 3);
                                return a ? new Date(Date.UTC(n[1], s, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o)) : new Date(n[1],s,n[3] || 1,n[4] || 0,n[5] || 0,n[6] || 0,o)
                            }
                        }
                        return new Date(e)
                    }(t),
                    this.$x = t.x || {},
                    this.init()
                }
                ,
                f.init = function() {
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
                f.$utils = function() {
                    return k
                }
                ,
                f.isValid = function() {
                    return !("Invalid Date" === this.$d.toString())
                }
                ,
                f.isSame = function(t, e) {
                    var a = y(t);
                    return this.startOf(e) <= a && a <= this.endOf(e)
                }
                ,
                f.isAfter = function(t, e) {
                    return y(t) < this.startOf(e)
                }
                ,
                f.isBefore = function(t, e) {
                    return this.endOf(e) < y(t)
                }
                ,
                f.$g = function(t, e, a) {
                    return k.u(t) ? this[e] : this.set(a, t)
                }
                ,
                f.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                f.valueOf = function() {
                    return this.$d.getTime()
                }
                ,
                f.startOf = function(t, i) {
                    var d = this
                      , u = !!k.u(i) || i
                      , p = k.p(t)
                      , f = function(t, e) {
                        var a = k.w(d.$u ? Date.UTC(d.$y, e, t) : new Date(d.$y,e,t), d);
                        return u ? a : a.endOf(s)
                    }
                      , m = function(t, e) {
                        return k.w(d.toDate()[t].apply(d.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), d)
                    }
                      , h = this.$W
                      , v = this.$M
                      , g = this.$D
                      , b = "set" + (this.$u ? "UTC" : "");
                    switch (p) {
                    case l:
                        return u ? f(1, 0) : f(31, 11);
                    case r:
                        return u ? f(1, v) : f(0, v + 1);
                    case o:
                        var y = this.$locale().weekStart || 0
                          , C = (h < y ? h + 7 : h) - y;
                        return f(u ? g - C : g + (6 - C), v);
                    case s:
                    case c:
                        return m(b + "Hours", 0);
                    case n:
                        return m(b + "Minutes", 1);
                    case a:
                        return m(b + "Seconds", 2);
                    case e:
                        return m(b + "Milliseconds", 3);
                    default:
                        return this.clone()
                    }
                }
                ,
                f.endOf = function(t) {
                    return this.startOf(t, !1)
                }
                ,
                f.$set = function(o, i) {
                    var d, u = k.p(o), p = "set" + (this.$u ? "UTC" : ""), f = (d = {},
                    d[s] = p + "Date",
                    d[c] = p + "Date",
                    d[r] = p + "Month",
                    d[l] = p + "FullYear",
                    d[n] = p + "Hours",
                    d[a] = p + "Minutes",
                    d[e] = p + "Seconds",
                    d[t] = p + "Milliseconds",
                    d)[u], m = u === s ? this.$D + (i - this.$W) : i;
                    if (u === r || u === l) {
                        var h = this.clone().set(c, 1);
                        h.$d[f](m),
                        h.init(),
                        this.$d = h.set(c, Math.min(this.$D, h.daysInMonth())).$d
                    } else
                        f && this.$d[f](m);
                    return this.init(),
                    this
                }
                ,
                f.set = function(t, e) {
                    return this.clone().$set(t, e)
                }
                ,
                f.get = function(t) {
                    return this[k.p(t)]()
                }
                ,
                f.add = function(t, i) {
                    var c, d = this;
                    t = Number(t);
                    var u = k.p(i)
                      , p = function(e) {
                        var a = y(d);
                        return k.w(a.date(a.date() + Math.round(e * t)), d)
                    };
                    if (u === r)
                        return this.set(r, this.$M + t);
                    if (u === l)
                        return this.set(l, this.$y + t);
                    if (u === s)
                        return p(1);
                    if (u === o)
                        return p(7);
                    var f = (c = {},
                    c[a] = 6e4,
                    c[n] = 36e5,
                    c[e] = 1e3,
                    c)[u] || 1
                      , m = this.$d.getTime() + t * f;
                    return k.w(m, this)
                }
                ,
                f.subtract = function(t, e) {
                    return this.add(-1 * t, e)
                }
                ,
                f.format = function(t) {
                    var e = this;
                    if (!this.isValid())
                        return "Invalid Date";
                    var a = t || "YYYY-MM-DDTHH:mm:ssZ"
                      , n = k.z(this)
                      , s = this.$locale()
                      , o = this.$H
                      , r = this.$m
                      , i = this.$M
                      , l = s.weekdays
                      , c = s.months
                      , d = function(t, n, s, o) {
                        return t && (t[n] || t(e, a)) || s[n].substr(0, o)
                    }
                      , p = function(t) {
                        return k.s(o % 12 || 12, t, "0")
                    }
                      , f = s.meridiem || function(t, e, a) {
                        var n = t < 12 ? "AM" : "PM";
                        return a ? n.toLowerCase() : n
                    }
                      , m = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: i + 1,
                        MM: k.s(i + 1, 2, "0"),
                        MMM: d(s.monthsShort, i, c, 3),
                        MMMM: d(c, i),
                        D: this.$D,
                        DD: k.s(this.$D, 2, "0"),
                        d: String(this.$W),
                        dd: d(s.weekdaysMin, this.$W, l, 2),
                        ddd: d(s.weekdaysShort, this.$W, l, 3),
                        dddd: l[this.$W],
                        H: String(o),
                        HH: k.s(o, 2, "0"),
                        h: p(1),
                        hh: p(2),
                        a: f(o, r, !0),
                        A: f(o, r, !1),
                        m: String(r),
                        mm: k.s(r, 2, "0"),
                        s: String(this.$s),
                        ss: k.s(this.$s, 2, "0"),
                        SSS: k.s(this.$ms, 3, "0"),
                        Z: n
                    };
                    return a.replace(u, (function(t, e) {
                        return e || m[t] || n.replace(":", "")
                    }
                    ))
                }
                ,
                f.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }
                ,
                f.diff = function(t, c, d) {
                    var u, p = k.p(c), f = y(t), m = 6e4 * (f.utcOffset() - this.utcOffset()), h = this - f, v = k.m(this, f);
                    return v = (u = {},
                    u[l] = v / 12,
                    u[r] = v,
                    u[i] = v / 3,
                    u[o] = (h - m) / 6048e5,
                    u[s] = (h - m) / 864e5,
                    u[n] = h / 36e5,
                    u[a] = h / 6e4,
                    u[e] = h / 1e3,
                    u)[p] || h,
                    d ? v : k.a(v)
                }
                ,
                f.daysInMonth = function() {
                    return this.endOf(r).$D
                }
                ,
                f.$locale = function() {
                    return v[this.$L]
                }
                ,
                f.locale = function(t, e) {
                    if (!t)
                        return this.$L;
                    var a = this.clone()
                      , n = b(t, e, !0);
                    return n && (a.$L = n),
                    a
                }
                ,
                f.clone = function() {
                    return k.w(this.$d, this)
                }
                ,
                f.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                f.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                f.toISOString = function() {
                    return this.$d.toISOString()
                }
                ,
                f.toString = function() {
                    return this.$d.toUTCString()
                }
                ,
                p
            }()
              , T = C.prototype;
            return y.prototype = T,
            [["$ms", t], ["$s", e], ["$m", a], ["$H", n], ["$W", s], ["$M", r], ["$y", l], ["$D", c]].forEach((function(t) {
                T[t[1]] = function(e) {
                    return this.$g(e, t[0], t[1])
                }
            }
            )),
            y.extend = function(t, e) {
                return t.$i || (t(e, C, y),
                t.$i = !0),
                y
            }
            ,
            y.locale = b,
            y.isDayjs = g,
            y.unix = function(t) {
                return y(1e3 * t)
            }
            ,
            y.en = v[h],
            y.Ls = v,
            y.p = {},
            y
        }
        ))
    },
    "5a34": function(t, e, a) {
        var n = a("44e7");
        t.exports = function(t) {
            if (n(t))
                throw TypeError("The method doesn't accept regular expressions");
            return t
        }
    },
    "5b3d": function(t, e, a) {
        t.exports = function(t) {
            var e = {};
            function a(n) {
                if (e[n])
                    return e[n].exports;
                var s = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(s.exports, s, s.exports, a),
                s.l = !0,
                s.exports
            }
            return a.m = t,
            a.c = e,
            a.d = function(t, e, n) {
                a.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: n
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
                var n = Object.create(null);
                if (a.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var s in t)
                        a.d(n, s, function(e) {
                            return t[e]
                        }
                        .bind(null, s));
                return n
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
                var n = a("4bad");
                e = n(!1),
                e.push([t.i, ".vue-star-rating-star[data-v-fde73a0c]{display:inline-block}.vue-star-rating-pointer[data-v-fde73a0c]{cursor:pointer}.vue-star-rating[data-v-fde73a0c]{display:flex;align-items:center}.vue-star-rating-inline[data-v-fde73a0c]{display:inline-flex}.vue-star-rating-rating-text[data-v-fde73a0c]{margin-left:7px}.vue-star-rating-rtl[data-v-fde73a0c]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-fde73a0c]{margin-right:10px;direction:rtl}.sr-only[data-v-fde73a0c]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}", ""]),
                t.exports = e
            },
            "2b2b": function(t, e, a) {
                "use strict";
                var n = a("3c76")
                  , s = a.n(n);
                s.a
            },
            "3c76": function(t, e, a) {
                var n = a("27c2");
                "string" === typeof n && (n = [[t.i, n, ""]]),
                n.locals && (t.exports = n.locals);
                var s = a("499e").default;
                s("af45d76c", n, !0, {
                    sourceMap: !1,
                    shadowMode: !1
                })
            },
            "499e": function(t, e, a) {
                "use strict";
                function n(t, e) {
                    for (var a = [], n = {}, s = 0; s < e.length; s++) {
                        var o = e[s]
                          , r = o[0]
                          , i = o[1]
                          , l = o[2]
                          , c = o[3]
                          , d = {
                            id: t + ":" + s,
                            css: i,
                            media: l,
                            sourceMap: c
                        };
                        n[r] ? n[r].parts.push(d) : a.push(n[r] = {
                            id: r,
                            parts: [d]
                        })
                    }
                    return a
                }
                a.r(e),
                a.d(e, "default", (function() {
                    return m
                }
                ));
                var s = "undefined" !== typeof document;
                if ("undefined" !== typeof DEBUG && DEBUG && !s)
                    throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var o = {}
                  , r = s && (document.head || document.getElementsByTagName("head")[0])
                  , i = null
                  , l = 0
                  , c = !1
                  , d = function() {}
                  , u = null
                  , p = "data-vue-ssr-id"
                  , f = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
                function m(t, e, a, s) {
                    c = a,
                    u = s || {};
                    var r = n(t, e);
                    return h(r),
                    function(e) {
                        for (var a = [], s = 0; s < r.length; s++) {
                            var i = r[s]
                              , l = o[i.id];
                            l.refs--,
                            a.push(l)
                        }
                        e ? (r = n(t, e),
                        h(r)) : r = [];
                        for (s = 0; s < a.length; s++) {
                            l = a[s];
                            if (0 === l.refs) {
                                for (var c = 0; c < l.parts.length; c++)
                                    l.parts[c]();
                                delete o[l.id]
                            }
                        }
                    }
                }
                function h(t) {
                    for (var e = 0; e < t.length; e++) {
                        var a = t[e]
                          , n = o[a.id];
                        if (n) {
                            n.refs++;
                            for (var s = 0; s < n.parts.length; s++)
                                n.parts[s](a.parts[s]);
                            for (; s < a.parts.length; s++)
                                n.parts.push(g(a.parts[s]));
                            n.parts.length > a.parts.length && (n.parts.length = a.parts.length)
                        } else {
                            var r = [];
                            for (s = 0; s < a.parts.length; s++)
                                r.push(g(a.parts[s]));
                            o[a.id] = {
                                id: a.id,
                                refs: 1,
                                parts: r
                            }
                        }
                    }
                }
                function v() {
                    var t = document.createElement("style");
                    return t.type = "text/css",
                    r.appendChild(t),
                    t
                }
                function g(t) {
                    var e, a, n = document.querySelector("style[" + p + '~="' + t.id + '"]');
                    if (n) {
                        if (c)
                            return d;
                        n.parentNode.removeChild(n)
                    }
                    if (f) {
                        var s = l++;
                        n = i || (i = v()),
                        e = y.bind(null, n, s, !1),
                        a = y.bind(null, n, s, !0)
                    } else
                        n = v(),
                        e = k.bind(null, n),
                        a = function() {
                            n.parentNode.removeChild(n)
                        }
                        ;
                    return e(t),
                    function(n) {
                        if (n) {
                            if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap)
                                return;
                            e(t = n)
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
                function y(t, e, a, n) {
                    var s = a ? "" : n.css;
                    if (t.styleSheet)
                        t.styleSheet.cssText = b(e, s);
                    else {
                        var o = document.createTextNode(s)
                          , r = t.childNodes;
                        r[e] && t.removeChild(r[e]),
                        r.length ? t.insertBefore(o, r[e]) : t.appendChild(o)
                    }
                }
                function k(t, e) {
                    var a = e.css
                      , n = e.media
                      , s = e.sourceMap;
                    if (n && t.setAttribute("media", n),
                    u.ssrId && t.setAttribute(p, e.id),
                    s && (a += "\n/*# sourceURL=" + s.sources[0] + " */",
                    a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
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
                function n(t, e) {
                    var a = t[1] || ""
                      , n = t[3];
                    if (!n)
                        return a;
                    if (e && "function" === typeof btoa) {
                        var o = s(n)
                          , r = n.sources.map((function(t) {
                            return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */")
                        }
                        ));
                        return [a].concat(r).concat([o]).join("\n")
                    }
                    return [a].join("\n")
                }
                function s(t) {
                    var e = btoa(unescape(encodeURIComponent(JSON.stringify(t))))
                      , a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
                    return "/*# ".concat(a, " */")
                }
                t.exports = function(t) {
                    var e = [];
                    return e.toString = function() {
                        return this.map((function(e) {
                            var a = n(e, t);
                            return e[2] ? "@media ".concat(e[2], " {").concat(a, "}") : a
                        }
                        )).join("")
                    }
                    ,
                    e.i = function(t, a, n) {
                        "string" === typeof t && (t = [[null, t, ""]]);
                        var s = {};
                        if (n)
                            for (var o = 0; o < this.length; o++) {
                                var r = this[o][0];
                                null != r && (s[r] = !0)
                            }
                        for (var i = 0; i < t.length; i++) {
                            var l = [].concat(t[i]);
                            n && s[l[0]] || (a && (l[2] ? l[2] = "".concat(a, " and ").concat(l[2]) : l[2] = a),
                            e.push(l))
                        }
                    }
                    ,
                    e
                }
            },
            "70a0": function(t, e, a) {
                var n = a("812a");
                "string" === typeof n && (n = [[t.i, n, ""]]),
                n.locals && (t.exports = n.locals);
                var s = a("499e").default;
                s("4599b915", n, !0, {
                    sourceMap: !1,
                    shadowMode: !1
                })
            },
            "812a": function(t, e, a) {
                var n = a("4bad");
                e = n(!1),
                e.push([t.i, ".vue-star-rating-star[data-v-ef4bc576]{overflow:visible!important}.vue-star-rating-star-rotate[data-v-ef4bc576]{transition:all .25s}.vue-star-rating-star-rotate[data-v-ef4bc576]:hover{transition:transform .25s;transform:rotate(-15deg) scale(1.3)}", ""]),
                t.exports = e
            },
            8875: function(t, e, a) {
                var n, s, o;
                (function(a, r) {
                    s = [],
                    n = r,
                    o = "function" === typeof n ? n.apply(e, s) : n,
                    void 0 === o || (t.exports = o)
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
                        } catch (f) {
                            var a, n, s, o = /.*at [^(]*\((.*):(.+):(.+)\)$/gi, r = /@([^@]*):(\d+):(\d+)\s*$/gi, i = o.exec(f.stack) || r.exec(f.stack), l = i && i[1] || !1, c = i && i[2] || !1, d = document.location.href.replace(document.location.hash, ""), u = document.getElementsByTagName("script");
                            l === d && (a = document.documentElement.outerHTML,
                            n = new RegExp("(?:[^\\n]+?\\n){0," + (c - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),
                            s = a.replace(n, "$1").trim());
                            for (var p = 0; p < u.length; p++) {
                                if ("interactive" === u[p].readyState)
                                    return u[p];
                                if (u[p].src === l)
                                    return u[p];
                                if (l === d && u[p].innerHTML && u[p].innerHTML.trim() === s)
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
                var n = a("70a0")
                  , s = a.n(n);
                s.a
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
                    var n = window.document.currentScript
                      , s = a("8875");
                    n = s(),
                    "currentScript"in document || Object.defineProperty(document, "currentScript", {
                        get: s
                    });
                    var o = n && n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                    o && (a.p = o[1])
                }
                var r = function() {
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
                  , i = []
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
                            var n = Math.round(100 / e * a);
                            return Math.min(n, 100)
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
                  , f = p;
                a("ab73");
                function m(t, e, a, n, s, o, r, i) {
                    var l, c = "function" === typeof t ? t.options : t;
                    if (e && (c.render = e,
                    c.staticRenderFns = a,
                    c._compiled = !0),
                    n && (c.functional = !0),
                    o && (c._scopeId = "data-v-" + o),
                    r ? (l = function(t) {
                        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
                        t || "undefined" === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                        s && s.call(this, t),
                        t && t._registeredComponents && t._registeredComponents.add(r)
                    }
                    ,
                    c._ssrRegister = l) : s && (l = i ? function() {
                        s.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
                    }
                    : s),
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
                var h = m(f, l, c, !1, null, "ef4bc576", null)
                  , v = h.exports
                  , g = {
                    components: {
                        star: v
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
                  , b = g
                  , y = (a("2b2b"),
                m(b, r, i, !1, null, "fde73a0c", null))
                  , k = y.exports
                  , C = k;
                e["default"] = C
            }
        })
    },
    "6b75": function(t, e, a) {
        "use strict";
        function n(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var a = 0, n = new Array(e); a < e; a++)
                n[a] = t[a];
            return n
        }
        a.d(e, "a", (function() {
            return n
        }
        ))
    },
    "6fc7": function(t, e, a) {
        "use strict";
        var n = a("f0f4")
          , s = a.n(n);
        s.a
    },
    "6fd4b": function(t, e, a) {},
    "7dd6": function(t, e, a) {
        "use strict";
        var n = a("f7a8")
          , s = a.n(n);
        s.a
    },
    "7eac": function(t, e, a) {
        "use strict";
        var n = a("6fd4b")
          , s = a.n(n);
        s.a
    },
    "819a": function(t, e, a) {
        "use strict";
        var n = function() {
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
            }) : t._e(), t._l(t.breadCrumbList, (function(e, n) {
                return a("span", {
                    key: "crumb" + n,
                    staticClass: "c-pointer",
                    class: n == t.breadCrumbList.length - 1 ? "text-primary" : "text-gray-900",
                    on: {
                        click: function(a) {
                            return t.breadCrumbClicked(e, n)
                        }
                    }
                }, [t._v(t._s(e.number)), n != t.breadCrumbList.length - 1 ? a("i", {
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
            }, t._l(t.taskData.tags, (function(e, n) {
                return a("span", {
                    key: "tag" + n,
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
            }, [t._l(t.taskData.subTasks, (function(e, n) {
                return [a("li", {
                    key: t.collapseLevel1Name + "substsk" + n,
                    staticClass: "mx-2 w-100 c-default",
                    staticStyle: {
                        "font-size": "14px"
                    }
                }, [a("button", {
                    staticClass: "btn text-left bg-white font-weight-normal border-bottom pb-1 border-left ml-3",
                    class: t.collapseLevel1Name + "subsctskaccordion1-" + n,
                    on: {
                        click: function(e) {
                            return t.$root.$emit("bv::toggle::collapse", t.collapseLevel1Name + "subsctskaccordion1-" + n)
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
                        id: t.collapseLevel1Name + "subsctskaccordion1-" + n,
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
                        id: "subAssigneesNamepopover-target-" + n,
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
                        target: "subAssigneesNamepopover-target-" + n,
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
                }, t._l(t.selectedAssigneesList, (function(e, n) {
                    return a("div", {
                        key: "person" + n,
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
            ))], 2)])])], 1)]], 2) : t._e()]), t._l(t.taskData.additionalData, (function(e, n) {
                return a("div", {
                    key: t.adnlCollapseLevel1Name + "adt" + n,
                    staticClass: "mb-1 mt-1 px-2 dp-slide-fade-in-left"
                }, [a("button", {
                    staticClass: "btn col-12 text-left font-weight-bold d-flex align-items-center",
                    class: t.adnlCollapseLevel1Name + "accordion-" + n,
                    staticStyle: {
                        "background-color": "#f5f1f9"
                    },
                    on: {
                        click: function(e) {
                            return t.$root.$emit("bv::toggle::collapse", t.adnlCollapseLevel1Name + "accordion-" + n)
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
                        id: t.adnlCollapseLevel1Name + "accordion-" + n,
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
                }, [t._l(e.subTasks, (function(e, n) {
                    return [a("li", {
                        key: t.collapseLevel1Name + "substsk" + n,
                        staticClass: "mx-2 w-100 c-default",
                        staticStyle: {
                            "font-size": "14px"
                        }
                    }, [a("button", {
                        staticClass: "btn text-left bg-white font-weight-normal border-bottom pb-1 border-left ml-3",
                        class: t.collapseLevel1Name + "subsctskaccordion-" + n,
                        on: {
                            click: function(e) {
                                return t.$root.$emit("bv::toggle::collapse", t.collapseLevel1Name + "subsctskaccordion-" + n)
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
                            id: t.collapseLevel1Name + "subsctskaccordion-" + n,
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
                            id: t.collapseLevel1Name + "popover-target-" + n,
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
                            target: t.collapseLevel1Name + "popover-target-" + n,
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
                    }, t._l(t.selectedAssigneesList, (function(e, n) {
                        return a("div", {
                            key: "person" + n,
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
            }, t._l(t.taskData.upComingSteps, (function(e, n) {
                return a("div", {
                    key: "upcomingStepName" + n,
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
                        var n = e.invalid
                          , s = e.handleSubmit;
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
                                disabled: n
                            },
                            on: {
                                click: function(e) {
                                    s(t.Completed(t.taskCompletionschema.model))
                                }
                            }
                        }, [t._v(" Complete ")])]
                    }
                }])
            })], 1)])])], 1)
        }
          , s = []
          , o = (a("a434"),
        a("a9e3"),
        a("96cf"),
        a("1da1"))
          , r = a("7bb1")
          , i = a("5a0c")
          , l = a.n(i)
          , c = a("7722")
          , d = a("7c15")
          , u = a("113f")
          , p = a("01b4")
          , f = a("50e2")
          , m = {
            name: "taskCardView",
            components: {
                common: c["a"],
                adnlDataViewer: p["a"],
                taskCardView: b,
                customModal: f["a"],
                ValidationObserver: r["a"]
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
                        var n = document.querySelector("." + t + " > i.rotatable");
                        n && n.classList.remove("fa-rotate-90")
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
                      , n = function() {
                        var a = Object(o["a"])(regeneratorRuntime.mark((function a() {
                            var n, s;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        n = {
                                            taskId: e.taskData.id,
                                            parameters: JSON.stringify(t)
                                        },
                                        s = "/api/bitTask/Tasks/MarkAsComplete",
                                        Object(d["a"])(s, "post", n).then((function(t) {
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
                    a.ConfirmBox("Are you sure?", "This will mark the task as completed", "warning", "Yes", "No", n)
                },
                getSelectedAssigneesList: function(t) {
                    var e = this
                      , a = "/api/bitTask/TaskGroupMembers/getbygroupid";
                    console.log(t);
                    var n = t.assignedTo[0];
                    Object(d["a"])(a, "post", {
                        id: n
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
                      , n = function() {
                        var a = Object(o["a"])(regeneratorRuntime.mark((function a() {
                            var n, s;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        n = {
                                            taskId: e.taskData.id,
                                            attachmentId: t
                                        },
                                        s = "/api/bitTask/Tasks/DeleteAttachment",
                                        Object(d["a"])(s, "post", n).then((function(t) {
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
                    a.ConfirmBox("Are you sure?", "Delete Attachment", "warning", "Yes", "No", n)
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
          , h = m
          , v = (a("6fc7"),
        a("e420"),
        a("2877"))
          , g = Object(v["a"])(h, n, s, !1, null, "66327b50", null)
          , b = e["a"] = g.exports
    },
    "832e": function(t, e, a) {},
    "879b": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "main-content"
            }, [a("taskScreen")], 1)
        }
          , s = []
          , o = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("h1", {
                staticClass: "position-absolute d-none d-md-block"
            }, [t._v(t._s(t.greet))]), a("div", {
                staticClass: "mt-24"
            }, [a("b-tabs", {
                staticClass: "task-tabs-parent",
                attrs: {
                    "active-nav-item-class": "font-weight-bold text-body border-active-bottom border-0",
                    "active-tab-class": "",
                    "content-class": "mt-0 pt-0"
                },
                model: {
                    value: t.selectedTab,
                    callback: function(e) {
                        t.selectedTab = e
                    },
                    expression: "selectedTab"
                }
            }, [a("b-tab", {
                attrs: {
                    title: "My Tasks"
                }
            }), a("b-tab", {
                attrs: {
                    title: "Assigned"
                }
            }), a("b-tab", {
                attrs: {
                    title: "Monitored"
                }
            })], 1)], 1), a("div", {
                staticClass: "d-flex justify-content-between"
            }, ["kanbanView" != t.displaySwitchselected ? a("div", {
                staticClass: "d-flex mb-2 pl-1 dp-fade-in"
            }, [a("div", {
                staticClass: "pr-2 c-default",
                on: {
                    click: function(e) {
                        t.pendingFilter = !t.pendingFilter
                    }
                }
            }, [t._v(" Pending ")]), a("b-form-checkbox", {
                attrs: {
                    name: "check-button",
                    switch: ""
                },
                model: {
                    value: t.pendingFilter,
                    callback: function(e) {
                        t.pendingFilter = e
                    },
                    expression: "pendingFilter"
                }
            }, [t._v(" Completed ")])], 1) : a("div")]), a("common", {
                ref: "common"
            }), a("div", {
                staticClass: "d-flex"
            }, [a("div", {
                staticClass: "col-12"
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.quickTask.title,
                    expression: "quickTask.title"
                }],
                ref: "quickTaskInput",
                staticClass: "form-control border-on-hover bg-transparent",
                attrs: {
                    type: "text",
                    placeholder: "Add a quick task"
                },
                domProps: {
                    value: t.quickTask.title
                },
                on: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.saveQuickTask(e)
                    },
                    input: function(e) {
                        e.target.composing || t.$set(t.quickTask, "title", e.target.value)
                    }
                }
            }), a("div", {
                staticClass: "position-absolute",
                class: t.quickTask.title ? "dp-slide-fade-in-left" : "dp-slide-fade-out",
                staticStyle: {
                    top: "3.6px",
                    right: "15px"
                }
            }, [a("b-button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "border-0 mr-2 py-1 px-2 btn-flat",
                staticStyle: {
                    "background-color": "#eee"
                },
                attrs: {
                    disabled: !t.quickTask.title,
                    id: "quick-assign-someone-popover",
                    title: "Assign someone"
                },
                on: {
                    click: t.getassign
                }
            }, [t.assigneesSelected ? a("span", {
                staticClass: "badge badge-primary"
            }, [t._v(t._s(t.assigneesSelected.value))]) : a("i", {
                staticClass: "fa fa-user-plus text-primary"
            })]), a("b-popover", {
                attrs: {
                    target: "quick-assign-someone-popover",
                    placement: "bottom",
                    triggers: "focus"
                },
                scopedSlots: t._u([{
                    key: "title",
                    fn: function() {
                        return [t._v("Assign to")]
                    },
                    proxy: !0
                }])
            }, [a("div", {
                staticClass: "col-12 pl-0 pr-0"
            }, [a("Multiselect", {
                attrs: {
                    options: t.assigneesList,
                    label: "value",
                    "track-by": "id",
                    multiple: !1,
                    "show-labels": !1,
                    placeholder: "Type to search",
                    "preserve-search": !1,
                    "hide-selected": !1,
                    "allow-empty": !0,
                    "close-on-select": !0
                },
                model: {
                    value: t.assigneesSelected,
                    callback: function(e) {
                        t.assigneesSelected = e
                    },
                    expression: "assigneesSelected"
                }
            })], 1)]), a("b-button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "border-0 mr-2 py-1 px-2 btn-flat",
                staticStyle: {
                    "background-color": "#eee"
                },
                attrs: {
                    disabled: !t.quickTask.title,
                    id: "quick-assign-due-date",
                    title: "Set a due date"
                }
            }, [t.quickTask.dueDate ? a("span", {
                key: t.qtDuedateKey,
                staticClass: "badge badge-primary"
            }, [t._v(t._s(t.quickTask.dueDate))]) : a("i", {
                staticClass: "fa fa-calendar text-primary"
            })]), a("b-popover", {
                attrs: {
                    target: "quick-assign-due-date",
                    placement: "bottomLeft",
                    triggers: "focus"
                },
                scopedSlots: t._u([{
                    key: "title",
                    fn: function() {
                        return [t._v("Set a due date")]
                    },
                    proxy: !0
                }])
            }, [a("flat-pickr", {
                staticClass: "form-control hide-input",
                attrs: {
                    config: t.configs.dueDateConfig
                },
                model: {
                    value: t.quickTask.dueDate,
                    callback: function(e) {
                        t.$set(t.quickTask, "dueDate", e)
                    },
                    expression: "quickTask.dueDate"
                }
            })], 1)], 1)])]), "gridView" == t.displaySwitchselected ? a("b-row", [a("b-col", {
                attrs: {
                    cols: "12"
                }
            }, [a("gridViewTasks", {
                ref: "gridViewTasksComp",
                attrs: {
                    selectedTab: t.selectedTab
                },
                on: {
                    "update:selectedTab": function(e) {
                        t.selectedTab = e
                    },
                    "update:selected-tab": function(e) {
                        t.selectedTab = e
                    },
                    openSubtask: t.openSubtask
                }
            })], 1)], 1) : t._e(), "kanbanView" == t.displaySwitchselected ? a("div", {
                staticClass: "mt-3"
            }, [a("kanban", {
                ref: "kanbanComp",
                attrs: {
                    selectedTab: t.selectedTab
                },
                on: {
                    "update:selectedTab": function(e) {
                        t.selectedTab = e
                    },
                    "update:selected-tab": function(e) {
                        t.selectedTab = e
                    },
                    openSubtask: t.openSubtask,
                    openRelatedtask: t.openRelatedtask,
                    openTaskForEdit: t.openTaskForEdit
                }
            })], 1) : t._e(), a("b-button", {
                staticClass: "btn btn-primary fab rounded-circle wh55px lh-1",
                attrs: {
                    variant: "primary"
                },
                on: {
                    click: t.newTask
                }
            }, [a("i", {
                staticClass: "fa fa-plus fs1"
            })]), a("slide-out", {
                ref: "showGroup",
                staticClass: "slide-out-no-z-index",
                attrs: {
                    visible: t.showAddTaskSlideout,
                    dock: "right",
                    size: t.dWidth > 768 ? "60%" : "100%",
                    title: ("edit" == t.addOrEdit ? "Edit" : "Add") + " " + (t.subTask ? "Subtask" : "Task"),
                    "close-on-mask-click": !1
                },
                on: {
                    "update:visible": function(e) {
                        t.showAddTaskSlideout = e
                    },
                    close: t.addTaskSlideoutClosed
                }
            }, [a("div", {
                staticClass: "p-2 px-28"
            }, [t.showAddTaskSlideout ? a("newTaskComp", {
                ref: "newTaskCompRef",
                attrs: {
                    formCreator: t.formCreator,
                    model: t.model,
                    subTask: t.subTask,
                    relatedTask: t.relatedTask,
                    taskDetails: t.taskDetails,
                    addOrEdit: t.addOrEdit,
                    editTaskId: t.editTaskId
                },
                on: {
                    "update:formCreator": function(e) {
                        t.formCreator = e
                    },
                    "update:form-creator": function(e) {
                        t.formCreator = e
                    },
                    "update:model": function(e) {
                        t.model = e
                    },
                    "update:subTask": function(e) {
                        t.subTask = e
                    },
                    "update:sub-task": function(e) {
                        t.subTask = e
                    },
                    "update:relatedTask": function(e) {
                        t.relatedTask = e
                    },
                    "update:related-task": function(e) {
                        t.relatedTask = e
                    },
                    "update:addOrEdit": function(e) {
                        t.addOrEdit = e
                    },
                    "update:add-or-edit": function(e) {
                        t.addOrEdit = e
                    },
                    "update:editTaskId": function(e) {
                        t.editTaskId = e
                    },
                    "update:edit-task-id": function(e) {
                        t.editTaskId = e
                    },
                    taskCreated: t.taskCreated
                }
            }) : t._e()], 1)]), a("b-modal", {
                attrs: {
                    id: "modal-new-task",
                    "hide-footer": "",
                    "hide-header": "",
                    centered: "",
                    size: "sm"
                },
                model: {
                    value: t.newTaskModal,
                    callback: function(e) {
                        t.newTaskModal = e
                    },
                    expression: "newTaskModal"
                }
            }, [a("h3", {
                staticClass: "text-center"
            }, [t._v("Create a new task")]), a("br"), a("div", {
                staticClass: "d-flex justify-content-center"
            }, [a("button", {
                staticClass: "btn btn-primary mr-2",
                staticStyle: {
                    "font-size": "14px"
                },
                on: {
                    click: t.newTask
                }
            }, [t._v(" Normal Task ")]), a("button", {
                staticClass: "btn btn-success",
                staticStyle: {
                    "font-size": "14px"
                },
                on: {
                    click: t.newTask
                }
            }, [t._v(" Scheduled Task ")])])])], 1)
        }
          , r = []
          , i = (a("4d63"),
        a("ac1f"),
        a("25f0"),
        function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("Common", {
                ref: "common"
            }), a("ValidationObserver", {
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        var n = e.invalid
                          , s = e.handleSubmit;
                        return [a("div", {
                            staticClass: "row"
                        }, [a("div", {
                            staticClass: "col-lg-4 pl-lg-"
                        }, [a("label", [t._v("Task No#")]), a("ValidationProvider", {
                            attrs: {
                                name: "number",
                                rules: "required"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    var n = e.errors;
                                    return [a("input", {
                                        directives: [{
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.model.number,
                                            expression: "model.number"
                                        }],
                                        class: "form-control " + (n.length > 0 ? "input-has-error" : "") + " ",
                                        attrs: {
                                            type: "text",
                                            disabled: ""
                                        },
                                        domProps: {
                                            value: t.model.number
                                        },
                                        on: {
                                            input: function(e) {
                                                e.target.composing || t.$set(t.model, "number", e.target.value)
                                            }
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(n[0]))])]
                                }
                            }], null, !0)
                        })], 1), t.subTask ? a("div", {
                            staticClass: "col-lg-4"
                        }, [a("label", [t._v("Master Task No#")]), a("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: t.model.masterTaskNumber,
                                expression: "model.masterTaskNumber"
                            }],
                            staticClass: "form-control",
                            attrs: {
                                type: "text",
                                disabled: ""
                            },
                            domProps: {
                                value: t.model.masterTaskNumber
                            },
                            on: {
                                input: function(e) {
                                    e.target.composing || t.$set(t.model, "masterTaskNumber", e.target.value)
                                }
                            }
                        })]) : t._e(), t.relatedTask ? a("div", {
                            staticClass: "col-lg-4"
                        }, [a("label", [t._v("Related To")]), a("div", [a("Multiselect", {
                            attrs: {
                                options: t.relatedTaskList,
                                label: "value",
                                "track-by": "id",
                                placeholder: "Type to search",
                                searchable: !0,
                                "internal-search": !1,
                                "preserve-search": !1,
                                "allow-empty": !0,
                                "hide-selected": !1,
                                multiple: !0,
                                "close-on-select": !1
                            },
                            on: {
                                "search-change": t.getRelatedTasks
                            },
                            model: {
                                value: t.relatedTaskSelected,
                                callback: function(e) {
                                    t.relatedTaskSelected = e
                                },
                                expression: "relatedTaskSelected"
                            }
                        })], 1)]) : t._e(), a("div", {
                            staticClass: "col-lg-4"
                        }, [a("label", [t._v("Date")]), a("div", ["add" == t.addOrEdit ? a("input", {
                            staticClass: "form-control",
                            attrs: {
                                type: "date",
                                disabled: ""
                            },
                            domProps: {
                                value: t.model.createdAt
                            }
                        }) : a("span", {
                            staticClass: "form-control bg-gray-200"
                        }, [t._v(t._s(t.getReadableDate(t.model.createdAt)))])])])]), a("div", {
                            staticClass: "row mx"
                        }, [t.subTask ? a("div", {
                            staticClass: "pt-2 col-lg-6"
                        }, [a("label", [t._v("Percentage relative to master (%)")]), a("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: t.model.percentagesToMaster,
                                expression: "model.percentagesToMaster"
                            }],
                            staticClass: "form-control",
                            attrs: {
                                type: "text",
                                max: "100",
                                min: "0"
                            },
                            domProps: {
                                value: t.model.percentagesToMaster
                            },
                            on: {
                                input: function(e) {
                                    e.target.composing || t.$set(t.model, "percentagesToMaster", e.target.value)
                                }
                            }
                        })]) : t._e(), a("div", {
                            staticClass: "pt-2 col"
                        }, [a("label", [t._v("Task Type")]), a("div", [a("ValidationProvider", {
                            attrs: {
                                name: "taskType",
                                rules: "required"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    var n = e.errors;
                                    return [a("Multiselect", {
                                        class: n.length > 0 ? "ms-has-error" : null,
                                        attrs: {
                                            options: t.taskTypeList,
                                            label: "value",
                                            "track-by": "id",
                                            disabled: "add" != t.addOrEdit,
                                            "show-labels": !1,
                                            placeholder: "Type to search",
                                            "preserve-search": !1,
                                            "hide-selected": !1,
                                            "allow-empty": !1,
                                            searchable: !0
                                        },
                                        on: {
                                            "search-change": t.getTaskType
                                        },
                                        model: {
                                            value: t.taskTypeSelected,
                                            callback: function(e) {
                                                t.taskTypeSelected = e
                                            },
                                            expression: "taskTypeSelected"
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(n[0]))])]
                                }
                            }], null, !0)
                        })], 1)])]), a("div", {
                            staticClass: "pt-2"
                        }, [a("label", [t._v("Title")]), a("div", [a("ValidationProvider", {
                            attrs: {
                                name: "title",
                                rules: "required"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    var n = e.errors;
                                    return [a("input", {
                                        directives: [{
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.model.title,
                                            expression: "model.title"
                                        }],
                                        class: "form-control " + (n.length > 0 ? "input-has-error" : "") + " ",
                                        attrs: {
                                            type: "text",
                                            maxlength: "40"
                                        },
                                        domProps: {
                                            value: t.model.title
                                        },
                                        on: {
                                            input: function(e) {
                                                e.target.composing || t.$set(t.model, "title", e.target.value)
                                            }
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(n[0]))])]
                                }
                            }], null, !0)
                        })], 1)]), a("div", {
                            staticClass: "pt-2"
                        }, [a("label", [t._v("Description")]), a("div", [a("ValidationProvider", {
                            attrs: {
                                name: "description",
                                rules: ""
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    var n = e.errors;
                                    return [a("textarea", {
                                        directives: [{
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.model.taskDescription,
                                            expression: "model.taskDescription"
                                        }],
                                        class: "form-control " + (n.length > 0 ? "input-has-error" : "") + " ",
                                        staticStyle: {
                                            resize: "none"
                                        },
                                        attrs: {
                                            rows: "4",
                                            placeholder: "Enter Description"
                                        },
                                        domProps: {
                                            value: t.model.taskDescription
                                        },
                                        on: {
                                            input: function(e) {
                                                e.target.composing || t.$set(t.model, "taskDescription", e.target.value)
                                            }
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(n[0]))])]
                                }
                            }], null, !0)
                        })], 1)]), t.schema.schema.length > 0 && void 0 != t.schema.schema.find((function(t) {
                            return "taskTypeCreating" == t.slot
                        }
                        )) ? a("div", {
                            staticClass: "pt-2"
                        }, [a("dpDynamic", {
                            staticClass: "native-validator-parent",
                            attrs: {
                                schema: t.schema.schema.find((function(t) {
                                    return "taskTypeCreating" == t.slot
                                }
                                )),
                                model: t.model.adnlData.adnlData.creating.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.model.adnlData.adnlData.creating, "model", e)
                                }
                            }
                        })], 1) : t._e(), a("div", {
                            staticClass: "row mx-0 pt-2"
                        }, [a("div", {
                            staticClass: "col-6 pl-0"
                        }, [a("label", [t._v("Target Date")]), a("div", [a("ValidationProvider", {
                            attrs: {
                                name: "targetDate",
                                rules: "required"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    var n = e.errors;
                                    return [a("flat-pickr", {
                                        class: "form-control " + (n.length > 0 ? "input-has-error" : "") + " ",
                                        attrs: {
                                            config: t.flatPicConfig,
                                            placeholder: "Select date"
                                        },
                                        model: {
                                            value: t.model.targetDate,
                                            callback: function(e) {
                                                t.$set(t.model, "targetDate", e)
                                            },
                                            expression: "model.targetDate"
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(n[0]))])]
                                }
                            }], null, !0)
                        })], 1)]), a("div", {
                            staticClass: "col-6 pr-0"
                        }, [a("label", [t._v("Target Time")]), a("div", [a("ValidationProvider", {
                            attrs: {
                                name: "targetTime",
                                rules: "required"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    var n = e.errors;
                                    return [a("input", {
                                        directives: [{
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.model.targetTime,
                                            expression: "model.targetTime"
                                        }],
                                        class: "form-control " + (n.length > 0 ? "input-has-error" : "") + " ",
                                        attrs: {
                                            type: "time",
                                            placeholder: "Select time"
                                        },
                                        domProps: {
                                            value: t.model.targetTime
                                        },
                                        on: {
                                            input: function(e) {
                                                e.target.composing || t.$set(t.model, "targetTime", e.target.value)
                                            }
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(n[0]))])]
                                }
                            }], null, !0)
                        })], 1)]), a("div", {
                            staticClass: "col-6 pl-0 pt-2"
                        }, [a("label", [t._v("Tags")]), a("div", [a("ValidationProvider", {
                            attrs: {
                                name: "tags",
                                rules: ""
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    var n = e.errors;
                                    return [a("Multiselect", {
                                        class: n.length > 0 ? "msTaggable ms-has-error" : "msTaggable",
                                        attrs: {
                                            options: t.tagList,
                                            label: "value",
                                            "track-by": "id",
                                            placeholder: "Type to search",
                                            searchable: !0,
                                            "preserve-search": !1,
                                            "allow-empty": !0,
                                            "hide-selected": !1,
                                            multiple: !0,
                                            taggable: !1,
                                            "close-on-select": !1
                                        },
                                        on: {
                                            "search-change": t.getTagList
                                        },
                                        model: {
                                            value: t.model.tags,
                                            callback: function(e) {
                                                t.$set(t.model, "tags", e)
                                            },
                                            expression: "model.tags"
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(n[0]))])]
                                }
                            }], null, !0)
                        })], 1)]), a("div", {
                            staticClass: "col-6 pr-0 pt-2"
                        }, [a("label", [t._v("Priority")]), a("div", [a("ValidationProvider", {
                            attrs: {
                                name: "priority",
                                rules: "required"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function(e) {
                                    var n = e.errors;
                                    return [a("Multiselect", {
                                        class: " " + (n.length > 0 ? "ms-has-error" : "") + " ",
                                        attrs: {
                                            options: t.priorityList,
                                            label: "name",
                                            "track-by": "id",
                                            "show-labels": !1,
                                            placeholder: "Type to search",
                                            "preserve-search": !1,
                                            "hide-selected": !1,
                                            "allow-empty": !1
                                        },
                                        model: {
                                            value: t.prioritySelected,
                                            callback: function(e) {
                                                t.prioritySelected = e
                                            },
                                            expression: "prioritySelected"
                                        }
                                    }), a("span", {
                                        staticClass: "error-text"
                                    }, [t._v(t._s(n[0]))])]
                                }
                            }], null, !0)
                        })], 1)])]), a("div", {
                            staticClass: "d-flex pt-2"
                        }, [a("div", {
                            staticClass: "mx-0"
                        }, [a("b-form-checkbox", {
                            attrs: {
                                name: "check-button"
                            },
                            model: {
                                value: t.model.clonable,
                                callback: function(e) {
                                    t.$set(t.model, "clonable", e)
                                },
                                expression: "model.clonable"
                            }
                        }, [t._v(" Clonable ")])], 1), a("div", {
                            staticClass: "mx-2"
                        }, [a("b-form-checkbox", {
                            attrs: {
                                name: "check-button"
                            },
                            model: {
                                value: t.model.delegatable,
                                callback: function(e) {
                                    t.$set(t.model, "delegatable", e)
                                },
                                expression: "model.delegatable"
                            }
                        }, [t._v(" Delegatable ")])], 1), a("div", {
                            staticClass: "mx-2"
                        }, [t.taskTypeSelected.overrideWorkFlow && t.taskTypeSelected.workFlowBased ? a("b-form-checkbox", {
                            attrs: {
                                name: "workflow-based"
                            },
                            model: {
                                value: t.model.workFlowBased,
                                callback: function(e) {
                                    t.$set(t.model, "workFlowBased", e)
                                },
                                expression: "model.workFlowBased"
                            }
                        }, [t._v(" Workflow-Based ")]) : t._e()], 1)]), t.model.workFlowBased ? a("div") : a("div", {
                            staticClass: "dp-slide-fade-in-right"
                        }, [a("div", {
                            staticClass: "d-flex mx-0 mt-2 pb-2"
                        }, [a("div", {
                            staticClass: "d-flex col-lg-6"
                        }, [a("div", {
                            staticStyle: {
                                "margin-top": "13px",
                                "padding-right": "6px"
                            },
                            on: {
                                click: function(e) {
                                    t.model.selfAssigned = !t.model.selfAssigned
                                }
                            }
                        }, [t._v(" Assign to Me ")]), a("b-form-checkbox", {
                            staticClass: "adjust-switch-after-neg1px",
                            attrs: {
                                name: "check-button",
                                switch: ""
                            },
                            model: {
                                value: t.model.selfAssigned,
                                callback: function(e) {
                                    t.$set(t.model, "selfAssigned", e)
                                },
                                expression: "model.selfAssigned"
                            }
                        })], 1), t.model.selfAssigned ? t._e() : a("div", {
                            staticClass: "d-flex col-lg-6"
                        }, [a("div", {
                            staticStyle: {
                                "margin-top": "13px",
                                "padding-right": "6px"
                            },
                            on: {
                                click: function(e) {
                                    t.model.isGroup = !t.model.isGroup
                                }
                            }
                        }, [t._v(" Is Group ")]), a("b-form-checkbox", {
                            staticClass: "adjust-switch-after-neg1px",
                            attrs: {
                                name: "check-button",
                                switch: ""
                            },
                            model: {
                                value: t.model.isGroup,
                                callback: function(e) {
                                    t.$set(t.model, "isGroup", e)
                                },
                                expression: "model.isGroup"
                            }
                        })], 1)]), t.model.selfAssigned ? t._e() : a("div", {
                            staticClass: "row mx-0 mt-2 border-top pt-2"
                        }, [a("h6", {
                            staticClass: "col-12 pl-0 pt-2"
                        }, [t._v("Select Assignees")]), a("div", {
                            staticClass: "col-lg-6 col-12 pl-0 pr-0"
                        }, [a("Multiselect", {
                            staticClass: "msTaggable",
                            attrs: {
                                options: t.assigneesList,
                                label: "value",
                                "track-by": "id",
                                multiple: !0,
                                "show-labels": !1,
                                placeholder: "Type to search",
                                "preserve-search": !1,
                                "hide-selected": !1,
                                "allow-empty": !0,
                                "close-on-select": !1,
                                "internal-search": !1
                            },
                            on: {
                                "search-change": function(e) {
                                    return t.getassign(e, t.taskTypeSelected.id)
                                }
                            },
                            scopedSlots: t._u([{
                                key: "option",
                                fn: function(e) {
                                    return [a("div", {
                                        staticClass: "option__desc"
                                    }, [a("span", {
                                        staticClass: "option__title"
                                    }, [t._v(" " + t._s(e.option.value) + " ")]), e.option.email ? a("span", {
                                        staticClass: "pull-right option__small",
                                        staticStyle: {
                                            "font-size": "0.7rem"
                                        }
                                    }, [t._v(" " + t._s(e.option.email) + " ")]) : t._e()])]
                                }
                            }], null, !1, 1626031043),
                            model: {
                                value: t.assigneesSelected,
                                callback: function(e) {
                                    t.assigneesSelected = e
                                },
                                expression: "assigneesSelected"
                            }
                        })], 1), a("b-form-checkbox", {
                            staticClass: "col-lg-4 col-10 ml-lg-4 mt-2",
                            attrs: {
                                name: "check-button-2"
                            },
                            model: {
                                value: t.model.individualTasks,
                                callback: function(e) {
                                    t.$set(t.model, "individualTasks", e)
                                },
                                expression: "model.individualTasks"
                            }
                        }, [t._v(" Send as individual task ")]), t.assigneesSelected.length > 0 ? a("div", {
                            staticClass: "col pt-2 t-a-r",
                            on: {
                                click: t.getPendingTaskLists
                            }
                        }, [a("i", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            staticClass: "fa fa-eye c-pointer text-primary-on-hover scale-on-hover",
                            attrs: {
                                title: "View assignee tasks"
                            }
                        })]) : t._e()], 1), a("div", {
                            staticClass: "row mx-0 mt-3"
                        }, [a("b-form-checkbox", {
                            staticClass: "col-lg-6",
                            attrs: {
                                name: "check-button-2"
                            },
                            model: {
                                value: t.model.setAsRepeatedTask,
                                callback: function(e) {
                                    t.$set(t.model, "setAsRepeatedTask", e)
                                },
                                expression: "model.setAsRepeatedTask"
                            }
                        }, [t._v(" Repeated Task "), t.model.setAsRepeatedTask ? a("button", {
                            staticClass: "btn btn-link",
                            staticStyle: {
                                position: "absolute",
                                bottom: "-9px"
                            },
                            on: {
                                click: function(e) {
                                    return t.$refs.repeatedTaskModal.Open()
                                }
                            }
                        }, [t._v(" View/Change ")]) : t._e()])], 1), a("div", {
                            staticClass: "row mx-0 mt-3 pl-0"
                        }, [a("b-form-checkbox", {
                            staticClass: "col-lg-6",
                            attrs: {
                                name: "check-button-2"
                            },
                            model: {
                                value: t.model.awaitSubTaskCompletion,
                                callback: function(e) {
                                    t.$set(t.model, "awaitSubTaskCompletion", e)
                                },
                                expression: "model.awaitSubTaskCompletion"
                            }
                        }, [t._v(" Await SubTask Completion ")])], 1), a("div", {
                            staticClass: "row mx-0 mt-3 pl-0"
                        }, [a("b-form-checkbox", {
                            staticClass: "col-lg-6",
                            attrs: {
                                name: "check-button-2",
                                disabled: t.isDocumentationCompulsory
                            },
                            model: {
                                value: t.model.isDocumentationRequired,
                                callback: function(e) {
                                    t.$set(t.model, "isDocumentationRequired", e)
                                },
                                expression: "model.isDocumentationRequired"
                            }
                        }, [t._v(" Documentation Required ")])], 1)]), a("div", {
                            staticClass: "mt-4 t-a-r"
                        }, [a("input", {
                            staticClass: "btn btn-primary es-btn mx-2 m-t-n-sm",
                            attrs: {
                                type: "button",
                                value: "Save"
                            },
                            on: {
                                click: function(e) {
                                    s(t.beforeSave(n))
                                }
                            }
                        })])]
                    }
                }])
            }), a("customModal", {
                ref: "repeatedTaskModal",
                staticStyle: {
                    "z-index": "2000"
                },
                attrs: {
                    modalClass: "medium",
                    defaultCloseBtn: "true"
                }
            }, [a("div", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("Repeated Task")]), t.model.recurringTask && t.model.recurringTask.recurringData ? a("div", {
                staticClass: "pl-0",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [a("h5", {
                staticClass: "font-weight-bold"
            }, [t._v("Re-Occurance")]), a("div", {
                staticClass: "pl-3"
            }, [a("div", {
                staticClass: "row form-group"
            }, [a("label", {
                staticClass: "newTask-label col-4 pt-1"
            }, [t._v(" Repeat Every ")]), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.model.recurringTask.recurringData.repeatEvery,
                    expression: "model.recurringTask.recurringData.repeatEvery"
                }],
                staticClass: "form-control col-4",
                attrs: {
                    type: "number"
                },
                domProps: {
                    value: t.model.recurringTask.recurringData.repeatEvery
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.model.recurringTask.recurringData, "repeatEvery", e.target.value)
                    }
                }
            }), a("div", {
                staticClass: "col-4 pr-0"
            }, [a("multiselect", {
                attrs: {
                    options: t.repeatList,
                    name: "Repeat",
                    searchable: !0,
                    "preserve-search": !1,
                    "allow-empty": !0,
                    "hide-selected": !1
                },
                model: {
                    value: t.model.recurringTask.recurringData.repeatEveryType,
                    callback: function(e) {
                        t.$set(t.model.recurringTask.recurringData, "repeatEveryType", e)
                    },
                    expression: "model.recurringTask.recurringData.repeatEveryType"
                }
            })], 1)]), a("div", {
                staticClass: "row form-group"
            }, [a("label", {
                staticClass: "newTask-label col-4"
            }, [t._v("Repeat on")]), t._l(t.dayList, (function(e, n) {
                return a("div", {
                    key: "repeat" + n
                }, [a("b-badge", {
                    class: e.active ? "bg-primary text-white c-pointer mr-1 pt-2 round-badge scale-on-hover" : "c-pointer mr-1 pt-2 round-badge scale-on-hover",
                    on: {
                        click: function(a) {
                            return t.daySelected(e)
                        }
                    }
                }, [t._v(t._s(e.value))])], 1)
            }
            ))], 2), a("div", {
                staticClass: "row form-group"
            }, [a("label", {
                staticClass: "newTask-label col-4",
                staticStyle: {
                    "white-space": "break-spaces",
                    "padding-left": "10px"
                }
            }, [t._v(" Custom Cron ")]), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.model.recurringTask.recurringData.customExpression,
                    expression: "model.recurringTask.recurringData.customExpression"
                }],
                staticClass: "col-4 form-control",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.model.recurringTask.recurringData.customExpression
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.model.recurringTask.recurringData, "customExpression", e.target.value)
                    }
                }
            }), a("div", {
                staticClass: "col pr-0 t-a-r"
            }, [a("button", {
                staticClass: "btn font-weight-bold w-100 btn-gray-200",
                on: {
                    click: t.openCronHelperModal
                }
            }, [a("i", {
                staticClass: "fa fa-question-circle",
                attrs: {
                    "aria-hidden": "true"
                }
            }), a("span", {
                staticStyle: {
                    "font-size": "10px"
                }
            }, [t._v(" Custom Expr.")])])]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.model.recurringTask.recurringData.customExpression.length > 0,
                    expression: "\n              model.recurringTask.recurringData.customExpression.length > 0\n            "
                }],
                staticClass: "col-12"
            }, [a("span", {
                staticClass: "customCronText"
            }, [t._v(t._s(t.convertCronTOString(t.model.recurringTask.recurringData.customExpression)))])])])]), a("div", {
                staticClass: "row"
            }, [a("h5", {
                staticClass: "font-weight-bold col-12 pt-2"
            }, [t._v("End")]), a("label", {
                staticClass: "newTask-label col-4",
                staticStyle: {
                    "white-space": "break-spaces",
                    "padding-left": "10px"
                }
            }, [t._v(" On ")]), a("div", {
                staticClass: "col-lg-5 pl-lg-2"
            }, [a("div", [a("flat-pickr", {
                staticClass: "form-control",
                attrs: {
                    config: t.flatPicToConfig,
                    placeholder: "Select date"
                },
                model: {
                    value: t.model.recurringTask.recurringData.endDate,
                    callback: function(e) {
                        t.$set(t.model.recurringTask.recurringData, "endDate", e)
                    },
                    expression: "model.recurringTask.recurringData.endDate"
                }
            })], 1)])]), a("div", {
                staticClass: "col-12 t-a-r pt-2 pr-0"
            }, [a("button", {
                staticClass: "btn btn-primary",
                on: {
                    click: t.closeRepeatedTaskModal
                }
            }, [t._v(" Close ")])])]) : t._e()]), a("customModal", {
                ref: "cronHelperModal",
                staticStyle: {
                    "z-index": "2000"
                },
                attrs: {
                    modalClass: "medium",
                    defaultCloseBtn: "false"
                }
            }, [a("div", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("CRON Helper")]), a("div", {
                staticClass: "pl-0",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [a("cronHelper"), a("button", {
                staticClass: "float-right btn btn-success",
                on: {
                    click: t.closeCronHelperModal
                }
            }, [t._v(" Close ")])], 1)]), a("customModal", {
                ref: "taskCreatedModal",
                staticStyle: {
                    "z-index": "2000"
                },
                attrs: {
                    modalClass: "medium",
                    defaultCloseBtn: "true"
                }
            }, [a("div", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("Additional Information")]), a("div", {
                staticClass: "pl-0",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [a("ValidationObserver", {
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        var n = e.invalid
                          , s = e.handleSubmit;
                        return [t.schema.createdSchema.length > 0 && void 0 != t.schema.createdSchema.find((function(t) {
                            return "taskTypeCreated" == t.slot
                        }
                        )) ? a("div", {
                            staticClass: "pt-2"
                        }, [a("dpDynamic", {
                            staticClass: "native-validator-parent-2",
                            attrs: {
                                schema: t.schema.createdSchema.find((function(t) {
                                    return "taskTypeCreated" == t.slot
                                }
                                )),
                                model: t.model.adnlData.adnlData.created.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.model.adnlData.adnlData.created, "model", e)
                                }
                            }
                        })], 1) : t._e(), a("button", {
                            staticClass: "float-right btn btn-success",
                            attrs: {
                                disabled: n
                            },
                            on: {
                                click: function(e) {
                                    return s(t.OnSave)
                                }
                            }
                        }, [t._v(" Save ")])]
                    }
                }])
            })], 1)]), a("customModal", {
                ref: "pendingTaskListModal",
                staticStyle: {
                    "z-index": "2000"
                },
                attrs: {
                    modalClass: "large",
                    defaultCloseBtn: "true"
                }
            }, [a("div", {
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [t._v("Pending Task")]), a("div", {
                staticClass: "pl-0",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [a("div", {
                staticClass: "pt-2"
            }, t._l(t.pendingTaskList, (function(e, n) {
                return a("div", {
                    key: "PenidingTask" + n,
                    staticClass: "mb-1 mt-1 px-2 dp-slide-fade-in-left"
                }, [a("button", {
                    staticClass: "align-items-center btn col-12 d-flex font-weight-bold px-3 text-left",
                    class: "PendingTask-accordion-" + n,
                    staticStyle: {
                        "background-color": "rgb(245, 241, 249)"
                    },
                    on: {
                        click: function(e) {
                            return t.$root.$emit("bv::toggle::collapse", "PendingTask-accordion-" + n)
                        }
                    }
                }, [a("i", {
                    staticClass: "fa fa-chevron-right mr-1 rotatable text-primary",
                    staticStyle: {
                        transition: "all 0.3s ease 0s",
                        "font-size": "1.2em"
                    }
                }), a("div", {
                    staticClass: "trim-text",
                    staticStyle: {
                        "line-height": "2",
                        "vertical-align": "middle",
                        display: "flex",
                        "justify-content": "space-between",
                        width: "100%"
                    },
                    attrs: {
                        "data-v-2631c26f": ""
                    }
                }, [a("div", {
                    staticStyle: {
                        color: "#353535"
                    }
                }, [t._v(t._s(e.currentlyWith))]), a("div", [a("span", {
                    staticClass: "badge-primary",
                    staticStyle: {
                        "padding-top": "1px",
                        "padding-bottom": "1px"
                    }
                }, [a("span", {
                    staticClass: "font-weight-600",
                    staticStyle: {
                        "font-size": "0.98em"
                    }
                }, [t._v(" " + t._s(e.totalTask) + " PendingTaks ")])])])])]), a("b-collapse", {
                    attrs: {
                        id: "PendingTask-accordion-" + n,
                        accordion: "my-PendingTask-accordion",
                        role: "tabpanel"
                    }
                }, [a("div", {
                    staticClass: "row w-100 ml-0 mt-1",
                    staticStyle: {
                        transform: "scale(0.99)"
                    }
                }, [[a("table", {
                    staticClass: "table table-bordered scrollable-tbl-body"
                }, [a("thead", {
                    staticClass: "table-active"
                }, [a("tr", [a("th", {
                    attrs: {
                        width: "60%"
                    }
                }, [t._v("Title")]), a("th", {
                    attrs: {
                        width: "20%"
                    }
                }, [t._v("Due Date")]), a("th", {
                    attrs: {
                        width: "20%"
                    }
                }, [t._v("Status")])])]), a("tbody", t._l(e.tasks, (function(e, n) {
                    return a("tr", {
                        key: n
                    }, [a("td", {
                        attrs: {
                            width: "60%"
                        }
                    }, [t._v(t._s(e.title))]), a("td", {
                        attrs: {
                            width: "20%"
                        }
                    }, [t._v(" " + t._s(t.normaliseDate(e.targetDate)) + " ")]), a("td", [t._v(" " + t._s(e.status) + " ")])])
                }
                )), 0)])]], 2)])], 1)
            }
            )), 0), a("button", {
                staticClass: "float-right btn btn-success",
                on: {
                    click: t.closePendingModal
                }
            }, [t._v(" Close ")])])])], 1)
        }
        )
          , l = []
          , c = (a("4de4"),
        a("a15b"),
        a("d81d"),
        a("b0c0"),
        a("d3b7"),
        a("96cf"),
        a("1da1"))
          , d = a("b85c")
          , u = a("7722")
          , p = a("7bb1")
          , f = a("8e5f")
          , m = a.n(f)
          , h = a("50e2")
          , v = a("7c15")
          , g = a("5a0c")
          , b = a.n(g)
          , y = a("3122")
          , k = a("c38f")
          , C = a.n(k)
          , T = (a("0952"),
        a("2772"))
          , _ = a.n(T)
          , x = {
            components: {
                Common: u["a"],
                Multiselect: m.a,
                customModal: h["a"],
                ValidationProvider: p["b"],
                ValidationObserver: p["a"],
                cronHelper: y["a"],
                flatPickr: C.a
            },
            props: {
                formCreator: [Object, Array],
                subTask: {
                    type: Boolean,
                    defualt: !1
                },
                relatedTask: {
                    type: Boolean,
                    defualt: !1
                },
                taskDetails: {
                    type: [Object, Array]
                },
                taskData: [Object, Array],
                addOrEdit: {
                    type: String,
                    default: "add"
                },
                editTaskId: String
            },
            data: function() {
                return {
                    isSaveButtonDisable: !1,
                    assigneesSelected: [],
                    assigneesList: [],
                    tagSelected: [],
                    tagList: [],
                    relatedTaskSelected: [],
                    relatedTaskList: [],
                    taskNumber: "",
                    taskTypeList: [],
                    taskTypeSelected: "",
                    flatPicToConfig: {
                        wrap: !0,
                        minDate: b()().format("YYYY-MM-DD HH:mm:ss"),
                        dateFormat: "Y-m-d H:i:S",
                        altFormat: "d/m/Y h:i:S:K",
                        altInput: !0,
                        allowInput: !1,
                        enableTime: !0,
                        time_24hr: !1,
                        disableMobile: !0
                    },
                    flatPicConfig: {
                        wrap: !0,
                        dateFormat: "Y-m-d",
                        altFormat: "d/m/Y",
                        altInput: !0,
                        allowInput: !1,
                        enableTime: !1,
                        time_24hr: !1,
                        disableMobile: !0,
                        minDate: b()().format("YYYY-MM-DD")
                    },
                    repeatList: ["Days", "Weeks", "Months", "Years"],
                    priorityList: [],
                    prioritySelected: "",
                    weekDay: "",
                    dayList: [{
                        dayId: 1,
                        value: "S",
                        active: !1
                    }, {
                        dayId: 2,
                        value: "M",
                        active: !1
                    }, {
                        dayId: 3,
                        value: "T",
                        active: !1
                    }, {
                        dayId: 4,
                        value: "W",
                        active: !1
                    }, {
                        dayId: 5,
                        value: "T",
                        active: !1
                    }, {
                        dayId: 6,
                        value: "F",
                        active: !1
                    }, {
                        dayId: 7,
                        value: "S",
                        active: !1
                    }],
                    model: {
                        id: "00000000-0000-0000-0000-000000000000",
                        branchId: "00000000-0000-0000-0000-000000000000",
                        number: null,
                        taskDescription: null,
                        status: 0,
                        createdAt: b()().format("YYYY-MM-DD"),
                        createdBy: "00000000-0000-0000-0000-000000000000",
                        otherDetails: null,
                        masterTaskId: "00000000-0000-0000-0000-000000000000",
                        masterTaskNumber: null,
                        percentagesToMaster: 0,
                        targetDate: b()().format("YYYY-MM-DD"),
                        targetTime: "",
                        masterTask: !1,
                        targetCriteria: null,
                        taskGroupId: null,
                        tags: [],
                        adnlData: {
                            id: "00000000-0000-0000-0000-000000000000",
                            typeName: null,
                            referenceId: "00000000-0000-0000-0000-000000000000",
                            adnlData: {},
                            actionDate: "0001-01-01T00:00:00",
                            userId: "00000000-0000-0000-0000-000000000000"
                        },
                        taskType: "00000000-0000-0000-0000-000000000000",
                        daysOffsetFromDue: 0,
                        clonable: !1,
                        delegatable: !1,
                        priority: 0,
                        completedDate: "0001-01-01T00:00:00",
                        iscloned: !1,
                        actionDate: b()().format("YYYY-MM-DD"),
                        userId: "00000000-0000-0000-0000-000000000000",
                        draftId: "00000000-0000-0000-0000-000000000000",
                        approvalStatus: 0,
                        version: 0,
                        assignedTo: null,
                        selfAssigned: !1,
                        individualTasks: !1,
                        taskChats: null,
                        taskSubscribers: null,
                        subscribersTasks: null,
                        customCron: "",
                        approvalRequired: !1,
                        typeName: "",
                        recurringTask: {
                            taskId: "00000000-0000-0000-0000-000000000000",
                            recurringData: {
                                repeatEvery: 1,
                                repeatEveryType: "",
                                repeatOn: "",
                                customExpression: "",
                                endOn: "",
                                endDate: b()().format("YYYY-MM-DD HH:mm:ss")
                            },
                            recurringOn: "0001-01-01T00:00:00",
                            adnlData: null
                        },
                        workFlowBased: !1,
                        isGroup: !1,
                        awaitSubTaskCompletion: !1,
                        isDocumentationRequired: !1
                    },
                    schema: {
                        schema: [],
                        createdSchema: []
                    },
                    pendingTaskList: [],
                    isDocumentationCompulsory: !1
                }
            },
            watch: {
                "model.setAsRepeatedTask": function(t) {
                    1 == t && this.$refs.repeatedTaskModal.Open()
                },
                taskTypeSelected: function(t, e) {
                    t && t != e ? (this.schema.schema = [],
                    this.schema.createdSchema = [],
                    this.model.taskType = t.id,
                    this.model.typeName = t.value,
                    this.getTaskTypeAddnlData(1, t.id),
                    this.getTaskTypeAddnlData(2, t.id),
                    this.getassign("", t.id),
                    this.model.workFlowBased = t.workFlowBased) : (this.model.workFlowBased = !1,
                    this.model.approvalRequired = !1)
                },
                prioritySelected: function(t) {
                    t && (this.model.priority = t.id)
                },
                relatedTaskSelected: function(t) {
                    if (this.relatedTask) {
                        this.model.taskGroupId = [];
                        var e, a = Object(d["a"])(t);
                        try {
                            for (a.s(); !(e = a.n()).done; ) {
                                var n = e.value;
                                this.model.taskGroupId.push(n.id)
                            }
                        } catch (s) {
                            a.e(s)
                        } finally {
                            a.f()
                        }
                    }
                },
                "model.isGroup": function() {
                    this.getassign("", this.taskTypeSelected.id)
                }
            },
            mounted: function() {
                "add" == this.addOrEdit ? (this.getTaskNumber(),
                this.getPriority(),
                this.getTaskType(" "),
                this.getTagList(""),
                this.getRelatedTasks(""),
                this.subTask ? (this.model.masterTaskId = this.taskDetails.taskId,
                this.model.masterTaskNumber = this.taskDetails.taskNumber,
                this.model.masterTaskStep = this.taskDetails.currentStep) : this.relatedTask && (this.model.masterTaskStep = this.taskDetails.currentStep)) : this.getTaskById(),
                this.$root.$on("bv::collapse::state", (function(t, e) {
                    if (e) {
                        var a = document.querySelector("." + t + " > i.rotatable");
                        a && a.classList.add("fa-rotate-90")
                    } else {
                        var n = document.querySelector("." + t + " > i.rotatable");
                        n && n.classList.remove("fa-rotate-90")
                    }
                }
                )),
                this.getisDocumentationCompulsory()
            },
            beforeDestroy: function() {
                this.$root.$off("bv::collapse::state", (function() {}
                ))
            },
            methods: {
                initModel: function() {
                    this.model = {
                        id: "00000000-0000-0000-0000-000000000000",
                        branchId: "00000000-0000-0000-0000-000000000000",
                        number: null,
                        taskDescription: null,
                        status: 0,
                        createdAt: b()().format("YYYY-MM-DD"),
                        createdBy: "00000000-0000-0000-0000-000000000000",
                        otherDetails: null,
                        masterTaskId: "00000000-0000-0000-0000-000000000000",
                        masterTaskNumber: null,
                        percentagesToMaster: 0,
                        targetDate: b()().format("YYYY-MM-DD"),
                        targetTime: "",
                        masterTask: !1,
                        targetCriteria: null,
                        taskGroupId: null,
                        tags: [],
                        adnlData: {
                            id: "00000000-0000-0000-0000-000000000000",
                            typeName: null,
                            referenceId: "00000000-0000-0000-0000-000000000000",
                            adnlData: {},
                            actionDate: "0001-01-01T00:00:00",
                            userId: "00000000-0000-0000-0000-000000000000"
                        },
                        taskType: "00000000-0000-0000-0000-000000000000",
                        daysOffsetFromDue: 0,
                        clonable: !1,
                        delegatable: !1,
                        priority: 0,
                        completedDate: "0001-01-01T00:00:00",
                        iscloned: !1,
                        actionDate: b()().format("YYYY-MM-DD"),
                        userId: "00000000-0000-0000-0000-000000000000",
                        draftId: "00000000-0000-0000-0000-000000000000",
                        approvalStatus: 0,
                        version: 0,
                        assignedTo: null,
                        selfAssigned: !1,
                        individualTasks: !1,
                        taskChats: null,
                        taskSubscribers: null,
                        subscribersTasks: null,
                        customCron: "",
                        approvalRequired: !1,
                        typeName: "",
                        recurringTask: {
                            taskId: "00000000-0000-0000-0000-000000000000",
                            recurringData: {
                                repeatEvery: 1,
                                repeatEveryType: "",
                                repeatOn: "",
                                customExpression: "",
                                endOn: "",
                                endDate: b()().format("YYYY-MM-DD")
                            },
                            recurringOn: "0001-01-01T00:00:00",
                            adnlData: null
                        },
                        workFlowBased: !1,
                        isGroup: !1,
                        awaitSubTaskCompletion: !1,
                        isDocumentationRequired: !1
                    }
                },
                getReadableDate: function(t) {
                    return t ? b()(t).format("DD/MM/YYYY") : "-"
                },
                getTaskById: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/getbyid";
                    Object(v["a"])(e, "post", {
                        id: this.editTaskId
                    }).then((function(e) {
                        if (t.model = e.data.data,
                        t.flatPicConfig = {
                            wrap: !0,
                            dateFormat: "Y-m-d",
                            altFormat: "d/m/Y",
                            altInput: !0,
                            allowInput: !1,
                            enableTime: !1,
                            time_24hr: !1,
                            disableMobile: !0,
                            minDate: t.model.createdAt
                        },
                        t.getPriority(),
                        t.getTaskType(" "),
                        t.model.tags)
                            try {
                                t.model.tags = JSON.parse(t.model.tags)
                            } catch (a) {
                                t.model.tags = []
                            }
                        t.taskTypeSelected = {},
                        t.model.taskType && (t.taskTypeSelected.id = t.model.taskType),
                        t.model.typeName && (t.taskTypeSelected.value = t.model.typeName),
                        t.model.isSubTask ? (console.log("s"),
                        t.$emit("update:subTask", !0)) : t.$emit("update:subTask", !1)
                    }
                    )).catch((function(t) {
                        console.log(t)
                    }
                    ))
                },
                getTagList: function(t) {
                    var e = this
                      , a = "/api/bitTask/Tag/autocomplete?searchQuery=" + t;
                    Object(v["a"])(a, "get", "").then((function(t) {
                        e.tagList = t.data
                    }
                    )).catch((function(t) {}
                    ))
                },
                getRelatedTasks: function(t) {
                    var e = this
                      , a = "/api/bitTask/Tasks/autocomplete?searchQuery=" + t;
                    Object(v["a"])(a, "get", "").then((function(t) {
                        e.relatedTaskList = t.data,
                        e.taskDetails.taskId && (e.relatedTaskList.map((function(t) {
                            t.id == e.taskDetails.taskId && e.relatedTaskSelected.push(JSON.parse(JSON.stringify(t)))
                        }
                        )),
                        0 == e.relatedTaskList.filter((function(t) {
                            return t.id == e.taskDetails.taskId
                        }
                        ))["length"] && e.getRelatedTasks(e.taskDetails.taskNumber))
                    }
                    )).catch((function() {}
                    ))
                },
                getTaskTypeAddnlData: function(t, e) {
                    var a = this;
                    if (t && e) {
                        var n = "/api/bitTask/Tasks/getEventbyType?eventType=" + t + "&typeId=" + e;
                        Object(v["a"])(n, "get", "").then((function(e) {
                            if (e.data && e.data.data)
                                switch (t) {
                                case 1:
                                    e.data.data.schema ? a.schema.schema = e.data.data.schema : a.schema.schema = [];
                                    break;
                                case 2:
                                    e.data.data.schema ? a.schema.createdSchema = e.data.data.schema : a.schema.createdSchema = [];
                                    break;
                                default:
                                    break
                                }
                        }
                        )).catch((function(t) {
                            console.log(t)
                        }
                        ))
                    }
                },
                getassign: function(t, e) {
                    var a = this
                      , n = !0;
                    this.taskTypeSelected.workFlowBased || (n = !1);
                    var s = "/api/bitTask/Tasks/getAssigneev2?typeId=" + e + "&filterResult=" + n + "&isGroup=" + this.model.isGroup + "&contains=" + t;
                    console.log(t),
                    Object(v["a"])(s, "get", "").then((function(t) {
                        a.assigneesList = t.data.data
                    }
                    )).catch((function() {}
                    ))
                },
                getPriority: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/TaskPriorities";
                    Object(v["a"])(e, "get", "").then((function(e) {
                        if (t.priorityList = e.data.data,
                        "edit" == t.addOrEdit) {
                            if (t.model.priority) {
                                var a, n = Object(d["a"])(t.priorityList);
                                try {
                                    for (n.s(); !(a = n.n()).done; ) {
                                        var s = a.value;
                                        s.id == t.model.priority && (t.prioritySelected = s)
                                    }
                                } catch (o) {
                                    n.e(o)
                                } finally {
                                    n.f()
                                }
                            }
                        } else
                            t.priorityList.map((function(e) {
                                "Normal" == e.name && (t.prioritySelected = JSON.parse(JSON.stringify(e)))
                            }
                            ))
                    }
                    )).catch((function() {}
                    ))
                },
                getTaskType: function() {
                    var t = Object(c["a"])(regeneratorRuntime.mark((function t(e) {
                        var a, n = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    a = "/api/bitTask/TaskTypes/userbasedtypes?WorkFlowBasedOnly=false&searchQuery=" + e,
                                    Object(v["a"])(a, "get", "").then((function(t) {
                                        n.taskTypeList = t.data.data,
                                        "add" != n.addOrEdit || n.taskTypeSelected || n.taskTypeList.map((function(t) {
                                            "Generic" == t.value && (n.taskTypeSelected = JSON.parse(JSON.stringify(t)))
                                        }
                                        ))
                                    }
                                    )).catch((function() {}
                                    ));
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                addTag: function(t) {
                    this.tagList.push(t),
                    this.model.tags.push(t)
                },
                daySelected: function(t) {
                    t.active = !t.active,
                    this.model.recurringTask.recurringData.repeatOn = [];
                    var e, a = Object(d["a"])(this.dayList);
                    try {
                        for (a.s(); !(e = a.n()).done; ) {
                            var n = e.value;
                            n.active && this.model.recurringTask.recurringData.repeatOn.push(n.dayId)
                        }
                    } catch (s) {
                        a.e(s)
                    } finally {
                        a.f()
                    }
                },
                convertCronTOString: function(t) {
                    var e = document.querySelector(".customCronText");
                    try {
                        return e && (e.classList.remove("text-danger"),
                        e.classList.add("text-primary")),
                        _.a.toString(t)
                    } catch (a) {
                        return e && (e.classList.remove("text-primary"),
                        e.classList.add("text-danger")),
                        a
                    }
                },
                getTaskNumber: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/GetNumber?MasterTaskId=";
                    this.subTask && this.taskDetails && this.taskDetails.taskId && (e += this.taskDetails.taskId),
                    Object(v["a"])(e, "get", "").then((function(e) {
                        t.model.number = e.data.data
                    }
                    )).catch((function(t) {}
                    ))
                },
                openCronHelperModal: function() {
                    this.$refs.cronHelperModal.Open()
                },
                closeCronHelperModal: function() {
                    this.$refs.cronHelperModal.Close()
                },
                beforeSave: function(t) {
                    t || (this.schema.createdSchema.length > 0 ? this.$refs.taskCreatedModal.Open() : this.OnSave())
                },
                OnSave: function(t) {
                    var e = this;
                    this.isDocumentationCompulsory && (this.model.isDocumentationRequired = !0);
                    var a = this.$refs.common
                      , n = "";
                    n = "add" == this.addOrEdit ? "/api/bitTask/Tasks/add" : "/api/bitTask/Tasks/edit";
                    var s = JSON.parse(JSON.stringify(this.model));
                    s.adnlData && (s.adnlData.adnlData = JSON.stringify(s.adnlData.adnlData)),
                    s.tags = JSON.stringify(s.tags),
                    s.recurringTask && s.recurringTask.recurringData && (s.recurringTask.recurringData = JSON.stringify(s.recurringTask.recurringData)),
                    s.assignedTo = [];
                    var o, r = Object(d["a"])(this.assigneesSelected);
                    try {
                        for (r.s(); !(o = r.n()).done; ) {
                            var i = o.value;
                            s.assignedTo.push(i.id)
                        }
                    } catch (l) {
                        r.e(l)
                    } finally {
                        r.f()
                    }
                    Object(v["a"])(n, "post", s).then((function(t) {
                        e.$emit("taskCreated", t)
                    }
                    )).catch((function(t) {
                        console.log(t),
                        a.ManageResponse(t.response)
                    }
                    ))
                },
                OnCancel: function() {},
                closeRepeatedTaskModal: function() {
                    this.$refs.repeatedTaskModal.Close()
                },
                getPendingTaskLists: function() {
                    var t = this
                      , e = this.assigneesSelected.map((function(t) {
                        return t.id
                    }
                    )).join();
                    if (e) {
                        var a = "/api/bitTask/Tasks/GetPendingTaskLists?subscriberIds=" + e;
                        Object(v["a"])(a, "get", "").then((function(e) {
                            t.pendingTaskList = e.data.data,
                            t.pendingTaskList.length > 0 && t.$refs.pendingTaskListModal.Open()
                        }
                        )).catch((function(t) {}
                        ))
                    }
                },
                closePendingModal: function() {
                    this.$refs.pendingTaskListModal.Close()
                },
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : b()(t).format("DD-MM-YYYY")
                },
                getisDocumentationCompulsory: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/IsDocumentationCompulsory";
                    Object(v["a"])(e, "get", "").then((function(e) {
                        t.isDocumentationCompulsory = e.data.data,
                        t.isDocumentationCompulsory && (t.model.isDocumentationRequired = !0)
                    }
                    )).catch((function(t) {}
                    ))
                }
            }
        }
          , w = x
          , S = (a("4a4d"),
        a("4d9f"),
        a("2877"))
          , D = Object(S["a"])(w, i, l, !1, null, "22ab9534", null)
          , M = D.exports
          , O = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "mt-2"
            }, [a("common", {
                ref: "common"
            }), a("slide-out", {
                ref: "showTask",
                staticClass: "task-view",
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
            }) : t._e()], 1)]), a("div", {
                staticStyle: {
                    "max-width": "100vw",
                    "overflow-x": "auto"
                }
            }, [a("div", {
                class: t.dWidth > 768 ? "d-flex" : "row"
            }, t._l(t.taskList, (function(e, n) {
                return a("b-col", {
                    key: n,
                    staticClass: "mb-12 kanban-card",
                    attrs: {
                        lg: "5",
                        xl: "4",
                        md: "6",
                        sm: "12",
                        xs: "12"
                    }
                }, [a("b-card", {
                    staticClass: "dp-zoom-enter-2"
                }, [a("div", {
                    staticClass: "d-flex justify-content-between mb-3"
                }, [a("p", {
                    staticClass: "card-title m-0"
                }, [t._v(" " + t._s(e.statusName) + " ")]), a("div", {
                    staticClass: "btn-group"
                })]), a("b-row", [a("div", {
                    staticClass: "col-md-12",
                    staticStyle: {
                        "max-height": "68vh",
                        "min-height": "68vh",
                        overflow: "auto",
                        "padding-top": "10px"
                    }
                }, [a("draggable", t._b({
                    attrs: {
                        handle: ".isdraggable",
                        list: e.tasks,
                        group: {
                            name: "taskList" + n,
                            put: !0
                        },
                        emptyInsertThreshold: 200
                    },
                    on: {
                        start: function(e) {
                            t.drag = !0
                        },
                        end: function(e) {
                            t.drag = !1
                        },
                        change: function(a) {
                            return t.taskMoved(a, e.id)
                        }
                    }
                }, "draggable", t.dragOptions, !1), [a("transition-group", {
                    key: "pending" + n,
                    attrs: {
                        type: "transition",
                        name: t.drag ? null : "flip-list" + n
                    }
                }, [t._l(e.tasks, (function(e, s) {
                    return a("div", {
                        key: s
                    }, [t.showSoloCard(e) ? a("soloTaskCard", {
                        class: e.workFlowBased ? "dp-zoom-enter" : t.dWidth > 768 ? "dp-zoom-enter isdraggable" : "dp-zoom-enter",
                        attrs: {
                            taskCard: e,
                            parentIndex: n,
                            index: s,
                            normalSubMenuList: t.normalSubMenuList,
                            selectedTab: t.selectedTab
                        },
                        on: {
                            "update:normalSubMenuList": function(e) {
                                t.normalSubMenuList = e
                            },
                            "update:normal-sub-menu-list": function(e) {
                                t.normalSubMenuList = e
                            },
                            "update:selectedTab": function(e) {
                                t.selectedTab = e
                            },
                            "update:selected-tab": function(e) {
                                t.selectedTab = e
                            },
                            OpenTaskcard: t.OpenTaskcard,
                            openSubtask: t.openSubtask,
                            openRelatedtask: t.openRelatedtask,
                            refreshTaskList: t.refreshTaskList,
                            submenuIsClicked: t.submenuClicked,
                            subTaskMenuHandler: t.subTaskMenuHandler,
                            deleteTask: t.taskDeletemessage,
                            openTaskTimeline: t.openTaskTimeline,
                            openTaskForEdit: t.openTaskForEdit,
                            openClonetask: t.openClonetask,
                            openTransfertask: t.openTransfertask,
                            openSnoozetask: t.openSnoozetask,
                            taskFileUpload: t.taskFileUpload,
                            moveTaskToProcessing: t.moveTaskToProcessing,
                            ManageResponse: t.manageResponse,
                            markTaskComplete: t.openmarkTaskComplete,
                            taskDescriptionUpdated: t.taskDescriptionUpdated
                        }
                    }) : t._e(), e.isWrapper ? a("soloTaskCardWrapper", {
                        staticClass: "dp-zoom-enter",
                        attrs: {
                            taskCard: e
                        },
                        on: {
                            taskCancelClicked: function(a) {
                                return t.taskWrapperCancelClicked(e)
                            },
                            taskPostponeClicked: function(a) {
                                return t.taskWrapperPostponeClicked(e)
                            },
                            taskScheduleClicked: function(a) {
                                return t.taskWrapperScheduleClicked(e)
                            }
                        }
                    }) : t._e(), .01 == e.status ? a("SoloTaskAcceptanceCard", {
                        staticClass: "dp-zoom-enter",
                        attrs: {
                            taskCard: e
                        },
                        on: {
                            taskRejectClicked: function(a) {
                                return t.openRejectTask(e)
                            },
                            taskAcceptClicked: function(a) {
                                return t.taskWrapperAcceptClicked(e)
                            }
                        }
                    }) : t._e(), 91.5 != e.status && 91.6 != e.status || 0 != t.selectedTab ? t._e() : a("SoloTaskAapprovalCard", {
                        staticClass: "dp-zoom-enter",
                        attrs: {
                            taskCard: e
                        },
                        on: {
                            OpenTaskcard: t.OpenTaskcard,
                            taskApprovalRejectClicked: function(a) {
                                return t.openApprovalTaskReject(e)
                            },
                            taskApprovedClicked: function(a) {
                                return t.taskApprovedClicked(e)
                            }
                        }
                    }), 95.6 == e.status && 2 == t.selectedTab ? a("SoloTaskDocumentCard", {
                        staticClass: "dp-zoom-enter",
                        attrs: {
                            taskCard: e
                        },
                        on: {
                            OpenTaskcard: t.OpenTaskcard,
                            taskDocumentedClicked: function(a) {
                                return t.opentaskDocumentedClicked(e)
                            }
                        }
                    }) : t._e()], 1)
                }
                )), e.totalCount > e.tasks.length ? a("div", {
                    key: "loadmore" + n,
                    staticClass: "text-center"
                }, [a("button", {
                    staticClass: "btn btn-block btn-outline-primary btn-refresh border-0",
                    staticStyle: {
                        position: "relative",
                        top: "0.55em"
                    },
                    on: {
                        click: function(a) {
                            return t.lazyloadTask(t.selectedTab + 1, n, e.fromValue, e.toValue, e.pageNo, "")
                        }
                    }
                }, [a("i", {
                    staticClass: "fa fa-refresh"
                }), t._v(" Load More ")])]) : t._e()], 2)], 1)], 1)])], 1)], 1)
            }
            )), 1)]), a("customModal", {
                ref: "customContentOnStatusChange",
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
            }, [t._v("Additional Options")]), a("div", {
                staticClass: "pl-0",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [a("ValidationObserver", {
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        var n = e.invalid
                          , s = e.handleSubmit;
                        return [t.schema.schema.length > 0 && void 0 != t.schema.schema.find((function(t) {
                            return "taskStatusChangedSlot" == t.slot
                        }
                        )) ? a("div", {
                            staticClass: "pt-2"
                        }, [a("dpDynamic", {
                            staticClass: "native-validator-parent-2",
                            attrs: {
                                schema: t.schema.schema.find((function(t) {
                                    return "taskStatusChangedSlot" == t.slot
                                }
                                )),
                                model: t.schema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.schema, "model", e)
                                }
                            }
                        })], 1) : t._e(), a("button", {
                            staticClass: "float-right btn btn-success",
                            attrs: {
                                disabled: n
                            },
                            on: {
                                click: function(e) {
                                    return s(t.OnStatusChanged)
                                }
                            }
                        }, [t._v(" Save ")])]
                    }
                }])
            })], 1)]), a("customModal", {
                ref: "customContentOnTriggerModal",
                staticStyle: {
                    "z-index": "2000"
                },
                attrs: {
                    modalClass: t.customContentOnTriggerModalSize,
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
                ref: "customContentSchemaWrapperRef",
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        e.invalid,
                        e.handleSubmit;
                        return [a("dpDynamic", {
                            staticClass: "native-validator-parent-2",
                            attrs: {
                                refName: "customContentSchemaRef",
                                schema: t.schema.initiatorSchema.schema[0],
                                model: t.schema.initiatorSchema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.schema.initiatorSchema, "model", e)
                                }
                            }
                        })]
                    }
                }])
            })], 1)])]), a("customModal", {
                ref: "onRescheduleTriggerModal",
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
                        e.invalid,
                        e.handleSubmit;
                        return [a("dpDynamic", {
                            staticClass: "native-validator-parent-2",
                            attrs: {
                                schema: t.schema.rescheduleSchema.schema[0],
                                model: t.schema.rescheduleSchema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.schema.rescheduleSchema, "model", e)
                                }
                            }
                        })]
                    }
                }])
            })], 1)])]), a("customModal", {
                ref: "openClonetaskModal",
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
                        var n = e.invalid;
                        e.handleSubmit;
                        return [a("dpDynamic", {
                            staticClass: "native-validator-parent-3",
                            attrs: {
                                schema: t.cloneTaskSchema.schema,
                                model: t.cloneTaskSchema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.cloneTaskSchema, "model", e)
                                }
                            }
                        }), a("button", {
                            staticClass: "btn btn-primary pull-right",
                            attrs: {
                                disabled: n
                            },
                            on: {
                                click: function(e) {
                                    return t.handlerForCloneAndTransferSave(t.cloneTaskSchema.model, "/api/bitTask/Tasks/normalTaskClone")
                                }
                            }
                        }, [t._v(" Clone ")])]
                    }
                }])
            })], 1)])]), a("customModal", {
                ref: "openTransfertaskModal",
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
                        var n = e.invalid
                          , s = e.handleSubmit;
                        return [a("dpDynamic", {
                            staticClass: "native-validator-parent-4",
                            attrs: {
                                schema: t.transferTaskschema.schema,
                                model: t.transferTaskschema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.transferTaskschema, "model", e)
                                }
                            }
                        }), a("button", {
                            staticClass: "btn btn-primary pull-right",
                            attrs: {
                                disabled: n
                            },
                            on: {
                                click: function(e) {
                                    s(t.handlerForCloneAndTransferSave(t.transferTaskschema.model, "/api/bitTask/Tasks/normalTaskTransfer"))
                                }
                            }
                        }, [t._v(" Transfer ")])]
                    }
                }])
            })], 1)])]), a("customModal", {
                ref: "openRejecttaskModal",
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
                        var n = e.invalid
                          , s = e.handleSubmit;
                        return [a("dpDynamic", {
                            staticClass: "native-validator-parent-4",
                            attrs: {
                                schema: t.rejectTaskschema.schema,
                                model: t.rejectTaskschema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.rejectTaskschema, "model", e)
                                }
                            }
                        }), a("button", {
                            staticClass: "btn btn-danger pull-right",
                            attrs: {
                                disabled: n
                            },
                            on: {
                                click: function(e) {
                                    s(t.taskWrapperRejectClicked(t.selectedCard, t.rejectTaskschema.model))
                                }
                            }
                        }, [t._v(" Reject ")])]
                    }
                }])
            })], 1)])]), a("customModal", {
                ref: "approvalRejecttaskModal",
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
                        var n = e.invalid
                          , s = e.handleSubmit;
                        return [a("dpDynamic", {
                            staticClass: "native-validator-parent-4",
                            attrs: {
                                schema: t.approvalTaskRejectschema.schema,
                                model: t.approvalTaskRejectschema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.approvalTaskRejectschema, "model", e)
                                }
                            }
                        }), a("button", {
                            staticClass: "btn btn-danger pull-right",
                            attrs: {
                                disabled: n
                            },
                            on: {
                                click: function(e) {
                                    s(t.taskApprovalRejectClicked(t.selectedCard, t.approvalTaskRejectschema.model))
                                }
                            }
                        }, [t._v(" Reject ")])]
                    }
                }])
            })], 1)])]), a("customModal", {
                ref: "taskDeleteModal",
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
                        var n = e.invalid
                          , s = e.handleSubmit;
                        return [a("dpDynamic", {
                            staticClass: "native-validator-parent-4",
                            attrs: {
                                schema: t.taskDeleteschema.schema,
                                model: t.taskDeleteschema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.taskDeleteschema, "model", e)
                                }
                            }
                        }), a("button", {
                            staticClass: "btn btn-danger pull-right",
                            attrs: {
                                disabled: n
                            },
                            on: {
                                click: function(e) {
                                    s(t.taskWrapperDeleteClicked(t.selectedCard, t.taskDeleteschema.model))
                                }
                            }
                        }, [t._v(" Delete ")])]
                    }
                }])
            })], 1)])]), a("customModal", {
                ref: "openSnoozeTaskModal",
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
            }, [a("div", {
                staticClass: "row form-group"
            }, [a("label", {
                staticClass: "col-lg-3 field-required",
                staticStyle: {
                    "font-size": "13px"
                },
                attrs: {
                    for: "Name"
                }
            }, [t._v(" Snooze Until ")]), a("div", {
                staticClass: "col-lg-9"
            }, [a("flat-pickr", {
                staticClass: "form-control",
                attrs: {
                    required: "",
                    config: t.flatPicConfig,
                    name: "Snooze Until"
                },
                model: {
                    value: t.snoozeTaskModel.snoozeUntil,
                    callback: function(e) {
                        t.$set(t.snoozeTaskModel, "snoozeUntil", e)
                    },
                    expression: "snoozeTaskModel.snoozeUntil"
                }
            })], 1)]), a("button", {
                staticClass: "btn btn-primary pull-right",
                on: {
                    click: t.handleTaskSnooze
                }
            }, [t._v(" Snooze ")])])])]), a("customModal", {
                ref: "openTaskFileUploadModal",
                staticStyle: {
                    "z-index": "2000"
                },
                attrs: {
                    modalClass: "large",
                    defaultCloseBtn: "false"
                },
                on: {
                    doOnModalClose: t.taskFileUploadModalClosed,
                    ModalBtnClosed: t.taskFileUploadModalClosed
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
                        return [a("dpDynamic", {
                            staticClass: "native-validator-parent-4",
                            attrs: {
                                schema: t.taskFileUploadschema.schema,
                                model: t.taskFileUploadschema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.taskFileUploadschema, "model", e)
                                }
                            }
                        }), a("button", {
                            staticClass: "btn btn-primary pull-right mt-2 mr-2",
                            on: {
                                click: function(e) {
                                    return t.handlerForTaskFileUploadSave(t.taskFileUploadschema.model, "/api/bitTask/Tasks/NormalTaskFileUpload")
                                }
                            }
                        }, [t._v(" Upload ")])]
                    }
                }])
            })], 1)])]), a("customModal", {
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
                        var n = e.invalid
                          , s = e.handleSubmit;
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
                                disabled: n
                            },
                            on: {
                                click: function(e) {
                                    s(t.markTaskComplete(t.selectedCard, t.taskCompletionschema.model))
                                }
                            }
                        }, [t._v(" Complete ")])]
                    }
                }])
            })], 1)])]), a("customModal", {
                ref: "taskDocumentaionCompleteModal",
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
                        return [a("dpDynamic", {
                            staticClass: "native-validator-parent-4",
                            attrs: {
                                schema: t.taskDocumentationschema.schema,
                                model: t.taskDocumentationschema.model
                            },
                            on: {
                                "update:model": function(e) {
                                    return t.$set(t.taskDocumentationschema, "model", e)
                                }
                            }
                        }), a("button", {
                            staticClass: "btn btn-success pull-right",
                            on: {
                                click: function(e) {
                                    return t.taskDocumentedClicked(t.selectedCard, t.taskDocumentationschema.model)
                                }
                            }
                        }, [t._v(" Complete ")])]
                    }
                }])
            })], 1)])]), a("slide-out", {
                ref: "showTaskTimelineSlideoutRef",
                staticClass: "task-view",
                attrs: {
                    visible: t.showTaskTimelineSlideout,
                    dock: "right",
                    size: t.dWidth > 768 ? "90%" : "100%",
                    title: "Task Timeline",
                    "append-to": "#bittaskbody",
                    "allow-resize": ""
                },
                on: {
                    "update:visible": function(e) {
                        t.showTaskTimelineSlideout = e
                    },
                    close: t.taskTimelineClose
                }
            }, [t.showTaskTimelineSlideout ? a("div", [t.taskTimelineDataHeader ? a("taskCardViewHeader", {
                ref: "taskCardViewHeaderRef",
                staticClass: "mb-2",
                attrs: {
                    taskData: t.taskTimelineDataHeader,
                    headerBg: "#f1f1f1",
                    selectedTab: t.selectedTab
                },
                on: {
                    OpenSubTaskcard: t.OpenSubTaskFromTimeline,
                    "update:selectedTab": function(e) {
                        t.selectedTab = e
                    },
                    "update:selected-tab": function(e) {
                        t.selectedTab = e
                    }
                }
            }) : t._e(), a("h4", {
                staticClass: "col-12 pl-2"
            }, [a("span", [t._v("Timeline")])]), a("div", {
                staticClass: "container"
            }, [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "col-md-12"
            }, [t.taskTimelineData["length"] > 0 ? a("ul", {
                staticClass: "timeline"
            }, t._l(t.taskTimelineData, (function(e, n) {
                return a("li", {
                    key: n,
                    staticClass: "event",
                    attrs: {
                        "data-date": new Date(e.createdAt).toDateString() + " - " + new Date(e.createdAt).toLocaleTimeString()
                    }
                }, [a("h3", [t._v(t._s(e.stepName))]), a("p", [a("adnlDataViewer", {
                    staticClass: "mt-1",
                    attrs: {
                        viewData: e
                    }
                })], 1)])
            }
            )), 0) : a("ul", {
                staticClass: "text-center pl-0 text-gray-600"
            }, [t._v(" No timeline to show ")])])])]), t.taskTimelineDataHeader ? a("subTaskViewer", {
                attrs: {
                    taskData: t.taskTimelineDataHeader
                },
                on: {
                    OpenSubTaskcard: t.OpenSubTaskFromTimeline
                }
            }) : t._e()], 1) : t._e()])], 1)
        }
          , E = []
          , A = (a("99af"),
        a("4160"),
        a("a9e3"),
        a("159b"),
        a("310e"))
          , R = a.n(A)
          , I = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [t.taskCard ? a("b-card", {
                staticClass: "mb-30 c-default parent-to-hover",
                attrs: {
                    "body-class": "pb-0 pt-2",
                    "footer-class": "py-0 px-2"
                }
            }, [a("div", {
                staticClass: "d-flex align-item-center"
            }, [a("div", {
                staticClass: "col-9 px-0"
            }, [a("div", {
                staticClass: "solo-card-title trim-text"
            }, [a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "c-pointer underline-on-hover",
                attrs: {
                    title: t.taskCard.title
                },
                on: {
                    click: function(e) {
                        return t.OpenTaskcard(t.taskCard)
                    }
                }
            }, [t._v(t._s(t.taskCard.title) + " ")])]), a("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.taskCard.stepName,
                    expression: "taskCard.stepName"
                }, {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "mb-1 200 py-1 trim-text text-left",
                staticStyle: {
                    width: "95%",
                    color: "#884600"
                },
                attrs: {
                    title: t.taskCard.stepName
                }
            }, [t._v(" " + t._s(t.taskCard.stepName) + " ")]), a("h5", {
                staticClass: "badge badge-outline-primary mb-1"
            }, [t._v(" " + t._s(t.normaliseDate(t.taskCard.createdAt)) + " ")]), t.taskCard.awaitingAcceptanceStatus && 1 == t.selectedTab ? a("b-input-group", {
                staticClass: "ma-1",
                attrs: {
                    size: "sm"
                }
            }, [t.descriptionEditMode ? a("b-form-textarea", {
                staticClass: "form-control my-1 border-on-hover bg-transparent",
                staticStyle: {
                    resize: "none"
                },
                attrs: {
                    id: "textarea",
                    rows: "2",
                    "max-rows": "3",
                    size: "sm",
                    placeholder: "Enter Description"
                },
                model: {
                    value: t.taskCard.taskDescription,
                    callback: function(e) {
                        t.$set(t.taskCard, "taskDescription", e)
                    },
                    expression: "taskCard.taskDescription"
                }
            }) : a("p", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "bg-transparent form-control border-0 my-1 trim-text",
                attrs: {
                    title: t.taskCard.taskDescription
                }
            }, [t._v(" " + t._s(t.taskCard.taskDescription) + " ")]), a("b-input-group-append", [t.descriptionEditMode ? a("b-button", {
                staticStyle: {
                    height: "50px !important"
                },
                attrs: {
                    variant: "outline-primary"
                },
                on: {
                    click: t.taskDescriptionUpdated
                }
            }, [a("i", {
                staticClass: "fa fa-check"
            })]) : a("b-button", {
                staticClass: "ml-2 mt-1",
                attrs: {
                    variant: "outline-primary"
                },
                on: {
                    click: function(e) {
                        t.descriptionEditMode = !0
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-pencil-square"
            })])], 1)], 1) : a("p", {
                staticClass: "mb-0"
            }, [t._v(" " + t._s(t.taskCard.taskDescription) + " ")]), t.taskCard.message ? a("div", {
                staticClass: "d-flex badge mb-0",
                staticStyle: {
                    "background-color": "#f4f0ff",
                    "padding-bottom": "2px",
                    "font-size": "0.7rem"
                }
            }, [a("i", {
                staticClass: "fa fa-comment mr-1",
                attrs: {
                    "aria-hidden": "true"
                }
            }), a("div", {
                staticClass: "trim-text",
                attrs: {
                    id: "normal" + t.taskCard.id,
                    title: t.taskCard.message
                }
            }, [t._v(" " + t._s(t.changeColor("normal" + t.taskCard.id, t.taskCard.message)) + " ")])]) : t._e()], 1), a("ul", {
                staticClass: "list list-unstyled mb-0 ml-auto"
            }, [a("li", {
                staticClass: "t-a-r mb-1 c-default c-pointer",
                on: {
                    click: function(e) {
                        return t.OpenTaskcard(t.taskCard)
                    }
                }
            }, [a("span", {
                staticClass: "ul-task-manager__font-date badge badge-primary c-pointer"
            }, [t._v(" " + t._s(t.taskCard.number) + " ")])]), a("li", {
                staticClass: "t-a-r mb-1"
            }, [a("span", {
                staticClass: "badge badge-danger c-pointer",
                on: {
                    click: t.changeTaskPriority
                }
            }, [t._v(" " + t._s(t.getReadablePriority(t.taskCard.priority)) + " ")])]), a("li", {
                staticClass: "t-a-r c-default"
            }, [a("span", {
                staticClass: "pr-1",
                staticStyle: {
                    "font-size": "10px"
                }
            }, [t._v(" Due on: ")]), a("span", {
                staticClass: "badge badge-gray-300 c-pointer",
                staticStyle: {
                    "font-size": "0.9em"
                },
                on: {
                    click: t.openDueDateModal
                }
            }, [t._v(" " + t._s(t.normaliseDate(t.taskCard.targetDate)) + " ")]), a("span", {
                staticClass: "badge badge-gray-300 c-pointer",
                staticStyle: {
                    "font-size": "0.9em"
                },
                on: {
                    click: t.openDueTimeModal
                }
            }, [t._v(" " + t._s(t.taskCard.targetTime) + " ")])]), 1 == t.selectedTab && t.taskCard.acceptedTime && "0001-01-01T00:00:00" != t.taskCard.acceptedTime ? a("li", {
                staticClass: "t-a-r c-default"
            }, [a("span", {
                staticClass: "pr-1",
                staticStyle: {
                    "font-size": "10px"
                }
            }, [t._v(" Accepted: ")]), a("span", {
                staticClass: "badge badge-gray-300 ",
                staticStyle: {
                    "font-size": "0.9em"
                }
            }, [t._v(" " + t._s(t.normaliseDate(t.taskCard.acceptedTime)) + " ")]), a("span", {
                staticClass: "badge badge-gray-300 ",
                staticStyle: {
                    "font-size": "0.9em"
                }
            }, [t._v(" " + t._s(t.normaliseTime(t.taskCard.acceptedTime)) + " ")])]) : t._e()])]), a("div", {
                staticClass: "row mx-0 c-default"
            }, [1 != t.selectedTab ? a("div", {
                staticClass: "col-7 pl-0 pb-0 d-flex",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [t._v(" Assigned by: "), a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "text-primary font-weight-bold",
                attrs: {
                    title: t.taskCard.createdByEmail
                }
            }, [t._v(" " + t._s("00000000-0000-0000-0000-000000000000" == t.taskCard.createdBy ? "System" : t.taskCard.createdByName))])]) : t._e(), 1 == t.selectedTab ? a("div", {
                staticClass: "col-7 pl-0 pb-0 d-flex",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("span", {
                staticClass: "mr-1"
            }, [t._v(" Assigned To: ")]), a("span", {
                staticClass: "text-primary font-weight-bold"
            }, [t._v(" " + t._s(t.taskCard.assignees ? t.taskCard.assignees : "System"))]), t.taskCard.awaitingAcceptanceStatus ? a("span", {
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
            })]) : t._e()]) : t._e(), 1 == t.selectedTab && !t.taskCard.awaitingAcceptanceStatus && t.taskCard.currentlyWith ? a("div", {
                staticClass: "col-7 pl-0 pb-0 d-flex",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("span", {
                staticClass: "mr-1"
            }, [t._v(" Accepted By: ")]), a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "text-primary font-weight-bold",
                attrs: {
                    title: t.taskCard.currentlyWithEmail
                }
            }, [t._v(" " + t._s(t.taskCard.currentlyWith) + " ")])]) : t._e(), a("div", {
                directives: [{
                    name: "b-popover",
                    rawName: "v-b-popover.hover.top",
                    value: "Progress: " + t.taskCard.status,
                    expression: "'Progress: ' + taskCard.status",
                    modifiers: {
                        hover: !0,
                        top: !0
                    }
                }],
                staticClass: "col pr-0 pl-40 mt-2"
            }, [a("b-progress", {
                staticClass: "mb-2",
                staticStyle: {
                    height: "6px"
                },
                attrs: {
                    value: t.taskCard.status,
                    variant: "warning"
                }
            })], 1)]), a("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [a("small", {
                staticClass: "text-muted d-flex align-items-center justify-content-between",
                staticStyle: {
                    height: "40px"
                }
            }, [.02 == t.taskCard.status && 0 == t.taskCard.subTasks["length"] ? a("div", {
                staticClass: "d-flex col-1 pl-0 pr-1"
            }, [a("span", {
                attrs: {
                    title: "Rollbacked"
                }
            }, [a("i", {
                staticClass: "fa fa-history",
                staticStyle: {
                    "font-size": "14px"
                },
                attrs: {
                    "aria-hidden": "true"
                }
            })])]) : t._e(), t.taskCard.subTasks["length"] > 0 ? a("div", {
                staticClass: "d-flex col-9 pl-0",
                staticStyle: {
                    "overflow-x": "auto",
                    "overflow-y": "hidden"
                }
            }, [.02 == t.taskCard.status ? a("span", {
                staticClass: "mt-12",
                attrs: {
                    title: "Rollbacked"
                }
            }, [a("i", {
                staticClass: "fa fa-history",
                staticStyle: {
                    "font-size": "14px"
                },
                attrs: {
                    "aria-hidden": "true"
                }
            })]) : t._e(), a("floatBtn", {
                attrs: {
                    subData: t.taskCard.subTasks,
                    taskCard: t.taskCard
                },
                on: {
                    openChat: t.openChat,
                    openTaskcard: t.OpenTaskcard
                }
            })], 1) : a("div"), a("div", {
                staticClass: "list-inline mb-0 mt-2 mt-sm-0"
            }, [95.5 != t.taskCard.status ? a("b-dropdown", {
                attrs: {
                    variant: "link p-2",
                    "toggle-class": "text-decoration-none px-0",
                    "no-caret": "",
                    right: ""
                }
            }, [a("template", {
                slot: "button-content"
            }, [a("i", {
                staticClass: "fa fa-ellipsis-v p-3",
                on: {
                    click: t.submenuClicked
                }
            })]), void 0 != t.normalSubMenuList.find((function(t) {
                return "Edit Task" == t
            }
            )) && 100 != t.taskCard.status ? a("b-dropdown-item", {
                on: {
                    click: function(e) {
                        return t.openTaskForEdit(t.taskCard)
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-edit text-primary"
            }), a("span", {
                staticClass: "font-weight-600"
            }, [t._v(" Edit Task")])]) : t._e(), void 0 != t.normalSubMenuList.find((function(t) {
                return "Attach File" == t
            }
            )) && 100 != t.taskCard.status ? a("b-dropdown-item", {
                on: {
                    click: function(e) {
                        return t.taskFileUpload(t.taskCard)
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-paperclip text-primary"
            }), a("span", {
                staticClass: "font-weight-600"
            }, [t._v(" Attach File")])]) : t._e(), t._l(t.taskCard.subMenuList, (function(e, n) {
                return a("b-dropdown-item", {
                    key: "subm" + n,
                    on: {
                        click: function(a) {
                            return t.subTaskMenuHandler(e)
                        }
                    }
                }, [a("i", {
                    class: e.icon
                }), a("span", {
                    staticClass: "font-weight-600"
                }, [t._v(" " + t._s(e.label))])])
            }
            )), void 0 != t.normalSubMenuList.find((function(t) {
                return "View Task Timeline" == t
            }
            )) ? a("b-dropdown-item", {
                on: {
                    click: function(e) {
                        return t.showTaskTimeline(t.taskCard)
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-list fa-rotate-180 text-primary"
            }), a("span", {
                staticClass: "font-weight-600"
            }, [t._v(" View Task Timeline")])]) : t._e(), void 0 != t.normalSubMenuList.find((function(t) {
                return "Complete Task" == t
            }
            )) ? a("b-dropdown-item", {
                on: {
                    click: function(e) {
                        return t.markTaskComplete()
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-check fa-fw text-primary"
            }), a("span", {
                staticClass: "font-weight-600"
            }, [t._v("Mark As Complete")])]) : t._e(), void 0 != t.normalSubMenuList.find((function(t) {
                return "Clone Task" == t
            }
            )) ? a("b-dropdown-item", {
                on: {
                    click: function(e) {
                        return t.openClonetask(t.taskCard)
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-copy text-primary"
            }), a("span", {
                staticClass: "font-weight-600"
            }, [t._v(" Clone Task ")])]) : t._e(), void 0 != t.normalSubMenuList.find((function(t) {
                return "Transfer Task" == t
            }
            )) ? a("b-dropdown-item", {
                on: {
                    click: function(e) {
                        return t.openTransfertask(t.taskCard)
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-paper-plane-o text-primary"
            }), a("span", {
                staticClass: "font-weight-600"
            }, [t._v(" Transfer Task ")])]) : t._e(), void 0 != t.normalSubMenuList.find((function(t) {
                return "Snooze Task" == t
            }
            )) ? a("b-dropdown-item", {
                on: {
                    click: function(e) {
                        return t.openSnoozetask(t.taskCard)
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-clock-o text-primary"
            }), a("span", {
                staticClass: "font-weight-600"
            }, [t._v(" Snooze Task ")])]) : t._e(), void 0 != t.normalSubMenuList.find((function(t) {
                return "Create Sub Task" == t
            }
            )) ? a("b-dropdown-item", {
                on: {
                    click: function(e) {
                        return t.openSubtask(t.taskCard)
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-mail-reply fa-rotate-180 text-primary"
            }), a("span", {
                staticClass: "font-weight-600"
            }, [t._v(" Create Sub Task ")])]) : t._e(), void 0 != t.normalSubMenuList.find((function(t) {
                return "Create Related Task" == t
            }
            )) ? a("b-dropdown-item", {
                on: {
                    click: function(e) {
                        return t.openRelatedtask(t.taskCard)
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-arrows-h text-primary"
            }), a("span", {
                staticClass: "font-weight-600"
            }, [t._v(" Create Related Task ")])]) : t._e(), void 0 != t.normalSubMenuList.find((function(t) {
                return "Delete Task" == t
            }
            )) ? a("b-dropdown-item", {
                on: {
                    click: function(e) {
                        return t.deleteTask(t.taskCard)
                    }
                }
            }, [a("i", {
                staticClass: "fa fa-trash text-danger"
            }), a("span", {
                staticClass: "font-weight-600"
            }, [t._v(" Terminate Task")])]) : t._e()], 2) : t._e()], 1)])])]) : t._e(), a("b-modal", {
                attrs: {
                    "hide-footer": "",
                    "hide-header": "",
                    centered: "",
                    size: "sm"
                },
                model: {
                    value: t.taskPriorityModal,
                    callback: function(e) {
                        t.taskPriorityModal = e
                    },
                    expression: "taskPriorityModal"
                }
            }, [a("h3", {
                staticClass: "text-center"
            }, [t._v("Choose a priority")]), a("br"), a("Multiselect", {
                attrs: {
                    options: t.priorityList,
                    label: "name",
                    "track-by": "id",
                    "show-labels": !1,
                    placeholder: "Type to search",
                    "preserve-search": !1,
                    "hide-selected": !1,
                    "allow-empty": !1
                },
                model: {
                    value: t.prioritySelected,
                    callback: function(e) {
                        t.prioritySelected = e
                    },
                    expression: "prioritySelected"
                }
            })], 1), a("b-modal", {
                attrs: {
                    "hide-footer": "",
                    "hide-header": "",
                    centered: "",
                    size: "sm"
                },
                model: {
                    value: t.changeDueDateModal,
                    callback: function(e) {
                        t.changeDueDateModal = e
                    },
                    expression: "changeDueDateModal"
                }
            }, [a("h3", {
                staticClass: "text-center"
            }, [t._v("Change due date")]), a("br"), a("flat-pickr", {
                staticClass: "form-control hide-input",
                attrs: {
                    config: t.configs.dueDateConfig
                },
                model: {
                    value: t.taskCard.targetDate,
                    callback: function(e) {
                        t.$set(t.taskCard, "targetDate", e)
                    },
                    expression: "taskCard.targetDate"
                }
            }), a("div", {
                staticClass: "col-12 pr-0 t-a-r pt-2"
            }, [a("button", {
                staticClass: "btn btn-primary",
                on: {
                    click: t.changeDueDate
                }
            }, [t._v("Update")])])], 1), a("b-modal", {
                attrs: {
                    "hide-footer": "",
                    "hide-header": "",
                    centered: "",
                    size: "sm"
                },
                model: {
                    value: t.changeDueTimeModal,
                    callback: function(e) {
                        t.changeDueTimeModal = e
                    },
                    expression: "changeDueTimeModal"
                }
            }, [a("h3", {
                staticClass: "text-center"
            }, [t._v("Change due time")]), a("br"), a("flat-pickr", {
                staticClass: "form-control hide-input",
                attrs: {
                    config: t.configs.dueTimeConfig
                },
                model: {
                    value: t.taskCard.targetTime,
                    callback: function(e) {
                        t.$set(t.taskCard, "targetTime", e)
                    },
                    expression: "taskCard.targetTime"
                }
            }), a("div", {
                staticClass: "col-12 pr-0 t-a-r pt-2"
            }, [a("button", {
                staticClass: "btn btn-primary",
                on: {
                    click: t.changeDueTime
                }
            }, [t._v("Update")])])], 1)], 1)
        }
          , N = []
          , $ = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("ul", {
                staticClass: "menu bottomLeft"
            }, [a("li", {
                staticClass: "share right"
            }, [a("i", {
                class: t.menu.iconClass,
                on: {
                    mouseup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "right", 39, e.key, ["Right", "ArrowRight"]) || "button"in e && 2 !== e.button ? null : t.rightBtnClicked(e)
                    }
                }
            }), a("div", {
                staticClass: "text-body",
                staticStyle: {
                    "font-size": "12px",
                    position: "relative",
                    bottom: "13px",
                    "text-align": "center"
                },
                on: {
                    mouseup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "right", 39, e.key, ["Right", "ArrowRight"]) || "button"in e && 2 !== e.button ? null : t.rightBtnClicked(e)
                    }
                }
            }, [t._v(" " + t._s(t.menu.text) + " ")]), a("ul", {
                staticClass: "submenu text-center",
                staticStyle: {
                    left: "25px !important"
                }
            }, t._l(t.menu.submenu, (function(e, n) {
                return a("li", {
                    key: "s" + n,
                    on: {
                        click: function(a) {
                            return t.openTaskcard(e)
                        }
                    }
                }, [a("i", {
                    staticClass: "fa fa-clone"
                }), a("div", {
                    staticClass: "text-body trim-text",
                    staticStyle: {
                        "font-size": "9px",
                        position: "relative",
                        bottom: "13px",
                        "text-align": "center",
                        width: "50px"
                    }
                }, [t._v(" " + t._s(e.number) + " ")])])
            }
            )), 0)])])
        }
          , P = []
          , L = {
            props: {
                subData: [Object, Array],
                taskCard: [Object, Array]
            },
            data: function() {
                return {
                    menu: {
                        iconClass: "fa fa-chevron-right text-body",
                        text: " ",
                        submenu: [{
                            iconClass: "fa fa-wrench",
                            text: "Mechanical"
                        }, {
                            iconClass: "fa fa-lightbulb-o",
                            text: "Electrical"
                        }, {
                            iconClass: "fa fa-space-shuttle",
                            text: "Aero"
                        }, {
                            iconClass: "fa fa-user",
                            text: "Civil"
                        }]
                    }
                }
            },
            mounted: function() {
                this.subData["length"] && (this.menu.submenu = this.subData)
            },
            methods: {
                rightBtnClicked: function() {
                    this.$emit("openChat")
                },
                openTaskcard: function(t) {
                    this.$emit("openTaskcard", t)
                }
            }
        }
          , j = L
          , B = (a("7dd6"),
        a("426d"),
        Object(S["a"])(j, $, P, !1, null, null, null))
          , Y = B.exports
          , z = a("113f")
          , F = {
            name: "componentName",
            mixins: [z["a"]],
            props: {
                taskCard: [Object, Array],
                parentIndex: Number,
                index: Number,
                normalSubMenuList: [Object, Array],
                selectedTab: Number
            },
            data: function() {
                return {
                    showTask: !1,
                    dWidth: window.innerWidth,
                    taskData: [],
                    taskPriorityModal: !1,
                    priorityList: [],
                    prioritySelected: "",
                    changeDueDateModal: !1,
                    changeDueTimeModal: !1,
                    configs: {
                        dueDateConfig: {
                            inline: !1,
                            altFormat: "d-m-Y",
                            altInput: !1
                        },
                        dueTimeConfig: {
                            enableTime: !0,
                            noCalendar: !0,
                            dateFormat: "H:i"
                        }
                    },
                    descriptionEditMode: "" == this.taskCard.taskDescription
                }
            },
            components: {
                floatBtn: Y,
                Multiselect: m.a,
                flatPickr: C.a
            },
            watch: {
                prioritySelected: function(t) {
                    t && (this.taskCard.priority = t.id,
                    this.taskPriorityModal = !1,
                    this.updatePriority())
                }
            },
            mounted: function() {},
            methods: {
                getPriority: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/TaskPriorities";
                    Object(v["a"])(e, "get", "").then((function(e) {
                        t.priorityList = e.data.data
                    }
                    )).catch((function(t) {}
                    ))
                },
                changeTaskPriority: function() {
                    this.getPriority(),
                    this.taskPriorityModal = !0
                },
                openDueDateModal: function() {
                    this.changeDueDateModal = !0
                },
                openDueTimeModal: function() {
                    this.changeDueTimeModal = !0
                },
                changeDueDate: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/ChangeDate"
                      , a = {
                        id: this.taskCard.id,
                        targetDate: this.taskCard.targetDate
                    };
                    Object(v["a"])(e, "post", a).then((function(e) {
                        t.changeDueDateModal = !1,
                        t.refreshTaskList(),
                        t.$emit("ManageResponse", e)
                    }
                    )).catch((function(e) {
                        console.log(e),
                        t.$emit("ManageResponse", e.response),
                        t.changeDueDateModal = !1,
                        t.refreshTaskList()
                    }
                    ))
                },
                changeDueTime: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/ChangeTime"
                      , a = {
                        id: this.taskCard.id,
                        targetTime: this.taskCard.targetTime
                    };
                    Object(v["a"])(e, "post", a).then((function(e) {
                        t.changeDueTimeModal = !1,
                        t.refreshTaskList(),
                        t.$emit("ManageResponse", e)
                    }
                    )).catch((function(e) {
                        console.log(e),
                        t.$emit("ManageResponse", e.response),
                        t.changeDueTimeModal = !1,
                        t.refreshTaskList()
                    }
                    ))
                },
                openChat: function() {},
                OpenTaskcard: function(t) {
                    this.$emit("OpenTaskcard", t)
                },
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : b()(t).format("DD-MM-YYYY")
                },
                normaliseTime: function(t) {
                    return null == t || void 0 == t ? "-" : b()(t).format("HH:mm:ss")
                },
                showTaskTimeline: function(t) {
                    this.$emit("openTaskTimeline", t)
                },
                moveTaskToProcessing: function(t) {
                    this.$emit("moveTaskToProcessing", t)
                },
                openSubtask: function(t) {
                    this.$emit("openSubtask", t)
                },
                taskFileUpload: function(t) {
                    this.$emit("taskFileUpload", t)
                },
                openTaskForEdit: function(t) {
                    this.$emit("openTaskForEdit", t)
                },
                openClonetask: function(t) {
                    this.$emit("openClonetask", t)
                },
                openTransfertask: function(t) {
                    this.$emit("openTransfertask", t)
                },
                openSnoozetask: function(t) {
                    this.$emit("openSnoozetask", t)
                },
                openRelatedtask: function(t) {
                    this.$emit("openRelatedtask", t)
                },
                deleteTask: function(t) {
                    this.$emit("deleteTask", t)
                },
                refreshTaskList: function() {
                    this.$emit("refreshTaskList")
                },
                submenuClicked: function() {
                    this.$emit("submenuIsClicked", this.taskCard, this.index, this.parentIndex)
                },
                subTaskMenuHandler: function(t) {
                    this.$emit("subTaskMenuHandler", t, this.index, this.parentIndex)
                },
                updatePriority: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/UpdatePriority";
                    Object(v["a"])(e, "post", this.taskCard).then((function(e) {
                        t.$emit("ManageResponse", e),
                        t.refreshTaskList()
                    }
                    )).catch((function(e) {
                        console.log(e),
                        t.$emit("ManageResponse", e.response)
                    }
                    ))
                },
                markTaskComplete: function() {
                    this.$emit("markTaskComplete", this.taskCard)
                },
                taskDescriptionUpdated: function() {
                    this.$emit("taskDescriptionUpdated", this.taskCard),
                    this.descriptionEditMode = !1
                }
            }
        }
          , U = F
          , W = (a("9550"),
        Object(S["a"])(U, I, N, !1, null, null, null))
          , H = W.exports
          , X = a("819a")
          , q = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [t.taskCard ? a("b-card", {
                staticClass: "mb-30",
                attrs: {
                    "body-class": "pb-0 pt-2",
                    "footer-class": "py-0 px-2 bg-transparent border-0"
                }
            }, [a("div", {
                staticClass: "d-flex align-item-center",
                on: {
                    click: function(e) {
                        return t.OpenTaskcard(t.taskCard)
                    }
                }
            }, [a("div", {
                staticClass: "col-8 px-0 trim-text"
            }, [a("i", {
                directives: [{
                    name: "b-popover",
                    rawName: "v-b-popover.hover.bottom.html",
                    value: t.popoverMethod,
                    expression: "popoverMethod",
                    modifiers: {
                        hover: !0,
                        bottom: !0,
                        html: !0
                    }
                }],
                staticClass: "fa fa-info-circle c-pointer text-gray-600 pr-1"
            }), a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "solo-card-title",
                attrs: {
                    title: t.taskCard.title
                }
            }, [t._v(" " + t._s(t.taskCard.title) + " ")]), a("p", {
                staticClass: "mb-3"
            }, [t._v(" " + t._s(t.taskCard.taskDescription) + " ")])]), a("div", {
                staticClass: " mb-1 col t-a-r px-0 "
            }, [a("span", {
                staticClass: "badge badge-primary"
            }, [t._v(t._s(t.taskCard.number))])])]), a("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [a("small", {
                staticClass: "text-muted d-flex justify-content-end align-items-center",
                staticStyle: {
                    height: "47px"
                }
            }, [a("div", {
                staticClass: "d-flex"
            }, [a("button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "btn bg-gray-100 rounded scale-on-hover text-danger btn-sm px-0 py-0 text-left mr-2",
                staticStyle: {
                    "padding-left": "1px",
                    "padding-right": "1px"
                },
                attrs: {
                    title: "Cancel"
                },
                on: {
                    click: t.onTaskCancel
                }
            }, [a("svg", {
                attrs: {
                    width: "30",
                    height: "30",
                    viewBox: "0 0 80 80",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                staticStyle: {
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M55.5564 55.6693L24.4437 24.5566",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                staticStyle: {
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M24.4436 55.6693L55.5563 24.5566",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            })])]), a("button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "btn bg-gray-100 rounded scale-on-hover text-primary btn-sm px-0 py-0 text-left mr-2",
                staticStyle: {
                    "padding-left": "1px",
                    "padding-right": "1px"
                },
                attrs: {
                    title: "Postpone"
                },
                on: {
                    click: t.onTaskPostpone
                }
            }, [a("svg", {
                staticClass: "flip-y-180",
                attrs: {
                    width: "30",
                    height: "27",
                    viewBox: "0 0 80 80",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                staticStyle: {
                    transition: "stroke-dashoffset 0.5s ease 0ms",
                    "stroke-dasharray": "111.129",
                    "stroke-dashoffset": "0",
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M23.8906 19.3455C25.7809 17.8305 27.8908 16.5754 30.169 15.6317C36.5076 13.0062 43.6295 13.0062 49.968 15.6317C56.3066 18.2572 61.3425 23.2932 63.968 29.6317C66.5935 35.9703 66.5935 43.0922 63.968 49.4307C61.3425 55.7693 56.3066 60.8052 49.968 63.4307C43.6295 66.0562 36.5076 66.0562 30.169 63.4307L29.2715 63.0589C28.8849 62.8988 28.5037 62.7288 28.128 62.5493",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                staticStyle: {
                    transition: "stroke-dashoffset 0.5s ease 100ms",
                    "stroke-dasharray": "52.5129",
                    "stroke-dashoffset": "0",
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M30.3364 25.7911L18.4517 13.9063C17.2523 12.7069 15.2017 13.5564 15.2017 15.2525L15.2017 27.0411C15.2017 28.1456 16.0971 29.0411 17.2017 29.0411L28.9902 29.0411C30.6864 29.0411 31.5358 26.9904 30.3364 25.7911Z",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                staticStyle: {
                    transition: "stroke-dashoffset 0.5s ease 200ms",
                    "stroke-dasharray": "18.8523",
                    "stroke-dashoffset": "0",
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M36 39C36 37.3431 37.3431 36 39 36C40.6569 36 42 37.3431 42 39C42 40.6569 40.6569 42 39 42C37.3431 42 36 40.6569 36 39Z",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                staticStyle: {
                    transition: "stroke-dashoffset 0.5s ease 300ms",
                    "stroke-dasharray": "13.0002",
                    "stroke-dashoffset": "0",
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M41.5967 40.5064L52.8496 47.0161",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                staticStyle: {
                    transition: "stroke-dashoffset 0.5s ease 400ms",
                    "stroke-dasharray": "8.3107",
                    "stroke-dashoffset": "0",
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M40.7306 36.5531L45.5317 29.7695",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            })])]), a("button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "btn bg-gray-100 rounded scale-on-hover text-success btn-sm px-0 py-0 text-left",
                staticStyle: {
                    "padding-left": "1px",
                    "padding-right": "1px"
                },
                attrs: {
                    title: t.taskCard.okButtonLabel ? t.taskCard.okButtonLabel : "Schedule"
                },
                on: {
                    click: t.onTaskSchedule
                }
            }, [a("svg", {
                attrs: {
                    width: "30",
                    height: "30",
                    viewBox: "0 0 80 80",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                staticStyle: {
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M14.5442 40.3106L30.1005 55.867C30.8816 56.648 32.1479 56.648 32.929 55.867L65.4559 23.3401",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            })])])])])])]) : t._e()], 1)
        }
          , V = []
          , G = {
            name: "componentName",
            mixins: [z["a"]],
            props: {
                taskCard: [Object, Array]
            },
            data: function() {
                return {
                    showTask: !1,
                    dWidth: window.innerWidth,
                    taskData: []
                }
            },
            components: {
                floatBtn: Y
            },
            mounted: function() {},
            methods: {
                popoverMethod: function() {
                    return "<table class='table'><tbody><tr><td><div style='font-size:12px;font-weight:bold'>Created-By:</div></td><td style='font-size:12px'>".concat(this.taskCard.createdByName ? this.taskCard.createdByName : "N/A", "</td></tr></tbody></table>")
                },
                openChat: function() {},
                OpenTaskcard: function(t) {
                    this.$emit("OpenTaskcard", t)
                },
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : b()(t).format("DD-MM-YYYY")
                },
                openSubtask: function(t) {
                    this.$emit("openSubtask", t)
                },
                onTaskCancel: function() {
                    this.$emit("taskCancelClicked", this.taskCard)
                },
                onTaskPostpone: function() {
                    this.$emit("taskPostponeClicked", this.taskCard)
                },
                onTaskSchedule: function() {
                    this.$emit("taskScheduleClicked", this.taskCard)
                }
            }
        }
          , K = G
          , J = (a("8f88"),
        Object(S["a"])(K, q, V, !1, null, null, null))
          , Z = J.exports
          , Q = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {}, [t.taskCard ? a("b-card", {
                staticClass: "mb-30",
                attrs: {
                    "body-class": "pb-0 pt-2",
                    "footer-class": "py-0 px-2 bg-transparent border-0"
                }
            }, [a("div", {
                staticClass: "d-flex align-item-center",
                on: {
                    click: function(e) {
                        return t.OpenTaskcard(t.taskCard)
                    }
                }
            }, [a("div", {
                staticClass: "w-100"
            }, [a("div", {
                staticClass: "d-flex justify-content-between"
            }, [a("div", [a("i", {
                directives: [{
                    name: "b-popover",
                    rawName: "v-b-popover.hover.bottom.html",
                    value: t.popoverMethod,
                    expression: "popoverMethod",
                    modifiers: {
                        hover: !0,
                        bottom: !0,
                        html: !0
                    }
                }],
                staticClass: "fa fa-info-circle c-pointer text-gray-600 pr-1"
            }), a("span", {
                staticClass: "solo-card-title text-success"
            }, [t._v("Assigned Task")])]), a("div", [a("span", {
                staticClass: "badge badge-primary bg-success"
            }, [t._v(" " + t._s(t.taskCard.number) + " ")])])]), a("h5", {
                staticClass: "ul-task-manager__paragraph mb-1"
            }, [t._v(" " + t._s(t.taskCard.title) + " ")]), a("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.taskCard.stepName,
                    expression: "taskCard.stepName"
                }, {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "mb-0 py-1 trim-text text-left",
                staticStyle: {
                    width: "95%",
                    color: "#884600"
                },
                attrs: {
                    title: t.taskCard.stepName
                }
            }, [t._v(" " + t._s(t.taskCard.stepName) + " ")]), a("p", {
                staticClass: "mb-3"
            }, [t._v(" " + t._s(t.taskCard.taskDescription) + " ")]), a("span", [t._v("Due on")]), a("span", {
                staticClass: "text-primary font-weight-bold"
            }, [t._v(" " + t._s(t.normaliseDate(t.taskCard.targetDate)) + " "), a("span", {
                staticClass: "text-gray-900 font-weight-normal"
            }, [t._v(" at ")]), t._v(" " + t._s(t.taskCard.targetTime) + " ")])])]), a("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [a("small", {
                staticClass: "text-muted d-flex align-items-center",
                staticStyle: {
                    height: "47px"
                }
            }, [a("div", {
                staticStyle: {
                    "flex-grow": "2"
                }
            }, [t.taskCard.isSubTask ? a("div", {
                staticClass: "mx-2 badge badge-outline-primary",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("span", [t._v("Subtask")])]) : t._e()]), a("div", {
                staticClass: "d-flex"
            }, [a("button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "btn bg-gray-100 rounded scale-on-hover text-danger btn-sm px-0 py-0 text-left mr-2",
                staticStyle: {
                    "padding-left": "1px",
                    "padding-right": "1px"
                },
                attrs: {
                    title: "Reject"
                },
                on: {
                    click: t.onTaskRejected
                }
            }, [a("svg", {
                attrs: {
                    width: "30",
                    height: "30",
                    viewBox: "0 0 80 80",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                staticStyle: {
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M55.5564 55.6693L24.4437 24.5566",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                staticStyle: {
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M24.4436 55.6693L55.5563 24.5566",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            })])]), a("button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "btn bg-gray-100 rounded scale-on-hover text-success btn-sm px-0 py-0 text-left",
                staticStyle: {
                    "padding-left": "1px",
                    "padding-right": "1px"
                },
                attrs: {
                    title: "Accept"
                },
                on: {
                    click: t.onTaskAccepted
                }
            }, [a("svg", {
                attrs: {
                    width: "30",
                    height: "30",
                    viewBox: "0 0 80 80",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                staticStyle: {
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M14.5442 40.3106L30.1005 55.867C30.8816 56.648 32.1479 56.648 32.929 55.867L65.4559 23.3401",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            })])])])])])]) : t._e()], 1)
        }
          , tt = []
          , et = {
            name: "componentName",
            mixins: [z["a"]],
            props: {
                taskCard: [Object, Array]
            },
            data: function() {
                return {
                    showTask: !1,
                    dWidth: window.innerWidth,
                    taskData: []
                }
            },
            components: {
                floatBtn: Y
            },
            mounted: function() {},
            methods: {
                popoverMethod: function() {
                    return "<table class='table table-hover'><tbody><tr><td><div style='font-size:12px;font-weight:bold'>Assigned-To:</div></td><td>".concat(this.taskCard.assignees, "</td></tr><tr><td><div style='font-size:12px;font-weight:bold'>Created-By:</div></td><td>").concat(this.taskCard.createdByName, "</td></tr></tbody></table>")
                },
                openChat: function() {},
                OpenTaskcard: function(t) {
                    this.$emit("OpenTaskcard", t)
                },
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : b()(t).format("DD-MM-YYYY")
                },
                openSubtask: function(t) {
                    this.$emit("openSubtask", t)
                },
                onTaskRejected: function() {
                    this.$emit("taskRejectClicked", this.taskCard)
                },
                onTaskAccepted: function() {
                    this.$emit("taskAcceptClicked", this.taskCard)
                }
            }
        }
          , at = et
          , nt = (a("a873"),
        Object(S["a"])(at, Q, tt, !1, null, null, null))
          , st = nt.exports
          , ot = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {}, [t.taskCard ? a("b-card", {
                staticClass: "sample mb-30",
                attrs: {
                    "body-class": "pb-0 pt-2",
                    "footer-class": "py-0 px-2"
                }
            }, [a("div", {
                staticClass: "ribbon up",
                staticStyle: {
                    "--color": "#57c443"
                }
            }, [a("div", {
                staticClass: "content pt-0"
            }, [a("svg", {
                staticClass: "svg-inline--fa fa-check fa-w-16",
                attrs: {
                    width: "15px",
                    height: "15px",
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fas",
                    "data-icon": "check",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512"
                }
            }, [a("path", {
                attrs: {
                    fill: "currentColor",
                    d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                }
            })])])]), a("div", {
                staticClass: "d-flex align-item-center"
            }, [a("div", {
                staticClass: "w-100"
            }, [a("div", {
                staticClass: "mt-10 d-flex justify-content-between"
            }, [a("div", {
                staticClass: "solo-card-title trim-text"
            }, [a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "c-pointer underline-on-hover",
                attrs: {
                    title: t.taskCard.title
                },
                on: {
                    click: function(e) {
                        return t.OpenTaskcard(t.taskCard)
                    }
                }
            }, [t._v(t._s(t.taskCard.title) + " ")])])]), a("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.taskCard.stepName,
                    expression: "taskCard.stepName"
                }, {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "mb-1 200 py-1 trim-text text-left",
                staticStyle: {
                    width: "90%",
                    color: "#884600"
                },
                attrs: {
                    title: t.taskCard.stepName
                }
            }, [t._v(" " + t._s(t.taskCard.stepName) + " ")]), a("div", {
                staticClass: "my-3 d-flex justify-content-between"
            }, [a("h5", {
                staticClass: "badge badge-outline-primary mb-1"
            }, [t._v(" " + t._s(t.normaliseDate(t.taskCard.createdAt)) + " ")]), a("span", {
                staticClass: "ul-task-manager__font-date badge badge-primary pt-1 c-pointer",
                on: {
                    click: function(e) {
                        return t.OpenTaskcard(t.taskCard)
                    }
                }
            }, [t._v(" " + t._s(t.taskCard.number) + " ")])]), a("ul", {
                staticClass: "list list-unstyled mb-0 ml-auto"
            }, [a("li", {
                staticClass: "t-a-r c-default"
            }, [a("span", {
                staticClass: "pr-1",
                staticStyle: {
                    "font-size": "10px"
                }
            }, [t._v("Submitted:")])]), a("li", {
                staticClass: "t-a-r c-default"
            }, [a("span", {
                staticClass: "badge badge-gray-300 pr-1",
                staticStyle: {
                    "font-size": "0.9em"
                }
            }, [t._v(" " + t._s(t.normaliseDate(t.taskCard.submittedTime)) + " ")])]), a("li", {
                staticClass: "t-a-r c-default"
            }, [a("span", {
                staticClass: "badge badge-gray-300 pr-1",
                staticStyle: {
                    "font-size": "0.9em"
                }
            }, [t._v(" " + t._s(t.normaliseTime(t.taskCard.submittedTime)) + " ")])])]), a("p", {
                staticClass: "mb-2"
            }, [t._v(" " + t._s(t.taskCard.taskDescription) + " ")]), a("div", {
                staticClass: "text-warning-500"
            }, [a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                attrs: {
                    id: "appmessge" + t.taskCard.id,
                    title: t.taskCard.message
                }
            }, [t._v(" " + t._s(t.changeColor("appmessge" + t.taskCard.id, t.taskCard.message)) + " ")])])])]), 91.6 == t.taskCard.status ? a("div", {
                staticClass: "row mx-0 c-default"
            }, [a("div", {
                staticClass: "col-7 pl-0 pb-0 d-flex",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [t._v(" Assigned by: "), a("span", {
                staticClass: "text-primary font-weight-bold"
            }, [t._v(" " + t._s("00000000-0000-0000-0000-000000000000" == t.taskCard.createdBy ? "System" : t.taskCard.createdByName))])]), a("div", {
                directives: [{
                    name: "b-popover",
                    rawName: "v-b-popover.hover.top",
                    value: "Progress: " + t.taskCard.status,
                    expression: "'Progress: ' + taskCard.status",
                    modifiers: {
                        hover: !0,
                        top: !0
                    }
                }],
                staticClass: "col pr-0 pl-40 mt-2"
            }, [a("b-progress", {
                staticClass: "mb-2",
                staticStyle: {
                    height: "6px"
                },
                attrs: {
                    value: t.taskCard.status,
                    variant: "warning"
                }
            })], 1)]) : t._e(), a("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [a("small", {
                staticClass: "text-muted d-flex justify-content-end align-items-center",
                staticStyle: {
                    height: "47px"
                }
            }, [a("div", {
                staticClass: "d-flex"
            }, [91.5 == t.taskCard.status ? a("button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "btn bg-gray-100 rounded scale-on-hover text-danger btn-sm px-0 py-0 text-left mr-2",
                staticStyle: {
                    "padding-left": "1px",
                    "padding-right": "1px"
                },
                attrs: {
                    title: "Reject"
                },
                on: {
                    click: t.onTaskApprovalRejected
                }
            }, [a("svg", {
                attrs: {
                    width: "30",
                    height: "30",
                    viewBox: "0 0 80 80",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                staticStyle: {
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M55.5564 55.6693L24.4437 24.5566",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }), a("path", {
                staticStyle: {
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M24.4436 55.6693L55.5563 24.5566",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            })])]) : t._e(), 91.5 == t.taskCard.status ? a("button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "btn bg-gray-100 rounded scale-on-hover text-success btn-sm px-0 py-0 text-left",
                staticStyle: {
                    "padding-left": "1px",
                    "padding-right": "1px"
                },
                attrs: {
                    title: "Approve"
                },
                on: {
                    click: t.onTaskApproved
                }
            }, [a("svg", {
                attrs: {
                    width: "30",
                    height: "30",
                    viewBox: "0 0 80 80",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [a("path", {
                staticStyle: {
                    "stroke-width": "5px"
                },
                attrs: {
                    d: "M14.5442 40.3106L30.1005 55.867C30.8816 56.648 32.1479 56.648 32.929 55.867L65.4559 23.3401",
                    stroke: "currentColor",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            })])]) : t._e()])])])]) : t._e()], 1)
        }
          , rt = []
          , it = {
            name: "componentName",
            mixins: [z["a"]],
            props: {
                taskCard: [Object, Array]
            },
            data: function() {
                return {
                    showTask: !1,
                    dWidth: window.innerWidth,
                    taskData: []
                }
            },
            mounted: function() {},
            methods: {
                popoverMethod: function() {
                    return "<table class='table table-hover'><tbody><tr><td><div style='font-size:12px;font-weight:bold'>Assigned-To:</div></td><td>".concat(this.taskCard.assignees, "</td></tr><tr><td><div style='font-size:12px;font-weight:bold'>Created-By:</div></td><td>").concat(this.taskCard.createdByName, "</td></tr></tbody></table>")
                },
                openChat: function() {},
                OpenTaskcard: function(t) {
                    this.$emit("OpenTaskcard", t)
                },
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : b()(t).format("DD-MM-YYYY")
                },
                normaliseTime: function(t) {
                    return null == t || void 0 == t ? "-" : b()(t).format("HH:mm:ss")
                },
                openSubtask: function(t) {
                    this.$emit("openSubtask", t)
                },
                onTaskRejected: function() {
                    this.$emit("taskRejectClicked", this.taskCard)
                },
                onTaskAccepted: function() {
                    this.$emit("taskAcceptClicked", this.taskCard)
                },
                onTaskApprovalRejected: function() {
                    this.$emit("taskApprovalRejectClicked", this.taskCard)
                },
                onTaskApproved: function() {
                    this.$emit("taskApprovedClicked", this.taskCard)
                }
            }
        }
          , lt = it
          , ct = (a("1453"),
        Object(S["a"])(lt, ot, rt, !1, null, null, null))
          , dt = ct.exports
          , ut = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {}, [t.taskCard ? a("b-card", {
                staticClass: "sample mb-30",
                attrs: {
                    "body-class": "pb-0 pt-2",
                    "footer-class": "py-0 px-2"
                }
            }, [a("div", {
                staticClass: "d-flex align-item-center"
            }, [a("div", {
                staticClass: "w-100"
            }, [a("div", {
                staticClass: "mt-10 d-flex justify-content-between"
            }, [a("div", {
                staticClass: "solo-card-title trim-text"
            }, [a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "c-pointer underline-on-hover",
                attrs: {
                    title: t.taskCard.title
                },
                on: {
                    click: function(e) {
                        return t.OpenTaskcard(t.taskCard)
                    }
                }
            }, [t._v(t._s(t.taskCard.title) + " ")])])]), a("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.taskCard.stepName,
                    expression: "taskCard.stepName"
                }, {
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "mb-1 200 py-1 trim-text text-left",
                staticStyle: {
                    width: "90%",
                    color: "#884600"
                },
                attrs: {
                    title: t.taskCard.stepName
                }
            }, [t._v(" " + t._s(t.taskCard.stepName) + " ")]), a("div", {
                staticClass: "my-3 d-flex justify-content-between"
            }, [a("h5", {
                staticClass: "badge badge-outline-primary mb-1"
            }, [t._v(" " + t._s(t.normaliseDate(t.taskCard.createdAt)) + " ")]), a("span", {
                staticClass: "ul-task-manager__font-date badge badge-primary pt-1 c-pointer",
                on: {
                    click: function(e) {
                        return t.OpenTaskcard(t.taskCard)
                    }
                }
            }, [t._v(" " + t._s(t.taskCard.number) + " ")])]), a("p", {
                staticClass: "mb-2"
            }, [t._v(" " + t._s(t.taskCard.taskDescription) + " ")]), a("div", {
                staticClass: "text-warning-500"
            }, [a("span", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                attrs: {
                    id: "appmessge" + t.taskCard.id,
                    title: t.taskCard.message
                }
            }, [t._v(" " + t._s(t.changeColor("appmessge" + t.taskCard.id, t.taskCard.message)) + " ")])])])]), a("div", {
                staticClass: "row mx-0 c-default"
            }, [a("div", {
                staticClass: "col-7 pl-0 pb-0 d-flex",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [t._v(" Assigned by: "), a("span", {
                staticClass: "text-primary font-weight-bold"
            }, [t._v(" " + t._s("00000000-0000-0000-0000-000000000000" == t.taskCard.createdBy ? "System" : t.taskCard.createdByName))])]), a("div", {
                staticClass: "col-7 pl-0 pb-0 d-flex",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("span", {
                staticClass: "mr-1"
            }, [t._v(" Assigned To: ")]), a("span", {
                staticClass: "text-primary font-weight-bold"
            }, [t._v(" " + t._s(t.taskCard.assignees ? t.taskCard.assignees : "System"))])]), a("div", {
                directives: [{
                    name: "b-popover",
                    rawName: "v-b-popover.hover.top",
                    value: "Progress: " + t.taskCard.status,
                    expression: "'Progress: ' + taskCard.status",
                    modifiers: {
                        hover: !0,
                        top: !0
                    }
                }],
                staticClass: "col pr-0 pl-40 mt-2"
            }, [a("b-progress", {
                staticClass: "mb-2",
                staticStyle: {
                    height: "6px"
                },
                attrs: {
                    value: t.taskCard.status,
                    variant: "warning"
                }
            })], 1)]), a("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [a("small", {
                staticClass: "text-muted d-flex justify-content-end align-items-center",
                staticStyle: {
                    height: "47px"
                }
            }, [a("div", {
                staticClass: "d-flex"
            }, [a("button", {
                directives: [{
                    name: "b-tooltip",
                    rawName: "v-b-tooltip.hover",
                    modifiers: {
                        hover: !0
                    }
                }],
                staticClass: "btn btn-success btn-sm px-2 py-1 text-left",
                staticStyle: {
                    "padding-left": "1px",
                    "padding-right": "1px"
                },
                attrs: {
                    title: "Document"
                },
                on: {
                    click: t.onTaskDocumented
                }
            }, [t._v(" Document ")])])])])]) : t._e()], 1)
        }
          , pt = []
          , ft = {
            name: "componentName",
            mixins: [z["a"]],
            props: {
                taskCard: [Object, Array]
            },
            data: function() {
                return {
                    showTask: !1,
                    dWidth: window.innerWidth,
                    taskData: []
                }
            },
            components: {},
            mounted: function() {},
            methods: {
                popoverMethod: function() {
                    return "<table class='table table-hover'><tbody><tr><td><div style='font-size:12px;font-weight:bold'>Assigned-To:</div></td><td>".concat(this.taskCard.assignees, "</td></tr><tr><td><div style='font-size:12px;font-weight:bold'>Created-By:</div></td><td>").concat(this.taskCard.createdByName, "</td></tr></tbody></table>")
                },
                openChat: function() {},
                OpenTaskcard: function(t) {
                    this.$emit("OpenTaskcard", t)
                },
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : b()(t).format("DD-MM-YYYY")
                },
                normaliseTime: function(t) {
                    return null == t || void 0 == t ? "-" : b()(t).format("HH:mm:ss")
                },
                openSubtask: function(t) {
                    this.$emit("openSubtask", t)
                },
                onTaskDocumented: function() {
                    this.$emit("taskDocumentedClicked", this.taskCard)
                }
            }
        }
          , mt = ft
          , ht = (a("2a83"),
        Object(S["a"])(mt, ut, pt, !1, null, null, null))
          , vt = ht.exports
          , gt = a("4a46")
          , bt = a("01b4")
          , yt = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "p-2 py-0",
                style: "background-color: " + t.headerBg
            }, [a("div", [a("div", [a("div", {
                staticClass: "solo-card-title col-12 p-0 dp-slide-fade-in-right",
                staticStyle: {
                    "font-size": "17px"
                }
            }, [t.taskData.isSubTask ? a("i", {
                staticClass: "fa fa-mail-reply-all fa-rotate-180 mr-1 text-primary"
            }) : t._e(), t._l(t.breadCrumbList, (function(e, n) {
                return a("span", {
                    key: "crumb" + n,
                    staticClass: "c-pointer",
                    class: n == t.breadCrumbList.length - 1 ? "text-primary" : "text-gray-900",
                    on: {
                        click: function(a) {
                            return t.breadCrumbClicked(e, n)
                        }
                    }
                }, [t._v(t._s(e.number)), n != t.breadCrumbList.length - 1 ? a("i", {
                    staticClass: "fa fa-chevron-right mx-1"
                }) : t._e()])
            }
            ))], 2), t.taskData.title ? a("div", {
                staticClass: "col-12 p-0 text-primary",
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
            }, [t._v(" Assigned To: "), t.taskData.selfAssigned ? a("span", {
                staticClass: "text-primary font-weight-bold ml-1"
            }, [t._v("Self ")]) : !t.taskData.selfAssigned && t.taskData.assignedTo && 1 == t.taskData.assignedTo.length ? a("span", {
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
            }), t._v(" +"), a("span", [t._v(t._s(t.taskData.assignedTo && t.taskData.assignedTo.length))])])]) : t._e()]), a("div", {
                staticClass: "col-lg-4 col-md-6 row form-group",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [t._v(" Created By: "), a("span", {
                staticClass: "ml-1 text-primary font-weight-bold"
            }, [t._v(t._s(t.taskData.createdByName) + " ")])]), a("div", {
                staticClass: "col-lg-4 col-md-6 row form-group",
                staticStyle: {
                    "font-size": "12px"
                }
            }, [a("span", {
                staticClass: "pr-1"
            }, [t._v(" Due on: ")]), a("span", {
                staticClass: "ml-1 text-primary font-weight-bold"
            }, [t._v(t._s(t.normaliseDate(t.taskData.targetDate)) + " ")])]), a("div", {
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
            }, [t._v(t._s(t.taskData.masterTaskId) + " ")])]) : t._e()])])])
        }
          , kt = []
          , Ct = (a("a434"),
        {
            props: {
                taskData: [Object, Array],
                headerBg: {
                    type: String,
                    default: "#e8e8e8"
                }
            },
            data: function() {
                return {
                    breadCrumbList: []
                }
            },
            mounted: function() {
                var t = this;
                setTimeout((function() {
                    t.breadCrumbList["length"] < 1 && t.breadCrumbList.push({
                        id: t.taskData.id,
                        number: t.taskData.number,
                        taskType: t.taskData.taskType
                    })
                }
                ), 1e3)
            },
            methods: {
                normaliseDate: function(t) {
                    return null == t || void 0 == t ? "-" : b()(t).format("DD-MM-YYYY")
                },
                breadCrumbClicked: function(t, e) {
                    console.log(this.breadCrumbList[e]),
                    this.breadCrumbList.splice(e),
                    this.$emit("OpenSubTaskcard", t)
                }
            }
        })
          , Tt = Ct
          , _t = Object(S["a"])(Tt, yt, kt, !1, null, null, null)
          , xt = _t.exports
          , wt = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "w-100"
            }, [a("h4", {
                staticClass: "col-12 pl-2"
            }, [t.taskData.subTasks["length"] > 0 ? a("span", [t._v("SubTasks")]) : t.taskData.subscribersTasks && t.taskData.subscribersTasks["length"] > 0 ? a("span", [t._v("Subscriber-Tasks")]) : t._e()]), t.taskData.subTasks ? t._l(t.taskData.subTasks, (function(e, n) {
                return a("b-row", {
                    key: n,
                    staticClass: "w-100 mx-0"
                }, ["Pending" == e.name ? a("b-col", [a("div", t._l(e.list, (function(e, n) {
                    return a("ul", {
                        key: n,
                        staticClass: "list list-unstyled"
                    }, [a("li", {
                        staticClass: "mx-2 w-100 c-default d-flex justify-content-start",
                        staticStyle: {
                            "font-size": "14px"
                        }
                    }, [a("i", {
                        staticClass: "fa fa-mail-reply-all mr-1 text-primary"
                    }), a("div", {
                        staticClass: "w-100",
                        staticStyle: {
                            "border-bottom": "0.5px solid #e9e6ec"
                        }
                    }, [a("span", {
                        staticClass: "badge badge-dark bg-success c-pointer",
                        staticStyle: {
                            "font-size": "12px",
                            "font-weight": "normal",
                            "padding-top": "4px",
                            "margin-bottom": "3px"
                        },
                        on: {
                            click: function(a) {
                                return t.subtask(e)
                            }
                        }
                    }, [t._v(t._s(e.number) + " ")]), a("span", {
                        staticClass: "mx-2"
                    }, [t._v(t._s(e.title))])])])])
                }
                )), 0)]) : t._e()], 1)
            }
            )) : t._e(), t.taskData.subscribersTasks ? [a("div", {
                staticClass: "d-flex mx-0 overflow-x-auto"
            }, t._l(t.taskData.subscribersTasks, (function(e, n) {
                return a("div", {
                    key: n,
                    staticClass: "m-2",
                    staticStyle: {
                        "min-width": "290px",
                        "max-width": "290px"
                    }
                }, [a("b-card", {
                    staticClass: "c-pointer",
                    attrs: {
                        "body-class": "trim-text"
                    },
                    on: {
                        click: function(a) {
                            return t.subtask(e)
                        }
                    }
                }, [a("span", {
                    staticClass: "badge badge-dark bg-success float-right",
                    staticStyle: {
                        "font-size": "12px",
                        "font-weight": "normal",
                        "padding-top": "4px",
                        "margin-bottom": "3px"
                    }
                }, [t._v(t._s(e.number) + " ")]), a("span", {
                    staticClass: "mx-2",
                    attrs: {
                        title: e.title
                    }
                }, [t._v(t._s(e.title))])])], 1)
            }
            )), 0)] : t._e()], 2)
        }
          , St = []
          , Dt = {
            components: {},
            props: {
                taskData: [Object, Array]
            },
            methods: {
                subtask: function(t) {
                    this.$emit("OpenSubTaskcard", t)
                }
            }
        }
          , Mt = Dt
          , Ot = Object(S["a"])(Mt, wt, St, !1, null, null, null)
          , Et = Ot.exports
          , At = a("2d94")
          , Rt = a.n(At)
          , It = (a("1e08"),
        {
            mixins: [z["a"]],
            display: "Transitions",
            order: 7,
            components: {
                common: u["a"],
                draggable: R.a,
                soloTaskCard: H,
                TaskCardView: X["a"],
                ValidationObserver: p["a"],
                customModal: h["a"],
                soloTaskCardWrapper: Z,
                SoloTaskAcceptanceCard: st,
                SoloTaskAapprovalCard: dt,
                SoloTaskDocumentCard: vt,
                adnlDataViewer: bt["a"],
                taskCardViewHeader: xt,
                subTaskViewer: Et,
                SlideOut: Rt.a,
                flatPickr: C.a
            },
            props: {
                selectedTab: Number
            },
            created: function() {
                gt["a"].$on("taskActionHandler", this.handleTaskAction),
                gt["a"].$on("taskRescheduleHandler", this.handleTaskReschedule),
                gt["a"].$on("SearchRequest", this.searching),
                gt["a"].$on("taskPartialSaveHandler", this.taskPartialSaveHandler),
                window.addEventListener("resize", (function() {
                    this.dWidth = window.innerWidth
                }
                ))
            },
            beforeDestroy: function() {
                gt["a"].$off("taskActionHandler", this.handleTaskAction),
                gt["a"].$off("taskRescheduleHandler", this.handleTaskReschedule),
                gt["a"].$off("SearchRequest", this.searching),
                window.removeEventListener("resize", (function() {}
                ))
            },
            mounted: function() {
                this.getTask(1)
            },
            watch: {
                selectedTab: function(t) {
                    this.getTask(t + 1)
                },
                showTask: function() {
                    this.dWidth = window.innerWidth
                }
            },
            data: function() {
                return {
                    dWidth: window.innerWidth,
                    tcvKey: 1019181,
                    breadCrumbList: [],
                    taskList: [],
                    showAddTaskSlideout: !1,
                    drag: !1,
                    showTask: !1,
                    customContentOnTriggerOpenType: "modal",
                    customContentOnTriggerModalSize: "medium",
                    taskData: [],
                    selectedCardIndex: {
                        childIndex: 0,
                        parentIndex: 0
                    },
                    model: {
                        name: "hi",
                        customData: {},
                        assignToMe: !0
                    },
                    cloneTaskSchema: {
                        schema: {
                            slot: "slot1",
                            submitUrl: "/test/api/submit",
                            rows: [{
                                styles: {
                                    class: "row"
                                },
                                fields: [{
                                    type: "ms",
                                    label: "Clone To",
                                    model: "assignTo",
                                    props: {
                                        default: "",
                                        api: "/api/bitTask/Tasks/getAssigneev3?contains="
                                    },
                                    styles: {
                                        class: "col-12",
                                        style: ""
                                    },
                                    control: "custom",
                                    component: "dpAssignTo",
                                    attributes: {
                                        name: "cloneTo",
                                        items: [],
                                        label: "value",
                                        trackBy: "id",
                                        disabled: "",
                                        multiple: !0,
                                        readonly: "",
                                        allowEmpty: !0,
                                        placeholder: "Type to search",
                                        closeOnSelect: !0,
                                        internalSearch: !1,
                                        preselectFirst: !1,
                                        preserveSearch: !1
                                    },
                                    validation: {
                                        required: !0
                                    }
                                }, {
                                    type: "",
                                    label: "Remarks",
                                    model: "remarks",
                                    props: {
                                        default: ""
                                    },
                                    styles: {
                                        class: "col-12",
                                        style: ""
                                    },
                                    control: "textarea",
                                    component: "dpTextarea",
                                    attributes: {
                                        name: "Text Area",
                                        cssStyle: "resize:none",
                                        disabled: "",
                                        readonly: "",
                                        maxlength: 300,
                                        placeholder: "Type here"
                                    },
                                    validation: {
                                        required: !1
                                    }
                                }]
                            }]
                        },
                        model: {}
                    },
                    taskFileUploadschema: {
                        schema: {
                            slot: "slot1",
                            submitUrl: "/test/api/submit",
                            rows: [{
                                styles: {
                                    class: "row mx-0"
                                },
                                fields: [{
                                    type: "",
                                    label: "Upload attachments",
                                    model: "attachments",
                                    props: {
                                        default: ""
                                    },
                                    styles: {
                                        class: "col-12 mt-2",
                                        style: ""
                                    },
                                    control: "",
                                    component: "dpUppyUpload",
                                    attributes: {
                                        showControls: !0,
                                        numberOfFiles: 10
                                    },
                                    validation: {}
                                }, {
                                    type: "",
                                    label: "File Url",
                                    model: "fileUrl",
                                    props: {
                                        default: ""
                                    },
                                    styles: {
                                        class: "col-12 mt-1",
                                        style: ""
                                    },
                                    control: "text",
                                    component: "dpInput",
                                    attributes: {
                                        name: "Text",
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
                    },
                    transferTaskschema: {
                        schema: {
                            slot: "slot1",
                            submitUrl: "/test/api/submit",
                            rows: [{
                                styles: {
                                    class: "row"
                                },
                                fields: [{
                                    type: "ms",
                                    label: "Transfer To",
                                    model: "assignTo",
                                    props: {
                                        default: "",
                                        api: "/api/bitTask/Tasks/getAssigneev3?contains="
                                    },
                                    styles: {
                                        class: "col-12",
                                        style: ""
                                    },
                                    control: "custom",
                                    component: "dpAssignTo",
                                    attributes: {
                                        name: "cloneTo",
                                        items: [],
                                        label: "value",
                                        trackBy: "id",
                                        disabled: "",
                                        multiple: !1,
                                        readonly: "",
                                        allowEmpty: !0,
                                        placeholder: "Type to search",
                                        closeOnSelect: !0,
                                        internalSearch: !1,
                                        preselectFirst: !1,
                                        preserveSearch: !1
                                    },
                                    validation: {
                                        required: !0
                                    }
                                }, {
                                    type: "",
                                    label: "Message",
                                    model: "message",
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
                    },
                    rejectTaskschema: {
                        schema: {
                            slot: "slot1",
                            submitUrl: "/test/api/submit",
                            rows: [{
                                styles: {
                                    class: "row"
                                },
                                fields: [{
                                    type: "",
                                    label: "Message",
                                    model: "message",
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
                    },
                    approvalTaskRejectschema: {
                        schema: {
                            slot: "slot1",
                            submitUrl: "/test/api/submit",
                            rows: [{
                                styles: {
                                    class: "row"
                                },
                                fields: [{
                                    type: "",
                                    label: "Message",
                                    model: "message",
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
                    },
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
                    },
                    schema: {
                        model: {},
                        schema: [],
                        initiatorSchema: {
                            schema: [],
                            model: {}
                        },
                        rescheduleSchema: {
                            schema: [{
                                rows: [{
                                    styles: {
                                        class: "row"
                                    },
                                    fields: [{
                                        type: "",
                                        label: "New Date",
                                        model: "date",
                                        props: {
                                            default: ""
                                        },
                                        styles: {
                                            class: "col-6",
                                            style: ""
                                        },
                                        control: "",
                                        component: "dpFlatpicker",
                                        attributes: {
                                            minDate: ""
                                        },
                                        validation: {
                                            required: !1
                                        }
                                    }, {
                                        label: "Save",
                                        model: null,
                                        props: {
                                            api: "/api/bitTask/Tasks/reschedule",
                                            params: {
                                                param: {},
                                                taskId: "{id}",
                                                trigger: ""
                                            }
                                        },
                                        styles: {
                                            class: "col-12 t-a-r",
                                            style: "",
                                            btnClass: "btn btn-success es-btn w-auto",
                                            controlClass: null,
                                            controlStyle: null,
                                            btnStyle: null
                                        },
                                        control: "button",
                                        component: "dpButton",
                                        attributes: {
                                            disabled: !1,
                                            readonly: !1
                                        },
                                        validation: "",
                                        type: "button",
                                        actions: {
                                            exec: "taskRescheduleHandler",
                                            evalType: "fired",
                                            externalValidation: !0
                                        }
                                    }]
                                }]
                            }],
                            model: {}
                        }
                    },
                    selectedCard: {},
                    showTaskTimelineSlideout: !1,
                    taskTimelineData: {},
                    taskTimelineDataHeader: {},
                    normalSubMenuList: [],
                    snoozeTaskModel: {
                        taskId: "00000000-0000-0000-0000-000000000000",
                        snoozeUntil: new Date
                    },
                    flatPicConfig: {
                        wrap: !0,
                        dateFormat: "Y-m-d",
                        allowInput: !1,
                        altInput: !1,
                        time_24hr: !1,
                        disableMobile: !0
                    },
                    taskDeleteschema: {
                        schema: {
                            slot: "slot1",
                            submitUrl: "/test/api/submit",
                            rows: [{
                                styles: {
                                    class: "row"
                                },
                                fields: [{
                                    type: "",
                                    label: "Message",
                                    model: "message",
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
                    },
                    taskDocumentationschema: {
                        schema: {
                            slot: "slot1",
                            submitUrl: "/test/api/submit",
                            rows: [{
                                styles: {
                                    class: "row"
                                },
                                fields: [{
                                    type: "",
                                    label: "Upload attachments",
                                    model: "attachments",
                                    props: {
                                        default: ""
                                    },
                                    styles: {
                                        class: "col-12 mt-2",
                                        style: ""
                                    },
                                    control: "",
                                    component: "dpUppyUpload",
                                    attributes: {
                                        showControls: !0,
                                        numberOfFiles: 10
                                    },
                                    validation: {}
                                }, {
                                    type: "",
                                    label: "File Url",
                                    model: "fileUrl",
                                    props: {
                                        default: ""
                                    },
                                    styles: {
                                        class: "col-12 mt-1",
                                        style: ""
                                    },
                                    control: "text",
                                    component: "dpInput",
                                    attributes: {
                                        name: "Text",
                                        cssStyle: "resize:none",
                                        disabled: "",
                                        readonly: "",
                                        maxlength: 200,
                                        placeholder: "Type here"
                                    },
                                    validation: {}
                                }, {
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
            methods: {
                showSoloCard: function(t) {
                    return !(t.isWrapper || .01 == t.status || (91.5 == t.status || 91.6 == t.status) && 0 == this.selectedTab || 95.6 == t.status && 2 == this.selectedTab)
                },
                refreshTaskList: function() {
                    this.getTask(this.selectedTab + 1)
                },
                OpenTaskcard: function(t) {
                    this.breadCrumbList["length"] < 1 && this.breadCrumbList.push({
                        id: t.id,
                        number: t.number
                    }),
                    this.showTask = !0,
                    this.taskData = t
                },
                OpenSubTaskcard: function(t) {
                    console.log(t),
                    this.$refs.taskView.getTaskById(),
                    this.showTask = !0,
                    this.taskData = t,
                    this.tcvKey++
                },
                OpenSubTaskFromTimeline: function(t) {
                    this.$refs.taskCardViewHeaderRef.breadCrumbList.push({
                        id: t.id,
                        number: t.number,
                        taskType: t.taskType
                    }),
                    this.getTaskTimelineHeader(t),
                    this.openTaskTimeline(t)
                },
                taskViewClose: function() {
                    this.showTask = !1,
                    this.breadCrumbList = []
                },
                taskMoved: function(t, e) {
                    var a = this;
                    if (t && t.added) {
                        if (t.added.element.isWrapper)
                            return this.getTask(this.selectedTab + 1),
                            void this.showToast("Restricted!", "You cannot move this card!", "warning", 300);
                        var n = "/api/bitTask/Tasks/getEventbyTaskId?eventType=" + e + "&taskId=" + t.added.element.id;
                        Object(v["a"])(n, "get", "").then((function(n) {
                            try {
                                a.selectedCard = t.added.element,
                                a.selectedCard.status = e,
                                n.data.data.schema && n.data.data.schema.length > 0 ? (a.schema = n.data.data,
                                a.$refs.customContentOnStatusChange.Open()) : a.OnStatusChanged()
                            } catch (s) {
                                a.getTask(a.selectedTab + 1)
                            }
                        }
                        ))
                    }
                },
                searching: function(t) {
                    this.getUpdatedTask(this.selectedTab + 1, t)
                },
                getUpdatedTask: function(t, e) {
                    var a = this
                      , n = "";
                    n = e ? "/api/bitTask/Tasks/TaskList?taskKind=" + t + "&contains=" + e : "/api/bitTask/Tasks/TaskList?taskKind=" + t,
                    Object(v["a"])(n, "get", "").then((function(t) {
                        a.taskList = t.data.data,
                        a.taskList.forEach((function(t) {
                            t.pageNo += 1
                        }
                        ))
                    }
                    )).catch((function(t) {
                        a.$refs.common.ManageResponse(t.response)
                    }
                    ))
                },
                lazyloadTask: function(t, e, a, n, s) {
                    var o = this
                      , r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ""
                      , i = "/api/bitTask/Tasks/StatusBasedTask?taskKind=" + t + "&fromValue=" + a + "&toValue=" + n + "&pageNo=" + s + "&recordsPerPage=10&contains=" + r;
                    Object(v["a"])(i, "get", "").then((function(t) {
                        var a = t.data.data.tasks;
                        o.taskList[e].tasks = o.taskList[e].tasks.concat(a),
                        o.taskList[e].pageNo += 1
                    }
                    )).catch((function(t) {
                        o.$refs.common.ManageResponse(t.response)
                    }
                    ))
                },
                getTask: function(t) {
                    var e = this
                      , a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (a) {
                        var n = document.querySelectorAll(".dp-zoom-enter")
                          , s = document.querySelectorAll(".dp-zoom-enter-2");
                        if (n) {
                            var o, r = Object(d["a"])(n);
                            try {
                                for (r.s(); !(o = r.n()).done; ) {
                                    var i = o.value;
                                    i.classList.add("dp-zoom-exit")
                                }
                            } catch (p) {
                                r.e(p)
                            } finally {
                                r.f()
                            }
                            var l, c = Object(d["a"])(s);
                            try {
                                for (c.s(); !(l = c.n()).done; ) {
                                    var u = l.value;
                                    u.classList.add("dp-zoom-exit-2")
                                }
                            } catch (p) {
                                c.e(p)
                            } finally {
                                c.f()
                            }
                            setTimeout((function() {
                                e.getUpdatedTask(t)
                            }
                            ), 300)
                        } else
                            this.getUpdatedTask(t)
                    } else
                        this.getUpdatedTask(t)
                },
                getassign: function() {
                    var t = "/api/bitTask/Tasks/getAssignee";
                    Object(v["a"])(t, "get", "").then((function(t) {}
                    )).catch((function(t) {}
                    ))
                },
                onSortEnd: function() {
                    this.dragStart = !1
                },
                addNewTask: function() {
                    this.showAddTaskSlideout = !this.showAddTaskSlideout
                },
                addTaskSlideoutClosed: function() {},
                manageResponse: function(t) {
                    this.$refs.common.ManageResponse(t)
                },
                OnStatusChanged: function(t) {
                    var e = this
                      , a = {};
                    a = t ? {
                        task: this.selectedCard,
                        event: t
                    } : {
                        task: this.selectedCard,
                        event: this.schema
                    };
                    var n = "/api/bitTask/Tasks/UpdateStatus";
                    Object(v["a"])(n, "post", a).then((function() {
                        e.$refs.customContentOnStatusChange.Close(),
                        e.getTask(e.selectedTab + 1)
                    }
                    )).catch((function(t) {
                        e.refreshTaskList(),
                        e.$refs.common.ManageResponse(t.response)
                    }
                    ))
                },
                customContentModalClosed: function() {
                    this.getTask(this.selectedTab + 1)
                },
                taskFileUploadModalClosed: function() {
                    this.getTask(this.selectedTab + 1)
                },
                openSubtask: function(t) {
                    this.$emit("openSubtask", t)
                },
                openTaskForEdit: function(t) {
                    this.$emit("openTaskForEdit", t)
                },
                moveTaskToProcessing: function(t) {
                    this.$emit("openTaskForEdit", t),
                    this.$emit("refreshTaskList")
                },
                openRelatedtask: function(t) {
                    this.$emit("openRelatedtask", t)
                },
                getTaskTimelineHeader: function(t) {
                    var e = this
                      , a = "/api/bitTask/Tasks/getbyid";
                    Object(v["a"])(a, "post", {
                        id: t.id
                    }).then((function(t) {
                        e.taskTimelineDataHeader = t.data.data
                    }
                    ))
                },
                openTaskTimeline: function(t) {
                    var e = this
                      , a = "/api/bitTask/Tasks/GetTaskAdddata?TaskId=" + t.id + "&TypeId=" + t.taskType;
                    Object(v["a"])(a, "get", "").then((function(a) {
                        e.taskTimelineData = a.data.data,
                        e.getTaskTimelineHeader(t),
                        e.showTaskTimelineSlideout = !0
                    }
                    ))
                },
                taskTimelineClose: function() {
                    this.taskTimelineData = {}
                },
                taskDeletemessage: function(t) {
                    this.selectedCard = t,
                    t.awaitingAcceptanceStatus ? this.taskWrapperDeleteClicked(t, null) : this.$refs.taskDeleteModal.Open()
                },
                taskWrapperDeleteClicked: function(t, e) {
                    var a = this.$refs.common
                      , n = this
                      , s = function() {
                        var s = Object(c["a"])(regeneratorRuntime.mark((function s() {
                            var o, r;
                            return regeneratorRuntime.wrap((function(s) {
                                while (1)
                                    switch (s.prev = s.next) {
                                    case 0:
                                        if (t.id) {
                                            s.next = 4;
                                            break
                                        }
                                        return s.abrupt("return");
                                    case 4:
                                        o = "/api/bitTask/Tasks/delete",
                                        r = {
                                            taskId: t.id,
                                            parameters: JSON.stringify(e)
                                        },
                                        Object(v["a"])(o, "post", r).then((function(t) {
                                            n.refreshTaskList(),
                                            a.ManageResponse(t),
                                            n.$refs.taskDeleteModal.Close()
                                        }
                                        )).catch((function(t) {
                                            console.log(t.response),
                                            a.ManageResponse(t.response),
                                            n.$refs.taskDeleteModal.Close()
                                        }
                                        ));
                                    case 7:
                                    case "end":
                                        return s.stop()
                                    }
                            }
                            ), s)
                        }
                        )));
                        return function() {
                            return s.apply(this, arguments)
                        }
                    }();
                    a.ConfirmBox("Confirm", "Are you sure you want to terminate?", "warning", "Yes", "No", s)
                },
                taskWrapperCancelClicked: function(t) {
                    var e = this.$refs.common
                      , a = function() {
                        var a = Object(c["a"])(regeneratorRuntime.mark((function a() {
                            var n, s = this;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        n = "/api/bitTask/Tasks/cancelschedule",
                                        Object(v["a"])(n, "post", t).then((function(t) {
                                            s.customContentModalClosed(),
                                            e.ManageResponse(t)
                                        }
                                        )).catch((function(t) {
                                            console.log(t),
                                            s.customContentModalClosed(),
                                            e.ManageResponse(t.response)
                                        }
                                        ));
                                    case 2:
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
                    e.ConfirmBox("Confirm", "Are you sure you want to cancel?", "warning", "Yes", "No", a)
                },
                taskWrapperPostponeClicked: function(t) {
                    this.schema.rescheduleSchema.model = {
                        task: t,
                        date: b()().format("YYYY-MM-DDThh:mm:ss")
                    },
                    this.$refs.onRescheduleTriggerModal.Open()
                },
                submenuClicked: function(t, e, a) {
                    this.taskList[a].tasks[e].subMenuList = [],
                    t.showDynamicMenu && (this.selectedCardIndex = {
                        childIndex: e,
                        parentIndex: a
                    },
                    this.commonVar = t.id,
                    this.commonApiForTaskWrapper(t.taskType, t.currentStep, {
                        from: "subMenu"
                    }, t.id)),
                    this.getNormalSubMenu(t, e, a, t.id)
                },
                openClonetask: function(t) {
                    this.selectedCard = t,
                    this.$refs.openClonetaskModal.Open()
                },
                taskFileUpload: function(t) {
                    this.selectedCard = t,
                    this.$refs.openTaskFileUploadModal.Open()
                },
                openTransfertask: function(t) {
                    this.selectedCard = t,
                    this.$refs.openTransfertaskModal.Open()
                },
                openRejectTask: function(t) {
                    this.selectedCard = t,
                    this.$refs.openRejecttaskModal.Open()
                },
                openSnoozetask: function(t) {
                    console.log("Snooze"),
                    this.selectedCard = t,
                    this.$refs.openSnoozeTaskModal.Open(),
                    console.log("Snooze")
                },
                handlerForCloneAndTransferSave: function(t, e) {
                    var a = this
                      , n = e
                      , s = {
                        taskId: this.selectedCard.id,
                        parameters: JSON.stringify(t)
                    };
                    Object(v["a"])(n, "post", s).then((function(t) {
                        a.$refs.common.ManageResponse(t),
                        a.$refs.openClonetaskModal.Close(),
                        a.$refs.openTransfertaskModal.Close(),
                        a.refreshTaskList()
                    }
                    )).catch((function(t) {
                        console.log(t),
                        a.$refs.common.ManageResponse(t.response)
                    }
                    ))
                },
                handleTaskSnooze: function() {
                    var t = this
                      , e = "/api/bitTask/Tasks/SnoozeTask";
                    this.snoozeTaskModel.taskId = this.selectedCard.id,
                    Object(v["a"])(e, "post", this.snoozeTaskModel).then((function(e) {
                        t.$refs.common.ManageResponse(e),
                        t.$refs.openSnoozeTaskModal.Close(),
                        t.refreshTaskList()
                    }
                    )).catch((function(e) {
                        console.log(e),
                        t.$refs.common.ManageResponse(e.response)
                    }
                    ))
                },
                handlerForTaskFileUploadSave: function(t, e) {
                    var a = this
                      , n = e
                      , s = t;
                    s.captions = {
                        attachments: "Attachments",
                        fileUrl: "File Url"
                    };
                    var o = {
                        taskId: this.selectedCard.id,
                        parameters: JSON.stringify(s)
                    };
                    Object(v["a"])(n, "post", o).then((function(t) {
                        a.$refs.common.ManageResponse(t),
                        a.$refs.openClonetaskModal.Close(),
                        a.$refs.openTransfertaskModal.Close(),
                        a.$refs.openTaskFileUploadModal.Close(),
                        a.refreshTaskList()
                    }
                    )).catch((function(t) {
                        console.log(t),
                        a.$refs.common.ManageResponse(t.response)
                    }
                    ))
                },
                getNormalSubMenu: function(t, e, a, n) {
                    var s = this
                      , o = parseInt(this.selectedTab) + 1
                      , r = "/api/bitTask/Tasks/getSubMenus?WorkFlowBased=" + t.workFlowBased + "&taskKinds=" + o + "&taskId=" + n;
                    Object(v["a"])(r, "get", "").then((function(t) {
                        s.normalSubMenuList = t.data.data
                    }
                    ))
                },
                subMenuMetaReceived: function(t) {
                    t && t.addnlData && t.addnlData.subMenu && t.addnlData.subMenu.length > 0 && (this.taskList[this.selectedCardIndex.parentIndex].tasks[this.selectedCardIndex.childIndex].subMenuList = t.addnlData.subMenu)
                },
                subTaskMenuHandler: function(t, e, a) {
                    var n = this.$refs.common
                      , s = this
                      , o = function() {
                        var e = Object(c["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        t.schema.length > 0 ? (t.schema[0].modalSize ? s.customContentOnTriggerModalSize = t.schema[0].modalSize : s.customContentOnTriggerModalSize = "large",
                                        s.schema.initiatorSchema.schema = t.schema,
                                        t.model ? s.schema.initiatorSchema.model = t.model : s.schema.initiatorSchema.model = {},
                                        s.$refs.customContentOnTriggerModal.Open()) : (console.log(t),
                                        s.handleTaskAction("", t));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    n.ConfirmBox("Confirm", "Are you sure?", "warning", "Yes", "No", o)
                },
                taskWrapperScheduleClicked: function(t) {
                    this.commonVar = t.id,
                    this.commonApiForTaskWrapper(t.taskType, t.currentStep, null, t.id)
                },
                taskWrapperRejectClicked: function(t, e) {
                    var a = this.$refs.common
                      , n = this
                      , s = function() {
                        var a = Object(c["a"])(regeneratorRuntime.mark((function a() {
                            var s, o;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        s = "/api/bitTask/Tasks/RejectTask",
                                        o = {
                                            taskId: t.id,
                                            parameters: JSON.stringify(e)
                                        },
                                        Object(v["a"])(s, "post", o).then((function(t) {
                                            n.refreshTaskList(),
                                            n.$refs.openRejecttaskModal.Close(),
                                            n.$refs.common.ManageResponse(t)
                                        }
                                        )).catch((function(t) {
                                            n.$refs.common.ManageResponse(t.response)
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
                    a.ConfirmBox("Confirm", "Are you sure you want to reject?", "warning", "Yes", "No", s)
                },
                taskWrapperAcceptClicked: function(t) {
                    var e = this
                      , a = {
                        id: t.id
                    }
                      , n = "/api/bitTask/Tasks/AcceptTask";
                    Object(v["a"])(n, "post", a).then((function(t) {
                        e.$refs.customContentOnStatusChange.Close(),
                        e.getTask(e.selectedTab + 1)
                    }
                    )).catch((function(t) {
                        e.refreshTaskList(),
                        e.$refs.common.ManageResponse(t.response)
                    }
                    ))
                },
                taskApprovedClicked: function(t) {
                    var e = this
                      , a = {
                        id: t.id
                    }
                      , n = "/api/bitTask/Tasks/ApproveTask";
                    Object(v["a"])(n, "post", a).then((function(t) {
                        e.$refs.customContentOnStatusChange.Close(),
                        e.getTask(e.selectedTab + 1)
                    }
                    )).catch((function(t) {
                        e.refreshTaskList(),
                        e.$refs.common.ManageResponse(t.response)
                    }
                    ))
                },
                taskDescriptionUpdated: function(t) {
                    var e = this
                      , a = {
                        id: t.id,
                        description: t.taskDescription
                    }
                      , n = "/api/bitTask/Tasks/UpdateDesciption";
                    Object(v["a"])(n, "post", a).then((function(t) {
                        e.$refs.customContentOnStatusChange.Close(),
                        e.getTask(e.selectedTab + 1)
                    }
                    )).catch((function(t) {
                        e.refreshTaskList(),
                        e.$refs.common.ManageResponse(t.response)
                    }
                    ))
                },
                opentaskDocumentedClicked: function(t) {
                    this.selectedCard = t,
                    this.$refs.taskDocumentaionCompleteModal.Open()
                },
                taskDocumentedClicked: function(t, e) {
                    var a = this;
                    e.captions = {
                        description: "Description",
                        attachments: "Attachments",
                        fileUrl: "File Url"
                    };
                    var n = "/api/bitTask/Tasks/DocumentTask"
                      , s = {
                        taskId: t.id,
                        parameters: JSON.stringify(e)
                    };
                    Object(v["a"])(n, "post", s).then((function(t) {
                        a.refreshTaskList(),
                        a.$refs.taskDocumentaionCompleteModal.Close(),
                        a.$refs.common.ManageResponse(t)
                    }
                    )).catch((function(t) {
                        a.$refs.common.ManageResponse(t.response)
                    }
                    ))
                },
                openApprovalTaskReject: function(t) {
                    this.selectedCard = t,
                    this.$refs.approvalRejecttaskModal.Open()
                },
                taskApprovalRejectClicked: function(t, e) {
                    var a = this.$refs.common
                      , n = this;
                    e.captions = {
                        message: "Remarks"
                    };
                    var s = function() {
                        var a = Object(c["a"])(regeneratorRuntime.mark((function a() {
                            var s, o;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1)
                                    switch (a.prev = a.next) {
                                    case 0:
                                        s = "/api/bitTask/Tasks/ApprovalReject",
                                        o = {
                                            taskId: t.id,
                                            parameters: JSON.stringify(e)
                                        },
                                        Object(v["a"])(s, "post", o).then((function(t) {
                                            n.refreshTaskList(),
                                            n.$refs.approvalRejecttaskModal.Close(),
                                            n.$refs.common.ManageResponse(t)
                                        }
                                        )).catch((function(t) {
                                            n.$refs.common.ManageResponse(t.response)
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
                    a.ConfirmBox("Confirm", "Are you sure you want to reject?", "warning", "Yes", "No", s)
                },
                commonApiForTaskWrapper: function(t, e, a, n) {
                    var s = this
                      , o = "/api/bitTask/Tasks/getStep?stepNo=" + e + "&typeId=" + t + "&taskId=" + n;
                    Object(v["a"])(o, "get", "").then((function(t) {
                        t.data.data && (s.triggerName = t.data.data.triggerName,
                        s.schema.initiatorSchema.schema = JSON.parse(JSON.stringify(t.data.data.schema)),
                        s.schema.initiatorSchema.model = JSON.parse(JSON.stringify(t.data.data.model)),
                        a && "subMenu" == a.from ? s.subMenuMetaReceived(t.data.data) : s.$refs.customContentOnTriggerModal.Open())
                    }
                    )).catch((function(t) {
                        return console.log(t)
                    }
                    ))
                },
                handleTaskAction: function(t, e) {
                    var a = this;
                    this.$refs.customContentSchemaWrapperRef ? this.$refs.customContentSchemaWrapperRef.validate().then((function(n) {
                        n && a.taskActionHandler(e, t)
                    }
                    )) : this.taskActionHandler(e, t)
                },
                taskPartialSaveHandler: function(t, e) {
                    this.taskActionHandler(e, t)
                },
                handleTaskReschedule: function(t, e) {
                    var a = this
                      , n = "/api/bitTask/Tasks/reschedule";
                    Object(v["a"])(n, "post", t).then((function(t) {
                        a.$refs.onRescheduleTriggerModal.Close(),
                        a.$refs.common.ManageResponse(t)
                    }
                    )).catch((function(t) {
                        console.log(t),
                        a.$refs.common.ManageResponse(t.response)
                    }
                    ))
                },
                taskActionHandlerResponse: function(t) {
                    this.$refs.customContentOnTriggerModal.Close(),
                    t.data.data ? t.data.data.stepNo && t.data.data.taskType && this.commonApiForTaskWrapper(t.data.data.taskType, t.data.data.stepNo, t.data.date.taskId) : this.$refs.common.ManageResponse(t)
                },
                taskActionHandlerError: function(t) {
                    this.$refs.common.ManageResponse(t)
                },
                openmarkTaskComplete: function(t) {
                    this.selectedCard = t,
                    this.$refs.taskCompleteModal.Open()
                },
                markTaskComplete: function(t, e) {
                    var a = this;
                    e.captions = {
                        description: "Description"
                    };
                    var n = this.$refs.common
                      , s = function() {
                        var n = Object(c["a"])(regeneratorRuntime.mark((function n() {
                            var s, o;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1)
                                    switch (n.prev = n.next) {
                                    case 0:
                                        s = {
                                            taskId: t.id,
                                            parameters: JSON.stringify(e)
                                        },
                                        o = "/api/bitTask/Tasks/MarkAsComplete",
                                        Object(v["a"])(o, "post", s).then((function(t) {
                                            a.$refs.common.ManageResponse(t),
                                            a.refreshTaskList(),
                                            a.$refs.taskCompleteModal.Close()
                                        }
                                        )).catch((function(t) {
                                            a.refreshTaskList(),
                                            a.$refs.common.ManageResponse(t.response)
                                        }
                                        ));
                                    case 3:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n)
                        }
                        )));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }();
                    n.ConfirmBox("Are you sure?", "This will mark the task as completed", "warning", "Yes", "No", s)
                }
            },
            computed: {
                dragOptions: function() {
                    return {
                        animation: 200,
                        group: "description",
                        disabled: !1,
                        ghostClass: "ghost"
                    }
                }
            }
        })
          , Nt = It
          , $t = (a("502f"),
        a("5124"),
        Object(S["a"])(Nt, O, E, !1, null, "cb294d04", null))
          , Pt = $t.exports
          , Lt = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "mt-2"
            }, [a("slide-out", {
                ref: "showTask",
                staticClass: "task-view",
                attrs: {
                    visible: t.showTask,
                    dock: "right",
                    size: t.dWidth > 768 ? "60%" : "100%"
                },
                on: {
                    "update:visible": function(e) {
                        t.showTask = e
                    },
                    close: t.taskViewClose
                }
            }, [a("div", [t.showTask ? a("TaskCardView", {
                attrs: {
                    taskId: t.taskData.id,
                    taskData: t.taskData
                },
                on: {
                    taskViewClose: t.taskViewClose,
                    OpenSubTaskcard: t.OpenSubTaskcard
                }
            }) : t._e()], 1)]), a("b-row", [a("b-col", {
                staticClass: "mb-30",
                attrs: {
                    cols: "12"
                }
            }, [a("b-card", {
                staticStyle: {
                    "min-height": "110px"
                }
            }, [a("div", {
                staticClass: "row"
            }, t._l(t.taskList, (function(e, n) {
                return a("div", {
                    key: n,
                    staticClass: "col-lg-4 col-md-12"
                }, [e.isWrapper ? t._e() : a("soloTaskCard", {
                    attrs: {
                        taskCard: e
                    },
                    on: {
                        OpenTaskcard: t.OpenTaskcard,
                        openSubtask: t.openSubtask,
                        refreshTaskList: t.refreshTaskList
                    }
                }), e.isWrapper ? a("soloTaskCardWrapper", {
                    staticClass: "dp-zoom-enter",
                    attrs: {
                        taskCard: e
                    },
                    on: {
                        taskCancelClicked: function(a) {
                            return t.taskWrapperCancelClicked(e)
                        },
                        taskPostponeClicked: function(a) {
                            return t.taskWrapperPostponeClicked(e)
                        },
                        taskScheduleClicked: function(a) {
                            return t.taskWrapperScheduleClicked(e)
                        }
                    }
                }) : t._e()], 1)
            }
            )), 0), t.taskList.length < 1 ? a("b-row", {
                staticClass: "d-flex justify-content-center mt-4"
            }, [t._v("No tasks to show")]) : t._e()], 1)], 1)], 1)], 1)
        }
          , jt = []
          , Bt = a("2909")
          , Yt = {
            mixins: [z["a"]],
            display: "Transitions",
            order: 7,
            components: {
                soloTaskCard: H,
                TaskCardView: X["a"],
                soloTaskCardWrapper: Z,
                SlideOut: Rt.a
            },
            props: {
                selectedTab: Number
            },
            mounted: function() {
                this.getTask(1),
                this.getassign()
            },
            watch: {
                selectedTab: function(t) {
                    this.getTask(t + 1)
                },
                showTask: function(t) {
                    this.dWidth = window.innerWidth
                }
            },
            data: function() {
                return {
                    taskListOld: [],
                    taskList: [],
                    showAddTaskSlideout: !1,
                    drag: !1,
                    showTask: !1,
                    dWidth: window.innerWidth,
                    taskData: [],
                    model: {
                        name: "hi",
                        customData: {},
                        assignToMe: !0
                    }
                }
            },
            methods: {
                refreshTaskList: function() {
                    this.getTask(this.selectedTab + 1)
                },
                OpenTaskcard: function(t) {
                    this.showTask = !0,
                    this.taskData = t
                },
                OpenSubTaskcard: function(t) {
                    console.log(t),
                    this.showTask = !0,
                    this.taskData = t
                },
                taskViewClose: function() {
                    this.showTask = !1
                },
                getTask: function(t) {
                    var e = this
                      , a = "/api/bitTask/Tasks/TaskList?taskKind=" + t;
                    Object(v["a"])(a, "get", "").then((function(t) {
                        e.taskListOld = t.data.data,
                        e.taskList = [];
                        var a, n = Object(d["a"])(e.taskListOld);
                        try {
                            for (n.s(); !(a = n.n()).done; ) {
                                var s = a.value;
                                e.taskList = [].concat(Object(Bt["a"])(e.taskList), Object(Bt["a"])(s.tasks))
                            }
                        } catch (o) {
                            n.e(o)
                        } finally {
                            n.f()
                        }
                    }
                    )).catch((function(t) {}
                    ))
                },
                getassign: function() {
                    var t = "/api/bitTask/Tasks/getAssignee";
                    Object(v["a"])(t, "get", "").then((function(t) {}
                    )).catch((function(t) {}
                    ))
                },
                onSortEnd: function() {
                    this.dragStart = !1
                },
                addNewTask: function() {
                    this.showAddTaskSlideout = !this.showAddTaskSlideout
                },
                addTaskSlideoutClosed: function() {},
                openSubtask: function(t) {
                    this.$emit("openSubtask", t)
                },
                taskWrapperCancelClicked: function() {},
                taskWrapperPostponeClicked: function() {
                    this.schema.rescheduleSchema.model = {}
                },
                taskWrapperScheduleClicked: function(t) {
                    this.commonVar = t.id,
                    this.commonApiForTaskWrapper(t.taskType, t.currentStep)
                }
            },
            computed: {
                dragOptions: function() {
                    return {
                        animation: 200,
                        group: "description",
                        disabled: !1,
                        ghostClass: "ghost"
                    }
                }
            }
        }
          , zt = Yt
          , Ft = (a("a216"),
        a("7eac"),
        Object(S["a"])(zt, Lt, jt, !1, null, "43a22057", null))
          , Ut = Ft.exports
          , Wt = {
            components: {
                newTaskComp: M,
                kanban: Pt,
                gridViewTasks: Ut,
                common: u["a"],
                Multiselect: m.a,
                SlideOut: Rt.a,
                flatPickr: C.a
            },
            metaInfo: {
                title: "Dashboard"
            },
            data: function() {
                return {
                    greet: "Hi!",
                    displaySwitchselected: "kanbanView",
                    dWidth: window.innerWidth,
                    showAddTaskSlideout: !1,
                    subTask: !1,
                    relatedTask: !1,
                    pendingFilter: !1,
                    selectedTab: 0,
                    addOrEdit: "add",
                    taskDetails: {},
                    assigneesSelected: "",
                    assigneesList: [],
                    quickTask: {
                        title: ""
                    },
                    configs: {
                        dueDateConfig: {
                            inline: !0,
                            altFormat: "d-m-Y",
                            altInput: !0
                        }
                    },
                    model: {
                        name: "hi",
                        customData: {},
                        assignToMe: !0
                    },
                    formCreator: [{
                        slot: "slot1",
                        parent: {
                            parentClass: "mt-2",
                            parentStyle: "",
                            formClass: "row justify-content-between"
                        },
                        options: [{
                            containerClass: "col-4",
                            control: "input",
                            controlType: "text",
                            caption: "Task No #",
                            name: "taskNo",
                            validation: "",
                            cssClass: "",
                            cssStyle: "",
                            customProps: {
                                disabled: !0
                            }
                        }, {
                            containerClass: "col-4",
                            control: "flatpicker",
                            caption: "Date",
                            cssClass: "",
                            name: "taskDate",
                            customProps: {
                                maxDate: b()().format("YYYY-MM-DD")
                            }
                        }, {
                            containerClass: "col-12",
                            control: "input",
                            controlType: "text",
                            caption: "Title",
                            name: "title",
                            validation: "required",
                            cssClass: "",
                            cssStyle: "",
                            customProps: {}
                        }, {
                            containerClass: "col-12",
                            control: "textarea",
                            caption: "Description",
                            name: "description",
                            maxlength: "200",
                            validation: "required",
                            cssClass: "",
                            cssStyle: "resize:none",
                            placeholder: "Enter Description",
                            customProps: {
                                dense: !0,
                                noResize: !0,
                                autoGrow: !1,
                                rows: 3
                            }
                        }, {
                            containerClass: "col-4",
                            control: "flatpicker",
                            caption: "Target Date",
                            name: "targetDate",
                            customProps: {
                                dateFormat: "Y-m-d H:m",
                                minDate: b()().format("YYYY-MM-DD"),
                                enableTime: !0
                            }
                        }]
                    }, {
                        slot: "slot2",
                        parent: {
                            parentClass: "mt-2",
                            parentStyle: ""
                        },
                        options: [{
                            control: "input",
                            controlType: "text",
                            includeInModel: !0,
                            caption: "Email",
                            name: "email",
                            validation: "required|email"
                        }]
                    }],
                    newTaskModal: !1,
                    editTaskId: "",
                    qtDuedateKey: 9808
                }
            },
            watch: {
                showAddTaskSlideout: function(t) {
                    this.dWidth = window.innerWidth
                },
                "quickTask.title": function(t) {
                    t || (this.assigneesSelected = "",
                    this.quickTask.dueDate = "")
                },
                "quickTask.dueDate": function(t) {
                    this.qtDuedateKey++
                }
            },
            mounted: function() {
                this.setGreeting(),
                this.model.taskDate = b()().format("YYYY-MM-DD"),
                this.model.targetDate = b()().format("YYYY-MM-DD")
            },
            methods: {
                saveQuickTask: function() {
                    var t = this
                      , e = RegExp(/^\s*$/).test(this.quickTask.title);
                    if (!e) {
                        var a = "/api/bitTask/Tasks/QuickTaskSave"
                          , n = {
                            title: this.quickTask.title,
                            role: null,
                            targetDate: null
                        };
                        this.assigneesSelected && (n.role = this.assigneesSelected.id),
                        this.quickTask.dueDate && (n.targetDate = this.quickTask.dueDate),
                        Object(v["a"])(a, "post", n).then((function(e) {
                            t.$refs.kanbanComp.getTask(t.selectedTab + 1),
                            t.quickTask = {
                                title: "",
                                dueDate: ""
                            },
                            t.$refs.quickTaskInput.focus()
                        }
                        )).catch((function(t) {
                            console.log(t)
                        }
                        ))
                    }
                },
                getassign: function() {
                    var t = this
                      , e = !1
                      , a = "0176ae0c-25d7-4a37-a46d-e53ae331a5a9"
                      , n = "/api/bitTask/Tasks/getAssignee?typeId=" + a + "&filterResult=" + e;
                    Object(v["a"])(n, "get", "").then((function(e) {
                        t.assigneesList = e.data.data
                    }
                    )).catch((function(t) {}
                    ))
                },
                setGreeting: function() {
                    var t = (new Date).getHours();
                    this.greet = t < 12 ? "Good Morning!" : t >= 12 && t <= 16 ? "Good Afternoon!" : t >= 17 && t <= 19 ? "Good Evening!" : "Good Night!"
                },
                newTask: function() {
                    this.newTaskModal = !1,
                    this.addOrEdit = "add",
                    this.showAddTaskSlideout = !this.showAddTaskSlideout
                },
                openTaskForEdit: function(t) {
                    this.newTaskModal = !1,
                    this.addOrEdit = "edit",
                    this.editTaskId = t.id,
                    this.showAddTaskSlideout = !this.showAddTaskSlideout
                },
                addTaskSlideoutClosed: function() {
                    "gridView" == this.displaySwitchselected ? this.$refs.gridViewTasksComp.getTask(this.selectedTab + 1) : "kanbanView" == this.displaySwitchselected && this.$refs.kanbanComp.getTask(this.selectedTab + 1),
                    this.subTask && this.clearMastertask(),
                    this.relatedTask && this.clearRelatedTask(),
                    this.$refs.newTaskCompRef.initModel()
                },
                clearMastertask: function() {
                    this.showAddTaskSlideout = !1,
                    this.subTask = !1,
                    this.taskDetails = {}
                },
                clearRelatedTask: function() {
                    this.showAddTaskSlideout = !1,
                    this.relatedTask = !1,
                    this.taskDetails = {}
                },
                openSubtask: function(t) {
                    this.showAddTaskSlideout = !0,
                    this.addOrEdit = "add",
                    this.subTask = !0,
                    this.taskDetails = {
                        taskNumber: t.number,
                        taskId: t.id,
                        currentStep: t.currentStep
                    }
                },
                openRelatedtask: function(t) {
                    this.showAddTaskSlideout = !0,
                    this.addOrEdit = "add",
                    this.relatedTask = !0,
                    this.taskDetails = {
                        taskNumber: t.number,
                        taskId: t.id,
                        currentStep: t.currentStep
                    }
                },
                taskCreated: function(t) {
                    this.showAddTaskSlideout = !1,
                    this.$refs.common.ManageResponse(t)
                }
            }
        }
          , Ht = Wt
          , Xt = (a("23dd"),
        Object(S["a"])(Ht, o, r, !1, null, null, null))
          , qt = Xt.exports
          , Vt = a("51df")
          , Gt = a("5f87")
          , Kt = {
            components: {
                taskScreen: qt
            },
            metaInfo: {
                title: "Dashboard"
            },
            data: function() {
                return {
                    model: {},
                    schema: Vt,
                    encodable: "",
                    decodable: "",
                    encoded: "",
                    decoded: ""
                }
            },
            created: function() {},
            mounted: function() {},
            methods: {
                encryptHash: function() {
                    this.encoded = Object(Gt["b"])(this.encodable)
                },
                decryptHash: function() {
                    this.decoded = Object(Gt["a"])(this.decodable)
                },
                updateSchema: function(t) {
                    this.schema = t
                },
                OnSave: function(t, e) {
                    console.log(t, this.$root)
                }
            }
        }
          , Jt = Kt
          , Zt = (a("f147"),
        a("d6ee"),
        Object(S["a"])(Jt, n, s, !1, null, "2ce33ba4", null));
        e["default"] = Zt.exports
    },
    "8f88": function(t, e, a) {
        "use strict";
        var n = a("fbea")
          , s = a.n(n);
        s.a
    },
    9331: function(t, e, a) {},
    9403: function(t, e, a) {},
    9550: function(t, e, a) {
        "use strict";
        var n = a("9f12")
          , s = a.n(n);
        s.a
    },
    9853: function(t, e, a) {},
    "9f12": function(t, e, a) {},
    a216: function(t, e, a) {
        "use strict";
        var n = a("3fa7")
          , s = a.n(n);
        s.a
    },
    a630: function(t, e, a) {
        var n = a("23e7")
          , s = a("4df4")
          , o = a("1c7e")
          , r = !o((function(t) {
            Array.from(t)
        }
        ));
        n({
            target: "Array",
            stat: !0,
            forced: r
        }, {
            from: s
        })
    },
    a873: function(t, e, a) {
        "use strict";
        var n = a("02bb")
          , s = a.n(n);
        s.a
    },
    a906: function(t, e, a) {},
    a9e3: function(t, e, a) {
        "use strict";
        var n = a("83ab")
          , s = a("da84")
          , o = a("94ca")
          , r = a("6eeb")
          , i = a("5135")
          , l = a("c6b6")
          , c = a("7156")
          , d = a("c04e")
          , u = a("d039")
          , p = a("7c73")
          , f = a("241c").f
          , m = a("06cf").f
          , h = a("9bf2").f
          , v = a("58a8").trim
          , g = "Number"
          , b = s[g]
          , y = b.prototype
          , k = l(p(y)) == g
          , C = function(t) {
            var e, a, n, s, o, r, i, l, c = d(t, !1);
            if ("string" == typeof c && c.length > 2)
                if (c = v(c),
                e = c.charCodeAt(0),
                43 === e || 45 === e) {
                    if (a = c.charCodeAt(2),
                    88 === a || 120 === a)
                        return NaN
                } else if (48 === e) {
                    switch (c.charCodeAt(1)) {
                    case 66:
                    case 98:
                        n = 2,
                        s = 49;
                        break;
                    case 79:
                    case 111:
                        n = 8,
                        s = 55;
                        break;
                    default:
                        return +c
                    }
                    for (o = c.slice(2),
                    r = o.length,
                    i = 0; i < r; i++)
                        if (l = o.charCodeAt(i),
                        l < 48 || l > s)
                            return NaN;
                    return parseInt(o, n)
                }
            return +c
        };
        if (o(g, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
            for (var T, _ = function(t) {
                var e = arguments.length < 1 ? 0 : t
                  , a = this;
                return a instanceof _ && (k ? u((function() {
                    y.valueOf.call(a)
                }
                )) : l(a) != g) ? c(new b(C(e)), a, _) : C(e)
            }, x = n ? f(b) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; x.length > w; w++)
                i(b, T = x[w]) && !i(_, T) && h(_, T, m(b, T));
            _.prototype = y,
            y.constructor = _,
            r(s, g, _)
        }
    },
    aa47: function(t, e, a) {
        "use strict";
        /**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
        function n(t) {
            return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            n(t)
        }
        function s(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a,
            t
        }
        function o() {
            return o = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = arguments[e];
                    for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n])
                }
                return t
            }
            ,
            o.apply(this, arguments)
        }
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {}
                  , n = Object.keys(a);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter((function(t) {
                    return Object.getOwnPropertyDescriptor(a, t).enumerable
                }
                )))),
                n.forEach((function(e) {
                    s(t, e, a[e])
                }
                ))
            }
            return t
        }
        function i(t, e) {
            if (null == t)
                return {};
            var a, n, s = {}, o = Object.keys(t);
            for (n = 0; n < o.length; n++)
                a = o[n],
                e.indexOf(a) >= 0 || (s[a] = t[a]);
            return s
        }
        function l(t, e) {
            if (null == t)
                return {};
            var a, n, s = i(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (n = 0; n < o.length; n++)
                    a = o[n],
                    e.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(t, a) && (s[a] = t[a])
            }
            return s
        }
        function c(t) {
            return d(t) || u(t) || p()
        }
        function d(t) {
            if (Array.isArray(t)) {
                for (var e = 0, a = new Array(t.length); e < t.length; e++)
                    a[e] = t[e];
                return a
            }
        }
        function u(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                return Array.from(t)
        }
        function p() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
        a.r(e),
        a.d(e, "MultiDrag", (function() {
            return je
        }
        )),
        a.d(e, "Sortable", (function() {
            return Zt
        }
        )),
        a.d(e, "Swap", (function() {
            return Se
        }
        ));
        var f = "1.10.2";
        function m(t) {
            if ("undefined" !== typeof window && window.navigator)
                return !!navigator.userAgent.match(t)
        }
        var h = m(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i)
          , v = m(/Edge/i)
          , g = m(/firefox/i)
          , b = m(/safari/i) && !m(/chrome/i) && !m(/android/i)
          , y = m(/iP(ad|od|hone)/i)
          , k = m(/chrome/i) && m(/android/i)
          , C = {
            capture: !1,
            passive: !1
        };
        function T(t, e, a) {
            t.addEventListener(e, a, !h && C)
        }
        function _(t, e, a) {
            t.removeEventListener(e, a, !h && C)
        }
        function x(t, e) {
            if (e) {
                if (">" === e[0] && (e = e.substring(1)),
                t)
                    try {
                        if (t.matches)
                            return t.matches(e);
                        if (t.msMatchesSelector)
                            return t.msMatchesSelector(e);
                        if (t.webkitMatchesSelector)
                            return t.webkitMatchesSelector(e)
                    } catch (a) {
                        return !1
                    }
                return !1
            }
        }
        function w(t) {
            return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
        }
        function S(t, e, a, n) {
            if (t) {
                a = a || document;
                do {
                    if (null != e && (">" === e[0] ? t.parentNode === a && x(t, e) : x(t, e)) || n && t === a)
                        return t;
                    if (t === a)
                        break
                } while (t = w(t))
            }
            return null
        }
        var D, M = /\s+/g;
        function O(t, e, a) {
            if (t && e)
                if (t.classList)
                    t.classList[a ? "add" : "remove"](e);
                else {
                    var n = (" " + t.className + " ").replace(M, " ").replace(" " + e + " ", " ");
                    t.className = (n + (a ? " " + e : "")).replace(M, " ")
                }
        }
        function E(t, e, a) {
            var n = t && t.style;
            if (n) {
                if (void 0 === a)
                    return document.defaultView && document.defaultView.getComputedStyle ? a = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (a = t.currentStyle),
                    void 0 === e ? a : a[e];
                e in n || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e),
                n[e] = a + ("string" === typeof a ? "" : "px")
            }
        }
        function A(t, e) {
            var a = "";
            if ("string" === typeof t)
                a = t;
            else
                do {
                    var n = E(t, "transform");
                    n && "none" !== n && (a = n + " " + a)
                } while (!e && (t = t.parentNode));
            var s = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
            return s && new s(a)
        }
        function R(t, e, a) {
            if (t) {
                var n = t.getElementsByTagName(e)
                  , s = 0
                  , o = n.length;
                if (a)
                    for (; s < o; s++)
                        a(n[s], s);
                return n
            }
            return []
        }
        function I() {
            var t = document.scrollingElement;
            return t || document.documentElement
        }
        function N(t, e, a, n, s) {
            if (t.getBoundingClientRect || t === window) {
                var o, r, i, l, c, d, u;
                if (t !== window && t !== I() ? (o = t.getBoundingClientRect(),
                r = o.top,
                i = o.left,
                l = o.bottom,
                c = o.right,
                d = o.height,
                u = o.width) : (r = 0,
                i = 0,
                l = window.innerHeight,
                c = window.innerWidth,
                d = window.innerHeight,
                u = window.innerWidth),
                (e || a) && t !== window && (s = s || t.parentNode,
                !h))
                    do {
                        if (s && s.getBoundingClientRect && ("none" !== E(s, "transform") || a && "static" !== E(s, "position"))) {
                            var p = s.getBoundingClientRect();
                            r -= p.top + parseInt(E(s, "border-top-width")),
                            i -= p.left + parseInt(E(s, "border-left-width")),
                            l = r + o.height,
                            c = i + o.width;
                            break
                        }
                    } while (s = s.parentNode);
                if (n && t !== window) {
                    var f = A(s || t)
                      , m = f && f.a
                      , v = f && f.d;
                    f && (r /= v,
                    i /= m,
                    u /= m,
                    d /= v,
                    l = r + d,
                    c = i + u)
                }
                return {
                    top: r,
                    left: i,
                    bottom: l,
                    right: c,
                    width: u,
                    height: d
                }
            }
        }
        function $(t, e, a) {
            var n = z(t, !0)
              , s = N(t)[e];
            while (n) {
                var o = N(n)[a]
                  , r = void 0;
                if (r = "top" === a || "left" === a ? s >= o : s <= o,
                !r)
                    return n;
                if (n === I())
                    break;
                n = z(n, !1)
            }
            return !1
        }
        function P(t, e, a) {
            var n = 0
              , s = 0
              , o = t.children;
            while (s < o.length) {
                if ("none" !== o[s].style.display && o[s] !== Zt.ghost && o[s] !== Zt.dragged && S(o[s], a.draggable, t, !1)) {
                    if (n === e)
                        return o[s];
                    n++
                }
                s++
            }
            return null
        }
        function L(t, e) {
            var a = t.lastElementChild;
            while (a && (a === Zt.ghost || "none" === E(a, "display") || e && !x(a, e)))
                a = a.previousElementSibling;
            return a || null
        }
        function j(t, e) {
            var a = 0;
            if (!t || !t.parentNode)
                return -1;
            while (t = t.previousElementSibling)
                "TEMPLATE" === t.nodeName.toUpperCase() || t === Zt.clone || e && !x(t, e) || a++;
            return a
        }
        function B(t) {
            var e = 0
              , a = 0
              , n = I();
            if (t)
                do {
                    var s = A(t)
                      , o = s.a
                      , r = s.d;
                    e += t.scrollLeft * o,
                    a += t.scrollTop * r
                } while (t !== n && (t = t.parentNode));
            return [e, a]
        }
        function Y(t, e) {
            for (var a in t)
                if (t.hasOwnProperty(a))
                    for (var n in e)
                        if (e.hasOwnProperty(n) && e[n] === t[a][n])
                            return Number(a);
            return -1
        }
        function z(t, e) {
            if (!t || !t.getBoundingClientRect)
                return I();
            var a = t
              , n = !1;
            do {
                if (a.clientWidth < a.scrollWidth || a.clientHeight < a.scrollHeight) {
                    var s = E(a);
                    if (a.clientWidth < a.scrollWidth && ("auto" == s.overflowX || "scroll" == s.overflowX) || a.clientHeight < a.scrollHeight && ("auto" == s.overflowY || "scroll" == s.overflowY)) {
                        if (!a.getBoundingClientRect || a === document.body)
                            return I();
                        if (n || e)
                            return a;
                        n = !0
                    }
                }
            } while (a = a.parentNode);
            return I()
        }
        function F(t, e) {
            if (t && e)
                for (var a in e)
                    e.hasOwnProperty(a) && (t[a] = e[a]);
            return t
        }
        function U(t, e) {
            return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
        }
        function W(t, e) {
            return function() {
                if (!D) {
                    var a = arguments
                      , n = this;
                    1 === a.length ? t.call(n, a[0]) : t.apply(n, a),
                    D = setTimeout((function() {
                        D = void 0
                    }
                    ), e)
                }
            }
        }
        function H() {
            clearTimeout(D),
            D = void 0
        }
        function X(t, e, a) {
            t.scrollLeft += e,
            t.scrollTop += a
        }
        function q(t) {
            var e = window.Polymer
              , a = window.jQuery || window.Zepto;
            return e && e.dom ? e.dom(t).cloneNode(!0) : a ? a(t).clone(!0)[0] : t.cloneNode(!0)
        }
        function V(t, e) {
            E(t, "position", "absolute"),
            E(t, "top", e.top),
            E(t, "left", e.left),
            E(t, "width", e.width),
            E(t, "height", e.height)
        }
        function G(t) {
            E(t, "position", ""),
            E(t, "top", ""),
            E(t, "left", ""),
            E(t, "width", ""),
            E(t, "height", "")
        }
        var K = "Sortable" + (new Date).getTime();
        function J() {
            var t, e = [];
            return {
                captureAnimationState: function() {
                    if (e = [],
                    this.options.animation) {
                        var t = [].slice.call(this.el.children);
                        t.forEach((function(t) {
                            if ("none" !== E(t, "display") && t !== Zt.ghost) {
                                e.push({
                                    target: t,
                                    rect: N(t)
                                });
                                var a = r({}, e[e.length - 1].rect);
                                if (t.thisAnimationDuration) {
                                    var n = A(t, !0);
                                    n && (a.top -= n.f,
                                    a.left -= n.e)
                                }
                                t.fromRect = a
                            }
                        }
                        ))
                    }
                },
                addAnimationState: function(t) {
                    e.push(t)
                },
                removeAnimationState: function(t) {
                    e.splice(Y(e, {
                        target: t
                    }), 1)
                },
                animateAll: function(a) {
                    var n = this;
                    if (!this.options.animation)
                        return clearTimeout(t),
                        void ("function" === typeof a && a());
                    var s = !1
                      , o = 0;
                    e.forEach((function(t) {
                        var e = 0
                          , a = t.target
                          , r = a.fromRect
                          , i = N(a)
                          , l = a.prevFromRect
                          , c = a.prevToRect
                          , d = t.rect
                          , u = A(a, !0);
                        u && (i.top -= u.f,
                        i.left -= u.e),
                        a.toRect = i,
                        a.thisAnimationDuration && U(l, i) && !U(r, i) && (d.top - i.top) / (d.left - i.left) === (r.top - i.top) / (r.left - i.left) && (e = Q(d, l, c, n.options)),
                        U(i, r) || (a.prevFromRect = r,
                        a.prevToRect = i,
                        e || (e = n.options.animation),
                        n.animate(a, d, i, e)),
                        e && (s = !0,
                        o = Math.max(o, e),
                        clearTimeout(a.animationResetTimer),
                        a.animationResetTimer = setTimeout((function() {
                            a.animationTime = 0,
                            a.prevFromRect = null,
                            a.fromRect = null,
                            a.prevToRect = null,
                            a.thisAnimationDuration = null
                        }
                        ), e),
                        a.thisAnimationDuration = e)
                    }
                    )),
                    clearTimeout(t),
                    s ? t = setTimeout((function() {
                        "function" === typeof a && a()
                    }
                    ), o) : "function" === typeof a && a(),
                    e = []
                },
                animate: function(t, e, a, n) {
                    if (n) {
                        E(t, "transition", ""),
                        E(t, "transform", "");
                        var s = A(this.el)
                          , o = s && s.a
                          , r = s && s.d
                          , i = (e.left - a.left) / (o || 1)
                          , l = (e.top - a.top) / (r || 1);
                        t.animatingX = !!i,
                        t.animatingY = !!l,
                        E(t, "transform", "translate3d(" + i + "px," + l + "px,0)"),
                        Z(t),
                        E(t, "transition", "transform " + n + "ms" + (this.options.easing ? " " + this.options.easing : "")),
                        E(t, "transform", "translate3d(0,0,0)"),
                        "number" === typeof t.animated && clearTimeout(t.animated),
                        t.animated = setTimeout((function() {
                            E(t, "transition", ""),
                            E(t, "transform", ""),
                            t.animated = !1,
                            t.animatingX = !1,
                            t.animatingY = !1
                        }
                        ), n)
                    }
                }
            }
        }
        function Z(t) {
            return t.offsetWidth
        }
        function Q(t, e, a, n) {
            return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - a.top, 2) + Math.pow(e.left - a.left, 2)) * n.animation
        }
        var tt = []
          , et = {
            initializeByDefault: !0
        }
          , at = {
            mount: function(t) {
                for (var e in et)
                    et.hasOwnProperty(e) && !(e in t) && (t[e] = et[e]);
                tt.push(t)
            },
            pluginEvent: function(t, e, a) {
                var n = this;
                this.eventCanceled = !1,
                a.cancel = function() {
                    n.eventCanceled = !0
                }
                ;
                var s = t + "Global";
                tt.forEach((function(n) {
                    e[n.pluginName] && (e[n.pluginName][s] && e[n.pluginName][s](r({
                        sortable: e
                    }, a)),
                    e.options[n.pluginName] && e[n.pluginName][t] && e[n.pluginName][t](r({
                        sortable: e
                    }, a)))
                }
                ))
            },
            initializePlugins: function(t, e, a, n) {
                for (var s in tt.forEach((function(n) {
                    var s = n.pluginName;
                    if (t.options[s] || n.initializeByDefault) {
                        var r = new n(t,e,t.options);
                        r.sortable = t,
                        r.options = t.options,
                        t[s] = r,
                        o(a, r.defaults)
                    }
                }
                )),
                t.options)
                    if (t.options.hasOwnProperty(s)) {
                        var r = this.modifyOption(t, s, t.options[s]);
                        "undefined" !== typeof r && (t.options[s] = r)
                    }
            },
            getEventProperties: function(t, e) {
                var a = {};
                return tt.forEach((function(n) {
                    "function" === typeof n.eventProperties && o(a, n.eventProperties.call(e[n.pluginName], t))
                }
                )),
                a
            },
            modifyOption: function(t, e, a) {
                var n;
                return tt.forEach((function(s) {
                    t[s.pluginName] && s.optionListeners && "function" === typeof s.optionListeners[e] && (n = s.optionListeners[e].call(t[s.pluginName], a))
                }
                )),
                n
            }
        };
        function nt(t) {
            var e = t.sortable
              , a = t.rootEl
              , n = t.name
              , s = t.targetEl
              , o = t.cloneEl
              , i = t.toEl
              , l = t.fromEl
              , c = t.oldIndex
              , d = t.newIndex
              , u = t.oldDraggableIndex
              , p = t.newDraggableIndex
              , f = t.originalEvent
              , m = t.putSortable
              , g = t.extraEventProperties;
            if (e = e || a && a[K],
            e) {
                var b, y = e.options, k = "on" + n.charAt(0).toUpperCase() + n.substr(1);
                !window.CustomEvent || h || v ? (b = document.createEvent("Event"),
                b.initEvent(n, !0, !0)) : b = new CustomEvent(n,{
                    bubbles: !0,
                    cancelable: !0
                }),
                b.to = i || a,
                b.from = l || a,
                b.item = s || a,
                b.clone = o,
                b.oldIndex = c,
                b.newIndex = d,
                b.oldDraggableIndex = u,
                b.newDraggableIndex = p,
                b.originalEvent = f,
                b.pullMode = m ? m.lastPutMode : void 0;
                var C = r({}, g, at.getEventProperties(n, e));
                for (var T in C)
                    b[T] = C[T];
                a && a.dispatchEvent(b),
                y[k] && y[k].call(e, b)
            }
        }
        var st = function(t, e) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = a.evt
              , s = l(a, ["evt"]);
            at.pluginEvent.bind(Zt)(t, e, r({
                dragEl: rt,
                parentEl: it,
                ghostEl: lt,
                rootEl: ct,
                nextEl: dt,
                lastDownEl: ut,
                cloneEl: pt,
                cloneHidden: ft,
                dragStarted: St,
                putSortable: yt,
                activeSortable: Zt.active,
                originalEvent: n,
                oldIndex: mt,
                oldDraggableIndex: vt,
                newIndex: ht,
                newDraggableIndex: gt,
                hideGhostForTarget: Vt,
                unhideGhostForTarget: Gt,
                cloneNowHidden: function() {
                    ft = !0
                },
                cloneNowShown: function() {
                    ft = !1
                },
                dispatchSortableEvent: function(t) {
                    ot({
                        sortable: e,
                        name: t,
                        originalEvent: n
                    })
                }
            }, s))
        };
        function ot(t) {
            nt(r({
                putSortable: yt,
                cloneEl: pt,
                targetEl: rt,
                rootEl: ct,
                oldIndex: mt,
                oldDraggableIndex: vt,
                newIndex: ht,
                newDraggableIndex: gt
            }, t))
        }
        var rt, it, lt, ct, dt, ut, pt, ft, mt, ht, vt, gt, bt, yt, kt, Ct, Tt, _t, xt, wt, St, Dt, Mt, Ot, Et, At = !1, Rt = !1, It = [], Nt = !1, $t = !1, Pt = [], Lt = !1, jt = [], Bt = "undefined" !== typeof document, Yt = y, zt = v || h ? "cssFloat" : "float", Ft = Bt && !k && !y && "draggable"in document.createElement("div"), Ut = function() {
            if (Bt) {
                if (h)
                    return !1;
                var t = document.createElement("x");
                return t.style.cssText = "pointer-events:auto",
                "auto" === t.style.pointerEvents
            }
        }(), Wt = function(t, e) {
            var a = E(t)
              , n = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth)
              , s = P(t, 0, e)
              , o = P(t, 1, e)
              , r = s && E(s)
              , i = o && E(o)
              , l = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + N(s).width
              , c = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + N(o).width;
            if ("flex" === a.display)
                return "column" === a.flexDirection || "column-reverse" === a.flexDirection ? "vertical" : "horizontal";
            if ("grid" === a.display)
                return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
            if (s && r["float"] && "none" !== r["float"]) {
                var d = "left" === r["float"] ? "left" : "right";
                return !o || "both" !== i.clear && i.clear !== d ? "horizontal" : "vertical"
            }
            return s && ("block" === r.display || "flex" === r.display || "table" === r.display || "grid" === r.display || l >= n && "none" === a[zt] || o && "none" === a[zt] && l + c > n) ? "vertical" : "horizontal"
        }, Ht = function(t, e, a) {
            var n = a ? t.left : t.top
              , s = a ? t.right : t.bottom
              , o = a ? t.width : t.height
              , r = a ? e.left : e.top
              , i = a ? e.right : e.bottom
              , l = a ? e.width : e.height;
            return n === r || s === i || n + o / 2 === r + l / 2
        }, Xt = function(t, e) {
            var a;
            return It.some((function(n) {
                if (!L(n)) {
                    var s = N(n)
                      , o = n[K].options.emptyInsertThreshold
                      , r = t >= s.left - o && t <= s.right + o
                      , i = e >= s.top - o && e <= s.bottom + o;
                    return o && r && i ? a = n : void 0
                }
            }
            )),
            a
        }, qt = function(t) {
            function e(t, a) {
                return function(n, s, o, r) {
                    var i = n.options.group.name && s.options.group.name && n.options.group.name === s.options.group.name;
                    if (null == t && (a || i))
                        return !0;
                    if (null == t || !1 === t)
                        return !1;
                    if (a && "clone" === t)
                        return t;
                    if ("function" === typeof t)
                        return e(t(n, s, o, r), a)(n, s, o, r);
                    var l = (a ? n : s).options.group.name;
                    return !0 === t || "string" === typeof t && t === l || t.join && t.indexOf(l) > -1
                }
            }
            var a = {}
              , s = t.group;
            s && "object" == n(s) || (s = {
                name: s
            }),
            a.name = s.name,
            a.checkPull = e(s.pull, !0),
            a.checkPut = e(s.put),
            a.revertClone = s.revertClone,
            t.group = a
        }, Vt = function() {
            !Ut && lt && E(lt, "display", "none")
        }, Gt = function() {
            !Ut && lt && E(lt, "display", "")
        };
        Bt && document.addEventListener("click", (function(t) {
            if (Rt)
                return t.preventDefault(),
                t.stopPropagation && t.stopPropagation(),
                t.stopImmediatePropagation && t.stopImmediatePropagation(),
                Rt = !1,
                !1
        }
        ), !0);
        var Kt = function(t) {
            if (rt) {
                t = t.touches ? t.touches[0] : t;
                var e = Xt(t.clientX, t.clientY);
                if (e) {
                    var a = {};
                    for (var n in t)
                        t.hasOwnProperty(n) && (a[n] = t[n]);
                    a.target = a.rootEl = e,
                    a.preventDefault = void 0,
                    a.stopPropagation = void 0,
                    e[K]._onDragOver(a)
                }
            }
        }
          , Jt = function(t) {
            rt && rt.parentNode[K]._isOutsideThisEl(t.target)
        };
        function Zt(t, e) {
            if (!t || !t.nodeType || 1 !== t.nodeType)
                throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
            this.el = t,
            this.options = e = o({}, e),
            t[K] = this;
            var a = {
                group: null,
                sort: !0,
                disabled: !1,
                store: null,
                handle: null,
                draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
                swapThreshold: 1,
                invertSwap: !1,
                invertedSwapThreshold: null,
                removeCloneOnHide: !0,
                direction: function() {
                    return Wt(t, this.options)
                },
                ghostClass: "sortable-ghost",
                chosenClass: "sortable-chosen",
                dragClass: "sortable-drag",
                ignore: "a, img",
                filter: null,
                preventOnFilter: !0,
                animation: 0,
                easing: null,
                setData: function(t, e) {
                    t.setData("Text", e.textContent)
                },
                dropBubble: !1,
                dragoverBubble: !1,
                dataIdAttr: "data-id",
                delay: 0,
                delayOnTouchOnly: !1,
                touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
                forceFallback: !1,
                fallbackClass: "sortable-fallback",
                fallbackOnBody: !1,
                fallbackTolerance: 0,
                fallbackOffset: {
                    x: 0,
                    y: 0
                },
                supportPointer: !1 !== Zt.supportPointer && "PointerEvent"in window,
                emptyInsertThreshold: 5
            };
            for (var n in at.initializePlugins(this, t, a),
            a)
                !(n in e) && (e[n] = a[n]);
            for (var s in qt(e),
            this)
                "_" === s.charAt(0) && "function" === typeof this[s] && (this[s] = this[s].bind(this));
            this.nativeDraggable = !e.forceFallback && Ft,
            this.nativeDraggable && (this.options.touchStartThreshold = 1),
            e.supportPointer ? T(t, "pointerdown", this._onTapStart) : (T(t, "mousedown", this._onTapStart),
            T(t, "touchstart", this._onTapStart)),
            this.nativeDraggable && (T(t, "dragover", this),
            T(t, "dragenter", this)),
            It.push(this.el),
            e.store && e.store.get && this.sort(e.store.get(this) || []),
            o(this, J())
        }
        function Qt(t) {
            t.dataTransfer && (t.dataTransfer.dropEffect = "move"),
            t.cancelable && t.preventDefault()
        }
        function te(t, e, a, n, s, o, r, i) {
            var l, c, d = t[K], u = d.options.onMove;
            return !window.CustomEvent || h || v ? (l = document.createEvent("Event"),
            l.initEvent("move", !0, !0)) : l = new CustomEvent("move",{
                bubbles: !0,
                cancelable: !0
            }),
            l.to = e,
            l.from = t,
            l.dragged = a,
            l.draggedRect = n,
            l.related = s || e,
            l.relatedRect = o || N(e),
            l.willInsertAfter = i,
            l.originalEvent = r,
            t.dispatchEvent(l),
            u && (c = u.call(d, l, r)),
            c
        }
        function ee(t) {
            t.draggable = !1
        }
        function ae() {
            Lt = !1
        }
        function ne(t, e, a) {
            var n = N(L(a.el, a.options.draggable))
              , s = 10;
            return e ? t.clientX > n.right + s || t.clientX <= n.right && t.clientY > n.bottom && t.clientX >= n.left : t.clientX > n.right && t.clientY > n.top || t.clientX <= n.right && t.clientY > n.bottom + s
        }
        function se(t, e, a, n, s, o, r, i) {
            var l = n ? t.clientY : t.clientX
              , c = n ? a.height : a.width
              , d = n ? a.top : a.left
              , u = n ? a.bottom : a.right
              , p = !1;
            if (!r)
                if (i && Ot < c * s) {
                    if (!Nt && (1 === Mt ? l > d + c * o / 2 : l < u - c * o / 2) && (Nt = !0),
                    Nt)
                        p = !0;
                    else if (1 === Mt ? l < d + Ot : l > u - Ot)
                        return -Mt
                } else if (l > d + c * (1 - s) / 2 && l < u - c * (1 - s) / 2)
                    return oe(e);
            return p = p || r,
            p && (l < d + c * o / 2 || l > u - c * o / 2) ? l > d + c / 2 ? 1 : -1 : 0
        }
        function oe(t) {
            return j(rt) < j(t) ? 1 : -1
        }
        function re(t) {
            var e = t.tagName + t.className + t.src + t.href + t.textContent
              , a = e.length
              , n = 0;
            while (a--)
                n += e.charCodeAt(a);
            return n.toString(36)
        }
        function ie(t) {
            jt.length = 0;
            var e = t.getElementsByTagName("input")
              , a = e.length;
            while (a--) {
                var n = e[a];
                n.checked && jt.push(n)
            }
        }
        function le(t) {
            return setTimeout(t, 0)
        }
        function ce(t) {
            return clearTimeout(t)
        }
        Zt.prototype = {
            constructor: Zt,
            _isOutsideThisEl: function(t) {
                this.el.contains(t) || t === this.el || (Dt = null)
            },
            _getDirection: function(t, e) {
                return "function" === typeof this.options.direction ? this.options.direction.call(this, t, e, rt) : this.options.direction
            },
            _onTapStart: function(t) {
                if (t.cancelable) {
                    var e = this
                      , a = this.el
                      , n = this.options
                      , s = n.preventOnFilter
                      , o = t.type
                      , r = t.touches && t.touches[0] || t.pointerType && "touch" === t.pointerType && t
                      , i = (r || t).target
                      , l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || i
                      , c = n.filter;
                    if (ie(a),
                    !rt && !(/mousedown|pointerdown/.test(o) && 0 !== t.button || n.disabled) && !l.isContentEditable && (i = S(i, n.draggable, a, !1),
                    (!i || !i.animated) && ut !== i)) {
                        if (mt = j(i),
                        vt = j(i, n.draggable),
                        "function" === typeof c) {
                            if (c.call(this, t, i, this))
                                return ot({
                                    sortable: e,
                                    rootEl: l,
                                    name: "filter",
                                    targetEl: i,
                                    toEl: a,
                                    fromEl: a
                                }),
                                st("filter", e, {
                                    evt: t
                                }),
                                void (s && t.cancelable && t.preventDefault())
                        } else if (c && (c = c.split(",").some((function(n) {
                            if (n = S(l, n.trim(), a, !1),
                            n)
                                return ot({
                                    sortable: e,
                                    rootEl: n,
                                    name: "filter",
                                    targetEl: i,
                                    fromEl: a,
                                    toEl: a
                                }),
                                st("filter", e, {
                                    evt: t
                                }),
                                !0
                        }
                        )),
                        c))
                            return void (s && t.cancelable && t.preventDefault());
                        n.handle && !S(l, n.handle, a, !1) || this._prepareDragStart(t, r, i)
                    }
                }
            },
            _prepareDragStart: function(t, e, a) {
                var n, s = this, o = s.el, r = s.options, i = o.ownerDocument;
                if (a && !rt && a.parentNode === o) {
                    var l = N(a);
                    if (ct = o,
                    rt = a,
                    it = rt.parentNode,
                    dt = rt.nextSibling,
                    ut = a,
                    bt = r.group,
                    Zt.dragged = rt,
                    kt = {
                        target: rt,
                        clientX: (e || t).clientX,
                        clientY: (e || t).clientY
                    },
                    xt = kt.clientX - l.left,
                    wt = kt.clientY - l.top,
                    this._lastX = (e || t).clientX,
                    this._lastY = (e || t).clientY,
                    rt.style["will-change"] = "all",
                    n = function() {
                        st("delayEnded", s, {
                            evt: t
                        }),
                        Zt.eventCanceled ? s._onDrop() : (s._disableDelayedDragEvents(),
                        !g && s.nativeDraggable && (rt.draggable = !0),
                        s._triggerDragStart(t, e),
                        ot({
                            sortable: s,
                            name: "choose",
                            originalEvent: t
                        }),
                        O(rt, r.chosenClass, !0))
                    }
                    ,
                    r.ignore.split(",").forEach((function(t) {
                        R(rt, t.trim(), ee)
                    }
                    )),
                    T(i, "dragover", Kt),
                    T(i, "mousemove", Kt),
                    T(i, "touchmove", Kt),
                    T(i, "mouseup", s._onDrop),
                    T(i, "touchend", s._onDrop),
                    T(i, "touchcancel", s._onDrop),
                    g && this.nativeDraggable && (this.options.touchStartThreshold = 4,
                    rt.draggable = !0),
                    st("delayStart", this, {
                        evt: t
                    }),
                    !r.delay || r.delayOnTouchOnly && !e || this.nativeDraggable && (v || h))
                        n();
                    else {
                        if (Zt.eventCanceled)
                            return void this._onDrop();
                        T(i, "mouseup", s._disableDelayedDrag),
                        T(i, "touchend", s._disableDelayedDrag),
                        T(i, "touchcancel", s._disableDelayedDrag),
                        T(i, "mousemove", s._delayedDragTouchMoveHandler),
                        T(i, "touchmove", s._delayedDragTouchMoveHandler),
                        r.supportPointer && T(i, "pointermove", s._delayedDragTouchMoveHandler),
                        s._dragStartTimer = setTimeout(n, r.delay)
                    }
                }
            },
            _delayedDragTouchMoveHandler: function(t) {
                var e = t.touches ? t.touches[0] : t;
                Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
            },
            _disableDelayedDrag: function() {
                rt && ee(rt),
                clearTimeout(this._dragStartTimer),
                this._disableDelayedDragEvents()
            },
            _disableDelayedDragEvents: function() {
                var t = this.el.ownerDocument;
                _(t, "mouseup", this._disableDelayedDrag),
                _(t, "touchend", this._disableDelayedDrag),
                _(t, "touchcancel", this._disableDelayedDrag),
                _(t, "mousemove", this._delayedDragTouchMoveHandler),
                _(t, "touchmove", this._delayedDragTouchMoveHandler),
                _(t, "pointermove", this._delayedDragTouchMoveHandler)
            },
            _triggerDragStart: function(t, e) {
                e = e || "touch" == t.pointerType && t,
                !this.nativeDraggable || e ? this.options.supportPointer ? T(document, "pointermove", this._onTouchMove) : T(document, e ? "touchmove" : "mousemove", this._onTouchMove) : (T(rt, "dragend", this),
                T(ct, "dragstart", this._onDragStart));
                try {
                    document.selection ? le((function() {
                        document.selection.empty()
                    }
                    )) : window.getSelection().removeAllRanges()
                } catch (a) {}
            },
            _dragStarted: function(t, e) {
                if (At = !1,
                ct && rt) {
                    st("dragStarted", this, {
                        evt: e
                    }),
                    this.nativeDraggable && T(document, "dragover", Jt);
                    var a = this.options;
                    !t && O(rt, a.dragClass, !1),
                    O(rt, a.ghostClass, !0),
                    Zt.active = this,
                    t && this._appendGhost(),
                    ot({
                        sortable: this,
                        name: "start",
                        originalEvent: e
                    })
                } else
                    this._nulling()
            },
            _emulateDragOver: function() {
                if (Ct) {
                    this._lastX = Ct.clientX,
                    this._lastY = Ct.clientY,
                    Vt();
                    var t = document.elementFromPoint(Ct.clientX, Ct.clientY)
                      , e = t;
                    while (t && t.shadowRoot) {
                        if (t = t.shadowRoot.elementFromPoint(Ct.clientX, Ct.clientY),
                        t === e)
                            break;
                        e = t
                    }
                    if (rt.parentNode[K]._isOutsideThisEl(t),
                    e)
                        do {
                            if (e[K]) {
                                var a = void 0;
                                if (a = e[K]._onDragOver({
                                    clientX: Ct.clientX,
                                    clientY: Ct.clientY,
                                    target: t,
                                    rootEl: e
                                }),
                                a && !this.options.dragoverBubble)
                                    break
                            }
                            t = e
                        } while (e = e.parentNode);
                    Gt()
                }
            },
            _onTouchMove: function(t) {
                if (kt) {
                    var e = this.options
                      , a = e.fallbackTolerance
                      , n = e.fallbackOffset
                      , s = t.touches ? t.touches[0] : t
                      , o = lt && A(lt, !0)
                      , r = lt && o && o.a
                      , i = lt && o && o.d
                      , l = Yt && Et && B(Et)
                      , c = (s.clientX - kt.clientX + n.x) / (r || 1) + (l ? l[0] - Pt[0] : 0) / (r || 1)
                      , d = (s.clientY - kt.clientY + n.y) / (i || 1) + (l ? l[1] - Pt[1] : 0) / (i || 1);
                    if (!Zt.active && !At) {
                        if (a && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < a)
                            return;
                        this._onDragStart(t, !0)
                    }
                    if (lt) {
                        o ? (o.e += c - (Tt || 0),
                        o.f += d - (_t || 0)) : o = {
                            a: 1,
                            b: 0,
                            c: 0,
                            d: 1,
                            e: c,
                            f: d
                        };
                        var u = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
                        E(lt, "webkitTransform", u),
                        E(lt, "mozTransform", u),
                        E(lt, "msTransform", u),
                        E(lt, "transform", u),
                        Tt = c,
                        _t = d,
                        Ct = s
                    }
                    t.cancelable && t.preventDefault()
                }
            },
            _appendGhost: function() {
                if (!lt) {
                    var t = this.options.fallbackOnBody ? document.body : ct
                      , e = N(rt, !0, Yt, !0, t)
                      , a = this.options;
                    if (Yt) {
                        Et = t;
                        while ("static" === E(Et, "position") && "none" === E(Et, "transform") && Et !== document)
                            Et = Et.parentNode;
                        Et !== document.body && Et !== document.documentElement ? (Et === document && (Et = I()),
                        e.top += Et.scrollTop,
                        e.left += Et.scrollLeft) : Et = I(),
                        Pt = B(Et)
                    }
                    lt = rt.cloneNode(!0),
                    O(lt, a.ghostClass, !1),
                    O(lt, a.fallbackClass, !0),
                    O(lt, a.dragClass, !0),
                    E(lt, "transition", ""),
                    E(lt, "transform", ""),
                    E(lt, "box-sizing", "border-box"),
                    E(lt, "margin", 0),
                    E(lt, "top", e.top),
                    E(lt, "left", e.left),
                    E(lt, "width", e.width),
                    E(lt, "height", e.height),
                    E(lt, "opacity", "0.8"),
                    E(lt, "position", Yt ? "absolute" : "fixed"),
                    E(lt, "zIndex", "100000"),
                    E(lt, "pointerEvents", "none"),
                    Zt.ghost = lt,
                    t.appendChild(lt),
                    E(lt, "transform-origin", xt / parseInt(lt.style.width) * 100 + "% " + wt / parseInt(lt.style.height) * 100 + "%")
                }
            },
            _onDragStart: function(t, e) {
                var a = this
                  , n = t.dataTransfer
                  , s = a.options;
                st("dragStart", this, {
                    evt: t
                }),
                Zt.eventCanceled ? this._onDrop() : (st("setupClone", this),
                Zt.eventCanceled || (pt = q(rt),
                pt.draggable = !1,
                pt.style["will-change"] = "",
                this._hideClone(),
                O(pt, this.options.chosenClass, !1),
                Zt.clone = pt),
                a.cloneId = le((function() {
                    st("clone", a),
                    Zt.eventCanceled || (a.options.removeCloneOnHide || ct.insertBefore(pt, rt),
                    a._hideClone(),
                    ot({
                        sortable: a,
                        name: "clone"
                    }))
                }
                )),
                !e && O(rt, s.dragClass, !0),
                e ? (Rt = !0,
                a._loopId = setInterval(a._emulateDragOver, 50)) : (_(document, "mouseup", a._onDrop),
                _(document, "touchend", a._onDrop),
                _(document, "touchcancel", a._onDrop),
                n && (n.effectAllowed = "move",
                s.setData && s.setData.call(a, n, rt)),
                T(document, "drop", a),
                E(rt, "transform", "translateZ(0)")),
                At = !0,
                a._dragStartId = le(a._dragStarted.bind(a, e, t)),
                T(document, "selectstart", a),
                St = !0,
                b && E(document.body, "user-select", "none"))
            },
            _onDragOver: function(t) {
                var e, a, n, s, o = this.el, i = t.target, l = this.options, c = l.group, d = Zt.active, u = bt === c, p = l.sort, f = yt || d, m = this, h = !1;
                if (!Lt) {
                    if (void 0 !== t.preventDefault && t.cancelable && t.preventDefault(),
                    i = S(i, l.draggable, o, !0),
                    R("dragOver"),
                    Zt.eventCanceled)
                        return h;
                    if (rt.contains(t.target) || i.animated && i.animatingX && i.animatingY || m._ignoreWhileAnimating === i)
                        return P(!1);
                    if (Rt = !1,
                    d && !l.disabled && (u ? p || (n = !ct.contains(rt)) : yt === this || (this.lastPutMode = bt.checkPull(this, d, rt, t)) && c.checkPut(this, d, rt, t))) {
                        if (s = "vertical" === this._getDirection(t, i),
                        e = N(rt),
                        R("dragOverValid"),
                        Zt.eventCanceled)
                            return h;
                        if (n)
                            return it = ct,
                            I(),
                            this._hideClone(),
                            R("revert"),
                            Zt.eventCanceled || (dt ? ct.insertBefore(rt, dt) : ct.appendChild(rt)),
                            P(!0);
                        var v = L(o, l.draggable);
                        if (!v || ne(t, s, this) && !v.animated) {
                            if (v === rt)
                                return P(!1);
                            if (v && o === t.target && (i = v),
                            i && (a = N(i)),
                            !1 !== te(ct, o, rt, e, i, a, t, !!i))
                                return I(),
                                o.appendChild(rt),
                                it = o,
                                B(),
                                P(!0)
                        } else if (i.parentNode === o) {
                            a = N(i);
                            var g, b, y = 0, k = rt.parentNode !== o, C = !Ht(rt.animated && rt.toRect || e, i.animated && i.toRect || a, s), T = s ? "top" : "left", _ = $(i, "top", "top") || $(rt, "top", "top"), x = _ ? _.scrollTop : void 0;
                            if (Dt !== i && (g = a[T],
                            Nt = !1,
                            $t = !C && l.invertSwap || k),
                            y = se(t, i, a, s, C ? 1 : l.swapThreshold, null == l.invertedSwapThreshold ? l.swapThreshold : l.invertedSwapThreshold, $t, Dt === i),
                            0 !== y) {
                                var w = j(rt);
                                do {
                                    w -= y,
                                    b = it.children[w]
                                } while (b && ("none" === E(b, "display") || b === lt))
                            }
                            if (0 === y || b === i)
                                return P(!1);
                            Dt = i,
                            Mt = y;
                            var D = i.nextElementSibling
                              , M = !1;
                            M = 1 === y;
                            var A = te(ct, o, rt, e, i, a, t, M);
                            if (!1 !== A)
                                return 1 !== A && -1 !== A || (M = 1 === A),
                                Lt = !0,
                                setTimeout(ae, 30),
                                I(),
                                M && !D ? o.appendChild(rt) : i.parentNode.insertBefore(rt, M ? D : i),
                                _ && X(_, 0, x - _.scrollTop),
                                it = rt.parentNode,
                                void 0 === g || $t || (Ot = Math.abs(g - N(i)[T])),
                                B(),
                                P(!0)
                        }
                        if (o.contains(rt))
                            return P(!1)
                    }
                    return !1
                }
                function R(l, c) {
                    st(l, m, r({
                        evt: t,
                        isOwner: u,
                        axis: s ? "vertical" : "horizontal",
                        revert: n,
                        dragRect: e,
                        targetRect: a,
                        canSort: p,
                        fromSortable: f,
                        target: i,
                        completed: P,
                        onMove: function(a, n) {
                            return te(ct, o, rt, e, a, N(a), t, n)
                        },
                        changed: B
                    }, c))
                }
                function I() {
                    R("dragOverAnimationCapture"),
                    m.captureAnimationState(),
                    m !== f && f.captureAnimationState()
                }
                function P(e) {
                    return R("dragOverCompleted", {
                        insertion: e
                    }),
                    e && (u ? d._hideClone() : d._showClone(m),
                    m !== f && (O(rt, yt ? yt.options.ghostClass : d.options.ghostClass, !1),
                    O(rt, l.ghostClass, !0)),
                    yt !== m && m !== Zt.active ? yt = m : m === Zt.active && yt && (yt = null),
                    f === m && (m._ignoreWhileAnimating = i),
                    m.animateAll((function() {
                        R("dragOverAnimationComplete"),
                        m._ignoreWhileAnimating = null
                    }
                    )),
                    m !== f && (f.animateAll(),
                    f._ignoreWhileAnimating = null)),
                    (i === rt && !rt.animated || i === o && !i.animated) && (Dt = null),
                    l.dragoverBubble || t.rootEl || i === document || (rt.parentNode[K]._isOutsideThisEl(t.target),
                    !e && Kt(t)),
                    !l.dragoverBubble && t.stopPropagation && t.stopPropagation(),
                    h = !0
                }
                function B() {
                    ht = j(rt),
                    gt = j(rt, l.draggable),
                    ot({
                        sortable: m,
                        name: "change",
                        toEl: o,
                        newIndex: ht,
                        newDraggableIndex: gt,
                        originalEvent: t
                    })
                }
            },
            _ignoreWhileAnimating: null,
            _offMoveEvents: function() {
                _(document, "mousemove", this._onTouchMove),
                _(document, "touchmove", this._onTouchMove),
                _(document, "pointermove", this._onTouchMove),
                _(document, "dragover", Kt),
                _(document, "mousemove", Kt),
                _(document, "touchmove", Kt)
            },
            _offUpEvents: function() {
                var t = this.el.ownerDocument;
                _(t, "mouseup", this._onDrop),
                _(t, "touchend", this._onDrop),
                _(t, "pointerup", this._onDrop),
                _(t, "touchcancel", this._onDrop),
                _(document, "selectstart", this)
            },
            _onDrop: function(t) {
                var e = this.el
                  , a = this.options;
                ht = j(rt),
                gt = j(rt, a.draggable),
                st("drop", this, {
                    evt: t
                }),
                it = rt && rt.parentNode,
                ht = j(rt),
                gt = j(rt, a.draggable),
                Zt.eventCanceled || (At = !1,
                $t = !1,
                Nt = !1,
                clearInterval(this._loopId),
                clearTimeout(this._dragStartTimer),
                ce(this.cloneId),
                ce(this._dragStartId),
                this.nativeDraggable && (_(document, "drop", this),
                _(e, "dragstart", this._onDragStart)),
                this._offMoveEvents(),
                this._offUpEvents(),
                b && E(document.body, "user-select", ""),
                E(rt, "transform", ""),
                t && (St && (t.cancelable && t.preventDefault(),
                !a.dropBubble && t.stopPropagation()),
                lt && lt.parentNode && lt.parentNode.removeChild(lt),
                (ct === it || yt && "clone" !== yt.lastPutMode) && pt && pt.parentNode && pt.parentNode.removeChild(pt),
                rt && (this.nativeDraggable && _(rt, "dragend", this),
                ee(rt),
                rt.style["will-change"] = "",
                St && !At && O(rt, yt ? yt.options.ghostClass : this.options.ghostClass, !1),
                O(rt, this.options.chosenClass, !1),
                ot({
                    sortable: this,
                    name: "unchoose",
                    toEl: it,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: t
                }),
                ct !== it ? (ht >= 0 && (ot({
                    rootEl: it,
                    name: "add",
                    toEl: it,
                    fromEl: ct,
                    originalEvent: t
                }),
                ot({
                    sortable: this,
                    name: "remove",
                    toEl: it,
                    originalEvent: t
                }),
                ot({
                    rootEl: it,
                    name: "sort",
                    toEl: it,
                    fromEl: ct,
                    originalEvent: t
                }),
                ot({
                    sortable: this,
                    name: "sort",
                    toEl: it,
                    originalEvent: t
                })),
                yt && yt.save()) : ht !== mt && ht >= 0 && (ot({
                    sortable: this,
                    name: "update",
                    toEl: it,
                    originalEvent: t
                }),
                ot({
                    sortable: this,
                    name: "sort",
                    toEl: it,
                    originalEvent: t
                })),
                Zt.active && (null != ht && -1 !== ht || (ht = mt,
                gt = vt),
                ot({
                    sortable: this,
                    name: "end",
                    toEl: it,
                    originalEvent: t
                }),
                this.save())))),
                this._nulling()
            },
            _nulling: function() {
                st("nulling", this),
                ct = rt = it = lt = dt = pt = ut = ft = kt = Ct = St = ht = gt = mt = vt = Dt = Mt = yt = bt = Zt.dragged = Zt.ghost = Zt.clone = Zt.active = null,
                jt.forEach((function(t) {
                    t.checked = !0
                }
                )),
                jt.length = Tt = _t = 0
            },
            handleEvent: function(t) {
                switch (t.type) {
                case "drop":
                case "dragend":
                    this._onDrop(t);
                    break;
                case "dragenter":
                case "dragover":
                    rt && (this._onDragOver(t),
                    Qt(t));
                    break;
                case "selectstart":
                    t.preventDefault();
                    break
                }
            },
            toArray: function() {
                for (var t, e = [], a = this.el.children, n = 0, s = a.length, o = this.options; n < s; n++)
                    t = a[n],
                    S(t, o.draggable, this.el, !1) && e.push(t.getAttribute(o.dataIdAttr) || re(t));
                return e
            },
            sort: function(t) {
                var e = {}
                  , a = this.el;
                this.toArray().forEach((function(t, n) {
                    var s = a.children[n];
                    S(s, this.options.draggable, a, !1) && (e[t] = s)
                }
                ), this),
                t.forEach((function(t) {
                    e[t] && (a.removeChild(e[t]),
                    a.appendChild(e[t]))
                }
                ))
            },
            save: function() {
                var t = this.options.store;
                t && t.set && t.set(this)
            },
            closest: function(t, e) {
                return S(t, e || this.options.draggable, this.el, !1)
            },
            option: function(t, e) {
                var a = this.options;
                if (void 0 === e)
                    return a[t];
                var n = at.modifyOption(this, t, e);
                a[t] = "undefined" !== typeof n ? n : e,
                "group" === t && qt(a)
            },
            destroy: function() {
                st("destroy", this);
                var t = this.el;
                t[K] = null,
                _(t, "mousedown", this._onTapStart),
                _(t, "touchstart", this._onTapStart),
                _(t, "pointerdown", this._onTapStart),
                this.nativeDraggable && (_(t, "dragover", this),
                _(t, "dragenter", this)),
                Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), (function(t) {
                    t.removeAttribute("draggable")
                }
                )),
                this._onDrop(),
                this._disableDelayedDragEvents(),
                It.splice(It.indexOf(this.el), 1),
                this.el = t = null
            },
            _hideClone: function() {
                if (!ft) {
                    if (st("hideClone", this),
                    Zt.eventCanceled)
                        return;
                    E(pt, "display", "none"),
                    this.options.removeCloneOnHide && pt.parentNode && pt.parentNode.removeChild(pt),
                    ft = !0
                }
            },
            _showClone: function(t) {
                if ("clone" === t.lastPutMode) {
                    if (ft) {
                        if (st("showClone", this),
                        Zt.eventCanceled)
                            return;
                        ct.contains(rt) && !this.options.group.revertClone ? ct.insertBefore(pt, rt) : dt ? ct.insertBefore(pt, dt) : ct.appendChild(pt),
                        this.options.group.revertClone && this.animate(rt, pt),
                        E(pt, "display", ""),
                        ft = !1
                    }
                } else
                    this._hideClone()
            }
        },
        Bt && T(document, "touchmove", (function(t) {
            (Zt.active || At) && t.cancelable && t.preventDefault()
        }
        )),
        Zt.utils = {
            on: T,
            off: _,
            css: E,
            find: R,
            is: function(t, e) {
                return !!S(t, e, t, !1)
            },
            extend: F,
            throttle: W,
            closest: S,
            toggleClass: O,
            clone: q,
            index: j,
            nextTick: le,
            cancelNextTick: ce,
            detectDirection: Wt,
            getChild: P
        },
        Zt.get = function(t) {
            return t[K]
        }
        ,
        Zt.mount = function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
                e[a] = arguments[a];
            e[0].constructor === Array && (e = e[0]),
            e.forEach((function(t) {
                if (!t.prototype || !t.prototype.constructor)
                    throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));
                t.utils && (Zt.utils = r({}, Zt.utils, t.utils)),
                at.mount(t)
            }
            ))
        }
        ,
        Zt.create = function(t, e) {
            return new Zt(t,e)
        }
        ,
        Zt.version = f;
        var de, ue, pe, fe, me, he, ve = [], ge = !1;
        function be() {
            function t() {
                for (var t in this.defaults = {
                    scroll: !0,
                    scrollSensitivity: 30,
                    scrollSpeed: 10,
                    bubbleScroll: !0
                },
                this)
                    "_" === t.charAt(0) && "function" === typeof this[t] && (this[t] = this[t].bind(this))
            }
            return t.prototype = {
                dragStarted: function(t) {
                    var e = t.originalEvent;
                    this.sortable.nativeDraggable ? T(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? T(document, "pointermove", this._handleFallbackAutoScroll) : e.touches ? T(document, "touchmove", this._handleFallbackAutoScroll) : T(document, "mousemove", this._handleFallbackAutoScroll)
                },
                dragOverCompleted: function(t) {
                    var e = t.originalEvent;
                    this.options.dragOverBubble || e.rootEl || this._handleAutoScroll(e)
                },
                drop: function() {
                    this.sortable.nativeDraggable ? _(document, "dragover", this._handleAutoScroll) : (_(document, "pointermove", this._handleFallbackAutoScroll),
                    _(document, "touchmove", this._handleFallbackAutoScroll),
                    _(document, "mousemove", this._handleFallbackAutoScroll)),
                    ke(),
                    ye(),
                    H()
                },
                nulling: function() {
                    me = ue = de = ge = he = pe = fe = null,
                    ve.length = 0
                },
                _handleFallbackAutoScroll: function(t) {
                    this._handleAutoScroll(t, !0)
                },
                _handleAutoScroll: function(t, e) {
                    var a = this
                      , n = (t.touches ? t.touches[0] : t).clientX
                      , s = (t.touches ? t.touches[0] : t).clientY
                      , o = document.elementFromPoint(n, s);
                    if (me = t,
                    e || v || h || b) {
                        Te(t, this.options, o, e);
                        var r = z(o, !0);
                        !ge || he && n === pe && s === fe || (he && ke(),
                        he = setInterval((function() {
                            var o = z(document.elementFromPoint(n, s), !0);
                            o !== r && (r = o,
                            ye()),
                            Te(t, a.options, o, e)
                        }
                        ), 10),
                        pe = n,
                        fe = s)
                    } else {
                        if (!this.options.bubbleScroll || z(o, !0) === I())
                            return void ye();
                        Te(t, this.options, z(o, !1), !1)
                    }
                }
            },
            o(t, {
                pluginName: "scroll",
                initializeByDefault: !0
            })
        }
        function ye() {
            ve.forEach((function(t) {
                clearInterval(t.pid)
            }
            )),
            ve = []
        }
        function ke() {
            clearInterval(he)
        }
        var Ce, Te = W((function(t, e, a, n) {
            if (e.scroll) {
                var s, o = (t.touches ? t.touches[0] : t).clientX, r = (t.touches ? t.touches[0] : t).clientY, i = e.scrollSensitivity, l = e.scrollSpeed, c = I(), d = !1;
                ue !== a && (ue = a,
                ye(),
                de = e.scroll,
                s = e.scrollFn,
                !0 === de && (de = z(a, !0)));
                var u = 0
                  , p = de;
                do {
                    var f = p
                      , m = N(f)
                      , h = m.top
                      , v = m.bottom
                      , g = m.left
                      , b = m.right
                      , y = m.width
                      , k = m.height
                      , C = void 0
                      , T = void 0
                      , _ = f.scrollWidth
                      , x = f.scrollHeight
                      , w = E(f)
                      , S = f.scrollLeft
                      , D = f.scrollTop;
                    f === c ? (C = y < _ && ("auto" === w.overflowX || "scroll" === w.overflowX || "visible" === w.overflowX),
                    T = k < x && ("auto" === w.overflowY || "scroll" === w.overflowY || "visible" === w.overflowY)) : (C = y < _ && ("auto" === w.overflowX || "scroll" === w.overflowX),
                    T = k < x && ("auto" === w.overflowY || "scroll" === w.overflowY));
                    var M = C && (Math.abs(b - o) <= i && S + y < _) - (Math.abs(g - o) <= i && !!S)
                      , O = T && (Math.abs(v - r) <= i && D + k < x) - (Math.abs(h - r) <= i && !!D);
                    if (!ve[u])
                        for (var A = 0; A <= u; A++)
                            ve[A] || (ve[A] = {});
                    ve[u].vx == M && ve[u].vy == O && ve[u].el === f || (ve[u].el = f,
                    ve[u].vx = M,
                    ve[u].vy = O,
                    clearInterval(ve[u].pid),
                    0 == M && 0 == O || (d = !0,
                    ve[u].pid = setInterval(function() {
                        n && 0 === this.layer && Zt.active._onTouchMove(me);
                        var e = ve[this.layer].vy ? ve[this.layer].vy * l : 0
                          , a = ve[this.layer].vx ? ve[this.layer].vx * l : 0;
                        "function" === typeof s && "continue" !== s.call(Zt.dragged.parentNode[K], a, e, t, me, ve[this.layer].el) || X(ve[this.layer].el, a, e)
                    }
                    .bind({
                        layer: u
                    }), 24))),
                    u++
                } while (e.bubbleScroll && p !== c && (p = z(p, !1)));
                ge = d
            }
        }
        ), 30), _e = function(t) {
            var e = t.originalEvent
              , a = t.putSortable
              , n = t.dragEl
              , s = t.activeSortable
              , o = t.dispatchSortableEvent
              , r = t.hideGhostForTarget
              , i = t.unhideGhostForTarget;
            if (e) {
                var l = a || s;
                r();
                var c = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e
                  , d = document.elementFromPoint(c.clientX, c.clientY);
                i(),
                l && !l.el.contains(d) && (o("spill"),
                this.onSpill({
                    dragEl: n,
                    putSortable: a
                }))
            }
        };
        function xe() {}
        function we() {}
        function Se() {
            function t() {
                this.defaults = {
                    swapClass: "sortable-swap-highlight"
                }
            }
            return t.prototype = {
                dragStart: function(t) {
                    var e = t.dragEl;
                    Ce = e
                },
                dragOverValid: function(t) {
                    var e = t.completed
                      , a = t.target
                      , n = t.onMove
                      , s = t.activeSortable
                      , o = t.changed
                      , r = t.cancel;
                    if (s.options.swap) {
                        var i = this.sortable.el
                          , l = this.options;
                        if (a && a !== i) {
                            var c = Ce;
                            !1 !== n(a) ? (O(a, l.swapClass, !0),
                            Ce = a) : Ce = null,
                            c && c !== Ce && O(c, l.swapClass, !1)
                        }
                        o(),
                        e(!0),
                        r()
                    }
                },
                drop: function(t) {
                    var e = t.activeSortable
                      , a = t.putSortable
                      , n = t.dragEl
                      , s = a || this.sortable
                      , o = this.options;
                    Ce && O(Ce, o.swapClass, !1),
                    Ce && (o.swap || a && a.options.swap) && n !== Ce && (s.captureAnimationState(),
                    s !== e && e.captureAnimationState(),
                    De(n, Ce),
                    s.animateAll(),
                    s !== e && e.animateAll())
                },
                nulling: function() {
                    Ce = null
                }
            },
            o(t, {
                pluginName: "swap",
                eventProperties: function() {
                    return {
                        swapItem: Ce
                    }
                }
            })
        }
        function De(t, e) {
            var a, n, s = t.parentNode, o = e.parentNode;
            s && o && !s.isEqualNode(e) && !o.isEqualNode(t) && (a = j(t),
            n = j(e),
            s.isEqualNode(o) && a < n && n++,
            s.insertBefore(e, s.children[a]),
            o.insertBefore(t, o.children[n]))
        }
        xe.prototype = {
            startIndex: null,
            dragStart: function(t) {
                var e = t.oldDraggableIndex;
                this.startIndex = e
            },
            onSpill: function(t) {
                var e = t.dragEl
                  , a = t.putSortable;
                this.sortable.captureAnimationState(),
                a && a.captureAnimationState();
                var n = P(this.sortable.el, this.startIndex, this.options);
                n ? this.sortable.el.insertBefore(e, n) : this.sortable.el.appendChild(e),
                this.sortable.animateAll(),
                a && a.animateAll()
            },
            drop: _e
        },
        o(xe, {
            pluginName: "revertOnSpill"
        }),
        we.prototype = {
            onSpill: function(t) {
                var e = t.dragEl
                  , a = t.putSortable
                  , n = a || this.sortable;
                n.captureAnimationState(),
                e.parentNode && e.parentNode.removeChild(e),
                n.animateAll()
            },
            drop: _e
        },
        o(we, {
            pluginName: "removeOnSpill"
        });
        var Me, Oe, Ee, Ae, Re, Ie = [], Ne = [], $e = !1, Pe = !1, Le = !1;
        function je() {
            function t(t) {
                for (var e in this)
                    "_" === e.charAt(0) && "function" === typeof this[e] && (this[e] = this[e].bind(this));
                t.options.supportPointer ? T(document, "pointerup", this._deselectMultiDrag) : (T(document, "mouseup", this._deselectMultiDrag),
                T(document, "touchend", this._deselectMultiDrag)),
                T(document, "keydown", this._checkKeyDown),
                T(document, "keyup", this._checkKeyUp),
                this.defaults = {
                    selectedClass: "sortable-selected",
                    multiDragKey: null,
                    setData: function(e, a) {
                        var n = "";
                        Ie.length && Oe === t ? Ie.forEach((function(t, e) {
                            n += (e ? ", " : "") + t.textContent
                        }
                        )) : n = a.textContent,
                        e.setData("Text", n)
                    }
                }
            }
            return t.prototype = {
                multiDragKeyDown: !1,
                isMultiDrag: !1,
                delayStartGlobal: function(t) {
                    var e = t.dragEl;
                    Ee = e
                },
                delayEnded: function() {
                    this.isMultiDrag = ~Ie.indexOf(Ee)
                },
                setupClone: function(t) {
                    var e = t.sortable
                      , a = t.cancel;
                    if (this.isMultiDrag) {
                        for (var n = 0; n < Ie.length; n++)
                            Ne.push(q(Ie[n])),
                            Ne[n].sortableIndex = Ie[n].sortableIndex,
                            Ne[n].draggable = !1,
                            Ne[n].style["will-change"] = "",
                            O(Ne[n], this.options.selectedClass, !1),
                            Ie[n] === Ee && O(Ne[n], this.options.chosenClass, !1);
                        e._hideClone(),
                        a()
                    }
                },
                clone: function(t) {
                    var e = t.sortable
                      , a = t.rootEl
                      , n = t.dispatchSortableEvent
                      , s = t.cancel;
                    this.isMultiDrag && (this.options.removeCloneOnHide || Ie.length && Oe === e && (Ye(!0, a),
                    n("clone"),
                    s()))
                },
                showClone: function(t) {
                    var e = t.cloneNowShown
                      , a = t.rootEl
                      , n = t.cancel;
                    this.isMultiDrag && (Ye(!1, a),
                    Ne.forEach((function(t) {
                        E(t, "display", "")
                    }
                    )),
                    e(),
                    Re = !1,
                    n())
                },
                hideClone: function(t) {
                    var e = this
                      , a = (t.sortable,
                    t.cloneNowHidden)
                      , n = t.cancel;
                    this.isMultiDrag && (Ne.forEach((function(t) {
                        E(t, "display", "none"),
                        e.options.removeCloneOnHide && t.parentNode && t.parentNode.removeChild(t)
                    }
                    )),
                    a(),
                    Re = !0,
                    n())
                },
                dragStartGlobal: function(t) {
                    t.sortable;
                    !this.isMultiDrag && Oe && Oe.multiDrag._deselectMultiDrag(),
                    Ie.forEach((function(t) {
                        t.sortableIndex = j(t)
                    }
                    )),
                    Ie = Ie.sort((function(t, e) {
                        return t.sortableIndex - e.sortableIndex
                    }
                    )),
                    Le = !0
                },
                dragStarted: function(t) {
                    var e = this
                      , a = t.sortable;
                    if (this.isMultiDrag) {
                        if (this.options.sort && (a.captureAnimationState(),
                        this.options.animation)) {
                            Ie.forEach((function(t) {
                                t !== Ee && E(t, "position", "absolute")
                            }
                            ));
                            var n = N(Ee, !1, !0, !0);
                            Ie.forEach((function(t) {
                                t !== Ee && V(t, n)
                            }
                            )),
                            Pe = !0,
                            $e = !0
                        }
                        a.animateAll((function() {
                            Pe = !1,
                            $e = !1,
                            e.options.animation && Ie.forEach((function(t) {
                                G(t)
                            }
                            )),
                            e.options.sort && ze()
                        }
                        ))
                    }
                },
                dragOver: function(t) {
                    var e = t.target
                      , a = t.completed
                      , n = t.cancel;
                    Pe && ~Ie.indexOf(e) && (a(!1),
                    n())
                },
                revert: function(t) {
                    var e = t.fromSortable
                      , a = t.rootEl
                      , n = t.sortable
                      , s = t.dragRect;
                    Ie.length > 1 && (Ie.forEach((function(t) {
                        n.addAnimationState({
                            target: t,
                            rect: Pe ? N(t) : s
                        }),
                        G(t),
                        t.fromRect = s,
                        e.removeAnimationState(t)
                    }
                    )),
                    Pe = !1,
                    Be(!this.options.removeCloneOnHide, a))
                },
                dragOverCompleted: function(t) {
                    var e = t.sortable
                      , a = t.isOwner
                      , n = t.insertion
                      , s = t.activeSortable
                      , o = t.parentEl
                      , r = t.putSortable
                      , i = this.options;
                    if (n) {
                        if (a && s._hideClone(),
                        $e = !1,
                        i.animation && Ie.length > 1 && (Pe || !a && !s.options.sort && !r)) {
                            var l = N(Ee, !1, !0, !0);
                            Ie.forEach((function(t) {
                                t !== Ee && (V(t, l),
                                o.appendChild(t))
                            }
                            )),
                            Pe = !0
                        }
                        if (!a)
                            if (Pe || ze(),
                            Ie.length > 1) {
                                var c = Re;
                                s._showClone(e),
                                s.options.animation && !Re && c && Ne.forEach((function(t) {
                                    s.addAnimationState({
                                        target: t,
                                        rect: Ae
                                    }),
                                    t.fromRect = Ae,
                                    t.thisAnimationDuration = null
                                }
                                ))
                            } else
                                s._showClone(e)
                    }
                },
                dragOverAnimationCapture: function(t) {
                    var e = t.dragRect
                      , a = t.isOwner
                      , n = t.activeSortable;
                    if (Ie.forEach((function(t) {
                        t.thisAnimationDuration = null
                    }
                    )),
                    n.options.animation && !a && n.multiDrag.isMultiDrag) {
                        Ae = o({}, e);
                        var s = A(Ee, !0);
                        Ae.top -= s.f,
                        Ae.left -= s.e
                    }
                },
                dragOverAnimationComplete: function() {
                    Pe && (Pe = !1,
                    ze())
                },
                drop: function(t) {
                    var e = t.originalEvent
                      , a = t.rootEl
                      , n = t.parentEl
                      , s = t.sortable
                      , o = t.dispatchSortableEvent
                      , r = t.oldIndex
                      , i = t.putSortable
                      , l = i || this.sortable;
                    if (e) {
                        var c = this.options
                          , d = n.children;
                        if (!Le)
                            if (c.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(),
                            O(Ee, c.selectedClass, !~Ie.indexOf(Ee)),
                            ~Ie.indexOf(Ee))
                                Ie.splice(Ie.indexOf(Ee), 1),
                                Me = null,
                                nt({
                                    sortable: s,
                                    rootEl: a,
                                    name: "deselect",
                                    targetEl: Ee,
                                    originalEvt: e
                                });
                            else {
                                if (Ie.push(Ee),
                                nt({
                                    sortable: s,
                                    rootEl: a,
                                    name: "select",
                                    targetEl: Ee,
                                    originalEvt: e
                                }),
                                e.shiftKey && Me && s.el.contains(Me)) {
                                    var u, p, f = j(Me), m = j(Ee);
                                    if (~f && ~m && f !== m)
                                        for (m > f ? (p = f,
                                        u = m) : (p = m,
                                        u = f + 1); p < u; p++)
                                            ~Ie.indexOf(d[p]) || (O(d[p], c.selectedClass, !0),
                                            Ie.push(d[p]),
                                            nt({
                                                sortable: s,
                                                rootEl: a,
                                                name: "select",
                                                targetEl: d[p],
                                                originalEvt: e
                                            }))
                                } else
                                    Me = Ee;
                                Oe = l
                            }
                        if (Le && this.isMultiDrag) {
                            if ((n[K].options.sort || n !== a) && Ie.length > 1) {
                                var h = N(Ee)
                                  , v = j(Ee, ":not(." + this.options.selectedClass + ")");
                                if (!$e && c.animation && (Ee.thisAnimationDuration = null),
                                l.captureAnimationState(),
                                !$e && (c.animation && (Ee.fromRect = h,
                                Ie.forEach((function(t) {
                                    if (t.thisAnimationDuration = null,
                                    t !== Ee) {
                                        var e = Pe ? N(t) : h;
                                        t.fromRect = e,
                                        l.addAnimationState({
                                            target: t,
                                            rect: e
                                        })
                                    }
                                }
                                ))),
                                ze(),
                                Ie.forEach((function(t) {
                                    d[v] ? n.insertBefore(t, d[v]) : n.appendChild(t),
                                    v++
                                }
                                )),
                                r === j(Ee))) {
                                    var g = !1;
                                    Ie.forEach((function(t) {
                                        t.sortableIndex === j(t) || (g = !0)
                                    }
                                    )),
                                    g && o("update")
                                }
                                Ie.forEach((function(t) {
                                    G(t)
                                }
                                )),
                                l.animateAll()
                            }
                            Oe = l
                        }
                        (a === n || i && "clone" !== i.lastPutMode) && Ne.forEach((function(t) {
                            t.parentNode && t.parentNode.removeChild(t)
                        }
                        ))
                    }
                },
                nullingGlobal: function() {
                    this.isMultiDrag = Le = !1,
                    Ne.length = 0
                },
                destroyGlobal: function() {
                    this._deselectMultiDrag(),
                    _(document, "pointerup", this._deselectMultiDrag),
                    _(document, "mouseup", this._deselectMultiDrag),
                    _(document, "touchend", this._deselectMultiDrag),
                    _(document, "keydown", this._checkKeyDown),
                    _(document, "keyup", this._checkKeyUp)
                },
                _deselectMultiDrag: function(t) {
                    if (("undefined" === typeof Le || !Le) && Oe === this.sortable && (!t || !S(t.target, this.options.draggable, this.sortable.el, !1)) && (!t || 0 === t.button))
                        while (Ie.length) {
                            var e = Ie[0];
                            O(e, this.options.selectedClass, !1),
                            Ie.shift(),
                            nt({
                                sortable: this.sortable,
                                rootEl: this.sortable.el,
                                name: "deselect",
                                targetEl: e,
                                originalEvt: t
                            })
                        }
                },
                _checkKeyDown: function(t) {
                    t.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
                },
                _checkKeyUp: function(t) {
                    t.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
                }
            },
            o(t, {
                pluginName: "multiDrag",
                utils: {
                    select: function(t) {
                        var e = t.parentNode[K];
                        e && e.options.multiDrag && !~Ie.indexOf(t) && (Oe && Oe !== e && (Oe.multiDrag._deselectMultiDrag(),
                        Oe = e),
                        O(t, e.options.selectedClass, !0),
                        Ie.push(t))
                    },
                    deselect: function(t) {
                        var e = t.parentNode[K]
                          , a = Ie.indexOf(t);
                        e && e.options.multiDrag && ~a && (O(t, e.options.selectedClass, !1),
                        Ie.splice(a, 1))
                    }
                },
                eventProperties: function() {
                    var t = this
                      , e = []
                      , a = [];
                    return Ie.forEach((function(n) {
                        var s;
                        e.push({
                            multiDragElement: n,
                            index: n.sortableIndex
                        }),
                        s = Pe && n !== Ee ? -1 : Pe ? j(n, ":not(." + t.options.selectedClass + ")") : j(n),
                        a.push({
                            multiDragElement: n,
                            index: s
                        })
                    }
                    )),
                    {
                        items: c(Ie),
                        clones: [].concat(Ne),
                        oldIndicies: e,
                        newIndicies: a
                    }
                },
                optionListeners: {
                    multiDragKey: function(t) {
                        return t = t.toLowerCase(),
                        "ctrl" === t ? t = "Control" : t.length > 1 && (t = t.charAt(0).toUpperCase() + t.substr(1)),
                        t
                    }
                }
            })
        }
        function Be(t, e) {
            Ie.forEach((function(a, n) {
                var s = e.children[a.sortableIndex + (t ? Number(n) : 0)];
                s ? e.insertBefore(a, s) : e.appendChild(a)
            }
            ))
        }
        function Ye(t, e) {
            Ne.forEach((function(a, n) {
                var s = e.children[a.sortableIndex + (t ? Number(n) : 0)];
                s ? e.insertBefore(a, s) : e.appendChild(a)
            }
            ))
        }
        function ze() {
            Ie.forEach((function(t) {
                t !== Ee && t.parentNode && t.parentNode.removeChild(t)
            }
            ))
        }
        Zt.mount(new be),
        Zt.mount(we, xe),
        e["default"] = Zt
    },
    ab13: function(t, e, a) {
        var n = a("b622")
          , s = n("match");
        t.exports = function(t) {
            var e = /./;
            try {
                "/./"[t](e)
            } catch (a) {
                try {
                    return e[s] = !1,
                    "/./"[t](e)
                } catch (n) {}
            }
            return !1
        }
    },
    b0c0: function(t, e, a) {
        var n = a("83ab")
          , s = a("9bf2").f
          , o = Function.prototype
          , r = o.toString
          , i = /^\s*function ([^ (]*)/
          , l = "name";
        n && !(l in o) && s(o, l, {
            configurable: !0,
            get: function() {
                try {
                    return r.call(this).match(i)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    },
    b85c: function(t, e, a) {
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
        var n = a("06c5");
        function s(t) {
            if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = Object(n["a"])(t))) {
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
            var s, o, r = !0, i = !1;
            return {
                s: function() {
                    s = t[Symbol.iterator]()
                },
                n: function() {
                    var t = s.next();
                    return r = t.done,
                    t
                },
                e: function(t) {
                    i = !0,
                    o = t
                },
                f: function() {
                    try {
                        r || null == s["return"] || s["return"]()
                    } finally {
                        if (i)
                            throw o
                    }
                }
            }
        }
    },
    c01a: function(t, e, a) {
        "use strict";
        var n = a("e9de")
          , s = a.n(n);
        s.a
    },
    caad: function(t, e, a) {
        "use strict";
        var n = a("23e7")
          , s = a("4d64").includes
          , o = a("44d2")
          , r = a("ae40")
          , i = r("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
        n({
            target: "Array",
            proto: !0,
            forced: !i
        }, {
            includes: function(t) {
                return s(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        o("includes")
    },
    d6ee: function(t, e, a) {
        "use strict";
        var n = a("f75c")
          , s = a.n(n);
        s.a
    },
    dee1: function(t, e, a) {},
    e420: function(t, e, a) {
        "use strict";
        var n = a("4bf2")
          , s = a.n(n);
        s.a
    },
    e9de: function(t, e, a) {},
    f0f4: function(t, e, a) {},
    f147: function(t, e, a) {
        "use strict";
        var n = a("a906")
          , s = a.n(n);
        s.a
    },
    f75c: function(t, e, a) {},
    f7a8: function(t, e, a) {},
    fbea: function(t, e, a) {},
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
                var n = btoa("fromBelongs")
                  , s = btoa("toBelongs")
                  , o = btoa("SubmitUrl");
                void 0 != t.params.SubmitUrl && Object(_encryptor__WEBPACK_IMPORTED_MODULE_7__["c"])(t.params.SubmitUrl, o, 19),
                localStorage.getItem(btoa("Admin-Token")) ? sessionStorage.removeItem(btoa("external")) : t.matched && (t.matched[0].components.External ? sessionStorage.setItem(btoa("external"), !0) : sessionStorage.removeItem(btoa("external"))),
                a((function(a) {
                    a.encryptIt(e.meta.belongs, n, 19),
                    a.encryptIt(t.meta.belongs, s, 19);
                    var o = a.GetItem("SubmitUrl");
                    void 0 != o && "undefined" != o && (a.localSubmitUrl = o);
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
                    function OnEditCommon(t, e, a, n) {
                        return _OnEditCommon.apply(this, arguments)
                    }
                    return OnEditCommon
                }(),
                OnDeleteCommon: function() {
                    var t = Object(_home_descpro_Haris_Projects_BitTask_TaskUi_Bit_TaskManager_src_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function t(e, a, n, s) {
                        var o, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    o = s.$refs.common,
                                    r = function() {
                                        var t = Object(_home_descpro_Haris_Projects_BitTask_TaskUi_Bit_TaskManager_src_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function t() {
                                            var s, r;
                                            return regeneratorRuntime.wrap((function(t) {
                                                while (1)
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return s = a,
                                                        r = {
                                                            id: e.id
                                                        },
                                                        t.next = 4,
                                                        Object(_utils_api__WEBPACK_IMPORTED_MODULE_6__["a"])(s, "post", r).then((function(t) {
                                                            o.ManageResponse(t),
                                                            n.$refs.vuetable.refresh()
                                                        }
                                                        )).catch((function(t) {
                                                            o.ManageResponse(t.response)
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
                                    o.ConfirmBox("Delete", "Are you sure you want to delete?", "warning", "Yes", "No", r);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e, a, n, s) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                OnDiscardDraftCommon: function() {
                    var t = Object(_home_descpro_Haris_Projects_BitTask_TaskUi_Bit_TaskManager_src_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function t(e, a, n, s) {
                        var o, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    o = s.$refs.common,
                                    r = function() {
                                        var t = Object(_home_descpro_Haris_Projects_BitTask_TaskUi_Bit_TaskManager_src_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function t() {
                                            var s, r;
                                            return regeneratorRuntime.wrap((function(t) {
                                                while (1)
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return s = a,
                                                        r = {
                                                            id: e.id,
                                                            version: e.version
                                                        },
                                                        t.next = 4,
                                                        Object(_utils_api__WEBPACK_IMPORTED_MODULE_6__["a"])(s, "post", r).then((function(t) {
                                                            o.ManageResponse(t),
                                                            n.$refs.vuetable.refresh()
                                                        }
                                                        )).catch((function(t) {
                                                            o.ManageResponse(t.response)
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
                                    o.ConfirmBox("", "<p>Are you sure you want to discard?</p>", "info", "Yes", "No", r);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    function e(e, a, n, s) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }
        }
    }
}]);

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-5f9d7748"], {
    "0952": function(e, t, n) {},
    c38f: function(e, t, n) {
        !function(t, a) {
            e.exports = a(n("cf06"))
        }("undefined" != typeof self && self, (function(e) {
            return function(e) {
                var t = {};
                function n(a) {
                    if (t[a])
                        return t[a].exports;
                    var i = t[a] = {
                        i: a,
                        l: !1,
                        exports: {}
                    };
                    return e[a].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
                }
                return n.m = e,
                n.c = t,
                n.d = function(e, t, a) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: a
                    })
                }
                ,
                n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                n.t = function(e, t) {
                    if (1 & t && (e = n(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var a = Object.create(null);
                    if (n.r(a),
                    Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var i in e)
                            n.d(a, i, function(t) {
                                return e[t]
                            }
                            .bind(null, i));
                    return a
                }
                ,
                n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return n.d(t, "a", t),
                    t
                }
                ,
                n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                n.p = "",
                n(n.s = 1)
            }([function(t, n) {
                t.exports = e
            }
            , function(e, t, n) {
                "use strict";
                n.r(t);
                var a = n(0)
                  , i = n.n(a)
                  , o = ["onChange", "onClose", "onDestroy", "onMonthChange", "onOpen", "onYearChange"];
                function r() {
                    return (r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n)
                                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }
                    ).apply(this, arguments)
                }
                var l = function(e) {
                    return r({}, e)
                }
                  , c = o.concat(["onValueUpdate", "onDayCreate", "onParseConfig", "onReady", "onPreCalendarPosition", "onKeyDown"])
                  , s = ["locale", "showMonths"]
                  , d = {
                    name: "flat-pickr",
                    render: function(e) {
                        return e("input", {
                            attrs: {
                                type: "text",
                                "data-input": !0
                            },
                            props: {
                                disabled: this.disabled
                            },
                            on: {
                                input: this.onInput
                            }
                        })
                    },
                    props: {
                        value: {
                            default: null,
                            required: !0,
                            validator: function(e) {
                                return null === e || e instanceof Date || "string" == typeof e || e instanceof String || e instanceof Array || "number" == typeof e
                            }
                        },
                        config: {
                            type: Object,
                            default: function() {
                                return {
                                    wrap: !1,
                                    defaultDate: null
                                }
                            }
                        },
                        events: {
                            type: Array,
                            default: function() {
                                return o
                            }
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            fp: null
                        }
                    },
                    mounted: function() {
                        var e = this;
                        if (!this.fp) {
                            var t = l(this.config);
                            this.events.forEach((function(n) {
                                var a, o = i.a.defaultConfig[n] || [];
                                t[n] = (a = t[n] || [],
                                a instanceof Array ? a : [a]).concat(o, (function() {
                                    for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++)
                                        a[i] = arguments[i];
                                    var o;
                                    e.$emit.apply(e, [(o = n,
                                    o.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase())].concat(a))
                                }
                                ))
                            }
                            )),
                            t.defaultDate = this.value || t.defaultDate,
                            this.fp = new i.a(this.getElem(),t),
                            this.fpInput().addEventListener("blur", this.onBlur),
                            this.$watch("disabled", this.watchDisabled, {
                                immediate: !0
                            })
                        }
                    },
                    methods: {
                        getElem: function() {
                            return this.config.wrap ? this.$el.parentNode : this.$el
                        },
                        onInput: function(e) {
                            var t = this
                              , n = e.target;
                            this.$nextTick((function() {
                                t.$emit("input", n.value)
                            }
                            ))
                        },
                        fpInput: function() {
                            return this.fp.altInput || this.fp.input
                        },
                        onBlur: function(e) {
                            this.$emit("blur", e.target.value)
                        },
                        watchDisabled: function(e) {
                            e ? this.fpInput().setAttribute("disabled", e) : this.fpInput().removeAttribute("disabled")
                        }
                    },
                    watch: {
                        config: {
                            deep: !0,
                            handler: function(e) {
                                var t = this
                                  , n = l(e);
                                c.forEach((function(e) {
                                    delete n[e]
                                }
                                )),
                                this.fp.set(n),
                                s.forEach((function(e) {
                                    void 0 !== n[e] && t.fp.set(e, n[e])
                                }
                                ))
                            }
                        },
                        value: function(e) {
                            e !== this.$el.value && this.fp && this.fp.setDate(e, !0)
                        }
                    },
                    beforeDestroy: function() {
                        this.fp && (this.fpInput().removeEventListener("blur", this.onBlur),
                        this.fp.destroy(),
                        this.fp = null)
                    }
                };
                n.d(t, "Plugin", (function() {
                    return u
                }
                )),
                n.d(t, "Component", (function() {
                    return d
                }
                ));
                var u = function(e, t) {
                    var n = "flat-pickr";
                    "string" == typeof t && (n = t),
                    e.component(n, d)
                };
                d.install = u,
                t.default = d
            }
            ]).default
        }
        ))
    },
    cf06: function(e, t, n) {
        /* flatpickr v4.6.3, @license MIT */
        (function(t, n) {
            e.exports = n()
        }
        )(0, (function() {
            "use strict";
            /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
            var e = function() {
                return e = Object.assign || function(e) {
                    for (var t, n = 1, a = arguments.length; n < a; n++)
                        for (var i in t = arguments[n],
                        t)
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                e.apply(this, arguments)
            }
              , t = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"]
              , n = {
                _disable: [],
                _enable: [],
                allowInput: !1,
                altFormat: "F j, Y",
                altInput: !1,
                altInputClass: "form-control input",
                animate: "object" === typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
                ariaDateFormat: "F j, Y",
                clickOpens: !0,
                closeOnSelect: !0,
                conjunction: ", ",
                dateFormat: "Y-m-d",
                defaultHour: 12,
                defaultMinute: 0,
                defaultSeconds: 0,
                disable: [],
                disableMobile: !1,
                enable: [],
                enableSeconds: !1,
                enableTime: !1,
                errorHandler: function(e) {
                    return "undefined" !== typeof console && console.warn(e)
                },
                getWeek: function(e) {
                    var t = new Date(e.getTime());
                    t.setHours(0, 0, 0, 0),
                    t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
                    var n = new Date(t.getFullYear(),0,4);
                    return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
                },
                hourIncrement: 1,
                ignoredFocusElements: [],
                inline: !1,
                locale: "default",
                minuteIncrement: 5,
                mode: "single",
                monthSelectorType: "dropdown",
                nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
                noCalendar: !1,
                now: new Date,
                onChange: [],
                onClose: [],
                onDayCreate: [],
                onDestroy: [],
                onKeyDown: [],
                onMonthChange: [],
                onOpen: [],
                onParseConfig: [],
                onReady: [],
                onValueUpdate: [],
                onYearChange: [],
                onPreCalendarPosition: [],
                plugins: [],
                position: "auto",
                positionElement: void 0,
                prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
                shorthandCurrentMonth: !1,
                showMonths: 1,
                static: !1,
                time_24hr: !1,
                weekNumbers: !1,
                wrap: !1
            }
              , a = {
                weekdays: {
                    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                months: {
                    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                firstDayOfWeek: 0,
                ordinal: function(e) {
                    var t = e % 100;
                    if (t > 3 && t < 21)
                        return "th";
                    switch (t % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th"
                    }
                },
                rangeSeparator: " to ",
                weekAbbreviation: "Wk",
                scrollTitle: "Scroll to increment",
                toggleTitle: "Click to toggle",
                amPM: ["AM", "PM"],
                yearAriaLabel: "Year",
                hourAriaLabel: "Hour",
                minuteAriaLabel: "Minute",
                time_24hr: !1
            }
              , i = function(e) {
                return ("0" + e).slice(-2)
            }
              , o = function(e) {
                return !0 === e ? 1 : 0
            };
            function r(e, t, n) {
                var a;
                return void 0 === n && (n = !1),
                function() {
                    var i = this
                      , o = arguments;
                    null !== a && clearTimeout(a),
                    a = window.setTimeout((function() {
                        a = null,
                        n || e.apply(i, o)
                    }
                    ), t),
                    n && !a && e.apply(i, o)
                }
            }
            var l = function(e) {
                return e instanceof Array ? e : [e]
            };
            function c(e, t, n) {
                if (!0 === n)
                    return e.classList.add(t);
                e.classList.remove(t)
            }
            function s(e, t, n) {
                var a = window.document.createElement(e);
                return t = t || "",
                n = n || "",
                a.className = t,
                void 0 !== n && (a.textContent = n),
                a
            }
            function d(e) {
                while (e.firstChild)
                    e.removeChild(e.firstChild)
            }
            function u(e, t) {
                return t(e) ? e : e.parentNode ? u(e.parentNode, t) : void 0
            }
            function f(e, t) {
                var n = s("div", "numInputWrapper")
                  , a = s("input", "numInput " + e)
                  , i = s("span", "arrowUp")
                  , o = s("span", "arrowDown");
                if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? a.type = "number" : (a.type = "text",
                a.pattern = "\\d*"),
                void 0 !== t)
                    for (var r in t)
                        a.setAttribute(r, t[r]);
                return n.appendChild(a),
                n.appendChild(i),
                n.appendChild(o),
                n
            }
            function m(e) {
                if ("function" === typeof e.composedPath) {
                    var t = e.composedPath();
                    return t[0]
                }
                return e.target
            }
            var g = function() {}
              , p = function(e, t, n) {
                return n.months[t ? "shorthand" : "longhand"][e]
            }
              , h = {
                D: g,
                F: function(e, t, n) {
                    e.setMonth(n.months.longhand.indexOf(t))
                },
                G: function(e, t) {
                    e.setHours(parseFloat(t))
                },
                H: function(e, t) {
                    e.setHours(parseFloat(t))
                },
                J: function(e, t) {
                    e.setDate(parseFloat(t))
                },
                K: function(e, t, n) {
                    e.setHours(e.getHours() % 12 + 12 * o(new RegExp(n.amPM[1],"i").test(t)))
                },
                M: function(e, t, n) {
                    e.setMonth(n.months.shorthand.indexOf(t))
                },
                S: function(e, t) {
                    e.setSeconds(parseFloat(t))
                },
                U: function(e, t) {
                    return new Date(1e3 * parseFloat(t))
                },
                W: function(e, t, n) {
                    var a = parseInt(t)
                      , i = new Date(e.getFullYear(),0,2 + 7 * (a - 1),0,0,0,0);
                    return i.setDate(i.getDate() - i.getDay() + n.firstDayOfWeek),
                    i
                },
                Y: function(e, t) {
                    e.setFullYear(parseFloat(t))
                },
                Z: function(e, t) {
                    return new Date(t)
                },
                d: function(e, t) {
                    e.setDate(parseFloat(t))
                },
                h: function(e, t) {
                    e.setHours(parseFloat(t))
                },
                i: function(e, t) {
                    e.setMinutes(parseFloat(t))
                },
                j: function(e, t) {
                    e.setDate(parseFloat(t))
                },
                l: g,
                m: function(e, t) {
                    e.setMonth(parseFloat(t) - 1)
                },
                n: function(e, t) {
                    e.setMonth(parseFloat(t) - 1)
                },
                s: function(e, t) {
                    e.setSeconds(parseFloat(t))
                },
                u: function(e, t) {
                    return new Date(parseFloat(t))
                },
                w: g,
                y: function(e, t) {
                    e.setFullYear(2e3 + parseFloat(t))
                }
            }
              , v = {
                D: "(\\w+)",
                F: "(\\w+)",
                G: "(\\d\\d|\\d)",
                H: "(\\d\\d|\\d)",
                J: "(\\d\\d|\\d)\\w+",
                K: "",
                M: "(\\w+)",
                S: "(\\d\\d|\\d)",
                U: "(.+)",
                W: "(\\d\\d|\\d)",
                Y: "(\\d{4})",
                Z: "(.+)",
                d: "(\\d\\d|\\d)",
                h: "(\\d\\d|\\d)",
                i: "(\\d\\d|\\d)",
                j: "(\\d\\d|\\d)",
                l: "(\\w+)",
                m: "(\\d\\d|\\d)",
                n: "(\\d\\d|\\d)",
                s: "(\\d\\d|\\d)",
                u: "(.+)",
                w: "(\\d\\d|\\d)",
                y: "(\\d{2})"
            }
              , D = {
                Z: function(e) {
                    return e.toISOString()
                },
                D: function(e, t, n) {
                    return t.weekdays.shorthand[D.w(e, t, n)]
                },
                F: function(e, t, n) {
                    return p(D.n(e, t, n) - 1, !1, t)
                },
                G: function(e, t, n) {
                    return i(D.h(e, t, n))
                },
                H: function(e) {
                    return i(e.getHours())
                },
                J: function(e, t) {
                    return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
                },
                K: function(e, t) {
                    return t.amPM[o(e.getHours() > 11)]
                },
                M: function(e, t) {
                    return p(e.getMonth(), !0, t)
                },
                S: function(e) {
                    return i(e.getSeconds())
                },
                U: function(e) {
                    return e.getTime() / 1e3
                },
                W: function(e, t, n) {
                    return n.getWeek(e)
                },
                Y: function(e) {
                    return e.getFullYear()
                },
                d: function(e) {
                    return i(e.getDate())
                },
                h: function(e) {
                    return e.getHours() % 12 ? e.getHours() % 12 : 12
                },
                i: function(e) {
                    return i(e.getMinutes())
                },
                j: function(e) {
                    return e.getDate()
                },
                l: function(e, t) {
                    return t.weekdays.longhand[e.getDay()]
                },
                m: function(e) {
                    return i(e.getMonth() + 1)
                },
                n: function(e) {
                    return e.getMonth() + 1
                },
                s: function(e) {
                    return e.getSeconds()
                },
                u: function(e) {
                    return e.getTime()
                },
                w: function(e) {
                    return e.getDay()
                },
                y: function(e) {
                    return String(e.getFullYear()).substring(2)
                }
            }
              , w = function(e) {
                var t = e.config
                  , i = void 0 === t ? n : t
                  , o = e.l10n
                  , r = void 0 === o ? a : o;
                return function(e, t, n) {
                    var a = n || r;
                    return void 0 !== i.formatDate ? i.formatDate(e, t, a) : t.split("").map((function(t, n, o) {
                        return D[t] && "\\" !== o[n - 1] ? D[t](e, a, i) : "\\" !== t ? t : ""
                    }
                    )).join("")
                }
            }
              , b = function(e) {
                var t = e.config
                  , i = void 0 === t ? n : t
                  , o = e.l10n
                  , r = void 0 === o ? a : o;
                return function(e, t, a, o) {
                    if (0 === e || e) {
                        var l, c = o || r, s = e;
                        if (e instanceof Date)
                            l = new Date(e.getTime());
                        else if ("string" !== typeof e && void 0 !== e.toFixed)
                            l = new Date(e);
                        else if ("string" === typeof e) {
                            var d = t || (i || n).dateFormat
                              , u = String(e).trim();
                            if ("today" === u)
                                l = new Date,
                                a = !0;
                            else if (/Z$/.test(u) || /GMT$/.test(u))
                                l = new Date(e);
                            else if (i && i.parseDate)
                                l = i.parseDate(e, d);
                            else {
                                l = i && i.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(),0,1,0,0,0,0);
                                for (var f = void 0, m = [], g = 0, p = 0, D = ""; g < d.length; g++) {
                                    var w = d[g]
                                      , b = "\\" === w
                                      , y = "\\" === d[g - 1] || b;
                                    if (v[w] && !y) {
                                        D += v[w];
                                        var C = new RegExp(D).exec(e);
                                        C && (f = !0) && m["Y" !== w ? "push" : "unshift"]({
                                            fn: h[w],
                                            val: C[++p]
                                        })
                                    } else
                                        b || (D += ".");
                                    m.forEach((function(e) {
                                        var t = e.fn
                                          , n = e.val;
                                        return l = t(l, n, c) || l
                                    }
                                    ))
                                }
                                l = f ? l : void 0
                            }
                        }
                        if (l instanceof Date && !isNaN(l.getTime()))
                            return !0 === a && l.setHours(0, 0, 0, 0),
                            l;
                        i.errorHandler(new Error("Invalid date provided: " + s))
                    }
                }
            };
            function y(e, t, n) {
                return void 0 === n && (n = !0),
                !1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
            }
            var C = function(e, t, n) {
                return e > Math.min(t, n) && e < Math.max(t, n)
            }
              , M = {
                DAY: 864e5
            };
            "function" !== typeof Object.assign && (Object.assign = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                if (!e)
                    throw TypeError("Cannot convert undefined or null to object");
                for (var a = function(t) {
                    t && Object.keys(t).forEach((function(n) {
                        return e[n] = t[n]
                    }
                    ))
                }, i = 0, o = t; i < o.length; i++) {
                    var r = o[i];
                    a(r)
                }
                return e
            }
            );
            var x = 300;
            function E(g, h) {
                var D = {
                    config: e({}, n, k.defaultConfig),
                    l10n: a
                };
                function E() {
                    D.utils = {
                        getDaysInMonth: function(e, t) {
                            return void 0 === e && (e = D.currentMonth),
                            void 0 === t && (t = D.currentYear),
                            1 === e && (t % 4 === 0 && t % 100 !== 0 || t % 400 === 0) ? 29 : D.l10n.daysInMonth[e]
                        }
                    }
                }
                function T() {
                    D.element = D.input = g,
                    D.isOpen = !1,
                    Ce(),
                    Me(),
                    Ne(),
                    Ae(),
                    E(),
                    D.isMobile || K(),
                    R(),
                    (D.selectedDates.length || D.config.noCalendar) && (D.config.enableTime && N(D.config.noCalendar ? D.latestSelectedDateObj || D.config.minDate : void 0),
                    Je(!1)),
                    O(),
                    D.showTimeInput = D.selectedDates.length > 0 || D.config.noCalendar;
                    var e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                    !D.isMobile && e && xe(),
                    je("onReady")
                }
                function I(e) {
                    return e.bind(D)
                }
                function O() {
                    var e = D.config;
                    !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame((function() {
                        if (void 0 !== D.calendarContainer && (D.calendarContainer.style.visibility = "hidden",
                        D.calendarContainer.style.display = "block"),
                        void 0 !== D.daysContainer) {
                            var t = (D.days.offsetWidth + 1) * e.showMonths;
                            D.daysContainer.style.width = t + "px",
                            D.calendarContainer.style.width = t + (void 0 !== D.weekWrapper ? D.weekWrapper.offsetWidth : 0) + "px",
                            D.calendarContainer.style.removeProperty("visibility"),
                            D.calendarContainer.style.removeProperty("display")
                        }
                    }
                    ))
                }
                function S(e) {
                    0 === D.selectedDates.length && we(),
                    void 0 !== e && "blur" !== e.type && Ke(e);
                    var t = D._input.value;
                    A(),
                    Je(),
                    D._input.value !== t && D._debouncedChange()
                }
                function _(e, t) {
                    return e % 12 + 12 * o(t === D.l10n.amPM[1])
                }
                function P(e) {
                    switch (e % 24) {
                    case 0:
                    case 12:
                        return 12;
                    default:
                        return e % 12
                    }
                }
                function A() {
                    if (void 0 !== D.hourElement && void 0 !== D.minuteElement) {
                        var e = (parseInt(D.hourElement.value.slice(-2), 10) || 0) % 24
                          , t = (parseInt(D.minuteElement.value, 10) || 0) % 60
                          , n = void 0 !== D.secondElement ? (parseInt(D.secondElement.value, 10) || 0) % 60 : 0;
                        void 0 !== D.amPM && (e = _(e, D.amPM.textContent));
                        var a = void 0 !== D.config.minTime || D.config.minDate && D.minDateHasTime && D.latestSelectedDateObj && 0 === y(D.latestSelectedDateObj, D.config.minDate, !0)
                          , i = void 0 !== D.config.maxTime || D.config.maxDate && D.maxDateHasTime && D.latestSelectedDateObj && 0 === y(D.latestSelectedDateObj, D.config.maxDate, !0);
                        if (i) {
                            var o = void 0 !== D.config.maxTime ? D.config.maxTime : D.config.maxDate;
                            e = Math.min(e, o.getHours()),
                            e === o.getHours() && (t = Math.min(t, o.getMinutes())),
                            t === o.getMinutes() && (n = Math.min(n, o.getSeconds()))
                        }
                        if (a) {
                            var r = void 0 !== D.config.minTime ? D.config.minTime : D.config.minDate;
                            e = Math.max(e, r.getHours()),
                            e === r.getHours() && (t = Math.max(t, r.getMinutes())),
                            t === r.getMinutes() && (n = Math.max(n, r.getSeconds()))
                        }
                        Y(e, t, n)
                    }
                }
                function N(e) {
                    var t = e || D.latestSelectedDateObj;
                    t && Y(t.getHours(), t.getMinutes(), t.getSeconds())
                }
                function F() {
                    var e = D.config.defaultHour
                      , t = D.config.defaultMinute
                      , n = D.config.defaultSeconds;
                    if (void 0 !== D.config.minDate) {
                        var a = D.config.minDate.getHours()
                          , i = D.config.minDate.getMinutes();
                        e = Math.max(e, a),
                        e === a && (t = Math.max(i, t)),
                        e === a && t === i && (n = D.config.minDate.getSeconds())
                    }
                    if (void 0 !== D.config.maxDate) {
                        var o = D.config.maxDate.getHours()
                          , r = D.config.maxDate.getMinutes();
                        e = Math.min(e, o),
                        e === o && (t = Math.min(r, t)),
                        e === o && t === r && (n = D.config.maxDate.getSeconds())
                    }
                    Y(e, t, n)
                }
                function Y(e, t, n) {
                    void 0 !== D.latestSelectedDateObj && D.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0),
                    D.hourElement && D.minuteElement && !D.isMobile && (D.hourElement.value = i(D.config.time_24hr ? e : (12 + e) % 12 + 12 * o(e % 12 === 0)),
                    D.minuteElement.value = i(t),
                    void 0 !== D.amPM && (D.amPM.textContent = D.l10n.amPM[o(e >= 12)]),
                    void 0 !== D.secondElement && (D.secondElement.value = i(n)))
                }
                function j(e) {
                    var t = parseInt(e.target.value) + (e.delta || 0);
                    (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && me(t)
                }
                function H(e, t, n, a) {
                    return t instanceof Array ? t.forEach((function(t) {
                        return H(e, t, n, a)
                    }
                    )) : e instanceof Array ? e.forEach((function(e) {
                        return H(e, t, n, a)
                    }
                    )) : (e.addEventListener(t, n, a),
                    void D._handlers.push({
                        element: e,
                        event: t,
                        handler: n,
                        options: a
                    }))
                }
                function L(e) {
                    return function(t) {
                        1 === t.which && e(t)
                    }
                }
                function W() {
                    je("onChange")
                }
                function R() {
                    if (D.config.wrap && ["open", "close", "toggle", "clear"].forEach((function(e) {
                        Array.prototype.forEach.call(D.element.querySelectorAll("[data-" + e + "]"), (function(t) {
                            return H(t, "click", D[e])
                        }
                        ))
                    }
                    )),
                    D.isMobile)
                        Fe();
                    else {
                        var e = r(De, 50);
                        if (D._debouncedChange = r(W, x),
                        D.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && H(D.daysContainer, "mouseover", (function(e) {
                            "range" === D.config.mode && ve(e.target)
                        }
                        )),
                        H(window.document.body, "keydown", he),
                        D.config.inline || D.config.static || H(window, "resize", e),
                        void 0 !== window.ontouchstart ? H(window.document, "touchstart", fe) : H(window.document, "mousedown", L(fe)),
                        H(window.document, "focus", fe, {
                            capture: !0
                        }),
                        !0 === D.config.clickOpens && (H(D._input, "focus", D.open),
                        H(D._input, "mousedown", L(D.open))),
                        void 0 !== D.daysContainer && (H(D.monthNav, "mousedown", L($e)),
                        H(D.monthNav, ["keyup", "increment"], j),
                        H(D.daysContainer, "mousedown", L(ke))),
                        void 0 !== D.timeContainer && void 0 !== D.minuteElement && void 0 !== D.hourElement) {
                            var t = function(e) {
                                return e.target.select()
                            };
                            H(D.timeContainer, ["increment"], S),
                            H(D.timeContainer, "blur", S, {
                                capture: !0
                            }),
                            H(D.timeContainer, "mousedown", L(J)),
                            H([D.hourElement, D.minuteElement], ["focus", "click"], t),
                            void 0 !== D.secondElement && H(D.secondElement, "focus", (function() {
                                return D.secondElement && D.secondElement.select()
                            }
                            )),
                            void 0 !== D.amPM && H(D.amPM, "mousedown", L((function(e) {
                                S(e),
                                W()
                            }
                            )))
                        }
                    }
                }
                function B(e, t) {
                    var n = void 0 !== e ? D.parseDate(e) : D.latestSelectedDateObj || (D.config.minDate && D.config.minDate > D.now ? D.config.minDate : D.config.maxDate && D.config.maxDate < D.now ? D.config.maxDate : D.now)
                      , a = D.currentYear
                      , i = D.currentMonth;
                    try {
                        void 0 !== n && (D.currentYear = n.getFullYear(),
                        D.currentMonth = n.getMonth())
                    } catch (o) {
                        o.message = "Invalid date supplied: " + n,
                        D.config.errorHandler(o)
                    }
                    t && D.currentYear !== a && (je("onYearChange"),
                    X()),
                    !t || D.currentYear === a && D.currentMonth === i || je("onMonthChange"),
                    D.redraw()
                }
                function J(e) {
                    ~e.target.className.indexOf("arrow") && $(e, e.target.classList.contains("arrowUp") ? 1 : -1)
                }
                function $(e, t, n) {
                    var a = e && e.target
                      , i = n || a && a.parentNode && a.parentNode.firstChild
                      , o = He("increment");
                    o.delta = t,
                    i && i.dispatchEvent(o)
                }
                function K() {
                    var e = window.document.createDocumentFragment();
                    if (D.calendarContainer = s("div", "flatpickr-calendar"),
                    D.calendarContainer.tabIndex = -1,
                    !D.config.noCalendar) {
                        if (e.appendChild(ne()),
                        D.innerContainer = s("div", "flatpickr-innerContainer"),
                        D.config.weekNumbers) {
                            var t = re()
                              , n = t.weekWrapper
                              , a = t.weekNumbers;
                            D.innerContainer.appendChild(n),
                            D.weekNumbers = a,
                            D.weekWrapper = n
                        }
                        D.rContainer = s("div", "flatpickr-rContainer"),
                        D.rContainer.appendChild(ie()),
                        D.daysContainer || (D.daysContainer = s("div", "flatpickr-days"),
                        D.daysContainer.tabIndex = -1),
                        Q(),
                        D.rContainer.appendChild(D.daysContainer),
                        D.innerContainer.appendChild(D.rContainer),
                        e.appendChild(D.innerContainer)
                    }
                    D.config.enableTime && e.appendChild(ae()),
                    c(D.calendarContainer, "rangeMode", "range" === D.config.mode),
                    c(D.calendarContainer, "animate", !0 === D.config.animate),
                    c(D.calendarContainer, "multiMonth", D.config.showMonths > 1),
                    D.calendarContainer.appendChild(e);
                    var i = void 0 !== D.config.appendTo && void 0 !== D.config.appendTo.nodeType;
                    if ((D.config.inline || D.config.static) && (D.calendarContainer.classList.add(D.config.inline ? "inline" : "static"),
                    D.config.inline && (!i && D.element.parentNode ? D.element.parentNode.insertBefore(D.calendarContainer, D._input.nextSibling) : void 0 !== D.config.appendTo && D.config.appendTo.appendChild(D.calendarContainer)),
                    D.config.static)) {
                        var o = s("div", "flatpickr-wrapper");
                        D.element.parentNode && D.element.parentNode.insertBefore(o, D.element),
                        o.appendChild(D.element),
                        D.altInput && o.appendChild(D.altInput),
                        o.appendChild(D.calendarContainer)
                    }
                    D.config.static || D.config.inline || (void 0 !== D.config.appendTo ? D.config.appendTo : window.document.body).appendChild(D.calendarContainer)
                }
                function U(e, t, n, a) {
                    var i = ge(t, !0)
                      , o = s("span", "flatpickr-day " + e, t.getDate().toString());
                    return o.dateObj = t,
                    o.$i = a,
                    o.setAttribute("aria-label", D.formatDate(t, D.config.ariaDateFormat)),
                    -1 === e.indexOf("hidden") && 0 === y(t, D.now) && (D.todayDateElem = o,
                    o.classList.add("today"),
                    o.setAttribute("aria-current", "date")),
                    i ? (o.tabIndex = -1,
                    Le(t) && (o.classList.add("selected"),
                    D.selectedDateElem = o,
                    "range" === D.config.mode && (c(o, "startRange", D.selectedDates[0] && 0 === y(t, D.selectedDates[0], !0)),
                    c(o, "endRange", D.selectedDates[1] && 0 === y(t, D.selectedDates[1], !0)),
                    "nextMonthDay" === e && o.classList.add("inRange")))) : o.classList.add("flatpickr-disabled"),
                    "range" === D.config.mode && We(t) && !Le(t) && o.classList.add("inRange"),
                    D.weekNumbers && 1 === D.config.showMonths && "prevMonthDay" !== e && n % 7 === 1 && D.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + D.config.getWeek(t) + "</span>"),
                    je("onDayCreate", o),
                    o
                }
                function q(e) {
                    e.focus(),
                    "range" === D.config.mode && ve(e)
                }
                function z(e) {
                    for (var t = e > 0 ? 0 : D.config.showMonths - 1, n = e > 0 ? D.config.showMonths : -1, a = t; a != n; a += e)
                        for (var i = D.daysContainer.children[a], o = e > 0 ? 0 : i.children.length - 1, r = e > 0 ? i.children.length : -1, l = o; l != r; l += e) {
                            var c = i.children[l];
                            if (-1 === c.className.indexOf("hidden") && ge(c.dateObj))
                                return c
                        }
                }
                function V(e, t) {
                    for (var n = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : D.currentMonth, a = t > 0 ? D.config.showMonths : -1, i = t > 0 ? 1 : -1, o = n - D.currentMonth; o != a; o += i)
                        for (var r = D.daysContainer.children[o], l = n - D.currentMonth === o ? e.$i + t : t < 0 ? r.children.length - 1 : 0, c = r.children.length, s = l; s >= 0 && s < c && s != (t > 0 ? c : -1); s += i) {
                            var d = r.children[s];
                            if (-1 === d.className.indexOf("hidden") && ge(d.dateObj) && Math.abs(e.$i - s) >= Math.abs(t))
                                return q(d)
                        }
                    D.changeMonth(i),
                    Z(z(i), 0)
                }
                function Z(e, t) {
                    var n = pe(document.activeElement || document.body)
                      , a = void 0 !== e ? e : n ? document.activeElement : void 0 !== D.selectedDateElem && pe(D.selectedDateElem) ? D.selectedDateElem : void 0 !== D.todayDateElem && pe(D.todayDateElem) ? D.todayDateElem : z(t > 0 ? 1 : -1);
                    return void 0 === a ? D._input.focus() : n ? void V(a, t) : q(a)
                }
                function G(e, t) {
                    for (var n = (new Date(e,t,1).getDay() - D.l10n.firstDayOfWeek + 7) % 7, a = D.utils.getDaysInMonth((t - 1 + 12) % 12), i = D.utils.getDaysInMonth(t), o = window.document.createDocumentFragment(), r = D.config.showMonths > 1, l = r ? "prevMonthDay hidden" : "prevMonthDay", c = r ? "nextMonthDay hidden" : "nextMonthDay", d = a + 1 - n, u = 0; d <= a; d++,
                    u++)
                        o.appendChild(U(l, new Date(e,t - 1,d), d, u));
                    for (d = 1; d <= i; d++,
                    u++)
                        o.appendChild(U("", new Date(e,t,d), d, u));
                    for (var f = i + 1; f <= 42 - n && (1 === D.config.showMonths || u % 7 !== 0); f++,
                    u++)
                        o.appendChild(U(c, new Date(e,t + 1,f % i), f, u));
                    var m = s("div", "dayContainer");
                    return m.appendChild(o),
                    m
                }
                function Q() {
                    if (void 0 !== D.daysContainer) {
                        d(D.daysContainer),
                        D.weekNumbers && d(D.weekNumbers);
                        for (var e = document.createDocumentFragment(), t = 0; t < D.config.showMonths; t++) {
                            var n = new Date(D.currentYear,D.currentMonth,1);
                            n.setMonth(D.currentMonth + t),
                            e.appendChild(G(n.getFullYear(), n.getMonth()))
                        }
                        D.daysContainer.appendChild(e),
                        D.days = D.daysContainer.firstChild,
                        "range" === D.config.mode && 1 === D.selectedDates.length && ve()
                    }
                }
                function X() {
                    if (!(D.config.showMonths > 1 || "dropdown" !== D.config.monthSelectorType)) {
                        var e = function(e) {
                            return !(void 0 !== D.config.minDate && D.currentYear === D.config.minDate.getFullYear() && e < D.config.minDate.getMonth()) && !(void 0 !== D.config.maxDate && D.currentYear === D.config.maxDate.getFullYear() && e > D.config.maxDate.getMonth())
                        };
                        D.monthsDropdownContainer.tabIndex = -1,
                        D.monthsDropdownContainer.innerHTML = "";
                        for (var t = 0; t < 12; t++)
                            if (e(t)) {
                                var n = s("option", "flatpickr-monthDropdown-month");
                                n.value = new Date(D.currentYear,t).getMonth().toString(),
                                n.textContent = p(t, D.config.shorthandCurrentMonth, D.l10n),
                                n.tabIndex = -1,
                                D.currentMonth === t && (n.selected = !0),
                                D.monthsDropdownContainer.appendChild(n)
                            }
                    }
                }
                function ee() {
                    var e, t = s("div", "flatpickr-month"), n = window.document.createDocumentFragment();
                    D.config.showMonths > 1 || "static" === D.config.monthSelectorType ? e = s("span", "cur-month") : (D.monthsDropdownContainer = s("select", "flatpickr-monthDropdown-months"),
                    H(D.monthsDropdownContainer, "change", (function(e) {
                        var t = e.target
                          , n = parseInt(t.value, 10);
                        D.changeMonth(n - D.currentMonth),
                        je("onMonthChange")
                    }
                    )),
                    X(),
                    e = D.monthsDropdownContainer);
                    var a = f("cur-year", {
                        tabindex: "-1"
                    })
                      , i = a.getElementsByTagName("input")[0];
                    i.setAttribute("aria-label", D.l10n.yearAriaLabel),
                    D.config.minDate && i.setAttribute("min", D.config.minDate.getFullYear().toString()),
                    D.config.maxDate && (i.setAttribute("max", D.config.maxDate.getFullYear().toString()),
                    i.disabled = !!D.config.minDate && D.config.minDate.getFullYear() === D.config.maxDate.getFullYear());
                    var o = s("div", "flatpickr-current-month");
                    return o.appendChild(e),
                    o.appendChild(a),
                    n.appendChild(o),
                    t.appendChild(n),
                    {
                        container: t,
                        yearElement: i,
                        monthElement: e
                    }
                }
                function te() {
                    d(D.monthNav),
                    D.monthNav.appendChild(D.prevMonthNav),
                    D.config.showMonths && (D.yearElements = [],
                    D.monthElements = []);
                    for (var e = D.config.showMonths; e--; ) {
                        var t = ee();
                        D.yearElements.push(t.yearElement),
                        D.monthElements.push(t.monthElement),
                        D.monthNav.appendChild(t.container)
                    }
                    D.monthNav.appendChild(D.nextMonthNav)
                }
                function ne() {
                    return D.monthNav = s("div", "flatpickr-months"),
                    D.yearElements = [],
                    D.monthElements = [],
                    D.prevMonthNav = s("span", "flatpickr-prev-month"),
                    D.prevMonthNav.innerHTML = D.config.prevArrow,
                    D.nextMonthNav = s("span", "flatpickr-next-month"),
                    D.nextMonthNav.innerHTML = D.config.nextArrow,
                    te(),
                    Object.defineProperty(D, "_hidePrevMonthArrow", {
                        get: function() {
                            return D.__hidePrevMonthArrow
                        },
                        set: function(e) {
                            D.__hidePrevMonthArrow !== e && (c(D.prevMonthNav, "flatpickr-disabled", e),
                            D.__hidePrevMonthArrow = e)
                        }
                    }),
                    Object.defineProperty(D, "_hideNextMonthArrow", {
                        get: function() {
                            return D.__hideNextMonthArrow
                        },
                        set: function(e) {
                            D.__hideNextMonthArrow !== e && (c(D.nextMonthNav, "flatpickr-disabled", e),
                            D.__hideNextMonthArrow = e)
                        }
                    }),
                    D.currentYearElement = D.yearElements[0],
                    Re(),
                    D.monthNav
                }
                function ae() {
                    D.calendarContainer.classList.add("hasTime"),
                    D.config.noCalendar && D.calendarContainer.classList.add("noCalendar"),
                    D.timeContainer = s("div", "flatpickr-time"),
                    D.timeContainer.tabIndex = -1;
                    var e = s("span", "flatpickr-time-separator", ":")
                      , t = f("flatpickr-hour", {
                        "aria-label": D.l10n.hourAriaLabel
                    });
                    D.hourElement = t.getElementsByTagName("input")[0];
                    var n = f("flatpickr-minute", {
                        "aria-label": D.l10n.minuteAriaLabel
                    });
                    if (D.minuteElement = n.getElementsByTagName("input")[0],
                    D.hourElement.tabIndex = D.minuteElement.tabIndex = -1,
                    D.hourElement.value = i(D.latestSelectedDateObj ? D.latestSelectedDateObj.getHours() : D.config.time_24hr ? D.config.defaultHour : P(D.config.defaultHour)),
                    D.minuteElement.value = i(D.latestSelectedDateObj ? D.latestSelectedDateObj.getMinutes() : D.config.defaultMinute),
                    D.hourElement.setAttribute("step", D.config.hourIncrement.toString()),
                    D.minuteElement.setAttribute("step", D.config.minuteIncrement.toString()),
                    D.hourElement.setAttribute("min", D.config.time_24hr ? "0" : "1"),
                    D.hourElement.setAttribute("max", D.config.time_24hr ? "23" : "12"),
                    D.minuteElement.setAttribute("min", "0"),
                    D.minuteElement.setAttribute("max", "59"),
                    D.timeContainer.appendChild(t),
                    D.timeContainer.appendChild(e),
                    D.timeContainer.appendChild(n),
                    D.config.time_24hr && D.timeContainer.classList.add("time24hr"),
                    D.config.enableSeconds) {
                        D.timeContainer.classList.add("hasSeconds");
                        var a = f("flatpickr-second");
                        D.secondElement = a.getElementsByTagName("input")[0],
                        D.secondElement.value = i(D.latestSelectedDateObj ? D.latestSelectedDateObj.getSeconds() : D.config.defaultSeconds),
                        D.secondElement.setAttribute("step", D.minuteElement.getAttribute("step")),
                        D.secondElement.setAttribute("min", "0"),
                        D.secondElement.setAttribute("max", "59"),
                        D.timeContainer.appendChild(s("span", "flatpickr-time-separator", ":")),
                        D.timeContainer.appendChild(a)
                    }
                    return D.config.time_24hr || (D.amPM = s("span", "flatpickr-am-pm", D.l10n.amPM[o((D.latestSelectedDateObj ? D.hourElement.value : D.config.defaultHour) > 11)]),
                    D.amPM.title = D.l10n.toggleTitle,
                    D.amPM.tabIndex = -1,
                    D.timeContainer.appendChild(D.amPM)),
                    D.timeContainer
                }
                function ie() {
                    D.weekdayContainer ? d(D.weekdayContainer) : D.weekdayContainer = s("div", "flatpickr-weekdays");
                    for (var e = D.config.showMonths; e--; ) {
                        var t = s("div", "flatpickr-weekdaycontainer");
                        D.weekdayContainer.appendChild(t)
                    }
                    return oe(),
                    D.weekdayContainer
                }
                function oe() {
                    if (D.weekdayContainer) {
                        var e = D.l10n.firstDayOfWeek
                          , t = D.l10n.weekdays.shorthand.slice();
                        e > 0 && e < t.length && (t = t.splice(e, t.length).concat(t.splice(0, e)));
                        for (var n = D.config.showMonths; n--; )
                            D.weekdayContainer.children[n].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
                    }
                }
                function re() {
                    D.calendarContainer.classList.add("hasWeeks");
                    var e = s("div", "flatpickr-weekwrapper");
                    e.appendChild(s("span", "flatpickr-weekday", D.l10n.weekAbbreviation));
                    var t = s("div", "flatpickr-weeks");
                    return e.appendChild(t),
                    {
                        weekWrapper: e,
                        weekNumbers: t
                    }
                }
                function le(e, t) {
                    void 0 === t && (t = !0);
                    var n = t ? e : e - D.currentMonth;
                    n < 0 && !0 === D._hidePrevMonthArrow || n > 0 && !0 === D._hideNextMonthArrow || (D.currentMonth += n,
                    (D.currentMonth < 0 || D.currentMonth > 11) && (D.currentYear += D.currentMonth > 11 ? 1 : -1,
                    D.currentMonth = (D.currentMonth + 12) % 12,
                    je("onYearChange"),
                    X()),
                    Q(),
                    je("onMonthChange"),
                    Re())
                }
                function ce(e, t) {
                    void 0 === e && (e = !0),
                    void 0 === t && (t = !0),
                    D.input.value = "",
                    void 0 !== D.altInput && (D.altInput.value = ""),
                    void 0 !== D.mobileInput && (D.mobileInput.value = ""),
                    D.selectedDates = [],
                    D.latestSelectedDateObj = void 0,
                    !0 === t && (D.currentYear = D._initialDate.getFullYear(),
                    D.currentMonth = D._initialDate.getMonth()),
                    D.showTimeInput = !1,
                    !0 === D.config.enableTime && F(),
                    D.redraw(),
                    e && je("onChange")
                }
                function se() {
                    D.isOpen = !1,
                    D.isMobile || (void 0 !== D.calendarContainer && D.calendarContainer.classList.remove("open"),
                    void 0 !== D._input && D._input.classList.remove("active")),
                    je("onClose")
                }
                function de() {
                    void 0 !== D.config && je("onDestroy");
                    for (var e = D._handlers.length; e--; ) {
                        var t = D._handlers[e];
                        t.element.removeEventListener(t.event, t.handler, t.options)
                    }
                    if (D._handlers = [],
                    D.mobileInput)
                        D.mobileInput.parentNode && D.mobileInput.parentNode.removeChild(D.mobileInput),
                        D.mobileInput = void 0;
                    else if (D.calendarContainer && D.calendarContainer.parentNode)
                        if (D.config.static && D.calendarContainer.parentNode) {
                            var n = D.calendarContainer.parentNode;
                            if (n.lastChild && n.removeChild(n.lastChild),
                            n.parentNode) {
                                while (n.firstChild)
                                    n.parentNode.insertBefore(n.firstChild, n);
                                n.parentNode.removeChild(n)
                            }
                        } else
                            D.calendarContainer.parentNode.removeChild(D.calendarContainer);
                    D.altInput && (D.input.type = "text",
                    D.altInput.parentNode && D.altInput.parentNode.removeChild(D.altInput),
                    delete D.altInput),
                    D.input && (D.input.type = D.input._type,
                    D.input.classList.remove("flatpickr-input"),
                    D.input.removeAttribute("readonly"),
                    D.input.value = ""),
                    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach((function(e) {
                        try {
                            delete D[e]
                        } catch (t) {}
                    }
                    ))
                }
                function ue(e) {
                    return !(!D.config.appendTo || !D.config.appendTo.contains(e)) || D.calendarContainer.contains(e)
                }
                function fe(e) {
                    if (D.isOpen && !D.config.inline) {
                        var t = m(e)
                          , n = ue(t)
                          , a = t === D.input || t === D.altInput || D.element.contains(t) || e.path && e.path.indexOf && (~e.path.indexOf(D.input) || ~e.path.indexOf(D.altInput))
                          , i = "blur" === e.type ? a && e.relatedTarget && !ue(e.relatedTarget) : !a && !n && !ue(e.relatedTarget)
                          , o = !D.config.ignoredFocusElements.some((function(e) {
                            return e.contains(t)
                        }
                        ));
                        i && o && (void 0 !== D.timeContainer && void 0 !== D.minuteElement && void 0 !== D.hourElement && S(),
                        D.close(),
                        "range" === D.config.mode && 1 === D.selectedDates.length && (D.clear(!1),
                        D.redraw()))
                    }
                }
                function me(e) {
                    if (!(!e || D.config.minDate && e < D.config.minDate.getFullYear() || D.config.maxDate && e > D.config.maxDate.getFullYear())) {
                        var t = e
                          , n = D.currentYear !== t;
                        D.currentYear = t || D.currentYear,
                        D.config.maxDate && D.currentYear === D.config.maxDate.getFullYear() ? D.currentMonth = Math.min(D.config.maxDate.getMonth(), D.currentMonth) : D.config.minDate && D.currentYear === D.config.minDate.getFullYear() && (D.currentMonth = Math.max(D.config.minDate.getMonth(), D.currentMonth)),
                        n && (D.redraw(),
                        je("onYearChange"),
                        X())
                    }
                }
                function ge(e, t) {
                    void 0 === t && (t = !0);
                    var n = D.parseDate(e, void 0, t);
                    if (D.config.minDate && n && y(n, D.config.minDate, void 0 !== t ? t : !D.minDateHasTime) < 0 || D.config.maxDate && n && y(n, D.config.maxDate, void 0 !== t ? t : !D.maxDateHasTime) > 0)
                        return !1;
                    if (0 === D.config.enable.length && 0 === D.config.disable.length)
                        return !0;
                    if (void 0 === n)
                        return !1;
                    for (var a = D.config.enable.length > 0, i = a ? D.config.enable : D.config.disable, o = 0, r = void 0; o < i.length; o++) {
                        if (r = i[o],
                        "function" === typeof r && r(n))
                            return a;
                        if (r instanceof Date && void 0 !== n && r.getTime() === n.getTime())
                            return a;
                        if ("string" === typeof r && void 0 !== n) {
                            var l = D.parseDate(r, void 0, !0);
                            return l && l.getTime() === n.getTime() ? a : !a
                        }
                        if ("object" === typeof r && void 0 !== n && r.from && r.to && n.getTime() >= r.from.getTime() && n.getTime() <= r.to.getTime())
                            return a
                    }
                    return !a
                }
                function pe(e) {
                    return void 0 !== D.daysContainer && (-1 === e.className.indexOf("hidden") && D.daysContainer.contains(e))
                }
                function he(e) {
                    var t = e.target === D._input
                      , n = D.config.allowInput
                      , a = D.isOpen && (!n || !t)
                      , i = D.config.inline && t && !n;
                    if (13 === e.keyCode && t) {
                        if (n)
                            return D.setDate(D._input.value, !0, e.target === D.altInput ? D.config.altFormat : D.config.dateFormat),
                            e.target.blur();
                        D.open()
                    } else if (ue(e.target) || a || i) {
                        var o = !!D.timeContainer && D.timeContainer.contains(e.target);
                        switch (e.keyCode) {
                        case 13:
                            o ? (e.preventDefault(),
                            S(),
                            Te()) : ke(e);
                            break;
                        case 27:
                            e.preventDefault(),
                            Te();
                            break;
                        case 8:
                        case 46:
                            t && !D.config.allowInput && (e.preventDefault(),
                            D.clear());
                            break;
                        case 37:
                        case 39:
                            if (o || t)
                                D.hourElement && D.hourElement.focus();
                            else if (e.preventDefault(),
                            void 0 !== D.daysContainer && (!1 === n || document.activeElement && pe(document.activeElement))) {
                                var r = 39 === e.keyCode ? 1 : -1;
                                e.ctrlKey ? (e.stopPropagation(),
                                le(r),
                                Z(z(1), 0)) : Z(void 0, r)
                            }
                            break;
                        case 38:
                        case 40:
                            e.preventDefault();
                            var l = 40 === e.keyCode ? 1 : -1;
                            D.daysContainer && void 0 !== e.target.$i || e.target === D.input || e.target === D.altInput ? e.ctrlKey ? (e.stopPropagation(),
                            me(D.currentYear - l),
                            Z(z(1), 0)) : o || Z(void 0, 7 * l) : e.target === D.currentYearElement ? me(D.currentYear - l) : D.config.enableTime && (!o && D.hourElement && D.hourElement.focus(),
                            S(e),
                            D._debouncedChange());
                            break;
                        case 9:
                            if (o) {
                                var c = [D.hourElement, D.minuteElement, D.secondElement, D.amPM].concat(D.pluginElements).filter((function(e) {
                                    return e
                                }
                                ))
                                  , s = c.indexOf(e.target);
                                if (-1 !== s) {
                                    var d = c[s + (e.shiftKey ? -1 : 1)];
                                    e.preventDefault(),
                                    (d || D._input).focus()
                                }
                            } else
                                !D.config.noCalendar && D.daysContainer && D.daysContainer.contains(e.target) && e.shiftKey && (e.preventDefault(),
                                D._input.focus());
                            break;
                        default:
                            break
                        }
                    }
                    if (void 0 !== D.amPM && e.target === D.amPM)
                        switch (e.key) {
                        case D.l10n.amPM[0].charAt(0):
                        case D.l10n.amPM[0].charAt(0).toLowerCase():
                            D.amPM.textContent = D.l10n.amPM[0],
                            A(),
                            Je();
                            break;
                        case D.l10n.amPM[1].charAt(0):
                        case D.l10n.amPM[1].charAt(0).toLowerCase():
                            D.amPM.textContent = D.l10n.amPM[1],
                            A(),
                            Je();
                            break
                        }
                    (t || ue(e.target)) && je("onKeyDown", e)
                }
                function ve(e) {
                    if (1 === D.selectedDates.length && (!e || e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled"))) {
                        for (var t = e ? e.dateObj.getTime() : D.days.firstElementChild.dateObj.getTime(), n = D.parseDate(D.selectedDates[0], void 0, !0).getTime(), a = Math.min(t, D.selectedDates[0].getTime()), i = Math.max(t, D.selectedDates[0].getTime()), o = !1, r = 0, l = 0, c = a; c < i; c += M.DAY)
                            ge(new Date(c), !0) || (o = o || c > a && c < i,
                            c < n && (!r || c > r) ? r = c : c > n && (!l || c < l) && (l = c));
                        for (var s = 0; s < D.config.showMonths; s++)
                            for (var d = D.daysContainer.children[s], u = function(a, i) {
                                var c = d.children[a]
                                  , s = c.dateObj
                                  , u = s.getTime()
                                  , f = r > 0 && u < r || l > 0 && u > l;
                                return f ? (c.classList.add("notAllowed"),
                                ["inRange", "startRange", "endRange"].forEach((function(e) {
                                    c.classList.remove(e)
                                }
                                )),
                                "continue") : o && !f ? "continue" : (["startRange", "inRange", "endRange", "notAllowed"].forEach((function(e) {
                                    c.classList.remove(e)
                                }
                                )),
                                void (void 0 !== e && (e.classList.add(t <= D.selectedDates[0].getTime() ? "startRange" : "endRange"),
                                n < t && u === n ? c.classList.add("startRange") : n > t && u === n && c.classList.add("endRange"),
                                u >= r && (0 === l || u <= l) && C(u, n, t) && c.classList.add("inRange"))))
                            }, f = 0, m = d.children.length; f < m; f++)
                                u(f, m)
                    }
                }
                function De() {
                    !D.isOpen || D.config.static || D.config.inline || xe()
                }
                function we() {
                    D.setDate(void 0 !== D.config.minDate ? new Date(D.config.minDate.getTime()) : new Date, !0),
                    F(),
                    Je()
                }
                function be(e, t) {
                    if (void 0 === t && (t = D._positionElement),
                    !0 === D.isMobile)
                        return e && (e.preventDefault(),
                        e.target && e.target.blur()),
                        void 0 !== D.mobileInput && (D.mobileInput.focus(),
                        D.mobileInput.click()),
                        void je("onOpen");
                    if (!D._input.disabled && !D.config.inline) {
                        var n = D.isOpen;
                        D.isOpen = !0,
                        n || (D.calendarContainer.classList.add("open"),
                        D._input.classList.add("active"),
                        je("onOpen"),
                        xe(t)),
                        !0 === D.config.enableTime && !0 === D.config.noCalendar && (0 === D.selectedDates.length && we(),
                        !1 !== D.config.allowInput || void 0 !== e && D.timeContainer.contains(e.relatedTarget) || setTimeout((function() {
                            return D.hourElement.select()
                        }
                        ), 50))
                    }
                }
                function ye(e) {
                    return function(t) {
                        var n = D.config["_" + e + "Date"] = D.parseDate(t, D.config.dateFormat)
                          , a = D.config["_" + ("min" === e ? "max" : "min") + "Date"];
                        void 0 !== n && (D["min" === e ? "minDateHasTime" : "maxDateHasTime"] = n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0),
                        D.selectedDates && (D.selectedDates = D.selectedDates.filter((function(e) {
                            return ge(e)
                        }
                        )),
                        D.selectedDates.length || "min" !== e || N(n),
                        Je()),
                        D.daysContainer && (Ee(),
                        void 0 !== n ? D.currentYearElement[e] = n.getFullYear().toString() : D.currentYearElement.removeAttribute(e),
                        D.currentYearElement.disabled = !!a && void 0 !== n && a.getFullYear() === n.getFullYear())
                    }
                }
                function Ce() {
                    var a = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"]
                      , i = e({}, h, JSON.parse(JSON.stringify(g.dataset || {})))
                      , o = {};
                    D.config.parseDate = i.parseDate,
                    D.config.formatDate = i.formatDate,
                    Object.defineProperty(D.config, "enable", {
                        get: function() {
                            return D.config._enable
                        },
                        set: function(e) {
                            D.config._enable = Pe(e)
                        }
                    }),
                    Object.defineProperty(D.config, "disable", {
                        get: function() {
                            return D.config._disable
                        },
                        set: function(e) {
                            D.config._disable = Pe(e)
                        }
                    });
                    var r = "time" === i.mode;
                    if (!i.dateFormat && (i.enableTime || r)) {
                        var c = k.defaultConfig.dateFormat || n.dateFormat;
                        o.dateFormat = i.noCalendar || r ? "H:i" + (i.enableSeconds ? ":S" : "") : c + " H:i" + (i.enableSeconds ? ":S" : "")
                    }
                    if (i.altInput && (i.enableTime || r) && !i.altFormat) {
                        var s = k.defaultConfig.altFormat || n.altFormat;
                        o.altFormat = i.noCalendar || r ? "h:i" + (i.enableSeconds ? ":S K" : " K") : s + " h:i" + (i.enableSeconds ? ":S" : "") + " K"
                    }
                    i.altInputClass || (D.config.altInputClass = D.input.className + " " + D.config.altInputClass),
                    Object.defineProperty(D.config, "minDate", {
                        get: function() {
                            return D.config._minDate
                        },
                        set: ye("min")
                    }),
                    Object.defineProperty(D.config, "maxDate", {
                        get: function() {
                            return D.config._maxDate
                        },
                        set: ye("max")
                    });
                    var d = function(e) {
                        return function(t) {
                            D.config["min" === e ? "_minTime" : "_maxTime"] = D.parseDate(t, "H:i:S")
                        }
                    };
                    Object.defineProperty(D.config, "minTime", {
                        get: function() {
                            return D.config._minTime
                        },
                        set: d("min")
                    }),
                    Object.defineProperty(D.config, "maxTime", {
                        get: function() {
                            return D.config._maxTime
                        },
                        set: d("max")
                    }),
                    "time" === i.mode && (D.config.noCalendar = !0,
                    D.config.enableTime = !0),
                    Object.assign(D.config, o, i);
                    for (var u = 0; u < a.length; u++)
                        D.config[a[u]] = !0 === D.config[a[u]] || "true" === D.config[a[u]];
                    t.filter((function(e) {
                        return void 0 !== D.config[e]
                    }
                    )).forEach((function(e) {
                        D.config[e] = l(D.config[e] || []).map(I)
                    }
                    )),
                    D.isMobile = !D.config.disableMobile && !D.config.inline && "single" === D.config.mode && !D.config.disable.length && !D.config.enable.length && !D.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    for (u = 0; u < D.config.plugins.length; u++) {
                        var f = D.config.plugins[u](D) || {};
                        for (var m in f)
                            t.indexOf(m) > -1 ? D.config[m] = l(f[m]).map(I).concat(D.config[m]) : "undefined" === typeof i[m] && (D.config[m] = f[m])
                    }
                    je("onParseConfig")
                }
                function Me() {
                    "object" !== typeof D.config.locale && "undefined" === typeof k.l10ns[D.config.locale] && D.config.errorHandler(new Error("flatpickr: invalid locale " + D.config.locale)),
                    D.l10n = e({}, k.l10ns["default"], "object" === typeof D.config.locale ? D.config.locale : "default" !== D.config.locale ? k.l10ns[D.config.locale] : void 0),
                    v.K = "(" + D.l10n.amPM[0] + "|" + D.l10n.amPM[1] + "|" + D.l10n.amPM[0].toLowerCase() + "|" + D.l10n.amPM[1].toLowerCase() + ")";
                    var t = e({}, h, JSON.parse(JSON.stringify(g.dataset || {})));
                    void 0 === t.time_24hr && void 0 === k.defaultConfig.time_24hr && (D.config.time_24hr = D.l10n.time_24hr),
                    D.formatDate = w(D),
                    D.parseDate = b({
                        config: D.config,
                        l10n: D.l10n
                    })
                }
                function xe(e) {
                    if (void 0 !== D.calendarContainer) {
                        je("onPreCalendarPosition");
                        var t = e || D._positionElement
                          , n = Array.prototype.reduce.call(D.calendarContainer.children, (function(e, t) {
                            return e + t.offsetHeight
                        }
                        ), 0)
                          , a = D.calendarContainer.offsetWidth
                          , i = D.config.position.split(" ")
                          , o = i[0]
                          , r = i.length > 1 ? i[1] : null
                          , l = t.getBoundingClientRect()
                          , s = window.innerHeight - l.bottom
                          , d = "above" === o || "below" !== o && s < n && l.top > n
                          , u = window.pageYOffset + l.top + (d ? -n - 2 : t.offsetHeight + 2);
                        if (c(D.calendarContainer, "arrowTop", !d),
                        c(D.calendarContainer, "arrowBottom", d),
                        !D.config.inline) {
                            var f = window.pageXOffset + l.left - (null != r && "center" === r ? (a - l.width) / 2 : 0)
                              , m = window.document.body.offsetWidth - (window.pageXOffset + l.right)
                              , g = f + a > window.document.body.offsetWidth
                              , p = m + a > window.document.body.offsetWidth;
                            if (c(D.calendarContainer, "rightMost", g),
                            !D.config.static)
                                if (D.calendarContainer.style.top = u + "px",
                                g)
                                    if (p) {
                                        var h = document.styleSheets[0];
                                        if (void 0 === h)
                                            return;
                                        var v = window.document.body.offsetWidth
                                          , w = Math.max(0, v / 2 - a / 2)
                                          , b = ".flatpickr-calendar.centerMost:before"
                                          , y = ".flatpickr-calendar.centerMost:after"
                                          , C = h.cssRules.length
                                          , M = "{left:" + l.left + "px;right:auto;}";
                                        c(D.calendarContainer, "rightMost", !1),
                                        c(D.calendarContainer, "centerMost", !0),
                                        h.insertRule(b + "," + y + M, C),
                                        D.calendarContainer.style.left = w + "px",
                                        D.calendarContainer.style.right = "auto"
                                    } else
                                        D.calendarContainer.style.left = "auto",
                                        D.calendarContainer.style.right = m + "px";
                                else
                                    D.calendarContainer.style.left = f + "px",
                                    D.calendarContainer.style.right = "auto"
                        }
                    }
                }
                function Ee() {
                    D.config.noCalendar || D.isMobile || (Re(),
                    Q())
                }
                function Te() {
                    D._input.focus(),
                    -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(D.close, 0) : D.close()
                }
                function ke(e) {
                    e.preventDefault(),
                    e.stopPropagation();
                    var t = function(e) {
                        return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed")
                    }
                      , n = u(e.target, t);
                    if (void 0 !== n) {
                        var a = n
                          , i = D.latestSelectedDateObj = new Date(a.dateObj.getTime())
                          , o = (i.getMonth() < D.currentMonth || i.getMonth() > D.currentMonth + D.config.showMonths - 1) && "range" !== D.config.mode;
                        if (D.selectedDateElem = a,
                        "single" === D.config.mode)
                            D.selectedDates = [i];
                        else if ("multiple" === D.config.mode) {
                            var r = Le(i);
                            r ? D.selectedDates.splice(parseInt(r), 1) : D.selectedDates.push(i)
                        } else
                            "range" === D.config.mode && (2 === D.selectedDates.length && D.clear(!1, !1),
                            D.latestSelectedDateObj = i,
                            D.selectedDates.push(i),
                            0 !== y(i, D.selectedDates[0], !0) && D.selectedDates.sort((function(e, t) {
                                return e.getTime() - t.getTime()
                            }
                            )));
                        if (A(),
                        o) {
                            var l = D.currentYear !== i.getFullYear();
                            D.currentYear = i.getFullYear(),
                            D.currentMonth = i.getMonth(),
                            l && (je("onYearChange"),
                            X()),
                            je("onMonthChange")
                        }
                        if (Re(),
                        Q(),
                        Je(),
                        D.config.enableTime && setTimeout((function() {
                            return D.showTimeInput = !0
                        }
                        ), 50),
                        o || "range" === D.config.mode || 1 !== D.config.showMonths ? void 0 !== D.selectedDateElem && void 0 === D.hourElement && D.selectedDateElem && D.selectedDateElem.focus() : q(a),
                        void 0 !== D.hourElement && void 0 !== D.hourElement && D.hourElement.focus(),
                        D.config.closeOnSelect) {
                            var c = "single" === D.config.mode && !D.config.enableTime
                              , s = "range" === D.config.mode && 2 === D.selectedDates.length && !D.config.enableTime;
                            (c || s) && Te()
                        }
                        W()
                    }
                }
                D.parseDate = b({
                    config: D.config,
                    l10n: D.l10n
                }),
                D._handlers = [],
                D.pluginElements = [],
                D.loadedPlugins = [],
                D._bind = H,
                D._setHoursFromDate = N,
                D._positionCalendar = xe,
                D.changeMonth = le,
                D.changeYear = me,
                D.clear = ce,
                D.close = se,
                D._createElement = s,
                D.destroy = de,
                D.isEnabled = ge,
                D.jumpToDate = B,
                D.open = be,
                D.redraw = Ee,
                D.set = Oe,
                D.setDate = _e,
                D.toggle = Ye;
                var Ie = {
                    locale: [Me, oe],
                    showMonths: [te, O, ie],
                    minDate: [B],
                    maxDate: [B]
                };
                function Oe(e, n) {
                    if (null !== e && "object" === typeof e)
                        for (var a in Object.assign(D.config, e),
                        e)
                            void 0 !== Ie[a] && Ie[a].forEach((function(e) {
                                return e()
                            }
                            ));
                    else
                        D.config[e] = n,
                        void 0 !== Ie[e] ? Ie[e].forEach((function(e) {
                            return e()
                        }
                        )) : t.indexOf(e) > -1 && (D.config[e] = l(n));
                    D.redraw(),
                    Je(!1)
                }
                function Se(e, t) {
                    var n = [];
                    if (e instanceof Array)
                        n = e.map((function(e) {
                            return D.parseDate(e, t)
                        }
                        ));
                    else if (e instanceof Date || "number" === typeof e)
                        n = [D.parseDate(e, t)];
                    else if ("string" === typeof e)
                        switch (D.config.mode) {
                        case "single":
                        case "time":
                            n = [D.parseDate(e, t)];
                            break;
                        case "multiple":
                            n = e.split(D.config.conjunction).map((function(e) {
                                return D.parseDate(e, t)
                            }
                            ));
                            break;
                        case "range":
                            n = e.split(D.l10n.rangeSeparator).map((function(e) {
                                return D.parseDate(e, t)
                            }
                            ));
                            break;
                        default:
                            break
                        }
                    else
                        D.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
                    D.selectedDates = n.filter((function(e) {
                        return e instanceof Date && ge(e, !1)
                    }
                    )),
                    "range" === D.config.mode && D.selectedDates.sort((function(e, t) {
                        return e.getTime() - t.getTime()
                    }
                    ))
                }
                function _e(e, t, n) {
                    if (void 0 === t && (t = !1),
                    void 0 === n && (n = D.config.dateFormat),
                    0 !== e && !e || e instanceof Array && 0 === e.length)
                        return D.clear(t);
                    Se(e, n),
                    D.showTimeInput = D.selectedDates.length > 0,
                    D.latestSelectedDateObj = D.selectedDates[D.selectedDates.length - 1],
                    D.redraw(),
                    B(),
                    N(),
                    0 === D.selectedDates.length && D.clear(!1),
                    Je(t),
                    t && je("onChange")
                }
                function Pe(e) {
                    return e.slice().map((function(e) {
                        return "string" === typeof e || "number" === typeof e || e instanceof Date ? D.parseDate(e, void 0, !0) : e && "object" === typeof e && e.from && e.to ? {
                            from: D.parseDate(e.from, void 0),
                            to: D.parseDate(e.to, void 0)
                        } : e
                    }
                    )).filter((function(e) {
                        return e
                    }
                    ))
                }
                function Ae() {
                    D.selectedDates = [],
                    D.now = D.parseDate(D.config.now) || new Date;
                    var e = D.config.defaultDate || ("INPUT" !== D.input.nodeName && "TEXTAREA" !== D.input.nodeName || !D.input.placeholder || D.input.value !== D.input.placeholder ? D.input.value : null);
                    e && Se(e, D.config.dateFormat),
                    D._initialDate = D.selectedDates.length > 0 ? D.selectedDates[0] : D.config.minDate && D.config.minDate.getTime() > D.now.getTime() ? D.config.minDate : D.config.maxDate && D.config.maxDate.getTime() < D.now.getTime() ? D.config.maxDate : D.now,
                    D.currentYear = D._initialDate.getFullYear(),
                    D.currentMonth = D._initialDate.getMonth(),
                    D.selectedDates.length > 0 && (D.latestSelectedDateObj = D.selectedDates[0]),
                    void 0 !== D.config.minTime && (D.config.minTime = D.parseDate(D.config.minTime, "H:i")),
                    void 0 !== D.config.maxTime && (D.config.maxTime = D.parseDate(D.config.maxTime, "H:i")),
                    D.minDateHasTime = !!D.config.minDate && (D.config.minDate.getHours() > 0 || D.config.minDate.getMinutes() > 0 || D.config.minDate.getSeconds() > 0),
                    D.maxDateHasTime = !!D.config.maxDate && (D.config.maxDate.getHours() > 0 || D.config.maxDate.getMinutes() > 0 || D.config.maxDate.getSeconds() > 0),
                    Object.defineProperty(D, "showTimeInput", {
                        get: function() {
                            return D._showTimeInput
                        },
                        set: function(e) {
                            D._showTimeInput = e,
                            D.calendarContainer && c(D.calendarContainer, "showTimeInput", e),
                            D.isOpen && xe()
                        }
                    })
                }
                function Ne() {
                    D.input = D.config.wrap ? g.querySelector("[data-input]") : g,
                    D.input ? (D.input._type = D.input.type,
                    D.input.type = "text",
                    D.input.classList.add("flatpickr-input"),
                    D._input = D.input,
                    D.config.altInput && (D.altInput = s(D.input.nodeName, D.config.altInputClass),
                    D._input = D.altInput,
                    D.altInput.placeholder = D.input.placeholder,
                    D.altInput.disabled = D.input.disabled,
                    D.altInput.required = D.input.required,
                    D.altInput.tabIndex = D.input.tabIndex,
                    D.altInput.type = "text",
                    D.input.setAttribute("type", "hidden"),
                    !D.config.static && D.input.parentNode && D.input.parentNode.insertBefore(D.altInput, D.input.nextSibling)),
                    D.config.allowInput || D._input.setAttribute("readonly", "readonly"),
                    D._positionElement = D.config.positionElement || D._input) : D.config.errorHandler(new Error("Invalid input element specified"))
                }
                function Fe() {
                    var e = D.config.enableTime ? D.config.noCalendar ? "time" : "datetime-local" : "date";
                    D.mobileInput = s("input", D.input.className + " flatpickr-mobile"),
                    D.mobileInput.step = D.input.getAttribute("step") || "any",
                    D.mobileInput.tabIndex = 1,
                    D.mobileInput.type = e,
                    D.mobileInput.disabled = D.input.disabled,
                    D.mobileInput.required = D.input.required,
                    D.mobileInput.placeholder = D.input.placeholder,
                    D.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S",
                    D.selectedDates.length > 0 && (D.mobileInput.defaultValue = D.mobileInput.value = D.formatDate(D.selectedDates[0], D.mobileFormatStr)),
                    D.config.minDate && (D.mobileInput.min = D.formatDate(D.config.minDate, "Y-m-d")),
                    D.config.maxDate && (D.mobileInput.max = D.formatDate(D.config.maxDate, "Y-m-d")),
                    D.input.type = "hidden",
                    void 0 !== D.altInput && (D.altInput.type = "hidden");
                    try {
                        D.input.parentNode && D.input.parentNode.insertBefore(D.mobileInput, D.input.nextSibling)
                    } catch (t) {}
                    H(D.mobileInput, "change", (function(e) {
                        D.setDate(e.target.value, !1, D.mobileFormatStr),
                        je("onChange"),
                        je("onClose")
                    }
                    ))
                }
                function Ye(e) {
                    if (!0 === D.isOpen)
                        return D.close();
                    D.open(e)
                }
                function je(e, t) {
                    if (void 0 !== D.config) {
                        var n = D.config[e];
                        if (void 0 !== n && n.length > 0)
                            for (var a = 0; n[a] && a < n.length; a++)
                                n[a](D.selectedDates, D.input.value, D, t);
                        "onChange" === e && (D.input.dispatchEvent(He("change")),
                        D.input.dispatchEvent(He("input")))
                    }
                }
                function He(e) {
                    var t = document.createEvent("Event");
                    return t.initEvent(e, !0, !0),
                    t
                }
                function Le(e) {
                    for (var t = 0; t < D.selectedDates.length; t++)
                        if (0 === y(D.selectedDates[t], e))
                            return "" + t;
                    return !1
                }
                function We(e) {
                    return !("range" !== D.config.mode || D.selectedDates.length < 2) && (y(e, D.selectedDates[0]) >= 0 && y(e, D.selectedDates[1]) <= 0)
                }
                function Re() {
                    D.config.noCalendar || D.isMobile || !D.monthNav || (D.yearElements.forEach((function(e, t) {
                        var n = new Date(D.currentYear,D.currentMonth,1);
                        n.setMonth(D.currentMonth + t),
                        D.config.showMonths > 1 || "static" === D.config.monthSelectorType ? D.monthElements[t].textContent = p(n.getMonth(), D.config.shorthandCurrentMonth, D.l10n) + " " : D.monthsDropdownContainer.value = n.getMonth().toString(),
                        e.value = n.getFullYear().toString()
                    }
                    )),
                    D._hidePrevMonthArrow = void 0 !== D.config.minDate && (D.currentYear === D.config.minDate.getFullYear() ? D.currentMonth <= D.config.minDate.getMonth() : D.currentYear < D.config.minDate.getFullYear()),
                    D._hideNextMonthArrow = void 0 !== D.config.maxDate && (D.currentYear === D.config.maxDate.getFullYear() ? D.currentMonth + 1 > D.config.maxDate.getMonth() : D.currentYear > D.config.maxDate.getFullYear()))
                }
                function Be(e) {
                    return D.selectedDates.map((function(t) {
                        return D.formatDate(t, e)
                    }
                    )).filter((function(e, t, n) {
                        return "range" !== D.config.mode || D.config.enableTime || n.indexOf(e) === t
                    }
                    )).join("range" !== D.config.mode ? D.config.conjunction : D.l10n.rangeSeparator)
                }
                function Je(e) {
                    void 0 === e && (e = !0),
                    void 0 !== D.mobileInput && D.mobileFormatStr && (D.mobileInput.value = void 0 !== D.latestSelectedDateObj ? D.formatDate(D.latestSelectedDateObj, D.mobileFormatStr) : ""),
                    D.input.value = Be(D.config.dateFormat),
                    void 0 !== D.altInput && (D.altInput.value = Be(D.config.altFormat)),
                    !1 !== e && je("onValueUpdate")
                }
                function $e(e) {
                    var t = D.prevMonthNav.contains(e.target)
                      , n = D.nextMonthNav.contains(e.target);
                    t || n ? le(t ? -1 : 1) : D.yearElements.indexOf(e.target) >= 0 ? e.target.select() : e.target.classList.contains("arrowUp") ? D.changeYear(D.currentYear + 1) : e.target.classList.contains("arrowDown") && D.changeYear(D.currentYear - 1)
                }
                function Ke(e) {
                    e.preventDefault();
                    var t = "keydown" === e.type
                      , n = e.target;
                    void 0 !== D.amPM && e.target === D.amPM && (D.amPM.textContent = D.l10n.amPM[o(D.amPM.textContent === D.l10n.amPM[0])]);
                    var a = parseFloat(n.getAttribute("min"))
                      , r = parseFloat(n.getAttribute("max"))
                      , l = parseFloat(n.getAttribute("step"))
                      , c = parseInt(n.value, 10)
                      , s = e.delta || (t ? 38 === e.which ? 1 : -1 : 0)
                      , d = c + l * s;
                    if ("undefined" !== typeof n.value && 2 === n.value.length) {
                        var u = n === D.hourElement
                          , f = n === D.minuteElement;
                        d < a ? (d = r + d + o(!u) + (o(u) && o(!D.amPM)),
                        f && $(void 0, -1, D.hourElement)) : d > r && (d = n === D.hourElement ? d - r - o(!D.amPM) : a,
                        f && $(void 0, 1, D.hourElement)),
                        D.amPM && u && (1 === l ? d + c === 23 : Math.abs(d - c) > l) && (D.amPM.textContent = D.l10n.amPM[o(D.amPM.textContent === D.l10n.amPM[0])]),
                        n.value = i(d)
                    }
                }
                return T(),
                D
            }
            function T(e, t) {
                for (var n = Array.prototype.slice.call(e).filter((function(e) {
                    return e instanceof HTMLElement
                }
                )), a = [], i = 0; i < n.length; i++) {
                    var o = n[i];
                    try {
                        if (null !== o.getAttribute("data-fp-omit"))
                            continue;
                        void 0 !== o._flatpickr && (o._flatpickr.destroy(),
                        o._flatpickr = void 0),
                        o._flatpickr = E(o, t || {}),
                        a.push(o._flatpickr)
                    } catch (r) {
                        console.error(r)
                    }
                }
                return 1 === a.length ? a[0] : a
            }
            "undefined" !== typeof HTMLElement && "undefined" !== typeof HTMLCollection && "undefined" !== typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
                return T(this, e)
            }
            ,
            HTMLElement.prototype.flatpickr = function(e) {
                return T([this], e)
            }
            );
            var k = function(e, t) {
                return "string" === typeof e ? T(window.document.querySelectorAll(e), t) : e instanceof Node ? T([e], t) : T(e, t)
            };
            return k.defaultConfig = {},
            k.l10ns = {
                en: e({}, a),
                default: e({}, a)
            },
            k.localize = function(t) {
                k.l10ns["default"] = e({}, k.l10ns["default"], t)
            }
            ,
            k.setDefaults = function(t) {
                k.defaultConfig = e({}, k.defaultConfig, t)
            }
            ,
            k.parseDate = b({}),
            k.formatDate = w({}),
            k.compareDates = y,
            "undefined" !== typeof jQuery && "undefined" !== typeof jQuery.fn && (jQuery.fn.flatpickr = function(e) {
                return T(this, e)
            }
            ),
            Date.prototype.fp_incr = function(e) {
                return new Date(this.getFullYear(),this.getMonth(),this.getDate() + ("string" === typeof e ? parseInt(e, 10) : e))
            }
            ,
            "undefined" !== typeof window && (window.flatpickr = k),
            k
        }
        ))
    }
}]);

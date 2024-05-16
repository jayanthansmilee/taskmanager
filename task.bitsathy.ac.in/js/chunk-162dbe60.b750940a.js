(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-162dbe60"], {
    2613: function(t, n, e) {
        t.exports = e.p + "img/photo-long-3.f4e38da9.jpg"
    },
    "35a0": function(t, n, e) {},
    3763: function(t, n, e) {
        "use strict";
        var i = e("ea49")
          , o = e.n(i);
        o.a
    },
    "4ab7": function(t, n, e) {
        t.exports = e.p + "img/photo-wide-4.2e142cde.jpg"
    },
    "5b5f": function(t, n, e) {
        "use strict";
        var i = e("35a0")
          , o = e.n(i);
        o.a
    },
    "7c15": function(t, n, e) {
        "use strict";
        e.d(n, "a", (function() {
            return a
        }
        )),
        e.d(n, "b", (function() {
            return s
        }
        ));
        e("d3b7"),
        e("25f0");
        var i = e("f550")
          , o = e("231d")
          , r = Object(o["e"])();
        function a(t, n, e) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "json"
              , a = {
                RequestId: Math.floor(1e10 * Math.random() + 1).toString(),
                Data: e
            }
              , s = document.getElementById("globalLoader");
            s && (s.style.display = "block");
            var l = JSON.stringify(a);
            return Object(i["a"])({
                url: r + t,
                method: n,
                data: l,
                responseType: o,
                headers: {
                    "content-type": "application/json"
                }
            })
        }
        function s(t, n, e) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "json"
              , r = {
                RequestId: Math.floor(1e10 * Math.random() + 1).toString(),
                Data: e
            }
              , a = JSON.stringify(r);
            return Object(i["a"])({
                url: t,
                method: n,
                data: a,
                responseType: o,
                headers: {
                    "content-type": "application/json"
                }
            })
        }
    },
    "9d64": function(t, n, e) {
        t.exports = e.p + "img/logo.48f289a0.png"
    },
    ea49: function(t, n, e) {},
    f6ee: function(t, n, e) {
        "use strict";
        e.r(n);
        var i, o, r = function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return e("div", {
                staticClass: "sign-in-bg"
            }, [e("div", {
                staticClass: "row ml-0 mr-0 pl-3 pr-3",
                staticStyle: {
                    height: "inherit"
                }
            }, [t._m(0), e("div", {
                staticClass: "col mr-md-5 pl-md-5 align-self-center d-flex flex-column align-items-center"
            }, [t._m(1), e("img", {
                staticClass: "-intro-anim -intro-x show-on-mobile-only",
                staticStyle: {
                    height: "18em",
                    "object-fit": "contain"
                },
                attrs: {
                    alt: "BITTask",
                    src: "login-hero3.webp"
                }
            }), e("div", {
                staticClass: "col-lg-6 pl-0 pr-0 intro-anim intro-x"
            }, [e("GoogleLogin", {
                attrs: {
                    params: t.params,
                    renderParams: t.renderParams,
                    onSuccess: t.onSuccess,
                    onFailure: t.onFailure
                }
            })], 1), t._m(2), e("b-form", {
                staticClass: "col-lg-6 pl-0 pr-0 intro-anim intro-x mt-2",
                on: {
                    submit: function(n) {
                        return n.preventDefault(),
                        t.formSubmit(n)
                    }
                }
            }, [e("b-form-group", {
                staticClass: "text-12 mb-3 intro-anim intro-x"
            }, [e("label", {
                staticClass: "font-weight-bold login-label"
            }, [t._v("Username")]), e("b-form-input", {
                attrs: {
                    size: "lg",
                    type: "text",
                    email: "",
                    required: "",
                    placeholder: "User Name"
                },
                model: {
                    value: t.email,
                    callback: function(n) {
                        t.email = n
                    },
                    expression: "email"
                }
            })], 1), e("b-form-group", {
                staticClass: "text-12 intro-anim intro-x"
            }, [e("label", {
                staticClass: "font-weight-bold login-label"
            }, [t._v("Password")]), e("b-form-input", {
                attrs: {
                    size: "lg",
                    type: "password",
                    placeholder: "Password"
                },
                model: {
                    value: t.password,
                    callback: function(n) {
                        t.password = n
                    },
                    expression: "password"
                }
            })], 1), e("div", {
                staticClass: "mt-2 float-right intro-anim intro-x"
            }, [e("div", [e("b-button", {
                attrs: {
                    size: "lg",
                    type: "submit",
                    tag: "button",
                    variant: "primary",
                    disabled: t.loading
                }
            }, [t._v("Sign in")])], 1), t.loading ? t._m(3) : t._e()])], 1)], 1)])])
        }, a = [function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return e("div", {
                staticClass: "col-6 pl-80 d-none d-md-block"
            }, [e("div", {
                staticClass: "pt-5",
                staticStyle: {
                    height: "100vh"
                }
            }, [e("div", {
                staticClass: "sign-in-left-align-middle -intro-anim -intro-x"
            }, [e("div", {}, [e("img", {
                staticClass: "-intro-anim -intro-x",
                staticStyle: {
                    height: "17em"
                },
                attrs: {
                    alt: "BITTask",
                    src: "login-hero.svg"
                }
            }), e("div", {
                staticClass: "mt-10 text-white"
            }, [e("span", {
                staticClass: "font-weight-600 -intro-anim -intro-x",
                staticStyle: {
                    "font-size": "38px"
                }
            }, [t._v("Welcome!")]), e("br")])])])])])
        }
        , function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return e("div", {
                staticClass: "col-lg-6 pl-0 pr-0 intro-anim intro-x text-center"
            }, [e("label", {
                staticClass: "login-signIn"
            }, [t._v("Sign in to your account")])])
        }
        , function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return e("div", {
                staticClass: "col-lg-6 pl-0 pr-0"
            }, [e("hr", {
                staticClass: "divider"
            })])
        }
        , function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return e("div", {
                staticClass: "typo__p"
            }, [e("div", {
                staticClass: "spinner sm spinner-primary mt-3"
            })])
        }
        ], s = e("5530"), l = e("2f62"), c = function() {
            var t = this
              , n = t.$createElement
              , e = t._self._c || n;
            return t.renderParams && !t.logoutButton ? e("div", {
                attrs: {
                    id: t.id
                },
                on: {
                    click: t.handleClick
                }
            }) : e("button", {
                attrs: {
                    id: t.id
                },
                on: {
                    click: t.handleClick
                }
            }, [t._t("default")], 2)
        }, u = [], d = (e("d3b7"),
        e("3ca3"),
        e("ddb0"),
        function() {
            return new Promise((function(t, n) {
                var e = document.getElementById("auth2_script_id");
                if (!e) {
                    var i = document.createElement("script");
                    i.setAttribute("src", "https://apis.google.com/js/platform.js?onload=onGapiLoad"),
                    i.setAttribute("async", !0),
                    i.setAttribute("defer", "defer"),
                    i.setAttribute("id", "auth2_script_id"),
                    document.head.appendChild(i)
                }
                t()
            }
            ))
        }
        ), m = function(t) {
            return new Promise((function(n, e) {
                window.onGapiLoad = function() {
                    window.gapi.load("auth2", (function() {
                        try {
                            i = window.gapi.auth2.init(Object.assign({}, t))
                        } catch (o) {
                            e({
                                err: "client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?"
                            })
                        }
                        n(i)
                    }
                    ))
                }
            }
            ))
        }, g = function(t) {
            return i ? Promise.resolve(i) : (o || (o = m(t)),
            o)
        }, f = function(t) {
            return Promise.all([g(t), d()]).then((function(t) {
                return t[0]
            }
            ))
        }, p = function(t, n) {
            if (t)
                return t[n]();
            var e = {
                err: "Script not loaded correctly, did you added the plugin or the client_id to the component?"
            };
            return Promise.reject(e)
        }, h = function() {
            return p(i, "signIn")
        }, b = function() {
            return p(i, "signOut")
        }, v = function() {
            return p(i.isSignedIn, "get")
        }, _ = function() {
            return p(i.currentUser, "get")
        }, y = function() {
            return p(i, "grantOfflineAccess")
        }, I = {
            load: f,
            signIn: h,
            signOut: b,
            isSignedIn: v,
            currentUser: _,
            grantOfflineAccess: y
        }, w = 0, S = {
            name: "GoogleLogin",
            props: {
                params: {
                    type: Object,
                    required: !0
                },
                onCurrentUser: {
                    type: Function,
                    default: function() {}
                },
                onSuccess: {
                    type: Function,
                    default: function() {}
                },
                onFailure: {
                    type: Function,
                    default: function() {}
                },
                logoutButton: {
                    type: Boolean,
                    default: !1
                },
                renderParams: {
                    type: Object,
                    required: !1
                }
            },
            beforeCreate: function() {
                this.id = "google-signin-btn-".concat(w++)
            },
            methods: {
                handleClick: function() {
                    var t = this
                      , n = this.logoutButton ? "signOut" : "signIn";
                    I[n]().then((function(n) {
                        return t.onSuccess(n)
                    }
                    )).catch((function(n) {
                        return t.onFailure(n)
                    }
                    ))
                }
            },
            mounted: function() {
                var t = this;
                I.load(this.params).then((function() {
                    t.renderParams && !1 === t.logoutButton && window.gapi.signin2.render(t.id, t.renderParams),
                    I.isSignedIn() && t.onCurrentUser(I.currentUser())
                }
                )).catch((function(t) {
                    console.log(t)
                }
                ))
            }
        }, C = S, O = e("2877"), x = Object(O["a"])(C, c, u, !1, null, null, null), j = x.exports, k = (e("5f87"),
        e("7c15"),
        {
            components: {
                GoogleLogin: j
            },
            metaInfo: {
                title: "SignIn"
            },
            data: function() {
                return {
                    email: "",
                    password: "",
                    userId: "",
                    bgImage: e("4ab7"),
                    logo: e("9d64"),
                    signInImage: e("2613"),
                    params: {
                        client_id: this.$gClientId
                    },
                    renderParams: {
                        height: 40,
                        backgroundColor: "#663399",
                        color: "#ffffff",
                        longtitle: !0
                    },
                    loggingIn: !1
                }
            },
            computed: Object(s["a"])({
                validation: function() {
                    return this.userId.length > 4 && this.userId.length < 13
                }
            }, Object(l["c"])(["loggedInUser", "loading", "error"])),
            mounted: function() {
                var t = localStorage.getItem(btoa("Atkn"));
                t && this.$router.push({
                    name: "home"
                })
            },
            methods: Object(s["a"])({}, Object(l["b"])(["login", "GoogleSignIn"]), {
                formSubmit: function() {
                    var t = {
                        imgUrl: "",
                        name: "",
                        email: ""
                    };
                    this.$store.commit("SET_GOOGLE_LOGIN_DETAILS", t),
                    this.login({
                        email: this.email,
                        password: this.password
                    }).catch((function(t) {
                        t && console.log("An error has occurred")
                    }
                    ))
                },
                makeToast: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , n = arguments.length > 1 ? arguments[1] : void 0
                      , e = arguments.length > 2 ? arguments[2] : void 0;
                    this.$bvToast.toast(e, {
                        title: " ".concat(n || "default"),
                        variant: t,
                        solid: !0
                    })
                },
                onSuccess: function(t) {
                    var n = t.getBasicProfile()
                      , e = {
                        imgUrl: n.getImageUrl(),
                        name: n.getName(),
                        email: n.getEmail()
                    };
                    this.$store.commit("SET_GOOGLE_LOGIN_DETAILS", e),
                    this.GoogleSignIn(t.getAuthResponse().id_token).catch((function(t) {
                        t && console.log("An error has occurred")
                    }
                    ))
                },
                onFailure: function(t) {
                    var n = {
                        imgUrl: "",
                        name: "",
                        email: ""
                    };
                    this.$store.commit("SET_GOOGLE_LOGIN_DETAILS", n)
                }
            }),
            watch: {
                loggedInUser: function(t) {
                    var n = this;
                    t && (this.makeToast("success", "Successfully Logged In"),
                    setTimeout((function() {
                        n.$router.push("/")
                    }
                    ), 500))
                },
                error: function(t) {
                    null != t && this.makeToast("danger", "ERROR", t)
                }
            }
        }), E = k, T = (e("3763"),
        e("5b5f"),
        Object(O["a"])(E, r, a, !1, null, null, null));
        n["default"] = T.exports
    }
}]);

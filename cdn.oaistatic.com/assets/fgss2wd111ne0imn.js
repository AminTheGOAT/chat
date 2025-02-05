var y = {
        log: "log",
        debug: "debug",
        info: "info",
        warn: "warn",
        error: "error"
    },
    A = console,
    j = {};
Object.keys(y).forEach(function(e) {
    j[e] = A[e]
});
var ue = "Datadog Browser SDK:",
    E = {
        debug: j.debug.bind(A, ue),
        log: j.log.bind(A, ue),
        info: j.info.bind(A, ue),
        warn: j.warn.bind(A, ue),
        error: j.error.bind(A, ue)
    },
    tt = "https://docs.datadoghq.com",
    Lt = "".concat(tt, "/real_user_monitoring/browser/troubleshooting"),
    Pe = "More details:";

function At(e, t) {
    return function() {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        try {
            return e.apply(void 0, n)
        } catch (o) {
            E.error(t, o)
        }
    }
}

function Oe(e) {
    return e !== 0 && Math.random() * 100 <= e
}

function Ln(e) {
    return An(e) && e >= 0 && e <= 100
}

function An(e) {
    return typeof e == "number"
}
var ve = 1e3,
    J = 60 * ve,
    kn = 60 * J;

function fe() {
    return new Date().getTime()
}

function D() {
    return fe()
}

function xe() {
    return performance.now()
}

function P() {
    return {
        relative: xe(),
        timeStamp: D()
    }
}

function In() {
    return {
        relative: 0,
        timeStamp: kt()
    }
}

function Nn(e, t) {
    return t - e
}

function Mn(e, t) {
    return e + t
}

function Un(e) {
    return e - kt()
}
var Ge;

function kt() {
    return Ge === void 0 && (Ge = performance.timing.navigationStart), Ge
}
var k = 1024,
    It = 1024 * k,
    Dn = /[^\u0000-\u007F]/;

function nt(e) {
    return Dn.test(e) ? window.TextEncoder !== void 0 ? new TextEncoder().encode(e).length : new Blob([e]).size : e.length
}

function ie(e, t) {
    return e.indexOf(t) !== -1
}

function rt(e) {
    if (Array.from) return Array.from(e);
    var t = [];
    if (e instanceof Set) e.forEach(function(r) {
        return t.push(r)
    });
    else
        for (var n = 0; n < e.length; n++) t.push(e[n]);
    return t
}

function Pn(e, t) {
    for (var n = 0; n < e.length; n += 1) {
        var r = e[n];
        if (t(r, n)) return r
    }
}

function te(e) {
    return Object.keys(e).map(function(t) {
        return e[t]
    })
}

function Bn(e) {
    return Object.keys(e).map(function(t) {
        return [t, e[t]]
    })
}

function ot(e, t) {
    return e.slice(0, t.length) === t
}

function Fn(e, t) {
    return e.slice(-t.length) === t
}

function O(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.forEach(function(r) {
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
    }), e
}

function Gn(e) {
    return O({}, e)
}

function Nt(e, t) {
    return Object.keys(e).some(function(n) {
        return e[n] === t
    })
}

function it(e) {
    return Object.keys(e).length === 0
}

function B() {
    if (typeof globalThis == "object") return globalThis;
    Object.defineProperty(Object.prototype, "_dd_temp_", {
        get: function() {
            return this
        },
        configurable: !0
    });
    var e = _dd_temp_;
    return delete Object.prototype._dd_temp_, typeof e != "object" && (typeof self == "object" ? e = self : typeof window == "object" ? e = window : e = {}), e
}

function ne(e, t) {
    var n = B(),
        r;
    return n.Zone && typeof n.Zone.__symbol__ == "function" && (r = e[n.Zone.__symbol__(t)]), r || (r = e[t]), r
}
var jn = function(e, t, n) {
        if (n || arguments.length === 2)
            for (var r = 0, o = t.length, i; r < o; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
        return e.concat(i || Array.prototype.slice.call(t))
    },
    Le, Mt = !1;

function Hn(e) {
    Le = e
}

function zn(e) {
    Mt = e
}

function qn(e, t, n) {
    var r = n.value;
    n.value = function() {
        for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
        var a = Le ? h(r) : r;
        return a.apply(this, o)
    }
}

function h(e) {
    return function() {
        return le(e, this, arguments)
    }
}

function le(e, t, n) {
    try {
        return e.apply(t, n)
    } catch (r) {
        if (Xe(r), Le) try {
            Le(r)
        } catch (o) {
            Xe(o)
        }
    }
}

function Xe() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    Mt && E.error.apply(E, jn(["[MONITOR]"], e, !1))
}

function pe(e, t) {
    return ne(B(), "setTimeout")(h(e), t)
}

function Ut(e) {
    ne(B(), "clearTimeout")(e)
}

function at(e, t) {
    return ne(B(), "setInterval")(h(e), t)
}

function Dt(e) {
    ne(B(), "clearInterval")(e)
}
var _ = function() {
    function e(t) {
        this.onFirstSubscribe = t, this.observers = []
    }
    return e.prototype.subscribe = function(t) {
        var n = this;
        return this.observers.push(t), this.observers.length === 1 && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0), {
            unsubscribe: function() {
                n.observers = n.observers.filter(function(r) {
                    return t !== r
                }), !n.observers.length && n.onLastUnsubscribe && n.onLastUnsubscribe()
            }
        }
    }, e.prototype.notify = function(t) {
        this.observers.forEach(function(n) {
            return n(t)
        })
    }, e
}();

function Pt() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return new _(function(n) {
        var r = e.map(function(o) {
            return o.subscribe(function(i) {
                return n.notify(i)
            })
        });
        return function() {
            return r.forEach(function(o) {
                return o.unsubscribe()
            })
        }
    })
}

function Bt(e, t, n) {
    var r = !1,
        o, i;
    return {
        throttled: function() {
            for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
            if (r) {
                o = a;
                return
            }
            e.apply(void 0, a), r = !0, i = pe(function() {
                o && e.apply(void 0, o), r = !1, o = void 0
            }, t)
        },
        cancel: function() {
            Ut(i), r = !1, o = void 0
        }
    }
}

function U() {}

function W(e) {
    return e ? (parseInt(e, 10) ^ Math.random() * 16 >> parseInt(e, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, W)
}
var Ae = /([\w-]+)\s*=\s*([^;]+)/g;

function Yn(e, t) {
    for (Ae.lastIndex = 0;;) {
        var n = Ae.exec(e);
        if (n) {
            if (n[1] === t) return n[2]
        } else break
    }
}

function Kn(e) {
    var t = new Map;
    for (Ae.lastIndex = 0;;) {
        var n = Ae.exec(e);
        if (n) t.set(n[1], n[2]);
        else break
    }
    return t
}

function Vn(e, t, n) {
    var r = e.charCodeAt(t - 1),
        o = r >= 55296 && r <= 56319,
        i = o ? t + 1 : t;
    return e.length <= i ? e : "".concat(e.slice(0, i)).concat(n)
}

function Jn() {
    return Wn() === 1
}
var be;

function Wn() {
    return be ? ? (be = Xn())
}

function Xn(e) {
    var t;
    e === void 0 && (e = window);
    var n = e.navigator.userAgent;
    return e.chrome || /HeadlessChrome/.test(n) ? 1 : ((t = e.navigator.vendor) === null || t === void 0 ? void 0 : t.indexOf("Apple")) === 0 || /safari/i.test(n) && !/chrome|android/i.test(n) ? 2 : e.document.documentMode ? 0 : 3
}

function ge(e, t, n, r) {
    var o = new Date;
    o.setTime(o.getTime() + n);
    var i = "expires=".concat(o.toUTCString()),
        a = r && r.crossSite ? "none" : "strict",
        s = r && r.domain ? ";domain=".concat(r.domain) : "",
        c = r && r.secure ? ";secure" : "",
        u = r && r.partitioned ? ";partitioned" : "";
    document.cookie = "".concat(e, "=").concat(t, ";").concat(i, ";path=/;samesite=").concat(a).concat(s).concat(c).concat(u)
}

function st(e) {
    return Yn(document.cookie, e)
}
var je;

function q(e) {
    return je || (je = Kn(document.cookie)), je.get(e)
}

function Ft(e, t) {
    ge(e, "", 0, t)
}

function $n(e) {
    if (document.cookie === void 0 || document.cookie === null) return !1;
    try {
        var t = "dd_cookie_test_".concat(W()),
            n = "test";
        ge(t, n, J, e);
        var r = st(t) === n;
        return Ft(t, e), r
    } catch (o) {
        return E.error(o), !1
    }
}
var He;

function Zn() {
    if (He === void 0) {
        for (var e = "dd_site_test_".concat(W()), t = "test", n = window.location.hostname.split("."), r = n.pop(); n.length && !st(e);) r = "".concat(n.pop(), ".").concat(r), ge(e, t, ve, {
            domain: r
        });
        Ft(e, {
            domain: r
        }), He = r
    }
    return He
}
var ae = "_dd_s",
    ut = 4 * kn,
    Gt = 15 * J,
    jt = /^([a-zA-Z]+)=([a-z0-9-]+)$/,
    ct = "&",
    Qn = "1";

function H() {
    return {
        isExpired: Qn
    }
}

function Ce(e) {
    return it(e)
}

function Ht(e) {
    return !Ce(e)
}

function ke(e) {
    return e.isExpired !== void 0 || !er(e)
}

function er(e) {
    return (e.created === void 0 || fe() - Number(e.created) < ut) && (e.expire === void 0 || fe() < Number(e.expire))
}

function zt(e) {
    e.expire = String(fe() + Gt)
}

function ft(e) {
    return Bn(e).map(function(t) {
        var n = t[0],
            r = t[1];
        return "".concat(n, "=").concat(r)
    }).join(ct)
}

function qt(e) {
    var t = {};
    return tr(e) && e.split(ct).forEach(function(n) {
        var r = jt.exec(n);
        if (r !== null) {
            var o = r[1],
                i = r[2];
            t[o] = i
        }
    }), t
}

function tr(e) {
    return !!e && (e.indexOf(ct) !== -1 || jt.test(e))
}
var nr = "_dd",
    rr = "_dd_r",
    or = "_dd_l",
    ir = "rum",
    ar = "logs";

function sr(e) {
    var t = q(ae);
    if (!t) {
        var n = q(nr),
            r = q(rr),
            o = q(or),
            i = {};
        n && (i.id = n), o && /^[01]$/.test(o) && (i[ar] = o), r && /^[012]$/.test(r) && (i[ir] = r), Ht(i) && (zt(i), e.persistSession(i))
    }
}

function ur(e) {
    var t = vr(e);
    return $n(t) ? {
        type: "Cookie",
        cookieOptions: t
    } : void 0
}

function cr(e) {
    var t = {
        isLockEnabled: Jn(),
        persistSession: fr(e),
        retrieveSession: dr,
        expireSession: function() {
            return lr(e)
        }
    };
    return sr(t), t
}

function fr(e) {
    return function(t) {
        ge(ae, ft(t), Gt, e)
    }
}

function lr(e) {
    ge(ae, ft(H()), ut, e)
}

function dr() {
    var e = st(ae);
    return qt(e)
}

function vr(e) {
    var t = {};
    return t.secure = !!e.useSecureSessionCookie || !!e.usePartitionedCrossSiteSessionCookie || !!e.useCrossSiteSessionCookie, t.crossSite = !!e.usePartitionedCrossSiteSessionCookie || !!e.useCrossSiteSessionCookie, t.partitioned = !!e.usePartitionedCrossSiteSessionCookie, e.trackSessionAcrossSubdomains && (t.domain = Zn()), t
}
var pr = "_dd_test_";

function gr() {
    try {
        var e = W(),
            t = "".concat(pr).concat(e);
        localStorage.setItem(t, e);
        var n = localStorage.getItem(t);
        return localStorage.removeItem(t), e === n ? {
            type: "LocalStorage"
        } : void 0
    } catch {
        return
    }
}

function mr() {
    return {
        isLockEnabled: !1,
        persistSession: Yt,
        retrieveSession: br,
        expireSession: hr
    }
}

function Yt(e) {
    localStorage.setItem(ae, ft(e))
}

function br() {
    var e = localStorage.getItem(ae);
    return qt(e)
}

function hr() {
    Yt(H())
}
var Sr = 10,
    yr = 100,
    Kt = [],
    Te;

function z(e, t, n) {
    var r;
    n === void 0 && (n = 0);
    var o = t.isLockEnabled,
        i = t.persistSession,
        a = t.expireSession,
        s = function(d) {
            return i(O({}, d, {
                lock: u
            }))
        },
        c = function() {
            var d = t.retrieveSession(),
                v = d.lock;
            return d.lock && delete d.lock, {
                session: d,
                lock: v
            }
        };
    if (Te || (Te = e), e !== Te) {
        Kt.push(e);
        return
    }
    if (o && n >= yr) {
        bt(t);
        return
    }
    var u, f = c();
    if (o) {
        if (f.lock) {
            he(e, t, n);
            return
        }
        if (u = W(), s(f.session), f = c(), f.lock !== u) {
            he(e, t, n);
            return
        }
    }
    var l = e.process(f.session);
    if (o && (f = c(), f.lock !== u)) {
        he(e, t, n);
        return
    }
    if (l && (ke(l) ? a() : (zt(l), o ? s(l) : i(l))), o && !(l && ke(l))) {
        if (f = c(), f.lock !== u) {
            he(e, t, n);
            return
        }
        i(f.session), l = f.session
    }(r = e.after) === null || r === void 0 || r.call(e, l || f.session), bt(t)
}

function he(e, t, n) {
    pe(function() {
        z(e, t, n + 1)
    }, Sr)
}

function bt(e) {
    Te = void 0;
    var t = Kt.shift();
    t && z(t, e)
}
var ht = ve;

function Er(e) {
    var t = ur(e);
    return !t && e.allowFallbackToLocalStorage && (t = gr()), t
}

function _r(e, t, n) {
    var r = new _,
        o = new _,
        i = new _,
        a = e.type === "Cookie" ? cr(e.cookieOptions) : mr(),
        s = a.expireSession,
        c = at(b, ht),
        u;
    S();
    var f = Bt(function() {
            z({
                process: function(m) {
                    if (!Ce(m)) {
                        var F = p(m);
                        return T(F), F
                    }
                },
                after: function(m) {
                    Ht(m) && !L() && Tn(m), u = m
                }
            }, a)
        }, ht),
        l = f.throttled,
        d = f.cancel;

    function v() {
        z({
            process: function(m) {
                return L() ? p(m) : void 0
            }
        }, a)
    }

    function b() {
        z({
            process: function(m) {
                return ke(m) ? H() : void 0
            },
            after: p
        }, a)
    }

    function p(m) {
        return ke(m) && (m = H()), L() && (Q(m) ? Cn() : (i.notify({
            previousState: u,
            newState: m
        }), u = m)), m
    }

    function S() {
        z({
            process: function(m) {
                if (Ce(m)) return H()
            },
            after: function(m) {
                u = m
            }
        }, a)
    }

    function T(m) {
        if (Ce(m)) return !1;
        var F = n(m[t]),
            Rn = F.trackingType,
            xn = F.isTracked;
        m[t] = Rn, delete m.isExpired, xn && !m.id && (m.id = W(), m.created = String(fe()))
    }

    function L() {
        return u[t] !== void 0
    }

    function Q(m) {
        return u.id !== m.id || u[t] !== m[t]
    }

    function Cn() {
        u = H(), o.notify()
    }

    function Tn(m) {
        u = m, r.notify()
    }

    function wn(m) {
        z({
            process: function(F) {
                return O({}, F, m)
            },
            after: p
        }, a)
    }
    return {
        expandOrRenewSession: l,
        expandSession: v,
        getSession: function() {
            return u
        },
        renewObservable: r,
        expireObservable: o,
        sessionStateUpdateObservable: i,
        restartSession: S,
        expire: function() {
            d(), s(), p(H())
        },
        stop: function() {
            Dt(c)
        },
        updateSessionState: wn
    }
}
var $e = {
    GRANTED: "granted",
    NOT_GRANTED: "not-granted"
};

function Or(e) {
    var t = new _;
    return {
        tryToInit: function(n) {
            e || (e = n)
        },
        update: function(n) {
            e = n, t.notify()
        },
        isGranted: function() {
            return e === $e.GRANTED
        },
        observable: t
    }
}

function X(e, t, n) {
    if (typeof e != "object" || e === null) return JSON.stringify(e);
    var r = ee(Object.prototype),
        o = ee(Array.prototype),
        i = ee(Object.getPrototypeOf(e)),
        a = ee(e);
    try {
        return JSON.stringify(e, t, n)
    } catch {
        return "<error: unable to serialize object>"
    } finally {
        r(), o(), i(), a()
    }
}

function ee(e) {
    var t = e,
        n = t.toJSON;
    return n ? (delete t.toJSON, function() {
        t.toJSON = n
    }) : U
}

function lt(e) {
    return Cr(e, location.href).href
}

function Cr(e, t) {
    var n = Tr();
    if (n) try {
        return t !== void 0 ? new n(e, t) : new n(e)
    } catch (a) {
        throw new Error("Failed to construct URL: ".concat(String(a), " ").concat(X({
            url: e,
            base: t
        })))
    }
    if (t === void 0 && !/:/.test(e)) throw new Error("Invalid URL: '".concat(e, "'"));
    var r = document,
        o = r.createElement("a");
    if (t !== void 0) {
        r = document.implementation.createHTMLDocument("");
        var i = r.createElement("base");
        i.href = t, r.head.appendChild(i), r.body.appendChild(o)
    }
    return o.href = e, o
}
var St = URL,
    Se;

function Tr() {
    if (Se === void 0) try {
        var e = new St("http://test/path");
        Se = e.href === "http://test/path"
    } catch {
        Se = !1
    }
    return Se ? St : void 0
}
var wr = "datad0g.com",
    Rr = "dd0g-gov.com",
    Y = "datadoghq.com",
    xr = "ddog-gov.com",
    Vt = "pci.browser-intake-datadoghq.com";

function ce(e, t, n) {
    var r = Lr(e, t);
    return {
        build: function(o, i) {
            var a = kr(e, t, n, o, i);
            return r(a)
        },
        urlPrefix: r(""),
        trackType: t
    }
}

function Lr(e, t) {
    var n = "/api/v2/".concat(t),
        r = e.proxy;
    if (typeof r == "string") {
        var o = lt(r);
        return function(a) {
            return "".concat(o, "?ddforward=").concat(encodeURIComponent("".concat(n, "?").concat(a)))
        }
    }
    if (typeof r == "function") return function(a) {
        return r({
            path: n,
            parameters: a
        })
    };
    var i = Ar(t, e);
    return function(a) {
        return "https://".concat(i).concat(n, "?").concat(a)
    }
}

function Ar(e, t) {
    var n = t.site,
        r = n === void 0 ? Y : n,
        o = t.internalAnalyticsSubdomain;
    if (e === "logs" && t.usePciIntake && r === Y) return Vt;
    if (o && r === Y) return "".concat(o, ".").concat(Y);
    if (r === Rr) return "http-intake.logs.".concat(r);
    var i = r.split("."),
        a = i.pop();
    return "browser-intake-".concat(i.join("-"), ".").concat(a)
}

function kr(e, t, n, r, o) {
    var i = e.clientToken,
        a = e.internalAnalyticsSubdomain,
        s = o.retry,
        c = o.encoding,
        u = ["sdk_version:".concat("5.24.0"), "api:".concat(r)].concat(n);
    s && u.push("retry_count:".concat(s.count), "retry_after:".concat(s.lastFailureStatus));
    var f = ["ddsource=browser", "ddtags=".concat(encodeURIComponent(u.join(","))), "dd-api-key=".concat(i), "dd-evp-origin-version=".concat(encodeURIComponent("5.24.0")), "dd-evp-origin=browser", "dd-request-id=".concat(W())];
    return c && f.push("dd-evp-encoding=".concat(c)), t === "rum" && f.push("batch_time=".concat(D())), a && f.reverse(), f.join("&")
}
var Ir = 200;

function Nr(e) {
    var t = e.env,
        n = e.service,
        r = e.version,
        o = e.datacenter,
        i = [];
    return t && i.push(ye("env", t)), n && i.push(ye("service", n)), r && i.push(ye("version", r)), o && i.push(ye("datacenter", o)), i
}
var Mr = /[^a-z0-9_:./-]/;

function ye(e, t) {
    var n = Ir - e.length - 1;
    (t.length > n || Mr.test(t)) && E.warn("".concat(e, " value doesn't meet tag requirements and will be sanitized. ").concat(Pe, " ").concat(tt, "/getting_started/tagging/#defining-tags"));
    var r = t.replace(/,/g, "_");
    return "".concat(e, ":").concat(r)
}

function Ur(e) {
    var t = e.site || Y,
        n = Nr(e),
        r = Dr(e, n),
        o = Br(r, t),
        i = Pr(e, o, n);
    return O({
        isIntakeUrl: function(a) {
            return o.some(function(s) {
                return a.indexOf(s) === 0
            })
        },
        replica: i,
        site: t
    }, r)
}

function Dr(e, t) {
    return {
        logsEndpointBuilder: ce(e, "logs", t),
        rumEndpointBuilder: ce(e, "rum", t),
        sessionReplayEndpointBuilder: ce(e, "replay", t)
    }
}

function Pr(e, t, n) {
    if (e.replica) {
        var r = O({}, e, {
                site: Y,
                clientToken: e.replica.clientToken
            }),
            o = {
                logsEndpointBuilder: ce(r, "logs", n),
                rumEndpointBuilder: ce(r, "rum", n)
            };
        return t.push.apply(t, te(o).map(function(i) {
            return i.urlPrefix
        })), O({
            applicationId: e.replica.applicationId
        }, o)
    }
}

function Br(e, t) {
    var n = te(e).map(function(r) {
        return r.urlPrefix
    });
    return t === Y && n.push("https://".concat(Vt, "/")), n
}

function ze(e, t) {
    return e != null && typeof e != "string" ? (E.error("".concat(t, " must be defined as a string")), !1) : !0
}

function Fr(e) {
    return e && typeof e == "string" && !/(datadog|ddog|datad0g|dd0g)/.test(e) ? (E.error("Site should be a valid Datadog site. ".concat(Pe, " ").concat(tt, "/getting_started/site/.")), !1) : !0
}

function Ee(e, t) {
    return e !== void 0 && !Ln(e) ? (E.error("".concat(t, " Sample Rate should be a number between 0 and 100")), !1) : !0
}

function Gr(e) {
    var t, n, r, o, i;
    if (!e || !e.clientToken) {
        E.error("Client Token is not configured, we will not send any data.");
        return
    }
    if (!(!Fr(e.site) || !Ee(e.sessionSampleRate, "Session") || !Ee(e.telemetrySampleRate, "Telemetry") || !Ee(e.telemetryConfigurationSampleRate, "Telemetry Configuration") || !Ee(e.telemetryUsageSampleRate, "Telemetry Usage") || !ze(e.version, "Version") || !ze(e.env, "Env") || !ze(e.service, "Service"))) {
        if (e.trackingConsent !== void 0 && !Nt($e, e.trackingConsent)) {
            E.error('Tracking Consent should be either "granted" or "not-granted"');
            return
        }
        return O({
            beforeSend: e.beforeSend && At(e.beforeSend, "beforeSend threw an error:"),
            sessionStoreStrategyType: Er(e),
            sessionSampleRate: (t = e.sessionSampleRate) !== null && t !== void 0 ? t : 100,
            telemetrySampleRate: (n = e.telemetrySampleRate) !== null && n !== void 0 ? n : 20,
            telemetryConfigurationSampleRate: (r = e.telemetryConfigurationSampleRate) !== null && r !== void 0 ? r : 5,
            telemetryUsageSampleRate: (o = e.telemetryUsageSampleRate) !== null && o !== void 0 ? o : 5,
            service: e.service || void 0,
            silentMultipleInit: !!e.silentMultipleInit,
            allowUntrustedEvents: !!e.allowUntrustedEvents,
            trackingConsent: (i = e.trackingConsent) !== null && i !== void 0 ? i : $e.GRANTED,
            storeContextsAcrossPages: !!e.storeContextsAcrossPages,
            batchBytesLimit: 16 * k,
            eventRateLimiterThreshold: 3e3,
            maxTelemetryEventsPerPage: 15,
            flushTimeout: 30 * ve,
            batchMessagesLimit: 50,
            messageBytesLimit: 256 * k
        }, Ur(e))
    }
}

function jr(e) {
    return {
        session_sample_rate: e.sessionSampleRate,
        telemetry_sample_rate: e.telemetrySampleRate,
        telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
        telemetry_usage_sample_rate: e.telemetryUsageSampleRate,
        use_before_send: !!e.beforeSend,
        use_cross_site_session_cookie: e.useCrossSiteSessionCookie,
        use_partitioned_cross_site_session_cookie: e.usePartitionedCrossSiteSessionCookie,
        use_secure_session_cookie: e.useSecureSessionCookie,
        use_proxy: !!e.proxy,
        silent_multiple_init: e.silentMultipleInit,
        track_session_across_subdomains: e.trackSessionAcrossSubdomains,
        allow_fallback_to_local_storage: !!e.allowFallbackToLocalStorage,
        store_contexts_across_pages: !!e.storeContextsAcrossPages,
        allow_untrusted_events: !!e.allowUntrustedEvents,
        tracking_consent: e.trackingConsent
    }
}
var Ze;
(function(e) {
    e.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql", e.CUSTOM_VITALS = "custom_vitals", e.TOLERANT_RESOURCE_TIMINGS = "tolerant_resource_timings", e.REMOTE_CONFIGURATION = "remote_configuration", e.UPDATE_VIEW_NAME = "update_view_name", e.NULL_INP_TELEMETRY = "null_inp_telemetry", e.LONG_ANIMATION_FRAME = "long_animation_frame"
})(Ze || (Ze = {}));
var Jt = new Set;

function Hr(e) {
    Array.isArray(e) && zr(e.filter(function(t) {
        return Nt(Ze, t)
    }))
}

function zr(e) {
    e.forEach(function(t) {
        Jt.add(t)
    })
}

function qr() {
    return Jt
}
var me = "?";

function N(e) {
    var t = [],
        n = qe(e, "stack"),
        r = String(e);
    return n && ot(n, r) && (n = n.slice(r.length)), n && n.split(`
`).forEach(function(o) {
        var i = Vr(o) || Wr(o) || $r(o) || eo(o);
        i && (!i.func && i.line && (i.func = me), t.push(i))
    }), {
        message: qe(e, "message"),
        name: qe(e, "name"),
        stack: t
    }
}
var Wt = "((?:file|https?|blob|chrome-extension|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
    re = "(?::(\\d+))",
    Yr = new RegExp("^\\s*at (.*?) ?\\(".concat(Wt).concat(re, "?").concat(re, "?\\)?\\s*$"), "i"),
    Kr = new RegExp("\\((\\S*)".concat(re).concat(re, "\\)"));

function Vr(e) {
    var t = Yr.exec(e);
    if (t) {
        var n = t[2] && t[2].indexOf("native") === 0,
            r = t[2] && t[2].indexOf("eval") === 0,
            o = Kr.exec(t[2]);
        return r && o && (t[2] = o[1], t[3] = o[2], t[4] = o[3]), {
            args: n ? [t[2]] : [],
            column: t[4] ? +t[4] : void 0,
            func: t[1] || me,
            line: t[3] ? +t[3] : void 0,
            url: n ? void 0 : t[2]
        }
    }
}
var Jr = new RegExp("^\\s*at ?".concat(Wt).concat(re, "?").concat(re, "??\\s*$"), "i");

function Wr(e) {
    var t = Jr.exec(e);
    if (t) return {
        args: [],
        column: t[3] ? +t[3] : void 0,
        func: me,
        line: t[2] ? +t[2] : void 0,
        url: t[1]
    }
}
var Xr = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function $r(e) {
    var t = Xr.exec(e);
    if (t) return {
        args: [],
        column: t[4] ? +t[4] : void 0,
        func: t[1] || me,
        line: +t[3],
        url: t[2]
    }
}
var Zr = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
    Qr = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

function eo(e) {
    var t = Zr.exec(e);
    if (t) {
        var n = t[3] && t[3].indexOf(" > eval") > -1,
            r = Qr.exec(t[3]);
        return n && r && (t[3] = r[1], t[4] = r[2], t[5] = void 0), {
            args: t[2] ? t[2].split(",") : [],
            column: t[5] ? +t[5] : void 0,
            func: t[1] || me,
            line: t[4] ? +t[4] : void 0,
            url: t[3]
        }
    }
}

function qe(e, t) {
    if (!(typeof e != "object" || !e || !(t in e))) {
        var n = e[t];
        return typeof n == "string" ? n : void 0
    }
}

function to(e, t, n, r) {
    var o = [{
            url: t,
            column: r,
            line: n
        }],
        i = ro(e),
        a = i.name,
        s = i.message;
    return {
        name: a,
        message: s,
        stack: o
    }
}
var no = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;

function ro(e) {
    var t, n, r;
    return {}.toString.call(e) === "[object String]" && (t = no.exec(e), n = t[1], r = t[2]), {
        name: n,
        message: r
    }
}

function Be() {
    var e = 2,
        t = new Error,
        n;
    if (!t.stack) try {
        throw t
    } catch {}
    return le(function() {
        var r = N(t);
        r.stack = r.stack.slice(e), n = $(r)
    }), n
}

function $(e) {
    var t = Xt(e);
    return e.stack.forEach(function(n) {
        var r = n.func === "?" ? "<anonymous>" : n.func,
            o = n.args && n.args.length > 0 ? "(".concat(n.args.join(", "), ")") : "",
            i = n.line ? ":".concat(n.line) : "",
            a = n.line && n.column ? ":".concat(n.column) : "";
        t += `
  at `.concat(r).concat(o, " @ ").concat(n.url).concat(i).concat(a)
    }), t
}

function Xt(e) {
    return "".concat(e.name || "Error", ": ").concat(e.message)
}

function K(e, t, n, r) {
    var o = r === void 0 ? {} : r,
        i = o.computeHandlingStack,
        a = e[t];
    if (typeof a != "function")
        if (t in e && ot(t, "on")) a = U;
        else return {
            stop: U
        };
    var s = !1,
        c = function() {
            if (s) return a.apply(this, arguments);
            var u = rt(arguments),
                f;
            le(n, null, [{
                target: this,
                parameters: u,
                onPostCall: function(d) {
                    f = d
                },
                handlingStack: i ? Be() : void 0
            }]);
            var l = a.apply(this, u);
            return f && le(f, null, [l]), l
        };
    return e[t] = c, {
        stop: function() {
            s = !0, e[t] === c && (e[t] = a)
        }
    }
}
var oo = 220 * k,
    io = "$",
    ao = 3;

function I(e, t) {
    t === void 0 && (t = oo);
    var n = ee(Object.prototype),
        r = ee(Array.prototype),
        o = [],
        i = new WeakMap,
        a = Ye(e, io, void 0, o, i),
        s = JSON.stringify(a),
        c = s ? s.length : 0;
    if (c > t) {
        Ke(t, "discarded", e);
        return
    }
    for (; o.length > 0 && c < t;) {
        var u = o.shift(),
            f = 0;
        if (Array.isArray(u.source))
            for (var l = 0; l < u.source.length; l++) {
                var d = Ye(u.source[l], u.path, l, o, i);
                if (d !== void 0 ? c += JSON.stringify(d).length : c += 4, c += f, f = 1, c > t) {
                    Ke(t, "truncated", e);
                    break
                }
                u.target[l] = d
            } else
                for (var l in u.source)
                    if (Object.prototype.hasOwnProperty.call(u.source, l)) {
                        var d = Ye(u.source[l], u.path, l, o, i);
                        if (d !== void 0 && (c += JSON.stringify(d).length + f + l.length + ao, f = 1), c > t) {
                            Ke(t, "truncated", e);
                            break
                        }
                        u.target[l] = d
                    }
    }
    return n(), r(), a
}

function Ye(e, t, n, r, o) {
    var i = co(e);
    if (!i || typeof i != "object") return so(i);
    var a = uo(i);
    if (a !== "[Object]" && a !== "[Array]" && a !== "[Error]") return a;
    var s = e;
    if (o.has(s)) return "[Reference seen at ".concat(o.get(s), "]");
    var c = n !== void 0 ? "".concat(t, ".").concat(n) : t,
        u = Array.isArray(i) ? [] : {};
    return o.set(s, c), r.push({
        source: i,
        target: u,
        path: c
    }), u
}

function so(e) {
    return typeof e == "bigint" ? "[BigInt] ".concat(e.toString()) : typeof e == "function" ? "[Function] ".concat(e.name || "unknown") : typeof e == "symbol" ? "[Symbol] ".concat(e.description || e.toString()) : e
}

function uo(e) {
    try {
        if (e instanceof Event) return {
            isTrusted: e.isTrusted
        };
        var t = Object.prototype.toString.call(e),
            n = t.match(/\[object (.*)\]/);
        if (n && n[1]) return "[".concat(n[1], "]")
    } catch {}
    return "[Unserializable]"
}

function co(e) {
    var t = e;
    if (t && typeof t.toJSON == "function") try {
        return t.toJSON()
    } catch {}
    return e
}

function Ke(e, t, n) {
    E.warn("The data provided has been ".concat(t, " as it is over the limit of ").concat(e, " characters:"), n)
}
var $t = "No stack, consider using an instance of Error";

function Zt(e) {
    var t = e.stackTrace,
        n = e.originalError,
        r = e.handlingStack,
        o = e.startClocks,
        i = e.nonErrorPrefix,
        a = e.source,
        s = e.handling,
        c = n instanceof Error,
        u = fo(t, c, i, n),
        f = lo(c, t) ? $(t) : $t,
        l = c ? en(n, a) : void 0,
        d = t ? t.name : void 0,
        v = Qt(n);
    return {
        startClocks: o,
        source: a,
        handling: s,
        handlingStack: r,
        originalError: n,
        type: d,
        message: u,
        stack: f,
        causes: l,
        fingerprint: v
    }
}

function fo(e, t, n, r) {
    return e ? .message && e ? .name ? e.message : t ? "Empty message" : "".concat(n, " ").concat(X(I(r)))
}

function lo(e, t) {
    return t === void 0 ? !1 : e ? !0 : t.stack.length > 0 && (t.stack.length > 1 || t.stack[0].url !== void 0)
}

function Qt(e) {
    return e instanceof Error && "dd_fingerprint" in e ? String(e.dd_fingerprint) : void 0
}

function vo(e) {
    var t;
    return (t = /@ (.+)/.exec(e)) === null || t === void 0 ? void 0 : t[1]
}

function en(e, t) {
    for (var n = e, r = []; n ? .cause instanceof Error && r.length < 10;) {
        var o = N(n.cause);
        r.push({
            message: n.cause.message,
            source: t,
            type: o ? .name,
            stack: o && $(o)
        }), n = n.cause
    }
    return r.length ? r : void 0
}
var C = {
    AGENT: "agent",
    CONSOLE: "console",
    CUSTOM: "custom",
    LOGGER: "logger",
    NETWORK: "network",
    SOURCE: "source",
    REPORT: "report"
};

function po(e) {
    var t = function(o, i) {
            var a = Zt({
                stackTrace: o,
                originalError: i,
                startClocks: P(),
                nonErrorPrefix: "Uncaught",
                source: C.SOURCE,
                handling: "unhandled"
            });
            e.notify(a)
        },
        n = go(t).stop,
        r = mo(t).stop;
    return {
        stop: function() {
            n(), r()
        }
    }
}

function go(e) {
    return K(window, "onerror", function(t) {
        var n = t.parameters,
            r = n[0],
            o = n[1],
            i = n[2],
            a = n[3],
            s = n[4],
            c;
        s instanceof Error ? c = N(s) : c = to(r, o, i, a), e(c, s ? ? r)
    })
}

function mo(e) {
    return K(window, "onunhandledrejection", function(t) {
        var n = t.parameters[0],
            r = n.reason || "Empty reason",
            o = N(r);
        e(o, r)
    })
}

function bo(e) {
    var t = O({
        version: "5.24.0",
        onReady: function(n) {
            n()
        }
    }, e);
    return Object.defineProperty(t, "_setDebug", {
        get: function() {
            return zn
        },
        enumerable: !1
    }), t
}

function ho(e, t, n) {
    var r = e[t];
    r && !r.q && r.version && E.warn("SDK is loaded more than once. This is unsupported and might have unexpected behavior."), e[t] = n, r && r.q && r.q.forEach(function(o) {
        return At(o, "onReady callback threw an error:")()
    })
}

function tn(e, t) {
    t.silentMultipleInit || E.error("".concat(e, " is already initialized."))
}

function Z(e, t, n, r, o) {
    return dt(e, t, [n], r, o)
}

function dt(e, t, n, r, o) {
    var i = o === void 0 ? {} : o,
        a = i.once,
        s = i.capture,
        c = i.passive,
        u = h(function(v) {
            !v.isTrusted && !v.__ddIsTrusted && !e.allowUntrustedEvents || (a && d(), r(v))
        }),
        f = c ? {
            capture: s,
            passive: c
        } : s,
        l = ne(t, "addEventListener");
    n.forEach(function(v) {
        return l.call(t, v, u, f)
    });

    function d() {
        var v = ne(t, "removeEventListener");
        n.forEach(function(b) {
            return v.call(t, b, u, f)
        })
    }
    return {
        stop: d
    }
}
var Ie = {
    intervention: "intervention",
    deprecation: "deprecation",
    cspViolation: "csp_violation"
};

function So(e, t) {
    var n = [];
    ie(t, Ie.cspViolation) && n.push(Eo(e));
    var r = t.filter(function(o) {
        return o !== Ie.cspViolation
    });
    return r.length && n.push(yo(r)), Pt.apply(void 0, n)
}

function yo(e) {
    return new _(function(t) {
        if (window.ReportingObserver) {
            var n = h(function(o, i) {
                    return o.forEach(function(a) {
                        return t.notify(_o(a))
                    })
                }),
                r = new window.ReportingObserver(n, {
                    types: e,
                    buffered: !0
                });
            return r.observe(),
                function() {
                    r.disconnect()
                }
        }
    })
}

function Eo(e) {
    return new _(function(t) {
        var n = Z(e, document, "securitypolicyviolation", function(r) {
            t.notify(Oo(r))
        }).stop;
        return n
    })
}

function _o(e) {
    var t = e.type,
        n = e.body;
    return nn({
        type: n.id,
        message: "".concat(t, ": ").concat(n.message),
        originalError: e,
        stack: rn(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
    })
}

function Oo(e) {
    var t = "'".concat(e.blockedURI, "' blocked by '").concat(e.effectiveDirective, "' directive");
    return nn({
        type: e.effectiveDirective,
        message: "".concat(Ie.cspViolation, ": ").concat(t),
        originalError: e,
        csp: {
            disposition: e.disposition
        },
        stack: rn(e.effectiveDirective, e.originalPolicy ? "".concat(t, ' of the policy "').concat(Vn(e.originalPolicy, 100, "..."), '"') : "no policy", e.sourceFile, e.lineNumber, e.columnNumber)
    })
}

function nn(e) {
    return O({
        startClocks: P(),
        source: C.REPORT,
        handling: "unhandled"
    }, e)
}

function rn(e, t, n, r, o) {
    return n ? $({
        name: e,
        message: t,
        stack: [{
            func: "?",
            url: n,
            line: r ? ? void 0,
            column: o ? ? void 0
        }]
    }) : void 0
}

function on(e, t) {
    var n = window.__ddBrowserSdkExtensionCallback;
    n && n({
        type: e,
        payload: t
    })
}

function vt(e) {
    return e === null ? "null" : Array.isArray(e) ? "array" : typeof e
}

function Ne(e, t, n) {
    if (n === void 0 && (n = Co()), t === void 0) return e;
    if (typeof t != "object" || t === null) return t;
    if (t instanceof Date) return new Date(t.getTime());
    if (t instanceof RegExp) {
        var r = t.flags || [t.global ? "g" : "", t.ignoreCase ? "i" : "", t.multiline ? "m" : "", t.sticky ? "y" : "", t.unicode ? "u" : ""].join("");
        return new RegExp(t.source, r)
    }
    if (!n.hasAlreadyBeenSeen(t)) {
        if (Array.isArray(t)) {
            for (var o = Array.isArray(e) ? e : [], i = 0; i < t.length; ++i) o[i] = Ne(o[i], t[i], n);
            return o
        }
        var a = vt(e) === "object" ? e : {};
        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (a[s] = Ne(a[s], t[s], n));
        return a
    }
}

function an(e) {
    return Ne(void 0, e)
}

function oe() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    for (var n, r = 0, o = e; r < o.length; r++) {
        var i = o[r];
        i != null && (n = Ne(n, i))
    }
    return n
}

function Co() {
    if (typeof WeakSet < "u") {
        var e = new WeakSet;
        return {
            hasAlreadyBeenSeen: function(n) {
                var r = e.has(n);
                return r || e.add(n), r
            }
        }
    }
    var t = [];
    return {
        hasAlreadyBeenSeen: function(n) {
            var r = t.indexOf(n) >= 0;
            return r || t.push(n), r
        }
    }
}

function To() {
    var e, t = window.navigator;
    return {
        status: t.onLine ? "connected" : "not_connected",
        interfaces: t.connection && t.connection.type ? [t.connection.type] : void 0,
        effective_type: (e = t.connection) === null || e === void 0 ? void 0 : e.effectiveType
    }
}

function wo(e) {
    var t = new Set;
    return e.forEach(function(n) {
        return t.add(n)
    }), rt(t)
}

function sn(e, t) {
    var n = e.indexOf(t);
    n >= 0 && e.splice(n, 1)
}
var Ro = 500;

function un() {
    var e = [],
        t = function(o) {
            var i = e.push(o);
            i > Ro && e.splice(0, 1)
        },
        n = function(o) {
            sn(e, o)
        },
        r = function(o) {
            e.forEach(function(i) {
                return i(o)
            }), e.length = 0
        };
    return {
        add: t,
        remove: n,
        drain: r
    }
}
var V = {
        log: "log",
        configuration: "configuration",
        usage: "usage"
    },
    xo = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "https://d3uc069fcn7uxw.cloudfront.net", "https://d20xtzwzcl0ceb.cloudfront.net", "http://localhost", "<anonymous>"],
    Lo = [xr],
    cn = un(),
    se = function(e) {
        cn.add(function() {
            return se(e)
        })
    };

function Ao(e, t) {
    var n, r, o = new _,
        i = new Set,
        a = !ie(Lo, t.site) && Oe(t.telemetrySampleRate),
        s = (n = {}, n[V.log] = a, n[V.configuration] = a && Oe(t.telemetryConfigurationSampleRate), n[V.usage] = a && Oe(t.telemetryUsageSampleRate), n),
        c = ko();
    se = function(f) {
        var l = X(f);
        if (s[f.type] && i.size < t.maxTelemetryEventsPerPage && !i.has(l)) {
            var d = u(e, f, c);
            o.notify(d), on("telemetry", d), i.add(l)
        }
    }, Hn(ln);

    function u(f, l, d) {
        return oe({
            type: "telemetry",
            date: D(),
            service: f,
            version: "5.24.0",
            source: "browser",
            _dd: {
                format_version: 2
            },
            telemetry: oe(l, {
                runtime_env: d,
                connectivity: To()
            }),
            experimental_features: rt(qr())
        }, r !== void 0 ? r() : {})
    }
    return {
        setContextProvider: function(f) {
            r = f
        },
        observable: o,
        enabled: a
    }
}

function ko() {
    return {
        is_local_file: window.location.protocol === "file:",
        is_worker: "WorkerGlobalScope" in self
    }
}

function Io() {
    cn.drain()
}

function No(e) {
    return e.site === wr
}

function fn(e, t) {
    Xe(y.debug, e, t), se(O({
        type: V.log,
        message: e,
        status: "debug"
    }, t))
}

function ln(e, t) {
    se(O({
        type: V.log,
        status: "error"
    }, Do(e), t))
}

function Mo(e) {
    se({
        type: V.configuration,
        configuration: e
    })
}

function Uo(e) {
    se({
        type: V.usage,
        usage: e
    })
}

function Do(e) {
    if (e instanceof Error) {
        var t = N(e);
        return {
            error: {
                kind: t.name,
                stack: $(Po(t))
            },
            message: t.message
        }
    }
    return {
        error: {
            stack: $t
        },
        message: "".concat("Uncaught", " ").concat(X(e))
    }
}

function Po(e) {
    return e.stack = e.stack.filter(function(t) {
        return !t.url || xo.some(function(n) {
            return ot(t.url, n)
        })
    }), e
}
var _e = 1 / 0,
    Bo = J;

function Fo(e) {
    var t = e.expireDelay,
        n = e.maxEntries,
        r = [],
        o = at(function() {
            return i()
        }, Bo);

    function i() {
        for (var d = xe() - t; r.length > 0 && r[r.length - 1].endTime < d;) r.pop()
    }

    function a(d, v) {
        var b = {
            value: d,
            startTime: v,
            endTime: _e,
            remove: function() {
                sn(r, b)
            },
            close: function(p) {
                b.endTime = p
            }
        };
        return n && r.length >= n && r.pop(), r.unshift(b), b
    }

    function s(d, v) {
        d === void 0 && (d = _e), v === void 0 && (v = {
            returnInactive: !1
        });
        for (var b = 0, p = r; b < p.length; b++) {
            var S = p[b];
            if (S.startTime <= d) {
                if (v.returnInactive || d <= S.endTime) return S.value;
                break
            }
        }
    }

    function c(d) {
        var v = r[0];
        v && v.endTime === _e && v.close(d)
    }

    function u(d, v) {
        d === void 0 && (d = _e), v === void 0 && (v = 0);
        var b = Mn(d, v);
        return r.filter(function(p) {
            return p.startTime <= b && d <= p.endTime
        }).map(function(p) {
            return p.value
        })
    }

    function f() {
        r = []
    }

    function l() {
        Dt(o)
    }
    return {
        add: a,
        find: s,
        closeActive: c,
        findAll: u,
        reset: f,
        stop: l
    }
}
var Go = J,
    jo = ut;

function Ho(e, t, n, r) {
    var o = new _,
        i = new _,
        a = _r(e.sessionStoreStrategyType, t, n),
        s = Fo({
            expireDelay: jo
        });
    a.renewObservable.subscribe(function() {
        s.add(c(), xe()), o.notify()
    }), a.expireObservable.subscribe(function() {
        i.notify(), s.closeActive(xe())
    }), a.expandOrRenewSession(), s.add(c(), In().relative), r.observable.subscribe(function() {
        r.isGranted() ? a.expandOrRenewSession() : a.expire()
    }), zo(e, function() {
        r.isGranted() && a.expandOrRenewSession()
    }), qo(e, function() {
        return a.expandSession()
    }), Yo(e, function() {
        return a.restartSession()
    });

    function c() {
        return {
            id: a.getSession().id,
            trackingType: a.getSession()[t],
            isReplayForced: !!a.getSession().forcedReplay
        }
    }
    return {
        findSession: function(u, f) {
            return s.find(u, f)
        },
        renewObservable: o,
        expireObservable: i,
        sessionStateUpdateObservable: a.sessionStateUpdateObservable,
        expire: a.expire,
        updateSessionState: a.updateSessionState
    }
}

function zo(e, t) {
    dt(e, window, ["click", "touchstart", "keydown", "scroll"], t, {
        capture: !0,
        passive: !0
    }).stop
}

function qo(e, t) {
    var n = function() {
        document.visibilityState === "visible" && t()
    };
    Z(e, document, "visibilitychange", n).stop, at(n, Go)
}

function Yo(e, t) {
    Z(e, window, "resume", t, {
        capture: !0
    }).stop
}

function dn(e) {
    return e >= 500
}

function Ko(e) {
    try {
        return e.clone()
    } catch {
        return
    }
}
var Vo = 80 * k,
    Jo = 32,
    vn = 3 * It,
    Wo = J,
    pn = ve;

function gn(e, t, n, r, o) {
    t.transportStatus === 0 && t.queuedPayloads.size() === 0 && t.bandwidthMonitor.canHandle(e) ? bn(e, t, n, {
        onSuccess: function() {
            return hn(0, t, n, r, o)
        },
        onFailure: function() {
            t.queuedPayloads.enqueue(e), mn(t, n, r, o)
        }
    }) : t.queuedPayloads.enqueue(e)
}

function mn(e, t, n, r) {
    e.transportStatus === 2 && pe(function() {
        var o = e.queuedPayloads.first();
        bn(o, e, t, {
            onSuccess: function() {
                e.queuedPayloads.dequeue(), e.currentBackoffTime = pn, hn(1, e, t, n, r)
            },
            onFailure: function() {
                e.currentBackoffTime = Math.min(Wo, e.currentBackoffTime * 2), mn(e, t, n, r)
            }
        })
    }, e.currentBackoffTime)
}

function bn(e, t, n, r) {
    var o = r.onSuccess,
        i = r.onFailure;
    t.bandwidthMonitor.add(e), n(e, function(a) {
        t.bandwidthMonitor.remove(e), Xo(a) ? (t.transportStatus = t.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, e.retry = {
            count: e.retry ? e.retry.count + 1 : 1,
            lastFailureStatus: a.status
        }, i()) : (t.transportStatus = 0, o())
    })
}

function hn(e, t, n, r, o) {
    e === 0 && t.queuedPayloads.isFull() && !t.queueFullReported && (o({
        message: "Reached max ".concat(r, " events size queued for upload: ").concat(vn / It, "MiB"),
        source: C.AGENT,
        startClocks: P()
    }), t.queueFullReported = !0);
    var i = t.queuedPayloads;
    for (t.queuedPayloads = Sn(); i.size() > 0;) gn(i.dequeue(), t, n, r, o)
}

function Xo(e) {
    return e.type !== "opaque" && (e.status === 0 && !navigator.onLine || e.status === 408 || e.status === 429 || dn(e.status))
}

function $o() {
    return {
        transportStatus: 0,
        currentBackoffTime: pn,
        bandwidthMonitor: Zo(),
        queuedPayloads: Sn(),
        queueFullReported: !1
    }
}

function Sn() {
    var e = [];
    return {
        bytesCount: 0,
        enqueue: function(t) {
            this.isFull() || (e.push(t), this.bytesCount += t.bytesCount)
        },
        first: function() {
            return e[0]
        },
        dequeue: function() {
            var t = e.shift();
            return t && (this.bytesCount -= t.bytesCount), t
        },
        size: function() {
            return e.length
        },
        isFull: function() {
            return this.bytesCount >= vn
        }
    }
}

function Zo() {
    return {
        ongoingRequestCount: 0,
        ongoingByteCount: 0,
        canHandle: function(e) {
            return this.ongoingRequestCount === 0 || this.ongoingByteCount + e.bytesCount <= Vo && this.ongoingRequestCount < Jo
        },
        add: function(e) {
            this.ongoingRequestCount += 1, this.ongoingByteCount += e.bytesCount
        },
        remove: function(e) {
            this.ongoingRequestCount -= 1, this.ongoingByteCount -= e.bytesCount
        }
    }
}

function Qo(e, t, n, r) {
    var o = $o(),
        i = function(a, s) {
            return ni(e, t, n, a, s)
        };
    return {
        send: function(a) {
            gn(a, o, i, t.trackType, r)
        },
        sendOnExit: function(a) {
            ei(e, t, n, a)
        }
    }
}

function ei(e, t, n, r) {
    var o = !!navigator.sendBeacon && r.bytesCount < n;
    if (o) try {
        var i = t.build("beacon", r),
            a = navigator.sendBeacon(i, r.data);
        if (a) return
    } catch (c) {
        ti(c)
    }
    var s = t.build("xhr", r);
    Qe(e, s, r.data)
}
var yt = !1;

function ti(e) {
    yt || (yt = !0, ln(e))
}

function ni(e, t, n, r, o) {
    var i = ri() && r.bytesCount < n;
    if (i) {
        var a = t.build("fetch", r);
        fetch(a, {
            method: "POST",
            body: r.data,
            keepalive: !0,
            mode: "cors"
        }).then(h(function(c) {
            return o ? .({
                status: c.status,
                type: c.type
            })
        }), h(function() {
            var c = t.build("xhr", r);
            Qe(e, c, r.data, o)
        }))
    } else {
        var s = t.build("xhr", r);
        Qe(e, s, r.data, o)
    }
}

function ri() {
    try {
        return window.Request && "keepalive" in new Request("http://a")
    } catch {
        return !1
    }
}

function Qe(e, t, n, r) {
    var o = new XMLHttpRequest;
    o.open("POST", t, !0), n instanceof Blob && o.setRequestHeader("Content-Type", n.type), Z(e, o, "loadend", function() {
        r ? .({
            status: o.status
        })
    }, {
        once: !0
    }), o.send(n)
}

function pt() {
    var e = oi();
    if (e) return {
        getCapabilities: function() {
            var t;
            return JSON.parse(((t = e.getCapabilities) === null || t === void 0 ? void 0 : t.call(e)) || "[]")
        },
        getPrivacyLevel: function() {
            var t;
            return (t = e.getPrivacyLevel) === null || t === void 0 ? void 0 : t.call(e)
        },
        getAllowedWebViewHosts: function() {
            return JSON.parse(e.getAllowedWebViewHosts())
        },
        send: function(t, n, r) {
            var o = r ? {
                id: r
            } : void 0;
            e.send(JSON.stringify({
                eventType: t,
                event: n,
                view: o
            }))
        }
    }
}

function Me(e) {
    var t;
    e === void 0 && (e = (t = B().location) === null || t === void 0 ? void 0 : t.hostname);
    var n = pt();
    return !!n && n.getAllowedWebViewHosts().some(function(r) {
        return e === r || Fn(e, ".".concat(r))
    })
}

function oi() {
    return B().DatadogEventBridge
}
var we = {
    HIDDEN: "visibility_hidden",
    UNLOADING: "before_unload",
    PAGEHIDE: "page_hide",
    FROZEN: "page_frozen"
};

function ii(e) {
    return new _(function(t) {
        var n = dt(e, window, ["visibilitychange", "freeze"], function(o) {
                o.type === "visibilitychange" && document.visibilityState === "hidden" ? t.notify({
                    reason: we.HIDDEN
                }) : o.type === "freeze" && t.notify({
                    reason: we.FROZEN
                })
            }, {
                capture: !0
            }).stop,
            r = Z(e, window, "beforeunload", function() {
                t.notify({
                    reason: we.UNLOADING
                })
            }).stop;
        return function() {
            n(), r()
        }
    })
}

function ai(e) {
    return ie(te(we), e)
}

function si(e) {
    var t = e.encoder,
        n = e.request,
        r = e.flushController,
        o = e.messageBytesLimit,
        i = {},
        a = r.flushObservable.subscribe(function(d) {
            return l(d)
        });

    function s(d, v, b) {
        r.notifyBeforeAddMessage(v), b !== void 0 ? (i[b] = d, r.notifyAfterAddMessage()) : t.write(t.isEmpty ? d : `
`.concat(d), function(p) {
            r.notifyAfterAddMessage(p - v)
        })
    }

    function c(d) {
        return d !== void 0 && i[d] !== void 0
    }

    function u(d) {
        var v = i[d];
        delete i[d];
        var b = t.estimateEncodedBytesCount(v);
        r.notifyAfterRemoveMessage(b)
    }

    function f(d, v) {
        var b = X(d),
            p = t.estimateEncodedBytesCount(b);
        if (p >= o) {
            E.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(o, "KB. ").concat(Pe, " ").concat(Lt, "/#technical-limitations"));
            return
        }
        c(v) && u(v), s(b, p, v)
    }

    function l(d) {
        var v = te(i).join(`
`);
        i = {};
        var b = ai(d.reason),
            p = b ? n.sendOnExit : n.send;
        if (b && t.isAsync) {
            var S = t.finishSync();
            S.outputBytesCount && p(Et(S));
            var T = [S.pendingData, v].filter(Boolean).join(`
`);
            T && p({
                data: T,
                bytesCount: nt(T)
            })
        } else v && t.write(t.isEmpty ? v : `
`.concat(v)), t.finish(function(L) {
            p(Et(L))
        })
    }
    return {
        flushController: r,
        add: f,
        upsert: f,
        stop: a.unsubscribe
    }
}

function Et(e) {
    var t;
    return typeof e.output == "string" ? t = e.output : t = new Blob([e.output], {
        type: "text/plain"
    }), {
        data: t,
        bytesCount: e.outputBytesCount,
        encoding: e.encoding
    }
}

function ui(e) {
    var t = e.messagesLimit,
        n = e.bytesLimit,
        r = e.durationLimit,
        o = e.pageExitObservable,
        i = e.sessionExpireObservable,
        a = o.subscribe(function(p) {
            return l(p.reason)
        }),
        s = i.subscribe(function() {
            return l("session_expire")
        }),
        c = new _(function() {
            return function() {
                a.unsubscribe(), s.unsubscribe()
            }
        }),
        u = 0,
        f = 0;

    function l(p) {
        if (f !== 0) {
            var S = f,
                T = u;
            f = 0, u = 0, b(), c.notify({
                reason: p,
                messagesCount: S,
                bytesCount: T
            })
        }
    }
    var d;

    function v() {
        d === void 0 && (d = pe(function() {
            l("duration_limit")
        }, r))
    }

    function b() {
        Ut(d), d = void 0
    }
    return {
        flushObservable: c,
        get messagesCount() {
            return f
        },
        notifyBeforeAddMessage: function(p) {
            u + p >= n && l("bytes_limit"), f += 1, u += p, v()
        },
        notifyAfterAddMessage: function(p) {
            p === void 0 && (p = 0), u += p, f >= t ? l("messages_limit") : u >= n && l("bytes_limit")
        },
        notifyAfterRemoveMessage: function(p) {
            u -= p, f -= 1, f === 0 && b()
        }
    }
}

function yn(e, t, n, r, o, i, a) {
    a === void 0 && (a = si);
    var s = u(e, t),
        c = n && u(e, n);

    function u(f, l) {
        var d = l.endpoint,
            v = l.encoder;
        return a({
            encoder: v,
            request: Qo(f, d, f.batchBytesLimit, r),
            flushController: ui({
                messagesLimit: f.batchMessagesLimit,
                bytesLimit: f.batchBytesLimit,
                durationLimit: f.flushTimeout,
                pageExitObservable: o,
                sessionExpireObservable: i
            }),
            messageBytesLimit: f.messageBytesLimit
        })
    }
    return {
        flushObservable: s.flushController.flushObservable,
        add: function(f, l) {
            l === void 0 && (l = !0), s.add(f), c && l && c.add(n.transformMessage ? n.transformMessage(f) : f)
        },
        upsert: function(f, l) {
            s.upsert(f, l), c && c.upsert(n.transformMessage ? n.transformMessage(f) : f, l)
        },
        stop: function() {
            s.stop(), c && c.stop()
        }
    }
}

function Ue() {
    var e = "",
        t = 0;
    return {
        isAsync: !1,
        get isEmpty() {
            return !e
        },
        write: function(n, r) {
            var o = nt(n);
            t += o, e += n, r && r(o)
        },
        finish: function(n) {
            n(this.finishSync())
        },
        finishSync: function() {
            var n = {
                output: e,
                outputBytesCount: t,
                rawBytesCount: t,
                pendingData: ""
            };
            return e = "", t = 0, n
        },
        estimateEncodedBytesCount: function(n) {
            return n.length
        }
    }
}
var ci = function() {
    function e() {
        this.callbacks = {}
    }
    return e.prototype.notify = function(t, n) {
        var r = this.callbacks[t];
        r && r.forEach(function(o) {
            return o(n)
        })
    }, e.prototype.subscribe = function(t, n) {
        var r = this;
        return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(n), {
            unsubscribe: function() {
                r.callbacks[t] = r.callbacks[t].filter(function(o) {
                    return n !== o
                })
            }
        }
    }, e
}();

function fi(e, t, n) {
    var r = 0,
        o = !1;
    return {
        isLimitReached: function() {
            if (r === 0 && pe(function() {
                    r = 0
                }, J), r += 1, r <= t || o) return o = !1, !1;
            if (r === t + 1) {
                o = !0;
                try {
                    n({
                        message: "Reached max number of ".concat(e, "s by minute: ").concat(t),
                        source: C.AGENT,
                        startClocks: P()
                    })
                } finally {
                    o = !1
                }
            }
            return !0
        }
    }
}
var Ve, gt = new WeakMap;

function li(e) {
    return Ve || (Ve = di(e)), Ve
}

function di(e) {
    return new _(function(t) {
        var n = K(XMLHttpRequest.prototype, "open", vi).stop,
            r = K(XMLHttpRequest.prototype, "send", function(i) {
                pi(i, e, t)
            }, {
                computeHandlingStack: !0
            }).stop,
            o = K(XMLHttpRequest.prototype, "abort", gi).stop;
        return function() {
            n(), r(), o()
        }
    })
}

function vi(e) {
    var t = e.target,
        n = e.parameters,
        r = n[0],
        o = n[1];
    gt.set(t, {
        state: "open",
        method: String(r).toUpperCase(),
        url: lt(String(o))
    })
}

function pi(e, t, n) {
    var r = e.target,
        o = e.handlingStack,
        i = gt.get(r);
    if (i) {
        var a = i;
        a.state = "start", a.startClocks = P(), a.isAborted = !1, a.xhr = r, a.handlingStack = o;
        var s = !1,
            c = K(r, "onreadystatechange", function() {
                r.readyState === XMLHttpRequest.DONE && u()
            }).stop,
            u = function() {
                if (f(), c(), !s) {
                    s = !0;
                    var l = i;
                    l.state = "complete", l.duration = Nn(a.startClocks.timeStamp, D()), l.status = r.status, n.notify(Gn(l))
                }
            },
            f = Z(t, r, "loadend", u).stop;
        n.notify(a)
    }
}

function gi(e) {
    var t = e.target,
        n = gt.get(t);
    n && (n.isAborted = !0)
}
var Je;

function En() {
    return Je || (Je = mi()), Je
}

function mi() {
    return new _(function(e) {
        if (window.fetch) {
            var t = K(window, "fetch", function(n) {
                return bi(n, e)
            }, {
                computeHandlingStack: !0
            }).stop;
            return t
        }
    })
}

function bi(e, t) {
    var n = e.parameters,
        r = e.onPostCall,
        o = e.handlingStack,
        i = n[0],
        a = n[1],
        s = a && a.method;
    s === void 0 && i instanceof Request && (s = i.method);
    var c = s !== void 0 ? String(s).toUpperCase() : "GET",
        u = i instanceof Request ? i.url : lt(String(i)),
        f = P(),
        l = {
            state: "start",
            init: a,
            input: i,
            method: c,
            startClocks: f,
            url: u,
            handlingStack: o
        };
    t.notify(l), n[0] = l.input, n[1] = l.init, r(function(d) {
        return hi(t, d, l)
    })
}

function hi(e, t, n) {
    var r = n;

    function o(i) {
        r.state = "resolve", O(r, i), e.notify(r)
    }
    t.then(h(function(i) {
        o({
            response: i,
            responseType: i.type,
            status: i.status,
            isAborted: !1
        })
    }), h(function(i) {
        var a, s;
        o({
            status: 0,
            isAborted: ((s = (a = r.init) === null || a === void 0 ? void 0 : a.signal) === null || s === void 0 ? void 0 : s.aborted) || i instanceof DOMException && i.code === DOMException.ABORT_ERR,
            error: i
        })
    }))
}
var We = {};

function Si(e) {
    var t = e.map(function(n) {
        return We[n] || (We[n] = yi(n)), We[n]
    });
    return Pt.apply(void 0, t)
}

function yi(e) {
    return new _(function(t) {
        var n = A[e];
        return A[e] = function() {
                for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                n.apply(console, r);
                var i = Be();
                le(function() {
                    t.notify(Ei(r, e, i))
                })
            },
            function() {
                A[e] = n
            }
    })
}

function Ei(e, t, n) {
    var r = e.map(function(a) {
            return _i(a)
        }).join(" "),
        o;
    if (t === y.error) {
        var i = Pn(e, function(a) {
            return a instanceof Error
        });
        o = {
            stack: i ? $(N(i)) : void 0,
            fingerprint: Qt(i),
            causes: i ? en(i, "console") : void 0,
            startClocks: P(),
            message: r,
            source: C.CONSOLE,
            handling: "handled",
            handlingStack: n
        }
    }
    return {
        api: t,
        message: r,
        error: o,
        handlingStack: n
    }
}

function _i(e) {
    return typeof e == "string" ? I(e) : e instanceof Error ? Xt(N(e)) : X(I(e), void 0, 2)
}

function et(e) {
    var t = {},
        n = new _,
        r = {
            getContext: function() {
                return an(t)
            },
            setContext: function(o) {
                vt(o) === "object" ? (t = I(o), e.updateCustomerData(t)) : r.clearContext(), n.notify()
            },
            setContextProperty: function(o, i) {
                t[o] = I(i), e.updateCustomerData(t), n.notify()
            },
            removeContextProperty: function(o) {
                delete t[o], e.updateCustomerData(t), n.notify()
            },
            clearContext: function() {
                t = {}, e.resetCustomerData(), n.notify()
            },
            changeObservable: n
        };
    return r
}
var Oi = "_dd_c",
    Ci = [];

function _t(e, t, n, r) {
    var o = Ti(n, r);
    Ci.push(Z(e, window, "storage", function(c) {
        var u = c.key;
        o === u && i()
    })), t.changeObservable.subscribe(a), t.setContext(oe(s(), t.getContext()));

    function i() {
        t.setContext(s())
    }

    function a() {
        localStorage.setItem(o, JSON.stringify(t.getContext()))
    }

    function s() {
        var c = localStorage.getItem(o);
        return c !== null ? JSON.parse(c) : {}
    }
}

function Ti(e, t) {
    return "".concat(Oi, "_").concat(e, "_").concat(t)
}
var wi = 3 * k,
    Ri = 16 * k,
    xi = 200;

function Li(e) {
    e === void 0 && (e = 2);
    var t = new Map,
        n = !1;

    function r(o) {
        if (o === void 0 && (o = 0), !(n || e === 0)) {
            var i = e === 2 ? wi : Ri,
                a = o;
            t.forEach(function(s) {
                a += s.getBytesCount()
            }), a > i && (Ai(i), n = !0)
        }
    }
    return {
        createDetachedTracker: function() {
            var o = Ot(function() {
                return r(o.getBytesCount())
            });
            return o
        },
        getOrCreateTracker: function(o) {
            return t.has(o) || t.set(o, Ot(r)), t.get(o)
        },
        setCompressionStatus: function(o) {
            e === 0 && (e = o, r())
        },
        getCompressionStatus: function() {
            return e
        },
        stop: function() {
            t.forEach(function(o) {
                return o.stop()
            }), t.clear()
        }
    }
}

function Ot(e) {
    var t = 0,
        n = Bt(function(a) {
            t = nt(X(a)), e()
        }, xi),
        r = n.throttled,
        o = n.cancel,
        i = function() {
            o(), t = 0
        };
    return {
        updateCustomerData: function(a) {
            it(a) ? i() : r(a)
        },
        resetCustomerData: i,
        getBytesCount: function() {
            return t
        },
        stop: function() {
            o()
        }
    }
}

function Ai(e) {
    E.warn("Customer data exceeds the recommended ".concat(e / k, "KiB threshold. ").concat(Pe, " ").concat(Lt, "/#customer-data-exceeds-the-recommended-threshold-warning"))
}

function ki(e, t, n) {
    var r = e.getReader(),
        o = [],
        i = 0;
    a();

    function a() {
        r.read().then(h(function(c) {
            if (c.done) {
                s();
                return
            }
            o.push(c.value), i += c.value.length, i > n.bytesLimit ? s() : a()
        }), h(function(c) {
            return t(c)
        }))
    }

    function s() {
        r.cancel().catch(U);
        var c, u; {
            var f;
            if (o.length === 1) f = o[0];
            else {
                f = new Uint8Array(i);
                var l = 0;
                o.forEach(function(d) {
                    f.set(d, l), l += d.length
                })
            }
            c = f.slice(0, n.bytesLimit), u = f.length > n.bytesLimit
        }
        t(void 0, c, u)
    }
}
var Ii = "datadog-synthetics-public-id",
    Ni = "datadog-synthetics-result-id",
    Mi = "datadog-synthetics-injects-rum";

function _n() {
    return !!(window._DATADOG_SYNTHETICS_INJECTS_RUM || q(Mi))
}

function Ui() {
    var e = window._DATADOG_SYNTHETICS_PUBLIC_ID || q(Ii);
    return typeof e == "string" ? e : void 0
}

function Di() {
    var e = window._DATADOG_SYNTHETICS_RESULT_ID || q(Ni);
    return typeof e == "string" ? e : void 0
}

function Ct(e) {
    var t = O({}, e),
        n = ["id", "name", "email"];
    return n.forEach(function(r) {
        r in t && (t[r] = String(t[r]))
    }), t
}

function Pi(e) {
    var t = vt(e) === "object";
    return t || E.error("Unsupported user:", e), t
}
var w;

function De(e, t, n) {
    var r = n.getHandler(),
        o = Array.isArray(r) ? r : [r];
    return Tt[e] >= Tt[n.getLevel()] && ie(o, t)
}
var g = {
        ok: "ok",
        debug: "debug",
        info: "info",
        notice: "notice",
        warn: "warn",
        error: "error",
        critical: "critical",
        alert: "alert",
        emerg: "emerg"
    },
    Tt = (w = {}, w[g.ok] = 0, w[g.debug] = 1, w[g.info] = 2, w[g.notice] = 4, w[g.warn] = 5, w[g.error] = 6, w[g.critical] = 7, w[g.alert] = 8, w[g.emerg] = 9, w);

function Fe(e, t) {
    var n = t === void 0 ? {} : t,
        r = n.includeMessage,
        o = r === void 0 ? !1 : r;
    return {
        stack: e.stack,
        kind: e.type,
        message: o ? e.message : void 0,
        causes: e.causes,
        fingerprint: e.fingerprint,
        handling: e.handling
    }
}
var Bi = function(e, t, n, r) {
        var o = arguments.length,
            i = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r,
            a;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
        return o > 3 && i && Object.defineProperty(t, n, i), i
    },
    de = {
        console: "console",
        http: "http",
        silent: "silent"
    },
    Fi = Object.keys(g),
    x = function() {
        function e(t, n, r, o, i, a) {
            o === void 0 && (o = de.http), i === void 0 && (i = g.debug), a === void 0 && (a = {}), this.handleLogStrategy = t, this.handlerType = o, this.level = i, this.contextManager = et(n), this.contextManager.setContext(a), r && this.contextManager.setContextProperty("logger", {
                name: r
            })
        }
        return e.prototype.logImplementation = function(t, n, r, o, i) {
            r === void 0 && (r = g.info);
            var a = I(n),
                s;
            if (o != null) {
                var c = Zt({
                    stackTrace: o instanceof Error ? N(o) : void 0,
                    originalError: o,
                    nonErrorPrefix: "Provided",
                    source: C.LOGGER,
                    handling: "handled",
                    startClocks: P()
                });
                s = oe({
                    error: Fe(c, {
                        includeMessage: !0
                    })
                }, a)
            } else s = a;
            this.handleLogStrategy({
                message: I(t),
                context: s,
                status: r
            }, this, i)
        }, e.prototype.log = function(t, n, r, o) {
            r === void 0 && (r = g.info);
            var i;
            De(r, de.http, this) && (i = Be()), this.logImplementation(t, n, r, o, i)
        }, e.prototype.setContext = function(t) {
            this.contextManager.setContext(t)
        }, e.prototype.getContext = function() {
            return this.contextManager.getContext()
        }, e.prototype.setContextProperty = function(t, n) {
            this.contextManager.setContextProperty(t, n)
        }, e.prototype.removeContextProperty = function(t) {
            this.contextManager.removeContextProperty(t)
        }, e.prototype.clearContext = function() {
            this.contextManager.clearContext()
        }, e.prototype.setHandler = function(t) {
            this.handlerType = t
        }, e.prototype.getHandler = function() {
            return this.handlerType
        }, e.prototype.setLevel = function(t) {
            this.level = t
        }, e.prototype.getLevel = function() {
            return this.level
        }, Bi([qn], e.prototype, "logImplementation", null), e
    }();
x.prototype.ok = M(g.ok);
x.prototype.debug = M(g.debug);
x.prototype.info = M(g.info);
x.prototype.notice = M(g.notice);
x.prototype.warn = M(g.warn);
x.prototype.error = M(g.error);
x.prototype.critical = M(g.critical);
x.prototype.alert = M(g.alert);
x.prototype.emerg = M(g.emerg);

function M(e) {
    return function(t, n, r) {
        var o;
        De(e, de.http, this) && (o = Be()), this.logImplementation(t, n, e, r, o)
    }
}

function Gi(e, t) {
    return {
        view: {
            referrer: document.referrer,
            url: window.location.href
        },
        context: e.getContext(),
        user: t.getContext()
    }
}
var ji = 32 * k;

function Hi(e) {
    e.usePciIntake === !0 && e.site && e.site !== "datadoghq.com" && E.warn("PCI compliance for Logs is only available for Datadog organizations in the US1 site. Default intake will be used.");
    var t = Gr(e),
        n = wt(e.forwardConsoleLogs, te(y), "Forward Console Logs"),
        r = wt(e.forwardReports, te(Ie), "Forward Reports");
    if (!(!t || !n || !r)) return e.forwardErrorsToLogs && !ie(n, y.error) && n.push(y.error), O({
        forwardErrorsToLogs: e.forwardErrorsToLogs !== !1,
        forwardConsoleLogs: n,
        forwardReports: r,
        requestErrorResponseLengthLimit: ji,
        sendLogsAfterSessionExpiration: !!e.sendLogsAfterSessionExpiration
    }, t)
}

function wt(e, t, n) {
    if (e === void 0) return [];
    if (!(e === "all" || Array.isArray(e) && e.every(function(r) {
            return ie(t, r)
        }))) {
        E.error("".concat(n, ' should be "all" or an array with allowed values "').concat(t.join('", "'), '"'));
        return
    }
    return e === "all" ? t : wo(e)
}

function zi(e) {
    var t = jr(e);
    return O({
        forward_errors_to_logs: e.forwardErrorsToLogs,
        forward_console_logs: e.forwardConsoleLogs,
        forward_reports: e.forwardReports,
        use_pci_intake: e.usePciIntake,
        send_logs_after_session_expiration: e.sendLogsAfterSessionExpiration
    }, t)
}

function qi(e, t, n) {
    var r = un(),
        o, i, a = t.observable.subscribe(s);

    function s() {
        if (!(!i || !o || !t.isGranted())) {
            a.unsubscribe();
            var c = n(o, i);
            r.drain(c)
        }
    }
    return {
        init: function(c) {
            if (!c) {
                E.error("Missing configuration");
                return
            }
            if (Hr(c.enableExperimentalFeatures), Me() && (c = Yi(c)), o = c, i) {
                tn("DD_LOGS", c);
                return
            }
            var u = Hi(c);
            u && (i = u, En().subscribe(U), t.tryToInit(u.trackingConsent), s())
        },
        get initConfiguration() {
            return o
        },
        getInternalContext: U,
        handleLog: function(c, u, f, l, d) {
            l === void 0 && (l = e()), d === void 0 && (d = D()), r.add(function(v) {
                return v.handleLog(c, u, f, l, d)
            })
        }
    }
}

function Yi(e) {
    return O({}, e, {
        clientToken: "empty"
    })
}
var Rt = "logs";

function Ki(e) {
    var t = Li(),
        n = et(t.getOrCreateTracker(2)),
        r = et(t.getOrCreateTracker(1)),
        o = Or();

    function i() {
        return Gi(n, r)
    }
    var a = qi(i, o, function(u, f) {
            u.storeContextsAcrossPages && (_t(f, n, Rt, 2), _t(f, r, Rt, 1));
            var l = e(u, f, i, o);
            return a = Vi(u, l), l
        }),
        s = {},
        c = new x(function() {
            for (var u = [], f = 0; f < arguments.length; f++) u[f] = arguments[f];
            return a.handleLog.apply(a, u)
        }, t.createDetachedTracker());
    return bo({
        logger: c,
        init: h(function(u) {
            return a.init(u)
        }),
        setTrackingConsent: h(function(u) {
            o.update(u), Uo({
                feature: "set-tracking-consent",
                tracking_consent: u
            })
        }),
        getGlobalContext: h(function() {
            return n.getContext()
        }),
        setGlobalContext: h(function(u) {
            return n.setContext(u)
        }),
        setGlobalContextProperty: h(function(u, f) {
            return n.setContextProperty(u, f)
        }),
        removeGlobalContextProperty: h(function(u) {
            return n.removeContextProperty(u)
        }),
        clearGlobalContext: h(function() {
            return n.clearContext()
        }),
        createLogger: h(function(u, f) {
            return f === void 0 && (f = {}), s[u] = new x(function() {
                for (var l = [], d = 0; d < arguments.length; d++) l[d] = arguments[d];
                return a.handleLog.apply(a, l)
            }, t.createDetachedTracker(), I(u), f.handler, f.level, I(f.context)), s[u]
        }),
        getLogger: h(function(u) {
            return s[u]
        }),
        getInitConfiguration: h(function() {
            return an(a.initConfiguration)
        }),
        getInternalContext: h(function(u) {
            return a.getInternalContext(u)
        }),
        setUser: h(function(u) {
            Pi(u) && r.setContext(Ct(u))
        }),
        getUser: h(function() {
            return r.getContext()
        }),
        setUserProperty: h(function(u, f) {
            var l, d = Ct((l = {}, l[u] = f, l))[u];
            r.setContextProperty(u, d)
        }),
        removeUserProperty: h(function(u) {
            return r.removeContextProperty(u)
        }),
        clearUser: h(function() {
            return r.clearContext()
        })
    })
}

function Vi(e, t) {
    return O({
        init: function(n) {
            tn("DD_LOGS", n)
        },
        initConfiguration: e
    }, t)
}
var Ji = "logs";

function Wi(e, t) {
    var n = Ho(e, Ji, function(r) {
        return $i(e, r)
    }, t);
    return {
        findTrackedSession: function(r, o) {
            o === void 0 && (o = {
                returnInactive: !1
            });
            var i = n.findSession(r, o);
            return i && i.trackingType === "1" ? {
                id: i.id
            } : void 0
        },
        expireObservable: n.expireObservable
    }
}

function Xi(e) {
    var t = On(e) === "1",
        n = t ? {} : void 0;
    return {
        findTrackedSession: function() {
            return n
        },
        expireObservable: new _
    }
}

function On(e) {
    return Oe(e.sessionSampleRate) ? "1" : "0"
}

function $i(e, t) {
    var n = Zi(t) ? t : On(e);
    return {
        trackingType: n,
        isTracked: n === "1"
    }
}

function Zi(e) {
    return e === "0" || e === "1"
}
var xt = !1;

function Re(e) {
    var t = window;
    if (_n()) {
        var n = r(t.DD_RUM_SYNTHETICS);
        return !n && !xt && (xt = !0, fn("Logs sent before RUM is injected by the synthetics worker", {
            testId: Ui(),
            resultId: Di()
        })), n
    }
    return r(t.DD_RUM);

    function r(o) {
        if (o && o.getInternalContext) return o.getInternalContext(e)
    }
}

function Qi(e, t, n, r, o) {
    var i = Fi.concat(["custom"]),
        a = {};
    i.forEach(function(s) {
        a[s] = fi(s, t.eventRateLimiterThreshold, o)
    }), n.subscribe(0, function(s) {
        var c, u, f = s.rawLogsEvent,
            l = s.messageContext,
            d = l === void 0 ? void 0 : l,
            v = s.savedCommonContext,
            b = v === void 0 ? void 0 : v,
            p = s.domainContext,
            S = Un(f.date),
            T = e.findTrackedSession(S);
        if (!(!T && (!t.sendLogsAfterSessionExpiration || !e.findTrackedSession(S, {
                returnInactive: !0
            })))) {
            var L = b || r(),
                Q = oe({
                    service: t.service,
                    session_id: T ? T.id : void 0,
                    usr: it(L.user) ? void 0 : L.user,
                    view: L.view
                }, L.context, Re(S), f, d);
            ((c = t.beforeSend) === null || c === void 0 ? void 0 : c.call(t, Q, p)) === !1 || Q.origin !== C.AGENT && ((u = a[Q.status]) !== null && u !== void 0 ? u : a.custom).isLimitReached() || n.notify(1, Q)
        }
    })
}
var G, ea = (G = {}, G[y.log] = g.info, G[y.debug] = g.debug, G[y.info] = g.info, G[y.warn] = g.warn, G[y.error] = g.error, G);

function ta(e, t) {
    var n = Si(e.forwardConsoleLogs).subscribe(function(r) {
        var o = {
            rawLogsEvent: {
                date: D(),
                message: r.message,
                origin: C.CONSOLE,
                error: r.error && Fe(r.error),
                status: ea[r.api]
            },
            domainContext: {
                handlingStack: r.handlingStack
            }
        };
        t.notify(0, o)
    });
    return {
        stop: function() {
            n.unsubscribe()
        }
    }
}

function na(e, t) {
    var n = So(e, e.forwardReports).subscribe(function(r) {
        var o = r.message,
            i, a = r.originalError.type === "deprecation" ? g.warn : g.error;
        a === g.error ? i = Fe(r) : r.stack && (o += " Found in ".concat(vo(r.stack))), t.notify(0, {
            rawLogsEvent: {
                date: D(),
                message: o,
                origin: C.REPORT,
                error: i,
                status: a
            }
        })
    });
    return {
        stop: function() {
            n.unsubscribe()
        }
    }
}

function ra(e, t) {
    if (!e.forwardErrorsToLogs) return {
        stop: U
    };
    var n = li(e).subscribe(function(i) {
            i.state === "complete" && o("xhr", i)
        }),
        r = En().subscribe(function(i) {
            i.state === "resolve" && o("fetch", i)
        });

    function o(i, a) {
        !e.isIntakeUrl(a.url) && (sa(a) || dn(a.status)) && ("xhr" in a ? oa(a.xhr, e, s) : a.response ? aa(a.response, e, s) : a.error && ia(a.error, e, s));

        function s(c) {
            var u = {
                isAborted: a.isAborted,
                handlingStack: a.handlingStack
            };
            t.notify(0, {
                rawLogsEvent: {
                    message: "".concat(ua(i), " error ").concat(a.method, " ").concat(a.url),
                    date: a.startClocks.timeStamp,
                    error: {
                        stack: c || "Failed to load",
                        handling: void 0
                    },
                    http: {
                        method: a.method,
                        status_code: a.status,
                        url: a.url
                    },
                    status: g.error,
                    origin: C.NETWORK
                },
                domainContext: u
            })
        }
    }
    return {
        stop: function() {
            n.unsubscribe(), r.unsubscribe()
        }
    }
}

function oa(e, t, n) {
    typeof e.response == "string" ? n(mt(e.response, t)) : n(e.response)
}

function ia(e, t, n) {
    n(mt($(N(e)), t))
}

function aa(e, t, n) {
    var r = Ko(e);
    !r || !r.body ? n() : window.TextDecoder ? ca(r.body, t.requestErrorResponseLengthLimit, function(o, i) {
        n(o ? "Unable to retrieve response: ".concat(o) : i)
    }) : r.text().then(h(function(o) {
        return n(mt(o, t))
    }), h(function(o) {
        return n("Unable to retrieve response: ".concat(o))
    }))
}

function sa(e) {
    return e.status === 0 && e.responseType !== "opaque"
}

function mt(e, t) {
    return e.length > t.requestErrorResponseLengthLimit ? "".concat(e.substring(0, t.requestErrorResponseLengthLimit), "...") : e
}

function ua(e) {
    return e === "xhr" ? "XHR" : "Fetch"
}

function ca(e, t, n) {
    ki(e, function(r, o, i) {
        if (r) n(r);
        else {
            var a = new TextDecoder().decode(o);
            i && (a += "..."), n(void 0, a)
        }
    }, {
        bytesLimit: t,
        collectStreamBody: !0
    })
}

function fa(e, t) {
    if (!e.forwardErrorsToLogs) return {
        stop: U
    };
    var n = new _,
        r = po(n).stop,
        o = n.subscribe(function(i) {
            t.notify(0, {
                rawLogsEvent: {
                    message: i.message,
                    date: i.startClocks.timeStamp,
                    error: Fe(i),
                    origin: C.SOURCE,
                    status: g.error
                }
            })
        });
    return {
        stop: function() {
            r(), o.unsubscribe()
        }
    }
}
var la = ci,
    R;

function da(e) {
    function t(n, r, o, i, a) {
        var s = oe(r.getContext(), n.context);
        if (De(n.status, de.console, r) && pa(n, s), De(n.status, de.http, r)) {
            var c = {
                rawLogsEvent: {
                    date: a || D(),
                    message: n.message,
                    status: n.status,
                    origin: C.LOGGER
                },
                messageContext: s,
                savedCommonContext: i
            };
            o && (c.domainContext = {
                handlingStack: o
            }), e.notify(0, c)
        }
    }
    return {
        handleLog: t
    }
}
var va = (R = {}, R[g.ok] = y.debug, R[g.debug] = y.debug, R[g.info] = y.info, R[g.notice] = y.info, R[g.warn] = y.warn, R[g.error] = y.error, R[g.critical] = y.error, R[g.alert] = y.error, R[g.emerg] = y.error, R);

function pa(e, t) {
    var n = e.status,
        r = e.message;
    j[va[n]].call(A, r, t)
}

function ga(e, t, n, r, o) {
    var i = yn(e, {
        endpoint: e.logsEndpointBuilder,
        encoder: Ue()
    }, e.replica && {
        endpoint: e.replica.logsEndpointBuilder,
        encoder: Ue()
    }, n, r, o.expireObservable);
    return t.subscribe(1, function(a) {
        i.add(a)
    }), i
}

function ma(e) {
    var t = pt();
    e.subscribe(1, function(n) {
        t.send("log", n)
    })
}

function ba(e) {
    return {
        get: function(t) {
            var n = e.findTrackedSession(t);
            if (n) return {
                session_id: n.id
            }
        }
    }
}

function ha(e) {
    return function(t) {
        e.notify(0, {
            rawLogsEvent: {
                message: t.message,
                date: t.startClocks.timeStamp,
                origin: C.AGENT,
                status: g.error
            }
        }), fn("Error reported to customer", {
            "error.message": t.message
        })
    }
}

function Sa(e, t, n, r, o) {
    var i = Ao("browser-logs-sdk", t);
    i.setContextProvider(function() {
        var l, d, v, b, p, S;
        return {
            application: {
                id: (l = Re()) === null || l === void 0 ? void 0 : l.application_id
            },
            session: {
                id: (d = o.findTrackedSession()) === null || d === void 0 ? void 0 : d.id
            },
            view: {
                id: (b = (v = Re()) === null || v === void 0 ? void 0 : v.view) === null || b === void 0 ? void 0 : b.id
            },
            action: {
                id: (S = (p = Re()) === null || p === void 0 ? void 0 : p.user_action) === null || S === void 0 ? void 0 : S.id
            }
        }
    });
    var a = [];
    if (Me()) {
        var s = pt(),
            c = i.observable.subscribe(function(l) {
                return s.send("internal_telemetry", l)
            });
        a.push(function() {
            return c.unsubscribe()
        })
    } else {
        var u = yn(t, {
            endpoint: t.rumEndpointBuilder,
            encoder: Ue()
        }, t.replica && {
            endpoint: t.replica.rumEndpointBuilder,
            encoder: Ue()
        }, n, r, o.expireObservable);
        a.push(function() {
            return u.stop()
        });
        var f = i.observable.subscribe(function(l) {
            return u.add(l, No(t))
        });
        a.push(function() {
            return f.unsubscribe()
        })
    }
    return Io(), Mo(zi(e)), {
        telemetry: i,
        stop: function() {
            a.forEach(function(l) {
                return l()
            })
        }
    }
}

function ya(e, t, n, r) {
    var o = new la,
        i = [];
    o.subscribe(1, function(v) {
        return on("logs", v)
    });
    var a = ha(o),
        s = ii(t),
        c = t.sessionStoreStrategyType && !Me() && !_n() ? Wi(t, r) : Xi(t),
        u = Sa(e, t, a, s, c).stop;
    i.push(function() {
        return u()
    }), ra(t, o), fa(t, o), ta(t, o), na(t, o);
    var f = da(o).handleLog;
    if (Qi(c, t, o, n, a), Me()) ma(o);
    else {
        var l = ga(t, o, a, s, c).stop;
        i.push(function() {
            return l()
        })
    }
    var d = ba(c);
    return {
        handleLog: f,
        getInternalContext: d.get,
        stop: function() {
            i.forEach(function(v) {
                return v()
            })
        }
    }
}
var Ea = Ki(ya);
ho(B(), "DD_LOGS", Ea);
export {
    de as HandlerType, x as Logger, g as StatusType, Ea as datadogLogs
};
//# sourceMappingURL=fgss2wd111ne0imn.js.map
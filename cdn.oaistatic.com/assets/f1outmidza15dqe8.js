import {
    aF as s
} from "./hbhpmx2ipkndwudc.js";

function J(e, n) {
    for (var i = 0; i < n.length; i++) {
        const o = n[i];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const r in o)
                if (r !== "default" && !(r in e)) {
                    const f = Object.getOwnPropertyDescriptor(o, r);
                    f && Object.defineProperty(e, r, f.get ? f : {
                        enumerable: !0,
                        get: () => o[r]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var t = {},
    v = {};
Object.defineProperty(v, "__esModule", {
    value: !0
});
v.Regions = void 0;
var I;
(function(e) {
    e.US = "us", e.EU = "eu", e.AP = "ap"
})(I || (v.Regions = I = {}));
var _ = {},
    K = s && s.__createBinding || (Object.create ? function(e, n, i, o) {
        o === void 0 && (o = i);
        var r = Object.getOwnPropertyDescriptor(n, i);
        (!r || ("get" in r ? !n.__esModule : r.writable || r.configurable)) && (r = {
            enumerable: !0,
            get: function() {
                return n[i]
            }
        }), Object.defineProperty(e, o, r)
    } : function(e, n, i, o) {
        o === void 0 && (o = i), e[o] = n[i]
    }),
    Q = s && s.__setModuleDefault || (Object.create ? function(e, n) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: n
        })
    } : function(e, n) {
        e.default = n
    }),
    W = s && s.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
            for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && K(n, e, i);
        return Q(n, e), n
    };
Object.defineProperty(_, "__esModule", {
    value: !0
});
_.regionAPIs = void 0;
const b = W(v);
_.regionAPIs = {
    [b.Regions.US]: "https://api-iam.intercom.io",
    [b.Regions.EU]: "https://api-iam.eu.intercom.io",
    [b.Regions.AP]: "https://api-iam.au.intercom.io"
};
var O = {};
(function(e) {
    var n = s && s.__awaiter || function(r, f, g, u) {
        function h(c) {
            return c instanceof g ? c : new g(function(d) {
                d(c)
            })
        }
        return new(g || (g = Promise))(function(c, d) {
            function w(l) {
                try {
                    m(u.next(l))
                } catch (y) {
                    d(y)
                }
            }

            function p(l) {
                try {
                    m(u.throw(l))
                } catch (y) {
                    d(y)
                }
            }

            function m(l) {
                l.done ? c(l.value) : h(l.value).then(w, p)
            }
            m((u = u.apply(r, f || [])).next())
        })
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getIntercomRef = e.ref = e.init = void 0;
    const i = () => n(void 0, void 0, void 0, function*() {
        var r = window,
            f = r.Intercom;
        if (r.intercomSettings && (r.intercomSettings.installation_type = "npm-package"), typeof f == "function") f("reattach_activator"), f("update", r.intercomSettings);
        else {
            var g = document,
                u = function() {
                    u.c(arguments)
                };
            u.q = [], u.c = function(c) {
                u.q.push(c)
            }, r.Intercom = u;
            var h = function() {
                var c, d, w = g.createElement("script");
                w.type = "text/javascript", w.async = !0, w.src = "https://widget.intercom.io/widget/" + ((c = window.intercomSettings) === null || c === void 0 ? void 0 : c.app_id);
                var p = g.getElementsByTagName("script")[0];
                (d = p.parentNode) === null || d === void 0 || d.insertBefore(w, p)
            };
            document.readyState === "complete" ? h() : r.attachEvent ? r.attachEvent("onload", h) : r.addEventListener("load", h, !1)
        }
    });
    e.init = i, e.ref = void 0;
    const o = () => (typeof window < "u" && !e.ref && (e.ref = window.Intercom), !e.ref || typeof window > "u" ? (console.warn("Intercom not booted or setup incomplete."), typeof window > "u" && console.warn("Are you sure you are running on client-side?"), () => {}) : e.ref);
    e.getIntercomRef = o
})(O);
var X = s && s.__createBinding || (Object.create ? function(e, n, i, o) {
        o === void 0 && (o = i);
        var r = Object.getOwnPropertyDescriptor(n, i);
        (!r || ("get" in r ? !n.__esModule : r.writable || r.configurable)) && (r = {
            enumerable: !0,
            get: function() {
                return n[i]
            }
        }), Object.defineProperty(e, o, r)
    } : function(e, n, i, o) {
        o === void 0 && (o = i), e[o] = n[i]
    }),
    Y = s && s.__setModuleDefault || (Object.create ? function(e, n) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: n
        })
    } : function(e, n) {
        e.default = n
    }),
    Z = s && s.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (e != null)
            for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && X(n, e, i);
        return Y(n, e), n
    },
    x = s && s.__rest || function(e, n) {
        var i = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (i[o] = e[o]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (i[o[r]] = e[o[r]]);
        return i
    };
Object.defineProperty(t, "__esModule", {
    value: !0
});
var R = t.onUserEmailSupplied = L = t.showConversation = G = t.showTicket = F = t.startChecklist = z = t.startSurvey = q = t.showNews = k = t.showArticle = $ = t.startTour = V = t.getVisitorId = H = t.trackEvent = B = t.onUnreadCountChange = D = t.onShow = N = t.onHide = A = t.showNewMessage = T = t.showMessages = U = t.showSpace = E = t.show = P = t.hide = C = t.update = M = t.shutdown = j = t.boot = void 0;
const ee = Z(v),
    S = _,
    a = O,
    te = e => {
        var {
            region: n = ee.Regions.US
        } = e, i = x(e, ["region"]);
        typeof window < "u" && !a.ref && (window.intercomSettings = Object.assign(Object.assign({}, i), {
            api_base: n && S.regionAPIs[n] || S.regionAPIs.us
        }), (0, a.init)())
    };
var ne = t.default = te;
const re = e => {
    (0, a.getIntercomRef)()("boot", e)
};
var j = t.boot = re;
const oe = () => {
    (0, a.getIntercomRef)()("shutdown")
};
var M = t.shutdown = oe;
const ie = e => {
    (0, a.getIntercomRef)()("update", e)
};
var C = t.update = ie;
const ae = () => {
    (0, a.getIntercomRef)()("hide")
};
var P = t.hide = ae;
const se = () => {
    (0, a.getIntercomRef)()("show")
};
var E = t.show = se;
const ce = e => {
    (0, a.getIntercomRef)()("showSpace", e)
};
var U = t.showSpace = ce;
const ue = () => {
    (0, a.getIntercomRef)()("showMessages")
};
var T = t.showMessages = ue;
const fe = e => {
    (0, a.getIntercomRef)()("showNewMessage", e)
};
var A = t.showNewMessage = fe;
const de = e => {
    (0, a.getIntercomRef)()("onHide", e)
};
var N = t.onHide = de;
const ge = e => {
    (0, a.getIntercomRef)()("onShow", e)
};
var D = t.onShow = ge;
const le = e => {
    (0, a.getIntercomRef)()("onUnreadCountChange", e)
};
var B = t.onUnreadCountChange = le;
const we = (...e) => {
    (0, a.getIntercomRef)()("trackEvent", ...e)
};
var H = t.trackEvent = we;
const he = () => {
    (0, a.getIntercomRef)()("getVisitorId")
};
var V = t.getVisitorId = he;
const ve = e => {
    (0, a.getIntercomRef)()("startTour", e)
};
var $ = t.startTour = ve;
const pe = e => {
    (0, a.getIntercomRef)()("showArticle", e)
};
var k = t.showArticle = pe;
const _e = e => {
    (0, a.getIntercomRef)()("showNews", e)
};
var q = t.showNews = _e;
const me = e => {
    (0, a.getIntercomRef)()("startSurvey", e)
};
var z = t.startSurvey = me;
const ye = e => {
    (0, a.getIntercomRef)()("startChecklist", e)
};
var F = t.startChecklist = ye;
const be = e => {
    (0, a.getIntercomRef)()("showTicket", e)
};
var G = t.showTicket = be;
const Ie = e => {
    (0, a.getIntercomRef)()("showConversation", e)
};
var L = t.showConversation = Ie;
const Se = e => {
    (0, a.getIntercomRef)()("onUserEmailSupplied", e)
};
R = t.onUserEmailSupplied = Se;
const Re = J({
    __proto__: null,
    get boot() {
        return j
    },
    default: ne,
    get getVisitorId() {
        return V
    },
    get hide() {
        return P
    },
    get onHide() {
        return N
    },
    get onShow() {
        return D
    },
    get onUnreadCountChange() {
        return B
    },
    get onUserEmailSupplied() {
        return R
    },
    get show() {
        return E
    },
    get showArticle() {
        return k
    },
    get showConversation() {
        return L
    },
    get showMessages() {
        return T
    },
    get showNewMessage() {
        return A
    },
    get showNews() {
        return q
    },
    get showSpace() {
        return U
    },
    get showTicket() {
        return G
    },
    get shutdown() {
        return M
    },
    get startChecklist() {
        return F
    },
    get startSurvey() {
        return z
    },
    get startTour() {
        return $
    },
    get trackEvent() {
        return H
    },
    get update() {
        return C
    }
}, [t]);
export {
    Re as i
};
//# sourceMappingURL=f1outmidza15dqe8.js.map
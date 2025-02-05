import {
    cY as d,
    cZ as rt,
    c_ as ce,
    c$ as x,
    d0 as ot,
    d1 as at,
    d2 as m,
    d3 as l,
    d4 as n,
    d5 as se,
    d6 as ie,
    d7 as lt,
    d8 as nt,
    d9 as ct,
    da as st,
    db as it,
    dc as ut,
    dd as dt,
    de as ft,
    df as vt,
    dg as mt,
    dh as xe,
    di as ht,
    dj as gt,
    dk as Ke,
    dl as pt,
    dm as bt,
    dn as Me,
    dp as St,
    dq as Tt,
    dr as Ct,
    ds as wt,
    dt as Et,
    du as yt
} from "./ab2oz9enzsoo3wow.js";
import {
    r as c,
    aG as S
} from "./hbhpmx2ipkndwudc.js";

function Le(f, t) {
    var v = bt(f);
    if (Me) {
        var h = Me(f);
        t && (h = St(h).call(h, function(p) {
            return Ke(f, p).enumerable
        })), v.push.apply(v, h)
    }
    return v
}

function $e(f) {
    for (var t = 1; t < arguments.length; t++) {
        var v = arguments[t] != null ? arguments[t] : {};
        if (t % 2) {
            var h;
            ie(h = Le(Object(v), !0)).call(h, function(g) {
                mt(f, g, v[g])
            })
        } else if (xe) ht(f, xe(v));
        else {
            var p;
            ie(p = Le(Object(v))).call(p, function(g) {
                gt(f, g, Ke(v, g))
            })
        }
    }
    return f
}
var _t = function() {
        return 1 / 0
    },
    De = 17,
    Ht = "bottom",
    C = "top",
    Ve = 1,
    Bt = 34,
    je = {};

function Nt(f, t) {
    return f(), pt(f, t)
}

function Fe(f) {
    var t = f.mode,
        v = f.target,
        h = v.offsetHeight,
        p = v.scrollHeight,
        g = v.scrollTop,
        E = p - g - h < Ve,
        r = g < Ve,
        _ = t === C ? r : E,
        M = t !== C ? r : E;
    return {
        atBottom: E,
        atEnd: _,
        atStart: M,
        atTop: r
    }
}

function U(f, t) {
    return f === (t === C ? 0 : "100%")
}
var ue = function(t) {
    var v = t.checkInterval,
        h = t.children,
        p = t.debounce,
        g = t.debug,
        E = t.initialScrollBehavior,
        r = t.mode,
        _ = t.nonce,
        M = t.scroller,
        s = c.useMemo(function() {
            return rt("<ScrollToBottom>", {
                force: g
            })
        }, [g]);
    r = r === C ? C : Ht;
    var L = c.useRef(0),
        W = c.useRef(E),
        We = ce(r === C ? 0 : "100%"),
        J = x(We, 3),
        O = J[0],
        Y = J[1],
        $ = J[2],
        Ye = ce(null),
        Q = x(Ye, 3),
        b = Q[0],
        fe = Q[1],
        w = Q[2],
        X = c.useRef(0),
        A = c.useRef(0),
        q = c.useRef(0),
        qe = c.useState(!0),
        ve = x(qe, 2),
        me = ve[0],
        he = ve[1],
        ze = c.useState(!0),
        ge = x(ze, 2),
        pe = ge[0],
        be = ge[1],
        Ge = c.useState(!0),
        Se = x(Ge, 2),
        Te = Se[0],
        Ce = Se[1],
        Ze = c.useState(!1),
        we = x(Ze, 2),
        Ee = we[0],
        ye = we[1],
        Je = ce(!0),
        ee = x(Je, 3),
        te = ee[0],
        H = ee[1],
        B = ee[2],
        K = c.useRef([]),
        _e = c.useCallback(function(e) {
            var a = w.current;
            return K.current.push(e), a && e({
                    scrollTop: a.scrollTop
                }),
                function() {
                    var o = K.current,
                        i = ot(o).call(o, e);
                    ~i && at(o).call(o, i, 1)
                }
        }, [K, w]),
        re = c.useCallback(function() {
            var e = $.current;
            s(function() {
                var a;
                return m(a = ["%cSpineTo%c: %conEnd%c is fired."]).call(a, l(n("magenta")), l(n("orange")), [{
                    animateTo: e
                }])
            }), L.current = se(), U(e, r) || H(!1), Y(null)
        }, [$, s, L, r, Y, H]),
        N = c.useCallback(function(e) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                o = a.behavior,
                i = w.current;
            if (typeof e != "number" && e !== "100%") return console.warn('react-scroll-to-bottom: Arguments passed to scrollTo() must be either number or "100%".');
            s(function() {
                var u;
                return [m(u = ["%cscrollTo%c: Will scroll to %c".concat(typeof e == "number" ? e + "px" : e.replace(/%/g, "%%"), "%c")]).call(u, l(n("lime", "")), l(n("purple"))), {
                    behavior: o,
                    nextAnimateTo: e,
                    target: i
                }]
            }), o === "auto" ? (re(), i && (i.scrollTop = e === "100%" ? i.scrollHeight - i.offsetHeight : e)) : (o !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollTo". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'), Y(e)), U(e, r) && (s(function() {
                var u;
                return [m(u = ["%cscrollTo%c: Scrolling to end, will set sticky to %ctrue%c."]).call(u, l(n("lime", "")), l(n("purple"))), [{
                    mode: r,
                    nextAnimateTo: e
                }]]
            }), H(!0))
        }, [s, re, r, Y, H, w]),
        D = c.useCallback(function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                a = e.behavior;
            s(function() {
                var o;
                return m(o = ["%cscrollToBottom%c: Called"]).call(o, l(n("yellow", "")))
            }), a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToBottom". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'), N("100%", {
                behavior: a || "smooth"
            })
        }, [s, N]),
        V = c.useCallback(function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                a = e.behavior;
            s(function() {
                var o;
                return m(o = ["%cscrollToTop%c: Called"]).call(o, l(n("yellow", "")))
            }), a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToTop". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'), N(0, {
                behavior: a || "smooth"
            })
        }, [s, N]),
        He = c.useCallback(function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                a = e.behavior;
            s(function() {
                var i;
                return m(i = ["%cscrollToEnd%c: Called"]).call(i, l(n("yellow", "")))
            }), a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToEnd". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');
            var o = {
                behavior: a || "smooth"
            };
            r === C ? V(o) : D(o)
        }, [s, r, D, V]),
        Be = c.useCallback(function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                a = e.behavior;
            s(function() {
                var i;
                return m(i = ["%cscrollToStart%c: Called"]).call(i, l(n("yellow", "")))
            }), a !== "smooth" && console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToStart". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');
            var o = {
                behavior: a || "smooth"
            };
            r === C ? D(o) : V(o)
        }, [s, r, D, V]),
        z = c.useCallback(function() {
            var e = w.current;
            if (e) {
                if (W.current === "auto") {
                    s(function() {
                        var P;
                        return m(P = ["%ctarget changed%c: Initial scroll"]).call(P, l(n("blue")))
                    }), e.scrollTop = r === C ? 0 : e.scrollHeight - e.offsetHeight, W.current = !1;
                    return
                }
                var a = X.current,
                    o = e.offsetHeight,
                    i = e.scrollHeight,
                    u = e.scrollTop,
                    y = r === C ? 0 : Math.max(0, i - o - u),
                    k = Math.max(0, a - u),
                    G = M({
                        maxValue: y,
                        minValue: k,
                        offsetHeight: o,
                        scrollHeight: i,
                        scrollTop: u
                    }),
                    R = Math.max(0, Math.min(y, G)),
                    T;
                r === C || R !== y ? T = u + R : T = "100%", s(function() {
                    var P, j, F;
                    return [m(P = [m(j = m(F = "%cscrollToSticky%c: Will animate from %c".concat(a, "px%c to %c")).call(F, typeof T == "number" ? T + "px" : T.replace(/%/g, "%%"), "%c (%c")).call(j, (T === "100%" ? y : T) + a, "px%c)")]).call(P, l(n("orange")), l(n("purple")), l(n("purple")), l(n("purple"))), {
                        animateFrom: a,
                        maxValue: y,
                        minValue: k,
                        nextAnimateTo: T,
                        nextValue: R,
                        offsetHeight: o,
                        rawNextValue: G,
                        scrollHeight: i,
                        scrollTop: u
                    }]
                }), N(T, {
                    behavior: "smooth"
                })
            }
        }, [X, s, r, M, N, w]),
        Qe = c.useCallback(function(e) {
            var a, o = e.timeStampLow,
                i = $.current,
                u = w.current,
                y = i !== null;
            if (!(o <= L.current || !u)) {
                var k = Fe({
                        mode: r,
                        target: u
                    }),
                    G = k.atBottom,
                    R = k.atEnd,
                    T = k.atStart,
                    P = k.atTop;
                he(G), be(R), ye(T), Ce(P);
                var j = u.offsetHeight,
                    F = u.scrollHeight,
                    Re = A.current,
                    Oe = q.current,
                    le = j !== Re,
                    ne = F !== Oe;
                if (le && (A.current = j), ne && (q.current = F), !le && !ne) {
                    var Z = y && U(i, r) || R;
                    B.current !== Z && (s(function() {
                        var I, ke, Pe, Ie;
                        return [m(I = ["%conScroll%c: %csetSticky%c(%c".concat(Z, "%c)")]).call(I, l(n("red")), l(n("red")), l(n("purple"))), m(ke = [m(Pe = m(Ie = "(animating = %c".concat(y, "%c && isEnd = %c")).call(Ie, U(i, r), "%c) || atEnd = %c")).call(Pe, R, "%c")]).call(ke, l(n("purple")), l(n("purple")), l(n("purple")), [{
                            animating: y,
                            animateTo: i,
                            atEnd: R,
                            mode: r,
                            offsetHeight: u.offsetHeight,
                            scrollHeight: u.scrollHeight,
                            sticky: B.current,
                            nextSticky: Z
                        }])]
                    }), H(Z))
                } else B.current && (s(function() {
                    var I;
                    return [m(I = ["%conScroll%c: Size changed while sticky, calling %cscrollToSticky()%c"]).call(I, l(n("red")), l(n("orange")), [{
                        offsetHeightChanged: le,
                        scrollHeightChanged: ne
                    }]), {
                        nextOffsetHeight: j,
                        prevOffsetHeight: Re,
                        nextScrollHeight: F,
                        prevScrollHeight: Oe
                    }]
                }), z());
                var tt = u.scrollTop;
                ie(a = K.current).call(a, function(I) {
                    return I({
                        scrollTop: tt
                    })
                })
            }
        }, [$, s, L, r, A, q, K, z, he, be, ye, Ce, H, B, w]);
    c.useEffect(function() {
        if (b) {
            var e = !1,
                a = Nt(function() {
                    var o = w.current,
                        i = $.current !== null;
                    B.current ? Fe({
                        mode: r,
                        target: o
                    }).atEnd ? e = !1 : e ? se() - e > Bt && (i || (X.current = o.scrollTop, s(function() {
                        var u;
                        return m(u = ["%cInterval check%c: Should sticky but not at end, calling %cscrollToSticky()%c to scroll"]).call(u, l(n("navy")), l(n("orange")))
                    }), z()), e = !1) : e = se() : o.scrollHeight <= o.offsetHeight && !B.current && (s(function() {
                        var u;
                        return [m(u = ["%cInterval check%c: Container is emptied, setting sticky back to %ctrue%c"]).call(u, l(n("navy")), l(n("purple"))), [{
                            offsetHeight: o.offsetHeight,
                            scrollHeight: o.scrollHeight,
                            sticky: B.current
                        }]]
                    }), H(!0))
                }, Math.max(De, v) || De);
            return function() {
                return clearInterval(a)
            }
        }
    }, [$, v, s, r, z, H, B, b, w]);
    var Ne = c.useMemo(function() {
            var e = je[_] || (je[_] = lt({
                key: "react-scroll-to-bottom--css-" + nt(),
                nonce: _
            }));
            return function(a) {
                return e.css(a) + ""
            }
        }, [_]),
        Xe = c.useMemo(function() {
            return {
                observeScrollPosition: _e,
                setTarget: fe,
                styleToClassName: Ne
            }
        }, [_e, fe, Ne]),
        oe = c.useMemo(function() {
            return {
                atBottom: me,
                atEnd: pe,
                atStart: Ee,
                atTop: Te,
                mode: r
            }
        }, [me, pe, Ee, Te, r]),
        ae = c.useMemo(function() {
            var e = O !== null;
            return {
                animating: e,
                animatingToEnd: e && U(O, r),
                sticky: te
            }
        }, [O, r, te]),
        Ae = c.useMemo(function() {
            return $e($e({}, oe), ae)
        }, [oe, ae]),
        et = c.useMemo(function() {
            return {
                scrollTo: N,
                scrollToBottom: D,
                scrollToEnd: He,
                scrollToStart: Be,
                scrollToTop: V
            }
        }, [N, D, He, Be, V]);
    return c.useEffect(function() {
        if (b) {
            var e = function() {
                q.current = b.scrollHeight
            };
            return b.addEventListener("focus", e, {
                    capture: !0,
                    passive: !0
                }),
                function() {
                    return b.removeEventListener("focus", e)
                }
        }
    }, [b]), s(function() {
        var e;
        return [m(e = ["%cRender%c: Render"]).call(e, l(n("cyan", ""))), {
            animateTo: O,
            animating: O !== null,
            sticky: te,
            target: b
        }]
    }), S.createElement(ct.Provider, {
        value: Xe
    }, S.createElement(st.Provider, {
        value: et
    }, S.createElement(it.Provider, {
        value: Ae
    }, S.createElement(ut.Provider, {
        value: oe
    }, S.createElement(dt.Provider, {
        value: ae
    }, h, b && S.createElement(ft, {
        debounce: p,
        name: "scroll",
        onEvent: Qe,
        target: b
    }), b && O !== null && S.createElement(vt, {
        name: "scrollTop",
        onEnd: re,
        target: b,
        value: O
    }))))))
};
ue.defaultProps = {
    checkInterval: 100,
    children: void 0,
    debounce: 17,
    debug: void 0,
    initialScrollBehavior: "smooth",
    mode: void 0,
    nonce: void 0,
    scroller: _t
};
ue.propTypes = {
    checkInterval: d.number,
    children: d.any,
    debounce: d.number,
    debug: d.bool,
    initialScrollBehavior: d.oneOf(["auto", "smooth"]),
    mode: d.oneOf(["bottom", "top"]),
    nonce: d.string,
    scroller: d.func
};
var Rt = {
        position: "relative"
    },
    de = function(t) {
        var v = t.children,
            h = t.className,
            p = t.followButtonClassName,
            g = t.scrollViewClassName,
            E = Tt()(Rt);
        return S.createElement("div", {
            className: Ct(E, (h || "") + "")
        }, S.createElement(wt, {
            className: (g || "") + ""
        }, v), S.createElement(Et, {
            className: (p || "") + ""
        }))
    };
de.defaultProps = {
    children: void 0,
    className: void 0,
    followButtonClassName: void 0,
    scrollViewClassName: void 0
};
de.propTypes = {
    children: d.any,
    className: d.string,
    followButtonClassName: d.string,
    scrollViewClassName: d.string
};
var Ue = function(t) {
    var v = t.checkInterval,
        h = t.children,
        p = t.className,
        g = t.debounce,
        E = t.debug,
        r = t.followButtonClassName,
        _ = t.initialScrollBehavior,
        M = t.mode,
        s = t.nonce,
        L = t.scroller,
        W = t.scrollViewClassName;
    return S.createElement(ue, {
        checkInterval: v,
        debounce: g,
        debug: E,
        initialScrollBehavior: _,
        mode: M,
        nonce: s,
        scroller: L
    }, S.createElement(de, {
        className: p,
        followButtonClassName: r,
        scrollViewClassName: W
    }, h))
};
Ue.defaultProps = {
    checkInterval: void 0,
    children: void 0,
    className: void 0,
    debounce: void 0,
    debug: void 0,
    followButtonClassName: void 0,
    initialScrollBehavior: "smooth",
    mode: void 0,
    nonce: void 0,
    scroller: void 0,
    scrollViewClassName: void 0
};
Ue.propTypes = {
    checkInterval: d.number,
    children: d.any,
    className: d.string,
    debounce: d.number,
    debug: d.bool,
    followButtonClassName: d.string,
    initialScrollBehavior: d.oneOf(["auto", "smooth"]),
    mode: d.oneOf(["bottom", "top"]),
    nonce: d.string,
    scroller: d.func,
    scrollViewClassName: d.string
};
yt();
export {
    Ue as B
};
//# sourceMappingURL=le5v2hqvx6xa2eig.js.map
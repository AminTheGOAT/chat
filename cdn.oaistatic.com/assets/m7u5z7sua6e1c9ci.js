const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/m5na7w4oz7fmna3u.js", "assets/hbhpmx2ipkndwudc.js", "assets/mgr0w69u3c317psp.js", "assets/root-ncdra6h0.css", "assets/ab2oz9enzsoo3wow.js", "assets/conversation-small-h7jqffb1.css", "assets/owxgq276fhfpq1u1.js", "assets/d3y72ugnrmac5z1v.js", "assets/jahrkw92yzxlxku3.js", "assets/fzrn137102spawew.js", "assets/e9lafxuzyeh4418f.js", "assets/ecsmtmpgv59no4oe.js", "assets/mco6ffvkuw2vrlq8.js", "assets/c4bxzbp1808foto4.js"]))) => i.map(i => d[i]);
import {
    r as d,
    h5 as At,
    h6 as ce,
    h7 as _t,
    h8 as Ke,
    h9 as be,
    ha as Se,
    hb as Tt,
    c1 as L,
    c0 as Rt,
    hc as Nt,
    hd as Ft,
    he as Dt,
    hf as Ot,
    aG as q,
    m as t,
    aL as re,
    aD as W,
    dP as Wt,
    aH as Ye,
    aI as Je,
    t as $t,
    c3 as pe,
    Z as Y,
    G as z,
    H as Bt,
    aN as Ut,
    dt as Ht,
    dr as Lt,
    br as k,
    c5 as ue,
    aR as w,
    aJ as K,
    f3 as Xe,
    P as R,
    d as O,
    S as de,
    dg as Ze,
    F as et,
    a3 as Pe,
    aE as me,
    Y as Vt,
    eS as zt,
    aQ as Qt,
    aa as Gt,
    a8 as qt,
    a$ as tt,
    ap as Kt,
    eo as Yt,
    d2 as Jt,
    d$ as Xt,
    cn as Zt,
    as as en,
    aX as ke,
    gP as tn
} from "./hbhpmx2ipkndwudc.js";
import {
    gR as nn,
    a2 as V,
    x as P,
    gS as nt,
    M as Oe,
    W as J,
    y as ge,
    D as sn,
    aa as an,
    ab as on,
    H as rn,
    I as st,
    J as fe,
    K as X,
    a1 as ln,
    ac as E,
    gT as _,
    ad as cn,
    $ as un,
    N as dn,
    P as mn,
    S as at,
    Q as fn,
    r as pn,
    Z as gn,
    _ as hn,
    a3 as vn,
    a4 as xn,
    gU as bn,
    gV as Sn,
    gW as In,
    gX as yn,
    a6 as We,
    gY as ot,
    a7 as Mn,
    a0 as Cn,
    a9 as jn,
    gZ as kn,
    g_ as wn,
    g$ as En,
    h0 as rt,
    h1 as Pn,
    h2 as An,
    h3 as Ie,
    h4 as _n,
    h5 as Tn,
    ak as te,
    ai as it,
    b2 as Ae,
    h6 as _e,
    c8 as lt,
    bB as Rn,
    U as B,
    bC as $e,
    cl as ct,
    h7 as Te,
    h8 as ut,
    h9 as dt,
    ha as mt,
    hb as Nn,
    l as ft,
    dR as Fn,
    hc as Dn,
    dz as pt,
    dA as On,
    hd as Wn,
    cg as $n,
    he as Bn,
    hf as Un,
    bS as gt,
    bP as ht,
    hg as Hn,
    bs as Re,
    j as Ln,
    hh as Vn,
    hi as Be,
    bx as Ue,
    dC as zn,
    aj as Qn,
    hj as Gn
} from "./ab2oz9enzsoo3wow.js";
import {
    af as qn,
    aC as Kn,
    y as Yn,
    L as Jn,
    N as Xn,
    aV as vt,
    aT as xt,
    bm as bt,
    bn as St,
    t as Zn,
    T as es,
    aU as ts,
    aK as It,
    aw as ns,
    K as yt,
    b0 as ye
} from "./mgr0w69u3c317psp.js";
const Mt = { ...Rt
    },
    ss = Mt.useInsertionEffect,
    as = ss || (e => e());

function Ct(e) {
    const n = d.useRef(() => {});
    return as(() => {
        n.current = e
    }), d.useCallback(function() {
        for (var a = arguments.length, s = new Array(a), o = 0; o < a; o++) s[o] = arguments[o];
        return n.current == null ? void 0 : n.current(...s)
    }, [])
}
var we = typeof document < "u" ? d.useLayoutEffect : d.useEffect;
let He = !1,
    os = 0;
const Le = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + os++;

function rs() {
    const [e, n] = d.useState(() => He ? Le() : void 0);
    return we(() => {
        e == null && n(Le())
    }, []), d.useEffect(() => {
        He = !0
    }, []), e
}
const is = Mt.useId,
    ls = is || rs;

function cs() {
    const e = new Map;
    return {
        emit(n, a) {
            var s;
            (s = e.get(n)) == null || s.forEach(o => o(a))
        },
        on(n, a) {
            e.set(n, [...e.get(n) || [], a])
        },
        off(n, a) {
            var s;
            e.set(n, ((s = e.get(n)) == null ? void 0 : s.filter(o => o !== a)) || [])
        }
    }
}
const us = d.createContext(null),
    ds = d.createContext(null),
    ms = () => {
        var e;
        return ((e = d.useContext(us)) == null ? void 0 : e.id) || null
    },
    fs = () => d.useContext(ds),
    ps = "data-floating-ui-focusable";

function gs(e) {
    const {
        open: n = !1,
        onOpenChange: a,
        elements: s
    } = e, o = ls(), r = d.useRef({}), [i] = d.useState(() => cs()), u = ms() != null, [m, f] = d.useState(s.reference), p = Ct((c, g, h) => {
        r.current.openEvent = c ? g : void 0, i.emit("openchange", {
            open: c,
            event: g,
            reason: h,
            nested: u
        }), a ? .(c, g, h)
    }), v = d.useMemo(() => ({
        setPositionReference: f
    }), []), l = d.useMemo(() => ({
        reference: m || s.reference || null,
        floating: s.floating || null,
        domReference: s.reference
    }), [m, s.reference, s.floating]);
    return d.useMemo(() => ({
        dataRef: r,
        open: n,
        onOpenChange: p,
        elements: l,
        events: i,
        floatingId: o,
        refs: v
    }), [n, p, l, i, o, v])
}

function hs(e) {
    e === void 0 && (e = {});
    const {
        nodeId: n
    } = e, a = gs({ ...e,
        elements: {
            reference: null,
            floating: null,
            ...e.elements
        }
    }), s = e.rootContext || a, o = s.elements, [r, i] = d.useState(null), [u, m] = d.useState(null), p = o ? .reference || r, v = d.useRef(null), l = fs();
    we(() => {
        p && (v.current = p)
    }, [p]);
    const c = At({ ...e,
            elements: { ...o,
                ...u && {
                    reference: u
                }
            }
        }),
        g = d.useCallback(b => {
            const M = ce(b) ? {
                getBoundingClientRect: () => b.getBoundingClientRect(),
                contextElement: b
            } : b;
            m(M), c.refs.setReference(M)
        }, [c.refs]),
        h = d.useCallback(b => {
            (ce(b) || b === null) && (v.current = b, i(b)), (ce(c.refs.reference.current) || c.refs.reference.current === null || b !== null && !ce(b)) && c.refs.setReference(b)
        }, [c.refs]),
        x = d.useMemo(() => ({ ...c.refs,
            setReference: h,
            setPositionReference: g,
            domReference: v
        }), [c.refs, h, g]),
        I = d.useMemo(() => ({ ...c.elements,
            domReference: p
        }), [c.elements, p]),
        y = d.useMemo(() => ({ ...c,
            ...s,
            refs: x,
            elements: I,
            nodeId: n
        }), [c, x, I, n, s]);
    return we(() => {
        s.dataRef.current.floatingContext = y;
        const b = l ? .nodesRef.current.find(M => M.id === n);
        b && (b.context = y)
    }), d.useMemo(() => ({ ...c,
        context: y,
        refs: x,
        elements: I
    }), [c, x, I, y])
}
const Ve = "active",
    ze = "selected";

function Me(e, n, a) {
    const s = new Map,
        o = a === "item";
    let r = e;
    if (o && e) {
        const {
            [Ve]: i, [ze]: u, ...m
        } = e;
        r = m
    }
    return { ...a === "floating" && {
            tabIndex: -1,
            [ps]: ""
        },
        ...r,
        ...n.map(i => {
            const u = i ? i[a] : null;
            return typeof u == "function" ? e ? u(e) : null : u
        }).concat(e).reduce((i, u) => (u && Object.entries(u).forEach(m => {
            let [f, p] = m;
            if (!(o && [Ve, ze].includes(f)))
                if (f.indexOf("on") === 0) {
                    if (s.has(f) || s.set(f, []), typeof p == "function") {
                        var v;
                        (v = s.get(f)) == null || v.push(p), i[f] = function() {
                            for (var l, c = arguments.length, g = new Array(c), h = 0; h < c; h++) g[h] = arguments[h];
                            return (l = s.get(f)) == null ? void 0 : l.map(x => x(...g)).find(x => x !== void 0)
                        }
                    }
                } else i[f] = p
        }), i), {})
    }
}

function vs(e) {
    e === void 0 && (e = []);
    const n = e.map(u => u ? .reference),
        a = e.map(u => u ? .floating),
        s = e.map(u => u ? .item),
        o = d.useCallback(u => Me(u, e, "reference"), n),
        r = d.useCallback(u => Me(u, e, "floating"), a),
        i = d.useCallback(u => Me(u, e, "item"), s);
    return d.useMemo(() => ({
        getReferenceProps: o,
        getFloatingProps: r,
        getItemProps: i
    }), [o, r, i])
}

function Qe(e, n) {
    return { ...e,
        rects: { ...e.rects,
            floating: { ...e.rects.floating,
                height: n
            }
        }
    }
}
const xs = e => ({
    name: "inner",
    options: e,
    async fn(n) {
        const {
            listRef: a,
            overflowRef: s,
            onFallbackChange: o,
            offset: r = 0,
            index: i = 0,
            minItemsVisible: u = 4,
            referenceOverflowThreshold: m = 0,
            scrollRef: f,
            ...p
        } = _t(e, n), {
            rects: v,
            elements: {
                floating: l
            }
        } = n, c = a.current[i], g = f ? .current || l, h = l.clientTop || g.clientTop, x = l.clientTop !== 0, I = g.clientTop !== 0, y = l === g;
        if (!c) return {};
        const b = { ...n,
                ...await Ke(-c.offsetTop - l.clientTop - v.reference.height / 2 - c.offsetHeight / 2 - r).fn(n)
            },
            M = await be(Qe(b, g.scrollHeight + h + l.clientTop), p),
            T = await be(b, { ...p,
                elementContext: "reference"
            }),
            A = Se(0, M.top),
            N = b.y + A,
            C = Tt(Se(0, g.scrollHeight + (x && y || I ? h * 2 : 0) - A - Se(0, M.bottom)));
        if (g.style.maxHeight = C + "px", g.scrollTop = A, o) {
            const j = g.scrollHeight > g.offsetHeight && g.offsetHeight < c.offsetHeight * u - 1 || T.top >= -m || T.bottom >= -m;
            L.flushSync(() => o(j))
        }
        return s && (s.current = await be(Qe({ ...b,
            y: N
        }, g.offsetHeight + h + l.clientTop), p)), {
            y: N
        }
    }
});

function bs(e, n) {
    const {
        open: a,
        elements: s
    } = e, {
        enabled: o = !0,
        overflowRef: r,
        scrollRef: i,
        onChange: u
    } = n, m = Ct(u), f = d.useRef(!1), p = d.useRef(null), v = d.useRef(null);
    d.useEffect(() => {
        if (!o) return;

        function c(h) {
            if (h.ctrlKey || !g || r.current == null) return;
            const x = h.deltaY,
                I = r.current.top >= -.5,
                y = r.current.bottom >= -.5,
                b = g.scrollHeight - g.clientHeight,
                M = x < 0 ? -1 : 1,
                T = x < 0 ? "max" : "min";
            g.scrollHeight <= g.clientHeight || (!I && x > 0 || !y && x < 0 ? (h.preventDefault(), L.flushSync(() => {
                m(A => A + Math[T](x, b * M))
            })) : /firefox/i.test(nn()) && (g.scrollTop += x))
        }
        const g = i ? .current || s.floating;
        if (a && g) return g.addEventListener("wheel", c), requestAnimationFrame(() => {
            p.current = g.scrollTop, r.current != null && (v.current = { ...r.current
            })
        }), () => {
            p.current = null, v.current = null, g.removeEventListener("wheel", c)
        }
    }, [o, a, s.floating, r, i, m]);
    const l = d.useMemo(() => ({
        onKeyDown() {
            f.current = !0
        },
        onWheel() {
            f.current = !1
        },
        onPointerMove() {
            f.current = !1
        },
        onScroll() {
            const c = i ? .current || s.floating;
            if (!(!r.current || !c || !f.current)) {
                if (p.current !== null) {
                    const g = c.scrollTop - p.current;
                    (r.current.bottom < -.5 && g < -1 || r.current.top < -.5 && g > 1) && L.flushSync(() => m(h => h + g))
                }
                requestAnimationFrame(() => {
                    p.current = c.scrollTop
                })
            }
        }
    }), [s.floating, m, r, i]);
    return d.useMemo(() => o ? {
        floating: l
    } : {}, [o, l])
}
let ne = d.createContext({
    styles: void 0,
    setReference: () => {},
    setFloating: () => {},
    getReferenceProps: () => ({}),
    getFloatingProps: () => ({}),
    slot: {}
});
ne.displayName = "FloatingContext";
let Ne = d.createContext(null);
Ne.displayName = "PlacementContext";

function Ss(e) {
    return d.useMemo(() => e ? typeof e == "string" ? {
        to: e
    } : e : null, [e])
}

function Is() {
    return d.useContext(ne).setReference
}

function ys() {
    return d.useContext(ne).getReferenceProps
}

function Ms() {
    let {
        getFloatingProps: e,
        slot: n
    } = d.useContext(ne);
    return d.useCallback((...a) => Object.assign({}, e(...a), {
        "data-anchor": n.anchor
    }), [e, n])
}

function Cs(e = null) {
    e === !1 && (e = null), typeof e == "string" && (e = {
        to: e
    });
    let n = d.useContext(Ne),
        a = d.useMemo(() => e, [JSON.stringify(e, (o, r) => {
            var i;
            return (i = r ? .outerHTML) != null ? i : r
        })]);
    V(() => {
        n ? .(a ? ? null)
    }, [n, a]);
    let s = d.useContext(ne);
    return d.useMemo(() => [s.setFloating, e ? s.styles : {}], [s.setFloating, e, s.styles])
}
let Ge = 4;

function js({
    children: e,
    enabled: n = !0
}) {
    let [a, s] = d.useState(null), [o, r] = d.useState(0), i = d.useRef(null), [u, m] = d.useState(null);
    ks(u);
    let f = n && a !== null && u !== null,
        {
            to: p = "bottom",
            gap: v = 0,
            offset: l = 0,
            padding: c = 0,
            inner: g
        } = ws(a, u),
        [h, x = "center"] = p.split(" ");
    V(() => {
        f && r(0)
    }, [f]);
    let {
        refs: I,
        floatingStyles: y,
        context: b
    } = hs({
        open: f,
        placement: h === "selection" ? x === "center" ? "bottom" : `bottom-${x}` : x === "center" ? `${h}` : `${h}-${x}`,
        strategy: "absolute",
        transform: !1,
        middleware: [Ke({
            mainAxis: h === "selection" ? 0 : v,
            crossAxis: l
        }), Nt({
            padding: c
        }), h !== "selection" && Ft({
            padding: c
        }), h === "selection" && g ? xs({ ...g,
            padding: c,
            overflowRef: i,
            offset: o,
            minItemsVisible: Ge,
            referenceOverflowThreshold: c,
            onFallbackChange(U) {
                var Q, ee;
                if (!U) return;
                let G = b.elements.floating;
                if (!G) return;
                let ie = parseFloat(getComputedStyle(G).scrollPaddingBottom) || 0,
                    se = Math.min(Ge, G.childElementCount),
                    S = 0,
                    ae = 0;
                for (let F of (ee = (Q = b.elements.floating) == null ? void 0 : Q.childNodes) != null ? ee : [])
                    if (F instanceof HTMLElement) {
                        let $ = F.offsetTop,
                            le = $ + F.clientHeight + ie,
                            xe = G.scrollTop,
                            De = xe + G.clientHeight;
                        if ($ >= xe && le <= De) se--;
                        else {
                            ae = Math.max(0, Math.min(le, De) - Math.max($, xe)), S = F.clientHeight;
                            break
                        }
                    }
                se >= 1 && r(F => {
                    let $ = S * se - ae + ie;
                    return F >= $ ? F : $
                })
            }
        }) : null, Dt({
            padding: c,
            apply({
                availableWidth: U,
                availableHeight: Q,
                elements: ee
            }) {
                Object.assign(ee.floating.style, {
                    overflow: "auto",
                    maxWidth: `${U}px`,
                    maxHeight: `min(var(--anchor-max-height, 100vh), ${Q}px)`
                })
            }
        })].filter(Boolean),
        whileElementsMounted: Ot
    }), [M = h, T = x] = b.placement.split("-");
    h === "selection" && (M = "selection");
    let A = d.useMemo(() => ({
            anchor: [M, T].filter(Boolean).join(" ")
        }), [M, T]),
        N = bs(b, {
            overflowRef: i,
            onChange: r
        }),
        {
            getReferenceProps: C,
            getFloatingProps: j
        } = vs([N]),
        Z = P(U => {
            m(U), I.setFloating(U)
        });
    return d.createElement(Ne.Provider, {
        value: s
    }, d.createElement(ne.Provider, {
        value: {
            setFloating: Z,
            setReference: I.setReference,
            styles: y,
            getReferenceProps: C,
            getFloatingProps: j,
            slot: A
        }
    }, e))
}

function ks(e) {
    V(() => {
        if (!e) return;
        let n = new MutationObserver(() => {
            let a = window.getComputedStyle(e).maxHeight,
                s = parseFloat(a);
            if (isNaN(s)) return;
            let o = parseInt(a);
            isNaN(o) || s !== o && (e.style.maxHeight = `${Math.ceil(s)}px`)
        });
        return n.observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
        }), () => {
            n.disconnect()
        }
    }, [e])
}

function ws(e, n) {
    var a, s, o;
    let r = Ce((a = e ? .gap) != null ? a : "var(--anchor-gap, 0)", n),
        i = Ce((s = e ? .offset) != null ? s : "var(--anchor-offset, 0)", n),
        u = Ce((o = e ? .padding) != null ? o : "var(--anchor-padding, 0)", n);
    return { ...e,
        gap: r,
        offset: i,
        padding: u
    }
}

function Ce(e, n, a = void 0) {
    let s = nt(),
        o = P((m, f) => {
            if (m == null) return [a, null];
            if (typeof m == "number") return [m, null];
            if (typeof m == "string") {
                if (!f) return [a, null];
                let p = qe(m, f);
                return [p, v => {
                    let l = jt(m); {
                        let c = l.map(g => window.getComputedStyle(f).getPropertyValue(g));
                        s.requestAnimationFrame(function g() {
                            s.nextFrame(g);
                            let h = !1;
                            for (let [I, y] of l.entries()) {
                                let b = window.getComputedStyle(f).getPropertyValue(y);
                                if (c[I] !== b) {
                                    c[I] = b, h = !0;
                                    break
                                }
                            }
                            if (!h) return;
                            let x = qe(m, f);
                            p !== x && (v(x), p = x)
                        })
                    }
                    return s.dispose
                }]
            }
            return [a, null]
        }),
        r = d.useMemo(() => o(e, n)[0], [e, n]),
        [i = r, u] = d.useState();
    return V(() => {
        let [m, f] = o(e, n);
        if (u(m), !!f) return f(u)
    }, [e, n]), i
}

function jt(e) {
    let n = /var\((.*)\)/.exec(e);
    if (n) {
        let a = n[1].indexOf(",");
        if (a === -1) return [n[1]];
        let s = n[1].slice(0, a).trim(),
            o = n[1].slice(a + 1).trim();
        return o ? [s, ...jt(o)] : [s]
    }
    return []
}

function qe(e, n) {
    let a = document.createElement("div");
    n.appendChild(a), a.style.setProperty("margin-top", "0px", "important"), a.style.setProperty("margin-top", e, "important");
    let s = parseFloat(window.getComputedStyle(a).marginTop) || 0;
    return n.removeChild(a), s
}
var Es = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Es || {}),
    Ps = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Ps || {}),
    As = (e => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e[e.SetButtonElement = 7] = "SetButtonElement", e[e.SetItemsElement = 8] = "SetItemsElement", e))(As || {});

function je(e, n = a => a) {
    let a = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
        s = _n(n(e.items.slice()), r => r.dataRef.current.domRef.current),
        o = a ? s.indexOf(a) : null;
    return o === -1 && (o = null), {
        items: s,
        activeItemIndex: o
    }
}
let _s = {
        1(e) {
            return e.menuState === 1 ? e : { ...e,
                activeItemIndex: null,
                menuState: 1
            }
        },
        0(e) {
            return e.menuState === 0 ? e : { ...e,
                __demoMode: !1,
                menuState: 0
            }
        },
        2: (e, n) => {
            var a, s, o, r, i;
            if (e.menuState === 1) return e;
            let u = { ...e,
                searchQuery: "",
                activationTrigger: (a = n.trigger) != null ? a : 1,
                __demoMode: !1
            };
            if (n.focus === _.Nothing) return { ...u,
                activeItemIndex: null
            };
            if (n.focus === _.Specific) return { ...u,
                activeItemIndex: e.items.findIndex(p => p.id === n.id)
            };
            if (n.focus === _.Previous) {
                let p = e.activeItemIndex;
                if (p !== null) {
                    let v = e.items[p].dataRef.current.domRef,
                        l = Ie(n, {
                            resolveItems: () => e.items,
                            resolveActiveIndex: () => e.activeItemIndex,
                            resolveId: c => c.id,
                            resolveDisabled: c => c.dataRef.current.disabled
                        });
                    if (l !== null) {
                        let c = e.items[l].dataRef.current.domRef;
                        if (((s = v.current) == null ? void 0 : s.previousElementSibling) === c.current || ((o = c.current) == null ? void 0 : o.previousElementSibling) === null) return { ...u,
                            activeItemIndex: l
                        }
                    }
                }
            } else if (n.focus === _.Next) {
                let p = e.activeItemIndex;
                if (p !== null) {
                    let v = e.items[p].dataRef.current.domRef,
                        l = Ie(n, {
                            resolveItems: () => e.items,
                            resolveActiveIndex: () => e.activeItemIndex,
                            resolveId: c => c.id,
                            resolveDisabled: c => c.dataRef.current.disabled
                        });
                    if (l !== null) {
                        let c = e.items[l].dataRef.current.domRef;
                        if (((r = v.current) == null ? void 0 : r.nextElementSibling) === c.current || ((i = c.current) == null ? void 0 : i.nextElementSibling) === null) return { ...u,
                            activeItemIndex: l
                        }
                    }
                }
            }
            let m = je(e),
                f = Ie(n, {
                    resolveItems: () => m.items,
                    resolveActiveIndex: () => m.activeItemIndex,
                    resolveId: p => p.id,
                    resolveDisabled: p => p.dataRef.current.disabled
                });
            return { ...u,
                ...m,
                activeItemIndex: f
            }
        },
        3: (e, n) => {
            let a = e.searchQuery !== "" ? 0 : 1,
                s = e.searchQuery + n.value.toLowerCase(),
                o = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + a).concat(e.items.slice(0, e.activeItemIndex + a)) : e.items).find(i => {
                    var u;
                    return ((u = i.dataRef.current.textValue) == null ? void 0 : u.startsWith(s)) && !i.dataRef.current.disabled
                }),
                r = o ? e.items.indexOf(o) : -1;
            return r === -1 || r === e.activeItemIndex ? { ...e,
                searchQuery: s
            } : { ...e,
                searchQuery: s,
                activeItemIndex: r,
                activationTrigger: 1
            }
        },
        4(e) {
            return e.searchQuery === "" ? e : { ...e,
                searchQuery: "",
                searchActiveItemIndex: null
            }
        },
        5: (e, n) => {
            let a = je(e, s => [...s, {
                id: n.id,
                dataRef: n.dataRef
            }]);
            return { ...e,
                ...a
            }
        },
        6: (e, n) => {
            let a = je(e, s => {
                let o = s.findIndex(r => r.id === n.id);
                return o !== -1 && s.splice(o, 1), s
            });
            return { ...e,
                ...a,
                activationTrigger: 1
            }
        },
        7: (e, n) => e.buttonElement === n.element ? e : { ...e,
            buttonElement: n.element
        },
        8: (e, n) => e.itemsElement === n.element ? e : { ...e,
            itemsElement: n.element
        }
    },
    Fe = d.createContext(null);
Fe.displayName = "MenuContext";

function he(e) {
    let n = d.useContext(Fe);
    if (n === null) {
        let a = new Error(`<${e} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(a, he), a
    }
    return n
}

function Ts(e, n) {
    return st(n.type, _s, e, n)
}
let Rs = d.Fragment;

function Ns(e, n) {
    let {
        __demoMode: a = !1,
        ...s
    } = e, o = d.useReducer(Ts, {
        __demoMode: a,
        menuState: a ? 0 : 1,
        buttonElement: null,
        itemsElement: null,
        items: [],
        searchQuery: "",
        activeItemIndex: null,
        activationTrigger: 1
    }), [{
        menuState: r,
        itemsElement: i,
        buttonElement: u
    }, m] = o, f = ge(n);
    sn(r === 0, [u, i], (c, g) => {
        m({
            type: 1
        }), an(g, on.Loose) || (c.preventDefault(), u ? .focus())
    });
    let p = P(() => {
            m({
                type: 1
            })
        }),
        v = d.useMemo(() => ({
            open: r === 0,
            close: p
        }), [r, p]),
        l = {
            ref: f
        };
    return q.createElement(js, null, q.createElement(Fe.Provider, {
        value: o
    }, q.createElement(rn, {
        value: st(r, {
            0: fe.Open,
            1: fe.Closed
        })
    }, X({
        ourProps: l,
        theirProps: s,
        slot: v,
        defaultTag: Rs,
        name: "Menu"
    }))))
}
let Fs = "button";

function Ds(e, n) {
    var a;
    let s = d.useId(),
        {
            id: o = `headlessui-menu-button-${s}`,
            disabled: r = !1,
            autoFocus: i = !1,
            ...u
        } = e,
        [m, f] = he("Menu.Button"),
        p = ys(),
        v = ln(),
        l = ge(n, Is(), P(C => f({
            type: 7,
            element: C
        }))),
        c = P(C => {
            switch (C.key) {
                case E.Space:
                case E.Enter:
                case E.ArrowDown:
                    C.preventDefault(), C.stopPropagation(), L.flushSync(() => f({
                        type: 0
                    })), f({
                        type: 2,
                        focus: _.First
                    });
                    break;
                case E.ArrowUp:
                    C.preventDefault(), C.stopPropagation(), L.flushSync(() => f({
                        type: 0
                    })), f({
                        type: 2,
                        focus: _.Last
                    });
                    break
            }
        }),
        g = P(C => {
            switch (C.key) {
                case E.Space:
                    C.preventDefault();
                    break
            }
        }),
        h = P(C => {
            var j;
            if (cn(C.currentTarget)) return C.preventDefault();
            r || (m.menuState === 0 ? (L.flushSync(() => f({
                type: 1
            })), (j = m.buttonElement) == null || j.focus({
                preventScroll: !0
            })) : (C.preventDefault(), f({
                type: 0
            })))
        }),
        {
            isFocusVisible: x,
            focusProps: I
        } = un({
            autoFocus: i
        }),
        {
            isHovered: y,
            hoverProps: b
        } = dn({
            isDisabled: r
        }),
        {
            pressed: M,
            pressProps: T
        } = mn({
            disabled: r
        }),
        A = d.useMemo(() => ({
            open: m.menuState === 0,
            active: M || m.menuState === 0,
            disabled: r,
            hover: y,
            focus: x,
            autofocus: i
        }), [m, y, x, M, r, i]),
        N = at(p(), {
            ref: l,
            id: o,
            type: fn(e, m.buttonElement),
            "aria-haspopup": "menu",
            "aria-controls": (a = m.itemsElement) == null ? void 0 : a.id,
            "aria-expanded": m.menuState === 0,
            disabled: r || void 0,
            autoFocus: i,
            onKeyDown: c,
            onKeyUp: g,
            onClick: h
        }, I, b, T);
    return X({
        mergeRefs: v,
        ourProps: N,
        theirProps: u,
        slot: A,
        defaultTag: Fs,
        name: "Menu.Button"
    })
}
let Os = "div",
    Ws = Oe.RenderStrategy | Oe.Static;

function $s(e, n) {
    var a, s;
    let o = d.useId(),
        {
            id: r = `headlessui-menu-items-${o}`,
            anchor: i,
            portal: u = !1,
            modal: m = !0,
            transition: f = !1,
            ...p
        } = e,
        v = Ss(i),
        [l, c] = he("Menu.Items"),
        [g, h] = Cs(v),
        x = Ms(),
        [I, y] = d.useState(null),
        b = ge(n, v ? g : null, P(S => c({
            type: 8,
            element: S
        })), y),
        M = pn(l.itemsElement);
    v && (u = !0);
    let T = gn(),
        [A, N] = hn(f, I, T !== null ? (T & fe.Open) === fe.Open : l.menuState === 0);
    vn(A, l.buttonElement, () => {
        c({
            type: 1
        })
    });
    let C = l.__demoMode ? !1 : m && l.menuState === 0;
    xn(C, M);
    let j = l.__demoMode ? !1 : m && l.menuState === 0;
    bn(j, {
        allowed: d.useCallback(() => [l.buttonElement, l.itemsElement], [l.buttonElement, l.itemsElement])
    });
    let Z = l.menuState !== 0,
        U = Sn(Z, l.buttonElement) ? !1 : A;
    d.useEffect(() => {
        let S = l.itemsElement;
        S && l.menuState === 0 && S !== M ? .activeElement && S.focus({
            preventScroll: !0
        })
    }, [l.menuState, l.itemsElement, M]), In(l.menuState === 0, {
        container: l.itemsElement,
        accept(S) {
            return S.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : S.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        },
        walk(S) {
            S.setAttribute("role", "none")
        }
    });
    let Q = nt(),
        ee = P(S => {
            var ae, F, $;
            switch (Q.dispose(), S.key) {
                case E.Space:
                    if (l.searchQuery !== "") return S.preventDefault(), S.stopPropagation(), c({
                        type: 3,
                        value: S.key
                    });
                case E.Enter:
                    if (S.preventDefault(), S.stopPropagation(), c({
                            type: 1
                        }), l.activeItemIndex !== null) {
                        let {
                            dataRef: le
                        } = l.items[l.activeItemIndex];
                        (F = (ae = le.current) == null ? void 0 : ae.domRef.current) == null || F.click()
                    }
                    ot(l.buttonElement);
                    break;
                case E.ArrowDown:
                    return S.preventDefault(), S.stopPropagation(), c({
                        type: 2,
                        focus: _.Next
                    });
                case E.ArrowUp:
                    return S.preventDefault(), S.stopPropagation(), c({
                        type: 2,
                        focus: _.Previous
                    });
                case E.Home:
                case E.PageUp:
                    return S.preventDefault(), S.stopPropagation(), c({
                        type: 2,
                        focus: _.First
                    });
                case E.End:
                case E.PageDown:
                    return S.preventDefault(), S.stopPropagation(), c({
                        type: 2,
                        focus: _.Last
                    });
                case E.Escape:
                    S.preventDefault(), S.stopPropagation(), L.flushSync(() => c({
                        type: 1
                    })), ($ = l.buttonElement) == null || $.focus({
                        preventScroll: !0
                    });
                    break;
                case E.Tab:
                    S.preventDefault(), S.stopPropagation(), L.flushSync(() => c({
                        type: 1
                    })), yn(l.buttonElement, S.shiftKey ? We.Previous : We.Next);
                    break;
                default:
                    S.key.length === 1 && (c({
                        type: 3,
                        value: S.key
                    }), Q.setTimeout(() => c({
                        type: 4
                    }), 350));
                    break
            }
        }),
        G = P(S => {
            switch (S.key) {
                case E.Space:
                    S.preventDefault();
                    break
            }
        }),
        ie = d.useMemo(() => ({
            open: l.menuState === 0
        }), [l.menuState]),
        se = at(v ? x() : {}, {
            "aria-activedescendant": l.activeItemIndex === null || (a = l.items[l.activeItemIndex]) == null ? void 0 : a.id,
            "aria-labelledby": (s = l.buttonElement) == null ? void 0 : s.id,
            id: r,
            onKeyDown: ee,
            onKeyUp: G,
            role: "menu",
            tabIndex: l.menuState === 0 ? 0 : void 0,
            ref: b,
            style: { ...p.style,
                ...h,
                "--button-width": Mn(l.buttonElement, !0).width
            },
            ...Cn(N)
        });
    return q.createElement(jn, {
        enabled: u ? e.static || A : !1
    }, X({
        ourProps: se,
        theirProps: p,
        slot: ie,
        defaultTag: Os,
        features: Ws,
        visible: U,
        name: "Menu.Items"
    }))
}
let Bs = d.Fragment;

function Us(e, n) {
    let a = d.useId(),
        {
            id: s = `headlessui-menu-item-${a}`,
            disabled: o = !1,
            ...r
        } = e,
        [i, u] = he("Menu.Item"),
        m = i.activeItemIndex !== null ? i.items[i.activeItemIndex].id === s : !1,
        f = d.useRef(null),
        p = ge(n, f);
    V(() => {
        if (!i.__demoMode && i.menuState === 0 && m && i.activationTrigger !== 0) return kn().requestAnimationFrame(() => {
            var j, Z;
            (Z = (j = f.current) == null ? void 0 : j.scrollIntoView) == null || Z.call(j, {
                block: "nearest"
            })
        })
    }, [i.__demoMode, f, m, i.menuState, i.activationTrigger, i.activeItemIndex]);
    let v = wn(f),
        l = d.useRef({
            disabled: o,
            domRef: f,
            get textValue() {
                return v()
            }
        });
    V(() => {
        l.current.disabled = o
    }, [l, o]), V(() => (u({
        type: 5,
        id: s,
        dataRef: l
    }), () => u({
        type: 6,
        id: s
    })), [l, s]);
    let c = P(() => {
            u({
                type: 1
            })
        }),
        g = P(j => {
            if (o) return j.preventDefault();
            u({
                type: 1
            }), ot(i.buttonElement)
        }),
        h = P(() => {
            if (o) return u({
                type: 2,
                focus: _.Nothing
            });
            u({
                type: 2,
                focus: _.Specific,
                id: s
            })
        }),
        x = En(),
        I = P(j => {
            x.update(j), !o && (m || u({
                type: 2,
                focus: _.Specific,
                id: s,
                trigger: 0
            }))
        }),
        y = P(j => {
            x.wasMoved(j) && (o || m || u({
                type: 2,
                focus: _.Specific,
                id: s,
                trigger: 0
            }))
        }),
        b = P(j => {
            x.wasMoved(j) && (o || m && u({
                type: 2,
                focus: _.Nothing
            }))
        }),
        [M, T] = rt(),
        [A, N] = Pn(),
        C = d.useMemo(() => ({
            active: m,
            focus: m,
            disabled: o,
            close: c
        }), [m, o, c]);
    return q.createElement(T, null, q.createElement(N, null, X({
        ourProps: {
            id: s,
            ref: p,
            role: "menuitem",
            tabIndex: o === !0 ? void 0 : -1,
            "aria-disabled": o === !0 ? !0 : void 0,
            "aria-labelledby": M,
            "aria-describedby": A,
            disabled: void 0,
            onClick: g,
            onFocus: h,
            onPointerEnter: I,
            onMouseEnter: I,
            onPointerMove: y,
            onMouseMove: y,
            onPointerLeave: b,
            onMouseLeave: b
        },
        theirProps: r,
        slot: C,
        defaultTag: Bs,
        name: "Menu.Item"
    })))
}
let Hs = "div";

function Ls(e, n) {
    let [a, s] = rt();
    return q.createElement(s, null, X({
        ourProps: {
            ref: n,
            "aria-labelledby": a,
            role: "group"
        },
        theirProps: e,
        slot: {},
        defaultTag: Hs,
        name: "Menu.Section"
    }))
}
let Vs = "header";

function zs(e, n) {
    let a = d.useId(),
        {
            id: s = `headlessui-menu-heading-${a}`,
            ...o
        } = e,
        r = An();
    V(() => r.register(s), [s, r.register]);
    let i = {
        id: s,
        ref: n,
        role: "presentation",
        ...r.props
    };
    return X({
        ourProps: i,
        theirProps: o,
        slot: {},
        defaultTag: Vs,
        name: "Menu.Heading"
    })
}
let Qs = "div";

function Gs(e, n) {
    return X({
        ourProps: {
            ref: n,
            role: "separator"
        },
        theirProps: e,
        slot: {},
        defaultTag: Qs,
        name: "Menu.Separator"
    })
}
let qs = J(Ns),
    Ks = J(Ds),
    Ys = J($s),
    Js = J(Us),
    Xs = J(Ls),
    Zs = J(zs),
    ea = J(Gs),
    oe = Object.assign(qs, {
        Button: Ks,
        Items: Ys,
        Item: Js,
        Section: Xs,
        Heading: Zs,
        Separator: ea
    });

function ta({
    show: e,
    appear: n,
    children: a
}) {
    return t.jsx(Tn, {
        as: d.Fragment,
        enter: "transition ease-out duration-200",
        enterFrom: "opacity-0 translate-y-1",
        enterTo: "opacity-100 translate-y-0",
        leave: "transition ease-in duration-150",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 translate-y-1",
        show: e,
        appear: n,
        children: a
    })
}

function H({
    onClick: e,
    href: n,
    target: a,
    children: s,
    disabled: o,
    icon: r,
    testId: i
}) {
    const u = te();
    return t.jsx(oe.Item, {
        disabled: o,
        children: ({
            active: m
        }) => t.jsxs(ve, {
            onClick: e,
            href: n,
            target: a,
            className: W({
                "bg-token-sidebar-surface-secondary": m,
                "hover:bg-token-sidebar-surface-secondary": !m && !o && !u,
                "hover:bg-token-main-surface-secondary": !m && !o && u
            }),
            "data-testid": i,
            children: [r && t.jsx(r, {
                className: "icon-md"
            }), s]
        })
    })
}

function na({
    to: e,
    children: n,
    icon: a
}) {
    return t.jsx(oe.Item, {
        children: ({
            active: s
        }) => t.jsx(Wt, {
            to: e,
            children: t.jsxs(ve, {
                $as: "span",
                className: W(s ? "bg-token-sidebar-surface-secondary" : "cursor-pointer"),
                children: [a && t.jsx(a, {
                    className: "icon-md"
                }), n]
            })
        })
    })
}
re.a `p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer`;
const ve = re.a `flex gap-2 rounded p-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group items-center`,
    ja = re(ve)
`border dark:border-white/20 min-h-0 hover:bg-gray-500/10 h-10 rounded-lg border-[rgba(0,0,0,0.1)]`, Ee = re.div `h-px bg-token-border-light my-1.5`, ka = re(ve)
`${e=>e.$active?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary"}`, sa = Ye(() => Je(() =>
    import ("./m5na7w4oz7fmna3u.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])));

function wa({
    onClickSettings: e
}) {
    const n = te();
    return t.jsxs(oe, {
        as: "div",
        className: W(!n && "group relative"),
        children: [t.jsx(ia, {}), t.jsx(ta, {
            children: t.jsx(oe.Items, {
                className: W("popover absolute bottom-full z-50 mb-1 overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary p-1.5 shadow-lg outline-none", n && "left-3 w-[var(--screen-sidebar-popover-min-width)]", !n && "left-0 w-full"),
                children: t.jsx(ra, {
                    onClickSettings: e
                })
            })
        })]
    })
}

function kt() {
    const e = !Y() ? .isEnterprisey(),
        n = z(),
        a = Ae(),
        s = Pe();
    return a ? t.jsxs("div", {
        className: "flex items-center justify-between gap-2 py-2 pl-5 pr-4",
        children: [t.jsx("div", {
            className: "text-sm text-token-text-secondary",
            children: a ? .email
        }), e && t.jsx(K, {
            label: n.formatMessage(D.addWorkspaceTooltip),
            side: "right",
            children: t.jsx("button", {
                onClick: () => pt(s, "profile menu"),
                children: t.jsx(Zn, {
                    className: "icon-sm text-token-text-primary"
                })
            })
        })]
    }) : null
}

function aa() {
    const e = Y();
    return e == null ? t.jsx(t.Fragment, {
        children: t.jsx("div", {
            className: "w-full px-3 py-2",
            children: t.jsx(ue, {})
        })
    }) : t.jsxs(t.Fragment, {
        children: [t.jsx(kt, {}), t.jsx("div", {
            className: "flex h-11 w-full items-center justify-start gap-3 px-3 py-1 text-sm",
            children: t.jsx(Et, {
                workspace: e,
                isLoading: !1,
                currentWorkspaceId: e.id,
                showCheck: !1
            })
        })]
    })
}

function wt({
    menuItemComponent: e
}) {
    const n = it(),
        a = $t(),
        {
            data: s
        } = pe(),
        o = Y(),
        [r, i] = d.useState(!1),
        u = Ae(),
        m = z(),
        f = Bt();
    if (!o || !s) return null;
    const p = o.isWorkspaceAccount(),
        v = s.accountItems.length > 1,
        l = s.accountItems,
        c = Ut([l.find(h => h.isPersonalAccount()), ...l.filter(h => !h.isPersonalAccount())]);
    if (c.sort((h, x) => h.isPersonalAccount() ? 1 : x.isPersonalAccount() ? -1 : 0), !v) return p ? t.jsx(aa, {}) : t.jsx(t.Fragment, {
        children: t.jsx("div", {
            className: "ml-3 mr-2 py-2 text-sm text-token-text-secondary",
            children: u ? .email
        })
    });
    const g = c.map(h => t.jsx(e, {
        disabled: h.isDeactivated(),
        onClick: () => {
            if (h.isDeactivated() || h.id === o ? .id) return;
            i(!0);
            const {
                willRedirect: x
            } = Ht(a, h.id, n, m, f);
            x || Lt()
        },
        className: "radix-disabled:pointer-events-auto radix-disabled:hover:bg-transparent",
        children: h.isDeactivated() ? t.jsx(oa, {
            workspace: h,
            isLoading: r
        }) : t.jsx(Et, {
            workspace: h,
            isLoading: r,
            currentWorkspaceId: o ? .id
        })
    }, h.id));
    return t.jsxs(t.Fragment, {
        children: [t.jsx(kt, {}), t.jsx(k.Separator, {}), g]
    })
}

function Et({
    workspace: e,
    isLoading: n,
    currentWorkspaceId: a,
    showCheck: s = !0
}) {
    const o = e.canAccessWithCurrentSession,
        r = !n && s && e.id === a;
    return t.jsxs("div", {
        children: [t.jsxs("div", {
            className: "flex w-full items-center gap-2.5",
            children: [t.jsx("span", {
                className: "flex h-5 w-5 items-center justify-center",
                children: t.jsx(_e, {
                    iconSize: "small",
                    workspace: e,
                    className: W({
                        "flex-shrink-0": !0
                    })
                })
            }), t.jsx("div", {
                className: "line-clamp-1 text-token-text-primary",
                children: lt(z(), e)
            }), n && t.jsx(ue, {}), r && t.jsx("span", {
                className: "text-token-text-primary",
                children: t.jsx(qn, {
                    className: "icon-sm"
                })
            }), !o && t.jsx("span", {
                className: "text-token-text-primary",
                children: t.jsx(Kn, {
                    className: "icon-sm"
                })
            })]
        }), !o && t.jsx("div", {
            className: "rowDivClassName",
            children: t.jsx("small", {
                className: "text-token-text-secondary",
                children: t.jsx(w, { ...e.ssoConnectionName ? D.authenticateWithSSOToAccessWorkspace : D.authenticateWithoutSSOToAccessWorkspace
                })
            })
        })]
    })
}

function oa({
    workspace: e,
    isLoading: n
}) {
    const a = z(),
        s = e.isOwnerOfAccount(),
        [o, r] = d.useState(!1),
        i = Rn(e.id);
    return d.useEffect(() => {
        i != null && o && (B.setPurchaseWorkspaceData({
            minimumSeats: Math.max(i, $e),
            existingAccount: e
        }), r(!1))
    }, [i, o, e]), t.jsxs(t.Fragment, {
        children: [t.jsxs(K, {
            className: "flex w-full flex-1 items-center gap-2.5",
            label: a.formatMessage(D.disabledWorkspaceTooltip),
            sideOffset: 20,
            side: "right",
            children: [t.jsx("span", {
                className: "flex h-5 w-5 items-center justify-center",
                children: t.jsx(Yn, {
                    className: "icon-sm flex-shrink-0 opacity-30"
                })
            }), t.jsx("div", {
                className: "truncate opacity-30",
                children: lt(a, e)
            })]
        }), n && t.jsx(ue, {}), !n && t.jsxs(k.Root, {
            children: [t.jsx(k.Trigger, {
                className: "rounded text-center hover:bg-token-main-surface-secondary",
                children: t.jsx(Jn, {
                    className: "icon-sm m-1"
                })
            }), t.jsx(k.Portal, {
                children: t.jsxs(k.Content, {
                    children: [s && t.jsx(t.Fragment, {
                        children: t.jsx(k.Item, {
                            onClick: () => {
                                i == null ? r(!0) : B.setPurchaseWorkspaceData({
                                    minimumSeats: Math.max(i, $e),
                                    existingAccount: e
                                })
                            },
                            children: o ? t.jsx(ue, {}) : t.jsx(w, {
                                id: "navigation.reactivateWorkspace",
                                defaultMessage: "Reactivate workspace"
                            })
                        })
                    }), t.jsx(k.Item, {
                        onClick: () => {
                            B.setLeaveWorkspaceData(e)
                        },
                        children: t.jsx(w, {
                            id: "navigation.leaveWorkspace",
                            defaultMessage: "Leave workspace"
                        })
                    })]
                })
            })]
        })]
    })
}

function ra({
    onClickSettings: e
}) {
    const {
        data: n
    } = pe(), a = Y(), s = ct(), {
        isDesktopAppAvailable: o,
        isSidekickAvailable: r
    } = Te(), {
        openModal: i
    } = ut(), u = Xe("3905879930"), m = te();
    var f = a ? .isTeam() ? ? !1,
        p = !1;
    if (f && (p = u.config.get("enabled", !1)), !a || !n) return null;
    const v = a.isWorkspaceAccount(),
        l = !s;
    return t.jsxs("nav", {
        children: [t.jsx(wt, {
            menuItemComponent: H
        }), t.jsx(Ee, {}), v ? t.jsx(mt, {
            menuItemComponent: H,
            routedMenuItemComponent: na
        }) : t.jsx(dt, {
            menuItemComponent: H
        }), l && t.jsx(H, {
            href: Nn(),
            target: "_blank",
            onClick: () => {
                R.logEvent(O.clickFaqLink)
            },
            icon: Xn,
            children: t.jsx(w, { ...D.helpAndFaq
            })
        }), t.jsx(H, {
            onClick: e,
            icon: vt,
            testId: "accounts-settings-button",
            children: t.jsx(w, { ...D.settings
            })
        }), f && p && t.jsxs(t.Fragment, {
            children: [t.jsx(H, {
                onClick: () => {
                    B.openModal(ft.InviteUsersToWorkspace), R.logEvent(O.accountMemberInviteButton, {
                        location: "dropdown-menu-click"
                    }), de.logEvent("chatgpt_invite_users_to_workspace", 0, {
                        action: "OpenAdminInviteModal",
                        location: "dropdown-menu-click",
                        text: "AddTeammates",
                        step: "OpenModal"
                    })
                },
                icon: xt,
                children: t.jsx(w, { ...D.addTeammatesButton
                })
            }), t.jsx(sa, {
                workspace: a
            })]
        }), o && t.jsx(la, {
            openDownloadModal: i,
            isSidekickAvailable: r
        }), !m && t.jsxs(t.Fragment, {
            children: [t.jsx(Ee, {}), t.jsx(H, {
                onClick: () => {
                    R.logEvent(O.clickLogOut, {
                        eventSource: "mouse"
                    }), R.logLogOutButtonClicked({
                        location: "account_switcher_menu"
                    }), Ze()
                },
                icon: bt,
                children: t.jsx(w, { ...D.logOut
                })
            })]
        })]
    })
}

function ia() {
    return Ae() ? t.jsx(ca, {}) : null
}

function la({
    openDownloadModal: e,
    isSidekickAvailable: n
}) {
    return t.jsxs("span", {
        children: [t.jsx(Ee, {}), t.jsx(H, {
            icon: St,
            onClick: () => {
                R.logEvent(O.accountMenuClickDownloadApp), e()
            },
            children: t.jsx(w, { ...n ? D.downloadMacosApp : D.downloadWindowsApp
            })
        })]
    })
}

function ca() {
    const {
        data: e
    } = pe(), n = Y(), a = Fn(), s = Dn(), o = te();
    if (!n || !e) return null;
    const r = n.isWorkspaceAccount(),
        i = e.accountItems.length > 1;
    return t.jsxs(oe.Button, {
        className: W("flex w-full max-w-[100%] items-center gap-2 rounded-lg text-sm group-ui-open:bg-token-sidebar-surface-secondary", o && "px-2 py-1.5 hover:bg-token-main-surface-secondary", !o && "p-2 hover:bg-token-sidebar-surface-secondary"),
        "data-testid": "accounts-profile-button",
        children: [t.jsx("div", {
            className: "flex-shrink-0",
            style: {
                viewTransitionName: "var(--vt-profile-avatar-sidebar)"
            },
            children: t.jsx(_e, {
                iconSize: "gizmo"
            })
        }), t.jsxs("div", {
            className: "relative -top-px grow -space-y-px truncate text-start text-token-text-primary",
            children: [t.jsx("div", {
                dir: "auto",
                children: s
            }), r || i ? t.jsx("div", {
                className: "truncate text-xs text-token-text-secondary",
                dir: "auto",
                children: a
            }) : null]
        })]
    })
}
const D = et({
        helpAndFaq: {
            id: "navigation.helpAndFaq",
            defaultMessage: "Help & FAQ"
        },
        settings: {
            id: "navigation.settings",
            defaultMessage: "Settings"
        },
        logOut: {
            id: "navigation.logOut",
            defaultMessage: "Log out"
        },
        accountSwitcherTitle: {
            id: "navigation.accountSwitcherTitle",
            defaultMessage: "Workspaces"
        },
        defaultWorkspaceTitle: {
            id: "useWorkspaces.defaultWorkspaceTitle",
            defaultMessage: "Untitled Workspace"
        },
        addWorkspaceTooltip: {
            id: "navigation.addWorkspaceTooltip",
            defaultMessage: "Create a Team workspace"
        },
        disabledWorkspaceTooltip: {
            id: "navigation.disabledWorkspaceTooltip",
            defaultMessage: "This workspace has been deactivated"
        },
        downloadMacosApp: {
            id: "navigation.downloadMacApp",
            defaultMessage: "Download the macOS app"
        },
        downloadWindowsApp: {
            id: "navigation.downloadWindowsApp",
            defaultMessage: "Download the Windows app"
        },
        authenticateWithSSOToAccessWorkspace: {
            id: "CV7pdM",
            defaultMessage: "Authenticate with SSO to access this workspace"
        },
        authenticateWithoutSSOToAccessWorkspace: {
            id: "zfCWFh",
            defaultMessage: "Authenticate without SSO to access this workspace"
        },
        addTeammatesButton: {
            id: "inviteMemberButton.inviteMemberButton",
            defaultMessage: "Add Teammates"
        }
    }),
    ua = Ye(() => Je(() =>
        import ("./m5na7w4oz7fmna3u.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])));

function Ea({
    showShareButton: e,
    showProfileDropdown: n,
    clientThreadId: a
}) {
    const s = Yt(a),
        o = z(),
        {
            layer: r
        } = me("1547743984");
    Jt(a);
    const {
        onNewThread: i
    } = Ln(), {
        titleSource: u
    } = Xt(a);
    u === Zt.NewChat && en(a);
    const m = r.get("show_share_button_text", !1),
        f = o.formatMessage({
            id: "GizmoInformation.shareChat",
            defaultMessage: "Share"
        }),
        p = te(),
        v = () => B.openSharingModal(s),
        l = !1,
        c = o.formatMessage({
            id: "TO+loE",
            defaultMessage: "New Chat"
        });
    return t.jsxs(t.Fragment, {
        children: [t.jsx(Vn, {}), !1, e && s && t.jsx(Be, {
            children: m ? t.jsx(ke, {
                onClick: v,
                icon: ye,
                label: f,
                "data-testid": "share-chat-button",
                color: "secondary",
                className: W(p && "hidden @lg/thread:inline-flex", "text-token-text-primary"),
                style: {
                    viewTransitionName: "var(--vt_share_chat_wide_button)"
                },
                children: f
            }) : t.jsx(K, {
                label: o.formatMessage({
                    id: "CPEfES",
                    defaultMessage: "Share chat"
                }),
                children: t.jsx(Re, {
                    "data-testid": "share-chat-button",
                    onClick: () => B.openSharingModal(s),
                    icon: ye,
                    style: {
                        viewTransitionName: "var(--vt_share_chat_compact_button)"
                    }
                })
            })
        }), p && e && s && t.jsx(Be, {
            children: t.jsx(K, {
                className: "@lg/thread:hidden",
                label: f,
                children: t.jsx(Ue, {
                    style: {
                        viewTransitionName: "var(--vt_share_chat_compact_button)"
                    },
                    onClick: v,
                    icon: t.jsx(ye, {}),
                    label: f
                })
            })
        }), p && !l && t.jsx(K, {
            className: "@lg/thread:hidden",
            label: c,
            children: t.jsx("div", {
                style: {
                    display: "var(--sidebar_is_open_and_pinned, none)"
                },
                children: t.jsx(Ue, {
                    className: tn.sidebarIcon,
                    icon: t.jsx(yt, {}),
                    onClick: () => i(),
                    label: c
                })
            })
        }), n && t.jsx(ma, {
            clientThreadId: a
        }), !1]
    })
}

function da({
    to: e,
    children: n,
    icon: a
}) {
    const s = Pe();
    return t.jsx(k.Item, {
        icon: a,
        onSelect: () => s(e),
        children: n
    })
}

function ma({
    clientThreadId: e
}) {
    const {
        isUnauthenticated: n
    } = tt();
    return n ? t.jsx(Sa, {}) : t.jsx(fa, {
        clientThreadId: e
    })
}

function fa({
    clientThreadId: e
}) {
    const {
        data: n
    } = pe(), a = Y(), s = a ? .isPlus() ? ? !1, o = a ? .isWorkspaceAccount() ? ? !1, {
        openSettings: r
    } = On(), {
        isDesktopAppAvailable: i
    } = Te(), u = ha(e ? ? "none"), {
        openModal: m
    } = ut(), f = te(), {
        layer: p
    } = me("2888142241"), v = Xe("3905879930"), l = z();
    var c = a ? .isTeam() ? ? !1,
        g = !1;
    c && (g = v.config.get("enabled", !1));
    const {
        doesUserHaveAnyAccountsWithPlusFeatures: h
    } = Vt(), {
        layer: x
    } = me("2670443078");
    if (!a || !n) return null;
    const I = n.accountItems.length > 1;
    let y = s;
    !o && !s && h && x.get("is_gating_fix_enabled", !1) && (y = h);
    const b = !o && !y && p.get("is_upgrade_in_settings", !1);
    return t.jsxs(zt, {
        contentClassName: W(f && "max-w-[256px] min-w-[256px] w-[256px]"),
        triggerButton: t.jsx("button", {
            onClick: () => {
                R.logEvent(O.accountOpenProfileMenu), de.logEvent("chatgpt_account_open_profile_menu")
            },
            "aria-label": l.formatMessage({
                id: "wz2MQV",
                defaultMessage: "Open Profile Menu"
            }),
            "data-testid": "profile-button",
            className: W("flex h-10 w-10 items-center justify-center rounded-full hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary focus-visible:outline-0", f && "hidden @lg/screen-composer:flex"),
            children: t.jsx(_e, {
                iconSize: "medium"
            })
        }),
        children: [I && t.jsx(wt, {
            menuItemComponent: k.Item
        }), I ? t.jsx(k.Separator, {}) : null, o ? t.jsx(mt, {
            menuItemComponent: k.Item,
            routedMenuItemComponent: da
        }) : t.jsx(dt, {
            menuItemComponent: k.Item
        }), t.jsx(k.Item, {
            icon: vt,
            onClick: () => r(),
            "data-testid": "settings-menu-item",
            children: t.jsx(w, {
                defaultMessage: "Settings",
                id: "navigation.settings.0"
            })
        }), t.jsx(k.Separator, {}), c && g && t.jsxs(t.Fragment, {
            children: [t.jsx(k.Item, {
                "data-testid": "settings-menu-item-invite-teammates",
                onClick: () => {
                    B.openModal(ft.InviteUsersToWorkspace), R.logEvent(O.accountMemberInviteButton, {
                        eventSource: "mouse",
                        location: "profile_drop_down"
                    }), de.logEvent("chatgpt_invite_users_to_workspace", 0, {
                        action: "OpenAdminInviteModal",
                        location: "dropdown-menu-click",
                        text: "AddTeammates",
                        step: "OpenModal"
                    })
                },
                icon: xt,
                children: t.jsx(w, { ...Pt.addTeammatesButton
                })
            }), t.jsx(ua, {
                workspace: a
            })]
        }), i && t.jsx(ga, {
            openDownloadModal: m
        }), b && t.jsx(xa, {}), u && t.jsx(va, {}), !f && t.jsxs(t.Fragment, {
            children: [(b || i || u) && t.jsx(k.Separator, {}), t.jsx(k.Item, {
                onClick: () => {
                    R.logEvent(O.clickLogOut, {
                        eventSource: "mouse"
                    }), R.logLogOutButtonClicked({
                        location: "profile_drop_down"
                    }), Ze()
                },
                "data-testid": "log-out-menu-item",
                icon: bt,
                children: t.jsx(w, {
                    defaultMessage: "Log out",
                    id: "navigation.logOut.0"
                })
            })]
        })]
    })
}

function pa({
    onClick: e,
    className: n,
    testId: a
}) {
    const s = z(),
        o = Kt(),
        r = o ? s.formatMessage({
            id: "yqd/J5",
            defaultMessage: "Clear chat"
        }) : s.formatMessage({
            id: "OFyxqj",
            defaultMessage: "New chat"
        });
    return t.jsx(K, {
        sideOffset: 4,
        label: r,
        className: W("flex", n),
        children: t.jsx(Re, {
            onClick: () => {
                B.closePopoverNavSidebar(), e()
            },
            icon: o ? ns : yt,
            surfaceContext: "secondary",
            "aria-label": r,
            "data-testid": a
        })
    })
}

function Pa({
    clientThreadId: e
}) {
    const [n] = gt(o => [o.activeStageSidebar]), a = ht(), s = Gn({
        clientThreadId: e,
        location: "Navigation actions"
    });
    return !a && !n ? null : t.jsxs("div", {
        className: "flex items-center",
        children: [t.jsx(ba, {}), t.jsx(pa, {
            onClick: s
        })]
    })
}

function ga({
    openDownloadModal: e
}) {
    const {
        isSidekickAvailable: n
    } = Te();
    return t.jsx("span", {
        children: t.jsx(k.Item, {
            icon: St,
            onClick: () => {
                e(), R.logEvent(O.accountMenuClickDownloadApp)
            },
            children: n ? t.jsx(w, {
                id: "navigation.downloadMacApp",
                defaultMessage: "Download the macOS app"
            }) : t.jsx(w, {
                id: "navigation.downloadWindowsApp",
                defaultMessage: "Download the Windows app"
            })
        })
    })
}
const ha = e => {
        const {
            value: n
        } = Qt("2634628831"), a = Gt(() => document.documentElement.dataset.searchExtension === "1"), s = Wn(e, qt.Search), o = $n();
        return !a && s && Bn() && n && !o
    },
    va = () => t.jsx("span", {
        children: t.jsx(k.Item, {
            icon: es,
            onClick: () => {
                window.open(Un), R.logEventWithStatsig(O.chatgptBrowserExtensionUserMenuClicked, "chatgpt_browser_extension_user_menu_clicked")
            },
            children: t.jsx(w, {
                id: "E5VPz/",
                defaultMessage: "Get ChatGPT search extension"
            })
        })
    });

function xa() {
    const e = Pe(),
        a = Y() ? .wasPaidCustomer() ? ? !1,
        s = () => {
            de.logEvent("chatgpt_plus_upgrade_in_settings_menu_clicked"), R.logEvent(O.plusUpgradeInSettingsMenuClicked), pt(e, "Upper right settings menu")
        };
    return t.jsx(k.Item, {
        icon: ts,
        onClick: s,
        children: a ? t.jsx(w, {
            id: "navigation.renewPlus",
            defaultMessage: "Renew Plus"
        }) : t.jsx(w, {
            id: "navigation.upgradePlan",
            defaultMessage: "Upgrade Plan"
        })
    })
}

function ba() {
    const e = z(),
        [n] = gt(i => [i.activeStageSidebar]),
        a = ht(),
        s = ct(),
        {
            isUnauthenticated: o
        } = tt(),
        r = Hn();
    return !n && !a || !s || o ? null : t.jsx(K, {
        label: e.formatMessage({
            id: "cElEQV",
            defaultMessage: "Open sidebar"
        }),
        className: "flex",
        children: t.jsx(Re, {
            "aria-label": e.formatMessage({
                id: "pV/Etp",
                defaultMessage: "Open sidebar"
            }),
            onClick: B.toggleNavSidebar,
            icon: r ? Ia : It,
            surfaceContext: "primary"
        })
    })
}

function Sa() {
    const e = it(),
        n = zn(),
        a = Qn(Pt.signUpCta),
        {
            layer: s
        } = me("3637408529"),
        o = s.get("is_desktop_primary_auth_button_on_right", !1),
        r = () => {
            e({
                authType: "login",
                callback: p => {
                    R.logLogInButtonClicked({
                        location: "Chat header",
                        provider: p
                    })
                }
            })
        },
        i = () => {
            e({
                authType: "signup",
                callback: p => {
                    R.logSignUpButtonClicked({
                        location: "Chat header",
                        provider: p
                    })
                }
            })
        },
        u = t.jsx(ke, {
            onClick: r,
            color: n ? "primary" : "secondary",
            size: "small",
            "data-testid": "login-button",
            children: t.jsx(w, {
                id: "B1SN7b",
                defaultMessage: "Log in"
            })
        }, "login"),
        m = t.jsx(ke, {
            color: n ? "secondary" : "primary",
            onClick: i,
            size: "small",
            "data-testid": "signup-button",
            children: t.jsx(w, { ...a
            })
        }, "signup"),
        f = n ? [u, m] : [m, u];
    return t.jsx("div", {
        className: "flex items-center justify-center gap-2",
        children: o ? f.reverse() : f
    })
}

function Ia() {
    return t.jsxs("div", {
        className: "relative will-change-transform",
        children: [t.jsx(It, {}), t.jsx("div", {
            className: "absolute right-[-3px] top-0 h-3 w-3 rounded-full border-2 border-token-main-surface-primary bg-blue-selection"
        })]
    })
}
const Pt = et({
    signUpCta: {
        id: "P6cySK",
        defaultMessage: "Sign up"
    },
    addTeammatesButton: {
        id: "inviteMemberButton.inviteMemberButton",
        defaultMessage: "Add Teammates"
    }
});
export {
    Ea as C, ba as E, ma as L, js as M, pa as N, fa as P, Cs as R, ka as U, wa as a, Ms as b, ta as c, ja as d, ve as e, Pa as f, Ss as x, Is as y
};
//# sourceMappingURL=m7u5z7sua6e1c9ci.js.map
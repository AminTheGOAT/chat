import {
    fx as S,
    fy as R,
    r as o,
    fz as E,
    fA as C,
    fB as y,
    fC as v,
    fD as P,
    a2 as _,
    m as s,
    fE as b,
    fF as g,
    fG as N,
    fH as A,
    fI as D,
    fJ as T,
    fK as B,
    fL as F,
    aD as d,
    fM as L,
    fN as Q,
    fO as $,
    fP as G,
    bR as O,
    fQ as U,
    fR as H,
    b$ as I,
    fS as M,
    fv as w,
    fT as f,
    aE as W,
    bp as q,
    fU as k
} from "./hbhpmx2ipkndwudc.js";
import "./mgr0w69u3c317psp.js";
var z = {};
S();
const Y = () => !1,
    X = () => [{
        title: "ChatGPT"
    }, ...B];

function p({
    children: e,
    isSearchPage: t,
    isElectron: r,
    isIos: n,
    isAndroidChrome: i,
    cspScriptNonce: a
}) {
    return s.jsxs("html", {
        "data-build": F,
        dir: "ltr",
        className: d({
            "snc-root": t,
            "sdtrn-root": r
        }),
        suppressHydrationWarning: !0,
        children: [s.jsxs("head", {
            children: [s.jsx("meta", {
                charSet: "UTF-8"
            }), s.jsx("meta", {
                name: "viewport",
                content: `width=device-width, initial-scale=1${n?", maximum-scale=1":""}`
            }), i ? s.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }) : null, s.jsx(L, {}), s.jsx(Q, {}), s.jsx($, {}), s.jsx(G, {})]
        }), s.jsxs("body", {
            className: d({
                snc: t
            }),
            children: [s.jsx(O.Provider, {
                value: {
                    cspScriptNonce: a,
                    isElectron: !!r
                },
                children: e
            }), s.jsx(U, {
                nonce: a
            })]
        })]
    })
}

function Z() {
    const e = H(),
        {
            cspNonce: t
        } = o.useContext(I);
    return s.jsx(p, {
        cspScriptNonce: t,
        children: M(e) ? e.status === 404 ? s.jsx(w, {}) : s.jsx(f, {
            error: new Error(`Route Error (${e.status} ${e.statusText}): ${e.message}`),
            resetError: () => location.reload()
        }) : s.jsx(f, {
            error: e,
            resetError: () => location.reload()
        })
    })
}

function J({
    children: e
}) {
    const {
        layer: t
    } = W("1358849452");
    return t.get("disable-ssr", !1) ? s.jsx(q, {
        children: e
    }) : e
}

function ss() {
    const {
        clientBootstrap: e,
        isIos: t,
        isAndroidChrome: r,
        isElectron: n,
        cspScriptNonce: i
    } = R(), [a] = o.useState(() => E()), {
        staticQueries: l,
        promiseQueries: x
    } = C(), u = o.useMemo(() => ({
        queries: [...l],
        mutations: []
    }), [l]), c = o.useRef(!1);
    y(a, x), c.current || (c.current = !0, v(a, u), k(e), P(a));
    const {
        pathname: m
    } = _(), h = m.startsWith("/search"), j = e.statsig ? ? null;
    return s.jsx(b, {
        statsig: z.FORCE_STATSIG_DEFAULTS ? null : j,
        children: s.jsx(p, {
            isIos: t,
            isAndroidChrome: r,
            isElectron: n,
            isSearchPage: h,
            cspScriptNonce: i,
            children: s.jsx(g, {
                attribute: "class",
                children: s.jsx(J, {
                    children: s.jsx(N, {
                        client: a,
                        children: s.jsx(A, {
                            state: u,
                            children: s.jsx(D, {
                                Component: T,
                                remixQueryClient: a,
                                pageProps: e
                            })
                        })
                    })
                })
            })
        })
    })
}
export {
    Z as ErrorBoundary, ss as
    default, X as meta, Y as shouldRevalidate
};
//# sourceMappingURL=fqg93o1w51mpyqar.js.map
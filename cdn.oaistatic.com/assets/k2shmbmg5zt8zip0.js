const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/ngr69qhps3fbziwh.js", "assets/hbhpmx2ipkndwudc.js", "assets/mgr0w69u3c317psp.js", "assets/root-ncdra6h0.css"]))) => i.map(i => d[i]);
import {
    $ as u,
    x as c,
    ab as f,
    s as S,
    L as y,
    aI as b,
    ad as l,
    r,
    y as g
} from "./hbhpmx2ipkndwudc.js";
import {
    i as w
} from "./ab2oz9enzsoo3wow.js";
async function m(e) {
    const t = await b(() =>
        import ("./ngr69qhps3fbziwh.js").then(a => a.i), __vite__mapDeps([0, 1, 2, 3]));
    if (l != null && e ? .startsWith(l)) return !0;
    try {
        return t.get(new URL(e ? ? "").hostname) === "openai.com"
    } catch {
        return !1
    }
}

function D(e, t) {
    const a = u();
    return S({
        queryKey: ["safe-url", {
            serverThreadId: e,
            url: t,
            isHistoryAndTrainingDisabled: a
        }],
        queryFn: async () => await m(t) || g.getThreadSafeUrls(e) ? .includes(t) ? {
            safe: !0
        } : y.getConversationSafeUrls(e, t, a),
        enabled: e != null && t != null
    })
}

function q(e, t, a = !0) {
    const o = c(s => e != null && t != null && f.isThreadUrlSafe(e, t, s)),
        {
            data: {
                safe: i
            } = {}
        } = D(e, o ? void 0 : t);
    return o || i || !a ? t : void 0
}

function C(e, t) {
    const [a, o] = r.useState(void 0), [i] = r.useState(() => w(s => {
        o(s)
    }, t));
    return r.useEffect(() => {
        i(e)
    }, [i, e]), a === e ? e : void 0
}

function E(e, t) {
    const a = u(),
        o = c(s => e == null ? [] : f.getThread(e, s) ? .safeUrls ? ? []),
        {
            data: i = []
        } = S({
            queryKey: ["safe-urls", e, t, a, o],
            queryFn: async () => {
                const s = o.filter(n => t.includes(n)),
                    d = t.filter(n => !s.includes(n)),
                    p = (await Promise.allSettled(d.map(async n => {
                        if (await m(n)) return n;
                        if (e == null) return null;
                        try {
                            return (await y.getConversationSafeUrls(e, n, a)).safe ? n : null
                        } catch {
                            return null
                        }
                    }))).map(n => n.status === "fulfilled" ? n.value : null).filter(n => n != null);
                return s.concat(p)
            },
            enabled: e != null && t.length > 0
        });
    return i
}
export {
    C as a, q as b, E as u
};
//# sourceMappingURL=k2shmbmg5zt8zip0.js.map
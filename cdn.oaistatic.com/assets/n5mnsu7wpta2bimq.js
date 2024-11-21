import {
    m as e,
    aD as d,
    a$ as C,
    as as F,
    gk as L,
    gl as M,
    aE as G,
    bq as E,
    aR as I,
    r as _
} from "./hbhpmx2ipkndwudc.js";
import {
    bW as P,
    bT as v,
    bX as w,
    bf as U,
    bY as q,
    bZ as A,
    ay as D,
    b_ as R,
    b$ as T,
    c0 as W,
    c1 as $,
    bu as B,
    c2 as H,
    c3 as u,
    c4 as j,
    c5 as O
} from "./ab2oz9enzsoo3wow.js";
import {
    m as b
} from "./m0s651bq7jimn9ko.js";

function se({
    clientThreadId: s
}) {
    const {
        isUnauthenticated: l
    } = C(), a = !l, n = F(s), i = L(s), t = M(), r = v(), c = w(), o = U(s), x = q(o), {
        promptStarters: m,
        isSuccess: h,
        isError: p
    } = A(n && !i, s, r ? 2 : 4, void 0, void 0, o ? ? void 0), f = m && m ? .length > 0, y = h && f && a && !x, {
        layer: N
    } = G("4031588851"), k = N.get("is_two_line", !1);
    return e.jsx(e.Fragment, {
        children: e.jsx(D, {
            children: (p || h) && e.jsxs(e.Fragment, {
                children: [e.jsx(E, {
                    className: `h-12 w-12 ${a?"":"max-sm:hidden"}`
                }), y && e.jsx(X, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .3
                    },
                    promptStarters: m,
                    onSelectStarterPrompt: c,
                    isSendBlocked: t,
                    clientThreadId: s,
                    isTwoLine: k
                }), !f && a && !x && e.jsx(g, {}), x ? e.jsx(R, {}) : null, p && a && e.jsx(g, {})]
            })
        })
    })
}

function g() {
    return e.jsx("div", {
        className: "mt-7 text-3xl",
        children: e.jsx(I, {
            id: "24tuqq",
            defaultMessage: "Hi, how can I help?"
        })
    })
}

function X({
    promptStarters: s,
    onSelectStarterPrompt: l,
    isSendBlocked: a,
    clientThreadId: n,
    isTwoLine: i,
    ...t
}) {
    return _.useEffect(() => {
        T(s, n)
    }, [n]), e.jsx(e.Fragment, {
        children: i ? e.jsx(b.div, { ...t,
            className: "absolute bottom-6 w-full px-4",
            children: e.jsx(W, {
                children: e.jsx(Z, {
                    starterPrompts: s,
                    onSelectStarterPrompt: l,
                    disabled: a
                })
            })
        }) : e.jsx(b.div, { ...t,
            children: e.jsx(S, {
                starterPrompts: s,
                onSelectStarterPrompt: l,
                disabled: a
            })
        })
    })
}
const Y = /\s/;

function S({
    starterPrompts: s,
    onSelectStarterPrompt: l,
    disabled: a,
    cssMobileDisplayLimit: n,
    marginOverride: i
}) {
    let t = s.map((r, c) => {
        let o = r.oneliner ? ? r.title;
        o === "" && (o = r.body);
        const x = Y.test(o);
        return e.jsxs("button", {
            className: d(n !== void 0 && c >= n && "max-sm:hidden", "relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed"),
            disabled: a,
            onClick: () => l(r, s, c),
            children: [e.jsx(P, {
                starterPrompt: r
            }), e.jsx("div", {
                className: d("line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500", x ? "break-word" : "break-all"),
                children: o
            })]
        }, r.id ? ? c)
    });
    if (t.length > 2) {
        const r = Math.floor(t.length / 2);
        t = [t.slice(0, r), t.slice(r)].map((c, o) => e.jsx("div", {
            className: "flex max-w-3xl flex-wrap items-stretch justify-center gap-4",
            children: c
        }, o))
    }
    return e.jsx("div", {
        className: d("mx-3 flex max-w-3xl flex-wrap items-stretch justify-center gap-4", i ? ? "mt-12"),
        children: t
    })
}

function Z({
    starterPrompts: s,
    onSelectStarterPrompt: l,
    disabled: a
}) {
    let n = s.map((t, r) => e.jsx("button", {
        className: "relative whitespace-nowrap rounded-2xl border border-token-border-light px-4 py-2 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed",
        disabled: a,
        onClick: () => l(t, s, r),
        children: e.jsxs("div", {
            className: "flex flex-col overflow-hidden",
            children: [t.title && e.jsx("div", {
                className: "truncate font-semibold",
                children: t.title
            }), e.jsx("div", {
                className: d("truncate font-normal", t.title ? "opacity-50" : ""),
                children: t.body
            })]
        })
    }, t.id ? ? r));
    const i = Math.floor(n.length / 2);
    return n = [n.slice(0, i), n.slice(i)].map((t, r) => e.jsx("div", {
        className: "flex flex-col gap-2",
        children: t
    }, r)), e.jsx("div", {
        className: "grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2",
        children: n
    })
}

function te({
    gizmo: s,
    hideOwner: l = !1,
    children: a,
    className: n,
    avatarClassName: i,
    showStarterPrompts: t = !1,
    disableStarterPrompts: r = !1
}) {
    return s == null ? null : e.jsx(e.Fragment, {
        children: e.jsxs("div", {
            className: d("flex h-full flex-col items-center justify-center text-token-text-primary", n),
            children: [e.jsx(J, {
                gizmo: s,
                avatarClassName: i
            }), e.jsx(Q, {
                gizmo: s,
                hideOwner: l,
                showStarterPrompts: t,
                disableStarterPrompts: r
            }), a]
        })
    })
}

function J({
    gizmo: s,
    avatarClassName: l
}) {
    const a = !!(s != null && $(s) && s ? .gizmo.tags ? .includes(B.FirstParty));
    return e.jsx("div", {
        className: "relative",
        children: e.jsx(H, {
            isFirstParty: a || !s,
            src: s != null && u(s) ? s.profilePictureUrl : s ? .gizmo.display.profile_picture_url,
            className: d("mb-3 h-12 w-12", l)
        })
    })
}

function K({
    gizmo: s,
    disabled: l
}) {
    const a = O(s),
        n = w(),
        i = v();
    if (a == null || a.length === 0) return null;
    const t = a.slice(0, i ? 2 : 4);
    return e.jsx(S, {
        starterPrompts: t,
        onSelectStarterPrompt: n,
        disabled: l
    })
}

function Q({
    gizmo: s,
    hideOwner: l,
    showStarterPrompts: a,
    disableStarterPrompts: n
}) {
    const i = s != null && u(s) ? s.name : s ? .gizmo.display.name,
        t = s != null && u(s) ? s.description : s ? .gizmo.display.description;
    return e.jsxs("div", {
        className: "flex flex-col items-center gap-2",
        children: [e.jsx("div", {
            className: "text-center text-2xl font-semibold",
            children: i
        }), !l && e.jsx("div", {
            className: "flex items-center gap-1 text-token-text-tertiary",
            children: e.jsx(e.Fragment, {
                children: s && u(s) ? e.jsx(j, {
                    gizmo: s
                }) : e.jsx(j, {
                    gizmo: s,
                    socials: s.gizmo.author.display_socials
                })
            })
        }), t && e.jsx("div", {
            className: "max-w-md text-center text-sm font-normal text-token-text-primary",
            children: t
        }), a && e.jsx(K, {
            gizmo: s,
            disabled: n
        })]
    })
}
export {
    te as G, J as L, Z as S, g as a, S as b, se as c
};
//# sourceMappingURL=n5mnsu7wpta2bimq.js.map
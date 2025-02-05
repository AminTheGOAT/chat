const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/gqr3pex5zhpbozli.js", "assets/hbhpmx2ipkndwudc.js", "assets/mgr0w69u3c317psp.js", "assets/root-ncdra6h0.css", "assets/ab2oz9enzsoo3wow.js", "assets/conversation-small-h7jqffb1.css", "assets/mpefdnord8h5w86b.js", "assets/i77hfpek3e927jy9.js", "assets/ea44kbra0vpz5pj1.js", "assets/gxmez8jjbdvqbxqc.js", "assets/ex1buqdicemvrfma.js", "assets/m0s651bq7jimn9ko.js", "assets/m7u5z7sua6e1c9ci.js", "assets/nb6f1twu9li01ii9.js"]))) => i.map(i => d[i]);
import {
    u as h,
    m as e,
    r as g,
    aD as r,
    eS as S,
    br as p,
    aR as x,
    aH as m,
    aI as b,
    G as f,
    aY as v,
    aa as j,
    aJ as w,
    eo as I,
    Z as k,
    a$ as N,
    d2 as C,
    ap as T
} from "./hbhpmx2ipkndwudc.js";
import {
    bK as l,
    bL as d,
    bM as y,
    bN as A,
    bO as G,
    bP as M,
    bQ as P,
    bR as L,
    bS as z,
    bT as _,
    bU as D,
    aF as O,
    bs as E,
    bV as B,
    U as u,
    an as F,
    ao as U
} from "./ab2oz9enzsoo3wow.js";
import {
    N as R,
    L as H,
    aK as V,
    aA as K
} from "./mgr0w69u3c317psp.js";
import {
    m as W
} from "./m0s651bq7jimn9ko.js";
import {
    N as X
} from "./m7u5z7sua6e1c9ci.js";

function Y() {
    const s = l(d.SonicSidebar),
        [a, t] = g.useState(!1);
    return s.isLoading || !s.eligible ? null : e.jsx(W.div, {
        className: "no-draggable group pb-0",
        whileTap: {
            scale: .98
        },
        children: e.jsx(J, {
            children: e.jsx(y, {
                href: "/search",
                target: "_blank",
                icon: e.jsx("div", {
                    className: r("gizmo-shadow-stroke mr-[0.5] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),
                    children: e.jsx(A, {})
                }),
                label: "SearchGPT",
                hoverRightIcon: e.jsxs("div", {
                    className: "flex gap-3",
                    children: [e.jsx(Q, {
                        isOpen: a,
                        setIsOpen: t,
                        onDismiss: () => s.markAsViewed()
                    }), e.jsx(R, {
                        className: r("icon-md text-token-text-tertiary", !a && "invisible group-hover:visible")
                    })]
                }),
                isMenuOpen: !1,
                loggingGizmoId: "search-gpt-sidebar"
            })
        })
    })
}

function q() {
    const s = M(),
        a = l(d.hasSeenSncSidebarTooltip),
        t = P(),
        n = L(),
        {
            activeModals: i
        } = z(),
        o = _();
    return !a.isLoading && a.eligible && !t && i.size === 0 && !s && !n && !o
}

function J({
    children: s
}) {
    const a = q(),
        t = l(d.hasSeenSncSidebarTooltip);
    return a ? e.jsx(G, {
        side: "right",
        show: !0,
        badge: "new",
        title: "Try SearchGPT",
        onDismiss: t.markAsViewed,
        sideOffset: 10,
        theme: "bright",
        description: "You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",
        children: e.jsx("div", {
            className: "w-full",
            children: s
        })
    }) : e.jsx(e.Fragment, {
        children: s
    })
}

function Q({
    isOpen: s,
    setIsOpen: a,
    onDismiss: t
}) {
    return e.jsx(S, {
        open: s,
        onOpenChange: a,
        triggerButton: e.jsx("button", {
            className: r("flex text-token-text-tertiary", s ? "" : "invisible group-hover:visible"),
            onClick: n => {
                n.preventDefault()
            },
            children: e.jsx(H, {
                className: "icon-md"
            })
        }),
        children: e.jsx(p.Item, {
            onClick: n => {
                n.preventDefault(), t()
            },
            children: e.jsx(x, {
                id: "sidebar.hideFromSidebar",
                defaultMessage: "Hide from sidebar"
            })
        })
    })
}

function Z() {
    const s = h("114024");
    return !s.value || s.isLoading ? null : e.jsx(Y, {})
}
const $ = m(() => b(() =>
        import ("./gqr3pex5zhpbozli.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])).then(s => s.FannyPackAction)),
    ee = m(() => b(() =>
        import ("./gxmez8jjbdvqbxqc.js"), __vite__mapDeps([9, 1, 2, 3, 10, 4, 5, 11, 12, 13])).then(s => s.GizmoSidebarList));

function re({
    clientThreadId: s,
    onNewThread: a
}) {
    const t = I(s),
        n = k(),
        {
            isUnauthenticated: i
        } = N(),
        o = C(s),
        c = T();
    return i ? null : e.jsxs(e.Fragment, {
        children: [e.jsx(F, {
            onNewThread: a
        }), n ? .canInteractWithGizmos() ? e.jsx(ee, {
            currentGizmoId: o
        }) : e.jsx(Z, {}), !1, !i && e.jsx(U, {
            activeId: c ? void 0 : t
        })]
    })
}

function ce({
    className: s,
    onNewThread: a
}) {
    const t = f(),
        n = v(),
        i = D(),
        o = j(() => navigator.windowControlsOverlay),
        {
            isFannyPackEnabled: c
        } = O();
    return e.jsxs("div", {
        className: r("flex", o ? .visible && o.getTitlebarAreaRect().left > 0 ? "justify-end" : "justify-between", s),
        children: [e.jsx(w, {
            sideOffset: 4,
            label: t.formatMessage({
                id: "e7SzX9",
                defaultMessage: "Close sidebar"
            }),
            className: "flex",
            side: "right",
            children: e.jsx(E, {
                className: "no-draggable",
                "aria-label": t.formatMessage({
                    id: "e7SzX9",
                    defaultMessage: "Close sidebar"
                }),
                onClick: () => {
                    B(n) ? u.toggleNavSidebar() : u.togglePopoverNavSidebar()
                },
                icon: V,
                mobileIcon: K,
                surfaceContext: "secondary",
                "data-testid": "close-sidebar-button"
            })
        }), e.jsxs("div", {
            className: "flex",
            children: [c && e.jsx($, {}), !i && e.jsx(X, {
                onClick: a,
                testId: "create-new-chat-button"
            })]
        })]
    })
}
export {
    re as C, ce as S, Z as a
};
//# sourceMappingURL=ky07c7gm4e4zomhb.js.map
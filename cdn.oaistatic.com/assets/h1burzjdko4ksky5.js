const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/o2wst9wli4xmp0ht.js", "assets/hbhpmx2ipkndwudc.js", "assets/mgr0w69u3c317psp.js", "assets/root-ncdra6h0.css", "assets/ibyggr6trj8ybd0e.js", "assets/ab2oz9enzsoo3wow.js", "assets/conversation-small-h7jqffb1.css", "assets/f23evx1hkgbz32wj.js", "assets/bv1tgraszqspgaxz.js", "assets/t7u8ciwlz2voun1n.js", "assets/hxvlxwkzr288aynn.js", "assets/m0s651bq7jimn9ko.js", "assets/n5mnsu7wpta2bimq.js", "assets/m7u5z7sua6e1c9ci.js", "assets/le5v2hqvx6xa2eig.js"]))) => i.map(i => d[i]);
import {
    m as e,
    aH as R,
    aI as A,
    r as l,
    gS as B,
    gT as $,
    gk as z,
    gc as G,
    bp as W,
    fr as n,
    aD as T,
    y as J,
    ay as Q,
    fq as Y,
    as as Z,
    G as K,
    d2 as X,
    aJ as ee,
    dP as se,
    S as ae,
    F as ne,
    fo as te,
    eQ as re
} from "./hbhpmx2ipkndwudc.js";
import {
    eU as E,
    eV as oe,
    eW as ie,
    eX as O,
    eY as ce,
    eZ as de,
    bY as le,
    e_ as he,
    e$ as N,
    f0 as me,
    f1 as ue,
    f2 as Ce,
    f3 as xe,
    f4 as pe,
    f5 as fe,
    b7 as Te,
    f6 as ge,
    f7 as ve,
    f8 as U,
    f9 as je,
    al as b,
    fa as Se,
    dW as Ie,
    bx as we,
    fb as ye,
    j as Ne,
    fc as be,
    fd as Ee,
    fe as Le,
    ff as Me,
    fg as _e,
    fh as He,
    ca as ke,
    fi as Pe,
    fj as P,
    eI as Fe,
    eJ as De
} from "./ab2oz9enzsoo3wow.js";
import {
    S as Re,
    E as Ae,
    C as F,
    a as Be,
    b as We
} from "./f23evx1hkgbz32wj.js";
import {
    K as Oe
} from "./mgr0w69u3c317psp.js";
import {
    C as Ue
} from "./nqxrsem62j81khrd.js";

function Ve({
    clientThreadId: s,
    currentModelId: o,
    isModelLoaded: a,
    onRequestCompletion: r,
    v2HomepageDisclaimer: t
}) {
    return e.jsx(Re, {
        clientThreadId: s,
        currentModelId: o,
        isModelLoaded: a,
        onRequestCompletion: r,
        v2HomepageDisclaimer: t
    })
}
const qe = R(() => A(() =>
    import ("./o2wst9wli4xmp0ht.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])).then(s => s.ChatScreenContentModals));

function $e({
    disableEmptyState: s,
    fullWidth: o
}) {
    const {
        clientThreadId: a,
        currentModelId: r,
        conversationLeafId: t,
        isCompanionWindow: h,
        isEmbeddedInFocusedView: d,
        onChangeItemInView: m,
        onChangeRating: C,
        onRequestCompletion: i,
        onRequestMoreCompletions: u,
        isModelLoaded: x,
        prefetchSearch: S
    } = l.useContext(E), p = B(a, t), g = $(a), f = {
        clientThreadId: a,
        conversationLeafId: t,
        currentModelId: r,
        onChangeItemInView: m,
        onChangeRating: C,
        onRequestMoreCompletions: u,
        onRequestCompletion: i,
        showAvatar: !1
    }, I = z(a), w = oe({
        clientThreadId: a,
        currentLeafId: t,
        handleRequestCompletion: i,
        prefetchSearchPromise: S
    }), v = I || w || s, j = G(), {
        initialConversationTurns: L,
        continuedConversationTurns: M
    } = ie(p, j), {
        canUseNewHomepage: _,
        showEmptyState: H
    } = O({
        clientThreadId: a,
        currentLeafId: t
    }), V = p >= 2;
    ce(V);
    const {
        setTargetedContent: k
    } = de(), q = le(r);
    if (he(() => {
            fe(), J.updateScrollToMessageId(a, "finalAgentTurn")
        }), l.useEffect(() => {
            d || k(void 0)
        }, [a, k, d]), _ && H && !v) {
        const c = h ? null : e.jsx("div", {
            className: "text-center text-xs text-token-text-secondary",
            children: e.jsx(N, {
                clientThreadId: a
            })
        });
        return e.jsx(Ve, {
            clientThreadId: a,
            currentModelId: r,
            isModelLoaded: x,
            onRequestCompletion: i,
            v2HomepageDisclaimer: c
        })
    } else if (!_ && H && !v) return e.jsx(Ae, {
        clientThreadId: a,
        currentModelId: r,
        isModelLoaded: x,
        onRequestCompletion: i,
        enableV2Homepage: !q,
        v2HomepageDisclaimer: e.jsx(N, {
            clientThreadId: a
        })
    });
    return e.jsxs(e.Fragment, {
        children: [j && e.jsx(me, {}), j && M.length === 0 && e.jsx(ue, {}), e.jsx(W, {
            children: e.jsxs(l.Suspense, {
                fallback: null,
                children: [e.jsx(Ce, {}), L.length > 0 && e.jsx("ol", {
                    className: n.conversationTurnList,
                    children: L.map(({
                        turnIndex: c,
                        isFinalTurn: y
                    }) => e.jsx("li", {
                        className: T(n.conversationTurnWrapper, o && "w-full"),
                        children: l.createElement(F, { ...f,
                            key: `${a}-${c}`,
                            turnIndex: c,
                            isFinalTurn: y,
                            scrollToMessageId: g
                        })
                    }, c))
                }), j && e.jsx(xe, {}), e.jsx("ol", {
                    className: n.conversationTurnList,
                    children: M.map(({
                        turnIndex: c,
                        isFinalTurn: y
                    }) => e.jsx("li", {
                        className: T(n.conversationTurnWrapper, o && "w-full"),
                        children: l.createElement(F, { ...f,
                            key: `${a}-${c}`,
                            turnIndex: c,
                            isFinalTurn: y,
                            scrollToMessageId: g
                        })
                    }, c))
                })]
            })
        }), e.jsx(qe, {}), p > 0 && e.jsx(pe, {})]
    })
}

function ze() {
    return e.jsx($e, {})
}
const Ge = R(() => A(() =>
    import ("./f23evx1hkgbz32wj.js").then(s => s.c), __vite__mapDeps([7, 1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14])).then(s => s.ChatScreenComposerAlerts));

function Je() {
    const {
        clientThreadId: s,
        currentModelId: o,
        isCompanionWindow: a,
        onRequestCompletion: r
    } = l.useContext(E), t = Te(s), h = Q(s), d = B(s, h), m = d >= 2, C = Y(s, h), i = Z(s) && !m && ge(t);
    ve(d, s, h, i);
    const {
        setComposerFooterElement: u
    } = l.useContext(U);
    return e.jsx("div", {
        className: n.footer,
        children: e.jsxs(je, {
            style: {
                "--bar-gap": "0.5rem",
                "--bar-background-color": "transparent"
            },
            children: [e.jsxs(b, {
                type: "secondary",
                className: "relative",
                children: [m && e.jsx(Se, {
                    className: n.scrollButton
                }), e.jsx(Ge, {})]
            }), e.jsxs(b, {
                type: "primary",
                ref: u,
                name: "composer-bar",
                children: [e.jsx(Be, {
                    clientThreadId: s,
                    currentModelId: o,
                    isNewThread: i,
                    noWrap: !0,
                    onRequestCompletion: r,
                    showPromptStarters: i || !C
                }), !a && e.jsx("div", {
                    className: "text-center text-xs text-token-text-secondary",
                    children: e.jsx(N, {
                        clientThreadId: s
                    })
                })]
            })]
        })
    })
}

function Qe() {
    const s = K(),
        {
            clientThreadId: o,
            isLoggedInUser: a,
            onNewThread: r
        } = l.useContext(E);
    return X(o), e.jsxs(b, {
        leading: !0,
        type: "primary",
        className: n.header,
        children: [e.jsxs("div", {
            className: n.headerLeading,
            children: [a && e.jsx(Ie, {}), e.jsx(ee, {
                label: s.formatMessage(D.newChat),
                className: "hidden @lg/screen-composer:inline-flex",
                children: e.jsx(se, {
                    to: "/",
                    className: n.newThread,
                    onClick: t => {
                        r ? (t.preventDefault(), r()) : ae.logEvent("chatgpt_web_thread_tap_new_thread")
                    },
                    tabIndex: 0,
                    children: e.jsx(we, {
                        className: T(n.sidebarIcon),
                        icon: e.jsx(Oe, {}),
                        tabIndex: -1,
                        label: s.formatMessage(D.newChat),
                        style: {
                            viewTransitionName: "var(--vt_new_chat_thread)"
                        }
                    })
                })
            }), e.jsx("div", {
                className: n.threadDropdown,
                children: e.jsx(ye, {
                    clientThreadId: o
                })
            })]
        }), e.jsx("div", {
            className: n.headerTrailing,
            children: e.jsx(W, {
                children: e.jsx(We, {
                    clientThreadId: o
                })
            })
        })]
    })
}
const D = ne({
    newChat: {
        id: "rnCpM4",
        defaultMessage: "New Chat"
    }
});

function ss({
    hideHeader: s = !1,
    hideFooter: o = !1,
    hideTools: a = !1,
    embedded: r = !1
}) {
    const {
        clientThreadId: t,
        currentModelId: h,
        conversationLeafId: d,
        isCompanionWindow: m,
        isInstalledApp: C,
        onRequestCompletion: i
    } = Ne(), {
        canUseNewHomepage: u,
        showEmptyState: x
    } = O({
        clientThreadId: t,
        currentLeafId: d
    }), S = be()[h], [p, g] = Ee({
        name: "composer-bar",
        track: "height"
    }), f = Le(t), I = Me(), w = te(), v = o || x && u;
    return e.jsx(re.Provider, {
        value: i,
        children: e.jsx(_e, {
            children: e.jsxs(He, {
                clientThreadId: t,
                currentLeafId: d,
                children: [e.jsx(ke, {
                    children: f != null && e.jsx("title", {
                        children: f
                    })
                }), e.jsx(Pe, {
                    clientThreadId: t,
                    className: T(r && "h-full", "flex-1"),
                    currentModelConfig: S,
                    children: e.jsx(U.Provider, {
                        value: {
                            setComposerFooterElement: g
                        },
                        children: e.jsxs("div", {
                            className: "h-full",
                            style: {
                                container: "thread-container / inline-size"
                            },
                            children: [e.jsx(P, {
                                id: "canvas-state",
                                name: "canvas-state",
                                checked: I
                            }), e.jsx(P, {
                                id: "thread-extended-info-sidebar-state",
                                name: "thread-extended-info-sidebar-state",
                                checked: w
                            }), e.jsx(Fe, {
                                anchor: "vertical",
                                className: T(n.screen, x && u && n.screenEmptyState, m && n.screenCompanionWindow, C && n.screenInstalledApp, r && n.screenEmbedded),
                                name: "thread",
                                leading: !s && e.jsx(Qe, {}),
                                style: p,
                                trackLeading: !0,
                                trackTrailing: !0,
                                trailing: !v && e.jsx(Je, {}),
                                children: e.jsx(ze, {})
                            }), !m && !a && e.jsxs(e.Fragment, {
                                children: [e.jsx(Ue, {}), e.jsx(De, {})]
                            })]
                        })
                    })
                })]
            })
        })
    })
}
export {
    ss as C
};
//# sourceMappingURL=h1burzjdko4ksky5.js.map
import {
    a2 as E,
    r as m,
    m as e,
    bF as F,
    bG as O,
    bw as D,
    bz as G,
    aD as p,
    a$ as S,
    P as f,
    aX as w,
    aR as r,
    c8 as _,
    F as V,
    a3 as X,
    eS as q,
    br as b,
    u as K,
    fo as Y,
    eX as Z,
    aG as C,
    bp as $
} from "./hbhpmx2ipkndwudc.js";
import {
    bS as v,
    U as d,
    cl as J,
    dC as Q,
    ai as k,
    aj as W,
    dA as ee,
    ed as N,
    cN as ae,
    l as te,
    ee as ne,
    ay as se,
    bP as ie
} from "./ab2oz9enzsoo3wow.js";
import {
    aA as re,
    K as oe,
    b4 as le,
    aV as de,
    ai as ce
} from "./mgr0w69u3c317psp.js";
import {
    U as ue
} from "./nb6f1twu9li01ii9.js";
import {
    d as ge,
    N as M
} from "./m7u5z7sua6e1c9ci.js";
import {
    m as B
} from "./m0s651bq7jimn9ko.js";

function Ue({
    onClick: t,
    className: n,
    ...a
}) {
    return e.jsx(ge, {
        onClick: t,
        className: p(n, "flex-grow overflow-hidden"),
        ...a
    })
}

function Ae({
    onNewChatButtonClick: t
}) {
    const {
        isUnauthenticated: n,
        isLoading: a
    } = S();
    return a || !n ? null : e.jsx(M, {
        className: "mr-3",
        onClick: () => {
            f.logNewChatButtonClicked({
                location: "Mobile header"
            }), t()
        }
    })
}

function Te({
    onNewChatButtonClick: t
}) {
    const {
        isUnauthenticated: n,
        isLoading: a
    } = S(), s = Q();
    return a ? null : n ? s ? e.jsx(xe, {}) : e.jsx(fe, {}) : e.jsx(M, {
        onClick: () => {
            f.logNewChatButtonClicked({
                location: "Mobile header"
            }), t()
        }
    })
}

function fe() {
    const t = k(),
        n = W(U.signUpButtonText);
    return e.jsx(w, {
        as: "button",
        size: "small",
        color: "primary",
        onClick: () => {
            t({
                authType: "signup",
                callback: a => {
                    f.logSignUpButtonClicked({
                        location: "Mobile Chat Stage Header",
                        provider: a
                    })
                }
            })
        },
        children: e.jsx(r, { ...n
        })
    })
}

function xe() {
    const t = k();
    return e.jsx(w, {
        as: "button",
        size: "small",
        color: "primary",
        onClick: () => {
            t({
                authType: "login",
                callback: n => {
                    f.logLogInButtonClicked({
                        location: "Mobile Chat Stage Header",
                        provider: n
                    })
                }
            })
        },
        "data-testid": "mobile-login-button",
        children: e.jsx(r, { ..._.logInButtonText
        })
    })
}

function he({
    onClick: t
}) {
    return e.jsxs("button", {
        type: "button",
        className: "inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",
        onClick: t,
        "data-testid": "open-sidebar-button",
        children: [e.jsx("span", {
            className: "sr-only",
            children: e.jsx(r, { ...U.openSidebar
            })
        }), e.jsx(re, {
            className: "icon-lg mx-2 text-token-text-secondary"
        })]
    })
}
const be = ({
    onClickOpenSidebar: t,
    children: n,
    showNavSidebar: a,
    leftContent: s,
    rightContent: c,
    bottomContent: u
}) => {
    const g = v(l => l.activeSidebar),
        o = E(),
        x = o.pathname + o.search + o.hash;
    return m.useEffect(() => {
        g === "popover-nav" && d.setActiveSidebar(!1)
    }, [x]), e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden",
            children: [(a || s) && e.jsxs("div", {
                className: "no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center",
                children: [a && e.jsx(he, {
                    onClick: t
                }), s]
            }), e.jsx("div", {
                className: "no-draggable",
                children: n
            }), c && e.jsx("div", {
                className: "no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center",
                children: c
            })]
        }), u && e.jsx("div", {
            className: "no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden",
            children: u
        })]
    })
};

function me({
    isPopoverOnDesktop: t = !1,
    isExpanded: n = !1,
    children: a
}) {
    const s = J();
    return e.jsxs(e.Fragment, {
        children: [!s || t ? e.jsx(Se, {
            children: a
        }) : null, e.jsx(pe, {
            isExpanded: !t && n,
            children: a
        })]
    })
}

function pe({
    isExpanded: t,
    children: n
}) {
    const a = m.useRef(null);
    return e.jsx(B.div, {
        className: "z-[21] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",
        ref: a,
        initial: !1,
        animate: {
            width: t ? "260px" : 0,
            transition: {
                type: "spring",
                bounce: .12,
                duration: .64
            }
        },
        onAnimationStart: () => {
            a.current && (a.current.style.visibility = "visible")
        },
        onAnimationComplete: () => {
            a.current && (t || (a.current.style.visibility = "hidden"))
        },
        children: e.jsx("div", {
            className: "h-full w-[260px]",
            children: e.jsx("div", {
                className: "flex h-full min-h-0 flex-col",
                children: n
            })
        })
    })
}

function Se({
    children: t
}) {
    const n = v(a => a.activeSidebar);
    return e.jsx(F, {
        open: n === "popover-nav",
        onOpenChange: a => {
            a || d.setActiveSidebar(!1)
        },
        children: e.jsxs(O, {
            children: [e.jsx(D, {
                className: "fixed inset-0 z-10 bg-gray-50/50 radix-state-open:animate-show dark:bg-black/50"
            }), e.jsx(G, {
                className: "fixed left-0 top-0 z-50 h-full max-w-xs border-r border-gray-200 bg-token-sidebar-surface-primary shadow-[0_0_64px_0_rgba(0,0,0,0.07)] focus:outline-none radix-state-closed:animate-sidebarHide radix-state-open:animate-sidebarShow dark:border-gray-800",
                children: t
            })]
        })
    })
}
const U = V({
        closeSidebar: {
            id: "navigation.closeSidebar",
            defaultMessage: "Close sidebar"
        },
        openSidebar: {
            id: "navigation.openSidebar",
            defaultMessage: "Open sidebar"
        },
        signUpButtonText: {
            id: "navigation.signUpButtonText",
            defaultMessage: "Sign up"
        }
    }),
    ve = () => {
        const {
            openSettings: t
        } = ee(), n = K("3376455464") ? .value, a = X();
        return e.jsxs("div", {
            className: "flex h-full flex-col gap-2 p-3",
            children: [e.jsx(N, {
                icon: oe,
                onClick: () => {
                    ae(a), d.closeActiveSidebar()
                },
                children: e.jsx(r, {
                    id: "0FupYP",
                    defaultMessage: "New chat"
                })
            }), e.jsx("div", {
                className: "flex grow items-center justify-center",
                children: e.jsx(ue, {})
            }), e.jsxs(q, {
                contentClassName: "w-[298px]",
                triggerButton: e.jsx(N, {
                    icon: le,
                    children: e.jsx(r, {
                        id: "y4Lkp7",
                        defaultMessage: "Settings and more"
                    })
                }),
                children: [e.jsx(b.Item, {
                    onClick: () => t(),
                    icon: de,
                    children: e.jsx(r, {
                        id: "HrRLkZ",
                        defaultMessage: "Settings"
                    })
                }), n && e.jsx(b.Item, {
                    icon: ce,
                    onClick: () => {
                        d.openModal(te.ReportConversation)
                    },
                    children: e.jsx(r, {
                        id: "thread.report.0",
                        defaultMessage: "Report illegal content"
                    })
                }), e.jsx(b.Separator, {}), e.jsx(ne, {})]
            })]
        })
    };

function je({
    isExpanded: t,
    children: n
}) {
    const a = m.useRef(null);
    return e.jsx(se, {
        children: e.jsx(B.div, {
            className: "z-[1] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",
            ref: a,
            initial: !1,
            animate: {
                width: t ? "400px" : 0,
                transition: {
                    type: "spring",
                    bounce: .12,
                    duration: .3
                }
            },
            onAnimationStart: () => {
                a.current && (a.current.style.visibility = "visible")
            },
            onAnimationComplete: () => {
                a.current && (t || (a.current.style.visibility = "hidden"))
            },
            children: e.jsx("div", {
                className: p("absolute h-full w-[400px]", !t && "pointer-events-none"),
                children: e.jsx("div", {
                    className: "flex h-full flex-col",
                    children: n
                })
            })
        })
    })
}

function A({
    children: t,
    hideNavigation: n = !1,
    mobileHeaderContent: a,
    mobileHeaderLeftContent: s,
    mobileHeaderRightContent: c,
    mobileHeaderBottomContent: u,
    sidebar: g,
    threadFlyout: o,
    forceOpenDesktopSidebar: x = !1
}) {
    const {
        isUnauthenticated: l
    } = S(), [T, L] = v(i => [i.activeStageSidebar, i.activeSidebar]), R = Y(), I = Z("searchSources"), P = ie(), j = [];
    let y = null;
    C.Children.forEach(t, i => {
        C.isValidElement(i) && (i.type === A.Sidebars ? y = i : j.push(i))
    });
    const h = !l && !n && g != null,
        z = !n && (h || l),
        H = R && !!I;
    return e.jsxs("div", {
        className: p("relative flex h-full w-full overflow-hidden transition-colors", L !== "popover-nav" && "z-0"),
        children: [h && e.jsx(me, {
            isExpanded: x || !P,
            isPopoverOnDesktop: T,
            children: l ? e.jsx(ve, {}) : g
        }), e.jsxs("div", {
            className: "relative flex h-full max-w-full flex-1 flex-col overflow-hidden",
            children: [z && e.jsx(be, {
                onClickOpenSidebar: () => d.togglePopoverNavSidebar(),
                showNavSidebar: h,
                leftContent: s,
                rightContent: c,
                bottomContent: u,
                children: a
            }), e.jsx("main", {
                className: "relative h-full w-full flex-1 overflow-auto transition-width",
                children: j
            })]
        }), e.jsx($, {
            children: e.jsx(je, {
                isExpanded: H,
                children: o
            })
        }), y]
    })
}

function ye({
    children: t
}) {
    return e.jsx(e.Fragment, {
        children: t
    })
}
A.Sidebars = ye;
export {
    A as S, Ue as a, Ae as b, Te as c
};
//# sourceMappingURL=dc04xqeim5g7thtb.js.map
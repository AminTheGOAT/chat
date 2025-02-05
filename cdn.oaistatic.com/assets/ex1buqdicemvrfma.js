import {
    eo as Y,
    G,
    r as u,
    Z as F,
    m as e,
    aJ as T,
    F as q,
    dP as $,
    aR as z,
    eS as J,
    aD as y,
    bp as L,
    d2 as Q,
    a$ as w,
    fu as I,
    bV as X,
    bW as ee,
    gi as se,
    fp as A
} from "./hbhpmx2ipkndwudc.js";
import {
    j as E,
    bu as te,
    eL as ae,
    iT as M,
    bM as ne,
    aB as ie,
    c2 as oe,
    iU as C,
    iV as re,
    iW as le,
    bS as P,
    iX as ce,
    dV as de,
    U as _,
    ed as me,
    ak as ue,
    iY as ge,
    i1 as xe,
    i2 as fe,
    iZ as pe,
    i_ as v,
    i$ as he,
    j0 as p,
    cO as Se,
    j1 as be,
    j2 as je,
    j3 as ve,
    dA as Ce,
    j4 as B,
    al as U,
    j5 as ke,
    j6 as ye,
    j7 as Ie,
    j8 as k,
    f9 as ze,
    dB as Ne,
    j9 as Me,
    ja as Ge,
    jb as Fe,
    eI as Te,
    jc as Oe,
    jd as Le
} from "./ab2oz9enzsoo3wow.js";
import {
    as as we,
    bu as Ae,
    x as Ee,
    aw as Pe,
    K as _e,
    b7 as Be,
    L as D,
    aG as Ue,
    ad as De
} from "./mgr0w69u3c317psp.js";
import {
    m as W
} from "./m0s651bq7jimn9ko.js";
import {
    a as We
} from "./m7u5z7sua6e1c9ci.js";
import {
    U as Re,
    P as He
} from "./nb6f1twu9li01ii9.js";

function Ke({
    gizmo: s,
    historyDisabled: i,
    section: a,
    onClick: r,
    isActive: d,
    hideOverflowMenu: x = !1
}) {
    const {
        clientThreadId: l
    } = E();
    Y(l);
    const c = G(),
        [g, h] = u.useState(!1),
        [n, S] = u.useState(!1),
        [t, o] = u.useState(!1),
        m = F(),
        f = !!s ? .gizmo.tags ? .includes(te.FirstParty),
        b = !1;
    let Z = !1;
    const [V, Xe] = u.useState(0);
    let j;
    if (s != null) j = s.gizmo.display.name || ae;
    else {
        if (m == null) return null;
        i ? j = c.formatMessage(M.clearChat) : m.canInteractWithGizmos() ? j = le : j = c.formatMessage({
            id: "GizmoSidebarListItem.newChat",
            defaultMessage: "New chat"
        })
    }
    return e.jsxs(e.Fragment, {
        children: [e.jsx(W.div, {
            whileTap: {
                scale: .98
            },
            onMouseEnter: () => {
                S(!0)
            },
            onMouseLeave: () => {
                S(!1)
            },
            children: e.jsx(ne, {
                loggingGizmoId: s ? .gizmo.id ? ? "primary",
                href: s != null ? ie(s) : "/",
                onClick: r,
                showActiveIndicator: Z,
                icon: e.jsx(oe, {
                    gizmoId: s ? .gizmo.id,
                    isFirstParty: s == null || f,
                    gizmoEmoji: s ? .gizmo.display.emoji,
                    src: s ? .gizmo.display.profile_picture_url,
                    className: "h-6 w-6"
                }),
                isMenuOpen: g,
                label: j,
                hoverLeftIcon: n && s && b && V && e.jsx("button", {
                    onClick: N => {
                        N.preventDefault(), o(!t)
                    },
                    className: "flex text-token-text-secondary hover:text-token-text-primary",
                    children: e.jsx("div", {
                        className: "h-6 w-6",
                        children: e.jsx("div", {
                            className: "relative flex h-full items-center justify-center text-token-text-primary",
                            children: t ? e.jsx(we, {
                                className: "icon-md"
                            }) : e.jsx(Ae, {
                                className: "icon-md"
                            })
                        })
                    })
                }),
                rightIcon: a === C.Workspace && e.jsx(T, {
                    side: "right",
                    label: c.formatMessage(O.workspaceRecommended, {
                        workspace_name: m ? .name ? ? "Your Workspace"
                    }),
                    children: e.jsx(Ee, {
                        className: "icon-md text-token-text-secondary",
                        alt: c.formatMessage(O.workspaceRecommended, {
                            workspace_name: m ? .name ? ? "Your Workspace"
                        })
                    })
                }),
                hoverRightIcon: e.jsxs("div", {
                    className: "flex gap-2",
                    children: [(n || g) && s != null && !b && !x && e.jsx("div", {
                        className: "text-token-text-tertiary",
                        onClick: N => {
                            N.preventDefault()
                        },
                        children: e.jsx(re, {
                            gizmo: s,
                            isOpen: g,
                            setIsOpen: h,
                            section: a
                        })
                    }), !x && e.jsx(T, {
                        side: "right",
                        label: c.formatMessage(i ? M.clearChat : M.newChat),
                        className: "flex items-center",
                        children: e.jsx("button", {
                            className: g ? "text-token-text-tertiary" : "invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",
                            children: i ? e.jsx(Pe, {
                                className: "icon-md"
                            }) : e.jsx(_e, {
                                className: "icon-md"
                            })
                        })
                    })]
                })
            })
        }), !1]
    })
}
const O = q({
    workspaceRecommended: {
        id: "gizmo.workspaceRecommended",
        defaultMessage: "Recommended at {workspace_name}"
    }
});

function R() {
    const s = G(),
        i = P(),
        a = s.formatMessage({
            id: "gizmo.exploreStoreEnabled",
            defaultMessage: "Explore GPTs"
        });
    return e.jsx(ce, {
        children: e.jsx(W.div, {
            whileTap: {
                scale: .98
            },
            children: e.jsx($, {
                to: de(),
                onClick: () => {
                    i.activeSidebar === "popover-nav" && _.setActiveSidebar(!1)
                },
                children: e.jsx(me, {
                    icon: Be,
                    "data-testid": "explore-gpts-button",
                    children: a
                })
            }, "explore")
        })
    })
}
const Ze = 2;

function H({
    gizmos: s,
    isGizmoFlyout: i,
    isLoaded: a,
    maxToShowOnLoad: r = 4,
    isScreenArch: d,
    showAllSidebarItems: x
}) {
    const l = pe(s, o => o.flair.kind),
        c = [...(l[v.Workspace] ? .map(({
            resource: o
        }) => ({
            gizmo: o,
            section: C.Workspace
        })) ? ? []).slice(0, 3), ...l[v.FirstParty] ? .map(({
            resource: o
        }) => ({
            gizmo: o,
            section: C.Keep
        })) ? ? [], ...l[v.SidebarKeep] ? .map(({
            resource: o
        }) => ({
            gizmo: o,
            section: C.Keep
        })) ? ? []],
        g = l[v.Recent] ? .slice(0, d || a ? l[v.Recent] ? .length : Ze).map(({
            resource: o
        }) => ({
            gizmo: o,
            section: C.Recents
        })) ? ? [],
        h = g.length,
        n = c.length,
        S = d ? h > 0 : s.length > r;
    let t = [];
    return i && d ? t = [...c, ...g] : !i && d ? t = c : (t = [...c, ...g], x || (t.length > r && n > r ? t = t.slice(0, n) : t.length > r && (t = t.slice(0, r)))), {
        listItems: t,
        itemsLeft: s.length - t.length,
        needsToCollapseItems: S,
        total: s.length
    }
}

function K({
    gizmo: s,
    currentGizmoId: i,
    maxToShowOnLoad: a,
    hideOverflowMenu: r = !1
}) {
    const d = u.useRef(!1),
        x = !a,
        l = ue(),
        [c, g] = u.useState(!1),
        h = P(m => !ge.isGptListCollapsed(m)),
        {
            listItems: n,
            needsToCollapseItems: S,
            itemsLeft: t
        } = H({
            gizmos: s,
            isGizmoFlyout: x,
            isLoaded: c,
            maxToShowOnLoad: a,
            isScreenArch: l,
            showAllSidebarItems: h
        });
    u.useEffect(() => {
        c || g(!0)
    }, [c]), u.useEffect(() => {
        n.length > 0 && !d.current && (xe({
            namespace: fe.ChatPageLoad
        }) ? .logTiming("render_gizmo_sidebar"), d.current = !0)
    }, [n]);

    function o(m, f) {
        const b = e.jsx(Ke, {
            gizmo: m,
            isActive: m.gizmo.id === i,
            section: f,
            hideOverflowMenu: r
        }, m.gizmo.id);
        return l ? e.jsx("li", {
            children: b
        }) : b
    }
    return e.jsxs("div", {
        children: [n.map(({
            gizmo: m,
            section: f
        }, b) => e.jsxs(u.Fragment, {
            children: [b > 1 && f !== n[b - 1].section && e.jsx("div", {
                className: "my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"
            }), o(m, f)]
        }, b)), !l && S ? e.jsxs("button", {
            onClick: _.toggleGptListCollapsed,
            className: "flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",
            children: [e.jsx("div", {
                className: "flex h-6 w-6 flex-shrink-0 items-center justify-center",
                children: e.jsx(D, {
                    className: "icon-md text-token-text-primary"
                })
            }), e.jsx("div", {
                className: "flex grow items-center gap-1",
                children: h ? e.jsxs(e.Fragment, {
                    children: [e.jsx(z, {
                        id: "GizmoSidebarList.showLess",
                        defaultMessage: "See less"
                    }), e.jsx(Ue, {
                        className: "icon-xs"
                    })]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsx(z, {
                        id: "GizmoSidebarList.showMoreItems",
                        defaultMessage: "{numMore} more",
                        values: {
                            numMore: t
                        }
                    }), e.jsx(De, {
                        className: "icon-xs"
                    })]
                })
            })]
        }) : null, !l && e.jsx(R, {})]
    })
}

function Ve({
    currentGizmoId: s,
    gizmos: i,
    onClick: a
}) {
    const {
        isSidebarFlyoutOpen: r,
        onSidebarFlyoutOpenChange: d
    } = he(), x = r(p.Gizmo);
    return e.jsx("div", {
        className: "group mt-1 flex w-full items-center justify-start",
        children: e.jsx(J, {
            onOpenChange: l => d(p.Gizmo, l),
            side: "right",
            sideOffset: 4,
            open: x,
            contentAlign: "end",
            triggerButton: e.jsxs("button", {
                className: y("flex flex-1 select-none items-center gap-2 rounded-lg px-2 py-2 text-sm tracking-condensed text-token-text-secondary hover:bg-token-main-surface-secondary focus:ring-0", x && "bg-token-main-surface-secondary"),
                onClick: a,
                children: [e.jsx(D, {
                    className: y("icon-md mr-1 font-semibold text-token-sidebar-icon")
                }), e.jsx("span", {
                    className: "text-left",
                    children: e.jsx(z, {
                        id: "qTIiY/",
                        defaultMessage: "See more"
                    })
                })]
            }),
            size: "auto",
            children: e.jsx("div", {
                className: "max-h-[50dvh] overflow-x-auto px-2 [scrollbar-gutter:stable]",
                children: e.jsx(L, {
                    children: e.jsx("ul", {
                        className: "flex flex-col gap-0.5",
                        children: e.jsx(K, {
                            gizmo: i,
                            currentGizmoId: s,
                            hideOverflowMenu: !0
                        })
                    })
                })
            })
        })
    })
}

function Ye({
    currentGizmoId: s
}) {
    const {
        data: {
            gizmos: i
        } = {}
    } = Se();
    let a = i;
    const r = !a || a ? .length === 0,
        {
            needsToCollapseItems: d
        } = H({
            gizmos: a ? ? [],
            isLoaded: !1,
            isGizmoFlyout: !1,
            isScreenArch: !0
        });
    return r ? null : e.jsx(e.Fragment, {
        children: e.jsxs(be, {
            header: e.jsx("div", {
                className: "sticky top-[--sidebar-sticky-threshold] z-20",
                children: e.jsx(z, {
                    id: "ZT2HVu",
                    defaultMessage: "GPTs"
                })
            }),
            isLastInGroup: !0,
            children: [e.jsx(R, {}), e.jsx(K, {
                gizmo: a ? ? [],
                currentGizmoId: s,
                maxToShowOnLoad: je
            }), d && e.jsx(L, {
                children: e.jsx(Ve, {
                    currentGizmoId: s,
                    gizmos: a ? ? []
                })
            })]
        })
    })
}

function qe({
    clientThreadId: s
}) {
    const i = F(),
        a = Q(s),
        {
            isUnauthenticated: r
        } = w();
    return r ? null : e.jsxs("div", {
        className: y(I.screenContent),
        children: [null, e.jsx(ve, {
            clientThreadId: s
        }), i ? .canInteractWithGizmos() ? e.jsx(Ye, {
            currentGizmoId: a
        }) : null]
    })
}

function $e() {
    const s = F(),
        i = s ? .data == null,
        {
            isUnauthenticated: a
        } = w(),
        {
            openSettings: r
        } = Ce(),
        [d] = u.useState(() => {
            const n = X.getCookie(ee.Workspace);
            return typeof n == "string" && n !== se
        }),
        x = G(),
        {
            store: l,
            actions: c
        } = B(),
        g = l(n => n.mode);
    if (!s || d && i) return null;
    const h = a ? e.jsx(Re, {}) : e.jsx(We, {
        onClickSettings: () => r()
    });
    return e.jsxs(U, {
        name: "user-profile-bar",
        className: "z-10 mb-[0.5px] grid-cols-[minmax(0,_1fr)_auto] px-sidebar-inline md:py-1.5",
        type: "primary",
        disableSizeTracking: !0,
        style: {
            "--bar-gap": "12px",
            "--bar-background-color": "transparent"
        },
        children: [h, e.jsx("div", {
            className: I.togglePinWrapper,
            children: e.jsx(ke, {
                tooltipSideOffset: 14,
                className: I.pinSidebarAction,
                icon: e.jsx(ye, {}),
                onActivate: n => {
                    n.preventDefault(), n.persist(), Ie.togglePinSidebar(n, c, g === k.Floating ? k.Pinned : k.Floating)
                },
                label: g === k.Floating ? x.formatMessage({
                    id: "b43Hkt",
                    defaultMessage: "Pin Sidebar"
                }) : x.formatMessage({
                    id: "6m3n9w",
                    defaultMessage: "Unpin Sidebar"
                }),
                htmlFor: A.FloatingOrPinned
            })
        })]
    })
}

function Je() {
    return e.jsx(U, {
        className: "z-10 px-sidebar-inline pb-0.5",
        type: "primary",
        disableSizeTracking: !0,
        style: {
            "--bar-gap": "12px",
            "--bar-background-color": "transparent"
        },
        children: e.jsx(He, {})
    })
}

function Qe() {
    return e.jsxs(ze, {
        className: y(I.screenTrailingBarContainer),
        children: [e.jsx(Ne, {}), e.jsx(Je, {}), e.jsx($e, {})]
    })
}

function os() {
    const {
        clientThreadId: s,
        onNewThread: i
    } = E(), [a, r] = u.useState(!1), [d, x] = u.useState(!1), [l, c] = u.useState(!1), {
        store: g
    } = B(), h = u.useCallback(t => t === p.Conversation ? a : t === p.Gizmo ? d : t === p.Conversation2 ? l : !1, [a, d, l]), n = u.useCallback((t, o) => {
        const m = f => {
            t === p.Conversation ? r(f) : t === p.Gizmo ? x(f) : t === p.Conversation2 && c(f)
        };
        if (o) {
            m(o);
            return
        }
        setTimeout(() => {
            m(o)
        }, 100)
    }, []), S = u.useRef(null);
    return Me((t, o) => {
        n(p.Conversation, !1), n(p.Gizmo, !1), n(p.Conversation2, !1);
        const m = window.matchMedia("(max-width: 700px)").matches,
            f = Le(S.current);
        o != null && m && (g.getState().mode === k.Floating || f) && setTimeout(() => {
            document.getElementById(A.OpenOrClosed) ? .click()
        }, 100)
    }), e.jsxs(Ge, {
        value: {
            isSidebarFlyoutOpen: h,
            onSidebarFlyoutOpenChange: n
        },
        children: [e.jsx(Fe, {}), e.jsx(Te, {
            anchor: "vertical",
            className: y(I.screen, "popover flex-1 border-r border-r-token-border-xlight"),
            name: "sidebar",
            leading: e.jsx(Oe, {
                onNewThread: i
            }),
            ref: S,
            trackLeading: !0,
            trailing: e.jsx(Qe, {}),
            children: e.jsx(qe, {
                clientThreadId: s
            })
        })]
    })
}
export {
    os as C, Ke as G, K as a
};
//# sourceMappingURL=ex1buqdicemvrfma.js.map
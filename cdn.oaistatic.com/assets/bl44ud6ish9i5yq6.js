const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d3vgh4ps3n910tgt.js", "assets/hbhpmx2ipkndwudc.js", "assets/mgr0w69u3c317psp.js", "assets/root-ncdra6h0.css", "assets/ab2oz9enzsoo3wow.js", "assets/conversation-small-h7jqffb1.css", "assets/cmz8r2ykn5c1lxp9.js", "assets/g4fz1gdjxl7wb2jm.js", "assets/m0s651bq7jimn9ko.js", "assets/le5v2hqvx6xa2eig.js", "assets/dg7eqoph1i4a4w4u.js", "assets/eomgak7isz9y8t2v.js", "assets/jwkl1jaez91v02q9.js", "assets/c3g58ox462qsyhe4.js", "assets/h4q3kerkerwi7v84.js", "assets/bv1tgraszqspgaxz.js", "assets/i4dtdajj06wlzjkc.js", "assets/fzrn137102spawew.js", "assets/ecsmtmpgv59no4oe.js", "assets/m7u5z7sua6e1c9ci.js", "assets/k2shmbmg5zt8zip0.js", "assets/ekxcuz36lhqjinj3.js", "assets/dg4yci78z6se9hoh.js", "assets/hjt3lr7iebuozr4s.js", "assets/d9tdeefil1u4018v.js", "assets/kqwdyvkaaavvn8k3.js", "assets/gnrqvlebz6eo0iau.js", "assets/oveq1v37sxw2gvha.js", "assets/983a0dy92b3ronpv.js", "assets/or3yhjnx0vibm9xx.js", "assets/bzs13wc73o38staf.js", "assets/kt9y6zzqsnj7pvqb.js", "assets/c4bxzbp1808foto4.js", "assets/dc04xqeim5g7thtb.js", "assets/nb6f1twu9li01ii9.js", "assets/ky07c7gm4e4zomhb.js", "assets/f23evx1hkgbz32wj.js", "assets/t7u8ciwlz2voun1n.js", "assets/hxvlxwkzr288aynn.js", "assets/n5mnsu7wpta2bimq.js", "assets/h1burzjdko4ksky5.js", "assets/nqxrsem62j81khrd.js", "assets/ex1buqdicemvrfma.js", "assets/znab6o6yj0mmr4sp.js", "assets/mdsiuh3cr4zxgc0k.js", "assets/it7w3m2d1ksfkn2n.js", "assets/g4tl5lt9yqf20m4s.js"]))) => i.map(i => d[i]);
import {
    r as d,
    Z as Te,
    dl as _e,
    dk as De,
    di as Ie,
    x as ye,
    ab as Le,
    gk as Ne,
    y as L,
    c3 as Be,
    aQ as Ve,
    hg as se,
    m as e,
    G as Fe,
    c9 as We,
    ba as Re,
    F as He,
    aH as g,
    aI as f,
    aq as Ge,
    bf as Ue,
    b1 as oe,
    fo as pe,
    gZ as te,
    eX as ne,
    aD as ze,
    gP as re,
    bp as Ke,
    ap as qe,
    a2 as ie,
    a4 as Qe,
    d3 as le,
    D as Ye,
    ci as Ze,
    cj as $e,
    ck as Xe,
    du as Je,
    f$ as ea,
    s as aa,
    L as sa
} from "./hbhpmx2ipkndwudc.js";
import {
    hk as oa,
    hl as ta,
    bH as k,
    hm as na,
    hn as ra,
    ho as ia,
    hp as la,
    hq as da,
    hr as ca,
    hs as ua,
    e0 as ha,
    ht as ga,
    hu as fa,
    hv as ma,
    hw as pa,
    hx as ba,
    hy as Sa,
    hz as xa,
    hA as Ma,
    hB as Ca,
    hC as ja,
    hD as wa,
    hE as Aa,
    hF as va,
    hG as Oa,
    hH as ka,
    hI as Pa,
    hJ as Ea,
    hK as Ta,
    hL as _a,
    hM as Da,
    bS as be,
    l as y,
    U as de,
    bI as B,
    hN as Ia,
    hO as ya,
    cw as Se,
    b3 as La,
    cx as Na,
    T as xe,
    hP as Me,
    fb as Ba,
    hQ as Va,
    fS as Ce,
    hR as je,
    hS as we,
    hT as Fa,
    ak as Ae,
    ay as Wa,
    b4 as ve,
    hU as ce,
    hV as v,
    fz as Ra,
    bk as N,
    bl as ue,
    j as Ha,
    hW as Ga,
    eH as Ua,
    hX as za,
    eG as Ka,
    hY as qa,
    hZ as Qa,
    h_ as Ya,
    h$ as Za,
    i0 as $a,
    i1 as Xa,
    i2 as he,
    i3 as Ja,
    ai as es,
    i4 as as,
    i5 as ss,
    b1 as os,
    cu as ts,
    cv as ns,
    i6 as rs,
    i7 as is,
    cy as ls,
    i8 as ds
} from "./ab2oz9enzsoo3wow.js";
import {
    S as ge,
    b as cs,
    c as us
} from "./dc04xqeim5g7thtb.js";
import {
    S as hs,
    C as gs
} from "./ky07c7gm4e4zomhb.js";
import {
    T as Oe
} from "./f23evx1hkgbz32wj.js";
import {
    N as fs
} from "./nb6f1twu9li01ii9.js";
import {
    C as ke
} from "./h1burzjdko4ksky5.js";
import {
    m as O
} from "./m0s651bq7jimn9ko.js";
import {
    C as ms
} from "./ex1buqdicemvrfma.js";
const ps = ({
    onClose: a
}) => {
    const s = Fe(),
        o = k(B.isBusinessWorkspace),
        t = k(i => i.currentWorkspace),
        r = o ? s.formatMessage(fe.workspaceWelcome, {
            workspaceName: t ? .name
        }) : "ChatGPT";
    return e.jsx(We, {
        isOpen: !0,
        onClose: Re,
        type: "success",
        title: r,
        size: "custom",
        noPadding: !0,
        className: "max-w-3xl",
        description: s.formatMessage(fe.personalOnboardingSubheading),
        children: e.jsx(Ia, {
            onClose: a,
            scope: ya.Personal
        })
    })
};

function bs({
    clientThreadId: a
}) {
    const [s, o] = d.useState(0), {
        hasSeenOnboardingDate: t
    } = oa(), {
        hasSeenTeamOwnerOnboardingDate: r
    } = ta(), i = k(B.isBusinessWorkspace), u = Te(), [n, m] = d.useState(!1), {
        data: P,
        isPending: E,
        isEnabled: T
    } = na(), b = ra(P, E && T), {
        eligible: A
    } = ia(), S = _e(), x = De(), M = Ie(), _ = ye(() => Le.getThread(a)), C = Ne(a) || !_, j = L.getConversationOrigin(a), {
        data: l,
        isError: w
    } = Be(), h = l != null, V = l && l ? .accountItems.length > 1 && l.currentAccountId == null, F = l ? .accountItems.some(c => c.isPersonalAccount()), W = !!l ? .accountItems && l.accountItems.length > 0 && l.accountItems.every(({
        canAccessWithCurrentSession: c
    }) => !c), {
        eligible: R,
        isLoading: H
    } = la(), {
        value: G
    } = Ve("1542198993"), {
        punchOutRequireLoginInfo: U
    } = da(), {
        state: z
    } = ca(), {
        isOpen: K,
        isLoading: q
    } = ua(), {
        isOpen: Q,
        isLoading: Y
    } = ha(), {
        isOpen: Z,
        isLoading: $
    } = ga(), {
        isOpen: X,
        isLoading: J
    } = fa(), {
        state: ee
    } = ma(), p = d.useMemo(() => [{
        Component: pa,
        getModalState: () => U ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: ba,
        getModalState: () => z,
        isDeferrable: !1
    }, {
        Component: Sa,
        getModalState: () => ee,
        isDeferrable: !1
    }, {
        Component: xa,
        getModalState: () => q || C ? "loading" : j === se.APPLE ? "hide" : K ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: Ma,
        getModalState: () => J || C ? "loading" : j === se.APPLE ? "hide" : X ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: ps,
        getModalState: () => i ? "hide" : t === null ? "loading" : t === !1 ? "show" : "hide",
        isDeferrable: !0
    }, {
        Component: Ca,
        getModalState: () => w ? "hide" : V ? "show" : h ? "hide" : "loading",
        isDeferrable: !1
    }, {
        Component: ja,
        getModalState: () => S !== null ? "show" : w || h ? "hide" : "loading",
        isDeferrable: !1
    }, {
        Component: wa,
        getModalState: () => x !== null ? "show" : w || h ? "hide" : "loading",
        isDeferrable: !1
    }, {
        Component: Aa,
        getModalState: () => M != null ? "show" : w || h ? "hide" : "loading",
        isDeferrable: !1
    }, {
        Component: va,
        getModalState: () => h ? W ? "show" : "hide" : "loading",
        isDeferrable: !1
    }, {
        Component: Oa,
        getModalState: () => Y ? "loading" : Q ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: ka,
        getModalState: () => $ ? "loading" : Z ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: Pa,
        getModalState: () => "hide",
        isDeferrable: !1
    }, {
        Component: Ea,
        getModalState: () => !u ? .isTeam() || !u ? .isOwnerOfAccount() || !F ? "hide" : !h || r === null ? "loading" : r === !1 ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: Ta,
        getModalState: () => i ? t === null ? "loading" : t === !1 ? "show" : "hide" : "hide",
        isDeferrable: !0
    }, {
        Component: _a,
        getModalState: () => H ? "loading" : R && G ? "show" : "hide",
        isDeferrable: !1
    }, {
        Component: Da,
        getModalState: () => b,
        isDeferrable: !1
    }].filter(c => !(c.isDeferrable && n)), [A, U, z, M, h, t, r, F, i, w, S, x, u, W, V, b, n, G, R, H, K, q, X, J, ee, Y, Q, Z, $, j, C]);
    d.useEffect(() => {
        if (p[s] && p[s].getModalState() === "hide") {
            const c = p.findIndex(Ee => Ee.getModalState() !== "hide");
            o(c)
        }
    }, [s, p]);
    const D = p[s],
        I = D ? .getModalState() === "show";
    if (d.useEffect(() => {
            const c = be.getState().activeModals.has(y.BlockingInitialComponent);
            I !== c && (I ? de.openModal(y.BlockingInitialComponent) : de.closeModal(y.BlockingInitialComponent))
        }, [I]), D == null) return e.jsx("span", {
        "data-testid": "blocking-initial-modals-done",
        className: "hidden"
    });
    const ae = D.getModalState();
    if (ae === "loading") return null;
    ae === "hide" && o(c => c + 1);
    const Pe = p[s].Component;
    return e.jsx(Pe, {
        onClose: () => {
            m(!0), o(c => c + 1)
        }
    })
}
const fe = He({
        workspaceWelcome: {
            id: "BlockingInitialModals.workspaceWelcome",
            defaultMessage: "Welcome to the {workspaceName} workspace"
        },
        personalOnboardingSubheading: {
            id: "BlockingInitialModals.personalOnboardingSubheading",
            defaultMessage: "Tips for getting started"
        }
    }),
    Ss = g(() => f(() =>
        import ("./d3vgh4ps3n910tgt.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])).then(a => a.CanvasFocusedViewManager)),
    xs = g(() => f(() =>
        import ("./ekxcuz36lhqjinj3.js"), __vite__mapDeps([21, 1, 2, 3, 22, 4, 5, 23, 24, 25, 26, 27, 8, 28])).then(a => a.SearchResultsModal));

function Ms({
    clientThreadId: a,
    setClientThreadId: s,
    urlThreadId: o,
    prefetchSearch: t
}) {
    const r = Ge();
    Se({
        clientThreadId: a
    });
    const {
        createNewThread: i,
        onThreadCreated: u,
        resetThread: n
    } = La({
        clientThreadId: a,
        setClientThreadId: s
    });
    return Na({
        resetThreadAction: n,
        clientThreadId: a
    }), e.jsxs(xe, {
        enableSandbox: !1,
        clientThreadId: a,
        children: [e.jsx(Me, {
            clientThreadId: a,
            urlThreadId: o
        }), e.jsxs(ge, {
            hideNavigation: r,
            mobileHeaderContent: e.jsx(Ba, {
                clientThreadId: a,
                inMobileHeader: !0
            }),
            mobileHeaderBottomContent: e.jsx(Va, {
                clientThreadId: a
            }),
            mobileHeaderLeftContent: e.jsx(cs, {
                onNewChatButtonClick: n
            }),
            mobileHeaderRightContent: e.jsx(us, {
                onNewChatButtonClick: n
            }),
            sidebar: e.jsx(fs, {
                navHeader: a ? e.jsx(hs, {
                    className: "flex h-[60px] items-center md:h-header-height",
                    onNewThread: i
                }) : null,
                children: e.jsx(gs, {
                    clientThreadId: a,
                    onNewThread: i
                })
            }),
            threadFlyout: e.jsx(Ce, {
                clientThreadId: a
            }),
            children: [e.jsx(je, {}), e.jsx(Oe, {
                clientThreadId: a,
                onCreate: u,
                prefetchSearch: t
            }, a), e.jsxs(ge.Sidebars, {
                children: [e.jsx(Ss, {
                    clientThreadId: a
                }), e.jsx(we, {
                    clientThreadId: a
                })]
            })]
        }), e.jsx(Cs, {
            clientThreadId: a
        })]
    })
}

function Cs({
    clientThreadId: a
}) {
    const s = Ue(),
        o = s ? .includes(oe.SearchTool) && !s ? .includes(oe.SearchToolHoldout),
        t = Fa();
    return pe() && (!t || !o) && e.jsx(xs, {
        clientThreadId: a
    })
}
const me = 450;

function js({
    children: a,
    clientThreadId: s,
    isOpen: o,
    onClose: t
}) {
    const r = Ae();
    return e.jsxs(Wa, {
        children: [o && r && e.jsx(ve, {
            clientThreadId: s,
            children: e.jsx(te, {
                children: e.jsx(ce.Provider, {
                    value: {
                        isEmbeddedInFocusedView: !0
                    },
                    children: e.jsxs("div", {
                        className: "absolute inset-0 flex flex-col",
                        children: [e.jsx(O.div, {
                            className: "h-full w-full bg-token-main-surface-secondary",
                            ...v
                        }), e.jsxs("div", {
                            className: "absolute inset-0 flex",
                            children: [e.jsx("div", {
                                className: "flex-grow overflow-auto",
                                children: a
                            }), e.jsx(O.div, {
                                className: "relative shrink-0 border-l border-token-border-medium bg-token-main-surface-primary",
                                style: {
                                    width: me
                                },
                                ...v,
                                children: e.jsx(ke, {
                                    hideHeader: !0,
                                    hideTools: !0
                                })
                            })]
                        })]
                    })
                })
            })
        }), o && !r && e.jsx(te, {
            children: e.jsx(ce.Provider, {
                value: {
                    isEmbeddedInFocusedView: !0
                },
                children: e.jsxs("div", {
                    className: "absolute inset-0 flex flex-col",
                    children: [e.jsx(O.div, {
                        className: "h-full w-full bg-token-main-surface-secondary",
                        ...v
                    }), e.jsxs("div", {
                        className: "absolute inset-0 flex",
                        children: [e.jsx("div", {
                            className: "flex-grow overflow-auto",
                            children: a
                        }), e.jsx(O.div, {
                            className: "relative shrink-0 border-l border-token-border-medium bg-token-main-surface-primary",
                            style: {
                                width: me
                            },
                            ...v,
                            children: e.jsx("div", {
                                className: "h-[100vh] pb-4",
                                children: e.jsx(Oe, {
                                    clientThreadId: s,
                                    hideHeader: !0,
                                    hideFooter: !0,
                                    hideToolsOverlay: !0,
                                    messagesVerticalAlign: "bottom"
                                }, s)
                            })
                        })]
                    })]
                })
            })
        })]
    })
}
const ws = g(() => f(() =>
        import ("./or3yhjnx0vibm9xx.js"), __vite__mapDeps([29, 1, 2, 3, 4, 5]))),
    As = g(() => f(() =>
        import ("./bzs13wc73o38staf.js"), __vite__mapDeps([30, 1, 2, 3, 4, 5, 31, 32, 8, 33, 34, 19, 35, 36, 15, 37, 38, 39, 9, 40, 41, 42])).then(a => a.ImageEditor));

function vs({
    clientThreadId: a
}) {
    const s = Ra();
    d.useEffect(() => {
        N.close()
    }, [a]);
    let o;
    return s ? .type === ue.ADAVisualization ? o = e.jsx(ws, {
        clientThreadId: a,
        visualization: s.visualization
    }) : s ? .type === ue.Image && (o = e.jsx(As, {
        clientThreadId: a,
        messageId: s.messageId,
        image: s.image,
        allImages: s.allImages
    }, s.image.asset_pointer)), e.jsx(js, {
        clientThreadId: a,
        isOpen: s != null,
        onClose: N.close,
        children: o
    })
}
const Os = g(() => f(() =>
    import ("./d3vgh4ps3n910tgt.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])).then(a => a.CanvasFocusedViewManager));

function ks() {
    const {
        focusedObject: a,
        clientThreadId: s
    } = Ha();
    ne(void 0), Ga();
    const o = ne("searchSources"),
        t = pe(),
        [r, i] = d.useState(!1);
    return e.jsx(Ua, {
        className: ze(re.application, {
            [re.withFocusedView]: a
        }),
        banner: e.jsx(Ke, {
            children: e.jsx(za, {
                setIsMobileAppUpsellBannerVisible: i
            })
        }),
        sidebar: e.jsx(ms, {}),
        thread: e.jsx(ke, {}, s),
        details: e.jsx(Os, {
            clientThreadId: s
        }),
        threadExtendedInfo: t && e.jsxs(e.Fragment, {
            children: [!1, o && e.jsx(Ce, {
                clientThreadId: s
            })]
        }),
        debugger: e.jsx(we, {
            clientThreadId: s
        }),
        name: "application-root",
        style: {
            "--screen-height-offset": r ? "64px" : ""
        }
    })
}

function Ps({
    clientThreadId: a,
    setClientThreadId: s,
    urlThreadId: o,
    prefetchSearch: t
}) {
    return Se({
        clientThreadId: a
    }), e.jsx(ve, {
        clientThreadId: a,
        setClientThreadId: s,
        prefetchSearch: t,
        children: e.jsxs(Ka, {
            children: [e.jsx(qa, {}), e.jsx(Qa, {}), e.jsxs(xe, {
                enableSandbox: !1,
                clientThreadId: a,
                children: [e.jsx(Me, {
                    clientThreadId: a,
                    urlThreadId: o
                }), e.jsx(je, {}), e.jsx(ks, {})]
            })]
        })
    })
}
var Es = {};
const Ts = g(() => f(() =>
        import ("./znab6o6yj0mmr4sp.js"), __vite__mapDeps([43, 1, 2, 3, 4, 5, 44]))),
    _s = g(() => f(() =>
        import ("./it7w3m2d1ksfkn2n.js"), __vite__mapDeps([45, 1, 2, 3, 4, 5, 40, 36, 15, 37, 38, 8, 39, 19, 9, 41, 46])));

function Gs(a) {
    const {
        urlThreadId: s,
        clientThreadId: o,
        prefetchSearch: t
    } = a;
    Is();
    const r = qe(),
        i = ie(),
        [u] = Qe(),
        [n, m] = d.useState(() => s !== void 0 ? s : o !== void 0 ? o : le());
    s !== void 0 && n !== s && L.getServerThreadId(n) !== s && m(s);
    const P = Ya(ie());
    d.useEffect(() => {
        s === void 0 && L.getServerThreadId(n) !== void 0 && m(le())
    }, [s, n, P]);
    const E = k(B.workspaceId),
        T = Ae(),
        {
            eligible: b,
            isLoading: A,
            markAsViewed: S
        } = Za(),
        x = $a();
    d.useEffect(() => {
        (i.pathname === "/" || i.pathname.startsWith("/c/")) && Xa({
            namespace: he.ChatPageLoad
        }) == null && (Ja({
            namespace: he.ChatPageLoad,
            opts: {
                expectedTimingLogs: [{
                    name: "render_model_switcher",
                    expectedInMs: 1e4
                }, {
                    name: "render_history_items",
                    expectedInMs: 25e3
                }]
            }
        }), Ye.addTiming("chatgpt.web.chatPage.mounted"))
    }, []);
    const M = es();
    d.useEffect(() => {
        Ze(!0).then(l => {
            l.force_login && M({
                authType: "login"
            }), $e.initializeAndGatherData(l), as.initializeAndGatherData(l), Xe.initializeAndGatherData(l)
        })
    }, [M]), d.useEffect(() => {
        const l = u.get(ss) === "true";
        r !== l && Je.setIsTemporaryChatEnabled(l)
    }, [r, u]), d.useEffect(() => {
        i.state ? .focusObject && N.setFocusedObject(i.state.focusObject)
    }, [i.state ? .focusObject]), d.useEffect(() => {
        !A && b && (S(), x())
    }, [b, A, S, x]);
    const {
        isOpen: _,
        isLoading: C
    } = os(), j = T ? Ps : Ms;
    return e.jsx(ea.Provider, {
        value: null,
        children: e.jsx(ts, {
            children: e.jsxs(ns, {
                clientThreadId: n,
                children: [e.jsx(bs, {
                    clientThreadId: n
                }, E), !C && _ && e.jsx(_s, {
                    clientThreadId: n,
                    setClientThreadId: m
                }), e.jsx(rs, {}), e.jsx(is, {}), e.jsx(j, {
                    urlThreadId: s,
                    clientThreadId: n,
                    setClientThreadId: m,
                    prefetchSearch: t
                }), e.jsx(vs, {
                    clientThreadId: n
                }), e.jsx(ls, {
                    clientThreadId: n
                }), e.jsx(Ds, {}), e.jsx(ds, {})]
            })
        })
    })
}

function Ds() {
    const a = be(s => s.sharingModalThreadId);
    return a ? e.jsx(Ts, {
        serverThreadId: a
    }) : null
}

function Is() {
    aa({
        queryKey: ["pingEdge"],
        queryFn: () => sa.pingEdge(),
        enabled: !0,
        staleTime: 1 / 0
    })
}
typeof window < "u" && (window._g = Es.GOKU_SERVICE);
export {
    Gs as C, me as F
};
//# sourceMappingURL=bl44ud6ish9i5yq6.js.map
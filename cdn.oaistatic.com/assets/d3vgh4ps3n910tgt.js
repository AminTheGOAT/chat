import {
    gW as T,
    b_ as N,
    r as l,
    m as i,
    aA as q,
    aB as P,
    ay as Y,
    e_ as K,
    gX as X,
    l as Z,
    f as $,
    T as _,
    bi as J,
    gY as Q,
    aD as ee,
    gZ as te
} from "./hbhpmx2ipkndwudc.js";
import {
    fC as se,
    fD as ae,
    C as x,
    eZ as oe,
    fE as ne,
    fF as ie,
    fG as re,
    fH as ce,
    by as de,
    fI as le,
    fJ as ue,
    fK as F,
    fL as fe,
    ak as O,
    bS as j,
    fM as he,
    fN as pe,
    u as me,
    fO as ge,
    fP as R,
    U as M,
    ay as xe,
    fQ as D
} from "./ab2oz9enzsoo3wow.js";
import {
    s as ve,
    g as Ce,
    u as be
} from "./cmz8r2ykn5c1lxp9.js";
import {
    L as we
} from "./g4fz1gdjxl7wb2jm.js";
import {
    u as ye
} from "./jwkl1jaez91v02q9.js";
import {
    T as Se
} from "./c3g58ox462qsyhe4.js";
import {
    m as g
} from "./m0s651bq7jimn9ko.js";
import "./mgr0w69u3c317psp.js";
import "./le5v2hqvx6xa2eig.js";
import "./dg7eqoph1i4a4w4u.js";
import "./eomgak7isz9y8t2v.js";
import "./h4q3kerkerwi7v84.js";
import "./bv1tgraszqspgaxz.js";
import "./i4dtdajj06wlzjkc.js";
import "./fzrn137102spawew.js";
import "./ecsmtmpgv59no4oe.js";
import "./m7u5z7sua6e1c9ci.js";
import "./k2shmbmg5zt8zip0.js";
const W = "oai/apps/canmoreSidebarWidth",
    Te = .25,
    Ie = 400,
    k = 400;

function L(e) {
    return e - Ie
}

function y(e, n) {
    return ae(k, L(e), n ? ? Te * e)
}

function Ee() {
    const e = T.useState(T.selectWindowWidth),
        n = y(e, se(N.DANGER_SECRET_FOLDERS_ONLY_getItem(W))),
        s = H(),
        [t, r] = l.useState(n);
    l.useEffect(() => {
        (t < k || t > L(e)) && r(y(e, t))
    }, [e]);

    function a(h) {
        r(p => y(e, p += h.delta.x))
    }

    function c(h) {
        r(h), N.DANGER_SECRET_FOLDERS_ONLY_setItem(W, h)
    }

    function u() {
        const h = y(e, void 0);
        c(h)
    }
    const o = `calc(100vw - ${t}px)`;
    return s ? {
        chatWidth: t,
        canvasWidth: e - t,
        canvasWidthCalc: o,
        viewportWidth: e,
        handleDrag: a,
        handleDoubleClick: u,
        persist: c
    } : {
        chatWidth: 0,
        canvasWidth: e,
        canvasWidthCalc: "100vw",
        viewportWidth: e,
        handleDrag: () => {},
        handleDoubleClick: () => {},
        persist: () => {}
    }
}

function H() {
    return T.useState(e => T.selectWindowWidth(e) > 1e3)
}

function Ae(e, n) {
    let s;
    return n ? .type === x.Textdoc && (s = {
        type: "canvas_textdoc",
        id: n.textdocId
    }), { ...e,
        messageMetadata: { ...e.messageMetadata,
            open_in_canvas_view: s
        }
    }
}
const G = ({
        isFullScreen: e = !1,
        clientThreadId: n,
        focusedObject: s,
        onClose: t,
        isAnimating: r = !1,
        width: a
    }) => {
        const {
            setTargetedContent: c
        } = oe(), u = l.useRef(!1);
        if (l.useEffect(() => (u.current && c(void 0), u.current = !0, () => {
                u.current = !1
            }), [s]), s == null) return null;
        switch (s.type) {
            case x.Textdoc:
                return i.jsx(Se, {
                    isFullScreen: e,
                    onClose: t,
                    clientThreadId: n,
                    focusedTextdoc: s,
                    isAnimating: r,
                    width: a
                });
            case x.ADAVisualization:
                return null
        }
    },
    Ne = 300,
    _e = e => e ? .type === x.Textdoc ? e.textdocId : null;

function je(e) {
    const n = q(e),
        s = P(n),
        t = Y(e),
        r = K(e, t),
        a = X({
            clientThreadId: e,
            conversationLeafId: t
        }),
        c = ne(),
        [u, o] = l.useMemo(() => {
            if (r && ie(r)) return [void 0, null];
            let m;
            return !a && r && (m = Z(re(r.messages))), Re(s, c, m)
        }, [a, r, s, c]),
        h = o != null,
        p = _e(o);
    l.useEffect(() => {
        if (o && u && (ce(o, u), o.type === x.Textdoc)) {
            const {
                textdocId: m
            } = o, C = Ce(m);
            ve(document.getElementById(C))
        }
    }, [h, p])
}

function Re(e, n, s) {
    switch (s ? .type) {
        case de.Canmore:
            {
                const [t, r] = s.messages;
                if (!le(t ? .message)) break;
                const a = ue(e, t.message, r ? .message ? ? null),
                    c = a.textdocId ? ? n;
                if (c && (a.function === $.CreateTextdoc ? (a.content ? ? "").length > Ne || a.status === _.WAITING : a.status === _.STREAMING)) return [a.messageId, {
                    type: x.Textdoc,
                    textdocId: c
                }];
                break
            }
    }
    return [void 0, null]
}
const Me = 260,
    S = {
        type: "spring",
        bounce: .12,
        duration: .64
    },
    De = {
        type: "spring",
        bounce: 0,
        duration: .58
    },
    We = ({
        clientThreadId: e,
        focusedObject: n,
        onClose: s
    }) => {
        const {
            chatWidth: t,
            canvasWidthCalc: r,
            handleDrag: a,
            handleDoubleClick: c,
            persist: u
        } = Ee(), o = O(), [h, p] = l.useState(!0), [m, C] = l.useState(!1), U = j(d => d.activeSidebar), I = be(({
            rect: d
        }) => d), {
            windowHeight: b,
            windowWidth: v
        } = Q(d => d, {
            windowWidth: 0,
            windowHeight: 0
        });
        let f = I ? ? {
                top: 0,
                left: t,
                width: v - t,
                height: b
            },
            A = !1;
        if (I && (f.top < 0 || f.top + f.height > b)) {
            A = !0;
            const d = {
                width: (v - t) * .75,
                height: b * .75
            };
            f = {
                top: b / 2 - d.height / 2,
                left: (v - t - d.width) / 2 + t,
                width: d.width,
                height: d.height
            }
        }
        if (o) {
            const d = v - f.width - f.left;
            f = { ...f,
                left: -d
            }
        }
        const w = I ? .borderRadius,
            E = he(),
            V = E ? .history != null || E ? .showChangesAtVersion != null,
            z = j(d => d.isDesktopNavCollapsed);
        return i.jsxs(i.Fragment, {
            children: [V && i.jsx(we, {
                onClick: () => pe(E.textdocId),
                zIndexKey: "chatOverlay"
            }), i.jsxs(g.div, {
                initial: !o && {
                    marginRight: z ? 0 : -Me
                },
                animate: !o && {
                    marginRight: 0
                },
                transition: De,
                children: [i.jsx(g.div, {
                    initial: {
                        opacity: 1
                    },
                    animate: {
                        opacity: 0
                    },
                    exit: {
                        opacity: [1, 0]
                    },
                    transition: { ...S,
                        delay: .22
                    },
                    className: "pointer-events-none absolute left-0 top-0 z-20 h-full w-full bg-token-main-surface-primary"
                }), !o && i.jsx(g.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"
                }), i.jsx(g.div, {
                    className: "relative z-20 h-full",
                    style: {
                        width: r
                    },
                    exit: {
                        width: 0
                    },
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: .1
                    }
                })]
            }), i.jsx(g.div, {
                className: ee("absolute z-20 h-full transition-shadow", o && "right-0 max-h-[100cqh] max-w-[var(--available-details-width)] overflow-y-auto overflow-x-clip", !o && "overflow-hidden", !o && (U === "debug" ? "md:left-[-250px] lg:left-[-300px] xl:left-[-350px] 2xl:left-[-400px]" : "left-0")),
                initial: {
                    borderRadius: w,
                    boxShadow: "0px 12px 32px 0px rgba(0, 0, 0, 0.064)",
                    opacity: A ? 0 : 1,
                    x: f.left,
                    y: f.top,
                    height: f.height,
                    width: f.width
                },
                animate: {
                    opacity: 1,
                    x: o ? 0 : t,
                    y: 0,
                    width: o ? `calc(100cqw - ${t}px)` : r,
                    height: "100%",
                    borderRadius: 0,
                    boxShadow: "0px 0px 18px rgba(0,0,0,0.075)"
                },
                exit: {
                    scale: .64,
                    opacity: 0,
                    filter: "blur(12px)",
                    transition: {
                        opacity: {
                            duration: .14,
                            bounce: .1
                        }
                    },
                    borderRadius: w,
                    boxShadow: "0px 12px 32px 0px rgba(0, 0, 0, 0.064)"
                },
                transition: m ? {
                    duration: 0
                } : S,
                onAnimationComplete: () => p(!1),
                children: i.jsx(g.div, {
                    className: "h-full overflow-hidden border-l border-gray-100 dark:border-token-border-medium",
                    initial: {
                        borderRadius: w
                    },
                    animate: {
                        borderRadius: 0
                    },
                    exit: {
                        borderRadius: w
                    },
                    transition: S,
                    children: i.jsxs("div", {
                        className: "h-full",
                        children: [i.jsx(g.div, {
                            drag: "x",
                            className: "absolute left-[-2px] z-10 h-full w-[4px] cursor-ew-resize bg-token-text-quaternary opacity-0",
                            whileHover: {
                                opacity: .5
                            },
                            whileDrag: {
                                opacity: .75,
                                width: "8px",
                                left: "-4px"
                            },
                            transition: {
                                type: "tween",
                                duration: .1
                            },
                            style: {
                                x: 0,
                                y: 0,
                                transform: "translateX(0px)"
                            },
                            dragMomentum: !1,
                            dragSnapToOrigin: !1,
                            dragElastic: !1,
                            dragConstraints: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            },
                            onDrag: (d, B) => {
                                C(!0), a(B)
                            },
                            onDragEnd: () => {
                                C(!1), u(t)
                            },
                            onDoubleClick: () => c()
                        }), i.jsx(G, {
                            onClose: s,
                            clientThreadId: e,
                            isAnimating: h,
                            focusedObject: n,
                            width: v - t
                        })]
                    })
                })
            })]
        })
    },
    Fe = l.memo(We),
    Oe = ({
        clientThreadId: e,
        focusedObject: n,
        onClose: s
    }) => i.jsx(te, {
        children: i.jsx(g.div, {
            className: "fixed inset-0 z-20 overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",
            initial: {
                scale: .98
            },
            animate: {
                scale: 1
            },
            transition: S,
            children: i.jsx(G, {
                isFullScreen: !0,
                clientThreadId: e,
                focusedObject: n,
                onClose: s
            })
        })
    }),
    ke = ({
        clientThreadId: e
    }) => {
        const n = H(),
            s = ye(e);
        je(e);
        const t = me(),
            r = ge(),
            a = l.useMemo(() => {
                let p = t;
                if (t ? .type === x.Textdoc) {
                    const m = r ? .[t.textdocId];
                    m && (p = { ...t,
                        textdocId: m
                    })
                }
                return p
            }, [t, r]);
        l.useEffect(() => {
            F()
        }, [e]);
        const c = a && (n ? i.jsx(Fe, {
            clientThreadId: e,
            onClose: D,
            focusedObject: a
        }, "canvas-sidebar") : i.jsx(Oe, {
            clientThreadId: e,
            onClose: D,
            focusedObject: a
        }, "canvas-modal"));
        l.useEffect(() => {
            if (a) return R(p => Ae(p, a)), () => R(null)
        }, [a, r]);
        const u = O(),
            o = c != null;
        return l.useEffect(() => {
            if (!u) return M.setActiveStageSidebar(o), () => {
                o && M.setActiveStageSidebar(!1)
            }
        }, [o, u]), s !== e ? null : i.jsx(xe, {
            children: c
        })
    },
    st = e => {
        const n = l.useRef(null);
        return i.jsx(J, {
            ref: n,
            onError: (s, t) => {
                F(), setTimeout(() => {
                    n.current ? .resetErrorBoundary()
                }), fe.logError("Error boundary hit", s, {
                    componentStack: t
                })
            },
            name: "canmore-focused-view",
            children: i.jsx(ke, { ...e
            })
        })
    };
export {
    st as CanvasFocusedViewManager
};
//# sourceMappingURL=d3vgh4ps3n910tgt.js.map
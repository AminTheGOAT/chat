import {
    dv as lt,
    bt as at,
    dQ as Re,
    r as n,
    bx as k,
    m as o,
    dR as it,
    bJ as j,
    bA as b,
    dC as z,
    c1 as Ne,
    dS as dt,
    dV as ut,
    dT as pt,
    dU as ft,
    dW as mt,
    dX as ht,
    dY as vt,
    c4 as Ie,
    dZ as xt,
    dx as gt,
    dy as St,
    bN as wt,
    bO as Pe,
    d_ as Ct,
    dA as yt,
    aG as It,
    gm as Tt,
    gn as Pt,
    go as bt,
    aD as Rt
} from "./hbhpmx2ipkndwudc.js";
import {
    c as be
} from "./c4bxzbp1808foto4.js";
import {
    c9 as Nt
} from "./ab2oz9enzsoo3wow.js";
import {
    af as Et,
    aG as _t,
    ad as Ee
} from "./mgr0w69u3c317psp.js";
var jt = [" ", "Enter", "ArrowUp", "ArrowDown"],
    Mt = [" ", "Enter"],
    se = "Select",
    [ie, de, At] = lt(se),
    [te, So] = at(se, [At, Re]),
    ue = Re(),
    [Ot, Y] = te(se),
    [Dt, kt] = te(se),
    _e = t => {
        const {
            __scopeSelect: c,
            children: e,
            open: i,
            defaultOpen: s,
            onOpenChange: u,
            value: r,
            defaultValue: l,
            onValueChange: a,
            dir: f,
            name: x,
            autoComplete: w,
            disabled: R,
            required: T,
            form: y
        } = t, d = ue(c), [h, g] = n.useState(null), [m, v] = n.useState(null), [W, M] = n.useState(!1), oe = wt(f), [N = !1, O] = Pe({
            prop: i,
            defaultProp: s,
            onChange: u
        }), [U, X] = Pe({
            prop: r,
            defaultProp: l,
            onChange: a
        }), L = n.useRef(null), V = h ? y || !!h.closest("form") : !0, [K, B] = n.useState(new Set), H = Array.from(K).map(E => E.props.value).join(";");
        return o.jsx(Ct, { ...d,
            children: o.jsxs(Ot, {
                required: T,
                scope: c,
                trigger: h,
                onTriggerChange: g,
                valueNode: m,
                onValueNodeChange: v,
                valueNodeHasChildren: W,
                onValueNodeHasChildrenChange: M,
                contentId: Ie(),
                value: U,
                onValueChange: X,
                open: N,
                onOpenChange: O,
                dir: oe,
                triggerPointerDownPosRef: L,
                disabled: R,
                children: [o.jsx(ie.Provider, {
                    scope: c,
                    children: o.jsx(Dt, {
                        scope: t.__scopeSelect,
                        onNativeOptionAdd: n.useCallback(E => {
                            B(D => new Set(D).add(E))
                        }, []),
                        onNativeOptionRemove: n.useCallback(E => {
                            B(D => {
                                const F = new Set(D);
                                return F.delete(E), F
                            })
                        }, []),
                        children: e
                    })
                }), V ? o.jsxs(ot, {
                    "aria-hidden": !0,
                    required: T,
                    tabIndex: -1,
                    name: x,
                    autoComplete: w,
                    value: U,
                    onChange: E => X(E.target.value),
                    disabled: R,
                    form: y,
                    children: [U === void 0 ? o.jsx("option", {
                        value: ""
                    }) : null, Array.from(K)]
                }, H) : null]
            })
        })
    };
_e.displayName = se;
var je = "SelectTrigger",
    Me = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            disabled: i = !1,
            ...s
        } = t, u = ue(e), r = Y(je, e), l = r.disabled || i, a = k(c, r.onTriggerChange), f = de(e), x = n.useRef("touch"), [w, R, T] = nt(d => {
            const h = f().filter(v => !v.disabled),
                g = h.find(v => v.value === r.value),
                m = rt(h, d, g);
            m !== void 0 && r.onValueChange(m.value)
        }), y = d => {
            l || (r.onOpenChange(!0), T()), d && (r.triggerPointerDownPosRef.current = {
                x: Math.round(d.pageX),
                y: Math.round(d.pageY)
            })
        };
        return o.jsx(it, {
            asChild: !0,
            ...u,
            children: o.jsx(j.button, {
                type: "button",
                role: "combobox",
                "aria-controls": r.contentId,
                "aria-expanded": r.open,
                "aria-required": r.required,
                "aria-autocomplete": "none",
                dir: r.dir,
                "data-state": r.open ? "open" : "closed",
                disabled: l,
                "data-disabled": l ? "" : void 0,
                "data-placeholder": tt(r.value) ? "" : void 0,
                ...s,
                ref: a,
                onClick: b(s.onClick, d => {
                    d.currentTarget.focus(), x.current !== "mouse" && y(d)
                }),
                onPointerDown: b(s.onPointerDown, d => {
                    x.current = d.pointerType;
                    const h = d.target;
                    h.hasPointerCapture(d.pointerId) && h.releasePointerCapture(d.pointerId), d.button === 0 && d.ctrlKey === !1 && d.pointerType === "mouse" && (y(d), d.preventDefault())
                }),
                onKeyDown: b(s.onKeyDown, d => {
                    const h = w.current !== "";
                    !(d.ctrlKey || d.altKey || d.metaKey) && d.key.length === 1 && R(d.key), !(h && d.key === " ") && jt.includes(d.key) && (y(), d.preventDefault())
                })
            })
        })
    });
Me.displayName = je;
var Ae = "SelectValue",
    Oe = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            className: i,
            style: s,
            children: u,
            placeholder: r = "",
            ...l
        } = t, a = Y(Ae, e), {
            onValueNodeHasChildrenChange: f
        } = a, x = u !== void 0, w = k(c, a.onValueNodeChange);
        return z(() => {
            f(x)
        }, [f, x]), o.jsx(j.span, { ...l,
            ref: w,
            style: {
                pointerEvents: "none"
            },
            children: tt(a.value) ? o.jsx(o.Fragment, {
                children: r
            }) : u
        })
    });
Oe.displayName = Ae;
var Lt = "SelectIcon",
    De = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            children: i,
            ...s
        } = t;
        return o.jsx(j.span, {
            "aria-hidden": !0,
            ...s,
            ref: c,
            children: i || "▼"
        })
    });
De.displayName = Lt;
var Vt = "SelectPortal",
    ke = t => o.jsx(yt, {
        asChild: !0,
        ...t
    });
ke.displayName = Vt;
var Q = "SelectContent",
    Le = n.forwardRef((t, c) => {
        const e = Y(Q, t.__scopeSelect),
            [i, s] = n.useState();
        if (z(() => {
                s(new DocumentFragment)
            }, []), !e.open) {
            const u = i;
            return u ? Ne.createPortal(o.jsx(Ve, {
                scope: t.__scopeSelect,
                children: o.jsx(ie.Slot, {
                    scope: t.__scopeSelect,
                    children: o.jsx("div", {
                        children: t.children
                    })
                })
            }), u) : null
        }
        return o.jsx(Be, { ...t,
            ref: c
        })
    });
Le.displayName = Q;
var A = 10,
    [Ve, q] = te(Q),
    Bt = "SelectContentImpl",
    Be = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            position: i = "item-aligned",
            onCloseAutoFocus: s,
            onEscapeKeyDown: u,
            onPointerDownOutside: r,
            side: l,
            sideOffset: a,
            align: f,
            alignOffset: x,
            arrowPadding: w,
            collisionBoundary: R,
            collisionPadding: T,
            sticky: y,
            hideWhenDetached: d,
            avoidCollisions: h,
            ...g
        } = t, m = Y(Q, e), [v, W] = n.useState(null), [M, oe] = n.useState(null), N = k(c, p => W(p)), [O, U] = n.useState(null), [X, L] = n.useState(null), V = de(e), [K, B] = n.useState(!1), H = n.useRef(!1);
        n.useEffect(() => {
            if (v) return dt(v)
        }, [v]), ut();
        const E = n.useCallback(p => {
                const [I, ..._] = V().map(P => P.ref.current), [S] = _.slice(-1), C = document.activeElement;
                for (const P of p)
                    if (P === C || (P ? .scrollIntoView({
                            block: "nearest"
                        }), P === I && M && (M.scrollTop = 0), P === S && M && (M.scrollTop = M.scrollHeight), P ? .focus(), document.activeElement !== C)) return
            }, [V, M]),
            D = n.useCallback(() => E([O, v]), [E, O, v]);
        n.useEffect(() => {
            K && D()
        }, [K, D]);
        const {
            onOpenChange: F,
            triggerPointerDownPosRef: G
        } = m;
        n.useEffect(() => {
            if (v) {
                let p = {
                    x: 0,
                    y: 0
                };
                const I = S => {
                        p = {
                            x: Math.abs(Math.round(S.pageX) - (G.current ? .x ? ? 0)),
                            y: Math.abs(Math.round(S.pageY) - (G.current ? .y ? ? 0))
                        }
                    },
                    _ = S => {
                        p.x <= 10 && p.y <= 10 ? S.preventDefault() : v.contains(S.target) || F(!1), document.removeEventListener("pointermove", I), G.current = null
                    };
                return G.current !== null && (document.addEventListener("pointermove", I), document.addEventListener("pointerup", _, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", _, {
                        capture: !0
                    })
                }
            }
        }, [v, F, G]), n.useEffect(() => {
            const p = () => F(!1);
            return window.addEventListener("blur", p), window.addEventListener("resize", p), () => {
                window.removeEventListener("blur", p), window.removeEventListener("resize", p)
            }
        }, [F]);
        const [pe, ce] = nt(p => {
            const I = V().filter(C => !C.disabled),
                _ = I.find(C => C.ref.current === document.activeElement),
                S = rt(I, p, _);
            S && setTimeout(() => S.ref.current.focus())
        }), fe = n.useCallback((p, I, _) => {
            const S = !H.current && !_;
            (m.value !== void 0 && m.value === I || S) && (U(p), S && (H.current = !0))
        }, [m.value]), me = n.useCallback(() => v ? .focus(), [v]), ee = n.useCallback((p, I, _) => {
            const S = !H.current && !_;
            (m.value !== void 0 && m.value === I || S) && L(p)
        }, [m.value]), le = i === "popper" ? ge : He, ne = le === ge ? {
            side: l,
            sideOffset: a,
            align: f,
            alignOffset: x,
            arrowPadding: w,
            collisionBoundary: R,
            collisionPadding: T,
            sticky: y,
            hideWhenDetached: d,
            avoidCollisions: h
        } : {};
        return o.jsx(Ve, {
            scope: e,
            content: v,
            viewport: M,
            onViewportChange: oe,
            itemRefCallback: fe,
            selectedItem: O,
            onItemLeave: me,
            itemTextRefCallback: ee,
            focusSelectedItem: D,
            selectedItemText: X,
            position: i,
            isPositioned: K,
            searchRef: pe,
            children: o.jsx(pt, {
                as: ft,
                allowPinchZoom: !0,
                children: o.jsx(mt, {
                    asChild: !0,
                    trapped: m.open,
                    onMountAutoFocus: p => {
                        p.preventDefault()
                    },
                    onUnmountAutoFocus: b(s, p => {
                        m.trigger ? .focus({
                            preventScroll: !0
                        }), p.preventDefault()
                    }),
                    children: o.jsx(ht, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: u,
                        onPointerDownOutside: r,
                        onFocusOutside: p => p.preventDefault(),
                        onDismiss: () => m.onOpenChange(!1),
                        children: o.jsx(le, {
                            role: "listbox",
                            id: m.contentId,
                            "data-state": m.open ? "open" : "closed",
                            dir: m.dir,
                            onContextMenu: p => p.preventDefault(),
                            ...g,
                            ...ne,
                            onPlaced: () => B(!0),
                            ref: N,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...g.style
                            },
                            onKeyDown: b(g.onKeyDown, p => {
                                const I = p.ctrlKey || p.altKey || p.metaKey;
                                if (p.key === "Tab" && p.preventDefault(), !I && p.key.length === 1 && ce(p.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(p.key)) {
                                    let S = V().filter(C => !C.disabled).map(C => C.ref.current);
                                    if (["ArrowUp", "End"].includes(p.key) && (S = S.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(p.key)) {
                                        const C = p.target,
                                            P = S.indexOf(C);
                                        S = S.slice(P + 1)
                                    }
                                    setTimeout(() => E(S)), p.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
Be.displayName = Bt;
var Ht = "SelectItemAlignedPosition",
    He = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            onPlaced: i,
            ...s
        } = t, u = Y(Q, e), r = q(Q, e), [l, a] = n.useState(null), [f, x] = n.useState(null), w = k(c, N => x(N)), R = de(e), T = n.useRef(!1), y = n.useRef(!0), {
            viewport: d,
            selectedItem: h,
            selectedItemText: g,
            focusSelectedItem: m
        } = r, v = n.useCallback(() => {
            if (u.trigger && u.valueNode && l && f && d && h && g) {
                const N = u.trigger.getBoundingClientRect(),
                    O = f.getBoundingClientRect(),
                    U = u.valueNode.getBoundingClientRect(),
                    X = g.getBoundingClientRect();
                if (u.dir !== "rtl") {
                    const C = X.left - O.left,
                        P = U.left - C,
                        Z = N.left - P,
                        J = N.width + Z,
                        he = Math.max(J, O.width),
                        ve = window.innerWidth - A,
                        xe = be(P, [A, Math.max(A, ve - he)]);
                    l.style.minWidth = J + "px", l.style.left = xe + "px"
                } else {
                    const C = O.right - X.right,
                        P = window.innerWidth - U.right - C,
                        Z = window.innerWidth - N.right - P,
                        J = N.width + Z,
                        he = Math.max(J, O.width),
                        ve = window.innerWidth - A,
                        xe = be(P, [A, Math.max(A, ve - he)]);
                    l.style.minWidth = J + "px", l.style.right = xe + "px"
                }
                const L = R(),
                    V = window.innerHeight - A * 2,
                    K = d.scrollHeight,
                    B = window.getComputedStyle(f),
                    H = parseInt(B.borderTopWidth, 10),
                    E = parseInt(B.paddingTop, 10),
                    D = parseInt(B.borderBottomWidth, 10),
                    F = parseInt(B.paddingBottom, 10),
                    G = H + E + K + F + D,
                    pe = Math.min(h.offsetHeight * 5, G),
                    ce = window.getComputedStyle(d),
                    fe = parseInt(ce.paddingTop, 10),
                    me = parseInt(ce.paddingBottom, 10),
                    ee = N.top + N.height / 2 - A,
                    le = V - ee,
                    ne = h.offsetHeight / 2,
                    p = h.offsetTop + ne,
                    I = H + E + p,
                    _ = G - I;
                if (I <= ee) {
                    const C = L.length > 0 && h === L[L.length - 1].ref.current;
                    l.style.bottom = "0px";
                    const P = f.clientHeight - d.offsetTop - d.offsetHeight,
                        Z = Math.max(le, ne + (C ? me : 0) + P + D),
                        J = I + Z;
                    l.style.height = J + "px"
                } else {
                    const C = L.length > 0 && h === L[0].ref.current;
                    l.style.top = "0px";
                    const Z = Math.max(ee, H + d.offsetTop + (C ? fe : 0) + ne) + _;
                    l.style.height = Z + "px", d.scrollTop = I - ee + d.offsetTop
                }
                l.style.margin = `${A}px 0`, l.style.minHeight = pe + "px", l.style.maxHeight = V + "px", i ? .(), requestAnimationFrame(() => T.current = !0)
            }
        }, [R, u.trigger, u.valueNode, l, f, d, h, g, u.dir, i]);
        z(() => v(), [v]);
        const [W, M] = n.useState();
        z(() => {
            f && M(window.getComputedStyle(f).zIndex)
        }, [f]);
        const oe = n.useCallback(N => {
            N && y.current === !0 && (v(), m ? .(), y.current = !1)
        }, [v, m]);
        return o.jsx(Wt, {
            scope: e,
            contentWrapper: l,
            shouldExpandOnScrollRef: T,
            onScrollButtonChange: oe,
            children: o.jsx("div", {
                ref: a,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: W
                },
                children: o.jsx(j.div, { ...s,
                    ref: w,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...s.style
                    }
                })
            })
        })
    });
He.displayName = Ht;
var Ft = "SelectPopperPosition",
    ge = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            align: i = "start",
            collisionPadding: s = A,
            ...u
        } = t, r = ue(e);
        return o.jsx(vt, { ...r,
            ...u,
            ref: c,
            align: i,
            collisionPadding: s,
            style: {
                boxSizing: "border-box",
                ...u.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
ge.displayName = Ft;
var [Wt, Te] = te(Q, {}), Se = "SelectViewport", Fe = n.forwardRef((t, c) => {
    const {
        __scopeSelect: e,
        nonce: i,
        ...s
    } = t, u = q(Se, e), r = Te(Se, e), l = k(c, u.onViewportChange), a = n.useRef(0);
    return o.jsxs(o.Fragment, {
        children: [o.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: i
        }), o.jsx(ie.Slot, {
            scope: e,
            children: o.jsx(j.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...s,
                ref: l,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...s.style
                },
                onScroll: b(s.onScroll, f => {
                    const x = f.currentTarget,
                        {
                            contentWrapper: w,
                            shouldExpandOnScrollRef: R
                        } = r;
                    if (R ? .current && w) {
                        const T = Math.abs(a.current - x.scrollTop);
                        if (T > 0) {
                            const y = window.innerHeight - A * 2,
                                d = parseFloat(w.style.minHeight),
                                h = parseFloat(w.style.height),
                                g = Math.max(d, h);
                            if (g < y) {
                                const m = g + T,
                                    v = Math.min(y, m),
                                    W = m - v;
                                w.style.height = v + "px", w.style.bottom === "0px" && (x.scrollTop = W > 0 ? W : 0, w.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    a.current = x.scrollTop
                })
            })
        })]
    })
});
Fe.displayName = Se;
var We = "SelectGroup",
    [Ut, Kt] = te(We),
    Ue = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            ...i
        } = t, s = Ie();
        return o.jsx(Ut, {
            scope: e,
            id: s,
            children: o.jsx(j.div, {
                role: "group",
                "aria-labelledby": s,
                ...i,
                ref: c
            })
        })
    });
Ue.displayName = We;
var Ke = "SelectLabel",
    Ge = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            ...i
        } = t, s = Kt(Ke, e);
        return o.jsx(j.div, {
            id: s.id,
            ...i,
            ref: c
        })
    });
Ge.displayName = Ke;
var ae = "SelectItem",
    [Gt, $e] = te(ae),
    ze = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            value: i,
            disabled: s = !1,
            textValue: u,
            ...r
        } = t, l = Y(ae, e), a = q(ae, e), f = l.value === i, [x, w] = n.useState(u ? ? ""), [R, T] = n.useState(!1), y = k(c, m => a.itemRefCallback ? .(m, i, s)), d = Ie(), h = n.useRef("touch"), g = () => {
            s || (l.onValueChange(i), l.onOpenChange(!1))
        };
        if (i === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return o.jsx(Gt, {
            scope: e,
            value: i,
            disabled: s,
            textId: d,
            isSelected: f,
            onItemTextChange: n.useCallback(m => {
                w(v => v || (m ? .textContent ? ? "").trim())
            }, []),
            children: o.jsx(ie.ItemSlot, {
                scope: e,
                value: i,
                disabled: s,
                textValue: x,
                children: o.jsx(j.div, {
                    role: "option",
                    "aria-labelledby": d,
                    "data-highlighted": R ? "" : void 0,
                    "aria-selected": f && R,
                    "data-state": f ? "checked" : "unchecked",
                    "aria-disabled": s || void 0,
                    "data-disabled": s ? "" : void 0,
                    tabIndex: s ? void 0 : -1,
                    ...r,
                    ref: y,
                    onFocus: b(r.onFocus, () => T(!0)),
                    onBlur: b(r.onBlur, () => T(!1)),
                    onClick: b(r.onClick, () => {
                        h.current !== "mouse" && g()
                    }),
                    onPointerUp: b(r.onPointerUp, () => {
                        h.current === "mouse" && g()
                    }),
                    onPointerDown: b(r.onPointerDown, m => {
                        h.current = m.pointerType
                    }),
                    onPointerMove: b(r.onPointerMove, m => {
                        h.current = m.pointerType, s ? a.onItemLeave ? .() : h.current === "mouse" && m.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: b(r.onPointerLeave, m => {
                        m.currentTarget === document.activeElement && a.onItemLeave ? .()
                    }),
                    onKeyDown: b(r.onKeyDown, m => {
                        a.searchRef ? .current !== "" && m.key === " " || (Mt.includes(m.key) && g(), m.key === " " && m.preventDefault())
                    })
                })
            })
        })
    });
ze.displayName = ae;
var re = "SelectItemText",
    Ye = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            className: i,
            style: s,
            ...u
        } = t, r = Y(re, e), l = q(re, e), a = $e(re, e), f = kt(re, e), [x, w] = n.useState(null), R = k(c, g => w(g), a.onItemTextChange, g => l.itemTextRefCallback ? .(g, a.value, a.disabled)), T = x ? .textContent, y = n.useMemo(() => o.jsx("option", {
            value: a.value,
            disabled: a.disabled,
            children: T
        }, a.value), [a.disabled, a.value, T]), {
            onNativeOptionAdd: d,
            onNativeOptionRemove: h
        } = f;
        return z(() => (d(y), () => h(y)), [d, h, y]), o.jsxs(o.Fragment, {
            children: [o.jsx(j.span, {
                id: a.textId,
                ...u,
                ref: R
            }), a.isSelected && r.valueNode && !r.valueNodeHasChildren ? Ne.createPortal(u.children, r.valueNode) : null]
        })
    });
Ye.displayName = re;
var qe = "SelectItemIndicator",
    Xe = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            ...i
        } = t;
        return $e(qe, e).isSelected ? o.jsx(j.span, {
            "aria-hidden": !0,
            ...i,
            ref: c
        }) : null
    });
Xe.displayName = qe;
var we = "SelectScrollUpButton",
    Ze = n.forwardRef((t, c) => {
        const e = q(we, t.__scopeSelect),
            i = Te(we, t.__scopeSelect),
            [s, u] = n.useState(!1),
            r = k(c, i.onScrollButtonChange);
        return z(() => {
            if (e.viewport && e.isPositioned) {
                let l = function() {
                    const f = a.scrollTop > 0;
                    u(f)
                };
                const a = e.viewport;
                return l(), a.addEventListener("scroll", l), () => a.removeEventListener("scroll", l)
            }
        }, [e.viewport, e.isPositioned]), s ? o.jsx(Qe, { ...t,
            ref: r,
            onAutoScroll: () => {
                const {
                    viewport: l,
                    selectedItem: a
                } = e;
                l && a && (l.scrollTop = l.scrollTop - a.offsetHeight)
            }
        }) : null
    });
Ze.displayName = we;
var Ce = "SelectScrollDownButton",
    Je = n.forwardRef((t, c) => {
        const e = q(Ce, t.__scopeSelect),
            i = Te(Ce, t.__scopeSelect),
            [s, u] = n.useState(!1),
            r = k(c, i.onScrollButtonChange);
        return z(() => {
            if (e.viewport && e.isPositioned) {
                let l = function() {
                    const f = a.scrollHeight - a.clientHeight,
                        x = Math.ceil(a.scrollTop) < f;
                    u(x)
                };
                const a = e.viewport;
                return l(), a.addEventListener("scroll", l), () => a.removeEventListener("scroll", l)
            }
        }, [e.viewport, e.isPositioned]), s ? o.jsx(Qe, { ...t,
            ref: r,
            onAutoScroll: () => {
                const {
                    viewport: l,
                    selectedItem: a
                } = e;
                l && a && (l.scrollTop = l.scrollTop + a.offsetHeight)
            }
        }) : null
    });
Je.displayName = Ce;
var Qe = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            onAutoScroll: i,
            ...s
        } = t, u = q("SelectScrollButton", e), r = n.useRef(null), l = de(e), a = n.useCallback(() => {
            r.current !== null && (window.clearInterval(r.current), r.current = null)
        }, []);
        return n.useEffect(() => () => a(), [a]), z(() => {
            l().find(x => x.ref.current === document.activeElement) ? .ref.current ? .scrollIntoView({
                block: "nearest"
            })
        }, [l]), o.jsx(j.div, {
            "aria-hidden": !0,
            ...s,
            ref: c,
            style: {
                flexShrink: 0,
                ...s.style
            },
            onPointerDown: b(s.onPointerDown, () => {
                r.current === null && (r.current = window.setInterval(i, 50))
            }),
            onPointerMove: b(s.onPointerMove, () => {
                u.onItemLeave ? .(), r.current === null && (r.current = window.setInterval(i, 50))
            }),
            onPointerLeave: b(s.onPointerLeave, () => {
                a()
            })
        })
    }),
    $t = "SelectSeparator",
    et = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            ...i
        } = t;
        return o.jsx(j.div, {
            "aria-hidden": !0,
            ...i,
            ref: c
        })
    });
et.displayName = $t;
var ye = "SelectArrow",
    zt = n.forwardRef((t, c) => {
        const {
            __scopeSelect: e,
            ...i
        } = t, s = ue(e), u = Y(ye, e), r = q(ye, e);
        return u.open && r.position === "popper" ? o.jsx(xt, { ...s,
            ...i,
            ref: c
        }) : null
    });
zt.displayName = ye;

function tt(t) {
    return t === "" || t === void 0
}
var ot = n.forwardRef((t, c) => {
    const {
        value: e,
        ...i
    } = t, s = n.useRef(null), u = k(c, s), r = Nt(e);
    return n.useEffect(() => {
        const l = s.current,
            a = window.HTMLSelectElement.prototype,
            x = Object.getOwnPropertyDescriptor(a, "value").set;
        if (r !== e && x) {
            const w = new Event("change", {
                bubbles: !0
            });
            x.call(l, e), l.dispatchEvent(w)
        }
    }, [r, e]), o.jsx(gt, {
        asChild: !0,
        children: o.jsx("select", { ...i,
            ref: u,
            defaultValue: e
        })
    })
});
ot.displayName = "BubbleSelect";

function nt(t) {
    const c = St(t),
        e = n.useRef(""),
        i = n.useRef(0),
        s = n.useCallback(r => {
            const l = e.current + r;
            c(l),
                function a(f) {
                    e.current = f, window.clearTimeout(i.current), f !== "" && (i.current = window.setTimeout(() => a(""), 1e3))
                }(l)
        }, [c]),
        u = n.useCallback(() => {
            e.current = "", window.clearTimeout(i.current)
        }, []);
    return n.useEffect(() => () => window.clearTimeout(i.current), []), [e, s, u]
}

function rt(t, c, e) {
    const s = c.length > 1 && Array.from(c).every(f => f === c[0]) ? c[0] : c,
        u = e ? t.indexOf(e) : -1;
    let r = Yt(t, Math.max(u, 0));
    s.length === 1 && (r = r.filter(f => f !== e));
    const a = r.find(f => f.textValue.toLowerCase().startsWith(s.toLowerCase()));
    return a !== e ? a : void 0
}

function Yt(t, c) {
    return t.map((e, i) => t[(c + i) % t.length])
}
var qt = _e,
    Xt = Me,
    Zt = Oe,
    Jt = De,
    Qt = ke,
    eo = Le,
    to = Fe,
    oo = Ue,
    no = Ge,
    ro = ze,
    st = Ye,
    ct = Xe,
    so = Ze,
    co = Je,
    lo = et;

function ao({
    children: t,
    ...c
}, e) {
    return o.jsxs(Tt, {
        $as: ro,
        ref: e,
        className: "flex justify-between",
        ...c,
        children: [o.jsx(st, {
            children: t
        }), o.jsx(ct, {
            className: "",
            children: o.jsx(Et, {
                className: "icon-sm"
            })
        })]
    })
}

function io(t) {
    return o.jsx(Pt, {
        $as: Xt,
        ...t
    })
}

function uo({
    children: t,
    className: c,
    ...e
}) {
    return o.jsxs(bt, {
        $as: eo,
        side: "bottom",
        sideOffset: 4,
        position: "popper",
        className: Rt("min-w-[220px] overflow-auto", c),
        ...e,
        children: [o.jsx(so, {
            className: "flex h-8 cursor-default items-center justify-center text-token-text-primary",
            children: o.jsx(_t, {
                className: "icon-sm"
            })
        }), o.jsx(to, {
            children: t
        }), o.jsx(co, {
            className: "flex h-8 cursor-default items-center justify-center text-token-text-primary",
            children: o.jsx(Ee, {
                className: "icon-sm"
            })
        })]
    })
}

function po() {
    return o.jsx(Jt, {
        children: o.jsx(Ee, {
            className: "icon-sm"
        })
    })
}

function fo() {
    return o.jsx(lo, {
        className: "mx-5 my-1 h-px bg-token-border-light"
    })
}

function mo({
    children: t
}) {
    return o.jsx(no, {
        className: "mx-2 my-0 px-2 text-xs font-semibold text-token-text-secondary",
        children: t
    })
}

function wo({
    options: t,
    value: c,
    onValueChange: e,
    disabled: i,
    defaultValue: s,
    placeholder: u
}) {
    return o.jsxs($.Root, {
        value: c,
        onValueChange: e,
        disabled: i,
        defaultValue: s,
        children: [o.jsxs($.Trigger, {
            children: [o.jsx($.Value, {
                placeholder: u
            }), o.jsx($.Icon, {})]
        }), o.jsx($.Portal, {
            children: o.jsx($.Content, {
                children: t.map(r => o.jsx($.Item, {
                    value: r.value,
                    children: r.label
                }, r.value))
            })
        })]
    })
}
const $ = {
        Root: qt,
        Trigger: io,
        Value: Zt,
        Icon: po,
        Portal: Qt,
        Content: uo,
        Item: It.forwardRef(ao),
        ItemText: st,
        ItemIndicator: ct,
        Separator: fo,
        Label: mo,
        Group: oo
    },
    Co = $;
export {
    wo as B, Co as S
};
//# sourceMappingURL=mco6ffvkuw2vrlq8.js.map
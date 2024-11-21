import {
    r as E,
    bO as G,
    m as n,
    bJ as m,
    bA as S,
    gu as A,
    bM as T,
    aG as c,
    bN as M,
    bP as N,
    bQ as V
} from "./hbhpmx2ipkndwudc.js";
var k = "Toggle",
    b = E.forwardRef((e, r) => {
        const {
            pressed: a,
            defaultPressed: t = !1,
            onPressedChange: s,
            ...u
        } = e, [l = !1, o] = G({
            prop: a,
            onChange: s,
            defaultProp: t
        });
        return n.jsx(m.button, {
            type: "button",
            "aria-pressed": l,
            "data-state": l ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...u,
            ref: r,
            onClick: S(e.onClick, () => {
                e.disabled || o(!l)
            })
        })
    });
b.displayName = k;
var d = "ToggleGroup",
    [C, H] = A(d, [T]),
    h = T(),
    x = c.forwardRef((e, r) => {
        const {
            type: a,
            ...t
        } = e;
        if (a === "single") {
            const s = t;
            return n.jsx(w, { ...s,
                ref: r
            })
        }
        if (a === "multiple") {
            const s = t;
            return n.jsx(F, { ...s,
                ref: r
            })
        }
        throw new Error(`Missing prop \`type\` expected on \`${d}\``)
    });
x.displayName = d;
var [I, _] = C(d), w = c.forwardRef((e, r) => {
    const {
        value: a,
        defaultValue: t,
        onValueChange: s = () => {},
        ...u
    } = e, [l, o] = G({
        prop: a,
        defaultProp: t,
        onChange: s
    });
    return n.jsx(I, {
        scope: e.__scopeToggleGroup,
        type: "single",
        value: l ? [l] : [],
        onItemActivate: o,
        onItemDeactivate: c.useCallback(() => o(""), [o]),
        children: n.jsx(j, { ...u,
            ref: r
        })
    })
}), F = c.forwardRef((e, r) => {
    const {
        value: a,
        defaultValue: t,
        onValueChange: s = () => {},
        ...u
    } = e, [l = [], o] = G({
        prop: a,
        defaultProp: t,
        onChange: s
    }), p = c.useCallback(i => o((g = []) => [...g, i]), [o]), f = c.useCallback(i => o((g = []) => g.filter(y => y !== i)), [o]);
    return n.jsx(I, {
        scope: e.__scopeToggleGroup,
        type: "multiple",
        value: l,
        onItemActivate: p,
        onItemDeactivate: f,
        children: n.jsx(j, { ...u,
            ref: r
        })
    })
});
x.displayName = d;
var [D, O] = C(d), j = c.forwardRef((e, r) => {
    const {
        __scopeToggleGroup: a,
        disabled: t = !1,
        rovingFocus: s = !0,
        orientation: u,
        dir: l,
        loop: o = !0,
        ...p
    } = e, f = h(a), i = M(l), g = {
        role: "group",
        dir: i,
        ...p
    };
    return n.jsx(D, {
        scope: a,
        rovingFocus: s,
        disabled: t,
        children: s ? n.jsx(N, {
            asChild: !0,
            ...f,
            orientation: u,
            dir: i,
            loop: o,
            children: n.jsx(m.div, { ...g,
                ref: r
            })
        }) : n.jsx(m.div, { ...g,
            ref: r
        })
    })
}), v = "ToggleGroupItem", R = c.forwardRef((e, r) => {
    const a = _(v, e.__scopeToggleGroup),
        t = O(v, e.__scopeToggleGroup),
        s = h(e.__scopeToggleGroup),
        u = a.value.includes(e.value),
        l = t.disabled || e.disabled,
        o = { ...e,
            pressed: u,
            disabled: l
        },
        p = c.useRef(null);
    return t.rovingFocus ? n.jsx(V, {
        asChild: !0,
        ...s,
        focusable: !l,
        active: u,
        ref: p,
        children: n.jsx(P, { ...o,
            ref: r
        })
    }) : n.jsx(P, { ...o,
        ref: r
    })
});
R.displayName = v;
var P = c.forwardRef((e, r) => {
        const {
            __scopeToggleGroup: a,
            value: t,
            ...s
        } = e, u = _(v, a), l = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, o = u.type === "single" ? l : void 0;
        return n.jsx(b, { ...o,
            ...s,
            ref: r,
            onPressedChange: p => {
                p ? u.onItemActivate(t) : u.onItemDeactivate(t)
            }
        })
    }),
    J = x,
    L = R;
export {
    L as I, J as R, H as c
};
//# sourceMappingURL=cmx2y9rq24lt8yit.js.map
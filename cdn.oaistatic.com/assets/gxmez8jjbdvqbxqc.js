import {
    t as n,
    a3 as m,
    m as e,
    aD as c,
    ca as u,
    cb as l
} from "./hbhpmx2ipkndwudc.js";
import {
    G as d,
    a as p
} from "./ex1buqdicemvrfma.js";
import {
    ak as f,
    cN as x,
    cO as S
} from "./ab2oz9enzsoo3wow.js";
import {
    a as h
} from "./ky07c7gm4e4zomhb.js";
import "./mgr0w69u3c317psp.js";
import "./m0s651bq7jimn9ko.js";
import "./m7u5z7sua6e1c9ci.js";
import "./nb6f1twu9li01ii9.js";

function b({
    isActive: t,
    isNewConversation: s
}) {
    const i = n(),
        a = m(),
        o = f();
    return e.jsx("div", {
        className: c(o ? "" : "bg-token-sidebar-surface-primary", "pt-0"),
        children: e.jsx(d, {
            gizmo: void 0,
            isActive: t,
            onClick: r => {
                u(l(i)) && !s && (r.preventDefault(), x(a))
            }
        })
    })
}

function y({
    currentGizmoId: t
}) {
    const {
        data: {
            gizmos: s
        } = {}
    } = S();
    let i = s;
    return e.jsxs(e.Fragment, {
        children: [e.jsx(b, {
            isActive: t === void 0,
            isNewConversation: !0
        }), e.jsx(h, {}), i != null ? e.jsx(p, {
            gizmo: i,
            currentGizmoId: t,
            maxToShowOnLoad: 7
        }) : null]
    })
}
export {
    b as DefaultGPTSidebarListItem, y as GizmoSidebarList, p as GizmoSidebarListContent
};
//# sourceMappingURL=gxmez8jjbdvqbxqc.js.map
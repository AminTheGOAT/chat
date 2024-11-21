import {
    gC as b
} from "./hbhpmx2ipkndwudc.js";
import {
    j as k,
    c as A,
    s as T,
    l as N,
    a as K
} from "./hxvlxwkzr288aynn.js";
import {
    F as p,
    a as h,
    P as g,
    S as u,
    T as x,
    N as S,
    D,
    d as P
} from "./bv1tgraszqspgaxz.js";
import {
    dD as M,
    dE as B
} from "./ab2oz9enzsoo3wow.js";

function F(r) {
    let e = "",
        t = !1;
    const l = [];

    function n(s) {
        if (t = !1, s.type.name === "paragraph") return s.descendants(i => n(i)), e += `
`, t = !0, !1;
        if (s.type.name === "command_token") {
            const i = s.textContent;
            return l.push({
                symbol: b.SystemHint,
                startIndex: e.length,
                endIndex: e.length + i.length
            }), e += i, !1
        } else s.isText && s.text !== void 0 && (e += s.text)
    }
    return r.descendants(s => n(s)), t && e.endsWith(`
`) && (e = e.slice(0, -1)), {
        content: e,
        metadata: {
            custom_symbol_offsets: l
        }
    }
}

function Y(r) {
    return F(r.state.doc)
}
const O = A(K, N, T);
async function v(r, e) {
    const {
        schema: t
    } = r.state, l = e.split(`
`);
    if (r.dispatch(r.state.tr.deleteSelection()), r.dispatch(r.state.tr.insertText(l[0])), l.length > 1) {
        O(r.state, r.dispatch);
        const n = l.slice(1),
            s = p.fromArray(n.map(o => t.nodes.paragraph.create(null, o === "" ? null : t.text(o)))),
            i = new h(s, 0, 0);
        r.dispatch(r.state.tr.replaceSelection(i)), k(r.state, r.dispatch, r)
    }
}
const z = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;

function E(r) {
    let e = r.split(/-(?!$)/),
        t = e[e.length - 1];
    t == "Space" && (t = " ");
    let l, n, s, i;
    for (let o = 0; o < e.length - 1; o++) {
        let f = e[o];
        if (/^(cmd|meta|m)$/i.test(f)) i = !0;
        else if (/^a(lt)?$/i.test(f)) l = !0;
        else if (/^(c|ctrl|control)$/i.test(f)) n = !0;
        else if (/^s(hift)?$/i.test(f)) s = !0;
        else if (/^mod$/i.test(f)) z ? i = !0 : n = !0;
        else throw new Error("Unrecognized modifier name: " + f)
    }
    return l && (t = "Alt-" + t), n && (t = "Ctrl-" + t), i && (t = "Meta-" + t), s && (t = "Shift-" + t), t
}

function I(r) {
    let e = Object.create(null);
    for (let t in r) e[E(t)] = r[t];
    return e
}

function d(r, e, t = !0) {
    return e.altKey && (r = "Alt-" + r), e.ctrlKey && (r = "Ctrl-" + r), e.metaKey && (r = "Meta-" + r), t && e.shiftKey && (r = "Shift-" + r), r
}

function G(r) {
    return new g({
        props: {
            handleKeyDown: C(r)
        }
    })
}

function C(r) {
    let e = I(r);
    return function(t, l) {
        let n = M(l),
            s, i = e[d(n, l)];
        if (i && i(t.state, t.dispatch, t)) return !0;
        if (n.length == 1 && n != " ") {
            if (l.shiftKey) {
                let o = e[d(n, l, !1)];
                if (o && o(t.state, t.dispatch, t)) return !0
            }
            if ((l.shiftKey || l.altKey || l.metaKey || n.charCodeAt(0) > 127) && (s = B[l.keyCode]) && s != n) {
                let o = e[d(s, l)];
                if (o && o(t.state, t.dispatch, t)) return !0
            }
        }
        return !1
    }
}
class a extends u {
    constructor(e) {
        super(e, e)
    }
    map(e, t) {
        let l = e.resolve(t.map(this.head));
        return a.valid(l) ? new a(l) : u.near(l)
    }
    content() {
        return h.empty
    }
    eq(e) {
        return e instanceof a && e.head == this.head
    }
    toJSON() {
        return {
            type: "gapcursor",
            pos: this.head
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number") throw new RangeError("Invalid input for GapCursor.fromJSON");
        return new a(e.resolve(t.pos))
    }
    getBookmark() {
        return new m(this.anchor)
    }
    static valid(e) {
        let t = e.parent;
        if (t.isTextblock || !j(e) || !w(e)) return !1;
        let l = t.type.spec.allowGapCursor;
        if (l != null) return l;
        let n = t.contentMatchAt(e.index()).defaultType;
        return n && n.isTextblock
    }
    static findGapCursorFrom(e, t, l = !1) {
        e: for (;;) {
            if (!l && a.valid(e)) return e;
            let n = e.pos,
                s = null;
            for (let i = e.depth;; i--) {
                let o = e.node(i);
                if (t > 0 ? e.indexAfter(i) < o.childCount : e.index(i) > 0) {
                    s = o.child(t > 0 ? e.indexAfter(i) : e.index(i) - 1);
                    break
                } else if (i == 0) return null;
                n += t;
                let f = e.doc.resolve(n);
                if (a.valid(f)) return f
            }
            for (;;) {
                let i = t > 0 ? s.firstChild : s.lastChild;
                if (!i) {
                    if (s.isAtom && !s.isText && !S.isSelectable(s)) {
                        e = e.doc.resolve(n + s.nodeSize * t), l = !1;
                        continue e
                    }
                    break
                }
                s = i, n += t;
                let o = e.doc.resolve(n);
                if (a.valid(o)) return o
            }
            return null
        }
    }
}
a.prototype.visible = !1;
a.findFrom = a.findGapCursorFrom;
u.jsonID("gapcursor", a);
class m {
    constructor(e) {
        this.pos = e
    }
    map(e) {
        return new m(e.map(this.pos))
    }
    resolve(e) {
        let t = e.resolve(this.pos);
        return a.valid(t) ? new a(t) : u.near(t)
    }
}

function j(r) {
    for (let e = r.depth; e >= 0; e--) {
        let t = r.index(e),
            l = r.node(e);
        if (t == 0) {
            if (l.type.spec.isolating) return !0;
            continue
        }
        for (let n = l.child(t - 1);; n = n.lastChild) {
            if (n.childCount == 0 && !n.inlineContent || n.isAtom || n.type.spec.isolating) return !0;
            if (n.inlineContent) return !1
        }
    }
    return !0
}

function w(r) {
    for (let e = r.depth; e >= 0; e--) {
        let t = r.indexAfter(e),
            l = r.node(e);
        if (t == l.childCount) {
            if (l.type.spec.isolating) return !0;
            continue
        }
        for (let n = l.child(t);; n = n.firstChild) {
            if (n.childCount == 0 && !n.inlineContent || n.isAtom || n.type.spec.isolating) return !0;
            if (n.inlineContent) return !1
        }
    }
    return !0
}

function Q() {
    return new g({
        props: {
            decorations: R,
            createSelectionBetween(r, e, t) {
                return e.pos == t.pos && a.valid(t) ? new a(t) : null
            },
            handleClick: L,
            handleKeyDown: J,
            handleDOMEvents: {
                beforeinput: H
            }
        }
    })
}
const J = C({
    ArrowLeft: c("horiz", -1),
    ArrowRight: c("horiz", 1),
    ArrowUp: c("vert", -1),
    ArrowDown: c("vert", 1)
});

function c(r, e) {
    const t = r == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
    return function(l, n, s) {
        let i = l.selection,
            o = e > 0 ? i.$to : i.$from,
            f = i.empty;
        if (i instanceof x) {
            if (!s.endOfTextblock(t) || o.depth == 0) return !1;
            f = !1, o = l.doc.resolve(e > 0 ? o.after() : o.before())
        }
        let y = a.findGapCursorFrom(o, e, f);
        return y ? (n && n(l.tr.setSelection(new a(y))), !0) : !1
    }
}

function L(r, e, t) {
    if (!r || !r.editable) return !1;
    let l = r.state.doc.resolve(e);
    if (!a.valid(l)) return !1;
    let n = r.posAtCoords({
        left: t.clientX,
        top: t.clientY
    });
    return n && n.inside > -1 && S.isSelectable(r.state.doc.nodeAt(n.inside)) ? !1 : (r.dispatch(r.state.tr.setSelection(new a(l))), !0)
}

function H(r, e) {
    if (e.inputType != "insertCompositionText" || !(r.state.selection instanceof a)) return !1;
    let {
        $from: t
    } = r.state.selection, l = t.parent.contentMatchAt(t.index()).findWrapping(r.state.schema.nodes.text);
    if (!l) return !1;
    let n = p.empty;
    for (let i = l.length - 1; i >= 0; i--) n = p.from(l[i].createAndFill(null, n));
    let s = r.state.tr.replace(t.pos, t.pos, new h(n, 0, 0));
    return s.setSelection(x.near(s.doc.resolve(t.pos + 1))), r.dispatch(s), !1
}

function R(r) {
    if (!(r.selection instanceof a)) return null;
    let e = document.createElement("div");
    return e.className = "ProseMirror-gapcursor", D.create(r.doc, [P.widget(r.selection.head, e, {
        key: "gapcursor"
    })])
}
export {
    O as c, Q as g, v as i, G as k, F as n, Y as p
};
//# sourceMappingURL=t7u8ciwlz2voun1n.js.map
import {
    ec as on
} from "./ab2oz9enzsoo3wow.js";

function ri(i, e, t) {
    for (let n = 0;; n++) {
        if (n == i.childCount || n == e.childCount) return i.childCount == e.childCount ? null : t;
        let r = i.child(n),
            s = e.child(n);
        if (r == s) {
            t += r.nodeSize;
            continue
        }
        if (!r.sameMarkup(s)) return t;
        if (r.isText && r.text != s.text) {
            for (let o = 0; r.text[o] == s.text[o]; o++) t++;
            return t
        }
        if (r.content.size || s.content.size) {
            let o = ri(r.content, s.content, t + 1);
            if (o != null) return o
        }
        t += r.nodeSize
    }
}

function si(i, e, t, n) {
    for (let r = i.childCount, s = e.childCount;;) {
        if (r == 0 || s == 0) return r == s ? null : {
            a: t,
            b: n
        };
        let o = i.child(--r),
            l = e.child(--s),
            a = o.nodeSize;
        if (o == l) {
            t -= a, n -= a;
            continue
        }
        if (!o.sameMarkup(l)) return {
            a: t,
            b: n
        };
        if (o.isText && o.text != l.text) {
            let h = 0,
                c = Math.min(o.text.length, l.text.length);
            for (; h < c && o.text[o.text.length - h - 1] == l.text[l.text.length - h - 1];) h++, t--, n--;
            return {
                a: t,
                b: n
            }
        }
        if (o.content.size || l.content.size) {
            let h = si(o.content, l.content, t - 1, n - 1);
            if (h) return h
        }
        t -= a, n -= a
    }
}
class y {
    constructor(e, t) {
        if (this.content = e, this.size = t || 0, t == null)
            for (let n = 0; n < e.length; n++) this.size += e[n].nodeSize
    }
    nodesBetween(e, t, n, r = 0, s) {
        for (let o = 0, l = 0; l < t; o++) {
            let a = this.content[o],
                h = l + a.nodeSize;
            if (h > e && n(a, r + l, s || null, o) !== !1 && a.content.size) {
                let c = l + 1;
                a.nodesBetween(Math.max(0, e - c), Math.min(a.content.size, t - c), n, r + c)
            }
            l = h
        }
    }
    descendants(e) {
        this.nodesBetween(0, this.size, e)
    }
    textBetween(e, t, n, r) {
        let s = "",
            o = !0;
        return this.nodesBetween(e, t, (l, a) => {
            let h = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? r ? typeof r == "function" ? r(l) : r : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
            l.isBlock && (l.isLeaf && h || l.isTextblock) && n && (o ? o = !1 : s += n), s += h
        }, 0), s
    }
    append(e) {
        if (!e.size) return this;
        if (!this.size) return e;
        let t = this.lastChild,
            n = e.firstChild,
            r = this.content.slice(),
            s = 0;
        for (t.isText && t.sameMarkup(n) && (r[r.length - 1] = t.withText(t.text + n.text), s = 1); s < e.content.length; s++) r.push(e.content[s]);
        return new y(r, this.size + e.size)
    }
    cut(e, t = this.size) {
        if (e == 0 && t == this.size) return this;
        let n = [],
            r = 0;
        if (t > e)
            for (let s = 0, o = 0; o < t; s++) {
                let l = this.content[s],
                    a = o + l.nodeSize;
                a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), n.push(l), r += l.nodeSize), o = a
            }
        return new y(n, r)
    }
    cutByIndex(e, t) {
        return e == t ? y.empty : e == 0 && t == this.content.length ? this : new y(this.content.slice(e, t))
    }
    replaceChild(e, t) {
        let n = this.content[e];
        if (n == t) return this;
        let r = this.content.slice(),
            s = this.size + t.nodeSize - n.nodeSize;
        return r[e] = t, new y(r, s)
    }
    addToStart(e) {
        return new y([e].concat(this.content), this.size + e.nodeSize)
    }
    addToEnd(e) {
        return new y(this.content.concat(e), this.size + e.nodeSize)
    }
    eq(e) {
        if (this.content.length != e.content.length) return !1;
        for (let t = 0; t < this.content.length; t++)
            if (!this.content[t].eq(e.content[t])) return !1;
        return !0
    }
    get firstChild() {
        return this.content.length ? this.content[0] : null
    }
    get lastChild() {
        return this.content.length ? this.content[this.content.length - 1] : null
    }
    get childCount() {
        return this.content.length
    }
    child(e) {
        let t = this.content[e];
        if (!t) throw new RangeError("Index " + e + " out of range for " + this);
        return t
    }
    maybeChild(e) {
        return this.content[e] || null
    }
    forEach(e) {
        for (let t = 0, n = 0; t < this.content.length; t++) {
            let r = this.content[t];
            e(r, n, t), n += r.nodeSize
        }
    }
    findDiffStart(e, t = 0) {
        return ri(this, e, t)
    }
    findDiffEnd(e, t = this.size, n = e.size) {
        return si(this, e, t, n)
    }
    findIndex(e, t = -1) {
        if (e == 0) return nt(0, e);
        if (e == this.size) return nt(this.content.length, e);
        if (e > this.size || e < 0) throw new RangeError(`Position ${e} outside of fragment (${this})`);
        for (let n = 0, r = 0;; n++) {
            let s = this.child(n),
                o = r + s.nodeSize;
            if (o >= e) return o == e || t > 0 ? nt(n + 1, o) : nt(n, r);
            r = o
        }
    }
    toString() {
        return "<" + this.toStringInner() + ">"
    }
    toStringInner() {
        return this.content.join(", ")
    }
    toJSON() {
        return this.content.length ? this.content.map(e => e.toJSON()) : null
    }
    static fromJSON(e, t) {
        if (!t) return y.empty;
        if (!Array.isArray(t)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return new y(t.map(e.nodeFromJSON))
    }
    static fromArray(e) {
        if (!e.length) return y.empty;
        let t, n = 0;
        for (let r = 0; r < e.length; r++) {
            let s = e[r];
            n += s.nodeSize, r && s.isText && e[r - 1].sameMarkup(s) ? (t || (t = e.slice(0, r)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s)
        }
        return new y(t || e, n)
    }
    static from(e) {
        if (!e) return y.empty;
        if (e instanceof y) return e;
        if (Array.isArray(e)) return this.fromArray(e);
        if (e.attrs) return new y([e], e.nodeSize);
        throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""))
    }
}
y.empty = new y([], 0);
const Ct = {
    index: 0,
    offset: 0
};

function nt(i, e) {
    return Ct.index = i, Ct.offset = e, Ct
}

function lt(i, e) {
    if (i === e) return !0;
    if (!(i && typeof i == "object") || !(e && typeof e == "object")) return !1;
    let t = Array.isArray(i);
    if (Array.isArray(e) != t) return !1;
    if (t) {
        if (i.length != e.length) return !1;
        for (let n = 0; n < i.length; n++)
            if (!lt(i[n], e[n])) return !1
    } else {
        for (let n in i)
            if (!(n in e) || !lt(i[n], e[n])) return !1;
        for (let n in e)
            if (!(n in i)) return !1
    }
    return !0
}
class N {
    constructor(e, t) {
        this.type = e, this.attrs = t
    }
    addToSet(e) {
        let t, n = !1;
        for (let r = 0; r < e.length; r++) {
            let s = e[r];
            if (this.eq(s)) return e;
            if (this.type.excludes(s.type)) t || (t = e.slice(0, r));
            else {
                if (s.type.excludes(this.type)) return e;
                !n && s.type.rank > this.type.rank && (t || (t = e.slice(0, r)), t.push(this), n = !0), t && t.push(s)
            }
        }
        return t || (t = e.slice()), n || t.push(this), t
    }
    removeFromSet(e) {
        for (let t = 0; t < e.length; t++)
            if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
        return e
    }
    isInSet(e) {
        for (let t = 0; t < e.length; t++)
            if (this.eq(e[t])) return !0;
        return !1
    }
    eq(e) {
        return this == e || this.type == e.type && lt(this.attrs, e.attrs)
    }
    toJSON() {
        let e = {
            type: this.type.name
        };
        for (let t in this.attrs) {
            e.attrs = this.attrs;
            break
        }
        return e
    }
    static fromJSON(e, t) {
        if (!t) throw new RangeError("Invalid input for Mark.fromJSON");
        let n = e.marks[t.type];
        if (!n) throw new RangeError(`There is no mark type ${t.type} in this schema`);
        let r = n.create(t.attrs);
        return n.checkAttrs(r.attrs), r
    }
    static sameSet(e, t) {
        if (e == t) return !0;
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++)
            if (!e[n].eq(t[n])) return !1;
        return !0
    }
    static setFrom(e) {
        if (!e || Array.isArray(e) && e.length == 0) return N.none;
        if (e instanceof N) return [e];
        let t = e.slice();
        return t.sort((n, r) => n.type.rank - r.type.rank), t
    }
}
N.none = [];
class at extends Error {}
class k {
    constructor(e, t, n) {
        this.content = e, this.openStart = t, this.openEnd = n
    }
    get size() {
        return this.content.size - this.openStart - this.openEnd
    }
    insertAt(e, t) {
        let n = li(this.content, e + this.openStart, t);
        return n && new k(n, this.openStart, this.openEnd)
    }
    removeBetween(e, t) {
        return new k(oi(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd)
    }
    eq(e) {
        return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd
    }
    toString() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")"
    }
    toJSON() {
        if (!this.content.size) return null;
        let e = {
            content: this.content.toJSON()
        };
        return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e
    }
    static fromJSON(e, t) {
        if (!t) return k.empty;
        let n = t.openStart || 0,
            r = t.openEnd || 0;
        if (typeof n != "number" || typeof r != "number") throw new RangeError("Invalid input for Slice.fromJSON");
        return new k(y.fromJSON(e, t.content), n, r)
    }
    static maxOpen(e, t = !0) {
        let n = 0,
            r = 0;
        for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild) n++;
        for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild) r++;
        return new k(e, n, r)
    }
}
k.empty = new k(y.empty, 0, 0);

function oi(i, e, t) {
    let {
        index: n,
        offset: r
    } = i.findIndex(e), s = i.maybeChild(n), {
        index: o,
        offset: l
    } = i.findIndex(t);
    if (r == e || s.isText) {
        if (l != t && !i.child(o).isText) throw new RangeError("Removing non-flat range");
        return i.cut(0, e).append(i.cut(t))
    }
    if (n != o) throw new RangeError("Removing non-flat range");
    return i.replaceChild(n, s.copy(oi(s.content, e - r - 1, t - r - 1)))
}

function li(i, e, t, n) {
    let {
        index: r,
        offset: s
    } = i.findIndex(e), o = i.maybeChild(r);
    if (s == e || o.isText) return i.cut(0, e).append(t).append(i.cut(e));
    let l = li(o.content, e - s - 1, t);
    return l && i.replaceChild(r, o.copy(l))
}

function pr(i, e, t) {
    if (t.openStart > i.depth) throw new at("Inserted content deeper than insertion position");
    if (i.depth - t.openStart != e.depth - t.openEnd) throw new at("Inconsistent open depths");
    return ai(i, e, t, 0)
}

function ai(i, e, t, n) {
    let r = i.index(n),
        s = i.node(n);
    if (r == e.index(n) && n < i.depth - t.openStart) {
        let o = ai(i, e, t, n + 1);
        return s.copy(s.content.replaceChild(r, o))
    } else if (t.content.size)
        if (!t.openStart && !t.openEnd && i.depth == n && e.depth == n) {
            let o = i.parent,
                l = o.content;
            return ke(o, l.cut(0, i.parentOffset).append(t.content).append(l.cut(e.parentOffset)))
        } else {
            let {
                start: o,
                end: l
            } = mr(t, i);
            return ke(s, ci(i, o, l, e, n))
        }
    else return ke(s, ht(i, e, n))
}

function hi(i, e) {
    if (!e.type.compatibleContent(i.type)) throw new at("Cannot join " + e.type.name + " onto " + i.type.name)
}

function Bt(i, e, t) {
    let n = i.node(t);
    return hi(n, e.node(t)), n
}

function ye(i, e) {
    let t = e.length - 1;
    t >= 0 && i.isText && i.sameMarkup(e[t]) ? e[t] = i.withText(e[t].text + i.text) : e.push(i)
}

function Je(i, e, t, n) {
    let r = (e || i).node(t),
        s = 0,
        o = e ? e.index(t) : r.childCount;
    i && (s = i.index(t), i.depth > t ? s++ : i.textOffset && (ye(i.nodeAfter, n), s++));
    for (let l = s; l < o; l++) ye(r.child(l), n);
    e && e.depth == t && e.textOffset && ye(e.nodeBefore, n)
}

function ke(i, e) {
    return i.type.checkContent(e), i.copy(e)
}

function ci(i, e, t, n, r) {
    let s = i.depth > r && Bt(i, e, r + 1),
        o = n.depth > r && Bt(t, n, r + 1),
        l = [];
    return Je(null, i, r, l), s && o && e.index(r) == t.index(r) ? (hi(s, o), ye(ke(s, ci(i, e, t, n, r + 1)), l)) : (s && ye(ke(s, ht(i, e, r + 1)), l), Je(e, t, r, l), o && ye(ke(o, ht(t, n, r + 1)), l)), Je(n, null, r, l), new y(l)
}

function ht(i, e, t) {
    let n = [];
    if (Je(null, i, t, n), i.depth > t) {
        let r = Bt(i, e, t + 1);
        ye(ke(r, ht(i, e, t + 1)), n)
    }
    return Je(e, null, t, n), new y(n)
}

function mr(i, e) {
    let t = e.depth - i.openStart,
        r = e.node(t).copy(i.content);
    for (let s = t - 1; s >= 0; s--) r = e.node(s).copy(y.from(r));
    return {
        start: r.resolveNoCache(i.openStart + t),
        end: r.resolveNoCache(r.content.size - i.openEnd - t)
    }
}
class $e {
    constructor(e, t, n) {
        this.pos = e, this.path = t, this.parentOffset = n, this.depth = t.length / 3 - 1
    }
    resolveDepth(e) {
        return e == null ? this.depth : e < 0 ? this.depth + e : e
    }
    get parent() {
        return this.node(this.depth)
    }
    get doc() {
        return this.node(0)
    }
    node(e) {
        return this.path[this.resolveDepth(e) * 3]
    }
    index(e) {
        return this.path[this.resolveDepth(e) * 3 + 1]
    }
    indexAfter(e) {
        return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1)
    }
    start(e) {
        return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1
    }
    end(e) {
        return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size
    }
    before(e) {
        if (e = this.resolveDepth(e), !e) throw new RangeError("There is no position before the top-level node");
        return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1]
    }
    after(e) {
        if (e = this.resolveDepth(e), !e) throw new RangeError("There is no position after the top-level node");
        return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize
    }
    get textOffset() {
        return this.pos - this.path[this.path.length - 1]
    }
    get nodeAfter() {
        let e = this.parent,
            t = this.index(this.depth);
        if (t == e.childCount) return null;
        let n = this.pos - this.path[this.path.length - 1],
            r = e.child(t);
        return n ? e.child(t).cut(n) : r
    }
    get nodeBefore() {
        let e = this.index(this.depth),
            t = this.pos - this.path[this.path.length - 1];
        return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1)
    }
    posAtIndex(e, t) {
        t = this.resolveDepth(t);
        let n = this.path[t * 3],
            r = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
        for (let s = 0; s < e; s++) r += n.child(s).nodeSize;
        return r
    }
    marks() {
        let e = this.parent,
            t = this.index();
        if (e.content.size == 0) return N.none;
        if (this.textOffset) return e.child(t).marks;
        let n = e.maybeChild(t - 1),
            r = e.maybeChild(t);
        if (!n) {
            let l = n;
            n = r, r = l
        }
        let s = n.marks;
        for (var o = 0; o < s.length; o++) s[o].type.spec.inclusive === !1 && (!r || !s[o].isInSet(r.marks)) && (s = s[o--].removeFromSet(s));
        return s
    }
    marksAcross(e) {
        let t = this.parent.maybeChild(this.index());
        if (!t || !t.isInline) return null;
        let n = t.marks,
            r = e.parent.maybeChild(e.index());
        for (var s = 0; s < n.length; s++) n[s].type.spec.inclusive === !1 && (!r || !n[s].isInSet(r.marks)) && (n = n[s--].removeFromSet(n));
        return n
    }
    sharedDepth(e) {
        for (let t = this.depth; t > 0; t--)
            if (this.start(t) <= e && this.end(t) >= e) return t;
        return 0
    }
    blockRange(e = this, t) {
        if (e.pos < this.pos) return e.blockRange(this);
        for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--)
            if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new kr(this, e, n);
        return null
    }
    sameParent(e) {
        return this.pos - this.parentOffset == e.pos - e.parentOffset
    }
    max(e) {
        return e.pos > this.pos ? e : this
    }
    min(e) {
        return e.pos < this.pos ? e : this
    }
    toString() {
        let e = "";
        for (let t = 1; t <= this.depth; t++) e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
        return e + ":" + this.parentOffset
    }
    static resolve(e, t) {
        if (!(t >= 0 && t <= e.content.size)) throw new RangeError("Position " + t + " out of range");
        let n = [],
            r = 0,
            s = t;
        for (let o = e;;) {
            let {
                index: l,
                offset: a
            } = o.content.findIndex(s), h = s - a;
            if (n.push(o, l, r + a), !h || (o = o.child(l), o.isText)) break;
            s = h - 1, r += a + 1
        }
        return new $e(t, n, s)
    }
    static resolveCached(e, t) {
        let n = ln.get(e);
        if (n)
            for (let s = 0; s < n.elts.length; s++) {
                let o = n.elts[s];
                if (o.pos == t) return o
            } else ln.set(e, n = new gr);
        let r = n.elts[n.i] = $e.resolve(e, t);
        return n.i = (n.i + 1) % yr, r
    }
}
class gr {
    constructor() {
        this.elts = [], this.i = 0
    }
}
const yr = 12,
    ln = new WeakMap;
class kr {
    constructor(e, t, n) {
        this.$from = e, this.$to = t, this.depth = n
    }
    get start() {
        return this.$from.before(this.depth + 1)
    }
    get end() {
        return this.$to.after(this.depth + 1)
    }
    get parent() {
        return this.$from.node(this.depth)
    }
    get startIndex() {
        return this.$from.index(this.depth)
    }
    get endIndex() {
        return this.$to.indexAfter(this.depth)
    }
}
const xr = Object.create(null);
class j {
    constructor(e, t, n, r = N.none) {
        this.type = e, this.attrs = t, this.marks = r, this.content = n || y.empty
    }
    get nodeSize() {
        return this.isLeaf ? 1 : 2 + this.content.size
    }
    get childCount() {
        return this.content.childCount
    }
    child(e) {
        return this.content.child(e)
    }
    maybeChild(e) {
        return this.content.maybeChild(e)
    }
    forEach(e) {
        this.content.forEach(e)
    }
    nodesBetween(e, t, n, r = 0) {
        this.content.nodesBetween(e, t, n, r, this)
    }
    descendants(e) {
        this.nodesBetween(0, this.content.size, e)
    }
    get textContent() {
        return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "")
    }
    textBetween(e, t, n, r) {
        return this.content.textBetween(e, t, n, r)
    }
    get firstChild() {
        return this.content.firstChild
    }
    get lastChild() {
        return this.content.lastChild
    }
    eq(e) {
        return this == e || this.sameMarkup(e) && this.content.eq(e.content)
    }
    sameMarkup(e) {
        return this.hasMarkup(e.type, e.attrs, e.marks)
    }
    hasMarkup(e, t, n) {
        return this.type == e && lt(this.attrs, t || e.defaultAttrs || xr) && N.sameSet(this.marks, n || N.none)
    }
    copy(e = null) {
        return e == this.content ? this : new j(this.type, this.attrs, e, this.marks)
    }
    mark(e) {
        return e == this.marks ? this : new j(this.type, this.attrs, this.content, e)
    }
    cut(e, t = this.content.size) {
        return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t))
    }
    slice(e, t = this.content.size, n = !1) {
        if (e == t) return k.empty;
        let r = this.resolve(e),
            s = this.resolve(t),
            o = n ? 0 : r.sharedDepth(t),
            l = r.start(o),
            h = r.node(o).content.cut(r.pos - l, s.pos - l);
        return new k(h, r.depth - o, s.depth - o)
    }
    replace(e, t, n) {
        return pr(this.resolve(e), this.resolve(t), n)
    }
    nodeAt(e) {
        for (let t = this;;) {
            let {
                index: n,
                offset: r
            } = t.content.findIndex(e);
            if (t = t.maybeChild(n), !t) return null;
            if (r == e || t.isText) return t;
            e -= r + 1
        }
    }
    childAfter(e) {
        let {
            index: t,
            offset: n
        } = this.content.findIndex(e);
        return {
            node: this.content.maybeChild(t),
            index: t,
            offset: n
        }
    }
    childBefore(e) {
        if (e == 0) return {
            node: null,
            index: 0,
            offset: 0
        };
        let {
            index: t,
            offset: n
        } = this.content.findIndex(e);
        if (n < e) return {
            node: this.content.child(t),
            index: t,
            offset: n
        };
        let r = this.content.child(t - 1);
        return {
            node: r,
            index: t - 1,
            offset: n - r.nodeSize
        }
    }
    resolve(e) {
        return $e.resolveCached(this, e)
    }
    resolveNoCache(e) {
        return $e.resolve(this, e)
    }
    rangeHasMark(e, t, n) {
        let r = !1;
        return t > e && this.nodesBetween(e, t, s => (n.isInSet(s.marks) && (r = !0), !r)), r
    }
    get isBlock() {
        return this.type.isBlock
    }
    get isTextblock() {
        return this.type.isTextblock
    }
    get inlineContent() {
        return this.type.inlineContent
    }
    get isInline() {
        return this.type.isInline
    }
    get isText() {
        return this.type.isText
    }
    get isLeaf() {
        return this.type.isLeaf
    }
    get isAtom() {
        return this.type.isAtom
    }
    toString() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        let e = this.type.name;
        return this.content.size && (e += "(" + this.content.toStringInner() + ")"), fi(this.marks, e)
    }
    contentMatchAt(e) {
        let t = this.type.contentMatch.matchFragment(this.content, 0, e);
        if (!t) throw new Error("Called contentMatchAt on a node with invalid content");
        return t
    }
    canReplace(e, t, n = y.empty, r = 0, s = n.childCount) {
        let o = this.contentMatchAt(e).matchFragment(n, r, s),
            l = o && o.matchFragment(this.content, t);
        if (!l || !l.validEnd) return !1;
        for (let a = r; a < s; a++)
            if (!this.type.allowsMarks(n.child(a).marks)) return !1;
        return !0
    }
    canReplaceWith(e, t, n, r) {
        if (r && !this.type.allowsMarks(r)) return !1;
        let s = this.contentMatchAt(e).matchType(n),
            o = s && s.matchFragment(this.content, t);
        return o ? o.validEnd : !1
    }
    canAppend(e) {
        return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type)
    }
    check() {
        this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
        let e = N.none;
        for (let t = 0; t < this.marks.length; t++) {
            let n = this.marks[t];
            n.type.checkAttrs(n.attrs), e = n.addToSet(e)
        }
        if (!N.sameSet(e, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(t=>t.type.name)}`);
        this.content.forEach(t => t.check())
    }
    toJSON() {
        let e = {
            type: this.type.name
        };
        for (let t in this.attrs) {
            e.attrs = this.attrs;
            break
        }
        return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map(t => t.toJSON())), e
    }
    static fromJSON(e, t) {
        if (!t) throw new RangeError("Invalid input for Node.fromJSON");
        let n;
        if (t.marks) {
            if (!Array.isArray(t.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            n = t.marks.map(e.markFromJSON)
        }
        if (t.type == "text") {
            if (typeof t.text != "string") throw new RangeError("Invalid text node in JSON");
            return e.text(t.text, n)
        }
        let r = y.fromJSON(e, t.content),
            s = e.nodeType(t.type).create(t.attrs, r, n);
        return s.type.checkAttrs(s.attrs), s
    }
}
j.prototype.text = void 0;
class ct extends j {
    constructor(e, t, n, r) {
        if (super(e, t, null, r), !n) throw new RangeError("Empty text nodes are not allowed");
        this.text = n
    }
    toString() {
        return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : fi(this.marks, JSON.stringify(this.text))
    }
    get textContent() {
        return this.text
    }
    textBetween(e, t) {
        return this.text.slice(e, t)
    }
    get nodeSize() {
        return this.text.length
    }
    mark(e) {
        return e == this.marks ? this : new ct(this.type, this.attrs, this.text, e)
    }
    withText(e) {
        return e == this.text ? this : new ct(this.type, this.attrs, e, this.marks)
    }
    cut(e = 0, t = this.text.length) {
        return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t))
    }
    eq(e) {
        return this.sameMarkup(e) && this.text == e.text
    }
    toJSON() {
        let e = super.toJSON();
        return e.text = this.text, e
    }
}

function fi(i, e) {
    for (let t = i.length - 1; t >= 0; t--) e = i[t].type.name + "(" + e + ")";
    return e
}
class be {
    constructor(e) {
        this.validEnd = e, this.next = [], this.wrapCache = []
    }
    static parse(e, t) {
        let n = new Sr(e, t);
        if (n.next == null) return be.empty;
        let r = di(n);
        n.next && n.err("Unexpected trailing text");
        let s = Dr(Tr(r));
        return wr(s, n), s
    }
    matchType(e) {
        for (let t = 0; t < this.next.length; t++)
            if (this.next[t].type == e) return this.next[t].next;
        return null
    }
    matchFragment(e, t = 0, n = e.childCount) {
        let r = this;
        for (let s = t; r && s < n; s++) r = r.matchType(e.child(s).type);
        return r
    }
    get inlineContent() {
        return this.next.length != 0 && this.next[0].type.isInline
    }
    get defaultType() {
        for (let e = 0; e < this.next.length; e++) {
            let {
                type: t
            } = this.next[e];
            if (!(t.isText || t.hasRequiredAttrs())) return t
        }
        return null
    }
    compatible(e) {
        for (let t = 0; t < this.next.length; t++)
            for (let n = 0; n < e.next.length; n++)
                if (this.next[t].type == e.next[n].type) return !0;
        return !1
    }
    fillBefore(e, t = !1, n = 0) {
        let r = [this];

        function s(o, l) {
            let a = o.matchFragment(e, n);
            if (a && (!t || a.validEnd)) return y.from(l.map(h => h.createAndFill()));
            for (let h = 0; h < o.next.length; h++) {
                let {
                    type: c,
                    next: f
                } = o.next[h];
                if (!(c.isText || c.hasRequiredAttrs()) && r.indexOf(f) == -1) {
                    r.push(f);
                    let d = s(f, l.concat(c));
                    if (d) return d
                }
            }
            return null
        }
        return s(this, [])
    }
    findWrapping(e) {
        for (let n = 0; n < this.wrapCache.length; n += 2)
            if (this.wrapCache[n] == e) return this.wrapCache[n + 1];
        let t = this.computeWrapping(e);
        return this.wrapCache.push(e, t), t
    }
    computeWrapping(e) {
        let t = Object.create(null),
            n = [{
                match: this,
                type: null,
                via: null
            }];
        for (; n.length;) {
            let r = n.shift(),
                s = r.match;
            if (s.matchType(e)) {
                let o = [];
                for (let l = r; l.type; l = l.via) o.push(l.type);
                return o.reverse()
            }
            for (let o = 0; o < s.next.length; o++) {
                let {
                    type: l,
                    next: a
                } = s.next[o];
                !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!r.type || a.validEnd) && (n.push({
                    match: l.contentMatch,
                    type: l,
                    via: r
                }), t[l.name] = !0)
            }
        }
        return null
    }
    get edgeCount() {
        return this.next.length
    }
    edge(e) {
        if (e >= this.next.length) throw new RangeError(`There's no ${e}th edge in this content match`);
        return this.next[e]
    }
    toString() {
        let e = [];

        function t(n) {
            e.push(n);
            for (let r = 0; r < n.next.length; r++) e.indexOf(n.next[r].next) == -1 && t(n.next[r].next)
        }
        return t(this), e.map((n, r) => {
            let s = r + (n.validEnd ? "*" : " ") + " ";
            for (let o = 0; o < n.next.length; o++) s += (o ? ", " : "") + n.next[o].type.name + "->" + e.indexOf(n.next[o].next);
            return s
        }).join(`
`)
    }
}
be.empty = new be(!0);
class Sr {
    constructor(e, t) {
        this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift()
    }
    get next() {
        return this.tokens[this.pos]
    }
    eat(e) {
        return this.next == e && (this.pos++ || !0)
    }
    err(e) {
        throw new SyntaxError(e + " (in content expression '" + this.string + "')")
    }
}

function di(i) {
    let e = [];
    do e.push(br(i)); while (i.eat("|"));
    return e.length == 1 ? e[0] : {
        type: "choice",
        exprs: e
    }
}

function br(i) {
    let e = [];
    do e.push(Nr(i)); while (i.next && i.next != ")" && i.next != "|");
    return e.length == 1 ? e[0] : {
        type: "seq",
        exprs: e
    }
}

function Nr(i) {
    let e = Mr(i);
    for (;;)
        if (i.eat("+")) e = {
            type: "plus",
            expr: e
        };
        else if (i.eat("*")) e = {
        type: "star",
        expr: e
    };
    else if (i.eat("?")) e = {
        type: "opt",
        expr: e
    };
    else if (i.eat("{")) e = Cr(i, e);
    else break;
    return e
}

function an(i) {
    /\D/.test(i.next) && i.err("Expected number, got '" + i.next + "'");
    let e = Number(i.next);
    return i.pos++, e
}

function Cr(i, e) {
    let t = an(i),
        n = t;
    return i.eat(",") && (i.next != "}" ? n = an(i) : n = -1), i.eat("}") || i.err("Unclosed braced range"), {
        type: "range",
        min: t,
        max: n,
        expr: e
    }
}

function Or(i, e) {
    let t = i.nodeTypes,
        n = t[e];
    if (n) return [n];
    let r = [];
    for (let s in t) {
        let o = t[s];
        o.groups.indexOf(e) > -1 && r.push(o)
    }
    return r.length == 0 && i.err("No node type or group '" + e + "' found"), r
}

function Mr(i) {
    if (i.eat("(")) {
        let e = di(i);
        return i.eat(")") || i.err("Missing closing paren"), e
    } else if (/\W/.test(i.next)) i.err("Unexpected token '" + i.next + "'");
    else {
        let e = Or(i, i.next).map(t => (i.inline == null ? i.inline = t.isInline : i.inline != t.isInline && i.err("Mixing inline and block content"), {
            type: "name",
            value: t
        }));
        return i.pos++, e.length == 1 ? e[0] : {
            type: "choice",
            exprs: e
        }
    }
}

function Tr(i) {
    let e = [
        []
    ];
    return r(s(i, 0), t()), e;

    function t() {
        return e.push([]) - 1
    }

    function n(o, l, a) {
        let h = {
            term: a,
            to: l
        };
        return e[o].push(h), h
    }

    function r(o, l) {
        o.forEach(a => a.to = l)
    }

    function s(o, l) {
        if (o.type == "choice") return o.exprs.reduce((a, h) => a.concat(s(h, l)), []);
        if (o.type == "seq")
            for (let a = 0;; a++) {
                let h = s(o.exprs[a], l);
                if (a == o.exprs.length - 1) return h;
                r(h, l = t())
            } else if (o.type == "star") {
                let a = t();
                return n(l, a), r(s(o.expr, a), a), [n(a)]
            } else if (o.type == "plus") {
            let a = t();
            return r(s(o.expr, l), a), r(s(o.expr, a), a), [n(a)]
        } else {
            if (o.type == "opt") return [n(l)].concat(s(o.expr, l));
            if (o.type == "range") {
                let a = l;
                for (let h = 0; h < o.min; h++) {
                    let c = t();
                    r(s(o.expr, a), c), a = c
                }
                if (o.max == -1) r(s(o.expr, a), a);
                else
                    for (let h = o.min; h < o.max; h++) {
                        let c = t();
                        n(a, c), r(s(o.expr, a), c), a = c
                    }
                return [n(a)]
            } else {
                if (o.type == "name") return [n(l, void 0, o.value)];
                throw new Error("Unknown expr type")
            }
        }
    }
}

function ui(i, e) {
    return e - i
}

function hn(i, e) {
    let t = [];
    return n(e), t.sort(ui);

    function n(r) {
        let s = i[r];
        if (s.length == 1 && !s[0].term) return n(s[0].to);
        t.push(r);
        for (let o = 0; o < s.length; o++) {
            let {
                term: l,
                to: a
            } = s[o];
            !l && t.indexOf(a) == -1 && n(a)
        }
    }
}

function Dr(i) {
    let e = Object.create(null);
    return t(hn(i, 0));

    function t(n) {
        let r = [];
        n.forEach(o => {
            i[o].forEach(({
                term: l,
                to: a
            }) => {
                if (!l) return;
                let h;
                for (let c = 0; c < r.length; c++) r[c][0] == l && (h = r[c][1]);
                hn(i, a).forEach(c => {
                    h || r.push([l, h = []]), h.indexOf(c) == -1 && h.push(c)
                })
            })
        });
        let s = e[n.join(",")] = new be(n.indexOf(i.length - 1) > -1);
        for (let o = 0; o < r.length; o++) {
            let l = r[o][1].sort(ui);
            s.next.push({
                type: r[o][0],
                next: e[l.join(",")] || t(l)
            })
        }
        return s
    }
}

function wr(i, e) {
    for (let t = 0, n = [i]; t < n.length; t++) {
        let r = n[t],
            s = !r.validEnd,
            o = [];
        for (let l = 0; l < r.next.length; l++) {
            let {
                type: a,
                next: h
            } = r.next[l];
            o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), n.indexOf(h) == -1 && n.push(h)
        }
        s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)")
    }
}

function pi(i) {
    let e = Object.create(null);
    for (let t in i) {
        let n = i[t];
        if (!n.hasDefault) return null;
        e[t] = n.default
    }
    return e
}

function mi(i, e) {
    let t = Object.create(null);
    for (let n in i) {
        let r = e && e[n];
        if (r === void 0) {
            let s = i[n];
            if (s.hasDefault) r = s.default;
            else throw new RangeError("No value supplied for attribute " + n)
        }
        t[n] = r
    }
    return t
}

function gi(i, e, t, n) {
    for (let r in e)
        if (!(r in i)) throw new RangeError(`Unsupported attribute ${r} for ${t} of type ${r}`);
    for (let r in i) {
        let s = i[r];
        s.validate && s.validate(e[r])
    }
}

function yi(i, e) {
    let t = Object.create(null);
    if (e)
        for (let n in e) t[n] = new Ar(i, n, e[n]);
    return t
}
let cn = class ki {
    constructor(e, t, n) {
        this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = yi(e, n.attrs), this.defaultAttrs = pi(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text"
    }
    get isInline() {
        return !this.isBlock
    }
    get isTextblock() {
        return this.isBlock && this.inlineContent
    }
    get isLeaf() {
        return this.contentMatch == be.empty
    }
    get isAtom() {
        return this.isLeaf || !!this.spec.atom
    }
    get whitespace() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal")
    }
    hasRequiredAttrs() {
        for (let e in this.attrs)
            if (this.attrs[e].isRequired) return !0;
        return !1
    }
    compatibleContent(e) {
        return this == e || this.contentMatch.compatible(e.contentMatch)
    }
    computeAttrs(e) {
        return !e && this.defaultAttrs ? this.defaultAttrs : mi(this.attrs, e)
    }
    create(e = null, t, n) {
        if (this.isText) throw new Error("NodeType.create can't construct text nodes");
        return new j(this, this.computeAttrs(e), y.from(t), N.setFrom(n))
    }
    createChecked(e = null, t, n) {
        return t = y.from(t), this.checkContent(t), new j(this, this.computeAttrs(e), t, N.setFrom(n))
    }
    createAndFill(e = null, t, n) {
        if (e = this.computeAttrs(e), t = y.from(t), t.size) {
            let o = this.contentMatch.fillBefore(t);
            if (!o) return null;
            t = o.append(t)
        }
        let r = this.contentMatch.matchFragment(t),
            s = r && r.fillBefore(y.empty, !0);
        return s ? new j(this, e, t.append(s), N.setFrom(n)) : null
    }
    validContent(e) {
        let t = this.contentMatch.matchFragment(e);
        if (!t || !t.validEnd) return !1;
        for (let n = 0; n < e.childCount; n++)
            if (!this.allowsMarks(e.child(n).marks)) return !1;
        return !0
    }
    checkContent(e) {
        if (!this.validContent(e)) throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0,50)}`)
    }
    checkAttrs(e) {
        gi(this.attrs, e, "node", this.name)
    }
    allowsMarkType(e) {
        return this.markSet == null || this.markSet.indexOf(e) > -1
    }
    allowsMarks(e) {
        if (this.markSet == null) return !0;
        for (let t = 0; t < e.length; t++)
            if (!this.allowsMarkType(e[t].type)) return !1;
        return !0
    }
    allowedMarks(e) {
        if (this.markSet == null) return e;
        let t;
        for (let n = 0; n < e.length; n++) this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t || (t = e.slice(0, n));
        return t ? t.length ? t : N.none : e
    }
    static compile(e, t) {
        let n = Object.create(null);
        e.forEach((s, o) => n[s] = new ki(s, t, o));
        let r = t.spec.topNode || "doc";
        if (!n[r]) throw new RangeError("Schema is missing its top node type ('" + r + "')");
        if (!n.text) throw new RangeError("Every schema needs a 'text' type");
        for (let s in n.text.attrs) throw new RangeError("The text node type should not have attributes");
        return n
    }
};

function Er(i, e, t) {
    let n = t.split("|");
    return r => {
        let s = r === null ? "null" : typeof r;
        if (n.indexOf(s) < 0) throw new RangeError(`Expected value of type ${n} for attribute ${e} on type ${i}, got ${s}`)
    }
}
class Ar {
    constructor(e, t, n) {
        this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? Er(e, t, n.validate) : n.validate
    }
    get isRequired() {
        return !this.hasDefault
    }
}
class yt {
    constructor(e, t, n, r) {
        this.name = e, this.rank = t, this.schema = n, this.spec = r, this.attrs = yi(e, r.attrs), this.excluded = null;
        let s = pi(this.attrs);
        this.instance = s ? new N(this, s) : null
    }
    create(e = null) {
        return !e && this.instance ? this.instance : new N(this, mi(this.attrs, e))
    }
    static compile(e, t) {
        let n = Object.create(null),
            r = 0;
        return e.forEach((s, o) => n[s] = new yt(s, r++, t, o)), n
    }
    removeFromSet(e) {
        for (var t = 0; t < e.length; t++) e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
        return e
    }
    isInSet(e) {
        for (let t = 0; t < e.length; t++)
            if (e[t].type == this) return e[t]
    }
    checkAttrs(e) {
        gi(this.attrs, e, "mark", this.name)
    }
    excludes(e) {
        return this.excluded.indexOf(e) > -1
    }
}
class Zo {
    constructor(e) {
        this.linebreakReplacement = null, this.cached = Object.create(null);
        let t = this.spec = {};
        for (let r in e) t[r] = e[r];
        t.nodes = on.from(e.nodes), t.marks = on.from(e.marks || {}), this.nodes = cn.compile(this.spec.nodes, this), this.marks = yt.compile(this.spec.marks, this);
        let n = Object.create(null);
        for (let r in this.nodes) {
            if (r in this.marks) throw new RangeError(r + " can not be both a node and a mark");
            let s = this.nodes[r],
                o = s.spec.content || "",
                l = s.spec.marks;
            if (s.contentMatch = n[o] || (n[o] = be.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
                if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
                if (!s.isInline || !s.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
                this.linebreakReplacement = s
            }
            s.markSet = l == "_" ? null : l ? fn(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null
        }
        for (let r in this.marks) {
            let s = this.marks[r],
                o = s.spec.excludes;
            s.excluded = o == null ? [s] : o == "" ? [] : fn(this, o.split(" "))
        }
        this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null)
    }
    node(e, t = null, n, r) {
        if (typeof e == "string") e = this.nodeType(e);
        else if (e instanceof cn) {
            if (e.schema != this) throw new RangeError("Node type from different schema used (" + e.name + ")")
        } else throw new RangeError("Invalid node type: " + e);
        return e.createChecked(t, n, r)
    }
    text(e, t) {
        let n = this.nodes.text;
        return new ct(n, n.defaultAttrs, e, N.setFrom(t))
    }
    mark(e, t) {
        return typeof e == "string" && (e = this.marks[e]), e.create(t)
    }
    nodeFromJSON(e) {
        return j.fromJSON(this, e)
    }
    markFromJSON(e) {
        return N.fromJSON(this, e)
    }
    nodeType(e) {
        let t = this.nodes[e];
        if (!t) throw new RangeError("Unknown node type: " + e);
        return t
    }
}

function fn(i, e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            s = i.marks[r],
            o = s;
        if (s) t.push(s);
        else
            for (let l in i.marks) {
                let a = i.marks[l];
                (r == "_" || a.spec.group && a.spec.group.split(" ").indexOf(r) > -1) && t.push(o = a)
            }
        if (!o) throw new SyntaxError("Unknown mark type: '" + e[n] + "'")
    }
    return t
}

function Rr(i) {
    return i.tag != null
}

function Ir(i) {
    return i.style != null
}
class He {
    constructor(e, t) {
        this.schema = e, this.rules = t, this.tags = [], this.styles = [];
        let n = this.matchedStyles = [];
        t.forEach(r => {
            if (Rr(r)) this.tags.push(r);
            else if (Ir(r)) {
                let s = /[^=]*/.exec(r.style)[0];
                n.indexOf(s) < 0 && n.push(s), this.styles.push(r)
            }
        }), this.normalizeLists = !this.tags.some(r => {
            if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return !1;
            let s = e.nodes[r.node];
            return s.contentMatch.matchType(s)
        })
    }
    parse(e, t = {}) {
        let n = new un(this, t, !1);
        return n.addAll(e, t.from, t.to), n.finish()
    }
    parseSlice(e, t = {}) {
        let n = new un(this, t, !0);
        return n.addAll(e, t.from, t.to), k.maxOpen(n.finish())
    }
    matchTag(e, t, n) {
        for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
            let s = this.tags[r];
            if (Br(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
                if (s.getAttrs) {
                    let o = s.getAttrs(e);
                    if (o === !1) continue;
                    s.attrs = o || void 0
                }
                return s
            }
        }
    }
    matchStyle(e, t, n, r) {
        for (let s = r ? this.styles.indexOf(r) + 1 : 0; s < this.styles.length; s++) {
            let o = this.styles[s],
                l = o.style;
            if (!(l.indexOf(e) != 0 || o.context && !n.matchesContext(o.context) || l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
                if (o.getAttrs) {
                    let a = o.getAttrs(t);
                    if (a === !1) continue;
                    o.attrs = a || void 0
                }
                return o
            }
        }
    }
    static schemaRules(e) {
        let t = [];

        function n(r) {
            let s = r.priority == null ? 50 : r.priority,
                o = 0;
            for (; o < t.length; o++) {
                let l = t[o];
                if ((l.priority == null ? 50 : l.priority) < s) break
            }
            t.splice(o, 0, r)
        }
        for (let r in e.marks) {
            let s = e.marks[r].spec.parseDOM;
            s && s.forEach(o => {
                n(o = pn(o)), o.mark || o.ignore || o.clearMark || (o.mark = r)
            })
        }
        for (let r in e.nodes) {
            let s = e.nodes[r].spec.parseDOM;
            s && s.forEach(o => {
                n(o = pn(o)), o.node || o.ignore || o.mark || (o.node = r)
            })
        }
        return t
    }
    static fromSchema(e) {
        return e.cached.domParser || (e.cached.domParser = new He(e, He.schemaRules(e)))
    }
}
const xi = {
        address: !0,
        article: !0,
        aside: !0,
        blockquote: !0,
        canvas: !0,
        dd: !0,
        div: !0,
        dl: !0,
        fieldset: !0,
        figcaption: !0,
        figure: !0,
        footer: !0,
        form: !0,
        h1: !0,
        h2: !0,
        h3: !0,
        h4: !0,
        h5: !0,
        h6: !0,
        header: !0,
        hgroup: !0,
        hr: !0,
        li: !0,
        noscript: !0,
        ol: !0,
        output: !0,
        p: !0,
        pre: !0,
        section: !0,
        table: !0,
        tfoot: !0,
        ul: !0
    },
    Pr = {
        head: !0,
        noscript: !0,
        object: !0,
        script: !0,
        style: !0,
        title: !0
    },
    Si = {
        ol: !0,
        ul: !0
    },
    ft = 1,
    dt = 2,
    ve = 4;

function dn(i, e, t) {
    return e != null ? (e ? ft : 0) | (e === "full" ? dt : 0) : i && i.whitespace == "pre" ? ft | dt : t & ~ve
}
class it {
    constructor(e, t, n, r, s, o, l) {
        this.type = e, this.attrs = t, this.marks = n, this.pendingMarks = r, this.solid = s, this.options = l, this.content = [], this.activeMarks = N.none, this.stashMarks = [], this.match = o || (l & ve ? null : e.contentMatch)
    }
    findWrapping(e) {
        if (!this.match) {
            if (!this.type) return [];
            let t = this.type.contentMatch.fillBefore(y.from(e));
            if (t) this.match = this.type.contentMatch.matchFragment(t);
            else {
                let n = this.type.contentMatch,
                    r;
                return (r = n.findWrapping(e.type)) ? (this.match = n, r) : null
            }
        }
        return this.match.findWrapping(e.type)
    }
    finish(e) {
        if (!(this.options & ft)) {
            let n = this.content[this.content.length - 1],
                r;
            if (n && n.isText && (r = /[ \t\r\n\u000c]+$/.exec(n.text))) {
                let s = n;
                n.text.length == r[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - r[0].length))
            }
        }
        let t = y.from(this.content);
        return !e && this.match && (t = t.append(this.match.fillBefore(y.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t
    }
    popFromStashMark(e) {
        for (let t = this.stashMarks.length - 1; t >= 0; t--)
            if (e.eq(this.stashMarks[t])) return this.stashMarks.splice(t, 1)[0]
    }
    applyPending(e) {
        for (let t = 0, n = this.pendingMarks; t < n.length; t++) {
            let r = n[t];
            (this.type ? this.type.allowsMarkType(r.type) : Fr(r.type, e)) && !r.isInSet(this.activeMarks) && (this.activeMarks = r.addToSet(this.activeMarks), this.pendingMarks = r.removeFromSet(this.pendingMarks))
        }
    }
    inlineContext(e) {
        return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !xi.hasOwnProperty(e.parentNode.nodeName.toLowerCase())
    }
}
class un {
    constructor(e, t, n) {
        this.parser = e, this.options = t, this.isOpen = n, this.open = 0;
        let r = t.topNode,
            s, o = dn(null, t.preserveWhitespace, 0) | (n ? ve : 0);
        r ? s = new it(r.type, r.attrs, N.none, N.none, !0, t.topMatch || r.type.contentMatch, o) : n ? s = new it(null, null, N.none, N.none, !0, null, o) : s = new it(e.schema.topNodeType, null, N.none, N.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1
    }
    get top() {
        return this.nodes[this.open]
    }
    addDOM(e) {
        e.nodeType == 3 ? this.addTextNode(e) : e.nodeType == 1 && this.addElement(e)
    }
    withStyleRules(e, t) {
        let n = e.style;
        if (!n || !n.length) return t();
        let r = this.readStyles(e.style);
        if (!r) return;
        let [s, o] = r, l = this.top;
        for (let a = 0; a < o.length; a++) this.removePendingMark(o[a], l);
        for (let a = 0; a < s.length; a++) this.addPendingMark(s[a]);
        t();
        for (let a = 0; a < s.length; a++) this.removePendingMark(s[a], l);
        for (let a = 0; a < o.length; a++) this.addPendingMark(o[a])
    }
    addTextNode(e) {
        let t = e.nodeValue,
            n = this.top;
        if (n.options & dt || n.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
            if (n.options & ft) n.options & dt ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
            else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
                let r = n.content[n.content.length - 1],
                    s = e.previousSibling;
                (!r || s && s.nodeName == "BR" || r.isText && /[ \t\r\n\u000c]$/.test(r.text)) && (t = t.slice(1))
            }
            t && this.insertNode(this.parser.schema.text(t)), this.findInText(e)
        } else this.findInside(e)
    }
    addElement(e, t) {
        let n = e.nodeName.toLowerCase(),
            r;
        Si.hasOwnProperty(n) && this.parser.normalizeLists && zr(e);
        let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (r = this.parser.matchTag(e, this, t));
        if (s ? s.ignore : Pr.hasOwnProperty(n)) this.findInside(e), this.ignoreFallback(e);
        else if (!s || s.skip || s.closeParent) {
            s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
            let o, l = this.top,
                a = this.needsBlock;
            if (xi.hasOwnProperty(n)) l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), o = !0, l.type || (this.needsBlock = !0);
            else if (!e.firstChild) {
                this.leafFallback(e);
                return
            }
            s && s.skip ? this.addAll(e) : this.withStyleRules(e, () => this.addAll(e)), o && this.sync(l), this.needsBlock = a
        } else this.withStyleRules(e, () => {
            this.addElementByRule(e, s, s.consuming === !1 ? r : void 0)
        })
    }
    leafFallback(e) {
        e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`))
    }
    ignoreFallback(e) {
        e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"))
    }
    readStyles(e) {
        let t = N.none,
            n = N.none;
        if (e.length)
            for (let r = 0; r < this.parser.matchedStyles.length; r++) {
                let s = this.parser.matchedStyles[r],
                    o = e.getPropertyValue(s);
                if (o)
                    for (let l = void 0;;) {
                        let a = this.parser.matchStyle(s, o, this, l);
                        if (!a) break;
                        if (a.ignore) return null;
                        if (a.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach(h => {
                                a.clearMark(h) && (n = h.addToSet(n))
                            }) : t = this.parser.schema.marks[a.mark].create(a.attrs).addToSet(t), a.consuming === !1) l = a;
                        else break
                    }
            }
        return [t, n]
    }
    addElementByRule(e, t, n) {
        let r, s, o;
        t.node ? (s = this.parser.schema.nodes[t.node], s.isLeaf ? this.insertNode(s.create(t.attrs)) || this.leafFallback(e) : r = this.enter(s, t.attrs || null, t.preserveWhitespace)) : (o = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(o));
        let l = this.top;
        if (s && s.isLeaf) this.findInside(e);
        else if (n) this.addElement(e, n);
        else if (t.getContent) this.findInside(e), t.getContent(e, this.parser.schema).forEach(a => this.insertNode(a));
        else {
            let a = e;
            typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a)
        }
        r && this.sync(l) && this.open--, o && this.removePendingMark(o, l)
    }
    addAll(e, t, n) {
        let r = t || 0;
        for (let s = t ? e.childNodes[t] : e.firstChild, o = n == null ? null : e.childNodes[n]; s != o; s = s.nextSibling, ++r) this.findAtPoint(e, r), this.addDOM(s);
        this.findAtPoint(e, r)
    }
    findPlace(e) {
        let t, n;
        for (let r = this.open; r >= 0; r--) {
            let s = this.nodes[r],
                o = s.findWrapping(e);
            if (o && (!t || t.length > o.length) && (t = o, n = s, !o.length) || s.solid) break
        }
        if (!t) return !1;
        this.sync(n);
        for (let r = 0; r < t.length; r++) this.enterInner(t[r], null, !1);
        return !0
    }
    insertNode(e) {
        if (e.isInline && this.needsBlock && !this.top.type) {
            let t = this.textblockFromContext();
            t && this.enterInner(t)
        }
        if (this.findPlace(e)) {
            this.closeExtra();
            let t = this.top;
            t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
            let n = t.activeMarks;
            for (let r = 0; r < e.marks.length; r++)(!t.type || t.type.allowsMarkType(e.marks[r].type)) && (n = e.marks[r].addToSet(n));
            return t.content.push(e.mark(n)), !0
        }
        return !1
    }
    enter(e, t, n) {
        let r = this.findPlace(e.create(t));
        return r && this.enterInner(e, t, !0, n), r
    }
    enterInner(e, t = null, n = !1, r) {
        this.closeExtra();
        let s = this.top;
        s.applyPending(e), s.match = s.match && s.match.matchType(e);
        let o = dn(e, r, s.options);
        s.options & ve && s.content.length == 0 && (o |= ve), this.nodes.push(new it(e, t, s.activeMarks, s.pendingMarks, n, null, o)), this.open++
    }
    closeExtra(e = !1) {
        let t = this.nodes.length - 1;
        if (t > this.open) {
            for (; t > this.open; t--) this.nodes[t - 1].content.push(this.nodes[t].finish(e));
            this.nodes.length = this.open + 1
        }
    }
    finish() {
        return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen)
    }
    sync(e) {
        for (let t = this.open; t >= 0; t--)
            if (this.nodes[t] == e) return this.open = t, !0;
        return !1
    }
    get currentPos() {
        this.closeExtra();
        let e = 0;
        for (let t = this.open; t >= 0; t--) {
            let n = this.nodes[t].content;
            for (let r = n.length - 1; r >= 0; r--) e += n[r].nodeSize;
            t && e++
        }
        return e
    }
    findAtPoint(e, t) {
        if (this.find)
            for (let n = 0; n < this.find.length; n++) this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos)
    }
    findInside(e) {
        if (this.find)
            for (let t = 0; t < this.find.length; t++) this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos)
    }
    findAround(e, t, n) {
        if (e != t && this.find)
            for (let r = 0; r < this.find.length; r++) this.find[r].pos == null && e.nodeType == 1 && e.contains(this.find[r].node) && t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) && (this.find[r].pos = this.currentPos)
    }
    findInText(e) {
        if (this.find)
            for (let t = 0; t < this.find.length; t++) this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset))
    }
    matchesContext(e) {
        if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
        let t = e.split("/"),
            n = this.options.context,
            r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type),
            s = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
            o = (l, a) => {
                for (; l >= 0; l--) {
                    let h = t[l];
                    if (h == "") {
                        if (l == t.length - 1 || l == 0) continue;
                        for (; a >= s; a--)
                            if (o(l - 1, a)) return !0;
                        return !1
                    } else {
                        let c = a > 0 || a == 0 && r ? this.nodes[a].type : n && a >= s ? n.node(a - s).type : null;
                        if (!c || c.name != h && c.groups.indexOf(h) == -1) return !1;
                        a--
                    }
                }
                return !0
            };
        return o(t.length - 1, this.open)
    }
    textblockFromContext() {
        let e = this.options.context;
        if (e)
            for (let t = e.depth; t >= 0; t--) {
                let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
                if (n && n.isTextblock && n.defaultAttrs) return n
            }
        for (let t in this.parser.schema.nodes) {
            let n = this.parser.schema.nodes[t];
            if (n.isTextblock && n.defaultAttrs) return n
        }
    }
    addPendingMark(e) {
        let t = Vr(e, this.top.pendingMarks);
        t && this.top.stashMarks.push(t), this.top.pendingMarks = e.addToSet(this.top.pendingMarks)
    }
    removePendingMark(e, t) {
        for (let n = this.open; n >= 0; n--) {
            let r = this.nodes[n];
            if (r.pendingMarks.lastIndexOf(e) > -1) r.pendingMarks = e.removeFromSet(r.pendingMarks);
            else {
                r.activeMarks = e.removeFromSet(r.activeMarks);
                let o = r.popFromStashMark(e);
                o && r.type && r.type.allowsMarkType(o.type) && (r.activeMarks = o.addToSet(r.activeMarks))
            }
            if (r == t) break
        }
    }
}

function zr(i) {
    for (let e = i.firstChild, t = null; e; e = e.nextSibling) {
        let n = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
        n && Si.hasOwnProperty(n) && t ? (t.appendChild(e), e = t) : n == "li" ? t = e : n && (t = null)
    }
}

function Br(i, e) {
    return (i.matches || i.msMatchesSelector || i.webkitMatchesSelector || i.mozMatchesSelector).call(i, e)
}

function pn(i) {
    let e = {};
    for (let t in i) e[t] = i[t];
    return e
}

function Fr(i, e) {
    let t = e.schema.nodes;
    for (let n in t) {
        let r = t[n];
        if (!r.allowsMarkType(i)) continue;
        let s = [],
            o = l => {
                s.push(l);
                for (let a = 0; a < l.edgeCount; a++) {
                    let {
                        type: h,
                        next: c
                    } = l.edge(a);
                    if (h == e || s.indexOf(c) < 0 && o(c)) return !0
                }
            };
        if (o(r.contentMatch)) return !0
    }
}

function Vr(i, e) {
    for (let t = 0; t < e.length; t++)
        if (i.eq(e[t])) return e[t]
}
class Pe {
    constructor(e, t) {
        this.nodes = e, this.marks = t
    }
    serializeFragment(e, t = {}, n) {
        n || (n = Ot(t).createDocumentFragment());
        let r = n,
            s = [];
        return e.forEach(o => {
            if (s.length || o.marks.length) {
                let l = 0,
                    a = 0;
                for (; l < s.length && a < o.marks.length;) {
                    let h = o.marks[a];
                    if (!this.marks[h.type.name]) {
                        a++;
                        continue
                    }
                    if (!h.eq(s[l][0]) || h.type.spec.spanning === !1) break;
                    l++, a++
                }
                for (; l < s.length;) r = s.pop()[1];
                for (; a < o.marks.length;) {
                    let h = o.marks[a++],
                        c = this.serializeMark(h, o.isInline, t);
                    c && (s.push([h, r]), r.appendChild(c.dom), r = c.contentDOM || c.dom)
                }
            }
            r.appendChild(this.serializeNodeInner(o, t))
        }), n
    }
    serializeNodeInner(e, t) {
        let {
            dom: n,
            contentDOM: r
        } = st(Ot(t), this.nodes[e.type.name](e), null, e.attrs);
        if (r) {
            if (e.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(e.content, t, r)
        }
        return n
    }
    serializeNode(e, t = {}) {
        let n = this.serializeNodeInner(e, t);
        for (let r = e.marks.length - 1; r >= 0; r--) {
            let s = this.serializeMark(e.marks[r], e.isInline, t);
            s && ((s.contentDOM || s.dom).appendChild(n), n = s.dom)
        }
        return n
    }
    serializeMark(e, t, n = {}) {
        let r = this.marks[e.type.name];
        return r && st(Ot(n), r(e, t), null, e.attrs)
    }
    static renderSpec(e, t, n = null, r) {
        return st(e, t, n, r)
    }
    static fromSchema(e) {
        return e.cached.domSerializer || (e.cached.domSerializer = new Pe(this.nodesFromSchema(e), this.marksFromSchema(e)))
    }
    static nodesFromSchema(e) {
        let t = mn(e.nodes);
        return t.text || (t.text = n => n.text), t
    }
    static marksFromSchema(e) {
        return mn(e.marks)
    }
}

function mn(i) {
    let e = {};
    for (let t in i) {
        let n = i[t].spec.toDOM;
        n && (e[t] = n)
    }
    return e
}

function Ot(i) {
    return i.document || window.document
}
const gn = new WeakMap;

function Lr(i) {
    let e = gn.get(i);
    return e === void 0 && gn.set(i, e = Jr(i)), e
}

function Jr(i) {
    let e = null;

    function t(n) {
        if (n && typeof n == "object")
            if (Array.isArray(n))
                if (typeof n[0] == "string") e || (e = []), e.push(n);
                else
                    for (let r = 0; r < n.length; r++) t(n[r]);
        else
            for (let r in n) t(n[r])
    }
    return t(i), e
}

function st(i, e, t, n) {
    if (typeof e == "string") return {
        dom: i.createTextNode(e)
    };
    if (e.nodeType != null) return {
        dom: e
    };
    if (e.dom && e.dom.nodeType != null) return e;
    let r = e[0],
        s;
    if (typeof r != "string") throw new RangeError("Invalid array passed to renderSpec");
    if (n && (s = Lr(n)) && s.indexOf(e) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    let o = r.indexOf(" ");
    o > 0 && (t = r.slice(0, o), r = r.slice(o + 1));
    let l, a = t ? i.createElementNS(t, r) : i.createElement(r),
        h = e[1],
        c = 1;
    if (h && typeof h == "object" && h.nodeType == null && !Array.isArray(h)) {
        c = 2;
        for (let f in h)
            if (h[f] != null) {
                let d = f.indexOf(" ");
                d > 0 ? a.setAttributeNS(f.slice(0, d), f.slice(d + 1), h[f]) : a.setAttribute(f, h[f])
            }
    }
    for (let f = c; f < e.length; f++) {
        let d = e[f];
        if (d === 0) {
            if (f < e.length - 1 || f > c) throw new RangeError("Content hole must be the only child of its parent node");
            return {
                dom: a,
                contentDOM: a
            }
        } else {
            let {
                dom: p,
                contentDOM: u
            } = st(i, d, t, n);
            if (a.appendChild(p), u) {
                if (l) throw new RangeError("Multiple content holes");
                l = u
            }
        }
    }
    return {
        dom: a,
        contentDOM: l
    }
}
const bi = 65535,
    Ni = Math.pow(2, 16);

function vr(i, e) {
    return i + e * Ni
}

function yn(i) {
    return i & bi
}

function qr(i) {
    return (i - (i & bi)) / Ni
}
const Ci = 1,
    Oi = 2,
    ot = 4,
    Mi = 8;
class Ft {
    constructor(e, t, n) {
        this.pos = e, this.delInfo = t, this.recover = n
    }
    get deleted() {
        return (this.delInfo & Mi) > 0
    }
    get deletedBefore() {
        return (this.delInfo & (Ci | ot)) > 0
    }
    get deletedAfter() {
        return (this.delInfo & (Oi | ot)) > 0
    }
    get deletedAcross() {
        return (this.delInfo & ot) > 0
    }
}
class L {
    constructor(e, t = !1) {
        if (this.ranges = e, this.inverted = t, !e.length && L.empty) return L.empty
    }
    recover(e) {
        let t = 0,
            n = yn(e);
        if (!this.inverted)
            for (let r = 0; r < n; r++) t += this.ranges[r * 3 + 2] - this.ranges[r * 3 + 1];
        return this.ranges[n * 3] + t + qr(e)
    }
    mapResult(e, t = 1) {
        return this._map(e, t, !1)
    }
    map(e, t = 1) {
        return this._map(e, t, !0)
    }
    _map(e, t, n) {
        let r = 0,
            s = this.inverted ? 2 : 1,
            o = this.inverted ? 1 : 2;
        for (let l = 0; l < this.ranges.length; l += 3) {
            let a = this.ranges[l] - (this.inverted ? r : 0);
            if (a > e) break;
            let h = this.ranges[l + s],
                c = this.ranges[l + o],
                f = a + h;
            if (e <= f) {
                let d = h ? e == a ? -1 : e == f ? 1 : t : t,
                    p = a + r + (d < 0 ? 0 : c);
                if (n) return p;
                let u = e == (t < 0 ? a : f) ? null : vr(l / 3, e - a),
                    m = e == a ? Oi : e == f ? Ci : ot;
                return (t < 0 ? e != a : e != f) && (m |= Mi), new Ft(p, m, u)
            }
            r += c - h
        }
        return n ? e + r : new Ft(e + r, 0, null)
    }
    touches(e, t) {
        let n = 0,
            r = yn(t),
            s = this.inverted ? 2 : 1,
            o = this.inverted ? 1 : 2;
        for (let l = 0; l < this.ranges.length; l += 3) {
            let a = this.ranges[l] - (this.inverted ? n : 0);
            if (a > e) break;
            let h = this.ranges[l + s],
                c = a + h;
            if (e <= c && l == r * 3) return !0;
            n += this.ranges[l + o] - h
        }
        return !1
    }
    forEach(e) {
        let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
        for (let r = 0, s = 0; r < this.ranges.length; r += 3) {
            let o = this.ranges[r],
                l = o - (this.inverted ? s : 0),
                a = o + (this.inverted ? 0 : s),
                h = this.ranges[r + t],
                c = this.ranges[r + n];
            e(l, l + h, a, a + c), s += c - h
        }
    }
    invert() {
        return new L(this.ranges, !this.inverted)
    }
    toString() {
        return (this.inverted ? "-" : "") + JSON.stringify(this.ranges)
    }
    static offset(e) {
        return e == 0 ? L.empty : new L(e < 0 ? [0, -e, 0] : [0, 0, e])
    }
}
L.empty = new L([]);
class qe {
    constructor(e = [], t, n = 0, r = e.length) {
        this.maps = e, this.mirror = t, this.from = n, this.to = r
    }
    slice(e = 0, t = this.maps.length) {
        return new qe(this.maps, this.mirror, e, t)
    }
    copy() {
        return new qe(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to)
    }
    appendMap(e, t) {
        this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t)
    }
    appendMapping(e) {
        for (let t = 0, n = this.maps.length; t < e.maps.length; t++) {
            let r = e.getMirror(t);
            this.appendMap(e.maps[t], r != null && r < t ? n + r : void 0)
        }
    }
    getMirror(e) {
        if (this.mirror) {
            for (let t = 0; t < this.mirror.length; t++)
                if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)]
        }
    }
    setMirror(e, t) {
        this.mirror || (this.mirror = []), this.mirror.push(e, t)
    }
    appendMappingInverted(e) {
        for (let t = e.maps.length - 1, n = this.maps.length + e.maps.length; t >= 0; t--) {
            let r = e.getMirror(t);
            this.appendMap(e.maps[t].invert(), r != null && r > t ? n - r - 1 : void 0)
        }
    }
    invert() {
        let e = new qe;
        return e.appendMappingInverted(this), e
    }
    map(e, t = 1) {
        if (this.mirror) return this._map(e, t, !0);
        for (let n = this.from; n < this.to; n++) e = this.maps[n].map(e, t);
        return e
    }
    mapResult(e, t = 1) {
        return this._map(e, t, !1)
    }
    _map(e, t, n) {
        let r = 0;
        for (let s = this.from; s < this.to; s++) {
            let o = this.maps[s],
                l = o.mapResult(e, t);
            if (l.recover != null) {
                let a = this.getMirror(s);
                if (a != null && a > s && a < this.to) {
                    s = a, e = this.maps[a].recover(l.recover);
                    continue
                }
            }
            r |= l.delInfo, e = l.pos
        }
        return n ? e : new Ft(e, r, null)
    }
}
const Mt = Object.create(null);
class R {
    getMap() {
        return L.empty
    }
    merge(e) {
        return null
    }
    static fromJSON(e, t) {
        if (!t || !t.stepType) throw new RangeError("Invalid input for Step.fromJSON");
        let n = Mt[t.stepType];
        if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
        return n.fromJSON(e, t)
    }
    static jsonID(e, t) {
        if (e in Mt) throw new RangeError("Duplicate use of step JSON ID " + e);
        return Mt[e] = t, t.prototype.jsonID = e, t
    }
}
class M {
    constructor(e, t) {
        this.doc = e, this.failed = t
    }
    static ok(e) {
        return new M(e, null)
    }
    static fail(e) {
        return new M(null, e)
    }
    static fromReplace(e, t, n, r) {
        try {
            return M.ok(e.replace(t, n, r))
        } catch (s) {
            if (s instanceof at) return M.fail(s.message);
            throw s
        }
    }
}

function Gt(i, e, t) {
    let n = [];
    for (let r = 0; r < i.childCount; r++) {
        let s = i.child(r);
        s.content.size && (s = s.copy(Gt(s.content, e, s))), s.isInline && (s = e(s, t, r)), n.push(s)
    }
    return y.fromArray(n)
}
class oe extends R {
    constructor(e, t, n) {
        super(), this.from = e, this.to = t, this.mark = n
    }
    apply(e) {
        let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            r = n.node(n.sharedDepth(this.to)),
            s = new k(Gt(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), r), t.openStart, t.openEnd);
        return M.fromReplace(e, this.from, this.to, s)
    }
    invert() {
        return new U(this.from, this.to, this.mark)
    }
    map(e) {
        let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
        return t.deleted && n.deleted || t.pos >= n.pos ? null : new oe(t.pos, n.pos, this.mark)
    }
    merge(e) {
        return e instanceof oe && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new oe(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null
    }
    toJSON() {
        return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        }
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new oe(t.from, t.to, e.markFromJSON(t.mark))
    }
}
R.jsonID("addMark", oe);
class U extends R {
    constructor(e, t, n) {
        super(), this.from = e, this.to = t, this.mark = n
    }
    apply(e) {
        let t = e.slice(this.from, this.to),
            n = new k(Gt(t.content, r => r.mark(this.mark.removeFromSet(r.marks)), e), t.openStart, t.openEnd);
        return M.fromReplace(e, this.from, this.to, n)
    }
    invert() {
        return new oe(this.from, this.to, this.mark)
    }
    map(e) {
        let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
        return t.deleted && n.deleted || t.pos >= n.pos ? null : new U(t.pos, n.pos, this.mark)
    }
    merge(e) {
        return e instanceof U && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new U(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null
    }
    toJSON() {
        return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        }
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new U(t.from, t.to, e.markFromJSON(t.mark))
    }
}
R.jsonID("removeMark", U);
class le extends R {
    constructor(e, t) {
        super(), this.pos = e, this.mark = t
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t) return M.fail("No node at mark step's position");
        let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
        return M.fromReplace(e, this.pos, this.pos + 1, new k(y.from(n), 0, t.isLeaf ? 0 : 1))
    }
    invert(e) {
        let t = e.nodeAt(this.pos);
        if (t) {
            let n = this.mark.addToSet(t.marks);
            if (n.length == t.marks.length) {
                for (let r = 0; r < t.marks.length; r++)
                    if (!t.marks[r].isInSet(n)) return new le(this.pos, t.marks[r]);
                return new le(this.pos, this.mark)
            }
        }
        return new Ae(this.pos, this.mark)
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new le(t.pos, this.mark)
    }
    toJSON() {
        return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new le(t.pos, e.markFromJSON(t.mark))
    }
}
R.jsonID("addNodeMark", le);
class Ae extends R {
    constructor(e, t) {
        super(), this.pos = e, this.mark = t
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t) return M.fail("No node at mark step's position");
        let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
        return M.fromReplace(e, this.pos, this.pos + 1, new k(y.from(n), 0, t.isLeaf ? 0 : 1))
    }
    invert(e) {
        let t = e.nodeAt(this.pos);
        return !t || !this.mark.isInSet(t.marks) ? this : new le(this.pos, this.mark)
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new Ae(t.pos, this.mark)
    }
    toJSON() {
        return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new Ae(t.pos, e.markFromJSON(t.mark))
    }
}
R.jsonID("removeNodeMark", Ae);
class E extends R {
    constructor(e, t, n, r = !1) {
        super(), this.from = e, this.to = t, this.slice = n, this.structure = r
    }
    apply(e) {
        return this.structure && Vt(e, this.from, this.to) ? M.fail("Structure replace would overwrite content") : M.fromReplace(e, this.from, this.to, this.slice)
    }
    getMap() {
        return new L([this.from, this.to - this.from, this.slice.size])
    }
    invert(e) {
        return new E(this.from, this.from + this.slice.size, e.slice(this.from, this.to))
    }
    map(e) {
        let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
        return t.deletedAcross && n.deletedAcross ? null : new E(t.pos, Math.max(t.pos, n.pos), this.slice)
    }
    merge(e) {
        if (!(e instanceof E) || e.structure || this.structure) return null;
        if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
            let t = this.slice.size + e.slice.size == 0 ? k.empty : new k(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
            return new E(this.from, this.to + (e.to - e.from), t, this.structure)
        } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
            let t = this.slice.size + e.slice.size == 0 ? k.empty : new k(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
            return new E(e.from, this.to, t, this.structure)
        } else return null
    }
    toJSON() {
        let e = {
            stepType: "replace",
            from: this.from,
            to: this.to
        };
        return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new E(t.from, t.to, k.fromJSON(e, t.slice), !!t.structure)
    }
}
R.jsonID("replace", E);
class K extends R {
    constructor(e, t, n, r, s, o, l = !1) {
        super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = r, this.slice = s, this.insert = o, this.structure = l
    }
    apply(e) {
        if (this.structure && (Vt(e, this.from, this.gapFrom) || Vt(e, this.gapTo, this.to))) return M.fail("Structure gap-replace would overwrite content");
        let t = e.slice(this.gapFrom, this.gapTo);
        if (t.openStart || t.openEnd) return M.fail("Gap is not a flat range");
        let n = this.slice.insertAt(this.insert, t.content);
        return n ? M.fromReplace(e, this.from, this.to, n) : M.fail("Content does not fit in gap")
    }
    getMap() {
        return new L([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert])
    }
    invert(e) {
        let t = this.gapTo - this.gapFrom;
        return new K(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure)
    }
    map(e) {
        let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1),
            s = this.to == this.gapTo ? n.pos : e.map(this.gapTo, 1);
        return t.deletedAcross && n.deletedAcross || r < t.pos || s > n.pos ? null : new K(t.pos, n.pos, r, s, this.slice, this.insert, this.structure)
    }
    toJSON() {
        let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
        };
        return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e
    }
    static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new K(t.from, t.to, t.gapFrom, t.gapTo, k.fromJSON(e, t.slice), t.insert, !!t.structure)
    }
}
R.jsonID("replaceAround", K);

function Vt(i, e, t) {
    let n = i.resolve(e),
        r = t - e,
        s = n.depth;
    for (; r > 0 && s > 0 && n.indexAfter(s) == n.node(s).childCount;) s--, r--;
    if (r > 0) {
        let o = n.node(s).maybeChild(n.indexAfter(s));
        for (; r > 0;) {
            if (!o || o.isLeaf) return !0;
            o = o.firstChild, r--
        }
    }
    return !1
}

function Wr(i, e, t, n) {
    let r = [],
        s = [],
        o, l;
    i.doc.nodesBetween(e, t, (a, h, c) => {
        if (!a.isInline) return;
        let f = a.marks;
        if (!n.isInSet(f) && c.type.allowsMarkType(n.type)) {
            let d = Math.max(h, e),
                p = Math.min(h + a.nodeSize, t),
                u = n.addToSet(f);
            for (let m = 0; m < f.length; m++) f[m].isInSet(u) || (o && o.to == d && o.mark.eq(f[m]) ? o.to = p : r.push(o = new U(d, p, f[m])));
            l && l.to == d ? l.to = p : s.push(l = new oe(d, p, n))
        }
    }), r.forEach(a => i.step(a)), s.forEach(a => i.step(a))
}

function Kr(i, e, t, n) {
    let r = [],
        s = 0;
    i.doc.nodesBetween(e, t, (o, l) => {
        if (!o.isInline) return;
        s++;
        let a = null;
        if (n instanceof yt) {
            let h = o.marks,
                c;
            for (; c = n.isInSet(h);)(a || (a = [])).push(c), h = c.removeFromSet(h)
        } else n ? n.isInSet(o.marks) && (a = [n]) : a = o.marks;
        if (a && a.length) {
            let h = Math.min(l + o.nodeSize, t);
            for (let c = 0; c < a.length; c++) {
                let f = a[c],
                    d;
                for (let p = 0; p < r.length; p++) {
                    let u = r[p];
                    u.step == s - 1 && f.eq(r[p].style) && (d = u)
                }
                d ? (d.to = h, d.step = s) : r.push({
                    style: f,
                    from: Math.max(l, e),
                    to: h,
                    step: s
                })
            }
        }
    }), r.forEach(o => i.step(new U(o.from, o.to, o.style)))
}

function Ti(i, e, t, n = t.contentMatch, r = !0) {
    let s = i.doc.nodeAt(e),
        o = [],
        l = e + 1;
    for (let a = 0; a < s.childCount; a++) {
        let h = s.child(a),
            c = l + h.nodeSize,
            f = n.matchType(h.type);
        if (!f) o.push(new E(l, c, k.empty));
        else {
            n = f;
            for (let d = 0; d < h.marks.length; d++) t.allowsMarkType(h.marks[d].type) || i.step(new U(l, c, h.marks[d]));
            if (r && h.isText && t.whitespace != "pre") {
                let d, p = /\r?\n|\r/g,
                    u;
                for (; d = p.exec(h.text);) u || (u = new k(y.from(t.schema.text(" ", t.allowedMarks(h.marks))), 0, 0)), o.push(new E(l + d.index, l + d.index + d[0].length, u))
            }
        }
        l = c
    }
    if (!n.validEnd) {
        let a = n.fillBefore(y.empty, !0);
        i.replace(l, l, new k(a, 0, 0))
    }
    for (let a = o.length - 1; a >= 0; a--) i.step(o[a])
}

function $r(i, e, t) {
    return (e == 0 || i.canReplace(e, i.childCount)) && (t == i.childCount || i.canReplace(0, t))
}

function Qo(i) {
    let t = i.parent.content.cutByIndex(i.startIndex, i.endIndex);
    for (let n = i.depth;; --n) {
        let r = i.$from.node(n),
            s = i.$from.index(n),
            o = i.$to.indexAfter(n);
        if (n < i.depth && r.canReplace(s, o, t)) return n;
        if (n == 0 || r.type.spec.isolating || !$r(r, s, o)) break
    }
    return null
}

function Hr(i, e, t) {
    let {
        $from: n,
        $to: r,
        depth: s
    } = e, o = n.before(s + 1), l = r.after(s + 1), a = o, h = l, c = y.empty, f = 0;
    for (let u = s, m = !1; u > t; u--) m || n.index(u) > 0 ? (m = !0, c = y.from(n.node(u).copy(c)), f++) : a--;
    let d = y.empty,
        p = 0;
    for (let u = s, m = !1; u > t; u--) m || r.after(u + 1) < r.end(u) ? (m = !0, d = y.from(r.node(u).copy(d)), p++) : h++;
    i.step(new K(a, h, o, l, new k(c.append(d), f, p), c.size - f, !0))
}

function _o(i, e, t = null, n = i) {
    let r = Ur(i, e),
        s = r && jr(n, e);
    return s ? r.map(kn).concat({
        type: e,
        attrs: t
    }).concat(s.map(kn)) : null
}

function kn(i) {
    return {
        type: i,
        attrs: null
    }
}

function Ur(i, e) {
    let {
        parent: t,
        startIndex: n,
        endIndex: r
    } = i, s = t.contentMatchAt(n).findWrapping(e);
    if (!s) return null;
    let o = s.length ? s[0] : e;
    return t.canReplaceWith(n, r, o) ? s : null
}

function jr(i, e) {
    let {
        parent: t,
        startIndex: n,
        endIndex: r
    } = i, s = t.child(n), o = e.contentMatch.findWrapping(s.type);
    if (!o) return null;
    let a = (o.length ? o[o.length - 1] : e).contentMatch;
    for (let h = n; a && h < r; h++) a = a.matchType(t.child(h).type);
    return !a || !a.validEnd ? null : o
}

function Yr(i, e, t) {
    let n = y.empty;
    for (let o = t.length - 1; o >= 0; o--) {
        if (n.size) {
            let l = t[o].type.contentMatch.matchFragment(n);
            if (!l || !l.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")
        }
        n = y.from(t[o].type.create(t[o].attrs, n))
    }
    let r = e.start,
        s = e.end;
    i.step(new K(r, s, r, s, new k(n, 0, 0), t.length, !0))
}

function Gr(i, e, t, n, r) {
    if (!n.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
    let s = i.steps.length;
    i.doc.nodesBetween(e, t, (o, l) => {
        if (o.isTextblock && !o.hasMarkup(n, r) && Qr(i.doc, i.mapping.slice(s).map(l), n)) {
            let a = null;
            if (n.schema.linebreakReplacement) {
                let d = n.whitespace == "pre",
                    p = !!n.contentMatch.matchType(n.schema.linebreakReplacement);
                d && !p ? a = !1 : !d && p && (a = !0)
            }
            a === !1 && Zr(i, o, l, s), Ti(i, i.mapping.slice(s).map(l, 1), n, void 0, a === null);
            let h = i.mapping.slice(s),
                c = h.map(l, 1),
                f = h.map(l + o.nodeSize, 1);
            return i.step(new K(c, f, c + 1, f - 1, new k(y.from(n.create(r, null, o.marks)), 0, 0), 1, !0)), a === !0 && Xr(i, o, l, s), !1
        }
    })
}

function Xr(i, e, t, n) {
    e.forEach((r, s) => {
        if (r.isText) {
            let o, l = /\r?\n|\r/g;
            for (; o = l.exec(r.text);) {
                let a = i.mapping.slice(n).map(t + 1 + s + o.index);
                i.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create())
            }
        }
    })
}

function Zr(i, e, t, n) {
    e.forEach((r, s) => {
        if (r.type == r.type.schema.linebreakReplacement) {
            let o = i.mapping.slice(n).map(t + 1 + s);
            i.replaceWith(o, o + 1, e.type.schema.text(`
`))
        }
    })
}

function Qr(i, e, t) {
    let n = i.resolve(e),
        r = n.index();
    return n.parent.canReplaceWith(r, r + 1, t)
}

function _r(i, e, t, n, r) {
    let s = i.doc.nodeAt(e);
    if (!s) throw new RangeError("No node at given position");
    t || (t = s.type);
    let o = t.create(n, null, r || s.marks);
    if (s.isLeaf) return i.replaceWith(e, e + s.nodeSize, o);
    if (!t.validContent(s.content)) throw new RangeError("Invalid content for node type " + t.name);
    i.step(new K(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new k(y.from(o), 0, 0), 1, !0))
}

function el(i, e, t = 1, n) {
    let r = i.resolve(e),
        s = r.depth - t,
        o = n && n[n.length - 1] || r.parent;
    if (s < 0 || r.parent.type.spec.isolating || !r.parent.canReplace(r.index(), r.parent.childCount) || !o.type.validContent(r.parent.content.cutByIndex(r.index(), r.parent.childCount))) return !1;
    for (let h = r.depth - 1, c = t - 2; h > s; h--, c--) {
        let f = r.node(h),
            d = r.index(h);
        if (f.type.spec.isolating) return !1;
        let p = f.content.cutByIndex(d, f.childCount),
            u = n && n[c + 1];
        u && (p = p.replaceChild(0, u.type.create(u.attrs)));
        let m = n && n[c] || f;
        if (!f.canReplace(d + 1, f.childCount) || !m.type.validContent(p)) return !1
    }
    let l = r.indexAfter(s),
        a = n && n[0];
    return r.node(s).canReplaceWith(l, l, a ? a.type : r.node(s + 1).type)
}

function es(i, e, t = 1, n) {
    let r = i.doc.resolve(e),
        s = y.empty,
        o = y.empty;
    for (let l = r.depth, a = r.depth - t, h = t - 1; l > a; l--, h--) {
        s = y.from(r.node(l).copy(s));
        let c = n && n[h];
        o = y.from(c ? c.type.create(c.attrs, o) : r.node(l).copy(o))
    }
    i.step(new E(e, e, new k(s.append(o), t, t), !0))
}

function tl(i, e) {
    let t = i.resolve(e),
        n = t.index();
    return ts(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(n, n + 1)
}

function ts(i, e) {
    return !!(i && e && !i.isLeaf && i.canAppend(e))
}

function ns(i, e, t) {
    let n = new E(e - t, e + t, k.empty, !0);
    i.step(n)
}

function is(i, e, t) {
    let n = i.resolve(e);
    if (n.parent.canReplaceWith(n.index(), n.index(), t)) return e;
    if (n.parentOffset == 0)
        for (let r = n.depth - 1; r >= 0; r--) {
            let s = n.index(r);
            if (n.node(r).canReplaceWith(s, s, t)) return n.before(r + 1);
            if (s > 0) return null
        }
    if (n.parentOffset == n.parent.content.size)
        for (let r = n.depth - 1; r >= 0; r--) {
            let s = n.indexAfter(r);
            if (n.node(r).canReplaceWith(s, s, t)) return n.after(r + 1);
            if (s < n.node(r).childCount) return null
        }
    return null
}

function rs(i, e, t) {
    let n = i.resolve(e);
    if (!t.content.size) return e;
    let r = t.content;
    for (let s = 0; s < t.openStart; s++) r = r.firstChild.content;
    for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
        for (let o = n.depth; o >= 0; o--) {
            let l = o == n.depth ? 0 : n.pos <= (n.start(o + 1) + n.end(o + 1)) / 2 ? -1 : 1,
                a = n.index(o) + (l > 0 ? 1 : 0),
                h = n.node(o),
                c = !1;
            if (s == 1) c = h.canReplace(a, a, r);
            else {
                let f = h.contentMatchAt(a).findWrapping(r.firstChild.type);
                c = f && h.canReplaceWith(a, a, f[0])
            }
            if (c) return l == 0 ? n.pos : l < 0 ? n.before(o + 1) : n.after(o + 1)
        }
    return null
}

function ss(i, e, t = e, n = k.empty) {
    if (e == t && !n.size) return null;
    let r = i.resolve(e),
        s = i.resolve(t);
    return Di(r, s, n) ? new E(e, t, n) : new os(r, s, n).fit()
}

function Di(i, e, t) {
    return !t.openStart && !t.openEnd && i.start() == e.start() && i.parent.canReplace(i.index(), e.index(), t.content)
}
class os {
    constructor(e, t, n) {
        this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = y.empty;
        for (let r = 0; r <= e.depth; r++) {
            let s = e.node(r);
            this.frontier.push({
                type: s.type,
                match: s.contentMatchAt(e.indexAfter(r))
            })
        }
        for (let r = e.depth; r > 0; r--) this.placed = y.from(e.node(r).copy(this.placed))
    }
    get depth() {
        return this.frontier.length - 1
    }
    fit() {
        for (; this.unplaced.size;) {
            let h = this.findFittable();
            h ? this.placeNodes(h) : this.openMore() || this.dropNode()
        }
        let e = this.mustMoveInline(),
            t = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            r = this.close(e < 0 ? this.$to : n.doc.resolve(e));
        if (!r) return null;
        let s = this.placed,
            o = n.depth,
            l = r.depth;
        for (; o && l && s.childCount == 1;) s = s.firstChild.content, o--, l--;
        let a = new k(s, o, l);
        return e > -1 ? new K(n.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || n.pos != this.$to.pos ? new E(n.pos, r.pos, a) : null
    }
    findFittable() {
        let e = this.unplaced.openStart;
        for (let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < e; n++) {
            let s = t.firstChild;
            if (t.childCount > 1 && (r = 0), s.type.spec.isolating && r <= n) {
                e = n;
                break
            }
            t = s.content
        }
        for (let t = 1; t <= 2; t++)
            for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
                let r, s = null;
                n ? (s = Tt(this.unplaced.content, n - 1).firstChild, r = s.content) : r = this.unplaced.content;
                let o = r.firstChild;
                for (let l = this.depth; l >= 0; l--) {
                    let {
                        type: a,
                        match: h
                    } = this.frontier[l], c, f = null;
                    if (t == 1 && (o ? h.matchType(o.type) || (f = h.fillBefore(y.from(o), !1)) : s && a.compatibleContent(s.type))) return {
                        sliceDepth: n,
                        frontierDepth: l,
                        parent: s,
                        inject: f
                    };
                    if (t == 2 && o && (c = h.findWrapping(o.type))) return {
                        sliceDepth: n,
                        frontierDepth: l,
                        parent: s,
                        wrap: c
                    };
                    if (s && h.matchType(s.type)) break
                }
            }
    }
    openMore() {
        let {
            content: e,
            openStart: t,
            openEnd: n
        } = this.unplaced, r = Tt(e, t);
        return !r.childCount || r.firstChild.isLeaf ? !1 : (this.unplaced = new k(e, t + 1, Math.max(n, r.size + t >= e.size - n ? t + 1 : 0)), !0)
    }
    dropNode() {
        let {
            content: e,
            openStart: t,
            openEnd: n
        } = this.unplaced, r = Tt(e, t);
        if (r.childCount <= 1 && t > 0) {
            let s = e.size - t <= t + r.size;
            this.unplaced = new k(Be(e, t - 1, 1), t - 1, s ? t - 1 : n)
        } else this.unplaced = new k(Be(e, t, 1), t, n)
    }
    placeNodes({
        sliceDepth: e,
        frontierDepth: t,
        parent: n,
        inject: r,
        wrap: s
    }) {
        for (; this.depth > t;) this.closeFrontierNode();
        if (s)
            for (let m = 0; m < s.length; m++) this.openFrontierNode(s[m]);
        let o = this.unplaced,
            l = n ? n.content : o.content,
            a = o.openStart - e,
            h = 0,
            c = [],
            {
                match: f,
                type: d
            } = this.frontier[t];
        if (r) {
            for (let m = 0; m < r.childCount; m++) c.push(r.child(m));
            f = f.matchFragment(r)
        }
        let p = l.size + e - (o.content.size - o.openEnd);
        for (; h < l.childCount;) {
            let m = l.child(h),
                g = f.matchType(m.type);
            if (!g) break;
            h++, (h > 1 || a == 0 || m.content.size) && (f = g, c.push(wi(m.mark(d.allowedMarks(m.marks)), h == 1 ? a : 0, h == l.childCount ? p : -1)))
        }
        let u = h == l.childCount;
        u || (p = -1), this.placed = Fe(this.placed, t, y.from(c)), this.frontier[t].match = f, u && p < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
        for (let m = 0, g = l; m < p; m++) {
            let x = g.lastChild;
            this.frontier.push({
                type: x.type,
                match: x.contentMatchAt(x.childCount)
            }), g = x.content
        }
        this.unplaced = u ? e == 0 ? k.empty : new k(Be(o.content, e - 1, 1), e - 1, p < 0 ? o.openEnd : e - 1) : new k(Be(o.content, e, h), o.openStart, o.openEnd)
    }
    mustMoveInline() {
        if (!this.$to.parent.isTextblock) return -1;
        let e = this.frontier[this.depth],
            t;
        if (!e.type.isTextblock || !Dt(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
        let {
            depth: n
        } = this.$to, r = this.$to.after(n);
        for (; n > 1 && r == this.$to.end(--n);) ++r;
        return r
    }
    findCloseLevel(e) {
        e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
            let {
                match: n,
                type: r
            } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = Dt(e, t, r, n, s);
            if (o) {
                for (let l = t - 1; l >= 0; l--) {
                    let {
                        match: a,
                        type: h
                    } = this.frontier[l], c = Dt(e, l, h, a, !0);
                    if (!c || c.childCount) continue e
                }
                return {
                    depth: t,
                    fit: o,
                    move: s ? e.doc.resolve(e.after(t + 1)) : e
                }
            }
        }
    }
    close(e) {
        let t = this.findCloseLevel(e);
        if (!t) return null;
        for (; this.depth > t.depth;) this.closeFrontierNode();
        t.fit.childCount && (this.placed = Fe(this.placed, t.depth, t.fit)), e = t.move;
        for (let n = t.depth + 1; n <= e.depth; n++) {
            let r = e.node(n),
                s = r.type.contentMatch.fillBefore(r.content, !0, e.index(n));
            this.openFrontierNode(r.type, r.attrs, s)
        }
        return e
    }
    openFrontierNode(e, t = null, n) {
        let r = this.frontier[this.depth];
        r.match = r.match.matchType(e), this.placed = Fe(this.placed, this.depth, y.from(e.create(t, n))), this.frontier.push({
            type: e,
            match: e.contentMatch
        })
    }
    closeFrontierNode() {
        let t = this.frontier.pop().match.fillBefore(y.empty, !0);
        t.childCount && (this.placed = Fe(this.placed, this.frontier.length, t))
    }
}

function Be(i, e, t) {
    return e == 0 ? i.cutByIndex(t, i.childCount) : i.replaceChild(0, i.firstChild.copy(Be(i.firstChild.content, e - 1, t)))
}

function Fe(i, e, t) {
    return e == 0 ? i.append(t) : i.replaceChild(i.childCount - 1, i.lastChild.copy(Fe(i.lastChild.content, e - 1, t)))
}

function Tt(i, e) {
    for (let t = 0; t < e; t++) i = i.firstChild.content;
    return i
}

function wi(i, e, t) {
    if (e <= 0) return i;
    let n = i.content;
    return e > 1 && (n = n.replaceChild(0, wi(n.firstChild, e - 1, n.childCount == 1 ? t - 1 : 0))), e > 0 && (n = i.type.contentMatch.fillBefore(n).append(n), t <= 0 && (n = n.append(i.type.contentMatch.matchFragment(n).fillBefore(y.empty, !0)))), i.copy(n)
}

function Dt(i, e, t, n, r) {
    let s = i.node(e),
        o = r ? i.indexAfter(e) : i.index(e);
    if (o == s.childCount && !t.compatibleContent(s.type)) return null;
    let l = n.fillBefore(s.content, !0, o);
    return l && !ls(t, s.content, o) ? l : null
}

function ls(i, e, t) {
    for (let n = t; n < e.childCount; n++)
        if (!i.allowsMarks(e.child(n).marks)) return !0;
    return !1
}

function as(i) {
    return i.spec.defining || i.spec.definingForContent
}

function hs(i, e, t, n) {
    if (!n.size) return i.deleteRange(e, t);
    let r = i.doc.resolve(e),
        s = i.doc.resolve(t);
    if (Di(r, s, n)) return i.step(new E(e, t, n));
    let o = Ai(r, i.doc.resolve(t));
    o[o.length - 1] == 0 && o.pop();
    let l = -(r.depth + 1);
    o.unshift(l);
    for (let d = r.depth, p = r.pos - 1; d > 0; d--, p--) {
        let u = r.node(d).type.spec;
        if (u.defining || u.definingAsContext || u.isolating) break;
        o.indexOf(d) > -1 ? l = d : r.before(d) == p && o.splice(1, 0, -d)
    }
    let a = o.indexOf(l),
        h = [],
        c = n.openStart;
    for (let d = n.content, p = 0;; p++) {
        let u = d.firstChild;
        if (h.push(u), p == n.openStart) break;
        d = u.content
    }
    for (let d = c - 1; d >= 0; d--) {
        let p = h[d],
            u = as(p.type);
        if (u && !p.sameMarkup(r.node(Math.abs(l) - 1))) c = d;
        else if (u || !p.type.isTextblock) break
    }
    for (let d = n.openStart; d >= 0; d--) {
        let p = (d + c + 1) % (n.openStart + 1),
            u = h[p];
        if (u)
            for (let m = 0; m < o.length; m++) {
                let g = o[(m + a) % o.length],
                    x = !0;
                g < 0 && (x = !1, g = -g);
                let I = r.node(g - 1),
                    ee = r.index(g - 1);
                if (I.canReplaceWith(ee, ee, u.type, u.marks)) return i.replace(r.before(g), x ? s.after(g) : t, new k(Ei(n.content, 0, n.openStart, p), p, n.openEnd))
            }
    }
    let f = i.steps.length;
    for (let d = o.length - 1; d >= 0 && (i.replace(e, t, n), !(i.steps.length > f)); d--) {
        let p = o[d];
        p < 0 || (e = r.before(p), t = s.after(p))
    }
}

function Ei(i, e, t, n, r) {
    if (e < t) {
        let s = i.firstChild;
        i = i.replaceChild(0, s.copy(Ei(s.content, e + 1, t, n, s)))
    }
    if (e > n) {
        let s = r.contentMatchAt(0),
            o = s.fillBefore(i).append(i);
        i = o.append(s.matchFragment(o).fillBefore(y.empty, !0))
    }
    return i
}

function cs(i, e, t, n) {
    if (!n.isInline && e == t && i.doc.resolve(e).parent.content.size) {
        let r = is(i.doc, e, n.type);
        r != null && (e = t = r)
    }
    i.replaceRange(e, t, new k(y.from(n), 0, 0))
}

function fs(i, e, t) {
    let n = i.doc.resolve(e),
        r = i.doc.resolve(t),
        s = Ai(n, r);
    for (let o = 0; o < s.length; o++) {
        let l = s[o],
            a = o == s.length - 1;
        if (a && l == 0 || n.node(l).type.contentMatch.validEnd) return i.delete(n.start(l), r.end(l));
        if (l > 0 && (a || n.node(l - 1).canReplace(n.index(l - 1), r.indexAfter(l - 1)))) return i.delete(n.before(l), r.after(l))
    }
    for (let o = 1; o <= n.depth && o <= r.depth; o++)
        if (e - n.start(o) == n.depth - o && t > n.end(o) && r.end(o) - t != r.depth - o) return i.delete(n.before(o), t);
    i.delete(e, t)
}

function Ai(i, e) {
    let t = [],
        n = Math.min(i.depth, e.depth);
    for (let r = n; r >= 0; r--) {
        let s = i.start(r);
        if (s < i.pos - (i.depth - r) || e.end(r) > e.pos + (e.depth - r) || i.node(r).type.spec.isolating || e.node(r).type.spec.isolating) break;
        (s == e.start(r) || r == i.depth && r == e.depth && i.parent.inlineContent && e.parent.inlineContent && r && e.start(r - 1) == s - 1) && t.push(r)
    }
    return t
}
class we extends R {
    constructor(e, t, n) {
        super(), this.pos = e, this.attr = t, this.value = n
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t) return M.fail("No node at attribute step's position");
        let n = Object.create(null);
        for (let s in t.attrs) n[s] = t.attrs[s];
        n[this.attr] = this.value;
        let r = t.type.create(n, null, t.marks);
        return M.fromReplace(e, this.pos, this.pos + 1, new k(y.from(r), 0, t.isLeaf ? 0 : 1))
    }
    getMap() {
        return L.empty
    }
    invert(e) {
        return new we(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr])
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new we(t.pos, this.attr, this.value)
    }
    toJSON() {
        return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
        }
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number" || typeof t.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new we(t.pos, t.attr, t.value)
    }
}
R.jsonID("attr", we);
class Ue extends R {
    constructor(e, t) {
        super(), this.attr = e, this.value = t
    }
    apply(e) {
        let t = Object.create(null);
        for (let r in e.attrs) t[r] = e.attrs[r];
        t[this.attr] = this.value;
        let n = e.type.create(t, e.content, e.marks);
        return M.ok(n)
    }
    getMap() {
        return L.empty
    }
    invert(e) {
        return new Ue(this.attr, e.attrs[this.attr])
    }
    map(e) {
        return this
    }
    toJSON() {
        return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
        }
    }
    static fromJSON(e, t) {
        if (typeof t.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
        return new Ue(t.attr, t.value)
    }
}
R.jsonID("docAttr", Ue);
let Re = class extends Error {};
Re = function i(e) {
    let t = Error.call(this, e);
    return t.__proto__ = i.prototype, t
};
Re.prototype = Object.create(Error.prototype);
Re.prototype.constructor = Re;
Re.prototype.name = "TransformError";
class ds {
    constructor(e) {
        this.doc = e, this.steps = [], this.docs = [], this.mapping = new qe
    }
    get before() {
        return this.docs.length ? this.docs[0] : this.doc
    }
    step(e) {
        let t = this.maybeStep(e);
        if (t.failed) throw new Re(t.failed);
        return this
    }
    maybeStep(e) {
        let t = e.apply(this.doc);
        return t.failed || this.addStep(e, t.doc), t
    }
    get docChanged() {
        return this.steps.length > 0
    }
    addStep(e, t) {
        this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t
    }
    replace(e, t = e, n = k.empty) {
        let r = ss(this.doc, e, t, n);
        return r && this.step(r), this
    }
    replaceWith(e, t, n) {
        return this.replace(e, t, new k(y.from(n), 0, 0))
    }
    delete(e, t) {
        return this.replace(e, t, k.empty)
    }
    insert(e, t) {
        return this.replaceWith(e, e, t)
    }
    replaceRange(e, t, n) {
        return hs(this, e, t, n), this
    }
    replaceRangeWith(e, t, n) {
        return cs(this, e, t, n), this
    }
    deleteRange(e, t) {
        return fs(this, e, t), this
    }
    lift(e, t) {
        return Hr(this, e, t), this
    }
    join(e, t = 1) {
        return ns(this, e, t), this
    }
    wrap(e, t) {
        return Yr(this, e, t), this
    }
    setBlockType(e, t = e, n, r = null) {
        return Gr(this, e, t, n, r), this
    }
    setNodeMarkup(e, t, n = null, r) {
        return _r(this, e, t, n, r), this
    }
    setNodeAttribute(e, t, n) {
        return this.step(new we(e, t, n)), this
    }
    setDocAttribute(e, t) {
        return this.step(new Ue(e, t)), this
    }
    addNodeMark(e, t) {
        return this.step(new le(e, t)), this
    }
    removeNodeMark(e, t) {
        if (!(t instanceof N)) {
            let n = this.doc.nodeAt(e);
            if (!n) throw new RangeError("No node at position " + e);
            if (t = t.isInSet(n.marks), !t) return this
        }
        return this.step(new Ae(e, t)), this
    }
    split(e, t = 1, n) {
        return es(this, e, t, n), this
    }
    addMark(e, t, n) {
        return Wr(this, e, t, n), this
    }
    removeMark(e, t, n) {
        return Kr(this, e, t, n), this
    }
    clearIncompatible(e, t, n) {
        return Ti(this, e, t, n), this
    }
}
const wt = Object.create(null);
class C {
    constructor(e, t, n) {
        this.$anchor = e, this.$head = t, this.ranges = n || [new us(e.min(t), e.max(t))]
    }
    get anchor() {
        return this.$anchor.pos
    }
    get head() {
        return this.$head.pos
    }
    get from() {
        return this.$from.pos
    }
    get to() {
        return this.$to.pos
    }
    get $from() {
        return this.ranges[0].$from
    }
    get $to() {
        return this.ranges[0].$to
    }
    get empty() {
        let e = this.ranges;
        for (let t = 0; t < e.length; t++)
            if (e[t].$from.pos != e[t].$to.pos) return !1;
        return !0
    }
    content() {
        return this.$from.doc.slice(this.from, this.to, !0)
    }
    replace(e, t = k.empty) {
        let n = t.content.lastChild,
            r = null;
        for (let l = 0; l < t.openEnd; l++) r = n, n = n.lastChild;
        let s = e.steps.length,
            o = this.ranges;
        for (let l = 0; l < o.length; l++) {
            let {
                $from: a,
                $to: h
            } = o[l], c = e.mapping.slice(s);
            e.replaceRange(c.map(a.pos), c.map(h.pos), l ? k.empty : t), l == 0 && bn(e, s, (n ? n.isInline : r && r.isTextblock) ? -1 : 1)
        }
    }
    replaceWith(e, t) {
        let n = e.steps.length,
            r = this.ranges;
        for (let s = 0; s < r.length; s++) {
            let {
                $from: o,
                $to: l
            } = r[s], a = e.mapping.slice(n), h = a.map(o.pos), c = a.map(l.pos);
            s ? e.deleteRange(h, c) : (e.replaceRangeWith(h, c, t), bn(e, n, t.isInline ? -1 : 1))
        }
    }
    static findFrom(e, t, n = !1) {
        let r = e.parent.inlineContent ? new O(e) : Te(e.node(0), e.parent, e.pos, e.index(), t, n);
        if (r) return r;
        for (let s = e.depth - 1; s >= 0; s--) {
            let o = t < 0 ? Te(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, n) : Te(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, n);
            if (o) return o
        }
        return null
    }
    static near(e, t = 1) {
        return this.findFrom(e, t) || this.findFrom(e, -t) || new Y(e.node(0))
    }
    static atStart(e) {
        return Te(e, e, 0, 0, 1) || new Y(e)
    }
    static atEnd(e) {
        return Te(e, e, e.content.size, e.childCount, -1) || new Y(e)
    }
    static fromJSON(e, t) {
        if (!t || !t.type) throw new RangeError("Invalid input for Selection.fromJSON");
        let n = wt[t.type];
        if (!n) throw new RangeError(`No selection type ${t.type} defined`);
        return n.fromJSON(e, t)
    }
    static jsonID(e, t) {
        if (e in wt) throw new RangeError("Duplicate use of selection JSON ID " + e);
        return wt[e] = t, t.prototype.jsonID = e, t
    }
    getBookmark() {
        return O.between(this.$anchor, this.$head).getBookmark()
    }
}
C.prototype.visible = !0;
class us {
    constructor(e, t) {
        this.$from = e, this.$to = t
    }
}
let xn = !1;

function Sn(i) {
    !xn && !i.parent.inlineContent && (xn = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + i.parent.type.name + ")"))
}
class O extends C {
    constructor(e, t = e) {
        Sn(e), Sn(t), super(e, t)
    }
    get $cursor() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null
    }
    map(e, t) {
        let n = e.resolve(t.map(this.head));
        if (!n.parent.inlineContent) return C.near(n);
        let r = e.resolve(t.map(this.anchor));
        return new O(r.parent.inlineContent ? r : n, n)
    }
    replace(e, t = k.empty) {
        if (super.replace(e, t), t == k.empty) {
            let n = this.$from.marksAcross(this.$to);
            n && e.ensureMarks(n)
        }
    }
    eq(e) {
        return e instanceof O && e.anchor == this.anchor && e.head == this.head
    }
    getBookmark() {
        return new kt(this.anchor, this.head)
    }
    toJSON() {
        return {
            type: "text",
            anchor: this.anchor,
            head: this.head
        }
    }
    static fromJSON(e, t) {
        if (typeof t.anchor != "number" || typeof t.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
        return new O(e.resolve(t.anchor), e.resolve(t.head))
    }
    static create(e, t, n = t) {
        let r = e.resolve(t);
        return new this(r, n == t ? r : e.resolve(n))
    }
    static between(e, t, n) {
        let r = e.pos - t.pos;
        if ((!n || r) && (n = r >= 0 ? 1 : -1), !t.parent.inlineContent) {
            let s = C.findFrom(t, n, !0) || C.findFrom(t, -n, !0);
            if (s) t = s.$head;
            else return C.near(t, n)
        }
        return e.parent.inlineContent || (r == 0 ? e = t : (e = (C.findFrom(e, -n, !0) || C.findFrom(e, n, !0)).$anchor, e.pos < t.pos != r < 0 && (e = t))), new O(e, t)
    }
}
C.jsonID("text", O);
class kt {
    constructor(e, t) {
        this.anchor = e, this.head = t
    }
    map(e) {
        return new kt(e.map(this.anchor), e.map(this.head))
    }
    resolve(e) {
        return O.between(e.resolve(this.anchor), e.resolve(this.head))
    }
}
class S extends C {
    constructor(e) {
        let t = e.nodeAfter,
            n = e.node(0).resolve(e.pos + t.nodeSize);
        super(e, n), this.node = t
    }
    map(e, t) {
        let {
            deleted: n,
            pos: r
        } = t.mapResult(this.anchor), s = e.resolve(r);
        return n ? C.near(s) : new S(s)
    }
    content() {
        return new k(y.from(this.node), 0, 0)
    }
    eq(e) {
        return e instanceof S && e.anchor == this.anchor
    }
    toJSON() {
        return {
            type: "node",
            anchor: this.anchor
        }
    }
    getBookmark() {
        return new Xt(this.anchor)
    }
    static fromJSON(e, t) {
        if (typeof t.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
        return new S(e.resolve(t.anchor))
    }
    static create(e, t) {
        return new S(e.resolve(t))
    }
    static isSelectable(e) {
        return !e.isText && e.type.spec.selectable !== !1
    }
}
S.prototype.visible = !1;
C.jsonID("node", S);
class Xt {
    constructor(e) {
        this.anchor = e
    }
    map(e) {
        let {
            deleted: t,
            pos: n
        } = e.mapResult(this.anchor);
        return t ? new kt(n, n) : new Xt(n)
    }
    resolve(e) {
        let t = e.resolve(this.anchor),
            n = t.nodeAfter;
        return n && S.isSelectable(n) ? new S(t) : C.near(t)
    }
}
class Y extends C {
    constructor(e) {
        super(e.resolve(0), e.resolve(e.content.size))
    }
    replace(e, t = k.empty) {
        if (t == k.empty) {
            e.delete(0, e.doc.content.size);
            let n = C.atStart(e.doc);
            n.eq(e.selection) || e.setSelection(n)
        } else super.replace(e, t)
    }
    toJSON() {
        return {
            type: "all"
        }
    }
    static fromJSON(e) {
        return new Y(e)
    }
    map(e) {
        return new Y(e)
    }
    eq(e) {
        return e instanceof Y
    }
    getBookmark() {
        return ps
    }
}
C.jsonID("all", Y);
const ps = {
    map() {
        return this
    },
    resolve(i) {
        return new Y(i)
    }
};

function Te(i, e, t, n, r, s = !1) {
    if (e.inlineContent) return O.create(i, t);
    for (let o = n - (r > 0 ? 0 : 1); r > 0 ? o < e.childCount : o >= 0; o += r) {
        let l = e.child(o);
        if (l.isAtom) {
            if (!s && S.isSelectable(l)) return S.create(i, t - (r < 0 ? l.nodeSize : 0))
        } else {
            let a = Te(i, l, t + r, r < 0 ? l.childCount : 0, r, s);
            if (a) return a
        }
        t += l.nodeSize * r
    }
    return null
}

function bn(i, e, t) {
    let n = i.steps.length - 1;
    if (n < e) return;
    let r = i.steps[n];
    if (!(r instanceof E || r instanceof K)) return;
    let s = i.mapping.maps[n],
        o;
    s.forEach((l, a, h, c) => {
        o == null && (o = c)
    }), i.setSelection(C.near(i.doc.resolve(o), t))
}
const Nn = 1,
    rt = 2,
    Cn = 4;
class ms extends ds {
    constructor(e) {
        super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks
    }
    get selection() {
        return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection
    }
    setSelection(e) {
        if (e.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
        return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Nn) & ~rt, this.storedMarks = null, this
    }
    get selectionSet() {
        return (this.updated & Nn) > 0
    }
    setStoredMarks(e) {
        return this.storedMarks = e, this.updated |= rt, this
    }
    ensureMarks(e) {
        return N.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this
    }
    addStoredMark(e) {
        return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()))
    }
    removeStoredMark(e) {
        return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()))
    }
    get storedMarksSet() {
        return (this.updated & rt) > 0
    }
    addStep(e, t) {
        super.addStep(e, t), this.updated = this.updated & ~rt, this.storedMarks = null
    }
    setTime(e) {
        return this.time = e, this
    }
    replaceSelection(e) {
        return this.selection.replace(this, e), this
    }
    replaceSelectionWith(e, t = !0) {
        let n = this.selection;
        return t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || N.none))), n.replaceWith(this, e), this
    }
    deleteSelection() {
        return this.selection.replace(this), this
    }
    insertText(e, t, n) {
        let r = this.doc.type.schema;
        if (t == null) return e ? this.replaceSelectionWith(r.text(e), !0) : this.deleteSelection(); {
            if (n == null && (n = t), n = n ? ? t, !e) return this.deleteRange(t, n);
            let s = this.storedMarks;
            if (!s) {
                let o = this.doc.resolve(t);
                s = n == t ? o.marks() : o.marksAcross(this.doc.resolve(n))
            }
            return this.replaceRangeWith(t, n, r.text(e, s)), this.selection.empty || this.setSelection(C.near(this.selection.$to)), this
        }
    }
    setMeta(e, t) {
        return this.meta[typeof e == "string" ? e : e.key] = t, this
    }
    getMeta(e) {
        return this.meta[typeof e == "string" ? e : e.key]
    }
    get isGeneric() {
        for (let e in this.meta) return !1;
        return !0
    }
    scrollIntoView() {
        return this.updated |= Cn, this
    }
    get scrolledIntoView() {
        return (this.updated & Cn) > 0
    }
}

function On(i, e) {
    return !e || !i ? i : i.bind(e)
}
class Ve {
    constructor(e, t, n) {
        this.name = e, this.init = On(t.init, n), this.apply = On(t.apply, n)
    }
}
const gs = [new Ve("doc", {
    init(i) {
        return i.doc || i.schema.topNodeType.createAndFill()
    },
    apply(i) {
        return i.doc
    }
}), new Ve("selection", {
    init(i, e) {
        return i.selection || C.atStart(e.doc)
    },
    apply(i) {
        return i.selection
    }
}), new Ve("storedMarks", {
    init(i) {
        return i.storedMarks || null
    },
    apply(i, e, t, n) {
        return n.selection.$cursor ? i.storedMarks : null
    }
}), new Ve("scrollToSelection", {
    init() {
        return 0
    },
    apply(i, e) {
        return i.scrolledIntoView ? e + 1 : e
    }
})];
class Et {
    constructor(e, t) {
        this.schema = e, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = gs.slice(), t && t.forEach(n => {
            if (this.pluginsByKey[n.key]) throw new RangeError("Adding different instances of a keyed plugin (" + n.key + ")");
            this.plugins.push(n), this.pluginsByKey[n.key] = n, n.spec.state && this.fields.push(new Ve(n.key, n.spec.state, n))
        })
    }
}
class Le {
    constructor(e) {
        this.config = e
    }
    get schema() {
        return this.config.schema
    }
    get plugins() {
        return this.config.plugins
    }
    apply(e) {
        return this.applyTransaction(e).state
    }
    filterTransaction(e, t = -1) {
        for (let n = 0; n < this.config.plugins.length; n++)
            if (n != t) {
                let r = this.config.plugins[n];
                if (r.spec.filterTransaction && !r.spec.filterTransaction.call(r, e, this)) return !1
            }
        return !0
    }
    applyTransaction(e) {
        if (!this.filterTransaction(e)) return {
            state: this,
            transactions: []
        };
        let t = [e],
            n = this.applyInner(e),
            r = null;
        for (;;) {
            let s = !1;
            for (let o = 0; o < this.config.plugins.length; o++) {
                let l = this.config.plugins[o];
                if (l.spec.appendTransaction) {
                    let a = r ? r[o].n : 0,
                        h = r ? r[o].state : this,
                        c = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, h, n);
                    if (c && n.filterTransaction(c, o)) {
                        if (c.setMeta("appendedTransaction", e), !r) {
                            r = [];
                            for (let f = 0; f < this.config.plugins.length; f++) r.push(f < o ? {
                                state: n,
                                n: t.length
                            } : {
                                state: this,
                                n: 0
                            })
                        }
                        t.push(c), n = n.applyInner(c), s = !0
                    }
                    r && (r[o] = {
                        state: n,
                        n: t.length
                    })
                }
            }
            if (!s) return {
                state: n,
                transactions: t
            }
        }
    }
    applyInner(e) {
        if (!e.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
        let t = new Le(this.config),
            n = this.config.fields;
        for (let r = 0; r < n.length; r++) {
            let s = n[r];
            t[s.name] = s.apply(e, this[s.name], this, t)
        }
        return t
    }
    get tr() {
        return new ms(this)
    }
    static create(e) {
        let t = new Et(e.doc ? e.doc.type.schema : e.schema, e.plugins),
            n = new Le(t);
        for (let r = 0; r < t.fields.length; r++) n[t.fields[r].name] = t.fields[r].init(e, n);
        return n
    }
    reconfigure(e) {
        let t = new Et(this.schema, e.plugins),
            n = t.fields,
            r = new Le(t);
        for (let s = 0; s < n.length; s++) {
            let o = n[s].name;
            r[o] = this.hasOwnProperty(o) ? this[o] : n[s].init(e, r)
        }
        return r
    }
    toJSON(e) {
        let t = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON()
        };
        if (this.storedMarks && (t.storedMarks = this.storedMarks.map(n => n.toJSON())), e && typeof e == "object")
            for (let n in e) {
                if (n == "doc" || n == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
                let r = e[n],
                    s = r.spec.state;
                s && s.toJSON && (t[n] = s.toJSON.call(r, this[r.key]))
            }
        return t
    }
    static fromJSON(e, t, n) {
        if (!t) throw new RangeError("Invalid input for EditorState.fromJSON");
        if (!e.schema) throw new RangeError("Required config field 'schema' missing");
        let r = new Et(e.schema, e.plugins),
            s = new Le(r);
        return r.fields.forEach(o => {
            if (o.name == "doc") s.doc = j.fromJSON(e.schema, t.doc);
            else if (o.name == "selection") s.selection = C.fromJSON(s.doc, t.selection);
            else if (o.name == "storedMarks") t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
            else {
                if (n)
                    for (let l in n) {
                        let a = n[l],
                            h = a.spec.state;
                        if (a.key == o.name && h && h.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
                            s[o.name] = h.fromJSON.call(a, e, t[l], s);
                            return
                        }
                    }
                s[o.name] = o.init(e, s)
            }
        }), s
    }
}

function Ri(i, e, t) {
    for (let n in i) {
        let r = i[n];
        r instanceof Function ? r = r.bind(e) : n == "handleDOMEvents" && (r = Ri(r, e, {})), t[n] = r
    }
    return t
}
class nl {
    constructor(e) {
        this.spec = e, this.props = {}, e.props && Ri(e.props, this, this.props), this.key = e.key ? e.key.key : Ii("plugin")
    }
    getState(e) {
        return e[this.key]
    }
}
const At = Object.create(null);

function Ii(i) {
    return i in At ? i + "$" + ++At[i] : (At[i] = 0, i + "$")
}
class il {
    constructor(e = "key") {
        this.key = Ii(e)
    }
    get(e) {
        return e.config.pluginsByKey[this.key]
    }
    getState(e) {
        return e[this.key]
    }
}
const D = function(i) {
        for (var e = 0;; e++)
            if (i = i.previousSibling, !i) return e
    },
    je = function(i) {
        let e = i.assignedSlot || i.parentNode;
        return e && e.nodeType == 11 ? e.host : e
    };
let Lt = null;
const Q = function(i, e, t) {
        let n = Lt || (Lt = document.createRange());
        return n.setEnd(i, t ? ? i.nodeValue.length), n.setStart(i, e || 0), n
    },
    ys = function() {
        Lt = null
    },
    Ne = function(i, e, t, n) {
        return t && (Mn(i, e, t, n, -1) || Mn(i, e, t, n, 1))
    },
    ks = /^(img|br|input|textarea|hr)$/i;

function Mn(i, e, t, n, r) {
    for (;;) {
        if (i == t && e == n) return !0;
        if (e == (r < 0 ? 0 : H(i))) {
            let s = i.parentNode;
            if (!s || s.nodeType != 1 || Ze(i) || ks.test(i.nodeName) || i.contentEditable == "false") return !1;
            e = D(i) + (r < 0 ? 0 : 1), i = s
        } else if (i.nodeType == 1) {
            if (i = i.childNodes[e + (r < 0 ? -1 : 0)], i.contentEditable == "false") return !1;
            e = r < 0 ? H(i) : 0
        } else return !1
    }
}

function H(i) {
    return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length
}

function xs(i, e) {
    for (;;) {
        if (i.nodeType == 3 && e) return i;
        if (i.nodeType == 1 && e > 0) {
            if (i.contentEditable == "false") return null;
            i = i.childNodes[e - 1], e = H(i)
        } else if (i.parentNode && !Ze(i)) e = D(i), i = i.parentNode;
        else return null
    }
}

function Ss(i, e) {
    for (;;) {
        if (i.nodeType == 3 && e < i.nodeValue.length) return i;
        if (i.nodeType == 1 && e < i.childNodes.length) {
            if (i.contentEditable == "false") return null;
            i = i.childNodes[e], e = 0
        } else if (i.parentNode && !Ze(i)) e = D(i) + 1, i = i.parentNode;
        else return null
    }
}

function bs(i, e, t) {
    for (let n = e == 0, r = e == H(i); n || r;) {
        if (i == t) return !0;
        let s = D(i);
        if (i = i.parentNode, !i) return !1;
        n = n && s == 0, r = r && s == H(i)
    }
}

function Ze(i) {
    let e;
    for (let t = i; t && !(e = t.pmViewDesc); t = t.parentNode);
    return e && e.node && e.node.isBlock && (e.dom == i || e.contentDOM == i)
}
const xt = function(i) {
    return i.focusNode && Ne(i.focusNode, i.focusOffset, i.anchorNode, i.anchorOffset)
};

function pe(i, e) {
    let t = document.createEvent("Event");
    return t.initEvent("keydown", !0, !0), t.keyCode = i, t.key = t.code = e, t
}

function Ns(i) {
    let e = i.activeElement;
    for (; e && e.shadowRoot;) e = e.shadowRoot.activeElement;
    return e
}

function Cs(i, e, t) {
    if (i.caretPositionFromPoint) try {
        let n = i.caretPositionFromPoint(e, t);
        if (n) return {
            node: n.offsetNode,
            offset: n.offset
        }
    } catch {}
    if (i.caretRangeFromPoint) {
        let n = i.caretRangeFromPoint(e, t);
        if (n) return {
            node: n.startContainer,
            offset: n.startOffset
        }
    }
}
const G = typeof navigator < "u" ? navigator : null,
    Tn = typeof document < "u" ? document : null,
    de = G && G.userAgent || "",
    Jt = /Edge\/(\d+)/.exec(de),
    Pi = /MSIE \d/.exec(de),
    vt = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(de),
    F = !!(Pi || vt || Jt),
    he = Pi ? document.documentMode : vt ? +vt[1] : Jt ? +Jt[1] : 0,
    $ = !F && /gecko\/(\d+)/i.test(de);
$ && +(/Firefox\/(\d+)/.exec(de) || [0, 0])[1];
const qt = !F && /Chrome\/(\d+)/.exec(de),
    A = !!qt,
    zi = qt ? +qt[1] : 0,
    P = !F && !!G && /Apple Computer/.test(G.vendor),
    Ie = P && (/Mobile\/\w+/.test(de) || !!G && G.maxTouchPoints > 2),
    J = Ie || (G ? /Mac/.test(G.platform) : !1),
    Os = G ? /Win/.test(G.platform) : !1,
    q = /Android \d/.test(de),
    Qe = !!Tn && "webkitFontSmoothing" in Tn.documentElement.style,
    Ms = Qe ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;

function Ts(i) {
    let e = i.defaultView && i.defaultView.visualViewport;
    return e ? {
        left: 0,
        right: e.width,
        top: 0,
        bottom: e.height
    } : {
        left: 0,
        right: i.documentElement.clientWidth,
        top: 0,
        bottom: i.documentElement.clientHeight
    }
}

function Z(i, e) {
    return typeof i == "number" ? i : i[e]
}

function Ds(i) {
    let e = i.getBoundingClientRect(),
        t = e.width / i.offsetWidth || 1,
        n = e.height / i.offsetHeight || 1;
    return {
        left: e.left,
        right: e.left + i.clientWidth * t,
        top: e.top,
        bottom: e.top + i.clientHeight * n
    }
}

function Dn(i, e, t) {
    let n = i.someProp("scrollThreshold") || 0,
        r = i.someProp("scrollMargin") || 5,
        s = i.dom.ownerDocument;
    for (let o = t || i.dom; o; o = je(o)) {
        if (o.nodeType != 1) continue;
        let l = o,
            a = l == s.body,
            h = a ? Ts(s) : Ds(l),
            c = 0,
            f = 0;
        if (e.top < h.top + Z(n, "top") ? f = -(h.top - e.top + Z(r, "top")) : e.bottom > h.bottom - Z(n, "bottom") && (f = e.bottom - e.top > h.bottom - h.top ? e.top + Z(r, "top") - h.top : e.bottom - h.bottom + Z(r, "bottom")), e.left < h.left + Z(n, "left") ? c = -(h.left - e.left + Z(r, "left")) : e.right > h.right - Z(n, "right") && (c = e.right - h.right + Z(r, "right")), c || f)
            if (a) s.defaultView.scrollBy(c, f);
            else {
                let d = l.scrollLeft,
                    p = l.scrollTop;
                f && (l.scrollTop += f), c && (l.scrollLeft += c);
                let u = l.scrollLeft - d,
                    m = l.scrollTop - p;
                e = {
                    left: e.left - u,
                    top: e.top - m,
                    right: e.right - u,
                    bottom: e.bottom - m
                }
            }
        if (a || /^(fixed|sticky)$/.test(getComputedStyle(o).position)) break
    }
}

function ws(i) {
    let e = i.dom.getBoundingClientRect(),
        t = Math.max(0, e.top),
        n, r;
    for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
        let l = i.root.elementFromPoint(s, o);
        if (!l || l == i.dom || !i.dom.contains(l)) continue;
        let a = l.getBoundingClientRect();
        if (a.top >= t - 20) {
            n = l, r = a.top;
            break
        }
    }
    return {
        refDOM: n,
        refTop: r,
        stack: Bi(i.dom)
    }
}

function Bi(i) {
    let e = [],
        t = i.ownerDocument;
    for (let n = i; n && (e.push({
            dom: n,
            top: n.scrollTop,
            left: n.scrollLeft
        }), i != t); n = je(n));
    return e
}

function Es({
    refDOM: i,
    refTop: e,
    stack: t
}) {
    let n = i ? i.getBoundingClientRect().top : 0;
    Fi(t, n == 0 ? 0 : n - e)
}

function Fi(i, e) {
    for (let t = 0; t < i.length; t++) {
        let {
            dom: n,
            top: r,
            left: s
        } = i[t];
        n.scrollTop != r + e && (n.scrollTop = r + e), n.scrollLeft != s && (n.scrollLeft = s)
    }
}
let Oe = null;

function As(i) {
    if (i.setActive) return i.setActive();
    if (Oe) return i.focus(Oe);
    let e = Bi(i);
    i.focus(Oe == null ? {
        get preventScroll() {
            return Oe = {
                preventScroll: !0
            }, !0
        }
    } : void 0), Oe || (Oe = !1, Fi(e, 0))
}

function Vi(i, e) {
    let t, n = 2e8,
        r, s = 0,
        o = e.top,
        l = e.top,
        a, h;
    for (let c = i.firstChild, f = 0; c; c = c.nextSibling, f++) {
        let d;
        if (c.nodeType == 1) d = c.getClientRects();
        else if (c.nodeType == 3) d = Q(c).getClientRects();
        else continue;
        for (let p = 0; p < d.length; p++) {
            let u = d[p];
            if (u.top <= o && u.bottom >= l) {
                o = Math.max(u.bottom, o), l = Math.min(u.top, l);
                let m = u.left > e.left ? u.left - e.left : u.right < e.left ? e.left - u.right : 0;
                if (m < n) {
                    t = c, n = m, r = m && t.nodeType == 3 ? {
                        left: u.right < e.left ? u.right : u.left,
                        top: e.top
                    } : e, c.nodeType == 1 && m && (s = f + (e.left >= (u.left + u.right) / 2 ? 1 : 0));
                    continue
                }
            } else u.top > e.top && !a && u.left <= e.left && u.right >= e.left && (a = c, h = {
                left: Math.max(u.left, Math.min(u.right, e.left)),
                top: u.top
            });
            !t && (e.left >= u.right && e.top >= u.top || e.left >= u.left && e.top >= u.bottom) && (s = f + 1)
        }
    }
    return !t && a && (t = a, r = h, n = 0), t && t.nodeType == 3 ? Rs(t, r) : !t || n && t.nodeType == 1 ? {
        node: i,
        offset: s
    } : Vi(t, r)
}

function Rs(i, e) {
    let t = i.nodeValue.length,
        n = document.createRange();
    for (let r = 0; r < t; r++) {
        n.setEnd(i, r + 1), n.setStart(i, r);
        let s = ie(n, 1);
        if (s.top != s.bottom && Zt(e, s)) return {
            node: i,
            offset: r + (e.left >= (s.left + s.right) / 2 ? 1 : 0)
        }
    }
    return {
        node: i,
        offset: 0
    }
}

function Zt(i, e) {
    return i.left >= e.left - 1 && i.left <= e.right + 1 && i.top >= e.top - 1 && i.top <= e.bottom + 1
}

function Is(i, e) {
    let t = i.parentNode;
    return t && /^li$/i.test(t.nodeName) && e.left < i.getBoundingClientRect().left ? t : i
}

function Ps(i, e, t) {
    let {
        node: n,
        offset: r
    } = Vi(e, t), s = -1;
    if (n.nodeType == 1 && !n.firstChild) {
        let o = n.getBoundingClientRect();
        s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1
    }
    return i.docView.posFromDOM(n, r, s)
}

function zs(i, e, t, n) {
    let r = -1;
    for (let s = e, o = !1; s != i.dom;) {
        let l = i.docView.nearestDesc(s, !0);
        if (!l) return null;
        if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM)) {
            let a = l.dom.getBoundingClientRect();
            if (l.node.isBlock && l.parent && (!o && a.left > n.left || a.top > n.top ? r = l.posBefore : (!o && a.right < n.left || a.bottom < n.top) && (r = l.posAfter), o = !0), !l.contentDOM && r < 0 && !l.node.isText) return (l.node.isBlock ? n.top < (a.top + a.bottom) / 2 : n.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter
        }
        s = l.dom.parentNode
    }
    return r > -1 ? r : i.docView.posFromDOM(e, t, -1)
}

function Li(i, e, t) {
    let n = i.childNodes.length;
    if (n && t.top < t.bottom)
        for (let r = Math.max(0, Math.min(n - 1, Math.floor(n * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = r;;) {
            let o = i.childNodes[s];
            if (o.nodeType == 1) {
                let l = o.getClientRects();
                for (let a = 0; a < l.length; a++) {
                    let h = l[a];
                    if (Zt(e, h)) return Li(o, e, h)
                }
            }
            if ((s = (s + 1) % n) == r) break
        }
    return i
}

function Bs(i, e) {
    let t = i.dom.ownerDocument,
        n, r = 0,
        s = Cs(t, e.left, e.top);
    s && ({
        node: n,
        offset: r
    } = s);
    let o = (i.root.elementFromPoint ? i.root : t).elementFromPoint(e.left, e.top),
        l;
    if (!o || !i.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
        let h = i.dom.getBoundingClientRect();
        if (!Zt(e, h) || (o = Li(i.dom, e, h), !o)) return null
    }
    if (P)
        for (let h = o; n && h; h = je(h)) h.draggable && (n = void 0);
    if (o = Is(o, e), n) {
        if ($ && n.nodeType == 1 && (r = Math.min(r, n.childNodes.length), r < n.childNodes.length)) {
            let c = n.childNodes[r],
                f;
            c.nodeName == "IMG" && (f = c.getBoundingClientRect()).right <= e.left && f.bottom > e.top && r++
        }
        let h;
        Qe && r && n.nodeType == 1 && (h = n.childNodes[r - 1]).nodeType == 1 && h.contentEditable == "false" && h.getBoundingClientRect().top >= e.top && r--, n == i.dom && r == n.childNodes.length - 1 && n.lastChild.nodeType == 1 && e.top > n.lastChild.getBoundingClientRect().bottom ? l = i.state.doc.content.size : (r == 0 || n.nodeType != 1 || n.childNodes[r - 1].nodeName != "BR") && (l = zs(i, n, r, e))
    }
    l == null && (l = Ps(i, o, e));
    let a = i.docView.nearestDesc(o, !0);
    return {
        pos: l,
        inside: a ? a.posAtStart - a.border : -1
    }
}

function wn(i) {
    return i.top < i.bottom || i.left < i.right
}

function ie(i, e) {
    let t = i.getClientRects();
    if (t.length) {
        let n = t[e < 0 ? 0 : t.length - 1];
        if (wn(n)) return n
    }
    return Array.prototype.find.call(t, wn) || i.getBoundingClientRect()
}
const Fs = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;

function Ji(i, e, t) {
    let {
        node: n,
        offset: r,
        atom: s
    } = i.docView.domFromPos(e, t < 0 ? -1 : 1), o = Qe || $;
    if (n.nodeType == 3)
        if (o && (Fs.test(n.nodeValue) || (t < 0 ? !r : r == n.nodeValue.length))) {
            let a = ie(Q(n, r, r), t);
            if ($ && r && /\s/.test(n.nodeValue[r - 1]) && r < n.nodeValue.length) {
                let h = ie(Q(n, r - 1, r - 1), -1);
                if (h.top == a.top) {
                    let c = ie(Q(n, r, r + 1), -1);
                    if (c.top != a.top) return ze(c, c.left < h.left)
                }
            }
            return a
        } else {
            let a = r,
                h = r,
                c = t < 0 ? 1 : -1;
            return t < 0 && !r ? (h++, c = -1) : t >= 0 && r == n.nodeValue.length ? (a--, c = 1) : t < 0 ? a-- : h++, ze(ie(Q(n, a, h), c), c < 0)
        }
    if (!i.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
        if (s == null && r && (t < 0 || r == H(n))) {
            let a = n.childNodes[r - 1];
            if (a.nodeType == 1) return Rt(a.getBoundingClientRect(), !1)
        }
        if (s == null && r < H(n)) {
            let a = n.childNodes[r];
            if (a.nodeType == 1) return Rt(a.getBoundingClientRect(), !0)
        }
        return Rt(n.getBoundingClientRect(), t >= 0)
    }
    if (s == null && r && (t < 0 || r == H(n))) {
        let a = n.childNodes[r - 1],
            h = a.nodeType == 3 ? Q(a, H(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
        if (h) return ze(ie(h, 1), !1)
    }
    if (s == null && r < H(n)) {
        let a = n.childNodes[r];
        for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords;) a = a.nextSibling;
        let h = a ? a.nodeType == 3 ? Q(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
        if (h) return ze(ie(h, -1), !0)
    }
    return ze(ie(n.nodeType == 3 ? Q(n) : n, -t), t >= 0)
}

function ze(i, e) {
    if (i.width == 0) return i;
    let t = e ? i.left : i.right;
    return {
        top: i.top,
        bottom: i.bottom,
        left: t,
        right: t
    }
}

function Rt(i, e) {
    if (i.height == 0) return i;
    let t = e ? i.top : i.bottom;
    return {
        top: t,
        bottom: t,
        left: i.left,
        right: i.right
    }
}

function vi(i, e, t) {
    let n = i.state,
        r = i.root.activeElement;
    n != e && i.updateState(e), r != i.dom && i.focus();
    try {
        return t()
    } finally {
        n != e && i.updateState(n), r != i.dom && r && r.focus()
    }
}

function Vs(i, e, t) {
    let n = e.selection,
        r = t == "up" ? n.$from : n.$to;
    return vi(i, e, () => {
        let {
            node: s
        } = i.docView.domFromPos(r.pos, t == "up" ? -1 : 1);
        for (;;) {
            let l = i.docView.nearestDesc(s, !0);
            if (!l) break;
            if (l.node.isBlock) {
                s = l.contentDOM || l.dom;
                break
            }
            s = l.dom.parentNode
        }
        let o = Ji(i, r.pos, 1);
        for (let l = s.firstChild; l; l = l.nextSibling) {
            let a;
            if (l.nodeType == 1) a = l.getClientRects();
            else if (l.nodeType == 3) a = Q(l, 0, l.nodeValue.length).getClientRects();
            else continue;
            for (let h = 0; h < a.length; h++) {
                let c = a[h];
                if (c.bottom > c.top + 1 && (t == "up" ? o.top - c.top > (c.bottom - o.top) * 2 : c.bottom - o.bottom > (o.bottom - c.top) * 2)) return !1
            }
        }
        return !0
    })
}
const Ls = /[\u0590-\u08ac]/;

function Js(i, e, t) {
    let {
        $head: n
    } = e.selection;
    if (!n.parent.isTextblock) return !1;
    let r = n.parentOffset,
        s = !r,
        o = r == n.parent.content.size,
        l = i.domSelection();
    return !Ls.test(n.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : vi(i, e, () => {
        let {
            focusNode: a,
            focusOffset: h,
            anchorNode: c,
            anchorOffset: f
        } = i.domSelectionRange(), d = l.caretBidiLevel;
        l.modify("move", t, "character");
        let p = n.depth ? i.docView.domAfterPos(n.before()) : i.dom,
            {
                focusNode: u,
                focusOffset: m
            } = i.domSelectionRange(),
            g = u && !p.contains(u.nodeType == 1 ? u : u.parentNode) || a == u && h == m;
        try {
            l.collapse(c, f), a && (a != c || h != f) && l.extend && l.extend(a, h)
        } catch {}
        return d != null && (l.caretBidiLevel = d), g
    })
}
let En = null,
    An = null,
    Rn = !1;

function vs(i, e, t) {
    return En == e && An == t ? Rn : (En = e, An = t, Rn = t == "up" || t == "down" ? Vs(i, e, t) : Js(i, e, t))
}
const v = 0,
    In = 1,
    me = 2,
    X = 3;
class _e {
    constructor(e, t, n, r) {
        this.parent = e, this.children = t, this.dom = n, this.contentDOM = r, this.dirty = v, n.pmViewDesc = this
    }
    matchesWidget(e) {
        return !1
    }
    matchesMark(e) {
        return !1
    }
    matchesNode(e, t, n) {
        return !1
    }
    matchesHack(e) {
        return !1
    }
    parseRule() {
        return null
    }
    stopEvent(e) {
        return !1
    }
    get size() {
        let e = 0;
        for (let t = 0; t < this.children.length; t++) e += this.children[t].size;
        return e
    }
    get border() {
        return 0
    }
    destroy() {
        this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
        for (let e = 0; e < this.children.length; e++) this.children[e].destroy()
    }
    posBeforeChild(e) {
        for (let t = 0, n = this.posAtStart;; t++) {
            let r = this.children[t];
            if (r == e) return n;
            n += r.size
        }
    }
    get posBefore() {
        return this.parent.posBeforeChild(this)
    }
    get posAtStart() {
        return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
    }
    get posAfter() {
        return this.posBefore + this.size
    }
    get posAtEnd() {
        return this.posAtStart + this.size - 2 * this.border
    }
    localPosFromDOM(e, t, n) {
        if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
            if (n < 0) {
                let s, o;
                if (e == this.contentDOM) s = e.childNodes[t - 1];
                else {
                    for (; e.parentNode != this.contentDOM;) e = e.parentNode;
                    s = e.previousSibling
                }
                for (; s && !((o = s.pmViewDesc) && o.parent == this);) s = s.previousSibling;
                return s ? this.posBeforeChild(o) + o.size : this.posAtStart
            } else {
                let s, o;
                if (e == this.contentDOM) s = e.childNodes[t];
                else {
                    for (; e.parentNode != this.contentDOM;) e = e.parentNode;
                    s = e.nextSibling
                }
                for (; s && !((o = s.pmViewDesc) && o.parent == this);) s = s.nextSibling;
                return s ? this.posBeforeChild(o) : this.posAtEnd
            }
        let r;
        if (e == this.dom && this.contentDOM) r = t > D(this.contentDOM);
        else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) r = e.compareDocumentPosition(this.contentDOM) & 2;
        else if (this.dom.firstChild) {
            if (t == 0)
                for (let s = e;; s = s.parentNode) {
                    if (s == this.dom) {
                        r = !1;
                        break
                    }
                    if (s.previousSibling) break
                }
            if (r == null && t == e.childNodes.length)
                for (let s = e;; s = s.parentNode) {
                    if (s == this.dom) {
                        r = !0;
                        break
                    }
                    if (s.nextSibling) break
                }
        }
        return r ? ? n > 0 ? this.posAtEnd : this.posAtStart
    }
    nearestDesc(e, t = !1) {
        for (let n = !0, r = e; r; r = r.parentNode) {
            let s = this.getDesc(r),
                o;
            if (s && (!t || s.node))
                if (n && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e)) n = !1;
                else return s
        }
    }
    getDesc(e) {
        let t = e.pmViewDesc;
        for (let n = t; n; n = n.parent)
            if (n == this) return t
    }
    posFromDOM(e, t, n) {
        for (let r = e; r; r = r.parentNode) {
            let s = this.getDesc(r);
            if (s) return s.localPosFromDOM(e, t, n)
        }
        return -1
    }
    descAt(e) {
        for (let t = 0, n = 0; t < this.children.length; t++) {
            let r = this.children[t],
                s = n + r.size;
            if (n == e && s != n) {
                for (; !r.border && r.children.length;) r = r.children[0];
                return r
            }
            if (e < s) return r.descAt(e - n - r.border);
            n = s
        }
    }
    domFromPos(e, t) {
        if (!this.contentDOM) return {
            node: this.dom,
            offset: 0,
            atom: e + 1
        };
        let n = 0,
            r = 0;
        for (let s = 0; n < this.children.length; n++) {
            let o = this.children[n],
                l = s + o.size;
            if (l > e || o instanceof Wi) {
                r = e - s;
                break
            }
            s = l
        }
        if (r) return this.children[n].domFromPos(r - this.children[n].border, t);
        for (let s; n && !(s = this.children[n - 1]).size && s instanceof qi && s.side >= 0; n--);
        if (t <= 0) {
            let s, o = !0;
            for (; s = n ? this.children[n - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); n--, o = !1);
            return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : {
                node: this.contentDOM,
                offset: s ? D(s.dom) + 1 : 0
            }
        } else {
            let s, o = !0;
            for (; s = n < this.children.length ? this.children[n] : null, !(!s || s.dom.parentNode == this.contentDOM); n++, o = !1);
            return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : {
                node: this.contentDOM,
                offset: s ? D(s.dom) : this.contentDOM.childNodes.length
            }
        }
    }
    parseRange(e, t, n = 0) {
        if (this.children.length == 0) return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: 0,
            toOffset: this.contentDOM.childNodes.length
        };
        let r = -1,
            s = -1;
        for (let o = n, l = 0;; l++) {
            let a = this.children[l],
                h = o + a.size;
            if (r == -1 && e <= h) {
                let c = o + a.border;
                if (e >= c && t <= h - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM)) return a.parseRange(e, t, c);
                e = o;
                for (let f = l; f > 0; f--) {
                    let d = this.children[f - 1];
                    if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
                        r = D(d.dom) + 1;
                        break
                    }
                    e -= d.size
                }
                r == -1 && (r = 0)
            }
            if (r > -1 && (h > t || l == this.children.length - 1)) {
                t = h;
                for (let c = l + 1; c < this.children.length; c++) {
                    let f = this.children[c];
                    if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(-1)) {
                        s = D(f.dom);
                        break
                    }
                    t += f.size
                }
                s == -1 && (s = this.contentDOM.childNodes.length);
                break
            }
            o = h
        }
        return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: r,
            toOffset: s
        }
    }
    emptyChildAt(e) {
        if (this.border || !this.contentDOM || !this.children.length) return !1;
        let t = this.children[e < 0 ? 0 : this.children.length - 1];
        return t.size == 0 || t.emptyChildAt(e)
    }
    domAfterPos(e) {
        let {
            node: t,
            offset: n
        } = this.domFromPos(e, 0);
        if (t.nodeType != 1 || n == t.childNodes.length) throw new RangeError("No node after pos " + e);
        return t.childNodes[n]
    }
    setSelection(e, t, n, r = !1) {
        let s = Math.min(e, t),
            o = Math.max(e, t);
        for (let d = 0, p = 0; d < this.children.length; d++) {
            let u = this.children[d],
                m = p + u.size;
            if (s > p && o < m) return u.setSelection(e - p - u.border, t - p - u.border, n, r);
            p = m
        }
        let l = this.domFromPos(e, e ? -1 : 1),
            a = t == e ? l : this.domFromPos(t, t ? -1 : 1),
            h = n.getSelection(),
            c = !1;
        if (($ || P) && e == t) {
            let {
                node: d,
                offset: p
            } = l;
            if (d.nodeType == 3) {
                if (c = !!(p && d.nodeValue[p - 1] == `
`), c && p == d.nodeValue.length)
                    for (let u = d, m; u; u = u.parentNode) {
                        if (m = u.nextSibling) {
                            m.nodeName == "BR" && (l = a = {
                                node: m.parentNode,
                                offset: D(m) + 1
                            });
                            break
                        }
                        let g = u.pmViewDesc;
                        if (g && g.node && g.node.isBlock) break
                    }
            } else {
                let u = d.childNodes[p - 1];
                c = u && (u.nodeName == "BR" || u.contentEditable == "false")
            }
        }
        if ($ && h.focusNode && h.focusNode != a.node && h.focusNode.nodeType == 1) {
            let d = h.focusNode.childNodes[h.focusOffset];
            d && d.contentEditable == "false" && (r = !0)
        }
        if (!(r || c && P) && Ne(l.node, l.offset, h.anchorNode, h.anchorOffset) && Ne(a.node, a.offset, h.focusNode, h.focusOffset)) return;
        let f = !1;
        if ((h.extend || e == t) && !c) {
            h.collapse(l.node, l.offset);
            try {
                e != t && h.extend(a.node, a.offset), f = !0
            } catch {}
        }
        if (!f) {
            if (e > t) {
                let p = l;
                l = a, a = p
            }
            let d = document.createRange();
            d.setEnd(a.node, a.offset), d.setStart(l.node, l.offset), h.removeAllRanges(), h.addRange(d)
        }
    }
    ignoreMutation(e) {
        return !this.contentDOM && e.type != "selection"
    }
    get contentLost() {
        return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
    }
    markDirty(e, t) {
        for (let n = 0, r = 0; r < this.children.length; r++) {
            let s = this.children[r],
                o = n + s.size;
            if (n == o ? e <= o && t >= n : e < o && t > n) {
                let l = n + s.border,
                    a = o - s.border;
                if (e >= l && t <= a) {
                    this.dirty = e == n || t == o ? me : In, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = X : s.markDirty(e - l, t - l);
                    return
                } else s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? me : X
            }
            n = o
        }
        this.dirty = me
    }
    markParentsDirty() {
        let e = 1;
        for (let t = this.parent; t; t = t.parent, e++) {
            let n = e == 1 ? me : In;
            t.dirty < n && (t.dirty = n)
        }
    }
    get domAtom() {
        return !1
    }
    get ignoreForCoords() {
        return !1
    }
    isText(e) {
        return !1
    }
}
class qi extends _e {
    constructor(e, t, n, r) {
        let s, o = t.type.toDOM;
        if (typeof o == "function" && (o = o(n, () => {
                if (!s) return r;
                if (s.parent) return s.parent.posBeforeChild(s)
            })), !t.type.spec.raw) {
            if (o.nodeType != 1) {
                let l = document.createElement("span");
                l.appendChild(o), o = l
            }
            o.contentEditable = "false", o.classList.add("ProseMirror-widget")
        }
        super(e, [], o, null), this.widget = t, this.widget = t, s = this
    }
    matchesWidget(e) {
        return this.dirty == v && e.type.eq(this.widget.type)
    }
    parseRule() {
        return {
            ignore: !0
        }
    }
    stopEvent(e) {
        let t = this.widget.spec.stopEvent;
        return t ? t(e) : !1
    }
    ignoreMutation(e) {
        return e.type != "selection" || this.widget.spec.ignoreSelection
    }
    destroy() {
        this.widget.type.destroy(this.dom), super.destroy()
    }
    get domAtom() {
        return !0
    }
    get side() {
        return this.widget.type.side
    }
}
class qs extends _e {
    constructor(e, t, n, r) {
        super(e, [], t, null), this.textDOM = n, this.text = r
    }
    get size() {
        return this.text.length
    }
    localPosFromDOM(e, t) {
        return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t
    }
    domFromPos(e) {
        return {
            node: this.textDOM,
            offset: e
        }
    }
    ignoreMutation(e) {
        return e.type === "characterData" && e.target.nodeValue == e.oldValue
    }
}
class Ce extends _e {
    constructor(e, t, n, r) {
        super(e, [], n, r), this.mark = t
    }
    static create(e, t, n, r) {
        let s = r.nodeViews[t.type.name],
            o = s && s(t, r, n);
        return (!o || !o.dom) && (o = Pe.renderSpec(document, t.type.spec.toDOM(t, n), null, t.attrs)), new Ce(e, t, o.dom, o.contentDOM || o.dom)
    }
    parseRule() {
        return this.dirty & X || this.mark.type.spec.reparseInView ? null : {
            mark: this.mark.type.name,
            attrs: this.mark.attrs,
            contentElement: this.contentDOM
        }
    }
    matchesMark(e) {
        return this.dirty != X && this.mark.eq(e)
    }
    markDirty(e, t) {
        if (super.markDirty(e, t), this.dirty != v) {
            let n = this.parent;
            for (; !n.node;) n = n.parent;
            n.dirty < this.dirty && (n.dirty = this.dirty), this.dirty = v
        }
    }
    slice(e, t, n) {
        let r = Ce.create(this.parent, this.mark, !0, n),
            s = this.children,
            o = this.size;
        t < o && (s = $t(s, t, o, n)), e > 0 && (s = $t(s, 0, e, n));
        for (let l = 0; l < s.length; l++) s[l].parent = r;
        return r.children = s, r
    }
}
class ce extends _e {
    constructor(e, t, n, r, s, o, l, a, h) {
        super(e, [], s, o), this.node = t, this.outerDeco = n, this.innerDeco = r, this.nodeDOM = l
    }
    static create(e, t, n, r, s, o) {
        let l = s.nodeViews[t.type.name],
            a, h = l && l(t, s, () => {
                if (!a) return o;
                if (a.parent) return a.parent.posBeforeChild(a)
            }, n, r),
            c = h && h.dom,
            f = h && h.contentDOM;
        if (t.isText) {
            if (!c) c = document.createTextNode(t.text);
            else if (c.nodeType != 3) throw new RangeError("Text must be rendered as a DOM text node")
        } else c || ({
            dom: c,
            contentDOM: f
        } = Pe.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
        !f && !t.isText && c.nodeName != "BR" && (c.hasAttribute("contenteditable") || (c.contentEditable = "false"), t.type.spec.draggable && (c.draggable = !0));
        let d = c;
        return c = Hi(c, n, t), h ? a = new Ws(e, t, n, r, c, f || null, d, h, s, o + 1) : t.isText ? new St(e, t, n, r, c, d, s) : new ce(e, t, n, r, c, f || null, d, s, o + 1)
    }
    parseRule() {
        if (this.node.type.spec.reparseInView) return null;
        let e = {
            node: this.node.type.name,
            attrs: this.node.attrs
        };
        if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM) e.getContent = () => this.node.content;
        else if (!this.contentLost) e.contentElement = this.contentDOM;
        else {
            for (let t = this.children.length - 1; t >= 0; t--) {
                let n = this.children[t];
                if (this.dom.contains(n.dom.parentNode)) {
                    e.contentElement = n.dom.parentNode;
                    break
                }
            }
            e.contentElement || (e.getContent = () => y.empty)
        }
        return e
    }
    matchesNode(e, t, n) {
        return this.dirty == v && e.eq(this.node) && Kt(t, this.outerDeco) && n.eq(this.innerDeco)
    }
    get size() {
        return this.node.nodeSize
    }
    get border() {
        return this.node.isLeaf ? 0 : 1
    }
    updateChildren(e, t) {
        let n = this.node.inlineContent,
            r = t,
            s = e.composing ? this.localCompositionInfo(e, t) : null,
            o = s && s.pos > -1 ? s : null,
            l = s && s.pos < 0,
            a = new $s(this, o && o.node, e);
        js(this.node, this.innerDeco, (h, c, f) => {
            h.spec.marks ? a.syncToMarks(h.spec.marks, n, e) : h.type.side >= 0 && !f && a.syncToMarks(c == this.node.childCount ? N.none : this.node.child(c).marks, n, e), a.placeWidget(h, e, r)
        }, (h, c, f, d) => {
            a.syncToMarks(h.marks, n, e);
            let p;
            a.findNodeMatch(h, c, f, d) || l && e.state.selection.from > r && e.state.selection.to < r + h.nodeSize && (p = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(h, c, f, p, e) || a.updateNextNode(h, c, f, e, d, r) || a.addNode(h, c, f, e, r), r += h.nodeSize
        }), a.syncToMarks([], n, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == me) && (o && this.protectLocalComposition(e, o), Ki(this.contentDOM, this.children, e), Ie && Ys(this.dom))
    }
    localCompositionInfo(e, t) {
        let {
            from: n,
            to: r
        } = e.state.selection;
        if (!(e.state.selection instanceof O) || n < t || r > t + this.node.content.size) return null;
        let s = e.input.compositionNode;
        if (!s || !this.dom.contains(s.parentNode)) return null;
        if (this.node.inlineContent) {
            let o = s.nodeValue,
                l = Gs(this.node.content, o, n - t, r - t);
            return l < 0 ? null : {
                node: s,
                pos: l,
                text: o
            }
        } else return {
            node: s,
            pos: -1,
            text: ""
        }
    }
    protectLocalComposition(e, {
        node: t,
        pos: n,
        text: r
    }) {
        if (this.getDesc(t)) return;
        let s = t;
        for (; s.parentNode != this.contentDOM; s = s.parentNode) {
            for (; s.previousSibling;) s.parentNode.removeChild(s.previousSibling);
            for (; s.nextSibling;) s.parentNode.removeChild(s.nextSibling);
            s.pmViewDesc && (s.pmViewDesc = void 0)
        }
        let o = new qs(this, s, t, r);
        e.input.compositionNodes.push(o), this.children = $t(this.children, n, n + r.length, e, o)
    }
    update(e, t, n, r) {
        return this.dirty == X || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, n, r), !0)
    }
    updateInner(e, t, n, r) {
        this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = v
    }
    updateOuterDeco(e) {
        if (Kt(e, this.outerDeco)) return;
        let t = this.nodeDOM.nodeType != 1,
            n = this.dom;
        this.dom = $i(this.dom, this.nodeDOM, Wt(this.outerDeco, this.node, t), Wt(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e
    }
    selectNode() {
        this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0)
    }
    deselectNode() {
        this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"))
    }
    get domAtom() {
        return this.node.isAtom
    }
}

function Pn(i, e, t, n, r) {
    Hi(n, e, i);
    let s = new ce(void 0, i, e, t, n, n, n, r, 0);
    return s.contentDOM && s.updateChildren(r, 0), s
}
class St extends ce {
    constructor(e, t, n, r, s, o, l) {
        super(e, t, n, r, s, null, o, l, 0)
    }
    parseRule() {
        let e = this.nodeDOM.parentNode;
        for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
        return {
            skip: e || !0
        }
    }
    update(e, t, n, r) {
        return this.dirty == X || this.dirty != v && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != v || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = e, this.dirty = v, !0)
    }
    inParent() {
        let e = this.parent.contentDOM;
        for (let t = this.nodeDOM; t; t = t.parentNode)
            if (t == e) return !0;
        return !1
    }
    domFromPos(e) {
        return {
            node: this.nodeDOM,
            offset: e
        }
    }
    localPosFromDOM(e, t, n) {
        return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n)
    }
    ignoreMutation(e) {
        return e.type != "characterData" && e.type != "selection"
    }
    slice(e, t, n) {
        let r = this.node.cut(e, t),
            s = document.createTextNode(r.text);
        return new St(this.parent, r, this.outerDeco, this.innerDeco, s, s, n)
    }
    markDirty(e, t) {
        super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = X)
    }
    get domAtom() {
        return !1
    }
    isText(e) {
        return this.node.text == e
    }
}
class Wi extends _e {
    parseRule() {
        return {
            ignore: !0
        }
    }
    matchesHack(e) {
        return this.dirty == v && this.dom.nodeName == e
    }
    get domAtom() {
        return !0
    }
    get ignoreForCoords() {
        return this.dom.nodeName == "IMG"
    }
}
class Ws extends ce {
    constructor(e, t, n, r, s, o, l, a, h, c) {
        super(e, t, n, r, s, o, l, h, c), this.spec = a
    }
    update(e, t, n, r) {
        if (this.dirty == X) return !1;
        if (this.spec.update) {
            let s = this.spec.update(e, t, n);
            return s && this.updateInner(e, t, n, r), s
        } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, n, r)
    }
    selectNode() {
        this.spec.selectNode ? this.spec.selectNode() : super.selectNode()
    }
    deselectNode() {
        this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode()
    }
    setSelection(e, t, n, r) {
        this.spec.setSelection ? this.spec.setSelection(e, t, n) : super.setSelection(e, t, n, r)
    }
    destroy() {
        this.spec.destroy && this.spec.destroy(), super.destroy()
    }
    stopEvent(e) {
        return this.spec.stopEvent ? this.spec.stopEvent(e) : !1
    }
    ignoreMutation(e) {
        return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e)
    }
}

function Ki(i, e, t) {
    let n = i.firstChild,
        r = !1;
    for (let s = 0; s < e.length; s++) {
        let o = e[s],
            l = o.dom;
        if (l.parentNode == i) {
            for (; l != n;) n = zn(n), r = !0;
            n = n.nextSibling
        } else r = !0, i.insertBefore(l, n);
        if (o instanceof Ce) {
            let a = n ? n.previousSibling : i.lastChild;
            Ki(o.contentDOM, o.children, t), n = a ? a.nextSibling : i.firstChild
        }
    }
    for (; n;) n = zn(n), r = !0;
    r && t.trackWrites == i && (t.trackWrites = null)
}
const We = function(i) {
    i && (this.nodeName = i)
};
We.prototype = Object.create(null);
const ge = [new We];

function Wt(i, e, t) {
    if (i.length == 0) return ge;
    let n = t ? ge[0] : new We,
        r = [n];
    for (let s = 0; s < i.length; s++) {
        let o = i[s].type.attrs;
        if (o) {
            o.nodeName && r.push(n = new We(o.nodeName));
            for (let l in o) {
                let a = o[l];
                a != null && (t && r.length == 1 && r.push(n = new We(e.isInline ? "span" : "div")), l == "class" ? n.class = (n.class ? n.class + " " : "") + a : l == "style" ? n.style = (n.style ? n.style + ";" : "") + a : l != "nodeName" && (n[l] = a))
            }
        }
    }
    return r
}

function $i(i, e, t, n) {
    if (t == ge && n == ge) return e;
    let r = e;
    for (let s = 0; s < n.length; s++) {
        let o = n[s],
            l = t[s];
        if (s) {
            let a;
            l && l.nodeName == o.nodeName && r != i && (a = r.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(r), l = ge[0]), r = a
        }
        Ks(r, l || ge[0], o)
    }
    return r
}

function Ks(i, e, t) {
    for (let n in e) n != "class" && n != "style" && n != "nodeName" && !(n in t) && i.removeAttribute(n);
    for (let n in t) n != "class" && n != "style" && n != "nodeName" && t[n] != e[n] && i.setAttribute(n, t[n]);
    if (e.class != t.class) {
        let n = e.class ? e.class.split(" ").filter(Boolean) : [],
            r = t.class ? t.class.split(" ").filter(Boolean) : [];
        for (let s = 0; s < n.length; s++) r.indexOf(n[s]) == -1 && i.classList.remove(n[s]);
        for (let s = 0; s < r.length; s++) n.indexOf(r[s]) == -1 && i.classList.add(r[s]);
        i.classList.length == 0 && i.removeAttribute("class")
    }
    if (e.style != t.style) {
        if (e.style) {
            let n = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
                r;
            for (; r = n.exec(e.style);) i.style.removeProperty(r[1])
        }
        t.style && (i.style.cssText += t.style)
    }
}

function Hi(i, e, t) {
    return $i(i, i, ge, Wt(e, t, i.nodeType != 1))
}

function Kt(i, e) {
    if (i.length != e.length) return !1;
    for (let t = 0; t < i.length; t++)
        if (!i[t].type.eq(e[t].type)) return !1;
    return !0
}

function zn(i) {
    let e = i.nextSibling;
    return i.parentNode.removeChild(i), e
}
class $s {
    constructor(e, t, n) {
        this.lock = t, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Hs(e.node.content, e)
    }
    destroyBetween(e, t) {
        if (e != t) {
            for (let n = e; n < t; n++) this.top.children[n].destroy();
            this.top.children.splice(e, t - e), this.changed = !0
        }
    }
    destroyRest() {
        this.destroyBetween(this.index, this.top.children.length)
    }
    syncToMarks(e, t, n) {
        let r = 0,
            s = this.stack.length >> 1,
            o = Math.min(s, e.length);
        for (; r < o && (r == s - 1 ? this.top : this.stack[r + 1 << 1]).matchesMark(e[r]) && e[r].type.spec.spanning !== !1;) r++;
        for (; r < s;) this.destroyRest(), this.top.dirty = v, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
        for (; s < e.length;) {
            this.stack.push(this.top, this.index + 1);
            let l = -1;
            for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
                let h = this.top.children[a];
                if (h.matchesMark(e[s]) && !this.isLocked(h.dom)) {
                    l = a;
                    break
                }
            }
            if (l > -1) l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
            else {
                let a = Ce.create(this.top, e[s], t, n);
                this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0
            }
            this.index = 0, s++
        }
    }
    findNodeMatch(e, t, n, r) {
        let s = -1,
            o;
        if (r >= this.preMatch.index && (o = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, n)) s = this.top.children.indexOf(o, this.index);
        else
            for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
                let h = this.top.children[l];
                if (h.matchesNode(e, t, n) && !this.preMatch.matched.has(h)) {
                    s = l;
                    break
                }
            }
        return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0)
    }
    updateNodeAt(e, t, n, r, s) {
        let o = this.top.children[r];
        return o.dirty == X && o.dom == o.contentDOM && (o.dirty = me), o.update(e, t, n, s) ? (this.destroyBetween(this.index, r), this.index++, !0) : !1
    }
    findIndexWithChild(e) {
        for (;;) {
            let t = e.parentNode;
            if (!t) return -1;
            if (t == this.top.contentDOM) {
                let n = e.pmViewDesc;
                if (n) {
                    for (let r = this.index; r < this.top.children.length; r++)
                        if (this.top.children[r] == n) return r
                }
                return -1
            }
            e = t
        }
    }
    updateNextNode(e, t, n, r, s, o) {
        for (let l = this.index; l < this.top.children.length; l++) {
            let a = this.top.children[l];
            if (a instanceof ce) {
                let h = this.preMatch.matched.get(a);
                if (h != null && h != s) return !1;
                let c = a.dom,
                    f, d = this.isLocked(c) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != X && Kt(t, a.outerDeco));
                if (!d && a.update(e, t, n, r)) return this.destroyBetween(this.index, l), a.dom != c && (this.changed = !0), this.index++, !0;
                if (!d && (f = this.recreateWrapper(a, e, t, n, r, o))) return this.top.children[this.index] = f, f.contentDOM && (f.dirty = me, f.updateChildren(r, o + 1), f.dirty = v), this.changed = !0, this.index++, !0;
                break
            }
        }
        return !1
    }
    recreateWrapper(e, t, n, r, s, o) {
        if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content)) return null;
        let l = ce.create(this.top, t, n, r, s, o);
        if (l.contentDOM) {
            l.children = e.children, e.children = [];
            for (let a of l.children) a.parent = l
        }
        return e.destroy(), l
    }
    addNode(e, t, n, r, s) {
        let o = ce.create(this.top, e, t, n, r, s);
        o.contentDOM && o.updateChildren(r, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0
    }
    placeWidget(e, t, n) {
        let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
        if (r && r.matchesWidget(e) && (e == r.widget || !r.widget.type.toDOM.parentNode)) this.index++;
        else {
            let s = new qi(this.top, e, t, n);
            this.top.children.splice(this.index++, 0, s), this.changed = !0
        }
    }
    addTextblockHacks() {
        let e = this.top.children[this.index - 1],
            t = this.top;
        for (; e instanceof Ce;) t = e, e = t.children[t.children.length - 1];
        (!e || !(e instanceof St) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((P || A) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top))
    }
    addHackNode(e, t) {
        if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
        else {
            let n = document.createElement(e);
            e == "IMG" && (n.className = "ProseMirror-separator", n.alt = ""), e == "BR" && (n.className = "ProseMirror-trailingBreak");
            let r = new Wi(this.top, [], n, null);
            t != this.top ? t.children.push(r) : t.children.splice(this.index++, 0, r), this.changed = !0
        }
    }
    isLocked(e) {
        return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode))
    }
}

function Hs(i, e) {
    let t = e,
        n = t.children.length,
        r = i.childCount,
        s = new Map,
        o = [];
    e: for (; r > 0;) {
        let l;
        for (;;)
            if (n) {
                let h = t.children[n - 1];
                if (h instanceof Ce) t = h, n = h.children.length;
                else {
                    l = h, n--;
                    break
                }
            } else {
                if (t == e) break e;
                n = t.parent.children.indexOf(t), t = t.parent
            }
        let a = l.node;
        if (a) {
            if (a != i.child(r - 1)) break;
            --r, s.set(l, r), o.push(l)
        }
    }
    return {
        index: r,
        matched: s,
        matches: o.reverse()
    }
}

function Us(i, e) {
    return i.type.side - e.type.side
}

function js(i, e, t, n) {
    let r = e.locals(i),
        s = 0;
    if (r.length == 0) {
        for (let h = 0; h < i.childCount; h++) {
            let c = i.child(h);
            n(c, r, e.forChild(s, c), h), s += c.nodeSize
        }
        return
    }
    let o = 0,
        l = [],
        a = null;
    for (let h = 0;;) {
        let c, f;
        for (; o < r.length && r[o].to == s;) {
            let g = r[o++];
            g.widget && (c ? (f || (f = [c])).push(g) : c = g)
        }
        if (c)
            if (f) {
                f.sort(Us);
                for (let g = 0; g < f.length; g++) t(f[g], h, !!a)
            } else t(c, h, !!a);
        let d, p;
        if (a) p = -1, d = a, a = null;
        else if (h < i.childCount) p = h, d = i.child(h++);
        else break;
        for (let g = 0; g < l.length; g++) l[g].to <= s && l.splice(g--, 1);
        for (; o < r.length && r[o].from <= s && r[o].to > s;) l.push(r[o++]);
        let u = s + d.nodeSize;
        if (d.isText) {
            let g = u;
            o < r.length && r[o].from < g && (g = r[o].from);
            for (let x = 0; x < l.length; x++) l[x].to < g && (g = l[x].to);
            g < u && (a = d.cut(g - s), d = d.cut(0, g - s), u = g, p = -1)
        } else
            for (; o < r.length && r[o].to < u;) o++;
        let m = d.isInline && !d.isLeaf ? l.filter(g => !g.inline) : l.slice();
        n(d, m, e.forChild(s, d), p), s = u
    }
}

function Ys(i) {
    if (i.nodeName == "UL" || i.nodeName == "OL") {
        let e = i.style.cssText;
        i.style.cssText = e + "; list-style: square !important", window.getComputedStyle(i).listStyle, i.style.cssText = e
    }
}

function Gs(i, e, t, n) {
    for (let r = 0, s = 0; r < i.childCount && s <= n;) {
        let o = i.child(r++),
            l = s;
        if (s += o.nodeSize, !o.isText) continue;
        let a = o.text;
        for (; r < i.childCount;) {
            let h = i.child(r++);
            if (s += h.nodeSize, !h.isText) break;
            a += h.text
        }
        if (s >= t) {
            if (s >= n && a.slice(n - e.length - l, n - l) == e) return n - e.length;
            let h = l < n ? a.lastIndexOf(e, n - l - 1) : -1;
            if (h >= 0 && h + e.length + l >= t) return l + h;
            if (t == n && a.length >= n + e.length - l && a.slice(n - l, n - l + e.length) == e) return n
        }
    }
    return -1
}

function $t(i, e, t, n, r) {
    let s = [];
    for (let o = 0, l = 0; o < i.length; o++) {
        let a = i[o],
            h = l,
            c = l += a.size;
        h >= t || c <= e ? s.push(a) : (h < e && s.push(a.slice(0, e - h, n)), r && (s.push(r), r = void 0), c > t && s.push(a.slice(t - h, a.size, n)))
    }
    return s
}

function Qt(i, e = null) {
    let t = i.domSelectionRange(),
        n = i.state.doc;
    if (!t.focusNode) return null;
    let r = i.docView.nearestDesc(t.focusNode),
        s = r && r.size == 0,
        o = i.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
    if (o < 0) return null;
    let l = n.resolve(o),
        a, h;
    if (xt(t)) {
        for (a = l; r && !r.node;) r = r.parent;
        let c = r.node;
        if (r && c.isAtom && S.isSelectable(c) && r.parent && !(c.isInline && bs(t.focusNode, t.focusOffset, r.dom))) {
            let f = r.posBefore;
            h = new S(o == f ? l : n.resolve(f))
        }
    } else {
        let c = i.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
        if (c < 0) return null;
        a = n.resolve(c)
    }
    if (!h) {
        let c = e == "pointer" || i.state.selection.head < l.pos && !s ? 1 : -1;
        h = _t(i, a, l, c)
    }
    return h
}

function Ui(i) {
    return i.editable ? i.hasFocus() : Yi(i) && document.activeElement && document.activeElement.contains(i.dom)
}

function _(i, e = !1) {
    let t = i.state.selection;
    if (ji(i, t), !!Ui(i)) {
        if (!e && i.input.mouseDown && i.input.mouseDown.allowDefault && A) {
            let n = i.domSelectionRange(),
                r = i.domObserver.currentSelection;
            if (n.anchorNode && r.anchorNode && Ne(n.anchorNode, n.anchorOffset, r.anchorNode, r.anchorOffset)) {
                i.input.mouseDown.delayedSelectionSync = !0, i.domObserver.setCurSelection();
                return
            }
        }
        if (i.domObserver.disconnectSelection(), i.cursorWrapper) Zs(i);
        else {
            let {
                anchor: n,
                head: r
            } = t, s, o;
            Bn && !(t instanceof O) && (t.$from.parent.inlineContent || (s = Fn(i, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Fn(i, t.to))), i.docView.setSelection(n, r, i.root, e), Bn && (s && Vn(s), o && Vn(o)), t.visible ? i.dom.classList.remove("ProseMirror-hideselection") : (i.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Xs(i))
        }
        i.domObserver.setCurSelection(), i.domObserver.connectSelection()
    }
}
const Bn = P || A && zi < 63;

function Fn(i, e) {
    let {
        node: t,
        offset: n
    } = i.docView.domFromPos(e, 0), r = n < t.childNodes.length ? t.childNodes[n] : null, s = n ? t.childNodes[n - 1] : null;
    if (P && r && r.contentEditable == "false") return It(r);
    if ((!r || r.contentEditable == "false") && (!s || s.contentEditable == "false")) {
        if (r) return It(r);
        if (s) return It(s)
    }
}

function It(i) {
    return i.contentEditable = "true", P && i.draggable && (i.draggable = !1, i.wasDraggable = !0), i
}

function Vn(i) {
    i.contentEditable = "false", i.wasDraggable && (i.draggable = !0, i.wasDraggable = null)
}

function Xs(i) {
    let e = i.dom.ownerDocument;
    e.removeEventListener("selectionchange", i.input.hideSelectionGuard);
    let t = i.domSelectionRange(),
        n = t.anchorNode,
        r = t.anchorOffset;
    e.addEventListener("selectionchange", i.input.hideSelectionGuard = () => {
        (t.anchorNode != n || t.anchorOffset != r) && (e.removeEventListener("selectionchange", i.input.hideSelectionGuard), setTimeout(() => {
            (!Ui(i) || i.state.selection.visible) && i.dom.classList.remove("ProseMirror-hideselection")
        }, 20))
    })
}

function Zs(i) {
    let e = i.domSelection(),
        t = document.createRange(),
        n = i.cursorWrapper.dom,
        r = n.nodeName == "IMG";
    r ? t.setEnd(n.parentNode, D(n) + 1) : t.setEnd(n, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !r && !i.state.selection.visible && F && he <= 11 && (n.disabled = !0, n.disabled = !1)
}

function ji(i, e) {
    if (e instanceof S) {
        let t = i.docView.descAt(e.from);
        t != i.lastSelectedViewDesc && (Ln(i), t && t.selectNode(), i.lastSelectedViewDesc = t)
    } else Ln(i)
}

function Ln(i) {
    i.lastSelectedViewDesc && (i.lastSelectedViewDesc.parent && i.lastSelectedViewDesc.deselectNode(), i.lastSelectedViewDesc = void 0)
}

function _t(i, e, t, n) {
    return i.someProp("createSelectionBetween", r => r(i, e, t)) || O.between(e, t, n)
}

function Jn(i) {
    return i.editable && !i.hasFocus() ? !1 : Yi(i)
}

function Yi(i) {
    let e = i.domSelectionRange();
    if (!e.anchorNode) return !1;
    try {
        return i.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (i.editable || i.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode))
    } catch {
        return !1
    }
}

function Qs(i) {
    let e = i.docView.domFromPos(i.state.selection.anchor, 0),
        t = i.domSelectionRange();
    return Ne(e.node, e.offset, t.anchorNode, t.anchorOffset)
}

function Ht(i, e) {
    let {
        $anchor: t,
        $head: n
    } = i.selection, r = e > 0 ? t.max(n) : t.min(n), s = r.parent.inlineContent ? r.depth ? i.doc.resolve(e > 0 ? r.after() : r.before()) : null : r;
    return s && C.findFrom(s, e)
}

function re(i, e) {
    return i.dispatch(i.state.tr.setSelection(e).scrollIntoView()), !0
}

function vn(i, e, t) {
    let n = i.state.selection;
    if (n instanceof O)
        if (t.indexOf("s") > -1) {
            let {
                $head: r
            } = n, s = r.textOffset ? null : e < 0 ? r.nodeBefore : r.nodeAfter;
            if (!s || s.isText || !s.isLeaf) return !1;
            let o = i.state.doc.resolve(r.pos + s.nodeSize * (e < 0 ? -1 : 1));
            return re(i, new O(n.$anchor, o))
        } else if (n.empty) {
        if (i.endOfTextblock(e > 0 ? "forward" : "backward")) {
            let r = Ht(i.state, e);
            return r && r instanceof S ? re(i, r) : !1
        } else if (!(J && t.indexOf("m") > -1)) {
            let r = n.$head,
                s = r.textOffset ? null : e < 0 ? r.nodeBefore : r.nodeAfter,
                o;
            if (!s || s.isText) return !1;
            let l = e < 0 ? r.pos - s.nodeSize : r.pos;
            return s.isAtom || (o = i.docView.descAt(l)) && !o.contentDOM ? S.isSelectable(s) ? re(i, new S(e < 0 ? i.state.doc.resolve(r.pos - s.nodeSize) : r)) : Qe ? re(i, new O(i.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1
        }
    } else return !1;
    else {
        if (n instanceof S && n.node.isInline) return re(i, new O(e > 0 ? n.$to : n.$from)); {
            let r = Ht(i.state, e);
            return r ? re(i, r) : !1
        }
    }
}

function ut(i) {
    return i.nodeType == 3 ? i.nodeValue.length : i.childNodes.length
}

function Ke(i, e) {
    let t = i.pmViewDesc;
    return t && t.size == 0 && (e < 0 || i.nextSibling || i.nodeName != "BR")
}

function Me(i, e) {
    return e < 0 ? _s(i) : eo(i)
}

function _s(i) {
    let e = i.domSelectionRange(),
        t = e.focusNode,
        n = e.focusOffset;
    if (!t) return;
    let r, s, o = !1;
    for ($ && t.nodeType == 1 && n < ut(t) && Ke(t.childNodes[n], -1) && (o = !0);;)
        if (n > 0) {
            if (t.nodeType != 1) break; {
                let l = t.childNodes[n - 1];
                if (Ke(l, -1)) r = t, s = --n;
                else if (l.nodeType == 3) t = l, n = t.nodeValue.length;
                else break
            }
        } else {
            if (Gi(t)) break; {
                let l = t.previousSibling;
                for (; l && Ke(l, -1);) r = t.parentNode, s = D(l), l = l.previousSibling;
                if (l) t = l, n = ut(t);
                else {
                    if (t = t.parentNode, t == i.dom) break;
                    n = 0
                }
            }
        }
    o ? Ut(i, t, n) : r && Ut(i, r, s)
}

function eo(i) {
    let e = i.domSelectionRange(),
        t = e.focusNode,
        n = e.focusOffset;
    if (!t) return;
    let r = ut(t),
        s, o;
    for (;;)
        if (n < r) {
            if (t.nodeType != 1) break;
            let l = t.childNodes[n];
            if (Ke(l, 1)) s = t, o = ++n;
            else break
        } else {
            if (Gi(t)) break; {
                let l = t.nextSibling;
                for (; l && Ke(l, 1);) s = l.parentNode, o = D(l) + 1, l = l.nextSibling;
                if (l) t = l, n = 0, r = ut(t);
                else {
                    if (t = t.parentNode, t == i.dom) break;
                    n = r = 0
                }
            }
        }
    s && Ut(i, s, o)
}

function Gi(i) {
    let e = i.pmViewDesc;
    return e && e.node && e.node.isBlock
}

function to(i, e) {
    for (; i && e == i.childNodes.length && !Ze(i);) e = D(i) + 1, i = i.parentNode;
    for (; i && e < i.childNodes.length;) {
        let t = i.childNodes[e];
        if (t.nodeType == 3) return t;
        if (t.nodeType == 1 && t.contentEditable == "false") break;
        i = t, e = 0
    }
}

function no(i, e) {
    for (; i && !e && !Ze(i);) e = D(i), i = i.parentNode;
    for (; i && e;) {
        let t = i.childNodes[e - 1];
        if (t.nodeType == 3) return t;
        if (t.nodeType == 1 && t.contentEditable == "false") break;
        i = t, e = i.childNodes.length
    }
}

function Ut(i, e, t) {
    if (e.nodeType != 3) {
        let s, o;
        (o = to(e, t)) ? (e = o, t = 0) : (s = no(e, t)) && (e = s, t = s.nodeValue.length)
    }
    let n = i.domSelection();
    if (xt(n)) {
        let s = document.createRange();
        s.setEnd(e, t), s.setStart(e, t), n.removeAllRanges(), n.addRange(s)
    } else n.extend && n.extend(e, t);
    i.domObserver.setCurSelection();
    let {
        state: r
    } = i;
    setTimeout(() => {
        i.state == r && _(i)
    }, 50)
}

function qn(i, e) {
    let t = i.state.doc.resolve(e);
    if (!(A || Os) && t.parent.inlineContent) {
        let r = i.coordsAtPos(e);
        if (e > t.start()) {
            let s = i.coordsAtPos(e - 1),
                o = (s.top + s.bottom) / 2;
            if (o > r.top && o < r.bottom && Math.abs(s.left - r.left) > 1) return s.left < r.left ? "ltr" : "rtl"
        }
        if (e < t.end()) {
            let s = i.coordsAtPos(e + 1),
                o = (s.top + s.bottom) / 2;
            if (o > r.top && o < r.bottom && Math.abs(s.left - r.left) > 1) return s.left > r.left ? "ltr" : "rtl"
        }
    }
    return getComputedStyle(i.dom).direction == "rtl" ? "rtl" : "ltr"
}

function Wn(i, e, t) {
    let n = i.state.selection;
    if (n instanceof O && !n.empty || t.indexOf("s") > -1 || J && t.indexOf("m") > -1) return !1;
    let {
        $from: r,
        $to: s
    } = n;
    if (!r.parent.inlineContent || i.endOfTextblock(e < 0 ? "up" : "down")) {
        let o = Ht(i.state, e);
        if (o && o instanceof S) return re(i, o)
    }
    if (!r.parent.inlineContent) {
        let o = e < 0 ? r : s,
            l = n instanceof Y ? C.near(o, e) : C.findFrom(o, e);
        return l ? re(i, l) : !1
    }
    return !1
}

function Kn(i, e) {
    if (!(i.state.selection instanceof O)) return !0;
    let {
        $head: t,
        $anchor: n,
        empty: r
    } = i.state.selection;
    if (!t.sameParent(n)) return !0;
    if (!r) return !1;
    if (i.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
    let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
    if (s && !s.isText) {
        let o = i.state.tr;
        return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), i.dispatch(o), !0
    }
    return !1
}

function $n(i, e, t) {
    i.domObserver.stop(), e.contentEditable = t, i.domObserver.start()
}

function io(i) {
    if (!P || i.state.selection.$head.parentOffset > 0) return !1;
    let {
        focusNode: e,
        focusOffset: t
    } = i.domSelectionRange();
    if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
        let n = e.firstChild;
        $n(i, n, "true"), setTimeout(() => $n(i, n, "false"), 20)
    }
    return !1
}

function ro(i) {
    let e = "";
    return i.ctrlKey && (e += "c"), i.metaKey && (e += "m"), i.altKey && (e += "a"), i.shiftKey && (e += "s"), e
}

function so(i, e) {
    let t = e.keyCode,
        n = ro(e);
    if (t == 8 || J && t == 72 && n == "c") return Kn(i, -1) || Me(i, -1);
    if (t == 46 && !e.shiftKey || J && t == 68 && n == "c") return Kn(i, 1) || Me(i, 1);
    if (t == 13 || t == 27) return !0;
    if (t == 37 || J && t == 66 && n == "c") {
        let r = t == 37 ? qn(i, i.state.selection.from) == "ltr" ? -1 : 1 : -1;
        return vn(i, r, n) || Me(i, r)
    } else if (t == 39 || J && t == 70 && n == "c") {
        let r = t == 39 ? qn(i, i.state.selection.from) == "ltr" ? 1 : -1 : 1;
        return vn(i, r, n) || Me(i, r)
    } else {
        if (t == 38 || J && t == 80 && n == "c") return Wn(i, -1, n) || Me(i, -1);
        if (t == 40 || J && t == 78 && n == "c") return io(i) || Wn(i, 1, n) || Me(i, 1);
        if (n == (J ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90)) return !0
    }
    return !1
}

function Xi(i, e) {
    i.someProp("transformCopied", p => {
        e = p(e, i)
    });
    let t = [],
        {
            content: n,
            openStart: r,
            openEnd: s
        } = e;
    for (; r > 1 && s > 1 && n.childCount == 1 && n.firstChild.childCount == 1;) {
        r--, s--;
        let p = n.firstChild;
        t.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null), n = p.content
    }
    let o = i.someProp("clipboardSerializer") || Pe.fromSchema(i.state.schema),
        l = nr(),
        a = l.createElement("div");
    a.appendChild(o.serializeFragment(n, {
        document: l
    }));
    let h = a.firstChild,
        c, f = 0;
    for (; h && h.nodeType == 1 && (c = tr[h.nodeName.toLowerCase()]);) {
        for (let p = c.length - 1; p >= 0; p--) {
            let u = l.createElement(c[p]);
            for (; a.firstChild;) u.appendChild(a.firstChild);
            a.appendChild(u), f++
        }
        h = a.firstChild
    }
    h && h.nodeType == 1 && h.setAttribute("data-pm-slice", `${r} ${s}${f?` -${f}`:""} ${JSON.stringify(t)}`);
    let d = i.someProp("clipboardTextSerializer", p => p(e, i)) || e.content.textBetween(0, e.content.size, `

`);
    return {
        dom: a,
        text: d,
        slice: e
    }
}

function Zi(i, e, t, n, r) {
    let s = r.parent.type.spec.code,
        o, l;
    if (!t && !e) return null;
    let a = e && (n || s || !t);
    if (a) {
        if (i.someProp("transformPastedText", d => {
                e = d(e, s || n, i)
            }), s) return e ? new k(y.from(i.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : k.empty;
        let f = i.someProp("clipboardTextParser", d => d(e, r, n, i));
        if (f) l = f;
        else {
            let d = r.marks(),
                {
                    schema: p
                } = i.state,
                u = Pe.fromSchema(p);
            o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach(m => {
                let g = o.appendChild(document.createElement("p"));
                m && g.appendChild(u.serializeNode(p.text(m, d)))
            })
        }
    } else i.someProp("transformPastedHTML", f => {
        t = f(t, i)
    }), o = ao(t), Qe && ho(o);
    let h = o && o.querySelector("[data-pm-slice]"),
        c = h && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(h.getAttribute("data-pm-slice") || "");
    if (c && c[3])
        for (let f = +c[3]; f > 0; f--) {
            let d = o.firstChild;
            for (; d && d.nodeType != 1;) d = d.nextSibling;
            if (!d) break;
            o = d
        }
    if (l || (l = (i.someProp("clipboardParser") || i.someProp("domParser") || He.fromSchema(i.state.schema)).parseSlice(o, {
            preserveWhitespace: !!(a || c),
            context: r,
            ruleFromNode(d) {
                return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !oo.test(d.parentNode.nodeName) ? {
                    ignore: !0
                } : null
            }
        })), c) l = co(Hn(l, +c[1], +c[2]), c[4]);
    else if (l = k.maxOpen(lo(l.content, r), !0), l.openStart || l.openEnd) {
        let f = 0,
            d = 0;
        for (let p = l.content.firstChild; f < l.openStart && !p.type.spec.isolating; f++, p = p.firstChild);
        for (let p = l.content.lastChild; d < l.openEnd && !p.type.spec.isolating; d++, p = p.lastChild);
        l = Hn(l, f, d)
    }
    return i.someProp("transformPasted", f => {
        l = f(l, i)
    }), l
}
const oo = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;

function lo(i, e) {
    if (i.childCount < 2) return i;
    for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.index(t)),
            s, o = [];
        if (i.forEach(l => {
                if (!o) return;
                let a = r.findWrapping(l.type),
                    h;
                if (!a) return o = null;
                if (h = o.length && s.length && _i(a, s, l, o[o.length - 1], 0)) o[o.length - 1] = h;
                else {
                    o.length && (o[o.length - 1] = er(o[o.length - 1], s.length));
                    let c = Qi(l, a);
                    o.push(c), r = r.matchType(c.type), s = a
                }
            }), o) return y.from(o)
    }
    return i
}

function Qi(i, e, t = 0) {
    for (let n = e.length - 1; n >= t; n--) i = e[n].create(null, y.from(i));
    return i
}

function _i(i, e, t, n, r) {
    if (r < i.length && r < e.length && i[r] == e[r]) {
        let s = _i(i, e, t, n.lastChild, r + 1);
        if (s) return n.copy(n.content.replaceChild(n.childCount - 1, s));
        if (n.contentMatchAt(n.childCount).matchType(r == i.length - 1 ? t.type : i[r + 1])) return n.copy(n.content.append(y.from(Qi(t, i, r + 1))))
    }
}

function er(i, e) {
    if (e == 0) return i;
    let t = i.content.replaceChild(i.childCount - 1, er(i.lastChild, e - 1)),
        n = i.contentMatchAt(i.childCount).fillBefore(y.empty, !0);
    return i.copy(t.append(n))
}

function jt(i, e, t, n, r, s) {
    let o = e < 0 ? i.firstChild : i.lastChild,
        l = o.content;
    return i.childCount > 1 && (s = 0), r < n - 1 && (l = jt(l, e, t, n, r + 1, s)), r >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= r).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(y.empty, !0))), i.replaceChild(e < 0 ? 0 : i.childCount - 1, o.copy(l))
}

function Hn(i, e, t) {
    return e < i.openStart && (i = new k(jt(i.content, -1, e, i.openStart, 0, i.openEnd), e, i.openEnd)), t < i.openEnd && (i = new k(jt(i.content, 1, t, i.openEnd, 0, 0), i.openStart, t)), i
}
const tr = {
    thead: ["table"],
    tbody: ["table"],
    tfoot: ["table"],
    caption: ["table"],
    colgroup: ["table"],
    col: ["table", "colgroup"],
    tr: ["table", "tbody"],
    td: ["table", "tbody", "tr"],
    th: ["table", "tbody", "tr"]
};
let Un = null;

function nr() {
    return Un || (Un = document.implementation.createHTMLDocument("title"))
}

function ao(i) {
    let e = /^(\s*<meta [^>]*>)*/.exec(i);
    e && (i = i.slice(e[0].length));
    let t = nr().createElement("div"),
        n = /<([a-z][^>\s]+)/i.exec(i),
        r;
    if ((r = n && tr[n[1].toLowerCase()]) && (i = r.map(s => "<" + s + ">").join("") + i + r.map(s => "</" + s + ">").reverse().join("")), t.innerHTML = i, r)
        for (let s = 0; s < r.length; s++) t = t.querySelector(r[s]) || t;
    return t
}

function ho(i) {
    let e = i.querySelectorAll(A ? "span:not([class]):not([style])" : "span.Apple-converted-space");
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        n.childNodes.length == 1 && n.textContent == " " && n.parentNode && n.parentNode.replaceChild(i.ownerDocument.createTextNode(" "), n)
    }
}

function co(i, e) {
    if (!i.size) return i;
    let t = i.content.firstChild.type.schema,
        n;
    try {
        n = JSON.parse(e)
    } catch {
        return i
    }
    let {
        content: r,
        openStart: s,
        openEnd: o
    } = i;
    for (let l = n.length - 2; l >= 0; l -= 2) {
        let a = t.nodes[n[l]];
        if (!a || a.hasRequiredAttrs()) break;
        r = y.from(a.create(n[l + 1], r)), s++, o++
    }
    return new k(r, s, o)
}
const z = {},
    B = {},
    fo = {
        touchstart: !0,
        touchmove: !0
    };
class uo {
    constructor() {
        this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
            time: 0,
            x: 0,
            y: 0,
            type: ""
        }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null
    }
}

function po(i) {
    for (let e in z) {
        let t = z[e];
        i.dom.addEventListener(e, i.input.eventHandlers[e] = n => {
            go(i, n) && !en(i, n) && (i.editable || !(n.type in B)) && t(i, n)
        }, fo[e] ? {
            passive: !0
        } : void 0)
    }
    P && i.dom.addEventListener("input", () => null), Yt(i)
}

function ae(i, e) {
    i.input.lastSelectionOrigin = e, i.input.lastSelectionTime = Date.now()
}

function mo(i) {
    i.domObserver.stop();
    for (let e in i.input.eventHandlers) i.dom.removeEventListener(e, i.input.eventHandlers[e]);
    clearTimeout(i.input.composingTimeout), clearTimeout(i.input.lastIOSEnterFallbackTimeout)
}

function Yt(i) {
    i.someProp("handleDOMEvents", e => {
        for (let t in e) i.input.eventHandlers[t] || i.dom.addEventListener(t, i.input.eventHandlers[t] = n => en(i, n))
    })
}

function en(i, e) {
    return i.someProp("handleDOMEvents", t => {
        let n = t[e.type];
        return n ? n(i, e) || e.defaultPrevented : !1
    })
}

function go(i, e) {
    if (!e.bubbles) return !0;
    if (e.defaultPrevented) return !1;
    for (let t = e.target; t != i.dom; t = t.parentNode)
        if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e)) return !1;
    return !0
}

function yo(i, e) {
    !en(i, e) && z[e.type] && (i.editable || !(e.type in B)) && z[e.type](i, e)
}
B.keydown = (i, e) => {
    let t = e;
    if (i.input.shiftKey = t.keyCode == 16 || t.shiftKey, !rr(i, t) && (i.input.lastKeyCode = t.keyCode, i.input.lastKeyCodeTime = Date.now(), !(q && A && t.keyCode == 13)))
        if (t.keyCode != 229 && i.domObserver.forceFlush(), Ie && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
            let n = Date.now();
            i.input.lastIOSEnter = n, i.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                i.input.lastIOSEnter == n && (i.someProp("handleKeyDown", r => r(i, pe(13, "Enter"))), i.input.lastIOSEnter = 0)
            }, 200)
        } else i.someProp("handleKeyDown", n => n(i, t)) || so(i, t) ? t.preventDefault() : ae(i, "key")
};
B.keyup = (i, e) => {
    e.keyCode == 16 && (i.input.shiftKey = !1)
};
B.keypress = (i, e) => {
    let t = e;
    if (rr(i, t) || !t.charCode || t.ctrlKey && !t.altKey || J && t.metaKey) return;
    if (i.someProp("handleKeyPress", r => r(i, t))) {
        t.preventDefault();
        return
    }
    let n = i.state.selection;
    if (!(n instanceof O) || !n.$from.sameParent(n.$to)) {
        let r = String.fromCharCode(t.charCode);
        !/[\r\n]/.test(r) && !i.someProp("handleTextInput", s => s(i, n.$from.pos, n.$to.pos, r)) && i.dispatch(i.state.tr.insertText(r).scrollIntoView()), t.preventDefault()
    }
};

function bt(i) {
    return {
        left: i.clientX,
        top: i.clientY
    }
}

function ko(i, e) {
    let t = e.x - i.clientX,
        n = e.y - i.clientY;
    return t * t + n * n < 100
}

function tn(i, e, t, n, r) {
    if (n == -1) return !1;
    let s = i.state.doc.resolve(n);
    for (let o = s.depth + 1; o > 0; o--)
        if (i.someProp(e, l => o > s.depth ? l(i, t, s.nodeAfter, s.before(o), r, !0) : l(i, t, s.node(o), s.before(o), r, !1))) return !0;
    return !1
}

function Ee(i, e, t) {
    i.focused || i.focus();
    let n = i.state.tr.setSelection(e);
    n.setMeta("pointer", !0), i.dispatch(n)
}

function xo(i, e) {
    if (e == -1) return !1;
    let t = i.state.doc.resolve(e),
        n = t.nodeAfter;
    return n && n.isAtom && S.isSelectable(n) ? (Ee(i, new S(t)), !0) : !1
}

function So(i, e) {
    if (e == -1) return !1;
    let t = i.state.selection,
        n, r;
    t instanceof S && (n = t.node);
    let s = i.state.doc.resolve(e);
    for (let o = s.depth + 1; o > 0; o--) {
        let l = o > s.depth ? s.nodeAfter : s.node(o);
        if (S.isSelectable(l)) {
            n && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? r = s.before(t.$from.depth) : r = s.before(o);
            break
        }
    }
    return r != null ? (Ee(i, S.create(i.state.doc, r)), !0) : !1
}

function bo(i, e, t, n, r) {
    return tn(i, "handleClickOn", e, t, n) || i.someProp("handleClick", s => s(i, e, n)) || (r ? So(i, t) : xo(i, t))
}

function No(i, e, t, n) {
    return tn(i, "handleDoubleClickOn", e, t, n) || i.someProp("handleDoubleClick", r => r(i, e, n))
}

function Co(i, e, t, n) {
    return tn(i, "handleTripleClickOn", e, t, n) || i.someProp("handleTripleClick", r => r(i, e, n)) || Oo(i, t, n)
}

function Oo(i, e, t) {
    if (t.button != 0) return !1;
    let n = i.state.doc;
    if (e == -1) return n.inlineContent ? (Ee(i, O.create(n, 0, n.content.size)), !0) : !1;
    let r = n.resolve(e);
    for (let s = r.depth + 1; s > 0; s--) {
        let o = s > r.depth ? r.nodeAfter : r.node(s),
            l = r.before(s);
        if (o.inlineContent) Ee(i, O.create(n, l + 1, l + 1 + o.content.size));
        else if (S.isSelectable(o)) Ee(i, S.create(n, l));
        else continue;
        return !0
    }
}

function nn(i) {
    return pt(i)
}
const ir = J ? "metaKey" : "ctrlKey";
z.mousedown = (i, e) => {
    let t = e;
    i.input.shiftKey = t.shiftKey;
    let n = nn(i),
        r = Date.now(),
        s = "singleClick";
    r - i.input.lastClick.time < 500 && ko(t, i.input.lastClick) && !t[ir] && (i.input.lastClick.type == "singleClick" ? s = "doubleClick" : i.input.lastClick.type == "doubleClick" && (s = "tripleClick")), i.input.lastClick = {
        time: r,
        x: t.clientX,
        y: t.clientY,
        type: s
    };
    let o = i.posAtCoords(bt(t));
    o && (s == "singleClick" ? (i.input.mouseDown && i.input.mouseDown.done(), i.input.mouseDown = new Mo(i, o, t, !!n)) : (s == "doubleClick" ? No : Co)(i, o.pos, o.inside, t) ? t.preventDefault() : ae(i, "pointer"))
};
class Mo {
    constructor(e, t, n, r) {
        this.view = e, this.pos = t, this.event = n, this.flushed = r, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!n[ir], this.allowDefault = n.shiftKey;
        let s, o;
        if (t.inside > -1) s = e.state.doc.nodeAt(t.inside), o = t.inside;
        else {
            let c = e.state.doc.resolve(t.pos);
            s = c.parent, o = c.depth ? c.before() : 0
        }
        const l = r ? null : n.target,
            a = l ? e.docView.nearestDesc(l, !0) : null;
        this.target = a && a.dom.nodeType == 1 ? a.dom : null;
        let {
            selection: h
        } = e.state;
        (n.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || h instanceof S && h.from <= o && h.to > o) && (this.mightDrag = {
            node: s,
            pos: o,
            addAttr: !!(this.target && !this.target.draggable),
            setUneditable: !!(this.target && $ && !this.target.hasAttribute("contentEditable"))
        }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
            this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false")
        }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), ae(e, "pointer")
    }
    done() {
        this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => _(this.view)), this.view.input.mouseDown = null
    }
    up(e) {
        if (this.done(), !this.view.dom.contains(e.target)) return;
        let t = this.pos;
        this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(bt(e))), this.updateAllowDefault(e), this.allowDefault || !t ? ae(this.view, "pointer") : bo(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || P && this.mightDrag && !this.mightDrag.node.isAtom || A && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Ee(this.view, C.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : ae(this.view, "pointer")
    }
    move(e) {
        this.updateAllowDefault(e), ae(this.view, "pointer"), e.buttons == 0 && this.done()
    }
    updateAllowDefault(e) {
        !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0)
    }
}
z.touchstart = i => {
    i.input.lastTouch = Date.now(), nn(i), ae(i, "pointer")
};
z.touchmove = i => {
    i.input.lastTouch = Date.now(), ae(i, "pointer")
};
z.contextmenu = i => nn(i);

function rr(i, e) {
    return i.composing ? !0 : P && Math.abs(e.timeStamp - i.input.compositionEndedAt) < 500 ? (i.input.compositionEndedAt = -2e8, !0) : !1
}
const To = q ? 5e3 : -1;
B.compositionstart = B.compositionupdate = i => {
    if (!i.composing) {
        i.domObserver.flush();
        let {
            state: e
        } = i, t = e.selection.$from;
        if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some(n => n.type.spec.inclusive === !1))) i.markCursor = i.state.storedMarks || t.marks(), pt(i, !0), i.markCursor = null;
        else if (pt(i), $ && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
            let n = i.domSelectionRange();
            for (let r = n.focusNode, s = n.focusOffset; r && r.nodeType == 1 && s != 0;) {
                let o = s < 0 ? r.lastChild : r.childNodes[s - 1];
                if (!o) break;
                if (o.nodeType == 3) {
                    i.domSelection().collapse(o, o.nodeValue.length);
                    break
                } else r = o, s = -1
            }
        }
        i.input.composing = !0
    }
    sr(i, To)
};
B.compositionend = (i, e) => {
    i.composing && (i.input.composing = !1, i.input.compositionEndedAt = e.timeStamp, i.input.compositionPendingChanges = i.domObserver.pendingRecords().length ? i.input.compositionID : 0, i.input.compositionNode = null, i.input.compositionPendingChanges && Promise.resolve().then(() => i.domObserver.flush()), i.input.compositionID++, sr(i, 20))
};

function sr(i, e) {
    clearTimeout(i.input.composingTimeout), e > -1 && (i.input.composingTimeout = setTimeout(() => pt(i), e))
}

function or(i) {
    for (i.composing && (i.input.composing = !1, i.input.compositionEndedAt = wo()); i.input.compositionNodes.length > 0;) i.input.compositionNodes.pop().markParentsDirty()
}

function Do(i) {
    let e = i.domSelectionRange();
    if (!e.focusNode) return null;
    let t = xs(e.focusNode, e.focusOffset),
        n = Ss(e.focusNode, e.focusOffset);
    if (t && n && t != n) {
        let r = n.pmViewDesc,
            s = i.domObserver.lastChangedTextNode;
        if (t == s || n == s) return s;
        if (!r || !r.isText(n.nodeValue)) return n;
        if (i.input.compositionNode == n) {
            let o = t.pmViewDesc;
            if (!(!o || !o.isText(t.nodeValue))) return n
        }
    }
    return t || n
}

function wo() {
    let i = document.createEvent("Event");
    return i.initEvent("event", !0, !0), i.timeStamp
}

function pt(i, e = !1) {
    if (!(q && i.domObserver.flushingSoon >= 0)) {
        if (i.domObserver.forceFlush(), or(i), e || i.docView && i.docView.dirty) {
            let t = Qt(i);
            return t && !t.eq(i.state.selection) ? i.dispatch(i.state.tr.setSelection(t)) : i.updateState(i.state), !0
        }
        return !1
    }
}

function Eo(i, e) {
    if (!i.dom.parentNode) return;
    let t = i.dom.parentNode.appendChild(document.createElement("div"));
    t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
    let n = getSelection(),
        r = document.createRange();
    r.selectNodeContents(e), i.dom.blur(), n.removeAllRanges(), n.addRange(r), setTimeout(() => {
        t.parentNode && t.parentNode.removeChild(t), i.focus()
    }, 50)
}
const Ye = F && he < 15 || Ie && Ms < 604;
z.copy = B.cut = (i, e) => {
    let t = e,
        n = i.state.selection,
        r = t.type == "cut";
    if (n.empty) return;
    let s = Ye ? null : t.clipboardData,
        o = n.content(),
        {
            dom: l,
            text: a
        } = Xi(i, o);
    s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : Eo(i, l), r && i.dispatch(i.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
};

function Ao(i) {
    return i.openStart == 0 && i.openEnd == 0 && i.content.childCount == 1 ? i.content.firstChild : null
}

function Ro(i, e) {
    if (!i.dom.parentNode) return;
    let t = i.input.shiftKey || i.state.selection.$from.parent.type.spec.code,
        n = i.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
    t || (n.contentEditable = "true"), n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus();
    let r = i.input.shiftKey && i.input.lastKeyCode != 45;
    setTimeout(() => {
        i.focus(), n.parentNode && n.parentNode.removeChild(n), t ? Ge(i, n.value, null, r, e) : Ge(i, n.textContent, n.innerHTML, r, e)
    }, 50)
}

function Ge(i, e, t, n, r) {
    let s = Zi(i, e, t, n, i.state.selection.$from);
    if (i.someProp("handlePaste", a => a(i, r, s || k.empty))) return !0;
    if (!s) return !1;
    let o = Ao(s),
        l = o ? i.state.tr.replaceSelectionWith(o, n) : i.state.tr.replaceSelection(s);
    return i.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0
}

function lr(i) {
    let e = i.getData("text/plain") || i.getData("Text");
    if (e) return e;
    let t = i.getData("text/uri-list");
    return t ? t.replace(/\r?\n/g, " ") : ""
}
B.paste = (i, e) => {
    let t = e;
    if (i.composing && !q) return;
    let n = Ye ? null : t.clipboardData,
        r = i.input.shiftKey && i.input.lastKeyCode != 45;
    n && Ge(i, lr(n), n.getData("text/html"), r, t) ? t.preventDefault() : Ro(i, t)
};
class ar {
    constructor(e, t, n) {
        this.slice = e, this.move = t, this.node = n
    }
}
const hr = J ? "altKey" : "ctrlKey";
z.dragstart = (i, e) => {
    let t = e,
        n = i.input.mouseDown;
    if (n && n.done(), !t.dataTransfer) return;
    let r = i.state.selection,
        s = r.empty ? null : i.posAtCoords(bt(t)),
        o;
    if (!(s && s.pos >= r.from && s.pos <= (r instanceof S ? r.to - 1 : r.to))) {
        if (n && n.mightDrag) o = S.create(i.state.doc, n.mightDrag.pos);
        else if (t.target && t.target.nodeType == 1) {
            let f = i.docView.nearestDesc(t.target, !0);
            f && f.node.type.spec.draggable && f != i.docView && (o = S.create(i.state.doc, f.posBefore))
        }
    }
    let l = (o || i.state.selection).content(),
        {
            dom: a,
            text: h,
            slice: c
        } = Xi(i, l);
    (!t.dataTransfer.files.length || !A || zi > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Ye ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Ye || t.dataTransfer.setData("text/plain", h), i.dragging = new ar(c, !t[hr], o)
};
z.dragend = i => {
    let e = i.dragging;
    window.setTimeout(() => {
        i.dragging == e && (i.dragging = null)
    }, 50)
};
B.dragover = B.dragenter = (i, e) => e.preventDefault();
B.drop = (i, e) => {
    let t = e,
        n = i.dragging;
    if (i.dragging = null, !t.dataTransfer) return;
    let r = i.posAtCoords(bt(t));
    if (!r) return;
    let s = i.state.doc.resolve(r.pos),
        o = n && n.slice;
    o ? i.someProp("transformPasted", u => {
        o = u(o, i)
    }) : o = Zi(i, lr(t.dataTransfer), Ye ? null : t.dataTransfer.getData("text/html"), !1, s);
    let l = !!(n && !t[hr]);
    if (i.someProp("handleDrop", u => u(i, t, o || k.empty, l))) {
        t.preventDefault();
        return
    }
    if (!o) return;
    t.preventDefault();
    let a = o ? rs(i.state.doc, s.pos, o) : s.pos;
    a == null && (a = s.pos);
    let h = i.state.tr;
    if (l) {
        let {
            node: u
        } = n;
        u ? u.replace(h) : h.deleteSelection()
    }
    let c = h.mapping.map(a),
        f = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1,
        d = h.doc;
    if (f ? h.replaceRangeWith(c, c, o.content.firstChild) : h.replaceRange(c, c, o), h.doc.eq(d)) return;
    let p = h.doc.resolve(c);
    if (f && S.isSelectable(o.content.firstChild) && p.nodeAfter && p.nodeAfter.sameMarkup(o.content.firstChild)) h.setSelection(new S(p));
    else {
        let u = h.mapping.map(a);
        h.mapping.maps[h.mapping.maps.length - 1].forEach((m, g, x, I) => u = I), h.setSelection(_t(i, p, h.doc.resolve(u)))
    }
    i.focus(), i.dispatch(h.setMeta("uiEvent", "drop"))
};
z.focus = i => {
    i.input.lastFocus = Date.now(), i.focused || (i.domObserver.stop(), i.dom.classList.add("ProseMirror-focused"), i.domObserver.start(), i.focused = !0, setTimeout(() => {
        i.docView && i.hasFocus() && !i.domObserver.currentSelection.eq(i.domSelectionRange()) && _(i)
    }, 20))
};
z.blur = (i, e) => {
    let t = e;
    i.focused && (i.domObserver.stop(), i.dom.classList.remove("ProseMirror-focused"), i.domObserver.start(), t.relatedTarget && i.dom.contains(t.relatedTarget) && i.domObserver.currentSelection.clear(), i.focused = !1)
};
z.beforeinput = (i, e) => {
    if (A && q && e.inputType == "deleteContentBackward") {
        i.domObserver.flushSoon();
        let {
            domChangeCount: n
        } = i.input;
        setTimeout(() => {
            if (i.input.domChangeCount != n || (i.dom.blur(), i.focus(), i.someProp("handleKeyDown", s => s(i, pe(8, "Backspace"))))) return;
            let {
                $cursor: r
            } = i.state.selection;
            r && r.pos > 0 && i.dispatch(i.state.tr.delete(r.pos - 1, r.pos).scrollIntoView())
        }, 50)
    }
};
for (let i in B) z[i] = B[i];

function Xe(i, e) {
    if (i == e) return !0;
    for (let t in i)
        if (i[t] !== e[t]) return !1;
    for (let t in e)
        if (!(t in i)) return !1;
    return !0
}
class mt {
    constructor(e, t) {
        this.toDOM = e, this.spec = t || xe, this.side = this.spec.side || 0
    }
    map(e, t, n, r) {
        let {
            pos: s,
            deleted: o
        } = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
        return o ? null : new W(s - n, s - n, this)
    }
    valid() {
        return !0
    }
    eq(e) {
        return this == e || e instanceof mt && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Xe(this.spec, e.spec))
    }
    destroy(e) {
        this.spec.destroy && this.spec.destroy(e)
    }
}
class fe {
    constructor(e, t) {
        this.attrs = e, this.spec = t || xe
    }
    map(e, t, n, r) {
        let s = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n,
            o = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
        return s >= o ? null : new W(s, o, this)
    }
    valid(e, t) {
        return t.from < t.to
    }
    eq(e) {
        return this == e || e instanceof fe && Xe(this.attrs, e.attrs) && Xe(this.spec, e.spec)
    }
    static is(e) {
        return e.type instanceof fe
    }
    destroy() {}
}
class rn {
    constructor(e, t) {
        this.attrs = e, this.spec = t || xe
    }
    map(e, t, n, r) {
        let s = e.mapResult(t.from + r, 1);
        if (s.deleted) return null;
        let o = e.mapResult(t.to + r, -1);
        return o.deleted || o.pos <= s.pos ? null : new W(s.pos - n, o.pos - n, this)
    }
    valid(e, t) {
        let {
            index: n,
            offset: r
        } = e.content.findIndex(t.from), s;
        return r == t.from && !(s = e.child(n)).isText && r + s.nodeSize == t.to
    }
    eq(e) {
        return this == e || e instanceof rn && Xe(this.attrs, e.attrs) && Xe(this.spec, e.spec)
    }
    destroy() {}
}
class W {
    constructor(e, t, n) {
        this.from = e, this.to = t, this.type = n
    }
    copy(e, t) {
        return new W(e, t, this.type)
    }
    eq(e, t = 0) {
        return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
    }
    map(e, t, n) {
        return this.type.map(e, this, t, n)
    }
    static widget(e, t, n) {
        return new W(e, e, new mt(t, n))
    }
    static inline(e, t, n, r) {
        return new W(e, t, new fe(n, r))
    }
    static node(e, t, n, r) {
        return new W(e, t, new rn(n, r))
    }
    get spec() {
        return this.type.spec
    }
    get inline() {
        return this.type instanceof fe
    }
    get widget() {
        return this.type instanceof mt
    }
}
const De = [],
    xe = {};
class T {
    constructor(e, t) {
        this.local = e.length ? e : De, this.children = t.length ? t : De
    }
    static create(e, t) {
        return t.length ? gt(t, e, 0, xe) : w
    }
    find(e, t, n) {
        let r = [];
        return this.findInner(e ? ? 0, t ? ? 1e9, r, 0, n), r
    }
    findInner(e, t, n, r, s) {
        for (let o = 0; o < this.local.length; o++) {
            let l = this.local[o];
            l.from <= t && l.to >= e && (!s || s(l.spec)) && n.push(l.copy(l.from + r, l.to + r))
        }
        for (let o = 0; o < this.children.length; o += 3)
            if (this.children[o] < t && this.children[o + 1] > e) {
                let l = this.children[o] + 1;
                this.children[o + 2].findInner(e - l, t - l, n, r + l, s)
            }
    }
    map(e, t, n) {
        return this == w || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, n || xe)
    }
    mapInner(e, t, n, r, s) {
        let o;
        for (let l = 0; l < this.local.length; l++) {
            let a = this.local[l].map(e, n, r);
            a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec)
        }
        return this.children.length ? Io(this.children, o || [], e, t, n, r, s) : o ? new T(o.sort(Se), De) : w
    }
    add(e, t) {
        return t.length ? this == w ? T.create(e, t) : this.addInner(e, t, 0) : this
    }
    addInner(e, t, n) {
        let r, s = 0;
        e.forEach((l, a) => {
            let h = a + n,
                c;
            if (c = fr(t, l, h)) {
                for (r || (r = this.children.slice()); s < r.length && r[s] < a;) s += 3;
                r[s] == a ? r[s + 2] = r[s + 2].addInner(l, c, h + 1) : r.splice(s, 0, a, a + l.nodeSize, gt(c, l, h + 1, xe)), s += 3
            }
        });
        let o = cr(s ? dr(t) : t, -n);
        for (let l = 0; l < o.length; l++) o[l].type.valid(e, o[l]) || o.splice(l--, 1);
        return new T(o.length ? this.local.concat(o).sort(Se) : this.local, r || this.children)
    }
    remove(e) {
        return e.length == 0 || this == w ? this : this.removeInner(e, 0)
    }
    removeInner(e, t) {
        let n = this.children,
            r = this.local;
        for (let s = 0; s < n.length; s += 3) {
            let o, l = n[s] + t,
                a = n[s + 1] + t;
            for (let c = 0, f; c < e.length; c++)(f = e[c]) && f.from > l && f.to < a && (e[c] = null, (o || (o = [])).push(f));
            if (!o) continue;
            n == this.children && (n = this.children.slice());
            let h = n[s + 2].removeInner(o, l + 1);
            h != w ? n[s + 2] = h : (n.splice(s, 3), s -= 3)
        }
        if (r.length) {
            for (let s = 0, o; s < e.length; s++)
                if (o = e[s])
                    for (let l = 0; l < r.length; l++) r[l].eq(o, t) && (r == this.local && (r = this.local.slice()), r.splice(l--, 1))
        }
        return n == this.children && r == this.local ? this : r.length || n.length ? new T(r, n) : w
    }
    forChild(e, t) {
        if (this == w) return this;
        if (t.isLeaf) return T.empty;
        let n, r;
        for (let l = 0; l < this.children.length; l += 3)
            if (this.children[l] >= e) {
                this.children[l] == e && (n = this.children[l + 2]);
                break
            }
        let s = e + 1,
            o = s + t.content.size;
        for (let l = 0; l < this.local.length; l++) {
            let a = this.local[l];
            if (a.from < o && a.to > s && a.type instanceof fe) {
                let h = Math.max(s, a.from) - s,
                    c = Math.min(o, a.to) - s;
                h < c && (r || (r = [])).push(a.copy(h, c))
            }
        }
        if (r) {
            let l = new T(r.sort(Se), De);
            return n ? new se([l, n]) : l
        }
        return n || w
    }
    eq(e) {
        if (this == e) return !0;
        if (!(e instanceof T) || this.local.length != e.local.length || this.children.length != e.children.length) return !1;
        for (let t = 0; t < this.local.length; t++)
            if (!this.local[t].eq(e.local[t])) return !1;
        for (let t = 0; t < this.children.length; t += 3)
            if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2])) return !1;
        return !0
    }
    locals(e) {
        return sn(this.localsInner(e))
    }
    localsInner(e) {
        if (this == w) return De;
        if (e.inlineContent || !this.local.some(fe.is)) return this.local;
        let t = [];
        for (let n = 0; n < this.local.length; n++) this.local[n].type instanceof fe || t.push(this.local[n]);
        return t
    }
}
T.empty = new T([], []);
T.removeOverlap = sn;
const w = T.empty;
class se {
    constructor(e) {
        this.members = e
    }
    map(e, t) {
        const n = this.members.map(r => r.map(e, t, xe));
        return se.from(n)
    }
    forChild(e, t) {
        if (t.isLeaf) return T.empty;
        let n = [];
        for (let r = 0; r < this.members.length; r++) {
            let s = this.members[r].forChild(e, t);
            s != w && (s instanceof se ? n = n.concat(s.members) : n.push(s))
        }
        return se.from(n)
    }
    eq(e) {
        if (!(e instanceof se) || e.members.length != this.members.length) return !1;
        for (let t = 0; t < this.members.length; t++)
            if (!this.members[t].eq(e.members[t])) return !1;
        return !0
    }
    locals(e) {
        let t, n = !0;
        for (let r = 0; r < this.members.length; r++) {
            let s = this.members[r].localsInner(e);
            if (s.length)
                if (!t) t = s;
                else {
                    n && (t = t.slice(), n = !1);
                    for (let o = 0; o < s.length; o++) t.push(s[o])
                }
        }
        return t ? sn(n ? t : t.sort(Se)) : De
    }
    static from(e) {
        switch (e.length) {
            case 0:
                return w;
            case 1:
                return e[0];
            default:
                return new se(e.every(t => t instanceof T) ? e : e.reduce((t, n) => t.concat(n instanceof T ? n : n.members), []))
        }
    }
}

function Io(i, e, t, n, r, s, o) {
    let l = i.slice();
    for (let h = 0, c = s; h < t.maps.length; h++) {
        let f = 0;
        t.maps[h].forEach((d, p, u, m) => {
            let g = m - u - (p - d);
            for (let x = 0; x < l.length; x += 3) {
                let I = l[x + 1];
                if (I < 0 || d > I + c - f) continue;
                let ee = l[x] + c - f;
                p >= ee ? l[x + 1] = d <= ee ? -2 : -1 : d >= c && g && (l[x] += g, l[x + 1] += g)
            }
            f += g
        }), c = t.maps[h].map(c, -1)
    }
    let a = !1;
    for (let h = 0; h < l.length; h += 3)
        if (l[h + 1] < 0) {
            if (l[h + 1] == -2) {
                a = !0, l[h + 1] = -1;
                continue
            }
            let c = t.map(i[h] + s),
                f = c - r;
            if (f < 0 || f >= n.content.size) {
                a = !0;
                continue
            }
            let d = t.map(i[h + 1] + s, -1),
                p = d - r,
                {
                    index: u,
                    offset: m
                } = n.content.findIndex(f),
                g = n.maybeChild(u);
            if (g && m == f && m + g.nodeSize == p) {
                let x = l[h + 2].mapInner(t, g, c + 1, i[h] + s + 1, o);
                x != w ? (l[h] = f, l[h + 1] = p, l[h + 2] = x) : (l[h + 1] = -2, a = !0)
            } else a = !0
        }
    if (a) {
        let h = Po(l, i, e, t, r, s, o),
            c = gt(h, n, 0, o);
        e = c.local;
        for (let f = 0; f < l.length; f += 3) l[f + 1] < 0 && (l.splice(f, 3), f -= 3);
        for (let f = 0, d = 0; f < c.children.length; f += 3) {
            let p = c.children[f];
            for (; d < l.length && l[d] < p;) d += 3;
            l.splice(d, 0, c.children[f], c.children[f + 1], c.children[f + 2])
        }
    }
    return new T(e.sort(Se), l)
}

function cr(i, e) {
    if (!e || !i.length) return i;
    let t = [];
    for (let n = 0; n < i.length; n++) {
        let r = i[n];
        t.push(new W(r.from + e, r.to + e, r.type))
    }
    return t
}

function Po(i, e, t, n, r, s, o) {
    function l(a, h) {
        for (let c = 0; c < a.local.length; c++) {
            let f = a.local[c].map(n, r, h);
            f ? t.push(f) : o.onRemove && o.onRemove(a.local[c].spec)
        }
        for (let c = 0; c < a.children.length; c += 3) l(a.children[c + 2], a.children[c] + h + 1)
    }
    for (let a = 0; a < i.length; a += 3) i[a + 1] == -1 && l(i[a + 2], e[a] + s + 1);
    return t
}

function fr(i, e, t) {
    if (e.isLeaf) return null;
    let n = t + e.nodeSize,
        r = null;
    for (let s = 0, o; s < i.length; s++)(o = i[s]) && o.from > t && o.to < n && ((r || (r = [])).push(o), i[s] = null);
    return r
}

function dr(i) {
    let e = [];
    for (let t = 0; t < i.length; t++) i[t] != null && e.push(i[t]);
    return e
}

function gt(i, e, t, n) {
    let r = [],
        s = !1;
    e.forEach((l, a) => {
        let h = fr(i, l, a + t);
        if (h) {
            s = !0;
            let c = gt(h, l, t + a + 1, n);
            c != w && r.push(a, a + l.nodeSize, c)
        }
    });
    let o = cr(s ? dr(i) : i, -t).sort(Se);
    for (let l = 0; l < o.length; l++) o[l].type.valid(e, o[l]) || (n.onRemove && n.onRemove(o[l].spec), o.splice(l--, 1));
    return o.length || r.length ? new T(o, r) : w
}

function Se(i, e) {
    return i.from - e.from || i.to - e.to
}

function sn(i) {
    let e = i;
    for (let t = 0; t < e.length - 1; t++) {
        let n = e[t];
        if (n.from != n.to)
            for (let r = t + 1; r < e.length; r++) {
                let s = e[r];
                if (s.from == n.from) {
                    s.to != n.to && (e == i && (e = i.slice()), e[r] = s.copy(s.from, n.to), jn(e, r + 1, s.copy(n.to, s.to)));
                    continue
                } else {
                    s.from < n.to && (e == i && (e = i.slice()), e[t] = n.copy(n.from, s.from), jn(e, r, n.copy(s.from, n.to)));
                    break
                }
            }
    }
    return e
}

function jn(i, e, t) {
    for (; e < i.length && Se(t, i[e]) > 0;) e++;
    i.splice(e, 0, t)
}

function Pt(i) {
    let e = [];
    return i.someProp("decorations", t => {
        let n = t(i.state);
        n && n != w && e.push(n)
    }), i.cursorWrapper && e.push(T.create(i.state.doc, [i.cursorWrapper.deco])), se.from(e)
}
const zo = {
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0,
        attributes: !0,
        attributeOldValue: !0,
        subtree: !0
    },
    Bo = F && he <= 11;
class Fo {
    constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
    }
    set(e) {
        this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset
    }
    clear() {
        this.anchorNode = this.focusNode = null
    }
    eq(e) {
        return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset
    }
}
class Vo {
    constructor(e, t) {
        this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Fo, this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver(n => {
            for (let r = 0; r < n.length; r++) this.queue.push(n[r]);
            F && he <= 11 && n.some(r => r.type == "childList" && r.removedNodes.length || r.type == "characterData" && r.oldValue.length > r.target.nodeValue.length) ? this.flushSoon() : this.flush()
        }), Bo && (this.onCharData = n => {
            this.queue.push({
                target: n.target,
                type: "characterData",
                oldValue: n.prevValue
            }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this)
    }
    flushSoon() {
        this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
            this.flushingSoon = -1, this.flush()
        }, 20))
    }
    forceFlush() {
        this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush())
    }
    start() {
        this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, zo)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection()
    }
    stop() {
        if (this.observer) {
            let e = this.observer.takeRecords();
            if (e.length) {
                for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
                window.setTimeout(() => this.flush(), 20)
            }
            this.observer.disconnect()
        }
        this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection()
    }
    connectSelection() {
        this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
    }
    disconnectSelection() {
        this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
    }
    suppressSelectionUpdates() {
        this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50)
    }
    onSelectionChange() {
        if (Jn(this.view)) {
            if (this.suppressingSelectionUpdates) return _(this.view);
            if (F && he <= 11 && !this.view.state.selection.empty) {
                let e = this.view.domSelectionRange();
                if (e.focusNode && Ne(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon()
            }
            this.flush()
        }
    }
    setCurSelection() {
        this.currentSelection.set(this.view.domSelectionRange())
    }
    ignoreSelectionChange(e) {
        if (!e.focusNode) return !0;
        let t = new Set,
            n;
        for (let s = e.focusNode; s; s = je(s)) t.add(s);
        for (let s = e.anchorNode; s; s = je(s))
            if (t.has(s)) {
                n = s;
                break
            }
        let r = n && this.view.docView.nearestDesc(n);
        if (r && r.ignoreMutation({
                type: "selection",
                target: n.nodeType == 3 ? n.parentNode : n
            })) return this.setCurSelection(), !0
    }
    pendingRecords() {
        if (this.observer)
            for (let e of this.observer.takeRecords()) this.queue.push(e);
        return this.queue
    }
    flush() {
        let {
            view: e
        } = this;
        if (!e.docView || this.flushingSoon > -1) return;
        let t = this.pendingRecords();
        t.length && (this.queue = []);
        let n = e.domSelectionRange(),
            r = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && Jn(e) && !this.ignoreSelectionChange(n),
            s = -1,
            o = -1,
            l = !1,
            a = [];
        if (e.editable)
            for (let c = 0; c < t.length; c++) {
                let f = this.registerMutation(t[c], a);
                f && (s = s < 0 ? f.from : Math.min(f.from, s), o = o < 0 ? f.to : Math.max(f.to, o), f.typeOver && (l = !0))
            }
        if ($ && a.length) {
            let c = a.filter(f => f.nodeName == "BR");
            if (c.length == 2) {
                let [f, d] = c;
                f.parentNode && f.parentNode.parentNode == d.parentNode ? d.remove() : f.remove()
            } else {
                let {
                    focusNode: f
                } = this.currentSelection;
                for (let d of c) {
                    let p = d.parentNode;
                    p && p.nodeName == "LI" && (!f || vo(e, f) != p) && d.remove()
                }
            }
        }
        let h = null;
        s < 0 && r && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && xt(n) && (h = Qt(e)) && h.eq(C.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, _(e), this.currentSelection.set(n), e.scrollToSelection()) : (s > -1 || r) && (s > -1 && (e.docView.markDirty(s, o), Lo(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || _(e), this.currentSelection.set(n))
    }
    registerMutation(e, t) {
        if (t.indexOf(e.target) > -1) return null;
        let n = this.view.docView.nearestDesc(e.target);
        if (e.type == "attributes" && (n == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e)) return null;
        if (e.type == "childList") {
            for (let c = 0; c < e.addedNodes.length; c++) {
                let f = e.addedNodes[c];
                t.push(f), f.nodeType == 3 && (this.lastChangedTextNode = f)
            }
            if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
                from: n.posBefore,
                to: n.posAfter
            };
            let r = e.previousSibling,
                s = e.nextSibling;
            if (F && he <= 11 && e.addedNodes.length)
                for (let c = 0; c < e.addedNodes.length; c++) {
                    let {
                        previousSibling: f,
                        nextSibling: d
                    } = e.addedNodes[c];
                    (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (r = f), (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (s = d)
                }
            let o = r && r.parentNode == e.target ? D(r) + 1 : 0,
                l = n.localPosFromDOM(e.target, o, -1),
                a = s && s.parentNode == e.target ? D(s) : e.target.childNodes.length,
                h = n.localPosFromDOM(e.target, a, 1);
            return {
                from: l,
                to: h
            }
        } else return e.type == "attributes" ? {
            from: n.posAtStart - n.border,
            to: n.posAtEnd + n.border
        } : (this.lastChangedTextNode = e.target, {
            from: n.posAtStart,
            to: n.posAtEnd,
            typeOver: e.target.nodeValue == e.oldValue
        })
    }
}
let Yn = new WeakMap,
    Gn = !1;

function Lo(i) {
    if (!Yn.has(i) && (Yn.set(i, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(i.dom).whiteSpace) !== -1)) {
        if (i.requiresGeckoHackNode = $, Gn) return;
        console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Gn = !0
    }
}

function Xn(i, e) {
    let t = e.startContainer,
        n = e.startOffset,
        r = e.endContainer,
        s = e.endOffset,
        o = i.domAtPos(i.state.selection.anchor);
    return Ne(o.node, o.offset, r, s) && ([t, n, r, s] = [r, s, t, n]), {
        anchorNode: t,
        anchorOffset: n,
        focusNode: r,
        focusOffset: s
    }
}

function Jo(i, e) {
    if (e.getComposedRanges) {
        let r = e.getComposedRanges(i.root)[0];
        if (r) return Xn(i, r)
    }
    let t;

    function n(r) {
        r.preventDefault(), r.stopImmediatePropagation(), t = r.getTargetRanges()[0]
    }
    return i.dom.addEventListener("beforeinput", n, !0), document.execCommand("indent"), i.dom.removeEventListener("beforeinput", n, !0), t ? Xn(i, t) : null
}

function vo(i, e) {
    for (let t = e.parentNode; t && t != i.dom; t = t.parentNode) {
        let n = i.docView.nearestDesc(t, !0);
        if (n && n.node.isBlock) return t
    }
    return null
}

function qo(i, e, t) {
    let {
        node: n,
        fromOffset: r,
        toOffset: s,
        from: o,
        to: l
    } = i.docView.parseRange(e, t), a = i.domSelectionRange(), h, c = a.anchorNode;
    if (c && i.dom.contains(c.nodeType == 1 ? c : c.parentNode) && (h = [{
            node: c,
            offset: a.anchorOffset
        }], xt(a) || h.push({
            node: a.focusNode,
            offset: a.focusOffset
        })), A && i.input.lastKeyCode === 8)
        for (let g = s; g > r; g--) {
            let x = n.childNodes[g - 1],
                I = x.pmViewDesc;
            if (x.nodeName == "BR" && !I) {
                s = g;
                break
            }
            if (!I || I.size) break
        }
    let f = i.state.doc,
        d = i.someProp("domParser") || He.fromSchema(i.state.schema),
        p = f.resolve(o),
        u = null,
        m = d.parse(n, {
            topNode: p.parent,
            topMatch: p.parent.contentMatchAt(p.index()),
            topOpen: !0,
            from: r,
            to: s,
            preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
            findPositions: h,
            ruleFromNode: Wo,
            context: p
        });
    if (h && h[0].pos != null) {
        let g = h[0].pos,
            x = h[1] && h[1].pos;
        x == null && (x = g), u = {
            anchor: g + o,
            head: x + o
        }
    }
    return {
        doc: m,
        sel: u,
        from: o,
        to: l
    }
}

function Wo(i) {
    let e = i.pmViewDesc;
    if (e) return e.parseRule();
    if (i.nodeName == "BR" && i.parentNode) {
        if (P && /^(ul|ol)$/i.test(i.parentNode.nodeName)) {
            let t = document.createElement("div");
            return t.appendChild(document.createElement("li")), {
                skip: t
            }
        } else if (i.parentNode.lastChild == i || P && /^(tr|table)$/i.test(i.parentNode.nodeName)) return {
            ignore: !0
        }
    } else if (i.nodeName == "IMG" && i.getAttribute("mark-placeholder")) return {
        ignore: !0
    };
    return null
}
const Ko = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;

function $o(i, e, t, n, r) {
    let s = i.input.compositionPendingChanges || (i.composing ? i.input.compositionID : 0);
    if (i.input.compositionPendingChanges = 0, e < 0) {
        let b = i.input.lastSelectionTime > Date.now() - 50 ? i.input.lastSelectionOrigin : null,
            ne = Qt(i, b);
        if (ne && !i.state.selection.eq(ne)) {
            if (A && q && i.input.lastKeyCode === 13 && Date.now() - 100 < i.input.lastKeyCodeTime && i.someProp("handleKeyDown", ur => ur(i, pe(13, "Enter")))) return;
            let tt = i.state.tr.setSelection(ne);
            b == "pointer" ? tt.setMeta("pointer", !0) : b == "key" && tt.scrollIntoView(), s && tt.setMeta("composition", s), i.dispatch(tt)
        }
        return
    }
    let o = i.state.doc.resolve(e),
        l = o.sharedDepth(t);
    e = o.before(l + 1), t = i.state.doc.resolve(t).after(l + 1);
    let a = i.state.selection,
        h = qo(i, e, t),
        c = i.state.doc,
        f = c.slice(h.from, h.to),
        d, p;
    i.input.lastKeyCode === 8 && Date.now() - 100 < i.input.lastKeyCodeTime ? (d = i.state.selection.to, p = "end") : (d = i.state.selection.from, p = "start"), i.input.lastKeyCode = null;
    let u = jo(f.content, h.doc.content, h.from, d, p);
    if ((Ie && i.input.lastIOSEnter > Date.now() - 225 || q) && r.some(b => b.nodeType == 1 && !Ko.test(b.nodeName)) && (!u || u.endA >= u.endB) && i.someProp("handleKeyDown", b => b(i, pe(13, "Enter")))) {
        i.input.lastIOSEnter = 0;
        return
    }
    if (!u)
        if (n && a instanceof O && !a.empty && a.$head.sameParent(a.$anchor) && !i.composing && !(h.sel && h.sel.anchor != h.sel.head)) u = {
            start: a.from,
            endA: a.to,
            endB: a.to
        };
        else {
            if (h.sel) {
                let b = Zn(i, i.state.doc, h.sel);
                if (b && !b.eq(i.state.selection)) {
                    let ne = i.state.tr.setSelection(b);
                    s && ne.setMeta("composition", s), i.dispatch(ne)
                }
            }
            return
        }
    i.input.domChangeCount++, i.state.selection.from < i.state.selection.to && u.start == u.endB && i.state.selection instanceof O && (u.start > i.state.selection.from && u.start <= i.state.selection.from + 2 && i.state.selection.from >= h.from ? u.start = i.state.selection.from : u.endA < i.state.selection.to && u.endA >= i.state.selection.to - 2 && i.state.selection.to <= h.to && (u.endB += i.state.selection.to - u.endA, u.endA = i.state.selection.to)), F && he <= 11 && u.endB == u.start + 1 && u.endA == u.start && u.start > h.from && h.doc.textBetween(u.start - h.from - 1, u.start - h.from + 1) == "  " && (u.start--, u.endA--, u.endB--);
    let m = h.doc.resolveNoCache(u.start - h.from),
        g = h.doc.resolveNoCache(u.endB - h.from),
        x = c.resolve(u.start),
        I = m.sameParent(g) && m.parent.inlineContent && x.end() >= u.endA,
        ee;
    if ((Ie && i.input.lastIOSEnter > Date.now() - 225 && (!I || r.some(b => b.nodeName == "DIV" || b.nodeName == "P")) || !I && m.pos < h.doc.content.size && !m.sameParent(g) && (ee = C.findFrom(h.doc.resolve(m.pos + 1), 1, !0)) && ee.head == g.pos) && i.someProp("handleKeyDown", b => b(i, pe(13, "Enter")))) {
        i.input.lastIOSEnter = 0;
        return
    }
    if (i.state.selection.anchor > u.start && Uo(c, u.start, u.endA, m, g) && i.someProp("handleKeyDown", b => b(i, pe(8, "Backspace")))) {
        q && A && i.domObserver.suppressSelectionUpdates();
        return
    }
    A && q && u.endB == u.start && (i.input.lastAndroidDelete = Date.now()), q && !I && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && h.sel && h.sel.anchor == h.sel.head && h.sel.head == u.endA && (u.endB -= 2, g = h.doc.resolveNoCache(u.endB - h.from), setTimeout(() => {
        i.someProp("handleKeyDown", function(b) {
            return b(i, pe(13, "Enter"))
        })
    }, 20));
    let te = u.start,
        ue = u.endA,
        V, Nt, et;
    if (I) {
        if (m.pos == g.pos) F && he <= 11 && m.parentOffset == 0 && (i.domObserver.suppressSelectionUpdates(), setTimeout(() => _(i), 20)), V = i.state.tr.delete(te, ue), Nt = c.resolve(u.start).marksAcross(c.resolve(u.endA));
        else if (u.endA == u.endB && (et = Ho(m.parent.content.cut(m.parentOffset, g.parentOffset), x.parent.content.cut(x.parentOffset, u.endA - x.start())))) V = i.state.tr, et.type == "add" ? V.addMark(te, ue, et.mark) : V.removeMark(te, ue, et.mark);
        else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
            let b = m.parent.textBetween(m.parentOffset, g.parentOffset);
            if (i.someProp("handleTextInput", ne => ne(i, te, ue, b))) return;
            V = i.state.tr.insertText(b, te, ue)
        }
    }
    if (V || (V = i.state.tr.replace(te, ue, h.doc.slice(u.start - h.from, u.endB - h.from))), h.sel) {
        let b = Zn(i, V.doc, h.sel);
        b && !(A && q && i.composing && b.empty && (u.start != u.endB || i.input.lastAndroidDelete < Date.now() - 100) && (b.head == te || b.head == V.mapping.map(ue) - 1) || F && b.empty && b.head == te) && V.setSelection(b)
    }
    Nt && V.ensureMarks(Nt), s && V.setMeta("composition", s), i.dispatch(V.scrollIntoView())
}

function Zn(i, e, t) {
    return Math.max(t.anchor, t.head) > e.content.size ? null : _t(i, e.resolve(t.anchor), e.resolve(t.head))
}

function Ho(i, e) {
    let t = i.firstChild.marks,
        n = e.firstChild.marks,
        r = t,
        s = n,
        o, l, a;
    for (let c = 0; c < n.length; c++) r = n[c].removeFromSet(r);
    for (let c = 0; c < t.length; c++) s = t[c].removeFromSet(s);
    if (r.length == 1 && s.length == 0) l = r[0], o = "add", a = c => c.mark(l.addToSet(c.marks));
    else if (r.length == 0 && s.length == 1) l = s[0], o = "remove", a = c => c.mark(l.removeFromSet(c.marks));
    else return null;
    let h = [];
    for (let c = 0; c < e.childCount; c++) h.push(a(e.child(c)));
    if (y.from(h).eq(i)) return {
        mark: l,
        type: o
    }
}

function Uo(i, e, t, n, r) {
    if (t - e <= r.pos - n.pos || zt(n, !0, !1) < r.pos) return !1;
    let s = i.resolve(e);
    if (!n.parent.isTextblock) {
        let l = s.nodeAfter;
        return l != null && t == e + l.nodeSize
    }
    if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock) return !1;
    let o = i.resolve(zt(s, !0, !0));
    return !o.parent.isTextblock || o.pos > t || zt(o, !0, !1) < t ? !1 : n.parent.content.cut(n.parentOffset).eq(o.parent.content)
}

function zt(i, e, t) {
    let n = i.depth,
        r = e ? i.end() : i.pos;
    for (; n > 0 && (e || i.indexAfter(n) == i.node(n).childCount);) n--, r++, e = !1;
    if (t) {
        let s = i.node(n).maybeChild(i.indexAfter(n));
        for (; s && !s.isLeaf;) s = s.firstChild, r++
    }
    return r
}

function jo(i, e, t, n, r) {
    let s = i.findDiffStart(e, t);
    if (s == null) return null;
    let {
        a: o,
        b: l
    } = i.findDiffEnd(e, t + i.size, t + e.size);
    if (r == "end") {
        let a = Math.max(0, s - Math.min(o, l));
        n -= o + a - s
    }
    if (o < s && i.size < e.size) {
        let a = n <= s && n >= o ? s - n : 0;
        s -= a, s && s < e.size && Qn(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), l = s + (l - o), o = s
    } else if (l < s) {
        let a = n <= s && n >= l ? s - n : 0;
        s -= a, s && s < i.size && Qn(i.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), o = s + (o - l), l = s
    }
    return {
        start: s,
        endA: o,
        endB: l
    }
}

function Qn(i) {
    if (i.length != 2) return !1;
    let e = i.charCodeAt(0),
        t = i.charCodeAt(1);
    return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319
}
class rl {
    constructor(e, t) {
        this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new uo, this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(ii), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = ti(this), ei(this), this.nodeViews = ni(this), this.docView = Pn(this.state.doc, _n(this), Pt(this), this.dom, this), this.domObserver = new Vo(this, (n, r, s, o) => $o(this, n, r, s, o)), this.domObserver.start(), po(this), this.updatePluginViews()
    }
    get composing() {
        return this.input.composing
    }
    get props() {
        if (this._props.state != this.state) {
            let e = this._props;
            this._props = {};
            for (let t in e) this._props[t] = e[t];
            this._props.state = this.state
        }
        return this._props
    }
    update(e) {
        e.handleDOMEvents != this._props.handleDOMEvents && Yt(this);
        let t = this._props;
        this._props = e, e.plugins && (e.plugins.forEach(ii), this.directPlugins = e.plugins), this.updateStateInner(e.state, t)
    }
    setProps(e) {
        let t = {};
        for (let n in this._props) t[n] = this._props[n];
        t.state = this.state;
        for (let n in e) t[n] = e[n];
        this.update(t)
    }
    updateState(e) {
        this.updateStateInner(e, this._props)
    }
    updateStateInner(e, t) {
        var n;
        let r = this.state,
            s = !1,
            o = !1;
        e.storedMarks && this.composing && (or(this), o = !0), this.state = e;
        let l = r.plugins != e.plugins || this._props.plugins != t.plugins;
        if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
            let p = ni(this);
            Go(p, this.nodeViews) && (this.nodeViews = p, s = !0)
        }(l || t.handleDOMEvents != this._props.handleDOMEvents) && Yt(this), this.editable = ti(this), ei(this);
        let a = Pt(this),
            h = _n(this),
            c = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve",
            f = s || !this.docView.matchesNode(e.doc, h, a);
        (f || !e.selection.eq(r.selection)) && (o = !0);
        let d = c == "preserve" && o && this.dom.style.overflowAnchor == null && ws(this);
        if (o) {
            this.domObserver.stop();
            let p = f && (F || A) && !this.composing && !r.selection.empty && !e.selection.empty && Yo(r.selection, e.selection);
            if (f) {
                let u = A ? this.trackWrites = this.domSelectionRange().focusNode : null;
                this.composing && (this.input.compositionNode = Do(this)), (s || !this.docView.update(e.doc, h, a, this)) && (this.docView.updateOuterDeco(h), this.docView.destroy(), this.docView = Pn(e.doc, h, a, this.dom, this)), u && !this.trackWrites && (p = !0)
            }
            p || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Qs(this)) ? _(this, p) : (ji(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start()
        }
        this.updatePluginViews(r), !((n = this.dragging) === null || n === void 0) && n.node && !r.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, r), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : d && Es(d)
    }
    scrollToSelection() {
        let e = this.domSelectionRange().focusNode;
        if (!this.someProp("handleScrollToSelection", t => t(this)))
            if (this.state.selection instanceof S) {
                let t = this.docView.domAfterPos(this.state.selection.from);
                t.nodeType == 1 && Dn(this, t.getBoundingClientRect(), e)
            } else Dn(this, this.coordsAtPos(this.state.selection.head, 1), e)
    }
    destroyPluginViews() {
        let e;
        for (; e = this.pluginViews.pop();) e.destroy && e.destroy()
    }
    updatePluginViews(e) {
        if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
            this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
            for (let t = 0; t < this.directPlugins.length; t++) {
                let n = this.directPlugins[t];
                n.spec.view && this.pluginViews.push(n.spec.view(this))
            }
            for (let t = 0; t < this.state.plugins.length; t++) {
                let n = this.state.plugins[t];
                n.spec.view && this.pluginViews.push(n.spec.view(this))
            }
        } else
            for (let t = 0; t < this.pluginViews.length; t++) {
                let n = this.pluginViews[t];
                n.update && n.update(this, e)
            }
    }
    updateDraggedNode(e, t) {
        let n = e.node,
            r = -1;
        if (this.state.doc.nodeAt(n.from) == n.node) r = n.from;
        else {
            let s = n.from + (this.state.doc.content.size - t.doc.content.size);
            (s > 0 && this.state.doc.nodeAt(s)) == n.node && (r = s)
        }
        this.dragging = new ar(e.slice, e.move, r < 0 ? void 0 : S.create(this.state.doc, r))
    }
    someProp(e, t) {
        let n = this._props && this._props[e],
            r;
        if (n != null && (r = t ? t(n) : n)) return r;
        for (let o = 0; o < this.directPlugins.length; o++) {
            let l = this.directPlugins[o].props[e];
            if (l != null && (r = t ? t(l) : l)) return r
        }
        let s = this.state.plugins;
        if (s)
            for (let o = 0; o < s.length; o++) {
                let l = s[o].props[e];
                if (l != null && (r = t ? t(l) : l)) return r
            }
    }
    hasFocus() {
        if (F) {
            let e = this.root.activeElement;
            if (e == this.dom) return !0;
            if (!e || !this.dom.contains(e)) return !1;
            for (; e && this.dom != e && this.dom.contains(e);) {
                if (e.contentEditable == "false") return !1;
                e = e.parentElement
            }
            return !0
        }
        return this.root.activeElement == this.dom
    }
    focus() {
        this.domObserver.stop(), this.editable && As(this.dom), _(this), this.domObserver.start()
    }
    get root() {
        let e = this._root;
        if (e == null) {
            for (let t = this.dom.parentNode; t; t = t.parentNode)
                if (t.nodeType == 9 || t.nodeType == 11 && t.host) return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t
        }
        return e || document
    }
    updateRoot() {
        this._root = null
    }
    posAtCoords(e) {
        return Bs(this, e)
    }
    coordsAtPos(e, t = 1) {
        return Ji(this, e, t)
    }
    domAtPos(e, t = 0) {
        return this.docView.domFromPos(e, t)
    }
    nodeDOM(e) {
        let t = this.docView.descAt(e);
        return t ? t.nodeDOM : null
    }
    posAtDOM(e, t, n = -1) {
        let r = this.docView.posFromDOM(e, t, n);
        if (r == null) throw new RangeError("DOM position not inside the editor");
        return r
    }
    endOfTextblock(e, t) {
        return vs(this, t || this.state, e)
    }
    pasteHTML(e, t) {
        return Ge(this, "", e, !1, t || new ClipboardEvent("paste"))
    }
    pasteText(e, t) {
        return Ge(this, e, null, !0, t || new ClipboardEvent("paste"))
    }
    destroy() {
        this.docView && (mo(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Pt(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, ys())
    }
    get isDestroyed() {
        return this.docView == null
    }
    dispatchEvent(e) {
        return yo(this, e)
    }
    dispatch(e) {
        let t = this._props.dispatchTransaction;
        t ? t.call(this, e) : this.updateState(this.state.apply(e))
    }
    domSelectionRange() {
        let e = this.domSelection();
        return P && this.root.nodeType === 11 && Ns(this.dom.ownerDocument) == this.dom && Jo(this, e) || e
    }
    domSelection() {
        return this.root.getSelection()
    }
}

function _n(i) {
    let e = Object.create(null);
    return e.class = "ProseMirror", e.contenteditable = String(i.editable), i.someProp("attributes", t => {
        if (typeof t == "function" && (t = t(i.state)), t)
            for (let n in t) n == "class" ? e.class += " " + t[n] : n == "style" ? e.style = (e.style ? e.style + ";" : "") + t[n] : !e[n] && n != "contenteditable" && n != "nodeName" && (e[n] = String(t[n]))
    }), e.translate || (e.translate = "no"), [W.node(0, i.state.doc.content.size, e)]
}

function ei(i) {
    if (i.markCursor) {
        let e = document.createElement("img");
        e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), i.cursorWrapper = {
            dom: e,
            deco: W.widget(i.state.selection.head, e, {
                raw: !0,
                marks: i.markCursor
            })
        }
    } else i.cursorWrapper = null
}

function ti(i) {
    return !i.someProp("editable", e => e(i.state) === !1)
}

function Yo(i, e) {
    let t = Math.min(i.$anchor.sharedDepth(i.head), e.$anchor.sharedDepth(e.head));
    return i.$anchor.start(t) != e.$anchor.start(t)
}

function ni(i) {
    let e = Object.create(null);

    function t(n) {
        for (let r in n) Object.prototype.hasOwnProperty.call(e, r) || (e[r] = n[r])
    }
    return i.someProp("nodeViews", t), i.someProp("markViews", t), e
}

function Go(i, e) {
    let t = 0,
        n = 0;
    for (let r in i) {
        if (i[r] != e[r]) return !0;
        t++
    }
    for (let r in e) n++;
    return t != n
}

function ii(i) {
    if (i.spec.state || i.spec.filterTransaction || i.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component")
}
export {
    Y as A, T as D, rl as E, y as F, qe as M, S as N, nl as P, K as R, C as S, O as T, k as a, el as b, tl as c, W as d, il as e, _o as f, Zo as g, Le as h, E as i, oe as j, U as k, Qo as l, us as m, kr as n, rs as o, ss as r
};
//# sourceMappingURL=bv1tgraszqspgaxz.js.map
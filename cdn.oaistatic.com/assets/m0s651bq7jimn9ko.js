import {
    g0 as ut,
    g1 as dt,
    g2 as ft,
    g3 as mt,
    g4 as O,
    g5 as at,
    g6 as pt,
    g7 as _,
    g8 as gt,
    g9 as g,
    fD as yt,
    ga as M,
    gb as vt,
    gc as U,
    gd as f,
    ge as ot,
    gf as j,
    gg as w,
    gh as p,
    gi as E,
    gj as W,
    gk as H,
    gl as k,
    gm as Tt,
    gn as Dt,
    go as Pt,
    gp as xt,
    gq as G,
    gr as V,
    gs as q,
    gt as B,
    gu as St,
    gv as jt,
    gw as C,
    gx as Bt,
    gy as b,
    gz as At,
    gA as X,
    gB as Y,
    gC as F,
    gD as Rt,
    gE as Lt,
    gF as $,
    gG as kt,
    gH as Vt,
    gI as wt,
    gJ as Et,
    gK as Ut,
    gL as rt,
    gM as Ct,
    gN as Ft,
    gO as Ot,
    gP as Mt,
    gQ as bt
} from "./ab2oz9enzsoo3wow.js";
const P = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    L = typeof window < "u" && window.MotionDebug !== void 0,
    I = ["", "X", "Y", "Z"],
    It = {
        visibility: "hidden"
    },
    Z = 1e3;
let Nt = 0;

function N(t, n, h, u) {
    const {
        latestValues: v
    } = n;
    v[t] && (h[t] = v[t], n.setStaticValue(t, 0), u && (u[t] = 0))
}

function nt(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: n
    } = t.options;
    if (!n) return;
    const h = kt(n);
    if (window.MotionHasOptimisedAnimation(h, "transform")) {
        const {
            layout: v,
            layoutId: A
        } = t.options;
        window.MotionCancelOptimisedAnimation(h, "transform", U, !(v || A))
    }
    const {
        parent: u
    } = t;
    u && !u.hasCheckedOptimisedAppear && nt(u)
}

function lt({
    attachResizeListener: t,
    defaultParent: n,
    measureScroll: h,
    checkIsScrollRoot: u,
    resetTransform: v
}) {
    return class {
        constructor(e = {}, i = n ? .()) {
            this.id = Nt++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, L && (P.totalNodes = P.resolvedTargetDeltas = P.recalculatedProjection = 0), this.nodes.forEach(Wt), this.nodes.forEach(Yt), this.nodes.forEach($t), this.nodes.forEach(Ht), L && window.MotionDebug.record(P)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
            for (let s = 0; s < this.path.length; s++) this.path[s].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ut)
        }
        addEventListener(e, i) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new dt), this.eventHandlers.get(e).add(i)
        }
        notifyListeners(e, ...i) {
            const s = this.eventHandlers.get(e);
            s && s.notify(...i)
        }
        hasListeners(e) {
            return this.eventHandlers.has(e)
        }
        mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = ft(e), this.instance = e;
            const {
                layoutId: s,
                layout: a,
                visualElement: o
            } = this.options;
            if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (a || s) && (this.isLayoutDirty = !0), t) {
                let r;
                const l = () => this.root.updateBlockedByResize = !1;
                t(e, () => {
                    this.root.updateBlockedByResize = !0, r && r(), r = mt(l, 250), O.hasAnimatedSinceResize && (O.hasAnimatedSinceResize = !1, this.nodes.forEach(K))
                })
            }
            s && this.root.registerSharedNode(s, this), this.options.animate !== !1 && o && (s || a) && this.addEventListener("didUpdate", ({
                delta: r,
                hasLayoutChanged: l,
                hasRelativeTargetChanged: c,
                layout: m
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const d = this.options.transition || o.getDefaultTransition() || te,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: D
                    } = o.getProps(),
                    S = !this.targetLayout || !at(this.targetLayout, m) || c,
                    y = !l && c;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || l && (S || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(r, y);
                    const T = { ...pt(d, "layout"),
                        onPlay: x,
                        onComplete: D
                    };
                    (o.shouldReduceMotion || this.options.layoutRoot) && (T.delay = 0, T.type = !1), this.startAnimation(T)
                } else l || K(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = m
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const e = this.getStack();
            e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, _(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Zt), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: e
            } = this.options;
            return e && e.getProps().transformTemplate
        }
        willUpdate(e = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && nt(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let o = 0; o < this.path.length; o++) {
                const r = this.path[o];
                r.shouldResetTransform = !0, r.updateScroll("snapshot"), r.options.layoutRoot && r.willUpdate(!1)
            }
            const {
                layoutId: i,
                layout: s
            } = this.options;
            if (i === void 0 && !s) return;
            const a = this.getTransformTemplate();
            this.prevTransformTemplateValue = a ? a(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(J);
                return
            }
            this.isUpdating || this.nodes.forEach(qt), this.isUpdating = !1, this.nodes.forEach(Xt), this.nodes.forEach(zt), this.nodes.forEach(_t), this.clearAllSnapshots();
            const i = gt.now();
            g.delta = yt(0, 1e3 / 60, i - g.timestamp), g.timestamp = i, g.isProcessing = !0, M.update.process(g), M.preRender.process(g), M.render.process(g), g.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, vt.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Gt), this.sharedNodes.forEach(Jt)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, U.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            U.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let s = 0; s < this.path.length; s++) this.path[s].updateScroll();
            const e = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = f(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: i
            } = this.options;
            i && i.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
        }
        updateScroll(e = "measure") {
            let i = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (i = !1), i) {
                const s = u(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: e,
                    isRoot: s,
                    offset: h(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : s
                }
            }
        }
        resetTransform() {
            if (!v) return;
            const e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                i = this.projectionDelta && !ot(this.projectionDelta),
                s = this.getTransformTemplate(),
                a = s ? s(this.latestValues, "") : void 0,
                o = a !== this.prevTransformTemplateValue;
            e && (i || j(this.latestValues) || o) && (v(this.instance, a), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(e = !0) {
            const i = this.measurePageBox();
            let s = this.removeElementScroll(i);
            return e && (s = this.removeTransform(s)), ee(s), {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var e;
            const {
                visualElement: i
            } = this.options;
            if (!i) return f();
            const s = i.measureViewportBox();
            if (!(((e = this.scroll) === null || e === void 0 ? void 0 : e.wasRoot) || this.path.some(ie))) {
                const {
                    scroll: o
                } = this.root;
                o && (w(s.x, o.offset.x), w(s.y, o.offset.y))
            }
            return s
        }
        removeElementScroll(e) {
            var i;
            const s = f();
            if (p(s, e), !((i = this.scroll) === null || i === void 0) && i.wasRoot) return s;
            for (let a = 0; a < this.path.length; a++) {
                const o = this.path[a],
                    {
                        scroll: r,
                        options: l
                    } = o;
                o !== this.root && r && l.layoutScroll && (r.wasRoot && p(s, e), w(s.x, r.offset.x), w(s.y, r.offset.y))
            }
            return s
        }
        applyTransform(e, i = !1) {
            const s = f();
            p(s, e);
            for (let a = 0; a < this.path.length; a++) {
                const o = this.path[a];
                !i && o.options.layoutScroll && o.scroll && o !== o.root && E(s, {
                    x: -o.scroll.offset.x,
                    y: -o.scroll.offset.y
                }), j(o.latestValues) && E(s, o.latestValues)
            }
            return j(this.latestValues) && E(s, this.latestValues), s
        }
        removeTransform(e) {
            const i = f();
            p(i, e);
            for (let s = 0; s < this.path.length; s++) {
                const a = this.path[s];
                if (!a.instance || !j(a.latestValues)) continue;
                W(a.latestValues) && a.updateSnapshot();
                const o = f(),
                    r = a.measurePageBox();
                p(o, r), H(i, a.latestValues, a.snapshot ? a.snapshot.layoutBox : void 0, o)
            }
            return j(this.latestValues) && H(i, this.latestValues), i
        }
        setTargetDelta(e) {
            this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(e) {
            this.options = { ...this.options,
                ...e,
                crossfade: e.crossfade !== void 0 ? e.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== g.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(e = !1) {
            var i;
            const s = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            const a = !!this.resumingFrom || this !== s;
            if (!(e || a && this.isSharedProjectionDirty || this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: r,
                layoutId: l
            } = this.options;
            if (!(!this.layout || !(r || l))) {
                if (this.resolvedRelativeTargetAt = g.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const c = this.getClosestProjectingParent();
                    c && c.layout && this.animationProgress !== 1 ? (this.relativeParent = c, this.forceRelativeParentToResolveTarget(), this.relativeTarget = f(), this.relativeTargetOrigin = f(), k(this.relativeTargetOrigin, this.layout.layoutBox, c.layout.layoutBox), p(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = f(), this.targetWithTransforms = f()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Tt(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : p(this.target, this.layout.layoutBox), Dt(this.target, this.targetDelta)) : p(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const c = this.getClosestProjectingParent();
                        c && !!c.resumingFrom == !!this.resumingFrom && !c.options.layoutScroll && c.target && this.animationProgress !== 1 ? (this.relativeParent = c, this.forceRelativeParentToResolveTarget(), this.relativeTarget = f(), this.relativeTargetOrigin = f(), k(this.relativeTargetOrigin, this.target, c.target), p(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    L && P.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || W(this.parent.latestValues) || Pt(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var e;
            const i = this.getLead(),
                s = !!this.resumingFrom || this !== i;
            let a = !0;
            if ((this.isProjectionDirty || !((e = this.parent) === null || e === void 0) && e.isProjectionDirty) && (a = !1), s && (this.isSharedProjectionDirty || this.isTransformDirty) && (a = !1), this.resolvedRelativeTargetAt === g.timestamp && (a = !1), a) return;
            const {
                layout: o,
                layoutId: r
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(o || r)) return;
            p(this.layoutCorrected, this.layout.layoutBox);
            const l = this.treeScale.x,
                c = this.treeScale.y;
            xt(this.layoutCorrected, this.treeScale, this.path, s), i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox, i.targetWithTransforms = f());
            const {
                target: m
            } = i;
            if (!m) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (G(this.prevProjectionDelta.x, this.projectionDelta.x), G(this.prevProjectionDelta.y, this.projectionDelta.y)), V(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== l || this.treeScale.y !== c || !q(this.projectionDelta.x, this.prevProjectionDelta.x) || !q(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), L && P.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(e = !0) {
            var i;
            if ((i = this.options.visualElement) === null || i === void 0 || i.scheduleRender(), e) {
                const s = this.getStack();
                s && s.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = B(), this.projectionDelta = B(), this.projectionDeltaWithTransform = B()
        }
        setAnimationOrigin(e, i = !1) {
            const s = this.snapshot,
                a = s ? s.latestValues : {},
                o = { ...this.latestValues
                },
                r = B();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !i;
            const l = f(),
                c = s ? s.source : void 0,
                m = this.layout ? this.layout.source : void 0,
                d = c !== m,
                x = this.getStack(),
                D = !x || x.members.length <= 1,
                S = !!(d && !D && this.options.crossfade === !0 && !this.path.some(Qt));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = T => {
                const R = T / 1e3;
                Q(r.x, e.x, R), Q(r.y, e.y, R), this.setTargetDelta(r), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (k(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Kt(this.relativeTarget, this.relativeTargetOrigin, l, R), y && Vt(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = f()), p(y, this.relativeTarget)), d && (this.animationValues = o, St(o, a, this.latestValues, R, S, D)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = R
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(e) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (_(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = U.update(() => {
                O.hasAnimatedSinceResize = !0, this.currentAnimation = jt(0, Z, { ...e,
                    onUpdate: i => {
                        this.mixTargetDelta(i), e.onUpdate && e.onUpdate(i)
                    },
                    onComplete: () => {
                        e.onComplete && e.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const e = this.getStack();
            e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Z), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const e = this.getLead();
            let {
                targetWithTransforms: i,
                target: s,
                layout: a,
                latestValues: o
            } = e;
            if (!(!i || !s || !a)) {
                if (this !== e && this.layout && a && ht(this.options.animationType, this.layout.layoutBox, a.layoutBox)) {
                    s = this.target || f();
                    const r = C(this.layout.layoutBox.x);
                    s.x.min = e.target.x.min, s.x.max = s.x.min + r;
                    const l = C(this.layout.layoutBox.y);
                    s.y.min = e.target.y.min, s.y.max = s.y.min + l
                }
                p(i, s), E(i, o), V(this.projectionDeltaWithTransform, this.layoutCorrected, i, o)
            }
        }
        registerSharedNode(e, i) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new Bt), this.sharedNodes.get(e).add(i);
            const a = i.options.initialPromotionConfig;
            i.promote({
                transition: a ? a.transition : void 0,
                preserveFollowOpacity: a && a.shouldPreserveFollowOpacity ? a.shouldPreserveFollowOpacity(i) : void 0
            })
        }
        isLead() {
            const e = this.getStack();
            return e ? e.lead === this : !0
        }
        getLead() {
            var e;
            const {
                layoutId: i
            } = this.options;
            return i ? ((e = this.getStack()) === null || e === void 0 ? void 0 : e.lead) || this : this
        }
        getPrevLead() {
            var e;
            const {
                layoutId: i
            } = this.options;
            return i ? (e = this.getStack()) === null || e === void 0 ? void 0 : e.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: e
            } = this.options;
            if (e) return this.root.sharedNodes.get(e)
        }
        promote({
            needsReset: e,
            transition: i,
            preserveFollowOpacity: s
        } = {}) {
            const a = this.getStack();
            a && a.promote(this, s), e && (this.projectionDelta = void 0, this.needsReset = !0), i && this.setOptions({
                transition: i
            })
        }
        relegate() {
            const e = this.getStack();
            return e ? e.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: e
            } = this.options;
            if (!e) return;
            let i = !1;
            const {
                latestValues: s
            } = e;
            if ((s.z || s.rotate || s.rotateX || s.rotateY || s.rotateZ || s.skewX || s.skewY) && (i = !0), !i) return;
            const a = {};
            s.z && N("z", e, a, this.animationValues);
            for (let o = 0; o < I.length; o++) N(`rotate${I[o]}`, e, a, this.animationValues), N(`skew${I[o]}`, e, a, this.animationValues);
            e.render();
            for (const o in a) e.setStaticValue(o, a[o]), this.animationValues && (this.animationValues[o] = a[o]);
            e.scheduleRender()
        }
        getProjectionStyles(e) {
            var i, s;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return It;
            const a = {
                    visibility: ""
                },
                o = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, a.opacity = "", a.pointerEvents = b(e ? .pointerEvents) || "", a.transform = o ? o(this.latestValues, "") : "none", a;
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
                const d = {};
                return this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = b(e ? .pointerEvents) || ""), this.hasProjected && !j(this.latestValues) && (d.transform = o ? o({}, "") : "none", this.hasProjected = !1), d
            }
            const l = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(), a.transform = At(this.projectionDeltaWithTransform, this.treeScale, l), o && (a.transform = o(l, a.transform));
            const {
                x: c,
                y: m
            } = this.projectionDelta;
            a.transformOrigin = `${c.origin*100}% ${m.origin*100}% 0`, r.animationValues ? a.opacity = r === this ? (s = (i = l.opacity) !== null && i !== void 0 ? i : this.latestValues.opacity) !== null && s !== void 0 ? s : 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : a.opacity = r === this ? l.opacity !== void 0 ? l.opacity : "" : l.opacityExit !== void 0 ? l.opacityExit : 0;
            for (const d in X) {
                if (l[d] === void 0) continue;
                const {
                    correct: x,
                    applyTo: D
                } = X[d], S = a.transform === "none" ? l[d] : x(l[d], r);
                if (D) {
                    const y = D.length;
                    for (let T = 0; T < y; T++) a[D[T]] = S
                } else a[d] = S
            }
            return this.options.layoutId && (a.pointerEvents = r === this ? b(e ? .pointerEvents) || "" : "none"), a
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(e => {
                var i;
                return (i = e.currentAnimation) === null || i === void 0 ? void 0 : i.stop()
            }), this.root.nodes.forEach(J), this.root.sharedNodes.clear()
        }
    }
}

function zt(t) {
    t.updateLayout()
}

function _t(t) {
    var n;
    const h = ((n = t.resumeFrom) === null || n === void 0 ? void 0 : n.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && h && t.hasListeners("didUpdate")) {
        const {
            layoutBox: u,
            measuredBox: v
        } = t.layout, {
            animationType: A
        } = t.options, e = h.source !== t.layout.source;
        A === "size" ? Y(r => {
            const l = e ? h.measuredBox[r] : h.layoutBox[r],
                c = C(l);
            l.min = u[r].min, l.max = l.min + c
        }) : ht(A, h.layoutBox, u) && Y(r => {
            const l = e ? h.measuredBox[r] : h.layoutBox[r],
                c = C(u[r]);
            l.max = l.min + c, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[r].max = t.relativeTarget[r].min + c)
        });
        const i = B();
        V(i, u, h.layoutBox);
        const s = B();
        e ? V(s, t.applyTransform(v, !0), h.measuredBox) : V(s, u, h.layoutBox);
        const a = !ot(i);
        let o = !1;
        if (!t.resumeFrom) {
            const r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
                const {
                    snapshot: l,
                    layout: c
                } = r;
                if (l && c) {
                    const m = f();
                    k(m, h.layoutBox, l.layoutBox);
                    const d = f();
                    k(d, u, c.layoutBox), at(m, d) || (o = !0), r.options.layoutRoot && (t.relativeTarget = d, t.relativeTargetOrigin = m, t.relativeParent = r)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: u,
            snapshot: h,
            delta: s,
            layoutDelta: i,
            hasLayoutChanged: a,
            hasRelativeTargetChanged: o
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: u
        } = t.options;
        u && u()
    }
    t.options.transition = void 0
}

function Wt(t) {
    L && P.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function Ht(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function Gt(t) {
    t.clearSnapshot()
}

function J(t) {
    t.clearMeasurements()
}

function qt(t) {
    t.isLayoutDirty = !1
}

function Xt(t) {
    const {
        visualElement: n
    } = t.options;
    n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function K(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function Yt(t) {
    t.resolveTargetDelta()
}

function $t(t) {
    t.calcProjection()
}

function Zt(t) {
    t.resetSkewAndRotation()
}

function Jt(t) {
    t.removeLeadSnapshot()
}

function Q(t, n, h) {
    t.translate = F(n.translate, 0, h), t.scale = F(n.scale, 1, h), t.origin = n.origin, t.originPoint = n.originPoint
}

function tt(t, n, h, u) {
    t.min = F(n.min, h.min, u), t.max = F(n.max, h.max, u)
}

function Kt(t, n, h, u) {
    tt(t.x, n.x, h.x, u), tt(t.y, n.y, h.y, u)
}

function Qt(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const te = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    et = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    it = et("applewebkit/") && !et("chrome/") ? Math.round : Rt;

function st(t) {
    t.min = it(t.min), t.max = it(t.max)
}

function ee(t) {
    st(t.x), st(t.y)
}

function ht(t, n, h) {
    return t === "position" || t === "preserve-aspect" && !Lt($(n), $(h), .2)
}

function ie(t) {
    var n;
    return t !== t.root && ((n = t.scroll) === null || n === void 0 ? void 0 : n.wasRoot)
}
const se = lt({
        attachResizeListener: (t, n) => wt(t, "resize", n),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    z = {
        current: void 0
    },
    ct = lt({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!z.current) {
                const t = new se({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), z.current = t
            }
            return z.current
        },
        resetTransform: (t, n) => {
            t.style.transform = n !== void 0 ? n : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    ae = {
        pan: {
            Feature: Et
        },
        drag: {
            Feature: Ut,
            ProjectionNode: ct,
            MeasureLayout: rt
        }
    },
    oe = {
        layout: {
            ProjectionNode: ct,
            MeasureLayout: rt
        }
    },
    re = Ct({ ...Ot,
        ...Mt,
        ...ae,
        ...oe
    }, Ft),
    he = bt(re);
export {
    he as m
};
//# sourceMappingURL=m0s651bq7jimn9ko.js.map
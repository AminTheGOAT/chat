import {
    r as n
} from "./hbhpmx2ipkndwudc.js";
var f = typeof window > "u",
    h = !f && "ResizeObserver" in window,
    c = function() {},
    p = {
        observe: c,
        unobserve: c
    },
    u = h ? new ResizeObserver(function(e) {
        for (var t = 0, i = e; t < i.length; t++) {
            var o = i[t],
                s = o.target,
                r = s.getBoundingClientRect(),
                a = s.$$useElementDimensionsSet;
            a && a(Object.assign(r, o))
        }
    }) : p,
    d = f ? n.useEffect : n.useLayoutEffect,
    b = function() {
        function e() {
            this.bottom = 0, this.height = 0, this.left = 0, this.right = 0, this.top = 0, this.width = 0, this.x = 0, this.y = 0
        }
        return e.prototype.toJSON = function() {
            return JSON.stringify(this)
        }, e
    }(),
    l = new b,
    S = new b,
    v = {
        inlineSize: 0,
        blockSize: 0
    },
    R = Object.assign(S, {
        contentBoxSize: v,
        borderBoxSize: v,
        contentRect: l,
        target: null
    }),
    m = function() {
        var e = n.useRef(null),
            t = n.useState(R),
            i = t[0],
            o = t[1],
            s = n.useCallback(function(r) {
                e.current && u.unobserve(e.current), r && r.nodeType === 1 && (r.$$useElementDimensionsSet = o, u.observe(r))
            }, []);
        return d(function() {
            return function() {
                e.current && u.unobserve(e.current)
            }
        }, []), [i, s]
    };
export {
    m as u
};
//# sourceMappingURL=eomgak7isz9y8t2v.js.map
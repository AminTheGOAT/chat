import {
    c
} from "./hbhpmx2ipkndwudc.js";
const e = c(() => ({
        rect: null
    })),
    g = t => {
        if (!t) return e.setState({
            rect: null
        });
        const {
            height: s,
            left: n,
            top: a,
            width: r
        } = t.getBoundingClientRect(), {
            borderRadius: o
        } = getComputedStyle(t);
        e.setState({
            rect: {
                height: s,
                left: n,
                top: a,
                width: r,
                borderRadius: o
            }
        })
    };

function i(t) {
    if (t) return `textdoc-message-${t}`
}
export {
    i as g, g as s, e as u
};
//# sourceMappingURL=cmz8r2ykn5c1lxp9.js.map
import {
    r as d,
    G as C,
    fe as I,
    ff as N,
    H as E,
    fi as j,
    m as e,
    aX as D,
    aR as u,
    dc as L,
    de as F,
    dd as v,
    fj as f,
    u as y
} from "./hbhpmx2ipkndwudc.js";
import {
    aM as T,
    aN as k,
    aO as A
} from "./mgr0w69u3c317psp.js";
import {
    cm as R,
    cn as V,
    co as U,
    cp as S,
    cq as G,
    cr as H,
    cs as z,
    ct as J
} from "./ab2oz9enzsoo3wow.js";
import {
    S as a
} from "./mco6ffvkuw2vrlq8.js";

function O({
    voice: t
}) {
    const [l, c] = d.useState(!1), i = C(), s = I(), g = t.voice, r = t.preview_url, n = d.useRef({
        playPromise: null
    }).current, o = N(p => p.isPlaying && p.sourceUrl === r), h = E(), m = d.useCallback(async () => {
        if (!s) return;
        const p = {
            voice: g,
            source: r
        };
        j.previews.click(p);
        try {
            c(!0), s.changeSource(r), n.playPromise = s.play(), c(!1)
        } catch (P) {
            j.previews.error(P, p), h.danger(i.formatMessage({
                id: "DeIYxH",
                defaultMessage: "Something went wrong playing preview"
            }))
        }
    }, [i, s, r, g, n, h]), x = d.useCallback(() => {
        s && (n.playPromise ? n.playPromise.then(() => {
            s.stop(), n.playPromise = null
        }) : s.stop())
    }, [s, n]), w = d.useCallback(() => {
        o ? x() : l || m()
    }, [x, m, l, o]);
    return d.useEffect(() => () => {
        o && x()
    }, [t, o, x]), e.jsx(D, {
        onClick: w,
        color: "secondary",
        className: "flex flex-row flex-nowrap items-center gap-1 border-none font-normal",
        loading: l,
        icon: o ? T : k,
        children: o ? e.jsx(u, {
            id: "yGpEMJ",
            defaultMessage: "Stop"
        }) : e.jsx(u, {
            id: "JwYDVp",
            defaultMessage: "Play"
        })
    })
}
const Z = {
    Trigger: Y,
    Content: _
};

function b() {
    return y("174366048") ? .value
}

function Y() {
    return b() ? e.jsx(R, {
        value: V.Speech,
        icon: e.jsx(A, {
            className: "icon-sm"
        }),
        label: e.jsx(u, {
            id: "speechSettings.trigger",
            defaultMessage: "Speech"
        })
    }) : null
}

function _() {
    const t = b(),
        l = y("1426009137") ? .value;
    return t ? e.jsxs(U, {
        value: V.Speech,
        children: [e.jsx(S, {
            children: e.jsx(q, {})
        }), l ? e.jsx(S, {
            children: e.jsx(B, {})
        }) : null]
    }) : null
}

function M(t) {
    const {
        data: l,
        isLoading: c
    } = L(t) || {}, i = F();
    return {
        isLoading: c,
        value: l,
        setValue: s => {
            i.mutate({
                setting: t,
                value: s
            })
        }
    }
}

function q() {
    const {
        isLoading: t,
        value: l,
        setValue: c
    } = M(v.VoiceName), i = G(), s = H(), g = t ? "" : z(l, s), r = i.find(({
        voice: n
    }) => n === g);
    return e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "flex flex-col flex-nowrap gap-2",
            children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsx("div", {
                    children: e.jsx(u, {
                        id: "speechSettings.content.voice",
                        defaultMessage: "Voice"
                    })
                }), e.jsxs("div", {
                    className: "flex flex-row flex-nowrap items-center gap-1",
                    children: [r ? e.jsxs(e.Fragment, {
                        children: [e.jsx(O, {
                            voice: r
                        }), e.jsx("div", {
                            className: "h-4 border-l"
                        })]
                    }) : null, e.jsxs(a.Root, {
                        value: g,
                        onValueChange: n => c(n),
                        disabled: t,
                        children: [e.jsxs(a.Trigger, {
                            children: [e.jsx(a.Value, {}), e.jsx(a.Icon, {})]
                        }), e.jsx(a.Portal, {
                            children: e.jsx(a.Content, {
                                children: i.map(({
                                    voice: n,
                                    name: o
                                }) => e.jsx(a.Item, {
                                    value: n,
                                    children: o
                                }, n))
                            })
                        })]
                    })]
                })]
            })
        })
    })
}

function B() {
    const {
        isLoading: t,
        value: l,
        setValue: c
    } = M(v.VoiceMainLanguage);
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [e.jsx("div", {
                children: e.jsx(u, {
                    id: "speechSettings.content.language",
                    defaultMessage: "Main Language"
                })
            }), e.jsxs(a.Root, {
                value: t ? "" : l ? ? f.Auto,
                onValueChange: i => c(i),
                disabled: t,
                children: [e.jsxs(a.Trigger, {
                    children: [e.jsx(a.Value, {}), e.jsx(a.Icon, {})]
                }), e.jsx(a.Portal, {
                    children: e.jsxs(a.Content, {
                        position: "popper",
                        style: {
                            maxHeight: "calc(var(--radix-select-content-available-height) - 5rem)"
                        },
                        children: [e.jsx(a.Item, {
                            value: f.Auto,
                            children: e.jsx(u, {
                                id: "speechSettings.content.autoDetect",
                                defaultMessage: "Auto-Detect"
                            })
                        }), Object.entries(f).filter(([i, s]) => s !== f.Auto).map(([i, s]) => e.jsx(a.Item, {
                            value: s,
                            className: "capitalize",
                            children: i
                        }, s))]
                    })
                })]
            })]
        }), e.jsx(J, {
            children: e.jsx(u, {
                id: "speechSettings.content.autoDetectDescription",
                defaultMessage: "For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."
            })
        })]
    })
}
export {
    Z as S, M as u
};
//# sourceMappingURL=k4r03ntvwl7kqhar.js.map
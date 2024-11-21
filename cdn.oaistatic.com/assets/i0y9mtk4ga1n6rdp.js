import {
    eO as se,
    cT as te,
    cU as re,
    cV as ae,
    hq as ne,
    g as oe,
    hr as ie,
    A as le,
    hs as de,
    eR as ce,
    m as e,
    aD as b,
    aR as d,
    aJ as F,
    r as w,
    G as S,
    H as A,
    aX as P,
    P as v,
    d as p,
    c9 as H,
    df as U,
    L as _,
    t as q,
    s as me,
    w as ue,
    br as j,
    aL as fe
} from "./hbhpmx2ipkndwudc.js";
import {
    iJ as $,
    iK as ge,
    iL as xe,
    iM as B,
    iN as Me,
    iO as he,
    iP as ye,
    iQ as je,
    c6 as x,
    iR as Q,
    iS as be,
    c2 as ve
} from "./ab2oz9enzsoo3wow.js";
import {
    bt as pe,
    E as we,
    ad as Se
} from "./mgr0w69u3c317psp.js";
import {
    m as Ce
} from "./m0s651bq7jimn9ko.js";
var Re = se,
    Ne = te,
    Ee = "[object RegExp]";

function ke(s) {
    return Ne(s) && Re(s) == Ee
}
var _e = ke,
    Te = _e,
    Oe = ae,
    G = re,
    L = G && G.isRegExp,
    Ue = L ? Oe(L) : Te,
    Be = Ue,
    Ge = ne,
    Le = Ge("length"),
    Ie = Le,
    W = "\\ud800-\\udfff",
    ze = "\\u0300-\\u036f",
    De = "\\ufe20-\\ufe2f",
    Fe = "\\u20d0-\\u20ff",
    Ae = ze + De + Fe,
    Pe = "\\ufe0e\\ufe0f",
    He = "[" + W + "]",
    N = "[" + Ae + "]",
    E = "\\ud83c[\\udffb-\\udfff]",
    qe = "(?:" + N + "|" + E + ")",
    K = "[^" + W + "]",
    Y = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    J = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    $e = "\\u200d",
    V = qe + "?",
    X = "[" + Pe + "]?",
    Qe = "(?:" + $e + "(?:" + [K, Y, J].join("|") + ")" + X + V + ")*",
    We = X + V + Qe,
    Ke = "(?:" + [K + N + "?", N, Y, J, He].join("|") + ")",
    I = RegExp(E + "(?=" + E + ")|" + Ke + We, "g");

function Ye(s) {
    for (var t = I.lastIndex = 0; I.test(s);) ++t;
    return t
}
var Je = Ye,
    Ve = Ie,
    Xe = $,
    Ze = Je;

function es(s) {
    return Xe(s) ? Ze(s) : Ve(s)
}
var ss = es,
    z = ie,
    ts = ge,
    rs = $,
    as = le,
    ns = Be,
    os = ss,
    is = xe,
    ls = de,
    D = ce,
    ds = 30,
    cs = "...",
    ms = /\w*$/;

function us(s, t) {
    var o = ds,
        r = cs;
    if (as(t)) {
        var a = "separator" in t ? t.separator : a;
        o = "length" in t ? ls(t.length) : o, r = "omission" in t ? z(t.omission) : r
    }
    s = D(s);
    var n = s.length;
    if (rs(s)) {
        var c = is(s);
        n = c.length
    }
    if (o >= n) return s;
    var l = o - os(r);
    if (l < 1) return r;
    var i = c ? ts(c, 0, l).join("") : s.slice(0, l);
    if (a === void 0) return i + r;
    if (c && (l += i.length - l), ns(a)) {
        if (s.slice(l).search(a)) {
            var u, f = i;
            for (a.global || (a = RegExp(a.source, D(ms.exec(a)) + "g")), a.lastIndex = 0; u = a.exec(f);) var M = u.index;
            i = i.slice(0, M === void 0 ? l : M)
        }
    } else if (s.indexOf(z(a), l) != l) {
        var g = i.lastIndexOf(a);
        g > -1 && (i = i.slice(0, g))
    }
    return i + r
}
var fs = us;
const gs = oe(fs),
    xs = 91,
    T = 100;

function k(s) {
    return s < T ? "bg-[#fcf6e0] text-yellow-500 dark:bg-yellow-600 dark:text-yellow-100" : "bg-orange-100 text-[#f48c15] dark:bg-orange-800 dark:text-orange-100"
}

function O(s) {
    return Me() && s != null && s >= xs
}

function Ms({
    memoryFullPct: s,
    className: t,
    children: o
}) {
    return O(s) ? e.jsx("div", {
        className: b("rounded-lg border border-token-border-light p-1 text-sm", t),
        children: e.jsxs(Ce.div, {
            className: b("flex items-center overflow-hidden whitespace-nowrap rounded px-2 py-1.5", k(s)),
            initial: {
                width: 0
            },
            animate: {
                width: `${s}%`
            },
            transition: {
                duration: .5
            },
            children: [e.jsx(d, {
                id: "6D2etG",
                defaultMessage: "{memoryFullPct}% full",
                values: {
                    memoryFullPct: s
                }
            }), o]
        })
    }) : null
}

function Ns({
    memoryFullPct: s
}) {
    return O(s) ? e.jsxs("div", {
        className: "flex items-center justify-center",
        children: [e.jsx("div", {
            className: b("relative -mr-1 h-2 w-2 rotate-45 transform border-white/10", k(s))
        }), e.jsxs("div", {
            className: b("flex items-center rounded-lg px-3 py-1.5", k(s)),
            children: [e.jsx(d, {
                id: "x7M6HK",
                defaultMessage: "{memoryFullPct}%",
                values: {
                    memoryFullPct: s
                }
            }), e.jsx(F, {
                label: s < T ? e.jsx(d, {
                    id: "VXohcH",
                    defaultMessage: "Memory is almost full. Once memory is full, new memories won’t be created. You can forget existing memories to make space."
                }) : e.jsx(d, {
                    id: "pQ9dnt",
                    defaultMessage: "Memory is full. New memories won’t be created. You can forget existing memories to make space."
                }),
                children: e.jsx(pe, {
                    className: "icon-sm ml-1 text-token-text-secondary"
                })
            })]
        })]
    }) : null
}

function hs({
    memoryFullPct: s,
    className: t
}) {
    return O(s) ? e.jsxs("div", {
        className: b("flex flex-col gap-2", t),
        children: [e.jsx(Ms, {
            memoryFullPct: s
        }), e.jsx("div", {
            className: "pl-3 text-sm text-token-text-secondary",
            children: s < T ? e.jsx(d, {
                id: "z3LYM2",
                defaultMessage: "<strong>Memory almost full</strong>. Once memory is full, new memories won’t be created. You can forget existing memories to make space. <a>Learn more</a>.",
                values: {
                    strong: r => e.jsx("strong", {
                        children: r
                    }),
                    a: r => e.jsx("a", {
                        href: B,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "underline",
                        children: r
                    })
                }
            }) : e.jsx(d, {
                id: "6rc4Jv",
                defaultMessage: "<strong>Memory is full</strong>. New memories won’t be created. You can forget existing memories to make space. <a>Learn more</a>.",
                values: {
                    strong: r => e.jsx("strong", {
                        children: r
                    }),
                    a: r => e.jsx("a", {
                        href: B,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "underline",
                        children: r
                    })
                }
            })
        })]
    }) : null
}

function ys({
    description: s,
    onClose: t,
    onConfirm: o
}) {
    const r = S();
    return e.jsx(H, {
        isOpen: !0,
        onClose: t,
        type: "success",
        title: r.formatMessage({
            id: "MemoriesModal.resetModalTitle",
            defaultMessage: "Are you sure?"
        }),
        description: s,
        primaryButton: e.jsx(U.Button, {
            title: r.formatMessage({
                id: "MemoriesModal.resetModalConfirm",
                defaultMessage: "Clear memory"
            }),
            color: "danger",
            onClick: o,
            "data-testid": "confirm-reset-memories-button"
        }),
        secondaryButton: e.jsx(U.Button, {
            title: r.formatMessage({
                id: "MemoriesModal.resetModalCancel",
                defaultMessage: "Cancel"
            }),
            color: "secondary",
            onClick: t
        })
    })
}

function js({
    onReset: s,
    gizmoId: t,
    memoryName: o
}) {
    const [r, a] = w.useState(!1), n = S(), c = A(), l = async () => {
        v.logEvent(p.memorySettingsResetButtonConfirmed);
        try {
            await _.clearUserMemory(t), c.success(n.formatMessage({
                id: "ResetMemoriesButton.resetSuccess",
                defaultMessage: "Memory cleared."
            })), s ? .(), a(!1)
        } catch {
            c.danger(n.formatMessage({
                id: "ResetMemoriesButton.resetFailed",
                defaultMessage: "Failed to clear memory."
            }))
        }
    };
    return e.jsxs(e.Fragment, {
        children: [e.jsx(P, {
            color: "danger-outline",
            onClick: () => {
                v.logEvent(p.memorySettingsResetButtonClicked), a(!0)
            },
            "data-testid": "reset-memories-button",
            children: t ? e.jsx(d, {
                id: "ResetMemoriesButton.resetGizmo",
                defaultMessage: "Clear this GPT's memory"
            }) : e.jsx(d, {
                id: "ResetMemoriesButton.resetChatGPT",
                defaultMessage: "Clear memories"
            })
        }), r && e.jsx(ys, {
            description: n.formatMessage({
                id: "MemoriesModal.resetGizmoModalDescription",
                defaultMessage: "{name} will forget everything it has remembered from your chats. This cannot be undone."
            }, {
                name: o
            }),
            onClose: () => a(!1),
            onConfirm: l
        })]
    })
}

function bs({
    gizmo: s,
    memory: t
}) {
    const o = S(),
        r = A(),
        a = q(),
        {
            mutate: n,
            isPending: c
        } = ue({
            mutationFn: f => _.deleteMemory(f, s ? .id),
            onSettled: () => {
                a.invalidateQueries({
                    queryKey: Q(s ? .id)
                })
            },
            onError: () => {
                r.danger(o.formatMessage({
                    id: "MemoriesModal.deleteFailed",
                    defaultMessage: "Failed to forget memory"
                }), {
                    id: "memoryDeleteFailed"
                })
            }
        }),
        [l, i] = w.useState(!1),
        u = o.formatMessage({
            id: "z2CNgB",
            defaultMessage: "Forget"
        });
    return e.jsxs(e.Fragment, {
        children: [e.jsxs(x.Row, {
            disabled: c,
            children: [e.jsx(x.Cell, {
                children: e.jsx("div", {
                    className: "whitespace-pre-wrap py-2",
                    children: t.content
                })
            }), e.jsx(x.Cell, {
                textAlign: "right",
                children: e.jsx(x.Actions, {
                    children: e.jsx("button", {
                        onClick: () => {
                            v.logEvent(p.memoryModalMemoryDeleteClicked), i(!0)
                        },
                        "aria-label": u,
                        className: "text-token-text-tertiary hover:text-token-text-secondary",
                        children: e.jsx(F, {
                            className: "leading-none",
                            label: u,
                            sideOffset: 4,
                            side: "top",
                            children: e.jsx(we, {
                                className: "icon-sm"
                            })
                        })
                    })
                })
            })]
        }), l && e.jsx(be, {
            isOpen: !0,
            primaryButtonColor: "danger",
            title: u,
            confirmText: o.formatMessage({
                id: "fCn0ar",
                defaultMessage: "Forget"
            }),
            onConfirm: () => {
                v.logEvent(p.memoryModalMemoryDeleteConfirmed), n(t.id), i(!1)
            },
            onClose: () => {
                i(!1)
            },
            children: e.jsx(d, {
                id: "pZ/TCe",
                defaultMessage: '{name} will forget "{title}". This cannot be undone. <link>Learn more</link>',
                values: {
                    name: s ? .name ? ? "ChatGPT",
                    title: e.jsx("strong", {
                        children: gs(t.content, {
                            length: 130,
                            omission: "..."
                        })
                    }),
                    link: f => e.jsx("a", {
                        href: "https://help.openai.com/en/articles/8590148-memory-faq#h_41527f643d",
                        target: "_blank",
                        className: "underline",
                        rel: "noreferrer",
                        children: f
                    })
                }
            })
        })]
    })
}

function vs({
    selectedGizmoId: s,
    onSelect: t,
    items: o
}) {
    const r = o.find(n => n.id === s);

    function a(n) {
        return e.jsx(ve, {
            isFirstParty: n.id === void 0,
            src: n.iconUrl ? ? null,
            className: "icon-md"
        })
    }
    return e.jsx("div", {
        className: "mb-2 inline-flex rounded-md border border-token-border-medium",
        children: e.jsxs(j.Root, {
            children: [e.jsx(j.Trigger, {
                children: e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [r ? e.jsxs(e.Fragment, {
                        children: [a(r), e.jsx("span", {
                            className: "text-token-text-primary",
                            children: r ? .name
                        })]
                    }) : e.jsx(d, {
                        id: "MemoriesModal.unknownGizmo",
                        defaultMessage: "Unknown GPT"
                    }), e.jsx(Se, {
                        className: "icon-sm text-token-text-tertiary"
                    })]
                })
            }), e.jsx(j.Portal, {
                children: e.jsx(j.Content, {
                    children: o.map(n => e.jsxs(j.Item, {
                        className: "flex items-center gap-3",
                        onClick: () => {
                            t(n.id)
                        },
                        children: [a(n), n.name]
                    }, n.id))
                })
            })]
        })
    })
}
const R = fe.div `flex h-full items-center justify-center pb-8 text-sm text-token-text-tertiary rounded-lg border border-token-border-light`;

function ps({
    onClose: s,
    initialGizmoId: t
}) {
    const o = S(),
        r = q(),
        a = he(),
        [n, c] = w.useState(t),
        l = ye();
    w.useEffect(() => {
        v.logEvent(p.memoryModalShown)
    }, []);
    const {
        data: i,
        isLoading: u,
        isError: f,
        refetch: M
    } = je(n, !0, a), g = i ? .memories, {
        data: Z,
        refetch: ee
    } = me({
        queryKey: ["memory_gizmos"],
        queryFn: () => _.getGizmosWithMemory(),
        refetchOnMount: "always"
    }), C = [{
        id: void 0,
        name: "ChatGPT",
        iconUrl: null
    }, ...Z ? .items ? .map(({
        gizmo: m
    }) => ({
        id: m.id,
        name: m.display.name,
        iconUrl: m.display.profile_picture_url
    })) ? ? []], h = C.find(m => m.id === n);
    let y;
    return u ? y = e.jsx(R, {
        children: e.jsx(d, {
            id: "MemoriesModal.loading",
            defaultMessage: "Loading..."
        })
    }) : f ? y = e.jsx(R, {
        children: e.jsxs("div", {
            className: "max-w-sm text-center",
            children: [e.jsx("div", {
                className: "mb-4 text-red-500",
                children: e.jsx(d, {
                    id: "MemoriesModal.somethingWentWrong",
                    defaultMessage: "Something went wrong..."
                })
            }), e.jsx("div", {
                children: e.jsx(P, {
                    color: "secondary",
                    onClick: () => {
                        M()
                    },
                    children: e.jsx(d, {
                        id: "MemoriesModal.retry",
                        defaultMessage: "Retry"
                    })
                })
            })]
        })
    }) : !g || g.length === 0 ? y = e.jsx(R, {
        children: e.jsx("div", {
            className: "max-w-sm text-center",
            children: a ? e.jsx(d, {
                id: "MemoriesModal.noMemories.1",
                defaultMessage: "As you chat with {name}, the details and preferences it remembers will be shown here.",
                values: {
                    name: h ? .name ? ? "ChatGPT"
                }
            }) : e.jsx(d, {
                id: "MemoriesModal.noMemoriesAndDisabled",
                defaultMessage: "Memory is disabled. ChatGPT won't use or create memories."
            })
        })
    }) : y = e.jsx(x.Root, {
        className: "h-full",
        size: "compact",
        bordered: !0,
        children: e.jsx(x.Body, {
            children: g.map(m => e.jsx(bs, {
                gizmo: h ? {
                    id: h.id,
                    name: h.name
                } : void 0,
                memory: m
            }, m.id))
        })
    }), e.jsxs(H, {
        isOpen: !0,
        onClose: s,
        size: "custom",
        className: "max-w-5xl",
        type: "success",
        title: o.formatMessage({
            id: "MemoriesModal.title",
            defaultMessage: "Memory"
        }),
        showCloseButton: !0,
        children: [l && C.length > 1 && e.jsx("div", {
            className: "mb-4",
            children: e.jsx(vs, {
                selectedGizmoId: n,
                items: C,
                onSelect: m => {
                    r.invalidateQueries({
                        queryKey: Q(m)
                    }), c(m)
                }
            })
        }), e.jsx(hs, {
            memoryFullPct: i ? .memoryFullPct,
            className: "mb-5"
        }), e.jsx("div", {
            className: "h-[24rem]",
            children: y
        }), e.jsx("div", {
            className: "mt-5 flex justify-end",
            children: e.jsx(js, {
                onReset: () => {
                    M(), ee(), n && c(void 0)
                },
                gizmoId: n,
                memoryName: h ? .name ? ? "ChatGPT"
            })
        })]
    })
}
const Es = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ps
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    Ns as M, js as R, ps as a, Es as b
};
//# sourceMappingURL=i0y9mtk4ga1n6rdp.js.map
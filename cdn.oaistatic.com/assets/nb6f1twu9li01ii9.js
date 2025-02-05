const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/m5na7w4oz7fmna3u.js", "assets/hbhpmx2ipkndwudc.js", "assets/mgr0w69u3c317psp.js", "assets/root-ncdra6h0.css", "assets/ab2oz9enzsoo3wow.js", "assets/conversation-small-h7jqffb1.css", "assets/owxgq276fhfpq1u1.js", "assets/d3y72ugnrmac5z1v.js", "assets/jahrkw92yzxlxku3.js", "assets/fzrn137102spawew.js", "assets/e9lafxuzyeh4418f.js", "assets/ecsmtmpgv59no4oe.js", "assets/mco6ffvkuw2vrlq8.js", "assets/c4bxzbp1808foto4.js"]))) => i.map(i => d[i]);
import {
    aL as W,
    G as P,
    s as J,
    L as R,
    r as h,
    S as v,
    P as m,
    d as b,
    m as e,
    aD as T,
    gA as ee,
    aR as n,
    F as N,
    aH as te,
    aI as ae,
    H as se,
    bf as ne,
    Z as C,
    Y as re,
    aE as D,
    a3 as ie,
    f3 as oe,
    c5 as le,
    ap as ce,
    a$ as G,
    gB as de,
    bp as ue,
    bV as me,
    bW as ge,
    gi as fe,
    aX as O
} from "./hbhpmx2ipkndwudc.js";
import {
    dv as k,
    dw as pe,
    dx as he,
    ak as xe,
    dy as B,
    U as w,
    l as H,
    dz as ye,
    dA as ve,
    dB as be,
    dC as je,
    ai as Me,
    aj as ke
} from "./ab2oz9enzsoo3wow.js";
import {
    U as S,
    a as Te
} from "./m7u5z7sua6e1c9ci.js";
import {
    b as Ce,
    aT as $,
    aU as _e
} from "./mgr0w69u3c317psp.js";
import {
    m as Ie
} from "./m0s651bq7jimn9ko.js";

function Pe({
    showFreeTrialLoadingPayment: t,
    handleGetPaymentLink: r
}) {
    const s = P(),
        a = () => {
            t || (k(!0), r())
        },
        l = M => {
            M.stopPropagation(), pe(!0), he(!0)
        },
        {
            data: o,
            isLoading: u,
            isSuccess: i
        } = J({
            queryKey: ["claimedReferralInvite"],
            queryFn: () => R.getClaimedReferralInvite(),
            refetchOnMount: !1,
            refetchOnWindowFocus: !1,
            refetchInterval: !1,
            refetchOnReconnect: !1
        }),
        c = o ? .invite_code,
        [x, j] = h.useState(!1);
    if (h.useEffect(() => {
            c && !x && i && (j(!0), v.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"), m.logEvent(b.chatgptReferralShowClaimedSidebartMenuPromo))
        }, [c, j, x, i]), !c || u || !i) return null;
    const g = c.invite_metadata.invite_data,
        y = g ? .referral_trial_duration_months ? g ? .referral_trial_duration_months > 1 ? s.formatMessage(I.monthsOfBenefit, {
            referralTrialDurationMonths: g ? .referral_trial_duration_months
        }) : s.formatMessage(I.daysOfBenefit, {
            referralTrialDurationDays: g ? .referral_trial_duration_days
        }) : null;
    return e.jsx(Ie.div, {
        className: T("relative", {
            "cursor-progress opacity-50": t
        }),
        layout: "position",
        initial: {
            y: -10,
            opacity: 1
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .1,
                ease: "easeIn"
            }
        },
        children: e.jsxs(Ne, {
            className: T(t && "opacity-75"),
            onClick: a,
            children: [e.jsxs("div", {
                className: "flex w-full flex-row items-center justify-start gap-3",
                children: [e.jsx(ee, {
                    className: "icon-sm shrink-0"
                }), e.jsx(n, { ...I.freeTrialCta,
                    values: {
                        duration: y
                    }
                })]
            }), !t && e.jsx(Ce, {
                onClick: l,
                className: "icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"
            }), e.jsx("span", {
                className: "absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"
            })]
        })
    })
}
const Ne = W.a `group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,
    I = N({
        freeTrialCta: {
            id: "PaymentMenuItems.freeTrialCta",
            defaultMessage: "Get {duration}!"
        },
        monthsOfBenefit: {
            id: "FreeTrialMenuItem.monthsOfBenefit",
            defaultMessage: "{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"
        },
        daysOfBenefit: {
            id: "FreeTrialMenuItem.daysOfBenefit",
            defaultMessage: "{referralTrialDurationDays, plural, one {one day free} other {# days free}}"
        }
    }),
    q = te(() => ae(() =>
        import ("./m5na7w4oz7fmna3u.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])));

function we() {
    const t = P(),
        r = se(),
        s = ne(),
        a = C(),
        l = !a,
        o = a ? .hasPaidSubscription() ? ? !1,
        u = a ? .hasClaimedFreeTrial() ? ? !1,
        i = h.useMemo(() => a ? .subscriptionAnalyticsParams, [a]),
        c = xe(),
        x = async () => {
            k(!0), m.logEvent(b.clickAccountPaymentCheckout, i);
            try {
                const f = await R.getCheckoutLink(s);
                window.location.href = f.url
            } catch {
                r.warning(t.formatMessage(d.paymentErrorWarning), {
                    hasCloseButton: !0
                }), k(!1)
            } finally {}
        },
        j = () => {
            y || (k(!0), x())
        },
        g = B(f => f.didCloseFreeTrial),
        y = B(f => f.showFreeTrialLoadingPayment),
        M = !g && u,
        z = a ? .wasPaidCustomer() ? ? !1;
    let _ = a ? .isWorkspaceAccount() ? ? !1;
    const K = a ? .hasPaidSubscription() ? ? !1,
        A = a ? .isPlus() ? ? !1,
        {
            doesUserHaveAnyAccountsWithPlusFeatures: F
        } = re(),
        {
            layer: V
        } = D("2670443078");
    let U = A;
    !_ && !A && F && V.get("is_gating_fix_enabled", !1) && (U = F, _ = !0);
    const X = !l && !_,
        Q = ie(),
        Y = () => {
            m.logEvent(b.clickSidebarAccountPaymentMenuItem, i), ye(Q, "Sidebar account payment menu item")
        },
        Z = oe("3905879930");
    var L = a ? .isTeam() ? ? !1,
        E = !1;
    return L && (E = Z.config.get("enabled", !1)), e.jsxs(e.Fragment, {
        children: [!o && M && e.jsx(Pe, {
            showFreeTrialLoadingPayment: y,
            handleGetPaymentLink: x
        }), L ? E ? e.jsx(Ae, {}) : e.jsx(Se, {}) : null, X && e.jsx(S, {
            onClick: M ? j : Y,
            className: c ? "" : "m-0 rounded-lg px-2",
            children: e.jsx("span", {
                className: "flex w-full flex-row flex-wrap-reverse justify-between",
                children: e.jsx("div", {
                    className: "flex items-center gap-2",
                    children: e.jsx(Fe, {
                        wasPaidCustomer: z,
                        showFreeTrialLoadingPayment: y,
                        hasPlusSubscription: U,
                        hasPaidSubscription: K
                    })
                })
            })
        })]
    })
}
const Se = () => {
        const t = C();
        return e.jsxs(e.Fragment, {
            children: [e.jsx(S, {
                onClick: () => {
                    w.openModal(H.InviteUsersToWorkspace), m.logEvent(b.accountMemberInviteButton, {
                        location: "payment-menu-click"
                    }), v.logEvent("chatgpt_invite_users_to_workspace", 0, {
                        action: "OpenAdminInviteModal",
                        location: "payment-menu-click",
                        text: "AddMembers",
                        step: "OpenModal"
                    })
                },
                className: "rounded-lg",
                children: e.jsx("span", {
                    className: "flex w-full flex-row flex-wrap-reverse justify-between",
                    children: e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [e.jsx("span", {
                            className: "flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",
                            children: e.jsx($, {
                                className: "icon-sm shrink-0"
                            })
                        }), e.jsx(n, { ...d.inviteMembers
                        })]
                    })
                })
            }), t != null ? e.jsx(q, {
                workspace: t
            }) : null]
        })
    },
    Ae = () => {
        const t = C();
        return e.jsxs(e.Fragment, {
            children: [e.jsx(S, {
                onClick: () => {
                    w.openModal(H.InviteUsersToWorkspace), m.logEvent(b.accountMemberInviteButton, {
                        location: "payment-menu-click"
                    }), v.logEvent("chatgpt_invite_users_to_workspace", 0, {
                        action: "OpenAdminInviteModal",
                        location: "payment-menu-click",
                        text: "AddTeammatesWithInfo",
                        step: "OpenModal"
                    })
                },
                className: "m-0 rounded-lg px-2",
                children: e.jsx("span", {
                    className: "flex w-full flex-row flex-wrap-reverse justify-between",
                    children: e.jsx("div", {
                        className: "flex items-center gap-2",
                        children: e.jsxs(e.Fragment, {
                            children: [e.jsx("span", {
                                className: "flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",
                                children: e.jsx($, {
                                    className: "icon-sm shrink-0"
                                })
                            }), e.jsx("div", {
                                className: "flex flex-col",
                                children: e.jsxs(e.Fragment, {
                                    children: [e.jsx("span", {
                                        children: e.jsx(n, { ...d.addTeammates
                                        })
                                    }), e.jsx("span", {
                                        className: "line-clamp-1 text-xs text-token-text-tertiary",
                                        children: e.jsx(n, { ...d.addTeammatesUpsell
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })
            }), t != null ? e.jsx(q, {
                workspace: t
            }) : null]
        })
    },
    Fe = ({
        wasPaidCustomer: t,
        showFreeTrialLoadingPayment: r,
        hasPlusSubscription: s,
        hasPaidSubscription: a
    }) => r ? e.jsx(le, {
        className: "icon-sm shrink-0"
    }) : a && !s ? null : e.jsxs(e.Fragment, {
        children: [e.jsx("span", {
            className: "flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",
            children: e.jsx(_e, {
                className: "icon-sm shrink-0"
            })
        }), e.jsx("div", {
            className: "flex flex-col",
            children: t ? e.jsx(n, { ...d.renewPlus
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx("span", {
                    children: s ? e.jsx(n, { ...d.createATeamWorkspace
                    }) : !a && e.jsx(n, { ...d.upgradePlan
                    })
                }), e.jsx("span", {
                    className: "line-clamp-1 text-xs text-token-text-tertiary",
                    children: s ? e.jsx(n, { ...d.upgradeToTeamUpsell
                    }) : !a && e.jsx(n, { ...d.upgradeToPlusUpsell
                    })
                })]
            })
        })]
    }),
    d = N({
        upgradePlan: {
            id: "PaymentMenuItems.upgradePlan",
            defaultMessage: "Upgrade plan"
        },
        createATeamWorkspace: {
            id: "PaymentMenuItems.createATeamWorkspace",
            defaultMessage: "Add Team workspace"
        },
        upgradeToTeamUpsell: {
            id: "PaymentMenuItems.upgradeToTeamUpsell",
            defaultMessage: "Collaborate on a Team plan"
        },
        upgradeToPlusUpsell: {
            id: "PaymentMenuItems.upgradeToPlusUpsell.0",
            defaultMessage: "More access to the best models"
        },
        renewPlus: {
            id: "PaymentMenuItems.renewPlus",
            defaultMessage: "Renew Plus"
        },
        inviteReferral: {
            id: "PaymentMenuItems.inviteReferral",
            defaultMessage: "Refer a friend"
        },
        addTeammates: {
            id: "PaymentMenuItems.addTeammates.0",
            defaultMessage: "Add teammates"
        },
        addTeammatesUpsell: {
            id: "PaymentMenuItems.addTeammatesUpsell.0",
            defaultMessage: "Invite coworkers to ChatGPT"
        },
        inviteMembers: {
            id: "PaymentMenuItems.inviteMembers.0",
            defaultMessage: "Invite members"
        },
        paymentErrorWarning: {
            id: "PaymentMenuItems.paymentErrorWarning",
            defaultMessage: "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
        }
    });

function Ge({
    navHeader: t,
    children: r,
    className: s
}) {
    const a = P(),
        l = h.useRef(null),
        o = ce(),
        {
            isUnauthenticated: u
        } = G(),
        {
            layer: i
        } = D("1578749296"),
        c = i.get("is_sticky_toggle_off", !1);
    return h.useEffect(() => {
        c && w.toggleDesktopNavCollapsed()
    }, [c]), e.jsx(e.Fragment, {
        children: e.jsxs("div", {
            className: "draggable relative h-full w-full flex-1 items-start border-white/20",
            children: [e.jsx(de, {
                asChild: !0,
                children: e.jsx("h2", {
                    children: e.jsx(n, { ...p.chatHistoryLabel
                    })
                })
            }), e.jsxs("nav", {
                className: T("flex h-full w-full flex-col px-3", s),
                "aria-label": a.formatMessage(p.chatHistoryLabel),
                children: [t, e.jsx(Ee, {
                    ref: l,
                    $disableScroll: o && !u,
                    children: r
                }), e.jsx(ue, {
                    children: e.jsx(Ue, {})
                })]
            })]
        })
    })
}

function Ue() {
    const [t] = h.useState(() => {
        const o = me.getCookie(ge.Workspace);
        return typeof o == "string" && o !== fe
    }), r = C(), s = r ? .data == null, {
        isUnauthenticated: a
    } = G(), {
        openSettings: l
    } = ve();
    return t && s || !r ? null : a ? e.jsx(Le, {}) : e.jsxs("div", {
        className: T("flex flex-col py-2 empty:hidden dark:border-white/20"),
        children: [e.jsx(be, {}), e.jsx(we, {}), e.jsx("div", {
            className: "flex w-full items-center md:hidden",
            children: e.jsx("div", {
                className: "max-w-[100%] grow",
                children: e.jsx(Te, {
                    onClickSettings: () => l()
                })
            })
        })]
    })
}
const Le = () => {
        const t = je(),
            r = Me(),
            s = ke(p.unauthSignupCta),
            a = () => {
                r({
                    authType: "login",
                    callback: i => {
                        m.logLogInButtonClicked({
                            location: "Sidebar bottom unit",
                            provider: i
                        }), v.logEvent("chatgpt_sidebar_login_button_clicked")
                    }
                })
            },
            l = () => {
                r({
                    authType: "signup",
                    callback: i => {
                        m.logSignUpButtonClicked({
                            location: "Sidebar bottom unit",
                            provider: i
                        }), v.logEvent("chatgpt_sidebar_signup_button_clicked")
                    }
                })
            },
            o = e.jsx(O, {
                as: "button",
                size: "medium",
                color: t ? "secondary" : "primary",
                "data-testid": "signup-button",
                onClick: l,
                children: e.jsx(n, { ...s
                })
            }),
            u = e.jsx(O, {
                as: "button",
                size: "medium",
                color: t ? "primary" : "secondary",
                "data-testid": "login-button",
                onClick: a,
                children: e.jsx(n, { ...p.unauthLoginCta
                })
            });
        return e.jsxs("div", {
            className: "p-2",
            children: [e.jsxs("div", {
                className: "mb-4 mt-2",
                children: [e.jsx("p", {
                    className: "mb-1 text-sm font-semibold text-token-text-primary",
                    children: e.jsx(n, { ...t ? p.logInOrSignUp : p.signUpOrLogIn
                    })
                }), e.jsx("p", {
                    className: "text-sm text-token-text-secondary",
                    children: e.jsx(n, {
                        id: "4qlPtW",
                        defaultMessage: "Get smarter responses, upload files and images, and more."
                    })
                })]
            }), e.jsx("div", {
                className: "flex flex-row items-start gap-2",
                children: t ? [u, o] : [o, u]
            })]
        })
    },
    Ee = W.div `flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2
  ${({$disableScroll:t})=>t?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,
    p = N({
        chatHistoryLabel: {
            id: "NavigationContent.chatHistoryLabel",
            defaultMessage: "Chat history"
        },
        closeSidebar: {
            id: "NavigationContent.closeSidebar",
            defaultMessage: "Close sidebar"
        },
        signInToChat: {
            id: "NavigationContent.signInToChat",
            defaultMessage: "Sign in to ChatGPT"
        },
        signUpOrLogIn: {
            id: "NavigationContent.signUpOrLogIn",
            defaultMessage: "Sign up or log in"
        },
        logInOrSignUp: {
            id: "NavigationContent.logInOrSignUp",
            defaultMessage: "Log in or sign up"
        },
        unauthSignupCta: {
            id: "NavigationContent.unauthSignupCta",
            defaultMessage: "Sign up"
        },
        unauthLoginCta: {
            id: "NavigationContent.unauthLoginCta",
            defaultMessage: "Log in"
        }
    });
export {
    Ge as N, we as P, Le as U
};
//# sourceMappingURL=nb6f1twu9li01ii9.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/ic3g7ev79io1wk7a.js", "assets/hbhpmx2ipkndwudc.js", "assets/mgr0w69u3c317psp.js", "assets/root-ncdra6h0.css", "assets/b3rkb7nl1yb7kabp.js", "assets/gs77fj84ax1h5e93.js", "assets/okkj3my0355ooax9.js", "assets/e6a2d4hw6rb26f1i.js", "assets/coavxv9dh5l5oojl.js", "assets/epr4m5ogk7x48nug.js"]))) => i.map(i => d[i]);
import {
    i4 as Re,
    ef as _,
    ic as $r,
    er as Gt,
    ep as V,
    eq as G,
    gf as m,
    gg as b,
    eh as y,
    id as Q,
    gO as D,
    aI as $,
    aF as M,
    eg as zr
} from "./hbhpmx2ipkndwudc.js";

function rt(e, t, r) {
    t.split && (t = t.split("."));
    for (var n = 0, i = t.length, o = e, a, u; n < i && (u = "" + t[n++], !(u === "__proto__" || u === "constructor" || u === "prototype"));) o = o[u] = n === i ? r : typeof(a = o[u]) == typeof t ? a : t[n] * 0 !== 0 || ~("" + t[n]).indexOf(".") ? {} : []
}
var Br = function(e, t) {
        return Object.keys(e).filter(function(r) {
            return t(r, e[r])
        }).reduce(function(r, n) {
            return r[n] = e[n], r
        }, {})
    },
    se = function(e) {
        Re(t, e);

        function t(r, n) {
            var i = e.call(this, "".concat(r, " ").concat(n)) || this;
            return i.field = r, i
        }
        return t
    }(Error);

function fe(e) {
    return typeof e == "string"
}

function nt(e) {
    return typeof e == "number"
}

function me(e) {
    return typeof e == "function"
}

function Ur(e) {
    return e != null
}

function z(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase() === "object"
}
var ht = "is not a string",
    pt = "is not an object",
    Kr = "is nil";

function Vr(e) {
    if (!Ur(e)) throw new se("Event", Kr);
    if (typeof e != "object") throw new se("Event", pt)
}

function Gr(e) {
    if (!fe(e.type)) throw new se(".type", ht)
}

function Jr(e) {
    if (!fe(e.event)) throw new se(".event", ht)
}

function Wr(e) {
    if (!z(e.properties)) throw new se(".properties", pt)
}

function Qr(e) {
    if (!z(e.traits)) throw new se(".traits", pt)
}

function Hr(e) {
    if (!fe(e.messageId)) throw new se(".messageId", ht)
}

function Xr(e) {
    Vr(e), Gr(e), Hr(e), e.type === "track" && (Jr(e), Wr(e)), ["group", "identify"].includes(e.type) && Qr(e)
}
var Zr = function() {
        function e(t) {
            var r, n;
            this.settings = t, this.createMessageId = t.createMessageId, this.onEventMethodCall = (r = t.onEventMethodCall) !== null && r !== void 0 ? r : function() {}, this.onFinishedEvent = (n = t.onFinishedEvent) !== null && n !== void 0 ? n : function() {}
        }
        return e
    }(),
    Yr = function() {
        function e(t) {
            this.settings = new Zr(t)
        }
        return e.prototype.track = function(t, r, n, i) {
            return this.settings.onEventMethodCall({
                type: "track",
                options: n
            }), this.normalize(_(_({}, this.baseEvent()), {
                event: t,
                type: "track",
                properties: r ? ? {},
                options: _({}, n),
                integrations: _({}, i)
            }))
        }, e.prototype.page = function(t, r, n, i, o) {
            var a;
            this.settings.onEventMethodCall({
                type: "page",
                options: i
            });
            var u = {
                type: "page",
                properties: _({}, n),
                options: _({}, i),
                integrations: _({}, o)
            };
            return t !== null && (u.category = t, u.properties = (a = u.properties) !== null && a !== void 0 ? a : {}, u.properties.category = t), r !== null && (u.name = r), this.normalize(_(_({}, this.baseEvent()), u))
        }, e.prototype.screen = function(t, r, n, i, o) {
            this.settings.onEventMethodCall({
                type: "screen",
                options: i
            });
            var a = {
                type: "screen",
                properties: _({}, n),
                options: _({}, i),
                integrations: _({}, o)
            };
            return t !== null && (a.category = t), r !== null && (a.name = r), this.normalize(_(_({}, this.baseEvent()), a))
        }, e.prototype.identify = function(t, r, n, i) {
            return this.settings.onEventMethodCall({
                type: "identify",
                options: n
            }), this.normalize(_(_({}, this.baseEvent()), {
                type: "identify",
                userId: t,
                traits: r ? ? {},
                options: _({}, n),
                integrations: i
            }))
        }, e.prototype.group = function(t, r, n, i) {
            return this.settings.onEventMethodCall({
                type: "group",
                options: n
            }), this.normalize(_(_({}, this.baseEvent()), {
                type: "group",
                traits: r ? ? {},
                options: _({}, n),
                integrations: _({}, i),
                groupId: t
            }))
        }, e.prototype.alias = function(t, r, n, i) {
            this.settings.onEventMethodCall({
                type: "alias",
                options: n
            });
            var o = {
                userId: t,
                type: "alias",
                options: _({}, n),
                integrations: _({}, i)
            };
            return r !== null && (o.previousId = r), t === void 0 ? this.normalize(_(_({}, o), this.baseEvent())) : this.normalize(_(_({}, this.baseEvent()), o))
        }, e.prototype.baseEvent = function() {
            return {
                integrations: {},
                options: {}
            }
        }, e.prototype.context = function(t) {
            var r, n = ["userId", "anonymousId", "timestamp", "messageId"];
            delete t.integrations;
            var i = Object.keys(t),
                o = (r = t.context) !== null && r !== void 0 ? r : {},
                a = {};
            return i.forEach(function(u) {
                u !== "context" && (n.includes(u) ? rt(a, u, t[u]) : rt(o, u, t[u]))
            }), [o, a]
        }, e.prototype.normalize = function(t) {
            var r, n, i = Object.keys((r = t.integrations) !== null && r !== void 0 ? r : {}).reduce(function(h, d) {
                var v, p;
                return _(_({}, h), (v = {}, v[d] = !!(!((p = t.integrations) === null || p === void 0) && p[d]), v))
            }, {});
            t.options = Br(t.options || {}, function(h, d) {
                return d !== void 0
            });
            var o = _(_({}, i), (n = t.options) === null || n === void 0 ? void 0 : n.integrations),
                a = t.options ? this.context(t.options) : [],
                u = a[0],
                s = a[1],
                c = t.options,
                l = $r(t, ["options"]),
                f = _(_(_(_({
                    timestamp: new Date
                }, l), {
                    context: u,
                    integrations: o
                }), s), {
                    messageId: c.messageId || this.settings.createMessageId()
                });
            return this.settings.onFinishedEvent(f), Xr(f), f
        }, e
    }();

function en(e, t) {
    return new Promise(function(r, n) {
        var i = setTimeout(function() {
            n(Error("Promise timed out"))
        }, t);
        e.then(function(o) {
            return clearTimeout(i), r(o)
        }).catch(n)
    })
}

function tn(e) {
    return new Promise(function(t) {
        return setTimeout(t, e)
    })
}

function rn(e, t, r) {
    var n = function() {
        try {
            return Promise.resolve(t(e))
        } catch (i) {
            return Promise.reject(i)
        }
    };
    return tn(r).then(function() {
        return en(n(), 1e3)
    }).catch(function(i) {
        e ? .log("warn", "Callback Error", {
            error: i
        }), e ? .stats.increment("callback_error")
    }).then(function() {
        return e
    })
}
var nr = function() {
        var e, t, r = !1,
            n = new Promise(function(i, o) {
                e = function() {
                    for (var a = [], u = 0; u < arguments.length; u++) a[u] = arguments[u];
                    r = !0, i.apply(void 0, a)
                }, t = function() {
                    for (var a = [], u = 0; u < arguments.length; u++) a[u] = arguments[u];
                    r = !0, o.apply(void 0, a)
                }
            });
        return {
            resolve: e,
            reject: t,
            promise: n,
            isSettled: function() {
                return r
            }
        }
    },
    yt = function() {
        function e(t) {
            var r;
            this.callbacks = {}, this.warned = !1, this.maxListeners = (r = t ? .maxListeners) !== null && r !== void 0 ? r : 10
        }
        return e.prototype.warnIfPossibleMemoryLeak = function(t) {
            this.warned || this.maxListeners && this.callbacks[t].length > this.maxListeners && (console.warn("Event Emitter: Possible memory leak detected; ".concat(String(t), " has exceeded ").concat(this.maxListeners, " listeners.")), this.warned = !0)
        }, e.prototype.on = function(t, r) {
            return this.callbacks[t] ? (this.callbacks[t].push(r), this.warnIfPossibleMemoryLeak(t)) : this.callbacks[t] = [r], this
        }, e.prototype.once = function(t, r) {
            var n = this,
                i = function() {
                    for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
                    n.off(t, i), r.apply(n, o)
                };
            return this.on(t, i), this
        }, e.prototype.off = function(t, r) {
            var n, i = (n = this.callbacks[t]) !== null && n !== void 0 ? n : [],
                o = i.filter(function(a) {
                    return a !== r
                });
            return this.callbacks[t] = o, this
        }, e.prototype.emit = function(t) {
            for (var r = this, n, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
            var a = (n = this.callbacks[t]) !== null && n !== void 0 ? n : [];
            return a.forEach(function(u) {
                u.apply(r, i)
            }), this
        }, e
    }();

function nn(e) {
    var t = Math.random() + 1,
        r = e.minTimeout,
        n = r === void 0 ? 500 : r,
        i = e.factor,
        o = i === void 0 ? 2 : i,
        a = e.attempt,
        u = e.maxTimeout,
        s = u === void 0 ? 1 / 0 : u;
    return Math.min(t * n * Math.pow(o, a), s)
}
var ir = "onRemoveFromFuture",
    gt = function(e) {
        Re(t, e);

        function t(r, n, i) {
            var o = e.call(this) || this;
            return o.future = [], o.maxAttempts = r, o.queue = n, o.seen = i ? ? {}, o
        }
        return t.prototype.push = function() {
            for (var r = this, n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
            var o = n.map(function(a) {
                var u = r.updateAttempts(a);
                return u > r.maxAttempts || r.includes(a) ? !1 : (r.queue.push(a), !0)
            });
            return this.queue = this.queue.sort(function(a, u) {
                return r.getAttempts(a) - r.getAttempts(u)
            }), o
        }, t.prototype.pushWithBackoff = function(r, n) {
            var i = this;
            if (n === void 0 && (n = 0), n == 0 && this.getAttempts(r) === 0) return this.push(r)[0];
            var o = this.updateAttempts(r);
            if (o > this.maxAttempts || this.includes(r)) return !1;
            var a = nn({
                attempt: o - 1
            });
            return n > 0 && a < n && (a = n), setTimeout(function() {
                i.queue.push(r), i.future = i.future.filter(function(u) {
                    return u.id !== r.id
                }), i.emit(ir)
            }, a), this.future.push(r), !0
        }, t.prototype.getAttempts = function(r) {
            var n;
            return (n = this.seen[r.id]) !== null && n !== void 0 ? n : 0
        }, t.prototype.updateAttempts = function(r) {
            return this.seen[r.id] = this.getAttempts(r) + 1, this.getAttempts(r)
        }, t.prototype.includes = function(r) {
            return this.queue.includes(r) || this.future.includes(r) || !!this.queue.find(function(n) {
                return n.id === r.id
            }) || !!this.future.find(function(n) {
                return n.id === r.id
            })
        }, t.prototype.pop = function() {
            return this.queue.shift()
        }, Object.defineProperty(t.prototype, "length", {
            get: function() {
                return this.queue.length
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "todo", {
            get: function() {
                return this.queue.length + this.future.length
            },
            enumerable: !1,
            configurable: !0
        }), t
    }(yt),
    ae = 256,
    Te = [],
    Ce;
for (; ae--;) Te[ae] = (ae + 256).toString(16).substring(1);

function mt() {
    var e = 0,
        t, r = "";
    if (!Ce || ae + 16 > 256) {
        for (Ce = Array(e = 256); e--;) Ce[e] = 256 * Math.random() | 0;
        e = ae = 0
    }
    for (; e < 16; e++) t = Ce[ae + e], e == 6 ? r += Te[t & 15 | 64] : e == 8 ? r += Te[t & 63 | 128] : r += Te[t], e & 1 && e > 1 && e < 11 && (r += "-");
    return ae++, r
}
var on = function() {
        function e() {
            this._logs = []
        }
        return e.prototype.log = function(t, r, n) {
            var i = new Date;
            this._logs.push({
                level: t,
                message: r,
                time: i,
                extras: n
            })
        }, Object.defineProperty(e.prototype, "logs", {
            get: function() {
                return this._logs
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.flush = function() {
            if (this.logs.length > 1) {
                var t = this._logs.reduce(function(r, n) {
                    var i, o, a, u = _(_({}, n), {
                        json: JSON.stringify(n.extras, null, " "),
                        extras: n.extras
                    });
                    delete u.time;
                    var s = (a = (o = n.time) === null || o === void 0 ? void 0 : o.toISOString()) !== null && a !== void 0 ? a : "";
                    return r[s] && (s = "".concat(s, "-").concat(Math.random())), _(_({}, r), (i = {}, i[s] = u, i))
                }, {});
                console.table ? console.table(t) : console.log(t)
            } else this.logs.forEach(function(r) {
                var n = r.level,
                    i = r.message,
                    o = r.extras;
                n === "info" || n === "debug" ? console.log(i, o ? ? "") : console[n](i, o ? ? "")
            });
            this._logs = []
        }, e
    }(),
    an = function(e) {
        var t = {
            gauge: "g",
            counter: "c"
        };
        return t[e]
    },
    or = function() {
        function e() {
            this.metrics = []
        }
        return e.prototype.increment = function(t, r, n) {
            r === void 0 && (r = 1), this.metrics.push({
                metric: t,
                value: r,
                tags: n ? ? [],
                type: "counter",
                timestamp: Date.now()
            })
        }, e.prototype.gauge = function(t, r, n) {
            this.metrics.push({
                metric: t,
                value: r,
                tags: n ? ? [],
                type: "gauge",
                timestamp: Date.now()
            })
        }, e.prototype.flush = function() {
            var t = this.metrics.map(function(r) {
                return _(_({}, r), {
                    tags: r.tags.join(",")
                })
            });
            console.table ? console.table(t) : console.log(t), this.metrics = []
        }, e.prototype.serialize = function() {
            return this.metrics.map(function(t) {
                return {
                    m: t.metric,
                    v: t.value,
                    t: t.tags,
                    k: an(t.type),
                    e: t.timestamp
                }
            })
        }, e
    }(),
    un = function(e) {
        Re(t, e);

        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.gauge = function() {}, t.prototype.increment = function() {}, t.prototype.flush = function() {}, t.prototype.serialize = function() {
            return []
        }, t
    }(or),
    ce = function() {
        function e(t) {
            var r, n, i;
            this.retry = (r = t.retry) !== null && r !== void 0 ? r : !0, this.type = (n = t.type) !== null && n !== void 0 ? n : "plugin Error", this.reason = (i = t.reason) !== null && i !== void 0 ? i : ""
        }
        return e
    }(),
    Ne = function() {
        function e(t, r, n, i) {
            r === void 0 && (r = mt()), n === void 0 && (n = new un), i === void 0 && (i = new on), this.attempts = 0, this.event = t, this._id = r, this.logger = i, this.stats = n
        }
        return e.system = function() {}, e.prototype.isSame = function(t) {
            return t.id === this.id
        }, e.prototype.cancel = function(t) {
            throw t || new ce({
                reason: "Context Cancel"
            })
        }, e.prototype.log = function(t, r, n) {
            this.logger.log(t, r, n)
        }, Object.defineProperty(e.prototype, "id", {
            get: function() {
                return this._id
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.updateEvent = function(t, r) {
            var n;
            if (t.split(".")[0] === "integrations") {
                var i = t.split(".")[1];
                if (((n = this.event.integrations) === null || n === void 0 ? void 0 : n[i]) === !1) return this.event
            }
            return rt(this.event, t, r), this.event
        }, e.prototype.failedDelivery = function() {
            return this._failedDelivery
        }, e.prototype.setFailedDelivery = function(t) {
            this._failedDelivery = t
        }, e.prototype.logs = function() {
            return this.logger.logs
        }, e.prototype.flush = function() {
            this.logger.flush(), this.stats.flush()
        }, e.prototype.toJSON = function() {
            return {
                id: this._id,
                event: this.event,
                logs: this.logger.logs,
                metrics: this.stats.metrics
            }
        }, e
    }();

function sn(e, t) {
    var r = {};
    return e.forEach(function(n) {
        var i, o = void 0; {
            var a = n[t];
            o = typeof a != "string" ? JSON.stringify(a) : a
        }
        o !== void 0 && (r[o] = Gt(Gt([], (i = r[o]) !== null && i !== void 0 ? i : [], !0), [n], !1))
    }), r
}
var cn = function(e) {
        return typeof e == "object" && e !== null && "then" in e && typeof e.then == "function"
    },
    ln = function() {
        var e, t, r = 0;
        return {
            done: function() {
                return e
            },
            run: function(n) {
                var i = n();
                return cn(i) && (++r === 1 && (e = new Promise(function(o) {
                    return t = o
                })), i.finally(function() {
                    return --r === 0 && t()
                })), i
            }
        }
    };

function fn(e) {
    return V(this, void 0, void 0, function() {
        var t;
        return G(this, function(r) {
            switch (r.label) {
                case 0:
                    return r.trys.push([0, 2, , 3]), [4, e()];
                case 1:
                    return [2, r.sent()];
                case 2:
                    return t = r.sent(), [2, Promise.reject(t)];
                case 3:
                    return [2]
            }
        })
    })
}

function Pe(e, t) {
    e.log("debug", "plugin", {
        plugin: t.name
    });
    var r = new Date().getTime(),
        n = t[e.event.type];
    if (n === void 0) return Promise.resolve(e);
    var i = fn(function() {
        return n.apply(t, [e])
    }).then(function(o) {
        var a = new Date().getTime() - r;
        return o.stats.gauge("plugin_time", a, ["plugin:".concat(t.name)]), o
    }).catch(function(o) {
        if (o instanceof ce && o.type === "middleware_cancellation") throw o;
        return o instanceof ce ? (e.log("warn", o.type, {
            plugin: t.name,
            error: o
        }), o) : (e.log("error", "plugin Error", {
            plugin: t.name,
            error: o
        }), e.stats.increment("plugin_error", 1, ["plugin:".concat(t.name)]), o)
    });
    return i
}

function dn(e, t) {
    return Pe(e, t).then(function(r) {
        if (r instanceof Ne) return r;
        e.log("debug", "Context canceled"), e.stats.increment("context_canceled"), e.cancel(r)
    })
}
var vn = function(e) {
        Re(t, e);

        function t(r) {
            var n = e.call(this) || this;
            return n.criticalTasks = ln(), n.plugins = [], n.failedInitializations = [], n.flushing = !1, n.queue = r, n.queue.on(ir, function() {
                n.scheduleFlush(0)
            }), n
        }
        return t.prototype.register = function(r, n, i) {
            return V(this, void 0, void 0, function() {
                var o, a, u = this;
                return G(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return this.plugins.push(n), o = function(c) {
                                u.failedInitializations.push(n.name), u.emit("initialization_failure", n), console.warn(n.name, c), r.log("warn", "Failed to load destination", {
                                    plugin: n.name,
                                    error: c
                                }), u.plugins = u.plugins.filter(function(l) {
                                    return l !== n
                                })
                            }, n.type === "destination" && n.name !== "Segment.io" ? (n.load(r, i).catch(o), [3, 4]) : [3, 1];
                        case 1:
                            return s.trys.push([1, 3, , 4]), [4, n.load(r, i)];
                        case 2:
                            return s.sent(), [3, 4];
                        case 3:
                            return a = s.sent(), o(a), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }, t.prototype.deregister = function(r, n, i) {
            return V(this, void 0, void 0, function() {
                var o;
                return G(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 3, , 4]), n.unload ? [4, Promise.resolve(n.unload(r, i))] : [3, 2];
                        case 1:
                            a.sent(), a.label = 2;
                        case 2:
                            return this.plugins = this.plugins.filter(function(u) {
                                return u.name !== n.name
                            }), [3, 4];
                        case 3:
                            return o = a.sent(), r.log("warn", "Failed to unload destination", {
                                plugin: n.name,
                                error: o
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }, t.prototype.dispatch = function(r) {
            return V(this, void 0, void 0, function() {
                var n;
                return G(this, function(i) {
                    return r.log("debug", "Dispatching"), r.stats.increment("message_dispatched"), this.queue.push(r), n = this.subscribeToDelivery(r), this.scheduleFlush(0), [2, n]
                })
            })
        }, t.prototype.subscribeToDelivery = function(r) {
            return V(this, void 0, void 0, function() {
                var n = this;
                return G(this, function(i) {
                    return [2, new Promise(function(o) {
                        var a = function(u, s) {
                            u.isSame(r) && (n.off("flush", a), o(u))
                        };
                        n.on("flush", a)
                    })]
                })
            })
        }, t.prototype.dispatchSingle = function(r) {
            return V(this, void 0, void 0, function() {
                var n = this;
                return G(this, function(i) {
                    return r.log("debug", "Dispatching"), r.stats.increment("message_dispatched"), this.queue.updateAttempts(r), r.attempts = 1, [2, this.deliver(r).catch(function(o) {
                        var a = n.enqueuRetry(o, r);
                        return a ? n.subscribeToDelivery(r) : (r.setFailedDelivery({
                            reason: o
                        }), r)
                    })]
                })
            })
        }, t.prototype.isEmpty = function() {
            return this.queue.length === 0
        }, t.prototype.scheduleFlush = function(r) {
            var n = this;
            r === void 0 && (r = 500), !this.flushing && (this.flushing = !0, setTimeout(function() {
                n.flush().then(function() {
                    setTimeout(function() {
                        n.flushing = !1, n.queue.length && n.scheduleFlush(0)
                    }, 0)
                })
            }, r))
        }, t.prototype.deliver = function(r) {
            return V(this, void 0, void 0, function() {
                var n, i, o, a;
                return G(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return [4, this.criticalTasks.done()];
                        case 1:
                            u.sent(), n = Date.now(), u.label = 2;
                        case 2:
                            return u.trys.push([2, 4, , 5]), [4, this.flushOne(r)];
                        case 3:
                            return r = u.sent(), i = Date.now() - n, this.emit("delivery_success", r), r.stats.gauge("delivered", i), r.log("debug", "Delivered", r.event), [2, r];
                        case 4:
                            throw o = u.sent(), a = o, r.log("error", "Failed to deliver", a), this.emit("delivery_failure", r, a), r.stats.increment("delivery_failed"), o;
                        case 5:
                            return [2]
                    }
                })
            })
        }, t.prototype.enqueuRetry = function(r, n) {
            var i = !(r instanceof ce) || r.retry;
            return i ? this.queue.pushWithBackoff(n) : !1
        }, t.prototype.flush = function() {
            return V(this, void 0, void 0, function() {
                var r, n, i;
                return G(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (this.queue.length === 0) return [2, []];
                            if (r = this.queue.pop(), !r) return [2, []];
                            r.attempts = this.queue.getAttempts(r), o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]), [4, this.deliver(r)];
                        case 2:
                            return r = o.sent(), this.emit("flush", r, !0), [3, 4];
                        case 3:
                            return n = o.sent(), i = this.enqueuRetry(n, r), i || (r.setFailedDelivery({
                                reason: n
                            }), this.emit("flush", r, !1)), [2, []];
                        case 4:
                            return [2, [r]]
                    }
                })
            })
        }, t.prototype.isReady = function() {
            return !0
        }, t.prototype.availableExtensions = function(r) {
            var n = this.plugins.filter(function(d) {
                    var v, p, S;
                    if (d.type !== "destination" && d.name !== "Segment.io") return !0;
                    var g = void 0;
                    return (v = d.alternativeNames) === null || v === void 0 || v.forEach(function(E) {
                        r[E] !== void 0 && (g = r[E])
                    }), (S = (p = r[d.name]) !== null && p !== void 0 ? p : g) !== null && S !== void 0 ? S : (d.name === "Segment.io" ? !0 : r.All) !== !1
                }),
                i = sn(n, "type"),
                o = i.before,
                a = o === void 0 ? [] : o,
                u = i.enrichment,
                s = u === void 0 ? [] : u,
                c = i.destination,
                l = c === void 0 ? [] : c,
                f = i.after,
                h = f === void 0 ? [] : f;
            return {
                before: a,
                enrichment: s,
                destinations: l,
                after: h
            }
        }, t.prototype.flushOne = function(r) {
            var n, i;
            return V(this, void 0, void 0, function() {
                var o, a, u, s, c, l, v, f, h, d, v, p, S, g, E;
                return G(this, function(I) {
                    switch (I.label) {
                        case 0:
                            if (!this.isReady()) throw new Error("Not ready");
                            r.attempts > 1 && this.emit("delivery_retry", r), o = this.availableExtensions((n = r.event.integrations) !== null && n !== void 0 ? n : {}), a = o.before, u = o.enrichment, s = 0, c = a, I.label = 1;
                        case 1:
                            return s < c.length ? (l = c[s], [4, dn(r, l)]) : [3, 4];
                        case 2:
                            v = I.sent(), v instanceof Ne && (r = v), this.emit("message_enriched", r, l), I.label = 3;
                        case 3:
                            return s++, [3, 1];
                        case 4:
                            f = 0, h = u, I.label = 5;
                        case 5:
                            return f < h.length ? (d = h[f], [4, Pe(r, d)]) : [3, 8];
                        case 6:
                            v = I.sent(), v instanceof Ne && (r = v), this.emit("message_enriched", r, d), I.label = 7;
                        case 7:
                            return f++, [3, 5];
                        case 8:
                            return p = this.availableExtensions((i = r.event.integrations) !== null && i !== void 0 ? i : {}), S = p.destinations, g = p.after, [4, new Promise(function(P, A) {
                                setTimeout(function() {
                                    var C = S.map(function(R) {
                                        return Pe(r, R)
                                    });
                                    Promise.all(C).then(P).catch(A)
                                }, 0)
                            })];
                        case 9:
                            return I.sent(), r.stats.increment("message_delivered"), this.emit("message_delivered", r), E = g.map(function(P) {
                                return Pe(r, P)
                            }), [4, Promise.all(E)];
                        case 10:
                            return I.sent(), [2, r]
                    }
                })
            })
        }, t
    }(yt),
    hn = function(e, t) {
        var r = Date.now() - e;
        return Math.max((t ? ? 300) - r, 0)
    };

function pn(e, t, r, n) {
    return V(this, void 0, void 0, function() {
        var i, o;
        return G(this, function(a) {
            switch (a.label) {
                case 0:
                    return r.emit("dispatch_start", e), i = Date.now(), t.isEmpty() ? [4, t.dispatchSingle(e)] : [3, 2];
                case 1:
                    return o = a.sent(), [3, 4];
                case 2:
                    return [4, t.dispatch(e)];
                case 3:
                    o = a.sent(), a.label = 4;
                case 4:
                    return n ? .callback ? [4, rn(o, n.callback, hn(i, n.timeout))] : [3, 6];
                case 5:
                    o = a.sent(), a.label = 6;
                case 6:
                    return n ? .debug && o.flush(), [2, o]
            }
        })
    })
}

function ar(e, t, r, n) {
    var i, o = [e, t, r, n],
        a = z(e) ? e.event : e;
    if (!a || !fe(a)) throw new Error("Event missing");
    var u = z(e) ? (i = e.properties) !== null && i !== void 0 ? i : {} : z(t) ? t : {},
        s = {};
    me(r) || (s = r ? ? {}), z(e) && !me(t) && (s = t ? ? {});
    var c = o.find(me);
    return [a, u, s, c]
}

function it(e, t, r, n, i) {
    var o, a, u = null,
        s = null,
        c = [e, t, r, n, i],
        l = c.filter(fe);
    l[0] !== void 0 && l[1] !== void 0 && (u = l[0], s = l[1]), l.length === 1 && (u = null, s = l[0]);
    var f = c.find(me),
        h = c.filter(function(p) {
            return s === null ? z(p) : z(p) || p === null
        }),
        d = (o = h[0]) !== null && o !== void 0 ? o : {},
        v = (a = h[1]) !== null && a !== void 0 ? a : {};
    return [u, s, d, v, f]
}
var ot = function(e) {
    return function() {
        for (var t, r, n, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        for (var a = {}, u = ["callback", "options", "traits", "id"], s = 0, c = i; s < c.length; s++) {
            var l = c[s],
                f = u.pop();
            if (f === "id") {
                if (fe(l) || nt(l)) {
                    a.id = l.toString();
                    continue
                }
                if (l == null) continue;
                f = u.pop()
            }
            if ((f === "traits" || f === "options") && (l == null || z(l)) && (a[f] = l), me(l)) {
                a.callback = l;
                break
            }
        }
        return [(t = a.id) !== null && t !== void 0 ? t : e.id(), (r = a.traits) !== null && r !== void 0 ? r : {}, (n = a.options) !== null && n !== void 0 ? n : {}, a.callback]
    }
};

function ur(e, t, r, n) {
    nt(e) && (e = e.toString()), nt(t) && (t = t.toString());
    var i = [e, t, r, n],
        o = i.filter(fe),
        a = o[0],
        u = a === void 0 ? e : a,
        s = o[1],
        c = s === void 0 ? null : s,
        l = i.filter(z)[0],
        f = l === void 0 ? {} : l,
        h = i.find(me);
    return [u, c, f, h]
}

function bt() {
    return typeof window < "u"
}

function Ao() {
    return !bt()
}

function yn() {
    return bt() ? window.navigator.onLine : !0
}

function Ae() {
    return !yn()
}

function gn(e, t) {
    return t = t || {}, new Promise(function(r, n) {
        var i = new XMLHttpRequest,
            o = [],
            a = [],
            u = {},
            s = function() {
                return {
                    ok: (i.status / 100 | 0) == 2,
                    statusText: i.statusText,
                    status: i.status,
                    url: i.responseURL,
                    text: function() {
                        return Promise.resolve(i.responseText)
                    },
                    json: function() {
                        return Promise.resolve(i.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([i.response]))
                    },
                    clone: s,
                    headers: {
                        keys: function() {
                            return o
                        },
                        entries: function() {
                            return a
                        },
                        get: function(l) {
                            return u[l.toLowerCase()]
                        },
                        has: function(l) {
                            return l.toLowerCase() in u
                        }
                    }
                }
            };
        for (var c in i.open(t.method || "get", e, !0), i.onload = function() {
                i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(l, f, h) {
                    o.push(f = f.toLowerCase()), a.push([f, h]), u[f] = u[f] ? u[f] + "," + h : h
                }), r(s())
            }, i.onerror = n, i.withCredentials = t.credentials == "include", t.headers) i.setRequestHeader(c, t.headers[c]);
        i.send(t.body || null)
    })
}
var _t = function() {
        return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : null
    },
    qe = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = _t();
        return (r && r.fetch || gn).apply(void 0, e)
    },
    $e = "1.73.0",
    sr = "api.segment.io/v1",
    mn = function(e, t, r) {
        var n = t.reduce(function(i, o) {
            var a = o.split(":"),
                u = a[0],
                s = a[1];
            return i[u] = s, i
        }, {});
        return {
            type: "Counter",
            metric: e,
            value: 1,
            tags: y(y({}, n), {
                library: "analytics.js",
                library_version: "npm:next-".concat($e)
            })
        }
    };

function He(e) {
    console.error("Error sending segment performance metrics", e)
}
var bn = function() {
        function e(t) {
            var r = this,
                n, i, o, a, u;
            if (this.host = (n = t ? .host) !== null && n !== void 0 ? n : sr, this.sampleRate = (i = t ? .sampleRate) !== null && i !== void 0 ? i : 1, this.flushTimer = (o = t ? .flushTimer) !== null && o !== void 0 ? o : 30 * 1e3, this.maxQueueSize = (a = t ? .maxQueueSize) !== null && a !== void 0 ? a : 20, this.protocol = (u = t ? .protocol) !== null && u !== void 0 ? u : "https", this.queue = [], this.sampleRate > 0) {
                var s = !1,
                    c = function() {
                        s || (s = !0, r.flush().catch(He), s = !1, setTimeout(c, r.flushTimer))
                    };
                c()
            }
        }
        return e.prototype.increment = function(t, r) {
            if (t.includes("analytics_js.") && r.length !== 0 && !(Math.random() > this.sampleRate) && !(this.queue.length >= this.maxQueueSize)) {
                var n = mn(t, r);
                this.queue.push(n), t.includes("error") && this.flush().catch(He)
            }
        }, e.prototype.flush = function() {
            return m(this, void 0, void 0, function() {
                var t = this;
                return b(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return this.queue.length <= 0 ? [2] : [4, this.send().catch(function(n) {
                                He(n), t.sampleRate = 0
                            })];
                        case 1:
                            return r.sent(), [2]
                    }
                })
            })
        }, e.prototype.send = function() {
            return m(this, void 0, void 0, function() {
                var t, r, n;
                return b(this, function(i) {
                    return t = {
                        series: this.queue
                    }, this.queue = [], r = {
                        "Content-Type": "text/plain"
                    }, n = "".concat(this.protocol, "://").concat(this.host, "/m"), [2, qe(n, {
                        headers: r,
                        body: JSON.stringify(t),
                        method: "POST"
                    })]
                })
            })
        }, e
    }(),
    ke, cr = function(e) {
        Q(t, e);

        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.initRemoteMetrics = function(r) {
            ke = new bn(r)
        }, t.prototype.increment = function(r, n, i) {
            e.prototype.increment.call(this, r, n, i), ke ? .increment(r, i ? ? [])
        }, t
    }(or),
    J = function(e) {
        Q(t, e);

        function t(r, n) {
            return e.call(this, r, n, new cr) || this
        }
        return t.system = function() {
            return new this({
                type: "track",
                event: "system"
            })
        }, t
    }(Ne),
    lr = "bpc",
    fr = function(e, t, r, n, i, o) {
        return {
            __t: lr,
            c: t,
            p: n,
            u: e,
            s: r,
            t: i,
            r: o
        }
    },
    _n = Object.keys(fr("", "", "", "", "", ""));

function wn(e) {
    if (!z(e) || e.__t !== lr) return !1;
    for (var t in e)
        if (!_n.includes(t)) return !1;
    return !0
}
var Sn = function(e, t) {
        return e.indexOf("?") > -1 ? e : e + t
    },
    En = function(e) {
        var t = e.indexOf("#");
        return t === -1 ? e : e.slice(0, t)
    },
    In = function(e) {
        try {
            return new URL(e).pathname
        } catch {
            return e[0] === "/" ? e : "/" + e
        }
    },
    dr = function(e) {
        var t = e.c,
            r = e.p,
            n = e.s,
            i = e.u,
            o = e.r,
            a = e.t,
            u = t ? In(t) : r,
            s = t ? Sn(t, n) : En(i);
        return {
            path: u,
            referrer: o,
            search: n,
            title: a,
            url: s
        }
    },
    vr = function() {
        var e = document.querySelector("link[rel='canonical']");
        return fr(location.href, e && e.getAttribute("href") || void 0, location.search, location.pathname, document.title, document.referrer)
    },
    Pn = function() {
        return dr(vr())
    };

function An(e, t) {
    return Object.assign.apply(Object, D([{}], t.map(function(r) {
        var n;
        if (e && Object.prototype.hasOwnProperty.call(e, r)) return n = {}, n[r] = e[r], n
    }), !1))
}
var he = function(e, t) {
        t === void 0 && (t = Pn());
        var r = e.context,
            n;
        e.type === "page" && (n = e.properties && An(e.properties, Object.keys(t)), e.properties = y(y(y({}, t), e.properties), e.name ? {
            name: e.name
        } : {})), r.page = y(y(y({}, t), n), r.page)
    },
    hr = function(e) {
        Q(t, e);

        function t(r) {
            var n = e.call(this, {
                createMessageId: function() {
                    return "ajs-next-".concat(Date.now(), "-").concat(mt())
                },
                onEventMethodCall: function(i) {
                    var o = i.options;
                    n.maybeUpdateAnonId(o)
                },
                onFinishedEvent: function(i) {
                    return n.addIdentity(i), i
                }
            }) || this;
            return n.user = r, n
        }
        return t.prototype.maybeUpdateAnonId = function(r) {
            r ? .anonymousId && this.user.anonymousId(r.anonymousId)
        }, t.prototype.addIdentity = function(r) {
            this.user.id() && (r.userId = this.user.id()), this.user.anonymousId() && (r.anonymousId = this.user.anonymousId())
        }, t.prototype.track = function(r, n, i, o, a) {
            var u = e.prototype.track.call(this, r, n, i, o);
            return he(u, a), u
        }, t.prototype.page = function(r, n, i, o, a, u) {
            var s = e.prototype.page.call(this, r, n, i, o, a);
            return he(s, u), s
        }, t.prototype.screen = function(r, n, i, o, a, u) {
            var s = e.prototype.screen.call(this, r, n, i, o, a);
            return he(s, u), s
        }, t.prototype.identify = function(r, n, i, o, a) {
            var u = e.prototype.identify.call(this, r, n, i, o);
            return he(u, a), u
        }, t.prototype.group = function(r, n, i, o, a) {
            var u = e.prototype.group.call(this, r, n, i, o);
            return he(u, a), u
        }, t.prototype.alias = function(r, n, i, o, a) {
            var u = e.prototype.alias.call(this, r, n, i, o);
            return he(u, a), u
        }, t
    }(Yr),
    pr = function(e) {
        return "addMiddleware" in e && e.type === "destination"
    },
    W = {
        getItem: function() {},
        setItem: function() {},
        removeItem: function() {}
    };
try {
    W = bt() && window.localStorage ? window.localStorage : W
} catch (e) {
    console.warn("Unable to access localStorage", e)
}

function yr(e) {
    var t = W.getItem(e);
    return (t ? JSON.parse(t) : []).map(function(r) {
        return new J(r.event, r.id)
    })
}

function On(e, t) {
    var r = yr(e),
        n = D(D([], t, !0), r, !0),
        i = n.reduce(function(o, a) {
            var u;
            return y(y({}, o), (u = {}, u[a.id] = a, u))
        }, {});
    W.setItem(e, JSON.stringify(Object.values(i)))
}

function gr(e) {
    var t = W.getItem(e);
    return t ? JSON.parse(t) : {}
}

function xn(e, t) {
    var r = gr(e);
    W.setItem(e, JSON.stringify(y(y({}, r), t)))
}

function Jt(e) {
    W.removeItem(e)
}
var Mn = function() {
    return new Date().getTime()
};

function at(e, t, r) {
    r === void 0 && (r = 0);
    var n = 50,
        i = "persisted-queue:v1:".concat(e, ":lock"),
        o = function(c) {
            return new Date().getTime() > c
        },
        a = W.getItem(i),
        u = a ? JSON.parse(a) : null,
        s = u === null || o(u);
    if (s) {
        W.setItem(i, JSON.stringify(Mn() + n)), t(), W.removeItem(i);
        return
    }!s && r < 3 ? setTimeout(function() {
        at(e, t, r + 1)
    }, n) : console.error("Unable to retrieve lock")
}
var wt = function(e) {
        Q(t, e);

        function t(r, n) {
            var i = e.call(this, r, []) || this,
                o = "persisted-queue:v1:".concat(n, ":items"),
                a = "persisted-queue:v1:".concat(n, ":seen"),
                u = [],
                s = {};
            return at(n, function() {
                try {
                    u = yr(o), s = gr(a), Jt(o), Jt(a), i.queue = D(D([], u, !0), i.queue, !0), i.seen = y(y({}, s), i.seen)
                } catch (c) {
                    console.error(c)
                }
            }), window.addEventListener("pagehide", function() {
                if (i.todo > 0) {
                    var c = D(D([], i.queue, !0), i.future, !0);
                    try {
                        at(n, function() {
                            On(o, c), xn(a, i.seen)
                        })
                    } catch (l) {
                        console.error(l)
                    }
                }
            }), i
        }
        return t
    }(gt),
    Cn = function(e) {
        Q(t, e);

        function t(r) {
            return e.call(this, typeof r == "string" ? new wt(4, r) : r) || this
        }
        return t.prototype.flush = function() {
            return m(this, void 0, void 0, function() {
                return b(this, function(r) {
                    return Ae() ? [2, []] : [2, e.prototype.flush.call(this)]
                })
            })
        }, t
    }(vn);

function St(e) {
    for (var t = e.constructor.prototype, r = 0, n = Object.getOwnPropertyNames(t); r < n.length; r++) {
        var i = n[r];
        if (i !== "constructor") {
            var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, i);
            o && typeof o.value == "function" && (e[i] = e[i].bind(e))
        }
    }
    return e
} /*! js-cookie v3.0.1 | MIT */
function De(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) e[n] = r[n]
    }
    return e
}
var kn = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function ut(e, t) {
    function r(i, o, a) {
        if (!(typeof document > "u")) {
            a = De({}, t, a), typeof a.expires == "number" && (a.expires = new Date(Date.now() + a.expires * 864e5)), a.expires && (a.expires = a.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var u = "";
            for (var s in a) a[s] && (u += "; " + s, a[s] !== !0 && (u += "=" + a[s].split(";")[0]));
            return document.cookie = i + "=" + e.write(o, i) + u
        }
    }

    function n(i) {
        if (!(typeof document > "u" || arguments.length && !i)) {
            for (var o = document.cookie ? document.cookie.split("; ") : [], a = {}, u = 0; u < o.length; u++) {
                var s = o[u].split("="),
                    c = s.slice(1).join("=");
                try {
                    var l = decodeURIComponent(s[0]);
                    if (a[l] = e.read(c, l), i === l) break
                } catch {}
            }
            return i ? a[i] : a
        }
    }
    return Object.create({
        set: r,
        get: n,
        remove: function(i, o) {
            r(i, "", De({}, o, {
                expires: -1
            }))
        },
        withAttributes: function(i) {
            return ut(this.converter, De({}, this.attributes, i))
        },
        withConverter: function(i) {
            return ut(De({}, this.converter, i), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(t)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var Z = ut(kn, {
    path: "/"
});

function Dn(e) {
    var t = e.hostname,
        r = t.split("."),
        n = r[r.length - 1],
        i = [];
    if (r.length === 4 && parseInt(n, 10) > 0 || r.length <= 1) return i;
    for (var o = r.length - 2; o >= 0; --o) i.push(r.slice(o).join("."));
    return i
}

function Fn(e) {
    try {
        return new URL(e)
    } catch {
        return
    }
}

function mr(e) {
    var t = Fn(e);
    if (t)
        for (var r = Dn(t), n = 0; n < r.length; ++n) {
            var i = "__tld__",
                o = r[n],
                a = {
                    domain: "." + o
                };
            try {
                if (Z.set(i, "1", a), Z.get(i)) return Z.remove(i, a), o
            } catch {
                return
            }
        }
}
var Tn = 365,
    br = function() {
        function e(t) {
            t === void 0 && (t = e.defaults), this.options = y(y({}, e.defaults), t)
        }
        return Object.defineProperty(e, "defaults", {
            get: function() {
                return {
                    maxage: Tn,
                    domain: mr(window.location.href),
                    path: "/",
                    sameSite: "Lax"
                }
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.opts = function() {
            return {
                sameSite: this.options.sameSite,
                expires: this.options.maxage,
                domain: this.options.domain,
                path: this.options.path,
                secure: this.options.secure
            }
        }, e.prototype.get = function(t) {
            var r;
            try {
                var n = Z.get(t);
                if (n == null) return null;
                try {
                    return (r = JSON.parse(n)) !== null && r !== void 0 ? r : null
                } catch {
                    return n ? ? null
                }
            } catch {
                return null
            }
        }, e.prototype.set = function(t, r) {
            typeof r == "string" ? Z.set(t, r, this.opts()) : r === null ? Z.remove(t, this.opts()) : Z.set(t, JSON.stringify(r), this.opts())
        }, e.prototype.remove = function(t) {
            return Z.remove(t, this.opts())
        }, e
    }(),
    jn = function() {
        function e() {}
        return e.prototype.localStorageWarning = function(t, r) {
            console.warn("Unable to access ".concat(t, ", localStorage may be ").concat(r))
        }, e.prototype.get = function(t) {
            var r;
            try {
                var n = localStorage.getItem(t);
                if (n === null) return null;
                try {
                    return (r = JSON.parse(n)) !== null && r !== void 0 ? r : null
                } catch {
                    return n ? ? null
                }
            } catch {
                return this.localStorageWarning(t, "unavailable"), null
            }
        }, e.prototype.set = function(t, r) {
            try {
                localStorage.setItem(t, JSON.stringify(r))
            } catch {
                this.localStorageWarning(t, "full")
            }
        }, e.prototype.remove = function(t) {
            try {
                return localStorage.removeItem(t)
            } catch {
                this.localStorageWarning(t, "unavailable")
            }
        }, e
    }(),
    Et = function() {
        function e() {
            this.cache = {}
        }
        return e.prototype.get = function(t) {
            var r;
            return (r = this.cache[t]) !== null && r !== void 0 ? r : null
        }, e.prototype.set = function(t, r) {
            this.cache[t] = r
        }, e.prototype.remove = function(t) {
            delete this.cache[t]
        }, e
    }(),
    j = {
        Cookie: "cookie",
        LocalStorage: "localStorage",
        Memory: "memory"
    };

function _r(e) {
    return e && e.stores && Array.isArray(e.stores) && e.stores.every(function(t) {
        return Object.values(j).includes(t)
    })
}

function Nn(e) {
    return typeof e == "object" && e.name !== void 0
}
var Xe = function(e, t, r, n) {
        console.warn("".concat(e.constructor.name, ": Can't ").concat(t, ' key "').concat(r, '" | Err: ').concat(n))
    },
    re = function() {
        function e(t) {
            this.stores = t
        }
        return e.prototype.get = function(t) {
            for (var r = null, n = 0, i = this.stores; n < i.length; n++) {
                var o = i[n];
                try {
                    if (r = o.get(t), r != null) return r
                } catch (a) {
                    Xe(o, "get", t, a)
                }
            }
            return null
        }, e.prototype.set = function(t, r) {
            this.stores.forEach(function(n) {
                try {
                    n.set(t, r)
                } catch (i) {
                    Xe(n, "set", t, i)
                }
            })
        }, e.prototype.clear = function(t) {
            this.stores.forEach(function(r) {
                try {
                    r.remove(t)
                } catch (n) {
                    Xe(r, "remove", t, n)
                }
            })
        }, e.prototype.getAndSync = function(t) {
            var r = this.get(t),
                n = typeof r == "number" ? r.toString() : r;
            return this.set(t, n), n
        }, e
    }();

function st(e) {
    var t = e.map(function(r) {
        var n, i;
        switch (Nn(r) ? (n = r.name, i = r.settings) : n = r, n) {
            case j.Cookie:
                return new br(i);
            case j.LocalStorage:
                return new jn;
            case j.Memory:
                return new Et;
            default:
                throw new Error("Unknown Store Type: ".concat(r))
        }
    });
    return t
}

function wr(e, t) {
    return e.map(function(r) {
        return t && r === j.Cookie ? {
            name: r,
            settings: t
        } : r
    })
}
var oe = {
        persist: !0,
        cookie: {
            key: "ajs_user_id",
            oldKey: "ajs_user"
        },
        localStorage: {
            key: "ajs_user_traits"
        }
    },
    It = function() {
        function e(t, r) {
            t === void 0 && (t = oe);
            var n = this,
                i, o, a, u;
            this.options = {}, this.id = function(c) {
                if (n.options.disable) return null;
                var l = n.identityStore.getAndSync(n.idKey);
                if (c !== void 0) {
                    n.identityStore.set(n.idKey, c);
                    var f = c !== l && l !== null && c !== null;
                    f && n.anonymousId(null)
                }
                var h = n.identityStore.getAndSync(n.idKey);
                if (h) return h;
                var d = n.legacyUserStore.get(oe.cookie.oldKey);
                return d ? typeof d == "object" ? d.id : d : null
            }, this.anonymousId = function(c) {
                var l, f;
                if (n.options.disable) return null;
                if (c === void 0) {
                    var h = (l = n.identityStore.getAndSync(n.anonKey)) !== null && l !== void 0 ? l : (f = n.legacySIO()) === null || f === void 0 ? void 0 : f[0];
                    if (h) return h
                }
                return c === null ? (n.identityStore.set(n.anonKey, null), n.identityStore.getAndSync(n.anonKey)) : (n.identityStore.set(n.anonKey, c ? ? mt()), n.identityStore.getAndSync(n.anonKey))
            }, this.traits = function(c) {
                var l;
                if (!n.options.disable) return c === null && (c = {}), c && n.traitsStore.set(n.traitsKey, c ? ? {}), (l = n.traitsStore.get(n.traitsKey)) !== null && l !== void 0 ? l : {}
            }, this.options = y(y({}, oe), t), this.cookieOptions = r, this.idKey = (o = (i = t.cookie) === null || i === void 0 ? void 0 : i.key) !== null && o !== void 0 ? o : oe.cookie.key, this.traitsKey = (u = (a = t.localStorage) === null || a === void 0 ? void 0 : a.key) !== null && u !== void 0 ? u : oe.localStorage.key, this.anonKey = "ajs_anonymous_id", this.identityStore = this.createStorage(this.options, r), this.legacyUserStore = this.createStorage(this.options, r, function(c) {
                return c === j.Cookie
            }), this.traitsStore = this.createStorage(this.options, r, function(c) {
                return c !== j.Cookie
            });
            var s = this.legacyUserStore.get(oe.cookie.oldKey);
            s && typeof s == "object" && (s.id && this.id(s.id), s.traits && this.traits(s.traits)), St(this)
        }
        return e.prototype.legacySIO = function() {
            var t = this.legacyUserStore.get("_sio");
            if (!t) return null;
            var r = t.split("----"),
                n = r[0],
                i = r[1];
            return [n, i]
        }, e.prototype.identify = function(t, r) {
            if (!this.options.disable) {
                r = r ? ? {};
                var n = this.id();
                (n === null || n === t) && (r = y(y({}, this.traits()), r)), t && this.id(t), this.traits(r)
            }
        }, e.prototype.logout = function() {
            this.anonymousId(null), this.id(null), this.traits({})
        }, e.prototype.reset = function() {
            this.logout(), this.identityStore.clear(this.idKey), this.identityStore.clear(this.anonKey), this.traitsStore.clear(this.traitsKey)
        }, e.prototype.load = function() {
            return new e(this.options, this.cookieOptions)
        }, e.prototype.save = function() {
            return !0
        }, e.prototype.createStorage = function(t, r, n) {
            var i = [j.LocalStorage, j.Cookie, j.Memory];
            return t.disable ? new re([]) : t.persist ? (t.storage !== void 0 && t.storage !== null && _r(t.storage) && (i = t.storage.stores), t.localStorageFallbackDisabled && (i = i.filter(function(o) {
                return o !== j.LocalStorage
            })), n && (i = i.filter(n)), new re(st(wr(i, r)))) : new re([new Et])
        }, e.defaults = oe, e
    }(),
    Wt = {
        persist: !0,
        cookie: {
            key: "ajs_group_id"
        },
        localStorage: {
            key: "ajs_group_properties"
        }
    },
    Sr = function(e) {
        Q(t, e);

        function t(r, n) {
            r === void 0 && (r = Wt);
            var i = e.call(this, y(y({}, Wt), r), n) || this;
            return i.anonymousId = function(o) {}, St(i), i
        }
        return t
    }(It),
    Pt = "analytics";

function At() {
    return window[Pt]
}

function Ln(e) {
    Pt = e
}

function Rn(e) {
    window[Pt] = e
}
var qn = function(e) {
        return typeof e == "object" && e !== null && "then" in e && typeof e.then == "function"
    },
    Er = function(e, t, r) {
        r.getAndRemove(e).forEach(function(n) {
            ze(t, n).catch(console.error)
        })
    },
    $n = function(e, t) {
        return m(void 0, void 0, void 0, function() {
            var r, n, i;
            return b(this, function(o) {
                switch (o.label) {
                    case 0:
                        r = 0, n = t.getAndRemove("addSourceMiddleware"), o.label = 1;
                    case 1:
                        return r < n.length ? (i = n[r], [4, ze(e, i).catch(console.error)]) : [3, 4];
                    case 2:
                        o.sent(), o.label = 3;
                    case 3:
                        return r++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    },
    zn = function(e, t) {
        return m(void 0, void 0, void 0, function() {
            var r, n, i;
            return b(this, function(o) {
                switch (o.label) {
                    case 0:
                        r = 0, n = t.getAndRemove("register"), o.label = 1;
                    case 1:
                        return r < n.length ? (i = n[r], [4, ze(e, i).catch(console.error)]) : [3, 4];
                    case 2:
                        o.sent(), o.label = 3;
                    case 3:
                        return r++, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    },
    Bn = Er.bind(void 0, "on"),
    Un = Er.bind(void 0, "setAnonymousId"),
    Kn = function(e, t) {
        Object.keys(t.calls).forEach(function(r) {
            t.getAndRemove(r).forEach(function(n) {
                setTimeout(function() {
                    ze(e, n).catch(console.error)
                }, 0)
            })
        })
    },
    pe = function(e) {
        if (Ir(e)) {
            var t = e.pop();
            return dr(t)
        }
    },
    Ir = function(e) {
        var t = e[e.length - 1];
        return wn(t)
    },
    ct = function() {
        function e(t, r, n, i) {
            n === void 0 && (n = function() {}), i === void 0 && (i = console.error), this.method = t, this.resolve = n, this.reject = i, this.called = !1, this.args = r
        }
        return e
    }(),
    Vn = function() {
        function e() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            this._callMap = {}, this.add.apply(this, t)
        }
        return Object.defineProperty(e.prototype, "calls", {
            get: function() {
                return this._pushSnippetWindowBuffer(), this._callMap
            },
            set: function(t) {
                this._callMap = t
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.get = function(t) {
            var r;
            return (r = this.calls[t]) !== null && r !== void 0 ? r : []
        }, e.prototype.getAndRemove = function(t) {
            var r = this.get(t);
            return this.calls[t] = [], r
        }, e.prototype.add = function() {
            for (var t = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            r.forEach(function(i) {
                var o = ["track", "screen", "alias", "group", "page", "identify"];
                o.includes(i.method) && !Ir(i.args) && (i.args = D(D([], i.args, !0), [vr()], !1)), t.calls[i.method] ? t.calls[i.method].push(i) : t.calls[i.method] = [i]
            })
        }, e.prototype.clear = function() {
            this._pushSnippetWindowBuffer(), this.calls = {}
        }, e.prototype.toArray = function() {
            var t;
            return (t = []).concat.apply(t, Object.values(this.calls))
        }, e.prototype._pushSnippetWindowBuffer = function() {}, e
    }();

function ze(e, t) {
    return m(this, void 0, void 0, function() {
        var r, n;
        return b(this, function(i) {
            switch (i.label) {
                case 0:
                    return i.trys.push([0, 3, , 4]), t.called ? [2, void 0] : (t.called = !0, r = e[t.method].apply(e, t.args), qn(r) ? [4, r] : [3, 2]);
                case 1:
                    i.sent(), i.label = 2;
                case 2:
                    return t.resolve(r), [3, 4];
                case 3:
                    return n = i.sent(), t.reject(n), [3, 4];
                case 4:
                    return [2]
            }
        })
    })
}
var Gn = function() {
        function e(t) {
            var r = this;
            this.trackSubmit = this._createMethod("trackSubmit"), this.trackClick = this._createMethod("trackClick"), this.trackLink = this._createMethod("trackLink"), this.pageView = this._createMethod("pageview"), this.identify = this._createMethod("identify"), this.reset = this._createMethod("reset"), this.group = this._createMethod("group"), this.track = this._createMethod("track"), this.ready = this._createMethod("ready"), this.alias = this._createMethod("alias"), this.debug = this._createChainableMethod("debug"), this.page = this._createMethod("page"), this.once = this._createChainableMethod("once"), this.off = this._createChainableMethod("off"), this.on = this._createChainableMethod("on"), this.addSourceMiddleware = this._createMethod("addSourceMiddleware"), this.setAnonymousId = this._createMethod("setAnonymousId"), this.addDestinationMiddleware = this._createMethod("addDestinationMiddleware"), this.screen = this._createMethod("screen"), this.register = this._createMethod("register"), this.deregister = this._createMethod("deregister"), this.user = this._createMethod("user"), this.VERSION = $e, this._preInitBuffer = new Vn, this._promise = t(this._preInitBuffer), this._promise.then(function(n) {
                var i = n[0],
                    o = n[1];
                r.instance = i, r.ctx = o
            }).catch(function() {})
        }
        return e.prototype.then = function() {
            for (var t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return (t = this._promise).then.apply(t, r)
        }, e.prototype.catch = function() {
            for (var t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return (t = this._promise).catch.apply(t, r)
        }, e.prototype.finally = function() {
            for (var t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return (t = this._promise).finally.apply(t, r)
        }, e.prototype._createMethod = function(t) {
            var r = this;
            return function() {
                for (var n, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                if (r.instance) {
                    var a = (n = r.instance)[t].apply(n, i);
                    return Promise.resolve(a)
                }
                return new Promise(function(u, s) {
                    r._preInitBuffer.add(new ct(t, i, u, s))
                })
            }
        }, e.prototype._createChainableMethod = function(t) {
            var r = this;
            return function() {
                for (var n, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                return r.instance ? ((n = r.instance)[t].apply(n, i), r) : (r._preInitBuffer.add(new ct(t, i)), r)
            }
        }, e
    }(),
    ee = "This is being deprecated and will be not be available in future releases of Analytics JS",
    Ze = _t(),
    Ye = Ze ? .analytics;

function Jn(e, t, r) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    var n = t ? 10 : 1,
        i = r ? new gt(n, []) : new wt(n, e);
    return new Cn(i)
}
var Wn = function() {
    function e(t) {
        var r;
        this.timeout = 300, this.writeKey = t.writeKey, this.cdnSettings = (r = t.cdnSettings) !== null && r !== void 0 ? r : {
            integrations: {},
            edgeFunction: {}
        }
    }
    return e
}();

function K() {
    console.warn(ee)
}
var Ot = function(e) {
        Q(t, e);

        function t(r, n, i, o, a) {
            var u = this,
                s, c;
            u = e.call(this) || this, u._debug = !1, u.initialized = !1, u.user = function() {
                return u._user
            }, u.init = u.initialize.bind(u), u.log = K, u.addIntegrationMiddleware = K, u.listeners = K, u.addEventListener = K, u.removeAllListeners = K, u.removeListener = K, u.removeEventListener = K, u.hasListeners = K, u.add = K, u.addIntegration = K;
            var l = n ? .cookie,
                f = (s = n ? .disableClientPersistence) !== null && s !== void 0 ? s : !1;
            u.settings = new Wn(r), u.queue = i ? ? Jn("".concat(r.writeKey, ":event-queue"), n ? .retryQueue, f);
            var h = n ? .storage;
            return u._universalStorage = u.createStore(f, h, l), u._user = o ? ? new It(y({
                persist: !f,
                storage: n ? .storage
            }, n ? .user), l).load(), u._group = a ? ? new Sr(y({
                persist: !f,
                storage: n ? .storage
            }, n ? .group), l).load(), u.eventFactory = new hr(u._user), u.integrations = (c = n ? .integrations) !== null && c !== void 0 ? c : {}, u.options = n ? ? {}, St(u), u
        }
        return t.prototype.createStore = function(r, n, i) {
            return r ? new re([new Et]) : n && _r(n) ? new re(st(wr(n.stores, i))) : new re(st([j.LocalStorage, {
                name: j.Cookie,
                settings: i
            }, j.Memory]))
        }, Object.defineProperty(t.prototype, "storage", {
            get: function() {
                return this._universalStorage
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.track = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o, a, u, s, c, l, f = this;
                return b(this, function(h) {
                    return i = pe(r), o = ar.apply(void 0, r), a = o[0], u = o[1], s = o[2], c = o[3], l = this.eventFactory.track(a, u, s, this.integrations, i), [2, this._dispatch(l, c).then(function(d) {
                        return f.emit("track", a, d.event.properties, d.event.options), d
                    })]
                })
            })
        }, t.prototype.page = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o, a, u, s, c, l, f, h = this;
                return b(this, function(d) {
                    return i = pe(r), o = it.apply(void 0, r), a = o[0], u = o[1], s = o[2], c = o[3], l = o[4], f = this.eventFactory.page(a, u, s, c, this.integrations, i), [2, this._dispatch(f, l).then(function(v) {
                        return h.emit("page", a, u, v.event.properties, v.event.options), v
                    })]
                })
            })
        }, t.prototype.identify = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o, a, u, s, c, l, f = this;
                return b(this, function(h) {
                    return i = pe(r), o = ot(this._user).apply(void 0, r), a = o[0], u = o[1], s = o[2], c = o[3], this._user.identify(a, u), l = this.eventFactory.identify(this._user.id(), this._user.traits(), s, this.integrations, i), [2, this._dispatch(l, c).then(function(d) {
                        return f.emit("identify", d.event.userId, d.event.traits, d.event.options), d
                    })]
                })
            })
        }, t.prototype.group = function() {
            for (var r = this, n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
            var o = pe(n);
            if (n.length === 0) return this._group;
            var a = ot(this._group).apply(void 0, n),
                u = a[0],
                s = a[1],
                c = a[2],
                l = a[3];
            this._group.identify(u, s);
            var f = this._group.id(),
                h = this._group.traits(),
                d = this.eventFactory.group(f, h, c, this.integrations, o);
            return this._dispatch(d, l).then(function(v) {
                return r.emit("group", v.event.groupId, v.event.traits, v.event.options), v
            })
        }, t.prototype.alias = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o, a, u, s, c, l, f = this;
                return b(this, function(h) {
                    return i = pe(r), o = ur.apply(void 0, r), a = o[0], u = o[1], s = o[2], c = o[3], l = this.eventFactory.alias(a, u, s, this.integrations, i), [2, this._dispatch(l, c).then(function(d) {
                        return f.emit("alias", a, u, d.event.options), d
                    })]
                })
            })
        }, t.prototype.screen = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o, a, u, s, c, l, f, h = this;
                return b(this, function(d) {
                    return i = pe(r), o = it.apply(void 0, r), a = o[0], u = o[1], s = o[2], c = o[3], l = o[4], f = this.eventFactory.screen(a, u, s, c, this.integrations, i), [2, this._dispatch(f, l).then(function(v) {
                        return h.emit("screen", a, u, v.event.properties, v.event.options), v
                    })]
                })
            })
        }, t.prototype.trackClick = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o;
                return b(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, $(() =>
                                import ("./ic3g7ev79io1wk7a.js"), __vite__mapDeps([0, 1, 2, 3]))];
                        case 1:
                            return i = a.sent(), [2, (o = i.link).call.apply(o, D([this], r, !1))]
                    }
                })
            })
        }, t.prototype.trackLink = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o;
                return b(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, $(() =>
                                import ("./ic3g7ev79io1wk7a.js"), __vite__mapDeps([0, 1, 2, 3]))];
                        case 1:
                            return i = a.sent(), [2, (o = i.link).call.apply(o, D([this], r, !1))]
                    }
                })
            })
        }, t.prototype.trackSubmit = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o;
                return b(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, $(() =>
                                import ("./ic3g7ev79io1wk7a.js"), __vite__mapDeps([0, 1, 2, 3]))];
                        case 1:
                            return i = a.sent(), [2, (o = i.form).call.apply(o, D([this], r, !1))]
                    }
                })
            })
        }, t.prototype.trackForm = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o;
                return b(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, $(() =>
                                import ("./ic3g7ev79io1wk7a.js"), __vite__mapDeps([0, 1, 2, 3]))];
                        case 1:
                            return i = a.sent(), [2, (o = i.form).call.apply(o, D([this], r, !1))]
                    }
                })
            })
        }, t.prototype.register = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o, a = this;
                return b(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return i = J.system(), o = r.map(function(s) {
                                return a.queue.register(i, s, a)
                            }), [4, Promise.all(o)];
                        case 1:
                            return u.sent(), [2, i]
                    }
                })
            })
        }, t.prototype.deregister = function() {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            return m(this, void 0, void 0, function() {
                var i, o, a = this;
                return b(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return i = J.system(), o = r.map(function(s) {
                                var c = a.queue.plugins.find(function(l) {
                                    return l.name === s
                                });
                                if (c) return a.queue.deregister(i, c, a);
                                i.log("warn", "plugin ".concat(s, " not found"))
                            }), [4, Promise.all(o)];
                        case 1:
                            return u.sent(), [2, i]
                    }
                })
            })
        }, t.prototype.debug = function(r) {
            return r === !1 && localStorage.getItem("debug") && localStorage.removeItem("debug"), this._debug = r, this
        }, t.prototype.reset = function() {
            this._user.reset(), this._group.reset(), this.emit("reset")
        }, t.prototype.timeout = function(r) {
            this.settings.timeout = r
        }, t.prototype._dispatch = function(r, n) {
            return m(this, void 0, void 0, function() {
                var i;
                return b(this, function(o) {
                    return i = new J(r), Ae() && !this.options.retryQueue ? [2, i] : [2, pn(i, this.queue, this, {
                        callback: n,
                        debug: this._debug,
                        timeout: this.settings.timeout
                    })]
                })
            })
        }, t.prototype.addSourceMiddleware = function(r) {
            return m(this, void 0, void 0, function() {
                var n = this;
                return b(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, this.queue.criticalTasks.run(function() {
                                return m(n, void 0, void 0, function() {
                                    var o, a, u;
                                    return b(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                return [4, $(() => Promise.resolve().then(() => Qi), void 0)];
                                            case 1:
                                                return o = s.sent().sourceMiddlewarePlugin, a = {}, this.queue.plugins.forEach(function(c) {
                                                    if (c.type === "destination") return a[c.name] = !0
                                                }), u = o(r, a), [4, this.register(u)];
                                            case 2:
                                                return s.sent(), [2]
                                        }
                                    })
                                })
                            })];
                        case 1:
                            return i.sent(), [2, this]
                    }
                })
            })
        }, t.prototype.addDestinationMiddleware = function(r) {
            for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
            return this.queue.plugins.filter(pr).forEach(function(o) {
                (r === "*" || o.name.toLowerCase() === r.toLowerCase()) && o.addMiddleware.apply(o, n)
            }), Promise.resolve(this)
        }, t.prototype.setAnonymousId = function(r) {
            return this._user.anonymousId(r)
        }, t.prototype.queryString = function(r) {
            return m(this, void 0, void 0, function() {
                var n;
                return b(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return this.options.useQueryString === !1 ? [2, []] : [4, $(() =>
                                import ("./b3rkb7nl1yb7kabp.js"), __vite__mapDeps([4, 1, 2, 3]))];
                        case 1:
                            return n = i.sent().queryString, [2, n(this, r)]
                    }
                })
            })
        }, t.prototype.use = function(r) {
            return r(this), this
        }, t.prototype.ready = function(r) {
            return r === void 0 && (r = function(n) {
                return n
            }), m(this, void 0, void 0, function() {
                return b(this, function(n) {
                    return [2, Promise.all(this.queue.plugins.map(function(i) {
                        return i.ready ? i.ready() : Promise.resolve()
                    })).then(function(i) {
                        return r(i), i
                    })]
                })
            })
        }, t.prototype.noConflict = function() {
            return console.warn(ee), Rn(Ye ? ? this), this
        }, t.prototype.normalize = function(r) {
            return console.warn(ee), this.eventFactory.normalize(r)
        }, Object.defineProperty(t.prototype, "failedInitializations", {
            get: function() {
                return console.warn(ee), this.queue.failedInitializations
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "VERSION", {
            get: function() {
                return $e
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.initialize = function(r, n) {
            return m(this, void 0, void 0, function() {
                return b(this, function(i) {
                    return console.warn(ee), [2, Promise.resolve(this)]
                })
            })
        }, t.prototype.pageview = function(r) {
            return m(this, void 0, void 0, function() {
                return b(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return console.warn(ee), [4, this.page({
                                path: r
                            })];
                        case 1:
                            return n.sent(), [2, this]
                    }
                })
            })
        }, Object.defineProperty(t.prototype, "plugins", {
            get: function() {
                var r;
                return console.warn(ee), (r = this._plugins) !== null && r !== void 0 ? r : {}
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "Integrations", {
            get: function() {
                console.warn(ee);
                var r = this.queue.plugins.filter(function(n) {
                    return n.type === "destination"
                }).reduce(function(n, i) {
                    var o = "".concat(i.name.toLowerCase().replace(".", "").split(" ").join("-"), "Integration"),
                        a = window[o];
                    if (!a) return n;
                    var u = a.Integration;
                    return u ? (n[i.name] = u, n) : (n[i.name] = a, n)
                }, {});
                return r
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.push = function(r) {
            var n = this,
                i = r.shift();
            i && !n[i] || n[i].apply(this, r)
        }, t
    }(yt),
    Qt = function(e) {
        Q(t, e);

        function t() {
            var r = e.call(this, {
                writeKey: ""
            }, {
                disableClientPersistence: !0
            }) || this;
            return r.initialized = !0, r
        }
        return t
    }(Ot),
    Ht = {};

function Pr() {
    return typeof process > "u" || !Ht ? {} : Ht
}
var Qn = /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/,
    Hn = function() {
        var e, t = Array.prototype.slice.call(document.querySelectorAll("script"));
        return t.forEach(function(r) {
            var n, i = (n = r.getAttribute("src")) !== null && n !== void 0 ? n : "",
                o = Qn.exec(i);
            o && o[1] && (e = o[1])
        }), e
    },
    je, Xn = function() {
        var e, t = je ? ? ((e = At()) === null || e === void 0 ? void 0 : e._cdn);
        return t
    },
    Zn = function(e) {
        var t = At();
        t && (t._cdn = e), je = e
    },
    xt = function() {
        var e = Xn();
        if (e) return e;
        var t = Hn();
        return t || "https://cdn.segment.com"
    },
    Oo = function() {
        var e = xt();
        return "".concat(e, "/next-integrations")
    };

function Yn(e, t) {
    var r, n = Object.entries((r = t.integrations) !== null && r !== void 0 ? r : {}).reduce(function(i, o) {
        var a, u, s = o[0],
            c = o[1];
        return typeof c == "object" ? y(y({}, i), (a = {}, a[s] = c, a)) : y(y({}, i), (u = {}, u[s] = {}, u))
    }, {});
    return Object.entries(e.integrations).reduce(function(i, o) {
        var a, u = o[0],
            s = o[1];
        return y(y({}, i), (a = {}, a[u] = y(y({}, s), n[u]), a))
    }, {})
}

function ei(e) {
    try {
        return decodeURIComponent(e.replace(/\+/g, " "))
    } catch {
        return e
    }
}

function ti(e) {
    return m(this, void 0, void 0, function() {
        var t;
        return b(this, function(r) {
            return t = navigator.userAgentData, t ? e ? [2, t.getHighEntropyValues(e).catch(function() {
                return t.toJSON()
            })] : [2, t.toJSON()] : [2, void 0]
        })
    })
}
var Ie;

function ri() {
    if (Ie) return Ie;
    var e = mr(window.location.href);
    return Ie = {
        expires: 31536e6,
        secure: !1,
        path: "/"
    }, e && (Ie.domain = e), Ie
}

function ni(e) {
    var t = {
        btid: "dataxu",
        urid: "millennial-media"
    };
    e.startsWith("?") && (e = e.substring(1)), e = e.replace(/\?/g, "&");
    for (var r = e.split("&"), n = 0, i = r; n < i.length; n++) {
        var o = i[n],
            a = o.split("="),
            u = a[0],
            s = a[1];
        if (t[u]) return {
            id: s,
            type: t[u]
        }
    }
}

function ii(e) {
    return e.startsWith("?") && (e = e.substring(1)), e = e.replace(/\?/g, "&"), e.split("&").reduce(function(t, r) {
        var n = r.split("="),
            i = n[0],
            o = n[1],
            a = o === void 0 ? "" : o;
        if (i.includes("utm_") && i.length > 4) {
            var u = i.slice(4);
            u === "campaign" && (u = "name"), t[u] = ei(a)
        }
        return t
    }, {})
}

function oi() {
    var e = Z.get("_ga");
    if (e && e.startsWith("amp")) return e
}

function ai(e, t, r) {
    var n, i = new re(r ? [] : [new br(ri())]),
        o = i.get("s:context.referrer"),
        a = (n = ni(e)) !== null && n !== void 0 ? n : o;
    a && (t && (t.referrer = y(y({}, t.referrer), a)), i.set("s:context.referrer", a))
}
var ui = function(e) {
        try {
            var t = new URLSearchParams;
            return Object.entries(e).forEach(function(r) {
                var n = r[0],
                    i = r[1];
                Array.isArray(i) ? i.forEach(function(o) {
                    return t.append(n, o)
                }) : t.append(n, i)
            }), t.toString()
        } catch {
            return ""
        }
    },
    si = function() {
        function e() {
            var t = this;
            this.name = "Page Enrichment", this.type = "before", this.version = "0.1.0", this.isLoaded = function() {
                return !0
            }, this.load = function(r, n) {
                return m(t, void 0, void 0, function() {
                    var i;
                    return b(this, function(o) {
                        switch (o.label) {
                            case 0:
                                this.instance = n, o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), i = this, [4, ti(this.instance.options.highEntropyValuesClientHints)];
                            case 2:
                                return i.userAgentData = o.sent(), [3, 4];
                            case 3:
                                return o.sent(), [3, 4];
                            case 4:
                                return [2, Promise.resolve()]
                        }
                    })
                })
            }, this.enrich = function(r) {
                var n, i, o = r.event.context,
                    a = o.page.search || "",
                    u = typeof a == "object" ? ui(a) : a;
                o.userAgent = navigator.userAgent, o.userAgentData = t.userAgentData;
                var s = navigator.userLanguage || navigator.language;
                typeof o.locale > "u" && typeof s < "u" && (o.locale = s), (n = o.library) !== null && n !== void 0 || (o.library = {
                    name: "analytics.js",
                    version: "".concat("npm:next", "-").concat($e)
                }), u && !o.campaign && (o.campaign = ii(u));
                var c = oi();
                c && (o.amp = {
                    id: c
                }), ai(u, o, (i = t.instance.options.disableClientPersistence) !== null && i !== void 0 ? i : !1);
                try {
                    o.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
                } catch {}
                return r
            }, this.track = this.enrich, this.identify = this.enrich, this.page = this.enrich, this.group = this.enrich, this.alias = this.enrich, this.screen = this.enrich
        }
        return e
    }(),
    ci = new si;

function Ar(e) {
    var t = Array.prototype.slice.call(window.document.querySelectorAll("script"));
    return t.find(function(r) {
        return r.src === e
    })
}

function et(e, t) {
    var r = Ar(e);
    if (r !== void 0) {
        var n = r ? .getAttribute("status");
        if (n === "loaded") return Promise.resolve(r);
        if (n === "loading") return new Promise(function(i, o) {
            r.addEventListener("load", function() {
                return i(r)
            }), r.addEventListener("error", function(a) {
                return o(a)
            })
        })
    }
    return new Promise(function(i, o) {
        var a, u = window.document.createElement("script");
        u.type = "text/javascript", u.src = e, u.async = !0, u.setAttribute("status", "loading");
        for (var s = 0, c = Object.entries({}); s < c.length; s++) {
            var l = c[s],
                f = l[0],
                h = l[1];
            u.setAttribute(f, h)
        }
        u.onload = function() {
            u.onerror = u.onload = null, u.setAttribute("status", "loaded"), i(u)
        }, u.onerror = function() {
            u.onerror = u.onload = null, u.setAttribute("status", "error"), o(new Error("Failed to load ".concat(e)))
        };
        var d = window.document.querySelector("script");
        d ? (a = d.parentElement) === null || a === void 0 || a.insertBefore(u, d) : window.document.head.appendChild(u)
    })
}

function xo(e) {
    var t = Ar(e);
    return t !== void 0 && t.remove(), Promise.resolve()
}
var te = {},
    H = {},
    Mt = {},
    Or = {
        exports: {}
    };
(function(e) {
    e.exports = t(r), e.exports.find = e.exports, e.exports.replace = function(u, s, c, l) {
        return t(i).call(this, u, s, c, l), u
    }, e.exports.del = function(u, s, c) {
        return t(n).call(this, u, s, null, c), u
    };

    function t(u) {
        return function(s, c, l, f) {
            var h = f && a(f.normalizer) ? f.normalizer : o;
            c = h(c);
            for (var d, v = !1; !v;) p();

            function p() {
                for (d in s) {
                    var S = h(d);
                    if (c.indexOf(S) === 0) {
                        var g = c.substr(S.length);
                        if (g.charAt(0) === "." || g.length === 0) {
                            c = g.substr(1);
                            var E = s[d];
                            if (E == null) {
                                v = !0;
                                return
                            }
                            if (!c.length) {
                                v = !0;
                                return
                            }
                            s = E;
                            return
                        }
                    }
                }
                d = void 0, v = !0
            }
            if (d) return s == null ? s : u(s, d, l)
        }
    }

    function r(u, s) {
        if (u.hasOwnProperty(s)) return u[s]
    }

    function n(u, s) {
        return u.hasOwnProperty(s) && delete u[s], u
    }

    function i(u, s, c) {
        return u.hasOwnProperty(s) && (u[s] = c), u
    }

    function o(u) {
        return u.replace(/[^a-zA-Z0-9\.]+/g, "").toLowerCase()
    }

    function a(u) {
        return typeof u == "function"
    }
})(Or);
var Be = Or.exports,
    li = M && M.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(Mt, "__esModule", {
    value: !0
});
var Y = li(Be);

function ye(e, t) {
    return function() {
        var r = this.traits(),
            n = this.properties ? this.properties() : {};
        return Y.default(r, "address." + e) || Y.default(r, e) || (t ? Y.default(r, "address." + t) : null) || (t ? Y.default(r, t) : null) || Y.default(n, "address." + e) || Y.default(n, e) || (t ? Y.default(n, "address." + t) : null) || (t ? Y.default(n, t) : null)
    }
}

function fi(e) {
    e.zip = ye("postalCode", "zip"), e.country = ye("country"), e.street = ye("street"), e.state = ye("state"), e.city = ye("city"), e.region = ye("region")
}
Mt.default = fi;
var Ue = {};
Object.defineProperty(Ue, "__esModule", {
    value: !0
});
Ue.clone = void 0;

function lt(e) {
    if (typeof e != "object") return e;
    if (Object.prototype.toString.call(e) === "[object Object]") {
        var t = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = lt(e[r]));
        return t
    } else return Array.isArray(e) ? e.map(lt) : e
}
Ue.clone = lt;
var Ct = {};
Object.defineProperty(Ct, "__esModule", {
    value: !0
});
var di = {
    Salesforce: !0
};

function vi(e) {
    return !di[e]
}
Ct.default = vi;
var Ke = {},
    xr = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
Ke.parse = function(e) {
    var t = [1, 5, 6, 7, 11, 12],
        r = xr.exec(e),
        n = 0;
    if (!r) return new Date(e);
    for (var i = 0, o; o = t[i]; i++) r[o] = parseInt(r[o], 10) || 0;
    r[2] = parseInt(r[2], 10) || 1, r[3] = parseInt(r[3], 10) || 1, r[2]--, r[8] = r[8] ? (r[8] + "00").substring(0, 3) : 0, r[4] === " " ? n = new Date().getTimezoneOffset() : r[9] !== "Z" && r[10] && (n = r[11] * 60 + r[12], r[10] === "+" && (n = 0 - n));
    var a = Date.UTC(r[1], r[2], r[3], r[5], r[6] + n, r[7], r[8]);
    return new Date(a)
};
Ke.is = function(e, t) {
    return typeof e != "string" || t && /^\d{4}-\d{2}-\d{2}/.test(e) === !1 ? !1 : xr.test(e)
};
var kt = {},
    hi = /\d{13}/;
kt.is = function(e) {
    return hi.test(e)
};
kt.parse = function(e) {
    return e = parseInt(e, 10), new Date(e)
};
var Dt = {},
    pi = /\d{10}/;
Dt.is = function(e) {
    return pi.test(e)
};
Dt.parse = function(e) {
    var t = parseInt(e, 10) * 1e3;
    return new Date(t)
};
var Xt = Ke,
    Zt = kt,
    Yt = Dt,
    yi = Object.prototype,
    Mr = yi.toString;

function gi(e) {
    return Mr.call(e) === "[object Date]"
}

function mi(e) {
    return Mr.call(e) === "[object Number]"
}
var Ft = function(t) {
    return gi(t) ? t : mi(t) ? new Date(bi(t)) : Xt.is(t) ? Xt.parse(t) : Zt.is(t) ? Zt.parse(t) : Yt.is(t) ? Yt.parse(t) : new Date(t)
};

function bi(e) {
    return e < 315576e5 ? e * 1e3 : e
}
var er = Ke,
    _i = Tt;

function Tt(e, t) {
    return t === void 0 && (t = !0), e && typeof e == "object" ? wi(e, t) : Array.isArray(e) ? Si(e, t) : er.is(e, t) ? er.parse(e) : e
}

function wi(e, t) {
    return Object.keys(e).forEach(function(r) {
        e[r] = Tt(e[r], t)
    }), e
}

function Si(e, t) {
    return e.forEach(function(r, n) {
        e[n] = Tt(r, t)
    }), e
}
var Oe = M && M.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(H, "__esModule", {
    value: !0
});
H.Facade = void 0;
var Ei = Oe(Mt),
    _e = Ue,
    Ii = Oe(Ct),
    Pi = Oe(Ft),
    ft = Oe(Be),
    Ai = Oe(_i);

function L(e, t) {
    t = t || {}, this.raw = _e.clone(e), "clone" in t || (t.clone = !0), t.clone && (e = _e.clone(e)), "traverse" in t || (t.traverse = !0), "timestamp" in e ? e.timestamp = Pi.default(e.timestamp) : e.timestamp = new Date, t.traverse && Ai.default(e), this.opts = t, this.obj = e
}
H.Facade = L;
var O = L.prototype;
O.proxy = function(e) {
    var t = e.split(".");
    e = t.shift();
    var r = this[e] || this.obj[e];
    return r && (typeof r == "function" && (r = r.call(this) || {}), t.length === 0 ? this.opts.clone ? dt(r) : r : (r = ft.default(r, t.join(".")), this.opts.clone ? dt(r) : r))
};
O.field = function(e) {
    var t = this.obj[e];
    return this.opts.clone ? dt(t) : t
};
L.proxy = function(e) {
    return function() {
        return this.proxy(e)
    }
};
L.field = function(e) {
    return function() {
        return this.field(e)
    }
};
L.multi = function(e) {
    return function() {
        var t = this.proxy(e + "s");
        if (Array.isArray(t)) return t;
        var r = this.proxy(e);
        return r && (r = [this.opts.clone ? _e.clone(r) : r]), r || []
    }
};
L.one = function(e) {
    return function() {
        var t = this.proxy(e);
        if (t) return t;
        var r = this.proxy(e + "s");
        if (Array.isArray(r)) return r[0]
    }
};
O.json = function() {
    var e = this.opts.clone ? _e.clone(this.obj) : this.obj;
    return this.type && (e.type = this.type()), e
};
O.rawEvent = function() {
    return this.raw
};
O.options = function(e) {
    var t = this.obj.options || this.obj.context || {},
        r = this.opts.clone ? _e.clone(t) : t;
    if (!e) return r;
    if (this.enabled(e)) {
        var n = this.integrations(),
            i = n[e] || ft.default(n, e);
        return typeof i != "object" && (i = ft.default(this.options(), e)), typeof i == "object" ? i : {}
    }
};
O.context = O.options;
O.enabled = function(e) {
    var t = this.proxy("options.providers.all");
    typeof t != "boolean" && (t = this.proxy("options.all")), typeof t != "boolean" && (t = this.proxy("integrations.all")), typeof t != "boolean" && (t = !0);
    var r = t && Ii.default(e),
        n = this.integrations();
    if (n.providers && n.providers.hasOwnProperty(e) && (r = n.providers[e]), n.hasOwnProperty(e)) {
        var i = n[e];
        typeof i == "boolean" ? r = i : r = !0
    }
    return !!r
};
O.integrations = function() {
    return this.obj.integrations || this.proxy("options.providers") || this.options()
};
O.active = function() {
    var e = this.proxy("options.active");
    return e == null && (e = !0), e
};
O.anonymousId = function() {
    return this.field("anonymousId") || this.field("sessionId")
};
O.sessionId = O.anonymousId;
O.groupId = L.proxy("options.groupId");
O.traits = function(e) {
    var t = this.proxy("options.traits") || {},
        r = this.userId();
    e = e || {}, r && (t.id = r);
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            var i = this[n] == null ? this.proxy("options.traits." + n) : this[n]();
            if (i == null) continue;
            t[e[n]] = i, delete t[n]
        }
    return t
};
O.library = function() {
    var e = this.proxy("options.library");
    return e ? typeof e == "string" ? {
        name: e,
        version: null
    } : e : {
        name: "unknown",
        version: null
    }
};
O.device = function() {
    var e = this.proxy("context.device");
    (typeof e != "object" || e === null) && (e = {});
    var t = this.library().name;
    return e.type || (t.indexOf("ios") > -1 && (e.type = "ios"), t.indexOf("android") > -1 && (e.type = "android")), e
};
O.userAgent = L.proxy("context.userAgent");
O.timezone = L.proxy("context.timezone");
O.timestamp = L.field("timestamp");
O.channel = L.field("channel");
O.ip = L.proxy("context.ip");
O.userId = L.field("userId");
Ei.default(O);

function dt(e) {
    return _e.clone(e)
}
var Ve = {},
    vt = {
        exports: {}
    };
typeof Object.create == "function" ? vt.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }))
} : vt.exports = function(t, r) {
    if (r) {
        t.super_ = r;
        var n = function() {};
        n.prototype = r.prototype, t.prototype = new n, t.prototype.constructor = t
    }
};
var de = vt.exports,
    Oi = M && M.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(Ve, "__esModule", {
    value: !0
});
Ve.Alias = void 0;
var xi = Oi(de),
    Cr = H;

function B(e, t) {
    Cr.Facade.call(this, e, t)
}
Ve.Alias = B;
xi.default(B, Cr.Facade);
B.prototype.action = function() {
    return "alias"
};
B.prototype.type = B.prototype.action;
B.prototype.previousId = function() {
    return this.field("previousId") || this.field("from")
};
B.prototype.from = B.prototype.previousId;
B.prototype.userId = function() {
    return this.field("userId") || this.field("to")
};
B.prototype.to = B.prototype.userId;
var Ge = {},
    we = {};
Object.defineProperty(we, "__esModule", {
    value: !0
});
var Mi = /.+\@.+\..+/;

function Ci(e) {
    return Mi.test(e)
}
we.default = Ci;
var jt = M && M.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(Ge, "__esModule", {
    value: !0
});
Ge.Group = void 0;
var ki = jt(de),
    Di = jt(we),
    Fi = jt(Ft),
    Se = H;

function Nt(e, t) {
    Se.Facade.call(this, e, t)
}
Ge.Group = Nt;
ki.default(Nt, Se.Facade);
var U = Nt.prototype;
U.action = function() {
    return "group"
};
U.type = U.action;
U.groupId = Se.Facade.field("groupId");
U.created = function() {
    var e = this.proxy("traits.createdAt") || this.proxy("traits.created") || this.proxy("properties.createdAt") || this.proxy("properties.created");
    if (e) return Fi.default(e)
};
U.email = function() {
    var e = this.proxy("traits.email");
    if (e) return e;
    var t = this.groupId();
    if (Di.default(t)) return t
};
U.traits = function(e) {
    var t = this.properties(),
        r = this.groupId();
    e = e || {}, r && (t.id = r);
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            var i = this[n] == null ? this.proxy("traits." + n) : this[n]();
            if (i == null) continue;
            t[e[n]] = i, delete t[n]
        }
    return t
};
U.name = Se.Facade.proxy("traits.name");
U.industry = Se.Facade.proxy("traits.industry");
U.employees = Se.Facade.proxy("traits.employees");
U.properties = function() {
    return this.field("traits") || this.field("properties") || {}
};
var xe = {},
    Je = M && M.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(xe, "__esModule", {
    value: !0
});
xe.Identify = void 0;
var X = H,
    be = Je(Be),
    Ti = Je(de),
    ji = Je(we),
    kr = Je(Ft),
    ue = function(e) {
        return e.trim()
    };

function Lt(e, t) {
    X.Facade.call(this, e, t)
}
xe.Identify = Lt;
Ti.default(Lt, X.Facade);
var x = Lt.prototype;
x.action = function() {
    return "identify"
};
x.type = x.action;
x.traits = function(e) {
    var t = this.field("traits") || {},
        r = this.userId();
    e = e || {}, r && (t.id = r);
    for (var n in e) {
        var i = this[n] == null ? this.proxy("traits." + n) : this[n]();
        i != null && (t[e[n]] = i, n !== e[n] && delete t[n])
    }
    return t
};
x.email = function() {
    var e = this.proxy("traits.email");
    if (e) return e;
    var t = this.userId();
    if (ji.default(t)) return t
};
x.created = function() {
    var e = this.proxy("traits.created") || this.proxy("traits.createdAt");
    if (e) return kr.default(e)
};
x.companyCreated = function() {
    var e = this.proxy("traits.company.created") || this.proxy("traits.company.createdAt");
    if (e) return kr.default(e)
};
x.companyName = function() {
    return this.proxy("traits.company.name")
};
x.name = function() {
    var e = this.proxy("traits.name");
    if (typeof e == "string") return ue(e);
    var t = this.firstName(),
        r = this.lastName();
    if (t && r) return ue(t + " " + r)
};
x.firstName = function() {
    var e = this.proxy("traits.firstName");
    if (typeof e == "string") return ue(e);
    var t = this.proxy("traits.name");
    if (typeof t == "string") return ue(t).split(" ")[0]
};
x.lastName = function() {
    var e = this.proxy("traits.lastName");
    if (typeof e == "string") return ue(e);
    var t = this.proxy("traits.name");
    if (typeof t == "string") {
        var r = ue(t).indexOf(" ");
        if (r !== -1) return ue(t.substr(r + 1))
    }
};
x.uid = function() {
    return this.userId() || this.username() || this.email()
};
x.description = function() {
    return this.proxy("traits.description") || this.proxy("traits.background")
};
x.age = function() {
    var e = this.birthday(),
        t = be.default(this.traits(), "age");
    if (t != null) return t;
    if (e instanceof Date) {
        var r = new Date;
        return r.getFullYear() - e.getFullYear()
    }
};
x.avatar = function() {
    var e = this.traits();
    return be.default(e, "avatar") || be.default(e, "photoUrl") || be.default(e, "avatarUrl")
};
x.position = function() {
    var e = this.traits();
    return be.default(e, "position") || be.default(e, "jobTitle")
};
x.username = X.Facade.proxy("traits.username");
x.website = X.Facade.one("traits.website");
x.websites = X.Facade.multi("traits.website");
x.phone = X.Facade.one("traits.phone");
x.phones = X.Facade.multi("traits.phone");
x.address = X.Facade.proxy("traits.address");
x.gender = X.Facade.proxy("traits.gender");
x.birthday = X.Facade.proxy("traits.birthday");
var Ee = {},
    Rt = M && M.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(Ee, "__esModule", {
    value: !0
});
Ee.Track = void 0;
var Ni = Rt(de),
    k = H,
    Li = xe,
    Ri = Rt(we),
    Dr = Rt(Be);

function qt(e, t) {
    k.Facade.call(this, e, t)
}
Ee.Track = qt;
Ni.default(qt, k.Facade);
var w = qt.prototype;
w.action = function() {
    return "track"
};
w.type = w.action;
w.event = k.Facade.field("event");
w.value = k.Facade.proxy("properties.value");
w.category = k.Facade.proxy("properties.category");
w.id = k.Facade.proxy("properties.id");
w.productId = function() {
    return this.proxy("properties.product_id") || this.proxy("properties.productId")
};
w.promotionId = function() {
    return this.proxy("properties.promotion_id") || this.proxy("properties.promotionId")
};
w.cartId = function() {
    return this.proxy("properties.cart_id") || this.proxy("properties.cartId")
};
w.checkoutId = function() {
    return this.proxy("properties.checkout_id") || this.proxy("properties.checkoutId")
};
w.paymentId = function() {
    return this.proxy("properties.payment_id") || this.proxy("properties.paymentId")
};
w.couponId = function() {
    return this.proxy("properties.coupon_id") || this.proxy("properties.couponId")
};
w.wishlistId = function() {
    return this.proxy("properties.wishlist_id") || this.proxy("properties.wishlistId")
};
w.reviewId = function() {
    return this.proxy("properties.review_id") || this.proxy("properties.reviewId")
};
w.orderId = function() {
    return this.proxy("properties.id") || this.proxy("properties.order_id") || this.proxy("properties.orderId")
};
w.sku = k.Facade.proxy("properties.sku");
w.tax = k.Facade.proxy("properties.tax");
w.name = k.Facade.proxy("properties.name");
w.price = k.Facade.proxy("properties.price");
w.total = k.Facade.proxy("properties.total");
w.repeat = k.Facade.proxy("properties.repeat");
w.coupon = k.Facade.proxy("properties.coupon");
w.shipping = k.Facade.proxy("properties.shipping");
w.discount = k.Facade.proxy("properties.discount");
w.shippingMethod = function() {
    return this.proxy("properties.shipping_method") || this.proxy("properties.shippingMethod")
};
w.paymentMethod = function() {
    return this.proxy("properties.payment_method") || this.proxy("properties.paymentMethod")
};
w.description = k.Facade.proxy("properties.description");
w.plan = k.Facade.proxy("properties.plan");
w.subtotal = function() {
    var e = Dr.default(this.properties(), "subtotal"),
        t = this.total() || this.revenue();
    if (e) return e;
    if (!t) return 0;
    if (this.total()) {
        var r = this.tax();
        r && (t -= r), r = this.shipping(), r && (t -= r), r = this.discount(), r && (t += r)
    }
    return t
};
w.products = function() {
    var e = this.properties(),
        t = Dr.default(e, "products");
    return Array.isArray(t) ? t.filter(function(r) {
        return r !== null
    }) : []
};
w.quantity = function() {
    var e = this.obj.properties || {};
    return e.quantity || 1
};
w.currency = function() {
    var e = this.obj.properties || {};
    return e.currency || "USD"
};
w.referrer = function() {
    return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer")
};
w.query = k.Facade.proxy("options.query");
w.properties = function(e) {
    var t = this.field("properties") || {};
    e = e || {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            var n = this[r] == null ? this.proxy("properties." + r) : this[r]();
            if (n == null) continue;
            t[e[r]] = n, delete t[r]
        }
    return t
};
w.username = function() {
    return this.proxy("traits.username") || this.proxy("properties.username") || this.userId() || this.sessionId()
};
w.email = function() {
    var e = this.proxy("traits.email") || this.proxy("properties.email") || this.proxy("options.traits.email");
    if (e) return e;
    var t = this.userId();
    if (Ri.default(t)) return t
};
w.revenue = function() {
    var e = this.proxy("properties.revenue"),
        t = this.event(),
        r = /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i;
    return !e && t && t.match(r) && (e = this.proxy("properties.total")), qi(e)
};
w.cents = function() {
    var e = this.revenue();
    return typeof e != "number" ? this.value() || 0 : e * 100
};
w.identify = function() {
    var e = this.json();
    return e.traits = this.traits(), new Li.Identify(e, this.opts)
};

function qi(e) {
    if (e) {
        if (typeof e == "number") return e;
        if (typeof e == "string" && (e = e.replace(/\$/g, ""), e = parseFloat(e), !isNaN(e))) return e
    }
}
var Me = {},
    Fr = M && M.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(Me, "__esModule", {
    value: !0
});
Me.Page = void 0;
var $i = Fr(de),
    ve = H,
    zi = Ee,
    Bi = Fr(we);

function $t(e, t) {
    ve.Facade.call(this, e, t)
}
Me.Page = $t;
$i.default($t, ve.Facade);
var N = $t.prototype;
N.action = function() {
    return "page"
};
N.type = N.action;
N.category = ve.Facade.field("category");
N.name = ve.Facade.field("name");
N.title = ve.Facade.proxy("properties.title");
N.path = ve.Facade.proxy("properties.path");
N.url = ve.Facade.proxy("properties.url");
N.referrer = function() {
    return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer")
};
N.properties = function(e) {
    var t = this.field("properties") || {},
        r = this.category(),
        n = this.name();
    e = e || {}, r && (t.category = r), n && (t.name = n);
    for (var i in e)
        if (Object.prototype.hasOwnProperty.call(e, i)) {
            var o = this[i] == null ? this.proxy("properties." + i) : this[i]();
            if (o == null) continue;
            t[e[i]] = o, i !== e[i] && delete t[i]
        }
    return t
};
N.email = function() {
    var e = this.proxy("context.traits.email") || this.proxy("properties.email");
    if (e) return e;
    var t = this.userId();
    if (Bi.default(t)) return t
};
N.fullName = function() {
    var e = this.category(),
        t = this.name();
    return t && e ? e + " " + t : t
};
N.event = function(e) {
    return e ? "Viewed " + e + " Page" : "Loaded a Page"
};
N.track = function(e) {
    var t = this.json();
    return t.event = this.event(e), t.timestamp = this.timestamp(), t.properties = this.properties(), new zi.Track(t, this.opts)
};
var We = {},
    Ui = M && M.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(We, "__esModule", {
    value: !0
});
We.Screen = void 0;
var Ki = Ui(de),
    Tr = Me,
    Vi = Ee;

function le(e, t) {
    Tr.Page.call(this, e, t)
}
We.Screen = le;
Ki.default(le, Tr.Page);
le.prototype.action = function() {
    return "screen"
};
le.prototype.type = le.prototype.action;
le.prototype.event = function(e) {
    return e ? "Viewed " + e + " Screen" : "Loaded a Screen"
};
le.prototype.track = function(e) {
    var t = this.json();
    return t.event = this.event(e), t.timestamp = this.timestamp(), t.properties = this.properties(), new Vi.Track(t, this.opts)
};
var Qe = {},
    Gi = M && M.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(Qe, "__esModule", {
    value: !0
});
Qe.Delete = void 0;
var Ji = Gi(de),
    jr = H;

function zt(e, t) {
    jr.Facade.call(this, e, t)
}
Qe.Delete = zt;
Ji.default(zt, jr.Facade);
zt.prototype.type = function() {
    return "delete"
};
(function(e) {
    var t = M && M.__assign || function() {
        return t = Object.assign || function(l) {
            for (var f, h = 1, d = arguments.length; h < d; h++) {
                f = arguments[h];
                for (var v in f) Object.prototype.hasOwnProperty.call(f, v) && (l[v] = f[v])
            }
            return l
        }, t.apply(this, arguments)
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Delete = e.Screen = e.Page = e.Track = e.Identify = e.Group = e.Alias = e.Facade = void 0;
    var r = H;
    Object.defineProperty(e, "Facade", {
        enumerable: !0,
        get: function() {
            return r.Facade
        }
    });
    var n = Ve;
    Object.defineProperty(e, "Alias", {
        enumerable: !0,
        get: function() {
            return n.Alias
        }
    });
    var i = Ge;
    Object.defineProperty(e, "Group", {
        enumerable: !0,
        get: function() {
            return i.Group
        }
    });
    var o = xe;
    Object.defineProperty(e, "Identify", {
        enumerable: !0,
        get: function() {
            return o.Identify
        }
    });
    var a = Ee;
    Object.defineProperty(e, "Track", {
        enumerable: !0,
        get: function() {
            return a.Track
        }
    });
    var u = Me;
    Object.defineProperty(e, "Page", {
        enumerable: !0,
        get: function() {
            return u.Page
        }
    });
    var s = We;
    Object.defineProperty(e, "Screen", {
        enumerable: !0,
        get: function() {
            return s.Screen
        }
    });
    var c = Qe;
    Object.defineProperty(e, "Delete", {
        enumerable: !0,
        get: function() {
            return c.Delete
        }
    }), e.default = t(t({}, r.Facade), {
        Alias: n.Alias,
        Group: i.Group,
        Identify: o.Identify,
        Track: a.Track,
        Page: u.Page,
        Screen: s.Screen,
        Delete: c.Delete
    })
})(te);

function Le(e, t) {
    var r = new te.Facade(e, t);
    return e.type === "track" && (r = new te.Track(e, t)), e.type === "identify" && (r = new te.Identify(e, t)), e.type === "page" && (r = new te.Page(e, t)), e.type === "alias" && (r = new te.Alias(e, t)), e.type === "group" && (r = new te.Group(e, t)), e.type === "screen" && (r = new te.Screen(e, t)), Object.defineProperty(r, "obj", {
        value: e,
        writable: !0
    }), r
}

function Nr(e, t, r) {
    return m(this, void 0, void 0, function() {
        function n(c, l) {
            return m(this, void 0, void 0, function() {
                var f, h, d;
                return b(this, function(v) {
                    switch (v.label) {
                        case 0:
                            return f = !1, h = null, [4, l({
                                payload: Le(c, {
                                    clone: !0,
                                    traverse: !1
                                }),
                                integration: e,
                                next: function(p) {
                                    f = !0, p === null && (h = null), p && (h = p.obj)
                                }
                            })];
                        case 1:
                            return v.sent(), !f && h !== null && (h = h, h.integrations = y(y({}, c.integrations), (d = {}, d[e] = !1, d))), [2, h]
                    }
                })
            })
        }
        var i, o, a, u, s;
        return b(this, function(c) {
            switch (c.label) {
                case 0:
                    i = Le(t, {
                        clone: !0,
                        traverse: !1
                    }).rawEvent(), o = 0, a = r, c.label = 1;
                case 1:
                    return o < a.length ? (u = a[o], [4, n(i, u)]) : [3, 4];
                case 2:
                    if (s = c.sent(), s === null) return [2, null];
                    i = s, c.label = 3;
                case 3:
                    return o++, [3, 1];
                case 4:
                    return [2, i]
            }
        })
    })
}

function Wi(e, t) {
    function r(n) {
        return m(this, void 0, void 0, function() {
            var i;
            return b(this, function(o) {
                switch (o.label) {
                    case 0:
                        return i = !1, [4, e({
                            payload: Le(n.event, {
                                clone: !0,
                                traverse: !1
                            }),
                            integrations: t ? ? {},
                            next: function(a) {
                                i = !0, a && (n.event = a.obj)
                            }
                        })];
                    case 1:
                        if (o.sent(), !i) throw new ce({
                            retry: !1,
                            type: "middleware_cancellation",
                            reason: "Middleware `next` function skipped"
                        });
                        return [2, n]
                }
            })
        })
    }
    return {
        name: "Source Middleware ".concat(e.name),
        type: "before",
        version: "0.1.0",
        isLoaded: function() {
            return !0
        },
        load: function(n) {
            return Promise.resolve(n)
        },
        track: r,
        page: r,
        identify: r,
        alias: r,
        group: r
    }
}
const Qi = Object.freeze(Object.defineProperty({
    __proto__: null,
    applyDestinationMiddleware: Nr,
    sourceMiddlewarePlugin: Wi
}, Symbol.toStringTag, {
    value: "Module"
}));

function Fe(e, t) {
    var r = t.methodName,
        n = t.integrationName,
        i = t.type,
        o = t.didError,
        a = o === void 0 ? !1 : o;
    e.stats.increment("analytics_js.integration.invoke".concat(a ? ".error" : ""), 1, ["method:".concat(r), "integration_name:".concat(n), "type:".concat(i)])
}
var Hi = function() {
    function e(t, r) {
        this.version = "1.0.0", this.alternativeNames = [], this.loadPromise = nr(), this.middleware = [], this.alias = this._createMethod("alias"), this.group = this._createMethod("group"), this.identify = this._createMethod("identify"), this.page = this._createMethod("page"), this.screen = this._createMethod("screen"), this.track = this._createMethod("track"), this.action = r, this.name = t, this.type = r.type, this.alternativeNames.push(r.name)
    }
    return e.prototype.addMiddleware = function() {
        for (var t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        this.type === "destination" && (t = this.middleware).push.apply(t, r)
    }, e.prototype.transform = function(t) {
        return m(this, void 0, void 0, function() {
            var r;
            return b(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, Nr(this.name, t.event, this.middleware)];
                    case 1:
                        return r = n.sent(), r === null && t.cancel(new ce({
                            retry: !1,
                            reason: "dropped by destination middleware"
                        })), [2, new J(r)]
                }
            })
        })
    }, e.prototype._createMethod = function(t) {
        var r = this;
        return function(n) {
            return m(r, void 0, void 0, function() {
                var i, o;
                return b(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return this.action[t] ? (i = n, this.type !== "destination" ? [3, 2] : [4, this.transform(n)]) : [2, n];
                        case 1:
                            i = a.sent(), a.label = 2;
                        case 2:
                            return a.trys.push([2, 5, , 6]), [4, this.ready()];
                        case 3:
                            if (!a.sent()) throw new Error("Something prevented the destination from getting ready");
                            return Fe(n, {
                                integrationName: this.action.name,
                                methodName: t,
                                type: "action"
                            }), [4, this.action[t](i)];
                        case 4:
                            return a.sent(), [3, 6];
                        case 5:
                            throw o = a.sent(), Fe(n, {
                                integrationName: this.action.name,
                                methodName: t,
                                type: "action",
                                didError: !0
                            }), o;
                        case 6:
                            return [2, n]
                    }
                })
            })
        }
    }, e.prototype.isLoaded = function() {
        return this.action.isLoaded()
    }, e.prototype.ready = function() {
        return m(this, void 0, void 0, function() {
            return b(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, this.loadPromise.promise];
                    case 1:
                        return t.sent(), [2, !0];
                    case 2:
                        return t.sent(), [2, !1];
                    case 3:
                        return [2]
                }
            })
        })
    }, e.prototype.load = function(t, r) {
        return m(this, void 0, void 0, function() {
            var n, i, o, a;
            return b(this, function(u) {
                switch (u.label) {
                    case 0:
                        if (this.loadPromise.isSettled()) return [2, this.loadPromise.promise];
                        u.label = 1;
                    case 1:
                        return u.trys.push([1, 3, , 4]), Fe(t, {
                            integrationName: this.action.name,
                            methodName: "load",
                            type: "action"
                        }), n = this.action.load(t, r), o = (i = this.loadPromise).resolve, [4, n];
                    case 2:
                        return o.apply(i, [u.sent()]), [2, n];
                    case 3:
                        throw a = u.sent(), Fe(t, {
                            integrationName: this.action.name,
                            methodName: "load",
                            type: "action",
                            didError: !0
                        }), this.loadPromise.reject(a), a;
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.unload = function(t, r) {
        var n, i;
        return (i = (n = this.action).unload) === null || i === void 0 ? void 0 : i.call(n, t, r)
    }, e
}();

function Xi(e) {
    if (!Array.isArray(e)) throw new Error("Not a valid list of plugins");
    var t = ["load", "isLoaded", "name", "version", "type"];
    return e.forEach(function(r) {
        t.forEach(function(n) {
            var i;
            if (r[n] === void 0) throw new Error("Plugin: ".concat((i = r.name) !== null && i !== void 0 ? i : "unknown", " missing required function ").concat(n))
        })
    }), !0
}

function Zi(e, t) {
    var r = e[t.creationName],
        n = e[t.name];
    return e.All === !1 && !r && !n || r === !1 || n === !1
}

function Yi(e, t) {
    return m(this, void 0, void 0, function() {
        var r, n, i, o, a, u;
        return b(this, function(s) {
            switch (s.label) {
                case 0:
                    if (s.trys.push([0, 9, , 10]), r = new RegExp("https://cdn.segment.(com|build)"), n = xt(), !t) return [3, 6];
                    i = e.url.split("/"), o = i[i.length - 2], a = e.url.replace(o, btoa(o).replace(/=/g, "")), s.label = 1;
                case 1:
                    return s.trys.push([1, 3, , 5]), [4, et(a.replace(r, n))];
                case 2:
                    return s.sent(), [3, 5];
                case 3:
                    return s.sent(), [4, et(e.url.replace(r, n))];
                case 4:
                    return s.sent(), [3, 5];
                case 5:
                    return [3, 8];
                case 6:
                    return [4, et(e.url.replace(r, n))];
                case 7:
                    s.sent(), s.label = 8;
                case 8:
                    return typeof window[e.libraryName] == "function" ? [2, window[e.libraryName]] : [3, 10];
                case 9:
                    throw u = s.sent(), console.error("Failed to create PluginFactory", e), u;
                case 10:
                    return [2]
            }
        })
    })
}

function eo(e, t, r, n, i, o) {
    var a, u, s;
    return m(this, void 0, void 0, function() {
        var c, l, f, h = this;
        return b(this, function(d) {
            switch (d.label) {
                case 0:
                    return c = [], l = (u = (a = e.middlewareSettings) === null || a === void 0 ? void 0 : a.routingRules) !== null && u !== void 0 ? u : [], f = ((s = e.remotePlugins) !== null && s !== void 0 ? s : []).map(function(v) {
                        return m(h, void 0, void 0, function() {
                            var p, S, g, E, I, P;
                            return b(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        if (Zi(t, v)) return [2];
                                        A.label = 1;
                                    case 1:
                                        return A.trys.push([1, 6, , 7]), S = o ? .find(function(C) {
                                            var R = C.pluginName;
                                            return R === v.name
                                        }), S ? [3, 3] : [4, Yi(v, n ? .obfuscate)];
                                    case 2:
                                        S = A.sent(), A.label = 3;
                                    case 3:
                                        return p = S, p ? [4, p(y(y({}, v.settings), r[v.name]))] : [3, 5];
                                    case 4:
                                        g = A.sent(), E = Array.isArray(g) ? g : [g], Xi(E), I = l.filter(function(C) {
                                            return C.destinationName === v.creationName
                                        }), E.forEach(function(C) {
                                            var R = new Hi(v.creationName, C);
                                            I.length && i && R.addMiddleware(i), c.push(R)
                                        }), A.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return P = A.sent(), console.warn("Failed to load Remote Plugin", P), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }), [4, Promise.all(f)];
                case 1:
                    return d.sent(), [2, c.filter(Boolean)]
            }
        })
    })
}
var to = function(e) {
        var t = !1;
        window.addEventListener("pagehide", function() {
            t || (t = !0, e(t))
        }), document.addEventListener("visibilitychange", function() {
            if (document.visibilityState == "hidden") {
                if (t) return;
                t = !0
            } else t = !1;
            e(t)
        })
    },
    Lr = function(e) {
        Q(t, e);

        function t(r, n) {
            var i = e.call(this, r) || this;
            return i.retryTimeout = n, i.name = "RateLimitError", i
        }
        return t
    }(Error),
    ro = 500,
    no = 64;

function Bt(e) {
    var t = encodeURI(JSON.stringify(e)).split(/%..|./).length - 1;
    return t / 1024
}

function io(e) {
    return Bt(e) >= ro - 50
}

function oo(e) {
    return Bt(e) >= no - 10
}

function ao(e) {
    var t = [],
        r = 0;
    return e.forEach(function(n) {
        var i = Bt(t[r]);
        i >= 64 && r++, t[r] ? t[r].push(n) : t[r] = [n]
    }), t
}

function uo(e, t) {
    var r, n, i = [],
        o = !1,
        a = (r = t ? .size) !== null && r !== void 0 ? r : 10,
        u = (n = t ? .timeout) !== null && n !== void 0 ? n : 5e3,
        s = 0;

    function c(v) {
        var p;
        if (v.length !== 0) {
            var S = (p = v[0]) === null || p === void 0 ? void 0 : p.writeKey,
                g = v.map(function(E) {
                    var I = E;
                    I.sentAt;
                    var P = zr(I, ["sentAt"]);
                    return P
                });
            return qe("https://".concat(e, "/b"), {
                keepalive: t ? .keepalive || o,
                headers: {
                    "Content-Type": "text/plain"
                },
                method: "post",
                body: JSON.stringify({
                    writeKey: S,
                    batch: g,
                    sentAt: new Date().toISOString()
                })
            }).then(function(E) {
                var I;
                if (E.status >= 500) throw new Error("Bad response from server: ".concat(E.status));
                if (E.status === 429) {
                    var P = (I = E.headers) === null || I === void 0 ? void 0 : I.get("x-ratelimit-reset"),
                        A = typeof P == "string" ? parseInt(P) * 1e3 : u;
                    throw new Lr("Rate limit exceeded: ".concat(E.status), A)
                }
            })
        }
    }

    function l(v) {
        var p;
        return v === void 0 && (v = 1), m(this, void 0, void 0, function() {
            var S;
            return b(this, function(g) {
                return i.length ? (S = i, i = [], [2, (p = c(S)) === null || p === void 0 ? void 0 : p.catch(function(E) {
                    var I, P = J.system();
                    P.log("error", "Error sending batch", E), v <= ((I = t ? .maxRetries) !== null && I !== void 0 ? I : 10) && (E.name === "RateLimitError" && (s = E.retryTimeout), i.push.apply(i, S), i.map(function(A) {
                        if ("_metadata" in A) {
                            var C = A;
                            C._metadata = y(y({}, C._metadata), {
                                retryCount: v
                            })
                        }
                    }), h(v + 1))
                })]) : [2]
            })
        })
    }
    var f;

    function h(v) {
        v === void 0 && (v = 1), !f && (f = setTimeout(function() {
            f = void 0, l(v).catch(console.error)
        }, s || u), s = 0)
    }
    to(function(v) {
        if (o = v, o && i.length) {
            var p = ao(i).map(c);
            Promise.all(p).catch(console.error)
        }
    });

    function d(v, p) {
        return m(this, void 0, void 0, function() {
            var S;
            return b(this, function(g) {
                return i.push(p), S = i.length >= a || io(i) || t ? .keepalive && oo(i), [2, S || o ? l() : h()]
            })
        })
    }
    return {
        dispatch: d
    }
}

function so(e) {
    function t(r, n) {
        return qe(r, {
            keepalive: e ? .keepalive,
            headers: {
                "Content-Type": "text/plain"
            },
            method: "post",
            body: JSON.stringify(n)
        }).then(function(i) {
            var o;
            if (i.status >= 500) throw new Error("Bad response from server: ".concat(i.status));
            if (i.status === 429) {
                var a = (o = i.headers) === null || o === void 0 ? void 0 : o.get("x-ratelimit-reset"),
                    u = a ? parseInt(a) * 1e3 : 5e3;
                throw new Lr("Rate limit exceeded: ".concat(i.status), u)
            }
        })
    }
    return {
        dispatch: t
    }
}

function co(e, t, r, n, i) {
    var o, a = e.user();
    delete t.options, t.writeKey = r ? .apiKey, t.userId = t.userId || a.id(), t.anonymousId = t.anonymousId || a.anonymousId(), t.sentAt = new Date;
    var u = e.queue.failedInitializations || [];
    u.length > 0 && (t._metadata = {
        failedInitializations: u
    }), i != null && (i.attempts > 1 && (t._metadata = y(y({}, t._metadata), {
        retryCount: i.attempts
    })), i.attempts++);
    var s = [],
        c = [];
    for (var l in n) {
        var f = n[l];
        l === "Segment.io" && s.push(l), f.bundlingStatus === "bundled" && s.push(l), f.bundlingStatus === "unbundled" && c.push(l)
    }
    for (var h = 0, d = r ? .unbundledIntegrations || []; h < d.length; h++) {
        var v = d[h];
        c.includes(v) || c.push(v)
    }
    var p = (o = r ? .maybeBundledConfigIds) !== null && o !== void 0 ? o : {},
        S = [];
    return s.sort().forEach(function(g) {
        var E;
        ((E = p[g]) !== null && E !== void 0 ? E : []).forEach(function(I) {
            S.push(I)
        })
    }), r ? .addBundledMetadata !== !1 && (t._metadata = y(y({}, t._metadata), {
        bundled: s.sort(),
        unbundled: c.sort(),
        bundledIds: S
    })), t
}
var lo = function(e, t) {
    return m(void 0, void 0, void 0, function() {
        var r;
        return b(this, function(n) {
            return r = function(i) {
                return m(void 0, void 0, void 0, function() {
                    var o;
                    return b(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return e(i) ? (o = r, [4, t()]) : [3, 2];
                            case 1:
                                return [2, o.apply(void 0, [a.sent()])];
                            case 2:
                                return [2]
                        }
                    })
                })
            }, [2, r(void 0)]
        })
    })
};

function fo(e, t) {
    return m(this, void 0, void 0, function() {
        var r, n = this;
        return b(this, function(i) {
            switch (i.label) {
                case 0:
                    return r = [], Ae() ? [2, t] : [4, lo(function() {
                        return t.length > 0 && !Ae()
                    }, function() {
                        return m(n, void 0, void 0, function() {
                            var o, a, u;
                            return b(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return o = t.pop(), o ? [4, Pe(o, e)] : [2];
                                    case 1:
                                        return a = s.sent(), u = a instanceof J, u || r.push(o), [2]
                                }
                            })
                        })
                    })];
                case 1:
                    return i.sent(), r.map(function(o) {
                        return t.pushWithBackoff(o)
                    }), [2, t]
            }
        })
    })
}

function ge(e, t, r, n) {
    var i = this;
    e || setTimeout(function() {
        return m(i, void 0, void 0, function() {
            var o, a;
            return b(this, function(u) {
                switch (u.label) {
                    case 0:
                        return o = !0, [4, fo(r, t)];
                    case 1:
                        return a = u.sent(), o = !1, t.todo > 0 && n(o, a, r, n), [2]
                }
            })
        })
    }, Math.random() * 5e3)
}

function vo(e, t) {
    var r, n, i, o, a = e.user();
    return t.previousId = (i = (n = (r = t.previousId) !== null && r !== void 0 ? r : t.from) !== null && n !== void 0 ? n : a.id()) !== null && i !== void 0 ? i : a.anonymousId(), t.userId = (o = t.userId) !== null && o !== void 0 ? o : t.to, delete t.from, delete t.to, t
}

function Rr(e, t, r) {
    var n, i, o;
    window.addEventListener("pagehide", function() {
        u.push.apply(u, Array.from(s)), s.clear()
    });
    var a = (n = t ? .apiKey) !== null && n !== void 0 ? n : "",
        u = e.options.disableClientPersistence ? new gt(e.queue.queue.maxAttempts, []) : new wt(e.queue.queue.maxAttempts, "".concat(a, ":dest-Segment.io")),
        s = new Set,
        c = !1,
        l = (i = t ? .apiHost) !== null && i !== void 0 ? i : sr,
        f = (o = t ? .protocol) !== null && o !== void 0 ? o : "https",
        h = "".concat(f, "://").concat(l),
        d = t ? .deliveryStrategy,
        v = d ? .strategy === "batching" ? uo(l, d.config) : so(d ? .config);

    function p(g) {
        return m(this, void 0, void 0, function() {
            var E, I;
            return b(this, function(P) {
                return Ae() ? (u.push(g), ge(c, u, S, ge), [2, g]) : (s.add(g), E = g.event.type.charAt(0), I = Le(g.event).json(), g.event.type === "track" && delete I.traits, g.event.type === "alias" && (I = vo(e, I)), [2, v.dispatch("".concat(h, "/").concat(E), co(e, I, t, r, g)).then(function() {
                    return g
                }).catch(function(A) {
                    if (g.log("error", "Error sending event", A), A.name === "RateLimitError") {
                        var C = A.retryTimeout;
                        u.pushWithBackoff(g, C)
                    } else u.pushWithBackoff(g);
                    return ge(c, u, S, ge), g
                }).finally(function() {
                    s.delete(g)
                })])
            })
        })
    }
    var S = {
        name: "Segment.io",
        type: "destination",
        version: "0.1.0",
        isLoaded: function() {
            return !0
        },
        load: function() {
            return Promise.resolve()
        },
        track: p,
        identify: p,
        page: p,
        alias: p,
        group: p,
        screen: p
    };
    return u.todo && ge(c, u, S, ge), S
}
var tt, tr, ho = _t(),
    rr = (tt = (tr = ho).__SEGMENT_INSPECTOR__) !== null && tt !== void 0 ? tt : tr.__SEGMENT_INSPECTOR__ = {},
    po = function(e) {
        var t;
        return (t = rr.attach) === null || t === void 0 ? void 0 : t.call(rr, e)
    };

function yo(e, t) {
    var r = t ? ? xt();
    return qe("".concat(r, "/v1/projects/").concat(e, "/settings")).then(function(n) {
        return n.ok ? n.json() : n.text().then(function(i) {
            throw new Error(i)
        })
    }).catch(function(n) {
        throw console.error(n.message), n
    })
}

function go(e) {
    return Pr().NODE_ENV !== "test" && Object.keys(e.integrations).length > 1
}

function mo(e) {
    var t, r, n;
    return Pr().NODE_ENV !== "test" && ((n = (r = (t = e.middlewareSettings) === null || t === void 0 ? void 0 : t.routingRules) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : 0) > 0
}

function bo(e, t) {
    Un(e, t), Bn(e, t)
}

function _o(e, t) {
    return m(this, void 0, void 0, function() {
        return b(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, $n(e, t)];
                case 1:
                    return r.sent(), Kn(e, t), [2]
            }
        })
    })
}

function wo(e, t, r, n, i, o, a) {
    var u, s, c;
    return i === void 0 && (i = []), m(this, void 0, void 0, function() {
        var l, f, h, d, v, p, S, g, E, I, P, A, C, R, ne, q = this;
        return b(this, function(F) {
            switch (F.label) {
                case 0:
                    return bo(r, a), l = i ? .filter(function(T) {
                        return typeof T == "object"
                    }), f = i ? .filter(function(T) {
                        return typeof T == "function" && typeof T.pluginName == "string"
                    }), mo(t) ? [4, $(() =>
                        import ("./jov8lefyy9p4h8uq.js"), []).then(function(T) {
                        return T.tsubMiddleware(t.middlewareSettings.routingRules)
                    })] : [3, 2];
                case 1:
                    return d = F.sent(), [3, 3];
                case 2:
                    d = void 0, F.label = 3;
                case 3:
                    return h = d, go(t) || o.length > 0 ? [4, $(() =>
                        import ("./gs77fj84ax1h5e93.js"), __vite__mapDeps([5, 1, 2, 3, 6])).then(function(T) {
                        return T.ajsDestinations(e, t, r.integrations, n, h, o)
                    })] : [3, 5];
                case 4:
                    return p = F.sent(), [3, 6];
                case 5:
                    p = [], F.label = 6;
                case 6:
                    return v = p, t.legacyVideoPluginsEnabled ? [4, $(() =>
                        import ("./e6a2d4hw6rb26f1i.js"), __vite__mapDeps([7, 1, 2, 3])).then(function(T) {
                        return T.loadLegacyVideoPlugins(r)
                    })] : [3, 8];
                case 7:
                    F.sent(), F.label = 8;
                case 8:
                    return !((u = n.plan) === null || u === void 0) && u.track ? [4, $(() =>
                        import ("./coavxv9dh5l5oojl.js"), __vite__mapDeps([8, 1, 2, 3, 6])).then(function(T) {
                        var ie;
                        return T.schemaFilter((ie = n.plan) === null || ie === void 0 ? void 0 : ie.track, t)
                    })] : [3, 10];
                case 9:
                    return g = F.sent(), [3, 11];
                case 10:
                    g = void 0, F.label = 11;
                case 11:
                    return S = g, E = Yn(t, n), [4, eo(t, r.integrations, E, n, h, f).catch(function() {
                        return []
                    })];
                case 12:
                    return I = F.sent(), P = D(D([ci], v, !0), I, !0), S && P.push(S), A = ((s = n.integrations) === null || s === void 0 ? void 0 : s.All) === !1 && !n.integrations["Segment.io"] || n.integrations && n.integrations["Segment.io"] === !1, A ? [3, 14] : (R = (C = P).push, [4, Rr(r, E["Segment.io"], t.integrations)]);
                case 13:
                    R.apply(C, [F.sent()]), F.label = 14;
                case 14:
                    return [4, r.register.apply(r, D(D([], P, !1), l, !1))];
                case 15:
                    return ne = F.sent(), [4, zn(r, a)];
                case 16:
                    return F.sent(), Object.entries((c = t.enabledMiddleware) !== null && c !== void 0 ? c : {}).some(function(T) {
                        var ie = T[1];
                        return ie
                    }) ? [4, $(() =>
                        import ("./epr4m5ogk7x48nug.js"), __vite__mapDeps([9, 1, 2, 3])).then(function(T) {
                        var ie = T.remoteMiddlewares;
                        return m(q, void 0, void 0, function() {
                            var Ut, Kt;
                            return b(this, function(Vt) {
                                switch (Vt.label) {
                                    case 0:
                                        return [4, ie(ne, t, n.obfuscate)];
                                    case 1:
                                        return Ut = Vt.sent(), Kt = Ut.map(function(qr) {
                                            return r.addSourceMiddleware(qr)
                                        }), [2, Promise.all(Kt)]
                                }
                            })
                        })
                    })] : [3, 18];
                case 17:
                    F.sent(), F.label = 18;
                case 18:
                    return [2, ne]
            }
        })
    })
}

function So(e, t, r) {
    var n, i, o, a, u, s, c, l, f, h;
    return t === void 0 && (t = {}), m(this, void 0, void 0, function() {
        var d, v, p, S, g, E, I, P, A, C, R, ne;
        return b(this, function(q) {
            switch (q.label) {
                case 0:
                    return t.disable === !0 ? [2, [new Qt, J.system()]] : (t.globalAnalyticsKey && Ln(t.globalAnalyticsKey), e.cdnURL && Zn(e.cdnURL), t.initialPageview && r.add(new ct("page", [])), (n = e.cdnSettings) !== null && n !== void 0 ? (v = n, [3, 3]) : [3, 1]);
                case 1:
                    return [4, yo(e.writeKey, e.cdnURL)];
                case 2:
                    v = q.sent(), q.label = 3;
                case 3:
                    return d = v, t.updateCDNSettings && (d = t.updateCDNSettings(d)), typeof t.disable != "function" ? [3, 5] : [4, t.disable(d)];
                case 4:
                    if (p = q.sent(), p) return [2, [new Qt, J.system()]];
                    q.label = 5;
                case 5:
                    return S = (o = (i = d.integrations["Segment.io"]) === null || i === void 0 ? void 0 : i.retryQueue) !== null && o !== void 0 ? o : !0, t = y({
                        retryQueue: S
                    }, t), g = new Ot(y(y({}, e), {
                        cdnSettings: d
                    }), t), po(g), E = (a = e.plugins) !== null && a !== void 0 ? a : [], I = (u = e.classicIntegrations) !== null && u !== void 0 ? u : [], P = (s = t.integrations) === null || s === void 0 ? void 0 : s["Segment.io"], cr.initRemoteMetrics(y(y({}, d.metrics), {
                        host: (c = P ? .apiHost) !== null && c !== void 0 ? c : (l = d.metrics) === null || l === void 0 ? void 0 : l.host,
                        protocol: P ? .protocol
                    })), [4, wo(e.writeKey, d, g, t, E, I, r)];
                case 6:
                    return A = q.sent(), C = (f = window.location.search) !== null && f !== void 0 ? f : "", R = (h = window.location.hash) !== null && h !== void 0 ? h : "", ne = C.length ? C : R.replace(/(?=#).*(?=\?)/, ""), ne.includes("ajs_") ? [4, g.queryString(ne).catch(console.error)] : [3, 8];
                case 7:
                    q.sent(), q.label = 8;
                case 8:
                    return g.initialized = !0, g.emit("initialize", e, t), [4, _o(g, r)];
                case 9:
                    return q.sent(), [2, [g, A]]
            }
        })
    })
}
var Eo = function(e) {
        Q(t, e);

        function t() {
            var r = this,
                n = nr(),
                i = n.promise,
                o = n.resolve;
            return r = e.call(this, function(a) {
                return i.then(function(u) {
                    var s = u[0],
                        c = u[1];
                    return So(s, c, a)
                })
            }) || this, r._resolveLoadStart = function(a, u) {
                return o([a, u])
            }, r
        }
        return t.prototype.load = function(r, n) {
            return n === void 0 && (n = {}), this._resolveLoadStart(r, n), this
        }, t.load = function(r, n) {
            return n === void 0 && (n = {}), new t().load(r, n)
        }, t.standalone = function(r, n) {
            return t.load({
                writeKey: r
            }, n).then(function(i) {
                return i[0]
            })
        }, t
    }(Gn),
    Io = function() {
        function e() {}
        return e.load = function() {
            return Promise.reject(new Error("AnalyticsNode is not available in browsers."))
        }, e
    }();
const Mo = Object.freeze(Object.defineProperty({
    __proto__: null,
    Analytics: Ot,
    AnalyticsBrowser: Eo,
    AnalyticsNode: Io,
    Context: J,
    ContextCancelation: ce,
    EventFactory: hr,
    Group: Sr,
    UniversalStorage: re,
    User: It,
    getGlobalAnalytics: At,
    isDestinationPluginWithAddMiddleware: pr,
    resolveAliasArguments: ur,
    resolveArguments: ar,
    resolvePageArguments: it,
    resolveUserArguments: ot,
    segmentio: Rr
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    ce as C, gt as P, ei as a, z as b, Ae as c, Nr as d, te as e, lo as f, Oo as g, nr as h, Ao as i, wt as j, Pe as k, et as l, Yn as m, yn as n, J as o, en as p, Mo as q, Fe as r, xo as u
};
//# sourceMappingURL=hkrnuc89h4u58y6m.js.map
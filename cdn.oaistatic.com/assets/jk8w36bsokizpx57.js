class o extends Error {}
o.prototype.name = "InvalidTokenError";

function i(t) {
    return decodeURIComponent(atob(t).replace(/(.)/g, (e, r) => {
        let n = r.charCodeAt(0).toString(16).toUpperCase();
        return n.length < 2 && (n = "0" + n), "%" + n
    }))
}

function s(t) {
    let e = t.replace(/-/g, "+").replace(/_/g, "/");
    switch (e.length % 4) {
        case 0:
            break;
        case 2:
            e += "==";
            break;
        case 3:
            e += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length")
    }
    try {
        return i(e)
    } catch {
        return atob(e)
    }
}

function d(t, e) {
    if (typeof t != "string") throw new o("Invalid token specified: must be a string");
    e || (e = {});
    const r = e.header === !0 ? 0 : 1,
        n = t.split(".")[r];
    if (typeof n != "string") throw new o(`Invalid token specified: missing part #${r+1}`);
    let c;
    try {
        c = s(n)
    } catch (a) {
        throw new o(`Invalid token specified: invalid base64 for part #${r+1} (${a.message})`)
    }
    try {
        return JSON.parse(c)
    } catch (a) {
        throw new o(`Invalid token specified: invalid json for part #${r+1} (${a.message})`)
    }
}
export {
    d as j
};
//# sourceMappingURL=jk8w36bsokizpx57.js.map
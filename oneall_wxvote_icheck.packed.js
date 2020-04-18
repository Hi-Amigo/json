/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function(e, t) {
        return new x.fn.init(e,t,r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function(e, t) {
        return t.toUpperCase()
    }, q = function(e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(),
        x.ready())
    }, _ = function() {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1),
        e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q),
        e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) {
                return this
            }
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e),
                !i || !i[1] && n) {
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n,
                    x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)),
                    k.test(i[1]) && x.isPlainObject(n)) {
                        for (i in n) {
                            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
                        }
                    }
                    return this
                }
                if (o = a.getElementById(i[2]),
                o && o.parentNode) {
                    if (o.id !== i[2]) {
                        return r.find(e)
                    }
                    this.length = 1,
                    this[0] = o
                }
                return this.context = a,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    },
    x.fn.init.prototype = x.fn,
    x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[1] || {},
        l = 2),
        "object" == typeof s || x.isFunction(s) || (s = {}),
        u === l && (s = this,
        --l); u > l; l++) {
            if (null != (o = arguments[l])) {
                for (i in o) {
                    e = s[i],
                    r = o[i],
                    s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1,
                    a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {},
                    s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r))
                }
            }
        }
        return s
    }
    ,
    x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u),
            t && e.jQuery === x && (e.jQuery = l),
            x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) {
                    return setTimeout(x.ready)
                }
                x.isReady = !0,
                e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]),
                x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) {
                return !1
            }
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (r) {
                return !1
            }
            if (x.support.ownLast) {
                for (n in e) {
                    return v.call(e, n)
                }
            }
            for (n in e) {}
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return !1
            }
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) {
                return null
            }
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || a;
            var r = k.exec(e)
              , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i),
            i && x(i).remove(),
            x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n),
            n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n),
            t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) {
                return null
            }
            try {
                e.DOMParser ? (i = new DOMParser,
                r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.apply(e[i], n),
                        r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.apply(e[i], n),
                        r === !1) {
                            break
                        }
                    }
                }
            } else {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.call(e[i], i, e[i]),
                        r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.call(e[i], i, e[i]),
                        r === !1) {
                            break
                        }
                    }
                }
            }
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        }
        : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        }
        ,
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) {
                    return m.call(t, e, n)
                }
                for (r = t.length,
                n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
                    if (n in t && t[n] === e) {
                        return n
                    }
                }
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length
              , i = e.length
              , o = 0;
            if ("number" == typeof r) {
                for (; r > o; o++) {
                    e[i++] = n[o]
                }
            } else {
                while (n[o] !== t) {
                    e[i++] = n[o++]
                }
            }
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) {
                r = !!t(e[o], o),
                n !== r && i.push(e[o])
            }
            return i
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a) {
                for (; o > i; i++) {
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r)
                }
            } else {
                for (i in e) {
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r)
                }
            }
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n],
            n = e,
            e = o),
            x.isFunction(e) ? (r = g.call(arguments, 2),
            i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || x.guid++,
            i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0
              , u = e.length
              , c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) {
                    x.access(e, n, l, r[l], !0, a, s)
                }
            } else {
                if (i !== t && (o = !0,
                x.isFunction(i) || (s = !0),
                c && (s ? (n.call(e, i),
                n = null) : (c = n,
                n = function(e, t, n) {
                    return c.call(x(e), n)
                }
                )),
                n)) {
                    for (; u > l; l++) {
                        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)))
                    }
                }
            }
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) {
                a[o] = e.style[o],
                e.style[o] = t[o]
            }
            i = n.apply(e, r || []);
            for (o in t) {
                e.style[o] = a[o]
            }
            return i
        }
    }),
    x.ready.promise = function(t) {
        if (!n) {
            if (n = x.Deferred(),
            "complete" === a.readyState) {
                setTimeout(x.ready)
            } else {
                if (a.addEventListener) {
                    a.addEventListener("DOMContentLoaded", q, !1),
                    e.addEventListener("load", q, !1)
                } else {
                    a.attachEvent("onreadystatechange", q),
                    e.attachEvent("onload", q);
                    var r = !1;
                    try {
                        r = null == e.frameElement && a.documentElement
                    } catch (i) {}
                    r && r.doScroll && function o() {
                        if (!x.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (e) {
                                return setTimeout(o, 50)
                            }
                            _(),
                            x.ready()
                        }
                    }()
                }
            }
        }
        return n.promise(t)
    }
    ,
    x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length
          , n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
    function(e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function(e, t) {
            return e === t ? (S = !0,
            0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; n > t; t++) {
                if (this[t] === e) {
                    return t
                }
            }
            return -1
        }
        , B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes),
            H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function(e, t) {
                    _.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++]) {}
                    e.length = n - 1
                }
            }
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t),
            t = t || f,
            n = n || [],
            !e || "string" != typeof e) {
                return n
            }
            if (1 !== (l = t.nodeType) && 9 !== l) {
                return []
            }
            if (h && !i) {
                if (o = Z.exec(e)) {
                    if (s = o[1]) {
                        if (9 === l) {
                            if (a = t.getElementById(s),
                            !a || !a.parentNode) {
                                return n
                            }
                            if (a.id === s) {
                                return n.push(a),
                                n
                            }
                        } else {
                            if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) {
                                return n.push(a),
                                n
                            }
                        }
                    } else {
                        if (o[2]) {
                            return M.apply(n, t.getElementsByTagName(e)),
                            n
                        }
                        if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) {
                            return M.apply(n, t.getElementsByClassName(s)),
                            n
                        }
                    }
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b,
                    y = t,
                    x = 9 === l && e,
                    1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e),
                        (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        u = c.length;
                        while (u--) {
                            c[u] = m + yt(c[u])
                        }
                        y = V.test(e) && t.parentNode || t,
                        x = c.join(",")
                    }
                    if (x) {
                        try {
                            return M.apply(n, y.querySelectorAll(x)),
                            n
                        } catch (T) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }
        function st() {
            var e = [];
            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()],
                t[n] = r
            }
            return t
        }
        function lt(e) {
            return e[b] = !0,
            e
        }
        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ct(e, t) {
            var n = e.split("|")
              , r = e.length;
            while (r--) {
                o.attrHandle[n[r]] = t
            }
        }
        function pt(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) {
                return r
            }
            if (n) {
                while (n = n.nextSibling) {
                    if (n === t) {
                        return -1
                    }
                }
            }
            return e ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ht(e) {
            return lt(function(t) {
                return t = +t,
                lt(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    }
                })
            })
        }
        s = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        r = at.support = {},
        p = at.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w
              , i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n,
            d = n.documentElement,
            h = !s(n),
            i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                p()
            }),
            r.attributes = ut(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            r.getElementsByTagName = ut(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            r.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            r.getById = ut(function(e) {
                return d.appendChild(e).id = b,
                !n.getElementsByName || !n.getElementsByName(b).length
            }),
            r.getById ? (o.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete o.find.ID,
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            o.find.TAG = r.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n)
                    }
                    return r
                }
                return o
            }
            ,
            o.find.CLASS = r.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }
            ,
            m = [],
            g = [],
            (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"),
                e.querySelectorAll(":checked").length || g.push(":checked")
            }),
            ut(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                r.disconnectedMatch = y.call(e, "div"),
                y.call(e, "[s!='']:x"),
                m.push("!=", I)
            }),
            g = g.length && RegExp(g.join("|")),
            m = m.length && RegExp(m.join("|")),
            v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return !0
                        }
                    }
                }
                return !1
            }
            ,
            A = d.compareDocumentPosition ? function(e, t) {
                if (e === t) {
                    return S = !0,
                    0
                }
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }
            : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t) {
                    return S = !0,
                    0
                }
                if (!o || !a) {
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0
                }
                if (o === a) {
                    return pt(e, t)
                }
                r = e;
                while (r = r.parentNode) {
                    s.unshift(r)
                }
                r = t;
                while (r = r.parentNode) {
                    l.unshift(r)
                }
                while (s[i] === l[i]) {
                    i++
                }
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }
            ,
            n) : f
        }
        ,
        at.matches = function(e, t) {
            return at(e, null, null, t)
        }
        ,
        at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e),
            t = t.replace(Y, "='$1']"),
            !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) {
                try {
                    var n = y.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                        return n
                    }
                } catch (i) {}
            }
            return at(t, f, null, [e]).length > 0
        }
        ,
        at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e),
            v(e, t)
        }
        ,
        at.attr = function(e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()]
              , a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }
        ,
        at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        at.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates,
            c = !r.sortStable && e.slice(0),
            e.sort(A),
            S) {
                while (t = e[o++]) {
                    t === e[o] && (i = n.push(o))
                }
                while (i--) {
                    e.splice(n[i], 1)
                }
            }
            return e
        }
        ,
        a = at.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) {
                        return e.textContent
                    }
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += a(e)
                    }
                } else {
                    if (3 === i || 4 === i) {
                        return e.nodeValue
                    }
                }
            } else {
                for (; t = e[r]; r++) {
                    n += a(t)
                }
            }
            return n
        }
        ,
        o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(rt, it),
                    e[3] = (e[4] || e[5] || "").replace(rt, it),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n),
                    e[2] = r.slice(0, n)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) {
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
                                            return !1
                                        }
                                    }
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && v) {
                                c = m[b] || (m[b] = {}),
                                u = c[e] || [],
                                d = u[0] === T && u[1],
                                f = u[0] === T && u[2],
                                p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [T, d, f];
                                        break
                                    }
                                }
                            } else {
                                if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) {
                                    f = u[1]
                                } else {
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]),
                                        p === t)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return f -= i,
                            f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--) {
                            i = F.call(e, o[a]),
                            e[i] = !(n[i] = o[a])
                        }
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: lt(function(e) {
                    var t = []
                      , n = []
                      , r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--) {
                            (o = a[s]) && (e[s] = !(t[s] = o))
                        }
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: lt(function(e) {
                    return function(t) {
                        return at(e, t).length > 0
                    }
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }),
                lang: lt(function(e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e),
                    e = e.replace(rt, it).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-")
                            }
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(e) {
                    return !o.pseudos.empty(e)
                },
                header: function(e) {
                    return tt.test(e.nodeName)
                },
                input: function(e) {
                    return et.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0; ) {
                        e.push(r)
                    }
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r; ) {
                        e.push(r)
                    }
                    return e
                })
            }
        },
        o.pseudos.nth = o.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) {
            o.pseudos[n] = ft(n)
        }
        for (n in {
            submit: !0,
            reset: !0
        }) {
            o.pseudos[n] = dt(n)
        }
        function gt() {}
        gt.prototype = o.filters = o.pseudos,
        o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c) {
                return t ? 0 : c.slice(0)
            }
            s = e,
            l = [],
            u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                l.push(i = [])),
                n = !1,
                (r = U.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }),
                s = s.slice(n.length));
                for (a in o.filter) {
                    !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(n.length))
                }
                if (!n) {
                    break
                }
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }
        function yt(e) {
            var t = 0
              , n = e.length
              , r = "";
            for (; n > t; t++) {
                r += e[t].value
            }
            return r
        }
        function vt(e, t, n) {
            var r = t.dir
              , o = n && "parentNode" === r
              , a = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r]) {
                    if (1 === t.nodeType || o) {
                        return e(t, n, i)
                    }
                }
            }
            : function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r]) {
                        if ((1 === t.nodeType || o) && e(t, n, s)) {
                            return !0
                        }
                    }
                } else {
                    while (t = t[r]) {
                        if (1 === t.nodeType || o) {
                            if (c = t[b] || (t[b] = {}),
                            (u = c[r]) && u[0] === p) {
                                if ((l = u[1]) === !0 || l === i) {
                                    return l === !0
                                }
                            } else {
                                if (u = c[r] = [p],
                                u[1] = e(t, n, s) || i,
                                u[1] === !0) {
                                    return !0
                                }
                            }
                        }
                    }
                }
            }
        }
        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) {
                    if (!e[i](t, n, r)) {
                        return !1
                    }
                }
                return !0
            }
            : e[0]
        }
        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++) {
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                u && t.push(s))
            }
            return a
        }
        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)),
            i && !i[b] && (i = wt(i, o)),
            lt(function(o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l),
                r) {
                    u = xt(y, d),
                    r(u, [], s, l),
                    c = u.length;
                    while (c--) {
                        (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [],
                            c = y.length;
                            while (c--) {
                                (p = y[c]) && u.push(m[c] = p)
                            }
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--) {
                            (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    }
                } else {
                    y = xt(y === a ? y.splice(h, y.length) : y),
                    i ? i(null, a, y, l) : M.apply(a, y)
                }
            })
        }
        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function(e) {
                return e === t
            }, s, !0), p = vt(function(e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function(e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }
            ];
            for (; i > l; l++) {
                if (n = o.relative[e[l].type]) {
                    f = [vt(bt(f), n)]
                } else {
                    if (n = o.filter[e[l].type].apply(null, e[l].matches),
                    n[b]) {
                        for (r = ++l; i > r; r++) {
                            if (o.relative[e[r].type]) {
                                break
                            }
                        }
                        return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                    }
                    f.push(n)
                }
            }
            return bt(f)
        }
        function Ct(e, t) {
            var n = 0
              , r = t.length > 0
              , a = e.length > 0
              , s = function(s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || 0.1;
                for (w && (u = l !== f && l,
                i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) {
                            if (m(h, l, c)) {
                                p.push(h);
                                break
                            }
                        }
                        w && (T = k,
                        i = ++n)
                    }
                    r && ((h = !m && h) && v--,
                    s && x.push(h))
                }
                if (v += b,
                r && b !== v) {
                    g = 0;
                    while (m = t[g++]) {
                        m(x, y, l, c)
                    }
                    if (s) {
                        if (v > 0) {
                            while (b--) {
                                x[b] || y[b] || (y[b] = q.call(p))
                            }
                        }
                        y = xt(y)
                    }
                    M.apply(p, y),
                    w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k,
                u = C),
                x
            };
            return r ? lt(s) : s
        }
        l = at.compile = function(e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)),
                n = t.length;
                while (n--) {
                    o = Tt(t[n]),
                    o[b] ? r.push(o) : i.push(o)
                }
                o = E(e, Ct(i, r))
            }
            return o
        }
        ;
        function Nt(e, t, n) {
            var r = 0
              , i = t.length;
            for (; i > r; r++) {
                at(e, t[r], n)
            }
            return n
        }
        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0),
                s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0],
                    !t) {
                        return n
                    }
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a],
                    o.relative[c = u.type]) {
                        break
                    }
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1),
                        e = i.length && yt(s),
                        !e) {
                            return M.apply(n, i),
                            n
                        }
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)),
            n
        }
        r.sortStable = b.split("").sort(A).join("") === b,
        r.detectDuplicates = S,
        p(),
        r.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }),
        ut(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function(e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }),
        r.attributes && ut(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ct("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }),
        ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }),
        x.find = at,
        x.expr = at.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.unique = at.uniqueSort,
        x.text = at.getText,
        x.isXMLDoc = at.isXML,
        x.contains = at.contains
    }(e);
    var O = {};
    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function(t) {
            for (r = e.memory && t,
            i = !0,
            a = s || 0,
            s = 0,
            o = l.length,
            n = !0; l && o > a; a++) {
                if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            }
            n = !1,
            l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {
            add: function() {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function(t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    }
                    )(arguments),
                    n ? o = l.length : r && (s = t,
                    c(r))
                }
                return this
            },
            remove: function() {
                return l && x.each(arguments, function(e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1) {
                        l.splice(r, 1),
                        n && (o >= r && o--,
                        a >= r && a--)
                    }
                }),
                this
            },
            has: function(e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                o = 0,
                this
            },
            disable: function() {
                return l = u = r = t,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return u = t,
                r || p.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(e, t) {
                return !l || i && !u || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                n ? u.push(t) : c(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return p
    }
    ,
    x.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return x.Deferred(function(n) {
                        x.each(t, function(t, o) {
                            var a = o[0]
                              , s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            x.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? g.call(arguments) : r,
                    n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            }, s, l, u;
            if (r > 1) {
                for (s = Array(r),
                l = Array(r),
                u = Array(r); r > t; t++) {
                    n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i
                }
            }
            return i || o.resolveWith(u, n),
            o.promise()
        }
    }),
    x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"),
        d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = d.getElementsByTagName("*") || [],
        r = d.getElementsByTagName("a")[0],
        !r || !r.style || !n.length) {
            return t
        }
        s = a.createElement("select"),
        u = s.appendChild(a.createElement("option")),
        o = d.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== d.className,
        t.leadingWhitespace = 3 === d.firstChild.nodeType,
        t.tbody = !d.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!d.getElementsByTagName("link").length,
        t.style = /top/.test(r.getAttribute("style")),
        t.hrefNormalized = "/a" === r.getAttribute("href"),
        t.opacity = /^0.5/.test(r.style.opacity),
        t.cssFloat = !!r.style.cssFloat,
        t.checkOn = !!o.value,
        t.optSelected = u.selected,
        t.enctype = !!a.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        o.checked = !0,
        t.noCloneChecked = o.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"),
        o.setAttribute("value", ""),
        t.input = "" === o.getAttribute("value"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        t.radioValue = "t" === o.value,
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        l = a.createDocumentFragment(),
        l.appendChild(o),
        t.appendChecked = o.checked,
        t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }),
        d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) {
            d.setAttribute(c = "on" + f, "t"),
            t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
        }
        d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) {
            break
        }
        return t.ownLast = "0" !== f,
        x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"),
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            l.appendChild(n).appendChild(d),
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            o = d.getElementsByTagName("td"),
            o[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            p = 0 === o[0].offsetHeight,
            o[0].style.display = "",
            o[1].style.display = "none",
            t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight,
            d.innerHTML = "",
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }),
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width,
            r = d.appendChild(a.createElement("div")),
            r.style.cssText = d.style.cssText = s,
            r.style.marginRight = r.style.width = "0",
            d.style.width = "1px",
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
            typeof d.style.zoom !== i && (d.innerHTML = "",
            d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
            d.style.display = "block",
            d.innerHTML = "<div></div>",
            d.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== d.offsetWidth,
            t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
            l.removeChild(n),
            n = d = o = r = null)
        }),
        n = s = l = u = r = o = null,
        t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) {
                return c || (c = l ? e[s] = p.pop() || x.guid++ : s),
                u[c] || (u[c] = l ? {} : {
                    toJSON: x.noop
                }),
                ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)),
                a = u[c],
                i || (a.data || (a.data = {}),
                a = a.data),
                r !== t && (a[x.camelCase(n)] = r),
                "string" == typeof n ? (o = a[n],
                null == o && (o = a[x.camelCase(n)])) : o = a,
                o
            }
        }
    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    while (i--) {
                        delete r[t[i]]
                    }
                    if (n ? !I(r) : !x.isEmptyObject(r)) {
                        return
                    }
                }
                (n || (delete a[s].data,
                I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando],
            !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
                return !1
            }
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    x.fn.extend({
        data: function(e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s),
                1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) {
                        i = r[a].name,
                        0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)),
                        $(s, i, o[i]))
                    }
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i),
            "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else {
                r = t
            }
        }
        return r
    }
    function I(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) {
                return !1
            }
        }
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue",
            i = x._data(e, n),
            r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)),
            i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = x._queueHooks(e, t)
              , a = function() {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"),
                    x._removeData(e, n)
                })
            })
        }
    }),
    x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            r--),
            r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function() {
                --i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e,
            e = t),
            e = e || "fx";
            while (s--) {
                r = x._data(a[s], e + "queueHooks"),
                r && r.empty && (i++,
                r.empty.add(l))
            }
            return l(),
            o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).addClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) {
                            0 > r.indexOf(" " + i + " ") && (r += i + " ")
                        }
                        n.className = x.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).removeClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++]) {
                            while (r.indexOf(" " + i + " ") >= 0) {
                                r = r.replace(" " + i + " ", " ")
                            }
                        }
                        n.className = e ? x.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0, o = x(this), a = e.match(T) || [];
                    while (t = a[r++]) {
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                    }
                } else {
                    (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; r > n; n++) {
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) {
                    return !0
                }
            }
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) {
                return i = x.isFunction(e),
                this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e,
                    null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()],
                    r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                })
            }
            if (o) {
                return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()],
                r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value,
                "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++) {
                        if (n = r[l],
                        !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(),
                            o) {
                                return t
                            }
                            a.push(t)
                        }
                    }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                    while (a--) {
                        r = i[a],
                        (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0)
                    }
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(),
                o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)),
                r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n),
                null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""),
                r) : (x.removeAttr(e, n),
                t))
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType) {
                while (n = o[i++]) {
                    r = x.propFix[n] || n,
                    x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""),
                    e.removeAttribute(Q ? n : r)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return a = 1 !== s || !x.isXMLDoc(e),
                a && (n = x.propFix[n] || n,
                o = x.propHooks[n]),
                r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n]
              , a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o,
            a
        }
        : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n,
            t) : z && z.set(e, n, r)
        }
    }),
    Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n : t
        }
    },
    x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }
    ,
    x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    },
    x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    },
    x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"),
                r) : t
            }
        }
    })),
    x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }),
    x.support.enctype || (x.propFix.enctype = "encoding"),
    x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        },
        x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Z = /^(?:input|select|textarea)$/i
      , et = /^key/
      , tt = /^(?:mouse|contextmenu)|click/
      , nt = /^(?:focusinfocus|focusoutblur)$/
      , rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0
    }
    function ot() {
        return !1
    }
    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r,
                r = c.handler,
                a = c.selector),
                r.guid || (r.guid = x.guid++),
                (l = v.events) || (l = v.events = {}),
                (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }
                ,
                f.elem = e),
                n = (n || "").match(T) || [""],
                u = n.length;
                while (u--) {
                    s = rt.exec(n[u]) || [],
                    g = y = s[1],
                    m = (s[2] || "").split(".").sort(),
                    g && (p = x.event.special[g] || {},
                    g = (a ? p.delegateType : p.bindType) || g,
                    p = x.event.special[g] || {},
                    d = x.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && x.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c),
                    (h = l[g]) || (h = l[g] = [],
                    h.delegateCount = 0,
                    p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                    p.add && (p.add.call(e, d),
                    d.handler.guid || (d.handler.guid = r.guid)),
                    a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                    x.event.global[g] = !0)
                }
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""],
                u = t.length;
                while (u--) {
                    if (s = rt.exec(t[u]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        p = x.event.special[d] || {},
                        d = (r ? p.delegateType : p.bindType) || d,
                        f = c[d] || [],
                        s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = f.length;
                        while (o--) {
                            a = f[o],
                            !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            p.remove && p.remove.call(e, a))
                        }
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle),
                        delete c[d])
                    } else {
                        for (d in c) {
                            x.event.remove(e, d + t[u], n, r, !0)
                        }
                    }
                }
                x.isEmptyObject(c) && (delete m.handle,
                x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a,
            3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
            g = m.shift(),
            m.sort()),
            l = 0 > g.indexOf(":") && "on" + g,
            n = n[x.expando] ? n : new x.Event(g,"object" == typeof n && n),
            n.isTrigger = o ? 2 : 3,
            n.namespace = m.join("."),
            n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            n.result = t,
            n.target || (n.target = i),
            r = null == r ? [n] : x.makeArray(r, [n]),
            p = x.event.special[g] || {},
            o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g,
                    nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
                        h.push(u),
                        f = u
                    }
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) {
                    n.type = d > 1 ? c : p.bindType || g,
                    s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"),
                    s && s.apply(u, r),
                    s = l && u[l],
                    s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault()
                }
                if (n.type = g,
                !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l],
                    f && (i[l] = null),
                    x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t,
                    f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u),
                n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem,
                    a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                        e.data = i.data,
                        r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l),
                        r !== t && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()))
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) {
                for (; u != this; u = u.parentNode || this) {
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [],
                        a = 0; l > a; a++) {
                            i = n[a],
                            r = i.selector + " ",
                            o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length),
                            o[r] && o.push(i)
                        }
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
                }
            }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }),
            s
        },
        fix: function(e) {
            if (e[x.expando]) {
                return e
            }
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new x.Event(o),
            t = r.length;
            while (t--) {
                n = r[t],
                e[n] = o[n]
            }
            return e.target || (e.target = o.srcElement || a),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a,
                o = i.documentElement,
                r = i.body,
                e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0),
                e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l),
                e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) {
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e,
        n && x.extend(this, n),
        this.timeStamp = e && e.timeStamp || x.now(),
        this[x.expando] = !0,
        t) : new x.Event(e,n)
    }
    ,
    x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it,
            this.stopPropagation()
        }
    },
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                x._data(r, "submitBubbles", !0))
            }),
            t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"),
            t)
        }
    }),
    x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                x.event.simulate("change", this, e, !0)
            })),
            !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }),
                x._data(t, "changeBubbles", !0))
            }),
            t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"),
            !Z.test(this.nodeName)
        }
    }),
    x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }),
    x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n,
                n = t);
                for (a in e) {
                    this.on(a, n, r, e[a], o)
                }
                return this
            }
            if (null == r && null == i ? (i = n,
            r = n = t) : null == i && ("string" == typeof n ? (i = r,
            r = t) : (i = r,
            r = n,
            n = t)),
            i === !1) {
                i = ot
            } else {
                if (!i) {
                    return this
                }
            }
            return 1 === o && (s = i,
            i = function(e) {
                return x().off(e),
                s.apply(this, arguments)
            }
            ,
            i.guid = s.guid || (s.guid = x.guid++)),
            this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) {
                return i = e.handleObj,
                x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this
            }
            if ("object" == typeof e) {
                for (o in e) {
                    this.off(o, n, e[o])
                }
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n,
            n = t),
            r === !1 && (r = ot),
            this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/
      , lt = /^(?:parents|prev(?:Until|All))/
      , ut = x.expr.match.needsContext
      , ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) {
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; i > t; t++) {
                        if (x.contains(r[t], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (t = 0; i > t; t++) {
                x.find(e, r[t], n)
            }
            return n = this.pushStack(i > 1 ? x.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        has: function(e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) {
                    if (x.contains(this, n[t])) {
                        return !0
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
                }
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e)
              , r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function pt(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = x.filter(r, i)),
            this.length > 1 && (ct[e] || (i = x.unique(i)),
            lt.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    }),
    x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = []
              , o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
                1 === o.nodeType && i.push(o),
                o = o[n]
            }
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                1 === e.nodeType && e !== t && n.push(e)
            }
            return n
        }
    });
    function ft(e, t, n) {
        if (x.isFunction(t)) {
            return x.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            })
        }
        if (t.nodeType) {
            return x.grep(e, function(e) {
                return e === t !== n
            })
        }
        if ("string" == typeof t) {
            if (st.test(t)) {
                return x.filter(t, e, n)
            }
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }
    function dt(e) {
        var t = ht.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop())
            }
        }
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , gt = / jQuery\d+="(?:null|\d+)"/g
      , mt = RegExp("<(?:" + ht + ")[\\s/>]", "i")
      , yt = /^\s+/
      , vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , bt = /<([\w:]+)/
      , xt = /<tbody/i
      , wt = /<|&#?\w+;/
      , Tt = /<(?:script|style|link)/i
      , Ct = /^(?:checkbox|radio)$/i
      , Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , kt = /^$|\/(?:java|ecma)script/i
      , Et = /^true\/(.*)/
      , St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , jt = dt(a)
      , Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option,
    At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
    At.th = At.td,
    x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++) {
                t || 1 !== n.nodeType || x.cleanData(Ft(n)),
                n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")),
                n.parentNode.removeChild(n))
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {}
                  , r = 0
                  , i = this.length;
                if (e === t) {
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
                }
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) {
                            n = this[r] || {},
                            1 === n.nodeType && (x.cleanData(Ft(n, !1)),
                            n.innerHTML = e)
                        }
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            })
              , t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++]
                  , i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling),
                x(this).remove(),
                i.insertBefore(n, r))
            }, !0),
            t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) {
                return this.each(function(r) {
                    var i = p.eq(r);
                    g && (e[0] = h.call(this, r, i.html())),
                    i.domManip(e, t, n)
                })
            }
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this),
            r = l.firstChild,
            1 === l.childNodes.length && (l = r),
            r)) {
                for (a = x.map(Ft(l, "script"), Ht),
                o = a.length; c > u; u++) {
                    i = l,
                    u !== f && (i = x.clone(i, !0, !0),
                    o && x.merge(a, Ft(i, "script"))),
                    t.call(this[u], i, u)
                }
                if (o) {
                    for (s = a[a.length - 1].ownerDocument,
                    x.map(a, qt),
                    u = 0; o > u; u++) {
                        i = a[u],
                        kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")))
                    }
                }
                l = r = null
            }
            return this
        }
    });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) {
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
        }
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) {
                    for (r = 0,
                    i = s[n].length; i > r; r++) {
                        x.event.add(t, n, s[n][r])
                    }
                }
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) {
                    x.removeEvent(t, r, i.handle)
                }
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text,
            qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++) {
                n = r === a ? this : this.clone(!0),
                x(o[r])[t](n),
                h.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) {
            for (s = [],
            r = e.childNodes || e; null != (o = r[a]); a++) {
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n))
            }
        }
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML,
            Dt.removeChild(o = Dt.firstChild)),
            !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) {
                for (r = Ft(o),
                s = Ft(e),
                a = 0; null != (i = s[a]); ++a) {
                    r[a] && Ot(i, r[a])
                }
            }
            if (t) {
                if (n) {
                    for (s = s || Ft(e),
                    r = r || Ft(o),
                    a = 0; null != (i = s[a]); a++) {
                        Mt(i, r[a])
                    }
                } else {
                    Mt(e, o)
                }
            }
            return r = Ft(o, "script"),
            r.length > 0 && _t(r, !l && Ft(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++) {
                if (o = e[h],
                o || 0 === o) {
                    if ("object" === x.type(o)) {
                        x.merge(d, o.nodeType ? [o] : o)
                    } else {
                        if (wt.test(o)) {
                            s = s || f.appendChild(t.createElement("div")),
                            l = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                            c = At[l] || At._default,
                            s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                            i = c[0];
                            while (i--) {
                                s = s.lastChild
                            }
                            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])),
                            !x.support.tbody) {
                                o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild,
                                i = o && o.childNodes.length;
                                while (i--) {
                                    x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                                }
                            }
                            x.merge(d, s.childNodes),
                            s.textContent = "";
                            while (s.firstChild) {
                                s.removeChild(s.firstChild)
                            }
                            s = f.lastChild
                        } else {
                            d.push(t.createTextNode(o))
                        }
                    }
                }
            }
            s && f.removeChild(s),
            x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
            h = 0;
            while (o = d[h++]) {
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o),
                s = Ft(f.appendChild(o), "script"),
                a && _t(s),
                n)) {
                    i = 0;
                    while (o = s[i++]) {
                        kt.test(o.type || "") && n.push(o)
                    }
                }
            }
            return s = null,
            f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (; null != (n = e[s]); s++) {
                if ((t || x.acceptData(n)) && (o = n[l],
                a = o && u[o])) {
                    if (a.events) {
                        for (r in a.events) {
                            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle)
                        }
                    }
                    u[o] && (delete u[o],
                    c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null,
                    p.push(o))
                }
            }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).wrapAll(e.call(this, t))
                })
            }
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) {
                        e = e.firstChild
                    }
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {
        BODY: "block"
    }, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e) {
            return t
        }
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = en.length;
        while (i--) {
            if (t = en[i] + n,
            t in e) {
                return t
            }
        }
        return r
    }
    function nn(e, t) {
        return e = t || e,
        "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++) {
            r = e[a],
            r.style && (o[a] = x._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r),
            (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))))
        }
        for (a = 0; s > a; a++) {
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"))
        }
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e),
                    i = n.length; i > s; s++) {
                        a[n[s]] = x.css(e, n[s], !1, o)
                    }
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }),
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)),
                s = x.cssHooks[n] || x.cssHooks[l],
                r === t) {
                    return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n]
                }
                if (a = typeof r,
                "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)),
                a = "number"),
                !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"),
                x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"),
                s && "set"in s && (r = s.set(e, r, i)) === t))) {
                    try {
                        u[n] = r
                    } catch (c) {}
                }
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)),
            s = x.cssHooks[n] || x.cssHooks[l],
            s && "get"in s && (a = s.get(e, !0, r)),
            a === t && (a = Wt(e, n, i)),
            "normal" === a && n in Kt && (a = Kt[n]),
            "" === r || r ? (o = parseFloat(a),
            r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }),
    e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)),
        Yt.test(l) && Ut.test(n) && (i = u.width,
        o = u.minWidth,
        a = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = l,
        l = s.width,
        u.width = i,
        u.minWidth = o,
        u.maxWidth = a)),
        l
    }
    ) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]),
        Yt.test(l) && !zt.test(n) && (i = u.left,
        o = e.runtimeStyle,
        a = o && o.left,
        a && (o.left = e.currentStyle.left),
        u.left = "fontSize" === n ? "1em" : l,
        l = u.pixelLeft + "px",
        u.left = i,
        a && (o.left = a)),
        "" === l ? "auto" : l
    }
    );
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0
          , a = 0;
        for (; 4 > o; o += 2) {
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
            r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)),
            "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i),
            "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)))
        }
        return a
    }
    function sn(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Rt(e)
          , a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            Yt.test(i)) {
                return i
            }
            r = a && (x.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function ln(e) {
        var t = a
          , n = Gt[e];
        return n || (n = un(e, t),
        "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
        t = (Pt[0].contentWindow || Pt[0].contentDocument).document,
        t.write("<!doctype html><html><body>"),
        t.close(),
        n = un(e, t),
        Pt.detach()),
        Gt[e] = n),
        n
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body)
          , r = x.css(n[0], "display");
        return n.remove(),
        r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }),
    x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }),
        !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n),
                    Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }),
    x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }
    ,
    x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }
    ),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0
                  , i = {}
                  , o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) {
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
                }
                return i
            }
        },
        Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g
      , pn = /\[\]$/
      , fn = /\r?\n/g
      , dn = /^(?:submit|button|image|reset|file)$/i
      , hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }),
    x.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional),
        x.isArray(e) || e.jquery && !x.isPlainObject(e)) {
            x.each(e, function() {
                o(this.name, this.value)
            })
        } else {
            for (r in e) {
                gn(r, e[r], n, o)
            }
        }
        return i.join("&").replace(cn, "+")
    }
    ;
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) {
            x.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            })
        } else {
            if (n || "object" !== x.type(t)) {
                r(e, t)
            } else {
                for (i in t) {
                    gn(e + "[" + i + "]", t[i], n, r)
                }
            }
        }
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"),
        yn.href = "",
        yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n)) {
                while (r = o[i++]) {
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
        }
    }
    function qn(e, n, r, i) {
        var o = {}
          , a = e === jn;
        function s(l) {
            var u;
            return o[l] = !0,
            x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c),
                s(c),
                !1)
            }),
            u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) {
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i])
        }
        return r && x.extend(!0, e, r),
        e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) {
            return Sn.apply(this, arguments)
        }
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length),
        e = e.slice(0, l)),
        x.isFunction(n) ? (r = n,
        n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a)) {
                                c[t[1].toLowerCase()] = t[2]
                            }
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (2 > b) {
                            for (t in e) {
                                m[t] = [m[t], e[t]]
                            }
                        } else {
                            C.always(e[C.status])
                        }
                    }
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return u && u.abort(t),
                    k(0, t),
                    this
                }
            };
            if (h.promise(C).complete = g.add,
            C.success = C.done,
            C.error = C.fail,
            p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""],
            null == p.crossDomain && (r = En.exec(p.url.toLowerCase()),
            p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)),
            qn(An, p, n, C),
            2 === b) {
                return C
            }
            l = p.global,
            l && 0 === x.active++ && x.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Nn.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
            p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]),
            x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) {
                C.setRequestHeader(i, p.headers[i])
            }
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) {
                return C.abort()
            }
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                C[i](p[i])
            }
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1,
                l && d.trigger("ajaxSend", [C, p]),
                p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1,
                    u.send(y, k)
                } catch (N) {
                    if (!(2 > b)) {
                        throw N
                    }
                    k(-1, N)
                }
            } else {
                k(-1, "No Transport")
            }
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2,
                s && clearTimeout(s),
                u = t,
                a = i || "",
                C.readyState = e > 0 ? 4 : 0,
                c = e >= 200 && 300 > e || 304 === e,
                r && (w = Mn(p, C, r)),
                w = On(p, w, C, c),
                c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"),
                T && (x.lastModified[o] = T),
                T = C.getResponseHeader("etag"),
                T && (x.etag[o] = T)),
                204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state,
                y = w.data,
                v = w.error,
                c = !v)) : (v = N,
                (e || !N) && (N = "error",
                0 > e && (e = 0))),
                C.status = e,
                C.statusText = (n || N) + "",
                c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]),
                C.statusCode(m),
                m = t,
                l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]),
                g.fireWith(f, [C, N]),
                l && (d.trigger("ajaxComplete", [C, p]),
                --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }),
    x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i,
            i = r,
            r = t),
            x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0]) {
            u.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
        }
        if (o) {
            for (s in l) {
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
            }
        }
        if (u[0]in r) {
            a = u[0]
        } else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a),
        r[a]) : t
    }
    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) {
            for (a in e.converters) {
                u[a.toLowerCase()] = e.converters[a]
            }
        }
        o = c.shift();
        while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift()) {
                if ("*" === o) {
                    o = l
                } else {
                    if ("*" !== l && l !== o) {
                        if (a = u[l + " " + o] || u["* " + o],
                        !a) {
                            for (i in u) {
                                if (s = i.split(" "),
                                s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                                    c.unshift(s[1]));
                                    break
                                }
                            }
                        }
                        if (a !== !0) {
                            if (a && e["throws"]) {
                                t = a(t)
                            } else {
                                try {
                                    t = a(t)
                                } catch (p) {
                                    return {
                                        state: "parsererror",
                                        error: a ? p : "No conversion from " + l + " to " + o
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null,
                        t || i(200, "success"))
                    }
                    ,
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = []
      , Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
        n.converters["script json"] = function() {
            return s || x.error(o + " was not called"),
            s[0]
        }
        ,
        n.dataTypes[0] = "json",
        a = e[o],
        e[o] = function() {
            s = arguments
        }
        ,
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback,
            Fn.push(o)),
            s && x.isFunction(a) && a(s[0]),
            s = a = t
        }),
        "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
        var e;
        for (e in Pn) {
            Pn[e](t, !0)
        }
    }
    ;
    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    }
    : In,
    Rn = x.ajaxSettings.xhr(),
    x.support.cors = !!Rn && "withCredentials"in Rn,
    Rn = x.support.ajax = !!Rn,
    Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                    n.xhrFields) {
                        for (s in n.xhrFields) {
                            l[s] = n.xhrFields[s]
                        }
                    }
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) {
                            l.setRequestHeader(s, i[s])
                        }
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) {
                                if (r = t,
                                a && (l.onreadystatechange = x.noop,
                                $n && delete Pn[a]),
                                i) {
                                    4 !== l.readyState && l.abort()
                                } else {
                                    p = {},
                                    s = l.status,
                                    u = l.getAllResponseHeaders(),
                                    "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }
                    ,
                    n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn,
                    $n && (Pn || (Pn = {},
                    x(e).unload($n)),
                    Pn[a] = r),
                    l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = Yn.exec(t)
              , o = i && i[3] || (x.cssNumber[e] ? "" : "px")
              , a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e))
              , s = 1
              , l = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do {
                    s = s || ".5",
                    a /= s,
                    x.style(n.elem, e, a + o)
                } while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +r || 0,
            n.unit = o,
            n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    function Kn() {
        return setTimeout(function() {
            Xn = t
        }),
        Xn = x.now()
    }
    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++) {
            if (r = i[o].call(n, t, e)) {
                return r
            }
        }
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (i) {
                return !1
            }
            var t = Xn || Kn()
              , n = Math.max(0, u.startTime + u.duration - t)
              , r = n / u.duration || 0
              , o = 1 - r
              , a = 0
              , l = u.tweens.length;
            for (; l > a; a++) {
                u.tweens[a].run(o)
            }
            return s.notifyWith(e, [u, o, n]),
            1 > o && l ? n : (s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (i) {
                    return this
                }
                for (i = !0; r > n; n++) {
                    u.tweens[n].run(1)
                }
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++) {
            if (r = Gn[o].call(u, e, c, u.opts)) {
                return r
            }
        }
        return x.map(c, Zn, u),
        x.isFunction(u.opts.start) && u.opts.start.call(e, u),
        x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e) {
            if (r = x.camelCase(n),
            i = t[r],
            o = e[n],
            x.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            a = x.cssHooks[r],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o) {
                    n in e || (e[n] = o[n],
                    t[n] = i)
                }
            } else {
                t[r] = i
            }
        }
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++) {
                n = e[r],
                Qn[n] = Qn[n] || [],
                Qn[n].unshift(t)
            }
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        u.always(function() {
            u.always(function() {
                s.unqueued--,
                x.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            if (i = t[r],
            Vn.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (f ? "hide" : "show")) {
                    continue
                }
                c[r] = d && d[r] || x.style(e, r)
            }
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}),
            o && (d.hidden = !f),
            f ? x(e).show() : u.done(function() {
                x(e).hide()
            }),
            u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) {
                    x.style(e, t, c[t])
                }
            });
            for (r in c) {
                a = Zn(f ? d[r] : 0, r, u),
                r in d || (d[r] = a.start,
                f && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e,t,n,r,i)
    }
    x.Tween = rr,
    rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : rr.propHooks._default.set(this),
            this
        }
    },
    rr.prototype.init.prototype = rr.prototype,
    rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }),
    x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e)
              , o = x.speed(t, n, r)
              , a = function() {
                var t = er(this, x.extend({}, e), o);
                (i || x._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = null != e && e + "queueHooks"
                  , o = x.timers
                  , a = x._data(this);
                if (n) {
                    a[n] && a[n].stop && i(a[n])
                } else {
                    for (n in a) {
                        a[n] && a[n].stop && Jn.test(n) && i(a[n])
                    }
                }
                for (n = o.length; n--; ) {
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r),
                    t = !1,
                    o.splice(n, 1))
                }
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                x.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; ) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1))
                }
                for (t = 0; a > t; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this)
                }
                delete n.finish
            })
        }
    });
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
            n = Zt[i],
            r["margin" + n] = r["padding" + n] = e
        }
        return t && (r.opacity = r.width = e),
        r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            x.isFunction(r.old) && r.old.call(this),
            r.queue && x.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    },
    x.timers = [],
    x.fx = rr.prototype.init,
    x.fx.tick = function() {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++) {
            e = n[r],
            e() || n[r] !== e || n.splice(r--, 1)
        }
        n.length || x.fx.stop(),
        Xn = t
    }
    ,
    x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }
    ,
    x.fx.stop = function() {
        clearInterval(Un),
        Un = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fx.step = {},
    x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }
    ),
    x.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            })
        }
        var n, r, o = {
            top: 0,
            left: 0
        }, a = this[0], s = a && a.ownerDocument;
        if (s) {
            return n = s.documentElement,
            x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()),
            r = or(s),
            {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }
    }
    ,
    x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(),
            p = c.top,
            f = c.left) : (p = parseFloat(a) || 0,
            f = parseFloat(s) || 0),
            x.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (u.top = t.top - o.top + p),
            null != t.left && (u.left = t.left - o.left + f),
            "using"in t ? t.using.call(e, u) : i.css(u)
        }
    },
    x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                x.nodeName(e[0], "html") || (n = e.offset()),
                n.top += x.css(e[0], "borderTopWidth", !0),
                n.left += x.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
                    e = e.offsetParent
                }
                return e || s
            })
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o,
                t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i)
                  , s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }),
    x.fn.size = function() {
        return this.length
    }
    ,
    x.fn.andSelf = x.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
}
)(window);
try {
    if (!window.localStorage && /MSIE/.test(navigator.userAgent)) {
        if (!window.UserData) {
            window.UserData = function(b) {
                if (!b) {
                    b = "user_data_default"
                }
                var a = document.createElement("input");
                a.type = "hidden";
                a.addBehavior("#default#userData");
                document.body.appendChild(a);
                a.save(b);
                this.file_name = b;
                this.dom = a;
                return this
            }
            ;
            window.UserData.prototype = {
                setItem: function(b, a) {
                    this.dom.setAttribute(b, a);
                    this.dom.save(this.file_name)
                },
                getItem: function(a) {
                    this.dom.load(this.file_name);
                    return this.dom.getAttribute(a)
                },
                removeItem: function(a) {
                    this.dom.removeAttribute(a);
                    this.dom.save(this.file_name)
                },
                clear: function() {
                    this.dom.load(this.file_name);
                    var a = new Date();
                    a = new Date(a.getTime() - 1);
                    this.dom.expires = a.toUTCString();
                    this.dom.save(this.file_name)
                }
            }
        }
        window.localStorage = new window.UserData("local_storage")
    }
} catch (err) {}
function getByHash(a) {
    try {
        return localStorage.getItem("hash_" + a)
    } catch (b) {
        return false
    }
}
function setByHash(a, c) {
    try {
        return localStorage.setItem("hash_" + a, c)
    } catch (b) {
        return false
    }
}
var serverroot = "/";
var SITEURL = "http://www.stonepoll.net";
var QRCODELENGTH = 5;
var securimageType = 0;
captchtimernow = captchtimermax;
captchwaiting = true;
captchtimerhandle = null;
function subcaptchtimer() {
    captchtimernow = captchtimernow - 1;
    if (captchtimernow > 0) {
        captchtimernowstr = captchtimernow > 9 ? captchtimernow : ("0" + captchtimernow);
        $("#captchtimer").html("00:" + captchtimernowstr)
    } else {
        clearInterval(captchtimerhandle);
        $(".codeTimer").hide();
        $("#captcha").attr("src", "/plugin/securimage/securimage_show.php?type=" + securimageType + "&id=" + Math.random());
        $("#captchaloading").show()
    }
}
function checkGeeTestCode() {
    _geetst_c = $(".geetest_challenge").val();
    if (_geetst_c == "") {
        return false
    }
    return true
}
function doshowCaptchacode() {
    $("#captcha").hide();
    $("#captchaloading").hide();
    captchtimerhandle = setInterval("subcaptchtimer()", 1000)
}
function reShowCaptchacode() {
    captchtimernow = captchtimermax;
    $("#captcha").hide();
    $("#captchaloading").hide();
    $(".codeTimer").show();
    doshowCaptchacode()
}
function captchaImgLoad() {
    $("#captcha").show();
    $("#captchaloading").hide();
    captchwaiting = false
}
function isdigit(b) {
    if (b == "") {
        return false
    }
    var c, a;
    a = /\d*/i;
    c = b.match(a);
    return (c == b) ? true : false
}
function randStr() {
    var a = Math.random();
    return a.toString().substring(2, 10)
}
function showFormError(b, a) {
    $(b).addClass("error");
    if ($(b + " .help-inline").is("span")) {
        $(b + " .help-inline").html(a)
    }
    if ($(b + " .help-block").is("span")) {
        $(b + " .help-block").html(a)
    }
}
function clearFormError() {
    $(".control-group").each(function() {
        $(this).removeClass("error");
        if ($(this).find(".help-inline")) {
            $(this).find(".help-inline").html("")
        }
        if ($(this).find(".help-block")) {
            $(this).find(".help-block").html("")
        }
    });
    $("li.error").each(function() {
        $(this).removeClass("error")
    })
}
function submitalertonform(b, a) {
    clearFormError();
    showFormError(b, decodeURIComponent(a));
    if ($("#captcha").is("img")) {
        $("#inputCaptchacode").val("");
        reShowCaptchacode()
    }
    if ($("#geetestdiv").is("div")) {
        $("#geetestdiv .controls").html("<script type='text/javascript' src='http://api.geetest.com/get.php?gt=b6f922650c871f9640ac7e2bd4afeea7&product=embed'><\/script>")
    }
}
function hidealert() {
    $("#submitalertdiv h4").html("");
    $("#submitalertdiv span").html("");
    $("#submitalertdiv").hide()
}
function submitalertAppend(b, a) {
    if ($("#submitalertdiv").css("display") != "none") {
        $("#submitalertdiv span").append(" " + decodeURIComponent(b))
    } else {
        submitalert("", b, a)
    }
}
function submitalertnoclearformerror(c, b, a) {
    _alertclass = "alert-success";
    if (a == "error") {
        _alertclass = "alert-error"
    }
    if (a == "warning") {
        _alertclass = "alert-warning"
    }
    $("#submitalertdiv h4").html(c);
    $("#submitalertdiv span").html(decodeURIComponent(b));
    $("#submitalertdiv").attr("class", "alert " + _alertclass);
    $("#submitalertdiv").show();
    if ($("#submitalertdiv_above").is("div")) {
        $("#submitalertdiv_above h4").html(c);
        $("#submitalertdiv_above span").html(decodeURIComponent(b));
        $("#submitalertdiv_above").attr("class", "alert " + _alertclass);
        $("#submitalertdiv_above").show()
    }
    showDoCreateBtn()
}
function submitalert(c, b, a) {
    clearFormError();
    submitalertnoclearformerror(c, b, a)
}
function jumpUrl(a) {
    setTimeout("window.location.href = '" + a + "'", 1000)
}
function submitalertAndJump(d, c, b, a) {
    clearFormError();
    _alertclass = "alert-success";
    if (b == "error") {
        _alertclass = "alert-error"
    }
    if (b == "warning") {
        _alertclass = "alert-warning"
    }
    $("#submitalertdiv h4").html(d);
    $("#submitalertdiv span").html(decodeURIComponent(c) + "<BR /> 正在跳转......");
    $("#submitalertdiv").attr("class", "alert " + _alertclass);
    $("#submitalertdiv").show();
    if ($("#submitalertdiv_above").is("div")) {
        $("#submitalertdiv_above h4").html(d);
        $("#submitalertdiv_above span").html(decodeURIComponent(c) + "<BR /> 正在跳转......");
        $("#submitalertdiv_above").attr("class", "alert " + _alertclass);
        $("#submitalertdiv_above").show()
    }
    jumpUrl(a)
}
function checkEmail(a) {
    p = /^([\w\.-]+)@([a-zA-Z0-9-]+)(\.[a-zA-Z\.]+)$/;
    if (a.search(p) == -1) {
        return false
    } else {
        return true
    }
}
_startsec = null;
_secid = null;
_showid = null;
_secboxid = null;
_startsecbak = 0;
function subtimer() {
    if (_startsec == null) {
        _startsec = parseInt($("#" + _secid).html());
        _startsecbak = _startsec
    }
    if (_startsec != null) {
        if (_startsec > 1) {
            $("#" + _showid).hide();
            $("#" + _secboxid).show();
            _startsec = _startsec - 1;
            $("#" + _secid).html(_startsec)
        } else {
            $("#" + _showid).show();
            $("#" + _secboxid).hide();
            clearInterval(captchtimerhandle);
            $("#" + _secid).html(_startsecbak);
            _startsec = null
        }
    }
}
function startsubTimer(a, c, b) {
    if (captchtimerhandle != null) {
        clearInterval(captchtimerhandle);
        captchtimerhandle = null
    }
    _secid = a;
    _showid = c;
    _secboxid = b;
    $("#" + _showid).hide();
    $("#" + _secboxid).show();
    captchtimerhandle = setInterval("subtimer()", 1000)
}
function autoSetWindowInWindowsWeixin() {
    var a = navigator.userAgent.toLowerCase();
    if (a.indexOf("windowswechat") > -1 || windowswechat == 1) {
        if ($(".weixinstyle").is("body")) {
            $(".weixinstyle").css("width", "500px");
            $(".weixinstyle").css("margin", "0 auto");
            if ($(".bottombar").is("div")) {
                $(".bottombar").css("width", "500px")
            }
            if ($(".topbar").is("div")) {
                $(".topbar").css("width", "500px")
            }
        }
    }
}
/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
;!function(a) {
    a(function() {
        a.support.transition = function() {
            var b = function() {
                var d = document.createElement("bootstrap"), c = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                }, f;
                for (f in c) {
                    if (d.style[f] !== undefined) {
                        return c[f]
                    }
                }
            }();
            return b && {
                end: b
            }
        }()
    })
}(window.jQuery),
!function(c) {
    var a = '[data-dismiss="alert"]'
      , d = function(e) {
        c(e).on("click", a, this.close)
    };
    d.prototype.close = function(f) {
        function g() {
            e.trigger("closed").remove()
        }
        var j = c(this), h = j.attr("data-target"), e;
        h || (h = j.attr("href"),
        h = h && h.replace(/.*(?=#[^\s]*$)/, "")),
        e = c(h),
        f && f.preventDefault(),
        e.length || (e = j.hasClass("alert") ? j : j.parent()),
        e.trigger(f = c.Event("close"));
        if (f.isDefaultPrevented()) {
            return
        }
        e.removeClass("in"),
        c.support.transition && e.hasClass("fade") ? e.on(c.support.transition.end, g) : g()
    }
    ;
    var b = c.fn.alert;
    c.fn.alert = function(e) {
        return this.each(function() {
            var g = c(this)
              , f = g.data("alert");
            f || g.data("alert", f = new d(this)),
            typeof e == "string" && f[e].call(g)
        })
    }
    ,
    c.fn.alert.Constructor = d,
    c.fn.alert.noConflict = function() {
        return c.fn.alert = b,
        this
    }
    ,
    c(document).on("click.alert.data-api", a, d.prototype.close)
}(window.jQuery),
!function(b) {
    var a = function(d, e) {
        this.$element = b(d),
        this.options = b.extend({}, b.fn.button.defaults, e)
    };
    a.prototype.setState = function(h) {
        var f = "disabled"
          , j = this.$element
          , g = j.data()
          , d = j.is("input") ? "val" : "html";
        h += "Text",
        g.resetText || j.data("resetText", j[d]()),
        j[d](g[h] || this.options[h]),
        setTimeout(function() {
            h == "loadingText" ? j.addClass(f).attr(f, f) : j.removeClass(f).removeAttr(f)
        }, 0)
    }
    ,
    a.prototype.toggle = function() {
        var d = this.$element.closest('[data-toggle="buttons-radio"]');
        d && d.find(".active").removeClass("active"),
        this.$element.toggleClass("active")
    }
    ;
    var c = b.fn.button;
    b.fn.button = function(d) {
        return this.each(function() {
            var g = b(this)
              , e = g.data("button")
              , f = typeof d == "object" && d;
            e || g.data("button", e = new a(this,f)),
            d == "toggle" ? e.toggle() : d && e.setState(d)
        })
    }
    ,
    b.fn.button.defaults = {
        loadingText: "loading..."
    },
    b.fn.button.Constructor = a,
    b.fn.button.noConflict = function() {
        return b.fn.button = c,
        this
    }
    ,
    b(document).on("click.button.data-api", "[data-toggle^=button]", function(d) {
        var e = b(d.target);
        e.hasClass("btn") || (e = e.closest(".btn")),
        e.button("toggle")
    })
}(window.jQuery),
!function(b) {
    var a = function(d, e) {
        this.$element = b(d),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = e,
        this.options.pause == "hover" && this.$element.on("mouseenter", b.proxy(this.pause, this)).on("mouseleave", b.proxy(this.cycle, this))
    };
    a.prototype = {
        cycle: function(d) {
            return d || (this.paused = !1),
            this.interval && clearInterval(this.interval),
            this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval)),
            this
        },
        getActiveIndex: function() {
            return this.$active = this.$element.find(".item.active"),
            this.$items = this.$active.parent().children(),
            this.$items.index(this.$active)
        },
        to: function(d) {
            var f = this.getActiveIndex()
              , e = this;
            if (d > this.$items.length - 1 || d < 0) {
                return
            }
            return this.sliding ? this.$element.one("slid", function() {
                e.to(d)
            }) : f == d ? this.pause().cycle() : this.slide(d > f ? "next" : "prev", b(this.$items[d]))
        },
        pause: function(d) {
            return d || (this.paused = !0),
            this.$element.find(".next, .prev").length && b.support.transition.end && (this.$element.trigger(b.support.transition.end),
            this.cycle(!0)),
            clearInterval(this.interval),
            this.interval = null,
            this
        },
        next: function() {
            if (this.sliding) {
                return
            }
            return this.slide("next")
        },
        prev: function() {
            if (this.sliding) {
                return
            }
            return this.slide("prev")
        },
        slide: function(m, g) {
            var d = this.$element.find(".item.active"), h = g || d[m](), q = this.interval, e = m == "next" ? "left" : "right", l = m == "next" ? "first" : "last", k = this, j;
            this.sliding = !0,
            q && this.pause(),
            h = h.length ? h : this.$element.find(".item")[l](),
            j = b.Event("slide", {
                relatedTarget: h[0],
                direction: e
            });
            if (h.hasClass("active")) {
                return
            }
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"),
            this.$element.one("slid", function() {
                var f = b(k.$indicators.children()[k.getActiveIndex()]);
                f && f.addClass("active")
            }));
            if (b.support.transition && this.$element.hasClass("slide")) {
                this.$element.trigger(j);
                if (j.isDefaultPrevented()) {
                    return
                }
                h.addClass(m),
                h[0].offsetWidth,
                d.addClass(e),
                h.addClass(e),
                this.$element.one(b.support.transition.end, function() {
                    h.removeClass([m, e].join(" ")).addClass("active"),
                    d.removeClass(["active", e].join(" ")),
                    k.sliding = !1,
                    setTimeout(function() {
                        k.$element.trigger("slid")
                    }, 0)
                })
            } else {
                this.$element.trigger(j);
                if (j.isDefaultPrevented()) {
                    return
                }
                d.removeClass("active"),
                h.addClass("active"),
                this.sliding = !1,
                this.$element.trigger("slid")
            }
            return q && this.cycle(),
            this
        }
    };
    var c = b.fn.carousel;
    b.fn.carousel = function(d) {
        return this.each(function() {
            var g = b(this)
              , e = g.data("carousel")
              , f = b.extend({}, b.fn.carousel.defaults, typeof d == "object" && d)
              , h = typeof d == "string" ? d : f.slide;
            e || g.data("carousel", e = new a(this,f)),
            typeof d == "number" ? e.to(d) : h ? e[h]() : f.interval && e.pause().cycle()
        })
    }
    ,
    b.fn.carousel.defaults = {
        interval: 5000,
        pause: "hover"
    },
    b.fn.carousel.Constructor = a,
    b.fn.carousel.noConflict = function() {
        return b.fn.carousel = c,
        this
    }
    ,
    b(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var j = b(this), g, d = b(j.attr("data-target") || (g = j.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, "")), f = b.extend({}, d.data(), j.data()), h;
        d.carousel(f),
        (h = j.attr("data-slide-to")) && d.data("carousel").pause().to(h).cycle(),
        e.preventDefault()
    })
}(window.jQuery),
!function(b) {
    var a = function(d, e) {
        this.$element = b(d),
        this.options = b.extend({}, b.fn.collapse.defaults, e),
        this.options.parent && (this.$parent = b(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    a.prototype = {
        constructor: a,
        dimension: function() {
            var d = this.$element.hasClass("width");
            return d ? "width" : "height"
        },
        show: function() {
            var e, g, f, d;
            if (this.transitioning || this.$element.hasClass("in")) {
                return
            }
            e = this.dimension(),
            g = b.camelCase(["scroll", e].join("-")),
            f = this.$parent && this.$parent.find("> .accordion-group > .in");
            if (f && f.length) {
                d = f.data("collapse");
                if (d && d.transitioning) {
                    return
                }
                f.collapse("hide"),
                d || f.data("collapse", null)
            }
            this.$element[e](0),
            this.transition("addClass", b.Event("show"), "shown"),
            b.support.transition && this.$element[e](this.$element[0][g])
        },
        hide: function() {
            var d;
            if (this.transitioning || !this.$element.hasClass("in")) {
                return
            }
            d = this.dimension(),
            this.reset(this.$element[d]()),
            this.transition("removeClass", b.Event("hide"), "hidden"),
            this.$element[d](0)
        },
        reset: function(f) {
            var d = this.dimension();
            return this.$element.removeClass("collapse")[d](f || "auto")[0].offsetWidth,
            this.$element[f !== null ? "addClass" : "removeClass"]("collapse"),
            this
        },
        transition: function(e, h, g) {
            var d = this
              , f = function() {
                h.type == "show" && d.reset(),
                d.transitioning = 0,
                d.$element.trigger(g)
            };
            this.$element.trigger(h);
            if (h.isDefaultPrevented()) {
                return
            }
            this.transitioning = 1,
            this.$element[e]("in"),
            b.support.transition && this.$element.hasClass("collapse") ? this.$element.one(b.support.transition.end, f) : f()
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var c = b.fn.collapse;
    b.fn.collapse = function(d) {
        return this.each(function() {
            var g = b(this)
              , e = g.data("collapse")
              , f = b.extend({}, b.fn.collapse.defaults, g.data(), typeof d == "object" && d);
            e || g.data("collapse", e = new a(this,f)),
            typeof d == "string" && e[d]()
        })
    }
    ,
    b.fn.collapse.defaults = {
        toggle: !0
    },
    b.fn.collapse.Constructor = a,
    b.fn.collapse.noConflict = function() {
        return b.fn.collapse = c,
        this
    }
    ,
    b(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(e) {
        var h = b(this), g, d = h.attr("data-target") || e.preventDefault() || (g = h.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, ""), f = b(d).data("collapse") ? "toggle" : h.data();
        h[b(d).hasClass("in") ? "addClass" : "removeClass"]("collapsed"),
        b(d).collapse(f)
    })
}(window.jQuery),
!function(f) {
    function d() {
        f(a).each(function() {
            b(f(this)).removeClass("open")
        })
    }
    function b(e) {
        var j = e.attr("data-target"), h;
        j || (j = e.attr("href"),
        j = j && /#/.test(j) && j.replace(/.*(?=#[^\s]*$)/, "")),
        h = j && f(j);
        if (!h || !h.length) {
            h = e.parent()
        }
        return h
    }
    var a = "[data-toggle=dropdown]"
      , g = function(e) {
        var h = f(e).on("click.dropdown.data-api", this.toggle);
        f("html").on("click.dropdown.data-api", function() {
            h.parent().removeClass("open")
        })
    };
    g.prototype = {
        constructor: g,
        toggle: function(e) {
            var k = f(this), h, j;
            if (k.is(".disabled, :disabled")) {
                return
            }
            return h = b(k),
            j = h.hasClass("open"),
            d(),
            j || h.toggleClass("open"),
            k.focus(),
            !1
        },
        keydown: function(q) {
            var k, j, m, h, e, l;
            if (!/(38|40|27)/.test(q.keyCode)) {
                return
            }
            k = f(this),
            q.preventDefault(),
            q.stopPropagation();
            if (k.is(".disabled, :disabled")) {
                return
            }
            h = b(k),
            e = h.hasClass("open");
            if (!e || e && q.keyCode == 27) {
                return q.which == 27 && h.find(a).focus(),
                k.click()
            }
            j = f("[role=menu] li:not(.divider):visible a", h);
            if (!j.length) {
                return
            }
            l = j.index(j.filter(":focus")),
            q.keyCode == 38 && l > 0 && l--,
            q.keyCode == 40 && l < j.length - 1 && l++,
            ~l || (l = 0),
            j.eq(l).focus()
        }
    };
    var c = f.fn.dropdown;
    f.fn.dropdown = function(e) {
        return this.each(function() {
            var j = f(this)
              , h = j.data("dropdown");
            h || j.data("dropdown", h = new g(this)),
            typeof e == "string" && h[e].call(j)
        })
    }
    ,
    f.fn.dropdown.Constructor = g,
    f.fn.dropdown.noConflict = function() {
        return f.fn.dropdown = c,
        this
    }
    ,
    f(document).on("click.dropdown.data-api", d).on("click.dropdown.data-api", ".dropdown form", function(h) {
        h.stopPropagation()
    }).on("click.dropdown-menu", function(h) {
        h.stopPropagation()
    }).on("click.dropdown.data-api", a, g.prototype.toggle).on("keydown.dropdown.data-api", a + ", [role=menu]", g.prototype.keydown)
}(window.jQuery),
!function(b) {
    var a = function(d, e) {
        this.options = e,
        this.$element = b(d).delegate('[data-dismiss="modal"]', "click.dismiss.modal", b.proxy(this.hide, this)),
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    a.prototype = {
        constructor: a,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var d = this
              , e = b.Event("show");
            this.$element.trigger(e);
            if (this.isShown || e.isDefaultPrevented()) {
                return
            }
            this.isShown = !0,
            this.escape(),
            this.backdrop(function() {
                var f = b.support.transition && d.$element.hasClass("fade");
                d.$element.parent().length || d.$element.appendTo(document.body),
                d.$element.show(),
                f && d.$element[0].offsetWidth,
                d.$element.addClass("in").attr("aria-hidden", !1),
                d.enforceFocus(),
                f ? d.$element.one(b.support.transition.end, function() {
                    d.$element.focus().trigger("shown")
                }) : d.$element.focus().trigger("shown")
            })
        },
        hide: function(d) {
            d && d.preventDefault();
            var e = this;
            d = b.Event("hide"),
            this.$element.trigger(d);
            if (!this.isShown || d.isDefaultPrevented()) {
                return
            }
            this.isShown = !1,
            this.escape(),
            b(document).off("focusin.modal"),
            this.$element.removeClass("in").attr("aria-hidden", !0),
            b.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
        },
        enforceFocus: function() {
            var d = this;
            b(document).on("focusin.modal", function(f) {
                d.$element[0] !== f.target && !d.$element.has(f.target).length && d.$element.focus()
            })
        },
        escape: function() {
            var d = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(e) {
                e.which == 27 && d.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var d = this
              , e = setTimeout(function() {
                d.$element.off(b.support.transition.end),
                d.hideModal()
            }, 500);
            this.$element.one(b.support.transition.end, function() {
                clearTimeout(e),
                d.hideModal()
            })
        },
        hideModal: function() {
            var d = this;
            this.$element.hide(),
            this.backdrop(function() {
                d.removeBackdrop(),
                d.$element.trigger("hidden")
            })
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(),
            this.$backdrop = null
        },
        backdrop: function(e) {
            var g = this
              , f = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var d = b.support.transition && f;
                this.$backdrop = b('<div class="modal-backdrop ' + f + '" />').appendTo(document.body),
                this.$backdrop.click(this.options.backdrop == "static" ? b.proxy(this.$element[0].focus, this.$element[0]) : b.proxy(this.hide, this)),
                d && this.$backdrop[0].offsetWidth,
                this.$backdrop.addClass("in");
                if (!e) {
                    return
                }
                d ? this.$backdrop.one(b.support.transition.end, e) : e()
            } else {
                !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
                b.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(b.support.transition.end, e) : e()) : e && e()
            }
        }
    };
    var c = b.fn.modal;
    b.fn.modal = function(d) {
        return this.each(function() {
            var g = b(this)
              , e = g.data("modal")
              , f = b.extend({}, b.fn.modal.defaults, g.data(), typeof d == "object" && d);
            e || g.data("modal", e = new a(this,f)),
            typeof d == "string" ? e[d]() : f.show && e.show()
        })
    }
    ,
    b.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    b.fn.modal.Constructor = a,
    b.fn.modal.noConflict = function() {
        return b.fn.modal = c,
        this
    }
    ,
    b(document).on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
        var h = b(this)
          , g = h.attr("href")
          , d = b(h.attr("data-target") || g && g.replace(/.*(?=#[^\s]+$)/, ""))
          , f = d.data("modal") ? "toggle" : b.extend({
            remote: !/#/.test(g) && g
        }, d.data(), h.data());
        e.preventDefault(),
        d.modal(f).one("hide", function() {
            h.focus()
        })
    })
}(window.jQuery),
!function(b) {
    var a = function(f, d) {
        this.init("tooltip", f, d)
    };
    a.prototype = {
        constructor: a,
        init: function(g, l, j) {
            var f, h, k, e, d;
            this.type = g,
            this.$element = b(l),
            this.options = this.getOptions(j),
            this.enabled = !0,
            k = this.options.trigger.split(" ");
            for (d = k.length; d--; ) {
                e = k[d],
                e == "click" ? this.$element.on("click." + this.type, this.options.selector, b.proxy(this.toggle, this)) : e != "manual" && (f = e == "hover" ? "mouseenter" : "focus",
                h = e == "hover" ? "mouseleave" : "blur",
                this.$element.on(f + "." + this.type, this.options.selector, b.proxy(this.enter, this)),
                this.$element.on(h + "." + this.type, this.options.selector, b.proxy(this.leave, this)))
            }
            this.options.selector ? this._options = b.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(d) {
            return d = b.extend({}, b.fn[this.type].defaults, this.$element.data(), d),
            d.delay && typeof d.delay == "number" && (d.delay = {
                show: d.delay,
                hide: d.delay
            }),
            d
        },
        enter: function(e) {
            var g = b.fn[this.type].defaults, f = {}, d;
            this._options && b.each(this._options, function(j, h) {
                g[j] != h && (f[j] = h)
            }, this),
            d = b(e.currentTarget)[this.type](f).data(this.type);
            if (!d.options.delay || !d.options.delay.show) {
                return d.show()
            }
            clearTimeout(this.timeout),
            d.hoverState = "in",
            this.timeout = setTimeout(function() {
                d.hoverState == "in" && d.show()
            }, d.options.delay.show)
        },
        leave: function(d) {
            var e = b(d.currentTarget)[this.type](this._options).data(this.type);
            this.timeout && clearTimeout(this.timeout);
            if (!e.options.delay || !e.options.delay.hide) {
                return e.hide()
            }
            e.hoverState = "out",
            this.timeout = setTimeout(function() {
                e.hoverState == "out" && e.hide()
            }, e.options.delay.hide)
        },
        show: function() {
            var f, k, h, e, g, j, d = b.Event("show");
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(d);
                if (d.isDefaultPrevented()) {
                    return
                }
                f = this.tip(),
                this.setContent(),
                this.options.animation && f.addClass("fade"),
                g = typeof this.options.placement == "function" ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                f.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }),
                this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
                k = this.getPosition(),
                h = f[0].offsetWidth,
                e = f[0].offsetHeight;
                switch (g) {
                case "bottom":
                    j = {
                        top: k.top + k.height,
                        left: k.left + k.width / 2 - h / 2
                    };
                    break;
                case "top":
                    j = {
                        top: k.top - e,
                        left: k.left + k.width / 2 - h / 2
                    };
                    break;
                case "left":
                    j = {
                        top: k.top + k.height / 2 - e / 2,
                        left: k.left - h
                    };
                    break;
                case "right":
                    j = {
                        top: k.top + k.height / 2 - e / 2,
                        left: k.left + k.width
                    }
                }
                this.applyPlacement(j, g),
                this.$element.trigger("shown")
            }
        },
        applyPlacement: function(j, m) {
            var g = this.tip(), d = g[0].offsetWidth, h = g[0].offsetHeight, q, f, l, k;
            g.offset(j).addClass(m).addClass("in"),
            q = g[0].offsetWidth,
            f = g[0].offsetHeight,
            m == "top" && f != h && (j.top = j.top + h - f,
            k = !0),
            m == "bottom" || m == "top" ? (l = 0,
            j.left < 0 && (l = j.left * -2,
            j.left = 0,
            g.offset(j),
            q = g[0].offsetWidth,
            f = g[0].offsetHeight),
            this.replaceArrow(l - d + q, q, "left")) : this.replaceArrow(f - h, f, "top"),
            k && g.offset(j)
        },
        replaceArrow: function(f, d, g) {
            this.arrow().css(g, f ? 50 * (1 - f / d) + "%" : "")
        },
        setContent: function() {
            var f = this.tip()
              , d = this.getTitle();
            f.find(".tooltip-inner")[this.options.html ? "html" : "text"](d),
            f.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function e() {
                var h = setTimeout(function() {
                    g.off(b.support.transition.end).detach()
                }, 500);
                g.one(b.support.transition.end, function() {
                    clearTimeout(h),
                    g.detach()
                })
            }
            var d = this
              , g = this.tip()
              , f = b.Event("hide");
            this.$element.trigger(f);
            if (f.isDefaultPrevented()) {
                return
            }
            return g.removeClass("in"),
            b.support.transition && this.$tip.hasClass("fade") ? e() : g.detach(),
            this.$element.trigger("hidden"),
            this
        },
        fixTitle: function() {
            var d = this.$element;
            (d.attr("title") || typeof d.attr("data-original-title") != "string") && d.attr("data-original-title", d.attr("title") || "").attr("title", "")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function() {
            var d = this.$element[0];
            return b.extend({}, typeof d.getBoundingClientRect == "function" ? d.getBoundingClientRect() : {
                width: d.offsetWidth,
                height: d.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function() {
            var f, d = this.$element, g = this.options;
            return f = d.attr("data-original-title") || (typeof g.title == "function" ? g.title.call(d[0]) : g.title),
            f
        },
        tip: function() {
            return this.$tip = this.$tip || b(this.options.template)
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(),
            this.$element = null,
            this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function(d) {
            var e = d ? b(d.currentTarget)[this.type](this._options).data(this.type) : this;
            e.tip().hasClass("in") ? e.hide() : e.show()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var c = b.fn.tooltip;
    b.fn.tooltip = function(d) {
        return this.each(function() {
            var g = b(this)
              , e = g.data("tooltip")
              , f = typeof d == "object" && d;
            e || g.data("tooltip", e = new a(this,f)),
            typeof d == "string" && e[d]()
        })
    }
    ,
    b.fn.tooltip.Constructor = a,
    b.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    },
    b.fn.tooltip.noConflict = function() {
        return b.fn.tooltip = c,
        this
    }
}(window.jQuery),
!function(b) {
    var a = function(f, d) {
        this.init("popover", f, d)
    };
    a.prototype = b.extend({}, b.fn.tooltip.Constructor.prototype, {
        constructor: a,
        setContent: function() {
            var f = this.tip()
              , d = this.getTitle()
              , g = this.getContent();
            f.find(".popover-title")[this.options.html ? "html" : "text"](d),
            f.find(".popover-content")[this.options.html ? "html" : "text"](g),
            f.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var f, d = this.$element, g = this.options;
            return f = (typeof g.content == "function" ? g.content.call(d[0]) : g.content) || d.attr("data-content"),
            f
        },
        tip: function() {
            return this.$tip || (this.$tip = b(this.options.template)),
            this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var c = b.fn.popover;
    b.fn.popover = function(d) {
        return this.each(function() {
            var g = b(this)
              , e = g.data("popover")
              , f = typeof d == "object" && d;
            e || g.data("popover", e = new a(this,f)),
            typeof d == "string" && e[d]()
        })
    }
    ,
    b.fn.popover.Constructor = a,
    b.fn.popover.defaults = b.extend({}, b.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    b.fn.popover.noConflict = function() {
        return b.fn.popover = c,
        this
    }
}(window.jQuery),
!function(b) {
    function a(e, h) {
        var g = b.proxy(this.process, this), d = b(e).is("body") ? b(window) : b(e), f;
        this.options = b.extend({}, b.fn.scrollspy.defaults, h),
        this.$scrollElement = d.on("scroll.scroll-spy.data-api", g),
        this.selector = (this.options.target || (f = b(e).attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
        this.$body = b("body"),
        this.refresh(),
        this.process()
    }
    a.prototype = {
        constructor: a,
        refresh: function() {
            var d = this, e;
            this.offsets = b([]),
            this.targets = b([]),
            e = this.$body.find(this.selector).map(function() {
                var h = b(this)
                  , g = h.data("target") || h.attr("href")
                  , f = /^#\w/.test(g) && b(g);
                return f && f.length && [[f.position().top + (!b.isWindow(d.$scrollElement.get(0)) && d.$scrollElement.scrollTop()), g]] || null
            }).sort(function(g, f) {
                return g[0] - f[0]
            }).each(function() {
                d.offsets.push(this[0]),
                d.targets.push(this[1])
            })
        },
        process: function() {
            var j = this.$scrollElement.scrollTop() + this.options.offset, f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, l = f - this.$scrollElement.height(), h = this.offsets, d = this.targets, g = this.activeTarget, k;
            if (j >= l) {
                return g != (k = d.last()[0]) && this.activate(k)
            }
            for (k = h.length; k--; ) {
                g != d[k] && j >= h[k] && (!h[k + 1] || j <= h[k + 1]) && this.activate(d[k])
            }
        },
        activate: function(d) {
            var f, e;
            this.activeTarget = d,
            b(this.selector).parent(".active").removeClass("active"),
            e = this.selector + '[data-target="' + d + '"],' + this.selector + '[href="' + d + '"]',
            f = b(e).parent("li").addClass("active"),
            f.parent(".dropdown-menu").length && (f = f.closest("li.dropdown").addClass("active")),
            f.trigger("activate")
        }
    };
    var c = b.fn.scrollspy;
    b.fn.scrollspy = function(d) {
        return this.each(function() {
            var g = b(this)
              , e = g.data("scrollspy")
              , f = typeof d == "object" && d;
            e || g.data("scrollspy", e = new a(this,f)),
            typeof d == "string" && e[d]()
        })
    }
    ,
    b.fn.scrollspy.Constructor = a,
    b.fn.scrollspy.defaults = {
        offset: 10
    },
    b.fn.scrollspy.noConflict = function() {
        return b.fn.scrollspy = c,
        this
    }
    ,
    b(window).on("load", function() {
        b('[data-spy="scroll"]').each(function() {
            var d = b(this);
            d.scrollspy(d.data())
        })
    })
}(window.jQuery),
!function(b) {
    var a = function(d) {
        this.element = b(d)
    };
    a.prototype = {
        constructor: a,
        show: function() {
            var e = this.element, j = e.closest("ul:not(.dropdown-menu)"), g = e.attr("data-target"), d, f, h;
            g || (g = e.attr("href"),
            g = g && g.replace(/.*(?=#[^\s]*$)/, ""));
            if (e.parent("li").hasClass("active")) {
                return
            }
            d = j.find(".active:last a")[0],
            h = b.Event("show", {
                relatedTarget: d
            }),
            e.trigger(h);
            if (h.isDefaultPrevented()) {
                return
            }
            f = b(g),
            this.activate(e.parent("li"), j),
            this.activate(f, f.parent(), function() {
                e.trigger({
                    type: "shown",
                    relatedTarget: d
                })
            })
        },
        activate: function(e, j, g) {
            function h() {
                d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
                e.addClass("active"),
                f ? (e[0].offsetWidth,
                e.addClass("in")) : e.removeClass("fade"),
                e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"),
                g && g()
            }
            var d = j.find("> .active")
              , f = g && b.support.transition && d.hasClass("fade");
            f ? d.one(b.support.transition.end, h) : h(),
            d.removeClass("in")
        }
    };
    var c = b.fn.tab;
    b.fn.tab = function(d) {
        return this.each(function() {
            var f = b(this)
              , e = f.data("tab");
            e || f.data("tab", e = new a(this)),
            typeof d == "string" && e[d]()
        })
    }
    ,
    b.fn.tab.Constructor = a,
    b.fn.tab.noConflict = function() {
        return b.fn.tab = c,
        this
    }
    ,
    b(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(d) {
        d.preventDefault(),
        b(this).tab("show")
    })
}(window.jQuery),
!function(b) {
    var a = function(d, e) {
        this.$element = b(d),
        this.options = b.extend({}, b.fn.typeahead.defaults, e),
        this.matcher = this.options.matcher || this.matcher,
        this.sorter = this.options.sorter || this.sorter,
        this.highlighter = this.options.highlighter || this.highlighter,
        this.updater = this.options.updater || this.updater,
        this.source = this.options.source,
        this.$menu = b(this.options.menu),
        this.shown = !1,
        this.listen()
    };
    a.prototype = {
        constructor: a,
        select: function() {
            var d = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(d)).change(),
            this.hide()
        },
        updater: function(d) {
            return d
        },
        show: function() {
            var d = b.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: d.top + d.height,
                left: d.left
            }).show(),
            this.shown = !0,
            this
        },
        hide: function() {
            return this.$menu.hide(),
            this.shown = !1,
            this
        },
        lookup: function(d) {
            var e;
            return this.query = this.$element.val(),
            !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (e = b.isFunction(this.source) ? this.source(this.query, b.proxy(this.process, this)) : this.source,
            e ? this.process(e) : this)
        },
        process: function(d) {
            var e = this;
            return d = b.grep(d, function(f) {
                return e.matcher(f)
            }),
            d = this.sorter(d),
            d.length ? this.render(d.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function(d) {
            return ~d.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(h) {
            var f = [], j = [], g = [], d;
            while (d = h.shift()) {
                d.toLowerCase().indexOf(this.query.toLowerCase()) ? ~d.indexOf(this.query) ? j.push(d) : g.push(d) : f.push(d)
            }
            return f.concat(j, g)
        },
        highlighter: function(f) {
            var d = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return f.replace(new RegExp("(" + d + ")","ig"), function(h, g) {
                return "<strong>" + g + "</strong>"
            })
        },
        render: function(d) {
            var e = this;
            return d = b(d).map(function(f, g) {
                return f = b(e.options.item).attr("data-value", g),
                f.find("a").html(e.highlighter(g)),
                f[0]
            }),
            d.first().addClass("active"),
            this.$menu.html(d),
            this
        },
        next: function(d) {
            var f = this.$menu.find(".active").removeClass("active")
              , e = f.next();
            e.length || (e = b(this.$menu.find("li")[0])),
            e.addClass("active")
        },
        prev: function(f) {
            var d = this.$menu.find(".active").removeClass("active")
              , g = d.prev();
            g.length || (g = this.$menu.find("li").last()),
            g.addClass("active")
        },
        listen: function() {
            this.$element.on("focus", b.proxy(this.focus, this)).on("blur", b.proxy(this.blur, this)).on("keypress", b.proxy(this.keypress, this)).on("keyup", b.proxy(this.keyup, this)),
            this.eventSupported("keydown") && this.$element.on("keydown", b.proxy(this.keydown, this)),
            this.$menu.on("click", b.proxy(this.click, this)).on("mouseenter", "li", b.proxy(this.mouseenter, this)).on("mouseleave", "li", b.proxy(this.mouseleave, this))
        },
        eventSupported: function(f) {
            var d = f in this.$element;
            return d || (this.$element.setAttribute(f, "return;"),
            d = typeof this.$element[f] == "function"),
            d
        },
        move: function(d) {
            if (!this.shown) {
                return
            }
            switch (d.keyCode) {
            case 9:
            case 13:
            case 27:
                d.preventDefault();
                break;
            case 38:
                d.preventDefault(),
                this.prev();
                break;
            case 40:
                d.preventDefault(),
                this.next()
            }
            d.stopPropagation()
        },
        keydown: function(d) {
            this.suppressKeyPressRepeat = ~b.inArray(d.keyCode, [40, 38, 9, 13, 27]),
            this.move(d)
        },
        keypress: function(d) {
            if (this.suppressKeyPressRepeat) {
                return
            }
            this.move(d)
        },
        keyup: function(d) {
            switch (d.keyCode) {
            case 40:
            case 38:
            case 16:
            case 17:
            case 18:
                break;
            case 9:
            case 13:
                if (!this.shown) {
                    return
                }
                this.select();
                break;
            case 27:
                if (!this.shown) {
                    return
                }
                this.hide();
                break;
            default:
                this.lookup()
            }
            d.stopPropagation(),
            d.preventDefault()
        },
        focus: function(d) {
            this.focused = !0
        },
        blur: function(d) {
            this.focused = !1,
            !this.mousedover && this.shown && this.hide()
        },
        click: function(d) {
            d.stopPropagation(),
            d.preventDefault(),
            this.select(),
            this.$element.focus()
        },
        mouseenter: function(d) {
            this.mousedover = !0,
            this.$menu.find(".active").removeClass("active"),
            b(d.currentTarget).addClass("active")
        },
        mouseleave: function(d) {
            this.mousedover = !1,
            !this.focused && this.shown && this.hide()
        }
    };
    var c = b.fn.typeahead;
    b.fn.typeahead = function(d) {
        return this.each(function() {
            var g = b(this)
              , e = g.data("typeahead")
              , f = typeof d == "object" && d;
            e || g.data("typeahead", e = new a(this,f)),
            typeof d == "string" && e[d]()
        })
    }
    ,
    b.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    },
    b.fn.typeahead.Constructor = a,
    b.fn.typeahead.noConflict = function() {
        return b.fn.typeahead = c,
        this
    }
    ,
    b(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(d) {
        var e = b(this);
        if (e.data("typeahead")) {
            return
        }
        e.typeahead(e.data())
    })
}(window.jQuery),
!function(b) {
    var a = function(d, e) {
        this.options = b.extend({}, b.fn.affix.defaults, e),
        this.$window = b(window).on("scroll.affix.data-api", b.proxy(this.checkPosition, this)).on("click.affix.data-api", b.proxy(function() {
            setTimeout(b.proxy(this.checkPosition, this), 1)
        }, this)),
        this.$element = b(d),
        this.checkPosition()
    };
    a.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) {
            return
        }
        var g = b(document).height(), l = this.$window.scrollTop(), j = this.$element.offset(), f = this.options.offset, h = f.bottom, k = f.top, e = "affix affix-top affix-bottom", d;
        typeof f != "object" && (h = k = f),
        typeof k == "function" && (k = f.top()),
        typeof h == "function" && (h = f.bottom()),
        d = this.unpin != null && l + this.unpin <= j.top ? !1 : h != null && j.top + this.$element.height() >= g - h ? "bottom" : k != null && l <= k ? "top" : !1;
        if (this.affixed === d) {
            return
        }
        this.affixed = d,
        this.unpin = d == "bottom" ? j.top - l : null,
        this.$element.removeClass(e).addClass("affix" + (d ? "-" + d : ""))
    }
    ;
    var c = b.fn.affix;
    b.fn.affix = function(d) {
        return this.each(function() {
            var g = b(this)
              , e = g.data("affix")
              , f = typeof d == "object" && d;
            e || g.data("affix", e = new a(this,f)),
            typeof d == "string" && e[d]()
        })
    }
    ,
    b.fn.affix.Constructor = a,
    b.fn.affix.defaults = {
        offset: 0
    },
    b.fn.affix.noConflict = function() {
        return b.fn.affix = c,
        this
    }
    ,
    b(window).on("load", function() {
        b('[data-spy="affix"]').each(function() {
            var d = b(this)
              , e = d.data();
            e.offset = e.offset || {},
            e.offsetBottom && (e.offset.bottom = e.offsetBottom),
            e.offsetTop && (e.offset.top = e.offsetTop),
            d.affix(e)
        })
    })
}(window.jQuery);
/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(s) {
    function e(l, k, r) {
        var t = l[0]
          , m = /er/.test(r) ? _indeterminate : /bl/.test(r) ? g : o
          , q = r == _update ? {
            checked: t[o],
            disabled: t[g],
            indeterminate: "true" == l.attr(_indeterminate) || "false" == l.attr(_determinate)
        } : t[m];
        if (/^(ch|di|in)/.test(r) && !q) {
            v(l, m)
        } else {
            if (/^(un|en|de)/.test(r) && q) {
                d(l, m)
            } else {
                if (r == _update) {
                    for (var n in q) {
                        q[n] ? v(l, n, !0) : d(l, n, !0)
                    }
                } else {
                    if (!k || "toggle" == r) {
                        if (!k) {
                            l[_callback]("ifClicked")
                        }
                        q ? t[_type] !== a && d(l, m) : v(l, m)
                    }
                }
            }
        }
    }
    function v(t, r, n) {
        var q = t[0]
          , l = t.parent()
          , m = r == o
          , A = r == _indeterminate
          , y = r == g
          , D = A ? _determinate : m ? u : "enabled"
          , C = j(t, D + w(q[_type]))
          , k = j(t, r + w(q[_type]));
        if (!0 !== q[r]) {
            if (!n && r == o && q[_type] == a && q.name) {
                var x = t.closest("form")
                  , f = 'input[name="' + q.name + '"]'
                  , f = x.length ? x.find(f) : s(f);
                f.each(function() {
                    this !== q && s(this).data(h) && d(s(this), r)
                })
            }
            A ? (q[r] = !0,
            q[o] && d(t, o, "force")) : (n || (q[r] = !0),
            m && q[_indeterminate] && d(t, _indeterminate, !1));
            b(t, m, r, n)
        }
        q[g] && j(t, _cursor, !0) && l.find("." + c).css(_cursor, "default");
        l[_add](k || j(t, r) || "");
        l.attr("role") && !A && l.attr("aria-" + (y ? g : o), "true");
        l[_remove](C || j(t, D) || "")
    }
    function d(D, C, A) {
        var B = D[0]
          , t = D.parent()
          , y = C == o
          , x = C == _indeterminate
          , n = C == g
          , E = x ? _determinate : y ? u : "enabled"
          , l = j(D, E + w(B[_type]))
          , k = j(D, C + w(B[_type]));
        if (!1 !== B[C]) {
            if (x || !A || "force" == A) {
                B[C] = !1
            }
            b(D, y, E, A)
        }
        !B[g] && j(D, _cursor, !0) && t.find("." + c).css(_cursor, "pointer");
        t[_remove](k || j(D, C) || "");
        t.attr("role") && !x && t.attr("aria-" + (n ? g : o), "false");
        t[_add](l || j(D, E) || "")
    }
    function z(k, f) {
        if (k.data(h)) {
            k.parent().html(k.attr("style", k.data(h).s || ""));
            if (f) {
                k[_callback](f)
            }
            k.off(".i").unwrap();
            s(_label + '[for="' + k[0].id + '"]').add(k.closest(_label)).off(".i")
        }
    }
    function j(l, k, m) {
        if (l.data(h)) {
            return l.data(h).o[k + (m ? "" : "Class")]
        }
    }
    function w(f) {
        return f.charAt(0).toUpperCase() + f.slice(1)
    }
    function b(l, k, m, n) {
        if (!n) {
            if (k) {
                l[_callback]("ifToggled")
            }
            l[_callback]("ifChanged")[_callback]("if" + w(m))
        }
    }
    var h = "iCheck"
      , c = h + "-helper"
      , a = "radio"
      , o = "checked"
      , u = "un" + o
      , g = "disabled";
    _determinate = "determinate";
    _indeterminate = "in" + _determinate;
    _update = "update";
    _type = "type";
    _click = "click";
    _touch = "touchbegin.i touchend.i";
    _add = "addClass";
    _remove = "removeClass";
    _callback = "trigger";
    _label = "label";
    _cursor = "cursor";
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    s.fn[h] = function(A, y) {
        var r = 'input[type="checkbox"], input[type="' + a + '"]'
          , x = s()
          , n = function(l) {
            l.each(function() {
                var t = s(this);
                x = t.is(r) ? x.add(t) : x.add(t.find(r))
            })
        };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(A)) {
            return A = A.toLowerCase(),
            n(this),
            x.each(function() {
                var l = s(this);
                "destroy" == A ? z(l, "ifDestroyed") : e(l, !0, A);
                s.isFunction(y) && y()
            })
        }
        if ("object" != typeof A && A) {
            return this
        }
        var q = s.extend({
            checkedClass: o,
            disabledClass: g,
            indeterminateClass: _indeterminate,
            labelHover: !0
        }, A)
          , m = q.handle
          , D = q.hoverClass || "hover"
          , F = q.focusClass || "focus"
          , E = q.activeClass || "active"
          , k = !!q.labelHover
          , C = q.labelHoverClass || "hover"
          , f = ("" + q.increaseArea).replace("%", "") | 0;
        if ("checkbox" == m || m == a) {
            r = 'input[type="' + m + '"]'
        }
        -50 > f && (f = -50);
        n(this);
        return x.each(function() {
            var M = s(this);
            z(M);
            var I = this
              , L = I.id
              , G = -f + "%"
              , H = 100 + 2 * f + "%"
              , H = {
                position: "absolute",
                top: G,
                left: G,
                display: "block",
                width: H,
                height: H,
                margin: 0,
                padding: 0,
                background: "#fff",
                border: 0,
                opacity: 0
            }
              , G = _mobile ? {
                position: "absolute",
                visibility: "hidden"
            } : f ? H : {
                position: "absolute",
                opacity: 0
            }
              , t = "checkbox" == I[_type] ? q.checkboxClass || "icheckbox" : q.radioClass || "i" + a
              , J = s(_label + '[for="' + L + '"]').add(M.closest(_label))
              , N = !!q.aria
              , K = h + "-" + Math.random().toString(36).substr(2, 6)
              , B = '<div class="' + t + '" ' + (N ? 'role="' + I[_type] + '" ' : "");
            N && J.each(function() {
                B += 'aria-labelledby="';
                this.id ? B += this.id : (this.id = K,
                B += K);
                B += '"'
            });
            B = M.wrap(B + "/>")[_callback]("ifCreated").parent().append(q.insert);
            H = s('<ins class="' + c + '"/>').css(H).appendTo(B);
            M.data(h, {
                o: q,
                s: M.attr("style")
            }).css(G);
            q.inheritClass && B[_add](I.className || "");
            q.inheritID && L && B.attr("id", h + "-" + L);
            "static" == B.css("position") && B.css("position", "relative");
            e(M, !0, _update);
            if (J.length) {
                J.on(_click + ".i mouseover.i mouseout.i " + _touch, function(l) {
                    var P = l[_type]
                      , O = s(this);
                    if (!I[g]) {
                        if (P == _click) {
                            if (s(l.target).is("a")) {
                                return
                            }
                            e(M, !1, !0)
                        } else {
                            k && (/ut|nd/.test(P) ? (B[_remove](D),
                            O[_remove](C)) : (B[_add](D),
                            O[_add](C)))
                        }
                        if (_mobile) {
                            l.stopPropagation()
                        } else {
                            return !1
                        }
                    }
                })
            }
            M.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(l) {
                var O = l[_type];
                l = l.keyCode;
                if (O == _click) {
                    return !1
                }
                if ("keydown" == O && 32 == l) {
                    return I[_type] == a && I[o] || (I[o] ? d(M, o) : v(M, o)),
                    !1
                }
                if ("keyup" == O && I[_type] == a) {
                    !I[o] && v(M, o)
                } else {
                    if (/us|ur/.test(O)) {
                        B["blur" == O ? _remove : _add](F)
                    }
                }
            });
            H.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function(l) {
                var P = l[_type]
                  , O = /wn|up/.test(P) ? E : D;
                if (!I[g]) {
                    if (P == _click) {
                        e(M, !1, !0)
                    } else {
                        if (/wn|er|in/.test(P)) {
                            B[_add](O)
                        } else {
                            B[_remove](O + " " + E)
                        }
                        if (J.length && k && O == D) {
                            J[/ut|nd/.test(P) ? _remove : _add](C)
                        }
                    }
                    if (_mobile) {
                        l.stopPropagation()
                    } else {
                        return !1
                    }
                }
            })
        })
    }
}
)(window.jQuery || window.Zepto);
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
;!function(b, a) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", a) : "object" == typeof module && module.exports ? module.exports = a() : b.EvEmitter = a()
}("undefined" != typeof window ? window : this, function() {
    function b() {}
    var a = b.prototype;
    return a.on = function(f, d) {
        if (f && d) {
            var c = this._events = this._events || {}
              , g = c[f] = c[f] || [];
            return g.indexOf(d) == -1 && g.push(d),
            this
        }
    }
    ,
    a.once = function(f, d) {
        if (f && d) {
            this.on(f, d);
            var c = this._onceEvents = this._onceEvents || {}
              , g = c[f] = c[f] || {};
            return g[d] = !0,
            this
        }
    }
    ,
    a.off = function(f, d) {
        var c = this._events && this._events[f];
        if (c && c.length) {
            var g = c.indexOf(d);
            return g != -1 && c.splice(g, 1),
            this
        }
    }
    ,
    a.emitEvent = function(h, d) {
        var c = this._events && this._events[h];
        if (c && c.length) {
            c = c.slice(0),
            d = d || [];
            for (var k = this._onceEvents && this._onceEvents[h], j = 0; j < c.length; j++) {
                var g = c[j]
                  , f = k && k[g];
                f && (this.off(h, g),
                delete k[g]),
                g.apply(this, d)
            }
            return this
        }
    }
    ,
    a.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    b
}),
function(b, a) {
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(c) {
        return a(b, c)
    }) : "object" == typeof module && module.exports ? module.exports = a(b, require("ev-emitter")) : b.imagesLoaded = a(b, b.EvEmitter)
}("undefined" != typeof window ? window : this, function(k, v) {
    function g(h, d) {
        for (var a in d) {
            h[a] = d[a]
        }
        return h
    }
    function f(d) {
        if (Array.isArray(d)) {
            return d
        }
        var a = "object" == typeof d && "number" == typeof d.length;
        return a ? l.call(d) : [d]
    }
    function c(n, a, h) {
        if (!(this instanceof c)) {
            return new c(n,a,h)
        }
        var d = n;
        return "string" == typeof n && (d = document.querySelectorAll(n)),
        d ? (this.elements = f(d),
        this.options = g({}, this.options),
        "function" == typeof a ? h = a : g(this.options, a),
        h && this.on("always", h),
        this.getImages(),
        j && (this.jqDeferred = new j.Deferred),
        void setTimeout(this.check.bind(this))) : void m.error("Bad element for imagesLoaded " + (d || n))
    }
    function b(a) {
        this.img = a
    }
    function w(d, a) {
        this.url = d,
        this.element = a,
        this.img = new Image
    }
    var j = k.jQuery
      , m = k.console
      , l = Array.prototype.slice;
    c.prototype = Object.create(v.prototype),
    c.prototype.options = {},
    c.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    c.prototype.addElementImages = function(x) {
        "IMG" == x.nodeName && this.addImage(x),
        this.options.background === !0 && this.addElementBackgroundImages(x);
        var d = x.nodeType;
        if (d && q[d]) {
            for (var a = x.querySelectorAll("img"), z = 0; z < a.length; z++) {
                var y = a[z];
                this.addImage(y)
            }
            if ("string" == typeof this.options.background) {
                var u = x.querySelectorAll(this.options.background);
                for (z = 0; z < u.length; z++) {
                    var h = u[z];
                    this.addElementBackgroundImages(h)
                }
            }
        }
    }
    ;
    var q = {
        1: !0,
        9: !0,
        11: !0
    };
    return c.prototype.addElementBackgroundImages = function(h) {
        var d = getComputedStyle(h);
        if (d) {
            for (var a = /url\((['"])?(.*?)\1\)/gi, s = a.exec(d.backgroundImage); null !== s; ) {
                var r = s && s[2];
                r && this.addBackground(r, h),
                s = a.exec(d.backgroundImage)
            }
        }
    }
    ,
    c.prototype.addImage = function(d) {
        var a = new b(d);
        this.images.push(a)
    }
    ,
    c.prototype.addBackground = function(h, d) {
        var a = new w(h,d);
        this.images.push(a)
    }
    ,
    c.prototype.check = function() {
        function d(o, h, r) {
            setTimeout(function() {
                a.progress(o, h, r)
            })
        }
        var a = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", d),
            e.check()
        }) : void this.complete()
    }
    ,
    c.prototype.progress = function(h, d, a) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !h.isLoaded,
        this.emitEvent("progress", [this, h, d]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, h),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && m && m.log("progress: " + a, h, d)
    }
    ,
    c.prototype.complete = function() {
        var d = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(d, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var a = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[a](this)
        }
    }
    ,
    b.prototype = Object.create(v.prototype),
    b.prototype.check = function() {
        var a = this.getIsImageComplete();
        return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    b.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    b.prototype.confirm = function(d, a) {
        this.isLoaded = d,
        this.emitEvent("progress", [this, this.img, a])
    }
    ,
    b.prototype.handleEvent = function(d) {
        var a = "on" + d.type;
        this[a] && this[a](d)
    }
    ,
    b.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    b.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    b.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    w.prototype = Object.create(b.prototype),
    w.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var a = this.getIsImageComplete();
        a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    w.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    w.prototype.confirm = function(d, a) {
        this.isLoaded = d,
        this.emitEvent("progress", [this, this.element, a])
    }
    ,
    c.makeJQueryPlugin = function(a) {
        a = a || k.jQuery,
        a && (j = a,
        j.fn.imagesLoaded = function(n, h) {
            var d = new c(this,n,h);
            return d.jqDeferred.promise(j(this))
        }
        )
    }
    ,
    c.makeJQueryPlugin(),
    c
});
doing = false;
var votesusalert = "提交成功";
var dovoting = "提交中";
var votedalert = "已" + votebtntxtinfo.btntxt;
var votebtntxt = votebtntxtinfo.btntxt;
var votenumtxt = votebtntxtinfo.unit;
var votemorebtntxt = votebtntxtinfo.morebtntxt;
var _lskey = "wxparam_" + guid;
var _lsnokey = "wxparamno_" + guid;
var voteclkbtn = null;
function getScrollTop() {
    var a = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        a = document.documentElement.scrollTop
    } else {
        if (document.body) {
            a = document.body.scrollTop
        }
    }
    return a
}
function getClientHeight() {
    var a = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        var a = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
    } else {
        var a = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
    }
    return a
}
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
}
function doWxAddOPVideoNum(a) {
    _screenWidth = $(document).width();
    a.find("iframe").css({
        width: "100%"
    });
    _iframeWidth = a.find("iframe").width();
    _newIframeWidth = _iframeWidth > 600 ? 600 : _iframeWidth;
    if (_newIframeWidth != _iframeWidth) {
        a.find("iframe").css({
            width: _newIframeWidth
        });
        _iframeWidth = _newIframeWidth
    }
    _iframeheight = _iframeWidth * 9 / 16;
    a.find("iframe").css({
        height: _iframeheight
    });
    if (a.find(".videonumicon").is("div")) {
        return
    }
    _nx = 20;
    _ny = 17
}
function addWxOPVideoNum() {
    $(".opvideo").each(function() {
        doWxAddOPVideoNum($(this))
    })
}
function reSetVideoIframe() {
    $(".wxopimg").each(function() {
        if ($(this).find("iframe")) {
            _border_radius = parseInt($(this).parent().css("border-radius"));
            _width = $(this).width() - _border_radius * 2;
            _iheight = _width * 168 / 300;
            $(this).find("iframe").css("height", _iheight);
            $(this).find("iframe").css("width", _width);
            $(this).find("iframe").css("margin-top", _border_radius)
        }
    })
}
function showSnowFall() {
    $(".weixinstyle").append("<div class='floatsnow' ></div>");
    $(".floatsnow").css("width", $(window).width());
    fallheight = $(window).height() + 50;
    $(".floatsnow").css("height", fallheight);
    if (guid == "aa6fe589-b8a1-1c51-263e-124785d5c641") {
        $(".floatsnow").snowfall({
            round: false,
            maxSpeed: 2,
            minSize: 30,
            maxSize: 60,
            image: flakeimages,
            flakeColor: "",
            collection: "",
            flakeCount: 5,
            rotate: false,
            shake: false
        })
    } else {
        $(".floatsnow").snowfall({
            round: true,
            maxSpeed: 3,
            minSize: 5,
            maxSize: 50,
            image: flakeimages,
            flakeColor: "",
            collection: "",
            flakeCount: 10
        })
    }
}
function getWxOptionBox(a) {
    _div = "<div id='wxop_" + a.opid + "' class='wxop '>";
    if (a.wximgorvideoinpage == 0) {
        if (a.hasImage) {
            _div += "<div class='wxopimg '>";
            if (a.hasPageText) {
                _div += "<a href='" + a.pageurl + "'>";
                _div += "<img   src='" + a.thumimageurl + "'  /></a>"
            } else {
                _div += "<img onclick='javascript:return false;'  src='" + a.thumimageurl + "'  />"
            }
            if (enablegift == 1) {
                _div += "<span class='rq'>人气:" + a.point + "</span>"
            }
            _div += "</div>"
        } else {
            if (a.hasVideo) {
                _div += "<div class='wxopimg '>" + a.videocode + "</div>"
            }
        }
    }
    if (a.wximgorvideoinpage == 1) {
        if (a.hasVideo) {
            _div += "<div class='wxopimg '>" + a.videocode + "</div>"
        } else {
            if (a.hasImage) {
                _div += "<div class='wxopimg '>";
                if (a.hasPageText) {
                    _div += "<a href='" + a.pageurl + "'>";
                    _div += "<img   src='" + a.thumimageurl + "'  /></a>"
                } else {
                    _div += "<img onclick='javascript:return false;'  src='" + a.thumimageurl + "'  />"
                }
                if (enablegift == 1) {
                    _div += "<span class='rq'>人气:" + a.point + "</span>"
                }
                _div += "</div>"
            }
        }
    }
    _div += "<div class='wxoptxt'><div class='wxoptxts'>";
    if (a.hasPageText) {
        if (hideopindex) {
            _div += "<a href='" + a.pageurl + "'>" + a.optext + "</a>"
        } else {
            _div += "<a href='" + a.pageurl + "'>" + a.opindex + ". " + a.optext + "</a>"
        }
    } else {
        if (hideopindex) {
            _div += a.optext
        } else {
            _div += a.opindex + ". " + a.optext
        }
    }
    if (a.hasLinkUrl) {
        if (guid == "06610571-45df-e2b1-d8fb-e42a6649acc0") {
            _div += "<a href='" + a.linkurl + "' target='_blank' rel='nofollow'  >&nbsp;详细&nbsp; <i class='icon-external-link' ></i></a>"
        } else {
            _div += "<a href='" + a.linkurl + "' target='_blank' rel='nofollow'  >&nbsp;链接&nbsp; <i class='icon-external-link' ></i></a>"
        }
    }
    _div += "</div>";
    if (a.optextmore != "") {
        _div += "<div class='optextmore'>" + a.optextmore + "</div>"
    }
    _div += "</div>";
    _div += "<div class='wxopvotediv'>";
    disabled = "";
    if (isinweixin == 0 && isinqq == 0 && isinweibo == 0) {}
    if (wxsubmittype == 0) {
        _div += "<div class='wxvbtn'><button class='btn btn-info wxvotebutton' " + disabled + " name='" + a.opid + "'><i class='icon-thumbs-up'></i> " + votebtntxt + "</button></div>"
    } else {
        _div += "<div class='wxopradio wxopraido" + a.opid + " newwxopradio '><input type='checkbox' name='opids[]' value='" + a.opid + "' class=''/></div>"
    }
    _div += "<div class='wxvinfo' id='wxinfo_" + a.opid + "'>";
    if (showopvotenum == 1) {
        _div += "<span>" + a.num + "</span>" + votenumtxt
    }
    if (enablegift == 1) {
        _div += "<button class='btn btn-link giftbutton " + disabled + " ' name='" + a.guid + "' ><i class='icon-gift'></i> 送礼物</button>"
    }
    _div += "</div>";
    _div += "</div></div>";
    return _div
}
function bindBuyGiftButton() {
    if (enablegift == 1) {
        $(".giftbutton").unbind("click");
        $(".giftbutton").click(function() {
            _opguid = $(this).attr("name");
            window.location.href = "/action/viewwxsendgift.html?guid=" + _opguid;
            $(this).html("正在加载");
            return false
        })
    }
}
function showWxOptionListMore(a) {
    if (loadpagedone) {
        return false
    }
    if (loadingpage) {
        return false
    }
    loadingpage = true;
    doing = true;
    wxpage += 1;
    $(".loadingpagealert").show();
    $("#loadmorebtn").hide();
    $.post(serverroot + "op.php", {
        action: "loadvoteoptionbypage",
        guid: a,
        page: wxpage,
        tpldiyfile: tpldiyfile,
        cateid: nowcateid
    }, function(b) {
        $(".loadingpagealert").hide();
        loadingpage = false;
        if (b.ret == 1) {
            for (i in b.retinfo.list.left) {
                _opt = b.retinfo.list.left[i];
                optdiv = getWxOptionBox(_opt);
                $(".leftoptions").append(optdiv)
            }
            for (i in b.retinfo.list.right) {
                _opt = b.retinfo.list.right[i];
                optdiv = getWxOptionBox(_opt);
                $(".rightoptions").append(optdiv)
            }
            reSetVideoIframe();
            if (b.retinfo.list.num == 0) {
                $(".loadingpagealert").html("没有更多选手了");
                $("#loadmorebtn").hide()
            } else {
                $(".loadingpagealert").hide();
                $("#loadmorebtn").show();
                initWxVoteBtnClk();
                autoWxopHeight()
            }
            if (b.retinfo.list.num < optionpagenum) {
                loadpagedone = true;
                $("#loadmorebtn").hide()
            }
        } else {
            $("#loadmorebtn").show();
            $("#loadmorebtn button").html("重新加载")
        }
        doing = false
    }, "json")
}
function showWxOptionListMoreOnerow(b, a) {
    if (loadpagedone) {
        return false
    }
    if (loadingpage) {
        return false
    }
    loadingpage = true;
    doing = true;
    wxpage += 1;
    $(".loadingpagealert").show();
    $("#loadmorebtn").hide();
    $.post(serverroot + "op.php", {
        action: "loadvoteoptionbypageonerow",
        guid: b,
        page: wxpage,
        limit: a,
        tpldiyfile: tpldiyfile,
        cateid: nowcateid
    }, function(c) {
        $(".loadingpagealert").hide();
        loadingpage = false;
        if (c.ret == 1) {
            for (i in c.retinfo.list.left) {
                _opt = c.retinfo.list.left[i];
                optdiv = getWxOptionBox(_opt);
                $(".leftoptions").append(optdiv);
                if (i % 3 == 2) {
                    $("#wxop_" + _opt.opid).addClass("wxoplast")
                }
            }
            reSetVideoIframe();
            if (c.retinfo.list.num == 0) {
                $(".loadingpagealert").html("没有更多了");
                $("#loadmorebtn").hide()
            } else {
                $(".loadingpagealert").hide();
                $("#loadmorebtn").show();
                initWxVoteBtnClk()
            }
            if (c.retinfo.list.num < optionpagenum) {
                loadpagedone = true;
                $("#loadmorebtn").hide()
            }
        } else {
            $("#loadmorebtn").show();
            $("#loadmorebtn button").html("重新加载")
        }
        doing = false
    }, "json")
}
function showWxOptionListMoreThreerow(b, a) {
    if (loadpagedone) {
        return false
    }
    if (loadingpage) {
        return false
    }
    loadingpage = true;
    doing = true;
    wxpage += 1;
    $(".loadingpagealert").show();
    $("#loadmorebtn").hide();
    $.post(serverroot + "op.php", {
        action: "loadvoteoptionbypageonerow",
        guid: b,
        page: wxpage,
        limit: a,
        tpldiyfile: tpldiyfile,
        cateid: nowcateid
    }, function(c) {
        $(".loadingpagealert").hide();
        loadingpage = false;
        if (c.ret == 1) {
            $(".leftoptions").append("<div class='wxoprow'>");
            _oprow = "<div class='wxoprow'>";
            for (i in c.retinfo.list.left) {
                _opt = c.retinfo.list.left[i];
                optdiv = getWxOptionBox(_opt);
                _oprow += optdiv;
                if (i % 3 == 2) {
                    _oprow += "<div class='clear'></div></div><div class='wxoprow'>"
                }
            }
            $(".leftoptions").append(_oprow + "<div class='clear'></div></div>");
            for (i in c.retinfo.list.left) {
                _opt = c.retinfo.list.left[i];
                if (i % 3 == 2) {
                    $("#wxop_" + _opt.opid).addClass("wxoplast")
                }
            }
            reSetVideoIframe();
            if (c.retinfo.list.num == 0) {
                $(".loadingpagealert").html("没有更多了");
                $("#loadmorebtn").hide()
            } else {
                $(".loadingpagealert").hide();
                $("#loadmorebtn").show();
                initWxVoteBtnClk()
            }
            if (c.retinfo.list.num < optionpagenum) {
                loadpagedone = true;
                $("#loadmorebtn").hide()
            }
        } else {
            $("#loadmorebtn").show();
            $("#loadmorebtn button").html("重新加载")
        }
        doing = false
    }, "json")
}
function hideWapAlert() {
    $(".wapalertbgground").hide()
}
function showWapAlert(b, a) {
    $(".wapalert p").html(b);
    $(".wapalertbgground").show();
    if (a) {
        setTimeout("hideWapAlert()", 2000)
    }
}
function showWapAlertHideByTime(c, b, a) {
    $(".wapalert p").html(c);
    $(".wapalertbgground").show();
    if (b) {
        setTimeout("hideWapAlert()", a)
    }
}
function jump2UrlByTime(a, b) {
    setTimeout("window.location.href='" + a + "'", b)
}
function checkMoreSelNum(a) {
    _opinputselnum = $(".wxopradio input:checked").length;
    _mustminsel = minselectionnum == 0 ? 1 : minselectionnum;
    if (wxsubmittype == 1) {
        if (_opinputselnum == 0 && a) {
            showWapAlert("失败,最少选择" + _mustminsel + optionunitname + ",请修改", true);
            return false
        } else {
            if (_mustminsel > 1 && _opinputselnum < _mustminsel && a) {
                showWapAlert("失败,最少选择" + _mustminsel + optionunitname + ",请修改", true);
                return false
            }
            if (wxeachsubmitnum > 0 && _opinputselnum > wxeachsubmitnum) {
                showWapAlert("失败,最多选择" + wxeachsubmitnum + optionunitname + ",请修改", true);
                return false
            }
        }
    }
    if (wxsubmittype == 2) {
        if (_opinputselnum != wxeachsubmitnum) {
            showWapAlert("必须选择" + wxeachsubmitnum + optionunitname + "才可以提交", true);
            return false
        }
    }
    return true
}
function setHadSelOpNum(b, a) {
    if (a == "add") {
        hadselnum += 1
    } else {
        hadselnum -= 1
    }
    if (hadselnum < 0) {
        hadselnum = 0
    }
    if (wxsubmittype == 1) {
        if (wxeachsubmitnum > 0 && hadselnum > wxeachsubmitnum) {
            showWapAlert("注意:最多选择" + wxeachsubmitnum + optionunitname + ",请修改", true)
        }
    }
    if (wxsubmittype == 2) {
        if (hadselnum > wxeachsubmitnum) {
            showWapAlert("必须选择" + wxeachsubmitnum + optionunitname + "才可以提交", true)
        }
    }
    $(".hadselnumshow").html(hadselnum);
    if (hadselnum > 0) {
        $(".toprulebar").show()
    }
}
function initWxVoteBtnClk() {
    bindBuyGiftButton();
    if (wxsubmittype > 0) {
        $(".newwxopradio input").each(function() {
            var a = $(this);
            a.iCheck({
                checkboxClass: "icheckbox_line-grey",
                radioClass: "iradio_line-grey",
                insert: '<div class="icheck_line-icon"></div><span data-checked="' + checkedtxt + '"  data-unchecked="' + checktxt + '">' + checktxt + "</span>"
            })
        });
        $(".newwxopradio input").on("ifChecked", function(a) {
            _span = $(this).parent().find("span");
            _span.html(_span.attr("data-checked"));
            setHadSelOpNum($(this), "add")
        });
        $(".newwxopradio input").on("ifUnchecked", function(a) {
            _span = $(this).parent().find("span");
            _span.html(_span.attr("data-unchecked"));
            setHadSelOpNum($(this), "sub")
        });
        $(".newwxopradio").each(function() {
            $(this).removeClass("newwxopradio")
        })
    }
    $(".wxlapiaobutton").unbind("click");
    $(".wxvotebutton").unbind("click");
    $(".wxlapiaobutton").click(function() {
        $(".helphimwalert").show()
    });
    $(".wxvotebutton").click(function() {
        if (doing) {
            return false
        }
        _clk = $(this);
        if (caninqq == 1 || caninweibo == 1) {
            if (isinqq == 0 && isinweixin == 0 && isinweibo == 0) {
                _clk.html(votebtntxt);
                showWapAlertHideByTime("请用微信扫描二维码进入投票页后进行操作。", 1, 3000);
                return false
            }
        } else {
            if (isinweixin == 0) {
                _clk.html(votebtntxt);
                showWapAlertHideByTime("请用微信扫描二维码进入投票页后进行操作。", 1, 3000);
                return false
            }
        }
        if (expired == 1) {
            showWapAlert("活动已结束", true);
            return false
        }
        if (votenotstart == 1) {
            showWapAlert("活动尚未开始", true);
            return false
        }
        wxparam = "";
        needinwx = 0;
        if ($("#wxparam").is("input")) {
            wxparam = $("#wxparam").val();
            needinwx = 1
        }
        if (wxparam == "") {
            if (getByHash(_lskey)) {
                if (guid == "d58ef00b-fe32-ca76-e969-48d38bef42fa") {}
            }
        }
        if (needinwx == 1) {
            if (wxparam == "" && isinweixin == 1) {
                $(".dofollowalert").show();
                return false
            }
        }
        $(this).html(dovoting);
        if (wxvrcode == 1) {
            $(".geetestalert").show();
            $("#geetestbox h4").html("拖动下方滑块完成验证");
            geetestObj.refresh();
            geetestObj.onSuccess(function() {
                $("#geetestbox h4").html("正在提交....");
                gtdata = geetestObj.getValidate();
                ops = _clk.attr("name");
                param = {
                    action: "dovote",
                    guid: guid,
                    ops: ops
                };
                param.geetest_challenge = gtdata.geetest_challenge;
                param.geetest_seccode = gtdata.geetest_seccode;
                param.geetest_validate = gtdata.geetest_validate;
                param.wxparam = wxparam;
                doing = true;
                $.post("/op.php", param, function(a) {
                    $(".geetestalert").hide();
                    if (a.ret == 1) {
                        doing = false;
                        _nownum = parseInt($("#wxinfo_" + ops + " span").html());
                        _newnum = _nownum + 1;
                        showWapAlert(votesusalert, true);
                        _clk.html(votedalert);
                        $("#wxinfo_" + ops + " span").html(_newnum)
                    } else {
                        doing = false;
                        _clk.html("<i class='icon-thumbs-up''></i> " + votebtntxt);
                        showWapAlert(a.retinfo.errormsg, true)
                    }
                }, "json")
            });
            return false
        } else {
            if (needinputinvitecode == 1) {
                $(".invitecodeboxinvotealert").show();
                _clk.html("<i class='icon-thumbs-up''></i> " + votebtntxt);
                voteclkbtn = _clk;
                doing = false;
                return false
            }
            if (needinputsmsverifycode == 1) {
                $(".smsverifycodevotealert").show();
                _clk.html("<i class='icon-thumbs-up''></i> " + votebtntxt);
                voteclkbtn = _clk;
                doing = false;
                return false
            }
            ops = $(this).attr("name");
            param = {
                action: "dovote",
                guid: guid,
                ops: ops
            };
            param.wxparam = wxparam;
            doing = true;
            $.post("/op.php", param, function(a) {
                if (a.ret == 1) {
                    doing = false;
                    _nownum = parseInt($("#wxinfo_" + ops + " span").html());
                    _newnum = _nownum + 1;
                    showWapAlert(votesusalert, true);
                    _clk.html(votedalert);
                    $("#wxinfo_" + ops + " span").html(_newnum)
                } else {
                    doing = false;
                    _clk.html("<i class='icon-thumbs-up''></i> " + votebtntxt);
                    showWapAlertHideByTime(a.retinfo.errormsg, true, 5000)
                }
            }, "json")
        }
    })
}
function loadWXUserInfo() {}
function autoWxopHeight() {
    if (autowxopheight == 0) {
        return false
    }
    $(".voteoplist").imagesLoaded(function() {
        $(".leftoptions .wxop").each(function() {
            _height = $(this).height();
            _index = $(this).index();
            if (_index < $(".rightoptions .wxop").length) {
                element = $(".rightoptions .wxop").eq(_index);
                if (!$(this).hasClass("autoheight") && !element.hasClass("autoheight")) {
                    $(this).addClass("autoheight");
                    element.addClass("autoheight");
                    _r_height = element.height();
                    if (_height > _r_height) {
                        _subh = _height - _r_height;
                        element.find(".wxopvotediv").css("margin-top", _subh + 5);
                        element.css("height", _height)
                    } else {
                        $(this).css("height", _r_height);
                        _subh = _r_height - _height;
                        $(this).find(".wxopvotediv").css("margin-top", _subh + 5)
                    }
                }
            }
        })
    })
}
var smscoderequestid = 0;
sendSMSButtnCountersetInterval = null;
sendSMSButtnCounterSec = 60;
function sendSMSButtnCounterForVote() {
    sendSMSButtnCounterSec = sendSMSButtnCounterSec - 1;
    $("#sendvrcode").html("重新发送(" + sendSMSButtnCounterSec + ")");
    if (sendSMSButtnCounterSec <= 0) {
        clearInterval(sendSMSButtnCountersetInterval);
        $("#sendvrcode").removeClass("disabled");
        $("#sendvrcode").html("发送验证码");
        sendSMSButtnCounterSec = 60
    }
}
function sendSMSButtnCounterForVoteWXSMS() {
    sendSMSButtnCounterSec = sendSMSButtnCounterSec - 1;
    $("#sendsmscodeforvotewxsms").html("重新发送(" + sendSMSButtnCounterSec + ")");
    if (sendSMSButtnCounterSec <= 0) {
        clearInterval(sendSMSButtnCountersetInterval);
        $("#sendsmscodeforvotewxsms").removeClass("disabled");
        $("#sendsmscodeforvotewxsms").html("发送验证码");
        sendSMSButtnCounterSec = 60
    }
}
function showErrorMsgOnInvitecodePage(a) {
    $("#submitalert").html(a);
    $("#submitalert").addClass("alert-error");
    $("#submitalert").removeClass("alert-success");
    $("#submitalert").show()
}
function checkOpAction() {
    param = {
        action: "checkopaction",
        guid: guid
    };
    $.post("/op.php", param, function(a) {}, "json")
}
function initBgAudioPlayer() {
    $(".musicbox").show();
    bgplayer = document.getElementById("bgmedia");
    bgplayer.onplay = function() {
        if (!$("#audio_btn").hasClass("mplaying")) {
            $("#audio_btn").addClass("mplaying")
        }
    }
    ;
    bgplayer.onpause = function() {
        $("#audio_btn").removeClass("mplaying")
    }
    ;
    bgplayer.ontimeupdate = function(a) {
        if (!$("#audio_btn").hasClass("mplaying")) {
            $("#audio_btn").addClass("mplaying")
        }
    }
}
$(document).ready(function() {
    checkOpAction();
    if ($(".opvideo").length > 0) {
        addWxOPVideoNum()
    }
    reSetVideoIframe();
    wxparam_init = $("#wxparam").val();
    if (wxparam_init != "" && (getByHash(_lskey) == null || getByHash(_lskey) == false || getByHash(_lskey) != wxparam_init)) {
        if (ismustfollow == 1) {
            setByHash(_lskey, wxparam_init)
        }
    }
    $("#cancelfollowalert").click(function() {
        $(".dofollowalert").hide();
        return false
    });
    if ($("#optionbypage").is("input")) {
        if ($("#optionbypage").val() == 1) {}
    }
    autoSetWindowInWindowsWeixin();
    if ($("#showvotedescinfo").is("div")) {
        $("#showvotedescinfo").click(function() {
            if ($("#votedescinfo").css("display") == "none") {
                $("#votedescinfo").show();
                $("#showvotedescinfo .arrow").removeClass("icon-double-angle-down");
                $("#showvotedescinfo .arrow").addClass("icon-double-angle-up")
            } else {
                $("#votedescinfo").hide();
                $("#showvotedescinfo .arrow").removeClass("icon-double-angle-up");
                $("#showvotedescinfo .arrow").addClass("icon-double-angle-down")
            }
        })
    }
    initWxVoteBtnClk();
    if (wxsubmittype > 0) {
        if ($(".wxopradio input").length > 0) {
            $(".wxopradio input").each(function() {
                var b = $(this);
                b.iCheck({
                    checkboxClass: "icheckbox_line-grey",
                    radioClass: "iradio_line-grey",
                    insert: '<div class="icheck_line-icon"></div><span data-checked="' + checkedtxt + '"  data-unchecked="' + checktxt + '">' + checktxt + "</span>"
                })
            });
            $(".wxopradio input").on("ifChecked", function(b) {
                _span = $(this).parent().find("span");
                _span.html(_span.attr("data-checked"));
                setHadSelOpNum($(this), "add")
            });
            $(".wxopradio input").on("ifUnchecked", function(b) {
                _span = $(this).parent().find("span");
                _span.html(_span.attr("data-unchecked"));
                setHadSelOpNum($(this), "sub")
            })
        }
        $("#wxmoreselsubmitbtn").click(function() {
            if (doing) {
                return false
            }
            _clk = $(this);
            if (caninqq == 1 && caninweibo == 0) {
                if (isinqq == 0 && isinweixin == 0) {
                    _clk.html(votemorebtntxt);
                    showWapAlert("只能在微信或手机QQ内提交", true);
                    return false
                }
            } else {
                if (caninqq == 1 && caninweibo == 1) {
                    if (isinqq == 0 && isinweixin == 0 && isinweibo == 0) {
                        _clk.html(votemorebtntxt);
                        showWapAlert("只能在微信、手机QQ或手机微博内提交", true);
                        return false
                    }
                } else {
                    if (caninqq == 0 && caninweibo == 1) {
                        if (isinqq == 0 && isinweixin == 0 && isinweibo == 0) {
                            _clk.html(votemorebtntxt);
                            showWapAlert("只能在微信或手机微博内提交", true);
                            return false
                        }
                    } else {
                        if (isinweixin == 0) {
                            _clk.html(votemorebtntxt);
                            showWapAlert("只能在微信内提交", true);
                            return false
                        }
                    }
                }
            }
            if (expired == 1) {
                showWapAlert("活动已结束", true);
                return false
            }
            if (votenotstart == 1) {
                showWapAlert("活动尚未开始", true);
                return false
            }
            wxparam = "";
            needinwx = 0;
            if ($("#wxparam").is("input")) {
                wxparam = $("#wxparam").val();
                needinwx = 1
            }
            if (needinwx == 1) {
                if (wxparam == "" && isinweixin == 1) {
                    $(".dofollowalert").show();
                    return false
                }
            }
            if (!checkMoreSelNum(true)) {
                return false
            }
            if (needinputinvitecode == 1) {
                $(".invitecodeboxinvotealert").show();
                _clk.html(votemorebtntxt);
                voteclkbtn = _clk;
                doing = false;
                return false
            }
            if (needinputsmsverifycode == 1) {
                $(".smsverifycodevotealert").show();
                _clk.html(votemorebtntxt);
                voteclkbtn = _clk;
                doing = false;
                return false
            }
            ops = "";
            $(".wxopradio input:checked").each(function() {
                ops += ops == "" ? $(this).val() : "|" + $(this).val()
            });
            _clk = $(this);
            param = {
                action: "dovote",
                guid: guid,
                ops: ops
            };
            param.wxparam = wxparam;
            doing = true;
            $(this).html(dovoting);
            _clk = $(this);
            $.post("/op.php", param, function(b) {
                doing = false;
                if (b.ret == 1) {
                    _clk.html(votedalert);
                    $(".wxopradio input:checked").each(function() {
                        _checkedval = $(this).val();
                        _newcknum = parseInt($("#wxinfo_" + _checkedval + " span").html());
                        _newcknum = _newcknum + 1;
                        $("#wxinfo_" + _checkedval + " span").html(_newcknum)
                    });
                    if (b.retinfo.jumpaftervote == 1) {
                        showWapAlertHideByTime(votesusalert, true, 1500);
                        jump2UrlByTime(b.retinfo.jumpaftervoteurl, 1500)
                    } else {
                        showWapAlert(votesusalert, true)
                    }
                } else {
                    showWapAlertHideByTime(b.retinfo.errormsg, true, 5000);
                    _clk.html(votemorebtntxt)
                }
            }, "json")
        })
    }
    bindBuyGiftButton();
    $(".giftpagelist li").click(function() {
        _clk = $(this);
        if (expired == 1) {
            $("#dobuygift").html("活动已结束");
            $("#dobuygift").addClass("disabled")
        }
        $(".buygiftconfirmboxbg").show();
        $(".onegiftbox .giftname").html(_clk.find(".name").html());
        $(".onegiftbox img").attr("src", _clk.find("img").attr("src"));
        $(".giftpointinfo").html(_clk.find(".point").html());
        $(".buygiftconfirmboxbg #addp").html(_clk.find(".point").attr("name"));
        $(".priceinfo span").html(_clk.attr("name"));
        _giftmid = $(this).attr("id");
        $("#dobuygift").unbind("click");
        $("#dobuygift").click(function() {
            _thisclk = $(this);
            if (expired == 1) {
                _thisclk.html("活动已结束");
                _thisclk.addClass("disabled")
            }
            if (doing) {
                return false
            }
            if (openid == "") {
                showWapAlert("请在微信中访问", true);
                return false
            }
            _clkhtml = $(this).html();
            _thisclk.html("正在生成订单，请稍后...");
            doing = true;
            param = {};
            param.openid = openid;
            param.openidtime = openidtime;
            param.openidhash = openidhash;
            param.giftmid = _giftmid;
            param.guid = guid;
            param.guidobj = guidobj;
            param.action = "dobuygift";
            $.post("/op.php", param, function(b) {
                if (b.ret == 1) {
                    _thisclk.html("生成成功，正在跳转...");
                    window.location.href = b.retinfo.url
                } else {
                    doing = false;
                    showWapAlert(b.retinfo.errormsg, true);
                    _thisclk.html(_clkhtml)
                }
            }, "json");
            return false
        })
    });
    $(".buygiftconfirmboxbg #closegiftbox").click(function() {
        $(".buygiftconfirmboxbg").hide()
    });
    $("#submitcodeinvoteclose").click(function() {
        if ($(this).hasClass("disabled")) {
            return false
        }
        $(".invitecodeboxinvotealert").hide();
        $(".invitecodeboxinvotealert #submitalert").removeClass("alert-error");
        $(".invitecodeboxinvotealert #submitalert").removeClass("alert-success");
        $(".invitecodeboxinvotealert #submitalert").html(" ");
        $(".invitecodeboxinvotealert #submitalert").hide()
    });
    $("#submitsmsverifyboxclose").click(function() {
        if ($(this).hasClass("disabled")) {
            return false
        }
        $(".smsverifycodevotealert").hide();
        $(".smsverifycodevotealert #submitalert").removeClass("alert-error");
        $(".smsverifycodevotealert #submitalert").removeClass("alert-success");
        $(".smsverifycodevotealert #submitalert").html(" ");
        $(".smsverifycodevotealert #submitalert").hide()
    });
    $(".invitecodeboxinvotealert #submitcodeinvote").click(function() {
        if (doing) {
            return false
        }
        wxparam = $("#wxparam").val();
        $(".invitecodeboxinvotealert #submitalert").removeClass("alert-error");
        $(".invitecodeboxinvotealert #submitalert").removeClass("alert-success");
        $(".invitecodeboxinvotealert #submitalert").html("正在验证，请稍后....");
        $(".invitecodeboxinvotealert #submitalert").show();
        _codeinput = $("#invitecodeinput").val();
        if (_codeinput == "") {
            $(".invitecodeboxinvotealert #submitalert").html("请输入邀请码");
            $(".invitecodeboxinvotealert #submitalert").addClass("alert-error");
            $(".invitecodeboxinvotealert #submitalert").removeClass("alert-success");
            $(".invitecodeboxinvotealert #submitalert").show();
            return false
        }
        doing = true;
        params = {};
        params.action = "checkinvitecodeforintovote";
        params.objecttype = 0;
        params.guid = guid;
        params.wxparam = wxparam;
        params.code = _codeinput;
        $.post(serverroot + "op.php", params, function(b) {
            doing = false;
            if (b.ret == 1) {
                $(".invitecodeboxinvotealert #submitalert").html("验证成功，正在提交" + votebtntxt + "...");
                $(".invitecodeboxinvotealert #submitalert").removeClass("alert-error");
                $(".invitecodeboxinvotealert #submitalert").addClass("alert-success");
                $(".invitecodeboxinvotealert #submitalert").show();
                needinputinvitecode = 0;
                setTimeout('$(".invitecodeboxinvotealert").hide();', 500);
                setTimeout("voteclkbtn.click()", 600)
            } else {
                $(".invitecodeboxinvotealert #submitalert").html(b.retinfo.errormsg);
                $(".invitecodeboxinvotealert #submitalert").addClass("alert-error");
                $(".invitecodeboxinvotealert #submitalert").removeClass("alert-success");
                $(".invitecodeboxinvotealert #submitalert").show()
            }
        }, "json")
    });
    $("#sendvrcode").click(function() {
        if (doing) {
            return false
        }
        if ($(this).hasClass("disabled")) {
            return false
        }
        _mobile = $("#invitecodephoneinput").val();
        if (_mobile.length != 11) {
            showErrorMsgOnInvitecodePage("请输入有效的手机号码");
            return false
        }
        doing = true;
        $(this).addClass("disabled");
        $(this).html("正在发送");
        $("#submitalert").html("正在发送验证码...");
        $("#submitalert").removeClass("alert-error");
        $("#submitalert").show();
        wxparam = $("#wxparam").val();
        $.post("/op.php", {
            action: "sendmobilecodeforinvitecode",
            mobile: _mobile,
            guid: guid,
            wxparam: wxparam
        }, function(b) {
            doing = false;
            if (b.ret == 1) {
                smscoderequestid = b.retinfo.smscoderequestid;
                $("#submitalert").html("短信验证码已发送，请注意查收。");
                $("#submitalert").removeClass("alert-error");
                $("#submitalert").addClass("alert-success");
                $("#submitalert").show();
                sendSMSButtnCountersetInterval = setInterval(sendSMSButtnCounterForVote, 1000);
                $("#sendvrcode").addClass("disabled")
            } else {
                $("#sendvrcode").html("发送验证码");
                showErrorMsgOnInvitecodePage(b.retinfo.errormsg);
                $("#sendvrcode").removeClass("disabled")
            }
        }, "json");
        return false
    });
    $("#submitvrcode").click(function() {
        if (doing) {
            return false
        }
        if ($(this).hasClass("disabled")) {
            return false
        }
        _mobile = $("#invitecodephoneinput").val();
        if (_mobile.length != 11) {
            showErrorMsgOnInvitecodePage("请输入有效的手机号码");
            return false
        }
        _invitecodevrcodeinput = $("#invitecodevrcodeinput").val();
        if (_invitecodevrcodeinput.length != 6) {
            showErrorMsgOnInvitecodePage("请输入短信验证码");
            return false
        }
        $("#submitalert").hide();
        $(this).html(dovoting);
        $(this).addClass("disabled");
        $("#submitcodeinvoteclose").addClass("disabled");
        wxparam = $("#wxparam").val();
        doing = true;
        params = {};
        params.action = "checksmsinvitecodeforintovote";
        params.objecttype = 0;
        params.guid = guid;
        params.mobile = _mobile;
        params.wxparam = wxparam;
        params.smscode = _invitecodevrcodeinput;
        params.smscoderequestid = smscoderequestid;
        $.post(serverroot + "op.php", params, function(b) {
            doing = false;
            if (b.ret == 1) {
                $("#submitvrcode").hide();
                $("#submitalert").html("验证成功，正在提交投票....");
                $("#submitalert").removeClass("alert-error");
                $("#submitalert").addClass("alert-success");
                $("#submitalert").show();
                needinputinvitecode = 0;
                setTimeout('$(".invitecodeboxinvotealert").hide();', 500);
                setTimeout("voteclkbtn.click()", 600)
            } else {
                doing = false;
                showErrorMsgOnInvitecodePage(b.retinfo.errormsg);
                $("#submitvrcode").html("提交");
                $("#submitvrcode").show();
                $("#submitvrcode").removeClass("disabled");
                $("#submitcodeinvoteclose").removeClass("disabled")
            }
        }, "json")
    });
    $("#sendsmscodeforvotewxsms").click(function() {
        if (doing) {
            return false
        }
        if ($(this).hasClass("disabled")) {
            return false
        }
        _mobile = $("#invitecodephoneinput").val();
        if (_mobile.length != 11) {
            showErrorMsgOnInvitecodePage("请输入有效的手机号码");
            return false
        }
        doing = true;
        $(this).addClass("disabled");
        $(this).html("正在发送");
        $("#submitalert").html("正在发送验证码...");
        $("#submitalert").removeClass("alert-error");
        $("#submitalert").show();
        wxparam = $("#wxparam").val();
        $.post("/op.php", {
            action: "sendmobilecodeforwxsmscode",
            mobile: _mobile,
            guid: guid,
            wxparam: wxparam
        }, function(b) {
            doing = false;
            if (b.ret == 1) {
                smscoderequestid = b.retinfo.smscoderequestid;
                $("#submitalert").html("短信验证码已发送，请注意查收。");
                $("#submitalert").removeClass("alert-error");
                $("#submitalert").addClass("alert-success");
                $("#submitalert").show();
                sendSMSButtnCountersetInterval = setInterval(sendSMSButtnCounterForVoteWXSMS, 1000);
                $("#sendsmscodeforvotewxsms").addClass("disabled")
            } else {
                $("#sendsmscodeforvotewxsms").html("发送验证码");
                showErrorMsgOnInvitecodePage(b.retinfo.errormsg);
                $("#sendsmscodeforvotewxsms").removeClass("disabled")
            }
        }, "json");
        return false
    });
    $("#submitsmscode").click(function() {
        if (doing) {
            return false
        }
        if ($(this).hasClass("disabled")) {
            return false
        }
        _mobile = $("#invitecodephoneinput").val();
        if (_mobile.length != 11) {
            showErrorMsgOnInvitecodePage("请输入有效的手机号码");
            return false
        }
        _invitecodevrcodeinput = $("#invitecodevrcodeinput").val();
        if (_invitecodevrcodeinput.length != 6) {
            showErrorMsgOnInvitecodePage("请输入短信验证码");
            return false
        }
        $("#submitsmscode").hide();
        $(this).html(dovoting);
        $(this).addClass("disabled");
        $("#submitsmsverifyboxclose").addClass("disabled");
        wxparam = $("#wxparam").val();
        doing = true;
        params = {};
        params.action = "checksmscodeforwxsmsvote";
        params.objecttype = 0;
        params.guid = guid;
        params.mobile = _mobile;
        params.wxparam = wxparam;
        params.smscode = _invitecodevrcodeinput;
        params.smscoderequestid = smscoderequestid;
        $.post(serverroot + "op.php", params, function(b) {
            doing = false;
            if (b.ret == 1) {
                $("#submitsmscode").hide();
                $("#submitalert").html("验证成功，正在提交投票....");
                $("#submitalert").removeClass("alert-error");
                $("#submitalert").addClass("alert-success");
                $("#submitalert").show();
                needinputsmsverifycode = 0;
                setTimeout('$(".smsverifycodevotealert").hide();', 500);
                setTimeout("voteclkbtn.click()", 600)
            } else {
                doing = false;
                showErrorMsgOnInvitecodePage(b.retinfo.errormsg);
                $("#submitsmscode").html("提交");
                $("#submitsmscode").show();
                $("#submitsmscode").removeClass("disabled");
                $("#submitsmsverifyboxclose").removeClass("disabled")
            }
        }, "json")
    });
    $("#invitecodevrcodeinput").keydown(function() {
        $(window).scrollTop(0)
    });
    $("#invitecodephoneinput").keydown(function() {
        $(window).scrollTop(0)
    });
    if (showsnowfall == 1) {
        setTimeout("showSnowFall()", 1000)
    }
    if (expired == 0) {
        try {} catch (a) {}
    }
    if (playbgmusic == 1) {
        initBgAudioPlayer();
        $("#audio_btn").click(function() {
            if (!$(this).hasClass("mplaying")) {
                bgplayer.play()
            } else {
                bgplayer.pause()
            }
        })
    }
});

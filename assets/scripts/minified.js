var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e();
}(this, function () {
  "use strict";
  for (var t = "undefined" != typeof window && "undefined" != typeof document, e = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < e.length; i += 1) {
    if (t && navigator.userAgent.indexOf(e[i]) >= 0) {
      n = 1;break;
    }
  }var o = t && window.Promise ? function (t) {
    var e = !1;return function () {
      e || (e = !0, window.Promise.resolve().then(function () {
        e = !1, t();
      }));
    };
  } : function (t) {
    var e = !1;return function () {
      e || (e = !0, setTimeout(function () {
        e = !1, t();
      }, n));
    };
  };function r(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }function a(t, e) {
    if (1 !== t.nodeType) return [];var n = t.ownerDocument.defaultView.getComputedStyle(t, null);return e ? n[e] : n;
  }function s(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }function l(t) {
    if (!t) return document.body;switch (t.nodeName) {case "HTML":case "BODY":
        return t.ownerDocument.body;case "#document":
        return t.body;}var e = a(t),
        n = e.overflow,
        i = e.overflowX,
        o = e.overflowY;return (/(auto|scroll|overlay)/.test(n + o + i) ? t : l(s(t))
    );
  }var c = t && !(!window.MSInputMethodContext || !document.documentMode),
      d = t && /MSIE 10/.test(navigator.userAgent);function u(t) {
    return 11 === t ? c : 10 === t ? d : c || d;
  }function h(t) {
    if (!t) return document.documentElement;for (var e = u(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) {
      n = (t = t.nextElementSibling).offsetParent;
    }var i = n && n.nodeName;return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === a(n, "position") ? h(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
  }function f(t) {
    return null !== t.parentNode ? f(t.parentNode) : t;
  }function p(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        o = n ? e : t,
        r = document.createRange();r.setStart(i, 0), r.setEnd(o, 0);var a,
        s,
        l = r.commonAncestorContainer;if (t !== l && e !== l || i.contains(o)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && h(a.firstElementChild) !== a ? h(l) : l;var c = f(t);return c.host ? p(c.host, e) : p(t, f(e).host);
  }function m(t) {
    var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = t.nodeName;if ("BODY" === n || "HTML" === n) {
      var i = t.ownerDocument.documentElement;return (t.ownerDocument.scrollingElement || i)[e];
    }return t[e];
  }function g(t, e) {
    var n = "x" === e ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
  }function v(t, e, n, i) {
    return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], u(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0);
  }function y(t) {
    var e = t.body,
        n = t.documentElement,
        i = u(10) && getComputedStyle(n);return { height: v("Height", e, n, i), width: v("Width", e, n, i) };
  }var b = function b(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  },
      _ = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(),
      w = function w(t, e, n) {
    return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
  },
      C = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
    }return t;
  };function E(t) {
    return C({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }function D(t) {
    var e = {};try {
      if (u(10)) {
        e = t.getBoundingClientRect();var n = m(t, "top"),
            i = m(t, "left");e.top += n, e.left += i, e.bottom += n, e.right += i;
      } else e = t.getBoundingClientRect();
    } catch (t) {}var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
        r = "HTML" === t.nodeName ? y(t.ownerDocument) : {},
        s = r.width || t.clientWidth || o.right - o.left,
        l = r.height || t.clientHeight || o.bottom - o.top,
        c = t.offsetWidth - s,
        d = t.offsetHeight - l;if (c || d) {
      var h = a(t);c -= g(h, "x"), d -= g(h, "y"), o.width -= c, o.height -= d;
    }return E(o);
  }function S(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = u(10),
        o = "HTML" === e.nodeName,
        r = D(t),
        s = D(e),
        c = l(t),
        d = a(e),
        h = parseFloat(d.borderTopWidth, 10),
        f = parseFloat(d.borderLeftWidth, 10);n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));var p = E({ top: r.top - s.top - h, left: r.left - s.left - f, width: r.width, height: r.height });if (p.marginTop = 0, p.marginLeft = 0, !i && o) {
      var g = parseFloat(d.marginTop, 10),
          v = parseFloat(d.marginLeft, 10);p.top -= h - g, p.bottom -= h - g, p.left -= f - v, p.right -= f - v, p.marginTop = g, p.marginLeft = v;
    }return (i && !n ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (p = function (t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = m(e, "top"),
          o = m(e, "left"),
          r = n ? -1 : 1;return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t;
    }(p, e)), p;
  }function T(t) {
    if (!t || !t.parentElement || u()) return document.documentElement;for (var e = t.parentElement; e && "none" === a(e, "transform");) {
      e = e.parentElement;
    }return e || document.documentElement;
  }function x(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = { top: 0, left: 0 },
        c = o ? T(t) : p(t, e);if ("viewport" === i) r = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = S(t, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          a = e ? 0 : m(n),
          s = e ? 0 : m(n, "left");return E({ top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: o, height: r });
    }(c, o);else {
      var d = void 0;"scrollParent" === i ? "BODY" === (d = l(s(e))).nodeName && (d = t.ownerDocument.documentElement) : d = "window" === i ? t.ownerDocument.documentElement : i;var u = S(d, c, o);if ("HTML" !== d.nodeName || function t(e) {
        var n = e.nodeName;if ("BODY" === n || "HTML" === n) return !1;if ("fixed" === a(e, "position")) return !0;var i = s(e);return !!i && t(i);
      }(c)) r = u;else {
        var h = y(t.ownerDocument),
            f = h.height,
            g = h.width;r.top += u.top - u.marginTop, r.bottom = f + u.top, r.left += u.left - u.marginLeft, r.right = g + u.left;
      }
    }var v = "number" == typeof (n = n || 0);return r.left += v ? n : n.left || 0, r.top += v ? n : n.top || 0, r.right -= v ? n : n.right || 0, r.bottom -= v ? n : n.bottom || 0, r;
  }function I(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === t.indexOf("auto")) return t;var a = x(n, i, r, o),
        s = { top: { width: a.width, height: e.top - a.top }, right: { width: a.right - e.right, height: a.height }, bottom: { width: a.width, height: a.bottom - e.bottom }, left: { width: e.left - a.left, height: a.height } },
        l = Object.keys(s).map(function (t) {
      return C({ key: t }, s[t], { area: (e = s[t], e.width * e.height) });var e;
    }).sort(function (t, e) {
      return e.area - t.area;
    }),
        c = l.filter(function (t) {
      var e = t.width,
          i = t.height;return e >= n.clientWidth && i >= n.clientHeight;
    }),
        d = c.length > 0 ? c[0].key : l[0].key,
        u = t.split("-")[1];return d + (u ? "-" + u : "");
  }function k(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return S(n, i ? T(e) : p(e, n), i);
  }function A(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
        n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
        i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }function M(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }function O(t, e, n) {
    n = n.split("-")[0];var i = A(t),
        o = { width: i.width, height: i.height },
        r = -1 !== ["right", "left"].indexOf(n),
        a = r ? "top" : "left",
        s = r ? "left" : "top",
        l = r ? "height" : "width",
        c = r ? "width" : "height";return o[a] = e[a] + e[l] / 2 - i[l] / 2, o[s] = n === s ? e[s] - i[c] : e[M(s)], o;
  }function N(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }function P(t, e, n) {
    return (void 0 === n ? t : t.slice(0, function (t, e, n) {
      if (Array.prototype.findIndex) return t.findIndex(function (t) {
        return t[e] === n;
      });var i = N(t, function (t) {
        return t[e] === n;
      });return t.indexOf(i);
    }(t, "name", n))).forEach(function (t) {
      t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = t.function || t.fn;t.enabled && r(n) && (e.offsets.popper = E(e.offsets.popper), e.offsets.reference = E(e.offsets.reference), e = n(e, t));
    }), e;
  }function L(t, e) {
    return t.some(function (t) {
      var n = t.name;return t.enabled && n === e;
    });
  }function F(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
      var o = e[i],
          r = o ? "" + o + n : t;if (void 0 !== document.body.style[r]) return r;
    }return null;
  }function j(t) {
    var e = t.ownerDocument;return e ? e.defaultView : window;
  }function H(t, e, n, i) {
    n.updateBound = i, j(t).addEventListener("resize", n.updateBound, { passive: !0 });var o = l(t);return function t(e, n, i, o) {
      var r = "BODY" === e.nodeName,
          a = r ? e.ownerDocument.defaultView : e;a.addEventListener(n, i, { passive: !0 }), r || t(l(a.parentNode), n, i, o), o.push(a);
    }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
  }function z() {
    var t, e;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, j(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
      t.removeEventListener("scroll", e.updateBound);
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
  }function W(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }function R(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && W(e[n]) && (i = "px"), t.style[n] = e[n] + i;
    });
  }var B = t && /Firefox/i.test(navigator.userAgent);function q(t, e, n) {
    var i = N(t, function (t) {
      return t.name === e;
    }),
        o = !!i && t.some(function (t) {
      return t.name === n && t.enabled && t.order < i.order;
    });if (!o) {
      var r = "`" + e + "`",
          a = "`" + n + "`";console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
    }return o;
  }var U = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      Y = U.slice(3);function K(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Y.indexOf(t),
        i = Y.slice(n + 1).concat(Y.slice(0, n));return e ? i.reverse() : i;
  }var V = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function Q(t, e, n, i) {
    var o = [0, 0],
        r = -1 !== ["right", "left"].indexOf(i),
        a = t.split(/(\+|\-)/).map(function (t) {
      return t.trim();
    }),
        s = a.indexOf(N(a, function (t) {
      return -1 !== t.search(/,|\s/);
    }));a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
        c = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];return (c = c.map(function (t, i) {
      var o = (1 === i ? !r : r) ? "height" : "width",
          a = !1;return t.reduce(function (t, e) {
        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e);
      }, []).map(function (t) {
        return function (t, e, n, i) {
          var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              r = +o[1],
              a = o[2];if (!r) return t;if (0 === a.indexOf("%")) {
            var s = void 0;switch (a) {case "%p":
                s = n;break;case "%":case "%r":default:
                s = i;}return E(s)[e] / 100 * r;
          }if ("vh" === a || "vw" === a) return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;return r;
        }(t, o, e, n);
      });
    })).forEach(function (t, e) {
      t.forEach(function (n, i) {
        W(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
      });
    }), o;
  }var $ = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];if (i) {
            var o = t.offsets,
                r = o.reference,
                a = o.popper,
                s = -1 !== ["bottom", "top"].indexOf(n),
                l = s ? "left" : "top",
                c = s ? "width" : "height",
                d = { start: w({}, l, r[l]), end: w({}, l, r[l] + r[c] - a[c]) };t.offsets.popper = C({}, a, d[i]);
          }return t;
        } }, offset: { order: 200, enabled: !0, fn: function fn(t, e) {
          var n = e.offset,
              i = t.placement,
              o = t.offsets,
              r = o.popper,
              a = o.reference,
              s = i.split("-")[0],
              l = void 0;return l = W(+n) ? [+n, 0] : Q(n, r, a, s), "left" === s ? (r.top += l[0], r.left -= l[1]) : "right" === s ? (r.top += l[0], r.left += l[1]) : "top" === s ? (r.left += l[0], r.top -= l[1]) : "bottom" === s && (r.left += l[0], r.top += l[1]), t.popper = r, t;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(t, e) {
          var n = e.boundariesElement || h(t.instance.popper);t.instance.reference === n && (n = h(n));var i = F("transform"),
              o = t.instance.popper.style,
              r = o.top,
              a = o.left,
              s = o[i];o.top = "", o.left = "", o[i] = "";var l = x(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);o.top = r, o.left = a, o[i] = s, e.boundaries = l;var c = e.priority,
              d = t.offsets.popper,
              u = { primary: function primary(t) {
              var n = d[t];return d[t] < l[t] && !e.escapeWithReference && (n = Math.max(d[t], l[t])), w({}, t, n);
            }, secondary: function secondary(t) {
              var n = "right" === t ? "left" : "top",
                  i = d[n];return d[t] > l[t] && !e.escapeWithReference && (i = Math.min(d[n], l[t] - ("right" === t ? d.width : d.height))), w({}, n, i);
            } };return c.forEach(function (t) {
            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";d = C({}, d, u[e](t));
          }), t.offsets.popper = d, t;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(t) {
          var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              a = -1 !== ["top", "bottom"].indexOf(o),
              s = a ? "right" : "bottom",
              l = a ? "left" : "top",
              c = a ? "width" : "height";return n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])), t;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(t, e) {
          var n;if (!q(t.instance.modifiers, "arrow", "keepTogether")) return t;var i = e.element;if ("string" == typeof i) {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;var o = t.placement.split("-")[0],
              r = t.offsets,
              s = r.popper,
              l = r.reference,
              c = -1 !== ["left", "right"].indexOf(o),
              d = c ? "height" : "width",
              u = c ? "Top" : "Left",
              h = u.toLowerCase(),
              f = c ? "left" : "top",
              p = c ? "bottom" : "right",
              m = A(i)[d];l[p] - m < s[h] && (t.offsets.popper[h] -= s[h] - (l[p] - m)), l[h] + m > s[p] && (t.offsets.popper[h] += l[h] + m - s[p]), t.offsets.popper = E(t.offsets.popper);var g = l[h] + l[d] / 2 - m / 2,
              v = a(t.instance.popper),
              y = parseFloat(v["margin" + u], 10),
              b = parseFloat(v["border" + u + "Width"], 10),
              _ = g - t.offsets.popper[h] - y - b;return _ = Math.max(Math.min(s[d] - m, _), 0), t.arrowElement = i, t.offsets.arrow = (w(n = {}, h, Math.round(_)), w(n, f, ""), n), t;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(t, e) {
          if (L(t.instance.modifiers, "inner")) return t;if (t.flipped && t.placement === t.originalPlacement) return t;var n = x(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
              i = t.placement.split("-")[0],
              o = M(i),
              r = t.placement.split("-")[1] || "",
              a = [];switch (e.behavior) {case V.FLIP:
              a = [i, o];break;case V.CLOCKWISE:
              a = K(i);break;case V.COUNTERCLOCKWISE:
              a = K(i, !0);break;default:
              a = e.behavior;}return a.forEach(function (s, l) {
            if (i !== s || a.length === l + 1) return t;i = t.placement.split("-")[0], o = M(i);var c = t.offsets.popper,
                d = t.offsets.reference,
                u = Math.floor,
                h = "left" === i && u(c.right) > u(d.left) || "right" === i && u(c.left) < u(d.right) || "top" === i && u(c.bottom) > u(d.top) || "bottom" === i && u(c.top) < u(d.bottom),
                f = u(c.left) < u(n.left),
                p = u(c.right) > u(n.right),
                m = u(c.top) < u(n.top),
                g = u(c.bottom) > u(n.bottom),
                v = "left" === i && f || "right" === i && p || "top" === i && m || "bottom" === i && g,
                y = -1 !== ["top", "bottom"].indexOf(i),
                b = !!e.flipVariations && (y && "start" === r && f || y && "end" === r && p || !y && "start" === r && m || !y && "end" === r && g),
                _ = !!e.flipVariationsByContent && (y && "start" === r && p || y && "end" === r && f || !y && "start" === r && g || !y && "end" === r && m),
                w = b || _;(h || v || w) && (t.flipped = !0, (h || v) && (i = a[l + 1]), w && (r = function (t) {
              return "end" === t ? "start" : "start" === t ? "end" : t;
            }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = C({}, t.offsets.popper, O(t.instance.popper, t.offsets.reference, t.placement)), t = P(t.instance.modifiers, t, "flip"));
          }), t;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              a = -1 !== ["left", "right"].indexOf(n),
              s = -1 === ["top", "left"].indexOf(n);return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0), t.placement = M(e), t.offsets.popper = E(o), t;
        } }, hide: { order: 800, enabled: !0, fn: function fn(t) {
          if (!q(t.instance.modifiers, "hide", "preventOverflow")) return t;var e = t.offsets.reference,
              n = N(t.instance.modifiers, function (t) {
            return "preventOverflow" === t.name;
          }).boundaries;if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
            if (!0 === t.hide) return t;t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === t.hide) return t;t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
          }return t;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(t, e) {
          var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = N(t.instance.modifiers, function (t) {
            return "applyStyle" === t.name;
          }).gpuAcceleration;void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a = void 0 !== r ? r : e.gpuAcceleration,
              s = h(t.instance.popper),
              l = D(s),
              c = { position: o.position },
              d = function (t, e) {
            var n = t.offsets,
                i = n.popper,
                o = n.reference,
                r = Math.round,
                a = Math.floor,
                s = function s(t) {
              return t;
            },
                l = r(o.width),
                c = r(i.width),
                d = -1 !== ["left", "right"].indexOf(t.placement),
                u = -1 !== t.placement.indexOf("-"),
                h = e ? d || u || l % 2 == c % 2 ? r : a : s,
                f = e ? r : s;return { left: h(l % 2 == 1 && c % 2 == 1 && !u && e ? i.left - 1 : i.left), top: f(i.top), bottom: f(i.bottom), right: h(i.right) };
          }(t, window.devicePixelRatio < 2 || !B),
              u = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              p = F("transform"),
              m = void 0,
              g = void 0;if (g = "bottom" === u ? "HTML" === s.nodeName ? -s.clientHeight + d.bottom : -l.height + d.bottom : d.top, m = "right" === f ? "HTML" === s.nodeName ? -s.clientWidth + d.right : -l.width + d.right : d.left, a && p) c[p] = "translate3d(" + m + "px, " + g + "px, 0)", c[u] = 0, c[f] = 0, c.willChange = "transform";else {
            var v = "bottom" === u ? -1 : 1,
                y = "right" === f ? -1 : 1;c[u] = g * v, c[f] = m * y, c.willChange = u + ", " + f;
          }var b = { "x-placement": t.placement };return t.attributes = C({}, b, t.attributes), t.styles = C({}, c, t.styles), t.arrowStyles = C({}, t.offsets.arrow, t.arrowStyles), t;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(t) {
          var e, n;return R(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
          }), t.arrowElement && Object.keys(t.arrowStyles).length && R(t.arrowElement, t.arrowStyles), t;
        }, onLoad: function onLoad(t, e, n, i, o) {
          var r = k(o, e, t, n.positionFixed),
              a = I(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return e.setAttribute("x-placement", a), R(e, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } },
      G = function () {
    function t(e, n) {
      var i = this,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};b(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = o(this.update.bind(this)), this.options = C({}, t.Defaults, a), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(C({}, t.Defaults.modifiers, a.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = C({}, t.Defaults.modifiers[e] || {}, a.modifiers ? a.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
        return C({ name: t }, i.options.modifiers[t]);
      }).sort(function (t, e) {
        return t.order - e.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && r(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();var s = this.options.eventsEnabled;s && this.enableEventListeners(), this.state.eventsEnabled = s;
    }return _(t, [{ key: "update", value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };t.offsets.reference = k(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = I(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = O(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = P(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
          }
        }.call(this);
      } }, { key: "destroy", value: function value() {
        return function () {
          return this.state.isDestroyed = !0, L(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[F("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      } }, { key: "enableEventListeners", value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      } }, { key: "disableEventListeners", value: function value() {
        return z.call(this);
      } }]), t;
  }();return G.Utils = ("undefined" != typeof window ? window : global).PopperUtils, G.placements = U, G.Defaults = $, G;
}), function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper);
}(this, function (t, e, n) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
  }function a(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      }))), i.forEach(function (e) {
        r(t, e, n[e]);
      });
    }return t;
  }e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;var s = "transitionend";function l(t) {
    var n = this,
        i = !1;return e(this).one(c.TRANSITION_END, function () {
      i = !0;
    }), setTimeout(function () {
      i || c.triggerTransitionEnd(n);
    }, t), this;
  }var c = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));return t;
    }, getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");if (!e || "#" === e) {
        var n = t.getAttribute("href");e = n && "#" !== n ? n.trim() : "";
      }try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;var n = e(t).css("transition-duration"),
          i = e(t).css("transition-delay"),
          o = parseFloat(n),
          r = parseFloat(i);return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
    }, reflow: function reflow(t) {
      return t.offsetHeight;
    }, triggerTransitionEnd: function triggerTransitionEnd(t) {
      e(t).trigger(s);
    }, supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(s);
    }, isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    }, typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = e[i],
              a = r && c.isElement(r) ? "element" : (s = r, {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".');
        }
      }var s;
    }, findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();return e instanceof ShadowRoot ? e : null;
      }return t instanceof ShadowRoot ? t : t.parentNode ? c.findShadowRoot(t.parentNode) : null;
    } };e.fn.emulateTransitionEnd = l, e.event.special[c.TRANSITION_END] = { bindType: s, delegateType: s, handle: function handle(t) {
      if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    } };var d = e.fn.alert,
      u = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
      h = "alert",
      f = "fade",
      p = "show",
      m = function () {
    function t(t) {
      this._element = t;
    }var n = t.prototype;return n.close = function (t) {
      var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, n.dispose = function () {
      e.removeData(this._element, "bs.alert"), this._element = null;
    }, n._getRootElement = function (t) {
      var n = c.getSelectorFromElement(t),
          i = !1;return n && (i = document.querySelector(n)), i || (i = e(t).closest("." + h)[0]), i;
    }, n._triggerCloseEvent = function (t) {
      var n = e.Event(u.CLOSE);return e(t).trigger(n), n;
    }, n._removeElement = function (t) {
      var n = this;if (e(t).removeClass(p), e(t).hasClass(f)) {
        var i = c.getTransitionDurationFromElement(t);e(t).one(c.TRANSITION_END, function (e) {
          return n._destroyElement(t, e);
        }).emulateTransitionEnd(i);
      } else this._destroyElement(t);
    }, n._destroyElement = function (t) {
      e(t).detach().trigger(u.CLOSED).remove();
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this),
            o = i.data("bs.alert");o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this);
      });
    }, t._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, o(t, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }]), t;
  }();e(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m())), e.fn.alert = m._jQueryInterface, e.fn.alert.Constructor = m, e.fn.alert.noConflict = function () {
    return e.fn.alert = d, m._jQueryInterface;
  };var g = e.fn.button,
      v = "active",
      y = "btn",
      b = "focus",
      _ = '[data-toggle^="button"]',
      w = '[data-toggle="buttons"]',
      C = 'input:not([type="hidden"])',
      E = ".active",
      D = ".btn",
      S = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
      T = function () {
    function t(t) {
      this._element = t;
    }var n = t.prototype;return n.toggle = function () {
      var t = !0,
          n = !0,
          i = e(this._element).closest(w)[0];if (i) {
        var o = this._element.querySelector(C);if (o) {
          if ("radio" === o.type) if (o.checked && this._element.classList.contains(v)) t = !1;else {
            var r = i.querySelector(E);r && e(r).removeClass(v);
          }if (t) {
            if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;o.checked = !this._element.classList.contains(v), e(o).trigger("change");
          }o.focus(), n = !1;
        }
      }n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)), t && e(this._element).toggleClass(v);
    }, n.dispose = function () {
      e.removeData(this._element, "bs.button"), this._element = null;
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this).data("bs.button");i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]();
      });
    }, o(t, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }]), t;
  }();e(document).on(S.CLICK_DATA_API, _, function (t) {
    t.preventDefault();var n = t.target;e(n).hasClass(y) || (n = e(n).closest(D)), T._jQueryInterface.call(e(n), "toggle");
  }).on(S.FOCUS_BLUR_DATA_API, _, function (t) {
    var n = e(t.target).closest(D)[0];e(n).toggleClass(b, /^focus(in)?$/.test(t.type));
  }), e.fn.button = T._jQueryInterface, e.fn.button.Constructor = T, e.fn.button.noConflict = function () {
    return e.fn.button = g, T._jQueryInterface;
  };var x = "carousel",
      I = ".bs.carousel",
      k = e.fn[x],
      A = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
      M = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
      O = "next",
      N = "prev",
      P = "left",
      L = "right",
      F = { SLIDE: "slide.bs.carousel", SLID: "slid.bs.carousel", KEYDOWN: "keydown.bs.carousel", MOUSEENTER: "mouseenter.bs.carousel", MOUSELEAVE: "mouseleave.bs.carousel", TOUCHSTART: "touchstart.bs.carousel", TOUCHMOVE: "touchmove.bs.carousel", TOUCHEND: "touchend.bs.carousel", POINTERDOWN: "pointerdown.bs.carousel", POINTERUP: "pointerup.bs.carousel", DRAG_START: "dragstart.bs.carousel", LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
      j = "carousel",
      H = "active",
      z = "slide",
      W = "carousel-item-right",
      R = "carousel-item-left",
      B = "carousel-item-next",
      q = "carousel-item-prev",
      U = "pointer-event",
      Y = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", ITEM_IMG: ".carousel-item img", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
      K = { TOUCH: "touch", PEN: "pen" },
      V = function () {
    function t(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(Y.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }var n = t.prototype;return n.next = function () {
      this._isSliding || this._slide(O);
    }, n.nextWhenVisible = function () {
      !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
    }, n.prev = function () {
      this._isSliding || this._slide(N);
    }, n.pause = function (t) {
      t || (this._isPaused = !0), this._element.querySelector(Y.NEXT_PREV) && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, n.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, n.to = function (t) {
      var n = this;this._activeElement = this._element.querySelector(Y.ACTIVE_ITEM);var i = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one(F.SLID, function () {
        return n.to(t);
      });else {
        if (i === t) return this.pause(), void this.cycle();var o = t > i ? O : N;this._slide(o, this._items[t]);
      }
    }, n.dispose = function () {
      e(this._element).off(I), e.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, n._getConfig = function (t) {
      return t = a({}, A, t), c.typeCheckConfig(x, t, M), t;
    }, n._handleSwipe = function () {
      var t = Math.abs(this.touchDeltaX);if (!(t <= 40)) {
        var e = t / this.touchDeltaX;e > 0 && this.prev(), e < 0 && this.next();
      }
    }, n._addEventListeners = function () {
      var t = this;this._config.keyboard && e(this._element).on(F.KEYDOWN, function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && e(this._element).on(F.MOUSEENTER, function (e) {
        return t.pause(e);
      }).on(F.MOUSELEAVE, function (e) {
        return t.cycle(e);
      }), this._config.touch && this._addTouchEventListeners();
    }, n._addTouchEventListeners = function () {
      var t = this;if (this._touchSupported) {
        var n = function n(e) {
          t._pointerEvent && K[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
        },
            i = function i(e) {
          t._pointerEvent && K[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
            return t.cycle(e);
          }, 500 + t._config.interval));
        };e(this._element.querySelectorAll(Y.ITEM_IMG)).on(F.DRAG_START, function (t) {
          return t.preventDefault();
        }), this._pointerEvent ? (e(this._element).on(F.POINTERDOWN, function (t) {
          return n(t);
        }), e(this._element).on(F.POINTERUP, function (t) {
          return i(t);
        }), this._element.classList.add(U)) : (e(this._element).on(F.TOUCHSTART, function (t) {
          return n(t);
        }), e(this._element).on(F.TOUCHMOVE, function (e) {
          return function (e) {
            e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX;
          }(e);
        }), e(this._element).on(F.TOUCHEND, function (t) {
          return i(t);
        }));
      }
    }, n._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
          t.preventDefault(), this.prev();break;case 39:
          t.preventDefault(), this.next();}
    }, n._getItemIndex = function (t) {
      return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(Y.ITEM)) : [], this._items.indexOf(t);
    }, n._getItemByDirection = function (t, e) {
      var n = t === O,
          i = t === N,
          o = this._getItemIndex(e),
          r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;var a = (o + (t === N ? -1 : 1)) % this._items.length;return -1 === a ? this._items[this._items.length - 1] : this._items[a];
    }, n._triggerSlideEvent = function (t, n) {
      var i = this._getItemIndex(t),
          o = this._getItemIndex(this._element.querySelector(Y.ACTIVE_ITEM)),
          r = e.Event(F.SLIDE, { relatedTarget: t, direction: n, from: o, to: i });return e(this._element).trigger(r), r;
    }, n._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        var n = [].slice.call(this._indicatorsElement.querySelectorAll(Y.ACTIVE));e(n).removeClass(H);var i = this._indicatorsElement.children[this._getItemIndex(t)];i && e(i).addClass(H);
      }
    }, n._slide = function (t, n) {
      var i,
          o,
          r,
          a = this,
          s = this._element.querySelector(Y.ACTIVE_ITEM),
          l = this._getItemIndex(s),
          d = n || s && this._getItemByDirection(t, s),
          u = this._getItemIndex(d),
          h = Boolean(this._interval);if (t === O ? (i = R, o = B, r = P) : (i = W, o = q, r = L), d && e(d).hasClass(H)) this._isSliding = !1;else if (!this._triggerSlideEvent(d, r).isDefaultPrevented() && s && d) {
        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(d);var f = e.Event(F.SLID, { relatedTarget: d, direction: r, from: l, to: u });if (e(this._element).hasClass(z)) {
          e(d).addClass(o), c.reflow(d), e(s).addClass(i), e(d).addClass(i);var p = parseInt(d.getAttribute("data-interval"), 10);p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;var m = c.getTransitionDurationFromElement(s);e(s).one(c.TRANSITION_END, function () {
            e(d).removeClass(i + " " + o).addClass(H), e(s).removeClass(H + " " + o + " " + i), a._isSliding = !1, setTimeout(function () {
              return e(a._element).trigger(f);
            }, 0);
          }).emulateTransitionEnd(m);
        } else e(s).removeClass(H), e(d).addClass(H), this._isSliding = !1, e(this._element).trigger(f);h && this.cycle();
      }
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this).data("bs.carousel"),
            o = a({}, A, e(this).data());"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (o = a({}, o, n));var r = "string" == typeof n ? n : o.slide;if (i || (i = new t(this, o), e(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);else if ("string" == typeof r) {
          if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');i[r]();
        } else o.interval && o.ride && (i.pause(), i.cycle());
      });
    }, t._dataApiClickHandler = function (n) {
      var i = c.getSelectorFromElement(this);if (i) {
        var o = e(i)[0];if (o && e(o).hasClass(j)) {
          var r = a({}, e(o).data(), e(this).data()),
              s = this.getAttribute("data-slide-to");s && (r.interval = !1), t._jQueryInterface.call(e(o), r), s && e(o).data("bs.carousel").to(s), n.preventDefault();
        }
      }
    }, o(t, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return A;
      } }]), t;
  }();e(document).on(F.CLICK_DATA_API, Y.DATA_SLIDE, V._dataApiClickHandler), e(window).on(F.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(Y.DATA_RIDE)), n = 0, i = t.length; n < i; n++) {
      var o = e(t[n]);V._jQueryInterface.call(o, o.data());
    }
  }), e.fn[x] = V._jQueryInterface, e.fn[x].Constructor = V, e.fn[x].noConflict = function () {
    return e.fn[x] = k, V._jQueryInterface;
  };var Q = "collapse",
      $ = e.fn[Q],
      G = { toggle: !0, parent: "" },
      X = { toggle: "boolean", parent: "(string|element)" },
      J = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
      Z = "show",
      tt = "collapse",
      et = "collapsing",
      nt = "collapsed",
      it = "width",
      ot = "height",
      rt = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
      at = function () {
    function t(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var n = [].slice.call(document.querySelectorAll(rt.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            a = c.getSelectorFromElement(r),
            s = [].slice.call(document.querySelectorAll(a)).filter(function (e) {
          return e === t;
        });null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(r));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }var n = t.prototype;return n.toggle = function () {
      e(this._element).hasClass(Z) ? this.hide() : this.show();
    }, n.show = function () {
      var n,
          i,
          o = this;if (!this._isTransitioning && !e(this._element).hasClass(Z) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(rt.ACTIVES)).filter(function (t) {
        return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(tt);
      })).length && (n = null), !(n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
        var r = e.Event(J.SHOW);if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
          n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));var a = this._getDimension();e(this._element).removeClass(tt).addClass(et), this._element.style[a] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(nt).attr("aria-expanded", !0), this.setTransitioning(!0);var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
              l = c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END, function () {
            e(o._element).removeClass(et).addClass(tt).addClass(Z), o._element.style[a] = "", o.setTransitioning(!1), e(o._element).trigger(J.SHOWN);
          }).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px";
        }
      }
    }, n.hide = function () {
      var t = this;if (!this._isTransitioning && e(this._element).hasClass(Z)) {
        var n = e.Event(J.HIDE);if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
          var i = this._getDimension();this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), e(this._element).addClass(et).removeClass(tt).removeClass(Z);var o = this._triggerArray.length;if (o > 0) for (var r = 0; r < o; r++) {
            var a = this._triggerArray[r],
                s = c.getSelectorFromElement(a);if (null !== s) e([].slice.call(document.querySelectorAll(s))).hasClass(Z) || e(a).addClass(nt).attr("aria-expanded", !1);
          }this.setTransitioning(!0);this._element.style[i] = "";var l = c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END, function () {
            t.setTransitioning(!1), e(t._element).removeClass(et).addClass(tt).trigger(J.HIDDEN);
          }).emulateTransitionEnd(l);
        }
      }
    }, n.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, n.dispose = function () {
      e.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, n._getConfig = function (t) {
      return (t = a({}, G, t)).toggle = Boolean(t.toggle), c.typeCheckConfig(Q, t, X), t;
    }, n._getDimension = function () {
      return e(this._element).hasClass(it) ? it : ot;
    }, n._getParent = function () {
      var n,
          i = this;c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          r = [].slice.call(n.querySelectorAll(o));return e(r).each(function (e, n) {
        i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
      }), n;
    }, n._addAriaAndCollapsedClass = function (t, n) {
      var i = e(t).hasClass(Z);n.length && e(n).toggleClass(nt, !i).attr("aria-expanded", i);
    }, t._getTargetFromElement = function (t) {
      var e = c.getSelectorFromElement(t);return e ? document.querySelector(e) : null;
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this),
            o = i.data("bs.collapse"),
            r = a({}, G, i.data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {});if (!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || (o = new t(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');o[n]();
        }
      });
    }, o(t, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return G;
      } }]), t;
  }();e(document).on(J.CLICK_DATA_API, rt.DATA_TOGGLE, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();var n = e(this),
        i = c.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(i));e(o).each(function () {
      var t = e(this),
          i = t.data("bs.collapse") ? "toggle" : n.data();at._jQueryInterface.call(t, i);
    });
  }), e.fn[Q] = at._jQueryInterface, e.fn[Q].Constructor = at, e.fn[Q].noConflict = function () {
    return e.fn[Q] = $, at._jQueryInterface;
  };var st = "dropdown",
      lt = e.fn[st],
      ct = new RegExp("38|40|27"),
      dt = { HIDE: "hide.bs.dropdown", HIDDEN: "hidden.bs.dropdown", SHOW: "show.bs.dropdown", SHOWN: "shown.bs.dropdown", CLICK: "click.bs.dropdown", CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
      ut = "disabled",
      ht = "show",
      ft = "dropup",
      pt = "dropright",
      mt = "dropleft",
      gt = "dropdown-menu-right",
      vt = "position-static",
      yt = '[data-toggle="dropdown"]',
      bt = ".dropdown form",
      _t = ".dropdown-menu",
      wt = ".navbar-nav",
      Ct = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Et = "top-start",
      Dt = "top-end",
      St = "bottom-start",
      Tt = "bottom-end",
      xt = "right-start",
      It = "left-start",
      kt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
      At = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
      Mt = function () {
    function t(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }var i = t.prototype;return i.toggle = function () {
      if (!this._element.disabled && !e(this._element).hasClass(ut)) {
        var i = t._getParentFromElement(this._element),
            o = e(this._menu).hasClass(ht);if (t._clearMenus(), !o) {
          var r = { relatedTarget: this._element },
              a = e.Event(dt.SHOW, r);if (e(i).trigger(a), !a.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var s = this._element;"parent" === this._config.reference ? s = i : c.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(i).addClass(vt), this._popper = new n(s, this._menu, this._getPopperConfig());
            }"ontouchstart" in document.documentElement && 0 === e(i).closest(wt).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(ht), e(i).toggleClass(ht).trigger(e.Event(dt.SHOWN, r));
          }
        }
      }
    }, i.show = function () {
      if (!(this._element.disabled || e(this._element).hasClass(ut) || e(this._menu).hasClass(ht))) {
        var n = { relatedTarget: this._element },
            i = e.Event(dt.SHOW, n),
            o = t._getParentFromElement(this._element);e(o).trigger(i), i.isDefaultPrevented() || (e(this._menu).toggleClass(ht), e(o).toggleClass(ht).trigger(e.Event(dt.SHOWN, n)));
      }
    }, i.hide = function () {
      if (!this._element.disabled && !e(this._element).hasClass(ut) && e(this._menu).hasClass(ht)) {
        var n = { relatedTarget: this._element },
            i = e.Event(dt.HIDE, n),
            o = t._getParentFromElement(this._element);e(o).trigger(i), i.isDefaultPrevented() || (e(this._menu).toggleClass(ht), e(o).toggleClass(ht).trigger(e.Event(dt.HIDDEN, n)));
      }
    }, i.dispose = function () {
      e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, i.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, i._addEventListeners = function () {
      var t = this;e(this._element).on(dt.CLICK, function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, i._getConfig = function (t) {
      return t = a({}, this.constructor.Default, e(this._element).data(), t), c.typeCheckConfig(st, t, this.constructor.DefaultType), t;
    }, i._getMenuElement = function () {
      if (!this._menu) {
        var e = t._getParentFromElement(this._element);e && (this._menu = e.querySelector(_t));
      }return this._menu;
    }, i._getPlacement = function () {
      var t = e(this._element.parentNode),
          n = St;return t.hasClass(ft) ? (n = Et, e(this._menu).hasClass(gt) && (n = Dt)) : t.hasClass(pt) ? n = xt : t.hasClass(mt) ? n = It : e(this._menu).hasClass(gt) && (n = Tt), n;
    }, i._detectNavbar = function () {
      return e(this._element).closest(".navbar").length > 0;
    }, i._getOffset = function () {
      var t = this,
          e = {};return "function" == typeof this._config.offset ? e.fn = function (e) {
        return e.offsets = a({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e;
      } : e.offset = this._config.offset, e;
    }, i._getPopperConfig = function () {
      var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t;
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this).data("bs.dropdown");if (i || (i = new t(this, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? n : null), e(this).data("bs.dropdown", i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');i[n]();
        }
      });
    }, t._clearMenus = function (n) {
      if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var i = [].slice.call(document.querySelectorAll(yt)), o = 0, r = i.length; o < r; o++) {
        var a = t._getParentFromElement(i[o]),
            s = e(i[o]).data("bs.dropdown"),
            l = { relatedTarget: i[o] };if (n && "click" === n.type && (l.clickEvent = n), s) {
          var c = s._menu;if (e(a).hasClass(ht) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(a, n.target))) {
            var d = e.Event(dt.HIDE, l);e(a).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), e(c).removeClass(ht), e(a).removeClass(ht).trigger(e.Event(dt.HIDDEN, l)));
          }
        }
      }
    }, t._getParentFromElement = function (t) {
      var e,
          n = c.getSelectorFromElement(t);return n && (e = document.querySelector(n)), e || t.parentNode;
    }, t._dataApiKeydownHandler = function (n) {
      if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(_t).length)) : ct.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(ut))) {
        var i = t._getParentFromElement(this),
            o = e(i).hasClass(ht);if (o && (!o || 27 !== n.which && 32 !== n.which)) {
          var r = [].slice.call(i.querySelectorAll(Ct));if (0 !== r.length) {
            var a = r.indexOf(n.target);38 === n.which && a > 0 && a--, 40 === n.which && a < r.length - 1 && a++, a < 0 && (a = 0), r[a].focus();
          }
        } else {
          if (27 === n.which) {
            var s = i.querySelector(yt);e(s).trigger("focus");
          }e(this).trigger("click");
        }
      }
    }, o(t, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return kt;
      } }, { key: "DefaultType", get: function get() {
        return At;
      } }]), t;
  }();e(document).on(dt.KEYDOWN_DATA_API, yt, Mt._dataApiKeydownHandler).on(dt.KEYDOWN_DATA_API, _t, Mt._dataApiKeydownHandler).on(dt.CLICK_DATA_API + " " + dt.KEYUP_DATA_API, Mt._clearMenus).on(dt.CLICK_DATA_API, yt, function (t) {
    t.preventDefault(), t.stopPropagation(), Mt._jQueryInterface.call(e(this), "toggle");
  }).on(dt.CLICK_DATA_API, bt, function (t) {
    t.stopPropagation();
  }), e.fn[st] = Mt._jQueryInterface, e.fn[st].Constructor = Mt, e.fn[st].noConflict = function () {
    return e.fn[st] = lt, Mt._jQueryInterface;
  };var Ot = e.fn.modal,
      Nt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      Pt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
      Lt = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
      Ft = "modal-dialog-scrollable",
      jt = "modal-scrollbar-measure",
      Ht = "modal-backdrop",
      zt = "modal-open",
      Wt = "fade",
      Rt = "show",
      Bt = { DIALOG: ".modal-dialog", MODAL_BODY: ".modal-body", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top" },
      qt = function () {
    function t(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(Bt.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }var n = t.prototype;return n.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, n.show = function (t) {
      var n = this;if (!this._isShown && !this._isTransitioning) {
        e(this._element).hasClass(Wt) && (this._isTransitioning = !0);var i = e.Event(Lt.SHOW, { relatedTarget: t });e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(Lt.CLICK_DISMISS, Bt.DATA_DISMISS, function (t) {
          return n.hide(t);
        }), e(this._dialog).on(Lt.MOUSEDOWN_DISMISS, function () {
          e(n._element).one(Lt.MOUSEUP_DISMISS, function (t) {
            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return n._showElement(t);
        }));
      }
    }, n.hide = function (t) {
      var n = this;if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
        var i = e.Event(Lt.HIDE);if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
          this._isShown = !1;var o = e(this._element).hasClass(Wt);if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(Lt.FOCUSIN), e(this._element).removeClass(Rt), e(this._element).off(Lt.CLICK_DISMISS), e(this._dialog).off(Lt.MOUSEDOWN_DISMISS), o) {
            var r = c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END, function (t) {
              return n._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, n.dispose = function () {
      [window, this._element, this._dialog].forEach(function (t) {
        return e(t).off(".bs.modal");
      }), e(document).off(Lt.FOCUSIN), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, n.handleUpdate = function () {
      this._adjustDialog();
    }, n._getConfig = function (t) {
      return t = a({}, Nt, t), c.typeCheckConfig("modal", t, Pt), t;
    }, n._showElement = function (t) {
      var n = this,
          i = e(this._element).hasClass(Wt);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass(Ft) ? this._dialog.querySelector(Bt.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), e(this._element).addClass(Rt), this._config.focus && this._enforceFocus();var o = e.Event(Lt.SHOWN, { relatedTarget: t }),
          r = function r() {
        n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o);
      };if (i) {
        var a = c.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(c.TRANSITION_END, r).emulateTransitionEnd(a);
      } else r();
    }, n._enforceFocus = function () {
      var t = this;e(document).off(Lt.FOCUSIN).on(Lt.FOCUSIN, function (n) {
        document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus();
      });
    }, n._setEscapeEvent = function () {
      var t = this;this._isShown && this._config.keyboard ? e(this._element).on(Lt.KEYDOWN_DISMISS, function (e) {
        27 === e.which && (e.preventDefault(), t.hide());
      }) : this._isShown || e(this._element).off(Lt.KEYDOWN_DISMISS);
    }, n._setResizeEvent = function () {
      var t = this;this._isShown ? e(window).on(Lt.RESIZE, function (e) {
        return t.handleUpdate(e);
      }) : e(window).off(Lt.RESIZE);
    }, n._hideModal = function () {
      var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
        e(document.body).removeClass(zt), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(Lt.HIDDEN);
      });
    }, n._removeBackdrop = function () {
      this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
    }, n._showBackdrop = function (t) {
      var n = this,
          i = e(this._element).hasClass(Wt) ? Wt : "";if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = Ht, i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(Lt.CLICK_DISMISS, function (t) {
          n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
        }), i && c.reflow(this._backdrop), e(this._backdrop).addClass(Rt), !t) return;if (!i) return void t();var o = c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(o);
      } else if (!this._isShown && this._backdrop) {
        e(this._backdrop).removeClass(Rt);var r = function r() {
          n._removeBackdrop(), t && t();
        };if (e(this._element).hasClass(Wt)) {
          var a = c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(a);
        } else r();
      } else t && t();
    }, n._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, n._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, n._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, n._setScrollbar = function () {
      var t = this;if (this._isBodyOverflowing) {
        var n = [].slice.call(document.querySelectorAll(Bt.FIXED_CONTENT)),
            i = [].slice.call(document.querySelectorAll(Bt.STICKY_CONTENT));e(n).each(function (n, i) {
          var o = i.style.paddingRight,
              r = e(i).css("padding-right");e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
        }), e(i).each(function (n, i) {
          var o = i.style.marginRight,
              r = e(i).css("margin-right");e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px");
        });var o = document.body.style.paddingRight,
            r = e(document.body).css("padding-right");e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
      }e(document.body).addClass(zt);
    }, n._resetScrollbar = function () {
      var t = [].slice.call(document.querySelectorAll(Bt.FIXED_CONTENT));e(t).each(function (t, n) {
        var i = e(n).data("padding-right");e(n).removeData("padding-right"), n.style.paddingRight = i || "";
      });var n = [].slice.call(document.querySelectorAll("" + Bt.STICKY_CONTENT));e(n).each(function (t, n) {
        var i = e(n).data("margin-right");void 0 !== i && e(n).css("margin-right", i).removeData("margin-right");
      });var i = e(document.body).data("padding-right");e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || "";
    }, n._getScrollbarWidth = function () {
      var t = document.createElement("div");t.className = jt, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
    }, t._jQueryInterface = function (n, i) {
      return this.each(function () {
        var o = e(this).data("bs.modal"),
            r = a({}, Nt, e(this).data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {});if (o || (o = new t(this, r), e(this).data("bs.modal", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');o[n](i);
        } else r.show && o.show(i);
      });
    }, o(t, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return Nt;
      } }]), t;
  }();e(document).on(Lt.CLICK_DATA_API, Bt.DATA_TOGGLE, function (t) {
    var n,
        i = this,
        o = c.getSelectorFromElement(this);o && (n = document.querySelector(o));var r = e(n).data("bs.modal") ? "toggle" : a({}, e(n).data(), e(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var s = e(n).one(Lt.SHOW, function (t) {
      t.isDefaultPrevented() || s.one(Lt.HIDDEN, function () {
        e(i).is(":visible") && i.focus();
      });
    });qt._jQueryInterface.call(e(n), r, this);
  }), e.fn.modal = qt._jQueryInterface, e.fn.modal.Constructor = qt, e.fn.modal.noConflict = function () {
    return e.fn.modal = Ot, qt._jQueryInterface;
  };var Ut = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Yt = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
      Kt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Vt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Qt(t, e, n) {
    if (0 === t.length) return t;if (n && "function" == typeof n) return n(t);for (var i = new window.DOMParser().parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), a = function a(t, n) {
      var i = r[t],
          a = i.nodeName.toLowerCase();if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";var s = [].slice.call(i.attributes),
          l = [].concat(e["*"] || [], e[a] || []);s.forEach(function (t) {
        (function (t, e) {
          var n = t.nodeName.toLowerCase();if (-1 !== e.indexOf(n)) return -1 === Ut.indexOf(n) || Boolean(t.nodeValue.match(Kt) || t.nodeValue.match(Vt));for (var i = e.filter(function (t) {
            return t instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }return !1;
        })(t, l) || i.removeAttribute(t.nodeName);
      });
    }, s = 0, l = r.length; s < l; s++) {
      a(s);
    }return i.body.innerHTML;
  }var $t = "tooltip",
      Gt = e.fn.tooltip,
      Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Jt = ["sanitize", "whiteList", "sanitizeFn"],
      Zt = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
      te = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
      ee = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Yt },
      ne = "show",
      ie = "out",
      oe = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
      re = "fade",
      ae = "show",
      se = ".tooltip-inner",
      le = ".arrow",
      ce = "hover",
      de = "focus",
      ue = "click",
      he = "manual",
      fe = function () {
    function t(t, e) {
      if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }var i = t.prototype;return i.enable = function () {
      this._isEnabled = !0;
    }, i.disable = function () {
      this._isEnabled = !1;
    }, i.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, i.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var n = this.constructor.DATA_KEY,
            i = e(t.currentTarget).data(n);i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
      } else {
        if (e(this.getTipElement()).hasClass(ae)) return void this._leave(null, this);this._enter(null, this);
      }
    }, i.dispose = function () {
      clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, i.show = function () {
      var t = this;if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");var i = e.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        e(this.element).trigger(i);var o = c.findShadowRoot(this.element),
            r = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !r) return;var a = this.getTipElement(),
            s = c.getUID(this.constructor.NAME);a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(a).addClass(re);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
            d = this._getAttachment(l);this.addAttachmentClass(d);var u = this._getContainer();e(a).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, { placement: d, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: le }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(e) {
            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
          }, onUpdate: function onUpdate(e) {
            return t._handlePopperPlacementChange(e);
          } }), e(a).addClass(ae), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);var h = function h() {
          t.config.animation && t._fixTransition();var n = t._hoverState;t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === ie && t._leave(null, t);
        };if (e(this.tip).hasClass(re)) {
          var f = c.getTransitionDurationFromElement(this.tip);e(this.tip).one(c.TRANSITION_END, h).emulateTransitionEnd(f);
        } else h();
      }
    }, i.hide = function (t) {
      var n = this,
          i = this.getTipElement(),
          o = e.Event(this.constructor.Event.HIDE),
          r = function r() {
        n._hoverState !== ne && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
      };if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
        if (e(i).removeClass(ae), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[ue] = !1, this._activeTrigger[de] = !1, this._activeTrigger[ce] = !1, e(this.tip).hasClass(re)) {
          var a = c.getTransitionDurationFromElement(i);e(i).one(c.TRANSITION_END, r).emulateTransitionEnd(a);
        } else r();this._hoverState = "";
      }
    }, i.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, i.isWithContent = function () {
      return Boolean(this.getTitle());
    }, i.addAttachmentClass = function (t) {
      e(this.getTipElement()).addClass("bs-tooltip-" + t);
    }, i.getTipElement = function () {
      return this.tip = this.tip || e(this.config.template)[0], this.tip;
    }, i.setContent = function () {
      var t = this.getTipElement();this.setElementContent(e(t.querySelectorAll(se)), this.getTitle()), e(t).removeClass(re + " " + ae);
    }, i.setElementContent = function (t, n) {
      "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Qt(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text());
    }, i.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, i._getOffset = function () {
      var t = this,
          e = {};return "function" == typeof this.config.offset ? e.fn = function (e) {
        return e.offsets = a({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e;
      } : e.offset = this.config.offset, e;
    }, i._getContainer = function () {
      return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container);
    }, i._getAttachment = function (t) {
      return te[t.toUpperCase()];
    }, i._setListeners = function () {
      var t = this;this.config.trigger.split(" ").forEach(function (n) {
        if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
          return t.toggle(e);
        });else if (n !== he) {
          var i = n === ce ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
              o = n === ce ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;e(t.element).on(i, t.config.selector, function (e) {
            return t._enter(e);
          }).on(o, t.config.selector, function (e) {
            return t._leave(e);
          });
        }
      }), e(this.element).closest(".modal").on("hide.bs.modal", function () {
        t.element && t.hide();
      }), this.config.selector ? this.config = a({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, i._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, i._enter = function (t, n) {
      var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? de : ce] = !0), e(n.getTipElement()).hasClass(ae) || n._hoverState === ne ? n._hoverState = ne : (clearTimeout(n._timeout), n._hoverState = ne, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
        n._hoverState === ne && n.show();
      }, n.config.delay.show) : n.show());
    }, i._leave = function (t, n) {
      var i = this.constructor.DATA_KEY;(n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? de : ce] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = ie, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
        n._hoverState === ie && n.hide();
      }, n.config.delay.hide) : n.hide());
    }, i._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }return !1;
    }, i._getConfig = function (t) {
      var n = e(this.element).data();return Object.keys(n).forEach(function (t) {
        -1 !== Jt.indexOf(t) && delete n[t];
      }), "number" == typeof (t = a({}, this.constructor.Default, n, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), c.typeCheckConfig($t, t, this.constructor.DefaultType), t.sanitize && (t.template = Qt(t.template, t.whiteList, t.sanitizeFn)), t;
    }, i._getDelegateConfig = function () {
      var t = {};if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }return t;
    }, i._cleanTipClass = function () {
      var t = e(this.getTipElement()),
          n = t.attr("class").match(Xt);null !== n && n.length && t.removeClass(n.join(""));
    }, i._handlePopperPlacementChange = function (t) {
      var e = t.instance;this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, i._fixTransition = function () {
      var t = this.getTipElement(),
          n = this.config.animation;null === t.getAttribute("x-placement") && (e(t).removeClass(re), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this).data("bs.tooltip"),
            o = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n;if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, o), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');i[n]();
        }
      });
    }, o(t, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return ee;
      } }, { key: "NAME", get: function get() {
        return $t;
      } }, { key: "DATA_KEY", get: function get() {
        return "bs.tooltip";
      } }, { key: "Event", get: function get() {
        return oe;
      } }, { key: "EVENT_KEY", get: function get() {
        return ".bs.tooltip";
      } }, { key: "DefaultType", get: function get() {
        return Zt;
      } }]), t;
  }();e.fn.tooltip = fe._jQueryInterface, e.fn.tooltip.Constructor = fe, e.fn.tooltip.noConflict = function () {
    return e.fn.tooltip = Gt, fe._jQueryInterface;
  };var pe = "popover",
      me = e.fn.popover,
      ge = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      ve = a({}, fe.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
      ye = a({}, fe.DefaultType, { content: "(string|element|function)" }),
      be = "fade",
      _e = "show",
      we = ".popover-header",
      Ce = ".popover-body",
      Ee = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
      De = function (t) {
    var n, i;function r() {
      return t.apply(this, arguments) || this;
    }i = t, (n = r).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;var a = r.prototype;return a.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, a.addAttachmentClass = function (t) {
      e(this.getTipElement()).addClass("bs-popover-" + t);
    }, a.getTipElement = function () {
      return this.tip = this.tip || e(this.config.template)[0], this.tip;
    }, a.setContent = function () {
      var t = e(this.getTipElement());this.setElementContent(t.find(we), this.getTitle());var n = this._getContent();"function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(Ce), n), t.removeClass(be + " " + _e);
    }, a._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, a._cleanTipClass = function () {
      var t = e(this.getTipElement()),
          n = t.attr("class").match(ge);null !== n && n.length > 0 && t.removeClass(n.join(""));
    }, r._jQueryInterface = function (t) {
      return this.each(function () {
        var n = e(this).data("bs.popover"),
            i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null;if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
        }
      });
    }, o(r, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return ve;
      } }, { key: "NAME", get: function get() {
        return pe;
      } }, { key: "DATA_KEY", get: function get() {
        return "bs.popover";
      } }, { key: "Event", get: function get() {
        return Ee;
      } }, { key: "EVENT_KEY", get: function get() {
        return ".bs.popover";
      } }, { key: "DefaultType", get: function get() {
        return ye;
      } }]), r;
  }(fe);e.fn.popover = De._jQueryInterface, e.fn.popover.Constructor = De, e.fn.popover.noConflict = function () {
    return e.fn.popover = me, De._jQueryInterface;
  };var Se = "scrollspy",
      Te = e.fn[Se],
      xe = { offset: 10, method: "auto", target: "" },
      Ie = { offset: "number", method: "string", target: "(string|element)" },
      ke = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
      Ae = "dropdown-item",
      Me = "active",
      Oe = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
      Ne = "offset",
      Pe = "position",
      Le = function () {
    function t(t, n) {
      var i = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + Oe.NAV_LINKS + "," + this._config.target + " " + Oe.LIST_ITEMS + "," + this._config.target + " " + Oe.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(ke.SCROLL, function (t) {
        return i._process(t);
      }), this.refresh(), this._process();
    }var n = t.prototype;return n.refresh = function () {
      var t = this,
          n = this._scrollElement === this._scrollElement.window ? Ne : Pe,
          i = "auto" === this._config.method ? n : this._config.method,
          o = i === Pe ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
        var n,
            r = c.getSelectorFromElement(t);if (r && (n = document.querySelector(r)), n) {
          var a = n.getBoundingClientRect();if (a.width || a.height) return [e(n)[i]().top + o, r];
        }return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, n.dispose = function () {
      e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, n._getConfig = function (t) {
      if ("string" != typeof (t = a({}, xe, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).target) {
        var n = e(t.target).attr("id");n || (n = c.getUID(Se), e(t.target).attr("id", n)), t.target = "#" + n;
      }return c.typeCheckConfig(Se, t, Ie), t;
    }, n._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, n._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, n._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, n._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, n._activate = function (t) {
      this._activeTarget = t, this._clear();var n = this._selector.split(",").map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      }),
          i = e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass(Ae) ? (i.closest(Oe.DROPDOWN).find(Oe.DROPDOWN_TOGGLE).addClass(Me), i.addClass(Me)) : (i.addClass(Me), i.parents(Oe.NAV_LIST_GROUP).prev(Oe.NAV_LINKS + ", " + Oe.LIST_ITEMS).addClass(Me), i.parents(Oe.NAV_LIST_GROUP).prev(Oe.NAV_ITEMS).children(Oe.NAV_LINKS).addClass(Me)), e(this._scrollElement).trigger(ke.ACTIVATE, { relatedTarget: t });
    }, n._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
        return t.classList.contains(Me);
      }).forEach(function (t) {
        return t.classList.remove(Me);
      });
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this).data("bs.scrollspy");if (i || (i = new t(this, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n), e(this).data("bs.scrollspy", i)), "string" == typeof n) {
          if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');i[n]();
        }
      });
    }, o(t, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "Default", get: function get() {
        return xe;
      } }]), t;
  }();e(window).on(ke.LOAD_DATA_API, function () {
    for (var t = [].slice.call(document.querySelectorAll(Oe.DATA_SPY)), n = t.length; n--;) {
      var i = e(t[n]);Le._jQueryInterface.call(i, i.data());
    }
  }), e.fn[Se] = Le._jQueryInterface, e.fn[Se].Constructor = Le, e.fn[Se].noConflict = function () {
    return e.fn[Se] = Te, Le._jQueryInterface;
  };var Fe = e.fn.tab,
      je = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
      He = "dropdown-menu",
      ze = "active",
      We = "disabled",
      Re = "fade",
      Be = "show",
      qe = ".dropdown",
      Ue = ".nav, .list-group",
      Ye = ".active",
      Ke = "> li > .active",
      Ve = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Qe = ".dropdown-toggle",
      $e = "> .dropdown-menu .active",
      Ge = function () {
    function t(t) {
      this._element = t;
    }var n = t.prototype;return n.show = function () {
      var t = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(ze) || e(this._element).hasClass(We))) {
        var n,
            i,
            o = e(this._element).closest(Ue)[0],
            r = c.getSelectorFromElement(this._element);if (o) {
          var a = "UL" === o.nodeName || "OL" === o.nodeName ? Ke : Ye;i = (i = e.makeArray(e(o).find(a)))[i.length - 1];
        }var s = e.Event(je.HIDE, { relatedTarget: this._element }),
            l = e.Event(je.SHOW, { relatedTarget: i });if (i && e(i).trigger(s), e(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
          r && (n = document.querySelector(r)), this._activate(this._element, o);var d = function d() {
            var n = e.Event(je.HIDDEN, { relatedTarget: t._element }),
                o = e.Event(je.SHOWN, { relatedTarget: i });e(i).trigger(n), e(t._element).trigger(o);
          };n ? this._activate(n, n.parentNode, d) : d();
        }
      }
    }, n.dispose = function () {
      e.removeData(this._element, "bs.tab"), this._element = null;
    }, n._activate = function (t, n, i) {
      var o = this,
          r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(Ye) : e(n).find(Ke))[0],
          a = i && r && e(r).hasClass(Re),
          s = function s() {
        return o._transitionComplete(t, r, i);
      };if (r && a) {
        var l = c.getTransitionDurationFromElement(r);e(r).removeClass(Be).one(c.TRANSITION_END, s).emulateTransitionEnd(l);
      } else s();
    }, n._transitionComplete = function (t, n, i) {
      if (n) {
        e(n).removeClass(ze);var o = e(n.parentNode).find($e)[0];o && e(o).removeClass(ze), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
      }if (e(t).addClass(ze), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), c.reflow(t), t.classList.contains(Re) && t.classList.add(Be), t.parentNode && e(t.parentNode).hasClass(He)) {
        var r = e(t).closest(qe)[0];if (r) {
          var a = [].slice.call(r.querySelectorAll(Qe));e(a).addClass(ze);
        }t.setAttribute("aria-expanded", !0);
      }i && i();
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this),
            o = i.data("bs.tab");if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');o[n]();
        }
      });
    }, o(t, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }]), t;
  }();e(document).on(je.CLICK_DATA_API, Ve, function (t) {
    t.preventDefault(), Ge._jQueryInterface.call(e(this), "show");
  }), e.fn.tab = Ge._jQueryInterface, e.fn.tab.Constructor = Ge, e.fn.tab.noConflict = function () {
    return e.fn.tab = Fe, Ge._jQueryInterface;
  };var Xe = e.fn.toast,
      Je = { CLICK_DISMISS: "click.dismiss.bs.toast", HIDE: "hide.bs.toast", HIDDEN: "hidden.bs.toast", SHOW: "show.bs.toast", SHOWN: "shown.bs.toast" },
      Ze = "fade",
      tn = "hide",
      en = "show",
      nn = "showing",
      on = { animation: "boolean", autohide: "boolean", delay: "number" },
      rn = { animation: !0, autohide: !0, delay: 500 },
      an = '[data-dismiss="toast"]',
      sn = function () {
    function t(t, e) {
      this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
    }var n = t.prototype;return n.show = function () {
      var t = this;e(this._element).trigger(Je.SHOW), this._config.animation && this._element.classList.add(Ze);var n = function n() {
        t._element.classList.remove(nn), t._element.classList.add(en), e(t._element).trigger(Je.SHOWN), t._config.autohide && t.hide();
      };if (this._element.classList.remove(tn), this._element.classList.add(nn), this._config.animation) {
        var i = c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
      } else n();
    }, n.hide = function (t) {
      var n = this;this._element.classList.contains(en) && (e(this._element).trigger(Je.HIDE), t ? this._close() : this._timeout = setTimeout(function () {
        n._close();
      }, this._config.delay));
    }, n.dispose = function () {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(en) && this._element.classList.remove(en), e(this._element).off(Je.CLICK_DISMISS), e.removeData(this._element, "bs.toast"), this._element = null, this._config = null;
    }, n._getConfig = function (t) {
      return t = a({}, rn, e(this._element).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {}), c.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
    }, n._setListeners = function () {
      var t = this;e(this._element).on(Je.CLICK_DISMISS, an, function () {
        return t.hide(!0);
      });
    }, n._close = function () {
      var t = this,
          n = function n() {
        t._element.classList.add(tn), e(t._element).trigger(Je.HIDDEN);
      };if (this._element.classList.remove(en), this._config.animation) {
        var i = c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
      } else n();
    }, t._jQueryInterface = function (n) {
      return this.each(function () {
        var i = e(this),
            o = i.data("bs.toast");if (o || (o = new t(this, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n), i.data("bs.toast", o)), "string" == typeof n) {
          if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');o[n](this);
        }
      });
    }, o(t, null, [{ key: "VERSION", get: function get() {
        return "4.3.1";
      } }, { key: "DefaultType", get: function get() {
        return on;
      } }, { key: "Default", get: function get() {
        return rn;
      } }]), t;
  }();e.fn.toast = sn._jQueryInterface, e.fn.toast.Constructor = sn, e.fn.toast.noConflict = function () {
    return e.fn.toast = Xe, sn._jQueryInterface;
  }, function () {
    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = e.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = c, t.Alert = m, t.Button = T, t.Carousel = V, t.Collapse = at, t.Dropdown = Mt, t.Modal = qt, t.Popover = De, t.Scrollspy = Le, t.Tab = Ge, t.Toast = sn, t.Tooltip = fe, Object.defineProperty(t, "__esModule", { value: !0 });
}), function (t) {
  "use strict";
  function e(e) {
    return e.is('[type="checkbox"]') ? e.prop("checked") : e.is('[type="radio"]') ? !!t('[name="' + e.attr("name") + '"]:checked').length : e.is("select[multiple]") ? (e.val() || []).length : e.val();
  }var n = function n(i, o) {
    this.options = o, this.validators = t.extend({}, n.VALIDATORS, o.custom), this.$element = t(i), this.$btn = t('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", t.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", t.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", t.proxy(this.reset, this)), this.$element.find("[data-match]").each(function () {
      var n = t(this),
          i = n.attr("data-match");t(i).on("input.bs.validator", function (t) {
        e(n) && n.trigger("input.bs.validator");
      });
    }), this.$inputs.filter(function () {
      return e(t(this)) && !t(this).closest(".has-error").length;
    }).trigger("focusout"), this.$element.attr("novalidate", !0);
  };function i(e) {
    return this.each(function () {
      var i = t(this),
          o = t.extend({}, n.DEFAULTS, i.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e),
          r = i.data("bs.validator");(r || "destroy" != e) && (r || i.data("bs.validator", r = new n(this, o)), "string" == typeof e && r[e]());
    });
  }n.VERSION = "0.11.9", n.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', n.FOCUS_OFFSET = 20, n.DEFAULTS = { delay: 500, html: !1, disable: !0, focus: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-remove" } }, n.VALIDATORS = { native: function native(t) {
      var e = t[0];if (e.checkValidity) return !e.checkValidity() && !e.validity.valid && (e.validationMessage || "error!");
    }, match: function match(e) {
      var i = e.attr("data-match");return e.val() !== t(i).val() && n.DEFAULTS.errors.match;
    }, minlength: function minlength(t) {
      var e = t.attr("data-minlength");return t.val().length < e && n.DEFAULTS.errors.minlength;
    } }, n.prototype.update = function () {
    var e = this;return this.$inputs = this.$element.find(n.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function () {
      e.clearErrors(t(this));
    })), this.toggleSubmit(), this;
  }, n.prototype.onInput = function (e) {
    var n = this,
        i = t(e.target),
        o = "focusout" !== e.type;this.$inputs.is(i) && this.validateInput(i, o).done(function () {
      n.toggleSubmit();
    });
  }, n.prototype.validateInput = function (n, i) {
    e(n);var o = n.data("bs.validator.errors");n.is('[type="radio"]') && (n = this.$element.find('input[name="' + n.attr("name") + '"]'));var r = t.Event("validate.bs.validator", { relatedTarget: n[0] });if (this.$element.trigger(r), !r.isDefaultPrevented()) {
      var a = this;return this.runValidators(n).done(function (e) {
        n.data("bs.validator.errors", e), e.length ? i ? a.defer(n, a.showErrors) : a.showErrors(n) : a.clearErrors(n), o && e.toString() === o.toString() || (r = e.length ? t.Event("invalid.bs.validator", { relatedTarget: n[0], detail: e }) : t.Event("valid.bs.validator", { relatedTarget: n[0], detail: o }), a.$element.trigger(r)), a.toggleSubmit(), a.$element.trigger(t.Event("validated.bs.validator", { relatedTarget: n[0] }));
      });
    }
  }, n.prototype.runValidators = function (n) {
    var i = [],
        o = t.Deferred();function r(t) {
      return function (t) {
        return n.attr("data-" + t + "-error");
      }(t) || ((e = n[0].validity).typeMismatch ? n.attr("data-type-error") : e.patternMismatch ? n.attr("data-pattern-error") : e.stepMismatch ? n.attr("data-step-error") : e.rangeOverflow ? n.attr("data-max-error") : e.rangeUnderflow ? n.attr("data-min-error") : e.valueMissing ? n.attr("data-required-error") : null) || n.attr("data-error");var e;
    }return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", o), t.each(this.validators, t.proxy(function (t, o) {
      var a = null;!e(n) && !n.attr("required") || void 0 === n.attr("data-" + t) && "native" != t || !(a = o.call(this, n)) || (a = r(t) || a, !~i.indexOf(a) && i.push(a));
    }, this)), !i.length && e(n) && n.attr("data-remote") ? this.defer(n, function () {
      var a = {};a[n.attr("name")] = e(n), t.get(n.attr("data-remote"), a).fail(function (t, e, n) {
        i.push(r("remote") || n);
      }).always(function () {
        o.resolve(i);
      });
    }) : o.resolve(i), o.promise();
  }, n.prototype.validate = function () {
    var e = this;return t.when(this.$inputs.map(function (n) {
      return e.validateInput(t(this), !1);
    })).then(function () {
      e.toggleSubmit(), e.focusError();
    }), this;
  }, n.prototype.focusError = function () {
    if (this.options.focus) {
      var e = this.$element.find(".has-error:first :input");0 !== e.length && (t("html, body").animate({ scrollTop: e.offset().top - n.FOCUS_OFFSET }, 250), e.focus());
    }
  }, n.prototype.showErrors = function (e) {
    var n = this.options.html ? "html" : "text",
        i = e.data("bs.validator.errors"),
        o = e.closest(".form-group"),
        r = o.find(".help-block.with-errors"),
        a = o.find(".form-control-feedback");i.length && (i = t("<ul/>").addClass("list-unstyled").append(t.map(i, function (e) {
      return t("<li/>")[n](e);
    })), void 0 === r.data("bs.validator.originalContent") && r.data("bs.validator.originalContent", r.html()), r.empty().append(i), o.addClass("has-error has-danger"), o.hasClass("has-feedback") && a.removeClass(this.options.feedback.success) && a.addClass(this.options.feedback.error) && o.removeClass("has-success"));
  }, n.prototype.clearErrors = function (t) {
    var n = t.closest(".form-group"),
        i = n.find(".help-block.with-errors"),
        o = n.find(".form-control-feedback");i.html(i.data("bs.validator.originalContent")), n.removeClass("has-error has-danger has-success"), n.hasClass("has-feedback") && o.removeClass(this.options.feedback.error) && o.removeClass(this.options.feedback.success) && e(t) && o.addClass(this.options.feedback.success) && n.addClass("has-success");
  }, n.prototype.hasErrors = function () {
    return !!this.$inputs.filter(function () {
      return !!(t(this).data("bs.validator.errors") || []).length;
    }).length;
  }, n.prototype.isIncomplete = function () {
    return !!this.$inputs.filter("[required]").filter(function () {
      var n = e(t(this));return !("string" == typeof n ? t.trim(n) : n);
    }).length;
  }, n.prototype.onSubmit = function (t) {
    this.validate(), (this.isIncomplete() || this.hasErrors()) && t.preventDefault();
  }, n.prototype.toggleSubmit = function () {
    this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors());
  }, n.prototype.defer = function (e, n) {
    if (n = t.proxy(n, this, e), !this.options.delay) return n();window.clearTimeout(e.data("bs.validator.timeout")), e.data("bs.validator.timeout", window.setTimeout(n, this.options.delay));
  }, n.prototype.reset = function () {
    return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function () {
      var e = t(this),
          n = e.data("bs.validator.timeout");window.clearTimeout(n) && e.removeData("bs.validator.timeout");
    }), this.$element.find(".help-block.with-errors").each(function () {
      var e = t(this),
          n = e.data("bs.validator.originalContent");e.removeData("bs.validator.originalContent").html(n);
    }), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this;
  }, n.prototype.destroy = function () {
    return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this.$inputs = null, this;
  };var o = t.fn.validator;t.fn.validator = i, t.fn.validator.Constructor = n, t.fn.validator.noConflict = function () {
    return t.fn.validator = o, this;
  }, t(window).on("load", function () {
    t('form[data-toggle="validator"]').each(function () {
      var e = t(this);i.call(e, e.data());
    });
  });
}(jQuery), function (t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
  "use strict";
  var n = Array.prototype.slice,
      i = t.console,
      o = void 0 === i ? function () {} : function (t) {
    i.error(t);
  };function r(i, r, s) {
    (s = s || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function (t) {
      s.isPlainObject(t) && (this.options = s.extend(!0, this.options, t));
    }), s.fn[i] = function (t) {
      var e;return "string" == typeof t ? function (t, e, n) {
        var r,
            a = "$()." + i + '("' + e + '")';return t.each(function (t, l) {
          var c = s.data(l, i);if (c) {
            var d = c[e];if (d && "_" != e.charAt(0)) {
              var u = d.apply(c, n);r = void 0 === r ? u : r;
            } else o(a + " is not a valid method");
          } else o(i + " not initialized. Cannot call methods, i.e. " + a);
        }), void 0 !== r ? r : t;
      }(this, t, n.call(arguments, 1)) : (e = t, this.each(function (t, n) {
        var o = s.data(n, i);o ? (o.option(e), o._init()) : (o = new r(n, e), s.data(n, i, o));
      }), this);
    }, a(s));
  }function a(t) {
    !t || t && t.bridget || (t.bridget = r);
  }return a(e || t.jQuery), r;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function () {
  function t() {}var e = t.prototype;return e.on = function (t, e) {
    if (t && e) {
      var n = this._events = this._events || {},
          i = n[t] = n[t] || [];return -1 == i.indexOf(e) && i.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);var n = this._onceEvents = this._onceEvents || {};return (n[t] = n[t] || {})[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var n = this._events && this._events[t];if (n && n.length) {
      var i = n.indexOf(e);return -1 != i && n.splice(i, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var n = this._events && this._events[t];if (n && n.length) {
      n = n.slice(0), e = e || [];for (var i = this._onceEvents && this._onceEvents[t], o = 0; o < n.length; o++) {
        var r = n[o];i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e);
      }return this;
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, t;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
  "use strict";
  function t(t) {
    var e = parseFloat(t);return -1 == t.indexOf("%") && !isNaN(e) && e;
  }var e = "undefined" == typeof console ? function () {} : function (t) {
    console.error(t);
  },
      n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      i = n.length;function o(t) {
    var n = getComputedStyle(t);return n || e("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n;
  }var r,
      a = !1;function s(e) {
    if (function () {
      if (!a) {
        a = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var n = document.body || document.documentElement;n.appendChild(e);var i = o(e);r = 200 == Math.round(t(i.width)), s.isBoxSizeOuter = r, n.removeChild(e);
      }
    }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.nodeType) {
      var l = o(e);if ("none" == l.display) return function () {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < i; e++) {
          t[n[e]] = 0;
        }return t;
      }();var c = {};c.width = e.offsetWidth, c.height = e.offsetHeight;for (var d = c.isBorderBox = "border-box" == l.boxSizing, u = 0; u < i; u++) {
        var h = n[u],
            f = l[h],
            p = parseFloat(f);c[h] = isNaN(p) ? 0 : p;
      }var m = c.paddingLeft + c.paddingRight,
          g = c.paddingTop + c.paddingBottom,
          v = c.marginLeft + c.marginRight,
          y = c.marginTop + c.marginBottom,
          b = c.borderLeftWidth + c.borderRightWidth,
          _ = c.borderTopWidth + c.borderBottomWidth,
          w = d && r,
          C = t(l.width);!1 !== C && (c.width = C + (w ? 0 : m + b));var E = t(l.height);return !1 !== E && (c.height = E + (w ? 0 : g + _)), c.innerWidth = c.width - (m + b), c.innerHeight = c.height - (g + _), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c;
    }
  }return s;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
  "use strict";
  var t = function () {
    var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
      var i = e[n] + "MatchesSelector";if (t[i]) return i;
    }
  }();return function (e, n) {
    return e[t](n);
  };
}), function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
  var n = { extend: function extend(t, e) {
      for (var n in e) {
        t[n] = e[n];
      }return t;
    }, modulo: function modulo(t, e) {
      return (t % e + e) % e;
    } },
      i = Array.prototype.slice;n.makeArray = function (t) {
    return Array.isArray(t) ? t : null === t || void 0 === t ? [] : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length ? i.call(t) : [t];
  }, n.removeFrom = function (t, e) {
    var n = t.indexOf(e);-1 != n && t.splice(n, 1);
  }, n.getParent = function (t, n) {
    for (; t.parentNode && t != document.body;) {
      if (t = t.parentNode, e(t, n)) return t;
    }
  }, n.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, n.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, n.filterFindElements = function (t, i) {
    var o = [];return (t = n.makeArray(t)).forEach(function (t) {
      if (t instanceof HTMLElement) if (i) {
        e(t, i) && o.push(t);for (var n = t.querySelectorAll(i), r = 0; r < n.length; r++) {
          o.push(n[r]);
        }
      } else o.push(t);
    }), o;
  }, n.debounceMethod = function (t, e, n) {
    n = n || 100;var i = t.prototype[e],
        o = e + "Timeout";t.prototype[e] = function () {
      var t = this[o];clearTimeout(t);var e = arguments,
          r = this;this[o] = setTimeout(function () {
        i.apply(r, e), delete r[o];
      }, n);
    };
  }, n.docReady = function (t) {
    var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, n.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, n) {
      return e + "-" + n;
    }).toLowerCase();
  };var o = t.console;return n.htmlInit = function (e, i) {
    n.docReady(function () {
      var r = n.toDashed(i),
          a = "data-" + r,
          s = document.querySelectorAll("[" + a + "]"),
          l = document.querySelectorAll(".js-" + r),
          c = n.makeArray(s).concat(n.makeArray(l)),
          d = a + "-options",
          u = t.jQuery;c.forEach(function (t) {
        var n,
            r = t.getAttribute(a) || t.getAttribute(d);try {
          n = r && JSON.parse(r);
        } catch (e) {
          return void (o && o.error("Error parsing " + a + " on " + t.className + ": " + e));
        }var s = new e(t, n);u && u.data(t, i, s);
      });
    });
  }, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize));
}(window, function (t, e) {
  function n(t, e) {
    this.element = t, this.parent = e, this.create();
  }var i = n.prototype;return i.create = function () {
    this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0;
  }, i.destroy = function () {
    this.unselect(), this.element.style.position = "";var t = this.parent.originSide;this.element.style[t] = "";
  }, i.getSize = function () {
    this.size = e(this.element);
  }, i.setPosition = function (t) {
    this.x = t, this.updateTarget(), this.renderPosition(t);
  }, i.updateTarget = i.setDefaultTarget = function () {
    var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
  }, i.renderPosition = function (t) {
    var e = this.parent.originSide;this.element.style[e] = this.parent.getPositionValue(t);
  }, i.select = function () {
    this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden");
  }, i.unselect = function () {
    this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true");
  }, i.wrapShift = function (t) {
    this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t);
  }, i.remove = function () {
    this.element.parentNode.removeChild(this.element);
  }, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e());
}(window, function () {
  "use strict";
  function t(t) {
    this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0;
  }var e = t.prototype;return e.addCell = function (t) {
    if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
      this.x = t.x;var e = this.isOriginLeft ? "marginLeft" : "marginRight";this.firstMargin = t.size[e];
    }
  }, e.updateTarget = function () {
    var t = this.isOriginLeft ? "marginRight" : "marginLeft",
        e = this.getLastCell(),
        n = e ? e.size[t] : 0,
        i = this.outerWidth - (this.firstMargin + n);this.target = this.x + this.firstMargin + i * this.parent.cellAlign;
  }, e.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, e.select = function () {
    this.cells.forEach(function (t) {
      t.select();
    });
  }, e.unselect = function () {
    this.cells.forEach(function (t) {
      t.unselect();
    });
  }, e.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  }, t;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.fizzyUIUtils));
}(window, function (t, e) {
  var n = { startAnimation: function startAnimation() {
      this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate());
    }, animate: function animate() {
      this.applyDragForce(), this.applySelectedAttraction();var t = this.x;if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
        var e = this;requestAnimationFrame(function () {
          e.animate();
        });
      }
    }, positionSlider: function positionSlider() {
      var t = this.x;this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent();
    }, setTranslateX: function setTranslateX(t, e) {
      t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;var n = this.getPositionValue(t);this.slider.style.transform = e ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")";
    }, dispatchScrollEvent: function dispatchScrollEvent() {
      var t = this.slides[0];if (t) {
        var e = -this.x - t.target,
            n = e / this.slidesWidth;this.dispatchEvent("scroll", null, [n, e]);
      }
    }, positionSliderAtSelected: function positionSliderAtSelected() {
      this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider());
    }, getPositionValue: function getPositionValue(t) {
      return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px";
    }, settle: function settle(t) {
      this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]));
    }, shiftWrapCells: function shiftWrapCells(t) {
      var e = this.cursorPosition + t;this._shiftCells(this.beforeShiftCells, e, -1);var n = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);this._shiftCells(this.afterShiftCells, n, 1);
    }, _shiftCells: function _shiftCells(t, e, n) {
      for (var i = 0; i < t.length; i++) {
        var o = t[i],
            r = e > 0 ? n : 0;o.wrapShift(r), e -= o.size.outerWidth;
      }
    }, _unshiftCells: function _unshiftCells(t) {
      if (t && t.length) for (var e = 0; e < t.length; e++) {
        t[e].wrapShift(0);
      }
    }, integratePhysics: function integratePhysics() {
      this.x += this.velocity, this.velocity *= this.getFrictionFactor();
    }, applyForce: function applyForce(t) {
      this.velocity += t;
    }, getFrictionFactor: function getFrictionFactor() {
      return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
    }, getRestingPosition: function getRestingPosition() {
      return this.x + this.velocity / (1 - this.getFrictionFactor());
    }, applyDragForce: function applyDragForce() {
      if (this.isDraggable && this.isPointerDown) {
        var t = this.dragX - this.x - this.velocity;this.applyForce(t);
      }
    }, applySelectedAttraction: function applySelectedAttraction() {
      if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
        var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;this.applyForce(t);
      }
    } };return n;
}), function (t, e) {
  if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (n, i, o, r, a, s) {
    return e(t, n, i, o, r, a, s);
  });else if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));else {
    var n = t.Flickity;t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, n.Cell, n.Slide, n.animatePrototype);
  }
}(window, function (t, e, n, i, o, r, a) {
  var s = t.jQuery,
      l = t.getComputedStyle,
      c = t.console;function d(t, e) {
    for (t = i.makeArray(t); t.length;) {
      e.appendChild(t.shift());
    }
  }var u = 0,
      h = {};function f(t, e) {
    var n = i.getQueryElement(t);if (n) {
      if (this.element = n, this.element.flickityGUID) {
        var o = h[this.element.flickityGUID];return o.option(e), o;
      }s && (this.$element = s(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e), this._create();
    } else c && c.error("Bad element for Flickity: " + (n || t));
  }f.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: .075, friction: .28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: .025, setGallerySize: !0 }, f.createMethods = [];var p = f.prototype;i.extend(p, e.prototype), p._create = function () {
    var e = this.guid = ++u;for (var n in this.element.flickityGUID = e, h[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
      var i = this.options.on[n];this.on(n, i);
    }f.createMethods.forEach(function (t) {
      this[t]();
    }, this), this.options.watchCSS ? this.watchCSS() : this.activate();
  }, p.option = function (t) {
    i.extend(this.options, t);
  }, p.activate = function () {
    this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), d(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"));
  }, p._createSlider = function () {
    var t = document.createElement("div");t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t;
  }, p._filterFindCellElements = function (t) {
    return i.filterFindElements(t, this.options.cellSelector);
  }, p.reloadCells = function () {
    this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
  }, p._makeCells = function (t) {
    return this._filterFindCellElements(t).map(function (t) {
      return new o(t, this);
    }, this);
  }, p.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, p.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  }, p.positionCells = function () {
    this._sizeCells(this.cells), this._positionCells(0);
  }, p._positionCells = function (t) {
    t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;var e = 0;if (t > 0) {
      var n = this.cells[t - 1];e = n.x + n.size.outerWidth;
    }for (var i = this.cells.length, o = t; o < i; o++) {
      var r = this.cells[o];r.setPosition(e), e += r.size.outerWidth, this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight);
    }this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0;
  }, p._sizeCells = function (t) {
    t.forEach(function (t) {
      t.getSize();
    });
  }, p.updateSlides = function () {
    if (this.slides = [], this.cells.length) {
      var t = new r(this);this.slides.push(t);var e = "left" == this.originSide ? "marginRight" : "marginLeft",
          n = this._getCanCellFit();this.cells.forEach(function (i, o) {
        if (t.cells.length) {
          var a = t.outerWidth - t.firstMargin + (i.size.outerWidth - i.size[e]);n.call(this, o, a) ? t.addCell(i) : (t.updateTarget(), t = new r(this), this.slides.push(t), t.addCell(i));
        } else t.addCell(i);
      }, this), t.updateTarget(), this.updateSelectedSlide();
    }
  }, p._getCanCellFit = function () {
    var t = this.options.groupCells;if (!t) return function () {
      return !1;
    };if ("number" == typeof t) {
      var e = parseInt(t, 10);return function (t) {
        return t % e != 0;
      };
    }var n = "string" == typeof t && t.match(/^(\d+)%$/),
        i = n ? parseInt(n[1], 10) / 100 : 1;return function (t, e) {
      return e <= (this.size.innerWidth + 1) * i;
    };
  }, p._init = p.reposition = function () {
    this.positionCells(), this.positionSliderAtSelected();
  }, p.getSize = function () {
    this.size = n(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };var m = { center: { left: .5, right: .5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };return p.setCellAlign = function () {
    var t = m[this.options.cellAlign];this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
  }, p.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;this.viewport.style.height = t + "px";
    }
  }, p._getWrapShiftCells = function () {
    if (this.options.wrapAround) {
      this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);var t = this.cursorPosition,
          e = this.cells.length - 1;this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1);
    }
  }, p._getGapCells = function (t, e, n) {
    for (var i = []; t > 0;) {
      var o = this.cells[e];if (!o) break;i.push(o), e += n, t -= o.size.outerWidth;
    }return i;
  }, p._containSlides = function () {
    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
      var t = this.options.rightToLeft,
          e = t ? "marginRight" : "marginLeft",
          n = t ? "marginLeft" : "marginRight",
          i = this.slideableWidth - this.getLastCell().size[n],
          o = i < this.size.innerWidth,
          r = this.cursorPosition + this.cells[0].size[e],
          a = i - this.size.innerWidth * (1 - this.cellAlign);this.slides.forEach(function (t) {
        o ? t.target = i * this.cellAlign : (t.target = Math.max(t.target, r), t.target = Math.min(t.target, a));
      }, this);
    }
  }, p.dispatchEvent = function (t, e, n) {
    var i = e ? [e].concat(n) : n;if (this.emitEvent(t, i), s && this.$element) {
      var o = t += this.options.namespaceJQueryEvents ? ".flickity" : "";if (e) {
        var r = s.Event(e);r.type = t, o = r;
      }this.$element.trigger(o, n);
    }
  }, p.select = function (t, e, n) {
    if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = i.modulo(t, this.slides.length)), this.slides[t])) {
      var o = this.selectedIndex;this.selectedIndex = t, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != o && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect");
    }
  }, p._wrapSelect = function (t) {
    var e = this.slides.length;if (!(this.options.wrapAround && e > 1)) return t;var n = i.modulo(t, e),
        o = Math.abs(n - this.selectedIndex),
        r = Math.abs(n + e - this.selectedIndex),
        a = Math.abs(n - e - this.selectedIndex);!this.isDragSelect && r < o ? t += e : !this.isDragSelect && a < o && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth);
  }, p.previous = function (t, e) {
    this.select(this.selectedIndex - 1, t, e);
  }, p.next = function (t, e) {
    this.select(this.selectedIndex + 1, t, e);
  }, p.updateSelectedSlide = function () {
    var t = this.slides[this.selectedIndex];t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0]);
  }, p.unselectSelectedSlide = function () {
    this.selectedSlide && this.selectedSlide.unselect();
  }, p.selectInitialIndex = function () {
    var t = this.options.initialIndex;if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);else {
      if (t && "string" == typeof t) if (this.queryCell(t)) return void this.selectCell(t, !1, !0);var e = 0;t && this.slides[t] && (e = t), this.select(e, !1, !0);
    }
  }, p.selectCell = function (t, e, n) {
    var i = this.queryCell(t);if (i) {
      var o = this.getCellSlideIndex(i);this.select(o, e, n);
    }
  }, p.getCellSlideIndex = function (t) {
    for (var e = 0; e < this.slides.length; e++) {
      if (-1 != this.slides[e].cells.indexOf(t)) return e;
    }
  }, p.getCell = function (t) {
    for (var e = 0; e < this.cells.length; e++) {
      var n = this.cells[e];if (n.element == t) return n;
    }
  }, p.getCells = function (t) {
    var e = [];return (t = i.makeArray(t)).forEach(function (t) {
      var n = this.getCell(t);n && e.push(n);
    }, this), e;
  }, p.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  }, p.getParentCell = function (t) {
    var e = this.getCell(t);return e || (t = i.getParent(t, ".flickity-slider > *"), this.getCell(t));
  }, p.getAdjacentCellElements = function (t, e) {
    if (!t) return this.selectedSlide.getCellElements();e = void 0 === e ? this.selectedIndex : e;var n = this.slides.length;if (1 + 2 * t >= n) return this.getCellElements();for (var o = [], r = e - t; r <= e + t; r++) {
      var a = this.options.wrapAround ? i.modulo(r, n) : r,
          s = this.slides[a];s && (o = o.concat(s.getCellElements()));
    }return o;
  }, p.queryCell = function (t) {
    if ("number" == typeof t) return this.cells[t];if ("string" == typeof t) {
      if (t.match(/^[#\.]?[\d\/]/)) return;t = this.element.querySelector(t);
    }return this.getCell(t);
  }, p.uiChange = function () {
    this.emitEvent("uiChange");
  }, p.childUIPointerDown = function (t) {
    "touchstart" != t.type && t.preventDefault(), this.focus();
  }, p.onresize = function () {
    this.watchCSS(), this.resize();
  }, i.debounceMethod(f, "onresize", 150), p.resize = function () {
    if (this.isActive) {
      this.getSize(), this.options.wrapAround && (this.x = i.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");var t = this.selectedElements && this.selectedElements[0];this.selectCell(t, !1, !0);
    }
  }, p.watchCSS = function () {
    this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
  }, p.onkeydown = function (t) {
    var e = document.activeElement && document.activeElement != this.element;if (this.options.accessibility && !e) {
      var n = f.keyboardHandlers[t.keyCode];n && n.call(this);
    }
  }, f.keyboardHandlers = { 37: function _() {
      var t = this.options.rightToLeft ? "next" : "previous";this.uiChange(), this[t]();
    }, 39: function _() {
      var t = this.options.rightToLeft ? "previous" : "next";this.uiChange(), this[t]();
    } }, p.focus = function () {
    var e = t.pageYOffset;this.element.focus({ preventScroll: !0 }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e);
  }, p.deactivate = function () {
    this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function (t) {
      t.destroy();
    }), this.element.removeChild(this.viewport), d(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"));
  }, p.destroy = function () {
    this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), s && this.$element && s.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete h[this.guid];
  }, i.extend(p, a), f.data = function (t) {
    var e = (t = i.getQueryElement(t)) && t.flickityGUID;return e && h[e];
  }, i.htmlInit(f, "flickity"), s && s.bridget && s.bridget("flickity", f), f.setJQuery = function (t) {
    s = t;
  }, f.Cell = o, f.Slide = r, f;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter);
}(window, function (t, e) {
  function n() {}var i = n.prototype = Object.create(e.prototype);i.bindStartEvent = function (t) {
    this._bindStartEvent(t, !0);
  }, i.unbindStartEvent = function (t) {
    this._bindStartEvent(t, !1);
  }, i._bindStartEvent = function (e, n) {
    var i = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
        o = "mousedown";t.PointerEvent ? o = "pointerdown" : "ontouchstart" in t && (o = "touchstart"), e[i](o, this);
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, i.getTouch = function (t) {
    for (var e = 0; e < t.length; e++) {
      var n = t[e];if (n.identifier == this.pointerIdentifier) return n;
    }
  }, i.onmousedown = function (t) {
    var e = t.button;e && 0 !== e && 1 !== e || this._pointerDown(t, t);
  }, i.ontouchstart = function (t) {
    this._pointerDown(t, t.changedTouches[0]);
  }, i.onpointerdown = function (t) {
    this._pointerDown(t, t);
  }, i._pointerDown = function (t, e) {
    t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e));
  }, i.pointerDown = function (t, e) {
    this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
  };var o = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };return i._bindPostStartEvents = function (e) {
    if (e) {
      var n = o[e.type];n.forEach(function (e) {
        t.addEventListener(e, this);
      }, this), this._boundPointerEvents = n;
    }
  }, i._unbindPostStartEvents = function () {
    this._boundPointerEvents && (this._boundPointerEvents.forEach(function (e) {
      t.removeEventListener(e, this);
    }, this), delete this._boundPointerEvents);
  }, i.onmousemove = function (t) {
    this._pointerMove(t, t);
  }, i.onpointermove = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
  }, i.ontouchmove = function (t) {
    var e = this.getTouch(t.changedTouches);e && this._pointerMove(t, e);
  }, i._pointerMove = function (t, e) {
    this.pointerMove(t, e);
  }, i.pointerMove = function (t, e) {
    this.emitEvent("pointerMove", [t, e]);
  }, i.onmouseup = function (t) {
    this._pointerUp(t, t);
  }, i.onpointerup = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
  }, i.ontouchend = function (t) {
    var e = this.getTouch(t.changedTouches);e && this._pointerUp(t, e);
  }, i._pointerUp = function (t, e) {
    this._pointerDone(), this.pointerUp(t, e);
  }, i.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]);
  }, i._pointerDone = function () {
    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
  }, i._pointerReset = function () {
    this.isPointerDown = !1, delete this.pointerIdentifier;
  }, i.pointerDone = function () {}, i.onpointercancel = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
  }, i.ontouchcancel = function (t) {
    var e = this.getTouch(t.changedTouches);e && this._pointerCancel(t, e);
  }, i._pointerCancel = function (t, e) {
    this._pointerDone(), this.pointerCancel(t, e);
  }, i.pointerCancel = function (t, e) {
    this.emitEvent("pointerCancel", [t, e]);
  }, n.getPointerPoint = function (t) {
    return { x: t.pageX, y: t.pageY };
  }, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer);
}(window, function (t, e) {
  function n() {}var i = n.prototype = Object.create(e.prototype);i.bindHandles = function () {
    this._bindHandles(!0);
  }, i.unbindHandles = function () {
    this._bindHandles(!1);
  }, i._bindHandles = function (e) {
    for (var n = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", i = e ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
      var r = this.handles[o];this._bindStartEvent(r, e), r[n]("click", this), t.PointerEvent && (r.style.touchAction = i);
    }
  }, i._touchActionValue = "none", i.pointerDown = function (t, e) {
    this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]));
  };var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      r = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };return i.okayPointerDown = function (t) {
    var e = o[t.target.nodeName],
        n = r[t.target.type],
        i = !e || n;return i || this._pointerReset(), i;
  }, i.pointerDownBlur = function () {
    var t = document.activeElement;t && t.blur && t != document.body && t.blur();
  }, i.pointerMove = function (t, e) {
    var n = this._dragPointerMove(t, e);this.emitEvent("pointerMove", [t, e, n]), this._dragMove(t, e, n);
  }, i._dragPointerMove = function (t, e) {
    var n = { x: e.pageX - this.pointerDownPointer.pageX, y: e.pageY - this.pointerDownPointer.pageY };return !this.isDragging && this.hasDragStarted(n) && this._dragStart(t, e), n;
  }, i.hasDragStarted = function (t) {
    return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
  }, i.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
  }, i._dragPointerUp = function (t, e) {
    this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
  }, i._dragStart = function (t, e) {
    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e);
  }, i.dragStart = function (t, e) {
    this.emitEvent("dragStart", [t, e]);
  }, i._dragMove = function (t, e, n) {
    this.isDragging && this.dragMove(t, e, n);
  }, i.dragMove = function (t, e, n) {
    t.preventDefault(), this.emitEvent("dragMove", [t, e, n]);
  }, i._dragEnd = function (t, e) {
    this.isDragging = !1, setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this)), this.dragEnd(t, e);
  }, i.dragEnd = function (t, e) {
    this.emitEvent("dragEnd", [t, e]);
  }, i.onclick = function (t) {
    this.isPreventingClicks && t.preventDefault();
  }, i._staticClick = function (t, e) {
    this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
      delete this.isIgnoringMouseUp;
    }.bind(this), 400)));
  }, i.staticClick = function (t, e) {
    this.emitEvent("staticClick", [t, e]);
  }, n.getPointerPoint = e.getPointerPoint, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (n, i, o) {
    return e(t, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils);
}(window, function (t, e, n, i) {
  i.extend(e.defaults, { draggable: ">1", dragThreshold: 3 }), e.createMethods.push("_createDrag");var o = e.prototype;i.extend(o, n.prototype), o._touchActionValue = "pan-y";var r = "createTouch" in document,
      a = !1;o._createDrag = function () {
    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), r && !a && (t.addEventListener("touchmove", function () {}), a = !0);
  }, o.onActivateDrag = function () {
    this.handles = [this.viewport], this.bindHandles(), this.updateDraggable();
  }, o.onDeactivateDrag = function () {
    this.unbindHandles(), this.element.classList.remove("is-draggable");
  }, o.updateDraggable = function () {
    ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable");
  }, o.bindDrag = function () {
    this.options.draggable = !0, this.updateDraggable();
  }, o.unbindDrag = function () {
    this.options.draggable = !1, this.updateDraggable();
  }, o._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  }, o.pointerDown = function (e, n) {
    this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), t.addEventListener("scroll", this), this._pointerDownDefault(e, n)) : this._pointerDownDefault(e, n);
  }, o._pointerDownDefault = function (t, e) {
    this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e]);
  };var s = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };function l() {
    return { x: t.pageXOffset, y: t.pageYOffset };
  }return o.pointerDownFocus = function (t) {
    s[t.target.nodeName] || this.focus();
  }, o._pointerDownPreventDefault = function (t) {
    var e = "touchstart" == t.type,
        n = "touch" == t.pointerType,
        i = s[t.target.nodeName];e || n || i || t.preventDefault();
  }, o.hasDragStarted = function (t) {
    return Math.abs(t.x) > this.options.dragThreshold;
  }, o.pointerUp = function (t, e) {
    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e);
  }, o.pointerDone = function () {
    t.removeEventListener("scroll", this), delete this.pointerDownScroll;
  }, o.dragStart = function (e, n) {
    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [n]));
  }, o.pointerMove = function (t, e) {
    var n = this._dragPointerMove(t, e);this.dispatchEvent("pointerMove", t, [e, n]), this._dragMove(t, e, n);
  }, o.dragMove = function (t, e, n) {
    if (this.isDraggable) {
      t.preventDefault(), this.previousDragX = this.dragX;var i = this.options.rightToLeft ? -1 : 1;this.options.wrapAround && (n.x = n.x % this.slideableWidth);var o = this.dragStartPosition + n.x * i;if (!this.options.wrapAround && this.slides.length) {
        var r = Math.max(-this.slides[0].target, this.dragStartPosition);o = o > r ? .5 * (o + r) : o;var a = Math.min(-this.getLastSlide().target, this.dragStartPosition);o = o < a ? .5 * (o + a) : o;
      }this.dragX = o, this.dragMoveTime = new Date(), this.dispatchEvent("dragMove", t, [e, n]);
    }
  }, o.dragEnd = function (t, e) {
    if (this.isDraggable) {
      this.options.freeScroll && (this.isFreeScrolling = !0);var n = this.dragEndRestingSelect();if (this.options.freeScroll && !this.options.wrapAround) {
        var i = this.getRestingPosition();this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target;
      } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e]);
    }
  }, o.dragEndRestingSelect = function () {
    var t = this.getRestingPosition(),
        e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
        n = this._getClosestResting(t, e, 1),
        i = this._getClosestResting(t, e, -1);return n.distance < i.distance ? n.index : i.index;
  }, o._getClosestResting = function (t, e, n) {
    for (var i = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function (t, e) {
      return t <= e;
    } : function (t, e) {
      return t < e;
    }; r(e, o) && (i += n, o = e, null !== (e = this.getSlideDistance(-t, i)));) {
      e = Math.abs(e);
    }return { distance: o, index: i - n };
  }, o.getSlideDistance = function (t, e) {
    var n = this.slides.length,
        o = this.options.wrapAround && n > 1,
        r = o ? i.modulo(e, n) : e,
        a = this.slides[r];if (!a) return null;var s = o ? this.slideableWidth * Math.floor(e / n) : 0;return t - (a.target + s);
  }, o.dragEndBoostSelect = function () {
    if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
        e = this.previousDragX - this.dragX;return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
  }, o.staticClick = function (t, e) {
    var n = this.getParentCell(t.target),
        i = n && n.element,
        o = n && this.cells.indexOf(n);this.dispatchEvent("staticClick", t, [e, i, o]);
  }, o.onscroll = function () {
    var t = l(),
        e = this.pointerDownScroll.x - t.x,
        n = this.pointerDownScroll.y - t.y;(Math.abs(e) > 3 || Math.abs(n) > 3) && this._pointerDone();
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (n, i, o) {
    return e(t, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils);
}(window, function (t, e, n, i) {
  "use strict";
  var o = "http://www.w3.org/2000/svg";function r(t, e) {
    this.direction = t, this.parent = e, this._create();
  }r.prototype = Object.create(n.prototype), r.prototype._create = function () {
    this.isEnabled = !0, this.isPrevious = -1 == this.direction;var t = this.parent.options.rightToLeft ? 1 : -1;this.isLeft = this.direction == t;var e = this.element = document.createElement("button");e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");var n = this.createSVG();e.appendChild(n), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, r.prototype.activate = function () {
    this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
  }, r.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this);
  }, r.prototype.createSVG = function () {
    var t = document.createElementNS(o, "svg");t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");var e = document.createElementNS(o, "path"),
        n = function (t) {
      if ("string" == typeof t) return t;return "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z";
    }(this.parent.options.arrowShape);return e.setAttribute("d", n), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t;
  }, r.prototype.handleEvent = i.handleEvent, r.prototype.onclick = function () {
    if (this.isEnabled) {
      this.parent.uiChange();var t = this.isPrevious ? "previous" : "next";this.parent[t]();
    }
  }, r.prototype.enable = function () {
    this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0);
  }, r.prototype.disable = function () {
    this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1);
  }, r.prototype.update = function () {
    var t = this.parent.slides;if (this.parent.options.wrapAround && t.length > 1) this.enable();else {
      var e = t.length ? t.length - 1 : 0,
          n = this.isPrevious ? 0 : e;this[this.parent.selectedIndex == n ? "disable" : "enable"]();
    }
  }, r.prototype.destroy = function () {
    this.deactivate(), this.allOff();
  }, i.extend(e.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }), e.createMethods.push("_createPrevNextButtons");var a = e.prototype;return a._createPrevNextButtons = function () {
    this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons));
  }, a.activatePrevNextButtons = function () {
    this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
  }, a.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
  }, e.PrevNextButton = r, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (n, i, o) {
    return e(t, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils);
}(window, function (t, e, n, i) {
  function o(t) {
    this.parent = t, this._create();
  }o.prototype = Object.create(n.prototype), o.prototype._create = function () {
    this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, o.prototype.activate = function () {
    this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder);
  }, o.prototype.deactivate = function () {
    this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder);
  }, o.prototype.setDots = function () {
    var t = this.parent.slides.length - this.dots.length;t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
  }, o.prototype.addDots = function (t) {
    for (var e = document.createDocumentFragment(), n = [], i = this.dots.length, o = i + t, r = i; r < o; r++) {
      var a = document.createElement("li");a.className = "dot", a.setAttribute("aria-label", "Page dot " + (r + 1)), e.appendChild(a), n.push(a);
    }this.holder.appendChild(e), this.dots = this.dots.concat(n);
  }, o.prototype.removeDots = function (t) {
    this.dots.splice(this.dots.length - t, t).forEach(function (t) {
      this.holder.removeChild(t);
    }, this);
  }, o.prototype.updateSelected = function () {
    this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"));
  }, o.prototype.onTap = o.prototype.onClick = function (t) {
    var e = t.target;if ("LI" == e.nodeName) {
      this.parent.uiChange();var n = this.dots.indexOf(e);this.parent.select(n);
    }
  }, o.prototype.destroy = function () {
    this.deactivate(), this.allOff();
  }, e.PageDots = o, i.extend(e.defaults, { pageDots: !0 }), e.createMethods.push("_createPageDots");var r = e.prototype;return r._createPageDots = function () {
    this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots));
  }, r.activatePageDots = function () {
    this.pageDots.activate();
  }, r.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  }, r.updatePageDots = function () {
    this.pageDots.setDots();
  }, r.deactivatePageDots = function () {
    this.pageDots.deactivate();
  }, e.PageDots = o, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, n, i) {
    return e(t, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
}(window, function (t, e, n) {
  function i(t) {
    this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }i.prototype = Object.create(t.prototype), i.prototype.play = function () {
    "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()));
  }, i.prototype.tick = function () {
    if ("playing" == this.state) {
      var t = this.parent.options.autoPlay;t = "number" == typeof t ? t : 3e3;var e = this;this.clear(), this.timeout = setTimeout(function () {
        e.parent.next(!0), e.tick();
      }, t);
    }
  }, i.prototype.stop = function () {
    this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange);
  }, i.prototype.clear = function () {
    clearTimeout(this.timeout);
  }, i.prototype.pause = function () {
    "playing" == this.state && (this.state = "paused", this.clear());
  }, i.prototype.unpause = function () {
    "paused" == this.state && this.play();
  }, i.prototype.visibilityChange = function () {
    this[document.hidden ? "pause" : "unpause"]();
  }, i.prototype.visibilityPlay = function () {
    this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay);
  }, e.extend(n.defaults, { pauseAutoPlayOnHover: !0 }), n.createMethods.push("_createPlayer");var o = n.prototype;return o._createPlayer = function () {
    this.player = new i(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
  }, o.activatePlayer = function () {
    this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
  }, o.playPlayer = function () {
    this.player.play();
  }, o.stopPlayer = function () {
    this.player.stop();
  }, o.pausePlayer = function () {
    this.player.pause();
  }, o.unpausePlayer = function () {
    this.player.unpause();
  }, o.deactivatePlayer = function () {
    this.player.stop(), this.element.removeEventListener("mouseenter", this);
  }, o.onmouseenter = function () {
    this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
  }, o.onmouseleave = function () {
    this.player.unpause(), this.element.removeEventListener("mouseleave", this);
  }, n.Player = i, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (n, i) {
    return e(t, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils);
}(window, function (t, e, n) {
  var i = e.prototype;return i.insert = function (t, e) {
    var n = this._makeCells(t);if (n && n.length) {
      var i = this.cells.length;e = void 0 === e ? i : e;var o = function (t) {
        var e = document.createDocumentFragment();return t.forEach(function (t) {
          e.appendChild(t.element);
        }), e;
      }(n),
          r = e == i;if (r) this.slider.appendChild(o);else {
        var a = this.cells[e].element;this.slider.insertBefore(o, a);
      }if (0 === e) this.cells = n.concat(this.cells);else if (r) this.cells = this.cells.concat(n);else {
        var s = this.cells.splice(e, i - e);this.cells = this.cells.concat(n).concat(s);
      }this._sizeCells(n), this.cellChange(e, !0);
    }
  }, i.append = function (t) {
    this.insert(t, this.cells.length);
  }, i.prepend = function (t) {
    this.insert(t, 0);
  }, i.remove = function (t) {
    var e = this.getCells(t);if (e && e.length) {
      var i = this.cells.length - 1;e.forEach(function (t) {
        t.remove();var e = this.cells.indexOf(t);i = Math.min(e, i), n.removeFrom(this.cells, t);
      }, this), this.cellChange(i, !0);
    }
  }, i.cellSizeChange = function (t) {
    var e = this.getCell(t);if (e) {
      e.getSize();var n = this.cells.indexOf(e);this.cellChange(n);
    }
  }, i.cellChange = function (t, e) {
    var n = this.selectedElement;this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();var i = this.getCell(n);i && (this.selectedIndex = this.getCellSlideIndex(i)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected();
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (n, i) {
    return e(t, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils);
}(window, function (t, e, n) {
  "use strict";
  e.createMethods.push("_createLazyload");var i = e.prototype;function o(t, e) {
    this.img = t, this.flickity = e, this.load();
  }return i._createLazyload = function () {
    this.on("select", this.lazyLoad);
  }, i.lazyLoad = function () {
    var t = this.options.lazyLoad;if (t) {
      var e = "number" == typeof t ? t : 0,
          i = [];this.getAdjacentCellElements(e).forEach(function (t) {
        var e = function (t) {
          if ("IMG" == t.nodeName) {
            var e = t.getAttribute("data-flickity-lazyload"),
                i = t.getAttribute("data-flickity-lazyload-src"),
                o = t.getAttribute("data-flickity-lazyload-srcset");if (e || i || o) return [t];
          }var r = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return n.makeArray(r);
        }(t);i = i.concat(e);
      }), i.forEach(function (t) {
        new o(t, this);
      }, this);
    }
  }, o.prototype.handleEvent = n.handleEvent, o.prototype.load = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this);var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
        e = this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset");
  }, o.prototype.onload = function (t) {
    this.complete(t, "flickity-lazyloaded");
  }, o.prototype.onerror = function (t) {
    this.complete(t, "flickity-lazyerror");
  }, o.prototype.complete = function (t, e) {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);var n = this.flickity.getParentCell(this.img),
        i = n && n.element;this.flickity.cellSizeChange(i), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, i);
  }, e.LazyLoader = o, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
}(window, function (t) {
  return t;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils);
}(window, function (t, e) {
  t.createMethods.push("_createAsNavFor");var n = t.prototype;return n._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);var t = this.options.asNavFor;if (t) {
      var e = this;setTimeout(function () {
        e.setNavCompanion(t);
      });
    }
  }, n.setNavCompanion = function (n) {
    n = e.getQueryElement(n);var i = t.data(n);if (i && i != this) {
      this.navCompanion = i;var o = this;this.onNavCompanionSelect = function () {
        o.navCompanionSelect();
      }, i.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0);
    }
  }, n.navCompanionSelect = function (t) {
    if (this.navCompanion) {
      var e,
          n,
          i,
          o = this.navCompanion.selectedCells[0],
          r = this.navCompanion.cells.indexOf(o),
          a = r + this.navCompanion.selectedCells.length - 1,
          s = Math.floor((e = r, n = a, i = this.navCompanion.cellAlign, (n - e) * i + e));if (this.selectCell(s, !1, t), this.removeNavSelectedElements(), !(s >= this.cells.length)) {
        var l = this.cells.slice(r, a + 1);this.navSelectedElements = l.map(function (t) {
          return t.element;
        }), this.changeNavSelectedClass("add");
      }
    }
  }, n.changeNavSelectedClass = function (t) {
    this.navSelectedElements.forEach(function (e) {
      e.classList[t]("is-nav-selected");
    });
  }, n.activateAsNavFor = function () {
    this.navCompanionSelect(!0);
  }, n.removeNavSelectedElements = function () {
    this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
  }, n.onNavStaticClick = function (t, e, n, i) {
    "number" == typeof i && this.navCompanion.selectCell(i);
  }, n.deactivateAsNavFor = function () {
    this.removeNavSelectedElements();
  }, n.destroyAsNavFor = function () {
    this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
  }, t;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (n) {
    return e(t, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter);
}("undefined" != typeof window ? window : this, function (t, e) {
  var n = t.jQuery,
      i = t.console;function o(t, e) {
    for (var n in e) {
      t[n] = e[n];
    }return t;
  }var r = Array.prototype.slice;function a(t, e, s) {
    if (!(this instanceof a)) return new a(t, e, s);var l,
        c = t;("string" == typeof t && (c = document.querySelectorAll(t)), c) ? (this.elements = (l = c, Array.isArray(l) ? l : "object" == (typeof l === "undefined" ? "undefined" : _typeof(l)) && "number" == typeof l.length ? r.call(l) : [l]), this.options = o({}, this.options), "function" == typeof e ? s = e : o(this.options, e), s && this.on("always", s), this.getImages(), n && (this.jqDeferred = new n.Deferred()), setTimeout(this.check.bind(this))) : i.error("Bad element for imagesLoaded " + (c || t));
  }a.prototype = Object.create(e.prototype), a.prototype.options = {}, a.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, a.prototype.addElementImages = function (t) {
    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);var e = t.nodeType;if (e && s[e]) {
      for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
        var o = n[i];this.addImage(o);
      }if ("string" == typeof this.options.background) {
        var r = t.querySelectorAll(this.options.background);for (i = 0; i < r.length; i++) {
          var a = r[i];this.addElementBackgroundImages(a);
        }
      }
    }
  };var s = { 1: !0, 9: !0, 11: !0 };function l(t) {
    this.img = t;
  }function c(t, e) {
    this.url = t, this.element = e, this.img = new Image();
  }return a.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);if (e) for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
      var o = i && i[2];o && this.addBackground(o, t), i = n.exec(e.backgroundImage);
    }
  }, a.prototype.addImage = function (t) {
    var e = new l(t);this.images.push(e);
  }, a.prototype.addBackground = function (t, e) {
    var n = new c(t, e);this.images.push(n);
  }, a.prototype.check = function () {
    var t = this;function e(e, n, i) {
      setTimeout(function () {
        t.progress(e, n, i);
      });
    }this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) {
      t.once("progress", e), t.check();
    }) : this.complete();
  }, a.prototype.progress = function (t, e, n) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + n, t, e);
  }, a.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";this.jqDeferred[e](this);
    }
  }, l.prototype = Object.create(e.prototype), l.prototype.check = function () {
    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src);
  }, l.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  }, l.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]);
  }, l.prototype.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, l.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, l.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, l.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, c.prototype = Object.create(l.prototype), c.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, c.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, c.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]);
  }, a.makeJQueryPlugin = function (e) {
    (e = e || t.jQuery) && ((n = e).fn.imagesLoaded = function (t, e) {
      return new a(this, t, e).jqDeferred.promise(n(this));
    });
  }, a.makeJQueryPlugin(), a;
}), function (t, e) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (n, i) {
    return e(t, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded);
}(window, function (t, e, n) {
  "use strict";
  e.createMethods.push("_createImagesLoaded");var i = e.prototype;return i._createImagesLoaded = function () {
    this.on("activate", this.imagesLoaded);
  }, i.imagesLoaded = function () {
    if (this.options.imagesLoaded) {
      var t = this;n(this.slider).on("progress", function (e, n) {
        var i = t.getParentCell(n.img);t.cellSizeChange(i && i.element), t.options.freeScroll || t.positionSliderAtSelected();
      });
    }
  }, e;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e() : t.Headroom = e();
}(this, function () {
  "use strict";
  var t = { bind: !!function () {}.bind, classList: "classList" in document.documentElement, rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) };function e(t) {
    this.callback = t, this.ticking = !1;
  }function n(t, e) {
    var i;e = function t(e) {
      if (arguments.length <= 0) throw new Error("Missing arguments in extend function");var n,
          i,
          o,
          r = e || {};for (i = 1; i < arguments.length; i++) {
        var a = arguments[i] || {};for (n in a) {
          "object" != _typeof(r[n]) || (o = r[n]) && "undefined" != typeof window && (o === window || o.nodeType) ? r[n] = r[n] || a[n] : r[n] = t(r[n], a[n]);
        }
      }return r;
    }(e, n.options), this.lastKnownScrollY = 0, this.elem = t, this.tolerance = (i = e.tolerance) === Object(i) ? i : { down: i, up: i }, this.classes = e.classes, this.offset = e.offset, this.scroller = e.scroller, this.initialised = !1, this.onPin = e.onPin, this.onUnpin = e.onUnpin, this.onTop = e.onTop, this.onNotTop = e.onNotTop, this.onBottom = e.onBottom, this.onNotBottom = e.onNotBottom;
  }return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, e.prototype = { constructor: e, update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    }, requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    }, handleEvent: function handleEvent() {
      this.requestTick();
    } }, n.prototype = { constructor: n, init: function init() {
      if (n.cutsTheMustard) return this.debouncer = new e(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
    }, destroy: function destroy() {
      var t = this.classes;for (var e in this.initialised = !1, t) {
        t.hasOwnProperty(e) && this.elem.classList.remove(t[e]);
      }this.scroller.removeEventListener("scroll", this.debouncer, !1);
    }, attachEvent: function attachEvent() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    }, unpin: function unpin() {
      var t = this.elem.classList,
          e = this.classes;!t.contains(e.pinned) && t.contains(e.unpinned) || (t.add(e.unpinned), t.remove(e.pinned), this.onUnpin && this.onUnpin.call(this));
    }, pin: function pin() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.unpinned) && (t.remove(e.unpinned), t.add(e.pinned), this.onPin && this.onPin.call(this));
    }, top: function top() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.top) || (t.add(e.top), t.remove(e.notTop), this.onTop && this.onTop.call(this));
    }, notTop: function notTop() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.notTop) || (t.add(e.notTop), t.remove(e.top), this.onNotTop && this.onNotTop.call(this));
    }, bottom: function bottom() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.bottom) || (t.add(e.bottom), t.remove(e.notBottom), this.onBottom && this.onBottom.call(this));
    }, notBottom: function notBottom() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.notBottom) || (t.add(e.notBottom), t.remove(e.bottom), this.onNotBottom && this.onNotBottom.call(this));
    }, getScrollY: function getScrollY() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }, getViewportHeight: function getViewportHeight() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }, getElementPhysicalHeight: function getElementPhysicalHeight(t) {
      return Math.max(t.offsetHeight, t.clientHeight);
    }, getScrollerPhysicalHeight: function getScrollerPhysicalHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
    }, getDocumentHeight: function getDocumentHeight() {
      var t = document.body,
          e = document.documentElement;return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight);
    }, getElementHeight: function getElementHeight(t) {
      return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight);
    }, getScrollerHeight: function getScrollerHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    }, isOutOfBounds: function isOutOfBounds(t) {
      var e = t < 0,
          n = t + this.getScrollerPhysicalHeight() > this.getScrollerHeight();return e || n;
    }, toleranceExceeded: function toleranceExceeded(t, e) {
      return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e];
    }, shouldUnpin: function shouldUnpin(t, e) {
      var n = t > this.lastKnownScrollY,
          i = t >= this.offset;return n && i && e;
    }, shouldPin: function shouldPin(t, e) {
      var n = t < this.lastKnownScrollY,
          i = t <= this.offset;return n && e || i;
    }, update: function update() {
      var t = this.getScrollY(),
          e = t > this.lastKnownScrollY ? "down" : "up",
          n = this.toleranceExceeded(t, e);this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(), t + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(t, n) ? this.unpin() : this.shouldPin(t, n) && this.pin(), this.lastKnownScrollY = t);
    } }, n.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: window, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, n.cutsTheMustard = void 0 !== t && t.rAF && t.bind && t.classList, n;
}), function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function (t) {
  "use strict";
  var e = t.scrollTo = function (e, n, i) {
    return t(window).scrollTo(e, n, i);
  };function n(e) {
    return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
  }function i(e) {
    return t.isFunction(e) || t.isPlainObject(e) ? e : { top: e, left: e };
  }return e.defaults = { axis: "xy", duration: 0, limit: !0 }, t.fn.scrollTo = function (o, r, a) {
    "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && (a = r, r = 0), "function" == typeof a && (a = { onAfter: a }), "max" === o && (o = 9e9), a = t.extend({}, e.defaults, a), r = r || a.duration;var s = a.queue && a.axis.length > 1;return s && (r /= 2), a.offset = i(a.offset), a.over = i(a.over), this.each(function () {
      if (null !== o) {
        var l,
            c = n(this),
            d = c ? this.contentWindow || window : this,
            u = t(d),
            h = o,
            f = {};switch (typeof h === "undefined" ? "undefined" : _typeof(h)) {case "number":case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)) {
              h = i(h);break;
            }h = c ? t(h) : t(h, d);case "object":
            if (0 === h.length) return;(h.is || h.style) && (l = (h = t(h)).offset());}var p = t.isFunction(a.offset) && a.offset(d, h) || a.offset;t.each(a.axis.split(""), function (t, n) {
          var i = "x" === n ? "Left" : "Top",
              o = i.toLowerCase(),
              r = "scroll" + i,
              g = u[r](),
              v = e.max(d, n);if (l) f[r] = l[o] + (c ? 0 : g - u.offset()[o]), a.margin && (f[r] -= parseInt(h.css("margin" + i), 10) || 0, f[r] -= parseInt(h.css("border" + i + "Width"), 10) || 0), f[r] += p[o] || 0, a.over[o] && (f[r] += h["x" === n ? "width" : "height"]() * a.over[o]);else {
            var y = h[o];f[r] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y;
          }a.limit && /^\d+$/.test(f[r]) && (f[r] = f[r] <= 0 ? 0 : Math.min(f[r], v)), !t && a.axis.length > 1 && (g === f[r] ? f = {} : s && (m(a.onAfterFirst), f = {}));
        }), m(a.onAfter);
      }function m(e) {
        var n = t.extend({}, a, { queue: !0, duration: r, complete: e && function () {
            e.call(d, h, a);
          } });u.animate(f, n);
      }
    });
  }, e.max = function (e, i) {
    var o = "x" === i ? "Width" : "Height",
        r = "scroll" + o;if (!n(e)) return e[r] - t(e)[o.toLowerCase()]();var a = "client" + o,
        s = e.ownerDocument || e.document,
        l = s.documentElement,
        c = s.body;return Math.max(l[r], c[r]) - Math.min(l[a], c[a]);
  }, t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = { get: function get(e) {
      return t(e.elem)[e.prop]();
    }, set: function set(e) {
      var n = this.get(e);if (e.options.interrupt && e._last && e._last !== n) return t(e.elem).stop();var i = Math.round(e.now);n !== i && (t(e.elem)[e.prop](i), e._last = this.get(e));
    } }, e;
}), function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).lozad = e();
}(this, function () {
  "use strict";
  var t = "undefined" != typeof document && document.documentMode,
      e = { rootMargin: "0px", threshold: 0, load: function load(e) {
      if ("picture" === e.nodeName.toLowerCase()) {
        var n = document.createElement("img");t && e.getAttribute("data-iesrc") && (n.src = e.getAttribute("data-iesrc")), e.getAttribute("data-alt") && (n.alt = e.getAttribute("data-alt")), e.append(n);
      }if ("video" === e.nodeName.toLowerCase() && !e.getAttribute("data-src") && e.children) {
        for (var i = e.children, o = void 0, r = 0; r <= i.length - 1; r++) {
          (o = i[r].getAttribute("data-src")) && (i[r].src = o);
        }e.load();
      }if (e.getAttribute("data-src") && (e.src = e.getAttribute("data-src")), e.getAttribute("data-srcset") && e.setAttribute("srcset", e.getAttribute("data-srcset")), e.getAttribute("data-background-image")) e.style.backgroundImage = "url('" + e.getAttribute("data-background-image").split(",").join("'),url('") + "')";else if (e.getAttribute("data-background-image-set")) {
        var a = e.getAttribute("data-background-image-set").split(","),
            s = a[0].substr(0, a[0].indexOf(" ")) || a[0];s = -1 === s.indexOf("url(") ? "url(" + s + ")" : s, 1 === a.length ? e.style.backgroundImage = s : e.setAttribute("style", (e.getAttribute("style") || "") + "background-image: " + s + "; background-image: -webkit-image-set(" + a + "); background-image: image-set(" + a + ")");
      }e.getAttribute("data-toggle-class") && e.classList.toggle(e.getAttribute("data-toggle-class"));
    }, loaded: function loaded() {} };function n(t) {
    t.setAttribute("data-loaded", !0);
  }var i = function i(t) {
    return "true" === t.getAttribute("data-loaded");
  },
      o = function o(t, e) {
    return function (o, r) {
      o.forEach(function (o) {
        (o.intersectionRatio > 0 || o.isIntersecting) && (r.unobserve(o.target), i(o.target) || (t(o.target), n(o.target), e(o.target)));
      });
    };
  },
      r = function r(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t);
  };return function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".lozad",
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = Object.assign({}, e, a),
        l = s.root,
        c = s.rootMargin,
        d = s.threshold,
        u = s.load,
        h = s.loaded,
        f = void 0;return "undefined" != typeof window && window.IntersectionObserver && (f = new IntersectionObserver(o(u, h), { root: l, rootMargin: c, threshold: d })), { observe: function observe() {
        for (var e = r(t, l), o = 0; o < e.length; o++) {
          i(e[o]) || (f ? f.observe(e[o]) : (u(e[o]), n(e[o]), h(e[o])));
        }
      }, triggerLoad: function triggerLoad(t) {
        i(t) || (u(t), n(t), h(t));
      }, observer: f };
  };
}), function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? t(require("jquery")) : t(window.jQuery || window.Zepto);
}(function (t) {
  var e,
      n,
      i,
      o,
      r,
      a,
      s = function s() {},
      l = !!window.jQuery,
      c = t(window),
      d = function d(t, n) {
    e.ev.on("mfp" + t + ".mfp", n);
  },
      u = function u(e, n, i, o) {
    var r = document.createElement("div");return r.className = "mfp-" + e, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = t(r), n && r.appendTo(n)), r;
  },
      h = function h(n, i) {
    e.ev.triggerHandler("mfp" + n, i), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]));
  },
      f = function f(n) {
    return n === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), a = n), e.currTemplate.closeBtn;
  },
      p = function p() {
    t.magnificPopup.instance || ((e = new s()).init(), t.magnificPopup.instance = e);
  };s.prototype = { constructor: s, init: function init() {
      var n = navigator.appVersion;e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = function () {
        var t = document.createElement("p").style,
            e = ["ms", "O", "Moz", "Webkit"];if (void 0 !== t.transition) return !0;for (; e.length;) {
          if (e.pop() + "Transition" in t) return !0;
        }return !1;
      }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = t(document), e.popupsCache = {};
    }, open: function open(n) {
      var o;if (!1 === n.isObj) {
        e.items = n.items.toArray(), e.index = 0;var a,
            s = n.items;for (o = 0; o < s.length; o++) {
          if ((a = s[o]).parsed && (a = a.el[0]), a === n.el[0]) {
            e.index = o;break;
          }
        }
      } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;if (!e.isOpen) {
        e.types = [], r = "", n.mainEl && n.mainEl.length ? e.ev = n.mainEl.eq(0) : e.ev = i, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = u("bg").on("click.mfp", function () {
          e.close();
        }), e.wrap = u("wrap").attr("tabindex", -1).on("click.mfp", function (t) {
          e._checkIfClose(t.target) && e.close();
        }), e.container = u("container", e.wrap)), e.contentContainer = u("content"), e.st.preloader && (e.preloader = u("preloader", e.container, e.st.tLoading));var l = t.magnificPopup.modules;for (o = 0; o < l.length; o++) {
          var p = l[o];p = p.charAt(0).toUpperCase() + p.slice(1), e["init" + p].call(e);
        }h("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (d("MarkupParse", function (t, e, n, i) {
          n.close_replaceWith = f(i.type);
        }), r += " mfp-close-btn-in") : e.wrap.append(f())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: c.scrollTop(), position: "absolute" }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({ height: i.height(), position: "absolute" }), e.st.enableEscapeKey && i.on("keyup.mfp", function (t) {
          27 === t.keyCode && e.close();
        }), c.on("resize.mfp", function () {
          e.updateSize();
        }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);var m = e.wH = c.height(),
            g = {};if (e.fixedContentPos && e._hasScrollBar(m)) {
          var v = e._getScrollbarSize();v && (g.marginRight = v);
        }e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : g.overflow = "hidden");var y = e.st.mainClass;return e.isIE7 && (y += " mfp-ie7"), y && e._addClassToMFP(y), e.updateItemHTML(), h("BuildControls"), t("html").css(g), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function () {
          e.content ? (e._addClassToMFP("mfp-ready"), e._setFocus()) : e.bgOverlay.addClass("mfp-ready"), i.on("focusin.mfp", e._onFocusIn);
        }, 16), e.isOpen = !0, e.updateSize(m), h("Open"), n;
      }e.updateItemHTML();
    }, close: function close() {
      e.isOpen && (h("BeforeClose"), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP("mfp-removing"), setTimeout(function () {
        e._close();
      }, e.st.removalDelay)) : e._close());
    }, _close: function _close() {
      h("Close");var n = "mfp-removing mfp-ready ";if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
        var o = { marginRight: "" };e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o);
      }i.off("keyup.mfp focusin.mfp"), e.ev.off(".mfp"), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, h("AfterClose");
    }, updateSize: function updateSize(t) {
      if (e.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;e.wrap.css("height", i), e.wH = i;
      } else e.wH = t || c.height();e.fixedContentPos || e.wrap.css("height", e.wH), h("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var n = e.items[e.index];e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));var i = n.type;if (h("BeforeChange", [e.currItem ? e.currItem.type : "", i]), e.currItem = n, !e.currTemplate[i]) {
        var r = !!e.st[i] && e.st[i].markup;h("FirstMarkupParse", r), e.currTemplate[i] = !r || t(r);
      }o && o !== n.type && e.container.removeClass("mfp-" + o + "-holder");var a = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, e.currTemplate[i]);e.appendContent(a, i), n.preloaded = !0, h("Change", n), o = n.type, e.container.prepend(e.contentContainer), h("AfterChange");
    }, appendContent: function appendContent(t, n) {
      e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[n] ? e.content.find(".mfp-close").length || e.content.append(f()) : e.content = t : e.content = "", h("BeforeAppend"), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content);
    }, parseEl: function parseEl(n) {
      var i,
          o = e.items[n];if (o.tagName ? o = { el: t(o) } : (i = o.type, o = { data: o, src: o.src }), o.el) {
        for (var r = e.types, a = 0; a < r.length; a++) {
          if (o.el.hasClass("mfp-" + r[a])) {
            i = r[a];break;
          }
        }o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"));
      }return o.type = i || e.st.type || "inline", o.index = n, o.parsed = !0, e.items[n] = o, h("ElementParse", o), e.items[n];
    }, addGroup: function addGroup(t, n) {
      var i = function i(_i) {
        _i.mfpEl = this, e._openClick(_i, t, n);
      };n || (n = {});var o = "click.magnificPopup";n.mainEl = t, n.items ? (n.isObj = !0, t.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? t.off(o).on(o, n.delegate, i) : (n.items = t, t.off(o).on(o, i)));
    }, _openClick: function _openClick(n, i, o) {
      if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
        var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;if (r) if (t.isFunction(r)) {
          if (!r.call(e)) return !0;
        } else if (c.width() < r) return !0;n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), o.el = t(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), e.open(o);
      }
    }, updateStatus: function updateStatus(t, i) {
      if (e.preloader) {
        n !== t && e.container.removeClass("mfp-s-" + n), i || "loading" !== t || (i = e.st.tLoading);var o = { status: t, text: i };h("UpdateStatus", o), t = o.status, i = o.text, e.preloader.html(i), e.preloader.find("a").on("click", function (t) {
          t.stopImmediatePropagation();
        }), e.container.addClass("mfp-s-" + t), n = t;
      }
    }, _checkIfClose: function _checkIfClose(n) {
      if (!t(n).hasClass("mfp-prevent-close")) {
        var i = e.st.closeOnContentClick,
            o = e.st.closeOnBgClick;if (i && o) return !0;if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0]) return !0;if (n === e.content[0] || t.contains(e.content[0], n)) {
          if (i) return !0;
        } else if (o && t.contains(document, n)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(t) {
      e.bgOverlay.addClass(t), e.wrap.addClass(t);
    }, _removeClassFromMFP: function _removeClassFromMFP(t) {
      this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
    }, _hasScrollBar: function _hasScrollBar(t) {
      return (e.isIE7 ? i.height() : document.body.scrollHeight) > (t || c.height());
    }, _setFocus: function _setFocus() {
      (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
    }, _onFocusIn: function _onFocusIn(n) {
      if (n.target !== e.wrap[0] && !t.contains(e.wrap[0], n.target)) return e._setFocus(), !1;
    }, _parseMarkup: function _parseMarkup(e, n, i) {
      var o;i.data && (n = t.extend(i.data, n)), h("MarkupParse", [e, n, i]), t.each(n, function (n, i) {
        if (void 0 === i || !1 === i) return !0;if ((o = n.split("_")).length > 1) {
          var r = e.find(".mfp-" + o[0]);if (r.length > 0) {
            var a = o[1];"replaceWith" === a ? r[0] !== i[0] && r.replaceWith(i) : "img" === a ? r.is("img") ? r.attr("src", i) : r.replaceWith(t("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(o[1], i);
          }
        } else e.find(".mfp-" + n).html(i);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === e.scrollbarSize) {
        var t = document.createElement("div");t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
      }return e.scrollbarSize;
    } }, t.magnificPopup = { instance: null, proto: s.prototype, modules: [], open: function open(e, n) {
      return p(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = n || 0, this.instance.open(e);
    }, close: function close() {
      return t.magnificPopup.instance && t.magnificPopup.instance.close();
    }, registerModule: function registerModule(e, n) {
      n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, t.fn.magnificPopup = function (n) {
    p();var i = t(this);if ("string" == typeof n) {
      if ("open" === n) {
        var o,
            r = l ? i.data("magnificPopup") : i[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), e._openClick({ mfpEl: o }, i, r);
      } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1));
    } else n = t.extend(!0, {}, n), l ? i.data("magnificPopup", n) : i[0].magnificPopup = n, e.addGroup(i, n);return i;
  };var m,
      g,
      v,
      y = function y() {
    v && (g.after(v.addClass(m)).detach(), v = null);
  };t.magnificPopup.registerModule("inline", { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        e.types.push("inline"), d("Close.inline", function () {
          y();
        });
      }, getInline: function getInline(n, i) {
        if (y(), n.src) {
          var o = e.st.inline,
              r = t(n.src);if (r.length) {
            var a = r[0].parentNode;a && a.tagName && (g || (m = o.hiddenClass, g = u(m), m = "mfp-" + m), v = r.after(g).detach().removeClass(m)), e.updateStatus("ready");
          } else e.updateStatus("error", o.tNotFound), r = t("<div>");return n.inlineElement = r, r;
        }return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i;
      } } });var b,
      _ = function _() {
    b && t(document.body).removeClass(b);
  },
      w = function w() {
    _(), e.req && e.req.abort();
  };t.magnificPopup.registerModule("ajax", { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        e.types.push("ajax"), b = e.st.ajax.cursor, d("Close.ajax", w), d("BeforeChange.ajax", w);
      }, getAjax: function getAjax(n) {
        b && t(document.body).addClass(b), e.updateStatus("loading");var i = t.extend({ url: n.src, success: function success(i, o, r) {
            var a = { data: i, xhr: r };h("ParseAjax", a), e.appendContent(t(a.data), "ajax"), n.finished = !0, _(), e._setFocus(), setTimeout(function () {
              e.wrap.addClass("mfp-ready");
            }, 16), e.updateStatus("ready"), h("AjaxContentAdded");
          }, error: function error() {
            _(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src));
          } }, e.st.ajax.settings);return e.req = t.ajax(i), "";
      } } });var C;t.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var n = e.st.image,
            i = ".image";e.types.push("image"), d("Open" + i, function () {
          "image" === e.currItem.type && n.cursor && t(document.body).addClass(n.cursor);
        }), d("Close" + i, function () {
          n.cursor && t(document.body).removeClass(n.cursor), c.off("resize.mfp");
        }), d("Resize" + i, e.resizeImage), e.isLowIE && d("AfterChange", e.resizeImage);
      }, resizeImage: function resizeImage() {
        var t = e.currItem;if (t && t.img && e.st.image.verticalFit) {
          var n = 0;e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n);
        }
      }, _onImageHasSize: function _onImageHasSize(t) {
        t.img && (t.hasSize = !0, C && clearInterval(C), t.isCheckingImgSize = !1, h("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1));
      }, findImageSize: function findImageSize(t) {
        var n = 0,
            i = t.img[0],
            o = function o(r) {
          C && clearInterval(C), C = setInterval(function () {
            i.naturalWidth > 0 ? e._onImageHasSize(t) : (n > 200 && clearInterval(C), 3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500));
          }, r);
        };o(1);
      }, getImage: function getImage(n, i) {
        var o = 0,
            r = function r() {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, h("ImageLoadComplete")) : ++o < 200 ? setTimeout(r, 100) : a());
        },
            a = function a() {
          n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            s = e.st.image,
            l = i.find(".mfp-img");if (l.length) {
          var c = document.createElement("img");c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = t(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
        }return e._parseMarkup(i, { title: function (n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;var i = e.st.image.titleSrc;if (i) {
              if (t.isFunction(i)) return i.call(e, n);if (n.el) return n.el.attr(i) || "";
            }return "";
          }(n), img_replaceWith: n.img }, n), e.resizeImage(), n.hasSize ? (C && clearInterval(C), n.loadError ? (i.addClass("mfp-loading"), e.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), e.updateStatus("ready")), i) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), e.findImageSize(n)), i);
      } } });var E;t.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(t) {
        return t.is("img") ? t : t.find("img");
      } }, proto: { initZoom: function initZoom() {
        var t,
            n = e.st.zoom,
            i = ".zoom";if (n.enabled && e.supportsTransition) {
          var o,
              r,
              a = n.duration,
              s = function s(t) {
            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                r = "transition";return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, e.css(o), e;
          },
              l = function l() {
            e.content.css("visibility", "visible");
          };d("BuildControls" + i, function () {
            if (e._allowZoom()) {
              if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void l();(r = s(t)).css(e._getOffset()), e.wrap.append(r), o = setTimeout(function () {
                r.css(e._getOffset(!0)), o = setTimeout(function () {
                  l(), setTimeout(function () {
                    r.remove(), t = r = null, h("ZoomAnimationEnded");
                  }, 16);
                }, a);
              }, 16);
            }
          }), d("BeforeClose" + i, function () {
            if (e._allowZoom()) {
              if (clearTimeout(o), e.st.removalDelay = a, !t) {
                if (!(t = e._getItemToZoom())) return;r = s(t);
              }r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout(function () {
                r.css(e._getOffset());
              }, 16);
            }
          }), d("Close" + i, function () {
            e._allowZoom() && (l(), r && r.remove(), t = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === e.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return !!e.currItem.hasSize && e.currItem.img;
      }, _getOffset: function _getOffset(n) {
        var i,
            o = (i = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
            r = parseInt(i.css("padding-top"), 10),
            a = parseInt(i.css("padding-bottom"), 10);o.top -= t(window).scrollTop() - r;var s = { width: i.width(), height: (l ? i.innerHeight() : i[0].offsetHeight) - a - r };return void 0 === E && (E = void 0 !== document.createElement("p").style.MozTransform), E ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s;
      } } });var D = function D(t) {
    if (e.currTemplate.iframe) {
      var n = e.currTemplate.iframe.find("iframe");n.length && (t || (n[0].src = "//about:blank"), e.isIE8 && n.css("display", t ? "block" : "none"));
    }
  };t.magnificPopup.registerModule("iframe", { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        e.types.push("iframe"), d("BeforeChange", function (t, e, n) {
          e !== n && ("iframe" === e ? D() : "iframe" === n && D(!0));
        }), d("Close.iframe", function () {
          D();
        });
      }, getIframe: function getIframe(n, i) {
        var o = n.src,
            r = e.st.iframe;t.each(r.patterns, function () {
          if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1;
        });var a = {};return r.srcAction && (a[r.srcAction] = o), e._parseMarkup(i, a, n), e.updateStatus("ready"), i;
      } } });var S = function S(t) {
    var n = e.items.length;return t > n - 1 ? t - n : t < 0 ? n + t : t;
  },
      T = function T(t, e, n) {
    return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n);
  };t.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var n = e.st.gallery,
            o = ".mfp-gallery";if (e.direction = !0, !n || !n.enabled) return !1;r += " mfp-gallery", d("Open" + o, function () {
          n.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function () {
            if (e.items.length > 1) return e.next(), !1;
          }), i.on("keydown" + o, function (t) {
            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
          });
        }), d("UpdateStatus" + o, function (t, n) {
          n.text && (n.text = T(n.text, e.currItem.index, e.items.length));
        }), d("MarkupParse" + o, function (t, i, o, r) {
          var a = e.items.length;o.counter = a > 1 ? T(n.tCounter, r.index, a) : "";
        }), d("BuildControls" + o, function () {
          if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
            var i = n.arrowMarkup,
                o = e.arrowLeft = t(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                r = e.arrowRight = t(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");o.click(function () {
              e.prev();
            }), r.click(function () {
              e.next();
            }), e.container.append(o.add(r));
          }
        }), d("Change" + o, function () {
          e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
            e.preloadNearbyImages(), e._preloadTimeout = null;
          }, 16);
        }), d("Close" + o, function () {
          i.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null;
        });
      }, next: function next() {
        e.direction = !0, e.index = S(e.index + 1), e.updateItemHTML();
      }, prev: function prev() {
        e.direction = !1, e.index = S(e.index - 1), e.updateItemHTML();
      }, goTo: function goTo(t) {
        e.direction = t >= e.index, e.index = t, e.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var t,
            n = e.st.gallery.preload,
            i = Math.min(n[0], e.items.length),
            o = Math.min(n[1], e.items.length);for (t = 1; t <= (e.direction ? o : i); t++) {
          e._preloadItem(e.index + t);
        }for (t = 1; t <= (e.direction ? i : o); t++) {
          e._preloadItem(e.index - t);
        }
      }, _preloadItem: function _preloadItem(n) {
        if (n = S(n), !e.items[n].preloaded) {
          var i = e.items[n];i.parsed || (i = e.parseEl(n)), h("LazyLoad", i), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
            i.hasSize = !0;
          }).on("error.mfploader", function () {
            i.hasSize = !0, i.loadError = !0, h("LazyLoadError", i);
          }).attr("src", i.src)), i.preloaded = !0;
        }
      } } });t.magnificPopup.registerModule("retina", { options: { replaceSrc: function replaceSrc(t) {
        return t.src.replace(/\.\w+$/, function (t) {
          return "@2x" + t;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var t = e.st.retina,
              n = t.ratio;(n = isNaN(n) ? n() : n) > 1 && (d("ImageHasSize.retina", function (t, e) {
            e.img.css({ "max-width": e.img[0].naturalWidth / n, width: "100%" });
          }), d("ElementParse.retina", function (e, i) {
            i.src = t.replaceSrc(i, n);
          }));
        }
      } } }), p();
}), function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.flatpickr = e();
}(this, function () {
  "use strict";
  var t = function t(_t2) {
    return ("0" + _t2).slice(-2);
  },
      e = function e(t) {
    return !0 === t ? 1 : 0;
  };function n(t, e, n) {
    var i;return void 0 === n && (n = !1), function () {
      var o = this,
          r = arguments;null !== i && clearTimeout(i), i = window.setTimeout(function () {
        i = null, n || t.apply(o, r);
      }, e), n && !i && t.apply(o, r);
    };
  }var i = function i(t) {
    return t instanceof Array ? t : [t];
  },
      o = function o() {},
      r = function r(t, e, n) {
    return n.months[e ? "shorthand" : "longhand"][t];
  },
      a = { D: o, F: function F(t, e, n) {
      t.setMonth(n.months.longhand.indexOf(e));
    }, G: function G(t, e) {
      t.setHours(parseFloat(e));
    }, H: function H(t, e) {
      t.setHours(parseFloat(e));
    }, J: function J(t, e) {
      t.setDate(parseFloat(e));
    }, K: function K(t, n, i) {
      t.setHours(t.getHours() % 12 + 12 * e(new RegExp(i.amPM[1], "i").test(n)));
    }, M: function M(t, e, n) {
      t.setMonth(n.months.shorthand.indexOf(e));
    }, S: function S(t, e) {
      t.setSeconds(parseFloat(e));
    }, U: function U(t, e) {
      return new Date(1e3 * parseFloat(e));
    }, W: function W(t, e) {
      var n = parseInt(e);return new Date(t.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0);
    }, Y: function Y(t, e) {
      t.setFullYear(parseFloat(e));
    }, Z: function Z(t, e) {
      return new Date(e);
    }, d: function d(t, e) {
      t.setDate(parseFloat(e));
    }, h: function h(t, e) {
      t.setHours(parseFloat(e));
    }, i: function i(t, e) {
      t.setMinutes(parseFloat(e));
    }, j: function j(t, e) {
      t.setDate(parseFloat(e));
    }, l: o, m: function m(t, e) {
      t.setMonth(parseFloat(e) - 1);
    }, n: function n(t, e) {
      t.setMonth(parseFloat(e) - 1);
    }, s: function s(t, e) {
      t.setSeconds(parseFloat(e));
    }, w: o, y: function y(t, e) {
      t.setFullYear(2e3 + parseFloat(e));
    } },
      s = { D: "(\\w+)", F: "(\\w+)", G: "(\\d\\d|\\d)", H: "(\\d\\d|\\d)", J: "(\\d\\d|\\d)\\w+", K: "", M: "(\\w+)", S: "(\\d\\d|\\d)", U: "(.+)", W: "(\\d\\d|\\d)", Y: "(\\d{4})", Z: "(.+)", d: "(\\d\\d|\\d)", h: "(\\d\\d|\\d)", i: "(\\d\\d|\\d)", j: "(\\d\\d|\\d)", l: "(\\w+)", m: "(\\d\\d|\\d)", n: "(\\d\\d|\\d)", s: "(\\d\\d|\\d)", w: "(\\d\\d|\\d)", y: "(\\d{2})" },
      l = { Z: function Z(t) {
      return t.toISOString();
    }, D: function D(t, e, n) {
      return e.weekdays.shorthand[l.w(t, e, n)];
    }, F: function F(t, e, n) {
      return r(l.n(t, e, n) - 1, !1, e);
    }, G: function G(e, n, i) {
      return t(l.h(e, n, i));
    }, H: function H(e) {
      return t(e.getHours());
    }, J: function J(t, e) {
      return void 0 !== e.ordinal ? t.getDate() + e.ordinal(t.getDate()) : t.getDate();
    }, K: function K(t, n) {
      return n.amPM[e(t.getHours() > 11)];
    }, M: function M(t, e) {
      return r(t.getMonth(), !0, e);
    }, S: function S(e) {
      return t(e.getSeconds());
    }, U: function U(t) {
      return t.getTime() / 1e3;
    }, W: function W(t, e, n) {
      return n.getWeek(t);
    }, Y: function Y(t) {
      return t.getFullYear();
    }, d: function d(e) {
      return t(e.getDate());
    }, h: function h(t) {
      return t.getHours() % 12 ? t.getHours() % 12 : 12;
    }, i: function i(e) {
      return t(e.getMinutes());
    }, j: function j(t) {
      return t.getDate();
    }, l: function l(t, e) {
      return e.weekdays.longhand[t.getDay()];
    }, m: function m(e) {
      return t(e.getMonth() + 1);
    }, n: function n(t) {
      return t.getMonth() + 1;
    }, s: function s(t) {
      return t.getSeconds();
    }, w: function w(t) {
      return t.getDay();
    }, y: function y(t) {
      return String(t.getFullYear()).substring(2);
    } },
      c = { weekdays: { shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] }, months: { shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], firstDayOfWeek: 0, ordinal: function ordinal(t) {
      var e = t % 100;if (e > 3 && e < 21) return "th";switch (e % 10) {case 1:
          return "st";case 2:
          return "nd";case 3:
          return "rd";default:
          return "th";}
    }, rangeSeparator: " to ", weekAbbreviation: "Wk", scrollTitle: "Scroll to increment", toggleTitle: "Click to toggle", amPM: ["AM", "PM"], yearAriaLabel: "Year" },
      d = function d(t) {
    var e = t.config,
        n = void 0 === e ? g : e,
        i = t.l10n,
        o = void 0 === i ? c : i;return function (t, e, i) {
      var r = i || o;return void 0 !== n.formatDate ? n.formatDate(t, e, r) : e.split("").map(function (e, i, o) {
        return l[e] && "\\" !== o[i - 1] ? l[e](t, r, n) : "\\" !== e ? e : "";
      }).join("");
    };
  },
      u = function u(t) {
    var e = t.config,
        n = void 0 === e ? g : e,
        i = t.l10n,
        o = void 0 === i ? c : i;return function (t, e, i, r) {
      if (0 === t || t) {
        var l,
            c = r || o,
            d = t;if (t instanceof Date) l = new Date(t.getTime());else if ("string" != typeof t && void 0 !== t.toFixed) l = new Date(t);else if ("string" == typeof t) {
          var u = e || (n || g).dateFormat,
              h = String(t).trim();if ("today" === h) l = new Date(), i = !0;else if (/Z$/.test(h) || /GMT$/.test(h)) l = new Date(t);else if (n && n.parseDate) l = n.parseDate(t, u);else {
            l = n && n.noCalendar ? new Date(new Date().setHours(0, 0, 0, 0)) : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);for (var f, p = [], m = 0, v = 0, y = ""; m < u.length; m++) {
              var b = u[m],
                  _ = "\\" === b,
                  w = "\\" === u[m - 1] || _;if (s[b] && !w) {
                y += s[b];var C = new RegExp(y).exec(t);C && (f = !0) && p["Y" !== b ? "push" : "unshift"]({ fn: a[b], val: C[++v] });
              } else _ || (y += ".");p.forEach(function (t) {
                var e = t.fn,
                    n = t.val;return l = e(l, n, c) || l;
              });
            }l = f ? l : void 0;
          }
        }if (l instanceof Date && !isNaN(l.getTime())) return !0 === i && l.setHours(0, 0, 0, 0), l;n.errorHandler(new Error("Invalid date provided: " + d));
      }
    };
  };function h(t, e, n) {
    return void 0 === n && (n = !0), !1 !== n ? new Date(t.getTime()).setHours(0, 0, 0, 0) - new Date(e.getTime()).setHours(0, 0, 0, 0) : t.getTime() - e.getTime();
  }var f = function f(t, e, n) {
    return t > Math.min(e, n) && t < Math.max(e, n);
  },
      p = { DAY: 864e5 },
      m = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
      g = { _disable: [], _enable: [], allowInput: !1, altFormat: "F j, Y", altInput: !1, altInputClass: "form-control input", animate: "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && -1 === window.navigator.userAgent.indexOf("MSIE"), ariaDateFormat: "F j, Y", clickOpens: !0, closeOnSelect: !0, conjunction: ", ", dateFormat: "Y-m-d", defaultHour: 12, defaultMinute: 0, defaultSeconds: 0, disable: [], disableMobile: !1, enable: [], enableSeconds: !1, enableTime: !1, errorHandler: function errorHandler(t) {
      return "undefined" != typeof console && console.warn(t);
    }, getWeek: function getWeek(t) {
      var e = new Date(t.getTime());e.setHours(0, 0, 0, 0), e.setDate(e.getDate() + 3 - (e.getDay() + 6) % 7);var n = new Date(e.getFullYear(), 0, 4);return 1 + Math.round(((e.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7);
    }, hourIncrement: 1, ignoredFocusElements: [], inline: !1, locale: "default", minuteIncrement: 5, mode: "single", nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>", noCalendar: !1, now: new Date(), onChange: [], onClose: [], onDayCreate: [], onDestroy: [], onKeyDown: [], onMonthChange: [], onOpen: [], onParseConfig: [], onReady: [], onValueUpdate: [], onYearChange: [], onPreCalendarPosition: [], plugins: [], position: "auto", positionElement: void 0, prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>", shorthandCurrentMonth: !1, showMonths: 1, static: !1, time_24hr: !1, weekNumbers: !1, wrap: !1 };function v(t, e, n) {
    if (!0 === n) return t.classList.add(e);t.classList.remove(e);
  }function y(t, e, n) {
    var i = window.document.createElement(t);return e = e || "", n = n || "", i.className = e, void 0 !== n && (i.textContent = n), i;
  }function b(t) {
    for (; t.firstChild;) {
      t.removeChild(t.firstChild);
    }
  }function _(t, e) {
    var n = y("div", "numInputWrapper"),
        i = y("input", "numInput " + t),
        o = y("span", "arrowUp"),
        r = y("span", "arrowDown");if (i.type = "text", i.pattern = "\\d*", void 0 !== e) for (var a in e) {
      i.setAttribute(a, e[a]);
    }return n.appendChild(i), n.appendChild(o), n.appendChild(r), n;
  }"function" != typeof Object.assign && (Object.assign = function (t) {
    if (!t) throw TypeError("Cannot convert undefined or null to object");for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) {
      n[i - 1] = arguments[i];
    }for (var o = function o() {
      var e = n[r];e && Object.keys(e).forEach(function (n) {
        return t[n] = e[n];
      });
    }, r = 0; r < n.length; r++) {
      o();
    }return t;
  });var w = 300;function C(o, a) {
    var l = { config: Object.assign({}, D.defaultConfig), l10n: c };function g(t) {
      return t.bind(l);
    }function C() {
      var t = l.config;!1 === t.weekNumbers && 1 === t.showMonths || !0 !== t.noCalendar && window.requestAnimationFrame(function () {
        if (l.calendarContainer.style.visibility = "hidden", l.calendarContainer.style.display = "block", void 0 !== l.daysContainer) {
          var e = (l.days.offsetWidth + 1) * t.showMonths;l.daysContainer.style.width = e + "px", l.calendarContainer.style.width = e + (void 0 !== l.weekWrapper ? l.weekWrapper.offsetWidth : 0) + "px", l.calendarContainer.style.removeProperty("visibility"), l.calendarContainer.style.removeProperty("display");
        }
      });
    }function E(n) {
      if (0 !== l.selectedDates.length) {
        void 0 !== n && "blur" !== n.type && function (n) {
          n.preventDefault();var i = "keydown" === n.type,
              o = n.target;void 0 !== l.amPM && n.target === l.amPM && (l.amPM.textContent = l.l10n.amPM[e(l.amPM.textContent === l.l10n.amPM[0])]);var r = parseFloat(o.getAttribute("data-min")),
              a = parseFloat(o.getAttribute("data-max")),
              s = parseFloat(o.getAttribute("data-step")),
              c = parseInt(o.value, 10),
              d = n.delta || (i ? 38 === n.which ? 1 : -1 : 0),
              u = c + s * d;if (void 0 !== o.value && 2 === o.value.length) {
            var h = o === l.hourElement,
                f = o === l.minuteElement;u < r ? (u = a + u + e(!h) + (e(h) && e(!l.amPM)), f && L(void 0, -1, l.hourElement)) : u > a && (u = o === l.hourElement ? u - a - e(!l.amPM) : r, f && L(void 0, 1, l.hourElement)), l.amPM && h && (1 === s ? u + c === 23 : Math.abs(u - c) > s) && (l.amPM.textContent = l.l10n.amPM[e(l.amPM.textContent === l.l10n.amPM[0])]), o.value = t(u);
          }
        }(n);var i = l._input.value;S(), mt(), l._input.value !== i && l._debouncedChange();
      }
    }function S() {
      if (void 0 !== l.hourElement && void 0 !== l.minuteElement) {
        var t,
            n,
            i = (parseInt(l.hourElement.value.slice(-2), 10) || 0) % 24,
            o = (parseInt(l.minuteElement.value, 10) || 0) % 60,
            r = void 0 !== l.secondElement ? (parseInt(l.secondElement.value, 10) || 0) % 60 : 0;void 0 !== l.amPM && (t = i, n = l.amPM.textContent, i = t % 12 + 12 * e(n === l.l10n.amPM[1]));var a = void 0 !== l.config.minTime || l.config.minDate && l.minDateHasTime && l.latestSelectedDateObj && 0 === h(l.latestSelectedDateObj, l.config.minDate, !0);if (void 0 !== l.config.maxTime || l.config.maxDate && l.maxDateHasTime && l.latestSelectedDateObj && 0 === h(l.latestSelectedDateObj, l.config.maxDate, !0)) {
          var s = void 0 !== l.config.maxTime ? l.config.maxTime : l.config.maxDate;(i = Math.min(i, s.getHours())) === s.getHours() && (o = Math.min(o, s.getMinutes())), o === s.getMinutes() && (r = Math.min(r, s.getSeconds()));
        }if (a) {
          var c = void 0 !== l.config.minTime ? l.config.minTime : l.config.minDate;(i = Math.max(i, c.getHours())) === c.getHours() && (o = Math.max(o, c.getMinutes())), o === c.getMinutes() && (r = Math.max(r, c.getSeconds()));
        }I(i, o, r);
      }
    }function T(t) {
      var e = t || l.latestSelectedDateObj;e && I(e.getHours(), e.getMinutes(), e.getSeconds());
    }function x() {
      var t = l.config.defaultHour,
          e = l.config.defaultMinute,
          n = l.config.defaultSeconds;if (void 0 !== l.config.minDate) {
        var i = l.config.minDate.getHours(),
            o = l.config.minDate.getMinutes();(t = Math.max(t, i)) === i && (e = Math.max(o, e)), t === i && e === o && (n = l.config.minDate.getSeconds());
      }if (void 0 !== l.config.maxDate) {
        var r = l.config.maxDate.getHours(),
            a = l.config.maxDate.getMinutes();(t = Math.min(t, r)) === r && (e = Math.min(a, e)), t === r && e === a && (n = l.config.maxDate.getSeconds());
      }I(t, e, n);
    }function I(n, i, o) {
      void 0 !== l.latestSelectedDateObj && l.latestSelectedDateObj.setHours(n % 24, i, o || 0, 0), l.hourElement && l.minuteElement && !l.isMobile && (l.hourElement.value = t(l.config.time_24hr ? n : (12 + n) % 12 + 12 * e(n % 12 == 0)), l.minuteElement.value = t(i), void 0 !== l.amPM && (l.amPM.textContent = l.l10n.amPM[e(n >= 12)]), void 0 !== l.secondElement && (l.secondElement.value = t(o)));
    }function k(t) {
      var e = parseInt(t.target.value) + (t.delta || 0);(e / 1e3 > 1 || "Enter" === t.key && !/[^\d]/.test(e.toString())) && $(e);
    }function A(t, e, n, i) {
      return e instanceof Array ? e.forEach(function (e) {
        return A(t, e, n, i);
      }) : t instanceof Array ? t.forEach(function (t) {
        return A(t, e, n, i);
      }) : (t.addEventListener(e, n, i), void l._handlers.push({ element: t, event: e, handler: n, options: i }));
    }function M(t) {
      return function (e) {
        1 === e.which && t(e);
      };
    }function O() {
      dt("onChange");
    }function N(t) {
      var e = void 0 !== t ? l.parseDate(t) : l.latestSelectedDateObj || (l.config.minDate && l.config.minDate > l.now ? l.config.minDate : l.config.maxDate && l.config.maxDate < l.now ? l.config.maxDate : l.now);try {
        void 0 !== e && (l.currentYear = e.getFullYear(), l.currentMonth = e.getMonth());
      } catch (t) {
        t.message = "Invalid date supplied: " + e, l.config.errorHandler(t);
      }l.redraw();
    }function P(t) {
      ~t.target.className.indexOf("arrow") && L(t, t.target.classList.contains("arrowUp") ? 1 : -1);
    }function L(t, e, n) {
      var i = t && t.target,
          o = n || i && i.parentNode && i.parentNode.firstChild,
          r = ut("increment");r.delta = e, o && o.dispatchEvent(r);
    }function F(t, e, n, i) {
      var o = G(e, !0),
          r = y("span", "flatpickr-day " + t, e.getDate().toString());return r.dateObj = e, r.$i = i, r.setAttribute("aria-label", l.formatDate(e, l.config.ariaDateFormat)), -1 === t.indexOf("hidden") && 0 === h(e, l.now) && (l.todayDateElem = r, r.classList.add("today"), r.setAttribute("aria-current", "date")), o ? (r.tabIndex = -1, ht(e) && (r.classList.add("selected"), l.selectedDateElem = r, "range" === l.config.mode && (v(r, "startRange", l.selectedDates[0] && 0 === h(e, l.selectedDates[0], !0)), v(r, "endRange", l.selectedDates[1] && 0 === h(e, l.selectedDates[1], !0)), "nextMonthDay" === t && r.classList.add("inRange")))) : r.classList.add("disabled"), "range" === l.config.mode && function (t) {
        return !("range" !== l.config.mode || l.selectedDates.length < 2) && h(t, l.selectedDates[0]) >= 0 && h(t, l.selectedDates[1]) <= 0;
      }(e) && !ht(e) && r.classList.add("inRange"), l.weekNumbers && 1 === l.config.showMonths && "prevMonthDay" !== t && n % 7 == 1 && l.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + l.config.getWeek(e) + "</span>"), dt("onDayCreate", r), r;
    }function j(t) {
      t.focus(), "range" === l.config.mode && Z(t);
    }function H(t) {
      for (var e = t > 0 ? 0 : l.config.showMonths - 1, n = t > 0 ? l.config.showMonths : -1, i = e; i != n; i += t) {
        for (var o = l.daysContainer.children[i], r = t > 0 ? 0 : o.children.length - 1, a = t > 0 ? o.children.length : -1, s = r; s != a; s += t) {
          var c = o.children[s];if (-1 === c.className.indexOf("hidden") && G(c.dateObj)) return c;
        }
      }
    }function z(t, e) {
      var n = X(document.activeElement || document.body),
          i = void 0 !== t ? t : n ? document.activeElement : void 0 !== l.selectedDateElem && X(l.selectedDateElem) ? l.selectedDateElem : void 0 !== l.todayDateElem && X(l.todayDateElem) ? l.todayDateElem : H(e > 0 ? 1 : -1);return void 0 === i ? l._input.focus() : n ? void function (t, e) {
        for (var n = -1 === t.className.indexOf("Month") ? t.dateObj.getMonth() : l.currentMonth, i = e > 0 ? l.config.showMonths : -1, o = e > 0 ? 1 : -1, r = n - l.currentMonth; r != i; r += o) {
          for (var a = l.daysContainer.children[r], s = n - l.currentMonth === r ? t.$i + e : e < 0 ? a.children.length - 1 : 0, c = a.children.length, d = s; d >= 0 && d < c && d != (e > 0 ? c : -1); d += o) {
            var u = a.children[d];if (-1 === u.className.indexOf("hidden") && G(u.dateObj) && Math.abs(t.$i - d) >= Math.abs(e)) return j(u);
          }
        }l.changeMonth(o), z(H(o), 0);
      }(i, e) : j(i);
    }function W(t, e) {
      for (var n = (new Date(t, e, 1).getDay() - l.l10n.firstDayOfWeek + 7) % 7, i = l.utils.getDaysInMonth((e - 1 + 12) % 12), o = l.utils.getDaysInMonth(e), r = window.document.createDocumentFragment(), a = l.config.showMonths > 1, s = a ? "prevMonthDay hidden" : "prevMonthDay", c = a ? "nextMonthDay hidden" : "nextMonthDay", d = i + 1 - n, u = 0; d <= i; d++, u++) {
        r.appendChild(F(s, new Date(t, e - 1, d), d, u));
      }for (d = 1; d <= o; d++, u++) {
        r.appendChild(F("", new Date(t, e, d), d, u));
      }for (var h = o + 1; h <= 42 - n && (1 === l.config.showMonths || u % 7 != 0); h++, u++) {
        r.appendChild(F(c, new Date(t, e + 1, h % o), h, u));
      }var f = y("div", "dayContainer");return f.appendChild(r), f;
    }function R() {
      if (void 0 !== l.daysContainer) {
        b(l.daysContainer), l.weekNumbers && b(l.weekNumbers);for (var t = document.createDocumentFragment(), e = 0; e < l.config.showMonths; e++) {
          var n = new Date(l.currentYear, l.currentMonth, 1);n.setMonth(l.currentMonth + e), t.appendChild(W(n.getFullYear(), n.getMonth()));
        }l.daysContainer.appendChild(t), l.days = l.daysContainer.firstChild, "range" === l.config.mode && 1 === l.selectedDates.length && Z();
      }
    }function B() {
      var t = y("div", "flatpickr-month"),
          e = window.document.createDocumentFragment(),
          n = y("span", "cur-month"),
          i = _("cur-year", { tabindex: "-1" }),
          o = i.getElementsByTagName("input")[0];o.setAttribute("aria-label", l.l10n.yearAriaLabel), l.config.minDate && o.setAttribute("data-min", l.config.minDate.getFullYear().toString()), l.config.maxDate && (o.setAttribute("data-max", l.config.maxDate.getFullYear().toString()), o.disabled = !!l.config.minDate && l.config.minDate.getFullYear() === l.config.maxDate.getFullYear());var r = y("div", "flatpickr-current-month");return r.appendChild(n), r.appendChild(i), e.appendChild(r), t.appendChild(e), { container: t, yearElement: o, monthElement: n };
    }function q() {
      b(l.monthNav), l.monthNav.appendChild(l.prevMonthNav);for (var t = l.config.showMonths; t--;) {
        var e = B();l.yearElements.push(e.yearElement), l.monthElements.push(e.monthElement), l.monthNav.appendChild(e.container);
      }l.monthNav.appendChild(l.nextMonthNav);
    }function U() {
      l.weekdayContainer ? b(l.weekdayContainer) : l.weekdayContainer = y("div", "flatpickr-weekdays");for (var t = l.config.showMonths; t--;) {
        var e = y("div", "flatpickr-weekdaycontainer");l.weekdayContainer.appendChild(e);
      }return Y(), l.weekdayContainer;
    }function Y() {
      var t = l.l10n.firstDayOfWeek,
          e = l.l10n.weekdays.shorthand.concat();t > 0 && t < e.length && (e = e.splice(t, e.length).concat(e.splice(0, t)));for (var n = l.config.showMonths; n--;) {
        l.weekdayContainer.children[n].innerHTML = "\n      <span class=flatpickr-weekday>\n        " + e.join("</span><span class=flatpickr-weekday>") + "\n      </span>\n      ";
      }
    }function K(t, e) {
      void 0 === e && (e = !0);var n = e ? t : t - l.currentMonth;n < 0 && !0 === l._hidePrevMonthArrow || n > 0 && !0 === l._hideNextMonthArrow || (l.currentMonth += n, (l.currentMonth < 0 || l.currentMonth > 11) && (l.currentYear += l.currentMonth > 11 ? 1 : -1, l.currentMonth = (l.currentMonth + 12) % 12, dt("onYearChange")), R(), dt("onMonthChange"), ft());
    }function V(t) {
      return !(!l.config.appendTo || !l.config.appendTo.contains(t)) || l.calendarContainer.contains(t);
    }function Q(t) {
      if (l.isOpen && !l.config.inline) {
        var e = V(t.target),
            n = t.target === l.input || t.target === l.altInput || l.element.contains(t.target) || t.path && t.path.indexOf && (~t.path.indexOf(l.input) || ~t.path.indexOf(l.altInput)),
            i = "blur" === t.type ? n && t.relatedTarget && !V(t.relatedTarget) : !n && !e,
            o = !l.config.ignoredFocusElements.some(function (e) {
          return e.contains(t.target);
        });i && o && (l.close(), "range" === l.config.mode && 1 === l.selectedDates.length && (l.clear(!1), l.redraw()));
      }
    }function $(t) {
      if (!(!t || l.config.minDate && t < l.config.minDate.getFullYear() || l.config.maxDate && t > l.config.maxDate.getFullYear())) {
        var e = t,
            n = l.currentYear !== e;l.currentYear = e || l.currentYear, l.config.maxDate && l.currentYear === l.config.maxDate.getFullYear() ? l.currentMonth = Math.min(l.config.maxDate.getMonth(), l.currentMonth) : l.config.minDate && l.currentYear === l.config.minDate.getFullYear() && (l.currentMonth = Math.max(l.config.minDate.getMonth(), l.currentMonth)), n && (l.redraw(), dt("onYearChange"));
      }
    }function G(t, e) {
      void 0 === e && (e = !0);var n = l.parseDate(t, void 0, e);if (l.config.minDate && n && h(n, l.config.minDate, void 0 !== e ? e : !l.minDateHasTime) < 0 || l.config.maxDate && n && h(n, l.config.maxDate, void 0 !== e ? e : !l.maxDateHasTime) > 0) return !1;if (0 === l.config.enable.length && 0 === l.config.disable.length) return !0;if (void 0 === n) return !1;for (var i, o = l.config.enable.length > 0, r = o ? l.config.enable : l.config.disable, a = 0; a < r.length; a++) {
        if ("function" == typeof (i = r[a]) && i(n)) return o;if (i instanceof Date && void 0 !== n && i.getTime() === n.getTime()) return o;if ("string" == typeof i && void 0 !== n) {
          var s = l.parseDate(i, void 0, !0);return s && s.getTime() === n.getTime() ? o : !o;
        }if ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && void 0 !== n && i.from && i.to && n.getTime() >= i.from.getTime() && n.getTime() <= i.to.getTime()) return o;
      }return !o;
    }function X(t) {
      return void 0 !== l.daysContainer && -1 === t.className.indexOf("hidden") && l.daysContainer.contains(t);
    }function J(t) {
      var e = t.target === l._input,
          n = l.config.allowInput,
          i = l.isOpen && (!n || !e),
          o = l.config.inline && e && !n;if (13 === t.keyCode && e) {
        if (n) return l.setDate(l._input.value, !0, t.target === l.altInput ? l.config.altFormat : l.config.dateFormat), t.target.blur();l.open();
      } else if (V(t.target) || i || o) {
        var r = !!l.timeContainer && l.timeContainer.contains(t.target);switch (t.keyCode) {case 13:
            r ? E() : at(t);break;case 27:
            t.preventDefault(), rt();break;case 8:case 46:
            e && !l.config.allowInput && (t.preventDefault(), l.clear());break;case 37:case 39:
            if (r) l.hourElement && l.hourElement.focus();else if (t.preventDefault(), void 0 !== l.daysContainer && (!1 === n || X(document.activeElement))) {
              var a = 39 === t.keyCode ? 1 : -1;t.ctrlKey ? (K(a), z(H(1), 0)) : z(void 0, a);
            }break;case 38:case 40:
            t.preventDefault();var s = 40 === t.keyCode ? 1 : -1;l.daysContainer && void 0 !== t.target.$i ? t.ctrlKey ? ($(l.currentYear - s), z(H(1), 0)) : r || z(void 0, 7 * s) : l.config.enableTime && (!r && l.hourElement && l.hourElement.focus(), E(t), l._debouncedChange());break;case 9:
            if (!r) {
              l.element.focus();break;
            }var c = [l.hourElement, l.minuteElement, l.secondElement, l.amPM].filter(function (t) {
              return t;
            }),
                d = c.indexOf(t.target);if (-1 !== d) {
              var u = c[d + (t.shiftKey ? -1 : 1)];void 0 !== u ? (t.preventDefault(), u.focus()) : l.element.focus();
            }}
      }if (void 0 !== l.amPM && t.target === l.amPM) switch (t.key) {case l.l10n.amPM[0].charAt(0):case l.l10n.amPM[0].charAt(0).toLowerCase():
          l.amPM.textContent = l.l10n.amPM[0], S(), mt();break;case l.l10n.amPM[1].charAt(0):case l.l10n.amPM[1].charAt(0).toLowerCase():
          l.amPM.textContent = l.l10n.amPM[1], S(), mt();}dt("onKeyDown", t);
    }function Z(t) {
      if (1 === l.selectedDates.length && (!t || t.classList.contains("flatpickr-day") && !t.classList.contains("disabled"))) {
        for (var e = t ? t.dateObj.getTime() : l.days.firstElementChild.dateObj.getTime(), n = l.parseDate(l.selectedDates[0], void 0, !0).getTime(), i = Math.min(e, l.selectedDates[0].getTime()), o = Math.max(e, l.selectedDates[0].getTime()), r = l.daysContainer.lastChild.lastChild.dateObj.getTime(), a = !1, s = 0, c = 0, d = i; d < r; d += p.DAY) {
          G(new Date(d), !0) || (a = a || d > i && d < o, d < n && (!s || d > s) ? s = d : d > n && (!c || d < c) && (c = d));
        }for (var u = 0; u < l.config.showMonths; u++) {
          for (var h = l.daysContainer.children[u], m = l.daysContainer.children[u - 1], g = function g(i, o) {
            var r = h.children[i],
                d = r.dateObj.getTime(),
                p = s > 0 && d < s || c > 0 && d > c;return p ? (r.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function (t) {
              r.classList.remove(t);
            }), "continue") : a && !p ? "continue" : (["startRange", "inRange", "endRange", "notAllowed"].forEach(function (t) {
              r.classList.remove(t);
            }), void (void 0 !== t && (t.classList.add(e < l.selectedDates[0].getTime() ? "startRange" : "endRange"), !h.contains(t) && u > 0 && m && m.lastChild.dateObj.getTime() >= d || (n < e && d === n ? r.classList.add("startRange") : n > e && d === n && r.classList.add("endRange"), d >= s && (0 === c || d <= c) && f(d, n, e) && r.classList.add("inRange")))));
          }, v = 0, y = h.children.length; v < y; v++) {
            g(v);
          }
        }
      }
    }function tt() {
      !l.isOpen || l.config.static || l.config.inline || it();
    }function et(t) {
      return function (e) {
        var n = l.config["_" + t + "Date"] = l.parseDate(e, l.config.dateFormat),
            i = l.config["_" + ("min" === t ? "max" : "min") + "Date"];void 0 !== n && (l["min" === t ? "minDateHasTime" : "maxDateHasTime"] = n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0), l.selectedDates && (l.selectedDates = l.selectedDates.filter(function (t) {
          return G(t);
        }), l.selectedDates.length || "min" !== t || T(n), mt()), l.daysContainer && (ot(), void 0 !== n ? l.currentYearElement[t] = n.getFullYear().toString() : l.currentYearElement.removeAttribute(t), l.currentYearElement.disabled = !!i && void 0 !== n && i.getFullYear() === n.getFullYear());
      };
    }function nt() {
      "object" != _typeof(l.config.locale) && void 0 === D.l10ns[l.config.locale] && l.config.errorHandler(new Error("flatpickr: invalid locale " + l.config.locale)), l.l10n = Object.assign({}, D.l10ns.default, "object" == _typeof(l.config.locale) ? l.config.locale : "default" !== l.config.locale ? D.l10ns[l.config.locale] : void 0), s.K = "(" + l.l10n.amPM[0] + "|" + l.l10n.amPM[1] + "|" + l.l10n.amPM[0].toLowerCase() + "|" + l.l10n.amPM[1].toLowerCase() + ")", l.formatDate = d(l), l.parseDate = u({ config: l.config, l10n: l.l10n });
    }function it(t) {
      if (void 0 !== l.calendarContainer) {
        dt("onPreCalendarPosition");var e = t || l._positionElement,
            n = Array.prototype.reduce.call(l.calendarContainer.children, function (t, e) {
          return t + e.offsetHeight;
        }, 0),
            i = l.calendarContainer.offsetWidth,
            o = l.config.position.split(" "),
            r = o[0],
            a = o.length > 1 ? o[1] : null,
            s = e.getBoundingClientRect(),
            c = window.innerHeight - s.bottom,
            d = "above" === r || "below" !== r && c < n && s.top > n,
            u = window.pageYOffset + s.top + (d ? -n - 2 : e.offsetHeight + 2);if (v(l.calendarContainer, "arrowTop", !d), v(l.calendarContainer, "arrowBottom", d), !l.config.inline) {
          var h = window.pageXOffset + s.left - (null != a && "center" === a ? (i - s.width) / 2 : 0),
              f = window.document.body.offsetWidth - s.right,
              p = h + i > window.document.body.offsetWidth;v(l.calendarContainer, "rightMost", p), l.config.static || (l.calendarContainer.style.top = u + "px", p ? (l.calendarContainer.style.left = "auto", l.calendarContainer.style.right = f + "px") : (l.calendarContainer.style.left = h + "px", l.calendarContainer.style.right = "auto"));
        }
      }
    }function ot() {
      l.config.noCalendar || l.isMobile || (ft(), R());
    }function rt() {
      l._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(l.close, 0) : l.close();
    }function at(t) {
      t.preventDefault(), t.stopPropagation();var e = function t(e, n) {
        return n(e) ? e : e.parentNode ? t(e.parentNode, n) : void 0;
      }(t.target, function (t) {
        return t.classList && t.classList.contains("flatpickr-day") && !t.classList.contains("disabled") && !t.classList.contains("notAllowed");
      });if (void 0 !== e) {
        var n = e,
            i = l.latestSelectedDateObj = new Date(n.dateObj.getTime()),
            o = (i.getMonth() < l.currentMonth || i.getMonth() > l.currentMonth + l.config.showMonths - 1) && "range" !== l.config.mode;if (l.selectedDateElem = n, "single" === l.config.mode) l.selectedDates = [i];else if ("multiple" === l.config.mode) {
          var r = ht(i);r ? l.selectedDates.splice(parseInt(r), 1) : l.selectedDates.push(i);
        } else "range" === l.config.mode && (2 === l.selectedDates.length && l.clear(!1), l.selectedDates.push(i), 0 !== h(i, l.selectedDates[0], !0) && l.selectedDates.sort(function (t, e) {
          return t.getTime() - e.getTime();
        }));if (S(), o) {
          var a = l.currentYear !== i.getFullYear();l.currentYear = i.getFullYear(), l.currentMonth = i.getMonth(), a && dt("onYearChange"), dt("onMonthChange");
        }if (ft(), R(), mt(), l.config.enableTime && setTimeout(function () {
          return l.showTimeInput = !0;
        }, 50), o || "range" === l.config.mode || 1 !== l.config.showMonths ? l.selectedDateElem && l.selectedDateElem.focus() : j(n), void 0 !== l.hourElement && setTimeout(function () {
          return void 0 !== l.hourElement && l.hourElement.select();
        }, 451), l.config.closeOnSelect) {
          var s = "single" === l.config.mode && !l.config.enableTime,
              c = "range" === l.config.mode && 2 === l.selectedDates.length && !l.config.enableTime;(s || c) && rt();
        }O();
      }
    }l.parseDate = u({ config: l.config, l10n: l.l10n }), l._handlers = [], l._bind = A, l._setHoursFromDate = T, l._positionCalendar = it, l.changeMonth = K, l.changeYear = $, l.clear = function (t) {
      void 0 === t && (t = !0);l.input.value = "", void 0 !== l.altInput && (l.altInput.value = "");void 0 !== l.mobileInput && (l.mobileInput.value = "");l.selectedDates = [], l.latestSelectedDateObj = void 0, l.showTimeInput = !1, !0 === l.config.enableTime && x();l.redraw(), t && dt("onChange");
    }, l.close = function () {
      l.isOpen = !1, l.isMobile || (l.calendarContainer.classList.remove("open"), l._input.classList.remove("active"));dt("onClose");
    }, l._createElement = y, l.destroy = function () {
      void 0 !== l.config && dt("onDestroy");for (var t = l._handlers.length; t--;) {
        var e = l._handlers[t];e.element.removeEventListener(e.event, e.handler, e.options);
      }if (l._handlers = [], l.mobileInput) l.mobileInput.parentNode && l.mobileInput.parentNode.removeChild(l.mobileInput), l.mobileInput = void 0;else if (l.calendarContainer && l.calendarContainer.parentNode) if (l.config.static && l.calendarContainer.parentNode) {
        var n = l.calendarContainer.parentNode;if (n.lastChild && n.removeChild(n.lastChild), n.parentNode) {
          for (; n.firstChild;) {
            n.parentNode.insertBefore(n.firstChild, n);
          }n.parentNode.removeChild(n);
        }
      } else l.calendarContainer.parentNode.removeChild(l.calendarContainer);l.altInput && (l.input.type = "text", l.altInput.parentNode && l.altInput.parentNode.removeChild(l.altInput), delete l.altInput);l.input && (l.input.type = l.input._type, l.input.classList.remove("flatpickr-input"), l.input.removeAttribute("readonly"), l.input.value = "");["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (t) {
        try {
          delete l[t];
        } catch (t) {}
      });
    }, l.isEnabled = G, l.jumpToDate = N, l.open = function (t, e) {
      void 0 === e && (e = l._positionElement);if (!0 === l.isMobile) return t && (t.preventDefault(), t.target && t.target.blur()), void 0 !== l.mobileInput && (l.mobileInput.focus(), l.mobileInput.click()), void dt("onOpen");if (l._input.disabled || l.config.inline) return;var n = l.isOpen;l.isOpen = !0, n || (l.calendarContainer.classList.add("open"), l._input.classList.add("active"), dt("onOpen"), it(e));!0 === l.config.enableTime && !0 === l.config.noCalendar && (0 === l.selectedDates.length && (l.setDate(void 0 !== l.config.minDate ? new Date(l.config.minDate.getTime()) : new Date(), !1), x(), mt()), !1 !== l.config.allowInput || void 0 !== t && l.timeContainer.contains(t.relatedTarget) || setTimeout(function () {
        return l.hourElement.select();
      }, 50));
    }, l.redraw = ot, l.set = function (t, e) {
      null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? Object.assign(l.config, t) : (l.config[t] = e, void 0 !== st[t] ? st[t].forEach(function (t) {
        return t();
      }) : m.indexOf(t) > -1 && (l.config[t] = i(e)));l.redraw(), N(), mt(!1);
    }, l.setDate = function (t, e, n) {
      void 0 === e && (e = !1);void 0 === n && (n = l.config.dateFormat);if (0 !== t && !t || t instanceof Array && 0 === t.length) return l.clear(e);lt(t, n), l.showTimeInput = l.selectedDates.length > 0, l.latestSelectedDateObj = l.selectedDates[0], l.redraw(), N(), T(), mt(e), e && dt("onChange");
    }, l.toggle = function (t) {
      if (!0 === l.isOpen) return l.close();l.open(t);
    };var st = { locale: [nt, Y], showMonths: [q, C, U] };function lt(t, e) {
      var n = [];if (t instanceof Array) n = t.map(function (t) {
        return l.parseDate(t, e);
      });else if (t instanceof Date || "number" == typeof t) n = [l.parseDate(t, e)];else if ("string" == typeof t) switch (l.config.mode) {case "single":case "time":
          n = [l.parseDate(t, e)];break;case "multiple":
          n = t.split(l.config.conjunction).map(function (t) {
            return l.parseDate(t, e);
          });break;case "range":
          n = t.split(l.l10n.rangeSeparator).map(function (t) {
            return l.parseDate(t, e);
          });} else l.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(t)));l.selectedDates = n.filter(function (t) {
        return t instanceof Date && G(t, !1);
      }), "range" === l.config.mode && l.selectedDates.sort(function (t, e) {
        return t.getTime() - e.getTime();
      });
    }function ct(t) {
      return t.slice().map(function (t) {
        return "string" == typeof t || "number" == typeof t || t instanceof Date ? l.parseDate(t, void 0, !0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.from && t.to ? { from: l.parseDate(t.from, void 0), to: l.parseDate(t.to, void 0) } : t;
      }).filter(function (t) {
        return t;
      });
    }function dt(t, e) {
      if (void 0 !== l.config) {
        var n = l.config[t];if (void 0 !== n && n.length > 0) for (var i = 0; n[i] && i < n.length; i++) {
          n[i](l.selectedDates, l.input.value, l, e);
        }"onChange" === t && (l.input.dispatchEvent(ut("change")), l.input.dispatchEvent(ut("input")));
      }
    }function ut(t) {
      var e = document.createEvent("Event");return e.initEvent(t, !0, !0), e;
    }function ht(t) {
      for (var e = 0; e < l.selectedDates.length; e++) {
        if (0 === h(l.selectedDates[e], t)) return "" + e;
      }return !1;
    }function ft() {
      l.config.noCalendar || l.isMobile || !l.monthNav || (l.yearElements.forEach(function (t, e) {
        var n = new Date(l.currentYear, l.currentMonth, 1);n.setMonth(l.currentMonth + e), l.monthElements[e].textContent = r(n.getMonth(), l.config.shorthandCurrentMonth, l.l10n) + " ", t.value = n.getFullYear().toString();
      }), l._hidePrevMonthArrow = void 0 !== l.config.minDate && (l.currentYear === l.config.minDate.getFullYear() ? l.currentMonth <= l.config.minDate.getMonth() : l.currentYear < l.config.minDate.getFullYear()), l._hideNextMonthArrow = void 0 !== l.config.maxDate && (l.currentYear === l.config.maxDate.getFullYear() ? l.currentMonth + 1 > l.config.maxDate.getMonth() : l.currentYear > l.config.maxDate.getFullYear()));
    }function pt(t) {
      return l.selectedDates.map(function (e) {
        return l.formatDate(e, t);
      }).filter(function (t, e, n) {
        return "range" !== l.config.mode || l.config.enableTime || n.indexOf(t) === e;
      }).join("range" !== l.config.mode ? l.config.conjunction : l.l10n.rangeSeparator);
    }function mt(t) {
      if (void 0 === t && (t = !0), 0 === l.selectedDates.length) return l.clear(t);void 0 !== l.mobileInput && l.mobileFormatStr && (l.mobileInput.value = void 0 !== l.latestSelectedDateObj ? l.formatDate(l.latestSelectedDateObj, l.mobileFormatStr) : ""), l.input.value = pt(l.config.dateFormat), void 0 !== l.altInput && (l.altInput.value = pt(l.config.altFormat)), !1 !== t && dt("onValueUpdate");
    }function gt(t) {
      t.preventDefault();var e = l.prevMonthNav.contains(t.target),
          n = l.nextMonthNav.contains(t.target);e || n ? K(e ? -1 : 1) : l.yearElements.indexOf(t.target) >= 0 ? t.target.select() : t.target.classList.contains("arrowUp") ? l.changeYear(l.currentYear + 1) : t.target.classList.contains("arrowDown") && l.changeYear(l.currentYear - 1);
    }return function () {
      l.element = l.input = o, l.isOpen = !1, function () {
        var t = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
            e = Object.assign({}, a, JSON.parse(JSON.stringify(o.dataset || {}))),
            n = {};l.config.parseDate = e.parseDate, l.config.formatDate = e.formatDate, Object.defineProperty(l.config, "enable", { get: function get() {
            return l.config._enable;
          }, set: function set(t) {
            l.config._enable = ct(t);
          } }), Object.defineProperty(l.config, "disable", { get: function get() {
            return l.config._disable;
          }, set: function set(t) {
            l.config._disable = ct(t);
          } });var r = "time" === e.mode;e.dateFormat || !e.enableTime && !r || (n.dateFormat = e.noCalendar || r ? "H:i" + (e.enableSeconds ? ":S" : "") : D.defaultConfig.dateFormat + " H:i" + (e.enableSeconds ? ":S" : "")), e.altInput && (e.enableTime || r) && !e.altFormat && (n.altFormat = e.noCalendar || r ? "h:i" + (e.enableSeconds ? ":S K" : " K") : D.defaultConfig.altFormat + " h:i" + (e.enableSeconds ? ":S" : "") + " K"), Object.defineProperty(l.config, "minDate", { get: function get() {
            return l.config._minDate;
          }, set: et("min") }), Object.defineProperty(l.config, "maxDate", { get: function get() {
            return l.config._maxDate;
          }, set: et("max") });var s = function s(t) {
          return function (e) {
            l.config["min" === t ? "_minTime" : "_maxTime"] = l.parseDate(e, "H:i");
          };
        };Object.defineProperty(l.config, "minTime", { get: function get() {
            return l.config._minTime;
          }, set: s("min") }), Object.defineProperty(l.config, "maxTime", { get: function get() {
            return l.config._maxTime;
          }, set: s("max") }), "time" === e.mode && (l.config.noCalendar = !0, l.config.enableTime = !0), Object.assign(l.config, n, e);for (var c = 0; c < t.length; c++) {
          l.config[t[c]] = !0 === l.config[t[c]] || "true" === l.config[t[c]];
        }m.filter(function (t) {
          return void 0 !== l.config[t];
        }).forEach(function (t) {
          l.config[t] = i(l.config[t] || []).map(g);
        }), l.isMobile = !l.config.disableMobile && !l.config.inline && "single" === l.config.mode && !l.config.disable.length && !l.config.enable.length && !l.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for (var d = 0; d < l.config.plugins.length; d++) {
          var u = l.config.plugins[d](l) || {};for (var h in u) {
            m.indexOf(h) > -1 ? l.config[h] = i(u[h]).map(g).concat(l.config[h]) : void 0 === e[h] && (l.config[h] = u[h]);
          }
        }dt("onParseConfig");
      }(), nt(), l.input = l.config.wrap ? o.querySelector("[data-input]") : o, l.input ? (l.input._type = l.input.type, l.input.type = "text", l.input.classList.add("flatpickr-input"), l._input = l.input, l.config.altInput && (l.altInput = y(l.input.nodeName, l.input.className + " " + l.config.altInputClass), l._input = l.altInput, l.altInput.placeholder = l.input.placeholder, l.altInput.disabled = l.input.disabled, l.altInput.required = l.input.required, l.altInput.tabIndex = l.input.tabIndex, l.altInput.type = "text", l.input.setAttribute("type", "hidden"), !l.config.static && l.input.parentNode && l.input.parentNode.insertBefore(l.altInput, l.input.nextSibling)), l.config.allowInput || l._input.setAttribute("readonly", "readonly"), l._positionElement = l.config.positionElement || l._input) : l.config.errorHandler(new Error("Invalid input element specified")), function () {
        l.selectedDates = [], l.now = l.parseDate(l.config.now) || new Date();var t = l.config.defaultDate || ("INPUT" !== l.input.nodeName && "TEXTAREA" !== l.input.nodeName || !l.input.placeholder || l.input.value !== l.input.placeholder ? l.input.value : null);t && lt(t, l.config.dateFormat);var e = l.selectedDates.length > 0 ? l.selectedDates[0] : l.config.minDate && l.config.minDate.getTime() > l.now.getTime() ? l.config.minDate : l.config.maxDate && l.config.maxDate.getTime() < l.now.getTime() ? l.config.maxDate : l.now;l.currentYear = e.getFullYear(), l.currentMonth = e.getMonth(), l.selectedDates.length > 0 && (l.latestSelectedDateObj = l.selectedDates[0]), void 0 !== l.config.minTime && (l.config.minTime = l.parseDate(l.config.minTime, "H:i")), void 0 !== l.config.maxTime && (l.config.maxTime = l.parseDate(l.config.maxTime, "H:i")), l.minDateHasTime = !!l.config.minDate && (l.config.minDate.getHours() > 0 || l.config.minDate.getMinutes() > 0 || l.config.minDate.getSeconds() > 0), l.maxDateHasTime = !!l.config.maxDate && (l.config.maxDate.getHours() > 0 || l.config.maxDate.getMinutes() > 0 || l.config.maxDate.getSeconds() > 0), Object.defineProperty(l, "showTimeInput", { get: function get() {
            return l._showTimeInput;
          }, set: function set(t) {
            l._showTimeInput = t, l.calendarContainer && v(l.calendarContainer, "showTimeInput", t), l.isOpen && it();
          } });
      }(), l.utils = { getDaysInMonth: function getDaysInMonth(t, e) {
          return void 0 === t && (t = l.currentMonth), void 0 === e && (e = l.currentYear), 1 === t && (e % 4 == 0 && e % 100 != 0 || e % 400 == 0) ? 29 : l.l10n.daysInMonth[t];
        } }, l.isMobile || function () {
        var n = window.document.createDocumentFragment();if (l.calendarContainer = y("div", "flatpickr-calendar"), l.calendarContainer.tabIndex = -1, !l.config.noCalendar) {
          if (n.appendChild((l.monthNav = y("div", "flatpickr-months"), l.yearElements = [], l.monthElements = [], l.prevMonthNav = y("span", "flatpickr-prev-month"), l.prevMonthNav.innerHTML = l.config.prevArrow, l.nextMonthNav = y("span", "flatpickr-next-month"), l.nextMonthNav.innerHTML = l.config.nextArrow, q(), Object.defineProperty(l, "_hidePrevMonthArrow", { get: function get() {
              return l.__hidePrevMonthArrow;
            }, set: function set(t) {
              l.__hidePrevMonthArrow !== t && (v(l.prevMonthNav, "disabled", t), l.__hidePrevMonthArrow = t);
            } }), Object.defineProperty(l, "_hideNextMonthArrow", { get: function get() {
              return l.__hideNextMonthArrow;
            }, set: function set(t) {
              l.__hideNextMonthArrow !== t && (v(l.nextMonthNav, "disabled", t), l.__hideNextMonthArrow = t);
            } }), l.currentYearElement = l.yearElements[0], ft(), l.monthNav)), l.innerContainer = y("div", "flatpickr-innerContainer"), l.config.weekNumbers) {
            var i = function () {
              l.calendarContainer.classList.add("hasWeeks");var t = y("div", "flatpickr-weekwrapper");t.appendChild(y("span", "flatpickr-weekday", l.l10n.weekAbbreviation));var e = y("div", "flatpickr-weeks");return t.appendChild(e), { weekWrapper: t, weekNumbers: e };
            }(),
                o = i.weekWrapper,
                r = i.weekNumbers;l.innerContainer.appendChild(o), l.weekNumbers = r, l.weekWrapper = o;
          }l.rContainer = y("div", "flatpickr-rContainer"), l.rContainer.appendChild(U()), l.daysContainer || (l.daysContainer = y("div", "flatpickr-days"), l.daysContainer.tabIndex = -1), R(), l.rContainer.appendChild(l.daysContainer), l.innerContainer.appendChild(l.rContainer), n.appendChild(l.innerContainer);
        }l.config.enableTime && n.appendChild(function () {
          l.calendarContainer.classList.add("hasTime"), l.config.noCalendar && l.calendarContainer.classList.add("noCalendar"), l.timeContainer = y("div", "flatpickr-time"), l.timeContainer.tabIndex = -1;var n = y("span", "flatpickr-time-separator", ":"),
              i = _("flatpickr-hour");l.hourElement = i.getElementsByTagName("input")[0];var o = _("flatpickr-minute");if (l.minuteElement = o.getElementsByTagName("input")[0], l.hourElement.tabIndex = l.minuteElement.tabIndex = -1, l.hourElement.value = t(l.latestSelectedDateObj ? l.latestSelectedDateObj.getHours() : l.config.time_24hr ? l.config.defaultHour : function (t) {
            switch (t % 24) {case 0:case 12:
                return 12;default:
                return t % 12;}
          }(l.config.defaultHour)), l.minuteElement.value = t(l.latestSelectedDateObj ? l.latestSelectedDateObj.getMinutes() : l.config.defaultMinute), l.hourElement.setAttribute("data-step", l.config.hourIncrement.toString()), l.minuteElement.setAttribute("data-step", l.config.minuteIncrement.toString()), l.hourElement.setAttribute("data-min", l.config.time_24hr ? "0" : "1"), l.hourElement.setAttribute("data-max", l.config.time_24hr ? "23" : "12"), l.minuteElement.setAttribute("data-min", "0"), l.minuteElement.setAttribute("data-max", "59"), l.timeContainer.appendChild(i), l.timeContainer.appendChild(n), l.timeContainer.appendChild(o), l.config.time_24hr && l.timeContainer.classList.add("time24hr"), l.config.enableSeconds) {
            l.timeContainer.classList.add("hasSeconds");var r = _("flatpickr-second");l.secondElement = r.getElementsByTagName("input")[0], l.secondElement.value = t(l.latestSelectedDateObj ? l.latestSelectedDateObj.getSeconds() : l.config.defaultSeconds), l.secondElement.setAttribute("data-step", l.minuteElement.getAttribute("data-step")), l.secondElement.setAttribute("data-min", l.minuteElement.getAttribute("data-min")), l.secondElement.setAttribute("data-max", l.minuteElement.getAttribute("data-max")), l.timeContainer.appendChild(y("span", "flatpickr-time-separator", ":")), l.timeContainer.appendChild(r);
          }return l.config.time_24hr || (l.amPM = y("span", "flatpickr-am-pm", l.l10n.amPM[e((l.latestSelectedDateObj ? l.hourElement.value : l.config.defaultHour) > 11)]), l.amPM.title = l.l10n.toggleTitle, l.amPM.tabIndex = -1, l.timeContainer.appendChild(l.amPM)), l.timeContainer;
        }()), v(l.calendarContainer, "rangeMode", "range" === l.config.mode), v(l.calendarContainer, "animate", !0 === l.config.animate), v(l.calendarContainer, "multiMonth", l.config.showMonths > 1), l.calendarContainer.appendChild(n);var a = void 0 !== l.config.appendTo && void 0 !== l.config.appendTo.nodeType;if ((l.config.inline || l.config.static) && (l.calendarContainer.classList.add(l.config.inline ? "inline" : "static"), l.config.inline && (!a && l.element.parentNode ? l.element.parentNode.insertBefore(l.calendarContainer, l._input.nextSibling) : void 0 !== l.config.appendTo && l.config.appendTo.appendChild(l.calendarContainer)), l.config.static)) {
          var s = y("div", "flatpickr-wrapper");l.element.parentNode && l.element.parentNode.insertBefore(s, l.element), s.appendChild(l.element), l.altInput && s.appendChild(l.altInput), s.appendChild(l.calendarContainer);
        }l.config.static || l.config.inline || (void 0 !== l.config.appendTo ? l.config.appendTo : window.document.body).appendChild(l.calendarContainer);
      }(), function () {
        if (l.config.wrap && ["open", "close", "toggle", "clear"].forEach(function (t) {
          Array.prototype.forEach.call(l.element.querySelectorAll("[data-" + t + "]"), function (e) {
            return A(e, "click", l[t]);
          });
        }), l.isMobile) !function () {
          var t = l.config.enableTime ? l.config.noCalendar ? "time" : "datetime-local" : "date";l.mobileInput = y("input", l.input.className + " flatpickr-mobile"), l.mobileInput.step = l.input.getAttribute("step") || "any", l.mobileInput.tabIndex = 1, l.mobileInput.type = t, l.mobileInput.disabled = l.input.disabled, l.mobileInput.required = l.input.required, l.mobileInput.placeholder = l.input.placeholder, l.mobileFormatStr = "datetime-local" === t ? "Y-m-d\\TH:i:S" : "date" === t ? "Y-m-d" : "H:i:S", l.selectedDates.length > 0 && (l.mobileInput.defaultValue = l.mobileInput.value = l.formatDate(l.selectedDates[0], l.mobileFormatStr)), l.config.minDate && (l.mobileInput.min = l.formatDate(l.config.minDate, "Y-m-d")), l.config.maxDate && (l.mobileInput.max = l.formatDate(l.config.maxDate, "Y-m-d")), l.input.type = "hidden", void 0 !== l.altInput && (l.altInput.type = "hidden");try {
            l.input.parentNode && l.input.parentNode.insertBefore(l.mobileInput, l.input.nextSibling);
          } catch (t) {}A(l.mobileInput, "change", function (t) {
            l.setDate(t.target.value, !1, l.mobileFormatStr), dt("onChange"), dt("onClose");
          });
        }();else {
          var t = n(tt, 50);l._debouncedChange = n(O, w), l.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && A(l.daysContainer, "mouseover", function (t) {
            "range" === l.config.mode && Z(t.target);
          }), A(window.document.body, "keydown", J), l.config.static || A(l._input, "keydown", J), l.config.inline || l.config.static || A(window, "resize", t), void 0 !== window.ontouchstart ? A(window.document, "click", Q) : A(window.document, "mousedown", M(Q)), A(window.document, "focus", Q, { capture: !0 }), !0 === l.config.clickOpens && (A(l._input, "focus", l.open), A(l._input, "mousedown", M(l.open))), void 0 !== l.daysContainer && (A(l.monthNav, "mousedown", M(gt)), A(l.monthNav, ["keyup", "increment"], k), A(l.daysContainer, "mousedown", M(at))), void 0 !== l.timeContainer && void 0 !== l.minuteElement && void 0 !== l.hourElement && (A(l.timeContainer, ["increment"], E), A(l.timeContainer, "blur", E, { capture: !0 }), A(l.timeContainer, "mousedown", M(P)), A([l.hourElement, l.minuteElement], ["focus", "click"], function (t) {
            return t.target.select();
          }), void 0 !== l.secondElement && A(l.secondElement, "focus", function () {
            return l.secondElement && l.secondElement.select();
          }), void 0 !== l.amPM && A(l.amPM, "mousedown", M(function (t) {
            E(t), O();
          })));
        }
      }(), (l.selectedDates.length || l.config.noCalendar) && (l.config.enableTime && T(l.config.noCalendar ? l.latestSelectedDateObj || l.config.minDate : void 0), mt(!1)), C(), l.showTimeInput = l.selectedDates.length > 0 || l.config.noCalendar;var r = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);!l.isMobile && r && it(), dt("onReady");
    }(), l;
  }function E(t, e) {
    for (var n = Array.prototype.slice.call(t), i = [], o = 0; o < n.length; o++) {
      var r = n[o];try {
        if (null !== r.getAttribute("data-fp-omit")) continue;void 0 !== r._flatpickr && (r._flatpickr.destroy(), r._flatpickr = void 0), r._flatpickr = C(r, e || {}), i.push(r._flatpickr);
      } catch (t) {
        console.error(t);
      }
    }return 1 === i.length ? i[0] : i;
  }"undefined" != typeof HTMLElement && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (t) {
    return E(this, t);
  }, HTMLElement.prototype.flatpickr = function (t) {
    return E([this], t);
  });var D = function D(t, e) {
    return t instanceof NodeList ? E(t, e) : E("string" == typeof t ? window.document.querySelectorAll(t) : [t], e);
  };return D.defaultConfig = g, D.l10ns = { en: Object.assign({}, c), default: Object.assign({}, c) }, D.localize = function (t) {
    D.l10ns.default = Object.assign({}, D.l10ns.default, t);
  }, D.setDefaults = function (t) {
    D.defaultConfig = Object.assign({}, D.defaultConfig, t);
  }, D.parseDate = u({}), D.formatDate = d({}), D.compareDates = h, "undefined" != typeof jQuery && (jQuery.fn.flatpickr = function (t) {
    return E(this, t);
  }), Date.prototype.fp_incr = function (t) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof t ? parseInt(t, 10) : t));
  }, "undefined" != typeof window && (window.flatpickr = D), D;
}), function (t) {
  var e = -1,
      n = -1,
      i = function i(t) {
    return parseFloat(t) || 0;
  },
      o = function o(e) {
    var n = { byRow: !0, property: "height", target: null, remove: !1, mq: null };return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? t.extend(n, e) : ("boolean" == typeof e ? n.byRow = e : "remove" === e && (n.remove = !0), n);
  },
      r = t.fn.matchHeight = function (e) {
    var n = o(e);if (n.remove) {
      var i = this;return this.css(n.property, ""), t.each(r._groups, function (t, e) {
        e.elements = e.elements.not(i);
      }), this;
    }return this.length <= 1 && !n.target ? this : (r._groups.push({ elements: this, options: n }), n.mq && window.matchMedia("only all").matches && !window.matchMedia(n.mq).matches ? this : (r._apply(this, n), this));
  };r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._apply = function (e, n) {
    var a = o(n),
        s = t(e),
        l = [s],
        c = t(window).scrollTop(),
        d = t("html").outerHeight(!0),
        u = s.parents().filter(":hidden");return u.each(function () {
      var e = t(this);e.data("style-cache", e.attr("style"));
    }), u.css("display", "block"), a.byRow && !a.target && (s.each(function () {
      var e = t(this),
          n = "inline-block" === e.css("display") ? "inline-block" : "block";e.data("style-cache", e.attr("style")), e.css({ display: n, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px" });
    }), l = function (e) {
      var n = null,
          o = [];return t(e).each(function () {
        var e = t(this),
            r = e.offset().top - i(e.css("margin-top")),
            a = o.length > 0 ? o[o.length - 1] : null;null === a ? o.push(e) : Math.floor(Math.abs(n - r)) <= 1 ? o[o.length - 1] = a.add(e) : o.push(e), n = r;
      }), o;
    }(s), s.each(function () {
      var e = t(this);e.attr("style", e.data("style-cache") || "");
    })), t.each(l, function (e, n) {
      var o = t(n),
          r = 0;if (a.target) r = a.target.outerHeight(!1);else {
        if (a.byRow && o.length <= 1) return void o.css(a.property, "");o.each(function () {
          var e = t(this),
              n = { display: "inline-block" === e.css("display") ? "inline-block" : "block" };n[a.property] = "", e.css(n), e.outerHeight(!1) > r && (r = e.outerHeight(!1)), e.css("display", "");
        });
      }o.each(function () {
        var e = t(this),
            n = 0;a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (n += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), n += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(a.property, r - n));
      });
    }), u.each(function () {
      var e = t(this);e.attr("style", e.data("style-cache") || null);
    }), r._maintainScroll && t(window).scrollTop(c / d * t("html").outerHeight(!0)), this;
  }, r._applyDataApi = function () {
    var e = {};t("[data-match-height], [data-mh]").each(function () {
      var n = t(this),
          i = n.attr("data-mh") || n.attr("data-match-height");e[i] = i in e ? e[i].add(n) : n;
    }), t.each(e, function () {
      this.matchHeight(!0);
    });
  };var a = function a(e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
      if (this.options.mq && window.matchMedia("only all").matches && !window.matchMedia(this.options.mq).matches) return this.elements.css(this.options.property, ""), !0;r._apply(this.elements, this.options);
    }), r._afterUpdate && r._afterUpdate(e, r._groups);
  };r._update = function (i, o) {
    if (o && "resize" === o.type) {
      var s = t(window).width();if (s === e) return;e = s;
    }i ? -1 === n && (n = setTimeout(function () {
      a(o), n = -1;
    }, r._throttle)) : a(o);
  }, t(r._applyDataApi), t(window).bind("load", function (t) {
    r._update(!1, t);
  }), t(window).bind("resize orientationchange", function (t) {
    r._update(!0, t);
  });
}(jQuery), function () {
  "use strict";
  var t,
      e = document.querySelector(".lv-page"),
      n = null;function i() {
    n.offset = 140, window.innerWidth >= 768 && (n.offset = 230), window.innerWidth >= 992 && (n.offset = 230);
  }window.addEventListener("load", function () {
    var _ref;

    if (!n) return n = new Headroom(e, (_ref = { offset: 0, tolerance: 0 }, _defineProperty(_ref, "tolerance", { up: 5, down: 0 }), _defineProperty(_ref, "classes", { initial: "headroom", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom" }), _defineProperty(_ref, "onPin", function onPin() {}), _defineProperty(_ref, "onUnpin", function onUnpin() {}), _defineProperty(_ref, "onTop", function onTop() {}), _defineProperty(_ref, "onNotTop", function onNotTop() {}), _defineProperty(_ref, "onBottom", function onBottom() {}), _defineProperty(_ref, "onNotBottom", function onNotBottom() {}), _ref)), i(), void n.init();
  }), window.addEventListener("resize", function () {
    clearTimeout(t), t = setTimeout(function () {
      n && i();
    }, 250);
  });
}(), function (t) {
  "use strict";
  t("[data-slider]").each(function () {
    var e = t(this),
        n = t("[data-flickity]", e),
        i = t(".slider-prev-btn", e),
        o = t(".slider-next-btn", e);n.children().length > 1 && (i.on("click", function () {
      n.flickity("previous").flickity("stopPlayer");
    }), o.on("click", function () {
      n.flickity("next").flickity("stopPlayer");
    }));
  });
}(jQuery), function (t) {
  "use strict";
  var e = t("html"),
      n = (t(".lv-page"), t(".lv-off-canvas")),
      i = t(".dropdown", n),
      o = t("li:not(.has-dropdown) > a", i),
      r = t(".submenu-arrow");t("[data-menu-toggle]").on("click", function (t) {
    t.preventDefault(), e.toggleClass("has-open-menu");
  }), r.on("click", function (e) {
    e.preventDefault(), e.stopPropagation(), t(this).parent().next(".dropdown").addClass("is-open");
  }), o.click(function (n) {
    n.preventDefault();var i = t(this).attr("href");e.removeClass("has-open-menu").addClass("has-closed-menu"), setTimeout(function () {
      window.location = i;
    }.bind(i), 200);
  }), i.on("click", function (e) {
    t(this).removeClass("is-open"), e.stopPropagation();
  });
}(jQuery), function (t) {
  "use strict";
  var e = {},
      n = ["xs", "sm", "md", "lg", "xl", "xxl"];function i() {
    var n = t("body");1 != t(".lv-screen-data").length && n.append('<div class="lv-screen-data"></div>');var i,
        o,
        r = window.innerWidth,
        a = window.innerHeight,
        s = t(window).width(),
        l = t(window).height();r < e.sm && (i = "xs"), r >= e.sm && r < e.md && (i = "sm"), r >= e.md && r < e.lg && (i = "md"), r >= e.lg && r < e.xl && (i = "lg"), r >= e.xl && r < e.xxl && (i = "xl"), r >= e.xxl && (i = "xxl"), s < e.sm && (o = "xs"), s >= e.sm && s < e.md && (o = "sm"), s >= e.md && s < e.lg && (o = "md"), s >= e.lg && s < e.xl && (o = "lg"), s >= e.xl && s < e.xxl && (o = "xl"), s >= e.xxl && (o = "xxl"), t(".lv-screen-data").html(s + " x " + l + "<br><small>" + r + " x " + a + "</small><br>" + i + "  [" + o + "]").css({ position: "fixed", top: 0, padding: "5px 10px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      n.toggleClass("developer");
    });
  }!function () {
    for (var i, o = "", r = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), a = 0; a < r.length; a++) {
      e[n[a]] = Number(r[a].replace("px", "")), o += "<tr><td>" + n[a] + "</td><td>" + r[a] + "</td></tr>";
    }i = '<table class="table breakpoints-table" style="width: 300px;">' + o + "</table>", t('[data-js="lv-responsive-table"]').append(i);
  }(), t("html[development]").length && (i(), t(window).resize(function () {
    i();
  }));
}(jQuery), $(function () {
  $(".datepicker, .ui-datepicker").flatpickr({ format: "d-m-Y", altFormat: "d-m-Y", altInput: !0, allowInput: !0 }), document.querySelectorAll(".datepicker, .ui-datepicker").forEach(function (t) {
    t.onkeypress = function () {
      return !1;
    };
  });
});var observer = lozad(".lozad", { rootMargin: "10px 0px", threshold: .1 });observer.observe(), $("[data-equal-height]").matchHeight({ byRow: !1, property: "height", target: null, remove: !1, mq: "(min-width: 768px)" }), $('a[href*="#"]:not([href="#"], [href="#sitemap"], [data-toggle="tab"])').on("click", function () {
  var t = $(this).attr("href"),
      e = $(t),
      n = $(".global-header").height();if (e.length) return $.scrollTo(e.offset().top - n, 800), !1;
}), $('a[href="#sitemap"]').length && $("[data-sitemap-trigger]").on("click", function (t) {
  t.preventDefault(), $(".fa", $(this)).toggleClass("active"), $("[data-sitemap]").toggleClass("is-collapsed");var e = $(this).attr("href"),
      n = $(e);setTimeout(function () {
    $.scrollTo(n.offset().top, 400);
  }, 300);
}), $("[data-back-top]").click(function () {
  $.scrollTo(0, 500);
});

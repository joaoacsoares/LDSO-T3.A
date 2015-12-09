google.maps.__gjsload__('map', function(_) {
    'use strict';
    var Uy = function(a, b) {
        return new _.Ar(_.Q(a.N, 1)[b])
    };
    var Vy = function(a) {
        this.N = a || []
    };
    var Wy = function(a) {
        this.N = a || []
    };
    var Xy = function(a, b) {
        for (var c = 0, d = _.Hc(a.j.N, 1); c < d; c++) {
            var e = Uy(a.j, c);
            0 == e.getType() && (e.N[2] = b)
        }
    };
    var Yy = function(a) {
        var b = Math.round(1E7 * a);
        return 0 > a ? b + 4294967296 : b
    };
    var Zy = function(a, b) {
        return _.wj(a.get("projection"), b, a.get("zoom"), a.get("offset"), a.get("center"))
    };
    var $y = function() {
        var a = _.hi().N[14];
        return null != a ? a : 0
    };
    var az = function(a, b) {
        return new Vy(_.Q(a.N, 4)[b])
    };
    var bz = function(a, b) {
        return _.Q(a.N, 5)[b]
    };
    var cz = function(a) {
        return (a = a.N[1]) ? new _.ue(a) : _.yh
    };
    var dz = function(a) {
        return (a = a.N[0]) ? new _.ue(a) : _.xh
    };
    var ez = function(a) {
        a = a.N[1];
        return null != a ? a : 0
    };
    var fz = function(a) {
        a = a.N[0];
        return null != a ? a : 0
    };
    var gz = function(a) {
        this.N = a || []
    };
    var hz = function(a, b) {
        for (var c = a.length, d = _.ua(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    };
    var iz = function(a, b) {
        for (var c = 0, d = a.O, e = a.j, f = 0, g; g = b[f++];)
            if (a.intersects(g)) {
                var h = g.O,
                    k = g.j,
                    n = 0;
                if (_.Ki(g, a)) return 1;
                n = e.contains(k.j) && k.contains(e.j) && !_.dd(e, k) ? _.fd(k.j, e.O) + _.fd(e.j, k.O) : _.fd(e.contains(k.j) ? k.j : e.j, e.contains(k.O) ? k.O : e.O);
                c += n * (Math.min(d.j, h.j) - Math.max(d.O, h.O))
            }
        return c /= _.hd(d) * _.ed(e)
    };
    var jz = function(a, b) {
        var c = a.x,
            d = a.y;
        switch (b) {
            case 90:
                a.x = d;
                a.y = 256 - c;
                break;
            case 180:
                a.x = 256 - c;
                a.y = 256 - d;
                break;
            case 270:
                a.x = 256 - d, a.y = c
        }
    };
    var kz = function(a, b, c, d, e, f, g, h) {
        this.La = a.La;
        this.zoom = a.zoom;
        this.j = a;
        this.U = b;
        this.oa = c;
        this.V = d;
        this.T = e;
        this.na = f;
        this.S = g;
        this.P = _.Mj(h) ? h : null;
        this.O = "";
        this.Xb()
    };
    var lz = function() {
        this.maxZoom = this.minZoom = -1;
        this.j = [];
        this.Qa = []
    };
    var mz = function(a, b, c, d, e) {
        this.La = a;
        this.zoom = b;
        this.O = c;
        this.j = d.slice(0);
        this.P = e && e.nh || _.sa
    };
    var nz = function() {
        var a = !1;
        return function(b, c) {
            if (b && c) {
                if (.999999 > iz(b, c)) return a = !1;
                var d = _.vj(b, (_.vy - 1) / 2);
                return .999999 < iz(d, c) ? a = !0 : a
            }
        }
    };
    var oz = function() {
        return function(a, b) {
            return a && b ? .9 <= iz(a, b) : void 0
        }
    };
    var pz = function(a, b) {
        if (a && b) {
            for (var c = 0, d; d = b[c++];)
                if (d.intersects(a)) return !0;
            return !1
        }
    };
    var qz = function(a, b, c, d) {
        this.O = this.T = this.S = this.P = !0;
        var e = d.Mh,
            f = [];
        _.W.U ? f.push("mob:n") : f.push("mob:y");
        1 < _.rf() ? f.push("hdpi:y") : f.push("hdpi:n");
        e ? f.push("staticmapsize:y") : f.push("staticmapsize:n");
        _.ek() ? f.push("webp:y") : f.push("webp:n");
        this.j = _.Hf("map", {
            startTime: a,
            kj: f,
            cq: {
                firstMap: c
            }
        });
        this.pa = b;
        d.Bc && _.Y(b, "Smu");
        d.Bc && d.Bc.get() ? this.wh(!0, d.Bc.get()) : (d.Bc && d.Bc.addListenerOnce((0, _.t)(this.wh, this, !0)), _.I.addListenerOnce(b, "tilesloaded", (0, _.t)(this.wh, this, !1)));
        _.I.addListenerOnce(b,
            "zoom_changed", (0, _.t)(this.Si, this));
        _.I.addListenerOnce(b, "center_changed", (0, _.t)(this.Si, this))
    };
    var rz = function(a, b) {
        this.P = a;
        this.S = b
    };
    var sz = function(a, b) {
        this.j = function(c, d, e, f, g) {
            var h;
            a: {
                if (!(7 > d)) {
                    var k = 1 << d - 7;
                    h = c.x / k;
                    for (var k = c.y / k, n = 0; n < tz.length; ++n)
                        if (h >= tz[n].cg && h <= tz[n].bg && k >= tz[n].eg && k <= tz[n].dg) {
                            h = !0;
                            break a
                        }
                }
                h = !1
            }
            return h ? b.j(c, d, e, f, g) : a.j(c, d, e, f, g)
        }
    };
    var uz = function(a) {
        for (var b = 0; b < _.Hc(a.N, 0); ++b) {
            var c = a.getUrl(b).replace(/(\?|&)src=api(&|$)/, "$1src=apiv3$2");
            a.setUrl(b, c)
        }
        for (b = 0; b < _.Hc(a.N, 6); ++b) {
            var d = b,
                c = _.Q(a.N, 6)[d].replace(/(\?|&)src=api(&|$)/, "$1src=apiv3$2"),
                d = b;
            _.Q(a.N, 6)[d] = c
        }
    };
    var vz = function(a, b) {
        this.P = b || new _.kf;
        this.j = new _.$c(a % 360, 45);
        this.S = new _.N(0, 0);
        this.O = !0
    };
    var wz = function(a, b, c, d, e, f) {
        this.j = function(g, h, k, n, p) {
            return new kz(_.nv(g, h, k, n, p), a, b, c, d, e, k.width, f)
        }
    };
    var xz = function(a, b, c, d) {
        this.O = [];
        for (var e = 0; e < _.u(a); ++e) {
            var f = a[e],
                g = new lz,
                h = f.N[2];
            g.minZoom = (null != h ? h : 0) || 0;
            h = f.N[3];
            g.maxZoom = (null != h ? h : 0) || d;
            for (h = 0; h < _.Hc(f.N, 5); ++h) g.j.push(bz(f, h));
            for (h = 0; h < _.Hc(f.N, 4); ++h) {
                var k = _.Yi(b, new _.id(new _.L(fz(dz(az(f, h))) / 1E7, ez(dz(az(f, h))) / 1E7), new _.L(fz(cz(az(f, h))) / 1E7, ez(cz(az(f, h))) / 1E7)), g.maxZoom);
                g.Qa[h] = new _.lf([new _.N(Math.floor(k.ua / c.width), Math.floor(k.ra / c.height)), new _.N(Math.floor(k.wa / c.width), Math.floor(k.ya / c.height))])
            }
            this.O.push(g)
        }
    };
    var yz = function(a) {
        this.j = function(b, c, d, e, f) {
            function g() {
                f && f.Sc && k.Ac() && f.Sc()
            }
            var h = _.Fj(a, function(a, h) {
                    return a.j(b, c, d, e, {
                        Mg: f && f.Mg,
                        Sc: g,
                        zIndex: h
                    })
                }),
                k = new mz(b, c, e, h, {
                    nh: f && f.nh
                });
            return k
        }
    };
    var zz = function(a) {
        var b = new _.Zw(pz),
            c = new _.Zw(nz()),
            d = new _.Zw(oz());
        a.bindTo("traffic", b, "available");
        a = {};
        a.obliques = c;
        a.traffic = b;
        a.report_map_issue = d;
        return a
    };
    var Az = function(a, b) {
        var c = a.__gm,
            d = new _.Iw(b, a.overlayMapTypes, _.Kj(_.Y, a));
        d.bindTo("size", c);
        d.bindTo("zoom", c);
        d.bindTo("offset", c);
        d.bindTo("projectionBounds", c)
    };
    var Bz = function(a) {
        var b = new _.Hx(300);
        b.bindTo("input", a, "bounds");
        _.I.addListener(b, "idle_changed", function() {
            b.get("idle") && _.I.trigger(a, "idle")
        })
    };
    var Cz = function(a) {
        if (a && _.ik(a.getDiv()) && (_.Zj() || _.Yj())) {
            _.Y(a, "Tdev");
            var b = window.document.querySelector('meta[name="viewport"]');
            (b = b && b.content) && b.match(/width=device-width/) && _.Y(a, "Mfp")
        }
    };
    var Dz = function(a, b) {
        function c() {
            var c = b.get("mapType");
            if (c) switch (c.nb) {
                case "roadmap":
                    _.Y(a, "Tm");
                    break;
                case "satellite":
                    c.na && _.Y(a, "Ta");
                    _.Y(a, "Tk");
                    break;
                case "hybrid":
                    c.na && _.Y(a, "Ta");
                    _.Y(a, "Th");
                    break;
                case "terrain":
                    _.Y(a, "Tr");
                    break;
                default:
                    _.Y(a, "To")
            }
        }
        c();
        _.I.addListener(b, "maptype_changed", c)
    };
    var Ez = function(a) {
        var b = new _.Mw(a.mapTypes);
        b.bindTo("bounds", a);
        b.bindTo("heading", a);
        b.bindTo("mapTypeId", a);
        b.bindTo("tilt", a.__gm);
        return b
    };
    var Fz = function(a, b) {
        _.Ga(_.tg, function(c, d) {
            b.set(d, Gz(a, d))
        })
    };
    var Hz = function(a, b) {
        this.j = a;
        this.O = b
    };
    var Iz = function(a, b) {
        function c(c) {
            c = b.getAt(c);
            if (c instanceof _.dg) {
                var e = new _.J,
                    f = c.get("styles");
                e.set("apistyle", _.Tw(f));
                e = Gz(a, c.j, e);
                c.of = (0, _.t)(e.of, e)
            }
        }
        _.I.addListener(b, "insert_at", c);
        _.I.addListener(b, "set_at", c);
        b.forEach(function(a, b) {
            c(b)
        })
    };
    var Jz = function(a) {
        var b;
        b = (b = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection || null) && b.type;
        _.Y(a, "Nt", b && Kz[b] || "-na")
    };
    var Lz = function(a, b, c) {
        if ((_.Zj() || _.Yj()) && _.Bk()) {
            _.Y(b, "Mmni");
            var d = window.setInterval(function() {
                var e;
                e = a.j.getBoundingClientRect();
                if (e = !(0 >= e.top - 5 && 0 >= e.left - 5 && e.height + 5 >= window.document.body.scrollHeight && e.width + 5 >= window.document.body.scrollWidth)) e = a.j.getBoundingClientRect(), e = 0 >= e.top - 5 && 0 >= e.left - 5 && e.bottom + 5 >= window.innerHeight && e.right + 5 >= window.innerWidth && (!c || c());
                e && (_.Y(b, "Mmus"), window.clearInterval(d))
            }, 1E3)
        }
    };
    var Mz = function(a) {
        this.j = a
    };
    var Nz = function() {
        var a, b = new _.J;
        b.bounds_changed = function() {
            var c = b.get("bounds");
            c ? a && _.oi(a, c) || (a = _.mf(c.ua - 512, c.ra - 512, c.wa + 512, c.ya + 512), b.set("boundsQ", a)) : b.set("boundsQ", c)
        };
        return b
    };
    var Oz = function() {
        this.U = new _.jf;
        this.S = {};
        this.P = {}
    };
    var Pz = function(a, b, c, d, e, f, g) {
        var h = c.__gm,
            k = new _.Ew(c, a, b, !!c.Fa, e, h, d, g, (0, _.t)(f.j, f));
        k.bindTo("draggingCursor", c);
        k.bindTo("draggableMap", c, "draggable");
        _.I.addListener(c, "zoom_changed", function() {
            k.get("zoom") != c.get("zoom") && k.set("zoom", c.get("zoom"))
        });
        k.set("zoom", c.get("zoom"));
        k.bindTo("disablePanMomentum", c);
        k.bindTo("projectionTopLeft", e);
        k.bindTo("draggableCursor", h, "cursor");
        d.bindTo("zoom", k);
        e.bindTo("zoom", k);
        return k
    };
    var Qz = function(a, b, c) {
        a = new qz(a, b, Rz, c);
        Rz = !1;
        return a
    };
    var Sz = function(a, b, c, d) {
        return d ? new rz(a, function() {
            return b
        }) : _.T[23] ? new rz(a, function(a) {
            var d = c.get("scale");
            return 2 == d || 4 == d ? b : a
        }) : a
    };
    var Tz = function(a, b) {
        var c = a.__gm,
            d = new _.Qv(b, (0, _.t)(_.uk.O, _.uk));
        d.bindTo("center", a);
        d.bindTo("projectionBounds", c);
        d.bindTo("offset", c);
        return d
    };
    var Uz = function(a, b) {
        var c = _.ii(),
            d = _.hi(),
            e = _.Me(_.R);
        this.pa = a;
        this.O = b;
        this.j = new _.kf;
        this.P = _.Je(e);
        this.S = _.Ke(e);
        this.T = _.ui(d);
        this.na = _.ti(e);
        this.V = _.Q(d.N, 0);
        (_.uj() || _.T[43] || _.lj()) && 0 < _.Hc(d.N, 12) && !this.na && (this.V = _.Q(d.N, 12));
        for (var d = {}, e = 0, f = _.Hc(c.N, 5); e < f; ++e) {
            var g;
            g = e;
            g = new gz(_.Q(c.N, 5)[g]);
            var h;
            h = g.N[1];
            h = null != h ? h : 0;
            d[h] = d[h] || [];
            d[h].push(g)
        }
        new xz(d[0], this.j, new _.O(256, 256), 21);
        c.N[0] = c.N[0] || [];
        this.oa = new _.ve(c.N[0]);
        uz(this.oa);
        this.Aa = new xz(d[1], this.j, new _.O(256,
            256), 22);
        c.N[1] = c.N[1] || [];
        this.U = new _.ve(c.N[1]);
        uz(this.U);
        new xz(d[3], this.j, new _.O(256, 256), 21);
        c.N[3] = c.N[3] || [];
        this.ta = new _.ve(c.N[3]);
        uz(this.ta);
        c.N[7] = c.N[7] || [];
        this.qa = new _.ve(c.N[7]);
        uz(this.qa)
    };
    var Vz = function(a, b, c, d) {
        var e, f = d || {};
        e = _.C(f.heading);
        var g = c ? function(a, b) {
            return c.T(a, b, f.Ok)
        } : _.na(0);
        d = ("hybrid" == b && !e || "terrain" == b || "roadmap" == b) && 0 != f.jn;
        var h = f.ld || _.na(null);
        return "satellite" == b ? (b = "", e ? (g = a.qa, b += "deg=" + f.heading + "&", e = null) : (g = a.U, e = a.Aa), _.sv(g, e, b, d, _.rv(f.heading), a.na, h)) : new wz(a.V, d && 1 < _.rf(), _.rv(f.heading, !!f.Ok), g, h, f.heading)
    };
    var Wz = function(a, b) {
        var c;
        c = null;
        "hybrid" == b || "roadmap" == b ? c = a.oa : "terrain" == b ? c = a.ta : "satellite" == b && (c = a.U);
        c ? (c = c.N[5], c = null != c ? c : "") : c = null;
        return c
    };
    var Xz = function(a) {
        function b(a, b) {
            if (!b || !b.Dc) return b;
            var c = [];
            _.ji(c, b.Dc.N);
            c = new _.ps(c);
            _.cs(_.Gt(c)).N[0] = a;
            return {
                scale: b.scale,
                Ad: b.Ad,
                Dc: c
            }
        }
        var c, d = Vz(a, "roadmap", a.O, {
                jn: !1,
                ld: function() {
                    return b(3, c.get("options"))
                }
            }),
            e = Vz(a, "roadmap", a.O, {
                ld: function() {
                    return b(18, c.get("options"))
                }
            }),
            d = new yz([d, e]),
            e = Vz(a, "roadmap", a.O, {
                ld: function() {
                    return c.get("options")
                }
            });
        c = new _.jv(new sz(d, e), a.j, 21, "Mapa", "Mostrar mapa da rua", "Lamentamos, n\u00e3o possu\u00edmos imagens desta localiza\u00e7\u00e3o.",
            _.Qx.roadmap, !1, Wz(a, "roadmap"), 47, "roadmap", a.T, a.P, a.S);
        Yz(a, c);
        return c
    };
    var Zz = function(a, b) {
        function c() {
            return g.get("options")
        }
        var d = _.C(b),
            e = Vz(a, "satellite", null, {
                heading: b,
                ld: c
            }),
            f = Vz(a, "hybrid", a.O, {
                heading: b,
                ld: c
            }),
            g = new _.jv(new yz([e, f]), _.C(b) ? new vz(b) : a.j, d ? 21 : 22, "H\u00edbrido", "Mostrar imagens com nomes das ruas", "Lamentamos, n\u00e3o possu\u00edmos imagens desta localiza\u00e7\u00e3o.", _.Qx.hybrid, d, Wz(a, "hybrid"), 50, "hybrid", a.T, a.P, a.S);
        Yz(a, g);
        return g
    };
    var $z = function(a, b) {
        var c = _.C(b),
            d = Vz(a, "satellite", null, {
                heading: b,
                ld: function() {
                    return e.get("options")
                }
            }),
            e = new _.jv(d, _.C(b) ? new vz(b) : a.j, c ? 21 : 22, "Sat\u00e9lite", "Mostrar imagens de sat\u00e9lite", "Lamentamos, n\u00e3o possu\u00edmos imagens desta localiza\u00e7\u00e3o.", c ? "a" : _.Qx.satellite, c, null, null, "satellite", a.T, a.P, a.S);
        return e
    };
    var Gz = function(a, b, c) {
        var d = null,
            e = [0, 90, 180, 270],
            f = _.qe();
        if ("hybrid" == b) {
            d = Zz(a);
            c = [];
            f = 0;
            for (b = e.length; f < b; ++f) c.push(Zz(a, e[f]));
            d.Mc = new _.Xu(d, c)
        } else if ("satellite" == b) {
            d = $z(a);
            c = [];
            f = 0;
            for (b = e.length; f < b; ++f) c.push($z(a, e[f]));
            d.Mc = new _.Xu(d, c)
        } else if ("roadmap" == b && 1 < _.rf() && (+_.wi(f) || _.T[43])) d = Xz(a);
        else {
            e = Vz(a, b, a.O, {
                ld: function() {
                    return d.get("options")
                },
                Ok: !!+_.vi(f)
            });
            if ("terrain" == b) {
                if (b = Wz(a, "terrain")) {
                    var g = b.split(",");
                    2 == g.length && (b = g[1])
                }
                d = new _.jv(e, a.j, 21, "Terreno", "Mostrar mapa de rua com terreno",
                    "Lamentamos, n\u00e3o possu\u00edmos imagens desta localiza\u00e7\u00e3o.", _.Qx.terrain, !1, b, 63, "terrain", a.T, a.P, a.S, +_.vi(f) ? new _.O(128, 128) : new _.O(256, 256))
            } else d = new _.jv(e, a.j, 21, "Mapa", "Mostrar mapa da rua", "Lamentamos, n\u00e3o possu\u00edmos imagens desta localiza\u00e7\u00e3o.", _.Qx.roadmap, !1, Wz(a, "roadmap"), 47, "roadmap", a.T, a.P, a.S, +_.vi(f) ? new _.O(128, 128) : new _.O(256, 256));
            Yz(a, d, c)
        }
        return d
    };
    var Yz = function(a, b, c) {
        var d = a.pa.__gm;
        c ? b.bindTo("apistyle", c) : (b.bindTo("layers", d, "layers"), b.bindTo("apistyle", d), b.bindTo("mapMaker", a.pa));
        b.bindTo("authUser", d);
        _.T[23] && b.bindTo("scale", a.pa);
        a.O.O().addListener(function() {
            b.notify("epochs")
        })
    };
    var lA = function() {};
    Vy.prototype.W = _.l("N");
    _.Af.prototype.Bc = _.ni(8, _.l("P"));
    _.jf.prototype.j = _.ni(7, function(a) {
        this.Ba.forEach(function(b) {
            b(a)
        })
    });
    Wy.prototype.W = _.l("N");
    Wy.prototype.getTile = function() {
        var a = this.N[1];
        return a ? new _.ds(a) : _.uy
    };
    gz.prototype.W = _.l("N");
    gz.prototype.clearRect = function() {
        var a = this.N;
        4 in a && delete a[4]
    };
    var tz = [{
        cg: 108.25,
        bg: 109.625,
        eg: 49,
        dg: 51.5
    }, {
        cg: 109.625,
        bg: 109.75,
        eg: 49,
        dg: 50.875
    }, {
        cg: 109.75,
        bg: 110.5,
        eg: 49,
        dg: 50.625
    }, {
        cg: 110.5,
        bg: 110.625,
        eg: 49,
        dg: 49.75
    }];
    _.m = kz.prototype;
    _.m.rb = function() {
        return this.j.rb()
    };
    _.m.Ac = function() {
        return this.j.Ac()
    };
    _.m.release = function() {
        this.j.release()
    };
    _.m.freeze = function() {
        this.j.freeze()
    };
    _.m.Xb = function() {
        var a = this.na();
        if (a && a.Dc) {
            var b = this.V(new _.N(this.La.x, this.La.y), this.zoom);
            if (b) {
                for (var c = 2 == a.scale || 4 == a.scale ? a.scale : 1, c = Math.min(1 << this.zoom, c), d = this.oa && 4 != c, e = this.zoom, f = c; 1 < f; f /= 2) e--;
                var f = this.S,
                    g;
                1 != c && (f /= c);
                d && (c *= 2);
                1 != c && (g = c);
                c = new _.bv(a.Dc);
                c.j.N[3] = 0;
                g && (_.Ht(c.j).N[4] = g);
                _.dv(c, b, e, f);
                if (e = this.T(b, this.zoom, 128 == this.S)) Xy(c, e), _.Mj(this.P) && _.iv(c, this.P), e = this.U, b = e[(b.x + 2 * b.y) % e.length], b += "?pb=" + _.av(_.qs(c.j)), null != a.Ad && (b += "&authuser=" + a.Ad),
                    this.O == b ? this.j.Xb() : (this.O = b, this.j.setUrl(b))
            } else this.O = "", this.j.setUrl("")
        }
    };
    _.m = mz.prototype;
    _.m.rb = _.l("O");
    _.m.Ac = function() {
        return hz(this.j, function(a) {
            return a.Ac()
        })
    };
    _.m.release = function() {
        _.mc(this.j, function(a) {
            a.release()
        });
        this.P()
    };
    _.m.freeze = function() {
        _.mc(this.j, function(a) {
            a.freeze()
        })
    };
    _.m.Xb = function() {
        _.mc(this.j, function(a) {
            a.Xb()
        })
    };
    var Kz = {
            bluetooth: "-b",
            cellular: "-c",
            ethernet: "-e",
            none: "-n",
            wifi: "-wf",
            wimax: "-wm",
            other: "-o"
        },
        Rz = !0;
    _.m = qz.prototype;
    _.m.pq = function() {
        this.S && (this.S = !1, _.Ff(this.j, "visreq"))
    };
    _.m.qq = function() {
        this.T && (this.T = !1, _.Ff(this.j, "visres"))
    };
    _.m.kk = function(a) {
        this.P && (this.P = !1, _.Ff(this.j, "firsttile", a || void 0))
    };
    _.m.wh = function(a, b) {
        this.O && (this.kk(b), this.O = !1, _.Ff(this.j, "visuallycomplete", b || void 0), _.Y(this.pa, a ? "VCsm" : "VCt"))
    };
    _.m.Si = function() {
        this.O = !1
    };
    rz.prototype.T = function(a, b, c) {
        return this.S(this.P.T(a, b, c))
    };
    rz.prototype.j = function(a) {
        return this.S(this.P.j(a))
    };
    rz.prototype.O = function() {
        return this.P.O()
    };
    vz.prototype.fromLatLngToPoint = function(a, b) {
        var c = this.P.fromLatLngToPoint(a, b);
        jz(c, this.j.heading());
        c.y = (c.y - 128) / _.ty + 128;
        return c
    };
    vz.prototype.fromPointToLatLng = function(a, b) {
        var c = this.S;
        c.x = a.x;
        c.y = (a.y - 128) * _.ty + 128;
        jz(c, 360 - this.j.heading());
        return this.P.fromPointToLatLng(c, b)
    };
    vz.prototype.getPov = _.l("j");
    xz.prototype.getTileUrl = function(a, b) {
        var c = this.j(a, b);
        return c && _.kv(c, a, b)
    };
    xz.prototype.j = function(a, b) {
        for (var c = this.O, d = new _.N(a.x % (1 << b), a.y), e = 0; e < c.length; ++e) {
            var f = c[e];
            if (!(f.minZoom > b || f.maxZoom < b)) {
                var g = _.u(f.Qa);
                if (0 == g) return f.j;
                for (var h = f.maxZoom - b, k = 0; k < g; ++k) {
                    var n = f.Qa[k];
                    if (_.pi(new _.lf([new _.N(n.ua >> h, n.ra >> h), new _.N(1 + (n.wa >> h), 1 + (n.ya >> h))]), d)) return f.j
                }
            }
        }
        return null
    };
    _.Ca(Hz, _.J);
    Hz.prototype.getPrintableImageUri = function(a, b, c, d, e) {
        var f = this.get("mapType");
        if (2048 < a * (e || 1) || 2048 < b * (e || 1) || !(f instanceof _.jv)) return null;
        var g = d || this.get("zoom");
        if (null == g) return null;
        var h = c || this.get("center");
        if (!h) return null;
        c = f.get("options");
        if (!c.Dc) return null;
        d = new _.bv(c.Dc);
        d.j.N[3] = 0;
        var k = this.O.j(g);
        k && Xy(d, k);
        if ("hybrid" == f.nb) {
            _.Jt(d.j);
            for (f = _.Hc(d.j.N, 1) - 1; 0 < f; --f) {
                var k = Uy(d.j, f),
                    n = Uy(d.j, f - 1);
                _.ji(k.N, n ? n.N : null)
            }
            f = Uy(d.j, 0);
            f.N[0] = 1;
            1 in f.N && delete f.N[1];
            2 in f.N &&
                delete f.N[2]
        }
        if (2 == e || 4 == e) _.Ht(d.j).N[4] = e;
        e = _.It(d.j);
        e.N[3] = e.N[3] || [];
        e = new _.ls(e.N[3]);
        e.setZoom(g);
        e.N[2] = e.N[2] || [];
        g = new _.Hm(e.N[2]);
        f = Yy(h.lat());
        g.N[0] = f;
        h = Yy(h.lng());
        g.N[1] = h;
        e.N[0] = e.N[0] || [];
        h = new _.ms(e.N[0]);
        h.N[0] = a;
        h.N[1] = b;
        a = this.j;
        a += "?pb=" + _.av(_.qs(d.j));
        null != c.Ad && (a += "&authuser=" + c.Ad);
        return a
    };
    Oz.prototype.V = function(a) {
        if (_.Hc(a.N, 0)) {
            this.S = {};
            this.P = {};
            for (var b = 0; b < _.Hc(a.N, 0); ++b) {
                var c, d = b;
                c = new Wy(_.Q(a.N, 0)[d]);
                var e = c.getTile(),
                    d = e.getZoom(),
                    f;
                f = e.N[1];
                f = null != f ? f : 0;
                e = e.N[2];
                e = null != e ? e : 0;
                c = c.N[2];
                c = null != c ? c : 0;
                var g = this.S;
                g[d] = g[d] || {};
                g[d][f] = g[d][f] || {};
                g[d][f][e] = c;
                this.P[d] = Math.max(this.P[d] || 0, c)
            }
            this.U.j(null)
        }
    };
    Oz.prototype.T = function(a, b, c) {
        var d = this.S,
            e = a.x;
        a = a.y;
        c && (e = Math.floor(e / 2), a = Math.floor(a / 2));
        return d[b] && d[b][e] && d[b][e][a] || 0
    };
    Oz.prototype.j = function(a) {
        return this.P[a] || 0
    };
    Oz.prototype.O = _.l("U");
    lA.prototype.O = function(a, b, c, d, e, f) {
        function g() {
            var b = a.get("streetView");
            b ? (a.bindTo("svClient", b, "client"), b.__gm.bindTo("fontLoaded", oa)) : (a.unbind("svClient"), a.set("svClient", null))
        }
        var h = _.Je(_.Me(_.R)),
            k = c.$q,
            n = Qz(e, a, {
                Bc: k && k.Bc(),
                Mh: c.Mh
            }),
            p = a.__gm,
            q = new _.Ow,
            r = zz(a.features),
            v, x;
        (function() {
            var c = $y(),
                d = a.get("noPerTile") && _.T[15],
                e = new Oz;
            v = Sz(e, c, a, d);
            x = new _.ux(h, q, r, p.qa, d ? null : e, b.Fa, n)
        })();
        x.bindTo("tilt", a);
        x.bindTo("heading", a);
        x.bindTo("bounds", a);
        x.bindTo("zoom", a);
        x.bindTo("mapMaker",
            a);
        x.bindTo("size", p);
        c = new Uz(a, v);
        Fz(c, a.mapTypes);
        c = a.getDiv();
        _.I.addDomListenerOnce(c, "mousedown", function() {
            _.Y(a, "Mi")
        }, !0);
        var w = new _.Mx(c, b, {
            Zi: !0,
            Dj: _.ti(_.Me(_.R))
        });
        e = w.P;
        _.sk(w.j, 0);
        _.I.forward(a, "resize", c);
        p.set("panes", w.S);
        p.set("innerContainer", w.O);
        _.lj() && _.dk() || _.M("onion", function(b) {
            b.bh(a, v, new _.Kb)
        });
        var z = new _.lw(e, w.U, n),
            F = new _.tv(["blockingLayerCount", "staticMapLoading"], "waitWithTiles", function(a, b) {
                return !!a || !!b
            });
        _.dj(p.ta, "sm-block") && k && F.bindTo("staticMapLoading",
            k, "loading");
        F.bindTo("blockingLayerCount", p);
        z.bindTo("waitWithTiles", F);
        z.set("panes", w.S);
        z.bindTo("styles", a);
        _.T[20] && z.bindTo("animatedZoom", a);
        _.uj() && (_.Ox(a), _.Px(a));
        var D = new _.Rw;
        D.bindTo("tilt", a);
        D.bindTo("zoom", a);
        D.bindTo("mapTypeId", a);
        D.bindTo("aerial", r.obliques, "available");
        p.bindTo("tilt", D);
        var E = Ez(a);
        x.bindTo("mapType", E);
        var H = new _.Ex(p.qa);
        _.I.addListener(H, "attributiontext_changed", function() {
            a.set("mapDataProviders", H.get("attributionText"))
        });
        F = new _.Yw;
        F.bindTo("styles",
            a);
        F.bindTo("mapTypeStyles", E, "styles");
        p.bindTo("apistyle", F);
        _.T[15] && p.bindTo("authUser", a);
        F = new _.Ix;
        F.bindTo("mapMaker", a);
        F.bindTo("mapType", E);
        F.bindTo("layers", p);
        p.bindTo("style", F);
        var P = new _.Rv;
        p.set("projectionController", P);
        z.bindTo("size", w);
        z.bindTo("projection", P);
        z.bindTo("projectionBounds", P);
        z.bindTo("mapType", E);
        P.bindTo("projectionTopLeft", z);
        P.bindTo("offset", z);
        P.bindTo("latLngCenter", a, "center");
        P.bindTo("size", w);
        P.bindTo("projection", a);
        z.bindTo("fixedPoint", P);
        a.bindTo("bounds",
            P, "latLngBounds", !0);
        p.set("mouseEventTarget", {});
        F = new _.Dw(_.W.P, w.O);
        F.bindTo("title", p);
        var U = Pz(w.O, e, a, z, P, f, F);
        k && (f = Tz(a, e), k.bindTo("div", f), k.bindTo("center", f, "newCenter"), k.bindTo("zoom", U), k.bindTo("tilt", p), k.bindTo("size", p));
        p.bindTo("zoom", U);
        p.bindTo("center", a);
        p.bindTo("size", w);
        p.bindTo("mapType", E);
        p.bindTo("offset", z);
        p.bindTo("layoutPixelBounds", z);
        p.bindTo("pixelBounds", z);
        p.bindTo("projectionTopLeft", z);
        p.bindTo("projectionBounds", z, "viewProjectionBounds");
        p.bindTo("projectionCenterQ",
            P);
        a.set("tosUrl", _.by);
        k = Nz();
        k.bindTo("bounds", z, "pixelBounds");
        p.bindTo("pixelBoundsQ", k, "boundsQ");
        k = new _.Iv({
            projection: 1
        });
        k.bindTo("immutable", p, "mapType");
        f = new _.Pv({
            projection: new _.kf
        });
        f.bindTo("projection", k);
        a.bindTo("projection", f);
        _.I.forward(p, "panby", z);
        _.I.forward(p, "panbynow", z);
        _.I.forward(p, "panbyfraction", z);
        _.I.addListener(p, "panto", function(b) {
            if (b instanceof _.L)
                if (a.get("center")) {
                    b = P.fromLatLngToDivPixel(b);
                    var c = P.get("offset") || _.wg;
                    b.x += Math.round(c.width) - c.width;
                    b.y += Math.round(c.height) - c.height;
                    _.I.trigger(z, "panto", b.x, b.y)
                } else a.set("center", b);
            else throw Error("panTo: latLng must be of type LatLng");
        });
        _.I.forward(p, "pantobounds", z);
        _.I.addListener(p, "pantolatlngbounds", function(a) {
            if (a instanceof _.id) _.I.trigger(z, "pantobounds", Zy(P, a));
            else throw Error("panToBounds: latLngBounds must be of type LatLngBounds");
        });
        _.I.addListener(U, "zoom_changed", function() {
            U.get("zoom") != a.get("zoom") && (a.set("zoom", U.get("zoom")), _.nl(a, "Mm"))
        });
        var Z = new _.Pw;
        Z.bindTo("mapTypeMaxZoom",
            E, "maxZoom");
        Z.bindTo("mapTypeMinZoom", E, "minZoom");
        Z.bindTo("maxZoom", a);
        Z.bindTo("minZoom", a);
        Z.bindTo("trackerMaxZoom", q, "maxZoom");
        U.bindTo("zoomRange", Z);
        z.bindTo("zoomRange", Z);
        U.bindTo("draggable", a);
        U.bindTo("scrollwheel", a);
        U.bindTo("disableDoubleClickZoom", a);
        var oa = new _.Kx(_.ik(c));
        p.bindTo("fontLoaded", oa);
        k = p.O;
        k.bindTo("scrollwheel", a);
        k.bindTo("disableDoubleClickZoom", a);
        g();
        _.I.addListener(a, "streetview_changed", g);
        if (!b.Fa) {
            var $a = function() {
                _.M("controls", function(b) {
                    var c = new b.pi(w.j);
                    p.set("layoutManager", c);
                    z.bindTo("layoutBounds", c, "bounds");
                    b.Uo(c, a, E, w.j, H, r.report_map_issue, Z, D, P, w.T, v);
                    b.Vo(a, w.O);
                    b.zk(a.getDiv())
                })
            };
            if (_.lj()) {
                var bb = _.Ot.kd().S,
                    k = new _.Jx;
                k.bindTo("layers", p);
                k.bindTo("gid", bb);
                k.bindTo("persistenceKey", bb);
                _.Y(a, "Sm");
                k = function() {
                    bb.get("gid") && _.Y(a, "Su")
                };
                k();
                _.I.addListener(bb, "gid_changed", k)
            }
            var Cb = _.I.addListener(z, "tilesloading_changed", function() {
                z.get("tilesloading") && (Cb.remove(), $a())
            });
            _.I.addListenerOnce(z, "tilesloaded", function() {
                _.M("util",
                    function(b) {
                        b.Ak.Dh();
                        window.setTimeout((0, _.t)(b.Vd.Eh, b.Vd), 5E3);
                        b.hp(a)
                    })
            });
            _.Y(a, "Mm");
            b.v2 && _.Y(a, "Mz");
            _.kl("Mm", "-p", a, !(!a || !a.Fa));
            Dz(a, E);
            _.nl(a, "Mm");
            _.Ck(function() {
                _.nl(a, "Mm")
            });
            Cz(a);
            c && Lz(new Mz(c), a, function() {
                return 0 != a.get("draggable")
            })
        }
        Bz(a);
        var uc = $y();
        c = new Uz(a, new rz(v, function(a) {
            return a || uc
        }));
        Iz(c, a.overlayMapTypes);
        Az(a, w.S.mapPane);
        _.uj() && p.bindTo("card", a);
        b.Fa || Jz(a);
        d && window.setTimeout(function() {
            _.I.trigger(a, "projection_changed");
            _.ra(a.get("bounds")) && _.I.trigger(a,
                "bounds_changed");
            _.I.trigger(a, "tilt_changed");
            _.ra(a.get("heading")) && _.I.trigger(a, "heading_changed")
        }, 0);
        _.T[43] && (d = _.hi(), c = _.Me(_.R), d = 0 < _.Hc(d.N, 12) && "cn" != _.Ke(c).toLowerCase() ? _.Q(d.N, 12) : _.Q(d.N, 0), d = new Hz(d[0], v), d.bindTo("mapType", E), d.bindTo("center", a), d.bindTo("zoom", p), a.getPrintableImageUri = (0, _.t)(d.getPrintableImageUri, d));
        _.T[43] && a.bindTo("tilesloading", z)
    };
    lA.prototype.fitBounds = function(a, b) {
        function c() {
            var c = _.qf(a.getDiv());
            c.width -= 80;
            c.width = Math.max(1, c.width);
            c.height -= 80;
            c.height = Math.max(1, c.height);
            var e = a.getProjection(),
                f = b.getSouthWest(),
                g = b.getNorthEast(),
                h = f.lng(),
                k = g.lng();
            h > k && (f = new _.L(f.lat(), h - 360, !0));
            f = e.fromLatLngToPoint(f);
            h = e.fromLatLngToPoint(g);
            g = Math.max(f.x, h.x) - Math.min(f.x, h.x);
            f = Math.max(f.y, h.y) - Math.min(f.y, h.y);
            c = g > c.width || f > c.height ? 0 : Math.floor(Math.min(_.hj(c.width + 1E-12) - _.hj(g + 1E-12), _.hj(c.height + 1E-12) - _.hj(f +
                1E-12)));
            g = _.Yi(e, b, 0);
            e = _.Zi(e, new _.N((g.ua + g.wa) / 2, (g.ra + g.ya) / 2), 0);
            _.C(c) && (a.setCenter(e), a.setZoom(c))
        }
        a.getProjection() ? c() : _.I.addListenerOnce(a, "projection_changed", c)
    };
    lA.prototype.j = function(a, b, c, d, e, f) {
        var g = _.nv(a, b, c, d, {
            Sc: f
        });
        _.wu(function() {
            g.setUrl(e)
        });
        return g
    };
    _.qc("map", new lA);
});
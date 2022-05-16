(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index"], {
	"05f4": function(t, a, e) {
		var i = e("0940");
		"string" === typeof i && (i = [[t.i, i, ""]]),
		i.locals && (t.exports = i.locals);
		var n = e("4f06").
	default;
		n("0218135a", i, !0, {
			sourceMap: !1,
			shadowMode: !1
		})
	},
	"0940": function(t, a, e) {
		var i = e("24fb");
		a = i(!1),
		a.push([t.i, "uni-page-body[data-v-0c6ba0ba]{background-color:#fff}.container[data-v-0c6ba0ba]{padding:2px;padding-left:0;padding-right:0;font-size:%?22?%;line-height:24px}\n\n\t/*上方手机状态栏 通栏 */.status_bar[data-v-0c6ba0ba]{height:0;width:100%;background-color:#545454}.main[data-v-0c6ba0ba]{position:relative;top:0px}.toubu[data-v-0c6ba0ba]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;z-index:9999;-webkit-justify-content:space-around;justify-content:space-around;border-top:1px solid #d8d8d9;height:48px;background-color:#fff}.toubu-qj[data-v-0c6ba0ba]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:25%;border-bottom:3px solid #399bf4;font-size:15px;color:#399bf4}.toubu-ew[data-v-0c6ba0ba]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:25%;font-size:15px}.top_view[data-v-0c6ba0ba]{height:0;width:100%;position:fixed;background-color:#fff;top:0;z-index:999}\n\n\t/*导航 */.nav[data-v-0c6ba0ba]{position:fixed;width:100%;height:60px;background:#fff;border-bottom:1px solid #efefef;z-index:9999}.nav-left[data-v-0c6ba0ba]{padding-top:24px;margin-left:%?28?%}.nav-left uni-image[data-v-0c6ba0ba]{width:20px;height:20px}.nav-title[data-v-0c6ba0ba]{font-size:%?30?%;position:absolute;left:calc(50% - %?78?%);top:%?22?%}.nav-title uni-image[data-v-0c6ba0ba]{width:%?48?%;height:%?50?%;position:relative;top:%?14?%;left:%?-4?%}.nav-right[data-v-0c6ba0ba]{position:absolute;right:%?36?%;top:22px;color:#f42d1f}.main[data-v-0c6ba0ba]{position:relative;top:0px}.main-bottom-tips[data-v-0c6ba0ba]{text-align:center;margin-top:%?30?%;font-size:%?24?%;padding-bottom:%?115?%;color:#a7afba}.main-top-tips[data-v-0c6ba0ba]{width:100%;height:%?45?%;background-color:#fe9900;text-align:center;color:#fff;font-size:%?24?%;line-height:%?45?%;position:relative}.main-top-tips-image1[data-v-0c6ba0ba]{width:17px;height:17px;position:absolute;top:%?9?%;left:calc(50% - %?115?%)}.main-top-tips-image2[data-v-0c6ba0ba]{width:22px;height:20px;position:absolute;top:6px}.main-content[data-v-0c6ba0ba]{padding-top:24px;padding-bottom:22px;padding-left:22px;padding-right:22px;background-color:#fff;border-bottom:1px solid #f1f2f4}.main-content-title[data-v-0c6ba0ba]{font-size:17px;display:inline-block;color:#464c5c}.main-content-date[data-v-0c6ba0ba]{font-size:%?27?%;float:right;color:#9ea8b4}.main-content-startDate[data-v-0c6ba0ba]{font-size:%?26?%;color:#a1a9b4;margin-top:10px}.main-content-state[data-v-0c6ba0ba]{margin-top:8px;font-size:%?26?%}.bottom-btn[data-v-0c6ba0ba]{position:fixed;bottom:0;background-color:#3399fe;width:100%;height:%?85?%;color:#fff;text-align:center;line-height:%?85?%;font-size:%?32?%}body.?%PAGE?%[data-v-0c6ba0ba]{background-color:#fff}", ""]),
		t.exports = a
	},
	1802 : function(t, a, e) {
		"use strict";
		var i = e("05f4"),
		n = e.n(i);
		n.a
	},
	"4f27": function(t, a, e) {
		"use strict"; (function(t) {
			e("26e9"),
			Object.defineProperty(a, "__esModule", {
				value: !0
			}),
			a.
		default = void 0;
			var i = {
				data: function() {
					return {
						title: "Hello",
						leaves: null,
						loop: null,
						studentInfo: null
					}
				},
				onShow: function() {
					this.leaves = uni.getStorageSync("todaySchoolLeaves"),
					this.leaves.reverse(),
					t("log", this.leaves, " at pages/index/index.vue:51")
				},
				methods: {
					addLeave: function() {
						uni.navigateTo({
							url: "../addLeave/addLeave"
						})
					},
					clearAll: function() {
						uni.showModal({
							title: "提示",
							content: "确定要删除所有记录吗？",
							success: function(t) {
								t.confirm && (uni.setStorageSync("todaySchoolLeaves", null), this.leaves = null, uni.reLaunch({
									url: "../index/index"
								}))
							}
						})
					},
					getStateStyle: function(t) {
						return "color:#A0A9B6;"
					},
					clickContent: function(a) {
						t("log", this.leaves[a], " at pages/index/index.vue:85"),
						uni.setStorageSync("currLeaves", this.leaves[a]),
						uni.setStorageSync("currIndex", a),
						uni.navigateTo({
							url: "../viewLeaves/viewLeaves",
							animationType: "none"
						})
					},
					touchStart: function() {
						var a = this;
						clearTimeout(this.loop),
						this.loop = setTimeout((function() {
							a.studentInfo = uni.getStorageSync("studentInfo"),
							"" == a.studentInfo || null == a.studentInfo || void 0 == a.studentInfo ? (uni.showToast({
								title: "扫码前需先设置个人信息",
								duration: 2e3,
								icon: "none"
							}), uni.navigateTo({
								url: "../addStudentInfo/addStudentInfo"
							})) : uni.scanCode({
								success: function(a) {
									t("log", a.result, " at pages/index/index.vue:114"),
									uni.navigateTo({
										url: "../checkSuccess/checkSuccess"
									})
								}
							})
						}), 700)
					},
					touchEnd: function() {
						clearTimeout(this.loop)
					},
					getDateStyle: function(t) {
						if (t % 2 != 0) return "color:#F59A12;"
					}
				}
			};
			a.
		default = i
		}).call(this, e("0de9")["log"])
	},
	"6b07": function(t, a) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAPFBMVEUyMjIyMjIyMjIzMzMyMjIyMjIyMjIyMjIzMzMwMDAzMzMyMjIzMzMyMjIzMzMyMjIwMDAwMDAAAAAzMzOyZj+QAAAAE3RSTlPAn3+vj3Dg31BAoNDP7/BgEDAAuxgYOgAAARhJREFUSMed11sOhCAMBVDnrYIKZf97nUQxcQba3tZPkxOIFno7EPSkZ3zk5u2A2VhKWXx4t6VMHlzt6lm52jI68Gk3suNzzxPZcV4Om8mORatg2cpYsSLWrIRVK2Dd8hiwLEYsh6sNiex4g2wfbwWyXYzaHoZtB+O2xQbbYIv9xyb7h6sdMPuLq52J7PhutFf8stor/ljtFb93fEsuPB7bjsmDz4+N696vgnW3SKKnSKyaORjRczBsmr0MoucysGjhAozZg2lbd71kD6aMaa7dQJptdIjmWyygheauaylWqFoMNJqWo5SilRC3sqEViY+iVoOrpNXILGk9rAsaGBNy4DQ0oBx6Sb7RKPhHo6pdo9Gu5xLaOvsCuiX7Ntzw6rAAAAAASUVORK5CYII="
	},
	"78cb": function(t, a, e) {
		"use strict";
		var i;
		e.d(a, "b", (function() {
			return n
		})),
		e.d(a, "c", (function() {
			return o
		})),
		e.d(a, "a", (function() {
			return i
		}));
		var n = function() {
			var t = this,
			a = t.$createElement,
			i = t._self._c || a;
			return i("v-uni-view", {
				staticClass: "container"
			},
			[i("v-uni-view", {
				staticClass: "status_bar"
			},
			[i("v-uni-view", {
				staticClass: "top_view"
			})], 1)
			
			
			// ,
			// i("v-uni-view", {
			// 	staticClass: "nav"
			// },
			// [i("v-uni-view", {
			// 	staticClass: "nav-left"
			// },
			// [i("v-uni-image", {
			// 	attrs: {
			// 		src: e("6b07")
			// 	}
			// })], 1), i("v-uni-view", {
			// 	staticClass: "nav-title"
			// },
			// [i("v-uni-image", {
			// 	attrs: {
			// 		src: e("9487")
			// 	}
			// }), t._v("请假")], 1), i("v-uni-view", {
			// 	staticClass: "nav-right",
			// 	on: {
			// 		click: function(a) {
			// 			arguments[0] = a = t.$handleEvent(a),
			// 			t.clearAll.apply(void 0, arguments)
			// 		},
			// 		touchstart: function(a) {
			// 			arguments[0] = a = t.$handleEvent(a),
			// 			t.touchStart.apply(void 0, arguments)
			// 		},
			// 		touchend: function(a) {
			// 			arguments[0] = a = t.$handleEvent(a),
			// 			t.touchEnd.apply(void 0, arguments)
			// 		}
			// 	}
			// },
			// [t._v("反馈")])], 1)
			
			
			, i("v-uni-view", {
				staticClass: "main"
			},
			[i("v-uni-view", {
				staticClass: "toubu"
			},
			[i("v-uni-view", {
				staticClass: "toubu-qj"
			},
			
			[t._v("请假记录")]), i("v-uni-view", {
				staticClass: "toubu-ew"
			},
			[t._v("无需审批记录")])], 1)], 1), i("v-uni-view", {
				staticClass: "main"
			},
			[i("v-uni-view", {
				staticClass: "main-top-tips"
			},
			[i("v-uni-image", {
				staticClass: "main-top-tips-image1",
				attrs: {
					src: e("e785")
				}
			}), t._v("为何不能请假？")], 1), t._l(t.leaves, (function(a, e) {
				return i("v-uni-view", {
					staticClass: "main-content",
					on: {
						click: function(a) {
							arguments[0] = a = t.$handleEvent(a),
							t.clickContent(e)
						}
					}
				},
				[i("v-uni-view", {
					staticClass: "main-content-title"
				},
				[t._v("我的 " + t._s(a.type) + "申请")]), i("v-uni-view", {
					staticClass: "main-content-date"
				},
				[t._v(t._s(a.startDate))]), i("v-uni-view", {
					staticClass: "main-content-startDate"
				},
				[t._v("请假时间：" + t._s(a.startDate) + " 至 " + t._s(a.endDate) + " (" + t._s(a.countDate) + ")")]), "已完成" == a.state ? i("v-uni-view", {
					staticClass: "main-content-startDate"
				},
				[t._v("实际休假时间："), i("v-uni-text", {
					style: t.getDateStyle(e)
				},
				[t._v(t._s(a.startDate) + " ~ " + t._s(a.endDate) + " (" + t._s(a.countDate) + ")")])], 1) : t._e(), i("v-uni-view", {
					staticClass: "main-content-state",
					style: t.getStateStyle(a.state)
				},
				[t._v(t._s(a.state))])], 1)
			})), i("v-uni-view", {
				staticClass: "main-bottom-tips"
			},
			[t._v("没有更多了")])], 2), i("v-uni-view", {
				staticClass: "bottom-btn",
				on: {
					click: function(a) {
						arguments[0] = a = t.$handleEvent(a),
						t.addLeave.apply(void 0, arguments)
					}
				}
			},
			[t._v("我要请假")])], 1)
		},
		o = []
	},
	"7a8b": function(t, a, e) {
		"use strict";
		e.r(a);
		var i = e("78cb"),
		n = e("fbcf");
		for (var o in n)"default" !== o &&
		function(t) {
			e.d(a, t, (function() {
				return n[t]
			}))
		} (o);
		e("1802");
		var s, c = e("f0c5"),
		l = Object(c["a"])(n["default"], i["b"], i["c"], !1, null, "0c6ba0ba", null, !1, i["a"], s);
		a["default"] = l.exports
	},
	9487 : function(t, a, e) {
		t.exports = e.p + "static/img/dun.4ae03ebd.png"
	},
	e785: function(t, a, e) {
		t.exports = e.p + "static/img/wenhao.e474643c.png"
	},
	fbcf: function(t, a, e) {
		"use strict";
		e.r(a);
		var i = e("4f27"),
		n = e.n(i);
		for (var o in i)"default" !== o &&
		function(t) {
			e.d(a, t, (function() {
				return i[t]
			}))
		} (o);
		a["default"] = n.a
	}
}]);
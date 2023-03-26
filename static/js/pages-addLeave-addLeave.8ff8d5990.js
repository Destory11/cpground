(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-addLeave-addLeave"],
  {
    "044e": function (e, t, a) {
      var i = a("91d4");
      "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
      var n = a("4f06").default;
      n("62c5694f", i, !0, {
        sourceMap: !1,
        shadowMode: !1,
      });
    },
    "0b41": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("ada3"),
        n = a.n(i);
      for (var s in i)
        "default" !== s &&
          (function (e) {
            a.d(t, e, function () {
              return i[e];
            });
          })(s);
      t["default"] = n.a;
    },
    "43fb": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("6771"),
        n = a("0b41");
      for (var s in n)
        "default" !== s &&
          (function (e) {
            a.d(t, e, function () {
              return n[e];
            });
          })(s);
      a("9664");
      var o,
        l = a("f0c5"),
        h = Object(l["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "74611d05",
          null,
          !1,
          i["a"],
          o
        );
      t["default"] = h.exports;
    },
    6771: function (e, t, a) {
      "use strict";
      var i;
      a.d(t, "b", function () {
        return n;
      }),
        a.d(t, "c", function () {
          return s;
        }),
        a.d(t, "a", function () {
          return i;
        });
      var n = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "v-uni-view",
            [
              i(
                "v-uni-view",
                {
                  staticStyle: {
                    "line-height": "50px",
                    "font-weight": "600",
                    "font-size": "30px",
                  },
                },
                [
                  e._v(
                    "如果打不开或加载慢，请使用科学上网；若还打不开，请获取新的二维码；Email:yennukzy@hi2.in"
                  ),
                ]
              ),
              i(
                "v-uni-view",
                {
                  staticStyle: {
                    "line-height": "50px",
                    "font-weight": "600",
                    "font-size": "20px",
                  },
                },
                [e._v("使用【今日校园】扫一扫效果最佳")]
              ),

              // i("v-uni-label", [e._v("附件（下面填图片的url地址 或 base64值）"),
              // i("v-uni-text", {
              // 	staticClass: "subRed"
              // },
              // [e._v("*非必填")])
              // ,i("br") ,
              // i("v-uni-text", {
              // 		staticClass: "subGray",
              // 		on: {
              // 			click: function (t) {
              // 				arguments[0] = t = e.$handleEvent(t),
              // 					e.addFile.apply(void 0, arguments)
              // 			}
              // 		}
              // 	}, [e._v("【点我获取图片的base64值】")])], 1),

              // 	i("v-uni-input", {
              // 		attrs: {
              // 			placeholder: "点击设置附件图片",
              // 			value: e.imgFile_0
              // 		},
              // 		attrs: {
              // 			placeholder: "苏康码",
              // 			value: e.imgFile_0,
              // 			maxlength: 10000000
              // 		},
              // 		model: {
              // 			value: e.imgFile_0,
              // 			callback: function (t) {
              // 				e.imgFile_0 = t
              // 			},
              // 			expression: "imgFile_0"
              // 		}
              // 		on: {
              // 			click: function(t) {
              // 				arguments[0] = t = e.$handleEvent(t)
              // 				e.clickFile_0.apply(void 0, arguments)
              // 			}
              // 		}
              // 	}),


              i(
                "v-uni-label",
                [
                  e._v("你的名字"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "你的名字",
                },
                model: {
                  value: e.name,
                  callback: function (t) {
                    e.name = t;
                  },
                  expression: "name",
                },
              }),
              i(
                "v-uni-label",
                [
                  e._v("请假类型"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder:
                    "外出请假",
                },
                model: {
                  value: e.type,
                  callback: function (t) {
                    e.type = t;
                  },
                  expression: "type",
                },
              }),
              i(
                "v-uni-label",
                [
                  e._v("开始日期/时间"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i(
                "v-uni-view",
                {
                  staticClass: "pickerView",
                },
                [
                  i(
                    "v-uni-picker",
                    {
                      staticStyle: {
                        width: "42%",
                        position: "absolute",
                        left: "0px",
                      },
                      attrs: {
                        mode: "date",
                        value: "2020-" + e.startDate,
                      },
                      on: {
                        change: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.bindStartDate.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      "" == e.startDate
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                                color: "gray",
                              },
                            },
                            [e._v("开始日期（年无效）")]
                          )
                        : e._e(),
                      "" != e.startDate
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                              },
                            },
                            [e._v(e._s(e.startDate))]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                  i(
                    "v-uni-picker",
                    {
                      staticStyle: {
                        width: "42%",
                        position: "absolute",
                        right: "0px",
                      },
                      attrs: {
                        mode: "time",
                        value: e.startTime,
                      },
                      on: {
                        change: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.bindStartTime.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      "" == e.startTime
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                                color: "gray",
                              },
                            },
                            [e._v("开始时间")]
                          )
                        : e._e(),
                      "" != e.startTime
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                              },
                            },
                            [e._v(e._s(e.startTime))]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              i(
                "v-uni-label",
                [
                  e._v("结束日期/时间"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i(
                "v-uni-view",
                {
                  staticClass: "pickerView",
                },
                [
                  i(
                    "v-uni-picker",
                    {
                      staticStyle: {
                        width: "42%",
                        position: "absolute",
                        left: "0px",
                      },
                      attrs: {
                        mode: "date",
                        value: "2020-" + e.endDate,
                      },
                      on: {
                        change: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.bindEndDate.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      "" == e.endDate
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                                color: "gray",
                              },
                            },
                            [e._v("结束日期（年无效）")]
                          )
                        : e._e(),
                      "" != e.endDate
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                              },
                            },
                            [e._v(e._s(e.endDate))]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                  i(
                    "v-uni-picker",
                    {
                      staticStyle: {
                        width: "42%",
                        position: "absolute",
                        right: "0px",
                      },
                      attrs: {
                        mode: "time",
                        value: e.endTime,
                      },
                      on: {
                        change: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.bindEndTime.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      "" == e.endTime
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                                color: "gray",
                              },
                            },
                            [e._v("结束时间")]
                          )
                        : e._e(),
                      "" != e.endTime
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                              },
                            },
                            [e._v(e._s(e.endTime))]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              i(
                "v-uni-label",
                [
                  e._v("总时间"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "1天3小时",
                },
                model: {
                  value: e.countDate,
                  callback: function (t) {
                    e.countDate = t;
                  },
                  expression: "countDate",
                },
              }),
              i(
                "v-uni-label",
                [
                  e._v("紧急联系人"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "13555555555",
                },
                model: {
                  value: e.phone,
                  callback: function (t) {
                    e.phone = t;
                  },
                  expression: "phone",
                },
              }),
              i(
                "v-uni-label",
                [
                  e._v("请假原因"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "(不少于2字)",
                },
                model: {
                  value: e.reason,
                  callback: function (t) {
                    e.reason = t;
                  },
                  expression: "reason",
                },
              }),

              i(
                "v-uni-label",
                [
                  e._v("目的地"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "xx省/xx市/xx区/xx附近",
                },
                model: {
                  value: e.targetinf,
                  callback: function (t) {
                    e.targetinf = t;
                  },
                  expression: "targetinf",
                },
              }),
              i(
                "v-uni-label",
                [
                  e._v("宿舍信息"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "N01-N01A111",
                },
                model: {
                  value: e.roominf,
                  callback: function (t) {
                    e.roominf = t;
                  },
                  expression: "roominf",
                },
              }),

              i(
                "v-uni-label",
                [
                  e._v("抄送人"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "无",
                },
                model: {
                  value: e.cc,
                  callback: function (t) {
                    e.cc = t;
                  },
                  expression: "cc",
                },
              }),
              i(
                "v-uni-label",
                [
                  e._v("一级审批人"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "一级审批人姓名",
                },
                model: {
                  value: e.oneCheck,
                  callback: function (t) {
                    e.oneCheck = t;
                  },
                  expression: "oneCheck",
                },
              }),
              i(
                "v-uni-label",
                [
                  e._v("一级审批人身份"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "辅导员",
                },
                model: {
                  value: e.oneCheckStatus,
                  callback: function (t) {
                    e.oneCheckStatus = t;
                  },
                  expression: "oneCheckStatus",
                },
              }),
              i(
                "v-uni-label",
                [
                  e._v("一级审批意见"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "无",
                },
                model: {
                  value: e.oneCheckIdea,
                  callback: function (t) {
                    e.oneCheckIdea = t;
                  },
                  expression: "oneCheckIdea",
                },
              }),
              i(
                "v-uni-label",
                [
                  e._v("一级审批通过日期/时间"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i(
                "v-uni-view",
                {
                  staticClass: "pickerView",
                },
                [
                  i(
                    "v-uni-picker",
                    {
                      staticStyle: {
                        width: "42%",
                        position: "absolute",
                        left: "0px",
                      },
                      attrs: {
                        mode: "date",
                        value: "2020-" + e.oneCheckDate,
                      },
                      on: {
                        change: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.bindOneCheckDate.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      "" == e.oneCheckDate
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                                color: "gray",
                              },
                            },
                            [e._v("审批日期（年无效）")]
                          )
                        : e._e(),
                      "" != e.oneCheckDate
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                              },
                            },
                            [e._v(e._s(e.oneCheckDate))]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                  i(
                    "v-uni-picker",
                    {
                      staticStyle: {
                        width: "42%",
                        position: "absolute",
                        right: "0px",
                      },
                      attrs: {
                        mode: "time",
                        value: e.oneCheckTime,
                      },
                      on: {
                        change: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.bindOneCheckTime.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      "" == e.oneCheckTime
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                                color: "gray",
                              },
                            },
                            [e._v("审批时间")]
                          )
                        : e._e(),
                      "" != e.oneCheckTime
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                              },
                            },
                            [e._v(e._s(e.oneCheckTime))]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                ],
                1
              ),

              i(
                "v-uni-label",
                [
                  e._v("二级审批人"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subGray",
                    },
                    [e._v("(如填此项，二级所有信息必填)")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "二级审批人姓名",
                },
                model: {
                  value: e.twoCheck,
                  callback: function (t) {
                    e.twoCheck = t;
                  },
                  expression: "twoCheck",
                },
              }),
              i("v-uni-label", [e._v("二级审批人身份")]),
              i("v-uni-input", {
                attrs: {
                  placeholder: "院级管理员",
                },
                model: {
                  value: e.twoCheckStatus,
                  callback: function (t) {
                    e.twoCheckStatus = t;
                  },
                  expression: "twoCheckStatus",
                },
              }),
              i("v-uni-label", [e._v("二级审批意见")]),
              i("v-uni-input", {
                attrs: {
                  placeholder: "无",
                },
                model: {
                  value: e.twoCheckIdea,
                  callback: function (t) {
                    e.twoCheckIdea = t;
                  },
                  expression: "twoCheckIdea",
                },
              }),
              i("v-uni-label", [e._v("二级审批通过日期/时间")]),
              i(
                "v-uni-view",
                {
                  staticClass: "pickerView",
                },
                [
                  i(
                    "v-uni-picker",
                    {
                      staticStyle: {
                        width: "42%",
                        position: "absolute",
                        left: "0px",
                      },
                      attrs: {
                        mode: "date",
                        value: "2020-" + e.twoCheckDate,
                      },
                      on: {
                        change: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.bindTwoCheckDate.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      "" == e.twoCheckDate
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                                color: "gray",
                              },
                            },
                            [e._v("审批日期（年无效）")]
                          )
                        : e._e(),
                      "" != e.twoCheckDate
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                              },
                            },
                            [e._v(e._s(e.twoCheckDate))]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                  i(
                    "v-uni-picker",
                    {
                      staticStyle: {
                        width: "42%",
                        position: "absolute",
                        right: "0px",
                      },
                      attrs: {
                        mode: "time",
                        value: e.twoCheckTime,
                      },
                      on: {
                        change: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.bindTwoCheckTime.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      "" == e.twoCheckTime
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                                color: "gray",
                              },
                            },
                            [e._v("审批时间")]
                          )
                        : e._e(),
                      "" != e.twoCheckTime
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                              },
                            },
                            [e._v(e._s(e.twoCheckTime))]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                ],
                1
              ),

              i(
                "v-uni-label",
                [
                  e._v("三级审批人"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subGray",
                    },
                    [e._v("(如填此项，三级所有信息必填)")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "三级审批人姓名",
                },
                model: {
                  value: e.threeCheck,
                  callback: function (t) {
                    e.threeCheck = t;
                  },
                  expression: "threeCheck",
                },
              }),
              i("v-uni-label", [e._v("三级审批人身份")]),
              i("v-uni-input", {
                attrs: {
                  placeholder: "校级管理员",
                },
                model: {
                  value: e.threeCheckStatus,
                  callback: function (t) {
                    e.threeCheckStatus = t;
                  },
                  expression: "threeCheckStatus",
                },
              }),
              i("v-uni-label", [e._v("三级审批意见")]),
              i("v-uni-input", {
                attrs: {
                  placeholder: "无",
                },
                model: {
                  value: e.threeCheckIdea,
                  callback: function (t) {
                    e.threeCheckIdea = t;
                  },
                  expression: "threeCheckIdea",
                },
              }),
              i("v-uni-label", [e._v("三级审批通过日期/时间")]),
              i(
                "v-uni-view",
                {
                  staticClass: "pickerView",
                },
                [
                  i(
                    "v-uni-picker",
                    {
                      staticStyle: {
                        width: "42%",
                        position: "absolute",
                        left: "0px",
                      },
                      attrs: {
                        mode: "date",
                        value: "2020-" + e.threeCheckDate,
                      },
                      on: {
                        change: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.bindThreeCheckDate.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      "" == e.threeCheckDate
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                                color: "gray",
                              },
                            },
                            [e._v("审批日期（年无效）")]
                          )
                        : e._e(),
                      "" != e.threeCheckDate
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                              },
                            },
                            [e._v(e._s(e.threeCheckDate))]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                  i(
                    "v-uni-picker",
                    {
                      staticStyle: {
                        width: "42%",
                        position: "absolute",
                        right: "0px",
                      },
                      attrs: {
                        mode: "time",
                        value: e.threeCheckTime,
                      },
                      on: {
                        change: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.bindThreeCheckTime.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      "" == e.threeCheckTime
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                                color: "gray",
                              },
                            },
                            [e._v("审批时间")]
                          )
                        : e._e(),
                      "" != e.threeCheckTime
                        ? i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "line-height": "45px",
                              },
                            },
                            [e._v(e._s(e.threeCheckTime))]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                ],
                1
              ),

              // i("v-uni-label", [e._v("四级审批人"), i("v-uni-text", {
              // 	staticClass: "subGray"
              // },
              // [e._v("(如填此项，四级所有信息必填)")])], 1), i("v-uni-input", {
              // 	attrs: {
              // 		placeholder: "四级审批人姓名"
              // 	},
              // 	model: {
              // 		value: e.fourCheck,
              // 		callback: function(t) {
              // 			e.fourCheck = t
              // 		},
              // 		expression: "fourCheck"
              // 	}
              // }), i("v-uni-label", [e._v("四级审批人身份")]), i("v-uni-input", {
              // 	attrs: {
              // 		placeholder: "校级管理员"
              // 	},
              // 	model: {
              // 		value: e.fourCheckStatus,
              // 		callback: function(t) {
              // 			e.fourCheckStatus = t
              // 		},
              // 		expression: "fourCheckStatus"
              // 	}
              // }), i("v-uni-label", [e._v("四级审批意见")]), i("v-uni-input", {
              // 	attrs: {
              // 		placeholder: "无"
              // 	},
              // 	model: {
              // 		value: e.fourCheckIdea,
              // 		callback: function(t) {
              // 			e.fourCheckIdea = t
              // 		},
              // 		expression: "fourCheckIdea"
              // 	}
              // }), i("v-uni-label", [e._v("四级审批通过日期/时间")]), i("v-uni-view", {
              // 	staticClass: "pickerView"
              // },
              // [i("v-uni-picker", {
              // 	staticStyle: {
              // 		width: "42%",
              // 		position: "absolute",
              // 		left: "0px"
              // 	},
              // 	attrs: {
              // 		mode: "date",
              // 		value: "2020-" + e.fourCheckDate
              // 	},
              // 	on: {
              // 		change: function(t) {
              // 			arguments[0] = t = e.$handleEvent(t),
              // 			e.bindThreeCheckDate.apply(void 0, arguments)
              // 		}
              // 	}
              // },
              // ["" == e.fourCheckDate ? i("v-uni-view", {
              // 	staticStyle: {
              // 		"line-height": "45px",
              // 		color: "gray"
              // 	}
              // },
              // [e._v("审批日期（年无效）")]) : e._e(), "" != e.fourCheckDate ? i("v-uni-view", {
              // 	staticStyle: {
              // 		"line-height": "45px"
              // 	}
              // },
              // [e._v(e._s(e.fourCheckDate))]) : e._e()], 1), i("v-uni-picker", {
              // 	staticStyle: {
              // 		width: "42%",
              // 		position: "absolute",
              // 		right: "0px"
              // 	},
              // 	attrs: {
              // 		mode: "time",
              // 		value: e.fourCheckTime
              // 	},
              // 	on: {
              // 		change: function(t) {
              // 			arguments[0] = t = e.$handleEvent(t),
              // 			e.bindThreeCheckTime.apply(void 0, arguments)
              // 		}
              // 	}
              // },
              // ["" == e.fourCheckTime ? i("v-uni-view", {
              // 	staticStyle: {
              // 		"line-height": "45px",
              // 		color: "gray"
              // 	}
              // },
              // [e._v("审批时间")]) : e._e(), "" != e.fourCheckTime ? i("v-uni-view", {
              // 	staticStyle: {
              // 		"line-height": "45px"
              // 	}
              // },
              // [e._v(e._s(e.fourCheckTime))]) : e._e()], 1)], 1),

              i(
                "v-uni-label",
                [
                  e._v("定位位置"),
                  i(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [e._v("*必填")]
                  ),
                ],
                1
              ),
              i("v-uni-input", {
                attrs: {
                  placeholder: "中国xx省xx市xx区xx附近",
                },
                model: {
                  value: e.address,
                  callback: function (t) {
                    e.address = t;
                  },
                  expression: "address",
                },
              }),
              i(
                "v-uni-label",
                {
                  staticStyle: {
                    display: "block",
                    "font-weight": "bold",
                  },
                },
                [e._v("其他设置")]
              ),
              i("v-uni-image", {
                staticStyle: {
                  height: "81px",
                  width: "257px",
                  margin: "10px",
                  border: "1px solid #ccc",
                },
                attrs: {
                  src: a("f83c"),
                },
              }),
              i(
                "v-uni-checkbox-group",
                {
                  staticStyle: {
                    "margin-bottom": "10px",
                  },
                  on: {
                    change: function (t) {
                      (arguments[0] = t = e.$handleEvent(t)),
                        e.changChakan.apply(void 0, arguments);
                    },
                  },
                },
                [
                  i(
                    "v-uni-label",
                    [
                      i("v-uni-checkbox", {
                        attrs: {
                          checked: "true",
                          value: "viewChakan",
                        },
                      }),
                      e._v('显示"查看>"'),
                    ],
                    1
                  ),
                ],
                1
              ),
              i(
                "v-uni-view",
                {
                  staticClass: "sub",
                  on: {
                    click: function (t) {
                      (arguments[0] = t = e.$handleEvent(t)),
                        e.sub.apply(void 0, arguments);
                    },
                  },
                },
                [e._v("提交")]
              ),
              i(
                "v-uni-view",
                {
                  staticClass: "setStuInfo",
                  on: {
                    click: function (t) {
                      (arguments[0] = t = e.$handleEvent(t)),
                        e.setStuInfo.apply(void 0, arguments);
                    },
                  },
                },
                [e._v("设置学生信息（用于扫码签到）")]
              ),
            ],
            1
          );
        },
        s = [];
    },
    "91d4": function (e, t, a) {
      var i = a("24fb");
      (t = i(!1)),
        t.push([
          e.i,
          "uni-input[data-v-74611d05],\nuni-picker[data-v-74611d05]{border:1px solid #ccc;margin:10px;margin-top:2px;margin-bottom:10px;padding-left:5px;padding-right:5px;height:45px;border-radius:5px;-webkit-transition:all .3s ease;transition:all .3s ease}uni-input[data-v-74611d05]:hover{border:1px solid #007aff;box-shadow:0 0 5px 1px #eee}uni-picker[data-v-74611d05]:hover{border:1px solid #007aff;box-shadow:0 0 5px 1px #eee}uni-label[data-v-74611d05]{margin-left:10px;color:#2c906f}.sub[data-v-74611d05]{background-color:#38b48b;margin:10px;margin-top:30px;color:#fff;text-align:center;font-size:18px;height:45px;line-height:45px;border-radius:5px}.setStuInfo[data-v-74611d05]{background-color:#fff;border:1px solid #dddee2;margin:10px;text-align:center;font-size:18px;height:45px;line-height:45px;border-radius:5px;margin-bottom:350px}.pickerView[data-v-74611d05]{width:100%;position:relative;height:45px;margin-bottom:20px;text-align:center}.pickerView uni-picker[data-v-74611d05]{z-index:9999;background-color:#fff}.border-center[data-v-74611d05]{border-top:1px solid grey;width:50%;margin:0 auto;position:relative;top:25px}.subRed[data-v-74611d05]{font-size:%?20?%;color:red}.subGray[data-v-74611d05]{font-size:%?20?%;color:#ffa400}",
          "",
        ]),
        (e.exports = t);
    },
    9664: function (e, t, a) {
      "use strict";
      var i = a("044e"),
        n = a.n(i);
      n.a;
    },
    ada3: function (e, t, a) {
      "use strict";
      (function (e) {
        a("a9e3"),
          a("d3b7"),
          a("25f0"),
          Object.defineProperty(t, "__esModule", {
            value: !0,
          }),
          (t.default = void 0);
        var i = {
          data: function () {
            return {
              leaves: null,
              name: "",
              startDate: "",
              startTime: "",
              endDate: "",
              endTime: "",
              countDate: "",
              reason: "",
              phone: "",
              targetinf: "xx省/xx市/xx区/xx附近",
              roominf: "",
              address: "中国xx省xx市xx区xx附近",
              cc: "",
              oneCheck: "",
              oneCheckDate: "",
              oneCheckTime: "",
              oneCheckStatus: "",
              oneCheckIdea: "无",
              twoCheck: "",
              twoCheckDate: "",
              twoCheckTime: "",
              twoCheckStatus: "",
              twoCheckIdea: "无",
              threeCheck: "",
              threeCheckDate: "",
              threeCheckTime: "",
              threeCheckStatus: "",
              threeCheckIdea: "无",

              // fourCheck: "",
              // fourCheckDate: "",
              // fourCheckTime: "",
              // fourCheckStatus: "",
              // fourCheckIdea: "无",
              state: "正在休假中",
              type: "",
              colorIndex: 0,
              viewChakan: !0,
              imgFile_0: "",
            };
          },
          onShow: function () {
            if (
              ((this.leaves = uni.getStorageSync("todaySchoolLeaves")),
              ("" != this.leaves && null != this.leaves) || (this.leaves = []),
              this.leaves.length > 0)
            ) {
              var e = this.leaves[this.leaves.length - 1];
              (this.name = e.name),
                (this.type = e.type),
                (this.reason = e.reason),
                (this.phone = e.phone),
                (this.address = e.address),
                (this.targetinf = e.targetinf),
                (this.roominf = e.roominf),
                (this.cc = e.cc),
                (this.oneCheck = e.oneCheck),
                (this.twoCheck = e.twoCheck),
                (this.threeCheck = e.threeCheck),
                (this.oneCheckStatus = e.oneCheckStatus),
                (this.twoCheckStatus = e.twoCheckStatus),
                (this.threeCheckStatus = e.threeCheckStatus),
                (this.oneCheckIdea = e.oneCheckIdea),
                (this.twoCheckIdea = e.twoCheckIdea),
                (this.threeCheckIdea = e.threeCheckIdea);
            }
          },
          methods: {
            sub: function () {
              var t = this;
              if (
                "" != this.name &&
                "" != this.type &&
                "" != this.startDate &&
                "" != this.startTime &&
                "" != this.endDate &&
                "" != this.endTime &&
                "" != this.reason &&
                "" != this.address &&
                "" != this.cc &&
                "" != this.phone &&
                "" != this.targetinf &&
                "" != this.roominf &&
                "" != this.oneCheckTime &&
                "" != this.oneCheckStatus &&
                "" != this.oneCheck &&
                "" != this.countDate &&
                "" != this.oneCheckDate &&
                "" != this.oneCheckIdea
              )
                if (
                  this.startDate != this.endDate ||
                  this.startTime != this.endTime
                )
                  if (this.reason.length < 2)
                    this.toast("请假原因不能少于10字", "none");
                  else if (
                    "" == this.twoCheck ||
                    ("" != this.twoCheckDate &&
                      "" != this.twoCheckTime &&
                      "" != this.twoCheckStatus &&
                      "" != this.twoCheckIdea)
                  )
                    if (
                      "" == this.threeCheck ||
                      ("" != this.threeCheckDate &&
                        "" != this.threeCheckTime &&
                        "" != this.threeCheckStatus &&
                        "" != this.threeCheckIdea)
                    )
                      if ("" == this.threeCheck || "" != this.twoCheck) {
                        var a = {},
                          i = new Date();
                        (a["name"] = this.name),
                          (a["type"] = this.type),
                          (a["startDate"] =
                            this.startDate + " " + this.startTime),
                          (a["endDate"] = this.endDate + " " + this.endTime),
                          (a["countDate"] = this.countDate),
                          (a["reason"] = this.reason),
                          (a["phone"] = this.phone),
                          (a["targetinf"] = this.targetinf),
                          (a["roominf"] = this.roominf),
                          (a["address"] = this.address),
                          (a["cc"] = this.cc),
                          (a["oneCheck"] = this.oneCheck),
                          (a["oneCheckDate"] =
                            this.oneCheckDate + " " + this.oneCheckTime),
                          (a["oneCheckStatus"] = this.oneCheckStatus),
                          (a["oneCheckIdea"] = this.oneCheckIdea),
                          (a["twoCheck"] = this.twoCheck),
                          (a["twoCheckDate"] =
                            this.twoCheckDate + " " + this.twoCheckTime),
                          (a["twoCheckStatus"] = this.twoCheckStatus),
                          (a["twoCheckIdea"] = this.twoCheckIdea),
                          (a["threeCheck"] = this.threeCheck),
                          (a["threeCheckDate"] =
                            this.threeCheckDate + " " + this.threeCheckTime),
                          (a["threeCheckStatus"] = this.threeCheckStatus),
                          (a["threeCheckIdea"] = this.threeCheckIdea),
                          (a["viewChakan"] = this.viewChakan),
                          (a["state"] = this.state),
                          (a["applyDate"] =
                            (Number(i.getMonth() + 1).toString().length <= 1
                              ? "0" + Number(i.getMonth() + 1)
                              : Number(i.getMonth() + 1)) +
                            "-" +
                            (i.getDate().toString().length <= 1
                              ? "0" + i.getDate()
                              : i.getDate()) +
                            " " +
                            (i.getHours().toString().length <= 1
                              ? "0" + i.getHours()
                              : i.getHours()) +
                            ":" +
                            (i.getMinutes().toString().length <= 1
                              ? "0" + i.getMinutes()
                              : i.getMinutes())),
                          (a["imgFile_0"] = this.imgFile_0);
                          // ###

                        this.leaves.push(a),
                          e(
                            "log",
                            this.leaves,
                            " at pages/addLeave/addLeave.vue:240"
                          ),
                          uni.setStorage({
                            key: "todaySchoolLeaves",
                            data: t.leaves,
                            success: function () {
                              t.toast("提交成功", "success"),
                                setTimeout(function () {
                                  uni.navigateBack({
                                    delta: 1,
                                  });
                                }, 1600);
                            },
                            fail: function () {
                              t.toast("提交失败，请重试", "none");
                            },
                          });
                      } else this.toast("如有三级审批，二级审批必填", "none");
                    else this.toast("请将三级审批人审批信息填写完整", "none");
                  else this.toast("请将二级审批人审批信息填写完整", "none");
                else this.toast("开始日期不能等于结束日期", "none");
              else this.toast("请将必填信息填写完整", "none");
            },
            setStuInfo: function () {
              uni.navigateTo({
                url: "../addStudentInfo/addStudentInfo",
              });
            },
            addFile: function () {
              window.open("https://c.runoob.com/front-end/59/");
            },
            bindStartDate: function (t) {
              e(
                "log",
                t.detail.value.substring(5, t.detail.value.length),
                " at pages/addLeave/addLeave.vue:267"
              ),
                (this.startDate = t.detail.value.substring(
                  5,
                  t.detail.value.length
                ));
            },
            bindStartTime: function (t) {
              e("log", t.detail.value, " at pages/addLeave/addLeave.vue:272"),
                (this.startTime = t.detail.value);
            },
            bindEndDate: function (t) {
              e(
                "log",
                t.detail.value.substring(5, t.detail.value.length),
                " at pages/addLeave/addLeave.vue:277"
              ),
                (this.endDate = t.detail.value.substring(
                  5,
                  t.detail.value.length
                ));
            },
            bindEndTime: function (t) {
              e("log", t.detail, " at pages/addLeave/addLeave.vue:282"),
                (this.endTime = t.detail.value);
            },
            bindOneCheckDate: function (t) {
              e(
                "log",
                t.detail.value.substring(5, t.detail.value.length),
                " at pages/addLeave/addLeave.vue:287"
              ),
                (this.oneCheckDate = t.detail.value.substring(
                  5,
                  t.detail.value.length
                ));
            },
            bindOneCheckTime: function (t) {
              e("log", t.detail, " at pages/addLeave/addLeave.vue:292"),
                (this.oneCheckTime = t.detail.value);
            },
            bindTwoCheckDate: function (t) {
              e(
                "log",
                t.detail.value.substring(5, t.detail.value.length),
                " at pages/addLeave/addLeave.vue:297"
              ),
                (this.twoCheckDate = t.detail.value.substring(
                  5,
                  t.detail.value.length
                ));
            },
            bindTwoCheckTime: function (t) {
              e("log", t.detail, " at pages/addLeave/addLeave.vue:302"),
                (this.twoCheckTime = t.detail.value);
            },
            bindThreeCheckDate: function (t) {
              e(
                "log",
                t.detail.value.substring(5, t.detail.value.length),
                " at pages/addLeave/addLeave.vue:307"
              ),
                (this.threeCheckDate = t.detail.value.substring(
                  5,
                  t.detail.value.length
                ));
            },
            bindThreeCheckTime: function (t) {
              e("log", t.detail, " at pages/addLeave/addLeave.vue:312"),
                (this.threeCheckTime = t.detail.value);
            },
            changChakan: function (t) {
              void 0 == t.detail.value[0]
                ? (this.viewChakan = !1)
                : (this.viewChakan = !0),
                e(
                  "log",
                  this.viewChakan,
                  " at pages/addLeave/addLeave.vue:322"
                );
            },
            bindColor: function (t) {
              e(
                "log",
                "picker发送选择改变，携带值为",
                t.target.value,
                " at pages/addLeave/addLeave.vue:326"
              ),
                (this.colorIndex = t.target.value),
                this.changColorTitleStyle();
            },
            changColorTitleStyle: function () {
              return 0 == this.colorIndex
                ? "line-height: 45px;color:#F79A0D;"
                : 1 == this.colorIndex
                ? "line-height: 45px;color:black;"
                : 2 == this.colorIndex
                ? "line-height: 45px;color:red;"
                : void 0;
            },
            clickFile_0: function () {
              var t = this;
              uni.chooseImage({
                count: 1,
                sourceType: ["album"],
                sizeType: ["compressed"],
                success: function (a) {
                  console.log(a.tempFilePaths[0]);
                  var i = a.tempFilePaths[0];
                  t.toast("附件设置成功", "sucess"),
                    (t.imgFile_0 = a.tempFilePaths[0]);
                },
              });
            },

            toast: function (e, t) {
              uni.showToast({
                title: e,
                icon: t,
                duration: 2e3,
                mask: !0,
              });
            },
          },
        };
        t.default = i;
      }.call(this, a("0de9")["log"]));
    },
    f83c: function (e, t, a) {
      e.exports = a.p + "static/img/other_tips.9c6048df.png";
    },
  },
]);

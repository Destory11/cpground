(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-addStudentInfo-addStudentInfo"],
  {
    "0941": function (t, e, s) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.default = void 0);
      var n = {
        data: function () {
          return {
            studentInfo: null,
            name: "",
            stuId: "",
            sex: "",
            nation: "",
            year: "",
            system: "",
            subject: "",
            classNum: "",
            dorm: "",
          };
        },
        onShow: function () {
          (this.studentInfo = uni.getStorageSync("studentInfo")),
            "" != this.studentInfo &&
              null != this.studentInfo &&
              void 0 != this.studentInfo &&
              ((this.name = this.studentInfo.name),
              (this.stuId = this.studentInfo.stuId),
              (this.sex = this.studentInfo.sex),
              (this.nation = this.studentInfo.nation),
              (this.year = this.studentInfo.year),
              (this.system = this.studentInfo.system),
              (this.subject = this.studentInfo.subject),
              (this.classNum = this.studentInfo.classNum),
              (this.dorm = this.studentInfo.dorm));
        },
        methods: {
          sub: function () {
            if (
              "" != this.name &&
              "" != this.stuId &&
              "" != this.sex &&
              "" != this.nation &&
              "" != this.year &&
              "" != this.system &&
              "" != this.subject &&
              "" != this.classNum &&
              "" != this.dorm
            ) {
              var t = {};
              (t["name"] = this.name),
                (t["stuId"] = this.stuId),
                (t["sex"] = this.sex),
                (t["nation"] = this.nation),
                (t["year"] = this.year),
                (t["system"] = this.system),
                (t["subject"] = this.subject),
                (t["classNum"] = this.classNum),
                (t["dorm"] = this.dorm),
                uni.setStorageSync("studentInfo", t),
                this.toast("设置成功", "success"),
                setTimeout(function () {
                  uni.navigateBack({
                    delta: 1,
                  });
                }, 2e3);
            } else this.toast("请将信息填写完整", "none");
          },
          toast: function (t, e) {
            uni.showToast({
              title: t,
              icon: e,
              duration: 1600,
              mask: !0,
            });
          },
        },
      };
      e.default = n;
    },
    "2d69": function (t, e, s) {
      "use strict";
      var n;
      s.d(e, "b", function () {
        return a;
      }),
        s.d(e, "c", function () {
          return i;
        }),
        s.d(e, "a", function () {
          return n;
        });
      var a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "v-uni-view",
            [
              s(
                "v-uni-label",
                [
                  t._v("姓名"),
                  s(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [t._v("*必填")]
                  ),
                ],
                1
              ),
              s("v-uni-input", {
                attrs: {
                  placeholder: "你的姓名",
                },
                model: {
                  value: t.name,
                  callback: function (e) {
                    t.name = e;
                  },
                  expression: "name",
                },
              }),
              s(
                "v-uni-label",
                [
                  t._v("学号"),
                  s(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [t._v("*必填")]
                  ),
                ],
                1
              ),
              s("v-uni-input", {
                attrs: {
                  placeholder: "你的学号",
                },
                model: {
                  value: t.stuId,
                  callback: function (e) {
                    t.stuId = e;
                  },
                  expression: "stuId",
                },
              }),
              s(
                "v-uni-label",
                [
                  t._v("性别"),
                  s(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [t._v("*必填")]
                  ),
                ],
                1
              ),
              s("v-uni-input", {
                attrs: {
                  placeholder: "你的性别",
                },
                model: {
                  value: t.sex,
                  callback: function (e) {
                    t.sex = e;
                  },
                  expression: "sex",
                },
              }),
              s(
                "v-uni-label",
                [
                  t._v("民族"),
                  s(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [t._v("*必填")]
                  ),
                ],
                1
              ),
              s("v-uni-input", {
                attrs: {
                  placeholder: "你的民族",
                },
                model: {
                  value: t.nation,
                  callback: function (e) {
                    t.nation = e;
                  },
                  expression: "nation",
                },
              }),
              s(
                "v-uni-label",
                [
                  t._v("年级"),
                  s(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [t._v("*必填")]
                  ),
                ],
                1
              ),
              s("v-uni-input", {
                attrs: {
                  placeholder: "2020级",
                },
                model: {
                  value: t.year,
                  callback: function (e) {
                    t.year = e;
                  },
                  expression: "year",
                },
              }),
              s(
                "v-uni-label",
                [
                  t._v("学院"),
                  s(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [t._v("*必填")]
                  ),
                ],
                1
              ),
              s("v-uni-input", {
                attrs: {
                  placeholder: "计算机科学院",
                },
                model: {
                  value: t.system,
                  callback: function (e) {
                    t.system = e;
                  },
                  expression: "system",
                },
              }),
              s(
                "v-uni-label",
                [
                  t._v("专业"),
                  s(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [t._v("*必填")]
                  ),
                ],
                1
              ),
              s("v-uni-input", {
                attrs: {
                  placeholder: "软件工程",
                },
                model: {
                  value: t.subject,
                  callback: function (e) {
                    t.subject = e;
                  },
                  expression: "subject",
                },
              }),
              s(
                "v-uni-label",
                [
                  t._v("班级"),
                  s(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [t._v("*必填")]
                  ),
                ],
                1
              ),
              s("v-uni-input", {
                attrs: {
                  placeholder: "你的班级号",
                },
                model: {
                  value: t.classNum,
                  callback: function (e) {
                    t.classNum = e;
                  },
                  expression: "classNum",
                },
              }),
              s(
                "v-uni-label",
                [
                  t._v("宿舍"),
                  s(
                    "v-uni-text",
                    {
                      staticClass: "subRed",
                    },
                    [t._v("*必填")]
                  ),
                ],
                1
              ),
              s("v-uni-input", {
                attrs: {
                  placeholder: "你的宿舍",
                },
                model: {
                  value: t.dorm,
                  callback: function (e) {
                    t.dorm = e;
                  },
                  expression: "dorm",
                },
              }),
              s(
                "v-uni-view",
                {
                  staticClass: "sub",
                  on: {
                    click: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.sub.apply(void 0, arguments);
                    },
                  },
                },
                [t._v("提交")]
              ),
            ],
            1
          );
        },
        i = [];
    },
    9748: function (t, e, s) {
      "use strict";
      s.r(e);
      var n = s("0941"),
        a = s.n(n);
      for (var i in n)
        "default" !== i &&
          (function (t) {
            s.d(e, t, function () {
              return n[t];
            });
          })(i);
      e["default"] = a.a;
    },
    c7ff: function (t, e, s) {
      "use strict";
      var n = s("cce1"),
        a = s.n(n);
      a.a;
    },
    cce1: function (t, e, s) {
      var n = s("f0cd");
      "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = s("4f06").default;
      a("4cb6a905", n, !0, {
        sourceMap: !1,
        shadowMode: !1,
      });
    },
    f0a3: function (t, e, s) {
      "use strict";
      s.r(e);
      var n = s("2d69"),
        a = s("9748");
      for (var i in a)
        "default" !== i &&
          (function (t) {
            s.d(e, t, function () {
              return a[t];
            });
          })(i);
      s("c7ff");
      var u,
        o = s("f0c5"),
        c = Object(o["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "c5ceae1e",
          null,
          !1,
          n["a"],
          u
        );
      e["default"] = c.exports;
    },
    f0cd: function (t, e, s) {
      var n = s("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          "uni-input[data-v-c5ceae1e]{border:1px solid #ccc;margin:10px;margin-top:2px;margin-bottom:10px;padding-left:5px;padding-right:5px;height:45px;border-radius:5px;-webkit-transition:all .3s ease;transition:all .3s ease}uni-input[data-v-c5ceae1e]:hover{border:1px solid #007aff;box-shadow:0 0 5px 1px #eee}uni-label[data-v-c5ceae1e]{margin-left:10px;color:#2c906f}.sub[data-v-c5ceae1e]{background-color:#38b48b;margin:10px;margin-top:30px;color:#fff;text-align:center;font-size:18px;height:45px;line-height:45px;border-radius:5px;margin-bottom:350px}.subRed[data-v-c5ceae1e]{font-size:%?20?%;color:red}",
          "",
        ]),
        (t.exports = e);
    },
  },
]);

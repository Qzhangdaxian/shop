"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = common_vendor.defineComponent({
  setup() {
    const getMsg = () => {
      const db = common_vendor.rn.database();
      db.collection("userList").get().then((res) => {
        console.log(res);
        this.userInfo = res.result.data;
      }).catch((err) => {
        console.log(err);
      });
    };
    getMsg();
    return {};
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.userInfo, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.age),
        b: common_vendor.t(item.birth),
        c: common_vendor.t(item.category),
        d: common_vendor.t(item.creatTime),
        e: common_vendor.t(item.userName),
        f: common_vendor.t(item._id)
      };
    }),
    b: _ctx.triggered,
    c: common_vendor.o((...args) => _ctx.onPulling && _ctx.onPulling(...args)),
    d: common_vendor.o((...args) => _ctx.onRefresh && _ctx.onRefresh(...args)),
    e: common_vendor.o((...args) => _ctx.onRestore && _ctx.onRestore(...args)),
    f: common_vendor.o((...args) => _ctx.onAbort && _ctx.onAbort(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/workspace/shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

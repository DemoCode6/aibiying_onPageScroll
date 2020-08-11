//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    btn: true,
    xinxin:false
  },
  onPageScroll: function (e) {
    if (e.scrollTop >= 200) {
      this.setData({ btn: false })
    } else {
      this.setData({ btn: true })
    }
  },
  xinxin(){
    this.setData({
      xinxin:!this.data.xinxin
    })
  },
})

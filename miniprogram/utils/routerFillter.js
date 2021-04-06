const appGlobalData = getApp().globalData;

exports.routerFillter = function (pageObj, flag = false) {
  if (flag) {
    let _onShow = pageObj.onShow
    pageObj.onShow = function () {
      let that = this
      appGlobalData.getSignPrms.then((res) => {
        res.status && _onShow.call(that)
      }, (err) => {
        wx.switchTab({
          url: '/pages/login/login'
        })
      })
    }
  }
  return Page(pageObj)
}
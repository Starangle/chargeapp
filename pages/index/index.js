Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  
  clear: function(){
    wx.clearStorage();
    this.setData({showData:null});
  },
  
  submit: function(e){
    var item = e.detail.value;
    if(item.name==""||item.money==0||item.money=="")
      return;
    var db = wx.getStorageSync("db") || []
    db.unshift(item);
    wx.setStorage({
      key: 'db',
      data: db,
    }); 
    this.setData({ itemv: null });
    this.setData({ namev: null });
    this.setData({ moneyv: null });
    this.setData({ showData: db });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var db = wx.getStorageSync("db") || []
    this.setData({ showData: db });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
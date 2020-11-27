// pages/home/home.js
Page({
  handleGetUserInfo(event){
    console.log(event);
    
  },
  data: {
    name: 'Coderwhy',
    age:18,
    students:[
      {id:110,name:'kobe',age:30},
      {id:111,name:'james',age:28},
      {id:112,name:'curry',age:32},
      {id:113,name:'why',age:18}
    ],
    counter:0
  },
  handleBtnClick(){
    // console.log('按钮发生了点击');
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter - 1
    })
  }
})
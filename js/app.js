define(["angular","angular-route"],function(angular){
  
  var app = angular.module("myApp",["ngRoute"]);
  
  app.controller("IndexController",["$scope",function($scope){
    
    $scope.model = {
      index: 0,
      modelList: [
        {"label": "基本信息"},
        {"label": "我会什么"},
        {"label": "我的书架"},
        {"label": "项目经历"},
        {"label": "我的组件"},
      ]
    }
    
    //联系方式
    $scope.address = [
     {"name": "Email", "content": "liangdong891228@126.com"},
     {"name": "Mobile", "content": "13821490223"},
     {"name": "QQ", "content": "461320504"}
    ]
    
    //基本信息
    $scope.basic = [
      {"label": "姓名", "content": "梁冬"},
      {"label": "英文名", "content": "Uniq"},
      {"label": "性别", "content": "男"},
      {"label": "婚姻状况", "content": "单身狗"},
      {"label": "出生地", "content": "天津"},
      {"class": "strong", "label": "现居地", "content": "北京"},
      {"label": "出生日期", "content": "1989-12-28"},
      {"label": "学校", "content": "天津科技大学"},
      {"label": "专业", "content": "软件工程"},
      {"label": "英语", "content": "CET4 (551)"},
      {"label": "工作年限", "content": "2年"},
      {"class": "strong", "label": "求职意向", "content": "Web前端工程师"},
      {"class": "col2", "label": "GitHub", "content": "https://github.com/ziloLiang"},
      {"class": "col2", "label": "兴趣爱好", "content": "足球　羽毛球　dota2　炉石传说　动漫"},
      {"class": "col4", "label": "自我评价", "content": "这是自我评鉴，这是自我评鉴，这是自我评鉴，这是自我评鉴这是自我评鉴，这是自我评鉴"}
    ]
  }]);
  
  app.controller("BarController",["$scope",function($scope){

  }]);
  
  angular.bootstrap(document,["myApp"]);
  
})

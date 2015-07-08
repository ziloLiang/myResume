define(["angular", "jquery","angular-route"],function(angular,$){
  
  var app = angular.module("myApp",["ngRoute"]);
  
  app.controller("IndexController",["$scope",function($scope){
    //导航条
    $scope.model = {        
      index: 0,
      modelList: [
        {"label": "基本信息"},
        {"label": "我会什么"},
        {"label": "项目经历"},
        {"label": "我的书架"},
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
      {"label": "学历", "content": "大学本科"},
      {"label": "专业", "content": "软件工程"},
      {"label": "英语", "content": "CET4 (551)"},
      {"label": "工作年限", "content": "2年"},
      {"class": "strong", "label": "求职意向", "content": "Web前端工程师"},
      {"class": "col2", "label": "GitHub", "content": "https://github.com/ziloLiang"},
      {"class": "col2", "label": "兴趣爱好", "content": "足球　羽毛球　dota2　炉石传说　动漫"}
    ]
  
    //我的技术图片列表
    $scope.myTec = {
      imgSrc: "img/tecLogo/",
      textList: [
        {"question": "web语义化？浏览器兼容？", "answer": "这是基础"},
        {"question": "问题纠错，调试BUG？", "answer": "这是我的强项"},
        {"question": "响应式布局，移动端建站？", "answer": "不用bootstrap，原生我就能办到"},
        {"question": "我熟练掌握什么技术?", "answer": "↓"} 
      ],
      list: [
        {"label": "html5", "img":"html5.png"},
        {"label": "css3", "img":"css3.png"},
        {"label": "原生js", "img":"js.png"},
        {"label": "jquery", "img":"jquery.png"},
        {"label": "less", "img":"less.png"},
        {"label": "requirejs", "img":"requirejs.png"},
        {"label": "gruntjs", "img":"gruntjs.png"},
        {"label": "angualrJs", "img":"angualrJs.png"}                                                        
      ]
    }
    
    //我的经历
    $scope.project = {
    	imgSrc: "img/project/",
    	index: 0,
    	projectList: [
    	 {"title": "Gurucv人物志","UrlName": "www.gurucv.com","UrlLink": "http://www.gurucv.com",
    	 "intr": "Gurucv人物志是一个全新的职业社交网站，不仅具备社交网站的所有职能，"+
    	  "而他最为新颖的就是云详历。通过将各方面人才的详历挂在到云端",
    	  "myDuty": "前端工程师",
    	  "imgType": "cross",
    	  "imgList": [
    	   {"label": "首页","img": "com_1.png"},
    	   {"label": "职业圈功能","img": "com_2.png"},
    	   {"label": "私信功能","img": "com_3.png"}
    	  ]
    	 },
    	 {"title": "Gurucv人物志-移动端","UrlName": "m.gurucv.com","UrlLink": "http://m.gurucv.com",
    	  "intr": "天才相离移动端", 
    	  "myDuty": "前端工程师",
    	  "imgType": "vertical",
    	  "imgList": [
         {"label": "个人设置","img": "m_1.png"},
         {"label": "名录","img": "m_2.png"},
         {"label": "互动","img": "m_3.png"}
        ]
    	 }
    	],
    	show: function(index){
    		$scope.project.index = index;
    	}
    }
    
    //我的书架
    $scope.bookshelf = {
    	imgSrc: "img/book/",
    	bookList: [
    		{"img": "book_jquery.jpg"},
    		{"img": "book_javascript.jpg"},
    		{"img": "book_flower.jpg"},
    		{"img": "book_html5.jpg"},
    		{"img": "book_html5response.jpg"},
    		{"img": "book_angualrAnimal.jpg"},
    		{"img": "book_ngbook.jpg"}
    	]
    }
    
    $scope.ale= function(){
      alert(111);
    }
  }]);
  
  app.directive("slideModel",function(){
    return{
      scope: true,
      link: function(scope, ele, attrs){
        scope.$on("ngRepeatFinished",function(){
          var slideLi = $(ele).find(".slide-wapper li"),
              mask= "<div class='mask' style='display:none;position:absolute;top:0; right:0; left:0; bottom:0; background-color:#000; opacity:0.5;' ></div>",
              slideIntr = $(ele).find(".slide-intr li"),
              index = 0,maxIndex = slideLi.length -1;
          var posOld = {
                x: parseInt(slideLi.css("left")),
                y: parseInt(slideLi.css("top")),
                w: slideLi.width(),
                h: slideLi.height()
              },
              min = {
                w: posOld.w * 0.8,
                h: posOld.h * 0.8,
                left: posOld.x - 100,
                right: posOld.x + 100 + posOld.w * 0.2,
                top: posOld.h * 0.1 
              }
          slideLi.bind("click",function(e){
            var oldIndex = index;
            index = $(this).index();
            if(slideLi.eq(index).is(":animated")){
            	return false;
            }
            if(oldIndex < index){
              slide("left");
            }else{
              slide("right");
            }
            aaaa(oldIndex);
          });
          slide("init");
          function aaaa(oldIndex){
	        var oldLi = slideIntr.eq(oldIndex),
	            newLi = slideIntr.eq(index);
	        
	        oldLi.animate({"top": "-20px","opacity": 0},400,function(){
	        	oldLi.css({"top": "20px"});
	        });
	        newLi.animate({"top": "0px","opacity": 1},400);
	        
	      }
          function slide(dir){
            var now = slideLi.eq(index),
                prev = index===0? slideLi.eq(maxIndex) : now.prev(),
                next = index===maxIndex? slideLi.eq(0) : now.next();
            if(dir === "init"){
              slideLi.append(mask);
              now.css({"left": posOld.x,"top": posOld.y,"width": posOld.w, "height": posOld.h, "zIndex": 100});
              prev.css({"left": min.left,"top": min.top,"width": min.w, "height": min.h, "zIndex": 10}).find(".mask").show();
              next.css({"left": min.right,"top": min.top,"width": min.w, "height": min.h, "zIndex": 10}).find(".mask").show();
              return false;
            }
            now.css({"zIndex": 100}).animate({"left": posOld.x,"top": posOld.y,"width": posOld.w, "height": posOld.h},400).find(".mask").hide();
            prev.css({"zIndex": 10}).animate({"left": min.left,"top": min.top,"width": min.w, "height": min.h},400).find(".mask").show();
            next.css({"zIndex": 10}).animate({"left": min.right,"top": min.top,"width": min.w, "height": min.h},400).find(".mask").show();
          }
          
          
        });
        
      }
    }
    
  }).directive("ngRepeatFinish",["$timeout",function($timeout){
    return {
      link: function(scope){
        if(scope.$last){
          $timeout(function(){
            scope.$emit("ngRepeatFinished");
          });
        }
      }
    }
  }])

  angular.bootstrap(document,["myApp"]);
  
  console.log("/**");
  console.log("*如果需要源码的话，请发email给我:-D");
  console.log("*/");
})

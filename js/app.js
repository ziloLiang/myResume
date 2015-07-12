(function(){
	
  var app = angular.module("myApp",[]);
  
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
      {"label": "英语", "content": "CET4 (451)"},
      {"label": "工作年限", "content": "2年"},
      {"class": "strong", "label": "求职意向", "content": "Web前端工程师"},
      {"class": "strong", "label": "理想行业", "content": "互联网"},
      {"class": "col2", "label": "GitHub", "content": "https://github.com/ziloLiang"},
      {"class": "col2", "label": "兴趣爱好", "content": "足球　羽毛球　dota2　炉石传说　动漫"},
      {"class": "col4", "label": "自我介绍", "content": "Web前端工程师"}
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
    	 "date": "2013-11~2015-7",
    	 "intr": "Gurucv人物志是一个全新的职业社交SNS网站，Gurucv人物志革命式的将职业社交、云详历和传统招聘流程融为一体，"+
    	  "他就像是中国的linkedIn，不同的是它更具有中国特色，并能更好地把握中国市场。配套有云详历cv.gurucv.com",
    	  "myDuty": "从项目开始便负责整个项目前端的搭建，页面的生成，并持续为新的需求提供通用的组件和后期的项目优化。"+
    	  "并在项目中不断尝试新兴的技术，优化用户体验。",
    	  "imgType": "cross",
    	  "imgList": [
    	   {"label": "首页","img": "com_1.jpg"},
    	   {"label": "职业圈功能","img": "com_2.jpg"},
    	   {"label": "私信功能","img": "com_3.jpg"}
    	  ]
    	 },
    	 {"title": "Gurucv人物志-移动端","UrlName": "m.gurucv.com","UrlLink": "http://m.gurucv.com",
    	 "date": "2015-4~2015-7",
    	  "intr": "Gurucv人物志-移动端是Gurucv人物志的手机端单页应用(SPA)，功能与web端基本相同,采用的流行AMD模块化的思想，运用了requireJs+angularJS来搭建前端架构"+
    	  "，具有几近APP的用户体验。",
    	  "myDuty": "从了解到SPA的需求开始，推动采用angularJS技术，搭建移动端架构与框架。并全程包办项目的整体前端流程与优化。将新的技术和技术理念推向整个团队。",
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
    	index: -1,
    	bookList: [
    		{"label": "锋利的Jquery", "img": "book_jquery.jpg",
    		 "intr": "本书循序渐进地对jQuery的各种函数和方法调用进行了介绍，读者可以系统地掌握jQuery的DOM操作、事件监听和动画、表单操作、AJAX以及插件方面等知识点，并结合每个章节后面的案例演示进行练习，达到掌握核心知识点的目的。",
    		 "recommend": {"width": '80%'},
    		 "review": "该书比较循序渐进，有很多实例，适合新手学习。API不全，不够高深，不能当工具书使用。入门等级"
    		},
    		{"label": "javascript高级程序设计", "img": "book_javascript.jpg",
    		 "intr": "JavaScript的应用在广度和深度上日益扩大和加深，前端开发亟待掌握的JavaScript技能也越来越具有挑战性。这个新版本几乎全部更新、重写了上一版的内容，融入了作者近几年来奋战在前端开发一线的宝贵经验，是学习和提高JavaScript技能的必读经典。本书不仅全面深入地讲述了JavaScript的基本概念，阐释了它特有的面向对象和继承的机制，还详尽讨论了JavaScript实现的各个组成部分。在以大量篇幅全景式剖析ECMAScript和DOM的过程中，各个级别的DOM规范在作者笔下纷至沓来，诸如事件模拟、XML解析、XPath查询等高级主题也讲得分外清楚。此外，错误处理与调试、Ajax与JSON，乃至客户端存储、未来的API等章节也都条理清晰、异彩纷呈。，读者可以系统地掌握jQuery的DOM操作、事件监听和动画、表单操作、AJAX以及插件方面等知识点，并结合每个章节后面的案例演示进行练习，达到掌握核心知识点的目的。",
    		 "recommend": {"width": '100%'},
    		 "review": "javascript力作，本书是我读过的最好的一本javascript书籍。不论是从基础的变量到高级的继承，本书都讲得非常细致，吸引读者耐心品味。作者 Nicholas C.Zakas 的其他书籍也很值得一看。强力推荐"
    		},
    		{"label": "CSS禅意花园", "img": "book_flower.jpg",
    	     "intr": "全书分为两个主要部分。第1章为第一部分，讨论网站“CSS禅意花园”及其最基本的主题，包含正确的标记结构和灵活性规划等。第二部分包括6章，占据了本书的大部分篇幅。每章剖析“cSS禅意花园”收录的6件设计作品，这些作品围绕一个主要的设计概念展开，如文字的使用等。通过探索36件设计作品面临的挑战和解决的问题，读者将洞悉主要的Web设计原则以及它们运用的CSS布局技巧，理解CSS设计的精髓，恰当地处理图形和字体来创建界面优美、性能优良且具有强大生命力的网站。",
    		 "recommend": {"width": '50%'},
    		 "review": "本书重要讲的设计理念，和在设计方面的用户体验，CSS方面比较浅显。个人认为对于设计者和CSSER可我是食之无味，弃之可惜。"
    		},
    		{"label": "HTML5程序设计", "img": "book_html5.jpg"},
    		{"label": "响应式WEB设计", "img": "book_html5response.jpg"},
    		{"label": "Dont't make me think", "img": "dont-think.jpg"},
    		{"label": "用angularjs开发下一代web应用", "img": "book_angualrAnimal.jpg"},
    		{"label": "angularjs权威指南", "img": "book_ngbook.jpg"}
    	]
    }
    
    //我的插件
    $scope.myPlugIn = {
    	plugInList: [
    		{
    	     "name": "jquery.popuplayer",
    	     "url": "https://github.com/ziloLiang/jquery.popuplayer",
    	     "date": "2/2014",
    	     "intr": "基于JQuery的弹出层插件，带有alert，confirm，定时弹出层，登陆框，弹出层框架。就有拖动，遮罩层的等功能。可是这打开前回调等"
    	     },
    		{
    	     "name": "jquery.DDBox",
    	     "url": "https://github.com/ziloLiang/Jquery.DDbox",
    	     "date": "2/2014~7/2015",
    	     "intr": "基于JQuery的UI组件，包括模拟下拉框组件、邮箱智能提示组件、placeholder兼容组件、mouseenter提示组件、时间选择控件、模拟滚动条控件、字数限制控件、生成动态标签控件和生成分页组件。"
    	     },
		    {
		     "name": "jquery.canvasCrop",
		     "url": "https://github.com/ziloLiang/jquery.canvasCrop.js",
		     "date": "22/01/2015",
		     "intr": "这是一个基于jquery和HTML5 Canvas的头像剪切上传插件，具有上传头像，旋转头像，放大缩小，拖动选取等功能，返回base64的图片。在兼容canvas的浏览器上表现良好。"
		     },
		    {
		     "name": "angular-myDialogs",
		     "url": "https://github.com/ziloLiang/angular-myDialogs",
		     "date": "16/6/2015",
		     "intr": "这是一个为angualrJs所编写的弹出层插件，仅需在初始化app时注入该服务，便可随意的调用该弹出层服务。暂时具有alert、confirm、和框架。简单易用，无需调用bootstarp等第三方插件。"
		     }
    	]
    }
    
  }]);
  
  app.directive("slideModel",function(){
    return{
      scope: true,
      link: function(scope, ele, attrs){
        scope.$on("ngRepeatFinished",function(e){
          e.stopPropagation();
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
  }]).directive("navInit",function(){
  	return {
  		link: function(scope,ele,attrs){
  			var contentList = $(".content-model"),
  				topBarH = $(".top-bar").height();
  			ele.bind("click",function(){
  				var index = $(this).index(),
  					top = $(".content-model").eq(index).offset().top - topBarH;
  				$("body,html").animate({"scrollTop": top+"px"},300);
  				scope.$apply(function(){
  					scope.model.index = index;
  				});
  			});
  			$(window).off("scroll").on("scroll",function(){
  				var top = $(window).scrollTop();
  				contentList.each(function(i,e){
					if($(e).offset().top + $(e).outerHeight()>top + topBarH){
						scope.$apply(function(){
		  					scope.model.index = i;
		  				});
		  				return false;
					}
  				});
  			});
  		}
  	}
  	
  }).directive("bookshelf", ["$timeout", function($timeout){
  	
  	return {
  		link: function(scope,ele,attrs){
  			$(document).on("click",".book-list li",function(){
  				var index = $(this).index(),
  					detailList = $(".book-detail-list li");
  				if(scope.bookshelf.index === index){
  					return false;
  				}
  				detailList.find(".detail-left,.detail-right").removeClass("slide-in");
  				$timeout(function(){
	  				scope.$apply(function(){
	  					scope.bookshelf.index = index;
	  				});
	  				$timeout(function(){
	  					$(".book-detail-list li").eq(index).find(".detail-left,.detail-right").addClass("slide-in");
	  				},300);
  				}, 300);
  			});
  			scope.$on("ngRepeatFinished",function(e){
  				e.stopPropagation();
  				ele.find(".book-list li:eq(0)").trigger("click");
  			});
  		}
  	}
  	
  }]);

  angular.bootstrap(document,["myApp"]);
  
  console.log("/**");
  console.log("*如果需要源码的话，请发email给我:-D");
  console.log("*/");

	
})();
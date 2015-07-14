(function(){
	
  var app = angular.module("myApp",["ngSanitize"]);
  
  app.controller("IndexController",["$scope", "$sce", function($scope, $sce){
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
      {"class": "col2", "label": "兴趣爱好", "content": "足球　羽毛球　dota2　炉石传说　动漫"}
    ]
    
    $scope.mySpeak ={"class": "col4", "label": "自我介绍", "content": "<p>在我看来web前端不同于传统程序猿，他更需要一个理性和感性相结合的人，而兼具审美强迫症和不俗逻辑能力的我与眼中的web前端是如此的切合。</p>"+
       "<p>而我还是一个在工作中有自己想法的人，对于项目的设计往往会提出我的看法，不论最终落实于实践与否，我仍然会全力以赴的去完成它。没有自己想法的人往往只能追逐流行</p>"+
       "<p>我并不将web前端看成是一项谋生的手段，每每做出华丽的效果，nice的用户体验，良好的插件都令我倍感兴奋，而这种成就感也不断推动着我在web前端的道路上越走越远。</p>"+
       "<p>回想毕业时没有前端经验，完全通过自学的我，在找工作中四处碰壁，但我没有放弃，抓住机会坚持我的梦想。将近两年的时间，我不断打磨基础，并像海绵一样不断地汲取新的知识，将它们运用于实践。</p>"+
       "<p>从当年为了一个兼容问题绞尽脑汁的小菜鸟，到现在能独立承担前端工程的老菜鸟。飞速的成长伴随着眼界的开阔，我希望能迈向更高的平台，寻求更高的挑战。</p><p>现在我准备好了，就在这里。等待你的决定？</p>"
      }
  
    //我的技术图片列表
    $scope.myTec = {
      imgSrc: "img/tecLogo/",
      textList: [
        {"question": "web语义化？浏览器兼容？", "answer": "这是基础"},
        {"question": "问题纠错，调试BUG？", "answer": "这是我的强项"},
        {"question": "响应式布局，移动端建站？", "answer": "不用bootstrap，原生我就能办到"},
        {"question": "懂不懂后端，能不能和后端同学很好配合？", "answer": "不用担心，软件工程出身的我还参加过j2ee的培训呢。虽然最终选择了前端，但后端思想已融入己身。"},
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
    		{"label": "HTML5程序设计", "img": "book_html5.jpg",
    		  "intr": "本书首先介绍了HTML5 的历史背景、新的语义标签及与以往HTML 版本相比的根本变化，同时揭示了HTML5 背后的设计原理。本书在上一版的基础上新增了SVG 和拖放API相关内容，并对部分内容进行了更新。从第2 章起，分别围绕构建令人神往的富Web 应用，逐一讨论了HTML5 的Canvas、Geolocation、Communication、WebSocket、Forms、WebWorkers、Storage 等API 的使用，辅以直观明了的客户端和服务器端示例代码，让开发人员能够迅速理解和掌握新一代Web 标准所涵盖的核心技术。本书最后探索了离线Web 应用并展望了HTML5 未来的发展前景。本书面向有一定经验的Web 应用开发人员，对HTML5 及未来Web 应用技术发展有浓厚兴趣的读者也可以学习参考。",
    		  "recommend": {"width": '80%'},
    		  "review": "本书详细的讲解HTML5的新特性，对于HTML5初学者和想要了解HTML5的程序员来书是一本很好的书籍，内容不深但很全面。推荐"
    		},
    		{"label": "响应式WEB设计", "img": "book_html5response.jpg",
    		  "intr": "移动互联网时代到来了。《响应式Web设计：HTML5和CSS3实战》将当前Web设计中热门的响应式设计技术与HTML5和CSS3结合起来，为读者全面深入地讲解了针对各种屏幕大小设计和开发现代网站的各种技术。不仅讨论了媒体查询、流式布局、相对字体、响应式媒体，更将HTML5和CSS3的相关知识点一并讲解，是学习最新Web设计技术不可多得的佳作。",
    		  "recommend": {"width": '60%'},
    		  "review": "本书主要讲解了如何利用媒体查询和流布局创建响应式的网站，顺带提到了一些新的HTNL5标签和特性。对于想了解相应书布局的同学来说书中内容大多能在网上找到，也并无高深。当然此书不厚，买一本学习也不无不可。"
    		},
    		{"label": "Dont't make me think", "img": "dont-think.jpg",
    		 "intr": "可用性设计是Web设计中最重要也是难度最大的一项任务。本书作者根据多年从业的经验，剖析用户的心理，在用户使用模式、为扫描进行设计、导航设计、主页布局、可用性测试等方面提出了许多独特的观点，并给出了大量简单、易行的可用性设计的建议。本书短小精练，语言轻松诙谐，书中穿插大量色彩丰富的屏幕截图、趣味丛生的卡通插图以及包含大量信息的图表，使枯燥的设计原理变得平易近人。本书适合从事Web设计和Web开发的技术人员阅读，特别适合为如何留住访问者苦恼的网站/网页设计人员阅读。",
    		 "recommend": {"width": '90%'},
    		 "review": "在我看来，该书不论对于前端同学，UI，还是产品同学都是一本不可多得的好书。本书通过可用性将网页精心层层解刨，通过生动的事例为我们打开了一扇可用性的大门。强推"
    		},
//  		{"label": "用angularjs开发下一代web应用", "img": "book_angualrAnimal.jpg",
//  		 "intr": "我们都希望开发更小型、更轻量的Web应用，让创建应用更加容易，并且当项目变大时仍然易于测试、扩展和维护。这本手册将为你介绍AngularJS，它是一个开源的JavaScript框架，它使用MVC架构、数据绑定、客户端模板以及依赖注入等技术，从而为构建Web应用创建急需的结构。本书的作者是两位在Google负责AngularJS框架的工程师，他们将引领读者概览整个框架的核心特性，并构建一款可运行的AngularJS应用，内容涵盖布局、测试、编译及调试整个过程。通过这个过程，你将会学到AngularJS是怎样降低Web应用复杂性的。",
//  		 "recommend": {"width": "40%"},
//  		 "review": "本书对于angualrJs的初学者就是一个坑，跳跃性太强，不讲基础，主要讲构建项目。但对于有一定基础的angularJs开发者来说又过于鸡肋。不推荐"
//  		},
        {
         "label": "高性能javascript", "img": "high-js.jpg",
         "intr": "如果你使用JavaScript构建交互丰富的Web应用，那么JavaScript代码可能是造成你的Web应用速度变慢的主要原因。《高性能JavaScript》揭示的技术和策略能帮助你在开发过程中消除性能瓶颈。你将会了解如何提升各方面的性能，包括代码的加载、运行、DOM交互、页面生存周期等。雅虎的前端工程师Nicholas C. Zakas和其他五位JavaScript专家介绍了页面代码加载的最佳方法和编程技巧，来帮助你编写更为高效和快速的代码。你还会了解到构建和部署文件到生产环境的最佳实践，以及有助于定位线上问题的工具。",
         "recommend": {"width": '100%'},
         "review": "本书是Nicholas C. Zakas的又一js力作，从js根源一直到项目构建细致入微的讲解了如何提高前端性能，美中不足的是由于版本比较老构建方面不如现在的grunt等工具。但瑕不掩瑜，力推。ps：Nicholas C. Zakas不写书白瞎了你这个人了。"
        },
    		{"label": "angularjs权威教程", "img": "book_ngbook.jpg",
    		 "intr": "《图灵程序设计丛书：AngularJS权威教程》是学习AngularJS的公认经典，内容全面，讲解通俗，适合各层次的学习者。作者拥有丰富的AngularJS开发和教学经验，也是一位全栈工程师。全书35章，由浅入深地讲解了AngularJS的基本概念和基本功能，包括模块、作用域、控制器、表达式、指令、路由、依赖注入等，重要的是书中对每一个概念的讲解都配合了恰如其分的示例和代码，让读者通过动手实践，切身体会到这些概念的含义和价值。《AngularJS权威教程》后半部分深入到AngularJS应用开发，系统地讨论了服务器通信、事件、架构、动画、本地化、安全、缓存、移动应用等主题。",
    		 "recommend": {"width": "80%"},
    		 "review": "本书对于angularJs初学者来书是一本不可多得的好书，前半部分从angular基础入手详细的讲解了angularJs中的指令，服务，依赖等基础元素。后半部分则介绍了angularJs的一些高级应用。美中不足的是一些官方api中的服务没有具体提及，例如$compile,$templateRequest。这些对于编写插件非常重要的服务。推荐"
    		}
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
  	
  }]).filter('trustHtml', ['$sce', function ($sce) {
      return function (input) {
          return $sce.trustAsHtml(input);
      };
  }]);

  
  console.log("/**");
  console.log("*https://github.com/ziloLiang/myResume/");
  console.log("*Ipad air2上表现良好，放弃纸质简历吧");
  console.log("*/");

	
})();
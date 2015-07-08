/*! myResume 2015-07-06 */
!function(a,b,c){"use strict";function d(){function a(a,c){return b.extend(Object.create(a),c)}function c(a,b){var c=b.caseInsensitiveMatch,d={originalPath:a,regexp:a},e=d.keys=[];return a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,b,c,d){var f="?"===d?d:null,g="*"===d?d:null;return e.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+?)"||"([^/]+)")+(f||"")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),d.regexp=new RegExp("^"+a+"$",c?"i":""),d}var d={};this.when=function(a,e){var f=b.copy(e);if(b.isUndefined(f.reloadOnSearch)&&(f.reloadOnSearch=!0),b.isUndefined(f.caseInsensitiveMatch)&&(f.caseInsensitiveMatch=this.caseInsensitiveMatch),d[a]=b.extend(f,a&&c(a,f)),a){var g="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";d[g]=b.extend({redirectTo:a},c(g,f))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(a){return"string"==typeof a&&(a={redirectTo:a}),this.when(null,a),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(c,e,f,g,h,j,k){function l(a,b){var c=b.keys,d={};if(!b.regexp)return null;var e=b.regexp.exec(a);if(!e)return null;for(var f=1,g=e.length;g>f;++f){var h=c[f-1],i=e[f];h&&i&&(d[h.name]=i)}return d}function m(a){var d=t.current;q=o(),r=q&&d&&q.$$route===d.$$route&&b.equals(q.pathParams,d.pathParams)&&!q.reloadOnSearch&&!s,r||!d&&!q||c.$broadcast("$routeChangeStart",q,d).defaultPrevented&&a&&a.preventDefault()}function n(){var a=t.current,d=q;r?(a.params=d.params,b.copy(a.params,f),c.$broadcast("$routeUpdate",a)):(d||a)&&(s=!1,t.current=d,d&&d.redirectTo&&(b.isString(d.redirectTo)?e.path(p(d.redirectTo,d.params)).search(d.params).replace():e.url(d.redirectTo(d.pathParams,e.path(),e.search())).replace()),g.when(d).then(function(){if(d){var a,c,e=b.extend({},d.resolve);return b.forEach(e,function(a,c){e[c]=b.isString(a)?h.get(a):h.invoke(a,null,null,c)}),b.isDefined(a=d.template)?b.isFunction(a)&&(a=a(d.params)):b.isDefined(c=d.templateUrl)&&(b.isFunction(c)&&(c=c(d.params)),c=k.getTrustedResourceUrl(c),b.isDefined(c)&&(d.loadedTemplateUrl=c,a=j(c))),b.isDefined(a)&&(e.$template=a),g.all(e)}}).then(function(e){d==t.current&&(d&&(d.locals=e,b.copy(d.params,f)),c.$broadcast("$routeChangeSuccess",d,a))},function(b){d==t.current&&c.$broadcast("$routeChangeError",d,a,b)}))}function o(){var c,f;return b.forEach(d,function(d,g){!f&&(c=l(e.path(),d))&&(f=a(d,{params:b.extend({},e.search(),c),pathParams:c}),f.$$route=d)}),f||d[null]&&a(d[null],{params:{},pathParams:{}})}function p(a,c){var d=[];return b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];d.push(c[f]),d.push(e[2]||""),delete c[f]}}),d.join("")}var q,r,s=!1,t={routes:d,reload:function(){s=!0,c.$evalAsync(function(){m(),n()})},updateParams:function(a){if(!this.current||!this.current.$$route)throw i("norout","Tried updating route when with no current route");var c={},d=this;b.forEach(Object.keys(a),function(b){d.current.pathParams[b]||(c[b]=a[b])}),a=b.extend({},this.current.params,a),e.path(p(this.current.$$route.originalPath,a)),e.search(b.extend({},e.search(),c))}};return c.$on("$locationChangeStart",m),c.$on("$locationChangeSuccess",n),t}]}function e(){this.$get=function(){return{}}}function f(a,c,d){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(e,f,g,h,i){function j(){n&&(d.cancel(n),n=null),l&&(l.$destroy(),l=null),m&&(n=d.leave(m),n.then(function(){n=null}),m=null)}function k(){var g=a.current&&a.current.locals,h=g&&g.$template;if(b.isDefined(h)){var k=e.$new(),n=a.current,q=i(k,function(a){d.enter(a,null,m||f).then(function(){!b.isDefined(o)||o&&!e.$eval(o)||c()}),j()});m=q,l=n.scope=k,l.$emit("$viewContentLoaded"),l.$eval(p)}else j()}var l,m,n,o=g.autoscroll,p=g.onload||"";e.$on("$routeChangeSuccess",k),k()}}}function g(a,b,c){return{restrict:"ECA",priority:-400,link:function(d,e){var f=c.current,g=f.locals;e.html(g.$template);var h=a(e.contents());if(f.controller){g.$scope=d;var i=b(f.controller,g);f.controllerAs&&(d[f.controllerAs]=i),e.data("$ngControllerController",i),e.children().data("$ngControllerController",i)}h(d)}}}var h=b.module("ngRoute",["ng"]).provider("$route",d),i=b.$$minErr("ngRoute");h.provider("$routeParams",e),h.directive("ngView",f),h.directive("ngView",g),f.$inject=["$route","$anchorScroll","$animate"],g.$inject=["$compile","$controller","$route"]}(window,window.angular);
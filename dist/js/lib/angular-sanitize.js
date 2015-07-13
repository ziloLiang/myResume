/*! myResume 2015-07-13 */
!function(a,b,c){"use strict";function d(){this.$get=["$$sanitizeUri",function(a){return function(b){var c=[];return g(b,j(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function e(a){var c=[],d=j(c,b.noop);return d.chars(a),c.join("")}function f(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function g(a,c){function d(a,d,f,g){if(d=b.lowercase(d),z[d])for(;t.last()&&A[t.last()];)e("",t.last());y[d]&&t.last()==d&&e("",d),g=v[d]||!!g,g||t.push(d);var i={};f.replace(n,function(a,b,c,d,e){var f=c||d||e||"";i[b]=h(f)}),c.start&&c.start(d,i,g)}function e(a,d){var e,f=0;if(d=b.lowercase(d))for(f=t.length-1;f>=0&&t[f]!=d;f--);if(f>=0){for(e=t.length-1;e>=f;e--)c.end&&c.end(t[e]);t.length=f}}"string"!=typeof a&&(a=null===a||"undefined"==typeof a?"":""+a);var f,g,i,j,t=[],u=a;for(t.last=function(){return t[t.length-1]};a;){if(j="",g=!0,t.last()&&C[t.last()]?(a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+t.last()+"[^>]*>","i"),function(a,b){return b=b.replace(q,"$1").replace(s,"$1"),c.chars&&c.chars(h(b)),""}),e("",t.last())):(0===a.indexOf("<!--")?(f=a.indexOf("--",4),f>=0&&a.lastIndexOf("-->",f)===f&&(c.comment&&c.comment(a.substring(4,f)),a=a.substring(f+3),g=!1)):r.test(a)?(i=a.match(r),i&&(a=a.replace(i[0],""),g=!1)):p.test(a)?(i=a.match(m),i&&(a=a.substring(i[0].length),i[0].replace(m,e),g=!1)):o.test(a)&&(i=a.match(l),i?(i[4]&&(a=a.substring(i[0].length),i[0].replace(l,d)),g=!1):(j+="<",a=a.substring(1))),g&&(f=a.indexOf("<"),j+=0>f?a:a.substring(0,f),a=0>f?"":a.substring(f),c.chars&&c.chars(h(j)))),a==u)throw k("badparse","The sanitizer was unable to parse the following block of html: {0}",a);u=a}e()}function h(a){if(!a)return"";var b=J.exec(a),c=b[1],d=b[3],e=b[2];return e&&(I.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in I?I.textContent:I.innerText),c+e+d}function i(a){return a.replace(/&/g,"&amp;").replace(t,function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(c-56320)+65536)+";"}).replace(u,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function j(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&C[a]&&(d=a),d||D[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,f){var g=b.lowercase(f),h="img"===a&&"src"===g||"background"===g;H[g]!==!0||E[g]===!0&&!c(d,h)||(e(" "),e(f),e('="'),e(i(d)),e('"'))}),e(g?"/>":">"))},end:function(a){a=b.lowercase(a),d||D[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(i(a))}}}var k=b.$$minErr("$sanitize"),l=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,m=/^<\/\s*([\w:-]+)[^>]*>/,n=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,o=/^</,p=/^<\//,q=/<!--(.*?)-->/g,r=/<!DOCTYPE([^>]*?)>/i,s=/<!\[CDATA\[(.*?)]]>/g,t=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=/([^\#-~| |!])/g,v=f("area,br,col,hr,img,wbr"),w=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),x=f("rp,rt"),y=b.extend({},x,w),z=b.extend({},w,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),A=b.extend({},x,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),B=f("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),C=f("script,style"),D=b.extend({},v,z,A,y,B),E=f("background,cite,href,longdesc,src,usemap,xlink:href"),F=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),G=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),H=b.extend({},E,G,F),I=document.createElement("pre"),J=/^(\s*)([\s\S]*?)(\s*)$/;b.module("ngSanitize",[]).provider("$sanitize",d),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,d=/^mailto:/;return function(f,g){function h(a){a&&n.push(e(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&n.push('target="',g,'" '),n.push('href="',a.replace(/"/g,"&quot;"),'">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)k=j[0],j[2]||j[4]||(k=(j[3]?"http://":"mailto:")+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(d,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(145),r=n(153);e.default=function(){return a.a.createElement(r.a,null,a.a.createElement("h1",null,"Hi from the second page"),a.a.createElement("p",null,"Welcome to page 2"),a.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},145:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return u}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return d});var o=n(0),a=n.n(o),i=n(4),r=n.n(i),l=n(144),p=n.n(l);n.d(e,"Link",function(){return p.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var c=n(27);n.d(e,"waitForRouteChange",function(){return c.c});var s=n(146),h=n.n(s);n.d(e,"PageRenderer",function(){return h.a});var f=n(38);n.d(e,"parsePath",function(){return f.a});var m=a.a.createContext({}),d=function(t){return a.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function u(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},146:function(t,e,n){var o;t.exports=(o=n(149))&&o.default||o},148:function(t,e,n){t.exports=n.p+"static/logo-d9fb956375209353f50757669cd36146.png"},149:function(t,e,n){"use strict";n.r(e);n(39);var o=n(0),a=n.n(o),i=n(4),r=n.n(i),l=n(52),p=n(1),c=function(t){var e=t.location,n=p.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(l.a,Object.assign({key:e.pathname,location:e,pageResources:n},n.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=c},150:function(t,e,n){"use strict";n.d(e,"a",function(){return y});var o=n(155),a=n.n(o),i=n(8),r=n.n(i),l=n(0),p=n.n(l),c=n(151),s=n.n(c),h=n(148),f=n.n(h),m=n(147),d=n(152),u=n.n(d),x=n(145);function g(){var t=a()(["\n  @font-face {\n    font-family: Averta;\n    src: url('","') format('opentype')\n  }\n"]);return g=function(){return t},t}var y=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return p.a.createElement(w,null,p.a.createElement(b,{src:s.a}),p.a.createElement(x.Link,{to:"/"},p.a.createElement(k,{src:f.a})),p.a.createElement(v,null,"Ivory"),p.a.createElement(z,null,"Turning 5 months project into 4 weeks project"),p.a.createElement(x.Link,{to:"/"},p.a.createElement(E,null,"Get Started")))},e}(l.Component);Object(m.b)(g(),u.a);var w=m.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-0"})(["position:relative;object-fit:contain;"]),b=m.a.img.withConfig({displayName:"header__HeaderImg",componentId:"sc-31ozxh-1"})(["height:768;width:100%;@media only screen and (max-width:360px){width:100%;}"]),v=m.a.h1.withConfig({displayName:"header__HeaderTitle",componentId:"sc-31ozxh-2"})(["position:absolute;top:390px;left:755px;bottom:411px;font-size:52px;color:white;font-family:Averta;font-weight:bold;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;@media only screen and (max-width:1024px){position:absolute;top:350px;left:650px;font-size:42px;color:white;font-family:Averta;font-weight:bold;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;}@media only screen and (max-width:768px){position:absolute;top:250px;left:450px;font-size:42px;color:white;font-family:Averta;font-weight:bold;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;}@media only screen and (max-width:414px){position:absolute;top:150px;left:230px;font-size:28px;color:white;font-family:Averta;font-weight:bold;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:left;}@media only screen and (max-width:360px){position:absolute;top:120px;left:230px;font-size:24px;color:white;font-family:Averta;font-weight:bold;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:left;}"]),z=m.a.h3.withConfig({displayName:"header__HeaderText",componentId:"sc-31ozxh-3"})(["position:absolute;top:460px;left:755px;font-size:24px;color:white;width:320px;height:48px;font-size:24px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:left;family-text:Averta;@media only screen and (max-width:1024px){position:absolute;top:410px;left:650px;font-size:24px;color:white;width:320px;height:48px;font-size:18px;font-weight:200;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:left;family-text:Averta;}@media only screen and (max-width:768px){position:absolute;top:310px;left:450px;font-size:24px;color:white;width:250px;height:48px;font-size:18px;font-weight:200;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:left;family-text:Averta;}@media only screen and (max-width:414px){position:absolute;top:185px;left:230px;color:white;width:120px;height:28px;font-size:10px;font-weight:200;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:left;family-text:Averta;}@media only screen and (max-width:360px){position:absolute;top:150px;left:230px;color:white;width:120px;height:28px;font-size:10px;font-weight:200;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:left;family-text:Averta;}"]),E=m.a.button.withConfig({displayName:"header__GetStarted",componentId:"sc-31ozxh-4"})(["position:absolute;top:540px;left:755px;width:107px;height:41px;background-color:white;border:none;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#00adee;font-family:Averta;font-size:14px;@media only screen and (max-width:1024px){position:absolute;top:470px;left:650px;width:97px;height:35px;background-color:white;border:none;font-weight:200;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#00adee;font-family:Averta;font-size:10px;}@media only screen and (max-width:768px){position:absolute;top:370px;left:450px;width:87px;height:35px;background-color:white;border:none;font-weight:200;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#00adee;font-family:Averta;font-size:10px;}@media only screen and (max-width:414px){position:absolute;top:220px;left:230px;width:50px;height:20px;background-color:white;border:none;font-weight:200;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#00adee;font-family:Averta;font-size:6px;}@media only screen and (max-width:360px){position:absolute;top:180px;left:230px;width:50px;height:20px;background-color:white;border:none;font-weight:200;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#00adee;font-family:Averta;font-size:6px;}"]),k=m.a.img.withConfig({displayName:"header__IvoryLogo",componentId:"sc-31ozxh-5"})(["position:absolute;top:0px;left:0px;width:20%;height:18%;"])},151:function(t,e,n){t.exports=n.p+"static/headerSmall-cfba5dace3008a19205c79bf35164908.png"},152:function(t,e,n){t.exports=n.p+"static/AvertaDemo-Regular-9cd8189186d13a06f790d5464049866a.otf"},153:function(t,e,n){"use strict";var o=n(154),a=n(0),i=n.n(a),r=n(4),l=n.n(r),p=n(158),c=n.n(p),s=n(145),h=n(150),f=(n(156),function(t){var e=t.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(h.a,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e))},data:o})});f.propTypes={children:l.a.node.isRequired},e.a=f},154:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},156:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-page-2-js-b597931127af2f7ed6ad.js.map
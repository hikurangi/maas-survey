(this["webpackJsonpmaas-survey"]=this["webpackJsonpmaas-survey"]||[]).push([[0],{34:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),i=n.n(r),l=n(68),s=n(65),c=n(63),u=n(61),m=n(62),h=["Almost Always","Very Frequently","Somewhat Frequently","Somewhat Infrequently","Very Infrequently","Almost Never"],d=["I could be experiencing some emotion and not be conscious of it until some time later.","I break or spill things because of carelessness, not paying attention, or thinking of something else.","I find it difficult to stay focused on what's happening in the present.","I tend to walk quickly to get where I'm going without paying attention to what I experience along the way.","I tend not to notice feelings of physical tension or discomfort until they really grab my attention.","I forget a person's name almost as soon as I've been told it for the first time.",'It seems I am "running on automatic," without much awareness of what I\'m doing.',"I rush through activities without being really attentive to them.","I get so focused on the goal I want to achieve that I lose touch with what I'm doing right now to get there.","I do jobs or tasks automatically, without being aware of what I'm doing.","I find myself listening to someone with one ear, doing something else at the same time.",'I drive places on "automatic pilot" and then wonder why I went there.',"I find myself preoccupied with the future or the past.","I find myself doing things without paying attention.","I snack without being aware that I'm eating."],f=function(){return o.a.createElement(s.a,null,o.a.createElement("h3",null,"Description"),o.a.createElement("p",null,"The MAAS is a 15-item scale designed to assess a core characteristic of dispositional mindfulness, namely, open or receptive awareness of and attention to what is taking place in the present. The scale shows strong psychometric properties and has been validated with college, community, and cancer patient samples. Correlational, quasi-experimental, and laboratory studies have shown that the MAAS taps a unique quality of consciousness that is related to, and predictive of, a variety of self-regulation and well-being constructs. The measure takes 10 minutes or less to complete."),o.a.createElement("h3",null,"Instructions"),o.a.createElement("p",null,"Below is a collection of statements about your everyday experience. Using the 1-6 scale below, please indicate how frequently or infrequently you currently have each experience. Please answer according to what really reflects your experience rather than what you think your experience should be. Please treat each item separately from every other item."),o.a.createElement(u.a,{component:"ol"},h.map((function(e,t){return o.a.createElement(m.a,{key:t},t+1+". "+e)}))))},g=function(){return o.a.createElement(s.a,{component:"header"},o.a.createElement("img",{alt:"Ovio",src:"http://ovio.co.nz/wp-content/uploads/2016/09/ovio-logo.png"}),o.a.createElement("h1",null,"Mindful Attention Awareness Scale"),o.a.createElement("h3",null,"created by Kirk Warren Brown, PhD & Richard M. Ryan, PhD"))},w=n(19),p=n(27),y=n(29),v=n(69),E=n(70),I=n(71),b=n(66),k=function(e){var t=e.handleChange,n=e.index,a=e.item,r=e.name,i=e.value;return o.a.createElement("li",{key:n},o.a.createElement("p",null,a),o.a.createElement(s.a,{display:"flex",flexDirection:"row"},o.a.createElement("p",null,"Almost Always"),o.a.createElement(v.a,{component:"fieldset"},o.a.createElement(E.a,{name:r,onChange:t,defaultValue:"",value:i,row:!0},h.map((function(e,t,n){var a=t+1,r=a+".";return o.a.createElement(I.a,{key:t,value:a,control:o.a.createElement(b.a,null),label:r,labelPlacement:"start"})})))),o.a.createElement("p",null,"Almost Never")))},x=function(e){var t=e.answers,n=t.reduce((function(e,t){return e+t}),0)/t.length,a=Math.floor(n)===n?n:n.toFixed(2);return t.length===d.length?o.a.createElement("h1",null,"Your MAAS Score is ",a):null},A=function(){var e=Object(a.useState)({}),t=Object(y.a)(e,2),n=t[0],r=t[1];function i(e){console.log({targetName:e.target.name,targetValue:e.target.value}),r(Object(p.a)({},n,Object(w.a)({},e.target.name,parseInt(e.target.value,10))))}var l=Object.values(n);return console.log({state:n,answers:l}),o.a.createElement(s.a,{component:"article"},o.a.createElement("ol",null,d.map((function(e,t){var a="scale"+t,r=n[a]||"";return o.a.createElement(k,{item:e,index:t,value:r,name:a,handleChange:i})}))),o.a.createElement(x,{answers:l}))},q=function(){return o.a.createElement(s.a,{mt:10,mb:20},o.a.createElement(c.a,{component:"main",maxWidth:"md"},o.a.createElement(g,null),o.a.createElement(f,null),o.a.createElement(A,null)))},j=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null),o.a.createElement(q,null))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/maas-survey",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/maas-survey","/service-worker.js");S?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):O(e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.363f5131.chunk.js.map
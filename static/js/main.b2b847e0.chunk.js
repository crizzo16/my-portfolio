(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},13:function(e,t,a){e.exports=a(27)},22:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(12),c=a.n(i),r=(a(22),a(5)),o=a(6),s=a(8),m=a(7),u=a(9),d=(a(10),a(0)),p=a(3);var h=function(e){return l.a.createElement("button",{className:"btn-project"},e.title)},E=(a(25),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"calculateCoins",value:function(){var e=["copper","silver","gold","platinum"],t=[1,10,100,1e3],a=0,n=[],l=document.getElementById("num-people").value;e.forEach(function(e,l){var i="input-"+e;isNaN(parseInt(document.getElementById(i).value))?n.push(0):(n.push(parseInt(document.getElementById(i).value)),a+=n[l]*t[l])});for(var i,c=Math.floor(a/l),r=a-c*l,o=[],s=t.length-1;s>=0;s--)console.log("Share: ",c),console.log("Value: ",t[s]),c>=t[s]?(i=Math.floor(c/t[s]),o.unshift(i),c-=i*t[s]):o.unshift(0);console.log("Share Full Length: ",o.length),o.forEach(function(t,a){var n="output-"+e[a];document.getElementById(n).value=t}),document.getElementById("output-remainder").value=r}},{key:"render",value:function(){return l.a.createElement("div",{className:"border-magenta project-frame"},l.a.createElement("div",{className:"row"},l.a.createElement("input",{id:"input-copper",className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"input-silver",className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"input-gold",className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"input-platinum",className:"coin-field",type:"number",placeholder:"0"})),l.a.createElement("div",{className:"row"},l.a.createElement("input",{id:"output-copper",disabled:!0,className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"output-silver",disabled:!0,className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"output-gold",disabled:!0,className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"output-platinum",disabled:!0,className:"coin-field",type:"number",placeholder:"0"})),l.a.createElement("div",{className:"row"},l.a.createElement("input",{id:"num-people",className:"coin-field",type:"number",placeholder:"1"}),l.a.createElement("input",{id:"output-remainder",disabled:!0,className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("button",{id:"coin-submit",onClick:this.calculateCoins},"Calculate")))}}]),t}(n.Component)),f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Projects"),l.a.createElement("div",null,l.a.createElement(h,{title:"Coin Converter"}),l.a.createElement(h,{title:"Combat Round"})),l.a.createElement("div",{className:"mini-projects"},l.a.createElement(E,null)))}}]),t}(n.Component);var b=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"New Componentsss"),l.a.createElement("p",null,"here is some text to test this out"))};var g=function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l8 s12"},l.a.createElement("p",null,'Raised in central California, Celia has always enjoyed logic puzzles and figuring things out, even if she hadn\'t discovered coding yet. At the University of Puget Sound, she decided to do a Computer Science minor, but from "Hello World!" was immediately entranced. Switching to a coding major, she finished her university days with Mathematics and French minors.',l.a.createElement("br",null),"After university, Celia decided to augment her coding skills with a web development course through UC Davis Extension. This help her get in tough with her artistic side, as she really enjoyed the intersection between making a website look great while also being well-coded.",l.a.createElement("br",null),"Outside of coding, Celia enjoys crafting in a variety of disciplines from sewing to using a laser cutter. During the first year of the pandemic, she put this skill to good use creating masks for friends and family. She also deeply enjoys board games and TTRPGs, especially those that allow for cooperative play.")),l.a.createElement("div",{className:"col l4 s12"},l.a.createElement("img",{className:"about-img",src:"logo192.png"})))},v=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"frame"},l.a.createElement("div",{className:"navigation"},l.a.createElement("div",{className:"page-header"},l.a.createElement("h2",{id:"page-title"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",element:"Fun Little Things"}),l.a.createElement(d.a,{path:"/articles",element:"Articles"}),l.a.createElement(d.a,{path:"/about",element:"I Believe In The Power Of Nice"})))),l.a.createElement("div",{className:"navigation-sub"},l.a.createElement(p.b,{to:"/",className:"item"},"Projects"),l.a.createElement(p.b,{to:"/articles",className:"item"},"Articles"),l.a.createElement(p.b,{to:"/about",className:"item"},"About"))),l.a.createElement("div",{className:"content"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",element:l.a.createElement(f,null)}),l.a.createElement(d.a,{path:"/articles",element:l.a.createElement(b,null)}),l.a.createElement(d.a,{path:"/about",element:l.a.createElement(g,null)})))))}}]),t}(n.Component),y=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,28)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),i(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p.a,{basename:""},l.a.createElement(v,null)))),y()}},[[13,3,2]]]);
//# sourceMappingURL=main.b2b847e0.chunk.js.map
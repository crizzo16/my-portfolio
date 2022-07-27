(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){},224:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(18),s=t.n(r),c=(t(44),t(8)),i=t(9),o=t(11),m=t(10),u=t(12),d=(t(20),t(0)),h=t(5),p=t(33),f=t.n(p);var g=function(e){return l.a.createElement("button",{className:"btn-project"},e.title)},E=(t(47),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"calculateCoins",value:function(){var e=["copper","silver","gold","platinum"],a=[1,10,100,1e3],t=0,n=[],l=document.getElementById("num-people").value;e.forEach(function(e,l){var r="input-"+e;isNaN(parseInt(document.getElementById(r).value))?n.push(0):(n.push(parseInt(document.getElementById(r).value)),t+=n[l]*a[l])});for(var r,s=Math.floor(t/l),c=t-s*l,i=[],o=a.length-1;o>=0;o--)console.log("Share: ",s),console.log("Value: ",a[o]),s>=a[o]?(r=Math.floor(s/a[o]),i.unshift(r),s-=r*a[o]):i.unshift(0);console.log("Share Full Length: ",i.length),i.forEach(function(a,t){var n="output-"+e[t];document.getElementById(n).value=a}),document.getElementById("output-remainder").value=c}},{key:"render",value:function(){return l.a.createElement("div",{className:"border-magenta project-frame"},l.a.createElement("div",{className:"row"},l.a.createElement("input",{id:"input-copper",className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"input-silver",className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"input-gold",className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"input-platinum",className:"coin-field",type:"number",placeholder:"0"})),l.a.createElement("div",{className:"row"},l.a.createElement("input",{id:"output-copper",disabled:!0,className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"output-silver",disabled:!0,className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"output-gold",disabled:!0,className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("input",{id:"output-platinum",disabled:!0,className:"coin-field",type:"number",placeholder:"0"})),l.a.createElement("div",{className:"row"},l.a.createElement("input",{id:"num-people",className:"coin-field",type:"number",placeholder:"1"}),l.a.createElement("input",{id:"output-remainder",disabled:!0,className:"coin-field",type:"number",placeholder:"0"}),l.a.createElement("button",{id:"coin-submit",onClick:this.calculateCoins},"Calculate")))}}]),a}(n.Component)),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Projects"),l.a.createElement("div",null,l.a.createElement(g,{title:"Coin Converter"}),l.a.createElement(g,{title:"Combat Round"})),l.a.createElement("div",{className:"mini-projects"},l.a.createElement(E,null)))}}]),a}(n.Component),b=(t(49),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={current:[!0,!1,!1]},t.handleClick=function(e){e.preventDefault();var a=e.target.id,n=[!1,!1,!1];n[a=parseInt(a.substring(4))]=!0,t.setState({current:n})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"flex f-around container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l8 m6 s12"},l.a.createElement("p",{className:"content-message mt-n"},"Ever since I've access to a computer, I've loved spreadsheets. There's something so satisfying about clean, well-formatted, and visually appealing data. Throughout all my various hobbies, spreadsheets are a commonality. Below, you'll see a spreadsheet where I track the releases of packs for the Sims 4, a spreadsheet where I try to predict the winner of Eurovision from Youtube rankings, a spreadsheet where I list all of the books I own, and more! Many of these spreadsheets I actively use and update with new information, so keep an eye out for change.")),l.a.createElement("div",{className:"col l4 m6 s12"},l.a.createElement("div",{className:"flex f-around f-wrap f-vcenter"},l.a.createElement("button",{onClick:this.handleClick,className:"waves-effect btn light-green",id:"btn-0"},"Sims 4 Packs"),l.a.createElement("button",{onClick:this.handleClick,className:"waves-effect btn light-green",id:"btn-1"},"Eurovision 2022 Predictions"),l.a.createElement("button",{onClick:this.handleClick,className:"waves-effect btn light-green",id:"btn-2"},"Books"))))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"line light-green darken-3"})),l.a.createElement("div",{className:"mb-lg"},l.a.createElement("div",{id:"sec-books",className:this.state.current[0]?"":"hide"},l.a.createElement("div",{className:"container"},l.a.createElement("h4",{className:"sheet-subheading"},"Sims 4 Pack Releases"),l.a.createElement("p",null,"The idea of this spreadsheet was to track Sims 4 releases in general. One of the first stats I pulled out was how much time passed in-between packs, especially between packs of the same type. Later on I was curious about the amount of items in each pack, and set about trying to compare the type of packs with how many items they offered. The best part of the Sims is that types were already color-coded, making this a very colorful spreadsheet!")),l.a.createElement("iframe",{id:"frame-sims",className:"spreadsheet-frame",src:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTCdrFzWYnk-JcUyBnthPKl3Dx8A2396Pkk302422nfRoY2apLyEEri-AnM7qVeFoEhABMx7DU0i26-/pubhtml?gid=0&single=true&widget=true&headers=false"})),l.a.createElement("div",{id:"sec-esc22",className:this.state.current[1]?"":"hide"},l.a.createElement("div",{className:"container"},l.a.createElement("h4",{className:"sheet-subheading"},"Eurovision 2022"),l.a.createElement("p",null,"Eurovision is ripe for statistical analysis, even just using Google Sheets. It's a popular phenomenon on Youtube to rank your favorite songs, outside of the structure of the contest. From a top 40, you can plug that into the semi-finals and final to find out the actual ranking if that was the true order of songs. By replicating with many different Youtubers (and my own personal ranking), I tried to predict who would win - or at least make the finals. While Sweden, the top choice, didn't win, it did place 4th. A big surprise was Austria. While they were the only non-Big 5 country to always make the finals in the Youtube rankings, their average performance didn't qualify they for the finals, showing that analysis of studio versions of songs can't fully predict what happens when everyone gets on the Eurovision stage.")),l.a.createElement("iframe",{id:"frame-esc22",className:"spreadsheet-frame",src:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTDPtoPUbRSozcdEqZ9RYvIL-jDl0ZsirDDekUOMKMhvQOfNKp3FhPvyH1GMWr4jZEDWjtX0jr8iU9Q/pubhtml?widget=true&headers=false"})),l.a.createElement("div",{id:"sec-books",className:this.state.current[2]?"":"hide"},l.a.createElement("div",{className:"container"},l.a.createElement("h4",{className:"sheet-subheading"},"Books I Own"),l.a.createElement("p",null,"After talking to a friend about not buying a book until I found it at a thrift store, I was curious about what percentage of my books I bought used. I spent an evening entering in the data, and what I found pleasantly surprised me! Over 65% of my total library was bought used - over 70% if you only look at books. It made perfect sense that I bought most of my Graphic Novels and RPG books new, since the culture for those is small enough that finding them in thrift stores or used bookstores is pure luck.")),l.a.createElement("iframe",{id:"frame-books",className:"spreadsheet-frame",src:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSQlcmbzq5saB-cIt_HKOkNlv90dQk0Zf0lplUGw6bjPxW-HWf1kS64d1Kh2mb2B6-scVhj4jEtEMBP/pubhtml?gid=0&single=true&widget=true&headers=false"}))))}}]),a}(n.Component));var N=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row flex f-wrap f-around"},l.a.createElement("div",{className:"col xl5 l12 flex f-vcenter"},l.a.createElement("img",{className:"about-img",src:"./assets/Celia01.jpeg"})),l.a.createElement("div",{className:"col xl7 l12"},l.a.createElement("p",null,'Raised in central California, Celia has always enjoyed logic puzzles and figuring things out, even if she hadn\'t discovered coding yet. At the University of Puget Sound, she decided to do a Computer Science minor, but from "Hello World!" was immediately entranced. Switching to a coding major, she finished her university days with Mathematics and French minors.',l.a.createElement("br",null),l.a.createElement("br",null),"After university, Celia decided to augment her coding skills with a web development course through UC Davis Extension. This help her get in touch with her artistic side, as she really enjoyed the intersection between making a website look great while also being well-coded.",l.a.createElement("br",null),l.a.createElement("br",null),"Outside of coding, Celia enjoys being creative, whether that's sewing masks or running a D&D game for her friends. Like many others during the pandemic, she discovered that spending time with friends and family is very important, especially if she can convince them to play a board game or two."))),l.a.createElement("div",{className:"row mt-lg f-wrap"},l.a.createElement("div",{className:"col s12 l6"},l.a.createElement("div",{className:"about-fun-fact"},l.a.createElement("p",{className:"fun-fact-header light-green darken-3"},"Currently Reading"),l.a.createElement("p",{className:"fun-fact-content light-green lighten-3"},"The Galaxy and the Ground Within by Becky Chambers, How to Keep House While Drowning by KC Davis"))),l.a.createElement("div",{className:"col l6 s12"},l.a.createElement("div",{className:"about-fun-fact"},l.a.createElement("p",{className:"fun-fact-header light-green darken-3"},"Currently Watching"),l.a.createElement("p",{className:"fun-fact-content light-green lighten-3"},"The Boys, Young Justice, Critical Role, Dimension 20"))),l.a.createElement("div",{className:"col l6 s12"},l.a.createElement("div",{className:"about-fun-fact"},l.a.createElement("p",{className:"fun-fact-header light-green darken-3"},"Currently Playing"),l.a.createElement("p",{className:"fun-fact-content light-green lighten-3"},"Battle for Bikini Bottom, Marvel Avengers, Ghosts of Saltmarsh"))),l.a.createElement("div",{className:"col l6 s12"},l.a.createElement("div",{className:"about-fun-fact"},l.a.createElement("p",{className:"fun-fact-header light-green darken-3"},"Currently Learning"),l.a.createElement("p",{className:"fun-fact-content light-green lighten-3"},"Data Science,")))))},y=t(25),w=t(36),k=t(29);var C=function(){return l.a.createElement("div",{className:"flex f-wrap f-around mt-lg"},l.a.createElement("div",{className:"contact-type"},l.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/cecilia-rizzo/"},l.a.createElement("div",{className:"circle light-green darken-4"},l.a.createElement(y.a,{className:"contact-icon",icon:k.b}))),l.a.createElement("h4",null,"LinkedIn")),l.a.createElement("div",{className:"contact-type"},l.a.createElement("a",{target:"_blank",href:"https://github.com/crizzo16"},l.a.createElement("div",{className:"circle light-green darken-4"},l.a.createElement(y.a,{className:"contact-icon",icon:k.a}))),l.a.createElement("h4",null,"GitHub")),l.a.createElement("div",{className:"contact-type"},l.a.createElement("a",{target:"_blank",href:"mailto:cecilia.rizzo16@gmail.com"},l.a.createElement("div",{className:"circle light-green darken-4"},l.a.createElement(y.a,{className:"contact-icon",icon:w.a}))),l.a.createElement("h4",null,"Email")))};var S=function(){return l.a.createElement("div",{className:"container resume-sec"},l.a.createElement("h4",null,"Resume"),l.a.createElement("p",null,"Web Developer and Data Analyst with a background in Computer Science and Mathematics, who takes a detail-oriented approach to projects. A life-long passion for organized data & code, beautiful visuals, and learning new things."),l.a.createElement("div",{className:"row flex"},l.a.createElement("div",{className:"flex f-vcenter f-right"},l.a.createElement("img",{className:"resume-img",src:"./assets/resume-juggler.png"})),l.a.createElement("div",{className:"section"},l.a.createElement("h5",null,"Knowledge & Skills"),l.a.createElement("p",{className:"resume-left"},l.a.createElement("strong",null,"Languages:")," Javascript, HTML, CSS, SQL, Git, R, PHP, Python"),l.a.createElement("p",{className:"resume-left"},l.a.createElement("strong",null,"Tools:")," MongoDB, JQuery, Node JS, REST API, Laser Cutter"),l.a.createElement("p",{className:"resume-left"},l.a.createElement("strong",null,"Frameworks:")," Bootstrap, Materialize, Material UI, React"),l.a.createElement("p",{className:"resume-left"},l.a.createElement("strong",null,"Software:")," Tableau, Microsoft Office, Google Drive & Scripts, Adobe Illustrator & Photoshop, Figma"),l.a.createElement("p",{className:"resume-left"},l.a.createElement("strong",null,"Transferable Skills:")," Strong work ethic, optimistic attitude, attention to detail, public speaking, problem-solving, team player, communication skills"))),l.a.createElement("div",{className:"row flex"},l.a.createElement("div",{className:"flex f-vcenter f-right"},l.a.createElement("img",{className:"resume-img",src:"./assets/resume-laptop.png"})),l.a.createElement("div",{className:"section"},l.a.createElement("h5",null,"Applications Built"),l.a.createElement("p",null,l.a.createElement("strong",null,"Flipcause")," (",l.a.createElement("a",{className:"website-link",target:"_blank",href:"https://www.flipcause.com"},"flipcause.com"),")"),l.a.createElement("ul",{className:"resume-list"},l.a.createElement("li",null,"Revitalized HTML emails to display consistently across multiple devices and screen widths"),l.a.createElement("li",null,"Translated Figma designs into clean code that was intuitively responsive"),l.a.createElement("li",null,"Communicated effectively with team members distributed across the globe")),l.a.createElement("p",null,l.a.createElement("strong",null,"All Things Right & Relevant")," (",l.a.createElement("a",{className:"website-link",target:"_blank",href:"http://www.rrconsignments.org/"},"rrconsignments.org"),")"),l.a.createElement("ul",{className:"resume-list"},l.a.createElement("li",null,"Created a friendly user interface that is accessible for all age ranges"),l.a.createElement("li",null,'Created CSS "building-blocks" for ease of creation of new elements'),l.a.createElement("li",null,"Tailored technologies used for ease-of-use for current & future managers")))),l.a.createElement("div",{className:"row flex"},l.a.createElement("div",{className:"flex f-vcenter f-right"},l.a.createElement("img",{className:"resume-img",src:"./assets/resume-shaking-hands.png"})),l.a.createElement("div",{className:"section"},l.a.createElement("h5",null,"Work Experience"),l.a.createElement("p",{className:"resume-left"},l.a.createElement("strong",null,"Flipcause"),", Remote",l.a.createElement("br",null),l.a.createElement("i",null,"Frontend Web Developer, 2021-2022")),l.a.createElement("p",{className:"resume-left"},l.a.createElement("strong",null,"All Things Right & Relevant"),", Davis, CA",l.a.createElement("br",null),l.a.createElement("i",null,"Sales Associate, 2017 - 2021")))),l.a.createElement("div",{className:"row flex"},l.a.createElement("div",{className:"flex f-vcenter f-right"},l.a.createElement("img",{className:"resume-img",src:"./assets/resume-graduate-cap.png"})),l.a.createElement("div",{className:"section"},l.a.createElement("h5",null,"Education"),l.a.createElement("p",{className:"resume-left"},l.a.createElement("strong",null,"Google Data Analytics Professional Certificate"),l.a.createElement("br",null),l.a.createElement("i",null,"Google Career Certificates"),l.a.createElement("br",null),"Gained a deeper understanding of Data Analytics practices, SQL, Excel/Google Sheets, and R."),l.a.createElement("p",{className:"resume-left"},l.a.createElement("strong",null,"UC Davis Extension"),", Davis, CA",l.a.createElement("br",null),l.a.createElement("i",null,"Full Stack Web Development Program")),l.a.createElement("p",{className:"resume-left"},l.a.createElement("strong",null,"University of Puget Sound"),", Tacoma, WA",l.a.createElement("br",null),l.a.createElement("i",null,"B.S. in Computer Science"),l.a.createElement("br",null),"Minors in Mathematics and French. A member of Upsilon Pi Epsilon, Pi Mu Epsilon, and Phi Eta Sigma honor societies."))))},j=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("#slide-out");f.a.Sidenav.init(e,{})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"frame"},l.a.createElement("div",{className:"navigation"},l.a.createElement("div",{className:"page-header light-green darken-3 flex f-vcenter f-center"},l.a.createElement("h2",{id:"page-title",className:"flex f-vcenter f-center"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",element:"I Believe In The Power Of Nice"}),l.a.createElement(d.a,{path:"/resume",element:"A Lifetime of Learning"}),l.a.createElement(d.a,{path:"/projects",element:"Fun Little Things"}),l.a.createElement(d.a,{path:"/data",element:"So. Much. Data."}),l.a.createElement(d.a,{path:"/contact",element:"Where to Find Me"})))),l.a.createElement("div",{className:"navigation-sub light-green"},l.a.createElement(h.c,{to:"/",className:"item"},"About"),l.a.createElement(h.c,{to:"/resume",className:"item"},"Resume"),l.a.createElement(h.c,{to:"/data",className:"item"},"Data & Spreadsheets"),l.a.createElement(h.c,{to:"/contact",className:"item"},"Contact"),l.a.createElement("a",{"data-target":"slide-out",className:"sidenav-trigger"},"Menu"))),l.a.createElement("ul",{id:"slide-out",className:"sidenav"},l.a.createElement("li",null,l.a.createElement(h.c,{to:"/",className:"item"},"About")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/data",className:"item"},"Data & Spreadsheets")),l.a.createElement("li",null,l.a.createElement(h.c,{to:"/contact",className:"item"},"Contact"))),l.a.createElement("div",{className:"content"},l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",element:l.a.createElement(N,null)}),l.a.createElement(d.a,{exact:!0,path:"/projects",element:l.a.createElement(v,null)}),l.a.createElement(d.a,{path:"/data",element:l.a.createElement(b,null)}),l.a.createElement(d.a,{path:"/contact",element:l.a.createElement(C,null)}),l.a.createElement(d.a,{path:"/resume",element:l.a.createElement(S,null)})))))}}]),a}(n.Component),I=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,225)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),n(e),l(e),r(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h.a,{basename:""},l.a.createElement(j,null)))),I()},37:function(e,a,t){e.exports=t(224)},44:function(e,a,t){},47:function(e,a,t){}},[[37,3,2]]]);
//# sourceMappingURL=main.50d26818.chunk.js.map
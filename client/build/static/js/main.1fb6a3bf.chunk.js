(this["webpackJsonpbaby-darban-vote"]=this["webpackJsonpbaby-darban-vote"]||[]).push([[0],{57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(30),s=n.n(i),r=n(31),o=n(2),c=n(0),l=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"404 Page Not Found"}),Object(c.jsx)("h1",{children:Object(c.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})},d=n(6),u=n(7),b=n(9),j=n(8),h=n(20),m=n.n(h),O=function(){return m.a.get("/api/genders")},f=function(e){return m.a.post("/api/vote",e)},p=n(18),v=(n(57),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"options",value:function(){return p.a.addColorSet("genderShades",["#ADD8E6","#ffb6c1"]),{colorSet:"genderShades",backgroundColor:null,animationEnabled:!0,theme:"dark2",title:{text:"Guesses"},axisX:{title:"Gender",reversed:!0},axisY:{title:"Number Of Votes",includeZero:!0,labelFormatter:this.addSymbols},data:[{type:"bar",dataPoints:[{y:this.props.boys,label:"Boy"},{y:this.props.girls,label:"Girl"}]}]}}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"chart",children:Object(c.jsx)(p.b,{options:this.options(),boys:this.props.boys})})}},{key:"addSymbols",value:function(e){var t=["","K","M","B"],n=Math.max(Math.floor(Math.log(e.value)/Math.log(1e3)),0);n>t.length-1&&(n=t.length-1);var a=t[n];return p.a.formatNumber(e.value/Math.pow(1e3,n))+a}}]),n}(a.Component)),x=v,g=n(3),C=n(14),y=n(11),T=n.n(y),N=(n(59),3600),k=86400,E={isPlaying:!0,size:120,strokeWidth:6},S=function(e,t){return Object(c.jsxs)("div",{className:"time-wrapper",children:[Object(c.jsx)("div",{className:"time",children:t}),Object(c.jsx)("div",{children:e})]})},w=function(e){var t=T()(e.endTime).diff(T()(),"seconds"),n=Math.ceil(t/k)*k;return Object(c.jsxs)("div",{className:"circle-timer",children:[Object(c.jsx)(C.CountdownCircleTimer,Object(g.a)(Object(g.a)({},E),{},{colors:[["#7E2E84"]],duration:n,initialRemainingTime:t,children:function(e){var t=e.elapsedTime;return S("days",(n-t)/k|0)}})),Object(c.jsx)(C.CountdownCircleTimer,Object(g.a)(Object(g.a)({},E),{},{colors:[["#D14081"]],duration:k,initialRemainingTime:t%k,onComplete:function(e){return[t-e>N]},children:function(e){var t=e.elapsedTime;return S("hours",(k-t)%k/N|0)}})),Object(c.jsx)(C.CountdownCircleTimer,Object(g.a)(Object(g.a)({},E),{},{colors:[["#EF798A"]],duration:N,initialRemainingTime:t%N,onComplete:function(e){return[t-e>60]},children:function(e){var t=e.elapsedTime;return S("minutes",(N-t)%N/60|0)}})),Object(c.jsx)(C.CountdownCircleTimer,Object(g.a)(Object(g.a)({},E),{},{colors:[["#218380"]],duration:60,initialRemainingTime:t%60,onComplete:function(e){return[t-e>0]},children:function(e){var t=e.elapsedTime;return S("seconds",60-t|0)}}))]})},R=n(10),D=function(e){return Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",Object(g.a)({className:"form-control"},e))})},M=function(e){return Object(c.jsx)("button",Object(g.a)(Object(g.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success",children:e.children}))},V=(a.Component,n(60),n(61),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={author:"",gender:""},e.castVote=function(t){t.preventDefault(),e.state.author&&e.state.gender&&f({gender:e.state.gender,author:e.state.author}).then((function(t){return console.log("vote cast for "+e.state.author)})).catch((function(e){return console.log(e)}))},e.postCastedVote=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(R.a)({},a,i))},e.onCastBallot=function(t){e.castVote(t),e.props.voteCallback({ballotCast:!0}),t.preventDefault()},e}return Object(u.a)(n,[{key:"render",value:function(){var e,t;return Object(c.jsx)("div",{className:"container alert form-wrap",children:Object(c.jsx)("div",{className:"poll-question",children:Object(c.jsxs)("div",{className:"card-header",children:[Object(c.jsx)("h2",{children:"What gender do you think Baby Darban will be?"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("div",{className:"card-text",children:Object(c.jsx)("label",{className:"col-form-label mt-4",children:Object(c.jsx)(D,{value:this.state.author,onChange:this.postCastedVote,placeholder:"what's your name?",name:"author"})})}),Object(c.jsxs)("div",{onChange:this.postCastedVote.bind(this),children:[Object(c.jsx)("input",(e={type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios1",value:"option1"},Object(R.a)(e,"value","boy"),Object(R.a)(e,"name","gender"),e))," Boy",Object(c.jsx)("p",{}),Object(c.jsx)("input",(t={type:"radio",className:"form-check-input",name:"optionsRadios",id:"optionsRadios2",value:"option2"},Object(R.a)(t,"value","girl"),Object(R.a)(t,"name","gender"),t))," Girl"]}),Object(c.jsx)("div",{className:"card-text",children:Object(c.jsx)(M,{onClick:this.onCastBallot,children:"Cast Vote"})})]})]})})})}}]),n}(a.Component)),_=V,A=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"we're having baby pizza!"})})},B=(n(62),function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("div",{children:Object(c.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://calendar.google.com/event?action=TEMPLATE&tmeid=M2NmajN2bnNtZ2o4b2twMnZ0dnZudW1tZjQgbmVtYUBkYXJiYW4uZGV2&tmsrc=nema%40darban.dev",children:[Object(c.jsx)("p",{className:"footer-text",children:"Coming April 24, 2022!"}),Object(c.jsx)("p",{className:"footer-text",children:"Click to add to your Google Calendar"})]})})})}),P=n(21),G=(n(63),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={genders:[],girls:0,boys:0,timeLeft:1e3,gender:"",author:"",ballotCast:!1,endTime:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENDTIME:"2021-11-18 16:00:00"}).ENDTIME||"2021-11-21 17:00:00"},e.loadResults=function(){O().then((function(t){return e.setState({genders:t.data})})).catch((function(e){return console.log(e)})).then((function(t){return e.breakDownGender()})),(new P.a).get("ballotCast")&&e.setState({ballotCast:!0})},e.handleCastedVote=function(t){e.setState(t),e.loadResults(),(new P.a).set("ballotCast",{path:"/"})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadResults(),this.getTimeLeft()}},{key:"breakDownGender",value:function(){var e=this.state.genders;for(var t in e)"girl"===e[t].gender&&this.setState((function(e){return{girls:e.girls+1}})),"boy"===e[t].gender&&this.setState((function(e){return{boys:e.boys+1}}))}},{key:"getTimeLeft",value:function(){var e=T()(this.state.endTime).diff(T()(),"seconds");this.setState({timeLeft:e})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[this.state.timeLeft<=0?Object(c.jsx)("div",{children:this.state.ballotCast?Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{boys:this.state.boys,girls:this.state.girls}),Object(c.jsx)(A,{})]}):Object(c.jsx)(_,{voteCallback:this.handleCastedVote})}):Object(c.jsxs)("div",{children:[Object(c.jsx)(w,{endTime:this.state.endTime}),this.state.ballotCast?Object(c.jsx)(x,{boys:this.state.boys,girls:this.state.girls}):Object(c.jsx)(_,{voteCallback:this.handleCastedVote})]}),Object(c.jsx)("div",{children:Object(c.jsx)(B,{})})]})}}]),n}(a.Component)),L=G,W=document.getElementById("root");s.a.render(Object(c.jsx)(r.a,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/",element:Object(c.jsx)(L,{})}),Object(c.jsx)(o.a,{path:"*",element:Object(c.jsx)(l,{})})]})}),W)}},[[64,1,2]]]);
//# sourceMappingURL=main.1fb6a3bf.chunk.js.map
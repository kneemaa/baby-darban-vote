(this["webpackJsonpbaby-darban-vote"]=this["webpackJsonpbaby-darban-vote"]||[]).push([[0],{30:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(31),r=n.n(i),s=n(32),o=n(2),c=n(0),l=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"404 Page Not Found"}),Object(c.jsx)("h1",{children:Object(c.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})},d=n(6),u=n(7),b=n(9),j=n(8),h=n(20),m=n.n(h),O=function(){return m.a.get("/api/genders")},f=function(e){return m.a.post("/api/vote",e)},g=n(18),v=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"options",value:function(){return g.a.addColorSet("genderShades",["#ADD8E6","#ffb6c1"]),{colorSet:"genderShades",animationEnabled:!0,theme:"light2",title:{text:"Guesses"},axisX:{title:"Gender",reversed:!0},axisY:{title:"Number Of Votes",includeZero:!0,labelFormatter:this.addSymbols},data:[{type:"bar",dataPoints:[{y:this.props.boys,label:"Boy"},{y:this.props.girls,label:"Girl"}]}]}}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(g.b,{options:this.options(),boys:this.props.boys})})}},{key:"addSymbols",value:function(e){var t=["","K","M","B"],n=Math.max(Math.floor(Math.log(e.value)/Math.log(1e3)),0);n>t.length-1&&(n=t.length-1);var a=t[n];return g.a.formatNumber(e.value/Math.pow(1e3,n))+a}}]),n}(a.Component),p=v,x=n(3),C=n(13),y=n(10),T=n.n(y),S=(n(59),3600),E=86400,w={isPlaying:!0,size:120,strokeWidth:6},k=function(e,t){return Object(c.jsxs)("div",{className:"time-wrapper",children:[Object(c.jsx)("div",{className:"time",children:t}),Object(c.jsx)("div",{children:e})]})},N=function(e){var t=T()(e.endTime).diff(T()(),"seconds"),n=Math.ceil(t/E)*E;return Object(c.jsxs)("div",{className:"CircleTimer",children:[Object(c.jsx)(C.CountdownCircleTimer,Object(x.a)(Object(x.a)({},w),{},{colors:[["#7E2E84"]],duration:n,initialRemainingTime:t,children:function(e){var t=e.elapsedTime;return k("days",(n-t)/E|0)}})),Object(c.jsx)(C.CountdownCircleTimer,Object(x.a)(Object(x.a)({},w),{},{colors:[["#D14081"]],duration:E,initialRemainingTime:t%E,onComplete:function(e){return[t-e>S]},children:function(e){var t=e.elapsedTime;return k("hours",(E-t)%E/S|0)}})),Object(c.jsx)(C.CountdownCircleTimer,Object(x.a)(Object(x.a)({},w),{},{colors:[["#EF798A"]],duration:S,initialRemainingTime:t%S,onComplete:function(e){return[t-e>60]},children:function(e){var t=e.elapsedTime;return k("minutes",(S-t)%S/60|0)}})),Object(c.jsx)(C.CountdownCircleTimer,Object(x.a)(Object(x.a)({},w),{},{colors:[["#218380"]],duration:60,initialRemainingTime:t%60,onComplete:function(e){return[t-e>0]},children:function(e){var t=e.elapsedTime;return k("seconds",60-t|0)}}))]})},D=n(16),_=function(e){return Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",Object(x.a)({className:"form-control"},e))})},M=function(e){return Object(c.jsx)("button",Object(x.a)(Object(x.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success",children:e.children}))},R=(a.Component,n(30),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={author:"",gender:""},e.castVote=function(t){t.preventDefault(),e.state.author&&e.state.gender&&f({gender:e.state.gender,author:e.state.author}).then((function(t){return console.log("vote cast for "+e.state.author)})).catch((function(e){return console.log(e)}))},e.postCastedVote=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(D.a)({},a,i))},e.onCastBallot=function(t){e.castVote(t),e.props.voteCallback({ballotCast:!0}),t.preventDefault()},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"PollQuestion",children:[Object(c.jsx)("p",{color:"blue",children:" I'm the poll QUESTION section"}),Object(c.jsxs)("form",{children:[Object(c.jsx)(_,{value:this.state.author,onChange:this.postCastedVote,placeholder:"what's your name?",name:"author"}),Object(c.jsx)(M,{onClick:this.onCastBallot,children:"Cast Vote"}),Object(c.jsxs)("div",{onChange:this.postCastedVote.bind(this),children:[Object(c.jsx)("input",{type:"radio",value:"boy",name:"gender"})," Boy",Object(c.jsx)("input",{type:"radio",value:"girl",name:"gender"})," Girl"]})]})]})})}}]),n}(a.Component)),V=R,A=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"we're having baby pizza!"}),Object(c.jsxs)("a",{target:"_blank",href:"https://calendar.google.com/event?action=TEMPLATE&tmeid=M2NmajN2bnNtZ2o4b2twMnZ0dnZudW1tZjQgbmVtYUBkYXJiYW4uZGV2&tmsrc=nema%40darban.dev",children:[Object(c.jsx)("img",{border:"0",src:"https://www.google.com/calendar/images/ext/gc_button1_en.gif"}),"Save the Date! Add to Google Calendar"]})]})},P=n(21),B=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={genders:[],girls:0,boys:0,timeLeft:1e3,gender:"",author:"",ballotCast:!1,endTime:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENDTIME:"2021-11-18 16:00:00"}).ENDTIME||"2021-11-21 17:00:00"},e.loadResults=function(){O().then((function(t){return e.setState({genders:t.data})})).catch((function(e){return console.log(e)})).then((function(t){return e.breakDownGender()})),(new P.a).get("ballotCast")&&e.setState({ballotCast:!0})},e.handleCastedVote=function(t){e.setState(t),e.loadResults(),(new P.a).set("ballotCast",{path:"/"})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadResults(),this.getTimeLeft()}},{key:"breakDownGender",value:function(){var e=this.state.genders;for(var t in e)"girl"===e[t].gender&&this.setState((function(e){return{girls:e.girls+1}})),"boy"===e[t].gender&&this.setState((function(e){return{boys:e.boys+1}}))}},{key:"getTimeLeft",value:function(){var e=T()(this.state.endTime).diff(T()(),"seconds");this.setState({timeLeft:e})}},{key:"render",value:function(){return Object(c.jsx)("div",{children:this.state.timeLeft<=0?Object(c.jsx)("div",{children:this.state.ballotCast?Object(c.jsxs)("div",{children:[Object(c.jsx)(p,{boys:this.state.boys,girls:this.state.girls}),Object(c.jsx)(A,{})]}):Object(c.jsx)(V,{voteCallback:this.handleCastedVote})}):Object(c.jsxs)("div",{children:[Object(c.jsx)(N,{endTime:this.state.endTime}),this.state.ballotCast?Object(c.jsx)(p,{boys:this.state.boys,girls:this.state.girls}):Object(c.jsx)(V,{voteCallback:this.handleCastedVote})]})})}}]),n}(a.Component),G=B,L=document.getElementById("root");r.a.render(Object(c.jsx)(s.a,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/",element:Object(c.jsx)(G,{})}),Object(c.jsx)(o.a,{path:"*",element:Object(c.jsx)(l,{})})]})}),L)}},[[60,1,2]]]);
//# sourceMappingURL=main.b6edbafc.chunk.js.map
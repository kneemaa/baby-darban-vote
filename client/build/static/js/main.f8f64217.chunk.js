(this["webpackJsonpbaby-darban-vote"]=this["webpackJsonpbaby-darban-vote"]||[]).push([[0],{31:function(e,t,a){e.exports=a(70)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),o=a.n(r),s=a(30),c=a(1),i=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))},m=a(5),u=a(6),d=a(8),h=a(7),E=a(11),v=a.n(E),b=function(){return v.a.get("/api/genders")},f=function(e){return v.a.post("/api/vote",e)},g=function(){return v.a.get("/api/reveal")},p=function(e){return v.a.get("/api/winners/"+e)},N=a(15),y=(a(59),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"options",value:function(){return N.a.addColorSet("genderShades",["#ADD8E6","#ffb6c1"]),{colorSet:"genderShades",backgroundColor:null,animationEnabled:!0,theme:"dark2",title:{text:"Guesses"},axisX:{reversed:!0},axisY:{includeZero:!0,labelFormatter:this.addSymbols},data:[{type:"bar",dataPoints:[{y:this.props.boys,label:"Boy"},{y:this.props.girls,label:"Girl"}]}]}}},{key:"render",value:function(){return l.a.createElement("div",{className:"chart"},l.a.createElement(N.b,{options:this.options(),boys:this.props.boys}))}},{key:"addSymbols",value:function(e){var t=["","K","M","B"],a=Math.max(Math.floor(Math.log(e.value)/Math.log(1e3)),0);a>t.length-1&&(a=t.length-1);var n=t[a];return N.a.formatNumber(e.value/Math.pow(1e3,a))+n}}]),a}(n.Component)),w=a(28),C=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))},k=function(e){return l.a.createElement("button",Object.assign({},e,{className:"btn btn-success"}),e.children)},S=(n.Component,a(60),a(61),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={author:"",gender:""},e.castVote=function(t){t.preventDefault(),e.state.author&&e.state.gender&&f({gender:e.state.gender,author:e.state.author}).then((function(t){return console.log("vote cast for "+e.state.author)})).catch((function(e){return console.log(e)}))},e.postCastedVote=function(t){var a=t.target,n=a.name,l=a.value;e.setState(Object(w.a)({},n,l))},e.onCastBallot=function(t){e.castVote(t),e.props.voteCallback({ballotCast:!0}),t.preventDefault()},e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"grid-card"},l.a.createElement("div",{className:"container alert form-wrap"},l.a.createElement("div",{className:"poll-question"},l.a.createElement("h2",null,"What gender do you think Baby Darban will be?"),l.a.createElement("form",null,l.a.createElement("label",{className:"col-form-label mt-2"},l.a.createElement(C,{value:this.state.author,onChange:this.postCastedVote,placeholder:"what's your name?",name:"author"})),l.a.createElement("div",{onChange:this.postCastedVote.bind(this)},l.a.createElement("input",{type:"radio",className:"form-check-input",id:"optionsRadios1",value:"boy",name:"gender"})," Boy",l.a.createElement("p",null),l.a.createElement("input",{type:"radio",className:"form-check-input",id:"optionsRadios2",value:"girl",name:"gender"})," Girl"),l.a.createElement(k,{onClick:this.onCastBallot},"Cast Vote")))))}}]),a}(n.Component)),O=a(29),j=(a(64),function(e){var t=function(){return l.a.createElement("span",null,"You are good to go!")};return l.a.createElement(O.a,{daysInHours:!0,date:Date.now()+e.timeLeft,renderer:function(e){var a=e.days,n=e.hours,r=e.minutes,o=e.seconds;return e.completed?l.a.createElement(t,null):l.a.createElement("div",{className:"count-down-timer container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 countdown-title"},l.a.createElement("p",{className:"countdown-title"}," Revealing the Gender in ... "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3 col-sm-1 time-labels"},l.a.createElement("p",{className:"count-down-label days"},"Days")),l.a.createElement("div",{className:"col-lg-3 col-sm-1 time-labels"},l.a.createElement("p",{className:"count-down-label hours"},"Hours")),l.a.createElement("div",{className:"col-lg-3 col-sm-1 time-labels"},l.a.createElement("p",{className:"count-down-label minutes"},"Minutes")),l.a.createElement("div",{className:"col-lg-3 col-sm-1 time-labels"},l.a.createElement("p",{className:"count-down-label seconds"},"Seconds"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3 col-sm-3 time-values"},l.a.createElement("p",{className:"count-down-number"},a)),l.a.createElement("div",{className:"col-lg-3 col-sm-3 time-values"},l.a.createElement("p",{className:"count-down-number"},n)),l.a.createElement("div",{className:"col-lg-3 col-sm-3 time-values"},l.a.createElement("p",{className:"count-down-number"},r)),l.a.createElement("div",{className:"col-lg-3 col-sm-3 time-values"},l.a.createElement("p",{className:"count-down-number"},o))))}})}),D=(a(65),function(e){return l.a.createElement("div",{className:"answer"},e.reveal,"!")}),T=(a(66),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("h4",null,"Arriving April 24, 2022!"),l.a.createElement("button",{className:"btn btn-lg btn-info calendar-save",type:"button"},l.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://calendar.google.com/event?action=TEMPLATE&tmeid=NWVwMGZsaWhwaTJhbnRyYWM1NWdvYWYwcjcgY19sMThldWZndTBudGptbDM2ZGgzZTIxbDJia0Bn&tmsrc=c_l18eufgu0ntjml36dh3e21l2bk%40group.calendar.google.com"},"Click to add our due date to your Google Calendar")))}),M=(a(67),function(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}),L=function(e){return l.a.createElement("li",{className:"list-group-item"},e.children)},W=a(16),V=a.n(W),_=a(17),B=(a(69),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={genders:[],winners:[],girls:0,boys:0,timeLeft:1e3,gender:"",author:"",reveal:"",ballotCast:!1,endTime:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).ENDTIME||"2021-11-21 17:00:00"},e.loadResults=function(){b().then((function(t){return e.setState({genders:t.data})})).catch((function(e){return console.log(e)})).then((function(t){return e.breakDownGender()})),(new _.a).get("ballotCast")&&e.setState({ballotCast:!0}),e.state.timeLeft>=0&&g().then((function(t){e.setState({reveal:t.data.result}),p(t.data.result).then((function(t){return e.setState({winners:t.data})})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},e.handleCastedVote=function(t){e.setState(t),e.loadResults(),(new _.a).set("ballotCast",{path:"/"})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.loadResults(),this.getTimeLeft()}},{key:"breakDownGender",value:function(){var e=this.state.genders;for(var t in e)"girl"===e[t].gender&&this.setState((function(e){return{girls:e.girls+1}})),"boy"===e[t].gender&&this.setState((function(e){return{boys:e.boys+1}}))}},{key:"getTimeLeft",value:function(){var e=V()(this.state.endTime).diff(V()(),"seconds");this.setState({timeLeft:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 side-col"}),l.a.createElement("div",{className:"col-sm-4 main-body"},this.state.timeLeft<=0?l.a.createElement("div",null,this.state.ballotCast?l.a.createElement("div",null,l.a.createElement(D,{reveal:this.state.reveal}),l.a.createElement("span",null,"Who guessed right?"),l.a.createElement(M,null,this.state.winners.map((function(e){return l.a.createElement(L,{key:e._id},l.a.createElement("strong",null,e.author))})))):l.a.createElement(S,{voteCallback:this.handleCastedVote})):l.a.createElement("div",null,l.a.createElement(j,{timeLeft:1e3*this.state.timeLeft}),this.state.ballotCast?l.a.createElement(y,{boys:this.state.boys,girls:this.state.girls}):l.a.createElement(S,{voteCallback:this.handleCastedVote}))),l.a.createElement("div",{className:"col-sm-4 side-col"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(T,null))))}}]),a}(n.Component)),G=document.getElementById("root");o.a.render(l.a.createElement(s.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",element:l.a.createElement(B,null)}),l.a.createElement(c.a,{path:"*",element:l.a.createElement(i,null)}))),G)}},[[31,1,2]]]);
//# sourceMappingURL=main.f8f64217.chunk.js.map
(this.webpackJsonppennamechooser=this.webpackJsonppennamechooser||[]).push([[0],{58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(10),l=t.n(r),s=t(14),o=t(2);function i(){return Object(o.jsxs)(s.a,{bg:"info",variant:"dark",children:[Object(o.jsxs)(s.a.Brand,{href:"#",className:"title",children:[Object(o.jsx)("img",{src:"../logo.svg",width:"30",height:"23",className:"d-inline-block align-bottom",alt:"Pen Name Chooser logo"})," Pen Name Chooser"]}),Object(o.jsx)(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"})]})}var u=t(18),d=t.n(u),b=t(28),j=t(7),h=t(8),m=t.n(h),O=t(12),v=t(29);function f(){var e=Object(c.useState)(""),a=Object(j.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)("Go"),l=Object(j.a)(r,2),s=l[0],i=l[1],u=Object(c.useState)("default"),h=Object(j.a)(u,2),f=h[0],x=h[1],p=Object(c.useState)("default"),N=Object(j.a)(p,2),g=N[0],A=N[1],E=Object(c.useState)("default"),G=Object(j.a)(E,2),S=G[0],C=G[1],w=Object(c.useState)("default"),T=Object(j.a)(w,2),k=T[0],y=T[1],P=Object(c.useState)("default"),B=Object(j.a)(P,2),D=B[0],J=B[1],L=Object(c.useState)("default"),M=Object(j.a)(L,2),H=M[0],I=M[1],q=Object(c.useState)("default"),z=Object(j.a)(q,2),F=z[0],K=z[1],Q=Object(c.useState)("default"),R=Object(j.a)(Q,2),U=R[0],V=R[1],W=Object(c.useState)("default"),X=Object(j.a)(W,2),Y=X[0],Z=X[1],$=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),i("Processing ..."),x("default"),A("default"),C("default"),y("default"),J("default"),I("default"),K("default"),V("default"),Z("default"),e.next=13,m()({method:"GET",url:"".concat("http://localhost:5000/api","/medium?username=").concat(t)}).then((function(e){e.data.error?x("error"):e.data.usernameAvailable?x("available"):x("unavailable")})).catch((function(e){x("error")}));case 13:return e.next=15,m()({method:"GET",url:"".concat("http://localhost:5000/api","/atcoder?username=").concat(t)}).then((function(e){e.data.error?A("error"):e.data.usernameAvailable?A("available"):A("unavailable")})).catch((function(e){A("error")}));case 15:return e.next=17,m()({method:"GET",url:"".concat("http://localhost:5000/api","/codechef?username=").concat(t)}).then((function(e){e.data.error?C("error"):e.data.usernameAvailable?C("available"):C("unavailable")})).catch((function(e){C("error")}));case 17:return e.next=19,m()({method:"GET",url:"".concat("http://localhost:5000/api","/gitlab?username=").concat(t)}).then((function(e){e.data.error?y("error"):e.data.usernameAvailable?y("available"):y("unavailable")})).catch((function(e){y("error")}));case 19:return e.next=21,m()({method:"GET",url:"".concat("http://localhost:5000/api","/github?username=").concat(t)}).then((function(e){e.data.error?J("error"):e.data.usernameAvailable?J("available"):J("unavailable")})).catch((function(e){J("error")}));case 21:return e.next=23,m()({method:"GET",url:"".concat("http://localhost:5000/api","/codeforces?username=").concat(t)}).then((function(e){e.data.error?I("error"):e.data.usernameAvailable?I("available"):I("unavailable")})).catch((function(e){I("error")}));case 23:return e.next=25,m()({method:"GET",url:"".concat("http://localhost:5000/api","/hackerearth?username=").concat(t)}).then((function(e){e.data.error?K("error"):e.data.usernameAvailable?K("available"):K("unavailable")})).catch((function(e){K("error")}));case 25:return e.next=27,m()({method:"GET",url:"".concat("http://localhost:5000/api","/a2oj?username=").concat(t)}).then((function(e){e.data.error?V("error"):e.data.usernameAvailable?V("available"):V("unavailable")})).catch((function(e){V("error")}));case 27:return e.next=29,m()({method:"GET",url:"".concat("http://localhost:5000/api","/leetcode?username=").concat(t)}).then((function(e){e.data.error?Z("error"):e.data.usernameAvailable?Z("available"):Z("unavailable")})).catch((function(e){Z("error")}));case 29:i("Go");case 30:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"row m-0",children:Object(o.jsxs)("div",{className:"col-md-6 mx-auto my-2 form-body",children:[Object(o.jsx)("div",{className:"mt-2",children:Object(o.jsxs)(O.a,{children:[Object(o.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(o.jsx)(O.a.Label,{children:Object(o.jsx)("h4",{className:"title",children:"Pen Name"})}),Object(o.jsx)(O.a.Control,{type:"text",placeholder:"Enter your pen name",onChange:function(e){n(e.target.value)},value:t})]}),Object(o.jsx)(v.a,{variant:"primary",type:"submit",onClick:$,children:s})]})}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("div",{className:f,children:"Medium"}),Object(o.jsx)("div",{className:g,children:"AtCoder"}),Object(o.jsx)("div",{className:S,children:"CodeChef"}),Object(o.jsx)("div",{className:k,children:"GitLab"}),Object(o.jsx)("div",{className:D,children:"GitHub"}),Object(o.jsx)("div",{className:H,children:"Codeforces"}),Object(o.jsx)("div",{className:F,children:"HackerEarth"}),Object(o.jsx)("div",{className:U,children:"A\xb2 Online Judge"}),Object(o.jsx)("div",{className:Y,children:"LeetCode"})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"legend-default inline"}),Object(o.jsx)("span",{children:" Default"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"legend-available inline"}),Object(o.jsx)("span",{children:" Pen name is available to choose "})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"legend-unavailable inline"}),Object(o.jsx)("span",{children:" Pen name is not available to choose"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"legend-error inline"}),Object(o.jsx)("span",{children:" Error occured while processing"})]})]})]})})}function x(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("p",{className:"text-center m-auto",children:["Made with ",Object(o.jsx)("span",{id:"heart",children:"\u2665"})," by ",Object(o.jsx)("a",{href:"https://github.com/Aman-Codes",id:"link",children:"Aman Dwivedi"})]})})}t(57),t(58);var p=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{}),Object(o.jsx)(f,{}),Object(o.jsx)(x,{})]})};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.11a32839.chunk.js.map
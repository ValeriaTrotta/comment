(this.webpackJsonpcomment=this.webpackJsonpcomment||[]).push([[0],{209:function(e,t,a){},223:function(e,t,a){e.exports=a.p+"static/media/topcha.a05c59fa.png"},224:function(e,t,a){e.exports=a.p+"static/media/nameB.d625eb3d.png"},225:function(e,t,a){e.exports=a.p+"static/media/ayc.41b45384.png"},229:function(e,t,a){e.exports=a(432)},234:function(e,t,a){},235:function(e,t,a){},240:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/logoB.272810f9.png"},391:function(e,t,a){},402:function(e,t,a){},432:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(137),o=a.n(r),c=(a(234),a(22)),i=a(23),s=a(25),m=a(24),u=a(88),d=a(5),h=(a(235),a(30)),g=a.n(h),f=function(e){var t=e.channel;return l.a.createElement("div",null,l.a.createElement("div",{className:"max-w-sm w-full lg:max-w-full lg:flex",style:{width:"90%",margin:"auto",marginBottom:"2rem"}},l.a.createElement("div",{className:"h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"},l.a.createElement("img",{src:g.a,alt:"Logo"})),l.a.createElement("div",{className:"border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal",style:{width:"100%"}},l.a.createElement("div",{className:"mb-8"},l.a.createElement("div",{className:"text-gray-800 font-bold text-xl mb-2",style:{fontFamily:"Avenir",textTransform:"capitalize"}},t.title),l.a.createElement("p",{className:"text-gray-600 text-base",style:{fontFamily:"Avenir"}},t.description)),l.a.createElement("div",{className:"flex items-center"},l.a.createElement("img",{className:"w-10 h-10 rounded-full mr-4",src:g.a,alt:"Logo"}),l.a.createElement("div",{className:"text-sm"},l.a.createElement("p",{className:"text-gray-900 leading-none",style:{fontFamily:"Avenir"}},t.authorName,t.authorLastName),l.a.createElement("p",{className:"text-gray-500",style:{fontFamily:"Avenir"}},"Date"))))))},p=function(e){var t=e.channels;return l.a.createElement("div",{className:"channel-list section"},t&&t.map((function(e){return l.a.createElement(u.b,{to:"/channel/"+e.id,key:e.id},l.a.createElement(f,{channel:e}))})))},b=(a(240),a(15)),E=a(26),v=a(16),y=a(223),w=a.n(y),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.channels;return l.a.createElement("div",{className:"containerdash"},l.a.createElement("div",{className:"title"},l.a.createElement("img",{src:w.a,alt:"topc"})),l.a.createElement("div",{className:"topcha"},l.a.createElement(p,{channels:e})))}}]),a}(n.Component),x=Object(v.d)(Object(b.b)((function(e){return console.log(e),{channels:e.firestore.ordered.channels}})),Object(E.firestoreConnect)([{collection:"channels"}]))(N);function C(){return l.a.createElement("div",null,l.a.createElement("div",{className:"page"},l.a.createElement("div",{className:"banner"},l.a.createElement("div",{id:"left"}),l.a.createElement("div",{id:"center"},l.a.createElement("h4",null,"The place where you can comment about"),l.a.createElement("h5",null,"anything")),l.a.createElement("div",{id:"right"})),l.a.createElement(x,null)))}var O=a(142),j=(a(391),a(224)),A=a.n(j),k=a(91),S=a.n(k),R=a(28),F=(a(209),a(18)),L=a(29),I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",lastName:"",email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"window"},l.a.createElement("div",{className:"modal_title"},l.a.createElement("h1",null,"Join Comment"),l.a.createElement("h2",null,"Sign up to start commenting")),l.a.createElement("div",{className:"modal_body"},l.a.createElement("div",{id:"inputcontainer",className:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"},l.a.createElement("i",null,l.a.createElement(L.a,null)),l.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange,placeholder:"Name",style:{fontFamily:"Avenir"}})),l.a.createElement("div",{id:"inputcontainer",className:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"},l.a.createElement("i",null,l.a.createElement(L.b,null)),l.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange,placeholder:"Last Name",style:{fontFamily:"Avenir"}})),l.a.createElement("div",{id:"inputcontainer",className:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"},l.a.createElement("i",null,l.a.createElement(F.c,null)),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,placeholder:"Email",style:{fontFamily:"Avenir"}})),l.a.createElement("div",{id:"inputcontainer",className:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"},l.a.createElement("i",null,l.a.createElement(F.b,null)),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange,placeholder:"Password",style:{fontFamily:"Avenir"}})),l.a.createElement("button",{id:"submit",onClick:this.handleSubmit},"SIGN UP")),l.a.createElement("div",{className:"modal_footer"},l.a.createElement("h3",null,"Already Registered?")))}}]),a}(n.Component),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.logIn(e.state)},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"window"},l.a.createElement("div",{className:"modal_title"},l.a.createElement("h1",null,"Welcome Back"),l.a.createElement("h2",null,"Log in to keep commenting")),l.a.createElement("div",{className:"modal_body"},l.a.createElement("div",{id:"inputcontainer",className:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"},l.a.createElement("i",null,l.a.createElement(F.c,null)),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,placeholder:"Email",style:{fontFamily:"Avenir"}})),l.a.createElement("div",{id:"inputcontainer",className:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"},l.a.createElement("i",null,l.a.createElement(F.b,null)),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange,placeholder:"Password",style:{fontFamily:"Avenir"}})),l.a.createElement("button",{id:"submit",onClick:this.handleSubmit},"LOG IN")),l.a.createElement("div",{className:"modal_footer"},l.a.createElement("h3",null,"Don't have an account?")))}}]),a}(n.Component),T=Object(b.b)((function(e){return{authError:e.auth.authError}}),(function(e){return{logIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(_);a(210);S.a.setAppElement("#root");var U=Object(b.b)((function(e){return console.log(e),{}}))((function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(!1),i=Object(O.a)(c,2),s=i[0],m=i[1];function u(){o(!1)}function d(){o(!0)}function h(){m(!1)}function f(){m(!0)}return l.a.createElement("div",{className:"bar"},l.a.createElement("div",{className:"brand"},l.a.createElement("img",{src:g.a,alt:"Logo",className:"logo"}),l.a.createElement("img",{src:A.a,alt:"Name",className:"name"})),l.a.createElement("div",{className:"buttons"},l.a.createElement("div",null,l.a.createElement("button",{className:"textbut",onClick:f},"LOG IN"),l.a.createElement("button",{className:"iconbut",onClick:f},l.a.createElement(L.c,null)),l.a.createElement(S.a,{className:"content",overlayClassName:"overlay",isOpen:s,onRequestClose:h},l.a.createElement("button",{className:"close",onClick:h},l.a.createElement(F.a,null)),l.a.createElement(T,null),l.a.createElement("div",{className:"butdown"},l.a.createElement("button",{id:"change",onClick:function(){h(),d()}},"Sign Up"))),l.a.createElement("button",{className:"textbut",onClick:d},"SIGN UP"),l.a.createElement("button",{className:"iconbut",onClick:d},l.a.createElement(L.d,null)),l.a.createElement(S.a,{className:"content",overlayClassName:"overlay",isOpen:r,onRequestClose:u},l.a.createElement("button",{className:"close",onClick:u},l.a.createElement(F.a,null)),l.a.createElement(I,null),l.a.createElement("div",{className:"butdown"},l.a.createElement("button",{id:"change",onClick:function(){u(),f()}},"Log In"))))))})),D=(a(402),a(225)),G=a.n(D),W=Object(v.d)(Object(b.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.channels;return{channel:n?n[a]:null}})),Object(E.firestoreConnect)([{collection:"channels"}]))((function(e){var t=e.channel;return t?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"max-w-sm w-full lg:max-w-full lg:flex",style:{width:"90%"}},l.a.createElement("div",{className:"h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"},l.a.createElement("img",{src:g.a,alt:"Logo"})),l.a.createElement("div",{className:"border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal",style:{width:"100%"}},l.a.createElement("div",{className:"mb-8"},l.a.createElement("div",{className:"text-gray-800 font-bold text-xl mb-2",style:{fontFamily:"Avenir",textTransform:"capitalize"}},t.title),l.a.createElement("p",{className:"text-gray-600 text-base",style:{fontFamily:"Avenir"}},t.description)),l.a.createElement("div",{className:"flex items-center"},l.a.createElement("img",{className:"w-10 h-10 rounded-full mr-4",src:g.a,alt:"Logo"}),l.a.createElement("div",{className:"text-sm"},l.a.createElement("p",{className:"text-gray-900 leading-none",style:{fontFamily:"Avenir"}},t.authorName,t.authorLastName),l.a.createElement("p",{className:"text-gray-500",style:{fontFamily:"Avenir"}},"Date"))))),l.a.createElement("div",{className:"ban"},l.a.createElement("img",{src:G.a,alt:"addcom"})),l.a.createElement("div",{className:"texthere",style:{height:"min-content",width:"fit-content"}},l.a.createElement("div",{class:"flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg",style:{margin:"0",width:"fit-content"}},l.a.createElement("form",{id:"forma",class:"w-full max-w-xl bg-white rounded-lg px-4 pt-2"},l.a.createElement("div",{class:"flex flex-wrap -mx-3 mb-6"},l.a.createElement("div",{class:"w-full md:w-full px-3 mb-2 mt-2"},l.a.createElement("textarea",{class:"bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white",name:"body",placeholder:"Type Here",style:{fontFamily:"Avenir"},required:!0})),l.a.createElement("div",{class:"w-full md:w-full flex items-start md:w-full px-3"},l.a.createElement("div",{class:"-mr-1"},l.a.createElement("input",{type:"submit",id:"postcomment",class:"bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100",value:"Post Comment"})))))))):l.a.createElement("div",{className:"container center"},l.a.createElement("p",null,"Loading project..."))})),P=a(226),B=a(227),H=a(31),z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",description:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createChannel(e.state),e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"window",style:{marginTop:"60px"}},l.a.createElement("div",{className:"modal_title"},l.a.createElement("h1",null,"New Channel"),l.a.createElement("h2",null,"Share your ideas")),l.a.createElement("div",{className:"modal_body"},l.a.createElement("div",{id:"inputcontainer",className:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"},l.a.createElement("i",null,l.a.createElement(P.a,null)),l.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange,placeholder:"Title",style:{fontFamily:"Avenir"}})),l.a.createElement("div",{id:"inputcontainer",className:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal",style:{alignItems:"start"}},l.a.createElement("i",null,l.a.createElement(B.a,null)),l.a.createElement("textarea",{id:"description",onChange:this.handleChange,placeholder:"Description",style:{fontFamily:"Avenir"}})),l.a.createElement("button",{id:"submit",onClick:this.handleSubmit},"CREATE")))}}]),a}(n.Component),q=Object(b.b)(null,(function(e){return{createChannel:function(t){return e(function(e){return function(t,a,n){(0,n.getFirestore)().collection("channels").add(Object(H.a)(Object(H.a)({},e),{},{authorName:"Val",authorLastName:"Trotta",authorId:12345,createdAt:new Date})).then((function(){t({type:"CREATE_CHANNEL_SUCCESS"})})).catch((function(e){t({type:"CREATE_CHANNEL_ERROR"},e)}))}}(t))}}}))(z),J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(U,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:C}),l.a.createElement(d.a,{exact:!0,path:"/channel/:id",component:W}),l.a.createElement(d.a,{exact:!0,path:"/create",component:q}))))}}]),a}(n.Component),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Q(t,e)}))}}function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V={authError:null},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(H.a)(Object(H.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(H.a)(Object(H.a)({},e),{},{authError:null});case"LOGOUT_SUCCESS":return console.log("logout success"),e;default:return e}},$={},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CHANNEL_SUCCESS":return console.log("created channel success"),e;case"CREATE_CHANNEL_ERROR":return console.log("create channel error"),e;default:return e}},Z=a(59),ee=Object(v.c)({auth:X,channel:Y,firestore:Z.firestoreReducer,firebase:E.firebaseReducer}),te=a(228),ae=a(141),ne=a.n(ae);a(429);ne.a.initializeApp({apiKey:"AIzaSyDGECmmAxnjqkOkv3TadWmwt_Ei4siFXtQ",authDomain:"comment-ef775.firebaseapp.com",databaseURL:"https://comment-ef775.firebaseio.com",projectId:"comment-ef775",storageBucket:"comment-ef775.appspot.com",messagingSenderId:"765779605868",appId:"1:765779605868:web:ac89050cd766d8f43c9b49",measurementId:"G-MPRC8D9NH9"});var le=ne.a,re=Object(v.e)(ee,Object(v.d)(Object(v.a)(te.a.withExtraArgument({getFirebase:E.getFirebase,getFirestore:Z.getFirestore})),Object(E.reactReduxFirebase)(le),Object(E.reactReduxFirebase)(le,{attachAuthIsReady:!0}),Object(Z.reduxFirestore)(le)));re.firebaseAuthIsReady.then((function(){o.a.render(l.a.createElement(b.a,{store:re},l.a.createElement(J,null)),document.getElementById("root")),M()}))}},[[229,1,2]]]);
//# sourceMappingURL=main.e3c02de4.chunk.js.map
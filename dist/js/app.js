(function(t){function e(e){for(var n,r,s=e[0],d=e[1],l=e[2],p=0,u=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);c&&c(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var d=a[s];0!==o[d]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=d;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"metabox-holder",attrs:{id:"wpkanban"}},[a("div",{staticClass:"postbox-container"},[a("div",{staticClass:"meta-box-sortables"},[a("div",{staticClass:"postbox",class:{closed:t.board.isDashboardMetaboxClosed}},[a("button",{staticClass:"handlediv",attrs:{type:"button"},on:{click:t.togglePostbox}},[a("span",{staticClass:"toggle-indicator"})]),t._m(0),a("div",{staticClass:"inside"},[a("Toolbar"),a("router-view")],1)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"hndle"},[a("span",[t._v("WP Kanban")])])}],r=a("5530"),s={boards:{default:{title:"Default",id:30},ideas:{title:"Ideas",id:42}},currentBoard:"30",isDashboardMetaboxClosed:"",lists:[{term_id:31,name:"Backlog",slug:"backlog",term_group:0,term_taxonomy_id:31,taxonomy:"wpkanban_board",description:"For cards that are still being considered",parent:30,count:0,filter:"raw",cards:[]},{term_id:32,name:"Todo",slug:"todo",term_group:0,term_taxonomy_id:32,taxonomy:"wpkanban_board",description:"For cards that haven't been started yet",parent:30,count:2,filter:"raw",cards:[{title:"🎨 WP Kanbanner Theme",id:318,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=318&action=edit"},{title:"🔌 Link card blocks",id:328,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=328&action=edit"}]},{term_id:33,name:"Doing",slug:"default-doing",term_group:0,term_taxonomy_id:33,taxonomy:"wpkanban_board",description:"For cards that are actively being worked on",parent:30,count:2,filter:"raw",cards:[{title:"🔌 Device mockup block",id:322,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=322&action=edit"},{title:"🔌 WP Kanbanner",id:317,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=317&action=edit"}]},{term_id:34,name:"Done",slug:"done",term_group:0,term_taxonomy_id:34,taxonomy:"wpkanban_board",description:"For completed cards",parent:30,count:1,filter:"raw",cards:[{title:"🎨 Personal Theme",id:316,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=316&action=edit"}]}],ajaxurl:"http://thepersonaldev.local/wp-admin/admin-ajax.php",nonce:"7a06dc390b"},d=a("2f62"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"10px"}},[t._m(0),a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.board.currentBoard,expression:"board.currentBoard",modifiers:{number:!0}}],attrs:{id:"wpkanban-board-selector"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var a="_value"in e?e._value:e.value;return t._n(a)}));t.$set(t.board,"currentBoard",e.target.multiple?a:a[0])},t.loadBoard]}},t._l(t.board.boards,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.title))])})),0),a("a",{staticClass:"button m-l-10 thickbox",attrs:{href:"#TB_inline?width=300&height=150&inlineId=wpkanban-create-board-modal",title:"Create Board"},on:{click:t.showCreateBoardModal}},[t._v("Create Board")]),a("div",{staticClass:"hidden",attrs:{id:"wpkanban-create-board-modal"}},[a("div",{staticClass:"input-text-wrap"},[t._m(1),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoardTitle,expression:"newBoardTitle"}],ref:"title",staticStyle:{width:"100%"},attrs:{id:"wpkanban-create-board-title",type:"text",autocomplete:"off"},domProps:{value:t.newBoardTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createBoard(e)},input:function(e){e.target.composing||(t.newBoardTitle=e.target.value)}}})])]),a("p",[a("button",{staticClass:"button button-primary",attrs:{disabled:!t.newBoardTitle},on:{click:t.createBoard}},[t._v("Create Board")])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"margin-right":"10px"},attrs:{for:"wpkanban-board-selector"}},[a("strong",[t._v("Board:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"wpkanban-create-board-title"}},[a("strong",[t._v("Board Name")])])}],p={computed:Object(r["a"])({},Object(d["b"])(["board"])),data:function(){return{newBoardTitle:""}},methods:{loadBoard:function(){var t=this;if(this.board.ajaxurl){var e=new FormData;e.append("action","wpkanban_change_dashboard_board"),e.append("_ajax_nonce",this.board.nonce),e.append("board",this.board.currentBoard),this.axios.post(this.board.ajaxurl,e).then((function(e){t.$store.commit("set",["board",e.data])}))}},showCreateBoardModal:function(){var t=this;this.newBoardTitle="",setTimeout((function(){var e=document.querySelector("#TB_window");e.style.width="350px",e.style.marginLeft="-175px",e.style.height="150px",e.style.top="50%",e.style.marginTop="-100px",t.$refs.title.focus()}))},closeModal:function(){window.jQuery("#TB_closeWindowButton").click()},createBoard:function(){var t=this;if(this.newBoardTitle){var e=new FormData;e.append("action","wpkanban_create_board"),e.append("_ajax_nonce",this.board.nonce),e.append("title",this.newBoardTitle),this.axios.post(this.board.ajaxurl,e).then((function(e){t.$store.commit("set",["board",e.data])})),this.closeModal()}}}},u=p,b=a("2877"),h=Object(b["a"])(u,l,c,!1,null,null,null),m=h.exports,f={components:{Toolbar:m},computed:Object(r["a"])({},Object(d["b"])(["board"])),mounted:function(){window.WPKanban?this.$store.commit("set",["board",window.WPKanban]):this.$store.commit("set",["board",s]),window.WPKanbanApp=this},methods:{togglePostbox:function(){if(this.$store.commit("set",["board.isDashboardMetaboxClosed",!this.board.isDashboardMetaboxClosed]),this.board.ajaxurl){var t=new FormData;t.append("action","wpkanban_persist_dashboard_metabox_open_state"),t.append("_ajax_nonce",this.board.nonce),t.append("isClosed",this.board.isDashboardMetaboxClosed),this.axios.post(this.board.ajaxurl,t)}}}},w=f,v=(a("5c0b"),Object(b["a"])(w,o,i,!1,null,null,null)),_=v.exports,x=a("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Container",{staticClass:"wpkanban-container",attrs:{orientation:"horizontal"},on:{drop:t.onColumnDrop}},[t._l(t.board.lists,(function(e,n){return a("Draggable",{key:n,staticClass:"wpkanban-list-column"},[a("ListTitle",{attrs:{list:e,listIdx:n}}),a("Container",{attrs:{"group-name":"col","get-child-payload":t.getCardPayload(e.term_id)},on:{drop:function(a){return t.onCardDrop(e.term_id,a)}}},t._l(e.cards,(function(e,o){return a("Draggable",{key:o,staticClass:"wpkanban-card-mini"},[a("CardTitle",{attrs:{card:e,cardIdx:o,listIdx:n,addedNewCard:t.addedNewCard},on:{newCardMounted:function(e){t.addedNewCard=!1}}})],1)})),1),a("button",{staticClass:"button wpkanban-add-new-list-button",on:{click:function(e){return t.addNewCard(n)}}},[t._v("New card")])],1)})),a("div",{staticClass:"clear"})],2)],1)},D=[],g=(a("4de4"),a("4160"),a("c975"),a("a434"),a("159b"),a("2909")),k=a("3f7d"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"wpkanban-card-title"},[a("div",{staticClass:"wpkanban-card-title-wrap"},[a("span",{ref:"title",attrs:{contenteditable:t.isEditable},on:{input:t.onTitleChange,keypress:t.onTitleKeypress,blur:t.onBlur}},[t._v(t._s(t.list.name))])]),a("div",{staticClass:"wpkanban-card-title-icon-button",on:{click:t.openDropdown}},[a("DropdownIcon")],1),a("CardDropdown",{attrs:{isOpen:t.isDropdownOpen},on:{close:function(e){t.isDropdownOpen=!1},rename:t.onRename,remove:t.onDelete}})],1)},j=[],y=(a("b0c0"),a("2ef0")),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"}})])},B=[],$={name:"DropdownIcon"},I=$,E=Object(b["a"])(I,T,B,!1,null,null,null),L=E.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onDropdownOutsideClick,expression:"onDropdownOutsideClick"}],staticClass:"wpkanban-card-dropdown",class:{"wpkanban-visible":t.isOpen}},[a("li",{on:{click:t.rename}},[a("svg",{attrs:{viewBox:"0 0 576 512"}},[a("path",{attrs:{d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}})]),a("span",[t._v("Rename")])]),a("li",{staticClass:"wpkanban-separater"}),a("li",{on:{click:t.remove}},[a("svg",{attrs:{viewBox:"0 0 448 512"}},[a("path",{attrs:{d:"M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"}})]),a("span",[t._v("Delete")])])])},P=[],N=a("c28b"),F=a.n(N),R={name:"CardDropdown",directives:{clickOutside:F.a.directive},props:["isOpen"],methods:{onDropdownOutsideClick:function(){this.$emit("close")},rename:function(){this.$emit("rename")},remove:function(){this.$emit("remove")}}},S=R,z=Object(b["a"])(S,M,P,!1,null,null,null),K=z.exports,U={name:"ColumnTitle",components:{DropdownIcon:L,CardDropdown:K},props:["list","listIdx"],computed:Object(r["a"])({},Object(d["b"])(["board"])),data:function(){return{title:"",isDropdownOpen:!1,isEditable:!1}},watch:{list:function(t){this.title=t.name}},mounted:function(){this.title=this.list.name},methods:{onTitleKeypress:function(t){"Enter"===t.key&&(this.$refs.title.blur(),t.preventDefault())},onTitleChange:function(t){this.title=t.target.innerText,this.board.ajaxurl&&this.persistTitle()},persistTitle:Object(y["debounce"])((function(t){var e=new FormData;e.append("action","wpkanban_update_list_title"),e.append("_ajax_nonce",this.board.nonce),e.append("title",this.title),e.append("listId",this.list.term_id),this.axios.post(this.board.ajaxurl,e)}),500,{trailing:!0}),onBlur:function(){var t=Object(y["cloneDeep"])(this.board);t.lists[this.listIdx].name=this.title,this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.isEditable=!1},openDropdown:function(t){var e=this;setTimeout((function(){e.isDropdownOpen=!0}),0),t.preventDefault()},onRename:function(){var t=this;this.isDropdownOpen=!1,this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),document.execCommand("selectAll",!1,null)}),0)},onDelete:function(){var t=Object(y["cloneDeep"])(this.board),e=t.lists.splice(this.listIdx,1);this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.board.ajaxurl&&this.persistListDeletion(e)},persistListDeletion:function(t){var e=new FormData;e.append("action","wpkanban_persist_card_delete"),e.append("_ajax_nonce",this.board.nonce),e.append("id",t.term_id),this.axios.post(this.board.ajaxurl,e).then((function(t){console.log("response",t)}))}}},H=U,W=Object(b["a"])(H,O,j,!1,null,null,null),A=W.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wpkanban-card-title"},[a("div",{staticClass:"wpkanban-card-title-wrap",on:{click:t.onClick}},[a("span",{ref:"title",attrs:{contenteditable:t.isEditable},on:{input:t.onTitleChange,keypress:t.onTitleKeypress,blur:t.onBlur}},[t._v(t._s(t.card.title))])]),a("div",{staticClass:"wpkanban-card-title-icon-button",class:{"wpkanban-invisible":t.isDropdownOpen},on:{click:t.openDropdown}},[a("DropdownIcon")],1),a("CardDropdown",{attrs:{isOpen:t.isDropdownOpen},on:{close:function(e){t.isDropdownOpen=!1},rename:t.onRename,remove:t.onDelete}})],1)},V=[],q={name:"CardTitle",components:{CardDropdown:K,DropdownIcon:L},props:["card","cardIdx","listIdx","addedNewCard"],computed:Object(r["a"])({},Object(d["b"])(["board"])),watch:{card:function(t){this.title=t.title,this.$refs.title.innerText=this.title}},data:function(){return{title:"",isEditable:!1,isDropdownOpen:!1}},mounted:function(){var t=this;this.title=this.card.title,this.addedNewCard&&(this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),t.$emit("newCardMounted")})))},methods:{onTitleKeypress:function(t){"Enter"===t.key&&(this.$refs.title.blur(),t.preventDefault())},onTitleChange:function(t){this.title=t.target.innerText,this.board.ajaxurl&&this.persistTitle()},persistTitle:Object(y["debounce"])((function(){var t=new FormData;t.append("action","wpkanban_update_card_title"),t.append("_ajax_nonce",this.board.nonce),t.append("title",this.title),t.append("cardId",this.card.id),this.axios.post(this.board.ajaxurl,t)}),250,{trailing:!0}),onClick:function(){!this.isEditable&&this.card.editURL&&(window.location=this.card.editURL)},onBlur:function(){var t=Object(y["cloneDeep"])(this.board);t.lists[this.listIdx].cards[this.cardIdx].title=this.title,this.$store.commit("set",["board",t]),this.card.title=this.title,this.isDropdownOpen=!1,this.isEditable=!1},openDropdown:function(t){var e=this;setTimeout((function(){e.isDropdownOpen=!0}),0),t.preventDefault()},onRename:function(){var t=this;this.isDropdownOpen=!1,this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),document.execCommand("selectAll",!1,null)}),0)},onDelete:function(){var t=Object(y["cloneDeep"])(this.board),e=t.lists[this.listIdx].cards.splice(this.cardIdx,1)[0];this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.board.ajaxurl&&this.persistCardDeletion(e)},persistCardDeletion:function(t){var e=new FormData;e.append("action","wpkanban_persist_card_delete"),e.append("_ajax_nonce",this.board.nonce),e.append("id",t.id),this.axios.post(this.board.ajaxurl,e)}}},Q=q,G=Object(b["a"])(Q,J,V,!1,null,null,null),X=G.exports,Y={name:"Home",components:{Container:k["Container"],Draggable:k["Draggable"],ListTitle:A,CardTitle:X},computed:Object(r["a"])({},Object(d["b"])(["board"])),data:function(){return{addedNewCard:!1}},methods:{onColumnDrop:function(t){var e=Object(y["cloneDeep"])(this.board);e.lists=this.applyDrag(e.lists,t),this.$store.commit("set",["board",e]),this.board.ajaxurl&&this.persistColumnOrder()},onCardDrop:function(t,e){if(null!==e.removedIndex||null!==e.addedIndex){var a=Object(y["cloneDeep"])(this.board),n=a.lists.filter((function(e){return e.term_id===t}))[0],o=a.lists.indexOf(n),i=Object(y["cloneDeep"])(n);i.cards=this.applyDrag(i.cards,e),a.lists.splice(o,1,i),this.$store.commit("set",["board",a]),this.board.ajaxurl&&this.persistCardOrder(o)}},applyDrag:function(t,e){var a=e.removedIndex,n=e.addedIndex,o=e.payload;if(null===a&&null===n)return t;var i=Object(g["a"])(t),r=o;return null!==a&&(r=i.splice(a,1)[0]),null!==n&&i.splice(n,0,r),i},getCardPayload:function(t){var e=this;return function(a){return e.board.lists.filter((function(e){return e.term_id===t}))[0].cards[a]}},addNewCard:function(t){var e=Object(y["cloneDeep"])(this.board);e.lists[t].cards.push({title:" ",id:-1}),this.addedNewCard=!0,this.$store.commit("set",["board",e]),this.board.ajaxurl&&this.persistNewCard(t)},persistColumnOrder:function(){var t=new FormData,e=[];this.board.lists.forEach((function(t){e.push(t.term_id)})),t.append("action","wpkanban_persist_list_order"),t.append("_ajax_nonce",this.board.nonce),t.append("order",JSON.stringify(e)),this.axios.post(this.board.ajaxurl,t)},persistCardOrder:function(t){var e=new FormData,a=[];this.board.lists[t].cards.forEach((function(t){a.push(t.id)})),e.append("action","wpkanban_persist_card_order"),e.append("_ajax_nonce",this.board.nonce),e.append("order",JSON.stringify(a)),e.append("listId",this.board.lists[t].term_id),this.axios.post(this.board.ajaxurl,e)},persistNewCard:function(t){var e=this,a=new FormData,n=this.board.lists[t].cards.length-1;a.append("action","wpkanban_persist_new_card"),a.append("_ajax_nonce",this.board.nonce),a.append("listId",this.board.lists[t].term_id),a.append("order",n),this.axios.post(this.board.ajaxurl,a).then((function(a){e.board.lists[t].cards[n].id=a.data.id,e.board.lists[t].cards[n].editURL=a.data.editURL}))}}},Z=Y,tt=Object(b["a"])(Z,C,D,!1,null,null,null),et=tt.exports;n["a"].use(x["a"]);var at=[{path:"/",name:"Home",component:et}],nt=new x["a"]({routes:at}),ot=nt;n["a"].use(d["a"]);var it=new d["a"].Store({state:{board:{}},mutations:{set:function(t,e){Object(y["set"])(t,e[0],e[1]),e[2]&&localStore.set(e[0],e[1])}},actions:{},modules:{}}),rt=a("bc3a"),st=a.n(rt),dt=a("a7fe"),lt=a.n(dt);n["a"].use(lt.a,st.a),n["a"].config.productionTip=!1,document.addEventListener("DOMContentLoaded",(function(){new n["a"]({router:ot,store:it,render:function(t){return t(_)}}).$mount("#wpkanban")}),!1)},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.js.map
(function(t){function e(e){for(var a,r,s=e[0],d=e[1],l=e[2],p=0,u=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var d=n[s];0!==i[d]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"metabox-holder",attrs:{id:"wpkanban"}},[n("div",{staticClass:"postbox-container"},[n("div",{staticClass:"meta-box-sortables"},[n("div",{staticClass:"postbox",class:{closed:t.board.isDashboardMetaboxClosed}},[n("button",{staticClass:"handlediv",attrs:{type:"button"},on:{click:t.togglePostbox}},[n("span",{staticClass:"toggle-indicator"})]),t._m(0),n("div",{staticClass:"inside"},[n("router-view")],1)])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"hndle"},[n("span",[t._v("WP Kanban")])])}],r=n("5530"),s={isDashboardMetaboxClosed:!1,lists:[{term_id:21,name:"Backlog",slug:"default-backlog",term_group:0,term_taxonomy_id:21,taxonomy:"wpkanban_board",description:"For cards that are still being considered",parent:20,count:0,filter:"raw",cards:[{title:"Card A",id:0},{title:"Card B",id:1},{title:"Card C",id:2}]},{term_id:22,name:"Todo",slug:"default-todo",term_group:0,term_taxonomy_id:22,taxonomy:"wpkanban_board",description:"For cards that haven't been started yet",parent:20,count:0,filter:"raw",cards:[{title:"Card D",id:3},{title:"Card E",id:4},{title:"Card F",id:5}]},{term_id:23,name:"Doing",slug:"default-doing",term_group:0,term_taxonomy_id:23,taxonomy:"wpkanban_board",description:"For cards that are actively being worked on",parent:20,count:0,filter:"raw",cards:[{title:"Card G",id:6},{title:"Card H",id:7},{title:"Card I",id:8}]},{term_id:24,name:"Done",slug:"default-done",term_group:0,term_taxonomy_id:24,taxonomy:"wpkanban_board",description:"For completed cards",parent:20,count:0,filter:"raw",cards:[]}]},d=n("2f62"),l={computed:Object(r["a"])({},Object(d["b"])(["board"])),mounted:function(){window.WPKanban?this.$store.commit("set",["board",window.WPKanban]):this.$store.commit("set",["board",s]),window.WPKanbanApp=this},methods:{togglePostbox:function(){if(this.$store.commit("set",["board.isDashboardMetaboxClosed",!this.board.isDashboardMetaboxClosed]),this.board.ajaxurl){var t=new FormData;t.append("action","wpkanban_persist_dashboard_metabox_open_state"),t.append("_ajax_nonce",this.board.nonce),t.append("isClosed",this.board.isDashboardMetaboxClosed),this.axios.post(this.board.ajaxurl,t).then((function(t){console.log(t.data)}))}}}},c=l,p=(n("5c0b"),n("2877")),u=Object(p["a"])(c,i,o,!1,null,null,null),b=u.exports,h=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Container",{staticClass:"wpkanban-container",attrs:{orientation:"horizontal"},on:{drop:t.onColumnDrop}},[t._l(t.board.lists,(function(e,a){return n("Draggable",{key:a,staticClass:"wpkanban-list-column"},[n("ListTitle",{attrs:{list:e,listIdx:a}}),n("Container",{attrs:{"group-name":"col","get-child-payload":t.getCardPayload(e.term_id)},on:{drop:function(n){return t.onCardDrop(e.term_id,n)}}},t._l(e.cards,(function(e,i){return n("Draggable",{key:i,staticClass:"wpkanban-card-mini"},[n("CardTitle",{attrs:{card:e,cardIdx:i,listIdx:a,addedNewCard:t.addedNewCard},on:{newCardMounted:function(e){t.addedNewCard=!1}}})],1)})),1),n("button",{staticClass:"button wpkanban-add-new-list-button",on:{click:function(e){return t.addNewCard(a)}}},[t._v("New card")])],1)})),n("div",{staticClass:"clear"})],2)],1)},f=[],w=(n("4de4"),n("4160"),n("c975"),n("a434"),n("159b"),n("2909")),_=n("3f7d"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"wpkanban-card-title"},[n("div",{staticClass:"wpkanban-card-title-wrap"},[n("span",{ref:"title",attrs:{contenteditable:t.isEditable},on:{input:t.onTitleChange,keypress:t.onTitleKeypress,blur:t.onBlur}},[t._v(t._s(t.list.name))])]),n("div",{staticClass:"wpkanban-card-title-icon-button",on:{click:t.openDropdown}},[n("DropdownIcon")],1),n("CardDropdown",{attrs:{isOpen:t.isDropdownOpen},on:{close:function(e){t.isDropdownOpen=!1},rename:t.onRename,remove:t.onDelete}})],1)},x=[],C=(n("b0c0"),n("2ef0")),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"}})])},O=[],g={name:"DropdownIcon"},j=g,k=Object(p["a"])(j,D,O,!1,null,null,null),y=k.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onDropdownOutsideClick,expression:"onDropdownOutsideClick"}],staticClass:"wpkanban-card-dropdown",class:{"wpkanban-visible":t.isOpen}},[n("li",{on:{click:t.rename}},[n("svg",{attrs:{viewBox:"0 0 576 512"}},[n("path",{attrs:{d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}})]),n("span",[t._v("Rename")])]),n("li",{staticClass:"wpkanban-separater"}),n("li",{on:{click:t.remove}},[n("svg",{attrs:{viewBox:"0 0 448 512"}},[n("path",{attrs:{d:"M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"}})]),n("span",[t._v("Delete")])])])},$=[],I=n("c28b"),E=n.n(I),L={name:"CardDropdown",directives:{clickOutside:E.a.directive},props:["isOpen"],methods:{onDropdownOutsideClick:function(){this.$emit("close")},rename:function(){this.$emit("rename")},remove:function(){this.$emit("remove")}}},M=L,N=Object(p["a"])(M,T,$,!1,null,null,null),P=N.exports,F={name:"ColumnTitle",components:{DropdownIcon:y,CardDropdown:P},props:["list","listIdx"],computed:Object(r["a"])({},Object(d["b"])(["board"])),data:function(){return{title:"",isDropdownOpen:!1,isEditable:!1}},watch:{list:function(t){this.title=t.name}},mounted:function(){this.title=this.list.name},methods:{onTitleKeypress:function(t){"Enter"===t.key&&(this.$refs.title.blur(),t.preventDefault())},onTitleChange:function(t){this.title=t.target.innerText,this.board.ajaxurl&&this.persistTitle()},persistTitle:Object(C["debounce"])((function(t){var e=new FormData;e.append("action","wpkanban_update_list_title"),e.append("_ajax_nonce",this.board.nonce),e.append("title",this.title),e.append("listId",this.list.term_id),this.axios.post(this.board.ajaxurl,e)}),500,{trailing:!0}),onBlur:function(){var t=Object(C["cloneDeep"])(this.board);t.lists[this.listIdx].name=this.title,this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.isEditable=!1},openDropdown:function(t){var e=this;setTimeout((function(){e.isDropdownOpen=!0}),0),t.preventDefault()},onRename:function(){var t=this;this.isDropdownOpen=!1,this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),document.execCommand("selectAll",!1,null)}),0)},onDelete:function(){var t=Object(C["cloneDeep"])(this.board),e=t.lists.splice(this.listIdx,1);this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.board.ajaxurl&&this.persistListDeletion(e)},persistListDeletion:function(t){var e=new FormData;e.append("action","wpkanban_persist_card_delete"),e.append("_ajax_nonce",this.board.nonce),e.append("id",t.term_id),this.axios.post(this.board.ajaxurl,e).then((function(t){console.log("response",t)}))}}},z=F,B=Object(p["a"])(z,v,x,!1,null,null,null),H=B.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wpkanban-card-title"},[n("div",{staticClass:"wpkanban-card-title-wrap",on:{click:t.onClick}},[n("span",{ref:"title",attrs:{contenteditable:t.isEditable},on:{input:t.onTitleChange,keypress:t.onTitleKeypress,blur:t.onBlur}},[t._v(t._s(t.card.title))])]),n("div",{staticClass:"wpkanban-card-title-icon-button",class:{"wpkanban-invisible":t.isDropdownOpen},on:{click:t.openDropdown}},[n("DropdownIcon")],1),n("CardDropdown",{attrs:{isOpen:t.isDropdownOpen},on:{close:function(e){t.isDropdownOpen=!1},rename:t.onRename,remove:t.onDelete}})],1)},S=[],K={name:"CardTitle",components:{CardDropdown:P,DropdownIcon:y},props:["card","cardIdx","listIdx","addedNewCard"],computed:Object(r["a"])({},Object(d["b"])(["board"])),watch:{card:function(t){this.title=t.title,this.$refs.title.innerText=this.title}},data:function(){return{title:"",isEditable:!1,isDropdownOpen:!1}},mounted:function(){var t=this;this.title=this.card.title,this.addedNewCard&&(this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),t.$emit("newCardMounted")})))},methods:{onTitleKeypress:function(t){"Enter"===t.key&&(this.$refs.title.blur(),t.preventDefault())},onTitleChange:function(t){this.title=t.target.innerText,this.board.ajaxurl&&this.persistTitle()},persistTitle:Object(C["debounce"])((function(){var t=new FormData;t.append("action","wpkanban_update_card_title"),t.append("_ajax_nonce",this.board.nonce),t.append("title",this.title),t.append("cardId",this.card.id),this.axios.post(this.board.ajaxurl,t)}),250,{trailing:!0}),onClick:function(){!this.isEditable&&this.card.editURL&&(window.location=this.card.editURL)},onBlur:function(){var t=Object(C["cloneDeep"])(this.board);t.lists[this.listIdx].cards[this.cardIdx].title=this.title,this.$store.commit("set",["board",t]),this.card.title=this.title,this.isDropdownOpen=!1,this.isEditable=!1},openDropdown:function(t){var e=this;setTimeout((function(){e.isDropdownOpen=!0}),0),t.preventDefault()},onRename:function(){var t=this;this.isDropdownOpen=!1,this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),document.execCommand("selectAll",!1,null)}),0)},onDelete:function(){var t=Object(C["cloneDeep"])(this.board),e=t.lists[this.listIdx].cards.splice(this.cardIdx,1)[0];this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.board.ajaxurl&&this.persistCardDeletion(e)},persistCardDeletion:function(t){var e=new FormData;e.append("action","wpkanban_persist_card_delete"),e.append("_ajax_nonce",this.board.nonce),e.append("id",t.id),this.axios.post(this.board.ajaxurl,e)}}},A=K,J=Object(p["a"])(A,R,S,!1,null,null,null),U=J.exports,V={name:"Home",components:{Container:_["Container"],Draggable:_["Draggable"],ListTitle:H,CardTitle:U},computed:Object(r["a"])({},Object(d["b"])(["board"])),data:function(){return{addedNewCard:!1}},methods:{onColumnDrop:function(t){var e=Object(C["cloneDeep"])(this.board);e.lists=this.applyDrag(e.lists,t),this.$store.commit("set",["board",e]),this.board.ajaxurl&&this.persistColumnOrder()},onCardDrop:function(t,e){if(null!==e.removedIndex||null!==e.addedIndex){var n=Object(C["cloneDeep"])(this.board),a=n.lists.filter((function(e){return e.term_id===t}))[0],i=n.lists.indexOf(a),o=Object(C["cloneDeep"])(a);o.cards=this.applyDrag(o.cards,e),n.lists.splice(i,1,o),this.$store.commit("set",["board",n]),this.board.ajaxurl&&this.persistCardOrder(i)}},applyDrag:function(t,e){var n=e.removedIndex,a=e.addedIndex,i=e.payload;if(null===n&&null===a)return t;var o=Object(w["a"])(t),r=i;return null!==n&&(r=o.splice(n,1)[0]),null!==a&&o.splice(a,0,r),o},getCardPayload:function(t){var e=this;return function(n){return e.board.lists.filter((function(e){return e.term_id===t}))[0].cards[n]}},addNewCard:function(t){var e=Object(C["cloneDeep"])(this.board);e.lists[t].cards.push({title:" ",id:-1}),this.addedNewCard=!0,this.$store.commit("set",["board",e]),this.board.ajaxurl&&this.persistNewCard(t)},persistColumnOrder:function(){var t=new FormData,e=[];this.board.lists.forEach((function(t){e.push(t.term_id)})),t.append("action","wpkanban_persist_list_order"),t.append("_ajax_nonce",this.board.nonce),t.append("order",JSON.stringify(e)),this.axios.post(this.board.ajaxurl,t)},persistCardOrder:function(t){var e=new FormData,n=[];this.board.lists[t].cards.forEach((function(t){n.push(t.id)})),e.append("action","wpkanban_persist_card_order"),e.append("_ajax_nonce",this.board.nonce),e.append("order",JSON.stringify(n)),e.append("listId",this.board.lists[t].term_id),this.axios.post(this.board.ajaxurl,e)},persistNewCard:function(t){var e=this,n=new FormData,a=this.board.lists[t].cards.length-1;n.append("action","wpkanban_persist_new_card"),n.append("_ajax_nonce",this.board.nonce),n.append("listId",this.board.lists[t].term_id),n.append("order",a),this.axios.post(this.board.ajaxurl,n).then((function(n){e.board.lists[t].cards[a].id=n.data.id,e.board.lists[t].cards[a].editURL=n.data.editURL}))}}},W=V,G=Object(p["a"])(W,m,f,!1,null,null,null),q=G.exports;a["a"].use(h["a"]);var Q=[{path:"/",name:"Home",component:q}],X=new h["a"]({routes:Q}),Y=X;a["a"].use(d["a"]);var Z=new d["a"].Store({state:{board:{}},mutations:{set:function(t,e){Object(C["set"])(t,e[0],e[1]),e[2]&&localStore.set(e[0],e[1])}},actions:{},modules:{}}),tt=n("bc3a"),et=n.n(tt),nt=n("a7fe"),at=n.n(nt);a["a"].use(at.a,et.a),a["a"].config.productionTip=!1,document.addEventListener("DOMContentLoaded",(function(){new a["a"]({router:Y,store:Z,render:function(t){return t(b)}}).$mount("#wpkanban")}),!1)},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.js.map
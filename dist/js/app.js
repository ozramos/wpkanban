(function(t){function e(e){for(var a,o,s=e[0],d=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var d=n[s];0!==r[d]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1b5c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"metabox-holder",attrs:{id:"wpkanban"}},[n("div",{staticClass:"postbox-container"},[n("div",{staticClass:"meta-box-sortables"},[n("div",{staticClass:"postbox",class:{closed:!t.isPoseboxOpen}},[n("button",{staticClass:"handlediv",attrs:{type:"button"},on:{click:t.togglePostbox}},[n("span",{staticClass:"toggle-indicator"})]),t._m(0),n("div",{staticClass:"inside"},[n("router-view")],1)])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"hndle"},[n("span",[t._v("WP Kanban")])])}],o={lists:[{term_id:21,name:"Backlog",slug:"default-backlog",term_group:0,term_taxonomy_id:21,taxonomy:"wpkanban_board",description:"For cards that are still being considered",parent:20,count:0,filter:"raw",cards:[{title:"Card A",id:0},{title:"Card B",id:1},{title:"Card C",id:2}]},{term_id:22,name:"Todo",slug:"default-todo",term_group:0,term_taxonomy_id:22,taxonomy:"wpkanban_board",description:"For cards that haven't been started yet",parent:20,count:0,filter:"raw",cards:[{title:"Card D",id:3},{title:"Card E",id:4},{title:"Card F",id:5}]},{term_id:23,name:"Doing",slug:"default-doing",term_group:0,term_taxonomy_id:23,taxonomy:"wpkanban_board",description:"For cards that are actively being worked on",parent:20,count:0,filter:"raw",cards:[{title:"Card G",id:6},{title:"Card H",id:7},{title:"Card I",id:8}]},{term_id:24,name:"Done",slug:"default-done",term_group:0,term_taxonomy_id:24,taxonomy:"wpkanban_board",description:"For completed cards",parent:20,count:0,filter:"raw",cards:[]}]},s={data:function(){return{isPoseboxOpen:!0}},mounted:function(){window.WPKanban?this.$store.commit("set",["board",window.WPKanban]):this.$store.commit("set",["board",o]),window.WPKanbanApp=this},methods:{togglePostbox:function(){this.isPoseboxOpen=!this.isPoseboxOpen}}},d=s,l=(n("5c0b"),n("2877")),c=Object(l["a"])(d,r,i,!1,null,null,null),u=c.exports,p=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Container",{staticClass:"wpkanban-container",attrs:{orientation:"horizontal"},on:{drop:t.onColumnDrop}},[t._l(t.board.lists,(function(e,a){return n("Draggable",{key:a,staticClass:"wpkanban-list-column"},[n("ListTitle",{attrs:{list:e,listIdx:a}}),n("Container",{attrs:{"group-name":"col","get-child-payload":t.getCardPayload(e.term_id)},on:{drop:function(n){return t.onCardDrop(e.term_id,n)}}},t._l(e.cards,(function(e,r){return n("Draggable",{key:r,staticClass:"wpkanban-card-mini"},[n("CardTitle",{attrs:{card:e,cardIdx:r,listIdx:a,addedNewCard:t.addedNewCard},on:{newCardMounted:function(e){t.addedNewCard=!1}}})],1)})),1),n("button",{staticClass:"button wpkanban-add-new-list-button",on:{click:function(e){return t.addNewCard(a)}}},[t._v("New card")])],1)})),n("div",{staticClass:"clear"})],2)],1)},h=[],f=(n("4de4"),n("4160"),n("c975"),n("a434"),n("159b"),n("2909")),m=n("5530"),_=n("3f7d"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("span",{attrs:{contenteditable:""},on:{input:t.onTitleChange,keypress:t.onTitleKeypress,blur:t.onBlur}},[t._v(t._s(t.list.name))])])},w=[],v=(n("b0c0"),n("2ef0")),C=n("2f62"),g={name:"ColumnTitle",props:["list","listIdx"],computed:Object(m["a"])({},Object(C["b"])(["board"])),data:function(){return{title:""}},watch:{list:function(t){this.title=t.name}},mounted:function(){this.title=this.list.name},methods:{onTitleKeypress:function(t){"Enter"===t.key&&t.preventDefault()},onTitleChange:function(t){this.title=t.target.innerText,this.board.ajaxurl&&this.persistTitle()},persistTitle:Object(v["debounce"])((function(t){var e=new FormData;e.append("action","wpkanban_update_list_title"),e.append("_ajax_nonce",this.board.nonce),e.append("title",this.title),e.append("listId",this.list.term_id),this.axios.post(this.board.ajaxurl,e)}),500,{trailing:!0}),onBlur:function(){var t=Object(v["cloneDeep"])(this.board);t.lists[this.listIdx].name=this.title,this.$store.commit("set",["board",t])}}},y=g,j=(n("b0f6"),Object(l["a"])(y,x,w,!1,null,"0ab59401",null)),O=j.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{ref:"title",attrs:{contenteditable:""},on:{input:t.onTitleChange,keypress:t.onTitleKeypress,blur:t.onBlur}},[t._v(t._s(t.card.title))])])},D=[],T={name:"CardTitle",props:["card","cardIdx","listIdx","addedNewCard"],computed:Object(m["a"])({},Object(C["b"])(["board"])),watch:{card:function(t){this.title=t.title,this.$refs.title.innerText=this.title}},data:function(){return{title:""}},mounted:function(){this.title=this.card.title,this.addedNewCard&&(this.$refs.title.focus(),this.$emit("newCardMounted"))},methods:{onTitleKeypress:function(t){"Enter"===t.key&&(this.$refs.title.blur(),t.preventDefault())},onTitleChange:function(t){this.title=t.target.innerText,this.board.ajaxurl&&this.persistTitle()},persistTitle:Object(v["debounce"])((function(){var t=new FormData;t.append("action","wpkanban_update_card_title"),t.append("_ajax_nonce",this.board.nonce),t.append("title",this.title),t.append("cardId",this.card.id),this.axios.post(this.board.ajaxurl,t)}),250,{trailing:!0}),onBlur:function(){var t=Object(v["cloneDeep"])(this.board);t.lists[this.listIdx].cards[this.cardIdx].title=this.title,this.$store.commit("set",["board",t]),this.card.title=this.title}}},P=T,I=(n("c8cd"),Object(l["a"])(P,k,D,!1,null,"2571ed2e",null)),$=I.exports,N={name:"Home",components:{Container:_["Container"],Draggable:_["Draggable"],ListTitle:O,CardTitle:$},computed:Object(m["a"])({},Object(C["b"])(["board"])),data:function(){return{addedNewCard:!1}},methods:{onColumnDrop:function(t){var e=Object(v["cloneDeep"])(this.board);e.lists=this.applyDrag(e.lists,t),this.$store.commit("set",["board",e]),this.board.ajaxurl&&this.persistColumnOrder()},onCardDrop:function(t,e){if(null!==e.removedIndex||null!==e.addedIndex){var n=Object(v["cloneDeep"])(this.board),a=n.lists.filter((function(e){return e.term_id===t}))[0],r=n.lists.indexOf(a),i=Object(v["cloneDeep"])(a);i.cards=this.applyDrag(i.cards,e),n.lists.splice(r,1,i),this.$store.commit("set",["board",n]),this.board.ajaxurl&&this.persistCardOrder(r)}},applyDrag:function(t,e){var n=e.removedIndex,a=e.addedIndex,r=e.payload;if(null===n&&null===a)return t;var i=Object(f["a"])(t),o=r;return null!==n&&(o=i.splice(n,1)[0]),null!==a&&i.splice(a,0,o),i},getCardPayload:function(t){var e=this;return function(n){return e.board.lists.filter((function(e){return e.term_id===t}))[0].cards[n]}},addNewCard:function(t){var e=Object(v["cloneDeep"])(this.board);e.lists[t].cards.push({title:" ",id:-1}),this.addedNewCard=!0,this.$store.commit("set",["board",e]),this.board.ajaxurl&&this.persistNewCard(t)},persistColumnOrder:function(){var t=new FormData,e=[];this.board.lists.forEach((function(t){e.push(t.term_id)})),t.append("action","wpkanban_persist_list_order"),t.append("_ajax_nonce",this.board.nonce),t.append("order",JSON.stringify(e)),this.axios.post(this.board.ajaxurl,t)},persistCardOrder:function(t){var e=new FormData,n=[];this.board.lists[t].cards.forEach((function(t){n.push(t.id)})),e.append("action","wpkanban_persist_card_order"),e.append("_ajax_nonce",this.board.nonce),e.append("order",JSON.stringify(n)),e.append("listId",this.board.lists[t].term_id),this.axios.post(this.board.ajaxurl,e)},persistNewCard:function(t){var e=this,n=new FormData,a=this.board.lists[t].cards.length-1;n.append("action","wpkanban_persist_new_card"),n.append("_ajax_nonce",this.board.nonce),n.append("listId",this.board.lists[t].term_id),n.append("order",a),this.axios.post(this.board.ajaxurl,n).then((function(n){e.board.lists[t].cards[a].id=n.data.id}))}}},E=N,F=Object(l["a"])(E,b,h,!1,null,null,null),S=F.exports;a["a"].use(p["a"]);var K=[{path:"/",name:"Home",component:S}],M=new p["a"]({routes:K}),B=M;a["a"].use(C["a"]);var J=new C["a"].Store({state:{board:{}},mutations:{set:function(t,e){Object(v["set"])(t,e[0],e[1]),e[2]&&localStore.set(e[0],e[1])}},actions:{},modules:{}}),L=n("bc3a"),W=n.n(L),H=n("a7fe"),A=n.n(H);a["a"].use(A.a,W.a),a["a"].config.productionTip=!1,document.addEventListener("DOMContentLoaded",(function(){new a["a"]({router:B,store:J,render:function(t){return t(u)}}).$mount("#wpkanban")}),!1)},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(t,e,n){},a4be:function(t,e,n){},b0f6:function(t,e,n){"use strict";var a=n("1b5c"),r=n.n(a);r.a},c8cd:function(t,e,n){"use strict";var a=n("a4be"),r=n.n(a);r.a}});
//# sourceMappingURL=app.js.map
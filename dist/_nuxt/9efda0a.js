(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{357:function(t,e,r){var content=r(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("ec390e28",content,!0,{sourceMap:!1})},366:function(t,e,r){"use strict";r(357)},367:function(t,e,r){var c=r(18)(!1);c.push([t.i,".shop_items[data-v-e03fc17e]{display:grid;grid-template-columns:repeat(5,1fr);grid-gap:20px;gap:20px}@media(max-width:900px){.shop_items[data-v-e03fc17e]{grid-template-columns:repeat(4,1fr)}}@media(max-width:730px){.shop_items[data-v-e03fc17e]{grid-template-columns:repeat(3,1fr)}}@media(max-width:570px){.shop_items[data-v-e03fc17e]{grid-template-columns:repeat(2,1fr)}}@media(max-width:420px){.shop_items[data-v-e03fc17e]{grid-template-columns:repeat(1,1fr)}}",""]),t.exports=c},381:function(t,e,r){"use strict";r.r(e);r(25),r(136);var c=r(9),n=(r(48),r(365)),o=r.n(n),d={name:"ShopPage",data:function(){return{search:"",client:null,products:null}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.client=o.a.buildClient({domain:"jivana-spices.myshopify.com",storefrontAccessToken:"a690ca678ddc3b84bbbf089ce89b81e3"}),e.next=3,t.client.product.fetchAll();case 3:t.products=e.sent,console.log(t.products);case 5:case"end":return e.stop()}}),e)})))()}},l=(r(366),r(5)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container container_spacing"},[e("div",{staticClass:"shop"},[e("div",{staticClass:"shop_search"},[e("Input",{staticClass:"mb-24",attrs:{model:t.search,background:"transparent",border:"1px solid black","text-colour":"black",placeholder:"What are you looking for?"},on:{"update:model":function(e){t.search=e}}})],1),t._v(" "),t.products?e("div",{staticClass:"shop_items"},t._l(t.products,(function(t,r){return e("Product",{key:"product_".concat(r),attrs:{product:t}})})),1):t._e()])])}),[],!1,null,"e03fc17e",null);e.default=component.exports;installComponents(component,{Input:r(87).default,Product:r(229).default})}}]);
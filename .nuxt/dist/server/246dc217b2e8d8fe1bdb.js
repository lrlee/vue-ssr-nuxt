exports.ids=[28],exports.modules={107:function(e,t,l){"use strict";l.r(t);var d={props:{roleInfo:{required:!0,type:Array}},data(){return{pageIndex:0,totalPage:this.roleInfo.length/7,selectedId:this.roleInfo[0]?this.roleInfo[0].id:1,selectedIndex:0}},computed:{moveY(){return"translateY("+-this.pageIndex*(655/19.2)+"vw)"}},methods:{seletcToPrev(){this.pageIndex>0&&this.pageIndex--},seletcToNext(){this.pageIndex<this.totalPage-1&&this.pageIndex++},selecteRole(e,t){this.selectedId=e,this.selectedIndex=t}}},n=l(1);var component=Object(n.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"part-container"},[e._ssrNode('<div id="part5" class="title part-title-type2" data-v-ab3eab5e><div class="title-order" data-v-ab3eab5e></div> <p class="title-text" data-v-ab3eab5e><span class="part-title-white" data-v-ab3eab5e>凶萌角色</span></p></div> <div class="content" data-v-ab3eab5e><div class="role-select" data-v-ab3eab5e><div class="select-list-box" data-v-ab3eab5e><ul class="role-list"'+e._ssrStyle(null,{transform:e.moveY},null)+" data-v-ab3eab5e>"+e._ssrList(e.roleInfo,(function(t,l){return"<li"+e._ssrClass("role-item",["role-head-"+t.id,e.selectedId===t.id?"active":""])+" data-v-ab3eab5e></li>"}))+"</ul></div> <div"+e._ssrClass("prev-btn btn",{disabled:0===e.pageIndex})+" data-v-ab3eab5e></div> <div"+e._ssrClass("next-btn btn",{disabled:e.pageIndex===e.totalPage-1})+' data-v-ab3eab5e></div></div> <div class="role-display" data-v-ab3eab5e><div class="role-stage_light" data-v-ab3eab5e></div> <div class="role-stage" data-v-ab3eab5e><div'+e._ssrClass("role-pic","role-"+e.selectedId)+' data-v-ab3eab5e></div></div></div> <div class="role-introduct" data-v-ab3eab5e><div class="role-base-desc" data-v-ab3eab5e><div class="name-wrapper" data-v-ab3eab5e><span class="role-name" data-v-ab3eab5e>'+e._s(e.$t("game."+e.roleInfo[e.selectedIndex].name_key))+'</span> <ul class="star-list" data-v-ab3eab5e>'+e._ssrList(e.roleInfo[e.selectedIndex].star,(function(e){return'<li class="star-item" data-v-ab3eab5e></li>'}))+'</ul></div> <p class="character-desc" data-v-ab3eab5e>'+e._s(e.$t("game."+e.roleInfo[e.selectedIndex].desc_key))+'</p></div> <div class="role-ability-desc" data-v-ab3eab5e><div class="ability-label" data-v-ab3eab5e>技能</div> <p data-v-ab3eab5e>'+e._s(e.$t("game."+e.roleInfo[e.selectedIndex].skill_desc_key))+'</p></div> <div class="role-ability-display" data-v-ab3eab5e><ul class="ability-values" data-v-ab3eab5e><li class="value-item bubble" data-v-ab3eab5e><i class="bubble-icon icon" data-v-ab3eab5e></i> <span class="values-name" data-v-ab3eab5e>数量</span> <ul class="values-display" data-v-ab3eab5e>'+e._ssrList(e.roleInfo[e.selectedIndex].base.bubble,(function(base){return'<li class="water-drop-icon base" data-v-ab3eab5e></li>'}))+" "+e._ssrList(e.roleInfo[e.selectedIndex].max.bubble-e.roleInfo[e.selectedIndex].base.bubble,(function(e){return'<li class="water-drop-icon max" data-v-ab3eab5e></li>'}))+" "+e._ssrList(e.roleInfo[e.selectedIndex].threshold.bubble-e.roleInfo[e.selectedIndex].max.bubble,(function(e){return'<li class="water-drop-icon default" data-v-ab3eab5e></li>'}))+'</ul></li> <li class="value-item waterspout" data-v-ab3eab5e><i class="waterspout-icon icon" data-v-ab3eab5e></i> <span class="values-name" data-v-ab3eab5e>水柱</span> <ul class="values-display" data-v-ab3eab5e>'+e._ssrList(e.roleInfo[e.selectedIndex].base.waterspout,(function(base){return'<li class="water-drop-icon base" data-v-ab3eab5e></li>'}))+" "+e._ssrList(e.roleInfo[e.selectedIndex].max.waterspout-e.roleInfo[e.selectedIndex].base.waterspout,(function(e){return'<li class="water-drop-icon max" data-v-ab3eab5e></li>'}))+" "+e._ssrList(e.roleInfo[e.selectedIndex].threshold.waterspout-e.roleInfo[e.selectedIndex].max.waterspout,(function(e){return'<li class="water-drop-icon default" data-v-ab3eab5e></li>'}))+'</ul></li> <li class="value-item speed" data-v-ab3eab5e><i class="speed-icon icon" data-v-ab3eab5e></i> <span class="values-name" data-v-ab3eab5e>速度</span> <ul class="values-display" data-v-ab3eab5e>'+e._ssrList(e.roleInfo[e.selectedIndex].base.speed,(function(base){return'<li class="water-drop-icon base" data-v-ab3eab5e></li>'}))+" "+e._ssrList(e.roleInfo[e.selectedIndex].max.speed-e.roleInfo[e.selectedIndex].base.speed,(function(e){return'<li class="water-drop-icon max" data-v-ab3eab5e></li>'}))+" "+e._ssrList(e.roleInfo[e.selectedIndex].threshold.speed-e.roleInfo[e.selectedIndex].max.speed,(function(e){return'<li class="water-drop-icon default" data-v-ab3eab5e></li>'}))+'</ul></li></ul> <ul class="value-reference" data-v-ab3eab5e><li class="reference-item base" data-v-ab3eab5e><i class="water-drop-icon base icon" data-v-ab3eab5e></i> <span class="text" data-v-ab3eab5e>基础值</span></li> <li class="reference-item max" data-v-ab3eab5e><i class="water-drop-icon max icon" data-v-ab3eab5e></i> <span class="text" data-v-ab3eab5e>最大值</span></li></ul></div></div></div>')])}),[],!1,(function(e){var t=l(164);t.__inject__&&t.__inject__(e)}),"ab3eab5e","2d6fd1ce");t.default=component.exports},138:function(e,t){},164:function(e,t,l){"use strict";l.r(t);var d=l(138),n=l.n(d);for(var r in d)"default"!==r&&function(e){l.d(t,e,(function(){return d[e]}))}(r);t.default=n.a}};
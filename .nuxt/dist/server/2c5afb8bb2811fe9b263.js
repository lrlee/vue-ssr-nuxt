exports.ids=[15],exports.modules={113:function(t,n,e){"use strict";e.r(n);var d=e(17),o=e(6),c={props:{selectedType:{type:String,default:"1"}},data:()=>({shareLink:{qzone:"",sina:"",tqq:""}}),computed:{...Object(d.mapState)(["downloadLinks"])},created(){this.setShareLink()},methods:{download(t){console.log(this.downloadLinks),Object(o.b)().then(n=>{"ios"===t?window.open(this.downloadLinks.ios_pc_link,"_blank"):window.open(this.downloadLinks.android_link,"_self")})},setShareLink(){console.log("production");const t=`http://www.paopao.vip:7788/event/${this.selectedType}`;this.shareLink.qzone="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+t+"&title=全民泡泡超人活动&pics=&summary=全民泡泡超人活动",this.shareLink.sina="http://service.weibo.com/share/share.php?url="+t+"&title=全民泡泡超人活动&pic=&searchPic=false",this.shareLink.tqq="https://connect.qq.com/widget/shareqq/index.html?url="+t+"&showcount=0&desc=&summary=&title=全民泡泡超人活动&pics=&style=203&width=19&height=22"}}},r=e(1);var component=Object(r.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"download"},[this._ssrNode('<div class="download-doll" data-v-05274114></div> <div class="btn-bg" data-v-05274114><div class="btn ios-btn" data-v-05274114></div> <div class="btn android-btn" data-v-05274114></div> <div class="btn share-btn" data-v-05274114><div class="share-box" data-v-05274114><div class="btn-item" data-v-05274114><a'+this._ssrAttr("href",this.shareLink.tqq)+' target="_blank" class="qq_icon btn-icon" data-v-05274114></a> <p class="btn-name" data-v-05274114>QQ好友</p></div> <div class="btn-item" data-v-05274114><a'+this._ssrAttr("href",this.shareLink.sina)+' target="_blank" class="sina_icon btn-icon" data-v-05274114></a> <p class="btn-name" data-v-05274114>新浪微博</p></div> <div class="btn-item" data-v-05274114><a'+this._ssrAttr("href",this.shareLink.qzone)+' target="_blank" class="qzone_icon btn-icon" data-v-05274114></a> <p class="btn-name" data-v-05274114>QQ空间</p></div></div></div></div>')])}),[],!1,(function(t){var n=e(155);n.__inject__&&n.__inject__(t)}),"05274114","7572697f");n.default=component.exports},131:function(t,n){},155:function(t,n,e){"use strict";e.r(n);var d=e(131),o=e.n(d);for(var c in d)"default"!==c&&function(t){e.d(n,t,(function(){return d[t]}))}(c);n.default=o.a}};
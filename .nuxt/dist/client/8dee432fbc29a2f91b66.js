(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{358:function(t,e,n){"use strict";n.r(e);n(160),n(42),n(31),n(11),n(119);var o=n(57),c=n(120),r=n(161);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={props:{selectedType:{type:String,default:"1"}},data:function(){return{shareLink:{qzone:"",sina:"",tqq:""}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["downloadLinks"])),created:function(){this.setShareLink()},methods:{download:function(t){var e=this;console.log(this.downloadLinks),Object(r.a)().then((function(n){"ios"===t?window.open(e.downloadLinks.ios_pc_link,"_blank"):window.open(e.downloadLinks.android_link,"_self")}))},setShareLink:function(){console.log("production");var t="http://www.paopao.vip:7788/event/".concat(this.selectedType);this.shareLink.qzone="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+t+"&title=全民泡泡超人活动&pics="+"&summary=".concat("全民泡泡超人活动"),this.shareLink.sina="http://service.weibo.com/share/share.php?url="+t+"&title=全民泡泡超人活动&pic=&searchPic=false",this.shareLink.tqq="https://connect.qq.com/widget/shareqq/index.html?url="+t+"&showcount=0&desc=&summary=&title=全民泡泡超人活动&pics=&style=203&width=19&height=22"}}},l=(n(388),n(10)),component=Object(l.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"download"},[n("div",{staticClass:"download-doll"}),t._v(" "),n("div",{staticClass:"btn-bg"},[n("div",{staticClass:"btn ios-btn",on:{click:function(e){return t.download("ios")}}}),t._v(" "),n("div",{staticClass:"btn android-btn",on:{click:function(e){return t.download("android")}}}),t._v(" "),n("div",{staticClass:"btn share-btn"},[n("div",{staticClass:"share-box"},[n("div",{staticClass:"btn-item"},[n("a",{staticClass:"qq_icon btn-icon",attrs:{href:t.shareLink.tqq,target:"_blank"}}),t._v(" "),n("p",{staticClass:"btn-name"},[t._v("QQ好友")])]),t._v(" "),n("div",{staticClass:"btn-item"},[n("a",{staticClass:"sina_icon btn-icon",attrs:{href:t.shareLink.sina,target:"_blank"}}),t._v(" "),n("p",{staticClass:"btn-name"},[t._v("新浪微博")])]),t._v(" "),n("div",{staticClass:"btn-item"},[n("a",{staticClass:"qzone_icon btn-icon",attrs:{href:t.shareLink.qzone,target:"_blank"}}),t._v(" "),n("p",{staticClass:"btn-name"},[t._v("QQ空间")])])])])])])}),[],!1,null,"4c0aca54",null);e.default=component.exports},375:function(t,e,n){var content=n(389);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("4cd01eb6",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";var o=n(375);n.n(o).a},389:function(t,e,n){e=t.exports=n(29)(!1);var o=n(56),c=o(n(83)),r=o(n(84)),d=o(n(85)),v=o(n(86)),l=o(n(87)),w=o(n(88)),h=o(n(89)),k=o(n(90)),m=o(n(91)),f=o(n(92)),x=o(n(93)),_=o(n(94)),z=o(n(95)),y=o(n(96)),Q=o(n(97)),R=o(n(98)),j=o(n(99)),O=o(n(100)),C=o(n(101)),L=o(n(102)),P=o(n(103)),S=o(n(104)),D=o(n(105)),E=o(n(106)),J=o(n(107)),T=o(n(108)),X=o(n(109)),M=o(n(110)),$=o(n(111)),A=o(n(112)),B=o(n(113)),F=o(n(114)),G=o(n(115)),H=o(n(116)),I=o(n(117)),K=o(n(118)),N=o(n(390)),U=o(n(391)),V=o(n(392)),W=o(n(393)),Y=o(n(394)),Z=o(n(395)),tt=o(n(396)),et=o(n(397)),nt=o(n(398)),at=o(n(399)),ot=o(n(400)),it=o(n(401)),ct=o(n(402));e.push([t.i,".event_content[data-v-4c0aca54]{color:#fff;font-size:.78125vw;margin-top:1.5625vw;line-height:1.5}.event_content .text-dot[data-v-4c0aca54]{display:inline-block;width:.41666667vw;height:.41666667vw;background-color:#fcc723;border-radius:50%;margin-right:.3125vw;margin-bottom:.10416667vw}.event_content .dot-space[data-v-4c0aca54]{margin-left:.72916667vw}.event_content .event-time[data-v-4c0aca54]{line-height:1.30208333vw;width:11.45833333vw;min-width:168px;min-height:19px;background:url("+c+") 0 0 no-repeat;background-size:contain;display:inline-block;padding:0 .52083333vw;margin:1.04166667vw 0 .52083333vw}.event_content .download-btn[data-v-4c0aca54]{position:relative;display:inline-block;width:16.40625vw;height:3.4375vw;background:url("+r+') 50% no-repeat;background-size:contain;-webkit-transition:all .25s linear;transition:all .25s linear}.event_content .download-btn[data-v-4c0aca54]:after{content:"";background-image:url('+d+"),url("+v+")}.event_content .download-btn[data-v-4c0aca54]:hover{background-image:url("+d+")}.event_content .download-btn[data-v-4c0aca54]:active{background-image:url("+v+")}.event_content .download-btn2[data-v-4c0aca54]{position:relative;display:inline-block;width:19.53125vw;height:3.4375vw;background:url("+l+') 50% no-repeat;background-size:contain;-webkit-transition:all .25s linear;transition:all .25s linear}.event_content .download-btn2[data-v-4c0aca54]:after{content:"";background-image:url('+w+"),url("+h+")}.event_content .download-btn2[data-v-4c0aca54]:hover{background-image:url("+w+")}.event_content .download-btn2[data-v-4c0aca54]:active{background-image:url("+h+")}.event_content.normal-event .event-txt .note[data-v-4c0aca54]{margin-top:.78125vw}.event_content.normal-event .event-prize[data-v-4c0aca54]{display:-webkit-box;display:flex;justify-content:space-around;margin-top:2.60416667vw}.event_content.normal-event .download-box[data-v-4c0aca54]{margin-top:2.86458333vw;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.event_content.event1 .event-text .title-img[data-v-4c0aca54]{width:33.22916667vw;height:2.1875vw;background:url("+k+") 0 0 no-repeat;background-size:contain}.event_content.event1 .event-text .note[data-v-4c0aca54]{line-height:2.34375vw}.event_content.event1 .event-prize[data-v-4c0aca54]{width:100%;height:19.27083333vw;background:url("+m+") 50% no-repeat;background-size:contain;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;box-sizing:border-box;padding:0 3.90625vw;margin-top:.78125vw}.event_content.event1 .event-prize .prize-img[data-v-4c0aca54]{width:100%;height:10.41666667vw;margin-bottom:1.82291667vw;background:url("+f+") 50% no-repeat;background-size:contain}.event_content.event1 .event-bottom[data-v-4c0aca54]{position:absolute;bottom:2.60416667vw;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.event_content.event1 .event-bottom .download-btn[data-v-4c0aca54]{z-index:99}.event_content.event1 .event-bottom .download-img1[data-v-4c0aca54]{width:6.25vw;height:5.98958333vw;background:url("+x+") 50% no-repeat;background-size:contain;position:absolute;z-index:11;bottom:2.08333333vw;left:.10416667vw}.event_content.event1 .event-bottom .download-img2[data-v-4c0aca54]{width:12.5vw;height:14.58333333vw;background:url("+_+") 50% no-repeat;background-size:contain;position:absolute;z-index:10;bottom:1.04166667vw;left:.78125vw}.event_content.event2 .event-main[data-v-4c0aca54]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;position:relative}.event_content.event2 .event-main .line_icon[data-v-4c0aca54]{width:1.30208333vw;height:28.64583333vw;background:url("+z+") 0 0 no-repeat;background-size:contain;margin-top:-3.125vw}.event_content.event2 .event-main .event-part[data-v-4c0aca54]{width:23.95833333vw}.event_content.event2 .event-main .event-part .event-txt .note[data-v-4c0aca54]{margin-top:.52083333vw}.event_content.event2 .event-main .event-part .event-prize[data-v-4c0aca54]{margin-top:1.82291667vw}.event_content.event2 .event-main .event-part.first .title-img[data-v-4c0aca54]{width:19.79166667vw;height:2.1875vw;background:url("+y+") 0 0 no-repeat;background-size:contain}.event_content.event2 .event-main .event-part.first .event-prize[data-v-4c0aca54]{width:100%;height:12.29166667vw;background:url("+Q+") 50% no-repeat;background-size:contain}.event_content.event2 .event-main .event-part.second .title-img[data-v-4c0aca54]{width:15.625vw;height:4.58333333vw;background:url("+R+") 0 0 no-repeat;background-size:contain}.event_content.event2 .event-main .event-part.second .event-prize[data-v-4c0aca54]{width:100%;height:12.29166667vw;background:url("+j+") 50% no-repeat;background-size:contain}.event_content.event2 .event-download[data-v-4c0aca54]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:end;align-items:flex-end;margin-top:-1.30208333vw}.event_content.event2 .event-download .download-btn2[data-v-4c0aca54]{z-index:5}.event_content.event2 .event-download .download-doll[data-v-4c0aca54]{width:7.8125vw;height:6.25vw;background:url("+O+") 0 0 no-repeat;background-size:contain;z-index:6;margin-left:-2.60416667vw;margin-bottom:-.46875vw}.event_content.event3 .even-top[data-v-4c0aca54]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.event_content.event3 .even-top .event-txt[data-v-4c0aca54]{width:31.25vw}.event_content.event3 .even-top .event-txt .title-img[data-v-4c0aca54]{width:20.05208333vw;height:2.1875vw;background:url("+C+") 0 0 no-repeat;background-size:contain}.event_content.event3 .even-top .download-btn[data-v-4c0aca54]{margin-top:3.125vw}.event_content.event3 .event-prize[data-v-4c0aca54]{width:100%;height:21.61458333vw;background:url("+L+") 0 0 no-repeat;background-size:contain;margin-top:1.82291667vw}.event_content.event4 .event-part.first .title-img[data-v-4c0aca54]{width:28.64583333vw;height:2.08333333vw;background:url("+P+") 0 0 no-repeat;background-size:contain}.event_content.event4 .event-part.first .event-prize[data-v-4c0aca54]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;justify-content:space-around;margin-top:1.30208333vw}.event_content.event4 .event-part.first .event-prize .prize-img[data-v-4c0aca54]{width:13.02083333vw;height:9.16666667vw}.event_content.event4 .event-part.first .event-prize .prize-img.prize1[data-v-4c0aca54]{background:url("+S+") no-repeat;background-size:contain}.event_content.event4 .event-part.first .event-prize .prize-img.prize2[data-v-4c0aca54]{background:url("+D+") no-repeat;background-size:contain}.event_content.event4 .event-part.second[data-v-4c0aca54]{margin-top:1.82291667vw;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between}.event_content.event4 .event-part.second .event-txt .title-img[data-v-4c0aca54]{width:21.61458333vw;height:4.6875vw;background:url("+E+") 0 0 no-repeat;background-size:contain}.event_content.event4 .event-part.second .event-txt .note[data-v-4c0aca54]{margin-top:.78125vw}.event_content.event4 .event-part.second .event-QR[data-v-4c0aca54]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:start;align-items:flex-start;font-size:.67708333vw}.event_content.event4 .event-part.second .event-QR .QR-box[data-v-4c0aca54]{margin-right:1.30208333vw;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.event_content.event4 .event-part.second .event-QR .QR-box .OR-img[data-v-4c0aca54]{width:5.20833333vw;height:5.20833333vw;border:.15625vw solid #fcc723;outline:.15625vw solid #1e1f34;background-color:#fff;padding:.26041667vw}.event_content.event4 .event-part.second .event-QR .QR-box .OR-img .QR-icon[data-v-4c0aca54]{width:100%;height:100%;background:url("+J+") 50% no-repeat;background-size:contain}.event_content.event4 .event-part.second .event-QR .QR-box .QR-title[data-v-4c0aca54]{color:#fcc723;line-height:1.5;margin-top:.26041667vw}.event_content.event4 .event-part.second .event-QR .QR-box .QR-name[data-v-4c0aca54]{margin-top:.26041667vw;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.event_content.event4 .event-part.second .event-QR .QR-box .QR-name .weibo-icon[data-v-4c0aca54]{width:1.25vw;height:.9375vw;display:inline-block;background:url("+T+") no-repeat;background-size:contain;margin-right:.15625vw}.event_content.event4 .event-part.second .event-QR .QR-box .QR-name .wechat-icon[data-v-4c0aca54]{width:1.14583333vw;height:.9375vw;display:inline-block;background:url("+X+") no-repeat;background-size:contain;margin-right:.15625vw}.event_content.event4 .event-part.second .event-QR .QR-box .QR-link[data-v-4c0aca54]{margin-top:.52083333vw}.event_content.event4 .event-part.second .event-QR .QR-box .QR-link.weibo[data-v-4c0aca54]{width:5.20833333vw;height:1.82291667vw;background:url("+M+') no-repeat;background-size:contain;-webkit-transition:all .25s linear;transition:all .25s linear}.event_content.event4 .event-part.second .event-QR .QR-box .QR-link.weibo[data-v-4c0aca54]:after{content:"";background-image:url('+$+"),url("+A+")}.event_content.event4 .event-part.second .event-QR .QR-box .QR-link.weibo[data-v-4c0aca54]:hover{background-image:url("+$+")}.event_content.event4 .event-part.second .event-QR .QR-box .QR-link.weibo[data-v-4c0aca54]:active{background-image:url("+A+")}.event_content.event5 .event-txt .title-img[data-v-4c0aca54]{width:36.19791667vw;height:2.08333333vw;background:url("+B+") no-repeat;background-size:contain}.event_content.event5 .event-txt .note[data-v-4c0aca54]{width:34.375vw}.event_content.event5 .event-prize[data-v-4c0aca54]{padding:0 1.82291667vw}.event_content.event5 .event-prize .prize-img[data-v-4c0aca54]{width:18.75vw;height:13.02083333vw}.event_content.event5 .event-prize .prize-img.prize1[data-v-4c0aca54]{background:url("+F+") no-repeat;background-size:contain}.event_content.event5 .event-prize .prize-img.prize2[data-v-4c0aca54]{background:url("+G+") no-repeat;background-size:contain}.event_content.event6 .event-txt .title-img[data-v-4c0aca54]{width:22.39583333vw;height:2.08333333vw;background:url("+H+") no-repeat;background-size:contain}.event_content.event6 .event-prize[data-v-4c0aca54]{height:13.02083333vw}.event_content.event6 .event-prize .prize-img[data-v-4c0aca54]{width:23.07291667vw;height:9.42708333vw}.event_content.event6 .event-prize .prize-img.prize1[data-v-4c0aca54]{background:url("+I+") no-repeat;background-size:contain}.event_content.event6 .event-prize .prize-img.prize2[data-v-4c0aca54]{background:url("+K+") no-repeat;background-size:contain}*[data-v-4c0aca54]{padding:0;margin:0;box-sizing:border-box}body[data-v-4c0aca54],html[data-v-4c0aca54]{height:100%;background-color:#fff;-webkit-font-smoothing:antialiased}li[data-v-4c0aca54],ol[data-v-4c0aca54],ul[data-v-4c0aca54]{list-style:none}a[data-v-4c0aca54]{text-decoration:none}button[data-v-4c0aca54]{outline:none}.hide[data-v-4c0aca54]{display:none!important}.text-ellipsis[data-v-4c0aca54]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.transparent[data-v-4c0aca54]{opacity:0}.flex-column-center[data-v-4c0aca54]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.download[data-v-4c0aca54]{margin-left:4.6875vw}.download .download-doll[data-v-4c0aca54]{position:relative;width:8.54166667vw;height:8.64583333vw;background:url("+N+") no-repeat;background-size:contain;z-index:10}.download .btn-bg[data-v-4c0aca54]{position:relative;z-index:8;margin-top:-1.14583333vw;width:8.28125vw;height:12.5vw;background:url("+U+") no-repeat;background-size:contain}.download .btn-bg .btn[data-v-4c0aca54]{display:block;width:8.75vw;height:3.17708333vw;position:absolute;-webkit-transition:all .25s linear;transition:all .25s linear}.download .btn-bg .btn.ios-btn[data-v-4c0aca54]{background:url("+V+') no-repeat;background-size:contain;top:1.45833333vw;left:-.26041667vw}.download .btn-bg .btn.ios-btn[data-v-4c0aca54]:after{content:"";background-image:url('+W+"),url("+Y+")}.download .btn-bg .btn.ios-btn[data-v-4c0aca54]:hover{background-image:url("+W+")}.download .btn-bg .btn.ios-btn[data-v-4c0aca54]:active{background-image:url("+Y+")}.download .btn-bg .btn.android-btn[data-v-4c0aca54]{background:url("+Z+') no-repeat;background-size:contain;top:4.94791667vw;left:-.26041667vw}.download .btn-bg .btn.android-btn[data-v-4c0aca54]:after{content:"";background-image:url('+tt+"),url("+et+")}.download .btn-bg .btn.android-btn[data-v-4c0aca54]:hover{background-image:url("+tt+")}.download .btn-bg .btn.android-btn[data-v-4c0aca54]:active{background-image:url("+et+")}.download .btn-bg .btn.share-btn[data-v-4c0aca54]{width:7.29166667vw;height:2.8125vw;background:url("+nt+') no-repeat;background-size:contain;bottom:1.04166667vw;left:.52083333vw}.download .btn-bg .btn.share-btn[data-v-4c0aca54]:after{content:""}.download .btn-bg .btn.share-btn[data-v-4c0aca54]:after,.download .btn-bg .btn.share-btn[data-v-4c0aca54]:hover{background-image:url('+at+')}.download .btn-bg .btn.share-btn:hover .share-box[data-v-4c0aca54]{opacity:1}.download .btn-bg .btn.share-btn .share-box[data-v-4c0aca54]{opacity:0;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;flex-wrap:wrap;position:absolute;-webkit-transition:all .3s linear;transition:all .3s linear;top:-1.04166667vw;left:-15.88541667vw;width:14.11458333vw;height:5.10416667vw;background-color:#fefefe;border-left:.52083333vw solid #58cc26;border-radius:.52083333vw}.download .btn-bg .btn.share-btn .share-box[data-v-4c0aca54]:after{content:"";width:0;height:0;border-left:.67708333vw solid #fefefe;border-top:.67708333vw solid transparent;border-bottom:.67708333vw solid transparent;position:absolute;right:-.625vw;z-index:-1}.download .btn-bg .btn.share-btn .share-box .btn-item[data-v-4c0aca54]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;padding:0 .52083333vw;cursor:pointer}.download .btn-bg .btn.share-btn .share-box .btn-item .btn-name[data-v-4c0aca54]{font-size:.625vw;color:#a4a4a4;margin-top:.26041667vw}.download .btn-bg .btn.share-btn .share-box .btn-item .btn-icon[data-v-4c0aca54]{width:2.39583333vw;height:2.39583333vw}.download .btn-bg .btn.share-btn .share-box .btn-item .btn-icon.qq_icon[data-v-4c0aca54]{background:url('+ot+") no-repeat;background-size:contain}.download .btn-bg .btn.share-btn .share-box .btn-item .btn-icon.qzone_icon[data-v-4c0aca54]{background:url("+it+") no-repeat;background-size:contain}.download .btn-bg .btn.share-btn .share-box .btn-item .btn-icon.sina_icon[data-v-4c0aca54]{background:url("+ct+") no-repeat;background-size:contain}",""])},390:function(t,e,n){t.exports=n.p+"img/6d16b1b.png"},391:function(t,e,n){t.exports=n.p+"img/dcf99e9.png"},392:function(t,e,n){t.exports=n.p+"img/1f5c9db.png"},393:function(t,e,n){t.exports=n.p+"img/eaeb6a1.png"},394:function(t,e,n){t.exports=n.p+"img/d10c9f4.png"},395:function(t,e,n){t.exports=n.p+"img/f642c9f.png"},396:function(t,e,n){t.exports=n.p+"img/6b479a8.png"},397:function(t,e,n){t.exports=n.p+"img/4459114.png"},398:function(t,e,n){t.exports=n.p+"img/391404f.png"},399:function(t,e,n){t.exports=n.p+"img/889f658.png"},400:function(t,e,n){t.exports=n.p+"img/4914f67.png"},401:function(t,e,n){t.exports=n.p+"img/46dd165.png"},402:function(t,e,n){t.exports=n.p+"img/e999e2e.png"}}]);
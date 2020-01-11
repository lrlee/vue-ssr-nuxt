# bnb-nuxt

> Bubble Superman

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

get: /booking/on_off
预约活动是否开启, true为开,false为活动关闭

post http://127.0.0.1:8080/captcha/sms/booking
country_num:86
mobile:18108186655

post http://127.0.0.1:8080/captcha/sms/booking
country_num:86
mobile:18108186635
sms_captcha:123232
platforms:1
inviter_id:

get: http://127.0.0.1:8080/booking/invited_count/e10548fef8c23077

#game_zh.json数据
http://api.paopao.vip/activityitems/localizetojson/0

GET: /news/type  //获取新闻类型
GET: /news/page/one  //获取新闻最新等列表
GET: /news/random //随便看看
GET: /news/top       //置顶新闻,不分页一次给完
GET: /news/item?page=1&limit=10      //新闻主列表要分页
GET: /news/item/one  //新闻详情包含内网预览
Get: /news/search/:title //根据标题查询新闻




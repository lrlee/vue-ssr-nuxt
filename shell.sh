#!/bin/sh
curl -H "Content-Type:application/json" -X POST --data '{"out_port": 10085,"in_port": 8006,"server_name":"www.paopao.vip paopao.vip","path":"/var/www/paopao/nuxtjs_test"}' http://127.0.0.1:9080/set_nuxt_kv
cd /var/www/paopao/nuxtjs_test
npm install

<template>
    <div class="news-card">
        <p class="top-title">LPL百大经典战役特辑2月5日播出</p>
        <div class="news-list">
            <ul class="news-list">
                <li class="news-item" v-for="item in newsList" :key="item.id">
                    <div class="left-box">
                        <span class="sort">[评测]</span>
                        <span class="title">{{item.title}}</span>
                    </div>
                    <div class="date">{{item.date}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:['newsList']
}
</script>
<style lang="less" scoped>
    @r:1vw/19.2;
    .news-card{
        height: 370*@r;
        padding-top: 20*@r;
        box-sizing: border-box;
        .top-title{
            height:42*@r;
            background:rgba(47,53,78,1);
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(255,201,11,1);
            line-height: 42*@r;
            text-align: center;
        }
        .news-list{
            padding: 0 11px 0 15px;
            .news-list{
                .news-item{
                    display: flex;
                    justify-content: space-between;
                    .left-box{
                        .sort{
                            font-size: 14px;
                            color: #FFFFFF;
                        }
                        .title{
                            font-size: 14px;
                            color: #FFFFFF;
                        }
                    }
                    .date{
                        font-size: 14px;
                        color: #9294A0;
                    }
                }
            }
        }
    }
</style>

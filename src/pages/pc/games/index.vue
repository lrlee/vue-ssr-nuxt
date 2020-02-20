<template>
    <div class="container">
        <Header></Header>
        <div class="games_container">
            <p class="title_en">ALL GAME IN HERE</p>
            <p class="title_zh">游戏汇聚地</p>
            <p class="desc">
                
                                精霊や大自然の声を聞くことが出来るカムイの戦士。 大自然や動物を心から愛する優しい少女で、
普段は村で家族と平穏に過ごしている。 しかし、自然の危機を感じた際は村から旅立ち、『自然を
守る』という使命に命懸けで挑む。 大自然を脅かす邪な敵を倒す。
                            
            </p>
            <div class="games_list_container">
                <ul class="games_list">
                    <li class="game_item":class="type==v.id?'active':''" v-for="v in typeArr" :key="v.id" @click="changeTab(v.id)">
                        <span class="select"></span>
                        <span class="game_sort">{{v.title}}</span>
                        <span class="icon">{{type==v.id?'-':'+'}}</span>
                    </li>
                </ul>
            </div>
            <div class="games_content_container">
                <ul class="content_list" :v-if="games.length">
                    <li class="content_item"  v-for="v in games" :key="v.id" :id="v.id" @click="toGameDetail(v.id)">
                        <img :src="require(`@/assets/images/games/game_${v.id}.png`)" :alt="v.name">
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="flag">
            <modal-temp  :info="singeGameInfo[0]" ></modal-temp>
        </div>
    </div>
</template>

<script>
import Header from '@/components/pc/header'
import gamesData from './games'
import ModalTemp from './modal'
export default {
    data(){
        return {
            games:gamesData,
            flag:false,
            singeGameInfo:{},
            type:1,
            typeArr:[
                {
                    id:1,
                    title:'全部游戏'
                },
                {
                    id:2,
                    title:'拳皇系列'
                },
                {
                    id:3,
                    title:'街霸系列'
                },
                {
                    id:4,
                    title:'侍魂系列'
                }
            ]
        }
    },
    components:{
        Header,
        ModalTemp
    },
    mounted(){
        console.log(gamesData,"gamesss")
    },
    methods:{
        toGameDetail(id){
            this.flag = true
            this.singeGameInfo = this.games.filter(v=>v.id==id)
        },
        changeTab(num){
            this.type = num 
            this.games = num==1?gamesData:gamesData.filter(v=>v.type==num)
        }
    }
}
</script>
<style lang="less" scoped>
    @r:1vw/19.2;
    .container{
        width:100%;
        height:100%;
        background:#020002;
        padding-bottom: 50*@r;
        .games_container{
            width:1280*@r;
            padding-top: 95*@r;
            margin:0 auto;
            .title_en{
                font-size:36*@r;
                font-family:Rajdhani;
                font-weight:bold;
                color:rgba(255,201,11,1);
                margin-bottom: 15*@r;
            }
            .title_zh{
                font-size:92*@r;
                font-family:SourceHanSerifCN;
                font-weight:bold;
                color:rgba(255,255,255,1);
            }
            .desc{
                font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:30px;
                margin: 20px 0 55px;
            }
            .games_list_container{
                margin-bottom: 15px;
                .games_list{
                    display: flex;
                    .game_item{
                        // width:199*@r;
                        height:74*@r;
                        background:rgba(21,23,32,1);
                        box-shadow:1px 0px 0px 0px rgba(36,38,51,1);
                        padding: 0 20*@r;
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        &.active{
                            background:rgba(255,201,11,1);
                            .select{
                                background:rgba(0,0,0,1);
                            }
                            .game_sort{
                                color:rgba(0,0,0,1);
                            }
                            .icon{
                                color: #000000;
                            }
                        }
                        .select{
                            width:28*@r;
                            height:28*@r;
                            background:rgba(36,38,51,1);
                        }
                        .game_sort{
                            font-size:15px;
                            font-family:Microsoft YaHei;
                            font-weight:bold;
                            color:rgba(255,255,255,1);
                            margin: 0 51*@r 0 16*@r;
                        }
                        .icon{
                            color: #BCC1DE;
                        }
                    }
                }
            }
            .games_content_container{
                padding-top: 15px;
                .content_list{
                    display: flex;
                    flex-wrap: wrap;
                    .content_item{
                        width:305*@r;
                        height:190*@r;
                        background:rgba(21,23,32,1);
                        margin: 20px 20*@r 0 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        img{
                            max-width:305*@r;
                            max-height:190*@r;
                            display: block;
                        }
                        &:nth-of-type(4n){
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }
</style>

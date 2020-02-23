<template>
  <div class="home-container">
      <div class="first-part">
        <div class="download-btn">下载客户端</div>
        
      </div>
      <div class="second-part">
        <div class="hot-info-box">
              <div class="info-item"></div>
              <div class="info-item"></div>
              <div class="info-item"></div>
            </div>
         <div class="second-container">
            
           <div class="top-title-container">
              <div class="left-info">
                <p class="en-title">GAME NEWS</p>
                <p class="zh-title">行业快讯</p>
              </div>
              <div class="right-box">
                <span class="add">+</span>
                <span class="more">更多资讯</span>
              </div>
         </div>
          <div class="middle-container">
              <div class="left-banner">

              </div>
              <div class="news-container">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="最新" name="first">
                      <News :newsList='newsList'/>
                    </el-tab-pane>
                    <el-tab-pane label="赛事" name="second"></el-tab-pane>
                    <el-tab-pane label="新闻" name="third"></el-tab-pane>
                    <el-tab-pane label="活动" name="fourth"></el-tab-pane>
                    <el-tab-pane label="攻略" name="fourth"></el-tab-pane>
                </el-tabs>
              </div>
          </div>
          <div class="bottom-container">
            <ul class="image-list">
              <li class="image-item">
                <image/>
              </li>
              <li class="image-item">
                <image/>
              </li>
              <li class="image-item">
                <image/>
              </li>
              <li class="image-item">
                <image/>
              </li>
            </ul>
          </div>
         </div>
      </div>
      <div class="third-part">
          <div class="third-info-container">
              <p class="en-title">ESPORTS EVENT</p>
              <p class="zh-title">专业电竞赛事独家天梯自动匹配</p>
              <p class="desc">格斗家竞技场平台推出的特别玩法，玩家通过花费铜板购买后，在购买的时限内可以无限制的参与特定游戏的天梯对战匹配，并获得对应武道邀请函的等级经验、斗币以及天梯分。</p>
              <p class="entry-btn">武道函入口</p>
          </div>
      </div>
      <div class="four-part">
          <div class="four-info-container">
              <p class="en-title">ESPORTS EVENT</p>
              <p class="zh-title">经典汇集于此更有热门加速优化</p>
              <p class="desc">上百款经典游戏内嵌平台，支持市面上99%的格斗游戏。全球联网对战加速，加速器解决跨国/地区延迟。最新热门STEAM格斗游戏，支持在线实时决斗。</p>
              <div class="num-box">
                 <ul class="num-list">
                    <li class="num-item">
                       <p class="num">100+</p>
                       <span class="text">游戏种类超多</span>
                    </li>
                    <li class="num-item">
                       <p class="num">30ms</p>
                       <span class="text">低延迟</span>
                    </li>
                    <li class="num-item">
                       <p class="num">10+</p>
                       <span class="text">覆盖多个国家</span>
                    </li>
                 </ul>
              </div>
          </div>
      </div>
      <div class="five-part">
        <div class="five-info-container">
            <div class="top-info">
                <p class="en-title">ESPORTS EVENT</p>
                <div class="left-info">
                  <p class="zh-title">视频攻略</p>
                  <p class="entry">攻略入口</p>
                </div>
                
            </div>
            <div class="video-container">
                <span class="left-arrow"></span>
                <div class="video-box">
                    <el-carousel class="carousel-container" :interval="5000" arrow="always">
                      <el-carousel-item class="carousel-item" v-for="item in 4" :key="item">
                        <div class="video-item">
                            <image class="image" />
                            <div class="info-box">
                               <span class="type">公告</span>
                               <p class="title">格斗家重温经典</p>
                               <p class="desc">我们玩过的侍魂、拳皇系列、街头霸王、双截龙等等一堆经典到不能再经典的FGT游戏，都是令人无比怀念的童年时光。</p>
                              <p class="date">2020-03-31  20:20</p>
                            </div>
                        </div>
                      </el-carousel-item>
                    </el-carousel>
                </div>
                <span class="right-arrow"></span>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import News from './components/news'
export default {
  data() {
    return {
      activeName: 'first',
      newsList: [
        {
          id: 1,
          title: '《生化危机8》新情报：或于2年后发布 更侧重于动作',
          date: '04-19'
        },
        {
          id: 2,
          title: '宫本茂：任天堂品牌成长不能靠硬件',
          date: '04-19'
        },
        {
          id: 3,
          title: '华为、小米、OPPO联手打造“GDSA”对抗谷歌',
          data: '04-18'
        },
        {
          id: 4,
          title: '研究显示：肌肉多的人对抗癌症更有力',
          data: '04-17'
        }
      ]
    }
  },
  components: {
    News
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="less" scoped>
@r: 1vw/19.2;
.home-container {
  overflow-x: hidden;
  .first-part {
    height: 1081*@r;
    background: linear-gradient(45deg, rgba(120, 0, 255, 1), rgba(117, 0, 252, 1), rgba(64, 0, 140, 1));
    position: relative;
    overflow-x: hidden;
    .download-btn {
      position: absolute;
      top: 673*@r;
      left: 321*@r;
      width: 241*@r;
      height: 42*@r;
      background: rgba(255, 201, 11, 1);
      border-radius: 21*@r;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      cursor: pointer;
    }
    
  }
  .second-part {
    height: 1009*@r;
    background: rgba(0, 0, 0, 1);
    padding-top: 205*@r;
    box-sizing: border-box;
    position: relative;
    .hot-info-box {
      position: absolute;
      left: 205*@r;
      top: -120*@r;
      display: flex;
      .info-item {
        width: 490*@r;
        height: 235*@r;
        box-shadow: 0px -5px 20*@r 0px rgba(0, 0, 0, 0.35);
        margin-right: 20*@r;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .second-container{
      width: 1280*@r;
      margin: auto;
     
      .top-title-container {
        display: flex;
        justify-content: space-between;
        .left-info{
          .en-title{
            font-size:24*@r;
            font-family:Rajdhani;
            font-weight:bold;
            color:rgba(255,201,11,1);
            line-height:64*@r;
          }
          .zh-title{
            font-size:48*@r;
            font-family:SourceHanSerifCN;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height:64*@r;
          }
        }
        .right-box{
          display: flex;
          align-items: flex-end;
          .add{
            color: #FFC90B;
            margin-right: 10px;
          }
          .more{
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(255,255,255,1);
            cursor: pointer;
          }
        }
      }
      .middle-container{
        margin-top: 28*@r;
        display: flex;
        .left-banner{
          width:718*@r;
          height:425*@r;
          background:rgba(20,9,87,1);
          margin-right: 22*@r;
        }
        .news-container{
          width:540*@r;
          height:425*@r;
          background:rgba(32,38,57,1);
          padding: 20*@r;
        }
      }
      .bottom-container{
        margin-top: 30*@r;
        .image-list{
          display: flex;
          .image-item{
            width:305*@r;
            height:140*@r;
            margin-right: 20*@r;
            background: red;
            &:last-child{
              margin-right: 0;
            }
          }
        }
      }
    }
    
  }
  .third-part{
    width:1920*@r;
    height:895*@r;
    background:rgba(7,8,10,1);
    position: relative;
    .third-info-container{
      position: absolute;
      top:150*@r;
      left:320*@r;
      .en-title{
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(255,196,16,1);
        line-height:84*@r;
      }
      .zh-title{
        width:543px;
        height:150*@r;
        font-size:68px;
        font-family:SourceHanSerifCN;
        font-weight:800;
        color:rgba(255,255,255,1);
        line-height:84*@r;
      }
      .desc{
        width:504px;
        height:60*@r;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(174,172,176,1);
        line-height:24*@r;
        margin: 44*@r 0 70*@r;
      }
      .entry-btn{
        width:248px;
        height:62px;
        background:rgba(255,196,16,1);
        font-size:18px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(7,8,10,1);
        line-height:62px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .four-part{
    height: 864*@r;
    position: relative;
    background: #000;
    .four-info-container{
        position: absolute;
        top: 187*@r;
        right: 320*@r;
        .en-title{
          font-size:18px;
          font-family:Microsoft YaHei;
          font-weight:bold;
          color:rgba(255,196,16,1);
          line-height:84*@r;
        }
        .zh-title{
          width:543px;
          height:150*@r;
          font-size:68px;
          font-family:SourceHanSerifCN;
          font-weight:800;
          color:rgba(255,255,255,1);
          line-height:84*@r;
        }
        .desc{
          width:504px;
          height:60*@r;
          font-size:14px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(174,172,176,1);
          line-height:24*@r;
          margin: 44*@r 0 70*@r;
        }
        .num-box{
          .num-list{
            display: flex;
            .num-item{
              margin-right: 100*@r;
              &:last-child{
                margin-right: 0;
              }
              .num{
                font-size:48px;
                font-family:Rajdhani;
                font-weight:bold;
                color:rgba(255,201,11,1);
              }
              .text{
                font-size:15px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(255,255,255,1);
                margin-top: 18px;
              }
            }
          }
        }
    }
  }
  .five-part{
    height: 900*@r;
    padding-top: 174*@r;
    box-sizing: border-box;
    background: #000;
    .five-info-container{
      width: 1604*@r;
      margin: auto;
      .top-info{
        padding: 0 80*@r;
        .en-title{
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(255,196,16,1);
            line-height:84*@r;
          }
        .left-info{
          display: flex;
          justify-content: space-between;
          align-items: center;
          .zh-title{
            font-size:68px;
            font-family:SourceHanSerifCN;
            font-weight:800;
            color:rgba(255,255,255,1);
            line-height:84*@r;
          }
          .entry{
            width:149px;
            height:50px;
            line-height: 50px;
            text-align: center;
            background:rgba(255,201,11,1);
            font-size:18px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(0,0,0,1);
            cursor: pointer;
          }
        }
        
      }
      .video-container{
          display: flex;
          margin-top: 59*@r;
          >span{
            width:76*@r;
            height:489*@r;
            background:rgba(25,37,45,1);
            cursor: pointer;
          }
          .video-box{
            width: 1444*@r;
            margin: 0 4px;
            .carousel-container{
              display: flex;
              .carousel-item{
                margin-right: 4px;
                &:last-child{
                  margin-right: 0;
                }
                .video-item{
                  width:358*@r;
                  height:489*@r;
                  background:rgba(28,41,50,1);
                  .image{
                    display: block;
                    height:224*@r;
                  }
                  .info-box{
                    padding: 25*@r 0 34*@r 30*@r;
                    display: flex;
                    flex-direction: column;
                    height: 489*@r - 224*@r;
                    box-sizing: border-box;
                    .type{
                      font-size:16px;
                      font-family:Microsoft YaHei;
                      font-weight:bold;
                      color:rgba(255,222,0,1);
                    }
                    .title{
                      font-size:30px;
                      font-family:Microsoft YaHei;
                      font-weight:400;
                      color:rgba(255,255,255,1);
                      margin: 10*@r 0 20*@r;
                      overflow: hidden;
                      text-overflow:ellipsis;
                      white-space: nowrap;
                    }
                    .desc{
                      height:3.8vw;
                      font-size:16px;
                      font-family:Microsoft YaHei;
                      font-weight:400;
                      color:rgba(121,143,164,1);
                      line-height:22px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -webkit-box;
                      -webkit-line-clamp: 3;
                      -webkit-box-orient: vertical;
                    }
                    .date{
                      font-size:14px;
                      font-family:Arial;
                      font-weight:400;
                      color:rgba(23,205,159,1);
                      margin-top: 40*@r;
                    }
                  }
                }
              }
            }
            
          }
        }
    }
  }
}
</style>

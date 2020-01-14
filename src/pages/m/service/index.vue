<template>
  <div>
    <nav class="nav">
      <ul class="tab">
        <template v-for="(type, i) in types">
          <li :key="i" :class="{ active: selectedIndex === i }" @click="selectType(i)" class="tab-item">
            <span>{{ type.type }}</span>
            <span class="line"></span>
          </li>
        </template>
        <li class="tab-space"></li>
      </ul>
    </nav>
    <section class="content">
      <nuxt-link :to="`/m/service/contact?ip=${ip}`" class="contact-animation"></nuxt-link>
      <div class="QA-box">
        <template v-for="(list, index) in lists">
          <ul :key="index" v-if="selectedIndex === index" class="QA-list">
            <template v-for="(item, i) in list">
              <nuxt-link
                :key="i"
                :to="`/m/service/QA/${item._id}?type=${types[index].type}&index=${i}&ip=${ip}`"
                class="item-a"
              >
                <li class="list-item">
                  <span class="item-left">{{ item.title }}</span>
                  <div class="item-link">
                    <span class="icon arrow_right"></span>
                  </div>
                </li>
              </nuxt-link>
            </template>
            <li class="list-item contact-service">
              <span class="item-left">如需进一步帮助，请</span>
              <nuxt-link :to="`/m/service/contact?ip=${ip}`" class="contact-service-link">联系客服</nuxt-link>
            </li>
          </ul>
        </template>
      </div>
    </section>
  </div>
</template>
<script>
import { getQATypes, getQALisyByType } from '~/api/service'
import * as local from '@/utils/local'
export default {
  layout: 'serviceM',
  data() {
    return {
      selectedIndex: 0,
      lists: [],
      ip: ''
    }
  },
  async asyncData() {
    const types = await getQATypes()
    console.log('types', types.data)
    if (types.data && types.data.length > 0) {
      return getQALisyByType(types.data[0]._id).then(res => {
        const list1 = res.data
        console.log('okok', list1)
        return {
          types: types.data,
          list1
        }
      })
    } else {
      return {
        types: types.data,
        list1: []
      }
    }
  },
  mounted() {
    this.ip = local.getIP() || ''
  },
  created() {
    this.$set(this.lists, 0, this.list1)
  },
  methods: {
    selectType(index) {
      if (!this.lists[index]) {
        getQALisyByType(this.types[index]._id).then(res => {
          this.$set(this.lists, index, res.data)
          this.selectedIndex = index
        })
      } else {
        this.selectedIndex = index
      }
    }
  }
}
</script>
<style lang="less" scoped>
@vw: 1vw/13.34;
@vh: 1vh/7.5;
@vmin: 1vmin/7.5;

@media screen and (orientation: portrait) {
  @vw: 1vw/7.5;
  @vmin: 1vmin/13.34;
  .tab {
    font-size: 26 * @vw !important;
    li.tab-item {
      flex: 1;
      padding: 0 !important;
      &:nth-last-child(2) {
        border-top-right-radius: 10 * @vmin;
      }
    }
    .tab-space {
      display: none !important;
    }
  }
  .content {
    padding-top: 20 * @vw;
  }
}
.nav {
  width: 100%;
  height: 90 * @vh;
  border-top-left-radius: 10 * @vmin;
  border-top-right-radius: 10 * @vmin;
}
.tab {
  height: 100%;
  width: 100%;
  font-size: 28 * @vmin;
  display: flex;
  align-items: center;
  .tab-space {
    flex: 2;
    height: 100%;
    background-color: rgb(10, 37, 57);
    opacity: 0.6;
    border-top-right-radius: 10 * @vmin;
  }
  .tab-item {
    background-color: rgb(10, 37, 57);
    position: relative;
    display: block;
    line-height: 90 * @vh;
    padding: 0 59 * @vw;
    opacity: 0.6;
    text-align: center;
    transition: all 0.3s linear;
    &:first-of-type {
      border-top-left-radius: 10 * @vmin;
    }
    .line {
      transition: all 0.3s linear;
      position: absolute;
      width: 36 * @vmin;
      height: 6 * @vmin;
      border-radius: 3px;
      background-color: #ffca14;
      bottom: 10 * @vmin;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
    }
    &.active {
      opacity: 1;
      background-color: transparent;
      .line {
        opacity: 1;
      }
    }
  }
}
.content {
  width: 100%;
  height: 530 * @vh;
  box-sizing: border-box;
  font-size: 26 * @vmin;
  position: relative;
  overflow: auto;
  .contact-animation {
    position: absolute;
    bottom: 46 * @vh;
    right: 118 * @vw;
    width: 130px * 0.5;
    height: 164px * 0.5;
    background: url('~assets/images/service/contact_animation.png');
    background-size: cover;
    background-position: 0;
    animation: contactA 1.8s infinite steps(32, end);
    // transform: scale(0.5);
  }
  @keyframes contactA {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 4160px * 0.5;
    }
  }
  .QA-list {
    padding: 0 40 * @vw;
    .item-a {
      color: #fff;
    }
    .list-item {
      line-height: 83 * @vmin;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1 * @vmin solid #2384ca;
      .item-left {
        margin-left: 20 * @vmin;
      }
      .item-link {
        padding-right: 20 * @vmin;
        padding-left: 50 * @vmin;
        height: 82 * @vmin;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .arrow_right {
          display: inline-block;
          width: 14 * @vmin;
          height: 25 * @vmin;
          background: url('~assets/images/service/arrow_right.png') no-repeat;
          background-size: contain;
        }
      }
      &.contact-service {
        height: 110 * @vmin;
        justify-content: flex-start;
        border-bottom: none;
        .contact-service-link {
          color: #ffca14;
          text-decoration: underline;
          transition: all 0.3s linear;
          margin-left: 3 * @vmin;
          &:active {
            color: #ffdc62;
          }
        }
      }
    }
  }
}
</style>

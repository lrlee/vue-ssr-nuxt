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
<style lang="less" scoped></style>

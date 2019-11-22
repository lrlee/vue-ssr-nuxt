<template>
  <div>
    <component :is="currentContent" />
  </div>
</template>

<script>
import Event1 from './Event1'
import Event2 from './Event2'
import Event3 from './Event3'
import Event4 from './Event4'
import Event5 from './Event5'
import Event6 from './Event6'
export default {
  components: {
    Event1,
    Event2,
    Event3,
    Event4,
    Event5,
    Event6
  },
  props: {
    selectedType: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {}
  },
  computed: {
    currentContent() {
      return `Event` + this.selectedType
    }
  }
}
</script>
<style lang="less" scoped></style>

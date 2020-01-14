<template>
  <div class="error-page">
    <div class="error">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48">
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
        />
      </svg>

      <div class="title">{{ message }}</div>
      <NuxtLink v-if="statusCode === 404" class="error-link" to="/">返回首页</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.statusCode === 404 ? '页面不存在' : this.error.message
    }
  },
  layout: 'simple'
}
</script>

<style>
.error-page {
  padding: 1rem;
  background: #f7f8fb;
  color: #47494e;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.error-page .error {
  max-width: 800px;
}
.error-page .title {
  font-size: 1.5rem;
  margin-top: 15px;
  color: #47494e;
  margin-bottom: 8px;
}
.error-link {
  display: block;
  margin-top: 20px;
  font-size: 18px;
  color: #7f828b;
}
</style>

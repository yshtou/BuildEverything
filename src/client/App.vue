<template>
  <div class="app full-height">
    <h1>{{ message }}</h1>
    <router-link :to="{ name: 'hello' }">前往hello页面</router-link>
    <router-link :to="{ name: 'about' }">前往about页面</router-link>
    <router-view></router-view>
    <el-button @click="visible = true">点我</el-button>
      <el-dialog v-model="visible" title="你好啊">
      <p>你确定要点开我？</p>
    </el-dialog>
  </div>

</template>
<script>
export default {
  data () {
    return {
      message: '我是主页',
      visible:  false
    }
  }
}
</script>

<style>
  
</style>

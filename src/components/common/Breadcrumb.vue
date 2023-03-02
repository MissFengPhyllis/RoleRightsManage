<!--  -->
<template>
<div>
    <el-card>
        <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item 
    v-for="(item, index) in breadList" :key="index"
    >{{item.name}}</el-breadcrumb-item>
   
  </el-breadcrumb>
    </el-card>
</div>
</template>

<script>
export default {
name:'',
components: {},
data() {
return {
};
},
computed:{
  breadList(){
      //获取匹配的路由
      return this.$route.matched;
  }  
},

}
</script>
<style scoped>
/* @import url(); 引入公共css类 */

</style>
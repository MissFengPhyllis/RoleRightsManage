<!--  -->
<template>
    <div class="container">
        <p class="text404">404</p>
        <p class="textline">你访问的页面不见了</p>
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
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style scoped>
/* @import url(); 引入公共css类 */
.container {
    background: rgb(39, 88, 163);
	height: 100%;
	width: 100%;
	/* background-color: #FAFAFA; */
	position: fixed;
}

.text404{
    font-size: 100px;
    color: white;
   text-align: center;
    position:absolute;
    left:50%; 
    top:50%;
    margin:-100px 0 0 -100px ;
}
.textline{
      font-size: 20px;
      color: white;
   text-align: center;
    position:absolute;
    left:50%; 
    top:50%;
    margin:30px 0 0 -100px ;
}

</style>
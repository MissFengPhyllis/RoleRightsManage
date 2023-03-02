<template>
  <div>
    <el-tree
      :data="menus"
      show-checkbox
      node-key="id"
      :props="defaultProps"
      ref="tree"/>

      <el-button @click="getCheckedNodes">通过node节点获取</el-button>
  </div>
</template>

<script>
import { useRouter } from "vue-router"
export default {
    data(){
        return{
            menus:[],
            defaultProps:{
                label: 'name',
                chlidren:'children'
            }
        }
    },
    created(){
         const router = useRouter();
    // console.log(router.options.routes)
    this.menus = [...router.options.routes]
    //这里应该是根据不同的角色进行菜单数据的选择，使用树形控件实现，将选择后的数据提交到一个后端接口中，然后登录的时候通过角色来判断并在页面进行渲染。 动态添加路由用 addRoutes的方法。
    console.log(this.menus)
    },

    methods:{
        getCheckedNodes(){
            let arr = this.$refs.tree.getCheckedNodes()
            console.log(arr)
        }
    }
}
</script>
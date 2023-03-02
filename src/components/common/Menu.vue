<!-- header -->
<template>
<div class='menu'>
    <el-aside width="200px">
        <el-menu
            router
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="rgb(39, 88, 163)"
            text-color="#fff"
            active-text-color="#ffd04b">
        <template v-for="(item, index) in menus">
             <el-sub-menu :index="index + ''" v-if="!item.hidden" :key="index">
          <template #title>
              <!-- 动态绑定图图标 element -plus + vue3 -->
            <el-icon>
                <component :is="item.iconClass"></component>
            </el-icon>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group v-for="(child, index) in item.children" :key="index"> 
            <el-menu-item :index="child.path">
                <el-icon>
                    <component :is="child.iconClass"></component>
                </el-icon>
                <span>{{child.name}}</span>
            </el-menu-item>
          </el-menu-item-group>
           
        </el-sub-menu>
        </template>
       
        
        </el-menu>
    </el-aside>
</div>
</template>

<script>
// import {Location, Setting, Menu ,Document} from '@element-plus/icons'
import { useRouter } from "vue-router"
export default {
name:'',
components: {},
data() {
return {
    menus: []
    };   
},
created() {
    // vue3获取所有的路由
    const router = useRouter();
    // console.log(router.options.routes)
    this.menus = [...router.options.routes]
    console.log(this.menus)

},
methods:{
    methods: {
        handleOpen(key, keyPath) {
        //console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
       // console.log(key, keyPath);
        },
    },
},
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入公共css类 */
.menu{
    .el-aside{
        height: 100%;
        .el-menu{
            height: 100%;
        }
        .el-submenu .el-menu-item{
            min-width: 0;
        }
    }
}
</style>
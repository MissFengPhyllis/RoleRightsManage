<!-- header -->
<template>
<div class='menu'>
    <el-aside width="200px">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="rgb(39, 88, 163)"
            text-color="#fff"
            active-text-color="#ffd04b">

             <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
        </el-menu>
    </el-aside>
</div>
</template>

<script>
// import {Location, Setting, Menu ,Document} from '@element-plus/icons'

export default {
name:'',
components: {},
data() {
return {
    }   
},
methods:{
    methods: {
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
        console.log(key, keyPath);
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
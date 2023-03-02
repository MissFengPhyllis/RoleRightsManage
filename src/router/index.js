import Vue from 'vue'

// import Home from '../components/Home.vue'


import { createRouter, createWebHistory } from 'vue-router'
 
const routerHistory = createWebHistory()
 
 
const routes=[
    {
        path:'/',
        redirect:'/login',
        name:'首页',
        hidden: true,
        component: ()=> import('@/components/Login')  
    },
    {
        path:'/login',
        name:'Login',
        hidden: true,
        component: ()=> import('@/components/Login')  
    },
    {
        path:'/404',
        name:'NotFound',
        hidden: true,
        component: ()=> import('@/components/NotFound')  //404错误页面
    },
    {
        path:'/:pathMatch(.*)',
        hidden: true,
        redirect:'/404',  //404错误页面
    },
    // {
    //     path:'/home',
    //     name:'Home',
    //     component: ()=> import('@/components/Home')  //home页
    // }
    {
        path:'/home',
        name:'学生管理',
        iconClass: 'location',
        redirect:'/home/student',
        component: ()=> import('@/components/Home'),  //home页
        children:[
            {
                path:'/home/student',
                name:'学生列表',
                iconClass: 'setting',
                component: ()=> import('@/components/students/StudentList')
            },
            {
                path:'/home/info',  //自定义的路径
                name:'信息列表',
                iconClass: 'menu',
                component: ()=> import('@/components/students/InfoList')  //路由地址
            },
            {
                path:'/home/infos',
                name:'信息管理',
                iconClass: 'setting',
                component: ()=> import('@/components/students/InfoLists')
            },
            {
                path:'/home/work',
                name:'作业列表',
                iconClass: 'location',
                component: ()=> import('@/components/students/WorkList')
            },
            {
                path:'/home/works',
                name:'作业管理',
                iconClass: 'setting',
                component: ()=> import('@/components/students/WorkMent')
            },
        ]
    },

    {
        path:'/home',
        name:'数据分析',
        iconClass: 'menu',
        component: ()=> import('@/components/Home'),  //home页
        children:[
            {
                path:'/home/dataview',
                name:'数据概览',
                iconClass: 'tools',
                component: ()=> import('@/components/dataAnalysis/DataView')
            },
            {
                path:'/home/mapview',  //自定义的路径
                name:'地图预览',
                iconClass: 'lock',
                component: ()=> import('@/components/dataAnalysis/MapView')  //路由地址
            },
            {
                path:'/home/scoremap',
                name:'成绩地图',
                iconClass: 'view',
                component: ()=> import('@/components/dataAnalysis/ScoreMap')
            },
            {
                path:'/home/travelmap',
                name:'旅行地图',
                iconClass: 'MapLocation',
                component: ()=> import('@/components/dataAnalysis/TravelMap')
            }
        ]
    },

    {
        path:'/users',
        name:'用户中心',
        iconClass: 'user',
        component: ()=> import('@/components/Home'),  //home页
        children:[
            {
                path:'/users/user',
                name:'权限管理',
                iconClass: 'user',
                component: ()=> import('@/components/users/User')
            },
        ]
        
        
    }
]
const router = createRouter({
    history: routerHistory,
 routes
})
 
export default router

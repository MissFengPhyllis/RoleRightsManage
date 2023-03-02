//在项目中，我们大多数时间都会把对应的接口封装成为api来调用
import service from "@/service";
import qs from 'qs';

//登录接口
export function login(data) {
    return service({
        method: 'post',
        url: 'api/login',
        data
    })
}

//学生列表查询接口
export function students(params) {
    return service({
        method: 'get',
        url: '/api/students',
        params
    })
}

//学生列表删除接口
export function studentDel(id) {
    return service({
        // 这里的方法需要注意，删除是写delete函数
        method: 'delete',
        // 这里因为要拼接id，所以要用 ` `这个符号，包裹url字符串，然后在后面通过 ${}这个方法，将要传参的值放在括号里面
        url: `/api/students/${id}`
    })
}

//信息列表新增接口
// qs.stringify 是把一个参数对象格式化为一个字符串。
export function info(data) {
    data = qs.stringify(data)
    return service({
        method: 'post',
        url: '/api/info',
        data
    })
}

//信息列表查询接口
export function getInfo() {
    return service({
        method: 'get',
        url: '/api/info',

    })
}

//信息列表新增接口
// qs.stringify 是把一个参数对象格式化为一个字符串。
export function updateInfo(data) {
    data = qs.stringify(data)
    return service({
        method: 'put',
        url: '/api/info',
        data
    })
}

export function delInfo(id){
    return service({
        method: 'delete',
        url: `/api/info/${id}`,
    })
}

// 数据概览接口
export function dataview(){
    return service({
        method:'get',
        url:'/api/dataview'
    })
}

//旅游地图的接口
export function travel(){
    return service({
        method:'get',
        url:'/api/travel'
    })
}

<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="form"
        ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item  label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="login('form')">登录</el-button>
    </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import{nameRule,passRule} from '../utils/validate.js'
import{setToken,getToken,removeToken} from '../utils/setToken.js'
import{login} from '../api/api.js'
export default {
  name: "",
  components: {},
  data() {
    return {
        form:{
            username:'',
            password:''
        },
        rules:{
          username:[{validator: nameRule,trigger:'blur'}],
          password:[{validator: passRule,trigger:'blur'}]
        }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: { 
    //2As@#23ws password   backlist_set
      //这个login函数是在登录按钮那个地方绑定的click事件的login函数，传入了form参数   
      login(form){
          this.$refs[form].validate((valid) =>{
              if(valid){
                console.log(this.form);
                  //  this.service.post('api/login',this.form)
                  // .then(res=>{
                  //   console.log(res)
                  //   if(res.data.status===200){
                  //     setToken('username',res.data.username);
                  //     setToken('token',res.data.token);
                  //     this.$message({message:res.data.message,type:'success'})
                  //     this.$router.push('/home')
                  //   }
                  // })
                  login(this.form).then(res=>{
                    if(res.data.status===200){
                      setToken('username',res.data.username);
                      setToken('token',res.data.token);
                      this.$message({message:res.data.message,type:'success'})
                      this.$router.push('/home')
                    }
                  })
                  .catch(err=>{
                    console.error(err)
                  })
              } else{
                  console.error(this.form)
              }
          })
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang='scss'>

.login{
    width:100%;
    height:100%;
    position: absolute;
    background: rgb(39, 88, 163);
    .box-card{
        width:450px;
        margin:200px auto;
        .clearfix{
          font-size: 20px;
        }
        .el-card_header{
            font-size:20px;
        }
        .el-button{
            width:100%;
        }
    }
}
</style>
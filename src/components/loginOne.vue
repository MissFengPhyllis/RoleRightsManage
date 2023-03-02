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
        ref="form">
        <el-form-item 
        label="用户名" 
        prop="username"
        :rules="[
        {required :true, message:'请输入用户名', trigger:'blur'},
        {min:4,max:10,message:'长度为4-10位字符之间',trigger:'blur'}
        ]">
        <el-input v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item 
        label="密码" 
        prop="password"
        :rules="[
        {required :true, message:'请输入密码', trigger:'blur'},
        {min:6,max:12,message:'长度为6-12位字符',trigger:'blur'},
        ]">
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
export default {
  name: "",
  components: {},
  data() {
    return {
        form:{
            username:'',
            password:''
        }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      //这个login函数是在登录按钮那个地方绑定的click事件的login函数，传入了form参数
      login(form){
          this.$refs[form].validate((valid) =>{
              if(valid){
                  console.log(this.form)
                  this.axios.post('https://rapserver.sunmi.com/app/mock/340/login',this.form)
                  .then(res=>{
                    console.log(res)
                    if(res.data.status===200){
                      localStorage.setItem('username',res.data.username)
                      this.$message({message:res.data.message,type:'sucess'})
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
        .el-card_header{
            font-size:20px;
        }
        .el-button{
            width:100%;
        }
    }
}
</style>
<template>
  <div class = "studentList">
    <!-- 查询，重置 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="姓名">
      <el-input v-model="formInline.name" placeholder="请输入要查询的姓名" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="find">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
      <!-- 1: 1-10,  2: 11-20,  slice的语法是 下标0开始，左包右开 [) -->
    <el-table :data="compData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center" />
      <el-table-column prop="age" label="年龄" align="center" />
      <el-table-column prop="sex_text" label="性別" align="center" />
      <el-table-column prop="number" label="学号" align="center" />
      <el-table-column prop="class" label="班级" align="center" />
      <el-table-column prop="state_text" label="状态" align="center" />
      <el-table-column prop="phone" label="电话号码" align="center" />
      <el-table-column prop="address" label="家庭住址" align="center" />
      <el-table-column label="操作" align="center">
        <!-- 要加上这个#default="scope" -->
        <template #default="scope">
          <el-button size="small" type="danger" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5,10,20,30,50]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { studentDel, students } from "@/api/api.js";

export default {
  data() {
    return {
      tableData: [],
      currentPage:1,  //当前页数
      pageSize:10,  //每页显示条数
      total:0,
      formInline : {
        name : ''
      }
    };
  },
  created() {
    this.getData();
  },
  computed:{
compData(){
    return this.tableData.slice((this.currentPage -1)* this.pageSize, this.currentPage*this.pageSize)
}
  },
  methods:{ 
    find(){
      console.log(this.formInline)
      this.getData(this.formInline);
    },
    reset(){
      this.formInline = {}
 this.getData(this.formInline);
    },
    handleSizeChange(val) {
        this.pageSize = val;
        this.currentPage = 1;
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
        this.currentPage = val;
      console.log(`current page: ${val}`);
    },
    getData(params) {
      students(params).then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          this.tableData = res.data.data;
          this.total = res.data.total;
          this.tableData.forEach((item) => {
            item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
            item.state === "1"
              ? (item.state_text = "已入学")
              : item.state === "2"
              ? (item.state_text = "未入学")
              : (item.state_text = "休学中");
          });
        }
      });
    },

    del(row){
      studentDel(row.id).then((res) =>{
        console.log(res)
        if(res.data.status === 200){
          this.$message({message: '删除数据成功', type: 'success'})
          this.getData()
        }
      })
      // console.log(row)
    }
  },
};
</script>

<style lang="scss" scoped>
.studentList{
  .demo-form-inline, .el-form-item{
    text-align: left;
  }
}
.del {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 12;
}
</style>


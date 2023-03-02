<template>
  <div class="infoMent">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="addStudent">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center" />
      <el-table-column prop="sex_text" label="性别" align="center" />
      <el-table-column prop="age" label="年龄" align="center" />
      <el-table-column prop="father" label="父亲" align="center" />
      <el-table-column prop="mother" label="母亲" align="center" />
      <el-table-column prop="address" label="家庭住址" align="center" />
      <el-table-column prop="time" label="入校时间" align="center" />
      <el-table-column prop="phone" label="电话号码" align="center" />
      <el-table-column label="操作" align="center">
        <!-- 要加上这个#default="scope" -->
        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            :icon="Edit"
            @click="edit(scope.row)"
          />
          <el-button
            size="small"
            type="danger"
            :icon="Delete"
            @click="del(scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      v-model="dialogFormVisible"
      :title="state ? '添加学生信息' : '修改学生信息'"
      width="500px"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off" />
        </el-form-item>
        <el-form-item
          label="父亲姓名"
          :label-width="formLabelWidth"
          prop="father"
        >
          <el-input v-model="form.father" autocomplete="off" />
        </el-form-item>
        <el-form-item
          label="母亲姓名"
          :label-width="formLabelWidth"
          prop="mother"
        >
          <el-input v-model="form.mother" autocomplete="off" />
        </el-form-item>
        <el-form-item
          label="家庭住址"
          :label-width="formLabelWidth"
          prop="address"
        >
          <el-input v-model="form.address" autocomplete="off" />
        </el-form-item>
        <el-form-item
          label="入校时间"
          :label-width="formLabelWidth"
          prop="time"
        >
          <el-date-picker
            v-model="form.time"
            format="YYYY 年 MM 月 DD 日"
            value-format="YYYY-MM-DD"
            type="date"
            placeholder="Pick a day"
          />
        </el-form-item>
        <el-form-item
          label="联系方式"
          :label-width="formLabelWidth"
          prop="phone"
        >
          <el-input v-model="form.phone" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeInfo('form')">取消</el-button>
          <el-button type="primary" @click="sure('form')">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { Delete, Edit } from "@element-plus/icons-vue";
import { changeInfo, getData, delData } from "@/utils/table";
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      //在上面导入后，需要在data这里初始化一下
      Edit,
      Delete,
      form: {
        name: "",
        sex: "1",
        age: "",
        father: "",
        mother: "",
        address: "",
        time: "",
        phone: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        sex: [{ required: true }],
        age: [{ required: true, message: "请输入年龄" }],
        address: [{ required: true, message: "请输入地址" }],
        time: [{ required: true, message: "请输入入学时间" }],
        phone: [{ required: true, message: "请输入联系方式" }],
      },
      total: 0,
      state: true,
    };
  },

  created() {
    getData(this, "/api/info");
  },

  methods: {
    edit(row) {
      console.log(row);
      this.form = { ...row };
      this.state = false;
      this.dialogFormVisible = true;
    
    },
    closeInfo(form) {
      this.dialogFormVisible = false;
      //把验证清除掉
      // 这里有一个漏洞，在这个界面上，如果先点击新增按钮，再点击编辑按钮，取消编辑后再点击新增按钮，就没有任何的必填信息提示，但是如果是先点击的编辑按钮，再去点击新增，还是会出现必填信息提示。
      // this.$nextTick(() => {
      //   this.$refs[form].resetFields();
      // });
      this.$refs[form].resetFields();
    },

    del(row) {
      delData(this, "/api/info", row.id, getData);
    },

    addStudent() {
      (this.form = {
        name: "",
        sex: "1",
        age: "",
        father: "",
        mother: "",
        address: "",
        time: "",
        phone: "",
      }),
        (this.state = true);
      this.dialogFormVisible = true;
    },

    sure(form) {
      console.log(this.form);
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(form, this.form);
        //   这种方法也很简便
          //   if (this.state) {
          //     changeInfo(this,'post','/api/info',this.form,getData)
          //   } else {
          //     changeInfo(this,'put','/api/info',this.form,getData)
          //   }
          let methods = ''
          this.state ? (methods = "post") : (methods = "put");
          changeInfo(this, methods, "/api/info", this.form, getData);
        }
      });
    },
  },


};
</script>

<style lang="scss" scoped>
.infoMent {
  .demo-form-inline,
  .el-form-item {
    text-align: left;
  }
}
.del {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 12;
}
</style>


<template>
  <div class="workList">
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column prop="id" label="用户ID" align="center" />
      <el-table-column prop="userId" label="所属班级" align="center" />
      <el-table-column prop="title" label="作业名称" align="center" />
      <el-table-column prop="completed_text" label="完成情况" align="center" />
    </el-table>
    <el-pagination
      v-model:current-page="page"
      v-model:page-size="size"
      :page-sizes="[5, 10, 20, 50, 100]"
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
import { getTableData } from "@/utils/table";
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      page: 1,
      size: 10,
      loading: true,
    };
  },
  created() {
    getTableData(this, "/api/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
  },

  methods: {
    handleSizeChange(val) {
          // 需要不断的更新当前的页码和每页显示的条数，并且要更新当前表格的数据。
      this.size = val;
      this.page = 1;
      getTableData(this, "/api/works", { page: this.page, size: val }, [ "completed", ]);
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
        // 需要不断的更新当前的页码和每页显示的条数，并且要更新当前表格的数据。
      this.page = val;
      getTableData(this, "/api/works", { page: val, size: this.size }, [ "completed", ]);
    },
  },
};
</script>

<style lang="scss">
.workList {
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>
<template>
  <div>
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
      :url="url"
    />
  </div>
</template>

<script>
import { getTableData } from "@/utils/table";
export default {
  props: {
    "total": Number,
    "url": String,
  },
  data() {
    return {
      page: 1, //当前页数
      size: 10, //当前每页显示条数
    };
  },

  created() {
    // 当前这个分页是一个组件，所以this指代的就是这个分页组件，但是我们的数据里面的this应该是那个当前加载页面，所以这里应该传入的是他的父节点，也就是this.$parent
    getTableData(
      this.$parent,
      "/api/works",
      { page: this.page, size: this.size },
      ["completed"]
    );
  },

  methods: {
    handleSizeChange(val) {
      // 需要不断的更新当前的页码和每页显示的条数，并且要更新当前表格的数据。
      this.size = val;
      this.page = 1;
      getTableData(this.$parent, "/api/works", { page: this.page, size: val }, [
        "completed",
      ]);
    },
    handleCurrentChange(val) {
      // 需要不断的更新当前的页码和每页显示的条数，并且要更新当前表格的数据。
      this.page = val;
      getTableData(this.$parent, "/api/works", { page: val, size: this.size }, [
        "completed",
      ]);
    },
  },
};
</script>
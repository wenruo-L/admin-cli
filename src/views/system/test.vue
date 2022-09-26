<template>
  <basic-container>
    <!-- <el-button type="primary" style="margin-bottom: 20px" size="small"
      >新 增</el-button
    >
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template>
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-content">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div> -->

    <!-- <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.name" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select
          v-model="ruleForm.sex"
          placeholder="请选择性别"
          style="width: 100%"
        >
          <el-option
            v-for="item in sexOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form> -->

    <crud
      v-model="form"
      :option="option"
      :loading="loading"
      :tableData="data"
      :page="page"
      @row-save="rowSave"
      @row-update="rowUpload"
      @row-delete="rowDelete"
      @on-load="onLoad"
    >
    </crud>
  </basic-container>
</template>

<script>
export default {
  name: "test-crud",
  data() {
    return {
      sexOptions: [
        {
          label: "男",
          value: "男",
        },
        {
          label: "女",
          value: "女",
        },
        {
          label: "保密",
          value: "保密",
        },
      ],
      ruleForm: {},
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
      },
      tableData: [
        {
          name: "小明",
          age: "18",
          sex: "男",
        },
        {
          name: "小红",
          age: "18",
          sex: "女",
        },
        {
          name: "小明",
          age: "18",
          sex: "男",
        },
        {
          name: "小明",
          age: "18",
          sex: "男",
        },
      ],

      form: {}, //表单数据
      loading: true, //表格加载状态
      data: [], //表格数据
      page: {
        //分页管理
        pageSize: 10,
        currentPage: 1,
        total: 0,
      },
      option: {
        //crud配置
        menuWidth: 250,
        height: "auto",
        calcHeight: 60,
        border: true,
        index: true,
        selection: true,
        column: [
          {
            label: "姓名",
            prop: "name",
            search: true,
            rules: [
              {
                required: true,
                message: "请输入姓名",
                trigger: "blur",
              },
            ],
          },
          {
            label: "年龄",
            prop: "age",
            search: true,
            rules: [
              {
                required: true,
                message: "请输入年龄",
                trigger: "blur",
              },
            ],
          },
          {
            label: "性别",
            prop: "sex",
            type: "select",
            search: true,
            dicData: [
              {
                label: "男",
                value: "男",
              },
              {
                label: "女",
                value: "女",
              },
            ],
            rules: [
              {
                required: true,
                message: "请选择性别",
                trigger: "blur",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // },
    rowSave(form, done) {
      console.log("新增保存", form);
      done();
    },
    rowUpload(form, done) {
      console.log("编辑保存", form);
      done();
    },
    rowDelete(row) {
      console.log("行删除", row);
    },
    onLoad() {
      this.loading = true;
      let Timer = setTimeout(() => {
        this.page.total = 100;
        this.data = [
          {
            name: "小明",
            age: "18",
            sex: "男",
          },
          {
            name: "小红",
            age: "18",
            sex: "女",
          },
          {
            name: "小明",
            age: "18",
            sex: "男",
          },
          {
            name: "小明",
            age: "18",
            sex: "男",
          },
        ];
        this.loading = false;
        clearTimeout(Timer);
      }, 700);
    },
  },
};
</script>

<style scoped>
.pagination-content {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>

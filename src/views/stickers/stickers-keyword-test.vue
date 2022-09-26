<template>
  <el-card>
    <p-form :option="option" v-model="form" @submit="submit" @reset="resetForm">
    </p-form>
    <div v-if="testResultText.length !== 0 || testResultImage.length !== 0">
      <el-row :gutter="10">
        <el-col :span="2"> 关键词结果： </el-col>
        <el-col :span="22">
          <div class="result-content">
            <el-tag
              class="result-content-item"
              v-for="item in testResultText"
              :key="item"
            >
              {{ item }}
            </el-tag>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="2"> 贴纸结果： </el-col>
        <el-col :span="22">
          <div class="result-content">
            <el-image
              v-for="item in testResultImage"
              class="result-content-item"
              lazy
              fit="cover"
              :key="item.stickersCode"
              :src="item.coverUrl"
            >
            </el-image>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import { getStickersRes } from "@/api/stickers";
export default {
  name: "stickers-keyword-test",
  data() {
    return {
      form: {},
      option: {
        resetBtn: true,
        cancelBtn: false,
        submitText: "提 交",
        column: [
          {
            label: "所属版本",
            prop: "version",
            type: "select",
            value: "1.2.0",
            span: 24,
            dicData: [
              {
                label: "1.2.0",
                value: "1.2.0",
              },
            ],
            rules: [
              {
                required: true,
                message: "请选择所属版本",
                trigger: "blur",
              },
            ],
          },
          {
            label: "测试句子",
            prop: "content",
            type: "textarea",
            rows: 3,
            span: 24,
            rules: [
              {
                required: true,
                message: "请输入测试句子",
                trigger: "blur",
              },
            ],
          },
        ],
      },
      testResultText: [],
      testResultImage: [],
    };
  },
  methods: {
    async submit(form, done) {
      try {
        let res = await getStickersRes(form.content, form.version);
        this.testResultText = res.data.data.wordList;
        this.testResultImage = res.data.data.stickersVOList.records;
        done();
      } catch (error) {
        done();
      }
    },
    resetForm() {
      this.form = {};
      this.testResultText = [];
      this.testResultImage = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.result-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  .el-image {
    width: 140px;
  }
  &-item {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>

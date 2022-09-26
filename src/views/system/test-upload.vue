<template>
  <basic-container>
    <p-form
      v-model="form"
      :option="option"
      @submit="submit"
      @uploadOnChange="uploadOnChange"
    ></p-form>
  </basic-container>
</template>

<script>
import { add } from "@/api/system/test-upload";
export default {
  name: "test-upload",
  data() {
    return {
      form: {},
      coverFile: null,
      option: {
        column: [
          {
            label: "编号",
            prop: "code",
            value: "A100019",
            rules: [{ required: true, message: "请输入编号", trigger: "blur" }],
          },
          {
            label: "贴纸名称",
            prop: "stickersName",
            value: "宝宝",
            rules: [
              {
                required: true,
                message: "请输入贴纸名称",
                trigger: "blur",
              },
            ],
          },
          {
            label: "贴纸类型",
            prop: "stickersType",
            type: "select",
            value: 1,
            dicData: [
              {
                label: "静态贴纸",
                value: 0,
              },
              {
                label: "动态贴纸",
                value: 1,
              },
            ],
            rules: [
              {
                required: true,
                message: "请选择贴纸类型",
                trigger: "blur",
              },
            ],
          },
          {
            label: "贴纸信息",
            prop: "stickersInfo",
            value:
              '{"faceKeyIndex":10,"originInCanvas": "{231, 316}","widthInCanvas":260, "stickerType":1}',
          },
          {
            label: "帧数",
            prop: "frameRate",
            value: 10,
            rules: [
              {
                required: true,
                message: "请输入贴纸帧数",
                trigger: "blur",
              },
            ],
          },
          {
            label: "最低版本",
            prop: "lowestVersion",
            value: "1.2.0",
            type: "select",
            dicData: [
              {
                label: "1.1.1",
                value: "1.1.1",
              },
              {
                label: "1.1.2",
                value: "1.1.2",
              },
              {
                label: "1.2.0",
                value: "1.2.0",
              },
            ],
            rules: [
              {
                required: true,
                message: "请选择最低版本",
                trigger: "blur",
              },
            ],
          },
          {
            label: "贴纸封面",
            prop: "coverFile",
            type: "upload",
            listType: "picture-img",
            autoUpload: false,
            display: false,
            rules: [
              {
                required: false,
                message: "请选择贴纸封面",
                trigger: "blur",
              },
            ],
          },
          {
            label: "贴纸资源压缩包",
            prop: "resourcesFile",
            type: "upload",
            accept: ".zip",
            limit: 1,
            autoUpload: false,
            display: false,
            rules: [
              {
                required: false,
                message: "请选择贴纸资源压缩包",
                trigger: "blur",
              },
            ],
          },
        ],
      },
    };
  },
  watch: {
    infoOptions: {
      handler(val) {
        let show = true;
        Object.keys(val).forEach((el) => {
          if (this.form[el] === "") show = false;
        });
        this.option.column[this.resourcesFileIndex].display = show;
        this.option.column[this.coverFileIndex].display = show;
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    resourcesFileIndex() {
      let index = this.option.column.findIndex((item) => {
        return item.prop === "resourcesFile";
      });
      return index;
    },
    coverFileIndex() {
      let index = this.option.column.findIndex((item) => {
        return item.prop === "coverFile";
      });
      return index;
    },
    infoOptions() {
      let {
        code,
        stickersName,
        stickersType,
        stickersInfo,
        frameRate,
        lowestVersion,
      } = this.form;
      return {
        code,
        stickersName,
        stickersType,
        stickersInfo,
        frameRate,
        lowestVersion,
      };
    },
  },
  methods: {
    optionsToFromData(options) {
      return new Promise((resolve) => {
        let params = new FormData();
        for (let key in options) {
          if (key !== "stickersName") {
            params.append(key, options[key]);
          }
        }
        let BlobObj = new Blob([JSON.stringify(options.stickersName)], {
          type: "multipart/form-data;charset=utf-8;",
        });
        let reader = new FileReader();
        reader.readAsText(BlobObj, "UTF_8");
        reader.onload = (res) => {
          let strRes = res.target.result;
          params.append("stickersName", strRes);
          resolve(params);
        };
      });
    },
    async submit(form, done) {
      console.log("submit", form);
      let options = Object.assign({}, form, {
        coverFile: this.coverFile,
        resourcesFile: form.resourcesFile[0].raw,
      });

      await this.optionsToFromData(options)
        .then((res) => {
          console.log("optionsToFromData  res", res);
          return add(res);
        })
        .then(
          (res) => {
            console.log("新增贴纸", res);
            this.$message.success("操作成功！");
            done();
          },
          () => {
            this.$message.error("操作失败！");
            done();
          }
        );
    },
    uploadOnChange(file, fileList, column) {
      console.log("file,fileList,column", file, fileList, column);
      if (column.prop === "coverFile") {
        this.coverFile = file.raw;
        let reader = new FileReader();
        reader.readAsDataURL(file.raw);
        reader.onload = (e) => {
          this.form[column.prop] = e.target.result;
        };
      } else if (column.prop === "resourcesFile") {
        this.form[column.prop] = [
          {
            name: file.name,
            url: file.raw,
            raw: file.raw,
          },
        ];
      }
      console.log("this.form", this.form);
    },
  },
};
</script>

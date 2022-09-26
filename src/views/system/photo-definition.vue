<template>
  <basic-container>
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="测试环境" name="test"></el-tab-pane>
      <el-tab-pane label="生产环境" name="prod"></el-tab-pane>
    </el-tabs>
    <crud
      ref="crud"
      :page="page"
      :loading="loading"
      :option="option"
      v-model="form"
      :query.sync="query"
      :tableData="data"
      @current-change="currentChange"
      @size-change="sizeChange"
      @search-change="searchChange"
      @search-reset="searchReset"
      @refresh-change="refreshChange"
      @on-load="onLoad"
    >
      <template v-slot:imgUrl="{ row, index }">
        <div class="resources-content">
          <el-image
            load
            :src="row.imgUrl"
            class="resources"
            @click="imagePreview(index)"
          ></el-image>
        </div>
      </template>
      <template v-slot:menuBtn="{ row, index }">
        <el-button
          type="text"
          size="mini"
          icon="el-icon-download"
          @click="downloadImage(row, index)"
        >
          下载原图
        </el-button>
      </template>
    </crud>
  </basic-container>
</template>

<script>
import { getListByTest, getListByProd } from "@/api/photo-definition";
import { filterSize } from "@/util/utils";
export default {
  name: "photo-definition",
  data() {
    return {
      activeTab: "prod",
      activeTabIndex: "1",
      loading: true,
      query: {},
      form: {},
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0,
      },
      option: {
        menuWidth: 180,
        height: "auto",
        calcHeight: 60,
        border: true,
        addBtn: false,
        editBtn: false,
        delBtn: false,
        index: true,
        column: [
          {
            label: "发布日期",
            prop: "timeRange",
            type: "datetimerange",
            hide: true,
            search: true,
            dataType: "array",
            needOptions: true,
            searchSpan: 8,
            display: false,
          },
          {
            label: "图片Id",
            prop: "imgId",
          },
          {
            label: "内容Id",
            prop: "releaseId",
          },
          {
            label: "图片资源",
            prop: "imgUrl",
            type: "upload",
            listType: "picture-img",
            dataType: "array",
          },
          {
            label: "清晰度",
            prop: "definition",
          },
          {
            label: "图片来源",
            prop: "addMode",
            type: "select",
            dicData: [
              {
                label: "相机",
                value: "0",
              },
              {
                label: "相册",
                value: "1",
              },
              {
                label: "自动抓拍",
                value: "2",
              },
            ],
          },
          {
            label: "图片大小",
            prop: "isize",
          },
          {
            label: "图片尺寸",
            prop: "imeasure",
          },
        ],
      },
      data: [],
    };
  },
  computed: {
    imgUrlList() {
      return this.data.map((item) => {
        let obj = {
          url: item.imgUrl,
          describe: [
            {
              label: "图片Id：",
              value: item.imgId,
            },
            {
              label: "图片清晰度：",
              value: item.definition,
            },
          ],
        };
        return obj;
      });
    },
  },
  methods: {
    imagePreview(index) {
      console.log("imagePreview", index);
      console.log("imgUrlList", this.imgUrlList);
      this.$ImagePreview(this.imgUrlList, index, {
        showDescribe: true,
        showDownload: true,
        handleDownload: (datas, index) => {
          this.getUrlBase64(datas[index].url);
        },
      });
    },
    handleTabClick(tab) {
      if (tab.index === this.activeTabIndex) return;
      this.activeTabIndex = tab.index;
      this.page.total = 0;
      this.searchReset();
    },
    async downloadImage(row) {
      await this.getUrlBase64(row.imgUrl);
    },
    getUrlBase64(url) {
      return new Promise((resolve) => {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let img = new Image();
        img.crossOrigin = "Anonymous"; //允许跨域
        img.src = `${url}?v=${Math.random()}`;
        img.onload = function () {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          let dataURL = canvas.toDataURL("image/png");
          canvas = null;
          var a = document.createElement("a");
          var event = new MouseEvent("click");
          a.download = new Date().getTime();
          a.href = dataURL;
          a.dispatchEvent(event);
          resolve(dataURL);
        };
      });
    },
    searchChange(params, done) {
      if (params.timeRange && params.timeRange.length != 0) {
        params.startDate = params.timeRange[0];
        params.endDate = params.timeRange[1];
      } else {
        params.startDate = "";
        params.endDate = "";
      }
      this.query = params;
      this.page.currentPage = 1;
      this.onLoad(this.page, params);
      done();
    },
    searchReset() {
      this.query = {};
      this.onLoad(this.page, this.query);
    },
    refreshChange() {
      this.onLoad(this.page, this.query);
    },
    currentChange(currentPage) {
      this.page.currentPage = currentPage;
    },
    sizeChange(pageSize) {
      this.page.pageSize = pageSize;
    },
    async onLoad(page, params = {}) {
      this.loading = true;
      this.data = [];
      let res = null;
      try {
        if (this.activeTab === "test") {
          res = await getListByTest(
            page.currentPage,
            page.pageSize,
            Object.assign(params, this.query)
          );
        } else {
          res = await getListByProd(
            page.currentPage,
            page.pageSize,
            Object.assign(params, this.query)
          );
        }
        this.page.total = res.data.data.total;
        if (res.data.data.records && res.data.data.records.length != 0) {
          res.data.data.records.forEach((item) => {
            item.isize = filterSize(item.isize);
          });
          this.data = res.data.data.records;
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.resources-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .resources {
    height: 40px;
  }
}
</style>

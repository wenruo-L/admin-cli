<template>
  <div class="wel">
    <basic-container>
      <data-box :option="option1"></data-box>
    </basic-container>
    <el-row :span="24">
      <el-col :span="18">
        <basic-container>
          <data-progress
            :option="option3"
            style="margin-bottom: 35px"
          ></data-progress>
          <data-tabs :option="option"></data-tabs>
        </basic-container>
      </el-col>
      <el-col :span="6">
        <basic-container>
          <data-icons :option="option2"></data-icons>
        </basic-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dataBox from "@/components/data/box";
import dataProgress from "@/components/data/progress";
import dataTabs from "@/components/data/tabs";
import dataIcons from "@/components/data/icons";
export default {
  name: "wel-index",
  components: {
    dataBox,
    dataProgress,
    dataTabs,
    dataIcons,
  },
  data() {
    return {
      option: {
        span: 8,
        data: [
          {
            title: "分类统计",
            subtitle: "实时",
            count: 7993,
            allcount: 10222,
            text: "当前分类总记录数",
            color: "rgb(27, 201, 142)",
            key: "分",
          },
          {
            title: "附件统计",
            subtitle: "实时",
            count: 3112,
            allcount: 10222,
            text: "当前上传的附件数",
            color: "rgb(230, 71, 88)",
            key: "附",
          },
          {
            title: "文章统计",
            subtitle: "实时",
            count: 908,
            allcount: 10222,
            text: "评论次数",
            color: "rgb(56, 161, 242)",
            key: "评",
          },
        ],
      },
      option1: {
        span: 6,
        data: [
          {
            title: "错误日志",
            count: 12332,
            icon: "el-icon-warning",
            color: "rgb(49, 180, 141)",
            href: "https://bilibili.com",
            target: "_blank",
          },
          {
            title: "数据展示",
            count: 33,
            icon: "el-icon-view",
            color: "rgb(56, 161, 242)",
            href: "https://bilibili.com",
            target: "_blank",
          },
          {
            title: "权限管理",
            count: 2223,
            icon: "el-icon-setting",
            color: "rgb(117, 56, 199)",
            href: "https://bilibili.com",
            target: "_blank",
          },
          {
            title: "用户管理",
            count: 2223,
            icon: "el-icon-setting",
            color: "rgb(230, 71, 88)",
            href: "https://bilibili.com",
            target: "_blank",
          },
        ],
      },
      option2: {
        span: 12,
        data: [
          {
            title: "今日注册",
            count: 12678,
            icon: "el-icon-tickets",
            href: "https://bilibili.com",
            target: "_blank",
          },
          {
            title: "今日登录",
            count: 22139,
            icon: "el-icon-success",
            href: "https://bilibili.com",
            target: "_blank",
          },
          {
            title: "今日订阅",
            count: 35623,
            icon: "el-icon-info",
            href: "https://bilibili.com",
            target: "_blank",
          },
          {
            title: "今日评论",
            count: 16826,
            icon: "el-icon-message",
            href: "https://bilibili.com",
            target: "_blank",
          },
        ],
      },
      option3: {
        span: 8,
        data: [
          {
            title: "转化率（日同比 28%）",
            color: "rgb(178, 159, 255)",
            count: 32,
            href: "https://bilibili.com",
            target: "_blank",
          },
          {
            title: "签到率（日同比 11%）",
            color: "rgb(230, 71, 88)",
            count: 32,
            href: "https://bilibili.com",
            target: "_blank",
          },
          {
            title: "签到率（日同比 11%）",
            color: "rgb(230, 71, 88)",
            count: 32,
            href: "https://bilibili.com",
            target: "_blank",
          },
        ],
      },
    };
  },
};
</script>

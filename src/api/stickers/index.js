import request from "@/router/axios";

export const getStickersRes = (content, version) => {
  return request({
    baseURL: "https://dev.api.patpet.com.cn",
    headers: {
      VERSION: version,
    },
    url: "/content/stickers/admin/getStickersListAndParticipleByContent",
    method: "get",
    params: {
      content,
    },
  });
};

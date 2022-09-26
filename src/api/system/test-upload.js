import request from "@/router/axios";

export const add = (option) => {
  return request({
    baseURL: "https://392389312c.oicp.vip",
    headers: {
      "Content-Type": "multipart/form-data;charset=utf-8;",
    },
    url: "/content/stickers/admin/addStickers",
    method: "post",
    data: option,
    timeout: 60000,
  });
};

import request from "@/router/axios";

export const getListByTest = (current, size, params) => {
  return request({
    baseURL: "https://test.api.patpet.com.cn",
    url: "/content/releaseImg/getImgDefinitionVOList",
    method: "POST",
    data: {
      ...params,
      current,
      size,
    },
  });
};

export const getListByProd = (current, size, params) => {
  return request({
    baseURL: "https://api.patpet.com.cn",
    url: "/content/releaseImg/getImgDefinitionVOList",
    method: "POST",
    data: {
      ...params,
      current,
      size,
    },
  });
};

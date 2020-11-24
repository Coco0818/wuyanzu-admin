import request from "@utils/request";
export const reqPositions = () => {
  return request({
    method: "GET",
    url: "/api/positions",
  });
};
export const reqRemovePosition = (_id) => {
  return request({
    method: "POST",
    url: "/bs/removePosition",
    data: {
      _id,
    },
  });
};

export const reqModifyPosition = (id) => {
  return request({
    method: "GET",
    url: `/api/detail/${id}`,
  });
};
export const reqAddOrUpdatePosition = (type, data) => {
  return request({
    method: "POST",
    url: `/bs/${type}Position`,
    data,
  });
};

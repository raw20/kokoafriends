import statusCode from "./statusCode";

const statusUtil = {
  success: (data) => {
    return { code: statusCode.OK, data: data };
  },
  false: () => {
    return { code: statusCode };
  },
};

export default statusUtil;

import StatusCode from "./statusCode.js";

const statusUtil = {
    success: (data) => {
        return { code: StatusCode.OK, data: data };
    },
    false: () => {
        return { code: StatusCode};
    },
};

export default statusUtil;
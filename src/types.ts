import Schedule from "./classes/schedule";
import info from "./classes/info";
import User from "./classes/user";

/** 云函数 "Login" 的返回格式 */
export interface loginResult {
    errMsg: string;
    requestID: string;
    result: {
        /** 回应代码 */
        code: number;

        /** 用户数据 */
        user: User;
    };
}

/** 云函数 "getPersche" 的返回格式 */
export interface getPerscheResult {
    errMsg: string;
    requestID: string;
    result: {
        code: number;
        schedules: Array<Schedule>;
        infos: Array<info>;
    };
}

/** 云函数 "postUserInfo" 的返回格式 */
export interface postUserInfoResult {
    errMsg: string;
    requestID: string;
    result: {
        /** 回应代码 */
        code: number;

        /** 用户数据 */
        data: User;
    };
}

/** 云函数 "newsche" 的返回格式 */
export interface newscheResult {
    errMsg: string;
    requestID: string;
    result: {
        /** 回应代码 */
        code: number;

        /** 创立成功的数据 */
        schedule: Schedule;
    };
}
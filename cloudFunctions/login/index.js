const cloud = require("wx-server-sdk");
cloud.init();
const db = cloud.database();
const userCollection = db.collection("User");

exports.main = async () => {
    const { OPENID } = cloud.getWXContext();

    try {
        const allUser = (await userCollection.get()).data;
        const [userInfo] = allUser.filter(v => v._id === OPENID);
        let name, avatarUrl, gender;
        // 无记录，请前端调用 postUserInfo 来添加记录
        if (!userInfo)
            return {
                code: 404
            };
        // 有记录，回传记录
        else
            return {
                code: 200,
                user: {
                    name: userInfo.name,
                    avatarUrl: userInfo.avatarUrl,
                    gender: userInfo.gender,
                    openId: OPENID
                }
            };
    } catch (e) {
        console.error(e);
        return {
            code: 500
        };
    }
};

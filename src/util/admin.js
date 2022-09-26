export default {
    getScreen: function () {
        var width = document.body.clientWidth;
        if (width >= 1200) {
            return 3; //大屏幕
        } else if (width >= 992) {
            return 2; //中屏幕
        } else if (width >= 768) {
            return 1; //小屏幕
        } else {
            return 0; //超小屏幕
        }
    },
    // 退出登录提示语
    logoutText() {
        let goodbyeTextArr = [
            "我猜你应该累了˗ˋˏ♡ˎˊ˗",
            "一起去撸猫吧~🐈",
            "来把紧张刺激的飞行棋吧️️️️🛫~",
            "今日忌工作，宜摸鱼🥂~",
            "喝一杯?🥂",
        ];
        let goodbyeTextIndex =
            parseInt(Math.random() * goodbyeTextArr.length, 10);
        let goodbyeText = goodbyeTextArr[goodbyeTextIndex]
        this.$notify({
            title: "拜拜~",
            message: goodbyeText,
            offset: 100
        });
    },
    // 登录提示语
    loginText() {
        // 获取当前时间
        let timeNow = new Date();
        // 获取当前小时
        let hours = timeNow.getHours();
        // 设置默认文字
        let title = ``;
        // 判断当前时间段
        if (hours >= 0 && hours <= 10) {
            title = `早上好`;
        } else if (hours > 10 && hours <= 14) {
            title = `中午好`;
        } else if (hours > 14 && hours <= 18) {
            title = `下午好`;
        } else if (hours > 18 && hours <= 24) {
            title = `晚上好`;
        }
        this.$notify({
            title: title,
            message: '开始工作吧~',
            offset: 100
        });
    }
}
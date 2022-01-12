/**
 * @author shawyo
 * @date 2018-09-28
 * @github https://github.com/shawyo
 * @version v0.0.1
 * @description 浏览器 userAgent 工具集合
 */

(function (window) {
    var UA = {

        // userAgent
        U: window.navigator.userAgent.toLowerCase(),

        //语言
        Language: (navigator.browserLanguage || navigator.language).toLowerCase(),

        /**
         * @name Core
         * @description 来源于网络稍作修改
         * @returns trident|presto|webKit|gecko|mobile|ios|android|iphone|ipad|winphone|webapp|wechat|weibo|qq
         */
        Core: function () {
            var u = this.U;
            return {
                trident: u.indexOf('trident') > -1, //IE内核
                presto: u.indexOf('presto') > -1, //opera内核
                webKit: u.indexOf('applewebkit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('gecko') > -1 && u.indexOf('khtml') == -1, //火狐内核
                mobile: !!u.match(/applewebkit.*mobile.*/), //是否为移动终端
                ios: /(iphone|ipad|ipod|ios)/i.test(this.U), //ios终端
                android: u.indexOf('android') > -1 || u.indexOf('adr') > -1, //android终端
                iphone: u.indexOf('iphone') > -1, //是否为iPhone或者QQHD浏览器
                ipad: u.indexOf('ipad') > -1, //是否iPad
                winphone: u.indexOf('windows phone') > -1, // windows phone 终端
                windows: u.indexOf('windows nt') > -1, // windows pc端
                webapp: u.indexOf('safari') == -1, //是否web应该程序，没有头部与底部
                wechat: u.indexOf('micromessenger') > -1, //是否微信 
                weibo: u.indexOf('weibo') > -1, //是否新浪微博
                qq: u.match(/\sqq/i) == "qq" //是否QQ     
            }
        },

        /**
         * @name DeviceType
         * @description 识别移动终端系统类型
         * @param null
         * @returns {type:'ios|android',version:'10.3.1'} | windowsphone
         */
        DeviceType: function () {
            if (this.Core().android) {
                //android 终端
                var andrVersionArr = this.U.match(/android (\d+)\.(\d+)\.?(\d+)?/); //  ["Android 5.0.2","5","0","2"]
                //去除匹配的第一个下标的元素
                andrVersionArr.shift();
                andrVersionArr[1] == undefined ? andrVersionArr[1] = '0' : andrVersionArr[1]
                andrVersionArr[2] == undefined ? andrVersionArr[2] = '0' : andrVersionArr[2]
                return {
                    type: 'android',
                    version: andrVersionArr[0] + '.' + andrVersionArr[1] + '.' + andrVersionArr[2]
                }
            } else if (this.Core().ios) {
                //ios 终端
                var iosVersionArr = this.U.match(/os (\d+)_(\d+)_?(\d+)?/); // ["OS 10_3_1", "10", "3", "1"]
                //去除匹配的第一个下标的元素
                iosVersionArr.shift();
                iosVersionArr[1] == undefined ? iosVersionArr[1] = '0' : iosVersionArr[1]
                iosVersionArr[2] == undefined ? iosVersionArr[2] = '0' : iosVersionArr[2]
                return {
                    type: 'ios',
                    version: iosVersionArr[0] + '.' + iosVersionArr[1] + '.' + iosVersionArr[2]
                }
            } else if (this.Core().winphone) {
                //winphone 终端
                return 'windowsphone'
            } else if (this.Core().windows) {
                var winVersionArr = this.U.match(/nt (\d+)\.(\d+)\.?(\d+)?/); // 
                //去除匹配的第一个下标的元素
                winVersionArr.shift();
                winVersionArr[1] == undefined ? winVersionArr[1] = '0' : winVersionArr[1]
                winVersionArr[2] == undefined ? winVersionArr[2] = '0' : winVersionArr[2]
                return {
                    type: 'windows',
                    version: winVersionArr[0] + '.' + winVersionArr[1] + '.' + winVersionArr[2]
                }
            }
        },

        /**
         * @name IsWechat 
         * @description 识别微信和当前的微信版本
         * @param null
         * @returns {return: true, version: "6.6.7"}|false
         */
        IsWechat: function () {
            if (this.Core().wechat) {
                var micromessenger = this.U.match(/micromessenger\/([^ ]+)/g);
                micromessenger = micromessenger[0].split('/');
                return {
                    return: true,
                    version: micromessenger[1],
                }
            } else {
                return false
            };
        },

        /**
         * @name NetworkType
         * @description 网络类型识别,目前只有在手机微信、QQ中可以正确识别
         * @returns wifi|4g|3g|2g|Unknown
         */
        NetworkType: function () {
            var network = this.U.match(/nettype\/([^ ]+)/g);
            var Msg = 'Unknown';
            if (network && network[0]) {
                network = network[0].split('/');
                Msg = network[1];
                return Msg
            } else {
                return Msg
            };
        },

    };

    window.UA = UA;

})(window);
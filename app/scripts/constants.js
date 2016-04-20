'use strict';


wapApp.service('ConstantService', function () {
    this.LOGIN_ID_KEY = "LOGIN_USER_ID";//存储到cookie中的登录用户id键值
    this.LOGIN_CART_ID_KEY = "LOGIN_CART_ID";//cookie中存储购物车的键值

    this.QQ_APP_ID = '101288386'; //QQ登录 开发者信息
    this.QQ_APP_KEY = '6e820c34284b24e6ccf89a82c45d518d'; //QQ登录 开发者信息
    this.QQ_REDIRECT_URI = 'http://www.zhonghuaejiao.com/api/login/qq/code'; //qq登录 回调地址
});

'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
wapApp.service('ApiService', function () {
    this.api = {
        'cart':{
            'list':'http://192.168.3.196:8080/api/cart/goods/list/:uid',
            'submit':'http://192.168.3.196:8080/api/cart/clearing',
            'delete':'http://192.168.3.196:8080/api/cart/goods',
            'clear': 'http://192.168.3.196:8080/api/cart/goods/:uid',//清空用户购物车
            'countupdate':'http://192.168.3.196:8080/api/cart/goods/:id',
            'addtocart':'http://192.168.3.196:8080/api/cart',
            'count':'http://192.168.3.196:8080/api/cart/goods/count/:uid'
        },
        'order':{
            'listWithCondition': 'http://192.168.3.196:8080/api/orders/seller/list',
            'accept':'http://192.168.3.196:8080/api/orders/acception',
            'delivered':'http://192.168.3.196:8080/api/orders/logistic',
            'singleByOID':'http://192.168.3.196:8080/api/orders/:oid',
            'listTraces': 'http://192.168.3.196:8080/api/orders/:oid/traces',
            'logistic':'http://192.168.3.196:8080/api/orders/:oid/logistic',
            'listOrderStatus':'http://192.168.3.196:8080/api/order/status/visible',
            'cancel':'http://192.168.3.196:8080/api/orders/cancellation',
            'count':'http://192.168.3.196:8080/api/orders/seller/count',
            'listClearing':'http://192.168.3.196:8080/api/cart/clearing/list',
            'submit':'http://192.168.3.196:8080/api/order'
        },
        'pay':{
            'list':'http://192.168.3.196:8080/api/payments',
            'prepay':'http://192.168.3.196:8080/api/payments/prepay',
            'typelist':'http://192.168.3.196:8080/api/pay/type/list'
        },
        'refund':{
            'listWithCondition': 'http://192.168.3.196:8080/api/refund/seller/list',
            'accept':'http://192.168.3.196:8080/api/refund/acception',
            'deny':'http://192.168.3.196:8080/api/refund/denial',
            'done':'http://192.168.3.196:8080/api/refund/completion'
        },
        'marketing':{
            'group':{
                'listWithCondition':'http://192.168.3.196:8080/api/marketing/group/goods/list',
                'detail':'http://192.168.3.196:8080/api/marketing/group/goods/detail'
            },
            'flashsale':{
                'list':'http://localhost:8080/api/flash/sale/bycondition/list',
                'detail':'http://localhost:8080/api/flash/sale/detail'
            },
            'auction':{
                'listWithCondition':'http://192.168.3.196:8080/api/marketing/auction/goods/list'
            }
        },
        'login':{
            'seller':'http://192.168.3.196:8080/api/login/seller',
            'manager':'http://192.168.3.196:8080/api/login/manager'
        },
        'logout':'http://192.168.3.196:8080/api/logout',
        'refreshPwd':'http://192.168.3.196:8080/api/pwd/seller',
        //用户
        'user':{
            'getLoginUser' :'http://192.168.3.196:8080/api/user/current'
        },
        //卖家
        'seller':{
            'current' :'http://192.168.3.196:8080/api/seller/current'
        },
        //管理员
        'manager':{
            'current' :'http://192.168.3.196:8080/api/manager/current'
        },
        'area' : {
            'listCountry' : 'http://192.168.3.196:8080/api/statics/area/country/list',
            //根据国家查省 /{countryID}
            'listProvince' : 'http://192.168.3.196:8080/api/statics/area/province/list',
            //根据省查市 /{provinceID}
            'listCity' : 'http://192.168.3.196:8080/api/statics/area/city/list'
        },

        'helpCenter':{
            'category' : {
            	'list' : 'http://192.168.3.196:8080/api/statics/help/center/category/list',
            	'single' : 'http://192.168.3.196:8080/api/statics/help/center/category/:id',
            	'save' :'http://192.168.3.196:8080/api/statics/help/center/category/',
            	'refresh' :'http://192.168.3.196:8080/api/statics/help/center/category/:id',
            	'remove' :'http://192.168.3.196:8080/api/statics/help/center/category/:id'
            },
            'detail' : {
            	'list' : 'http://192.168.3.196:8080/api/statics/help/center/detail/list/:categoryID',
            	'single' : 'http://192.168.3.196:8080/api/statics/help/center/detail/:id',
            	'save' :'http://192.168.3.196:8080/api/statics/help/center/detail/',
            	'refresh' :'http://192.168.3.196:8080/api/statics/help/center/detail/:id',
            	'remove' :'http://192.168.3.196:8080/api/statics/help/center/detail/:id'
            }
        },

        // 收貨地址    
        'myReceieveAddress':{
            //用戶地址
            'list' : 'http://192.168.3.196:8080/api/address/list/:uid/:offset/:size',
            //all
            'listAll':'http://192.168.3.196:8080/api/address/all',
            //详情
            'single' : 'http://192.168.3.196:8080/api/address/:id',
            //add
            'add' : 'http://192.168.3.196:8080/api/address',
            //refresh
            'refresh' : 'http://192.168.3.196:8080/api/address/:id',
            //用戶地址
            'remove' : 'http://192.168.3.196:8080/api/address/:id',
            //设置默认地址
            'setDefault' : 'http://192.168.3.196:8080/api/address/default/:id'
        },
        'cashCoupon' :{
            //未消费的
            'unusedCouponAmount' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/user/unused/amount/:uid',
            'unusedCoupon' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/user/unused/:uid',
            //已消费的
            'consumedCouponAmount' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/user/consumed/amount/:uid',
            'consumedCoupon' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/user/consumed/:uid',
            //过期的
            'overdueCouponAmount' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/user/overdue/amount/:uid',
            'overdueCoupon' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/user/overdue/:uid',
            //可使用的
            'useableCouponAmount' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/user/useable/amount/:uid',
            'useableCoupon' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/user/useable/:uid',
            //是否可激活
            'canActive' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/can/active/:code',
            //激活券
            'activeCashCoupon' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/user/:code'

        },
        'discountCoupon' :{
            //未消费的
            'unusedCouponAmount' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/user/unused/amount/:uid',
            'unusedCoupon' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/user/unused/:uid',
            //已消费的
            'consumedCouponAmount' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/user/consumed/amount/:uid',
            'consumedCoupon' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/user/consumed/:uid',
            //过期的
            'overdueCouponAmount' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/user/overdue/amount/:uid',
            'overdueCoupon' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/user/overdue/:uid',
            //可使用的
            'useableCouponAmount' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/user/useable/amount/:uid',
            'useableCoupon' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/user/useable/:uid',
            //是否可激活
            'canActive' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/can/active/:code',
            'activeDiscountCoupon' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/user/:code'

        },
        'counpon':{
            'cashcounpon' : {
                'list' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/list/:from/:size',
                'count' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/amount',
                'save' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/:amount',
                'unlock' : 'http://192.168.3.196:8080/api/vip/coupon/cashcoupon/unlock/:ids'
            },
            'discountcounpon' : {
                'list' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/list/:from/:size',
                'count' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/amount',
                'save' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/:amount',
                'unlock' : 'http://192.168.3.196:8080/api/vip/coupon/discountcoupon/unlock/:ids'
            }
        },
        'goods':{//根据条件查询商品
            'queryGoodsList':'http://192.168.3.196:8080/api/back/goods/list',
            'up':'http://192.168.3.196:8080/api/goodsOperation/up/',
            'down':'http://192.168.3.196:8080/api/goodsOperation/down/'
        },
        'goodsOperation':{//商品操作
            'merchantlist':'http://192.168.3.196:8080/api/goodsOperation/merchant/list',
            'brandlist':'http://192.168.3.196:8080/api/goodsOperation/brands/',
            'typelist':'http://192.168.3.196:8080/api/goods/type/list',
            'show':'http://192.168.3.196:8080/api/goodsOperation/updateveiw/',
            'save':'http://192.168.3.196:8080/api/goodsOperation/save',
            'update':'http://192.168.3.196:8080/api/goodsOperation/update/',
            'updatecount':'http://192.168.3.196:8080/api/goodsOperation/modfiycount/:gid/:count',
            'checkcode':'http://192.168.3.196:8080/api/goodsOperation/checkcode/:code'
        },       
  
        'merchant':{//根据条件查询商品
            'queryMerchantList':'http://192.168.3.196:8080/api/merchant/list',
            'getMerchantInfo':'http://192.168.3.196:8080/api/merchant/info/:mid',
            'update':'http://192.168.3.196:8080/api/merchant/updatemerchant',
            'save':'http://192.168.3.196:8080/api/merchant/savemerchant',
             'invoicelist':'http://192.168.3.196:8080/api/merchant/invoicetype/list',
            'deliverylist':'http://192.168.3.196:8080/api/merchant/deliverytype/list'
        },
        'getinformation':{
            'getSchoolSite':'http://192.168.3.196:8080/api/statics/information/sites/:siteid',
            'getSchoolName':'http://192.168.3.196:8080/api/statics/information/sitesSchool/:names',
            'saveSchool':'http://192.168.3.196:8080/api/statics/information/savedetails',
            'alldetail':'http://192.168.3.196:8080/api/statics/information/alldetail',
            'getMerchantInfo':'http://192.168.3.196:8080/api/merchant/info/:mid',
            'update':'http://192.168.3.196:8080/api/merchant/updatemerchant',
            'save':'http://192.168.3.196:8080/api/merchant/savemerchant',
			 'invoicelist':'http://192.168.3.196:8080/api/merchant/invoicetype/list',
            'deliverylist':'http://192.168.3.196:8080/api/merchant/deliverytype/list',
            'deletedetail':'http://192.168.3.196:8080/api/statics/information/delete/:id',
            'updateInfo':'http://192.168.3.196:8080/api/statics/information/update',
            'getInfoById':'http://192.168.3.196:8080/api/statics/information/detail/:id',
            'getInfoByName':'http://192.168.3.196:8080/api/statics/information/byname/detail',
            'maxOrders':'http://192.168.3.196:8080/api/statics/information/detail/orders/:id'


        },
        'comment':{
            'querycomment':'http://192.168.3.196:8080/api/allcomments'
        },
        'resource':{
            'ueditor':'http://192.168.3.196:8080/api/resource/ueditor/upload',
            'single':'http://192.168.3.196:8080/api/resource/upload/single'
        },
        'track':{//推广系统模块
            'getAddetailInfo':'http://192.168.3.196:8080/api/track/addetail/info/:id',
            'updateAddetail':'http://192.168.3.196:8080/api/track/addetail/updateAddetail',
            'saveAddetail':'http://192.168.3.196:8080/api/track/addetail/saveAddetail',
            'getAdmoduleInfo':'http://192.168.3.196:8080/api/track/admodule/info/:id',
            'updateAdmodule':'http://192.168.3.196:8080/api/track/admodule/updateAdmodule',
            'saveAdmodule':'http://192.168.3.196:8080/api/track/admodule/saveAdmodule',
            'queryAdmoduleList':'http://192.168.3.196:8080/api/track/admodule/list',
            'queryAddetailList':'http://192.168.3.196:8080/api/track/addetail/list',
            'removeAddetail':'http://192.168.3.196:8080/api/track/addetail/remove/:id',
            'removeAdmodule':'http://192.168.3.196:8080/api/track/admodule/remove/:id',
            'admodulelist':'http://192.168.3.196:8080/api/track/admodule/list'
        },
        'brand':{
            'brandlist':'http://192.168.3.196:8080//api/brand/brands/',
            'save':'http://192.168.3.196:8080/api/brand/save',
            'getbyid':'http://192.168.3.196:8080/api/brand/updateveiw/',
            'update':'http://192.168.3.196:8080/api/brand//update/',
             'del':'http://192.168.3.196:8080/api/brand/'


        },
        'goodstype':{
            'typelist':'http://192.168.3.196:8080//api/goodstype/list/',
            'save':'http://192.168.3.196:8080/api/goodstype/save',
            'getbyid':'http://192.168.3.196:8080/api/goodstype/single/',
            'update':'http://192.168.3.196:8080/api/goodstype/update/',
            'del':'http://192.168.3.196:8080/api/goodstype/del/'
        },
        'logistic':{
            'logisticlist':'http://192.168.3.196:8080/api/logistic/express/list',
            'expressinfo':'http://192.168.3.196:8080/api/logistic/express/info/:oid/:code/:codeid',
            'postage':'http://192.168.3.196:8080/api/logistic/postage/calculation/muti'
        },
        'wapGoods':{
            'list':'http://192.168.3.196:8080//api/wap/goods/list',
            'detail':'http://localhost:8080//api/wap/goods/detail/:gid',
            'info':'http://192.168.3.196:8080//api/wap/goods/info/:gid',
            'favorite':'http://192.168.3.196:8080//api/wap/goods/favorite/save/:gid',
            'getFavorites':'http://192.168.3.196:8080//api/wap/goods/favorite/list',
            'condition':'http://192.168.3.196:8080//api/wap/goods/condition/:gid',
            'sku':'http://192.168.3.196:8080//api/wap/goods/single/:gid'
        },
        'indexs':{
            'indexlist':'http://192.168.3.196:8080//api/get/user'
        }
    }
});

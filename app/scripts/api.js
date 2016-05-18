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
            'list':'http://115.28.244.41:8888/api/cart/goods/list/:uid',
            'submit':'http://115.28.244.41:8888/api/cart/clearing',
            'delete':'http://115.28.244.41:8888/api/cart/goods',
            'clear': 'http://115.28.244.41:8888/api/cart/goods/:uid',//清空用户购物车
            'countupdate':'http://115.28.244.41:8888/api/cart/goods/:id',
            'addtocart':'http://115.28.244.41:8888/api/cart',
            'count':'http://115.28.244.41:8888/api/cart/goods/count/:uid'
        },
        'order':{
            'listWithCondition': 'http://115.28.244.41:8888/api/orders/user/list',
            'accept':'http://115.28.244.41:8888/api/orders/acception',
            'delivered':'http://115.28.244.41:8888/api/orders/logistic',
            'singleByOID':'http://115.28.244.41:8888/api/orders/:oid',
            'listTraces': 'http://115.28.244.41:8888/api/orders/:oid/traces',
            'logistic':'http://115.28.244.41:8888/api/orders/:oid/logistic',
            'listOrderStatus':'http://115.28.244.41:8888/api/order/status/visible',
            'cancel':'http://115.28.244.41:8888/api/orders/cancellation/:oid',
            'count':'http://115.28.244.41:8888/api/orders/seller/count',
            'listClearing':'http://115.28.244.41:8888/api/cart/clearing/list',
            'submit':'http://115.28.244.41:8888/api/order'
        },
        'pay':{
            'list':'http://115.28.244.41:8888/api/payments',
            'prepay':'http://115.28.244.41:8888/api/payments/prepay',
            'typelist':'http://115.28.244.41:8888/api/pay/type/list'
        },
        'refund':{
            'listWithCondition': 'http://115.28.244.41:8888/api/refund/seller/list',
            'accept':'http://115.28.244.41:8888/api/refund/acception',
            'deny':'http://115.28.244.41:8888/api/refund/denial',
            'done':'http://115.28.244.41:8888/api/refund/completion'
        },
        'marketing':{
            'group':{
                'listWithCondition':'http://115.28.244.41:8888/api/marketing/group/goods/list',
                'detail':'http://115.28.244.41:8888/api/marketing/group/goods/detail',
                'start':'http://115.28.244.41:8888/api/marketing/group/purchase/start/:groupgoodsid',
                'join':'http://115.28.244.41:8888/api/marketing/group/purchase/join/:groupid',
                'user':{
                    'count':'http://115.28.244.41:8888/api/marketing/group/user/count/:groupID',
                    'list':'http://115.28.244.41:8888/api/marketing/group/user/list/:groupID'
                }
            },
            'flashsale':{
                'list':'http://115.28.244.41:8888/api/flash/sale/bycondition/list',
                'detail':'http://115.28.244.41:8888/api/flash/sale/detail',
                'startFlash':'http://115.28.244.41:8888/api/start/buy/falsh/:flashid',
                'update':'http://115.28.244.41:8888/api/flash/sale/update/stock'
            },
            'rankgroup':{
            	'listWithCondition':'http://115.28.244.41:8888/api/marketing/rankgroupGoods/goods/list',
            	'detail':'http://115.28.244.41:8888/api/marketing/rankgroupGoods/goods/detail',
            	'join':'http://115.28.244.41:8888/api/marketing/rankgroup/join/:groupID',
            	'joinDetail':'http://115.28.244.41:8888/api/marketing/rankgroup/joinDetail/:groupID',
            	'start':'http://115.28.244.41:8888/api/marketing/rankgroup/start/:groupgoodsid',
            	'user':{
            		 'count':'http://115.28.244.41:8888/api/marketing/rankgroup/user/count/:groupID',
                     'list':'http://115.28.244.41:8888/api/marketing/rankgroup/user/list/:groupID'
            	}
            },
            'auction':{
                'listWithCondition':'http://115.28.244.41:8888/api/marketing/auction/goods/list',
                'detail':'http://115.28.244.41:8888/api/marketing/auction/goods/detail',
                'join':'http://115.28.244.41:8888/api/marketing/auction/purchase/join/:id',
                'auction':'http://115.28.244.41:8888/api/marketing/auction/purchase/:id',
                'user':{
                    'count':'http://115.28.244.41:8888/api/marketing/auction/user/count/:id',
                    'list':'http://115.28.244.41:8888/api/marketing/auction/user/list/:id'
                }
            }
        },
        'login':{
            'seller':'http://115.28.244.41:8888/api/login/seller',
            'manager':'http://115.28.244.41:8888/api/login/manager'
        },
        'logout':'http://115.28.244.41:8888/api/logout',
        'refreshPwd':'http://115.28.244.41:8888/api/pwd/seller',
        //用户
        'user':{
            'getLoginUser' :'http://115.28.244.41:8888/api/user/current'
        },
        //卖家
        'seller':{
            'current' :'http://115.28.244.41:8888/api/seller/current'
        },
        //管理员
        'manager':{
            'current' :'http://115.28.244.41:8888/api/manager/current'
        },
        'area' : {
            'listCountry' : 'http://115.28.244.41:8888/api/statics/area/country/list',
            //根据国家查省 /{countryID}
            'listProvince' : 'http://115.28.244.41:8888/api/statics/area/province/list',
            //根据省查市 /{provinceID}
            'listCity' : 'http://115.28.244.41:8888/api/statics/area/city/list'
        },

        'helpCenter':{
            'category' : {
            	'list' : 'http://115.28.244.41:8888/api/statics/help/center/category/list',
            	'single' : 'http://115.28.244.41:8888/api/statics/help/center/category/:id',
            	'save' :'http://115.28.244.41:8888/api/statics/help/center/category/',
            	'refresh' :'http://115.28.244.41:8888/api/statics/help/center/category/:id',
            	'remove' :'http://115.28.244.41:8888/api/statics/help/center/category/:id'
            },
            'detail' : {
            	'list' : 'http://115.28.244.41:8888/api/statics/help/center/detail/list/:categoryID',
            	'single' : 'http://115.28.244.41:8888/api/statics/help/center/detail/:id',
            	'save' :'http://115.28.244.41:8888/api/statics/help/center/detail/',
            	'refresh' :'http://115.28.244.41:8888/api/statics/help/center/detail/:id',
            	'remove' :'http://115.28.244.41:8888/api/statics/help/center/detail/:id'
            }
        },

        // 收貨地址    
        'myReceieveAddress':{
            //用戶地址
            'list' : 'http://115.28.244.41:8888/api/address/list/:uid/:offset/:size',
            //all
            'listAll':'http://115.28.244.41:8888/api/address/all',
            //详情
            'single' : 'http://115.28.244.41:8888/api/address/:id',
            //add
            'add' : 'http://115.28.244.41:8888/api/address',
            //refresh
            'refresh' : 'http://115.28.244.41:8888/api/address/:id',
            //用戶地址
            'remove' : 'http://115.28.244.41:8888/api/address/:id',
            //设置默认地址
            'setDefault' : 'http://115.28.244.41:8888/api/address/default/:id'
        },
        'cashCoupon' :{
            //未消费的
            'unusedCouponAmount' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/user/unused/amount/:uid',
            'unusedCoupon' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/user/unused/:uid',
            //已消费的
            'consumedCouponAmount' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/user/consumed/amount/:uid',
            'consumedCoupon' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/user/consumed/:uid',
            //过期的
            'overdueCouponAmount' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/user/overdue/amount/:uid',
            'overdueCoupon' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/user/overdue/:uid',
            //可使用的
            'useableCouponAmount' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/user/useable/amount/:uid',
            'useableCoupon' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/user/useable/:uid',
            //是否可激活
            'canActive' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/can/active/:code',
            //激活券
            'activeCashCoupon' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/user/:code'

        },
        'discountCoupon' :{
            //未消费的
            'unusedCouponAmount' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/user/unused/amount/:uid',
            'unusedCoupon' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/user/unused/:uid',
            //已消费的
            'consumedCouponAmount' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/user/consumed/amount/:uid',
            'consumedCoupon' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/user/consumed/:uid',
            //过期的
            'overdueCouponAmount' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/user/overdue/amount/:uid',
            'overdueCoupon' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/user/overdue/:uid',
            //可使用的
            'useableCouponAmount' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/user/useable/amount/:uid',
            'useableCoupon' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/user/useable/:uid',
            //是否可激活
            'canActive' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/can/active/:code',
            'activeDiscountCoupon' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/user/:code'

        },
        'counpon':{
            'cashcounpon' : {
                'list' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/list/:from/:size',
                'count' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/amount',
                'save' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/:amount',
                'unlock' : 'http://115.28.244.41:8888/api/vip/coupon/cashcoupon/unlock/:ids'
            },
            'discountcounpon' : {
                'list' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/list/:from/:size',
                'count' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/amount',
                'save' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/:amount',
                'unlock' : 'http://115.28.244.41:8888/api/vip/coupon/discountcoupon/unlock/:ids'
            }
        },
        'goods':{//根据条件查询商品
            'queryGoodsList':'http://115.28.244.41:8888/api/back/goods/list',
            'up':'http://115.28.244.41:8888/api/goodsOperation/up/',
            'down':'http://115.28.244.41:8888/api/goodsOperation/down/'
        },
        'goodsOperation':{//商品操作
            'merchantlist':'http://115.28.244.41:8888/api/goodsOperation/merchant/list',
            'brandlist':'http://115.28.244.41:8888/api/goodsOperation/brands/',
            'typelist':'http://115.28.244.41:8888/api/goods/type/list',
            'show':'http://115.28.244.41:8888/api/goodsOperation/updateveiw/',
            'save':'http://115.28.244.41:8888/api/goodsOperation/save',
            'update':'http://115.28.244.41:8888/api/goodsOperation/update/',
            'updatecount':'http://115.28.244.41:8888/api/goodsOperation/modfiycount/:gid/:count',
            'checkcode':'http://115.28.244.41:8888/api/goodsOperation/checkcode/:code'
        },       
  
        'merchant':{//根据条件查询商品
            'queryMerchantList':'http://115.28.244.41:8888/api/merchant/list',
            'getMerchantInfo':'http://115.28.244.41:8888/api/merchant/info/:mid',
            'update':'http://115.28.244.41:8888/api/merchant/updatemerchant',
            'save':'http://115.28.244.41:8888/api/merchant/savemerchant',
             'invoicelist':'http://115.28.244.41:8888/api/merchant/invoicetype/list',
            'deliverylist':'http://115.28.244.41:8888/api/merchant/deliverytype/list'
        },
        'getinformation':{
            'getSchoolSite':'http://115.28.244.41:8888/api/statics/information/sites/:siteid',
            'getSchoolName':'http://115.28.244.41:8888/api/statics/information/sitesSchool/:names',
            'saveSchool':'http://115.28.244.41:8888/api/statics/information/savedetails',
            'alldetail':'http://115.28.244.41:8888/api/statics/information/alldetail',
            'getMerchantInfo':'http://115.28.244.41:8888/api/merchant/info/:mid',
            'update':'http://115.28.244.41:8888/api/merchant/updatemerchant',
            'save':'http://115.28.244.41:8888/api/merchant/savemerchant',
			 'invoicelist':'http://115.28.244.41:8888/api/merchant/invoicetype/list',
            'deliverylist':'http://115.28.244.41:8888/api/merchant/deliverytype/list',
            'deletedetail':'http://115.28.244.41:8888/api/statics/information/delete/:id',
            'updateInfo':'http://115.28.244.41:8888/api/statics/information/update',
            'getInfoById':'http://115.28.244.41:8888/api/statics/information/detail/:id',
            'getInfoByName':'http://115.28.244.41:8888/api/statics/information/byname/detail',
            'maxOrders':'http://115.28.244.41:8888/api/statics/information/detail/orders/:id'


        },
        'comment':{
            'querycomment':'http://115.28.244.41:8888/api/allcomments'
        },
        'resource':{
            'ueditor':'http://115.28.244.41:8888/api/resource/ueditor/upload',
            'single':'http://115.28.244.41:8888/api/resource/upload/single'
        },
        'track':{//推广系统模块
            'getAddetailInfo':'http://115.28.244.41:8888/api/track/addetail/info/:id',
            'updateAddetail':'http://115.28.244.41:8888/api/track/addetail/updateAddetail',
            'saveAddetail':'http://115.28.244.41:8888/api/track/addetail/saveAddetail',
            'getAdmoduleInfo':'http://115.28.244.41:8888/api/track/admodule/info/:id',
            'updateAdmodule':'http://115.28.244.41:8888/api/track/admodule/updateAdmodule',
            'saveAdmodule':'http://115.28.244.41:8888/api/track/admodule/saveAdmodule',
            'queryAdmoduleList':'http://115.28.244.41:8888/api/track/admodule/list',
            'queryAddetailList':'http://115.28.244.41:8888/api/track/addetail/list',
            'removeAddetail':'http://115.28.244.41:8888/api/track/addetail/remove/:id',
            'removeAdmodule':'http://115.28.244.41:8888/api/track/admodule/remove/:id',
            'admodulelist':'http://115.28.244.41:8888/api/track/admodule/list'
        },
        'brand':{
            'brandlist':'http://115.28.244.41:8888//api/brand/brands/',
            'save':'http://115.28.244.41:8888/api/brand/save',
            'getbyid':'http://115.28.244.41:8888/api/brand/updateveiw/',
            'update':'http://115.28.244.41:8888/api/brand//update/',
             'del':'http://115.28.244.41:8888/api/brand/'


        },
        'goodstype':{
            'typelist':'http://115.28.244.41:8888//api/goodstype/list/',
            'save':'http://115.28.244.41:8888/api/goodstype/save',
            'getbyid':'http://115.28.244.41:8888/api/goodstype/single/',
            'update':'http://115.28.244.41:8888/api/goodstype/update/',
            'del':'http://115.28.244.41:8888/api/goodstype/del/'
        },
        'logistic':{
            'logisticlist':'http://115.28.244.41:8888/api/logistic/express/list',
            'expressinfo':'http://115.28.244.41:8888/api/logistic/express/info/:oid/:code/:codeid',
            'postage':'http://115.28.244.41:8888/api/logistic/postage/calculation/muti'
        },
        'wapGoods':{

            'list':'http://115.28.244.41:8888/api/wap/goods/list',
            'detail':'http://115.28.244.41:8888/api/wap/goods/detail/:gid',
            'info':'http://115.28.244.41:8888/api/wap/goods/info/:gid',
            'favorite':'http://115.28.244.41:8888/api/wap/goods/favorite/save/:gid',
            'getFavorites':'http://115.28.244.41:8888/api/wap/goods/favorite/list',
            'condition':'http://115.28.244.41:8888/api/wap/goods/condition/:gid',
            'sku':'http://115.28.244.41:8888/api/wap/goods/single/:gid'
        },
        'indexs':{
            'indexlist':'http://115.28.244.41:8888/api/get/user',
            'list':'http://115.28.244.41:8888/api/wap/goods/list',
            'detail':'http://115.28.244.41:8888/api/wap/goods/detail/:gid',
            'info':'http://115.28.244.41:8888/api/wap/goods/info/:gid',
            'favorite':'http://115.28.244.41:8888/api/wap/goods/favorite/save/:gid',
            'getFavorites':'http://115.28.244.41:8888/api/wap/goods/favorite/list',
            'condition':'http://115.28.244.41:8888/api/wap/goods/condition/:gid',
            'sku':'http://115.28.244.41:8888/api/wap/goods/single/:gid',
            'isfav':'http://115.28.244.41:8888/api/wap/goods/favorite/isfav/:gid',
            'delfav':'http://115.28.244.41:8888/api/wap/goods/favorite/del/:favId'

        }
    }
});

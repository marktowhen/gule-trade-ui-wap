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
            'list':'http://localhost:8888/api/cart/goods/list/:uid',
            'submit':'http://localhost:8888/api/cart/clearing',
            'delete':'http://localhost:8888/api/cart/goods',
            'clear': 'http://localhost:8888/api/cart/goods/:uid',//清空用户购物车
            'countupdate':'http://localhost:8888/api/cart/goods/:id',
            'addtocart':'http://localhost:8888/api/cart',
            'count':'http://localhost:8888/api/cart/goods/count/:uid'
        },
        'indexBanner':{
            'imgList':'http://localhost:8888/api/statics/banner/list/:from/:size'
        },
        'message':{
            'list':'http://localhost:8888/api/message/list/:uid/:from/:size',
            'updateStatus':'http://localhost:8888/api/message/:id',
            'notheadcount':'http://localhost:8888/api/message/unread/amount/:uid',
            'sigleMessage':'http://localhost:8888/api/message/single/:id'
        },
        'order':{
            'listWithCondition': 'http://localhost:8888/api/orders/user/list',
            'accept':'http://localhost:8888/api/orders/acception',
            'delivered':'http://localhost:8888/api/orders/logistic',
            'singleByOID':'http://localhost:8888/api/orders/:oid',
            'listTraces': 'http://localhost:8888/api/orders/:oid/traces',
            'logistic':'http://localhost:8888/api/orders/:oid/logistic',
            'listOrderStatus':'http://localhost:8888/api/order/status/visible',
            'cancel':'http://localhost:8888/api/orders/cancellation/:oid',
            'count':'http://localhost:8888/api/orders/seller/count',
            'listClearing':'http://localhost:8888/api/cart/clearing/list',
            'submit':'http://localhost:8888/api/order',
            'confirmDelivered':'http://localhost:8888/api/orders/update/status/:oid',
            'singleorder':'http://localhost:8888/api/order/single/:oid'
        },
        'pay':{
            'list':'http://localhost:8888/api/payments',
            'prepay':'http://localhost:8888/api/payments/prepay',
            'typelist':'http://localhost:8888/api/pay/type/list'
        },
        'refund':{
            'listWithCondition': 'http://localhost:8888/api/refund/seller/list',
            'accept':'http://localhost:8888/api/refund/acception',
            'deny':'http://localhost:8888/api/refund/denial',
            'done':'http://localhost:8888/api/refund/completion'
        },
        'marketing':{
            'group':{
                'listWithCondition':'http://localhost:8888/api/marketing/group/goods/list',
                'detail':'http://localhost:8888/api/marketing/group/goods/detail',
                'start':'http://localhost:8888/api/marketing/group/purchase/start/:groupgoodsid',
                'join':'http://localhost:8888/api/marketing/group/purchase/join/:groupid',
                'singlegroup':'http://localhost:8888/api/marketing/group/:groupid',
                'user':{
                    'count':'http://localhost:8888/api/marketing/group/user/count/:groupID',
                    'list':'http://localhost:8888/api/marketing/group/user/list/:groupID',
                    'single':'http://localhost:8888/api/marketing/group/user/single/:groupid/:uid',
                    'getgroup':'http://localhost:8888/api/marketing/group/user/group/list/:uid',
                    'getgroupgoods':'http://localhost:8888/api/marketing/group/user//group/single/:id'
                }
            },
            'flashsale':{
                'list':'http://localhost:8888/api/flash/sale/bycondition/list',
                'detail':'http://localhost:8888/api/flash/sale/detail',
                'startFlash':'http://localhost:8888/api/start/buy/falsh/:flashid',
                'update':'http://localhost:8888/api/flash/sale/update/stock',
                'getsku':'http://localhost:8888/api/goods/operation/sku/byId/:id'
            },
            'rankgroup':{
            	'listWithCondition':'http://localhost:8888/api/marketing/rankgroupGoods/goods/list',
            	'detail':'http://localhost:8888/api/marketing/rankgroupGoods/goods/detail',
            	'join':'http://localhost:8888/api/marketing/rankgroup/join/:groupID',
            	'joinDetail':'http://localhost:8888/api/marketing/rankgroup/joinDetail/:groupID',
            	'start':'http://localhost:8888/api/marketing/rankgroup/start/:groupgoodsid',
            	'user':{
            		 'count':'http://localhost:8888/api/marketing/rankgroup/user/count/:groupID',
                     'list':'http://localhost:8888/api/marketing/rankgroup/user/list/:groupID'
            	}
            },
            'auction':{
                'listWithCondition':'http://localhost:8888/api/marketing/auction/goods/list',
                'detail':'http://localhost:8888/api/marketing/auction/goods/detail',
                'single':'http://localhost:8888/api/marketing/auction/goods/single',
                'count':'http://localhost:8888/api/marketing/auction/purchase/count',
                'signUp':'http://localhost:8888/api/marketing/auction/purchase/signUp/:auctionid',
                'bidding':'http://localhost:8888/api/marketing/auction/purchase/bidding/',
                'listMy':'http://localhost:8888/api/marketing/auction/my/list/',
                'listPriceLog':'http://localhost:8888/api/marketing/auction/purchase/listPriceLog',
                'join':'http://localhost:8888/api/marketing/auction/purchase/join/:id',
                'auction':'http://localhost:8888/api/marketing/auction/purchase/:id',
                'user':{
                    'count':'http://localhost:8888/api/marketing/auction/user/count/:id',
                    'list':'http://localhost:8888/api/marketing/auction/user/list/:id'
                }
            }
        },
        'login':{
            'seller':'http://localhost:8888/api/login/seller',
            'manager':'http://localhost:8888/api/login/manager'
        },
        'logout':'http://localhost:8888/api/logout',
        'refreshPwd':'http://localhost:8888/api/pwd/seller',
        //用户
        'user':{
            'getLoginUser' :'http://localhost:8888/api/user/current',
            'getSingleUser':'http://localhost:8888/api/get/user/name/:id'
        },
        //卖家
        'seller':{
            'current' :'http://localhost:8888/api/seller/current'
        },
        //管理员
        'manager':{
            'current' :'http://localhost:8888/api/manager/current'
        },
        'area' : {
            'listCountry' : 'http://localhost:8888/api/statics/area/country/list',
            //根据国家查省 /{countryID}
            'listProvince' : 'http://localhost:8888/api/statics/area/province/list',
            //根据省查市 /{provinceID}
            'listCity' : 'http://localhost:8888/api/statics/area/city/list'
        },

        'helpCenter':{
            'category' : {
            	'list' : 'http://localhost:8888/api/statics/help/center/category/list',
            	'single' : 'http://localhost:8888/api/statics/help/center/category/:id',
            	'save' :'http://localhost:8888/api/statics/help/center/category/',
            	'refresh' :'http://localhost:8888/api/statics/help/center/category/:id',
            	'remove' :'http://localhost:8888/api/statics/help/center/category/:id'
            },
            'detail' : {
            	'list' : 'http://localhost:8888/api/statics/help/center/detail/list/:categoryID',
            	'single' : 'http://localhost:8888/api/statics/help/center/detail/:id',
            	'save' :'http://localhost:8888/api/statics/help/center/detail/',
            	'refresh' :'http://localhost:8888/api/statics/help/center/detail/:id',
            	'remove' :'http://localhost:8888/api/statics/help/center/detail/:id'
            }
        },

        // 收貨地址    
        'myReceieveAddress':{
            //用戶地址
            'list' : 'http://localhost:8888/api/address/list/:uid/:offset/:size',
            //all
            'listAll':'http://localhost:8888/api/address/all',
            //详情
            'single' : 'http://localhost:8888/api/address/:id',
            //add
            'add' : 'http://localhost:8888/api/address',
            //refresh
            'refresh' : 'http://localhost:8888/api/address/:id',
            //用戶地址
            'remove' : 'http://localhost:8888/api/address/:id',
            //用户的默认地址
            'userAddress':'http://localhost:8888/api/address/default',
            //设置默认地址
            'setDefault' : 'http://localhost:8888/api/address/default/:id'
        },
        'cashCoupon' :{
            //未消费的
            'unusedCouponAmount' : 'http://localhost:8888/api/vip/coupon/cashcoupon/user/unused/amount/:uid',
            'unusedCoupon' : 'http://localhost:8888/api/vip/coupon/cashcoupon/user/unused/:uid',
            //已消费的
            'consumedCouponAmount' : 'http://localhost:8888/api/vip/coupon/cashcoupon/user/consumed/amount/:uid',
            'consumedCoupon' : 'http://localhost:8888/api/vip/coupon/cashcoupon/user/consumed/:uid',
            //过期的
            'overdueCouponAmount' : 'http://localhost:8888/api/vip/coupon/cashcoupon/user/overdue/amount/:uid',
            'overdueCoupon' : 'http://localhost:8888/api/vip/coupon/cashcoupon/user/overdue/:uid',
            //可使用的
            'useableCouponAmount' : 'http://localhost:8888/api/vip/coupon/cashcoupon/user/useable/amount/:uid',
            'useableCoupon' : 'http://localhost:8888/api/vip/coupon/cashcoupon/user/useable/:uid',
            //是否可激活
            'canActive' : 'http://localhost:8888/api/vip/coupon/cashcoupon/can/active/:code',
            //激活券
            'activeCashCoupon' : 'http://localhost:8888/api/vip/coupon/cashcoupon/user/:code'

        },
        'discountCoupon' :{
            //未消费的
            'unusedCouponAmount' : 'http://localhost:8888/api/vip/coupon/discountcoupon/user/unused/amount/:uid',
            'unusedCoupon' : 'http://localhost:8888/api/vip/coupon/discountcoupon/user/unused/:uid',
            //已消费的
            'consumedCouponAmount' : 'http://localhost:8888/api/vip/coupon/discountcoupon/user/consumed/amount/:uid',
            'consumedCoupon' : 'http://localhost:8888/api/vip/coupon/discountcoupon/user/consumed/:uid',
            //过期的
            'overdueCouponAmount' : 'http://localhost:8888/api/vip/coupon/discountcoupon/user/overdue/amount/:uid',
            'overdueCoupon' : 'http://localhost:8888/api/vip/coupon/discountcoupon/user/overdue/:uid',
            //可使用的
            'useableCouponAmount' : 'http://localhost:8888/api/vip/coupon/discountcoupon/user/useable/amount/:uid',
            'useableCoupon' : 'http://localhost:8888/api/vip/coupon/discountcoupon/user/useable/:uid',
            //是否可激活
            'canActive' : 'http://localhost:8888/api/vip/coupon/discountcoupon/can/active/:code',
            'activeDiscountCoupon' : 'http://localhost:8888/api/vip/coupon/discountcoupon/user/:code'

        },
        'counpon':{
            'cashcounpon' : {
                'list' : 'http://localhost:8888/api/vip/coupon/cashcoupon/list/:from/:size',
                'count' : 'http://localhost:8888/api/vip/coupon/cashcoupon/amount',
                'save' : 'http://localhost:8888/api/vip/coupon/cashcoupon/:amount',
                'unlock' : 'http://localhost:8888/api/vip/coupon/cashcoupon/unlock/:ids'
            },
            'discountcounpon' : {
                'list' : 'http://localhost:8888/api/vip/coupon/discountcoupon/list/:from/:size',
                'count' : 'http://localhost:8888/api/vip/coupon/discountcoupon/amount',
                'save' : 'http://localhost:8888/api/vip/coupon/discountcoupon/:amount',
                'unlock' : 'http://localhost:8888/api/vip/coupon/discountcoupon/unlock/:ids'
            }
        },
        'goods':{//根据条件查询商品
            'queryGoodsList':'http://localhost:8888/api/back/goods/list',
            'up':'http://localhost:8888/api/goodsOperation/up/',
            'down':'http://localhost:8888/api/goodsOperation/down/'
        },
        'goodsOperation':{//商品操作
            'merchantlist':'http://localhost:8888/api/goodsOperation/merchant/list',
            'brandlist':'http://localhost:8888/api/goodsOperation/brands/',
            'typelist':'http://localhost:8888/api/goods/type/list',
            'show':'http://localhost:8888/api/goodsOperation/updateveiw/',
            'save':'http://localhost:8888/api/goodsOperation/save',
            'update':'http://localhost:8888/api/goodsOperation/update/',
            'updatecount':'http://localhost:8888/api/goodsOperation/modfiycount/:gid/:count',
            'checkcode':'http://localhost:8888/api/goodsOperation/checkcode/:code'
        },       
  
        'merchant':{//根据条件查询商品
            'queryMerchantList':'http://localhost:8888/api/merchant/list',
            'getMerchantInfo':'http://localhost:8888/api/merchant/info/:mid',
            'update':'http://localhost:8888/api/merchant/updatemerchant',
            'save':'http://localhost:8888/api/merchant/savemerchant',
             'invoicelist':'http://localhost:8888/api/merchant/invoicetype/list',
            'deliverylist':'http://localhost:8888/api/merchant/deliverytype/list'
        },
        'getinformation':{
            'getSchoolSite':'http://localhost:8888/api/statics/information/sites/:siteid',
            'getSchoolName':'http://localhost:8888/api/statics/information/sitesSchool/:names',
            'saveSchool':'http://localhost:8888/api/statics/information/savedetails',
            'alldetail':'http://localhost:8888/api/statics/information/alldetail',
            'getMerchantInfo':'http://localhost:8888/api/merchant/info/:mid',
            'update':'http://localhost:8888/api/merchant/updatemerchant',
            'save':'http://localhost:8888/api/merchant/savemerchant',
			 'invoicelist':'http://localhost:8888/api/merchant/invoicetype/list',
            'deliverylist':'http://localhost:8888/api/merchant/deliverytype/list',
            'deletedetail':'http://localhost:8888/api/statics/information/delete/:id',
            'updateInfo':'http://localhost:8888/api/statics/information/update',
            'getInfoById':'http://localhost:8888/api/statics/information/detail/:id',
            'getInfoByName':'http://localhost:8888/api/statics/information/byname/detail',
            'maxOrders':'http://localhost:8888/api/statics/information/detail/orders/:id'


        },
        'comment':{
            'querycomment':'http://localhost:8888/api/allcomments'
        },
        'resource':{
            'ueditor':'http://localhost:8888/api/resource/ueditor/upload',
            'single':'http://localhost:8888/api/resource/upload/single'
        },
        'track':{//推广系统模块
            'getAddetailInfo':'http://localhost:8888/api/track/addetail/info/:id',
            'updateAddetail':'http://localhost:8888/api/track/addetail/updateAddetail',
            'saveAddetail':'http://localhost:8888/api/track/addetail/saveAddetail',
            'getAdmoduleInfo':'http://localhost:8888/api/track/admodule/info/:id',
            'updateAdmodule':'http://localhost:8888/api/track/admodule/updateAdmodule',
            'saveAdmodule':'http://localhost:8888/api/track/admodule/saveAdmodule',
            'queryAdmoduleList':'http://localhost:8888/api/track/admodule/list',
            'queryAddetailList':'http://localhost:8888/api/track/addetail/list',
            'removeAddetail':'http://localhost:8888/api/track/addetail/remove/:id',
            'removeAdmodule':'http://localhost:8888/api/track/admodule/remove/:id',
            'admodulelist':'http://localhost:8888/api/track/admodule/list'
        },
        'brand':{
            'brandlist':'http://localhost:8888//api/brand/brands/',
            'save':'http://localhost:8888/api/brand/save',
            'getbyid':'http://localhost:8888/api/brand/updateveiw/',
            'update':'http://localhost:8888/api/brand//update/',
             'del':'http://localhost:8888/api/brand/'


        },
        'goodstype':{
            'typelist':'http://localhost:8888//api/goodstype/list/',
            'save':'http://localhost:8888/api/goodstype/save',
            'getbyid':'http://localhost:8888/api/goodstype/single/',
            'update':'http://localhost:8888/api/goodstype/update/',
            'del':'http://localhost:8888/api/goodstype/del/'
        },
        'logistic':{
            'logisticlist':'http://localhost:8888/api/logistic/express/list',
            'expressinfo':'http://localhost:8888/api/logistic/express/info/:oid/:code/:codeid',
            'postage':'http://localhost:8888/api/logistic/postage/calculation/muti'
        },
        'wapGoods':{

            'list':'http://localhost:8888/api/wap/goods/list',
            'detail':'http://localhost:8888/api/wap/goods/detail/:gid',
            'info':'http://localhost:8888/api/wap/goods/info/:gid',
            'favorite':'http://localhost:8888/api/wap/goods/favorite/save/:gid',
            'getFavorites':'http://localhost:8888/api/wap/goods/favorite/list',
            'condition':'http://localhost:8888/api/wap/goods/condition/:gid',
            'sku':'http://localhost:8888/api/wap/goods/single/:gid'
        },
        'indexs':{
            'indexlist':'http://localhost:8888/api/get/user',
            'list':'http://localhost:8888/api/wap/goods/list',
            'detail':'http://localhost:8888/api/wap/goods/detail/:gid',
            'info':'http://localhost:8888/api/wap/goods/info/:gid',
            'favorite':'http://localhost:8888/api/wap/goods/favorite/save/:gid',
            'getFavorites':'http://localhost:8888/api/wap/goods/favorite/list',
            'condition':'http://localhost:8888/api/wap/goods/condition/:gid',
            'sku':'http://localhost:8888/api/wap/goods/single/:gid',
            'isfav':'http://localhost:8888/api/wap/goods/favorite/isfav/:gid',
            'delfav':'http://localhost:8888/api/wap/goods/favorite/del/:favId'

        }
    }
});

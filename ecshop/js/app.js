/**
 * Created by zhougonglai on 15/11/23.
 */
var relyOn = [//模块依赖
    "ngMdIcons",
    "ngAria",
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngMessages",
    "ngMaterial",

    "angularLazyImg",

    "slickCarousel",

    "ui.router",
    "ui.bootstrap"
];
angular.module("app",relyOn)
    .run([      '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$emit("lazyImg:refresh");
        }])
    .config(["$mdThemingProvider","$stateProvider","$urlRouterProvider","$httpProvider","lazyImgConfigProvider",
        function($mdThemingProvider,$stateProvider,$urlRouterProvider,$httpProvider,lazyImgConfigProvider){
            var color={
                "default":"500",
                "hue-1":'A200',
                "hue-2":"A400",
                "hue-3":"A700"
            };

            //主题
            $mdThemingProvider.theme("default")
                .primaryPalette('blue',color)
                .accentPalette('yellow',color)
                .warnPalette('red',color);

            //路由
            $stateProvider
                .state("toolbar",{//全局导航
                abstract:true,
                url:"/shopping",
                templateUrl:"tmpl/shoping.html"
            })
                .state("toolbar.index",{//默认主页
                url:"/index",
                templateUrl:"tmpl/index.html"
            })
                .state("toolbar.states",{//订单
                url:"/state",
                templateUrl:"tmpl/states.html"
            })
                .state("toolbar.commodity",{//商品详情
                url:"/goods",
                templateUrl:"tmpl/goods.html"
            });

            //url
            $urlRouterProvider
                //.when("/")
                .otherwise("/shopping/index");

            //图片延迟加载
            //lazyImgConfigProvider.setOptions({
            //    offset:500
            //    //onSuccess:function(image){ alert("success");console.log(image);},
            //    //onError:function(image){alert("error");console.log(image);}
            //});

            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            $httpProvider.defaults.cache=true;
        }])
    .factory("tool",["$scope","$watch",function($scope,$watch){
        return{
            //比较值
            equealTo:function(item,target){return angular.equals(item,target);},
            //请求转义方法
            transform:function(data){return $.param(data);}
        }
    }])
    .constant("cont",{
        //请求头部方法
        headerForPost:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},
        msgRturn:"请不要重复尝试"
    }).value("values",{
        flag:true
    })
    .controller("myCtrl",["$scope","$window","$q","$timeout","$mdConstant","$mdDialog",
        function($scope,$window,$q,$timeout,$mdConstant,$mdDialog){
            $scope.triggers={
                isOpen:false,
                hover:false
            };
            $scope.homebar=[
                {
                    name:"主页",
                    icons:"home",
                    direction:"top",
                    goState:"toolbar.index"
                },{
                    name:"商品",
                    icons:"more_horiz",
                    direction:"bottom",
                    goState:"toolbar.commodity"
                },{
                    name:"购物车",
                    icons:"shopping_cart",
                    direction:"top",
                    goState:"toolbar.states"
                }
            ];
            $scope.$watch("triggers.isOpen",function(isOpen){
               if(isOpen){
                   $timeout(function(){
                       $scope.triggers.hover = isOpen;
                   },600);
               } else{
                   $scope.triggers.hover = isOpen;
               }
            });
            //    test
        $scope.message = "asdasdasd";
            //查询所有商品
            function loadAll(){
                var test = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

                    //type:基本.1与特供.0
                var repos = [
                    {//1
                        id:1,
                        type:1,
                        name:"这是一个锅铲",
                        img:"img/QQ20150619134531.jpg",
                        like:122,//喜欢
                        collect:215,//收藏
                        Integral:2555,//积分
                        purchased:2424, //已经购买
                        money:295,//市场参考价
                        quantity:25121 //库存
                    },{//2
                        id:2,
                        type:1,
                        name:"锅",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:235,//收藏
                        Integral:2455,//积分
                        purchased:2244, //已经购买
                        money:131,
                        quantity:2512
                    },{//3
                        id:3,
                        type:0,
                        name:"王胜利",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:125,//收藏
                        Integral:2655,//积分
                        purchased:2244, //已经购买
                        money:131,
                        quantity:22121
                    },{//4
                        id:4,
                        type:1,
                        name:"邓杨",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:235,//收藏
                        Integral:2525,//积分
                        purchased:2544, //已经购买
                        money:131,
                        quantity:21121
                    },{//5
                        id:5,
                        type:1,
                        name:"周公来",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:235,//收藏
                        Integral:2525,//积分
                        purchased:2444, //已经购买
                        money:131,
                        quantity:21
                    },{//6
                        id:6,
                        type:1,
                        name:"曾国强",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:25,//收藏
                        Integral:2255,//积分
                        purchased:2454, //已经购买
                        money:131,
                        quantity:21
                    },{//7
                        id:7,
                        type:1,
                        name:"李小建",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:265,//收藏
                        Integral:2575,//积分
                        purchased:2474, //已经购买
                        money:131,
                        quantity:21
                    },{//8
                        id:8,
                        type:1,
                        name:"李小建",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:265,//收藏
                        Integral:2575,//积分
                        purchased:2474, //已经购买
                        money:131,
                        quantity:21
                    },{//9
                        id:9,
                        type:1,
                        name:"李小建",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:265,//收藏
                        Integral:2575,//积分
                        purchased:2474, //已经购买
                        money:131,
                        quantity:21
                    },{//10
                        id:10,
                        type:1,
                        name:"李小建",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:265,//收藏
                        Integral:2575,//积分
                        purchased:2474, //已经购买
                        money:131,
                        quantity:21
                    },{//8
                        id:11,
                        type:0,
                        name:"平底锅",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:265,//收藏
                        Integral:2575,//积分
                        purchased:2474, //已经购买
                        money:131,
                        quantity:2
                    },{//9
                        id:12,
                        type:0,
                        name:"平底锅",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:265,//收藏
                        Integral:2575,//积分
                        purchased:2474, //已经购买
                        money:131,
                        quantity:2
                    },{//10
                        id:13,
                        type:0,
                        name:"平底锅",
                        img:"img/QQ20150619134531.jpg",
                        like:112,//喜欢
                        collect:265,//收藏
                        Integral:2575,//积分
                        purchased:2474, //已经购买
                        money:131,
                        quantity:2
                    },{//11
                        id:14,
                        type:0,
                        name:"平底锅",
                        img:"img/QQ20150619134531.jpg",
                        like:12,//喜欢
                        collect:265,//收藏
                        Integral:2575,//积分
                        purchased:2474, //已经购买
                        money:131,
                        quantity:2
                    },{//12
                        id:15,
                        type:0,
                        name:"平底锅",
                        img:"img/QQ20150619134531.jpg",
                        like:12,//喜欢
                        collect:265,//收藏
                        Integral:2575,//积分
                        purchased:2474, //已经购买
                        money:131,
                        quantity:2
                    },{//12
                        id:16,
                        type:0,
                        name:"平底锅",
                        img:"img/QQ20150619134531.jpg",
                        like:12,//喜欢
                        collect:265,//收藏
                        Integral:2575,//积分
                        purchased:2474, //已经购买
                        money:131,
                        quantity:2
                    }
                ];
                return repos.map(function(repo){
                    return repo;
                });
                /*return test.map(function(test){
                 return {
                 value:test.toLowerCase(),
                 display:test
                 }
                 });*/
            }
            function  newState(state){
                alert(state);
            }
            //创建一个查询器
            function querySearch(query){
                //如果有搜索值就进行过滤@fn ->createFilterFor(query)
                var results = query ? $scope.self.states.filter(createFilterFor(query)):$scope.self.states,deferred;
                //         console.log(results);
                if($scope.self.boolean){
                    deferred = $q.defer();
                    $timeout(function(){
                        deferred.resolve(results);
                    },Math.random()*1000,false);
                    return deferred.promise;
                }else {
                    return results;
                }
            }
            function createFilterFor(query){
                var keyword=query;
                return function(state){
                    return (state.name.indexOf(keyword)===0);
                }
            }
            function  searchTextChange(text){
                console.log(text);
            }
            function selectedItemChange(item){
                /*  if(item) console.log(JSON.stringify(item));
                 else return false;*/
            }
            $scope.self={
                concat:[],
                querySearch : querySearch ,
                test:["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
                ,
                boolean:true,
                states:loadAll(),
                selectedItemChange:selectedItemChange,
                searchTextChange:searchTextChange,
                newState:newState
            };

            $scope.navs=[
                {
                    name:"厨具餐具"
                },{
                    name:"家纺日用"
                },{
                    name:"数码电器"
                },{
                    name:"车用车饰"
                },{
                    name:"时尚运动"
                },{
                    name:"儿童母婴"
                },{
                    name:"商旅书刊"
                }
            ];
            $scope.tapEnter = function(index){
                $scope.tipindex=index;
            };
            $scope.tapLeave = function(index){
                $scope.tipindex=-1;
            };
            $scope.slides = [
                {
                    image:"img/banner.jpg",
                    img:"img/840.png",
                    active:true,
                    text:"sdasd"
                },
                {
                    image:"img/banner.jpg",
                    img:"img/840.png",
                    active:false,
                    text:"sd1as23123asd"
                },
                {
                    image:"img/banner.jpg",
                    img:"img/840.png",
                    active:false,
                    text:"sd1as23123asd"
                },
                {
                    image:"img/banner.jpg",
                    img:"img/840.png",
                    active:false,
                    text:"sd1as23123asd"
                }
            ];
            $scope.subnav1=[
                {
                    bg: "img/ms.jpg",
                    title:"吃货",
                    note:"积分吃美食",
                    color:"#FFDC77"
                },{
                    bg: "img/sy.jpg",
                    title:"文艺",
                    note:"积分看电影",
                    color:"#AAF8FE"
                },{
                    bg: "img/cj.jpg",
                    title:"好运",
                    note:"积分抽大奖",
                    color:"#FEB4B3"
                },{
                    bg:"img/sr.jpg",
                    title:"生日",
                    note:"积分过生日",
                    color:"#E1D0B6"
                }

            ];
            $scope.subnav2=[
                {
                    bg:"img/2222.jpg",
                    title:"轻松拿",
                    note:"积分轻松拿",
                    color:"#fefefe"
                },{
                    bg:"img/111.jpg",
                    title:"关注微信",
                    note:"积分轻松拿",
                    color:"#fefefe"
                }
            ];
            $scope.slickConfig = {
                autoplay:false,
                draggable:false,
                autoplaySpeed:3000,
                slidesToShow:4,
                slidesToscroll:4,
                method:{},
                event:{
                    beforeChange:function(event,slick,currentSlide,nextSlide){

                    },
                    afterChange:function(event,slick,currentSlide,nextSlide){

                    }
                }
            };

            $scope.addCart = function(item){
                alert(item.name);
            };



            $scope.links=[
                {
                    name:"网贷之家",
                    url:"https://baidu.com"
                },{
                    name:"网贷天眼",
                    url:"https://google.com"
                }
            ];

    }]);
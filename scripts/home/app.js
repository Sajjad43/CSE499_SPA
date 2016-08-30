angular.module('cricket',['ui.router','iso-3166-country-codes','ngCookies',"highcharts-ng",'ngResource'])
 
 .config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider
        .state('home',{
            url:'/home',
            views:{
                'header':{
                    templateUrl:'views/home_header.html',

                },
                'content':{
                    templateUrl:'views/home.html',
                    controller:'home'
                }
            }
        })
        .state('team',{
            url:'/team',
            views:{
                'header':{
                    templateUrl:'views/header.html',

                },
                'content@':{
                    templateUrl:'views/team.html',
                   
                },
                'info@team':{
                    templateUrl:'views/team/info.html',
                    controller:'info'
                },
                'graphBlock@team':{
                    templateUrl:'views/team/graph.html'
                    //controller:'team_bat_1'
                },
                'graph@team':{
                    templateUrl:'views/team/team_bat_1.html',
                    controller:'team_bat_1'
                }
            }
        
        })
    
      
     .state('team.performance',{
        
            url:'/:id',
            views:{
                'graph@team':{
                    
                    templateUrl:function($stateParams){
                        if($stateParams.id<=3){
                            return 'views/team/team_bat_'+$stateParams.id+'.html';
                        }
                        else{
                            return 'views/team/team_bowl_'+($stateParams.id-3)+'.html'
                        }
                    },
                    controller:function($stateParams){
                         if($stateParams.id<=3){
                            return 'team_bat_'+$stateParams.id;
                        }
                        else{
                            return 'team_bowl_'+($stateParams.id-3)
                        }
                    }
                }
            }
     })    
      
     $urlRouterProvider.otherwise('/home');
    
})
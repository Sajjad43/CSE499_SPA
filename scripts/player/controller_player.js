var app=angular.module('cricket')

    .controller('playerSelect',['$scope','$state','$stateParams','$cookies','home','ISO3166','$resource',function($scope,$state,$stateParams,$cookies,home,ISO3166,$resource){
       
        $scope.team="";$scope.year="";
         $scope.countries=home.listCountry();
         $scope.startsWith =home.matching;
        $scope.playerSubmit=function(){
            
            $state.go('player.playerSelect',{team:$scope.team,year:$scope.year},{reload:true});
            
        }

    }])

    .controller('infoPlayer',['$scope','$stateParams','$cookies','$resource',function($scope,$stateParams,$cookies,$resource){
       
         $scope.player=$stateParams.player;
         $scope.team=$stateParams.team;
         $scope.year=$stateParams.year;    
                
        
        
       
    }])

    .controller('playerList',['$scope','$cookies','player','$stateParams','$resource',function($scope,$cookies,player,$stateParams,$resource){
       
        var team=$stateParams.team;
        var year=$stateParams.year;
    
        
        $scope.playerList=player.playerList;
         
        
    }])


    .controller('player_bat_2',['$scope','$stateParams','$resource',function($scope,$stateParams,$resource){

        
        
        var player=$stateParams.player;
        
        
        var player_bat2=new Highcharts.chart('player_bat_2',{
            
         
            title:{
                text:"Best performance of the batsmen on the respective batting position"
            },
            xAxis:{
                type:'category',
                title:{
                    text:'Position'
                }
            },
            tooltip:{
              shared:true
            },
            yAxis:[{
                title:{
                    text:'No of times batted',
                    style:{
                     color:Highcharts.getOptions().colors[3]
                    }
                },
                labels:{
                    style:{
                     color:Highcharts.getOptions().colors[3]
                    }
                }
            },{
                title:{
                    text:'Batting Average',
                    style:{
                        color:Highcharts.getOptions().colors[8]
                    }
                },
                labels:{
                    style:{
                        color:Highcharts.getOptions().colors[8]
                    }
                },
                opposite:true
            }],
            series:[{
                name:'No of times played',
                color:Highcharts.getOptions().colors[3],
                
            },{
                name:'Batting Average',
                color:Highcharts.getOptions().colors[8],
                yAxis:1
            }]
        })
        
        // set Data 
        player_bat2.series[0].setData([20,40,50,4,5,34,35,45]);
        player_bat2.series[1].setData([20,20,40,14,5,45,2,12]);
        
        
    }])

    .controller('player_bowl_1',['$scope','$stateParams','$resource',function($scope,$stateParams,$resource){

        var player=$stateParams.player;
        
        var player_bowl1=new Highcharts.chart('player_bowl_1',{
            
            title:{
                text:'Bowling Performance'
            },
            xAxis:{
                type:'category',
               
                title:{
                    text:'Match'
                }
            },
            yAxis:[{
                    labels:{
                        style:{
                          color:Highcharts.getOptions().colors[7]
                        }
                    },
                    title:{
                        text:'Run',
                        style:{
                            color:Highcharts.getOptions().colors[7]
                        }
                    }
                },{
                    labels:{
                      style:{
                         color:Highcharts.getOptions().colors[3]
                      }
                    },
                    title:{
                        text:'Over',
                        style:{
                            color:Highcharts.getOptions().colors[3]
                        }
                    },
                    opposite:true
                },{
                   labels:{
                      style:{
                         color:Highcharts.getOptions().colors[0]
                      }
                    },
                    title:{
                        text:'Wicket',
                        style:{
                           color:Highcharts.getOptions().colors[0]
                        }
                    },
                    opposite:true
                }
            ],
            tooltip:{
                shared:true
            },
            series:[{
                type:'column',
                name:'Run',
                
                color:   Highcharts.getOptions().colors[7]
            },{
                type:'column',
                name:'Over',
                yAxis:1,
                color:Highcharts.getOptions().colors[3]

            },{
                name:'wicket',
                
                yAxis:2
              }]
        })
       
        player_bowl1.xAxis[0].setCategories(['1','2','3','4','5']) ;
        player_bowl1.series[0].setData([23,43,54,65,57]);
        player_bowl1.series[1].setData([4,5,7,4,10]);
        player_bowl1.series[2].setData([2,3,4,1,6]);
        
       
    }])

    .controller('player_bat_1',['$scope','$stateParams','$resource',function($scope,$stateParams,$resource){

        var player=$stateParams.player;
     
        var player_bat1= new Highcharts.chart('player_bat_1',{
            title:{
                text:'Team Batting performance for consecutive matches'
            },
            xAxis:{
                type:'category',
                title:{
                    text:'Matches'
                }
            },
            yAxis:[
                {
                   labels:{
                       style:{
                        color: Highcharts.getOptions().colors[1]
                       }
                   },
                   title:{
                        text:'Runs',
                        style:{
                            color:Highcharts.getOptions().colors[1]
                        }
                     }
                },{
                   labels:{
                       style:{
                            color:Highcharts.getOptions().colors[0]
                       }
                   },
                   title:{
                        text:'Balls',
                        style:{
                            color:Highcharts.getOptions().colors[0]
                        }
                    },
                    opposite:true

             }],
            tooltip:{
              shared:true
            },
            series:[{
                name:'Balls',
                type:'column',
               
                yAxis:1
            },{
                name:'Runs',
                type:'column',
              
            }]
        });
        
        player_bat1.xAxis[0].setCategories(['1','2','3','4','5we']);
        player_bat1.series[0].setData([30,50,6,7,18]);
        player_bat1.series[1].setData([50,22,16,37,48]);
        
        
        
        
    }]);
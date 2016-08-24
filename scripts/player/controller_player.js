var app=angular.module('cricket')

    .controller('mapPlayer',['$scope','$state','$stateParams','$cookies','home','ISO3166','$resource',function($scope,$state,$stateParams,$cookies,home,ISO3166,$resource){
       //get the country id
        var country=$cookies.get('country');
      
        // set the map
        var map=AmCharts.makeChart( "mapPlayer", {

                    "type": "map",
                   
                    "dataProvider": {
                      "map": "worldLow",
                      "getAreasFromMap": true
                    },
                    "areasSettings": {
                      "autoZoom": true,
                      "selectedColor": "#CC0000",
                       "selectable":true
                    },

                    "smallMap": {}
                  });
        
        //highlighting the map
        var selectRegion=function(id,select){
            
            if(select==false)
                map.dataProvider.areas.push({'id':id,
                                        'showAsSelected':true});
            else
                map.dataProvider.areas.push({'id':id,
                                             'color':'#00CC00'});
            
            map.validateData();
        }
        //  highlight the cricketing nations  
        for(var i=0;i<home.listCountry().length;i++){
                selectRegion(ISO3166.getCountryCode(home.listCountry()[i]),false);
        }
        //the selected nation
        selectRegion(country,true);
        
        map.addListener('clickMapObject',function(event){
            selectRegion(event.mapObject.id);
            $cookies.put('country',event.mapObject.id);
            $state.go('player',{},{reload:true});//reload
        });
        

    }])

    .controller('infoPlayer',['$scope','$stateParams','$cookies','$resource',function($scope,$stateParams,$cookies,$resource){
       
         $scope.player=$stateParams.player;
       
    }])

    .controller('playerList',['$scope','$stateParams','player','$resource',function($scope,$stateParams,player,$resource){
       
        $scope.playerList=player.playerList;
         
        
    }])


    .controller('player_bat_2',['$scope','$resource',function($scope,$resource){

        Highcharts.chart('player_bat_2',{
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
                data:[20,40,50,4,5,34,35,45]
            },{
                name:'Batting Average',
                color:Highcharts.getOptions().colors[8],
                data:[20,20,40,14,5,45,2,12],
                yAxis:1
            }]
        })
    }])

    .controller('player_bowl_1',['$scope','$resource',function($scope,$resource){

        Highcharts.chart('player_bowl_1',{
            title:{
                text:'Bowling Performance'
            },
            xAxis:{
                categories:['1','2','3','4','5'],
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
                data:[23,43,54,65,57],
                color:   Highcharts.getOptions().colors[7]
            },{
                type:'column',
                name:'Over',
                data:[4,5,7,4,10],
                yAxis:1,
                color:Highcharts.getOptions().colors[3]

            },{
                name:'wicket',
                data:[2,3,4,1,6],
                yAxis:2
              }]
        })
    }])

    .controller('player_bat_1',['$scope','$resource',function($scope,$resource){

        Highcharts.chart('player_bat_1',{
            title:{
                text:'Team Batting performance for consecutive matches'
            },
            xAxis:{
                categories:['1','2','3','4','5'],
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
                data:[30,50,6,7,18],
                yAxis:1
            },{
                name:'Runs',
                type:'column',
                data:[50,22,16,37,48]
            }]
        });
    }]);
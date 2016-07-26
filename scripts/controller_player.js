var app=angular.module('cricket')

  

    .controller('mapPlayer',['$scope','$state','$stateParams',function($scope,$state,$stateParams){

        if($stateParams.country!=undefined){
            $scope.country=$stateParams.country;
        } 
        else{
            $scope.country='US';
        }
        
        var map=AmCharts.makeChart( "mapPlayer", {

                    "type": "map",

                    "dataProvider": {
                      "map": "worldLow",
                      "getAreasFromMap": true
                    },
                    "areasSettings": {
                      "autoZoom": true,
                      "selectedColor": "#CC0000",
                        selectable:true
                    },

                    "smallMap": {}
                  } );
        
        var selectRegion=function(id){
            map.dataProvider.areas=[{'id':id,"showAsSelected":true}];
            map.validateData();
        }
        
        selectRegion($scope.country);
        
        map.addListener('clickMapObject',function(event){
            selectRegion(event.mapObject.id);
            $state.go('home.player',{country:event.mapObject.id}) 
        });
        

    }])

    .controller('infoPlayer',['$scope','$stateParams',function($scope,$stateParams){
       
        console.log($stateParams.country);
        
    }])


    .controller('player_bat_2',['$scope',function($scope){

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
                } ,
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

    .controller('player_bowl_1',['$scope',function($scope){

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
                         color: Highcharts.getOptions().colors[3]
                      }
                    },
                    title:{
                        text:'Over',
                        style:{
                              color:  Highcharts.getOptions().colors[3]
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
                    } ,
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
                color:   Highcharts.getOptions().colors[3]

            },{
                name:'wicket',
                data:[2,3,4,1,6],
                yAxis:2
              }]
        })
    }])

    .controller('player_bat_1',['$scope',function($scope){


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
                        color:Highcharts.getOptions().colors[1]
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
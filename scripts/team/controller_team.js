var app=angular.module('cricket')

   
    .controller('teamSelect',['$scope','$stateParams','$state','$cookies','home','ISO3166','team',function($scope,$stateParams,$state,$cookies,home,ISO3166,$team){
      
     
         //get the country and year
        $scope.team="";
        $scope.year="";
        
        $scope.countries=home.listCountry();
        $scope.startsWith=home.matching;
        
         
        $scope.teamSubmit=function(){
           
            $state.go('team.select',{team:$scope.team,year: $scope.year},{reload:true});
        }
        
        
    }])

    .controller('team_bat_3',['$scope','$resource','$stateParams',function($scope,$resource,$stateParams){
        
        var team=$stateParams.team;
        var year=$stateParams.year;
        
        
       var team_bat3 = new Highcharts.chart('team_bat_3',{
               
               chart:{
                   type:'heatmap',
                   marginTop:'40',
                   marginBottom:'80',
                   plotBorderWidth:1
               },
                xAxis:{
                    title:{
                        text:'Player'
                    }
                },
                yAxis:{
                    title:{
                         text:'Match'
                    }
                },
                title:{
                    text:'Individual batting performance'
                },
                colorAxis:{
                    minColor:'#FFFFFF',
                    maxColor:'#33cc33'
                },
                legend:{
                    align:'right',
                    verticalAlign:'top',
                    symbolHeight:280,
                    y:25,
                    layout:'vertical'
                },
                tooltip:{
                  formatter:function(){
                      return '<b>'+team_bat3.xAxis[0].categories[this.point.x]+'-'+team_bat3.yAxis[0].categories[this.point.y]+'='+
                          this.point.value+'<b>';
                  }  
                },
                series:[{
                        name:'Run',
                        data:[{}],
                        dataLabels:{
                            enabled:true,
                            color: '#000000'
                        },
                        borderWidth:1
                }]
            })
       
       var axisX=['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon']
       var axisY=['Aus', 'Bng', 'Ind', 'Sri', 'Pak'];
       var array=[
                    [0,0,23],[0,1,43],[0,2,34],[0,3,43],[0,4,44],
                    [1,0,23],[1,1,43],[1,2,34],[1,3,33],[1,4,54],
                    [2,0,34],[2,1,13],[2,2,34],[2,3,93],[2,4,4],
                    [3,0,73],[3,1,43],[3,2,24],[3,3,63],[3,4,24],
                    [4,0,32],[4,1,53],[4,2,14],[4,3,93],[4,4,14],
                ];
     
        team_bat3.xAxis[0].setCategories(axisX);
        team_bat3.yAxis[0].setCategories(axisY);
        team_bat3.series[0].setData(array);
     
    }])

    .controller('team_bowl_1',['$scope','$resource','$stateParams',function($scope,$resource,$stateParams){
        
        var team=$stateParams.team;
        var year=$stateParams.year;
        var team_bowl1=new Highcharts.chart('team_bowl_1',{
                
                title:{
                    text:"Bowling performance of the team"
                },
                xAxis:{
                   
                    title:{
                        text:'team'
                    }
                },
                yAxis:[
                    {
                      min:0,
                      labels:{
                              style:{
                                 color:Highcharts.getOptions().colors[3]
                              }
                      },
                      title:{
                          text:"Run",
                          style:{
                              color:Highcharts.getOptions().colors[3]
                          }
                      }    
                    },{
                        title:{
                            text:'Balls',
                            style:{
                                color:Highcharts.getOptions().colors[4]
                            }
                        },
                        labels:{
                              style:{
                                 color:Highcharts.getOptions().colors[4]
                              }
                        },
                        opposite:true
                    },{
                        title:{
                            text:'Wickets',
                            style:{
                              color:Highcharts.getOptions().colors[5]
                            }
                        },
                        labels:{
                              style:{
                                 color:Highcharts.getOptions().colors[5]
                              }
                         },
                       
                        opposite:true,
                        min:0,
                        max:11
                    }
                ],
                tooltip:{
                   
                },
                plotOptions:{
                    column:{
                        grouping:false,
                        shadow:false,
                        borderWidth:1
                    }
                },
                series:[
                    {   type:'column',
                        name:"Runs concded",
                        color:Highcharts.getOptions().colors[6],
                        pointPadding:0.3,
                        pointPlacement:-0.2
                        
                    },{
                        type:'column',
                        name:"Extras",
                        color:Highcharts.getOptions().colors[3],
                        pointPadding:0.4,
                        pointPlacement:-0.2
                    },{
                        type:'column',
                        name:"Boundary Balls",
                        color:Highcharts.getOptions().colors[10],
                        pointPadding:0.3,
                        pointPlacement:0.2,
                        yAxis:1
                    },{
                        type:'column',
                        name:"Dot Balls",
                        color:Highcharts.getOptions().colors[9],
                        pointPadding:0.4,
                        pointPlacement:0.2,
                        yAxis:1
                    },{
                        type:'line',
                        name:"wickets",
                        color:Highcharts.getOptions().colors[5],
                        yAxis:2
                    }]
            
        })
        
        var xAxis=['Aus','Ind','Bng','Zmb'];
        team_bowl1.xAxis[0].setCategories(xAxis);
        
        var runConcede=[34,54,54,45];
        team_bowl1.series[0].setData(runConcede);
       
        var extras=[30,60,80,15];
        team_bowl1.series[1].setData(extras);
        
        var boundaryBall=[12,34,45,44];
        team_bowl1.series[2].setData(boundaryBall);
        
        var dotBalls=[24,34,4,85];
        team_bowl1.series[3].setData(dotBalls);
        
        var wickets=[4,4,7,5];
        team_bowl1.series[4].setData(wickets);
        
        
    }])


    .controller('team_bat_1',['$scope','$state','team','$stateParams',function($scope,$state,team,$stateParams){
        
         var team=$stateParams.team;
         var year=$stateParams.year;
       
        var team_bat1=new Highcharts.chart('team_bat_1',{
            
            title: {
                text: 'Team Statistics',
            },
           colors:['#009933','#ff6600','#999966','#ff9933'],
           xAxis: {
               
                title: {
                    text: 'Over'
                }
            },
            yAxis: {
                title: {
                    text: 'Runs'
                }
            },
            tooltip: {
                valueSuffix: 'runs'
            },
            series: []

        });
       
        var xAxis=['10', '20', '30', '40', '50'];
        team_bat1.xAxis[0].setCategories(xAxis);
        
        
        var data=[
            {   name: 'Match 1',
                data: [10, 25, 8, 17, 31]
            },{
                name: 'Match 2',
                data: [2, 15, 27, 19, 24]
            },{
                name: 'Match 3',
                data: [0, 6 , 15, 30, 24]
            }
        ];
       
        for(var i=0;i<data.length;i++)
            team_bat1.addSeries(data[i]);
        
    /*  team.infoStat().$promise.then(function(response){
            console.log(response)
        },function(response){
            console.log("error");
        });*/
       
    }])

    .controller('team_bat_2',['$scope','ISO3166','$resource','$state','$stateParams',function($scope,ISO3166,$resource,$state,$stateParams){
     
        var team=$stateParams.team;
        var year=$stateParams.year;
         
        console.log(year);
        
       var team_bat2= Highcharts.chart('team_bat_2',{
            chart:{
               type: 'column'
            },
            title: {
                text: 'Batting Partnership Number'
            },
            xAxis:{
                categories:['1','2','3','4','5','6','7','8','9','10'],
                
                title: {
                    text: 'Partnership',
                    style:{
                        color:Highcharts.getOptions().colors[7]
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Run',
                    align: 'high',
                     style:{
                        color:Highcharts.getOptions().colors[7]
                    }
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' runs'
            },
            series: []
    
        })
       
       var data=[{
                name: 'Match-1',
                data: [107, 50,104,45,67,7,5]
            },{
                name: 'Match-2',
                data: [33, 78, 100,5,67,8,23]
            }, {
                name: 'Match-3',
                data: [75, 110, 65,45,67,2]
            },{
                name: 'Match-4',
                data: [35, 10,5,4,56,43,2]
            },{
                name: 'Match-5',
                data: [75, 20, 50,45,3,21,2]
            }]
       
       for(var i=0;i<data.length;i++)
           team_bat2.addSeries(data[i]);
       
    }])

    .controller('info',['$scope','$state','$stateParams','ISO3166','$cookies','$resource',function($scope,$state,$stateParams,ISO3166,$cookies,$resource){

        $scope.country=$stateParams.team;
        $scope.year=$stateParams.year;
       
    }])
    
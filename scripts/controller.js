'use strict';

var myApp = angular.module('cricket')

    .controller('home',['$scope','$state',function($scope,$state){

        var map = AmCharts.makeChart( "mapdiv", {
                 
                    "type": "map",
             
                    "dataProvider": {
                      "map": "worldLow",
                      "getAreasFromMap": true,
                    },
                   
                    "areasSettings": {
                        "selectedColor": "#CC0000",
                        "selectable":true
                    },
               
                    "smallMap": {},
                    
                  });
            
         map.addListener('clickMapObject',function(event){
           
            if(event.mapObject.id!=undefined){
               map.dataProvider.areas=[{'id':''+event.mapObject.id,'showAsSelected':true}];
                map.validateData();
                
                
                $state.go('home.team',{country:''+event.mapObject.id})
            }
            
         });
               
    

    }])
   
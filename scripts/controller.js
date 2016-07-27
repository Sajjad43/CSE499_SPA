'use strict';

var myApp = angular.module('cricket')

   
      
        .controller('home',['$scope','$state','$cookies',function($scope,$state,$cookies){

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
              
                $cookies.put('country',event.mapObject.id);
                
                $state.go('team');
            }
            
         });
               
    

    }])
   
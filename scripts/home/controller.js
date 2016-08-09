'use strict';

var myApp = angular.module('cricket')
   
        .controller('home',['$scope','$state','$cookies','home','ISO3166',function($scope,$state,$cookies,home,ISO3166){
            
            var map = AmCharts.makeChart( "mapdiv", {
                 
                        "type": "map",
                        "dataProvider": {
                          "map": "worldLow",
                          "getAreasFromMap": true,
                        },
                        "areasSettings": {
                            "selectedColor": "#CC0000",
                        },
                        "smallMap": {},
                  });
            var countries=[];
            
            for(var i=0;i<home.listCountry().length;i++){
                console.log(ISO3166.getCountryCode(home.listCountry()[i]));
                countries[i]={'id':ISO3166.getCountryCode(home.listCountry()[i]),"selectable":true,'showAsSelected':"#CC0000"};
            }
            map.dataProvider.areas=countries;
            map.validateData();
            
            
         map.addListener('clickMapObject',function(event){
           
            if(event.mapObject.id!=undefined){
               map.dataProvider.areas=[{'id':''+event.mapObject.id,'showAsSelected':true}];
                map.validateData();
                
                $cookies.put('country',event.mapObject.id);    
                $state.transitionTo('team');
            }
            
         });
               
    

    }])
   
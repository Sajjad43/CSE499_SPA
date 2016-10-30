'use strict';

var myApp = angular.module('cricket')
   
        .controller('home',['$scope','$state','$cookies','home','ISO3166','$resource',function($scope,$state,$cookies,home,ISO3166,$resource){
            
           $scope.countries=home.listCountry();
            
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
                countries[i]={'id':ISO3166.getCountryCode(home.listCountry()[i]),"selectable":true,'showAsSelected':true};
            }
            map.dataProvider.areas=countries;
            map.validateData();
            
            
         
               
    

    }])

.controller('countries',['$scope','home','$cookies','$state','$resource',function($scope,home,$cookies,$state,$resource){
    $scope.countryList=home.listCountry();
    
    
    
    $resource('192.168.0.102:1000/team/team_batting_partnership/:id',{id:'@id'}).get({id:'Pakistan'},function(data){
         console.log(data);
    })
    
    
    $scope.c=function(x){
        console.log(x);
        $cookies.put('country',x);    
        $state.transitionTo('team');
    }
    
}])


   
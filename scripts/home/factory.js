angular.module('cricket')


.service('home',['$resource','baseUrl',function($resource,baseUrl){
    
    
    this.generalInfo=function(){
         var res=$resource(baseUrl+'home')
            return res.get();
    }
        
    this.listCountry=function(){
       var countries=['Bangladesh','Pakistan','India','Sri Lanka','New Zealand','South Africa','Zimbabwe','Ireland','Australia','Hong Kong','Afganistan','America','Canada','Holland','Nepal','Japan','Italy']; 
        
        //var countries=[{ "label": "one", "value": 1 },{ "label": "two", "value": 2 },{ "label": "three", "value": 3 }]
        
        return countries;
        
        //var res=$resource(baseUrl+'countries')
        //return res.query();
        
    }
    
    this.matching= function(state,viewValue) {
             
        return state.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
    } 
    
    
    
}])
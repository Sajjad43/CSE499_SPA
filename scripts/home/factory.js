angular.module('cricket')


.service('home',['$resource','baseUrl',function($resource,baseUrl){
    
    
    this.generalInfo=function(){
         var res=$resource(baseUrl+'home')
            return res.get();
    }
        
    this.listCountry=function(){
       var countries=['Bangladesh','Pakistan','India','Sri Lanka','New Zealand','South Africa','Zimbabwe','Ireland','Australia']; 
        return countries;
        
        //var res=$resource(baseUrl+'countries')
        //return res.query();
        
    }
    
    
    
}])
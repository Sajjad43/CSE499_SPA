angular.module('cricket')

.service('home',function(){
    
    
    this.generalInfo=function(){
        
    }
        
    this.listCountry=function(){
       var countries=['Bangladesh','Pakistan','India','Sri Lanka','New Zealand','South Africa','Zimbabwe','Ireland','Australia']; 
        return countries;
    }
    
    
    
})
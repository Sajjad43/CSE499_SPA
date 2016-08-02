angular.module('cricket')
    .service('match',function(home){
    
        this.team1='';
        this.team2='';
        this.selectedTeam='';
    
    
        this.listTeam=home.listCountry();
    
        this.listMatch=[{
            
            date:'18 Sept',
            venue:'mohali',
            result:'pak'
             
        },{
             date:'28 Oct',
            venue:'Delhi',
            result:'pak'
        },{
             date:'8 Sept',
            venue:'mohali',
            result:'pak'
        },{
             date:'23 Jan',
            venue:'mohali',
            result:'ban'
        },{
             date:'18 April',
            venue:'Khulna',
            result:'Sri'
        },{
             date:'1 Sept',
            venue:'mohali',
            result:'pak'
        }]
        
    
    })

    
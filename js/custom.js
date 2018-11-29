$(document).ready(function() {
    
    $('.offer').waypoint(function() {
        
       $('.offer').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
    
    
     $('.list').waypoint(function() {
        
       $('.list').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
    
});
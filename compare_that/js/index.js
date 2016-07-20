$(document).ready(function(){
  $('#submit').on('click',compareItems);

});

function compareItems(event){
    
    var a = $('#a').val();
    var b = $('#b').val();

    if (a > b){
        $('#comparison').html('>');
    } 

    else if (a < b){
        $('#comparison').html('<');
    }

    else{
        $('#comparison').html('==');
    }
}


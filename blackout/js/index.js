var isOn = true;
$(document).ready(function(){
  $('#light_switch').on('click',function(){;
    if(isOn){
        isOn = false;
        $('body').css('background-color','black');
    }
    else{
        $('body').css('background-color','white');
        isOn = true;
    }
})
})




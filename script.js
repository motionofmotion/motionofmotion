const mediaQuery = window.matchMedia('(min-width: 992px)');


function after(){
    
    document.getElementById('nav_list').innerHTML = 'Contact';
}



function before(){
    let menu  = document.getElementById('nav_list');
    let modal =  document.getElementsByClassName('modal');
    
    
    menu.innerHTML = 'Menu';
    menu.addEventListener('click', function() {
        modal[0].style.display = 'block';
        
        
    });
    
    
    let closeButton = document.getElementById('close_btn');
    closeButton.addEventListener('click', function() {
        modal[0].style.display = 'none';
    });
    
}


if (mediaQuery.matches) {
    after();

  
} else {
    
    before();
  
}










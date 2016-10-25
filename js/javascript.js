var projectName = document.querySelector('h5');

var project = document.getElementsByClassName('special');

var icon = document.getElementsByClassName('col-md-2');

var $;

var console;

var scrollButton = $('.scroll');

var scrollUp = $('#arrow-up');

setTimeout(function () {
   
    'use strict';

    document.getElementById('scroll-top').style.display = 'none';
    

    
    
}, 5000);

$(function () {
    
    'use strict';
    
    console.log($(window).scrollTop());
    
    $(window).scroll(function () {
       
        if ($(window).scrollTop() >= 100) {
            
            scrollButton.hide();
        
        } else {
            
            scrollButton.show();
        }
        
       /* if ($(window).scrollTop() >= 200) {
            
            scrollUp.show();
        } else {
            
            scrollUp.hide();
        }*/
        

       
    });
    
    scrollButton.click(function () {
        
        $('html,body').animate({scrollTop: 590});
        
    });
    
    scrollUp.click(function () {
       
        
        
        $('html,body').animate({scrollTop: 0}, 1000);
        
    });
});



project[0].onmouseenter = function () {
  
    'use strict';
    
    if (this.firstElementChild.classList.contains('animated', 'bounceOutLeft')) {
        
        this.firstElementChild.classList.remove('animated', 'bounceOutLeft');
        this.firstElementChild.classList.add('animated', 'bounceIn');
        this.firstElementChild.style.display = 'block';
   
    } else {
        
        
        this.firstElementChild.classList.add('animated', 'bounceIn');
        this.firstElementChild.style.display = 'block';
    
    }
    
        
    
    
};

project[1].onmouseenter = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceOutLeft');
    this.firstElementChild.classList.add('animated', 'bounceIn');
    this.firstElementChild.style.display = 'block';
    
    
};

project[2].onmouseenter = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceOutLeft');
    this.firstElementChild.classList.add('animated', 'bounceIn');
    this.firstElementChild.style.display = 'block';
    
    
};

project[3].onmouseenter = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceOutLeft');
    this.firstElementChild.classList.add('animated', 'bounceIn');
    this.firstElementChild.style.display = 'block';
    
    
};

project[4].onmouseenter = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceOutLeft');
    this.firstElementChild.classList.add('animated', 'bounceIn');
    this.firstElementChild.style.display = 'block';
    
    
};

project[5].onmouseenter = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceOutLeft');
    this.firstElementChild.classList.add('animated', 'bounceIn');
    this.firstElementChild.style.display = 'block';
    
    
};

project[0].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    this.firstElementChild.classList.add('animated', 'bounceOutLeft');
    this.firstElementChild.style.display = 'none';
        
   
        
   
    
   
};

project[1].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    this.firstElementChild.classList.add('animated', 'bounceOutLeft');
    this.firstElementChild.style.display = 'none';
    
    
};

project[2].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    this.firstElementChild.classList.add('animated', 'bounceOutLeft');
    this.firstElementChild.style.display = 'none';
    
    
};

project[3].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    this.firstElementChild.classList.add('animated', 'bounceOutLeft');
    this.firstElementChild.style.display = 'none';
    
    
};

project[4].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    this.firstElementChild.classList.add('animated', 'bounceOutLeft');
    this.firstElementChild.style.display = 'none';
    
    
};

project[5].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    this.firstElementChild.classList.add('animated', 'bounceOutLeft');
    this.firstElementChild.style.display = 'none';
    
    
};

icon[0].onmouseenter = function () {
  
    'use strict';
    
    this.firstElementChild.classList.add('animated', 'bounceIn');
    
    
};
icon[1].onmouseenter = function () {
  
    'use strict';
    
    this.firstElementChild.classList.add('animated', 'bounceIn');
    
    
};
icon[2].onmouseenter = function () {
  
    'use strict';
    
    this.firstElementChild.classList.add('animated', 'bounceIn');
    
    
};
icon[3].onmouseenter = function () {
  
    'use strict';
    
    this.firstElementChild.classList.add('animated', 'bounceIn');
    
    
};
icon[4].onmouseenter = function () {
  
    'use strict';
    
    this.firstElementChild.classList.add('animated', 'bounceIn');
    
    
};
icon[0].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    
    
};
icon[1].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    
    
};
icon[2].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    
    
};
icon[3].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    
    
};
icon[4].onmouseleave = function () {
  
    'use strict';
    
    this.firstElementChild.classList.remove('animated', 'bounceIn');
    
    
};



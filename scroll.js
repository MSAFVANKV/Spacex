const observer = new IntersectionObserver(function(entries : IntersectionObserverEntry[], ){
  entries.forEach(function(section:IntersectionObserverEntry){
    if(section.isIntersecting) {
        section.target.className = 'active'
    }
    
  });

});

document.querySelectorAll('section').foreach(section => {
    observer.observe(section);

});




// observer.observe(document.querySelector(selectors : 'Selection:nth-child(1)'));
// observer.observe(document.querySelector(selectors : 'Selection:nth-child(2)'));
// observer.observe(document.querySelector(selectors : 'Selection:nth-child(3)'));
// observer.observe(document.querySelector(selectors : 'Selection:nth-child(4)'));
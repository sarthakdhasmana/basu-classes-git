const slider = (container_id, prev_id, next_id, slide_class) => {
    const container = document.getElementById(container_id);
    const nxtBtn = document.getElementById(next_id);
    const preBtn = document.getElementById(prev_id);
  
    const items = document.getElementsByClassName(slide_class);
    const item = items[0];
    const itemWidth = item.getBoundingClientRect().width;
  
    const maxWidth = itemWidth*items.length - container.getBoundingClientRect().width + itemWidth+20
    var currentWidth = container.scrollLeft;
  
    let isDown = false;
    let startX;
    let scrollLeft;
  
    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
  
    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('active');
    });
  
    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('active');
    });
  
    container.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX);
      container.scrollLeft = scrollLeft - walk;
      currentWidth = container.scrollLeft
    });
  
    nxtBtn.addEventListener('click', ()=> {
      if (currentWidth < maxWidth){
        currentWidth+= itemWidth+20
        container.scrollTo({
          left: currentWidth,
          behavior: "smooth"
        })
      }
      if (currentWidth > maxWidth) {
        currentWidth = container.scrollLeft;
      }
    })
  
    preBtn.addEventListener('click', ()=> {
      if (currentWidth > 0){
        currentWidth-= itemWidth+20
        container.scrollTo({
          left: currentWidth,
          behavior: "smooth"
        })
      }
      if (currentWidth < 0) {
        currentWidth = container.scrollLeft;
      }
    }) 
  }
  
  slider('feature-container', 'feature-pre-btn', 'feature-nxt-btn', 'feature-item');
  slider('achiever-container', 'achiever-pre-btn', 'achiever-nxt-btn', 'achiever-item')
  slider('testimonial-container', 'testimonial-pre-btn', 'testimonial-nxt-btn', 'testimonial-item')
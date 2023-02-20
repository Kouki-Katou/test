window.onload=()=>{
    
    const head1 = document.getElementById('head1');
    const head2 = document.getElementById('head2');
    const name = document.getElementById('name');
    head1.classList.add('fadein-after');
    setTimeout(()=>{
head2.classList.add('fadein-after');
    },500);
    setTimeout(()=>{
name.classList.add('in-after');
    },2050);
setTimeout(()=>{
toc.classList.add('in-after');
    },3000);
    
}

const animate=() => {
    requestAnimationFrame(animate);
    const anc1 = anchor1.getBoundingClientRect().top;
    const anc2 = anchor2.getBoundingClientRect().top;
    const anc3 = anchor3.getBoundingClientRect().top;
    const anc4 = anchor4.getBoundingClientRect().top;
    const anc5 = anchor5.getBoundingClientRect().top;
    const windowH = window.innerHeight;

    if(windowH<anc1){
        
        title.classList.remove('box-aft');
        about.classList.remove('box-mid');

    }else if(windowH>anc1&&windowH<anc2){

        title.classList.add('box-aft');
        about.classList.remove('box-aft');
        about.classList.add('box-mid');
        works.classList.remove('box-mid');
        works.classList.add('box-bef');
        
    }else if(windowH>anc2&&windowH<anc3){
        title.classList.add('box-aft');
        about.classList.remove('box-mid');
        about.classList.add('box-aft');
        works.classList.remove('box-aft');
        works.classList.add('box-mid');
        contact.classList.remove('box-mid');

    }else if(windowH>anc3&&windowH<anc4){
        title.classList.add('box-aft');
        about.classList.add('box-aft');
        works.classList.remove('box-mid');
        works.classList.add('box-aft');
        contact.classList.add('box-mid');
        console.log("3");
    }else if(windowH>anc4&&windowH<anc5){

        console.log("4");
    }
}




animate();

const countdown = (start , callback) => {
    if(start>0){
        document.getElementById('countdown').textContent = start;
        setTimeout(()=>{
            countdown(start - 1,callback)
        },1000);
    }else{
        document.getElementById('countdown').textContent = 'Hello buddy';
        callback();
    }
};

countdown(10,()=>{
    console.log("Hello buddy");
})
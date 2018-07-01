window.onload = function () {
    let spans = document.querySelectorAll('.x-d-time');
    console.log(spans);
    setDate();
    setInterval(setDate,1000);
    function setDate() {
        let arr = fn();
        spans.forEach((element, index) => {
            element.innerText = arr[index];
        })
    }
    function fn() {
        let arr=[];
        let date=new Date();        //获取当前时间
        let now=new Date();           //获取设定时间
        date.setDate(3);
        date.setHours(0);
        date.setMinutes(0);
        let time=Math.floor(date.getTime()-now.getTime())/1000;         //获取剩余总时间
        time=time%(60*60*24*30);
        let day=Math.floor(time/(60*60*24));
        arr.push(day);
        time=time%(60*60*24);
        let hours=Math.floor(time/(60*60));
        arr.push(hours);
        time =time%(60*60);
        let minutes=Math.floor(time/60);
        arr.push(minutes);
        return arr;
    }

};

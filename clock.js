let hr = document.querySelector("#hour");
let min = document.querySelector("#minute");
let sec = document.querySelector("#second");

const display_Time = () =>{
    let date = new Date();
    // console.log(date);

    let hor = date.getHours();
    // console.log(hor);
    let mnt = date.getMinutes();
    // console.log(mnt);
    let secd = date.getSeconds();
    // console.log(secd);

    let hrRotation = 30*hor + mnt/2;
    let minRotation = 6*mnt;
    let secRotation = 6*secd;

    hr.style.transform = `rotate(${hrRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;

}

setInterval(display_Time,1000);
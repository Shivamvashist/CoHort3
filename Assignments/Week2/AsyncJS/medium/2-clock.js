// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//     HH:MM::SS (Eg. 13:45:23)

//     HH:MM::SS AM/PM (Eg 01:45:23 PM)

const time = new Date();

let hr = 23;
let min = 59;
let sec = time.getSeconds();

let ind = hr < 12 ? "am" : "pm";


// hr = hr > 12 ? hr-12 : hr ;
// hr = hr<10 ? "0"+hr : hr;
// min = min<10 ? "0"+min : min;
// sec = sec<10 ? "0"+sec : sec;


function showTime(){
    // setInterval(()=>{
    //     hr++
    // },3600000)
    // setInterval(()=>{
    //     min++
    // },60000)
    //sec++

    setInterval(()=>{
        sec++
        sec = sec<10 ? "0"+sec : sec;
        if(sec==60){
            sec = 0+"0";
            min ++
            min = min<10 ? "0"+min : min;
            if(min == 60){
                min = 0+"0";
                hr ++
                if(hr == 24 ){
                    hr=0;
                }
                hr = hr > 12 ? hr-12 : hr ;
                hr = hr<10 ? "0"+hr : hr;
                ind = hr < 12 ? "am" : "pm";
            }
        }

        console.log(`${hr}:${min}:${sec} ${ind}`);
    },1000)

    

}
showTime();
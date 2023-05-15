 //initializing variables
 let audio = new Audio("alarm_tone.mp3");
 let grabHours = document.querySelector(".hrs");
 let grabMinutes = document.querySelector(".min");
 let grabSeconds = document.querySelector(".sec");
 let grabMeridiam = document.querySelector(".ap");
 let setHours = -1;
 let setMinutes = -1;
 let setDates = -1;
 let grabStop = document.querySelector(".stop")
 grabStop.style.display = "none"
 let grabSnooze = document.querySelector(".snooze")
 grabSnooze.style.display = "none"
 let grabButton = document.querySelector(".Set");
 grabButton.addEventListener("click", setAlarm);
 let snoozeTime = -1

 const daysOfWeek = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"]
 function displayDaysOfWeek() {
     let date = new Date()
     let val1 = daysOfWeek[parseInt(date.getDay())]
     console.log(val1)
     let grabList = document.querySelector(`.${val1}`)
     grabList.style.color = "#13ebf2";
 }
 displayDaysOfWeek()

 // setting time for snooze
 let grabSnoozeOptions = document.querySelector(".snoozeOptions")
 grabSnoozeOptions.addEventListener("click", function () {
     const check = `input[name=snoozing]:checked`
     snoozeTime = grabSnoozeOptions.querySelector(check).value
     console.log(snoozeTime)
 })

 // code for setting the alarm
 function setAlarm() {
     setHours = document.querySelector("#hrs1").value;
     setMinutes = document.querySelector("#min1").value;
     setDates = document.querySelector("#day1").value;
     console.log(setHours, setMinutes)
 }

 function setmeridiam() {
     let date = new Date()
     if (date.getHours() >= 12 && date.getHours() <= 23)
         grabMeridiam.innerText = "PM"
     else
         grabMeridiam.innerText = "AM"
 }
 setmeridiam()

 // code for checking and displaying alarm
 function call() {
     let date = new Date();

     if (date.getHours() <= 9) {
         grabHours.innerText = "0" + date.getHours();
     } else {
         grabHours.innerText = date.getHours();
     }
     if (date.getMinutes() <= 9) {
         grabMinutes.innerText = "0" + date.getMinutes();
     } else {
         grabMinutes.innerText = date.getMinutes();
     }
     if (date.getSeconds() <= 9) {
         grabSeconds.innerText = "0" + date.getSeconds();
     } else {
         grabSeconds.innerText = date.getSeconds();
     }
     if (setHours != -1 && setMinutes != -1) {
         if (setDates == parseInt(date.getDate()) && setHours == parseInt(grabHours.innerText) && setMinutes == parseInt(grabMinutes.innerText)) {
             audio.play();
             grabStop.style.display = "block"
             grabSnooze.style.display = "block"
         } else {
             audio.pause();
         }
     }
     setTimeout(call, 1000);
 }
 setTimeout(call, 2000);

 //code for stopping the alarm
 grabStop.addEventListener("click", function () {
     setHours = -1
     setMinutes = -1
     setDates = -1
     grabStop.style.display = "none"
     grabSnooze.style.display = "none"
     audio.pause()

 })

 // code For snoozing the alarm
 grabSnooze.addEventListener("click", function () {
     setMinutes = parseInt(setMinutes) + parseInt(snoozeTime)
     if (parseInt(setMinutes) >= 60) {
         setMinutes = parseInt(setMinutes) % parseInt(60);
         setHours = parseInt(setMinutes) / parseInt(60);
     }
     audio.pause()
     grabStop.style.display = "none"
     grabSnooze.style.display = "none"
 })

 // code for reset alarm
 let grab_del = document.querySelector(".del")
 grab_del.addEventListener("click", resetAlarm)
 function resetAlarm() {
     document.querySelector("#hrs1").value = ""
     document.querySelector("#min1").value = ""
     document.querySelector("#day1").value = ""
     setHours = -1
     setMinutes = -1
     setDates = -1
 }
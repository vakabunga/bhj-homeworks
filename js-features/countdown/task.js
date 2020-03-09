let timer = setInterval(counter, 1000);
const startTime = [0, 0, 19];
const startValue = document.getElementById('timer');
let zeroForHour, zeroForMin, zeroForSec;
function counter() {
    startTime[0] < 10 ? zeroForHour = 0 : zeroForHour = '';
    startTime[1] < 10 ? zeroForMin = 0 : zeroForMin = '';
    startTime[2] < 10 ? zeroForSec = 0 : zeroForSec = '';    
    startValue.textContent = `${zeroForHour}${startTime[0]}:${zeroForMin}${startTime[1]}:${zeroForSec}${startTime[2]}`;
    startTime[2] -= 1;
    if (startTime[2] < 0) {
        if (startTime[1] === 0) {
            if (startTime[0] === 0) {
                alert('Вы победили в конкурсе!');
                clearInterval(timer);
                location.assign("https://drive.google.com/u/0/uc?id=1hTqQE3P6p2mQX04AojU1ZElIT7n8rR_C&export=download");
            }
            else {
                startTime[0] -= 1;
                startTime[1] = 59;
                startTime[2] = 59;
            }
        }
        else {
            startTime[1] -= 1;
            startTime[2] = 59;
        }
    }
}
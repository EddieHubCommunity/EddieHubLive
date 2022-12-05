//helper that returns date formatted to time only 24 hour format
export default function formatTime(datetime){
   let date =  new Date(Date.parse(datetime));
    return date.toLocaleTimeString('en-US', {hour12: false});
}
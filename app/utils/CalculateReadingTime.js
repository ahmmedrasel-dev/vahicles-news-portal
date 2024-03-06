const readingTime = (text) =>{
   const wpm = 155;
   const words = text?.trim().split(/\s+/).length;
   const time = Math.ceil(words / wpm);
   return time;
 }

 export {readingTime};
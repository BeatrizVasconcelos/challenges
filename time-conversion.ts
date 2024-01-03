function timeConversion(s: string): string {
    //[07 : 05 : 45PM]
    let time = s.split(':');
    
    if (s.includes('PM')) {
        if(time[0] != '12') {
            time[0] = (parseInt(time[0]) + 12).toString();
        }  
    } else if (time[0] == '12') {
        time[0] = '00';
    }
    
    let convertedTime = time.join(':');
    
    return convertedTime.slice(0, -2);
    // "19:05:45"

}
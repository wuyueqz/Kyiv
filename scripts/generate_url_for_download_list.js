var fs = require('fs');

/*
Sample Data
https://spotifycharts.com/regional/global/weekly/2018-04-13--2018-04-20/download
4.19: 2018-04-13--2018-04-20
4.12: 2018-04-06--2018-04-13
1.04: 2017-12-29--2018-01-05
12.28: 2017-12-22--2017-12-29
1.05: 2016-12-30--2017-01-06
*/



// Countries List

var countries = [
'global', 'us', 'gb', 'ad', 'ar', 'at', 'au', 'be', 
'bg', 'bo', 'br', 'ca', 'ch', 'cl', 'co', 'cr', 'cy', 
'cz', 'de', 'dk', 'do', 'ec', 'ee', 'es', 'fi', 'fr', 
'gr', 'gt', 'hk', 'hn', 'hu', 'id', 'ie', 'il', 'is', 
'it', 'jp', 'li', 'lu', 'lv', 'mc', 'mt', 'mx', 'my', 
'ni', 'nl', 'no', 'nz', 'pa', 'pe', 'ph', 'pl', 'pt', 
'py', 'ro', 'se', 'sg', 'sk', 'sv', 'th', 'tr', 'tw', 'uy', 'vn'
];

// Get yyyy-dd-mm of last Friday
var today = new Date();
function getLastFriday (today) {

    // Get the day today
    var day = today.getDay();
    var date = today.getDate();
    // Get # of days between today and last Friday
    var diff = 0;
    if(day <= 5) {
        diff = day + 7 - 5;
    }else{
        diff = day - 5
    }
        // Or Ternary:    diff = (day<=5) ? (7-5+day) : (day-5)
    
    // Get the date of last Friday by yyyy-dd-mm
    var LatestFriday = new Date(today - diff*8.64e+7);
    LatestFriday = new Date(LatestFriday);
    

    return LatestFriday

}

// Get a list of Fridays
var Fridays = [];

function getFridaysList(LatestFriday){
    var startDate = today;
    startDate.setDate(23);
    startDate.setMonth(11);
    startDate.setFullYear(2016);

    var endDate = LatestFriday;
    // to ms? new Date ('2016-12-23')???
    var nWeeks = Math.floor((endDate - startDate)*1.65344e-9); 


    var currFriday;
    for(i=0; i < nWeeks+2; i++){
        currFriday = endDate.getTime() - i*7*24*60*60*1000;
        currFriday = new Date(currFriday);
        Fridays.unshift(convertDateToFormat(currFriday));
    }
    //console.log(Fridays);
    return Fridays
}

function convertDateToFormat(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10){dd='0'+dd;} 
    if(mm<10){mm='0'+mm;} 
    var dateString = yyyy + '-' + mm + '-' + dd;
    return dateString;
}


//=================


// Fetch all urls into urls.txt

var fridaysList = getFridaysList(getLastFriday(new Date()));

var appendedText = '';
var url = '';

for(i=0; i<countries.length; i++){
    for(j=1; j<fridaysList.length; j++){
            url = 'https://spotifycharts.com/regional/' + countries[i] + '/weekly/' 
            + fridaysList[j-1] + '--' + fridaysList[j] + '/download';
            appendedText += url + '\n';
    }
    
}

fs.writeFileSync('urls.txt', appendedText);


//=====================


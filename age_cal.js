const months=[31,28,31,30,31,30,31,31,30,31,30,31,30,31];

function calage(){
    var today=new Date();
    var birthdate= new Date(document.getElementById("date").value);

    var bitrthDetails={
        date:birthdate.getDate(),
        month:birthdate.getMonth()+1,
        year:birthdate.getFullYear()
    };

    var curYear=today.getFullYear();
    var curmonth=today.getMonth()+1;
    var curDate=today.getDate();

    leapchecker(curYear);

    if(curYear<bitrthDetails.year|| (curYear==bitrthDetails.year && curmonth<bitrthDetails.month) || (curDate<bitrthDetails.date && curmonth==bitrthDetails.month && curYear==bitrthDetails.year)){
        alert("Not Born Yet");
        Displayresult("-","-","-");
        return;
    }

    var birthYear=curYear-bitrthDetails.year;
    
    if(curmonth>=bitrthDetails.month)
    {
        var birthmonth=curmonth-bitrthDetails.month;
    }
    else{
        birthYear--;
        birthmonth= 12+curmonth-bitrthDetails.month;
    }

    if(curDate>=bitrthDetails.date){
        var birthdate= curDate-bitrthDetails.date;
    }
    else{
        birthmonth--;
        var days= months[curmonth-2];
        birthdate=days+curDate- bitrthDetails.date;

        if(birthmonth<0)
        {
            birthmonth=11;
            birthYear--;
        }
    }
    Displayresult(birthYear,birthmonth,birthdate);
};
function Displayresult(bYear, bMonth, bDate)
{
    var text=document.getElementsByClassName("outputs");
    text.innerText="Your age is: ";
    document.getElementById("Days").innerText=bDate;
    document.getElementById("Months").textContent=bMonth;
    document.getElementById("years").textContent=bYear;
}

function leapchecker(y){
    if(y%4==0)
    {
        months[1]=29;
    }
    else {
        months[1]=28;
    }

}

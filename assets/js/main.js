
//==================წინა დავალება====================================

// var homework = [1,2,3,4,5,6,7,8,9,10]

// for(i = 0; i<homework.length; i++) {                  // task 1
//     document.write(homework[i]);
// }



// function display(x,mainMessage) {
//     var message =mainMessage(x);                     //task 2
//     document.write(message);
// }

// function price(amount){
//     if (amount < 50)
//     return " ძალიან იაფია";
//     else if (amount > 50)
//     return "ძალიან ძვირია";
//     else if (amount < 20 && amount > 50)
//     return "მისაღები ფასია";
// }
// display(34,price);




// var even = [1,3,9,14,21,34,41,53,69,71,81,45];      // task 3
// var result = even.filter ((n) => n%3 ==0)
// document.write(result)

//=======================================================================
var cinema = {
    name: "cavea",
    languages: ["georgia","english","german"],
    information: [
        {movieName: "ᲢᲝᲞ ᲒᲐᲜᲘ: ᲛᲐᲕᲔᲠᲘᲙᲘ", director: "ჯოზეფ კოსინსკი", IMBD: "IMBD 8.1"},
        {movieName: "ᲢᲝᲞ ᲒᲐᲜᲘ: ᲛᲐᲕᲔᲠᲘᲙᲘ", director: "ჯოზეფ კოსინსკი", IMBD: "IMBD 8.1"},
        {movieName: "ᲢᲝᲞ ᲒᲐᲜᲘ: ᲛᲐᲕᲔᲠᲘᲙᲘ", director: "ჯოზეფ კოსინსკი", IMBD: "IMBD 8.1"}   
    ]
}
document.getElementById("title").innerHTML=cinema.name;
document.getElementById("languages").innerHTML=cinema.languages;
document.getElementById("movieInfo").innerHTML = "Name:"+ cinema.information[0].movieName+"</br>"+"directed By:"+cinema.information[0].director+"</br>"+"IMBD:"+ cinema.information[0].IMBD;
document.getElementById("movieInfo1").innerHTML = "Name:"+ cinema.information[1].movieName+"</br>"+"directed By:"+cinema.information[1].director+"</br>"+"IMBD:"+ cinema.information[1].IMBD;
document.getElementById("movieInfo2").innerHTML = "Name:"+ cinema.information[2].movieName+"</br>"+"directed By:"+cinema.information[2].director+"</br>"+"IMBD:"+ cinema.information[2].IMBD;
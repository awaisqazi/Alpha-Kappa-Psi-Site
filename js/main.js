var foundingValues = [
                        {name: "Mansha Kohli", position: "President", imgURL: "assets/jpg/headshots/head-41.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Tapesh Nagarwal", position: "VP Administration", imgURL: "assets/jpg/headshots/head-30.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "John Shashaty", position: "VP Membership", imgURL: "assets/jpg/headshots/head-03.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Sheryl Jacob", position: "VP Finance", imgURL: "assets/jpg/headshots/head-42.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Aidan McGourty", position: "VP Alumni Relations", imgURL: "assets/jpg/headshots/head-37.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Manogna Guduru", position: "Master of Rituals", imgURL: "assets/jpg/headshots/head-31.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Riya Kurian", position: "Secretary", imgURL: "assets/jpg/headshots/head-24.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Antonio Mistretta", position: "Historian", imgURL: "assets/jpg/headshots/head-44.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Joshua Wolfe", position: "Parliamentarian", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Christina De Ramos", position: "PR Committee Chair", imgURL: "assets/jpg/headshots/head-06.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Akash Sewani", position: "Service Committee Co-Chair", imgURL: "assets/jpg/headshots/head-22.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Annaleigh Potterton", position: "Service Committee Co-Chair", imgURL: "assets/jpg/headshots/head-17.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Bindi Shah", position: "Professional Committee Chair", imgURL: "assets/jpg/headshots/head-23.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Rushabh Mehta", position: "Finance Committee Chair", imgURL: "assets/jpg/headshots/head-02.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Vinaya Thadhani", position: "Alumni Committee Chair", imgURL: "assets/jpg/headshots/head-36.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Adit Patel", position: "PR Committee", imgURL: "assets/jpg/headshots/head-15.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Aris Rafael", position: "Finance Committee", imgURL: "assets/jpg/headshots/head-10.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Arman Moussavi", position: "PR Committee", imgURL: "assets/jpg/headshots/head-05.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Astha Sharma", position: "Membership Committee", imgURL: "assets/jpg/headshots/head-20.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Christopher Yap", position: "PR Committee", imgURL: "assets/jpg/headshots/head-29.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Dhanush Sureshbabu", position: "Service Committee", imgURL: "assets/jpg/headshots/head-07.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Dhwanil Kadakia", position: "PR Committee", imgURL: "assets/jpg/headshots/head-09.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Dron Patel", position: "Professional Committee", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Dylan Kumenap", position: "PR Committee", imgURL: "assets/jpg/headshots/head-38.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Greg Buys", position: "Membership Committee", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "J'Ream Lewis", position: "Alumni Committee", imgURL: "assets/jpg/headshots/head-16.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Jacob Fattakhov", position: "PR Committee", imgURL: "assets/jpg/headshots/head-08.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Jacob Ponulak", position: "Compliance Committee", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Jaideep Patel", position: "Service Committee", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Jermayne Noseal", position: "Compliance Committee", imgURL: "assets/jpg/headshots/head-01.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Jessamine Mombay", position: "Service Committee", imgURL: "assets/jpg/headshots/head-27.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Kristen King", position: "Compliance Committee", imgURL: "assets/jpg/headshots/head-04.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Malay Patel", position: "Alumni Committee", imgURL: "assets/jpg/headshots/head-43.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Manoj George", position: "Compliance Committee", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Mansi Sheth", position: "Compliance Committee", imgURL: "assets/jpg/headshots/head-40.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Michael Vaks", position: "PR Committee", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Nithin  Dronavalli", position: "Membership Committee", imgURL: "assets/jpg/headshots/head-11.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Palash Jain", position: "Professional Committee", imgURL: "assets/jpg/headshots/head-26.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Parth Vachani", position: "PR Committee", imgURL: "assets/jpg/headshots/head-25.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Ross Jason Paayas-Pecson", position: "PR Committee", imgURL: "assets/jpg/headshots/head-34.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Sanil Shah", position: "Professional Committee", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Shail Shah", position: "Service Committee", imgURL: "assets/jpg/headshots/head-21.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Shivam Kanbur", position: "PR Committee", imgURL: "assets/jpg/headshots/head-28.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Shravanthi Budhi", position: "Membership Committee", imgURL: "assets/jpg/headshots/head-19.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Steve Diaz", position: "Membership Committee", imgURL: "assets/jpg/headshots/head-32.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Suzanne Hlinka", position: "Membership Committee", imgURL: "assets/jpg/headshots/head-13.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Vaibhav Pothireddy", position: "Finance Committee", imgURL: "assets/jpg/headshots/head-14.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Vaibhava Pendyala", position: "PR Committee", imgURL: "assets/jpg/headshots/head-12.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Vasu Patel", position: "Service Committee", imgURL: "assets/jpg/headshots/head-33.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "William McCann", position: "Compliance Committee", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Wissam Esmail", position: "Compliance Committee", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"},
                        {name: "Zohaeb Atiq", position: "Finance Committee", imgURL: "assets/jpg/empty.jpg", major: "MAJOR", minor: "MINOR"}
                  ]

var alphaValues = [

                  ]

function changeIMGs(array) {
  newContent = "<div class='col-md-12'><h1></h1><hr /></div>";
  for (var i = 0; i < array.length; i++) {
    member = array[i];
    //var newMemberHTML = "<div class='col-md-3 headshot'><img src='"+member.imgURL+"' /><h2>"+member.name+"</h2><h2>"+member.position+"</h2></div>";
    var newMemberHTML = "<div class='col-md-3 headshot shadow1'><img src='"+member.imgURL+"' class='image'><div class='overlay'><div class='text'><p>'"+member.position+"'</p><p>'"+member.major+"'</p><p>'"+member.minor+"'</p></div></div><h2>"+member.name+"</h2></div>";
    console.log(newMemberHTML)
    var newContent = newContent.concat(newMemberHTML);
  }
  document.getElementById("headshots").innerHTML = newContent;
}

$('#alpha').click(function(){
    document.getElementById("brother-class").innerHTML = "Spring 2017";
    changeIMGs(alphaValues);
});
$('#founding').click(function(){
    document.getElementById("brother-class").innerHTML = "Spring 2017";
    changeIMGs(foundingValues);
});

//changeIMGs(foundingValues);

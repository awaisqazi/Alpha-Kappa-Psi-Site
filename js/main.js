var colonyValues = [
                    {name: "Awais Qazi", position: "Founding President", imgURL: "assets/jpg/headshots/head-18.jpg"},
                    {name: "Nikil Ghandi", position: "Founding Brother", imgURL: "assets/jpg/headshots/head-35.jpg"},
                    {name: "Reza Wang-Lofti", position: "Founding Brother", imgURL: "assets/jpg/headshots/head-39.jpg"}
                  ]

var alphaValues = [
                    {name: "Adit Patel", position: "Senior", imgURL: "assets/jpg/headshots/head-15.jpg"},
                    {name: "Aidan McGourty", position: "Senior", imgURL: "assets/jpg/headshots/head-37.jpg"},
                    {name: "Akash Sewani", position: "Senior", imgURL: "assets/jpg/headshots/head-22.jpg"},
                    {name: "Annaleigh Potterton", position: "Senior", imgURL: "assets/jpg/headshots/head-17.jpg"},
                    {name: "Antonio Mistretta", position: "Senior", imgURL: "assets/jpg/headshots/head-44.jpg"},
                    {name: "Aris Rafael", position: "Senior", imgURL: "assets/jpg/headshots/head-10.jpg"},
                    {name: "Arman Moussavi", position: "Senior", imgURL: "assets/jpg/headshots/head-05.jpg"},
                    {name: "Astha Sharma", position: "Senior", imgURL: "assets/jpg/headshots/head-20.jpg"},
                    {name: "Bindi Shah", position: "Senior", imgURL: "assets/jpg/headshots/head-23.jpg"},
                    {name: "Christina De Ramos", position: "Senior", imgURL: "assets/jpg/headshots/head-06.jpg"},
                    {name: "Christopher Yap", position: "Senior", imgURL: "assets/jpg/headshots/head-29.jpg"},
                    {name: "Dhanush Sureshbabu", position: "Senior", imgURL: "assets/jpg/headshots/head-07.jpg"},
                    {name: "Dhwanil Kadakia", position: "Senior", imgURL: "assets/jpg/headshots/head-09.jpg"},
                    {name: "Dron Patel", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Dylan Kumenap", position: "Senior", imgURL: "assets/jpg/headshots/head-38.jpg"},
                    {name: "Greg Buys", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "J'Ream Lewis", position: "Senior", imgURL: "assets/jpg/headshots/head-16.jpg"},
                    {name: "Jacob Fattakhov", position: "Senior", imgURL: "assets/jpg/headshots/head-08.jpg"},
                    {name: "Jacob Ponulak", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Jaideep Patel", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Jermayne Noseal", position: "Senior", imgURL: "assets/jpg/headshots/head-01.jpg"},
                    {name: "Jessamine Mombay", position: "Senior", imgURL: "assets/jpg/headshots/head-27.jpg"},
                    {name: "John Shashaty", position: "Senior", imgURL: "assets/jpg/headshots/head-03.jpg"},
                    {name: "Joshua Wolfe", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Kristen King", position: "Senior", imgURL: "assets/jpg/headshots/head-04.jpg"},
                    {name: "Malay Patel", position: "Senior", imgURL: "assets/jpg/headshots/head-43.jpg"},
                    {name: "Manogna Guduru", position: "Senior", imgURL: "assets/jpg/headshots/head-31.jpg"},
                    {name: "Manoj George", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Mansha Kohli", position: "Senior", imgURL: "assets/jpg/headshots/head-41.jpg"},
                    {name: "Mansi Sheth", position: "Senior", imgURL: "assets/jpg/headshots/head-40.jpg"},
                    {name: "Michael Vaks", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Michael Armstrong Newson", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Nithin  Dronavalli", position: "Senior", imgURL: "assets/jpg/headshots/head-11.jpg"},
                    {name: "Palash Jain", position: "Senior", imgURL: "assets/jpg/headshots/head-26.jpg"},
                    {name: "Parth Vachani", position: "Senior", imgURL: "assets/jpg/headshots/head-25.jpg"},
                    {name: "Riya Kurian", position: "Senior", imgURL: "assets/jpg/headshots/head-24.jpg"},
                    {name: "Ross Jason Paayas-Pecson", position: "Senior", imgURL: "assets/jpg/headshots/head-34.jpg"},
                    {name: "Rushabh Mehta", position: "Senior", imgURL: "assets/jpg/headshots/head-02.jpg"},
                    {name: "Sanil Shah", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Shail Shah", position: "Senior", imgURL: "assets/jpg/headshots/head-21.jpg"},
                    {name: "Sheryl Jacob", position: "Senior", imgURL: "assets/jpg/headshots/head-42.jpg"},
                    {name: "Shivam Kanbur", position: "Senior", imgURL: "assets/jpg/headshots/head-28.jpg"},
                    {name: "Shravanthi Budhi", position: "Senior", imgURL: "assets/jpg/headshots/head-19.jpg"},
                    {name: "Steve Diaz", position: "Senior", imgURL: "assets/jpg/headshots/head-32.jpg"},
                    {name: "Suzanne Hlinka", position: "Senior", imgURL: "assets/jpg/headshots/head-13.jpg"},
                    {name: "Tapesh Nagarwal", position: "Senior", imgURL: "assets/jpg/headshots/head-30.jpg"},
                    {name: "Vaibhav Pothireddy", position: "Senior", imgURL: "assets/jpg/headshots/head-14.jpg"},
                    {name: "Vaibhava Pendyala", position: "Senior", imgURL: "assets/jpg/headshots/head-12.jpg"},
                    {name: "Vasu Patel", position: "Senior", imgURL: "assets/jpg/headshots/head-33.jpg"},
                    {name: "Vinaya Thadhani", position: "Senior", imgURL: "assets/jpg/headshots/head-36.jpg"},
                    {name: "William McCann", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Wissam Esmail", position: "Senior", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Zohaeb Atiq", position: "Senior", imgURL: "assets/jpg/empty.jpg"}
                  ]

function changeIMGs(array) {
  newContent = "<div class='col-md-12 header'><h1>Meet Our Brothers</h1><hr /></div>";
  for (var i = 0; i < array.length; i++) {
    member = array[i];
    var newMemberHTML = "<div class='col-md-3 headshot'><img src='"+member.imgURL+"' /><h2>"+member.name+"</h2><h2>"+member.position+"</h2></div>";
    console.log(newMemberHTML)
    var newContent = newContent.concat(newMemberHTML);

  }
  document.getElementById("headshots").innerHTML = newContent;
}

$('#alpha').click(function(){
    document.getElementById("brother-class").innerHTML = "Spring 2017";
    changeIMGs(alphaValues);
});
$('#colony').click(function(){
    document.getElementById("brother-class").innerHTML = "Fall 2016";
    changeIMGs(colonyValues);
});

changeIMGs(alphaValues);

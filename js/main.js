var foundingValues = [
                    {name: "Awais Qazi", position: "Founding President", imgURL: "assets/jpg/headshots/head-18.jpg"},
                    {name: "Nikil Ghandi", position: "Founding Brother", imgURL: "assets/jpg/headshots/head-35.jpg"},
                    {name: "Reza Wang-Lofti", position: "Founding Brother", imgURL: "assets/jpg/headshots/head-39.jpg"},
                    {name: "Adit Patel", position: "", imgURL: "assets/jpg/headshots/head-15.jpg"},
                    {name: "Aidan McGourty", position: "", imgURL: "assets/jpg/headshots/head-37.jpg"},
                    {name: "Akash Sewani", position: "", imgURL: "assets/jpg/headshots/head-22.jpg"},
                    {name: "Annaleigh Potterton", position: "", imgURL: "assets/jpg/headshots/head-17.jpg"},
                    {name: "Antonio Mistretta", position: "", imgURL: "assets/jpg/headshots/head-44.jpg"},
                    {name: "Aris Rafael", position: "", imgURL: "assets/jpg/headshots/head-10.jpg"},
                    {name: "Arman Moussavi", position: "", imgURL: "assets/jpg/headshots/head-05.jpg"},
                    {name: "Astha Sharma", position: "", imgURL: "assets/jpg/headshots/head-20.jpg"},
                    {name: "Bindi Shah", position: "", imgURL: "assets/jpg/headshots/head-23.jpg"},
                    {name: "Christina De Ramos", position: "", imgURL: "assets/jpg/headshots/head-06.jpg"},
                    {name: "Christopher Yap", position: "", imgURL: "assets/jpg/headshots/head-29.jpg"},
                    {name: "Dhanush Sureshbabu", position: "", imgURL: "assets/jpg/headshots/head-07.jpg"},
                    {name: "Dhwanil Kadakia", position: "", imgURL: "assets/jpg/headshots/head-09.jpg"},
                    {name: "Dron Patel", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Dylan Kumenap", position: "", imgURL: "assets/jpg/headshots/head-38.jpg"},
                    {name: "Greg Buys", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "J'Ream Lewis", position: "", imgURL: "assets/jpg/headshots/head-16.jpg"},
                    {name: "Jacob Fattakhov", position: "", imgURL: "assets/jpg/headshots/head-08.jpg"},
                    {name: "Jacob Ponulak", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Jaideep Patel", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Jermayne Noseal", position: "", imgURL: "assets/jpg/headshots/head-01.jpg"},
                    {name: "Jessamine Mombay", position: "", imgURL: "assets/jpg/headshots/head-27.jpg"},
                    {name: "John Shashaty", position: "", imgURL: "assets/jpg/headshots/head-03.jpg"},
                    {name: "Joshua Wolfe", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Kristen King", position: "", imgURL: "assets/jpg/headshots/head-04.jpg"},
                    {name: "Malay Patel", position: "", imgURL: "assets/jpg/headshots/head-43.jpg"},
                    {name: "Manogna Guduru", position: "", imgURL: "assets/jpg/headshots/head-31.jpg"},
                    {name: "Manoj George", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Mansha Kohli", position: "", imgURL: "assets/jpg/headshots/head-41.jpg"},
                    {name: "Mansi Sheth", position: "", imgURL: "assets/jpg/headshots/head-40.jpg"},
                    {name: "Michael Vaks", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Michael Armstrong Newson", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Nithin  Dronavalli", position: "", imgURL: "assets/jpg/headshots/head-11.jpg"},
                    {name: "Palash Jain", position: "", imgURL: "assets/jpg/headshots/head-26.jpg"},
                    {name: "Parth Vachani", position: "", imgURL: "assets/jpg/headshots/head-25.jpg"},
                    {name: "Riya Kurian", position: "", imgURL: "assets/jpg/headshots/head-24.jpg"},
                    {name: "Ross Jason Paayas-Pecson", position: "", imgURL: "assets/jpg/headshots/head-34.jpg"},
                    {name: "Rushabh Mehta", position: "", imgURL: "assets/jpg/headshots/head-02.jpg"},
                    {name: "Sanil Shah", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Shail Shah", position: "", imgURL: "assets/jpg/headshots/head-21.jpg"},
                    {name: "Sheryl Jacob", position: "", imgURL: "assets/jpg/headshots/head-42.jpg"},
                    {name: "Shivam Kanbur", position: "", imgURL: "assets/jpg/headshots/head-28.jpg"},
                    {name: "Shravanthi Budhi", position: "", imgURL: "assets/jpg/headshots/head-19.jpg"},
                    {name: "Steve Diaz", position: "", imgURL: "assets/jpg/headshots/head-32.jpg"},
                    {name: "Suzanne Hlinka", position: "", imgURL: "assets/jpg/headshots/head-13.jpg"},
                    {name: "Tapesh Nagarwal", position: "", imgURL: "assets/jpg/headshots/head-30.jpg"},
                    {name: "Vaibhav Pothireddy", position: "", imgURL: "assets/jpg/headshots/head-14.jpg"},
                    {name: "Vaibhava Pendyala", position: "", imgURL: "assets/jpg/headshots/head-12.jpg"},
                    {name: "Vasu Patel", position: "", imgURL: "assets/jpg/headshots/head-33.jpg"},
                    {name: "Vinaya Thadhani", position: "", imgURL: "assets/jpg/headshots/head-36.jpg"},
                    {name: "William McCann", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Wissam Esmail", position: "", imgURL: "assets/jpg/empty.jpg"},
                    {name: "Zohaeb Atiq", position: "", imgURL: "assets/jpg/empty.jpg"}
                  ]

var alphaValues = [

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
$('#founding').click(function(){
    document.getElementById("brother-class").innerHTML = "Spring 2017";
    changeIMGs(foundingValues);
});

changeIMGs(foundingValues);

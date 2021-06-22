


// function joker() {
//   fetch("https:
//     .then(function (response) {
//       let data = response.json();
//       if (response.status != 200) {
//         alert("This isn't a joke, the API must be down.")
//         return;
//       } else {
//         return data;
//       }

//     })
//     .then(function (data) {
//       console.log(data)
//       var joke = data.joke;
//       alert(joke)
//     })
        

$('#speaking').click(function () {
  $("#speak").toggleClass("hide");
});
$('#learning').click(function () {
  $("#learn").toggleClass("hide");
});


function toggleColorMode(e) {

  if (e.currentTarget.classList.contains("light--hidden")) {

    document.documentElement.setAttribute("color-mode", "light");


    localStorage.setItem("color-mode", "light");
    return;
  }


  document.documentElement.setAttribute("color-mode", "dark");


  localStorage.setItem("color-mode", "dark");
};


const toggleColorBtns = document.querySelectorAll(".color-mode__btn");


toggleColorBtns.forEach(btn => {
  btn.addEventListener("click", toggleColorMode);
});
// $('#fortune').on('click', joker)
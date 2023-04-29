// window.addEventListener('scroll', function(){
//     let topnav = this.document.querySelector('topnav');
//     topnav.classList.add('scrolled-active',this.window.scrollY > 40);
// })

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 40) {
//           $(".topnav").css("background" , "white");
//         }
  
//         else{
//             $(".topnav").css("background" , "#transparent");  	
//         }
//     })
//   })

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//     document.getElementById("topnav").style.background = "white";
//   } else {
//     document.getElementById("topnav").style.background = "transparent";
//   }
// }
const navbar = document.querySelector('.topnav');
window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled-active');
    } else {
        navbar.classList.remove('scrolled-active');
    }
};


// var arr = [
//     {
//      ‘lang’ : ‘javascript,
//      ‘framework’ : ‘reactjs’,
//     }
//     ];
//     const lang = arr[lang];
//     console.log(lang);

    
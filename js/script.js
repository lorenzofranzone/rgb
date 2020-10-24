document.addEventListener("DOMContentLoaded", function() {
   
   // ––––––––––––––––––––––––––––––––––––––––––––––––––
   // B L O G
   // ––––––––––––––––––––––––––––––––––––––––––––––––––

   let posts = [
      {
         img: "img/blog1.png",
         date: "18.05.2020",
         text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
         link: "leggi"
      },
      {
         img: "img/blog2.png",
         date: "18.05.2020",
         text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
         link: "leggi"
      },
      {
         img: "img/blog3.png",
         date: "18.05.2020",
         text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
         link: "leggi"
      }
   ];
   
   for(let i = 0; i<posts.length; i++){
      let post = posts[i];
      
      let source = document.getElementById("template-blog").innerHTML;
      let template = Handlebars.compile(source);
      
      let html = template(post);
      let blog = document.querySelector(".blog");
      let blogContainer = blog.querySelector(".container-full");
      blogContainer.innerHTML=blogContainer.innerHTML+html;
   }

});
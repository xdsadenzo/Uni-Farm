// fetch("ourser.json")
// .then(Response=>Response.json())
// .then(data=>{
//     let col="";
//     console.log(data);
//     for(let key in data){
//         // console.log(data[key][0].description)
//         for(let objectskey of data[key]){
//             // console.log(objectskey.description)
//             col+=`
//             <div class="col-xs-12 col-sm-6">
//             <!-- blog of the page -->
//             <div class="blog">
//             <div class="img-holder">
//             <img src="${objesctskey.image}" alt="image description" class="img-responsive">
//             <div class="over">
//             <a href="blog-detail.html"><span></span></a>
//             </div>
//             </div>
//             <div class"txt-holder">
//             <h3 class="text-uppercase"><a href="blog-detail.html">${objectskey.des}</a></h3>
//             <p>${objectskey.des1}</p>
//             <a href="blog-detail.html" class="read-more text-uppercase">Read More</a>
//             </div>
//             </div>
//             </div>`
//         }
//     }
//     document.querySelector("#serh1").innerHTML=col
// })
// .catch(error => console.error("Error:", error)); // add error handling
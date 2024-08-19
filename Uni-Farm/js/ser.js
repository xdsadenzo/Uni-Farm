
let cd = $(".rser1");
let d = "";

$.ajax({
    url: "s.json",
    method: "get",
    success: function (data) {
          //   service start

    $.each(data.oservice, function (abc, value) {
        //    console.log(value.name)
  
  
        d += `  <div class="col-md-3 mt-5">
      <div class="card">
          <img class="card-img-top" src="`+ value.image + `" alt="">
          <div class="card-body">
              <h4 class="card-title">`+ value.name + `</h4>
              <p class="card-text">`+'Rs. '+ value.price + `</p>
              <button class="btn btn-info" data-toggle="modal" data-target="#modelId`+ value.id + `">detail</button>
              <div class="modal fade" id="modelId`+ value.id + `" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title">`+ value.name + `</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                  </button>
                          </div>
                          <div class="modal-body">
                             <div class="row">
                              <div class="col-md-6">
                                  <img class="card-img-top" src="`+ value.image + `">
                                  </div>
                              <div class="col-md-6">
                                  <p>`+ value.name + `</p>
                                  <p>`+ value.des + `</p>
                                  </div>
                              </div>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <input type="hidden" class="p_id" value="`+ value.id+`"> <input type="hidden" class="p_name" value="`+ value.name+`"> <input type="hidden" class="p_price" value="`+ value.price+`"> <input type="hidden" class="p_image" value="`+ value.image+`">
                              <button type="button" class="btn btn-primary addtooutdoor">Add to Cart</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`
  
  
  
  
      })
      cd.html(d);
       // Function to sort items by price (service categories) --start---
  function sortByPrice(items) {
  // console.log(items);
  return items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  
  }
  // Event handler for the sort button start
  $("#sort-by-price-oservice").click(function() {
  let sortedData = sortByPrice(data.oservice); //'data' contains  fetched JSON data
  let sortedHtml = ""; // String to store sorted HTML
  
  // Generate HTML for sorted items
  $.each(sortedData, function(abc, value) {
      sortedHtml += ( `<div class="col-md-3 mt-5">
      <div class="card">
          <img class="card-img-top" src="`+ value.image + `" alt="">
          <div class="card-body">
              <h4 class="card-title">`+ value.name + `</h4>
              <p class="card-text">`+'Rs. ' +value.price + `</p>
              <button class="btn btn-info" data-toggle="modal" data-target="#modelId`+ value.id + `">detail</button>
              <div class="modal fade" id="modelId`+ value.id + `" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title">`+ value.name + `</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                  </button>
                          </div>
                          <div class="modal-body">
                             <div class="row">
                              <div class="col-md-6">
                                  <img class="card-img-top" src="`+ value.image + `">
                                  </div>
                              <div class="col-md-6">
                                  <p>`+ value.name + `</p>
                                  <p>`+ value.des + `</p>
                                  </div>
                              </div>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <input type="hidden" class="p_id" value="`+ value.id+`"> <input type="hidden" class="p_name" value="`+ value.name+`"> <input type="hidden" class="p_price" value="`+ value.price+`"> <input type="hidden" class="p_image" value="`+ value.image+`">
                              <button type="button" class="btn btn-primary addtooutdoor">Add to Cart</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`
  
  
            ) 
  });
  
  // Display sorted HTML
  cd.html(sortedHtml);
  });
  //  end //
  function sortByName(items) {
  // console.log(items);
  return items.sort(function(a, b) {
      return a.name.localeCompare(b.name);
  });
  }
  // Event handler for the sort button start
  $("#sort-by-name-oservice").click(function() {
  let sortedData = sortByName(data.oservice); //'data' contains  fetched JSON data
  let sortedHtml = ""; // String to store sorted HTML
  
  // Generate HTML for sorted items
  $.each(sortedData, function(abc, value) {
      sortedHtml += ( `<div class="col-md-3 mt-5">
      <div class="card">
          <img class="card-img-top" src="`+ value.image + `" alt="">
          <div class="card-body">
              <h4 class="card-title">`+ value.name + `</h4>
              <p class="card-text">`+'Rs. ' +value.price + `</p>
              <button class="btn btn-info" data-toggle="modal" data-target="#modelId`+ value.id + `">detail</button>
              <div class="modal fade" id="modelId`+ value.id + `" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title">`+ value.name + `</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                  </button>
                          </div>
                          <div class="modal-body">
                             <div class="row">
                              <div class="col-md-6">
                                  <img class="card-img-top" src="`+ value.image + `">
                                  </div>
                              <div class="col-md-6">
                                  <p>`+ value.name + `</p>
                                  <p>`+ value.des + `</p>
                                  </div>
                              </div>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <input type="hidden" class="p_id" value="`+ value.id+`"> <input type="hidden" class="p_name" value="`+ value.name+`"> <input type="hidden" class="p_price" value="`+ value.price+`"> <input type="hidden" class="p_image" value="`+ value.image+`">
                              <button type="button" class="btn btn-primary addtooutdoor">Add to Cart</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`
  
  
            ) 
  });
  
  // Display sorted HTML
  cd.html(sortedHtml);
  });
  //  end //
  
      //   products localStorage
      let myJsonCartDataLed = JSON.parse(localStorage.getItem('myFinalJsonCartDataLocal')) || [];
      $(".addtooservice").click(function () {
        let product_id = $(this).siblings('.p_id').val();
        let product_name = $(this).siblings('.p_name').val();
        let product_image = $(this).siblings('.p_image').val();
        let product_age = $(this).siblings('.p_age').val();
  
        myJsonCartDataLed.push({ 'id': product_id, 'name': product_name, 'img': product_image, 'product_age': product_age });
        let myFinalJsonCartData = localStorage.setItem('myFinalJsonCartDataLocal', JSON.stringify(myJsonCartDataLed));
        alert('product  added successfully');
  
  
      })
    }
})
  // services end
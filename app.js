var clickBtn = document.querySelector('.click-btn');
var allItems = document.querySelector('#all-items');
var productname = document.querySelector('#productname');
var cat = document.querySelector('#cat');
var price = document.querySelector('#price');


function rowTemplate() {
    return `
        <div class="col-xl-9 my-product ml-5 my-3">
            <div class="row m-0 ml-5">
                <img src="icons/myitem.jpg" class="rounded-circle img-fluid item-pic">
                <div class="row m-0 mt-4">
                    <h4 class="ml-4 mr-5 mt-1">${productname.value}</h4>
                    <p class="mx-5 mt-2">${cat.value}</p>
                    <p class="mx-5 mt-2">${price.value} BDT</p>
                    <i class="fa fa-close ml-5 mt-3"></i>
                </div>
            </div>
        </div>
    `
}

clickBtn.addEventListener('click', function() {
    event.preventDefault();
    if(productname.value == '' || cat.value == '' ||price.value == '')
    {
        alert("Vhai sob data den!.");
    }
    else{
        $('#all-items').append(rowTemplate());
    }
    
})
function updateProductNumber(product,price, isIncreasing){
        const productNumber = document.getElementById(product+'-number');
        let productInput = productNumber.value;
        if(isIncreasing){
         productNumber.value = parseInt(productInput) + 1;
        }
     else if(productInput > 0){
        productNumber.value = parseInt(productInput) - 1;
     }

     // update total
     productInput = productNumber.value;
     const productTotal = document.getElementById(product+'-total');
     productTotal.innerText = price * productInput;

     // calculate Total
     calculateTotal();
    };
function getInputValue(product){
   const productInput = document.getElementById(product+'-number');
   const productNumber = parseInt(productInput.value);
   return productNumber;
}

   function calculateTotal(){
      const phoneTotal = getInputValue('phone') * 1219;
      const caseTotal = getInputValue('case') * 59;
      const subTotal = phoneTotal + caseTotal;
      const tax = subTotal / 10;
      const total = subTotal + tax;
   // update sub total
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;
   document.getElementById('total-price').innerText = total;

   }

// handle phone increse decrese events
document.getElementById('phone-plus').addEventListener('click', function(){
  updateProductNumber('phone',1219,true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
   updateProductNumber('phone',1219,false);
})



// handle case increse decrese events
document.getElementById('case-plus').addEventListener('click', function(){
   updateProductNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case',59,false);
    
});
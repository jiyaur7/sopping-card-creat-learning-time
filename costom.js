// document.getElementById('caseAdd').addEventListener('click', function () {
//     handelProductChange(true)
// })

// document.getElementById('caseMinus').addEventListener('click', function () {
//     handelProductChange(false)
// }) // oonclick use kore pura function ke kaj kora hoyeche

function handelProductChange(product, isIncrease) {
  const ProductInput = document.getElementById(product + "-count");
  const ProductCount = parseInt(ProductInput.value);

  // const caseNewCount = caseCountMinus - 1;
  let ProductNewCount = ProductCount;
  if (isIncrease == true && ProductCount < 50) {
    ProductNewCount = ProductCount + 1;
  }
  if (isIncrease == false && ProductCount > 0) {
    ProductNewCount = ProductCount - 1;
  }
  ProductInput.value = ProductNewCount;
  // const caseTotal = caseNewCount * 59;
  let productTotal = 0;
  if (product == "phone") {
    productTotal = ProductNewCount * 1299;
  }
  if (product == "case") {
    productTotal = ProductNewCount * 29;
  }
  document.getElementById(product + "-total").innerText = "$" + productTotal;
  calculatedTotal();
}

function calculatedTotal() {
  // const phoneInput = document.getElementById('phone-count')
  const phoneCount = getinputvalur("phone");

  const caseCount = getinputvalur("case");
  // const casseInpur = document.getElementById('case-count');
  // const caseCount = parseInt(casseInpur.value);
  const totalPrice = phoneCount * 1299 + caseCount * 29;
  document.getElementById("total-price").innerText = "$" + totalPrice;
  const taxAmount = Math.round(totalPrice * 0.05);
  document.getElementById("tax-amount").innerText = "$" + taxAmount;
  const grandTotal = totalPrice + taxAmount;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}
function getinputvalur(product) {
  const productInpur = document.getElementById(product + "-count");
  const productCount = parseInt(productInpur.value);
  return productCount;
}

// akta function a niye cole gechi

// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);

//     let NewphoneCount = phoneCount;
//     if (isIncrease == true) {
//         NewphoneCount = phoneCount + 1

//     }
//     if (isIncrease == false && NewphoneCount > 0) {
//         NewphoneCount = phoneCount - 1

//     }
//     phoneInput.value = NewphoneCount;
//     const phoneTotal = NewphoneCount * 1219;
//     document.getElementById('phone-total').innerText = "$" + phoneTotal;
// }

// function handelProductChange(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     // const caseNewCount = caseCountMinus - 1;
//     let caseNewCount = caseCount;
//     if (isIncrease == true && caseCount < 50) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$" + caseTotal;
// }

/// choto choto kore kora ache  pore function a niye asa hoyeche

// document.getElementById('caseAdd').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;

//     caseInput.value = caseNewCount;

//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$" + caseTotal;
// })

// document.getElementById('caseMinus').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-count');
//     const caseCountMinus = parseInt(caseInput.value);
//     const caseNewCount = caseCountMinus - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$" + caseTotal;
// })

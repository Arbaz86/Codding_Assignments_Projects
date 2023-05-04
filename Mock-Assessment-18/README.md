# WEB -E-Commerce with LS

## Submission Instructions [Please note]

## Maximum Marks - 17

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Student is able to loop through the data and append in the dom - 2 marks.
 ✅ Click on add to cart of 2 Products  - 2 marks.
 ✅ Go To cart page and check if able to show on dom  - 2 marks.
 ✅ Check the total Price part  - 1 marks.
 ✅ Check the quantity part(With icreasing & decreasing)  - 3 marks.
 ✅ Check the total price after quantity increase  - 1 marks.
 ✅ Check Wrong Cupon code  - 1 marks.
 ✅ Check Correct Cupon code  - 1 marks.
 ✅ Check the Payment Page with empty input field  - 1 marks.
 ✅ Check the Payment Page with correct details - 1 marks.
 ✅ Check OTP - 1 marks.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html(Home Page)
- cart.html(Cart Page)
- payment.html(Payment Page)
- otp.html(OTP Page)
- Please Ignore all the other files except for the above-mentioned files.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- In this application, we have 4 different pages:-
  1. index.html(Home Page)
  2. cart.html(Cart Page)
  3. payment.html(Payment Page)
  4. otp.html(OTP Page)

#### index.html(Home Page):-

- In the home page we have a script there is a variable with name `productData`(Array of Objects).
- Loop over the data and create some product cards. Append these cards inside the div with id:- `product-container`.
- Use Grid to make 4 cards per row.
- Each card should be a `div` will all the detailsed append to it .
- Each card div should have a button with text `Add To Cart`.
- When clicked on the button add the product to a localstorage with key `cart`.

#### cart.html(Cart Page):-

- Now loop over the localstorage data and show them in smaller cards inside and div with id:- `cart-container`.
- Now each of the cards also have a span tag where you can see the quantity of the product.
- there are also two buttons and using them you can increment/decrement the quantity.
- Please follow this structure for the cards:-

```
<div>
 <h3>name</h3>
 <p>Price</p>
 <p>Strikedoffprice</p>
 <button>+</button> -> increment button
 <span>quantity</span>
<button>-</button> -> decrement button
</div>
```

- In the template we also have a span tag with id:- `cart-total`.
- Here you have to show the total value of the cart.
- Make sure when ever the quantity gets modified the total price is updated.
- In this page we also have a input tag with id:- `cupon-filled` and a button tag with an id:- `cupon-active`.
- When clicked on the button if the input field's value is `masai30` then decrease the quantity by 30%.

```
Hint:- total - Math.floor(total*0.3)
```

- Multiple times submitting should not decrease the amount.

#### payment.html(Payment Page):-

- Here we have a form which has the given fields:-

  1.  Name -> input:text
  2.  Card No -> input:number
  3.  CVV -> input:number

- If any of the fields are empty and the user tries to submit the form show an alert with a message:- `Any of the Given fields are empty`.
- If none of the fields are empty redirect the user to `otp.html`.

```
window.location.href = "otp.html"
```

#### otp.html(OTP Page):-

- Here you have a input:number and a button.
- Clicked on the button if the input value is 1234 show an alert with message:- `Payment Successful`.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time

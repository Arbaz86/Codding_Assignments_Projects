import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it(`Student is able to loop through the data and append in the dom`, () => {
        cy.visit(url);
        cy.get("#product-container")
          .children()
          .should("have.length", 36)
          .then(() => {
            acc_score += 1;
          });
        cy.get("#product-container")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 1;
          });
      }); // 2

      it("Click on add to cart of 2 Products", () => {
        cy.get("#product-container div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("cart")).length).to.eq(1);
            acc_score += 1;
          }); //1
        cy.get("#product-container div")
          .eq(2)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("cart")).length).to.eq(2);
            acc_score += 1;
          });
      }); //2

      it(`Go To cart page and check if able to show on dom`, () => {
        cy.get(".nav a").eq(1).click();
        cy.get("#cart-container")
          .children()
          .should("have.length", 2)
          .then(() => {
            acc_score += 2;
          });
      }); // 2

      it(`Check the total Price part`, () => {
        cy.get("#cart-total")
          .contains(2115)
          .then(() => {
            acc_score += 1;
          });
      }); // 1
      it(`Check the quantity part`, () => {
        cy.get("#cart-container span")
          .contains("1")
          .then(() => {
            acc_score += 1;
          });

        cy.get("#cart-container")
          .children()
          .eq(0)
          .contains("button", "+")
          .click();
        cy.get("#cart-container")
          .children()
          .eq(0)
          .contains("button", "+")
          .click();
        cy.get("#cart-container span")
          .eq(0)
          .contains(3)
          .then(() => {
            acc_score += 1;
          });
        cy.get("#cart-container")
          .children()
          .eq(0)
          .contains("button", "-")
          .click();
        cy.get("#cart-container span")
          .eq(0)
          .contains(2)
          .then(() => {
            acc_score += 1;
          });
      }); //3

      it(`Check the total price after quantity increase`, () => {
        cy.get("#cart-total")
          .contains(3285)
          .then(() => {
            acc_score += 1;
          });
      }); // 1

      it(`Check Wrong Cupon code`, () => {
        cy.get("#cupon-filled").clear().type("mas");
        cy.get("#cupon-active").click();
        cy.get("#cart-total")
          .contains(3285)
          .then(() => {
            acc_score += 1;
          });
      }); // 1
      it(`Check Correct Cupon code`, () => {
        cy.get("#cupon-filled").clear().type("masai30");
        cy.get("#cupon-active").click();
        cy.get("#cart-total")
          .contains(3285 - Math.floor(3285 * 0.3))
          .then(() => {
            acc_score += 1;
          });
      });// 1

      it(`Check the Payment Page with empty filed`, () =>{
        cy.get(".nav a").eq(2).click();
        // cy.get("form #name").clear().type("s");
        cy.get("form #cardNo").clear().type(9999);
        cy.get("form #cardCvv").clear().type(444);
        cy.get("form").submit();
        cy.on("window:alert",(str) =>{
          expect(str).to.eq("Any of the Given fields are empty");
          acc_score+=1
        })
      })//1 
      it(`Check the Payment Page with correct details`, () =>{
        cy.visit(url);
        cy.get(".nav a").eq(2).click();
        cy.get("form #name").clear().type("s");
        cy.get("form #cardNo").clear().type(9999);
        cy.get("form #cardCvv").clear().type(444);
        cy.get("form").submit();
        cy.url().should("include","otp.html").then(() =>{
          acc_score += 1
        })
      })// 1

      it(`Check OTP`, () =>{
        cy.get("#otp").clear().type(1234);
        cy.get("#submit").click();
        cy.on("window:alert",(str) =>{
          expect(str).to.eq("Payment Successful");
          acc_score+=1
        })
      })//1 
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});

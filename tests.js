/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Juan Mejia
  
  FE  Week 06 - Coding Project
*/


const expect = chai.expect
const assert = chai.assert


/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from week6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/



  /*--------------------------NEW TESTS BELOW-------------------------------*/
// Unit test using Mocha and Chai

describe('Week 06 - Coding Project Card Game', () =>  {
  describe('Declaring the Class Player  ',  () => {

    class Player {
      constructor(name) {
        this.name = name;
        
      }
    
    }

    it('#Should show the function of adding a player and giving each player a name', () => {

  const playerA = new Player('Player A');
  const playerB = new Player('Player B');



    })


    
  })

})


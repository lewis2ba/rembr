var Memory = require("../public/js/models/memory");

describe ("A memory", function(){
// DRY code changes
  var wedding;
  beforeEach(function(){
    wedding = new Memory("Kris and Jen's Wedding", "10/18/08", "Jefferson Memorial", "It was fun.");
  });

// Tests
  it("should have a title", function (){
    expect(wedding.title).toBeDefined();
  });
  it("should have a date of the memory", function (){
    expect(wedding.date).toBeDefined();
    expect(wedding.date).toBe("10/18/08");
  });
  it("should have a location", function (){
    expect(wedding.location).toBeDefined();
  });
  it("should include text", function (){
    expect(wedding.text).toBeDefined();
  });
});

  // it("should be able to include a picture", function (){
  //   expect (wedding.image).toBeDefined();
  // });
  // it("should be able to be edited", function(){
  //   var wedding = new Memory ("Kris and Jen's Wedding");
  //
  // });
  // it("should be able to be deleted", function(){
  //   var wedding = new Memory ("Kris and Jen's Wedding");
  //
  // });









// How to do asychronous stuff
//
// it("logs into Facebook", function(){
//   $.getSON("http://facebook").then(function(response) {
//     expect(response.isLoggedIn).toBe(true);
//   });
// });
//
// it("saves to the databse", function(){
//   var wedding = new Memory();
//   wedding.save().then(function(err, response){
//     expect( err ).not.toBeNull();
//   });
// });

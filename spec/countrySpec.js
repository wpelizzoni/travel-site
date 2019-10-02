/* Enter the test cases here */

describe ("countries-information function", function () {
    
    /* User beforeEach to set the running total back to zero */
    beforeEach(function() {
        fetchCountry = new fetchCountriesInformation(); 
    });
    
    describe("Checks event", function() {
        it("should exist", function () {
            expect(fetchCountriesInformation).toBeDefined();
        });
        
        it("should return a country's capital", function() {
           expect(gh-user-data).toContain('Capital');
        });
        
        it("should return an error if we don't supply a country", function () {
          spyOn(window, "alert");
          fetchCountriesInformation(" ");
           
        /* Here we expect that window.alert has been called with the string 
        "Error!" because that is what we called in calc.js.  toHaveBeenCalledWith 
        allows us to pass through a parameter and check if that parameter is 
        the one that the function has been called with.  */
        
          expect(window.alert).toHaveBeenCalledWith("Error!");
        });
        
    });
    
});
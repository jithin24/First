var expect = require("chai").expect;
var nock = require("nock");
var tools = require("../lib_10/tools");

/*Commented for Testing

describe("Tools", function() {

    describe("printName", function(){
        it("Reverse the Names", function() {
            var results = tools.printName({ 
                first: "Jithin", 
                last: "George"
            });
            expect(results).to.equal("George, Jithin");
        });
    });

    describe("loadWiki", function(){
        before(function() {
            nock("https://en.wikipedia.org")
                    .get("/wiki/Abraham_Lincoln")
                    .reply(200, "Mock Wiki Linclon Tests");
        });

        it("Load Abraham Lincoln's Wiki page", function(done) {
            tools.loadWiki({
                first: "Abraham", 
                last: "Lincoln"
            }, function(page){
                    expect(page).to.equal("Mock Wiki Linclon Tests");
                    done();
            });
        });
    });
});
*/
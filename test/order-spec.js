var expect = require("chai").expect;
//var order = require("../lib_1o/order");
var rewire = require("rewire");

//Load the Data using rewire
var order = rewire("../lib_10/order");

/*Commented for Testing

describe("Ordering Items", function(){
    beforeEach(function() {
        this.testData = 
        [
            { sku: "AAA", qty: 10 } , 
            { sku: "BBB", qty: 0 }, 
            { sku: "CCC", qty: 3 }
        ];

        order.__set__("inventoryData", this.testData);
    });

    it("order an iten when there are enough in stock", function(done){
            order.orderItem("CCC", 3, function(){
                done();
            });
    });
});
*/
const subject = require("test-harness");

describe("The subject", () => {

    it("should be resolved/truthy", () => {
        expect(subject.utility).toBeTruthy();
    });

    it("should fail (to prompt the debug command)", () => {
        fail()
    });

});
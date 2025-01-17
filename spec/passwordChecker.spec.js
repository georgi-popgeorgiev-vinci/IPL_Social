import { PasswordChecker } from "../src/passwordChecker.js";

describe("passwordChecker verifies the validity of a password", function() {
    const passwordChecker = new PasswordChecker();


    describe("haveAtLeast8Characters", function() {

        it("should return false for a password with less than 8 characters", function() {

            const result = passwordChecker.haveAtLeast8Characters("1234567");

            expect(result).toBe(false);
        
        });
        

        it("should return true for a password with 8 characters", function() {

            const result = passwordChecker.haveAtLeast8Characters("12345678");

            expect(result).toBe(true);
        
        });

    });

    

});

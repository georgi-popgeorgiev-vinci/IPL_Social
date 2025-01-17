export class PasswordChecker {

    haveAtLeast8Characters = (password) => {
        if(password.length < 8) {
            return false;
        }

        return true;
    }

    haveAtLeastOneNumber = (password) => {
        for (let i = 0; i < password.length; i++) {
            if(!isNaN(password[i])) {
                return true;
            }
        }

        return false;

}
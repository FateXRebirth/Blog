
export function checkLoggedIn() {
    if(Meteor.userId()) {
        return true;
    } else {
        return false;
    }
}
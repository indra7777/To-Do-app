
module.exports = getDate;
function getDate(){
    const today = new Date();
    const options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    }

    let currentDay = today.toLocaleDateString("en-US",options);
    return currentDay;
}

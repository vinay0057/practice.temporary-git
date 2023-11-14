function SaveroDb(data, success, failure) {
    let speedWifi = Math.floor(Math.random() * 10) + 1;  
    if (speedWifi > 4) {
        success();
    } else {
        failure();
    }
}
let endingIndex=prompt("Enter Your endingIndex Value for Call Back");
for(let i=0;i<endingIndex;i++){

SaveroDb("Mihir Gupta", () => {
    console.log("Success");
    SaveroDb("Tony", () => {
        console.log("First data Has Been Saved");
    }, () => {
        console.log("Weak connection For Second Data..");
    });
}, () => {
    console.log("Failure weak connection...");
});
}

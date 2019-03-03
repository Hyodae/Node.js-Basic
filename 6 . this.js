var Hyodae = {
    printFirstName: function() {
        console.log("My name is Hyodae");
        console.log(this === Hyodae);
    }
};

Hyodae.printFirstName();

// The default calling context is global
function doSomethingWorthless() {
    console.log("\nI am worthless");
    console.log(this === Hyodae);    
}

doSomethingWorthless();
module.exports = {
    
    printHappy: function() {
        console.log("Happy");
    },
    printYolo: function() {
        console.log("Yolo");
    },
    
    favMovie: "The Matrix"
};


/* public function */
function printAvatar() {
    console.log("Avatar: PG-13");
}
function printChappie() {
    console.log("Chappie: R");
}


/* private function */
function printSpiderMan() {
    console.log("SpiderMan: R");
}

module.exports.avatar = printAvatar;
module.exports.chappie = printChappie;

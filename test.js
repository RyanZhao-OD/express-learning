function test() {
    var index = 0;
    function fn() {
        if(index < 10) {
            console.log(index);
            index++;
            fn();
        }
        else {
            return;
        }

    }
    fn();

}

test();
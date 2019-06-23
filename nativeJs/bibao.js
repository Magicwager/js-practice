var name = "The Window";
//window.name="wujiank"

　　var object = {
    　　　　name: "My Object",

    　　　　getNameFunc: function () {
        　　　　　　return function () {
            　　　　　　　　return this.name;
        　　　　　　};

    　　　　}

　　};

　　console.log(object.getNameFunc()());
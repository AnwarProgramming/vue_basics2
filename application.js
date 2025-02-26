

var app = new Vue({
    el: "#app", //el is id of the html tag
    data:{
        visitor_name: "",
        visitor_message: "",
        messages:[]
    },
    methods : {
        sayHi: function(){ // When someone clicks on say hi it triggers the function
            this.messages.push({"visitor_name": this.visitor_name, "visitor_message": this.visitor_message });
            this.visitor_name = "";
            this.visitor_message = "";
        },
    },
    computed : {
        count : function(){
            return this.messages.length; // This will return length of the visitors array
        }
    }
})
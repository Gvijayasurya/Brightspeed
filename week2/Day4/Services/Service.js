app.service("demoService",["$http",function($http){


    let arr = [10,2,9,34,5.5,11.2]


    this.getData=function(){
        let Duparr = [...arr]
        return Duparr
    }

    this.recevieData = function(value){
        arr.push(value)
    }
}])
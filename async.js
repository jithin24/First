window.onload = function(){
    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(http.readyState ==4 && http.status ==200){
            //console.log(JSON.parse(http.response));
        }
    };

    http.open("GET", "/data/tweets.json", true); 
    http.send();

    //JQuery Method
    $.get("data/tweets.json", function(data) {
        //console.log(data);
    });
    console.log("Asycn test log");

    $.ajax({
        type: "GET", 
        url: "data/tweets.json", 
        success: function(data) {
            //console.log(data);
        },
        error: function(jqXHR, textStatus, error){
            //console.log(error);
        }
    });

    function get(url){
        return new Promise (function (resolve,reject){
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);
            xhttp.onload = function(){
                if(xhttp.status == 200){
                    resolve(JSON.parse(xhttp.response));
                }
                else{
                    reject(xhttp.statusText);
                }
            };
            xhttp.onerror = function(){
                reject(xhttp.statusText);
            };
            xhttp.send();    
        }); 
    }

    var promise = get("data/tweets.json");
    promise.then(function (tweets){
        console.log(tweets);
        return get("data/teams.json");
    }).then(function(teams) {
        console.log(teams);
    }).catch(function(error){
        console.log(error);
    });
};
var video_data = {};

function traverse(jsonData) {
    if( jsonData !== null && typeof jsonData == "object" ) {
        if (jsonData["type"] == "video") {
            console.log(jsonData);
            video_data[jsonData["id"]] = {};
            video_data[jsonData["id"]]["jpg_href"] = jsonData["image"];
            var sources = jsonData["sources"];
            for (var i = 0; i < sources.length; i++) {
                if(sources[i]["mediaType"]) {
                    if(/video\/mp4/.exec(sources[i]["mediaType"])) {
                        video_data[jsonData["id"]]["mp4_href"] = sources[i]["uri"];
                    }
                    if(/video\/ogg/.exec(sources[i]["mediaType"])) {
                        video_data[jsonData["id"]]["ogv_href"] = sources[i]["uri"];
                    }
                    if(/video\/webm/.exec(sources[i]["mediaType"])) {
                        video_data[jsonData["id"]]["webm_href"] = sources[i]["uri"];
                    }
                }
            }
        } else {
            Object.entries(jsonData).forEach(([key, value]) => {
                // key is either an array index or object key
                traverse(value);
            });
        }
    }
}

function idFromUrl(url) {
    var filename = url.substr(url.lastIndexOf("/")+1);
    return filename.split("-")[1];
}


var elifeApiCall = function() {
    $(function() {
        console.log("elife_api loaded!!!!");
        document_url = qs.url ? decodeURIComponent(qs.url) : documentURL;
        console.log("elife_api document_url: " + document_url);
        var article_id = idFromUrl(document_url);
        console.log("elife_api article_id: " + article_id);

        $.get( "https://api.elifesciences.org/articles/" + article_id, function( data ) {
            traverse(data);
            //console.log(data["body"]);
        });
    });
};


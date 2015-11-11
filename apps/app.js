
$(function(){
    $('#search-term').submit(function(event){
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm){
    var params = {
        q: searchTerm,
        part: 'snippet',
        key: 'AIzaSyDQRNyERT53KCiEfWNmHoFYM3E_QF5cpkM'
    };
    url = 'https://www.googleapis.com/youtube/v3/search?';

    $.getJSON(url, params, function(data){
        showResults(data.items);
        console.log(data.items);
    });
}

function showResults(results){
    var html = "";
    $.each(results, function(index,value){
        html += '<p>' + '<img src= http://img.youtube.com/vi/' + value.id.videoId + '/2.jpg>' + '</p>';
    });
    $('#search-results').html(html);
}

//API Key = AIzaSyDQRNyERT53KCiEfWNmHoFYM3E_QF5cpkM
let $ = document.querySelector.bind(document);

window.onload = function () {
    doApi("popular");
    declareEvents();
}

function declareEvents() {
    $("#search_btn").addEventListener("click", function () {
        let input_val = $("#id_input").value;
        doApi(input_val);

    })

}

function doApi(_searchQ) {
    //* change the url from your api you want!
    let url = `https://api.tvmaze.com/search/shows?q=${_searchQ}`;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.addEventListener("readystatechange", function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let json = JSON.parse(xhr.response);

            createMovies(json);
        }
    })

    xhr.send();
}

// לקרוא לפונקציה בשם שקשור לעבודה
function createMovies(_ar) {
    $("#id_parent").innerHTML = "";


    _ar.forEach(function (item) {

        // לתת במקום יוזר שם אחר שקשור לפרויקט בדרך כלל מה שאנחנו רוצים ליצור
        // וגם לתת אחרי הניו את השם של המחלקה שיצרנו בדף המחלקה

        let movie = new Vod("#id_parent", item);
        movie.render();
    })
}
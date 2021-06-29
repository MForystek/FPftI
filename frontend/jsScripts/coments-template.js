function findGetParameter(parameterName) {
    var result = null;
        tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}

function adder(amount) {
    var id = findGetParameter("id");
    var temp = '<div class="card-header">' +
                    '<h5>' + amount + ' Comments:</h5>' +
                    '<form action="https://s113.labagh.pl/backend/addcomment.php" class="d-flex" method="POST">' +
                        '<input class="form-control me-2" type="search" name="comment-text" placeholder="Add your comment here...">' +
                        '<input type="hidden" name="fpfti-id" value="' + id + '"></input>' +
                        '<button class="btn btn-light" name="comment-add" type="submit">Add</button>' +
                    '</form>' +
                '</div>';

    $(".comments").append(temp);
}

function comtemplate(user_id, text, comment_id, curr) {
    var temp =  '<div class="card-body">' +
                    '<div class="card bg-transparent">' +
                            '<div class="card-header com">' +
                                '<div class="comment-properties">' +   
                                    '<form action="https://s113.labagh.pl/index.html" class="d-flex" method="GET">' +
                                        '<input type="hidden" name="page" value="search"></input>' +
                                        '<input type="hidden" name="query" value="' + user_id + '"></input>' +
                                        '<button class="search-button com-search" type="submit">Author: ' + user_id + ' | Id: ' + comment_id + '</button>' +
                                    '</form>' +
                                '</div>' + 
                            '</div>' +
                        '<div class="card-body">' +
                            '<span>' + text + '</span>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    $(".comments").append(temp);
}

function addDelButton() {
    //var where = $(".comment-properties");
    var curr_id = getJSessionId();
    var btnCtr = creatButton();
    $(".com-search").each(function(index){
        var tekst = $( this ).text();
        console.log(tekst);
        if(tekst.includes(curr_id)){
            var tmp = this.closest(".com");
            tmp.appendChild(btnCtr);
            console.log(this);
        }
    });
}

function creatButton() {
    var btnContainer = document.createElement("div");
    btnContainer.className = "d-flex flex-row-reverse bd-highlight del";
    var btnrmv = document.createElement("button");
    btnrmv.className = "btn btn-success btn-sm"
    btnrmv.innerHTML = "delete your comment";
    btnContainer.appendChild(btnrmv);
    return btnContainer;
}

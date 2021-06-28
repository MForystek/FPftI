function adder(amount){
    var temp = '<div class="card-header">' +
                    '<h5>' + amount + ' Comments:</h5>' +
                    '<form class="d-flex" method="POST">' +
                        '<input class="form-control me-2" type="search" placeholder="Add your comment...">' +
                        '<button class="btn btn-light" type="submit">Add</button>' +
                    '</form>' +
                '</div>';

    $(".comments").append(temp);
}

function comtemplate(user_id, text, user_name){
    var temp =  '<div class="card-body">' +
                    '<div class="card bg-transparent">' +
                        '<a href="https://s113.labagh.pl/index.html?page=' + user_id + '">' +
                            '<div class="card-header com">' +
                                '<span class="comment-properties">Author: ' + user_name + ' | Id: ' + user_id +'' +
                            '</div>' +
                        '</a>' +
                        '<div class="card-body">' +
                            '<span>' + text + '</span>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    $(".comments").append(temp);
}

function addDelButton(){
    var where = $(".comment-properties");
    var curr_id = getJSessionId();
    var btnCtr = creatButton();

    $(".comment-properties").each(function(index){
        var tekst = $( this ).text();
        if(tekst.includes(curr_id)){
            var tmp = this.closest(".com");
            tmp.appendChild(btnCtr);
        }
    });
}

function creatButton(){
    var btnContainer = document.createElement("div");
    btnContainer.className = "d-flex flex-row-reverse bd-highlight";
    var btnrmv = document.createElement("button");
    btnrmv.className = "btn btn-success btn-sm"
    btnrmv.innerHTML = "delete your comment";
    btnContainer.appendChild(btnrmv);
    return btnContainer;
}

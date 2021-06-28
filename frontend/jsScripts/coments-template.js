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
                            '<div class="card-header">' +
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

function addLikeCount(likeCount) {
    if (likeCount > 0) {
        return '+' + likeCount;
    } else if (likeCount === 0) {
        return likeCount;
    } else {
        return '-' + likeCount;
    }
}

function template(pic, op, title, id, likeCount, verified, classs, purpose) {
    var temp = 
        '<div class="card">' +
            '<a href="https://s113.labagh.pl/index.html?page=fpfti">' +
                //podmienic linka ale nwm na jakiego
                '<div class="card-header">' +
                    '<h5>' + title + '</h5>' +
                '</div>' +
            '</a>' +
            '<div class="card-body">' +
                '<span class="badge bg-success">' +
                '<a href="https://s113.labagh.pl/index.html?page='  + op + '">' + 'Author: ' + op + '</a>' +
                '</span>' +
                '<span class="badge bg-success test">' +
                    'Id: ' + id +
                '</span>' +
                    
                '<a href="https://s113.labagh.pl/index.html?page=fpfti">' +
                    '<div class="d-flex justify-content-evenly p-2">' +
                        '<img src="' + pic + '" class="img-fluid">' +
                    '</div>' +
                '</a>';
    
    if (purpose === "profile" || purpose === "details") {
        temp += '<div class="tags"></div>' + '</br>';
    }
    
    temp +=     '<div class="row fpfti-buttons">' +
                    '<button class="btn btn-success col-4">Like</button>' +
                    '<button class="btn btn-danger col-4">Dislike</button>' +
                    '<button class="btn btn-info col-4 disabled">' + addLikeCount(likeCount) + '</button>' +
                '</div>' +
            '</div>' +
        '</div>';

    $(classs).append(temp);

    if (purpose === "profile" || purpose === "details") {
        var mytags = {"tags": ["#funny", "#picture", "#planning"]}; 
        jQuery.each(mytags.tags, function() {
		    $(".tags").append('<span class="badge bg-success"><a href="https://www.youtube.com/watch?v=D-UmfqFjpl0">' + this + '</a></span>' + " ");
	    });
    }
}
function addLikeCount(likeCount) {
    if (likeCount > 0) {
        return '+' + likeCount;
    } else {
        return likeCount;
    }
}

function addButtons(purpose) {
    if (purpose === "admin") {
        var first = 'Accept';
        var second = 'Deny';
    } else {
        var first = 'Like';
        var second = 'Dislike';
    }
    return '<button class="btn btn-success col-4">' + first + '</button> <button class="btn btn-danger col-4">' + second + '</button>';
}

function addTagsHTML(purpose) {
    if (purpose === "details") {
        return '<div class="tags"></div>' + '</br>';
    }
    return "";
}

function template(pic, op, title, id, likeCount, classs, purpose) {
    var link = '"https://s113.labagh.pl/index.html?page=fpfti&pic=' + pic + '&op=' + op + '&title=' + title + '&likeCount=' + likeCount + '">';
    var temp = 
        '<div class="card">' +
            '<a href=' + link +
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
                    
                '<a href=' + link +
                    '<div class="d-flex justify-content-evenly p-2">' +
                        '<img src="' + pic + '" class="img-fluid">' +
                    '</div>' +
                '</a>' +
                addTagsHTML(purpose) + 
                '<div class="row fpfti-buttons">' +
                    addButtons(purpose) +
                    '<button class="btn btn-info col-4 disabled">' + addLikeCount(likeCount) + '</button>' +
                '</div>' +
            '</div>' +
        '</div>';

    $(classs).append(temp);

    if (purpose === "details") {
        var mytags = {"tags": ["#funny", "#picture", "#planning"]}; 
        jQuery.each(mytags.tags, function() {
		    $(".tags").append('<span class="badge bg-success"><a href="https://www.youtube.com/watch?v=D-UmfqFjpl0">' + this + '</a></span>' + " ");
	    });
    }
}
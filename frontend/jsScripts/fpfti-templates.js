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

function template(pic, op, title, id, likeCount, classs, purpose) {
    var link = '"https://s113.labagh.pl/index.html?page=fpfti&id=' + id + '">';
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
                '</span> ' +
                '<span class="badge bg-success test">' +
                    'Id: ' + id +
                '</span>' +
                    
                '<a href=' + link +
                    '<div class="d-flex justify-content-evenly p-2">' +
                        '<img src="' + pic + '" class="img-fluid">' +
                    '</div>' +
                '</a>' + 
                '<div class="row fpfti-buttons">' +
                    addButtons(purpose) +
                    '<button class="btn btn-info col-4 disabled">' + addLikeCount(likeCount) + '</button>' +
                '</div>' +
            '</div>' +
        '</div>';

    $(classs).append(temp);
}

function template_id(id) {
    var api_link = "https://s113.labagh.pl/backend/api/fpfti/read_fpfti.php?fpfti_id=" + id;
    $.ajax({
        url: api_link,
        type: "GET",
        dataType : "text",
    })
    .done(function(json) {
        var tablica_json = JSON.parse(json);
        jQuery.each(tablica_json.data, function() {
            var link_to_fpfti_page = '"https://s113.labagh.pl/index.html?page=fpfti&id=' + this.id + '">';
            var classs = ".fpfti-template";
            var temp = '' +
            '<div class="card">' +
                '<a href=' + link_to_fpfti_page +
                    '<div class="card-header">' +
                        '<h5>' + this.title + '</h5>' +
                    '</div>' +
                '</a>' +
                '<div class="card-body">' +
                    '<span class="badge bg-success">' +
                    '<a href="https://s113.labagh.pl/index.html?page='  + this.user_id + '">' + 'Author: ' + this.user_id + '</a>' +
                    '</span> ' +
                    '<span class="badge bg-success test">' +
                        'Id: ' + this.id +
                    '</span>' +
                        
                    '<a href=' + link_to_fpfti_page +
                        '<div class="d-flex justify-content-evenly p-2">' +
                            '<img src="' + this.link + '" class="img-fluid">' +
                        '</div>' +
                    '</a>' +
                    '<div class="tags"></div>' + '</br>' + 
                    '<div class="row fpfti-buttons">' +
                        addButtons("") +
                        '<button class="btn btn-info col-4 disabled">' + addLikeCount(this.likes) + '</button>' +
                    '</div>' +
                '</div>' +
            '</div>';

            $(classs).append(temp);

            var tags_link = "https://s113.labagh.pl/backend/api/fpfti/read_fpfti_tags.php?fpfti_id=" + id;
            $.ajax({
                url: tags_link,
                type: "GET",
                dataType : "text",
            })
            .done(function(json) {
                var tablica_json = JSON.parse(json);
                jQuery.each(tablica_json.data, function() { 
                    $(".tags").append('' + 
                        '<div class="badge bg-success">' +
                        '<form action="https://s113.labagh.pl/index.html?page=search" class="d-flex" method="GET">' +
                            '<input type="hidden" name="query" value="' + this.tag + '"></input>' +
                            '<button class="tag-button" type="submit">' + this.tag + '</button>' +
                        '</form>' +
                        '</div>' + " ");
                });
            })
            .fail(function(xhr, status, errorThrown) {
                alert("Data not found");
            });
        });
    })
    .fail(function(xhr, status, errorThrown) {
        alert("Data not found");
    });
}
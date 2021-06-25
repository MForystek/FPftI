function template(pic, op, title, id, likeCount, verified, klasa) {
    var temlt = '<div class="card">' +
        '<a href="https://s113.labagh.pl/index.html?page=fpfti">' +
            //podmienic linka ale nwm na jakiego
            '<div class="card-header">' +
                '<h5>' + title + '</h5>' +
            '</div>' +
        '</a>' +
        '<div class="card-body">' +
            '<span class="badge bg-success">' +
            '<a href="https://s113.labagh.pl/index.html?page='  + op + '">' + 'Author: ' + op + '</a>'  +
            '</span>' +
            '<span class="badge bg-success test">' +
                id +
            '</span>' +
                
            '<a href="https://s113.labagh.pl/index.html?page=fpfti">' +
                '<div class="d-flex justify-content-evenly p-2">' +
                    '<img src="' + pic + ' class="img-fluid">' +
                '</div>' +
            '</a>' +
            
            '<div class="row fpfti-buttons">' +
                '<button class="btn btn-success col-4">' + "Like" + '</button>' +
                '<button class="btn btn-danger col-4">' + "Dislike" + '</button>' +
                '<button class="btn btn-info col-4 disabled">' + likeCount + '</button>' +
            '</div>' +
        '</div>' +
    '</div>'
    $(klasa).append(temlt);
}
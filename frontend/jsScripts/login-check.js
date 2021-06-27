function check_session() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: 'https://s113.labagh.pl/backend/sessioncheck.php',
            dataType: 'text',
            success: function(result) {
                result = parseInt(result);
                resolve(result);
            },
            error: function(err) {
                reject(err);
            }
        });
    });
}
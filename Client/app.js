{
var allData;
var idForRecordToUpdate;

(function($){
    function processForm( e ){
        debugger;
        var dict = {
        	Title : this["title"].value,
            DirectorName: this["director"].value,
            Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                console.log("success?");
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);


(function($){
    function processForm2( e ){
        
     
        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            
            success: function( data, textStatus, jQxhr ){
                allData = data;

                console.log("success?");
                console.log(data);

                allData.forEach( item => {
                    let info = item.Title+item.DirectorName+item.Genre;
                    
                    $('#results').append('<li id=\"m' + item.MovieId + '\">' + info + "</li>");
                })

                console.log("done populating");

               // $('#response pre').html( data );

                // store the records with Ids

                // make the records clickable: each time you click on a particular record it populates the update form
                    // fill up array
                    // filter with the the particular one that we clicked

                // On submit update record

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        }).done(function() {
            allData.forEach(function (item) {
                $('\"#m' + item.MovieId + '\"').click(function () {
                    $('#title-input').val(d.Title);
                    $('#director-input').val(d.Title);
                    $('#genre-input').val(d.Title);
                 });
            });
        });

        e.preventDefault();
    }

    $('#my-form2').submit( processForm2 );
})(jQuery);

}


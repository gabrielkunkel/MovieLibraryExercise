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
                $('#formOneInput1').val('');
                $('#formOneInput2').val('');
                $('#formOneInput3').val('');
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        // now update all records on main table?

        $('#results').html('');
        $('#results').append('<tr><td class=\"tableHead\">Title</td><td class=\"tableHead\">Director</td><td class=\"tableHead\">Genre</td><td></td></tr>')
     
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
                    
                    $('#results').append('<tr id=\"m' + item.MovieId + '\" class=\"movieList\"><td>' + item.Title +'</td><td>' + item.DirectorName +'</td><td>' + item.Genre +'</td><td><button type="button">EDIT</button></td></tr>');
                })

                console.log("done populating");

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        // end 


        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);






(function($){
    function processForm2( e ){
        $('#results').html('');
        $('#results').append('<tr><td class=\"tableHead\">Title</td><td class=\"tableHead\">Director</td><td class=\"tableHead\">Genre</td><td></td></tr>')
     
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
                    
                    $('#results')
                        .append('<tr id=\"m' + item.MovieId + '\" class=\"movieList\"><td>' + item.Title +'</td><td>' + item.DirectorName +'</td><td>' + item.Genre +'</td></tr>')
                        .on("click", '#m' + item.MovieId, function () {
                            $('#title-input').val(item.Title);
                            $('#director-input').val(item.DirectorName);
                            $('#genre-input').val(item.Genre);
                         });
                })

                console.log("done populating");

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
            
        }) 

        e.preventDefault();
    }

    $('#my-form2').submit( processForm2 );
})(jQuery);



//////////// make update form with placeholders

(function($){
    function getUpdateForm( e ){
        debugger;
        let tempId = $;

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            
            success: function( data, textStatus, jQxhr ){
                debugger;
                console.log("success?");
                console.log(data)
                $('#response pre').html( data );

                let selected = data.filter( item => item.MovieId = tempId)

                console.log(selected);
                
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('.movieList').click( getUpdateForm );
})(jQuery);



}


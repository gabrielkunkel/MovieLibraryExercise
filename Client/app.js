{
var allData;
var idForRecordToUpdate;

(function($){
    function processForm( e ){
        debugger;
        var dict = {
        	Title : this["title"].value,
            DirectorName: this["director"].value,
            Genre: this["genre"].value,
            ImageUrl: this["image"].value
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
                $('#formOneInput4').val('');
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
                    
                    $('#results')
                        .append('<tr id=\"m' + item.MovieId + '\" class=\"movieList\"><td>' + item.Title +'</td><td>' + item.DirectorName +'</td><td>' + item.Genre +'</td></tr>')
                        .on("click", '#m' + item.MovieId, function () {
                            $('#title-input').val(item.Title);
                            $('#director-input').val(item.DirectorName);
                            $('#genre-input').val(item.Genre);
                            $('#image-input').val(item.ImageUrl);
                            $('#id-input').val(item.MovieId);
                         })
                         .on("mouseover", '#m' + item.MovieId, function () {
                             $("#displayImage").html("");
                             $("#displayImage").append('<img id =\"currentMovieImage\" src=\"'+item.ImageUrl+'\" alt=\"'+item.ImageUrl+'\" >');
                             //$("#displayImage").append('<h1>Hello</h1>');
                             

                            
                         })
                         .on("mouseout", '#m' + item.MovieId, function () {
                            $("#displayImage").html("");
                         });

                })

                console.log("done populating");

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
            
        }) 
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
                            $('#image-input').val(item.ImageUrl);
                            $('#id-input').val(item.MovieId);
                         })
                         .on("mouseover", '#m' + item.MovieId, function () {
                             $("#displayImage").html("");
                             $("#displayImage").append('<img id =\"currentMovieImage\" src=\"'+item.ImageUrl+'\" alt=\"'+item.ImageUrl+'\" >');
                             //$("#displayImage").append('<h1>Hello</h1>');
                             

                            
                         })
                         .on("mouseout", '#m' + item.MovieId, function () {
                            $("#displayImage").html("");
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
    function putForm( e ){
        var dict = {
        	Title : this["title"].value,
            DirectorName: this["director"].value,
            Genre: this["genre"].value,
            MovieId: this["MovieId"].value,
            ImageUrl: this["image"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                console.log("success?");
                $('#title-input').val('');
                $('#director-input').val('');
                $('#genre-input').val('');
                $('#image-input').val('');
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        // start

        
        // now update all records on main table?

        $('#results').html('');
        $('#results').append('<tr><td class=\"tableHead\">Title</td><td class=\"tableHead\">Director</td><td class=\"tableHead\">Genre</td></tr>')
     
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
                            $('#image-input').val(item.ImageUrl);
                            $('#id-input').val(item.MovieId);
                         })
                         .on("mouseover", '#m' + item.MovieId, function () {
                             $("#displayImage").html("");
                             $("#displayImage").append('<img id =\"currentMovieImage\" src=\"'+item.ImageUrl+'\" alt=\"'+item.ImageUrl+'\" >');
                             //$("#displayImage").append('<h1>Hello</h1>');
                             

                            
                         })
                         .on("mouseout", '#m' + item.MovieId, function () {
                            $("#displayImage").html("");
                         });

                })

                console.log("done populating");

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
            
        }) 

        // end 

        // end

        e.preventDefault();
    }

    $('#update-form').submit( putForm );
})(jQuery);


}




(function($){

    $(function(){
        

        var loadButton = $('#load-button'),
            userList = $('.user-list'),
            usersData = [],
            template = "";
            
        
        loadButton.on('click', function(e){
            e.preventDefault();
            $(this).text('Załaduj więcej')

            $.getJSON("https://jsonplaceholder.typicode.com/users", function(data){
                $.each(data, function(key, val){
                    usersData.push(val);
                });

                $.each(usersData, function(key, user){

                    var name = user.name,
                        username = user.username,
                        phone = user.phone,
                        email = user.email;

                    var item = $('<li class="item">\
                    <p><strong>Name: </strong>'+name+'</p>\
                    <p><strong>Username: </strong>'+username+'</p>\
                    <p><strong>Phone: </strong>'+email+'</p>\
                    <p><strong>Email: </strong>'+phone+'</p>\
                    </li>')
                    console.log(userList)
                    userList.append(item.hide().fadeIn())
                    
                });
            });

        });
        



    });

})(jQuery);
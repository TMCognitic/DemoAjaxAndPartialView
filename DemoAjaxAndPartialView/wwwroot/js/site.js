// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function getMovement(select) {
    //alert(select.value);
    if (select.value == '0') {
        $('#MovementTable').html("")
    }
    else {
        $.ajax({
            url: "Account/Movements/" + select.value,
            dataType: "html",
            type: "get",
            success: function (data) {
                $('#MovementTable').html(data);
            }
        });
    }
}
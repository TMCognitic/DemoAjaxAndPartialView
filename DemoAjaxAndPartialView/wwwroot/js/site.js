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
            },
            error: function (data) {
                $('#MovementTable').html("<p class=\"alert-danger\">Bad request...</p>");
            }
        });
    }
}

function addAmountQuery() {
    let select = $('#accounts').val();

    if (select.value != '0') {
        let amount = $('#amountquery').val();
        $('#amountquery').val(null);
        if (!isNaN(amount)) {
            $.ajax({
                url: "Account/AddAmountQuery/" + select + "/?amount=" + amount,
                dataType: "html",
                type: "get",                
                success: function () {
                    if (amount < 0) {
                        $('#MovementTable').append("<tr><td class=\"retrait\">" + Math.abs(amount) + "</td></tr>");
                    }
                    else {
                        $('#MovementTable').append("<tr><td class=\"depot\">" + amount + "</td></tr>");
                    }
                },
                error: function (data) {
                    $('#MovementTable').html("<p class=\"alert-danger\">Bad request...</p>");
                }
            });
        }
    }
}

function addAmountBody() {
    let select = $('#accounts').val();

    if (select.value != '0') {
        let amount = $('#amountbody').val();
        $('#amountbody').val(null);
        
        if (!isNaN(amount)) {
            let data = JSON.stringify({ "amount": amount });
            $.ajax({
                url: "Account/AddAmountBody/" + select,
                headers: {
                    "content-type": "application/json;charset=UTF-8"
                },
                data:data,
                type: "post",
                success: function () {
                    if (amount < 0) {
                        $('#MovementTable').append("<tr><td class=\"retrait\">" + amount + "</td></tr>");
                    }
                    else {
                        $('#MovementTable').append("<tr><td class=\"depot\">" + amount + "</td></tr>");
                    }
                },
                error: function (data) {
                    $('#MovementTable').html("<p class=\"alert-danger\">Bad request...</p>");
                }
            });
        }
    }
}


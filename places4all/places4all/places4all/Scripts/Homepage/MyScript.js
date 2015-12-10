$(".langSelector").click(function () {
                $.cookie('p4alllang', 'en-US', { expires: new Date(2500, 1, 1), path: '/' });
                return true;
            });
        

$("#insertEmailToNewsletter").click(function () {
    var EMAIL_REGEXP = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;
    if (EMAIL_REGEXP.test($("#email").val())) {
        $.ajax({
            url: "/p4all/Newsletter/InsertEmailNewsletter",
            type: "POST",
            dataType: 'text',
            data: JSON.stringify({ email: $("#email").val() }),
            contentType: "application/json",
            success: function (response) {
                var obj = jQuery.parseJSON(response);
                if (obj.result == "ok") {
                    $("#newsletter").append("<div>Email enviado com sucesso</div>")
                } else if (obj.result == "registed") {
                    $("#newsletter").append("<div>Email j&#225; registado para envio de newsletter</div>")
                }
                else {
                    $("#newsletter").append("<div>Ocorreu um erro tente mais tarde</div>")
                }
            }
        });
    } else {
        $("#newsletter").append("<div>Email inv&#225;lido</div>")
    }

});
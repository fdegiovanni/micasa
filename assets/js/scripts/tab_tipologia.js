var TabTipologias = function (){
    //variables globales
    var _initComponents = function(){
        $("#hey").click(function (e) {
            e.preventDefault();
            alert("hey");
        })

        $(".choice").click(function (e) {
            e.preventDefault();
            $("#descripcion_tipologia").addClass("invisible");
            var radio = $(this).find(".radio_tipologia");
            switch (radio.val()) {
                case 'tipo_a':
                    $("#descripcion_tipologia").toggleClass("invisible");
                    $("#descripcion_tipologia").find("h3").text("Vivienda 'A'");
                    $("#descripcion_tipologia").find("ul").children().remove();
                    html = "<li>Uno</li><li>Dos</li>";
                    $("#descripcion_tipologia").find("ul").append(html);
                    break;
                case 'tipo_b':
                    $("#descripcion_tipologia").toggleClass("invisible");
                    $("#descripcion_tipologia").find("h3").text("Vivienda 'B'");
                    $("#descripcion_tipologia").find("ul").children().remove();
                    html = "<li>111</li><li>2222</li>";
                    $("#descripcion_tipologia").find("ul").append(html);
                    break;
                case 'tipo_c':
                    $("#descripcion_tipologia").toggleClass("invisible");
                    $("#descripcion_tipologia").find("h3").text("Vivienda 'C'");
                    $("#descripcion_tipologia").find("ul").children().remove();
                    html = "<li>CCCC</li><li>DCCCCos</li>";
                    $("#descripcion_tipologia").find("ul").append(html);
                    break;
                case 'tipo_d':
                    $("#descripcion_tipologia").toggleClass("invisible");
                    $("#descripcion_tipologia").find("h3").text("Vivienda 'D'");
                    $("#descripcion_tipologia").find("ul").children().remove();
                    html = "<li>AAAA</li><li>BBBB</li>";
                    $("#descripcion_tipologia").find("ul").append(html);
                    break;
            }

        })

        $('input[type=radio][name=radio_tipologia]').on('change', function(e) {
            e.preventDefault();
            if (this.value == 'tipo_d') {
                alert("Allot Thai Gayo Bhai");
            }
            else {
                alert("Transfer Thai Gayo");
            }
        });

       
        
    };

    //metodos privados
    
    //metodos publicos
    return {
        //main function to initiate the module
        init: function () {
            _initComponents();
        },
        setExample: function (g) {
            mostrarExamples(g);
        }
    };
}();

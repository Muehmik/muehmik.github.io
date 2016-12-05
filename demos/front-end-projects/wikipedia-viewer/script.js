$(document).ready(function () {
    $("#search").on('keyup', function (e) {
        if (e.keyCode == 13) {
            var searchName = $("#search").val()
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchName + "&json&callback=?";

            $.ajax({
                type: "GET",
                url: url,
                async: false,
                dataType: "json",
                success: function (data) {
                    $(".search-article").addClass("hidden");
                    $("#output").html("");
                    for (var i = 0; i < data[1].length; i++) {
                        $("#output").append("<a class='item' href= " + data[3][i] + " target='blank'><h4>" + data[1][i] + "</h4><li>" + data[2][i] + "</li></a>");
                    }
                }
            });

        }
    });
});

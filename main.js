//open and close tab menu
$('.nav-tabs-dropdown')
    .on("click", "li:not('.active') a", function(event) {  $(this).closest('ul').removeClass("open");
    })
    .on("click", "li.active a", function(event) {        $(this).closest('ul').toggleClass("open");
    });

function on() {
    document.getElementsByClassName("tab-pane").style.display = "block";
}

function off() {
    document.getElementsByClassName("tab-pane").style.display = "none";
}
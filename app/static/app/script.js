$(document).ready(function () {
    var song = $('.song');
    var initialHtml = song.html();

    doLayout();

    $(window).resize(function () {
        doLayout();
    });

    function doLayout() {
        song.html(initialHtml);
        var lines = song.find(".line");
        $.each(lines, function () {
            wrap(this);
        });
    }

    function wrap(line) {
        var divWidth = song.get(0).getBoundingClientRect().width;
        var nextLine = $('<span></span>');
        while (line.getBoundingClientRect().width > divWidth - 10) {
            var text = $(line).text();
            var lastChar = text.substr(text.length - 1);
            $(line).text(text.slice(0, -1));
            nextLine.text(lastChar + nextLine.text());
            if (lastChar != ' ') {
                while (true) {
                    text = $(line).text();
                    lastChar = text.substr(text.length - 1);
                    if (lastChar == ' ') {
                        break;
                    }
                    $(line).text(text.slice(0, -1));
                    nextLine.text(lastChar + nextLine.text());
                }
            }
        }
        if (nextLine.text() != '') {
            nextLine.text(nextLine.text().trim());
            $(line).append('<br>');
            $(line).append(nextLine);
            wrap(nextLine.get(0));
        }
    }
});
var addEvent = addEvent || {};
addEvent = (function () {
    $(function () {
        $('#hplogo').on('click', function () {
            alert('Hello World!');
        });
    });
})();
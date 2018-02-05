    function openSlideMenu() {
        document.querySelector('#side-menu').style.width = '250px';

        document.querySelector('#main').style.marginLeft = '250px';
    }

    function closeSlideMenu() {
        document.querySelector('#side-menu').style.width = '0';
        document.querySelector('#main').style.marginLeft = '0';
    }

// Handle click anywhere to close modal
    $(document).bind("mousedown", function (e) {
        console.log('hello');
        if (!$(e.target).closest('header').length > 0) {
            document.querySelector('#side-menu').style.width = '0';
            document.querySelector('#main').style.marginLeft = '0';
        }
    });
$(document).ready(function () {
    $(".btn-hamb").click(function () {
        $('.nav-default-mobile').toggleClass("showNav");
    })
});


/**
 * -----------------------------------------------------------
 * ------------------- SEARCH DROPDOWN -----------------------
 * -----------------------------------------------------------
*/

const searchLimit = 8;
const search_route = '/api/blog/search';
const searchTriggerBtn = $("header .serchBox button.search-btn");
const searchInputEl = $('header .serchBox input[type="search"]');
const searchResultsEl = $('#search-results-container ul.search-results');
const searchResultsContainer = $('#search-results-container');


searchTriggerBtn.click(function () {
    searchTriggerBtn.toggleClass('open');
    let open = searchTriggerBtn.hasClass('open');

    if (open) {
        $('main.container-main').css('filter', 'blur(1px)');
    } else {
        searchResultsContainer.hide();
        clearSearchResults();
        searchInputEl.val('');

        $('main.container-main').css('filter', 'none');
    }
});

var searchDelayFn;

function delaySearch(fn, ...args) {
    clearTimeout(searchDelayFn);

    searchDelayFn = setTimeout(() => {
        fn(...args);
    }, 300); // time in ms
}

function clearSearchResults() {
    searchResultsEl.html('');
}

var loaderEl = $('<div class="spinner-grow text-info" role="status"><span class="visually-hidden">Loading...</span></div>');

searchInputEl.on('keyup', function () {
    searchResultsEl.prepend(loaderEl);

    delaySearch(() => {
        let query = this.value.trim();
        if (!query || query.length <= 3) {
            clearSearchResults();
            $('#search-results-container').hide();
            return;
        }

        fetch(`${search_route}/${query}?limit=${searchLimit}`)
            .then(response => {
                return (response.ok) ? response.json() : Promise.reject(response);
            })
            .then(data => {
                loaderEl.remove();

                let html = '';
                for (item of data) {
                    html += `\
          <li>
            <a href="${item.link}">${item.meta_title}</a>
          </li>`;
                }

                searchResultsEl.html(html);
                searchTriggerBtn.addClass('open');
                searchResultsContainer.show();
            });
    });
});
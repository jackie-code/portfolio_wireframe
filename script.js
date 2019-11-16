

function showPage() {
    $('html').show();
}


/* **************event listeners****************  */
function eventListeners(){

    $('header').on('click', '.hero', function () {
        $('html').hide();
    }


}


/* ***************get document ready*************** */
$('document').ready(function startPage() {
    // We call this function ONCE
    eventListeners();
    showPage();
  })
/**
 * Faculty topic selection
 */
$(document).ready(function() {

    // init grid
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      /*masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        horizontalOrder: true,
        fitWidth: true
      }*/
      layoutMode: 'fitRows',
      fitRows: {
        gutter: '.gutter-sizer'
      }
      /*,
      masonry: {
        columnWidth: 292,
        gutter: 20,
        isFitWidth: true
      }*/
    });

    // store filters
    var filters = [];
    var filters_text = [];

    // show filters
    var $filterDisplay = $('#filter-display');

    // select/deselect filter on button click
    $('#filters').on( 'click', 'button', function( event ) {
      var $target = $( event.currentTarget );
      $target.toggleClass('is-checked');
      var isChecked = $target.hasClass('is-checked');
      var filter = $target.attr('data-filter');
      var text = $target.text();
      if ( isChecked ) {
        addFilter( filter, text );
      } else {
        removeFilter( filter );
      }

      // group filters together, inclusive
      $grid.isotope({ filter: filters.join('') });
      if (filters.length == 0) {
        $filterDisplay.text( "All topic areas" );
      } else {
        $filterDisplay.text(filters_text.join('and '));
      }
    });

    function addFilter( filter, text ) {
      if ( filters.indexOf( filter ) == -1 ) {
        filters.push( filter );
        filters_text.push( text );
      }
    }

    function removeFilter( filter ) {
      var index = filters.indexOf( filter);
      if ( index != -1 ) {
        filters.splice( index, 1 );
        filters_text.splice( index, 1 );
      }
    }

});

$(document).on('ready', function(){
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
      e.stopPropagation()
    });

    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.dropdown').on('show.bs.dropdown', function(e){
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
      console.log('sliding down');
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function(e){
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
      console.log('sliding up');
    });

})

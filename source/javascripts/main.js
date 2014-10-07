//Tabs
$(document).ready(function(){
  $('.example-menu .item').tab({
    history: false
  });

  //Set button state
  $('.ui.button').state();

  //Set checkboxes & radios
  $('.js.ui.checkbox, .js.ui.radio.checkbox').checkbox();

  //Set selects & dropdowns
  $('.ui.selection.dropdown').dropdown();
});

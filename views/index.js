
$(document).ready(function() {
  console.log("READY!")
  $("form").submit(function(e) {
    test();

    $(this).attr('action', 'api/board/:b')
      $.ajax({
        url: '/api/board/:b',
        type: 'post',
        dataType: 'json',
        data: $('#main-form').serialize(),
        success: function(res) {
          console.log("success: function() {");
          console.log(res)
          window.sessionStorage.setItem('data', JSON.stringify(res));
          window.location.replace("/views/board.html");
          // $('#b-content').append("content...").after('topic: '+res.topic);
          $('#responses').append("topic: <h3>" + 'res.topic' + "</h3>");
        }
      });
      // e.preventDefault();
  });
});
function test() {
    // console.log("submit, ", $('#main-form').serialize());
    $.getJSON('api/board/:',function(data) {
      console.log(JSON.stringify(data));
    })
    .done(function() {
      console.log("api/board/ DONE");
    })
    .fail(function() {
      console.log("api/board/ FAIL");
    })
    .always(function() {
      console.log("api/board/ ALWAYS");
    });
    $.getJSON('/',function(data) {
      console.log(JSON.stringify(data));
    })
    .done(function() {
      console.log("/ DONE");
    })
    .fail(function() {
      console.log("/ fail");
    })
    .always(function() {
      console.log("/ always");
    });
}

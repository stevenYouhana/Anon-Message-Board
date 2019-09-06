
$(document).ready(function() {
  console.log("READY!")

  $("form").submit(function(e) {
    // console.log("submit, ", $('#main-form').serialize());
    $(this).attr('action', 'api/board/test')
    $.ajax({
      url: '/',
      type: 'get',
      dataType: 'json',
      data: $('#main-form').serialize(),
      success: function(res) {
        console.log("success: function() {");
        // $('#responses').append(JSON.stringify(res)+"</br>");
        $('#b-content').append("content...").after('topic: '+res.topic);
        // console.log("res.headers.Location", res.headers.Location)
        // $.redirect('board.html', {test: "test value"});
      }
    });
$('#b-content').append("content...").after('topic: '+res.topic);
    // e.preventDefault();
  });
  $.getJSON('api/board/:b', function(data) {
    console.log("$.getJSON('api/board/:b'");
    $("b-content").appned("board content");
  });
});

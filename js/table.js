$(document).ready(function () {
    $('#dtOrderExample').DataTable({
    "order": [[ 3, "desc" ]]
    });
    // $('.dataTables_length').addClass('bs-select');

    $('[id^=catalogue]').hover(function(){
        var price_id = this.id.split('_')[1];
        $('#price_'+price_id).css('visibility','visible');
      }, function() {
        var price_id = this.id.split('_')[1];
        $('#price_'+price_id).css('visibility','hidden');
      });
    
    });
(function () {
    var $main = $('main'),
        $table = $('<table>'),
        $caption = $('<caption>').text('Novice Registration'),
        $tr = $('<tr>'),
        $tdLeft = $('<td>'),
        $tdRight = $('<td>'),
        $formLeft = $('<form>').attr('class', 'left'),
        $formRight = $('<form>').attr('class', 'right'),
        $fieldsetLeft = $('<fieldset>'),
        $fieldsetRight = $('<fieldset>'),
        $legendLeft = $('<legend>').text('FORM GOOGLE'),
        $legendRight = $('<legend>').text('FORM W3SCHOOLS'),
        $tableLeft = $('<table>').attr('class', 'innerTbl'),
        $tableRight = $('<table>').attr('class', 'innerTbl'),
        $trArrLeft = [],
        $tdArrLeft = [],
        $trArrRight = [],
        $tdArrRight = [],
        $save = $('.save');



    $('body').append($main
                .append($table
                    .append($caption)));
    $table.append($tr
            .append($tdLeft, $tdRight));
    $tdLeft.append($formLeft
                .append($fieldsetLeft
                    .append($legendLeft, $tableLeft)));
    $tdRight.append($formRight
                .append($fieldsetRight
                    .append($legendRight, $tableRight)));

    for(var i = 0; i < jsonLeft.length; i++) {
        $trArrLeft[i] = $('<tr>');
        $tableLeft.append($trArrLeft);
        for(var j = 0; j < jsonLeft[i].length; j++) {
            $tdArrLeft[j] = $('<td>');
            $trArrLeft[i].append($tdArrLeft[j]);
            $tdArrLeft[j].append($tagName = $('<' + jsonLeft[i][j].tagName + '>'));
            $tagName.text(jsonLeft[i][j].name)
                .attr({
                    'id': jsonLeft[i][j].id, 'class': jsonLeft[i][j].class, 'type': jsonLeft[i][j].type, 'for': jsonLeft[i][j].for, 'placeholder': jsonLeft[i][j].placeholder,
                    'maxlength': jsonLeft[i][j].maxlength, 'required': jsonLeft[i][j].required, 'accesskey': jsonLeft[i][j].accesskey,
                    'pattern': jsonLeft[i][j].pattern, 'tabindex': jsonLeft[i][j].tabindex, 'title': jsonLeft[i][j].title, 'autocomplete': jsonLeft[i][j].autocomplete,
                    'formaction': jsonLeft[i][j].formaction
                });

        }
    }
    for(var i = 0; i < jsonRight.length; i++) {
        $trArrRight[i] = $('<tr>');
        $tableRight.append($trArrRight);
        for(var j = 0; j < jsonRight[i].length; j++) {
            $tdArrRight[j] = $('<td>');
            $trArrRight[i].append($tdArrRight[j]);
            $tdArrRight[j].append($tagName = $('<' + jsonRight[i][j].tagName + '>'));
            $tagName.text(jsonRight[i][j].name)
                .attr({
                    'id': jsonRight[i][j].id, 'class': jsonRight[i][j].class, 'type': jsonRight[i][j].type, 'for': jsonRight[i][j].for, 'placeholder': jsonRight[i][j].placeholder,
                    'maxlength': jsonRight[i][j].maxlength, 'required': jsonRight[i][j].required, 'accesskey': jsonRight[i][j].accesskey,
                    'pattern': jsonRight[i][j].pattern, 'tabindex': jsonRight[i][j].tabindex, 'title': jsonRight[i][j].title, 'autocomplete': jsonRight[i][j].autocomplete,
                    'formaction': jsonRight[i][j].formaction, 'min': jsonRight[i][j].min, 'max': jsonRight[i][j].max
                });

        }
    }
    $('label').mousemove(function () {
        $('#lbl')[0].play();
    });
    $('input').mousemove(function () {
        $('#input')[0].play();
    });
    $save.mousemove(function () {
        $('#saveButton')[0].play();
    });
    $('.cancel').mousemove(function () {
        $('#cancelButton')[0].play();
    });
    $('caption').mousemove(function () {
        $('#caption')[0].play();
    });
    // $save.click(function () {
    //     if($('#confPassword').val() != $('#password').val()) {
    //         alert('not');
    //         return false;
    //     }
    //     else {
    //         alert(23);
    //         return true;
    //     }
    // })

})();
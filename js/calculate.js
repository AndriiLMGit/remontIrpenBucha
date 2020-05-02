$(document).ready(function () {

  $('.calculateSubmit').click(function () {
    var comsRem = 1300;
    var capRem = 2300;
    var evroRem = 2800;
    var vipRem = 3300;
    var valSelect1 = $('#calculateSelect1').val();
    var valSelect2 = $('#calculateSelect2').val();
    var valSelect3 = $('#calculateSelect3').val();
    var numbOfSquareMeaters = $('#squareMeaters').val()
    var totalPrice = 0;


    //-------Перша перевірка почалась--------------
    if (valSelect1 == 1 && valSelect2 == 1 && valSelect3 == 1) {
      totalPrice = comsRem * numbOfSquareMeaters;
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 2 && valSelect2 == 1 && valSelect3 == 1) {
      totalPrice = capRem * numbOfSquareMeaters;
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 3 && valSelect2 == 1 && valSelect3 == 1) {
      totalPrice = evroRem * numbOfSquareMeaters;
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 4 && valSelect2 == 1 && valSelect3 == 1) {
      totalPrice = vipRem * numbOfSquareMeaters;
      $('.totalPrice').empty().append(totalPrice);
    }
    //-------Перша перевірка закінчилась--------------
    //------------------------------------------------
    //-------Друга перевірка почалась--------------
    else if (valSelect1 == 1 && valSelect2 == 2 && valSelect3 == 1) {
      totalPrice = comsRem * numbOfSquareMeaters + (comsRem * numbOfSquareMeaters * 0.1);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 2 && valSelect2 == 2 && valSelect3 == 1) {
      totalPrice = capRem * numbOfSquareMeaters + (capRem * numbOfSquareMeaters * 0.1);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 3 && valSelect2 == 2 && valSelect3 == 1) {
      totalPrice = evroRem * numbOfSquareMeaters + (evroRem * numbOfSquareMeaters * 0.1);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 4 && valSelect2 == 2 && valSelect3 == 1) {
      totalPrice = vipRem * numbOfSquareMeaters + (vipRem * numbOfSquareMeaters * 0.1);
      $('.totalPrice').empty().append(totalPrice);
    }
    //-------Друга перевірка закінчилась--------------
    //------------------------------------------------
    //-------Третя перевірка почалась--------------
    else if (valSelect1 == 1 && valSelect2 == 1 && valSelect3 == 2) {
      totalPrice = comsRem * numbOfSquareMeaters + (comsRem * numbOfSquareMeaters * 0.02);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 2 && valSelect2 == 1 && valSelect3 == 2) {
      totalPrice = capRem * numbOfSquareMeaters + (capRem * numbOfSquareMeaters * 0.02);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 3 && valSelect2 == 1 && valSelect3 == 2) {
      totalPrice = evroRem * numbOfSquareMeaters + (evroRem * numbOfSquareMeaters * 0.02);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 4 && valSelect2 == 1 && valSelect3 == 2) {
      totalPrice = vipRem * numbOfSquareMeaters + (vipRem * numbOfSquareMeaters * 0.02);
      $('.totalPrice').empty().append(totalPrice);
    }
    //-------Третя перевірка закінчилась--------------
    //------------------------------------------------
    //-------Четверта перевірка почалась--------------
    else if (valSelect1 == 1 && valSelect2 == 1 && valSelect3 == 3) {
      totalPrice = comsRem * numbOfSquareMeaters + (comsRem * numbOfSquareMeaters * 0.05);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 2 && valSelect2 == 1 && valSelect3 == 3) {
      totalPrice = capRem * numbOfSquareMeaters + (capRem * numbOfSquareMeaters * 0.05);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 3 && valSelect2 == 1 && valSelect3 == 3) {
      totalPrice = evroRem * numbOfSquareMeaters + (evroRem * numbOfSquareMeaters * 0.05);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 4 && valSelect2 == 1 && valSelect3 == 3) {
      totalPrice = vipRem * numbOfSquareMeaters + (vipRem * numbOfSquareMeaters * 0.05);
      $('.totalPrice').empty().append(totalPrice);
    }
    //-------Четверта перевірка закінчилась--------------
    //------------------------------------------------
    //-------П'ята перевірка почалась--------------
    else if (valSelect1 == 1 && valSelect2 == 2 && valSelect3 == 2) {
      totalPrice = comsRem * numbOfSquareMeaters + (comsRem * numbOfSquareMeaters * 0.1) + (comsRem * numbOfSquareMeaters * 0.02);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 2 && valSelect2 == 2 && valSelect3 == 2) {
      totalPrice = capRem * numbOfSquareMeaters + (capRem * numbOfSquareMeaters * 0.1) + (capRem * numbOfSquareMeaters * 0.02);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 3 && valSelect2 == 2 && valSelect3 == 2) {
      totalPrice = evroRem * numbOfSquareMeaters + (evroRem * numbOfSquareMeaters * 0.1) + (evroRem * numbOfSquareMeaters * 0.02);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 4 && valSelect2 == 2 && valSelect3 == 2) {
      totalPrice = vipRem * numbOfSquareMeaters + (vipRem * numbOfSquareMeaters * 0.1) + (vipRem * numbOfSquareMeaters * 0.02);
      $('.totalPrice').empty().append(totalPrice);
    }
    //-------П'ята перевірка закінчилась--------------
    //------------------------------------------------
    //-------Шоста перевірка почалась--------------
    else if (valSelect1 == 1 && valSelect2 == 2 && valSelect3 == 3) {
      totalPrice = comsRem * numbOfSquareMeaters + (comsRem * numbOfSquareMeaters * 0.1) + (comsRem * numbOfSquareMeaters * 0.05);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 2 && valSelect2 == 2 && valSelect3 == 3) {
      totalPrice = capRem * numbOfSquareMeaters + (capRem * numbOfSquareMeaters * 0.1) + (capRem * numbOfSquareMeaters * 0.05);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 3 && valSelect2 == 2 && valSelect3 == 3) {
      totalPrice = evroRem * numbOfSquareMeaters + (evroRem * numbOfSquareMeaters * 0.1) + (evroRem * numbOfSquareMeaters * 0.05);
      $('.totalPrice').empty().append(totalPrice);
    }
    else if (valSelect1 == 4 && valSelect2 == 2 && valSelect3 == 3) {
      totalPrice = vipRem * numbOfSquareMeaters + (vipRem * numbOfSquareMeaters * 0.1) + (vipRem * numbOfSquareMeaters * 0.05);
      $('.totalPrice').empty().append(totalPrice);
    }

  })

})

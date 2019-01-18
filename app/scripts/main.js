window.onload = function () {
  filter()
}

// "показать еще"
$('.filter-more').click(function () {
  $(this).fadeOut(0)
  $(this).prev('.filter-list').addClass('active')
})

// ставим лайк
$('.goods__like').click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  }else{
    $(this).addClass('active')
  }
})

//мобильные фильтры
$('.gamburger').click(function () {

  if($(this).hasClass('active')){
    $(this).removeClass('active')
    $('.choise-filters').removeClass('active')
  }else{
    $(this).addClass('active')
    $('.choise-filters').addClass('active')
  }

})

function filter() {

  var items = $('.filter-item'),
      tags = $('.tags'),
      clear = $('.choise-filters__clear'),
      filtered = '',
      arrayChoise = [];

// клик по элементу списка
  $(items).click(function() {

    var active = $(this);
    filtering(active, arrayChoise)
    tags.html('')
    filtered = ''

    $('.goods-item').fadeOut(300)
    $(arrayChoise).each(function () {
      $(tags).append('<li class = "tags-item" data-filter="'+ this.attr +'"><p class="tags-item__text">'+ this.text +'</p><div class="tags-item__close"></div></li>')
      filtered = filtered + '.'+this.attr
    })

    switchElems(filtered)
})

  // // клик по элементу списка
  //   $(itemsClose).click(function() {
  //     var active = $(this);
  //     filtering(active, arrayChoise)
  //     tags.html('')
  //     filtered = ''
  //
  //     $('.goods-item').fadeOut(300)
  //     $(arrayChoise).each(function () {
  //       $(tags).append('<li class = "tags-item" data-filter="'+ this.attr +'"><p class="tags-item__text">'+ this.text +'</p><div class="tags-item__close"></div></li>')
  //       filtered = filtered + '.'+this.attr
  //     })
  //   })

// очистить фильтр
  $(clear).click(function() {

    arrayChoise = []
    tags.html('')
    $(items).removeClass('active')
    $('.goods-item').fadeIn(300)
  })
}


// добавление/удаление элементов
function filtering(active, arrayChoise) {
  var item = {
    attr: $(active).attr('data-filter'),
    text: $(active).find('.filter-item__text').text()
  }

  if ($(active).hasClass('active')) {
    $(active).removeClass('active')
    $(arrayChoise).each(function () {
      if (this.attr == item.attr) {
        arrayChoise.splice(arrayChoise.indexOf(this), 1)
      }
    })
  }else{
    $(active).addClass('active')
    arrayChoise.push(item)
  }

}

// показыкаем/не показываем элементы
function switchElems(filtered) {
      $('.nothing').fadeOut()
      setTimeout(function () {
        if (filtered == ''){
          $('.goods-item').fadeIn(300)
        }else if($(filtered).size() < 1){
          $('.nothing').css("display", "flex").hide().fadeIn()
        }else{
          $(filtered).fadeIn(300)
        }
      }, 400)
}

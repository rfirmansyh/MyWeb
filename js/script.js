$(function () {



  const bMenu = $('.menu-button');
  const menu = $('.menu-navbar');
  const webProducts = 6;
  const tabletProducts = 3;
  const mobileProducts = 1;

  // function showProductsMobile() {
  //   let contentText = "";
  //   for (let i = 0; i < mobileProducts; i++) {
  //     contentText += '<div class="product-content on-product"><img class="content-image on-product"src="img/sengon.jpg" alt=""><h1 class="name on-product">Kemitraan Bibit Sengon</h1><hr><p class="address on-product">Lahan Kelompok Tani</p><p class="price on-product">Harga : <span class="go-right">Rp 4.000.0000</span></p><p class="advantages on-product">Keuntungan : <span class="go-right">17% per tahun</span></p><button class="more-button on-product">Selengkapnya</button></div>'
  //   }
  //   return contentText;
  // }
  // function showProductsTablet() {
  //   let contentText = "";
  //   for (let i = 0; i < tabletProducts; i++) {
  //     contentText += '<div class="product-content on-product"><img class="content-image on-product"src="img/sengon.jpg" alt=""><h1 class="name on-product">Kemitraan Bibit Sengon</h1><hr><p class="address on-product">Lahan Kelompok Tani</p><p class="price on-product">Harga : <span class="go-right">Rp 4.000.0000</span></p><p class="advantages on-product">Keuntungan : <span class="go-right">17% per tahun</span></p><button class="more-button on-product">Selengkapnya</button></div>'
  //   }
  //   return contentText;
  // }
  // function showProductsTablet2() {
  //   let contentText = "";
  //   for (let i = 0; i < 2; i++) {
  //     contentText += '<div class="product-content on-product"><img class="content-image on-product"src="img/sengon.jpg" alt=""><h1 class="name on-product">Kemitraan Bibit Sengon</h1><hr><p class="address on-product">Lahan Kelompok Tani</p><p class="price on-product">Harga : <span class="go-right">Rp 4.000.0000</span></p><p class="advantages on-product">Keuntungan : <span class="go-right">17% per tahun</span></p><button class="more-button on-product">Selengkapnya</button></div>'
  //   }
  //   return contentText;
  // }
  // function showProductsDesktop() {
  //   let contentText = "";
  //   for (let i = 0; i < webProducts; i++) {
  //     contentText += '<div class="product-content on-product"><img class="content-image on-product"src="img/sengon.jpg" alt=""><h1 class="name on-product">Kemitraan Bibit Sengon</h1><hr><p class="address on-product">Lahan Kelompok Tani</p><p class="price on-product">Harga : <span class="go-right">Rp 4.000.0000</span></p><p class="advantages on-product">Keuntungan : <span class="go-right">17% per tahun</span></p><button class="more-button on-product">Selengkapnya</button></div>'
  //   }
  //   return contentText;
  // }

  // function initiateProduct() {
  //   let width = $('body').outerWidth();
  //   if ( width > 900 ) {
  //     $('.product-body .cp').html(showProductsDesktop());
  //     $('.jumbotron-full').css('z-index', '1');
  //     menu.css('height', 'inherit');
  //   } else if ( width > 550 ) {
  //     $('.product-body .cp').html(showProductsTablet());
  //     $('.jumbotron-full').css('z-index', '1');
  //     menu.css('height', '0px');
  //   } else if ( width > 400) {
  //     $('.product-body .cp').html(showProductsTablet2());
  //     $('.jumbotron-full').css('z-index', '1');
  //     menu.css('height', '0px');
  //   }  else {
  //     $('.product-body .cp').html(showProductsMobile());
  //     $('.jumbotron-full').css('z-index', '1');
  //     menu.css('height', '0px');
  //   }
  // }


  function getWidthSize() {

    let width = $('body').outerWidth();
    console.log(width);
    if (width > 900) {
      $('.jumbotron-full').css('z-index', '1');
      menu.css('height', 'inherit');
    } else if (width > 550) {
      $('.jumbotron-full').css('z-index', '1');
      menu.css('height', '0px');
    } else if (width > 400) {
      $('.jumbotron-full').css('z-index', '1');
      menu.css('height', '0px');
    } else {
      $('.jumbotron-full').css('z-index', '1');
      menu.css('height', '0px');
    }

  }

  $(window).resize(function () {
    getWidthSize();
  });



  bMenu.on('click', function () {

    if (menu.css('height') === '0px') {
      $('.jumbotron-full').css('z-index', '-1');
      menu.css('height', '275px');
    } else {
      setTimeout(function () {
        $('.jumbotron-full').css('z-index', '1');
      }, 1000);
      menu.css('height', '0px');
    }

  });


  let page = 1;

  function check() {

    if (page > 2) {
      page = 1;
    } else {
      page = 2;
    }

  }

  function clickNext() {
    page += 1;
    check();
    if (page === 1) {
      $('.jumbotron-interest p').html('Temukan Bisnis Tanaman Disini Dengan Pembiayaan yang Menguntungkan Dan Berdampak bagi Pertumbuhan Ekonomi Lokal');
      $('.jumbotron-interest button').css('opacity', '1');
    } else {
      $('.jumbotron-interest p').html('"Akses <strong>Kapanpun</strong> dan <strong>Dimanapun</strong>"');
      $('.jumbotron-interest button').css('opacity', '0');
    }
    $('.this-image').attr('src', 'img/mg' + page + '.png');
    $('.jumbotron-full').css('background-image', 'url(img/bg' + page + '.jpg)');
    $('.jumbotron-full').css('animation', 'bgChange' + page + ' 1s ease forwards');

  }

  $('.login-form').css('z-index', '-20');
  $('.login-form').css('opacity', '0');

  $('.register').on('click', function (e) {
    if ($('.login-form').css('z-index', '-20') && $('.login-form').css('opacity', '0')) {
      $('.login-form').css('z-index', '100');
      $('.login-form').css('opacity', '1');
      e.preventDefault();
    }
  });

  $('.close').on('click', function () {
    $('.login-form').css('z-index', '-20');
    $('.login-form').css('opacity', '0');
  });

  $('#next1').on('click', clickNext);

  $('#next2').on('click', clickNext);


  // setInterval(function() { clickNext();  }, 3000);


  $('.select-desc').on('click', function () {
    $('.select-desc').addClass('row-select-active');
    $('.select-advantages').removeClass('row-select-active');
    $('.corp-body-detail').html('<p>Bibit Sengon adalah komoditas penting untuk Indonesia. Industri pakan ternak merupakan salah satu konsumen terbesar jagung nasional dengan tingkat kebutuhan sekitar 12 juta ton per tahun dan akan  terus meningkat. Untuk mencukupi kebutuhan tersebut, kita membutuhkan benih jagung sekitar 60,000 ton,dimana saat ini produksi benih jagung nasional baru berada di kisaran 30,000 ton per tahun. Sebagian besarnya masih diproduksi oleh perusahaan global produsen benih. <br>Oleh karena itu masih sangat besar ruang bagi produsen lokal untuk masuk. Terlebih sudah ada bibit jagung berkualitas dari beberapa Balai Penelitian Serelia milik Indonesia. Program kemitraan penangkaran bibit jagung yang akan dilakukan oleh Kelompok Tani Subur di Sanankerto Malang ini akan memberdayakan sekitar 30 orang lebih petani jagung dengan luas garapan 40 hektar.</p>');
  });

  $('.select-advantages').on('click', function () {
    $('.select-advantages').addClass('row-select-active');
    $('.select-desc').removeClass('row-select-active');
    $('.corp-body-detail').html('<div class="table-advan"><div class="row-table-advan"><div class="th-table-advan">Tahun Ke</div><div class="th-table-advan">Hasil Bagi Bersih</div></div><div class="row-table-advan gray"><div class="td-table-advan">1</div><div class="td-table-advan">Rp. 720.000</div></div><div class="row-table-advan "><div class="td-table-advan">2</div><div class="td-table-advan">Rp. 720.000</div></div><div class="row-table-advan gray"><div class="td-table-advan">3</div><div class="td-table-advan">Rp. 720.000</div></div><div class="row-table-advan "><div class="td-table-advan" >Pengembalian Modal</div><div class="td-table-advan">Rp. 4.000.000</div></div><div class="row-table-advan gray"><div class="td-table-advan">Total</div><div class="td-table-advan">Rp. 6.160.000</div></div></div>');

  });

});



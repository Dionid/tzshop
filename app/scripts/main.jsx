(function(){
    // class Navbar {
    //     constructor(){
    //         this.opened_el$;
    //         this.closeTimer;
    //     }
    //
    //     closeInnerCatalog(){
    //         if(this.opened_el$) this.opened_el$.removeClass('show');
    //     }
    // }
    //
    // var navbar = new Navbar();
    //
    // $('.navbar_inner-catalog-toggle').mouseenter(function(e){
    //     navbar.closeInnerCatalog();
    //     if(navbar.closeTimer) clearTimeout(navbar.closeTimer);
    //     navbar.opened_el$ = $(this).closest('.navbar_inner-catalog-wr').find('.navbar_inner-catalog').addClass('show');
    // });
    //
    // $('body').on('mouseleave','.navbar_inner-catalog-toggle', function(){
    //     if(navbar.closeTimer) clearTimeout(navbar.closeTimer);
    //     navbar.closeTimer = setTimeout(function(){
    //         navbar.closeInnerCatalog();
    //     }, 200)
    // });

    $('.aditional-info-toggle').hover(function(){
        $(this).closest('.aditional-info-wr').addClass('card__product__editional-info-opened');
    }, function(){
        $(this).closest('.aditional-info-wr').removeClass('card__product__editional-info-opened');
    });

    var Card__Product__theme__ya = React.createClass({
        render: function(){
            return(
                <div className="product-list_item">
                    <div className="card card__product card__product__theme__ya aditional-info-wr">
                        <div className="card_img-wr">
                            <img className="card_img" src="http://images3.nike.com/is/image/DotCom/PDP_HERO/Nike-Air-Max-Thea-Womens-Shoe-599409_007_C_PREM.jpg" alt="" />
                        </div>
                        <div className="card_desc-wr">
                            <p className="card_category">
                                Кроссовки \ AirMax
                            </p>
                            <a href="" className="card_title">
                                Heys - Vintage Traveler, чемодан пластиковый на 4 колесах
                            </a>
                            <p className="card_price">
                                Цена: 10 000 руб.
                            </p>
                        </div>
                        <div className="card_footer">
                            <button className="btn btn-default" type="button" name="button"><span className="glyphicon glyphicon-shopping-cart"></span></button>
                            <button className="btn btn-default" type="button" name="button"><span className="glyphicon glyphicon-heart"></span></button>
                        </div>
                        <div className="card_additional-info">

                        </div>
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render(<Card__Product__theme__ya />, document.getElementById('cards__product__theme__nike'))


})()

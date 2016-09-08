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

    var Navbar__Catalog_Columns = React.createClass({
        render: function(){
            return(
                <div className="navbar_columns">
                        <div className="navbar_column">
                            <a href="#" className="navbar_column-title">Категории</a>
                            {this.props.categories.map((cat,i)=>{
                                return <a key={i} href="#" className="navbar_column-link">{cat.title}</a>
                            })}
                        </div>
                        <div className="navbar_column">
                            <a href="#" className="navbar_column-title">Бренды</a>
                            {this.props.brands.map((cat,i)=>{
                                return <a key={i} href="#" className="navbar_column-link">{cat.title}</a>
                            })}
                        </div>
                </div>
            );
        }
    });

    var Navbar__Catalog_Item = React.createClass({

        timeout: 0,

        getInitialState: function(){
            return {
                mouseEntered: false
            }
        },

        categoryHovered: function(e){
            this.props.newItemActivated(this);
            clearTimeout(this.timeout);
            this.setState({
                mouseEntered: true
            })
        },

        categoryMouseLeave: function(){
            this.timeout = setTimeout(()=> {
                this.hideCategory();
            },100)
        },

        hideCategory: function(){
            this.setState({
                mouseEntered: false
            })
        },

        componentDidMount(){
            if(this.props.activeItem && this.props.activeItem !== this) this.hideCategory();
        },

        render: function(){
            var wrClasses = "navbar_inner-catalog";
            if(this.state.mouseEntered && this.props.activeItem === this) wrClasses += " show"

            return (
                <li onMouseLeave={this.categoryMouseLeave} className="navbar_inner-catalog-wr navbar_inner-catalog-toggle">
                    <a onMouseEnter={this.categoryHovered} href="#">{this.props.categoryData.title}</a>
                    <div className={wrClasses}>
                        <div className="content content__p-s-15">
                            <h2 className="navbar_main-title">{this.props.categoryData.subtitle}</h2>
                            <Navbar__Catalog_Columns brands={this.props.categoryData.brands} categories={this.props.categoryData.categories} />
                        </div>
                    </div>
                </li>
            );
        }
    })

    var NavBar__Catalog = React.createClass({

        getInitialState: function(){
            return {
                itemHovered: false,
                categories: [{
                    title: "Для мужчин 2",
                    subtitle: "Мужская одежда",
                    categories: [
                        {
                            title: "Пиджаки",
                            id: "123"
                        },
                        {
                            title: "Сорочки",
                            id: "123"
                        },
                        {
                            title: "Туфли",
                            id: "123"
                        }
                    ],
                    brands: [
                        {
                            title: "Kevin Kleine",
                            id:234
                        }
                    ]
                },
                {
                    title: "Для женщин",
                    subtitle: "Женская одежда",
                    categories: [
                        {
                            title: "Туфли",
                            id: "123"
                        },
                        {
                            title: "Сумочка",
                            id: "123"
                        }
                    ],
                    brands: [
                        {
                            title: "Labuten",
                            id:234
                        }
                    ]
                }]
            }
        },

        newItemActivated: function(item){
            this.setState({
                itemHovered: item
            })
        },

        render: function(){
            return(
                <div className="content">
                    <div className="navbar-nav navbar-left navbar navbar__with-inner-catalog">
                        <ul className="nav navbar-nav">
                            {this.state.categories.map((categoryData,i)=>{
                                return <Navbar__Catalog_Item key={i} categoryData={categoryData} activeItem={this.state.itemHovered} newItemActivated={this.newItemActivated} />
                            })}

                            {/* <Navbar__Catalog_Item data={this.state.category} activeItem={this.state.itemHovered} newItemActivated={this.newItemActivated} /> */}
                            {/* <Navbar__Catalog_Item data={this.state.category} activeItem={this.state.itemHovered} newItemActivated={this.newItemActivated} />
                            <Navbar__Catalog_Item data={this.state.category} activeItem={this.state.itemHovered} newItemActivated={this.newItemActivated} />
                            <Navbar__Catalog_Item data={this.state.category} activeItem={this.state.itemHovered} newItemActivated={this.newItemActivated} /> */}
                        </ul>
                    </div>
                    <form className="navbar-form navbar-right">
                        <div className="input-group input-group__flat">
                            <input type="text" className="form-control" placeholder="Найти товары" />
                        <div className="input-group-btn">
                                <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    });

    ReactDOM.render(<NavBar__Catalog />, document.getElementById('navbar-catalog'));

    var Navbar__logo = React.createClass({
        render: function(){
            return(
                <div className="navbar navbar__logo">
                  <div className="content">
                      <div className="navbar-header">
                        <a className="navbar-brand" href="#">Интернет-магазин</a>
                      </div>
                      <ul  className="nav navbar-nav navbar-right">
                          <li>
                              <a href="#"><span className="glyphicon glyphicon-shopping-cart"></span> Корзина (10 товаров)</a>
                          </li>
                      </ul>
                  </div>
                </div>
            );
        }
    });

    ReactDOM.render(<Navbar__logo />, document.getElementById('navbar_logo'))

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

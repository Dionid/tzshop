(function(){

    var Navbar__logo = React.createClass({
        render: function(){
            return(
                <div className="navbar navbar__logo">
                  <div className="content">
                      <div className="navbar-header">
                        <a className="navbar-brand" href="#">Three Zeta <span style={{color:"rgb(255, 157, 0)"}}>Shop</span>    </a>
                      </div>
                      <ul  className="nav navbar-nav navbar-right">
                          <li>
                              <a href="#"><span style={{color:'#f24242'}} className="glyphicon glyphicon-heart"></span>&nbsp; Избранное</a>
                          </li>
                          <li>
                              <a href="#"><span style={{color:"rgb(255, 157, 0)"}} className="glyphicon glyphicon-shopping-cart"></span>&nbsp; Корзина ( 8 т. / 24 000 руб. )</a>
                          </li>
                      </ul>
                  </div>
                </div>
            );
        }
    });

    ReactDOM.render(<Navbar__logo />, document.getElementById('navbar_logo'))


    // NAVBAR CATALOG

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
    });

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
                        <div className="input-group input-group__ya">
                            <input type="text" className="form-control" placeholder="Название товара" />
                            <div className="input-group-btn">
                                <button type="submit" className="btn btn-primary">Найти <span className="glyphicon glyphicon-search"></span></button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    });

    ReactDOM.render(<NavBar__Catalog />, document.getElementById('navbar-catalog'));
})()

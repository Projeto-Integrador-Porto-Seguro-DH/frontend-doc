'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2126e075c21380ee1f07362aae7c106fbdbab9c2995f54a5126897ba0f4a36f71f6f4ba10d7f703c6950666ca6a68181c8c6432d0547dd387048858a5f7b2038"' : 'data-target="#xs-components-links-module-AppModule-2126e075c21380ee1f07362aae7c106fbdbab9c2995f54a5126897ba0f4a36f71f6f4ba10d7f703c6950666ca6a68181c8c6432d0547dd387048858a5f7b2038"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2126e075c21380ee1f07362aae7c106fbdbab9c2995f54a5126897ba0f4a36f71f6f4ba10d7f703c6950666ca6a68181c8c6432d0547dd387048858a5f7b2038"' :
                                            'id="xs-components-links-module-AppModule-2126e075c21380ee1f07362aae7c106fbdbab9c2995f54a5126897ba0f4a36f71f6f4ba10d7f703c6950666ca6a68181c8c6432d0547dd387048858a5f7b2038"' }>
                                            <li class="link">
                                                <a href="components/AdmProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdmProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BackToTopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackToTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartEmptyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartEmptyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryCrudComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryCrudComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryReadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryReadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckoutProcessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckoutProcessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComponentCategoriasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComponentCategoriasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NossaHistoriaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NossaHistoriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductCrudComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductCrudComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductReadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductReadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileAdmTabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileAdmTabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileTabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileTabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PurchaseHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PurchaseHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuantityInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuantityInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SigninComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SigninComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SigninFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SigninFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SigninPasswordRulesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SigninPasswordRulesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserPersonalInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPersonalInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-2126e075c21380ee1f07362aae7c106fbdbab9c2995f54a5126897ba0f4a36f71f6f4ba10d7f703c6950666ca6a68181c8c6432d0547dd387048858a5f7b2038"' : 'data-target="#xs-pipes-links-module-AppModule-2126e075c21380ee1f07362aae7c106fbdbab9c2995f54a5126897ba0f4a36f71f6f4ba10d7f703c6950666ca6a68181c8c6432d0547dd387048858a5f7b2038"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-2126e075c21380ee1f07362aae7c106fbdbab9c2995f54a5126897ba0f4a36f71f6f4ba10d7f703c6950666ca6a68181c8c6432d0547dd387048858a5f7b2038"' :
                                            'id="xs-pipes-links-module-AppModule-2126e075c21380ee1f07362aae7c106fbdbab9c2995f54a5126897ba0f4a36f71f6f4ba10d7f703c6950666ca6a68181c8c6432d0547dd387048858a5f7b2038"' }>
                                            <li class="link">
                                                <a href="pipes/BooleanPipePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooleanPipePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PhonePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhonePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CategorySidebarComponent.html" data-type="entity-link" >CategorySidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductDeleteComponent.html" data-type="entity-link" >ProductDeleteComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Categoria.html" data-type="entity-link" >Categoria</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryReadDataSource.html" data-type="entity-link" >CategoryReadDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/DetalhePedido.html" data-type="entity-link" >DetalhePedido</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pedido.html" data-type="entity-link" >Pedido</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductReadDataSource.html" data-type="entity-link" >ProductReadDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/Produto.html" data-type="entity-link" >Produto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCadastro.html" data-type="entity-link" >UserCadastro</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogin.html" data-type="entity-link" >UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link" >LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PedidoService.html" data-type="entity-link" >PedidoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/BasicAuthInterceptor.html" data-type="entity-link" >BasicAuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
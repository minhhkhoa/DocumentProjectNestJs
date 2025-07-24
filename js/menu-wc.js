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
                    <a href="index.html" data-type="index-link">backend_nest-js documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-9c1961d6f6ba847221abbdb1af5e3897dbd2aaefc2857321cf15b76aa3f9d68239911c36cdd099de17d7c52c23b494f83c39fc7d794f87e8a828c6b5c2595066"' : 'data-bs-target="#xs-controllers-links-module-AppModule-9c1961d6f6ba847221abbdb1af5e3897dbd2aaefc2857321cf15b76aa3f9d68239911c36cdd099de17d7c52c23b494f83c39fc7d794f87e8a828c6b5c2595066"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9c1961d6f6ba847221abbdb1af5e3897dbd2aaefc2857321cf15b76aa3f9d68239911c36cdd099de17d7c52c23b494f83c39fc7d794f87e8a828c6b5c2595066"' :
                                            'id="xs-controllers-links-module-AppModule-9c1961d6f6ba847221abbdb1af5e3897dbd2aaefc2857321cf15b76aa3f9d68239911c36cdd099de17d7c52c23b494f83c39fc7d794f87e8a828c6b5c2595066"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-9c1961d6f6ba847221abbdb1af5e3897dbd2aaefc2857321cf15b76aa3f9d68239911c36cdd099de17d7c52c23b494f83c39fc7d794f87e8a828c6b5c2595066"' : 'data-bs-target="#xs-injectables-links-module-AppModule-9c1961d6f6ba847221abbdb1af5e3897dbd2aaefc2857321cf15b76aa3f9d68239911c36cdd099de17d7c52c23b494f83c39fc7d794f87e8a828c6b5c2595066"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9c1961d6f6ba847221abbdb1af5e3897dbd2aaefc2857321cf15b76aa3f9d68239911c36cdd099de17d7c52c23b494f83c39fc7d794f87e8a828c6b5c2595066"' :
                                        'id="xs-injectables-links-module-AppModule-9c1961d6f6ba847221abbdb1af5e3897dbd2aaefc2857321cf15b76aa3f9d68239911c36cdd099de17d7c52c23b494f83c39fc7d794f87e8a828c6b5c2595066"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-5da0c32c976803b6648980e5c2e9bc8d310543418e1086c4dfd173e98400121be857efe9daa5b2f9a18178b74a18d04d4ff285f5b177cd9992c08243e4f5c630"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-5da0c32c976803b6648980e5c2e9bc8d310543418e1086c4dfd173e98400121be857efe9daa5b2f9a18178b74a18d04d4ff285f5b177cd9992c08243e4f5c630"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5da0c32c976803b6648980e5c2e9bc8d310543418e1086c4dfd173e98400121be857efe9daa5b2f9a18178b74a18d04d4ff285f5b177cd9992c08243e4f5c630"' :
                                            'id="xs-controllers-links-module-AuthModule-5da0c32c976803b6648980e5c2e9bc8d310543418e1086c4dfd173e98400121be857efe9daa5b2f9a18178b74a18d04d4ff285f5b177cd9992c08243e4f5c630"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-5da0c32c976803b6648980e5c2e9bc8d310543418e1086c4dfd173e98400121be857efe9daa5b2f9a18178b74a18d04d4ff285f5b177cd9992c08243e4f5c630"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-5da0c32c976803b6648980e5c2e9bc8d310543418e1086c4dfd173e98400121be857efe9daa5b2f9a18178b74a18d04d4ff285f5b177cd9992c08243e4f5c630"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5da0c32c976803b6648980e5c2e9bc8d310543418e1086c4dfd173e98400121be857efe9daa5b2f9a18178b74a18d04d4ff285f5b177cd9992c08243e4f5c630"' :
                                        'id="xs-injectables-links-module-AuthModule-5da0c32c976803b6648980e5c2e9bc8d310543418e1086c4dfd173e98400121be857efe9daa5b2f9a18178b74a18d04d4ff285f5b177cd9992c08243e4f5c630"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CloudinaryModule.html" data-type="entity-link" >CloudinaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CloudinaryModule-5b6e9c8043b404e4281cf38f44084e485eae9a0d45051a8cf261a1db6410dd434be3ca64b26e78f2252bdff7d9bf5cc791c258bbf7eef30e6993e801256a09f9"' : 'data-bs-target="#xs-controllers-links-module-CloudinaryModule-5b6e9c8043b404e4281cf38f44084e485eae9a0d45051a8cf261a1db6410dd434be3ca64b26e78f2252bdff7d9bf5cc791c258bbf7eef30e6993e801256a09f9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CloudinaryModule-5b6e9c8043b404e4281cf38f44084e485eae9a0d45051a8cf261a1db6410dd434be3ca64b26e78f2252bdff7d9bf5cc791c258bbf7eef30e6993e801256a09f9"' :
                                            'id="xs-controllers-links-module-CloudinaryModule-5b6e9c8043b404e4281cf38f44084e485eae9a0d45051a8cf261a1db6410dd434be3ca64b26e78f2252bdff7d9bf5cc791c258bbf7eef30e6993e801256a09f9"' }>
                                            <li class="link">
                                                <a href="controllers/CloudinaryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CloudinaryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CloudinaryModule-5b6e9c8043b404e4281cf38f44084e485eae9a0d45051a8cf261a1db6410dd434be3ca64b26e78f2252bdff7d9bf5cc791c258bbf7eef30e6993e801256a09f9"' : 'data-bs-target="#xs-injectables-links-module-CloudinaryModule-5b6e9c8043b404e4281cf38f44084e485eae9a0d45051a8cf261a1db6410dd434be3ca64b26e78f2252bdff7d9bf5cc791c258bbf7eef30e6993e801256a09f9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CloudinaryModule-5b6e9c8043b404e4281cf38f44084e485eae9a0d45051a8cf261a1db6410dd434be3ca64b26e78f2252bdff7d9bf5cc791c258bbf7eef30e6993e801256a09f9"' :
                                        'id="xs-injectables-links-module-CloudinaryModule-5b6e9c8043b404e4281cf38f44084e485eae9a0d45051a8cf261a1db6410dd434be3ca64b26e78f2252bdff7d9bf5cc791c258bbf7eef30e6993e801256a09f9"' }>
                                        <li class="link">
                                            <a href="injectables/CloudinaryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CloudinaryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-19bf59ba95e30f02d8c508b97f213d433fcf905df55f3340d7049b9a245c12fbe356f969ae30ea2d2d546e24bb206fe2be11b74360e4b9da81cbaa97a4eef776"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-19bf59ba95e30f02d8c508b97f213d433fcf905df55f3340d7049b9a245c12fbe356f969ae30ea2d2d546e24bb206fe2be11b74360e4b9da81cbaa97a4eef776"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-19bf59ba95e30f02d8c508b97f213d433fcf905df55f3340d7049b9a245c12fbe356f969ae30ea2d2d546e24bb206fe2be11b74360e4b9da81cbaa97a4eef776"' :
                                            'id="xs-controllers-links-module-CompaniesModule-19bf59ba95e30f02d8c508b97f213d433fcf905df55f3340d7049b9a245c12fbe356f969ae30ea2d2d546e24bb206fe2be11b74360e4b9da81cbaa97a4eef776"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-19bf59ba95e30f02d8c508b97f213d433fcf905df55f3340d7049b9a245c12fbe356f969ae30ea2d2d546e24bb206fe2be11b74360e4b9da81cbaa97a4eef776"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-19bf59ba95e30f02d8c508b97f213d433fcf905df55f3340d7049b9a245c12fbe356f969ae30ea2d2d546e24bb206fe2be11b74360e4b9da81cbaa97a4eef776"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-19bf59ba95e30f02d8c508b97f213d433fcf905df55f3340d7049b9a245c12fbe356f969ae30ea2d2d546e24bb206fe2be11b74360e4b9da81cbaa97a4eef776"' :
                                        'id="xs-injectables-links-module-CompaniesModule-19bf59ba95e30f02d8c508b97f213d433fcf905df55f3340d7049b9a245c12fbe356f969ae30ea2d2d546e24bb206fe2be11b74360e4b9da81cbaa97a4eef776"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-deda1656159cf3c806f5b4c4c515659bb68344bee02cdd4aed49f7407437a09cd8b35ced495b91d8927f51b5db868a5cadf0076d6dae2bbb075b852476d5040d"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-deda1656159cf3c806f5b4c4c515659bb68344bee02cdd4aed49f7407437a09cd8b35ced495b91d8927f51b5db868a5cadf0076d6dae2bbb075b852476d5040d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-deda1656159cf3c806f5b4c4c515659bb68344bee02cdd4aed49f7407437a09cd8b35ced495b91d8927f51b5db868a5cadf0076d6dae2bbb075b852476d5040d"' :
                                            'id="xs-controllers-links-module-DatabasesModule-deda1656159cf3c806f5b4c4c515659bb68344bee02cdd4aed49f7407437a09cd8b35ced495b91d8927f51b5db868a5cadf0076d6dae2bbb075b852476d5040d"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-deda1656159cf3c806f5b4c4c515659bb68344bee02cdd4aed49f7407437a09cd8b35ced495b91d8927f51b5db868a5cadf0076d6dae2bbb075b852476d5040d"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-deda1656159cf3c806f5b4c4c515659bb68344bee02cdd4aed49f7407437a09cd8b35ced495b91d8927f51b5db868a5cadf0076d6dae2bbb075b852476d5040d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-deda1656159cf3c806f5b4c4c515659bb68344bee02cdd4aed49f7407437a09cd8b35ced495b91d8927f51b5db868a5cadf0076d6dae2bbb075b852476d5040d"' :
                                        'id="xs-injectables-links-module-DatabasesModule-deda1656159cf3c806f5b4c4c515659bb68344bee02cdd4aed49f7407437a09cd8b35ced495b91d8927f51b5db868a5cadf0076d6dae2bbb075b852476d5040d"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' :
                                            'id="xs-controllers-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' :
                                        'id="xs-injectables-links-module-FilesModule-151232b12a0dea79449612728b380f0ad569d98297e87bcfacbde172f9cfb30c7c77ce54a16c57939d46b34ecefe4103cf7b68fa7babf6ec5338934a031d2864"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-6f5fb8f314b951bc65e26368c040298af6598e61d0622cb99c92e2d5f129f3546a207d38f5e4a0e6ce488f71e59262da78165b11b95a875dc4d56c7f5962bad1"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-6f5fb8f314b951bc65e26368c040298af6598e61d0622cb99c92e2d5f129f3546a207d38f5e4a0e6ce488f71e59262da78165b11b95a875dc4d56c7f5962bad1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-6f5fb8f314b951bc65e26368c040298af6598e61d0622cb99c92e2d5f129f3546a207d38f5e4a0e6ce488f71e59262da78165b11b95a875dc4d56c7f5962bad1"' :
                                            'id="xs-controllers-links-module-HealthModule-6f5fb8f314b951bc65e26368c040298af6598e61d0622cb99c92e2d5f129f3546a207d38f5e4a0e6ce488f71e59262da78165b11b95a875dc4d56c7f5962bad1"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-6b719c6372aaea3d6ba2b291e56f4d3da17852f1cb4bdc9a8990beb040bb21d5392cc9f5be7eb7d6bb55725f996011350e34f623644a7af3cfef6e5668a100e2"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-6b719c6372aaea3d6ba2b291e56f4d3da17852f1cb4bdc9a8990beb040bb21d5392cc9f5be7eb7d6bb55725f996011350e34f623644a7af3cfef6e5668a100e2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-6b719c6372aaea3d6ba2b291e56f4d3da17852f1cb4bdc9a8990beb040bb21d5392cc9f5be7eb7d6bb55725f996011350e34f623644a7af3cfef6e5668a100e2"' :
                                            'id="xs-controllers-links-module-JobsModule-6b719c6372aaea3d6ba2b291e56f4d3da17852f1cb4bdc9a8990beb040bb21d5392cc9f5be7eb7d6bb55725f996011350e34f623644a7af3cfef6e5668a100e2"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-6b719c6372aaea3d6ba2b291e56f4d3da17852f1cb4bdc9a8990beb040bb21d5392cc9f5be7eb7d6bb55725f996011350e34f623644a7af3cfef6e5668a100e2"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-6b719c6372aaea3d6ba2b291e56f4d3da17852f1cb4bdc9a8990beb040bb21d5392cc9f5be7eb7d6bb55725f996011350e34f623644a7af3cfef6e5668a100e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-6b719c6372aaea3d6ba2b291e56f4d3da17852f1cb4bdc9a8990beb040bb21d5392cc9f5be7eb7d6bb55725f996011350e34f623644a7af3cfef6e5668a100e2"' :
                                        'id="xs-injectables-links-module-JobsModule-6b719c6372aaea3d6ba2b291e56f4d3da17852f1cb4bdc9a8990beb040bb21d5392cc9f5be7eb7d6bb55725f996011350e34f623644a7af3cfef6e5668a100e2"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-4eb9615e1590e0d3cb04ea9afa572eb50688be6af76d86377147ae94e1d13070478dbe36640c87213cd734b1ffb050e14d4afdcd4b7c18ba90800b7b5dceb45c"' : 'data-bs-target="#xs-controllers-links-module-MailModule-4eb9615e1590e0d3cb04ea9afa572eb50688be6af76d86377147ae94e1d13070478dbe36640c87213cd734b1ffb050e14d4afdcd4b7c18ba90800b7b5dceb45c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-4eb9615e1590e0d3cb04ea9afa572eb50688be6af76d86377147ae94e1d13070478dbe36640c87213cd734b1ffb050e14d4afdcd4b7c18ba90800b7b5dceb45c"' :
                                            'id="xs-controllers-links-module-MailModule-4eb9615e1590e0d3cb04ea9afa572eb50688be6af76d86377147ae94e1d13070478dbe36640c87213cd734b1ffb050e14d4afdcd4b7c18ba90800b7b5dceb45c"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-4eb9615e1590e0d3cb04ea9afa572eb50688be6af76d86377147ae94e1d13070478dbe36640c87213cd734b1ffb050e14d4afdcd4b7c18ba90800b7b5dceb45c"' : 'data-bs-target="#xs-injectables-links-module-MailModule-4eb9615e1590e0d3cb04ea9afa572eb50688be6af76d86377147ae94e1d13070478dbe36640c87213cd734b1ffb050e14d4afdcd4b7c18ba90800b7b5dceb45c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-4eb9615e1590e0d3cb04ea9afa572eb50688be6af76d86377147ae94e1d13070478dbe36640c87213cd734b1ffb050e14d4afdcd4b7c18ba90800b7b5dceb45c"' :
                                        'id="xs-injectables-links-module-MailModule-4eb9615e1590e0d3cb04ea9afa572eb50688be6af76d86377147ae94e1d13070478dbe36640c87213cd734b1ffb050e14d4afdcd4b7c18ba90800b7b5dceb45c"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-f30368382628b737baf50ae090babcf11e6fba439e84d528f4bc9fc379137ee93ecce8d340b2621fde3a130437b9a0684bf3f9346851b6e6002bb523c18f18a8"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-f30368382628b737baf50ae090babcf11e6fba439e84d528f4bc9fc379137ee93ecce8d340b2621fde3a130437b9a0684bf3f9346851b6e6002bb523c18f18a8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-f30368382628b737baf50ae090babcf11e6fba439e84d528f4bc9fc379137ee93ecce8d340b2621fde3a130437b9a0684bf3f9346851b6e6002bb523c18f18a8"' :
                                            'id="xs-controllers-links-module-PermissionsModule-f30368382628b737baf50ae090babcf11e6fba439e84d528f4bc9fc379137ee93ecce8d340b2621fde3a130437b9a0684bf3f9346851b6e6002bb523c18f18a8"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-f30368382628b737baf50ae090babcf11e6fba439e84d528f4bc9fc379137ee93ecce8d340b2621fde3a130437b9a0684bf3f9346851b6e6002bb523c18f18a8"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-f30368382628b737baf50ae090babcf11e6fba439e84d528f4bc9fc379137ee93ecce8d340b2621fde3a130437b9a0684bf3f9346851b6e6002bb523c18f18a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-f30368382628b737baf50ae090babcf11e6fba439e84d528f4bc9fc379137ee93ecce8d340b2621fde3a130437b9a0684bf3f9346851b6e6002bb523c18f18a8"' :
                                        'id="xs-injectables-links-module-PermissionsModule-f30368382628b737baf50ae090babcf11e6fba439e84d528f4bc9fc379137ee93ecce8d340b2621fde3a130437b9a0684bf3f9346851b6e6002bb523c18f18a8"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-0de2b5aaa14d8e9e8ebeaa4a11da667437b532928177ac62ae8984e4da5d87c34c7a02a6f81b546f09cfa43cec079a4bc34b9f79373d1ca77e7ee97e060fc112"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-0de2b5aaa14d8e9e8ebeaa4a11da667437b532928177ac62ae8984e4da5d87c34c7a02a6f81b546f09cfa43cec079a4bc34b9f79373d1ca77e7ee97e060fc112"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-0de2b5aaa14d8e9e8ebeaa4a11da667437b532928177ac62ae8984e4da5d87c34c7a02a6f81b546f09cfa43cec079a4bc34b9f79373d1ca77e7ee97e060fc112"' :
                                            'id="xs-controllers-links-module-ResumesModule-0de2b5aaa14d8e9e8ebeaa4a11da667437b532928177ac62ae8984e4da5d87c34c7a02a6f81b546f09cfa43cec079a4bc34b9f79373d1ca77e7ee97e060fc112"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-0de2b5aaa14d8e9e8ebeaa4a11da667437b532928177ac62ae8984e4da5d87c34c7a02a6f81b546f09cfa43cec079a4bc34b9f79373d1ca77e7ee97e060fc112"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-0de2b5aaa14d8e9e8ebeaa4a11da667437b532928177ac62ae8984e4da5d87c34c7a02a6f81b546f09cfa43cec079a4bc34b9f79373d1ca77e7ee97e060fc112"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-0de2b5aaa14d8e9e8ebeaa4a11da667437b532928177ac62ae8984e4da5d87c34c7a02a6f81b546f09cfa43cec079a4bc34b9f79373d1ca77e7ee97e060fc112"' :
                                        'id="xs-injectables-links-module-ResumesModule-0de2b5aaa14d8e9e8ebeaa4a11da667437b532928177ac62ae8984e4da5d87c34c7a02a6f81b546f09cfa43cec079a4bc34b9f79373d1ca77e7ee97e060fc112"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-3922ba9a347d7e1104ac518a406fb794248c8e5a5eb885a7ec0067c6e284be7f50a44e1d8583895f7f881ac97558fe9a3fdcc732f5782ce209ca6aacbd4296c2"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-3922ba9a347d7e1104ac518a406fb794248c8e5a5eb885a7ec0067c6e284be7f50a44e1d8583895f7f881ac97558fe9a3fdcc732f5782ce209ca6aacbd4296c2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-3922ba9a347d7e1104ac518a406fb794248c8e5a5eb885a7ec0067c6e284be7f50a44e1d8583895f7f881ac97558fe9a3fdcc732f5782ce209ca6aacbd4296c2"' :
                                            'id="xs-controllers-links-module-RolesModule-3922ba9a347d7e1104ac518a406fb794248c8e5a5eb885a7ec0067c6e284be7f50a44e1d8583895f7f881ac97558fe9a3fdcc732f5782ce209ca6aacbd4296c2"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-3922ba9a347d7e1104ac518a406fb794248c8e5a5eb885a7ec0067c6e284be7f50a44e1d8583895f7f881ac97558fe9a3fdcc732f5782ce209ca6aacbd4296c2"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-3922ba9a347d7e1104ac518a406fb794248c8e5a5eb885a7ec0067c6e284be7f50a44e1d8583895f7f881ac97558fe9a3fdcc732f5782ce209ca6aacbd4296c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-3922ba9a347d7e1104ac518a406fb794248c8e5a5eb885a7ec0067c6e284be7f50a44e1d8583895f7f881ac97558fe9a3fdcc732f5782ce209ca6aacbd4296c2"' :
                                        'id="xs-injectables-links-module-RolesModule-3922ba9a347d7e1104ac518a406fb794248c8e5a5eb885a7ec0067c6e284be7f50a44e1d8583895f7f881ac97558fe9a3fdcc732f5782ce209ca6aacbd4296c2"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-ca20da3d80c4443acaa0aafa3baf0142fdec5a4aa89d0adc12985d4e1ce333ed7b2fb93a1ea6618f537f5319aebce3d0765529e55e418fa42f43d96e431bcd5d"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-ca20da3d80c4443acaa0aafa3baf0142fdec5a4aa89d0adc12985d4e1ce333ed7b2fb93a1ea6618f537f5319aebce3d0765529e55e418fa42f43d96e431bcd5d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-ca20da3d80c4443acaa0aafa3baf0142fdec5a4aa89d0adc12985d4e1ce333ed7b2fb93a1ea6618f537f5319aebce3d0765529e55e418fa42f43d96e431bcd5d"' :
                                            'id="xs-controllers-links-module-SubscribersModule-ca20da3d80c4443acaa0aafa3baf0142fdec5a4aa89d0adc12985d4e1ce333ed7b2fb93a1ea6618f537f5319aebce3d0765529e55e418fa42f43d96e431bcd5d"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-ca20da3d80c4443acaa0aafa3baf0142fdec5a4aa89d0adc12985d4e1ce333ed7b2fb93a1ea6618f537f5319aebce3d0765529e55e418fa42f43d96e431bcd5d"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-ca20da3d80c4443acaa0aafa3baf0142fdec5a4aa89d0adc12985d4e1ce333ed7b2fb93a1ea6618f537f5319aebce3d0765529e55e418fa42f43d96e431bcd5d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-ca20da3d80c4443acaa0aafa3baf0142fdec5a4aa89d0adc12985d4e1ce333ed7b2fb93a1ea6618f537f5319aebce3d0765529e55e418fa42f43d96e431bcd5d"' :
                                        'id="xs-injectables-links-module-SubscribersModule-ca20da3d80c4443acaa0aafa3baf0142fdec5a4aa89d0adc12985d4e1ce333ed7b2fb93a1ea6618f537f5319aebce3d0765529e55e418fa42f43d96e431bcd5d"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-c1add5d0f1a76aaddbb6be1670da36af63f904319cf4ac64cbb720a5c18281d7b8e2f0c9382286a8ecd943742f504804b59151c0e96b71074a7306e54309f3a8"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-c1add5d0f1a76aaddbb6be1670da36af63f904319cf4ac64cbb720a5c18281d7b8e2f0c9382286a8ecd943742f504804b59151c0e96b71074a7306e54309f3a8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-c1add5d0f1a76aaddbb6be1670da36af63f904319cf4ac64cbb720a5c18281d7b8e2f0c9382286a8ecd943742f504804b59151c0e96b71074a7306e54309f3a8"' :
                                            'id="xs-controllers-links-module-UsersModule-c1add5d0f1a76aaddbb6be1670da36af63f904319cf4ac64cbb720a5c18281d7b8e2f0c9382286a8ecd943742f504804b59151c0e96b71074a7306e54309f3a8"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-c1add5d0f1a76aaddbb6be1670da36af63f904319cf4ac64cbb720a5c18281d7b8e2f0c9382286a8ecd943742f504804b59151c0e96b71074a7306e54309f3a8"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-c1add5d0f1a76aaddbb6be1670da36af63f904319cf4ac64cbb720a5c18281d7b8e2f0c9382286a8ecd943742f504804b59151c0e96b71074a7306e54309f3a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-c1add5d0f1a76aaddbb6be1670da36af63f904319cf4ac64cbb720a5c18281d7b8e2f0c9382286a8ecd943742f504804b59151c0e96b71074a7306e54309f3a8"' :
                                        'id="xs-injectables-links-module-UsersModule-c1add5d0f1a76aaddbb6be1670da36af63f904319cf4ac64cbb720a5c18281d7b8e2f0c9382286a8ecd943742f504804b59151c0e96b71074a7306e54309f3a8"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CloudinaryController.html" data-type="entity-link" >CloudinaryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BadRequestCustom.html" data-type="entity-link" >BadRequestCustom</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cloudinary.html" data-type="entity-link" >Cloudinary</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCloudinaryDto.html" data-type="entity-link" >CreateCloudinaryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCvDto.html" data-type="entity-link" >CreateUserCvDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsEndAfterStartConstraint.html" data-type="entity-link" >IsEndAfterStartConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCloudinaryDto.html" data-type="entity-link" >UpdateCloudinaryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CloudinaryService.html" data-type="entity-link" >CloudinaryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParseIntPipeCustom.html" data-type="entity-link" >ParseIntPipeCustom</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
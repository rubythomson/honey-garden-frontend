import { LitElement, html, css } from '@polymer/lit-element'
import {anchorRoute, gotoRoute} from './../Router'
import Auth from './../Auth'
import App from './../App'
import { useParam } from '../params'

customElements.define('va-app-header', class AppHeader extends LitElement {
  constructor(){
    super()
  }

  static get properties(){
    return {
      title: {
        type: String
      },
      user: {
        type: Object
      }
    }
  }

  firstUpdated(){
    super.firstUpdated()
    this.navActiveLinks()    
  }

  navActiveLinks(){	
    const currentPath = window.location.pathname
    const navLinks = this.shadowRoot.querySelectorAll('.app-top-nav a, .app-side-menu-items a')
    navLinks.forEach(navLink => {
      if(navLink.href.slice(-1) == '#') return
      if(navLink.pathname === currentPath){			
        navLink.classList.add('active')
      }
    })
  }

  hamburgerClick(){  
    const appMenu = this.shadowRoot.querySelector('.app-side-menu')
    appMenu.show()
  }
  
  menuClick(e){
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    const appSideMenu = this.shadowRoot.querySelector('.app-side-menu')
    // hide appMenu
    appSideMenu.hide()
    appSideMenu.addEventListener('sl-after-hide', () => {
      // goto route after menu is hidden
      gotoRoute(pathname)
    })
  }

  render(){    
    return html`
    <style>      
      * {
        box-sizing: border-box;
      }
      .app-header {
        background: var(--app-header-color);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: var(--app-header-height);
        color: #fff;
        display: flex;
        z-index: 9;
        box-shadow: 4px 0px 10px rgba(0,0,0,0.2);
        align-items: center;
      }
      
      .app-header-main {
        flex-grow: 1;
        display: flex;
        align-items: center;
      }

      .app-header-main::slotted(h1){
        color: #fff;
      }

      .app-logo a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2em;
        padding: .6em;
        display: inline-block;        
      }

      .app-logo img {
        width: 90px;
      }
      
      .hamburger-btn::part(base) {
        color: #fff;
      }

      .app-top-nav {
        display: flex;
        height: 100%;
        align-items: center;
      }

      .app-top-nav a {
        display: inline-block;
        padding: .8em;
        text-decoration: none;
        color: var(--app-header-txt-color);
      }

      .app-top-nav :hover{
        color: #FEC76C;
      }

      .app-top-nav-rose img :hover{ 
        filter: none;
        --wekbit-filter: #FEC76C;
      }
      
      .app-side-menu-items a {
        display: block;
        padding: .6em;
        text-decoration: none;
        font-size: 1.3em;
        color: #333;
        left: 1em;
        top: 2em;
      }

      .app-side-menu-logo {
        width: 90px;
        margin-bottom: 1em;
        position: absolute;
        left: .5em;
        top: .5em;
      }

      .app-side-menu-logo-1 {
        margin-top: 0.05em;
        height: 45px;
        margin-right: 0.5em;
        margin-left: 0.5em;
      }

      /* PAGE TITLES --------------------------------------------------------------------------------------------- */
      .page-title {
        color: var(--app-header-txt-color);
        margin-right: 0.5em;
        font-size: var(--app-header-title-font-size);
        }

      .outer {
        display: grid;
        grid-template: 1fr / 1fr;
        place-items: center;
        }

      .outer > * {
        grid-column: 1 / 1;
        grid-row: 1 /1;
      }

      .outer .bottom {
        z-index: 2;
      }

      .outer .top {
        z-index: 1;
      }

      /* active nav links --------------------------------------------------------------------------------------------- */
      .app-top-nav a.active,
      .app-side-menu-items a.active {
        font-weight: bold;
      }

      /* RESPONSIVE - MOBILE ------------------------------------------------------------------------------------------ */
      @media all and (max-width: 768px){       
        
        .app-top-nav {
          display: none;
        }
      }

    </style>

    <header class="app-header">       
      <div class="app-header-main">
        <div class="app-side-menu-logo-1" style="z-index: 1;">
          <a href="/" @click=${anchorRoute}>
            <img class="app-side-menu-logo-1" src="/images/honey-garden-logo.png" alt="honey-garden-logo-img">
          </a>
        </div>

        <div class="app-top-nav"> 
          <a href="/beehive" @click="${anchorRoute}">BeeHive</a>
          <a href="/search-grid" @click="${anchorRoute}">Search</a>
        </div> 

      </div>

      <nav class="app-top-nav">
        <a href="/library" @click="${anchorRoute}">Library</a> 
        <a href="/post" @click="${anchorRoute}">Manage</a> 

        ${this.user.accessLevel == 2 ? html`
        <a href="/adults" @click="${anchorRoute}">18+</a>
        ` : ''}

        <a href="/inbox" @click="${anchorRoute}">Messages</a> 

        <a href="/rose" @click="${anchorRoute}">
          <img src="/images/rose-flower.png" width="30" height="30" class="app-top-nav-rose">
        </a>
        
        <sl-dropdown>
          <a slot="trigger" href="#" @click="${(e) => e.preventDefault()}">
            <style>
              sl-avatar::part(image) {
                background-color: #FFFEF9;
              }
            </style>
            <sl-avatar style="--size: 34px; background-color: #FFFEF9" image=${(this.user && this.user.avatar) ? `${App.apiBase}/images/${this.user.avatar}` : ''}></sl-avatar>
          </a>
          <sl-menu>            
            <sl-menu-item @click="${() => gotoRoute('/profile')}">Profile</sl-menu-item>
            <sl-menu-item @click="${() => Auth.signOut()}">Sign Out</sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </nav>
    </header>
    `
  }
  
})
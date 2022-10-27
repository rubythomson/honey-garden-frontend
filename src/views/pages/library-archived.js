import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from './../../PoemAPI'
import Toast from '../../Toast'

class LibraryArchivedView {
  init(){
    document.title = 'Template'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1 class="library-title">Library</h1>

        <div class="library-filter">
        <a href="/library" style="text-decoration: none;">
            <div class="current-reads-btn">Current Reads</div>
          </a>
          <a href="/library-archived" style="text-decoration: none;">
            <div class="library-reading-list-btn">Archived</div>
          </a>
          <a href="/library-reading-lists" style="text-decoration: none;">
            <div class="current-reads-btn">Reading Lists</div>
          </a>
        </div>

        <div class="library-archived-container">
          <div>
            <img src="/images/serve-me.png" alt="bow-down-img" class="serve-me-img">
          </div>
          <div>
            <img src="/images/bow-down.png" alt="bow-down-img" class="serve-me-img">
          </div>
          <div>
            <img src="/images/boarding.png" alt="boarding-img" class="serve-me-img">
          </div>
          <div>
            <img src="/images/crowned.png" alt="crowned-img" class="serve-me-img">
          </div>
          <div>
            <img src="/images/queendom.png" alt="queendom-img" class="serve-me-img">
          </div>
          <div>
            <img src="/images/chase-me.png" alt="chase-me-img" class="serve-me-img">
          </div>
          <div>
            <img src="/images/forrest-fire.png" alt="forrest-fire-img" class="serve-me-img">
          </div>
          <div>
            <img src="/images/maid.png" alt="maid-img" class="serve-me-img">
          </div>
          <div>
            <img src="/images/happy.png" alt="happy-img" class="serve-me-img">
          </div>
          <div>
            <img src="/images/dreaming.png" alt="dreaming-img" class="serve-me-img">
          </div>
        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new LibraryArchivedView()
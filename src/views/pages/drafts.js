import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class DraftsView {
  init(){
    document.title = 'Drafts' 
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        
        <div class="draft-container">
          <div class="back-to-manage-container">
            <a href="/post" style="text-decoration: none;">
              <div class="back-to-manage">
                <img src="/images/arrow-left-icon.png" class="arrow-left-icon">  
                Back to Manage</div>
            </a>
          </div> 

          <div class="drafts-top-content-container">
            <div>
              <h1>Drafts</h1>
              <p>Drafts (1)</p>
            </div>
            <a href="/add">
              <div class="add-post-btn">
                <p class="add-post-text-btn">Create New</p>
              </div>
            </a>
          </div>

          <hr>
          <div class="drafts-img-text-container">
            <div class="the-way-love-lies-img">
              <img src="/images/the-way-love-lies.png" alt="the-way-love-lies-img" style="border-radius: 15px;">
            </div>
            <div class="drafts-text">
              <h3>The Way Love Lies</h3>
              <p>Chapter 13</p>
            </div>
            <div class="post-btn">
              <p class="post-btn-text">Post</p>
            </div>
          </div>
        </div> 
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new DraftsView()
import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from './../../PoemAPI'
import Toast from '../../Toast'

class LibraryReadingListsView {
  init(){
    document.title = 'Library Reading List'    
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
            <div class="current-reads-btn">Archived</div>
          </a>
          <a href="/library-reading-lists" style="text-decoration: none;">
            <div class="library-reading-list-btn">Reading Lists</div>
          </a>
        </div>

        <div class="library-reading-list-card">
          <sl-card class="card-basic">
            <div class="reading-list-content"> 
              <div class="reading-list-title">
                <h2>Modern Takes</h2>
                <style>
                  .vl {
                    border-left: 1px solid black;
                    height: 1.9vh;
                    position: absolute;
                    margin-left: 9.6em;
                  }
                </style>
                <div class="vl" style="height: 3.2vh;"></div>
                <div class="stories-text">
                  <h3>2 Stories</h3>
                </div>
                <div>
                  <img src="/images/arrow-left-icon.png" class="library-reading-list-arrow-icon" alt="library-reading-list-arrow-icon">
                </div>
              </div>
            </div>

            <div class="reading-list-imgs">
              <div class="sinking-ships-img">
                <img src="/images/the-way-love-lies.png" alt="the-way-love-lies-img" style="border-radius: 15px;">
              </div>
              <div class="kissing-clouds-img">
                <img src="/images/alices-head.png" alt="alices-head-img" style="border-radius: 15px;">
              </div>

              <div class="empty-reading-list-space"></div>
              <style>
                .empty-reading-list-space {
                  width: 135px;
                  height: 200px;
                  box-shadow:  0 0 4px lightgrey;
                  margin-left: 10px;
                  margin-right: 10px;
                }
              </style>
              <div class="empty-reading-list-space"></div>
              <div class="empty-reading-list-space"></div>
          </sl-card>
        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new LibraryReadingListsView()
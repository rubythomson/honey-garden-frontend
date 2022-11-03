import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from '../../PoemAPI'
import Toast from '../../Toast'

class CurrentWorkView {
  init(){
    document.title = 'Current Work'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        

        <div class="current-work-container">
          <div class="back-to-manage-container">
            <a href="/post" style="text-decoration: none;">
              <div class="back-to-manage">
                <img src="/images/arrow-left-icon.png" class="arrow-left-icon">  
                Back to Manage</div>
            </a>
          </div> 

          <h1>Current Work</h1>

          <hr>
          <div class="current-works-img-text-container">
            <div class="the-way-love-lies-img">
              <img src="/images/the-way-love-lies.png" alt="the-way-love-lies-img" style="border-radius: 15px;">
            </div>
            <div class="current-works-text">
              <h3>The Way Love Lies</h3>
              <div class="current-work-icons">
                <div>
                <img src="/images/views-icon.png" alt="views-icon-img" class="views-icon">  
                300</div>

                <div>
                <img src="/images/status-icon.png" alt="views-icon-img" class="status-icon">   
                Completed</div>

                <div>
                <img src="/images/pages-icon.png" alt="views-icon-img" class="pages-icon">   
                12</div>
              </div>

              <div class="current-works-description">
                <p>Alaska an alien princess who wants to expand her wings and meet her love and her life on another planet. Running away from home she finds herself on planet Earth.
                  <p></p>
                  Kingsley a restaurant chef at a small owned store has been in a cooking slump and decides to take a break to clear his head.
                  <p></p>
                  The two cross paths and we shall see the madness that unravels.</p>
                </div>

                <div class="current-works-bottom-btns">
                  <div class="romance-btn">Romance</div>
                  <div class="slice-of-life-btn">Slice of Life</div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new CurrentWorkView()
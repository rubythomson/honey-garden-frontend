import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class BeehiveView {
  init(){    
    document.title = 'Beehive'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`
      <va-app-header title="Beehive" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content">
        <div class="beehive-content">
        <h1 class="beehive-title">Beehive</h1>

          <div class="beehive-search-box">
            <div class="searchContainer">
              <i class="fa fa-search searchIcon"></i>
              <input class="searchBox" type="search" name="search">
            </div>

            <sl-button class="beehive-add-post-btn" variant="primary" size="medium" pill>Add Post</sl-button>
          </div>

          <div class="beehive-row-1 calign">
            <sl-card>
              <h2>In my dreams...</h2>
              <br>
              <p>In my dreams all I see are people dancing in the sky</p>
              <br>
              <p>Magic happenings everywhere</p>
              <br>
              <p>I want that to be my reality</p>

              <iconify-icon icon="vs:rose" width="20" height="40"></iconify-icon>
              <sl-button class="send-rose-btn" pill>Send a rose</sl-button>
              <sl-avatar style="--size: 40px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
              <p>${Auth.currentUser.userName}</p>

            </sl-card>
          </div>

          <div class="beehive-row-2 calign">
            <sl-card>
              <h2>Goldfish Tears</h2>
              <br>
              <p>Goldfish,</p>
              <br>
              <p>No memory just swimming in circles</p>
              <br>
              <p>The life of a trapped fish.</p>
              <br>
              <p>How sad,</p>
              <br>
              <p>How very sad,</p>
              <br>
              <p>How tragedy strikes.</p>
              <br>
              <p>Goldfish Bowl.</p>

              <iconify-icon icon="vs:rose" width="20" height="40"></iconify-icon>
              <sl-button class="send-rose-btn" pill>Send a rose</sl-button>
              <sl-avatar style="--size: 40px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
              <p>${Auth.currentUser.userName}</p>

            </sl-card>
          </div>

          <div class="beehive-row-3 calign">
            <sl-card>
              <h2>Cloud Kisses</h2>
              <br>
              <p>Clouds floating,</p>
              <br>
              <p>Drifting in the wind</p>
              <br>
              <p>Crying crystals</p>
              <br>
              <p>Crystals hitting my face.</p>
              <br>
              <p>Crystal kisses.</p>

              <iconify-icon icon="vs:rose" width="20" height="40"></iconify-icon>
              <sl-button class="send-rose-btn" pill>Send a rose</sl-button>
              <sl-avatar style="--size: 40px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
              <p>${Auth.currentUser.userName}</p>

            </sl-card>
          </div>
        </div>
        </div>
      </div>
    `
    render(template, App.rootEl)
  }
}

export default new BeehiveView()
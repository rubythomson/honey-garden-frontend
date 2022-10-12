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

        <div class="beehive-search-style">
          <div class="beehive-search-box">
            <div class="searchContainer">
              <p>Type a poem</p>
            </div>
            <sl-button class="beehive-add-post-btn" variant="primary" size="medium" style="margin: 20px;"pill>Add Post</sl-button>
          </div>
        </div>

          <div class="radial-gradient"></div> <!-- STYLE -->

          <div class="beehive-row-1 calign">
            <sl-card class="beehive-in-my-dreams">
              <div id="beehive-card-text">
                <h2>In my dreams...</h2>
                <hr>
                <p>In my dreams all I see are people dancing in the sky</p>
                <p>Magic happenings everywhere</p>
                <p>I want that to be my reality</p>
                <br>

                <div class="in-my-dreams-icons">
                  <div id="beehive-card-rose-icon">
                    <img src="/images/rose-flower.png" width="30" height="30">
                  </div>
                  <div id="beehive-card-rose-icon">
                    <p>Send a rose</p>
                  </div>
                  <div id="beehive-card-avatar">
                    <sl-avatar style="--size: 40px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
                    <p>${Auth.currentUser.userName}</p>
                  </div>
                </div>
              </div>
            </sl-card>
          </div>

          <div class="radial-gradient"></div> <!-- STYLE -->

          <div class="beehive-row-2 calign">
            <sl-card class="beehive-goldfish-tears">
            <div id="beehive-card-text">
              <h2>Goldfish Tears</h2>
              <hr>
              <p>Goldfish,</p>
              <p>No memory just swimming in circles</p>
              <p>The life of a trapped fish.</p>
              <p>How sad,</p>
              <p>How very sad,</p>
              <p>How tragedy strikes.</p>
              <p>Goldfish Bowl.</p>
              <br>

              <div class="goldfish-tears-icons">
              <div id="beehive-card-rose-icon">
                <img src="/images/rose-flower.png" width="30" height="30">
              </div>
              <div id="beehive-card-rose-icon">
                <p>Send a rose</p>
              </div>
              <div id="beehive-card-avatar">
                <sl-avatar style="--size: 40px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
                <p>${Auth.currentUser.userName}</p>
              </div>
              </div>
            </div>
            </sl-card>
          </div>

          <div class="beehive-row-3 calign">
            <sl-card class="beehive-cloud-kisses">
            <div id="beehive-card-text">
              <h2>Cloud Kisses</h2>
              <hr>
              <p>Clouds floating,</p>
              <p>Drifting in the wind</p>
              <p>Crying crystals</p>
              <p>Crystals hitting my face.</p>
              <p>Crystal kisses.</p>
              <br>

              <div class="cloud-kisses-icons">
              <div id="beehive-card-rose-icon">
                <img src="/images/rose-flower.png" width="30" height="30">
              </div>
              <div id="beehive-card-rose-icon">
                <p>Send a rose</p>
              </div>
              <div id="beehive-card-avatar">
                <sl-avatar style="--size: 40px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
                <p>${Auth.currentUser.userName}</p>
              </div>
              </div>
            </div>
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
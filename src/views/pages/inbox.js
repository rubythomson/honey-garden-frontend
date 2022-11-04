import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import Toast from '../../Toast'

class InboxView {
  init(){
    document.title = 'Inbox'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Inbox" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        
        <div class="messages-card-div">
          <sl-card class="messages-card-header">
            <div class="messages-gris-container">
              <h1 class="messages-header">Messages</h1>

              <a href="new-message" style="text-decoration: none;">
                <div class="messages-btn">
                  <sl-button class="new-message-btn" size="small" pill type="default">New Message</sl-button>
                </div>
              </a>
            </div>
            <hr>
            <div class="messages-card">
              <div class="avatar-messages">
                <img src="/images/user-avatar-one.png" class="messages-avatar">
              </div>
              <div class="messages-card-text">
                <h3>xxKiNxx</h3>
                <p>Hiiii thanks for liking my story</p>
              </div>
              <div class="messages-timestamp">
                <p>7:45</p>
              </div>
            </div>

            <hr>

            <div class="messages-card">
              <div class="avatar-messages">
                <img src="/images/user-avatar-two.png" class="messages-avatar">
              </div>
              <div class="messages-card-text">
                <h3>Cheesy3artini</h3>
                <p>I really liked your posts what do you get your inspiration from?</p>
              </div>
              <div class="messages-timestamp">
                <p>Wed</p>
              </div>
            </div>
            
            <hr>

            <div class="messages-card">
              <div class="avatar-messages">
                <img src="/images/user-avatar-three.png" class="messages-avatar">
              </div>
              <div class="messages-card-text">
                <h3>Dinfkq1</h3>
                <p>You should read this</p>
              </div>
              <div class="messages-timestamp">
                <p>Fri</p>
              </div>
            </div>

            <hr>

            <div class="messages-card">
              <div class="avatar-messages">
                <img src="/images/user-avatar-four.png" class="messages-avatar">
              </div>
              <div class="messages-card-text">
                <h3>Linfow012</h3>
                <p>Magix time is such a good reccommendation. Tysm</p>
              </div>
              <div class="messages-timestamp">
                <p>12 Sep</p>
              </div>
            </div>

            <hr>

          </sl-card>
        </div>

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new InboxView()
import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import Toast from '../../Toast'

class NewMessageView {
  init(){
    document.title = 'New Message'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
    <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
    <div class="page-content">        
        
      <div class="opacity">
        <div class="messages-card-div">
            <sl-card class="messages-card-header">
              <div class="messages-gris-container">
                <h1 class="messages-header">Messages</h1>
                <div class="messages-btn">
                  <sl-button class="new-message-btn" size="small" pill type="default">New Message</sl-button>
                </div>
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
              <div class="opacity">
                
              </div>
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
        
      </div>

        <div class="new-message-container">
          <div class="new-message-content">
            <a href="inbox">
              <sl-icon class="purchase-x-icon" name="x"></sl-icon>
            </a>

            <div class="title">
              <h1>New Message</h1>
            </div>
            <div class="message-text">
              <p>Send message to:</p>
            </div>
            <div class="message-input">
              <input type="text" minlength="4" maxlength="400" size="80" style="height: 4vh; border-radius: 10px; box-shadow: inset rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; border: 1px solid lightgrey;">
            </div>
            <div class="message-text">
              <p>Message:</p>
            </div>
            <div class="message-input">
              <input type="text" minlength="4" maxlength="400" size="80" style="height: 20vh; border-radius: 10px; box-shadow: inset rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; border: 1px solid lightgrey;">
            </div>

            <a href="inbox" style="text-decoration: none;">
              <div class="send-btn-container">
                <div class="send-btn">Send</div>
              </div>
            </a>

          </div>
        </div> 
      
    </div>
    `
    render(template, App.rootEl)
  }
}


export default new NewMessageView()
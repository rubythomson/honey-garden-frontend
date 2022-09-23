import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

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
            <div slot="header">
              <h1 class="messages-header">Messages</h1>

              <div class="messages-btn">
                <sl-button class="new-message-btn" size="small" pill type="default">New Message</sl-button>
              </div>
            </div>

            <div class="messages-card">
              <div class="avatar-messages">
                ${Auth.currentUser && Auth.currentUser.avatar ? html`
                  <sl-avatar style="--size: 50px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
                `:html`
                <sl-avatar style="--size: 50px; margin-bottom: 1em;"></sl-avatar>
                `}
              </div>

              <div class="messages-card-text">
                <h3>${Auth.currentUser.userName}</h3>
                <p>Hiiii thanks for the follow!!! I love your content btw.</p>
              </div>
            </div>

            <hr>

            <div class="messages-card">
              <div class="avatar-messages">
                ${Auth.currentUser && Auth.currentUser.avatar ? html`
                  <sl-avatar style="--size: 50px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
                `:html`
                <sl-avatar style="--size: 50px; margin-bottom: 1em;"></sl-avatar>
                `}
              </div>

              <div class="messages-card-text">
                <h3>${Auth.currentUser.userName}</h3>
                <p>I really liked your post, where did you get the inspiration from?</p>
              </div>
            </div> 
            
            <hr>

            <div class="messages-card">
              <div class="avatar-messages">
                ${Auth.currentUser && Auth.currentUser.avatar ? html`
                  <sl-avatar style="--size: 50px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
                `:html`
                <sl-avatar style="--size: 50px; margin-bottom: 1em;"></sl-avatar>
                `}
              </div>

              <div class="messages-card-text">
                <h3>${Auth.currentUser.userName}</h3>
                <p>You should read this, I think it'll surprise you...</p>
              </div>
            </div> 

            <hr>

            <div class="messages-card">
              <div class="avatar-messages">
                ${Auth.currentUser && Auth.currentUser.avatar ? html`
                  <sl-avatar style="--size: 50px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
                `:html`
                <sl-avatar style="--size: 50px; margin-bottom: 1em;"></sl-avatar>
                `}
              </div>

              <div class="messages-card-text">
                <h3>${Auth.currentUser.userName}</h3>
                <p>Magix Time is such a good reccommendation. Tysm!</p>
              </div>
            </div> 

          </sl-card>
        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new InboxView()
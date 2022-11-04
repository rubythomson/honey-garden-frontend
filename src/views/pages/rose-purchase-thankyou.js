import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import Toast from './../../Toast'
import UserAPI from './../../UserAPI'

class RosePurchaseThankyouView {
  init(){
    document.title = 'Template'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        
      <div class="rose-card-div">
          <sl-card class="rose-card-basic" class="card-basic">
            <div slot="header">
              <h1 class="rose-header">Roses</h1>
            </div>

            <hr>

            <div class="rose-card" style="margin-top: 3.5em;">
              <div class="rose-div">
                <img src="/images/rose-flower.png" width="80" height="90" class="rose-icon">
              </div>
              <div class="rose-card-text">
                <h3>You have 7 Roses</h3>
                <p>You have given 60 Roses</p>
              </div>
              <sl-button class="add-roses-btn" size="small" style="margin-left: 23em; width: 8vw; margin-top: 4em;">Add Roses</sl-button>
            </div>
            <hr>
          </sl-card>
        </div>

        <div class="rose-hover-container">

          <a href="rose">
            <sl-icon class="purchase-x-icon" name="x"></sl-icon>
          </a>

          <img src="/images/rose-flower.png" width="110em" height="120em" class="rose-icon-thankyou">
          
          <div class="rose-thankyou-text">
            <h1>Thank you for supporting our creators!</h1>
          </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new RosePurchaseThankyouView()
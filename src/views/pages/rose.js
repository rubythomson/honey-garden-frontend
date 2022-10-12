import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class SaveView {
  init(){
    document.title = 'Rose'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Rose" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        

        <div class="rose-card-div">
          <sl-card class="rose-card-header">
            <div slot="header">
              <h1 class="rose-header">Roses</h1>
            </div>

            <hr>
            
            <div class="rose-card">
              <iconify-icon class="rose-icon" icon="vs:rose" width="50" height="90"></iconify-icon>
              <img src="/images/rose-flower.png" width="75" height="80"> <!-- ADJUST -->
              <div class="rose-card-text">
                <h3>You have 7 Roses</h3>
                <p>You have given 60 Roses</p>
              </div>

              <sl-button class="add-roses-btn" size="small" pill>Add Roses</sl-button>
            </div>
            <hr>
          </sl-card>
        </div>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new SaveView()
import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class SupportView {
  init(){
    document.title = 'Support'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Support" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Support</h1>
        <p>Find help ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new SupportView()
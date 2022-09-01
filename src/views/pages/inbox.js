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
        <h1>Inbox</h1>
        <p>View your messages here</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new InboxView()
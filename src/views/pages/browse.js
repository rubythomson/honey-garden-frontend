import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class BrowseView {
  init(){
    document.title = 'Browse'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Browse" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Browse</h1>
        <p>See the lastest posts ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new BrowseView()
import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class SaveView {
  init(){
    document.title = 'Save'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Save" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Saved Reads</h1>
        <p>Saved Literature</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new SaveView()
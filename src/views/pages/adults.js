import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class AdultsView {
  init(){
    document.title = 'Adults Only'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Adutls Only (18+)" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Fan Fiction</h1>
        <p>Parental Guidance Recommended!!!</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new AdultsView()
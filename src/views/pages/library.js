import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class LibraryView {
  init(){
    document.title = 'Library'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Library" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Library</h1>
        <p>Library Timeline</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new LibraryView()
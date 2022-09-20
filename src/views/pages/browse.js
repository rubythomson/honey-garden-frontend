import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from './../../PoemAPI'
import Toast from '../../Toast'

class BrowseView {
  init(){
    document.title = 'Browse'  
    this.poems = null  
    this.render()    
    Utils.pageIntroAnim()
    this.getPoems()
  }

  async getPoems(){
    try{
      this.poems = await PoemAPI.getPoems()
      console.log(this.poems)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Browse" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        
      <div class="poems-grid">
        ${this.poems == null ? html`
          <sl-spinner></sl-spinner>
          ` : html`
          ${this.poems.map(poem => html`
            <va-poem class="poem-card"
                name="${poem.name}" 
                description="${poem.description}"
                views="${poem.views}"
                status="${poem.status}"
                pages="${poem.pages}"
                user="${JSON.stringify(poem.user)}"
                image="${poem.image}"
              >
            </va-poem>
          `)}
        `}
      </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new BrowseView()
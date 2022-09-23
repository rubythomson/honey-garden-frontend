import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from './../../PoemAPI'
import Toast from '../../Toast'

class LibraryView {
  async init(){
    document.title = 'Library'   
    this.poems = null  
    this.render()    
    Utils.pageIntroAnim()
    await this.getPoems()
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
      <va-app-header title="Library" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1 class="library-title">Library</h1>

        <div class="library-filter calign">
        <sl-button size="medium" pill>Current Reads</sl-button>
        <sl-button size="medium" pill>Archived</sl-button>
        <sl-button size="medium" pill>Reading Lists</sl-button>
        </div>

          <div class="bottom">
            <div class="poems-grid">
              ${this.poems == null ? html`
                <sl-spinner></sl-spinner>
                ` : html`
                ${this.poems.map(poem => html`
                  <va-poem class="poem-card"
                      id="${poem._id}"
                      title="${poem.title}"
                      user="${JSON.stringify(poem.user)}"
                      image="${poem.image}"
                    >
                  </va-poem>
                `)}
              `}
            </div>
          </div>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new LibraryView()
import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class FavouritesView {
  init(){
    document.title = 'Favourites'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Favourites" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>My Favourites</h1>
        <p>Favourited Literature</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new FavouritesView()
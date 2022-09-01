import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class TestView {
  init(){
    document.title = 'Test'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Test" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Test View</h1>
        <p>This is a test page...</p>

        
        <h3>Button example:</h3>
        <sl-button class="anim-in" @click=${() => gotoRoute('/profile')}>View Profile</sl-button>
        <p>&nbsp;</p>
        <h3>Link example</h3>
        <a href="/profile" @click=${anchorRoute}>View Profile</a>
      
        <div class="home-img-container">
          <img class="home-img" src="/images/home-page-img.png">
        </div>
      

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new TestView()
import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import Toast from './../../Toast'
import UserAPI from './../../UserAPI'

class CreateReadingListView {
  init(){
    document.title = 'Create Reading List'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Create Reading List" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">  
        
      <div class="back-to-profile-container">
        <a href="/profile" style="text-decoration: none;">
          <div class="back-to-profile">
            <img src="/images/arrow-left-icon.png" class="arrow-left-icon">  
            Back to profile</div>
        </a>
      </div>

      <div class="reading-list-cover-img"></div>
      
      <div class="create-reading-list-container"> 
        <div class="create-reading-list-text"> 
          <div class="edit-btn">Edit</div>
          <h1>Title</h1>
          <p>Reading List | X Stories</p>
          <br>
          <p>Description</p>
        </div>
        <br>
        <hr>
      </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new CreateReadingListView()
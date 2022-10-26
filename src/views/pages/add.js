import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from '../../PoemAPI'
import Toast from '../../Toast'

class AddView {
  init(){
    document.title = 'Add Post'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">   

      <div class="page-form-styling">
          <div class="back-to-manage-container">
            <a href="/post" style="text-decoration: none;">
              <div class="back-to-manage">
                <img src="/images/arrow-left-icon.png" class="arrow-left-icon">  
                Back to Manage</div>
            </a>
          </div>  

            <h1>Add</h1>
              <sl-form class="page-form" @sl-submit=${this.newPostSubmitHandler}>
                <input type="hidden" name="user" value="${Auth.currentUser._id}" />
                <div class="input-group">
                  <sl-input name="title" type="text" placeholder="Title:" required></sl-input>
                </div>
                <div class="input-group">              
                  <sl-input name="tags" type="text" placeholder="Tags:" required></sl-input>
                </div>
                <div class="input-group">
                  <sl-textarea name="description" rows="3" placeholder="Description:" required></sl-textarea>
                </div>
                <div class="input-group" style="margin-bottom: 2em;">
                  <label>Image</label><br>
                  <input type="file" name="image" />              
                </div>
                <div class="input-group" style="margin-bottom: 2em;">
                  <label>Mature</label><br>
                  <sl-radio-group label="Select" no-fieldset>
                    <sl-radio name="mature" value="m">On</sl-radio>
                    <sl-radio name="underage" value="u">Off</sl-radio>
                  </sl-radio-group>
                </div>
                <div class="input-group">
                  <sl-textarea name="begin-here" rows="3" placeholder="Begin Here..." required></sl-textarea>
                </div>
                <sl-button type="primary" class="submit-btn" submit size="medium" pill>Save Draft</sl-button>
                <sl-button type="primary" class="submit-btn" submit size="medium" pill>Post</sl-button>
              </sl-form> 
            </div>
        </div> 
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new AddView()
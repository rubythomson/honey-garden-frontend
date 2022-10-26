import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from '../../PoemAPI'
import Toast from '../../Toast'

class newPostView {
  init(){
    document.title = 'Post'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async newPostSubmitHandler(e){
    e.preventDefault()
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    const formData = e.detail.formData

    try{
      await PoemAPI.newPost(formData)
      Toast.show("Post Added")
      submitBtn.removeAttribute('loading')
      // reset form
      // reset text + text area fields
      const textInputs = document.querySelectorAll('sl-input, sl-text-area')
      if(textInputs) textInputs.forEach(textInput => textInput.value = null)
      // reset radio inputs
      const radioInputs = document.querySelectorAll('sl-radio')
      if(radioInputs) radioInputs.forEach(radioInput => radioInput.removeAttribute('checked'))
      // reset file inputs
      const fileInput = document.querySelector('input[type=file]')
      if(fileInput) fileInput.value = null

    }catch(err){
      Toast.show(err, 'error')
      submitBtn.removeAttribute('loading')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Create Post" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>

      <!------------------------------------------------ NOW CALLED MANAGE ---------------------------------------------------->
      <div class="page-content">

      <div class="manage-container">
        <h1>Manage</h1>
        <hr>
        <div class="manage-btns-container-1">
          <div class="work-btn">1 Work</div>
          <div class="vertical-line"></div>
          <div class="draft-btn">1 Drafts</div>
          <div class="vertical-line-draft"></div>
          <div></div>
        </div>
        <div class="manage-btns-container-2">
          <div class="current-work-btn">Current Work</div>
          <div class="view-drafts-btn">View Drafts</div>
          <div class="create-new-btn">Create New</div>
        </div>
      </div>

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
    `
    render(template, App.rootEl)
  }
}


export default new newPostView()
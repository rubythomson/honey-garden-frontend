import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from '../../PoemAPI'
import Toast from '../../Toast'

class newPostView {
  init(){
    document.title = 'Manage'    
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
        <a href="/current-work" style="text-decoration: none;">
          <div class="current-work-btn">Current Work</div>
        </a>  
          <a href="/drafts" style="text-decoration: none;">
            <div class="view-drafts-btn">View Drafts</div>
          </a>
          <a href="/add" style="text-decoration: none;">
            <div id="create-new-btn">Create New</div>
          </a>
        </div>
      </div>
    </div>    
    `
    render(template, App.rootEl)
  }
}


export default new newPostView()
import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from '../../PoemAPI'
import Toast from '../../Toast'
import UserAPI from './../../UserAPI'
import moment from 'moment'

class SettingsView {
  init(){
    console.log('EditProfileView.init')
    document.title = 'Edit Profile'    
    this.user = null
    this.render()    
    Utils.pageIntroAnim()
    this.getUser()    
  }

  async getUser(){
    try {
      this.user = await UserAPI.getUser(Auth.currentUser._id)      
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  async updateProfileSubmitHandler(e){
    e.preventDefault()
    const formData = e.detail.formData
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')
    try {
      const updatedUser = await UserAPI.updateUser(Auth.currentUser._id, formData)      
      delete updatedUser.password        
      this.user = updatedUser     
      Auth.currentUser = updatedUser
      this.render()
      Toast.show('profile updated')
    }catch(err){      
      Toast.show(err, 'error')
    }
    submitBtn.removeAttribute('loading')
  }

  render(){
    const template = html`
      <va-app-header title="Edit Profile" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      <div class="page-content"> 

          <div class="settings-title">
            <h1>Settings</h1> 
          </div>
        
        <div class="settings-container">
          <h2 class="edit-profile-title">Edit Profile</h2>

          <div class="settings-form-content">
            ${(this.user == null) ? html`
              <sl-spinner></sl-spinner>
            `:html`
                <div class="input-group">         
                  ${(this.user.avatar) ? html`
                    <sl-avatar image="${App.apiBase}/images/${this.user.avatar}"></sl-avatar>
                    <input type="file" name="avatar"/>
                  `: html`
                    <input type="file" name="avatar"/>
                  `}
                </div>
              <sl-form class="page-form" @sl-submit=${this.updateProfileSubmitHandler.bind(this)}>
                <p>Username :</p>
                <div class="input-group">
                  <sl-input type="text" name="userName" value="${this.user.userName}" placeholder=" Username"></sl-input>
                </div>
                <p>First Name :</p>
                <div class="input-group">
                  <sl-input type="text" name="firstName" value="${this.user.firstName}" placeholder="First Name"></sl-input>
                </div>
                <p>Last Name :</p>
                <div class="input-group">
                  <sl-input type="text" name="lastName" value="${this.user.lastName}" placeholder="Last Name"></sl-input>
                </div>
                <p>Email :</p>
                <div class="input-group">
                  <sl-input type="text" name="email" value="${this.user.email}" placeholder="Email Address"></sl-input>
                </div>   
                <p>Bio :</p>  
                <div class="input-group">
                  <sl-textarea name="bio" rows="4" placeholder="Bio" value="${this.user.bio}"></sl-textarea>
                </div>  
                <p>Birthday (dd/mm/yyyy) :</p>
                <div class="input-group">
                  <sl-input type="text" name="email" value="${this.user.birthday}" placeholder="Birthday"></sl-input>
                </div>   
                <p>Pronouns :</p>
                <div class="input-group">
                  <sl-input type="text" name="email" value="${this.user.pronouns}" placeholder="Pronouns"></sl-input>
                </div>      
                <sl-button type="primary" class="submit-btn" submit>Update</sl-button>
              </sl-form>
            `}
          </div>
        </div>
      </div>
    `
    render(template, App.rootEl)
  }
}

export default new SettingsView()
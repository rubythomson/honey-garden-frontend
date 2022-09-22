import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import moment from 'moment'
import Toast from './../../Toast'
import UserAPI from './../../UserAPI'

class ProfileView {
  init(){
    document.title = 'Profile' 
    this.readingList = null   
    this.render()    
    Utils.pageIntroAnim()
    this.getReadingList()
  }

  async getReadingList(){
    try {
      const currentUser = await UserAPI.getUser(Auth.currentUser._id)
      this.readingList = currentUser.readingLists
      console.log(this.readingList)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Profile" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">        
        ${Auth.currentUser && Auth.currentUser.avatar ? html`
          <sl-avatar style="--size: 200px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
        `:html`
        <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
        `}
        
        <h1>${Auth.currentUser.userName}</h1>
        <p>${Auth.currentUser.email}</p>
        <p>Updated: ${moment(Auth.currentUser.updatedAt).format('MMMM Do YYYY, @ h:mm a')}</p>
        
        <sl-card>  
          ${Auth.currentUser.bio ? html`
            <h3 class="bio">Bio</h3>
            <p>${Auth.currentUser.bio}</p>
          ` : html``}
        </sl-card>

        <br>
        <p></p>
        <p></p>
        <br>
        <p></p>
        <p></p>

        <sl-card class="card-header">
          <div slot="header">        
            <h2>Works (1)</h2>
          </div> 
          
        </sl-card>

        <br>
        <p></p>
        <p></p>
        <br>
        <p></p>
        <p></p>

        <sl-card class="card-header">
          <div slot="header">        
            <h2>Reading Lists (0)</h2>
            <sl-button class="create-btn" size="medium" pill>+ Create</sl-button>
            </div> 
            
              <div class="poem-grid">
                ${this.readingList == null ? html`
                  <sl-spinner></sl-spinner>
                ` : html`
                  ${this.readingList.map(poem => html`
                    <va-poem class="poem-card"
                      id="${poem._id}"
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
          
        </sl-card>

        <br>
        <p></p>
        <p></p>
        <br>
        <p></p>
        <p></p>

        <sl-button @click=${()=> gotoRoute('/editProfile')}>Edit Profile</sl-button>

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new ProfileView()
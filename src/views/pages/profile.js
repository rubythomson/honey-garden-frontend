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
      this.readingList = [currentUser.readingList[currentUser.readingList.length - 1]] // first item is 0
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
        
      <div class="radial-gradient"></div> <!-- STYLE -->

        ${Auth.currentUser && Auth.currentUser.avatar ? html`
          <sl-avatar style="--size: 200px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
        `:html`
        <sl-avatar style="--size: 200px; margin-bottom: 1em;"></sl-avatar>
        `}
        
        <h1>${Auth.currentUser.firstName} ${Auth.currentUser.lastName}</h1>
        <p>@${Auth.currentUser.userName}</p>
        
          <sl-card class="profile-box">
            <div class="profile-box-parent">
                <div class="column1">
                  <p>Lists: 0</p>
                </div>

                <div class="column2">
                  <p>Works: 3</p>
                </div>

                <div class="column3">
                  <p>Followers: 50k</p>
                </div>

                <div class="following-btn" class="column1">
                <img src="/images/following-icon.png" alt="following-icon-img">  
                Following</div>

                <div class="following-btn" class="column1">
                <img src="/images/drafts-icon.png" alt="drafts-icon-img">  
                Drafts</div>
    
                <div class="following-btn" class="column1">
                <img src="/images/setting-icon.png" alt="setting-icon-img">  
                Settings</div>
            </div>
          </sl-card>

          <div class="radial-gradient"></div> <!-- STYLE -->

          <sl-card class="bio-card" style="width: 400px;">
          <div class="bio-content">
            ${Auth.currentUser.bio ? html`
              <h3 class="bio">Bio:</h3>
              <hr>
              <p>${Auth.currentUser.bio}</p>
            ` : html``}
            </div>
          </sl-card>

        <br>
        <p></p>
        <p></p>
        <br>
        <p></p>
        <p></p>

        <div class="bio-works-card">
          <sl-card class="card-basic">
            <div>        
              <h2>Works (1)</h2>
              <hr>
            </div> 

            <div class="poem-grid">
                ${this.readingList == null ? html`
                  <sl-spinner></sl-spinner>
                ` : html`
                  ${this.readingList.map(({ poem }) => html`
                    <va-poem class="poem-card"
                      id="${poem._id}"
                      title="${poem.title}" 
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
        </div>

        <br>
        <p></p>
        <p></p>
        <br>
        <p></p>
        <p></p>

        <div class="reading-list-card">
          <sl-card class="card-basic">
            <div class="reading-list-content"> 
              <div class="reading-list-title-and-btn"> 
                <div class="reading-list-title">     
                  <h2>Reading Lists (1)</h2>
                </div> 
                <div class="create-new-btn">
                <a href="/create-reading-list">
                  <sl-button class="create-btn" size="medium" pill>Create New</sl-button>
                </a>
                </div>
              </div>
              <hr>
              <div class="reading-list-title">
                <h2>Modern Takes</h2>
                <style>
                  .vl {
                    border-left: 1px solid black;
                    height: 30px;
                    position: absolute;
                    margin-left: 155px;
                  }
                </style>
                <div class="vl"></div>
                <div class="stories-text">
                  <h3>2 Stories</h3>
                </div>
              </div>
            </div>

            <div class="reading-list-imgs">
              <div class="sinking-ships-img">
                <img src="/images/sinking-ships.png" alt="sinking-ships-img" style="border-radius: 15px;">
              </div>
              <div class="kissing-clouds-img">
                <img src="/images/kissing-clouds.png" alt="kissing-clouds-img" style="border-radius: 15px;">
              </div>

              <div class="empty-reading-list-space"></div>
              <style>
                .empty-reading-list-space {
                  width: 135px;
                  height: 200px;
                  border: 0.5px lightslategray solid;
                  margin-left: 10px;
                  margin-right: 10px;
                }
              </style>

            <div class="empty-reading-list-space"></div>
              <style>
                .empty-reading-list-space {
                  width: 135px;
                  height: 200px;
                  border: 0.5px lightslategray solid;
                  margin-left: 10px;
                  margin-right: 10px;
                }
              </style>

            <div class="empty-reading-list-space"></div>
              <style>
                .empty-reading-list-space {
                  width: 135px;
                  height: 200px;
                  border: 0.5px lightslategray solid;
                  margin-left: 10px;
                  margin-right: 10px;
                }
              </style>
            </div>
          </sl-card>
        </div>

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
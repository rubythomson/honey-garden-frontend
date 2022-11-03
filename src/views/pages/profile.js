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
      this.readingList = currentUser.readingList; // first item is 0
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

                <a href="/drafts" style="text-decoration: none;">
                  <div class="following-btn" class="column1">
                  <img src="/images/drafts-icon.png" alt="drafts-icon-img">  
                  Drafts</div>
                </a>
    
                <a href="/profile-settings" style="text-decoration: none;">
                  <div class="following-btn" class="column1">
                    <img src="/images/setting-icon.png" alt="setting-icon-img">  
                  Settings</div>
                </a>
            </div>
          </sl-card>

          <div class="radial-gradient"></div>

          <sl-card class="bio-card" style="width: 55vw;">
          <div class="bio-content">
            ${Auth.currentUser.bio ? html`
              <h3 class="bio">Bio:</h3>
              <hr>
              <p class="bio">${Auth.currentUser.bio}</p>
            ` : html``}
            </div>
          </sl-card>

        <br>
        <p></p>
        <p></p>
        <br>
        <p></p>
        <p></p>

        <div class="profile-work-container">
          <h3 style="text-align: left; font-size: 1.5em; margin: 0.5em;">Works (1)</h3>

          <hr>
          <div class="profile-works-img-text-container">
            <div class="the-way-love-lies-img-works-profile">
              <img src="/images/the-way-love-lies.png" alt="the-way-love-lies-img" style="border-radius: 15px; width: 14vw; height: 40vh;">
            </div>
            <div class="profile-works-text">
              <h3>The Way Love Lies</h3>
              <div class="profile-work-icons">
                <div style="font-size: 0.8em;">
                <img src="/images/views-icon.png" alt="views-icon-img" class="views-icon">  
                300</div>

                <div style="font-size: 0.8em;">
                  <img src="/images/status-icon.png" alt="views-icon-img" class="status-icon">
                Completed</div>

                <div style="font-size: 0.8em;">
                <img src="/images/pages-icon.png" alt="views-icon-img" class="pages-icon">   
                12</div>
              </div>

              <div class="profile-works-description">
                <p>Alaska an alien princess who wants to expand her wings and meet her love and her life on another planet. Running away from home she finds herself on planet Earth.
                  <p></p>
                  Kingsley a restaurant chef at a small owned store has been in a cooking slump and decides to take a break to clear his head.
                  <p></p>
                  The two cross paths and we shall see the madness that unravels.</p>
                </div>

                <div class="profile-works-bottom-btns">
                  <div class="romance-btn" style="font-size: 0.7em;">Romance</div>
                  <div class="slice-of-life-btn" style="font-size: 0.7em;">Slice of Life</div>
                </div>
              </div>
            </div>
          </div>

        <br>
        <p></p>
        <p></p>
        <br>
        <p></p>
        <p></p>

      <div> 
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
                  box-shadow:  0 0 4px lightgrey;
                  margin-left: 10px;
                  margin-right: 10px;
                }
              </style>
              <div class="empty-reading-list-space"></div>
              <div class="empty-reading-list-space"></div>
            </div>
          </sl-card>
        </div>
      </div>

        <br>
        <p></p>
        <p></p>
        <br>
        <p></p>
        <p></p>

        <a href="/profile-settings">
          <sl-button @click=${()=> gotoRoute('/profile-settings')}>Edit Profile</sl-button>
        </a>

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new ProfileView()
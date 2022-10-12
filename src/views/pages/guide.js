import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import UserAPI from '../../UserAPI'
import Toast from '../../Toast'

class GuideView {
  init(){
    document.title = 'Guide'    
    this.render()    
    Utils.pageIntroAnim()
    this.updateCurrentUser()
  }

  async updateCurrentUser(){
    try{
      const updatedUser = await UserAPI.updateUser(Auth.currentUser._id, { newUser: false}, 'json')
      console.log("user updated")
      console.log(updatedUser)
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Guide" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content calign">  
        
        <div class="guide-title">
          <h1>Honey Garden,</h1>
        </div>
        <div class="guide-title">
          <h1>The hive for literature lovers</h1>
        </div>

        <div class="bee-guide-img">
          <img src="/images/bee-logo-guide.png" alt="bee-img">
        </div>

        <div class="radial-gradient"></div>

        <div class="guide-step">
          <h2 class="guide-titles">Read!</h2>
          <div class="book-stack">
            <img src="/images/book-stack.png" alt="book-stack-img">
          </div>
        </div>

        <div class="guide-step">
          <h2 class="guide-titles">Create!</h2>
          <div class="open-book">
            <img src="/images/open-book.png" alt="open-book-img" style="width: auto; height: 200px;">
          </div>
        </div>

        <div class="guide-rose-icon-small">
          <img src="/images/rose-flower.png" width="auto" height="70">
        </div>

        <div class="guide-step">
          <h2 class="guide-titles">Support!</h2>
          <div class="rose-bunch">
            <img src="/images/rose-bunch.png" alt="rose-bunch-img" style="width: auto; height: 500px;">
          </div>
        </div>

        <div class="guide-rose-icon">
          <img src="/images/rose-flower.png" width="auto" height="120">
        </div>

        <div class="explore-btn">
          <sl-button type="primary" @click=${() => gotoRoute('/')} size="medium" pill>Explore!</sl-button>
        </div>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new GuideView()
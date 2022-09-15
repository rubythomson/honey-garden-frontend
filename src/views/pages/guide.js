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
          <h1>The hive for literature lovers</h1>
        </div>

        <div class="guide-step">
          <h2>Read!</h2>
          <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
        </div>

        <div class="guide-step">
          <h2>Create!</h2>
          <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
        </div>

        <div class="guide-step">
          <h2>Support!</h2>
          <img src="https://plchldr.co/i/500x300?&bg=dddddd&fc=666666&text=IMAGE">
        </div>

        <sl-button type="primary" @click=${() => gotoRoute('/')}>Explore!</sl-button>
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new GuideView()
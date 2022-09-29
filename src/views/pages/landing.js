import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class TemplateView {
  init(){
    document.title = 'Template'    
    this.render()    

    Utils.pageIntroAnim()
  }

  signInSubmitHandler(e){
    e.preventDefault()
    const formData = e.detail.formData
    const submitBtn = document.querySelector('.submit-btn')
    submitBtn.setAttribute('loading', '')    
    
    // sign in using Auth    
    Auth.signIn(formData, () => {
      submitBtn.removeAttribute('loading')
    })
  }

  render(){
    const template = html`
      <div class="page-content-landing">    
        <div class="landing-logo">
          <img class="app-side-menu-logo-1" src="/images/honey-garden-logo.png" style="height: 40px;"> 
        </div> 

        <div class="landing-btn-top">
          <sl-button variant="primary" size="small" pill>
            <a href="/signup" @click=${anchorRoute}>  
            Sign up / Login
            </a>
          </sl-button>
        </div>

        <div class="radial-gradient"></div>

        <div class="landing-headers">
          <h1 class="landing-h1">Exlpore the art of literature</h1>
          <h1>Read, create, support</h1>
        </div>

        <br>

        <div class="landing-btns-container">
          <div class="login-landing-btn">
            <sl-button variant="primary" size="medium" pill>
              <a href="/signin" @click=${anchorRoute}>  
              Log In
              </a>
            </sl-button> <!-- make colour work for btn bg -->
          </div>

          <div class="sign-up-landing-btn">
            <sl-button size="medium" pill>
              <a href="/signup" @click=${anchorRoute}>
              Sign Up
              </a>
            </sl-button>
          </div>
        </div>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new TemplateView()
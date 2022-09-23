import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'
import PoemAPI from './../../PoemAPI'
import Toast from '../../Toast'

class HomeView {
  async init(){    
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim() 
    await this.getPoems()   
  }

  async getPoems(){
    try{
      this.poems = await PoemAPI.getPoems()
      console.log(this.poems)
      this.render()
    }catch(err){
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content">
        <div class="home-title">
          <h3>The night it beautiful,</h3>
          <h3>So are the faces of my people</h3>

          <div class="feather-img-div">
            <img class="feather-img" src="/images/feather-ink-pot.png" alt="feather-ink-pot">
          </div>
        </div>

        <div class="featured-content">
          <h2 class="featured-h2">Featured</h2>
          <sl-card class="featured-card">
          <img class="floral-img-3" src="/images/floral-img-3.png" alt="floral-flowers-3"> 
          Support with roses</sl-card>
        </div>

        <div class="for-you-content">
          <h2 class="featured-h2">For you</h2>
            <div class="bottom">
              <div class="poems-grid">
                ${this.poems == null ? html`
                  <sl-spinner></sl-spinner>
                  ` : html`
                  ${this.poems.map(poem => html`
                    <va-poem class="poem-card"
                        id="${poem._id}"
                        title="${poem.title}"
                        user="${JSON.stringify(poem.user)}"
                        image="${poem.image}"
                      >
                    </va-poem>
                  `)}
                `}
              </div>
            </div>
        </div>  

        <div class="continue-reading-content">
          <h2 class="featured-h2">Continue Reading</h2>
            <div class="bottom">
              <div class="poems-grid">
                ${this.poems == null ? html`
                  <sl-spinner></sl-spinner>
                  ` : html`
                  ${this.poems.map(poem => html`
                    <va-poem class="poem-card"
                        id="${poem._id}"
                        title="${poem.title}"
                        user="${JSON.stringify(poem.user)}"
                        image="${poem.image}"
                      >
                    </va-poem>
                  `)}
                `}
              </div>
            </div>
        </div>
        
        <div class="new-post-content">
          <h2 class="featured-h2">New Posts</h2>
            <div class="bottom">
              <div class="poems-grid">
                ${this.poems == null ? html`
                  <sl-spinner></sl-spinner>
                  ` : html`
                  ${this.poems.map(poem => html`
                    <va-poem class="poem-card"
                        id="${poem._id}"
                        title="${poem.title}"
                        user="${JSON.stringify(poem.user)}"
                        image="${poem.image}"
                      >
                    </va-poem>
                  `)}
                `}
              </div>
            </div>
        </div>

      </div> 
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()
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
        </div>

        <div class="feather-img-div">
          <img class="feather-img" src="/images/feather-ink-pot.png" alt="feather-ink-pot">
        </div>
        
        <div class="radial-gradient"></div>

        <div class="featured-content-heading">
          <h2 class="featured-h2">Featured</h2>
        </div>

          <div class="featured-card">
              <div class="featured-img">
                <img src="/images/sinking-ships.jpg" alt="sinking-ships-img"> 
              </div>
              <div class="summary"> 
                  <p> 8 Hours left on a sinking ship. Multiple stories about different couples going through heartache and grief.</p>
                </div>

                <div class="comment-1">
                  <p><i>"This was so good"</i></p>
                </div>

                <div class="comment-2">
                  <p><i>"Highly Recommend"</i></p>
                </div>
            </div>

      <!-- ----------------------------------------CAROUSEL TEST 1 ----------------------------------------------- -->
        <div id="slider" class="carousel-slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#slider" data-slide-to="0" class="active"></li>
            <li data-target="#slider" data-slide-to="1"></li>
            <li data-target="#slider" data-slide-to="2"></li>
            <li data-target="#slider" data-slide-to="3"></li>
            <li data-target="#slider" data-slide-to="4"></li>
            <li data-target="#slider" data-slide-to="5"></li>
          </ol>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="floral-img-3" src="/images/sinking-ships.jpg" alt="sinking-ships-img">
              </div>

            <div class="carousel-item">
              <div class="carousel-item-active">
                <img style="width: auto; height: 350px;" src="/images/sinking-ships.jpg" alt="sinking-ships-img">
              </div>
            </div>
          </div>
        </div>
        <!-- ----------------------------------------CAROUSEL TEST 1 ----------------------------------------------- -->



        <!-- ----------------------------------------CAROUSEL TEST 2 ----------------------------------------------- -->
          <div id="slider" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#slider" data-slide-to="0" class="active"></li>
                <li data-target="#slider" data-slide-to="1"></li>
                <li data-target="#slider" data-slide-to="2"></li>
                <li data-target="#slider" data-slide-to="3"></li>
                <li data-target="#slider" data-slide-to="4"></li>
            </ol>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="http://via.placeholder.com/350x350/d8ddef/ffffff?text=header.jpg">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="http://via.placeholder.com/350x350/a0a4b8/ffffff?text=slider2.jpg">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="http://via.placeholder.com/350x350/7293a0/ffffff?text=slider3.jpg">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="http://via.placeholder.com/350x350/45b69c/ffffff?text=slider4.jpeg">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="http://via.placeholder.com/350x350/21d19f/ffffff?text=slider5.jpeg">
                </div>
            </div>
        </div>
        <!-- ----------------------------------------CAROUSEL TEST ----------------------------------------------- -->

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
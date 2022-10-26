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
    const poems = await PoemAPI.getPoems();
    this.slides = [];
    for (var i = 0; i < poems.length; i++) {
      const slide = Math.floor(i / 5);
      if (this.slides.length === slide) {
        this.slides.push([]);
      }
      this.slides[slide].push({
        image: `${App.apiBase}/images/${poems[i].image}`,
        alt: poems[i].title
      })
    }
    console.log(this.slides);
    this.slideNumber = [0,0,0];

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

  changeToSlide(slider, index) {
    this.slideNumber[slider] = index;
    console.log('chaning', slider, index)
    this.render(slider);
  }

  render(slider){

    console.log('slider', slider)
    const template = html`
      <va-app-header title="Home" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content">

      <div class="home-text-img-container">
        <div class="home-title">
          <h3>The night it beautiful,</h3>
          <h3>So are the faces of my people</h3>
        </div>
        <div class="feather-img-div">
          <img class="feather-img" src="/images/feather-ink-pot.png" alt="feather-ink-pot">
        </div>
      </div>
        
        <div class="radial-gradient"></div>

        <div class="featured-content-heading">
          <h2 class="featured-h2">Featured</h2>
        </div>

            <div class="featured-card">
              <div class="featured-img">
                <img src="/images/sinking-ships.png" alt="sinking-ships-img" style="border-radius: 30px;"> 
              </div>
            
              <div class="featured-box-parent">
                <div class="summary"> 
                  <p> 8 hours left on a sinking ship. Multiple stories about different couples going through heartache and grief.</p>
                </div>
              </div>

              <!-- no longer rendering on the page? -->
                <div class="featured-comments-box-parent">
                  <div class="comment-1">
                    <p><i>"This was so good"</i></p>
                  </div>
                  <div class="comment-2">
                    <p><i>"Highly Recommend"</i></p>
                  </div>
                </div>
            </div>

        <!-- ---------------------------------------- CAROUSEL (for you) ----------------------------------------------- -->
        <div class="for-you-content">
          <div class="img-slider" style="display: grid; grid-template-rows: max-content 1fr max-content">
            <div class="featured-h2">For you</div>
            <div style="display: grid; grid-template-columns: repeat(${this.slides[this.slideNumber[0]].length}, 1fr); gap: 1em">
              ${this.slides[this.slideNumber[0]].map(({ image, alt }) => html`
                <img style="aspect-ratio: 1 / 1.6; height: 350px; clip-path: circle(0% at 0 50%); border-radius: 20px;" src="${image}" alt="${alt}">
              `)}
            </div>
            <div class="navigation">
              ${this.slides.map((_, n) => html`
                <div class="btn ${n == this.slideNumber[0] ? "active" : ""}" @click="${() => this.changeToSlide(0, n)}" />
              `)}
            </div>
          </div>
        </div>
        <!-- ---------------------------------------- CAROUSEL (for you) ----------------------------------------------- --> 

        <!-- ---------------------------------------- CAROUSEL (continue reading) -------------------------------------- -->
        <div class="continue-reading-content">
          <div class="img-slider" style="display: grid; grid-template-rows: max-content 1fr max-content">
            <div class="featured-h2">Continue Reading</div>
            <div style="display: grid; grid-template-columns: repeat(${this.slides[this.slideNumber[1]].length}, 1fr); gap: 1em">
              ${this.slides[this.slideNumber[1]].map(({ image, alt }) => html`
                <img style="aspect-ratio: 1 / 1.6; height: 350px; clip-path: circle(0% at 0 50%); border-radius: 20px;" src="${image}" alt="${alt}">
              `)}
            </div>
            <div class="navigation">
              ${this.slides.map((_, n) => html`
                <div class="btn ${n == this.slideNumber[1] ? "active" : ""}" @click="${() => this.changeToSlide(1, n)}" />
              `)}
            </div>
          </div> 
        </div>
        <!-- ---------------------------------------- CAROUSEL (continue reading) -------------------------------------- -->

        <!-- ---------------------------------------- CAROUSEL (new posts) --------------------------------------------- -->
        <div class="for-you-content">
          <div class="img-slider" style="display: grid; grid-template-rows: max-content 1fr max-content">
            <div class="featured-h2">New Posts</div>
            <div style="display: grid; grid-template-columns: repeat(${this.slides[this.slideNumber[2]].length}, 1fr); gap: 1em">
              ${this.slides[this.slideNumber[2]].map(({ image, alt }) => html`
                <img style="aspect-ratio: 1 / 1.6; height: 350px; clip-path: circle(0% at 0 50%); border-radius: 20px;" src="${image}" alt="${alt}">
              `)}
            </div>
            <div class="navigation">
              ${this.slides.map((_, n) => html`
                <div class="btn ${n == this.slideNumber[2] ? "active" : ""}" @click="${() => this.changeToSlide(2, n)}" />
              `)}
            </div>
          </div>
        </div>
        <!-- ---------------------------------------- CAROUSEL (new posts) --------------------------------------------- -->
      </div> 
    `
    render(template, App.rootEl);

    if (slider !== undefined) {
      console.log('single slider')
      const el = App.rootEl.querySelectorAll(".img-slider")[slider]
      el.classList.remove("fade-in");
      setTimeout(() => {
        el.classList.add("fade-in");
      })
    } else {
      const imageSlides = App.rootEl.querySelectorAll(".img-slider");
      for (const el of imageSlides) {
        el.classList.remove("fade-in");
      }
      setTimeout(() => {
        for (const el of imageSlides) {
          el.classList.add("fade-in");
        }
      })
    }
  }
}

export default new HomeView()
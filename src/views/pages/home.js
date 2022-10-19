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
                <img src="/images/sinking-ships.png" alt="sinking-ships-img" style="border-radius: 30px;"> 
              </div>

              <div class="featured-box-parent">
                <div class="summary"> 
                  <p> 8 hours left on a sinking ship. Multiple stories about different couples going through heartache and grief.</p>
                </div>
              

              <!-- <div class="featured-comments-box-parent"> -->
                <div class="comment-1">
                  <p><i>"This was so good"</i></p>
                </div>

                <div class="comment-2">
                  <p><i>"Highly Recommend"</i></p>
                </div>
              <!-- </div> -->
              </div>
          </div>

      <!-- ----------------------------------------CAROUSEL TEST 1 ----------------------------------------------- -->
      <div class="img-slider">
        <div class="slide active">
          <img src="/images/sinking-ships.png" alt="sinking-ships-img">
        </div>
        <div class="slide">
          <img src="/images/kissing-clouds.png" alt="kissing-clouds-img">
        </div>
        <div class="slide">
          <img src="/images/pop-pop-pop.png" alt="pop-pop-pop-img">
        </div>
        <div class="slide">
          <img src="/images/collusion.png" alt="collusion-img">
        </div>
        <div class="slide">
          <img src="/images/sing-song.png" alt="sing-song-img">
        </div>
        <div class="slide">
          <img src="/images/non-stop-babbling.png" alt="non-stop-babbling-img">
        </div>

        <div class="navigation">
          <div class="btn active"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
        </div>
      </div>

      <script type="text/javascript">
        var slides = document.querySelectorAll('.slide');
        var btns = document.querySelectorAll('.btn');
        let currentSlide = 1;

        // javacript for img slider manual navigation
        var manualNav = function(manual){
          slides.forEach((slide) => {
            slide.classList.remove('active');
          })

          btns.forEach((btn) => {
            btn.classList.remove('active');
          })

          slides[manual].classList.add('active');
          btns[manual].classList.add('active');
        }

        btns.forEach((btn, i) => {
          btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
          });
        });

        // javascript for img slider autoplay navigation
        var repeat = function(activeClass){
          let active = document.getElementByClassName('active');
          let i = 1;

          var repeater = () => {
            setTimeout(function(){
              [...active].forEach(activeSlide) => {
                activeSlide.classList.remove('active');
              });

              slides[i].classList.add('active');
              btns[i].classList.add('active');
              i++;

              if(slides.length == i){
                i = 0;
              }
              if(i >= slides.length){
                return;
              }
              repeater();
            }, 10000);
          }repeater();
        }repeat();
      </script>
      <!-- ----------------------------------------CAROUSEL TEST 1 END -------------------------------------------- -->

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
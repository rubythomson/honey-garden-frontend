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

        <!-- <div id="bee" class="bee-guide-img" style="position: absolute;">
          <img src="/images/bee-logo-guide.png" height="50px" width="50px" alt="bee-img">
        </div> -->

        <img src="/bee.svg" id="rect" style="width: 300px; height: auto;"/>

        <div class="div-path" style="    position: absolute;
    left: 0;
    margin-top: -240px;
    overflow: visible;
    width: 100%;">
          <svg
          style="overflow: visible"
          width="183.15088mm"
   height="451.45297mm"
   viewBox="0 0 183.15088 451.45297"
            version="1.1"
            preserveAspectRatio="xMidyMid"
            id="svg5"
            inkscape:version="1.2.1 (9c6d41e, 2022-07-14)"
            sodipodi:docname="honey-garden-motion-path.svg"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <sodipodi:namedview
              id="namedview7"
              pagecolor="#505050"
              bordercolor="#eeeeee"
              borderopacity="1"
              inkscape:showpageshadow="0"
              inkscape:pageopacity="0"
              inkscape:pagecheckerboard="0"
              inkscape:deskcolor="#505050"
              inkscape:document-units="mm"
              showgrid="false"
              inkscape:lockguides="false"
              inkscape:zoom="0.24842659"
              inkscape:cx="386.43207"
              inkscape:cy="173.08937"
              inkscape:window-width="1512"
              inkscape:window-height="860"
              inkscape:window-x="0"
              inkscape:window-y="38"
              inkscape:window-maximized="0"
              inkscape:current-layer="layer1"/>
            <defs
              id="defs2"/>
              <g
                inkscape:label="Layer 1"
                inkscape:groupmode="layer"
                id="layer1">
                <!-- TRANSPARENT SVG PATH -->
                <path
       style="fill:none;stroke:#000000;stroke-width:0.802631;stroke-dasharray:none;stroke-opacity:0"
       d="m 72.000187,41.073225 c 0,0 74.223263,-28.557781 97.779123,-15.865432 23.55588,12.692346 34.66716,116.346527 12.88908,141.731207 -21.77808,25.3847 -113.334908,31.73088 -113.334908,31.73088 0,0 -46.667315,1.05769 -50.222918,77.21179 -3.555607,76.15408 19.555824,108.94262 19.555824,108.94262 0,0 48.000668,35.96166 96.445782,-6.34617 48.44512,-42.30781 40.88946,89.90413 40.88946,89.90413 0,0 -34.66715,102.59649 -74.66771,86.73105 -40.000549,-15.86544 -25.778128,93.0772 -0.88889,113.17343"
       id="path" />
              <!-- DOTTED SVG PATH -->
              <path
       style="fill:none;stroke:#000000;stroke-width:0.803;stroke-dasharray:1.60599995,4.81799984;stroke-opacity:0.901554;stroke-dashoffset:0"
       d="m 72.000187,41.073225 c 0,0 74.223263,-28.557781 97.779123,-15.865432 23.55588,12.692346 34.66716,116.346527 12.88908,141.731207 -21.77808,25.3847 -113.334908,31.73088 -113.334908,31.73088 0,0 -46.667315,1.05769 -50.222918,77.21179 -3.555607,76.15408 19.555824,108.94262 19.555824,108.94262 0,0 48.000668,35.96166 96.445782,-6.34617 48.44512,-42.30781 40.88946,89.90413 40.88946,89.90413 0,0 -34.66715,102.59649 -74.66771,86.73105 -40.000549,-15.86544 -25.778128,93.0772 -0.88889,113.17343"
       id="path-dotted" />
            </svg>
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
    render(template, App.rootEl);

    gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
  duration: 5, 
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});

  }
}


export default new GuideView()
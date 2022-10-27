import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from './../../PoemAPI'
import Toast from '../../Toast'

class LibraryView {
  async init(){
    document.title = 'Library'   
    this.poems = null  
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
      <va-app-header title="Library" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1 class="library-title">Library</h1>

        <div class="library-filter-grid-container">
          <div class="library-filter">
          <a href="/library-reading-lists" style="text-decoration: none;">
              <div class="library-reading-list-btn">Current Reads</div>
            </a>
            <a href="/library-archived" style="text-decoration: none;">
              <div class="current-reads-btn">Archived</div>
            </a>
            <a href="/library-reading-lists" style="text-decoration: none;">
              <div class="current-reads-btn">Reading Lists</div>
            </a>
          </div>

          <div class="sort-by-btn-container">
            <div class="sort-by-btn"> 
              <sl-icon slot="prefix" name="chevron-down" class="sort-by-icon"></sl-icon>  
              Sort By</div>
          </div>
        </div>

        <div class="library-archived-container">
          <div>
            <img src="/images/time-traveller.png" alt="time-traveller-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/sing-song.png" alt="sing-song-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/non-stop-babbling.png" alt="non-stop-babbling-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/consistency.png" alt="consistency-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/light-bulb.png" alt="light-bulb-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/sparks.png" alt="sparks-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/peaking-point.png" alt="peaking-point-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/chess.png" alt="chess-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/on-the-path.png" alt="on-the-path-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/swan-castle.png" alt="swan-castle-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/king.png" alt="king-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/home.png" alt="home-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/ruins.png" alt="ruins-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/dark-side.png" alt="dark-side-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/fairy-circle.png" alt="fairy-circle-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/tipping-point.png" alt="tipping-point-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/midnight.png" alt="midnight-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/blooming.png" alt="blooming-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/marry-me.png" alt="marry-me-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
          <div>
            <img src="/images/you-may-kiss-the-bride.png" alt="you-may-kiss-the-bride-img" class="serve-me-img" style="box-shadow: 0 0 10px lightgray;">
          </div>
        </div>

      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new LibraryView()
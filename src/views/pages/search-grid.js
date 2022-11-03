import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from './../../PoemAPI'
import Toast from '../../Toast'
import { useParam } from '../../params'

class SearchGridView {
  async init(){
    document.title = 'Search Filter'
    this.category = useParam("category");
    this.poems = null 
    this.categories = [
        "Romance",
        "Fantasy",
        "Drama",
        "Horror",
        "Comedy",
        "Mystery",
        "Paranormal",
        "Thriller",
        "Science-Fiction",
        "Historical",
        "Adventure",
        "Non-Fiction",
        "18+ Only",
    ]
    this.render()    
    Utils.pageIntroAnim()
    await this.getPoems()
  }

  async filterPoems(field, match){
    // validate
    if(!field || !match) return

    // get fresh copy of poems
    this.poems = await PoemAPI.getPoems()

    let filteredPoems

    // content
    if(field === 'status'){
      filteredPoems = this.poems.filter(poem => poem.status == match)
    }

    // pages
    if(field === 'pages'){
      let lower = null
      let upper = null 
      if (match.includes("-")){
        lower = match.split('-')[0]
        upper = match.split('-')[1]
      }
      else if (match.includes('+')) {
        lower = match.replace("+", "");
      }

      filteredPoems = this.poems.filter(poem =>
          (!lower || poem.pages >= lower)
          && (!upper || poem.pages <= upper));
    }    

    // render
    this.poems = filteredPoems
    this.render()
  }

  clearFilterBtns(){
   const filterBtns = document.querySelectorAll('.filter-btn')
   filterBtns.forEach(btn => btn.removeAttribute("type"))  
  }

  handleFilterBtn(e){
    // clear all filter Btns
    this.clearFilterBtns()

    // set Btn active state (type = primary)
    e.target.setAttribute("type", "primary")

    // extract field & match from btn
    const field = e.target.getAttribute("data-field")
    const match = e.target.getAttribute("data-match")

    // filter the poems
    this.filterPoems(field, match)
  }

  clearFilters(){
    this.getPoems()
    this.clearFilterBtns()
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
      <va-app-header title="Search Grid" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>

      <div class="page-content"> 
        <h1 class="search-title">Search</h1>

        <div class="outer">
          <div class="top">
            ${this.title ? html`
                <h1 class="page-title">${this.title}</h1>
              `:``}
              <slot></slot>
              <div class="calign">
                <div class="searchContainer">
                  
                  <img class="search-icon" src="/images/search-icon.png" style="width: 1.8vw; height: 3.3vh;" alt="search-icon">
                  <input class="searchBox" type="search" name="search">

                  <div class="dropdown">
                    <button class="dropbtn" class="gg-options">
                      <img src="/images/filter-icon.png" style="width: 1.8vw; height: 3.3vh;" alt="filter-icon">
                    </button>
  
                      <div id="search-dropdown">
                        <sl-card class="dropdown-content">
                          <div class="row-dropdown-length">
                            <a href="#">Length</a>
                            <ul class="length-list">
                              <li>
                                <sl-button class="filter-btn" size="small" data-field="pages" data-match="Any" @click=${this.handleFilterBtn.bind(this)}>
                                  <sl-icon name="square"></sl-icon>
                                </sl-button>
                                Any</li>

                              <li>
                              <sl-button class="filter-btn" size="small" data-field="pages" data-match="1-10" @click=${this.handleFilterBtn.bind(this)}>
                                <sl-icon name="square"></sl-icon>  
                              </sl-button>
                                1-10 Chapters</li>

                              <li>
                              <sl-button class="filter-btn" size="small" data-field="pages" data-match="10-30" @click=${this.handleFilterBtn.bind(this)}>
                                <sl-icon name="square"></sl-icon> 
                              </sl-button>  
                                10-30 Chapters</li>

                              <li>
                              <sl-button class="filter-btn" size="small" data-field="pages" data-match="30-50" @click=${this.handleFilterBtn.bind(this)}> 
                                <sl-icon name="square"></sl-icon>  
                              </sl-button>
                              30-50 Chapters</li>

                              <li>
                              <sl-button class="filter-btn" size="small" data-field="pages" data-match="50+" @click=${this.handleFilterBtn.bind(this)}> 
                                <sl-icon name="square"></sl-icon> 
                              </sl-button> 
                                50+ Chapters</li>
                            </ul>
                          </div>

                          <div class="row-dropdown-updates">
                            <a href="#">Content</a>
                            <ul class="updates-list">
                              <li>
                              <sl-button class="filter-btn" size="small"> 
                                <sl-icon name="square"></sl-icon> <!-- Need to figure this out in database -->
                              </sl-button>  
                              All</li>

                              <li>
                              <sl-button class="filter-btn" size="small" data-field="status" data-match="Completed" @click=${this.handleFilterBtn.bind(this)}> 
                                <sl-icon name="square"></sl-icon> 
                              </sl-button>  
                              Completed</li>

                              <li>
                              <sl-button class="filter-btn" size="small" data-field="status" data-match="Ongoing" @click=${this.handleFilterBtn.bind(this)}> 
                                <sl-icon name="square"></sl-icon>
                              </sl-button>   
                              Ongoing</li>
                            </ul>
                          </div>

                          <div class="row-dropdown-C">
                            <a href="#">Updates</a>
                            <ul class="C-list">
                              <li>
                              <sl-button class="filter-btn" size="small">
                                <sl-icon name="square"></sl-icon> 
                              </sl-button>   
                              Anytime</li>

                              <li>
                              <sl-button class="filter-btn" size="small">
                                <sl-icon name="square"></sl-icon>  
                              </sl-button> 
                              Today</li>

                              <li>
                              <sl-button class="filter-btn" size="small">
                                <sl-icon name="square"></sl-icon>  
                              </sl-button> 
                              This Week</li>

                              <li>
                              <sl-button class="filter-btn" size="small">
                                <sl-icon name="square"></sl-icon> 
                              </sl-button>   
                              This Month</li>

                              <li>
                              <sl-button class="filter-btn" size="small">
                                <sl-icon name="square"></sl-icon>
                              </sl-button>    
                              This Year</li>
                            </ul>

                            <!-- <div class="apply-filters">
                              <sl-button size="small" pill>Apply Filters</sl-button>
                            </div>
                            -->

                            <div>
                              <sl-button class="reset-filters" size="small" pill @click=${this.clearFilters.bind(this)}>Reset Filters</sl-button>
                            </div>
                          </div>
                        </sl-card>

                      </div>
                  </div>
                  <input type="submit" value="Search" class="searchButton">          
                </div>

                <div class="radial-gradient"></div>

                <div class="search-grid-h2">
                  <h2>Popular Categories</h2>
                </div>

                <div class="search-grid">
                  ${this.categories.map(name => html`
                    <sl-button variant="default" data-name="name" size="large" @click=${() => {
                      this.category.set(name, "/browse");
                    }}>${name}</sl-button>
                  `)}
                </div>
              </div>
          </div>
        </div>

        <br>
        <br>
        <br>

        <div class="feeling-adventurous-btn">
          <p>Feeling adventurous?</p>
        </div>
        
        <div class="randomise-container">
          <sl-button class="randomise-btn" variant="primary" size="medium" pill>Randomise</sl-button>
        </div>

        <br>
        <br>
        
      </div>      
    `
    render(template, App.rootEl);

    const popup = document.getElementById("search-dropdown").querySelector(".dropdown-content");
    const { x, y, width, height  } = popup.getBoundingClientRect();
    const  screenWidth = document.querySelector("html").clientWidth;
    const offsetX = (x + width) - screenWidth;
    if (offsetX > 0) {
      popup.style.transform = `translate(-${offsetX}px, 0)`;
    }
    console.log(popup, x, y, screenWidth, offsetX)
  }
}

export default new SearchGridView()
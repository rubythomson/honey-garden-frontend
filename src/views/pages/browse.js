import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from './../../PoemAPI'
import Toast from '../../Toast'

class BrowseView {
  async init(){
    document.title = 'Browse'  
    this.poems = null  
    this.render()    
    Utils.pageIntroAnim()
    await this.getPoems()
    //this.filterPoems('pages', '1-10')
  }

  async filterPoems(field, match){
    // validate
    if(!field || !match) return

    // get fresh copy of poems
    this.poems = await PoemAPI.getPoems()

    let filteredPoems

    // content
    if(field == 'status'){
      filteredPoems = this.poems.filter(poem => poem.status == match)
    }

    // pages
    if(field == 'pages'){
      // get pageRangeStart
      const pageRangeStart = match.split('-')[0]
      const pageRangeEnd = match.split('-')[1]
      filteredPoems = this.poems.filter(poem => poem.pages >= pageRangeStart && poem.pages <= pageRangeEnd)
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
      <va-app-header title="Browse" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>

      <div class="page-content"> 

        <div class="outer">
          <div class="top">
            ${this.title ? html`
                <h1 class="page-title">${this.title}</h1>
              `:``}
              <slot></slot>
              <div class="calign">
                <div class="searchContainer">
                  <i class="fa fa-search searchIcon"></i>
                  <input class="searchBox" type="search" name="search">

                  <div class="dropdown">
                    <button class="dropbtn">
                      <i class="gg-options"></i>
                    </button>
  
                      <div>
                        <sl-card class="dropdown-content">
                          <div class="row-dropdown-length">
                            <a href="#">Length</a>
                            <ul class="length-list">
                              <li>
                                <sl-button class="filter-btn" size="small">
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
                            <a href="#">Updates</a>
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
                            <a href="#">Content</a>
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

                            <div class="apply-filters">
                              <sl-button size="small" pill>Apply Filters</sl-button>
                            </div>

                            <div class="reset-filters">
                              <sl-button size="small" pill @click=${this.clearFilters.bind(this)}>Reset Filters</sl-button>
                            </div>
                          </div>
                        </sl-card>
                      </div>
                  </div>
                  <input type="submit" value="Search" class="searchButton">          
                </div>
              </div>
          </div>
            
          <div class="bottom">
            <div class="poems-grid">
              ${this.poems == null ? html`
                <sl-spinner></sl-spinner>
                ` : html`
                ${this.poems.map(poem => html`
                  <va-poem class="poem-card"
                      id="${poem._id}"
                      name="${poem.name}" 
                      description="${poem.description}"
                      views="${poem.views}"
                      status="${poem.status}"
                      pages="${poem.pages}"
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


export default new BrowseView()
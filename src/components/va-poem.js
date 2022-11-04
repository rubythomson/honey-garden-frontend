import { LitElement, html, css } from '@polymer/lit-element'
import { render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../Router'
import Auth from './../Auth'
import App from './../App'
import UserAPI from './../UserAPI'
import Toast from './../Toast'

customElements.define('va-poem', class Poem extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      id: {
        type: String
      }, 
      title: {
        type: String
      },  
      views: {
        type: String
      }, 
      status: {
        type: String
      }, 
      pages: {
        type: String
      },  
      description: {
        type: String
      },
      user: {
        type: Object
      },
      image: {
        type: String
      },
      showStartReadingHandler: {
        type: String
      },
      showReadingListHandler: {
        type: String
      }
    }
  }

  firstUpdated(){
    super.firstUpdated()
  }

  saveLibraryHandler(){
   // create sl-dialog
   const dialogEl = document.createElement('sl-dialog')
   // add class name
   dialogEl.className = 'poem-dialog'
   // sl-dialog content
   const dialogContent = html`
   <style>
    .wrap {
        display: flex;
    }
    .image {
      width: 50%;
    }
    .image img {
      width: 100%;
    }
    .content {
        padding-left: 1em;
    }
   </style>
   <div class="wrap">
        <div class="content">
          <sl-button size="medium" pill @click=${this.readingListHandler.bind(this)}>
            <h3>My Library (Private)</h3> <!-- this is the save to reading list (add to favs) btn STYLE -->
          </sl-button>
                <p></p>
                <p></p>
          <sl-button size="medium" pill>
            <h3>Modern Takes</h3>
          </sl-button>
                <p></p>
                <p></p>
            <sl-button size="medium" pill>Add to new reading list...</sl-button>
            <div class="saveBtn" style="color: #fff4e1;"> <!-- Get colour working -->
                <sl-icon-button name="plus-circle-fill" label="Add" style="font-size: 23px"></sl-icon-button>
            </div>
        </div>
   </div>
   `
   render(dialogContent, dialogEl)

   // append to document.body
   document.body.append(dialogEl)

   // show sl-dialog
   dialogEl.show()

   // on hide delete dialogEl
   dialogEl.addEventListener('sl-after-hide', () => {
    dialogEl.remove()
   })
  }

  async readingListHandler(){    
    try {
      UserAPI.readingListHandler(this.id)
      Toast.show('Poem added to reading list')
    }catch(err){
      Toast.show(err, 'error')
    }
  }
  
  render(){    

    const friendlyNumber = number => {
      if(number<1000){
        return number
      }
      if(number<1000000){
        return `${Math.round(number / 1000 * 10) / 10}k`
      }
      return `${Math.round(number / 1000000 * 10) / 10}M`
    }

    return html`
    <style>
      .poem-card {
        border-radius: 30px;
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 50%));
        grid-template-rows: max-content 1fr max-content;
        gap: 15px;
        padding: 1em;
        background-color: #FFFFFF;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }

      .poem-card img {
        grid-row: 1 / -1;
        max-width: 100%;
        border-radius: 30px;
        border: 0.2px solid lightgray;
        aspect-ratio: 1 / 1.6;
        object-fit: cover;
        margin: 0.5em;
      }

      .poem-card .stats {
        display: flex;
        flex-direction: column;
        gap: 0.7em;
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: 1.3em;
      }

      .poem-card .stats > li {
        display: flex;
        align-items: center;
      }

      .poem-card p {
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 0.5em;
      }

      .poem-card .actions {
        display: flex;
        gap: 0.5em;
      }

      .search-description {
        font-size: 1.2em;
      }

      .start-reading-btn::part(base) {
        background-color: #FFF4E1;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border: 0.8px solid black;
      }

      .views-icon-va-poem {
        width: 1.8vw;
        height: 2.25vh;
        aspect-ratio: 1/1;
        padding-right: 0.5em;
        padding-left: 0.2em;
      }

      .status-icon-va-poem {
        width: 1.8vw;
        height: 3.3vh;
        aspect-ratio: 1/1;
        padding-right: 0.2em;
        padding-left: 0.1em;
      }

      .pages-icon-va-poem{
        width: 2vw;
        height: 3.35vh;
        aspect-ratio: 1/1;
        padding-right: 0.1em;
        padding-left: 0.1em;
      }

      .plus-icon-container {
        border-radius: 50px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        margin-left: 1em;
        margin-right: 1em;
      }
    </style> 

    <div class="poem-card">
        <img slot="image" src="${App.apiBase}/images/${this.image}"/>
        <ul class="stats">
          ${this.views && html`
            <li>
              <div style="font-size: 0.8em;">
                <img src="/images/views-icon.png" class="views-icon-va-poem" alt="views-icon-img" style="border: 0; border-radius: 0; margin-top:1em;">
              </div>
              <!-- <sl-icon-button name="eye" label="Views" style="font-size: 23px"></sl-icon-button> -->
              ${friendlyNumber(this.views)}
            </li>`}
          ${this.status && html`
            <li>
              <img src="/images/status-icon.png" class="status-icon-va-poem" alt="status-icon-img" style="border: 0; border-radius: 0;">
              <!-- <sl-icon-button name="pencil-square" label="Status" style="font-size: 23px"></sl-icon-button> -->
              ${this.status}
            </li>`}
          ${this.pages && html`
          <li>
              <img src="/images/pages-icon.png" class="pages-icon-va-poem" alt="pages-icon-img" style="border: 0; border-radius: 0;">
             <!--  <sl-icon-button name="book" label="Pages" style="font-size: 23px"></sl-icon-button> -->
              ${this.pages}
          </li>`}
        </ul>
        <p class="search-description">
          ${this.description}
        </p>
        <div class="actions">
          <div class="plus-icon-container">
            <sl-icon-button @click=${this.readingListHandler.bind(this)} name="plus" label="Save" style="font-size: 23px"></sl-icon-button>
          </div>
          <a href="/read">
            <sl-button size="medium" pill class="start-reading-btn">Start Reading</sl-button>
          </a>
        </div>
    </div>
    `
  }
})
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

  // was deleted and updated with below code but they are two diff features - link to actual poem so user can read
  startReadingHandler(){
    alert("Start Reading!")
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
    return html`
    <style>
      .poem-card {
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 50%));
        grid-template-rows: max-content 1fr max-content;
        border-radius: 50px;
        gap: 15px;
        padding: 1em;
        background-color: #FFFFFF;
      }

      .poem-card img {
        grid-row: 1 / -1;
        max-width: 100%;
        border-radius: 5px;
        border: 0.2px solid lightgray;
        aspect-ratio: 1 / 1.6;
        object-fit: cover;
      }

      .poem-card .stats {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .poem-card .stats > li {
        display: flex;
        align-items: center;
      }

      .poem-card p {
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 8px;
      }

      .poem-card .actions {
        display: flex;
        gap: 0.5em;
      }

      .search-description {
        font-size: 1.2em;
      }
    </style> 
    <div class="poem-card">
        <img slot="image" src="${App.apiBase}/images/${this.image}"/>
        <ul class="stats">
          ${this.views && html`
            <li>
              <sl-icon-button name="eye" label="Views" style="font-size: 23px"></sl-icon-button>
              ${this.views}
            </li>`}
          ${this.status && html`
            <li>
              <sl-icon-button name="pencil-square" label="Status" style="font-size: 23px"></sl-icon-button>
              ${this.status}
            </li>`}
          ${this.pages && html`
          <li>
              <sl-icon-button name="book" label="Pages" style="font-size: 23px"></sl-icon-button>
              ${this.pages}
          </li>`}
        </ul>
        <p class="search-description">
          ${this.description}
        </p>
        <div class="actions">
          <sl-icon-button @click=${this.readingListHandler.bind(this)} name="plus-circle" label="Save" style="font-size: 23px"></sl-icon-button>
          <sl-button @click=${this.startReadingHandler.bind(this)} size="medium" pill>Start Reading</sl-button>
        </div>
    </div>
    `
  }
})
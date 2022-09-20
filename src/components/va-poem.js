import { LitElement, html, css } from '@polymer/lit-element'
import { render } from 'lit-html'
import {anchorRoute, gotoRoute} from './../Router'
import Auth from './../Auth'
import App from './../App'

customElements.define('va-poem', class Poem extends LitElement {
  constructor(){
    super()    
  }

  static get properties(){
    return {
      name: {
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
            <h2>My Library (Private)</h2>
                <p></p>
                <p></p>
            <h2>Modern Takes</h2>
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

  startReadingHandler(){
    alert("Start Reading!")
  }
  
  render(){    
    return html`
    <style>

    </style> 
    <sl-card>
        <img slot="image" src="${App.apiBase}/images/${this.image}"/>
        <h2>${this.name}</h2>
            <h3>
                <sl-icon-button name="eye" label="Views" style="font-size: 23px"></sl-icon-button>
                ${this.views}
            </h3>
            <h3>
                <sl-icon-button name="pencil-square" label="Status" style="font-size: 23px"></sl-icon-button>
                ${this.status}
            </h3>
            <h3>
                <sl-icon-button name="book" label="Pages" style="font-size: 23px"></sl-icon-button>
                ${this.pages}
            </h3>
            <sl-icon-button @click=${this.saveLibraryHandler.bind(this)} name="plus-circle" label="Save" style="font-size: 23px"></sl-icon-button>
            <sl-button @click=${this.startReadingHandler.bind(this)} size="medium" pill>Start Reading</sl-button>
    </sl-card>
    `
  }
  
})
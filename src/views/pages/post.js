import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class PostView {
  init(){
    document.title = 'Post'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      <va-app-header title="Post" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
        <h1>Post</h1>
        <p>Add a post ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}


export default new PostView()
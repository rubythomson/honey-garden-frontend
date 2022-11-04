import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import PoemAPI from './../../PoemAPI'
import Toast from '../../Toast'

class ReadView {
  async init(){
    document.title = 'Read'    
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
      <va-app-header title="Read" user="${JSON.stringify(Auth.currentUser)}"></va-app-header>
      <div class="page-content">        
      
      <div class="read-card-top">
        <div class="read-card-img">
          <img src="/images/sinking-ships.png" alt="sinking-ships" style="border-radius: 10px;">
        </div>

        <div>
          <div class="img-title">
            <h3>Sinking Ships</h3>
          </div>
          <div class="read-icons-grid">
            <div class="read-card-icon">
              <div class="read-icon-container">
                <img src="/images/views-icon.png" style="width: 2vw" height="20vh" class="views-icon-read">
              </div>
              <p class="read-views-text">800</p>
            </div>
            <div class="read-card-icon">
              <div class="read-icon-container">
                <img src="/images/status-icon.png" style="width: 2vw" height="30vh" class="status-icon-read">
              </div>
              <p class="read-status-text">Completed</p>
            </div>
            <div class="read-card-icon">
              <div class="read-icon-container">
                <img src="/images/pages-icon.png" style="width: 2vw" height="20vh" class="pages-icon-read">
              </div>
              <p class="read-pages-text">12</p>
            </div>
          </div>
        </div>

        <div class="read-user-avatar">
          <img src="/images/user-five.png" alt="user-five-avatar-img" style="width: 2vw; height: 3.7vh;">
          <p class="username-read">Magika012</p>
        </div>
      </div>

      <div class="progress">
        <progress max="100" value="30"></progress>
      </div>

      <sl-dropdown>
        <sl-button slot="trigger" caret class="read-dropdown">
          <p class="read-edit-btn-text-one">Chapter 1 | "The ship is sinking"</p>
        </sl-button> 
      </sl-dropdown>

      <hr>
      <sl-dropdown>
        <sl-button slot="trigger" caret style="width: 8vw;" class="read-edit-dropdown">
          <p class="read-edit-btn-text">Edit</p>
        </sl-button> 
      </sl-dropdown>

      <h1 class="calign">Chapter 1</h1>
      <h2 class="calign">"The ship is sinking"</h2>

      <div class="lorem">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
        Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
        faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
        Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
        Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
        non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
        <p></p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
        Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
        faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
        Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
        Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
        non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
        Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
        faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
        Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
        Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
        non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
        <p></p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
        Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
        faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
        Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
        Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
        non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
        <p></p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. 
        <p></p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
        Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
        faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
        Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
        Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
        non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
        Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
        faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
        Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
        Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
        non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
        <p></p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. 
        </p>
        <br>
        <br>
        <br>
      </div>

      <div class="next-page">
        <sl-button class="next-page-btn" variant="primary" size="medium" pill>Next Page ></sl-button>
      </div>

      <div class="rose-content">
        <div class="rose-read">
          <img src="/images/rose-flower.png" alt="rose-icon" style="width: 3vw; height: 5vh;">
        </div>
        <div class="rose-read-text">
          <p>Send a rose</p>
        </div>
      </div>
      <hr> 

      <sl-card class="comments-div">
        <div class="comments-content">
          <div class="comments-grid-1">
            <img src="/images/user-six.png" alt="user-six-img" class="read-comments-user-avatar">
            <sl-input placeholder="Add comment" class="sl-input-read-comment"></sl-input>
          </div>

          <hr>

        <div class="comments-content">
          <div class="comments-grid-2">
            <img src="/images/user-seven.png" alt="user-seven-img" class="read-comments-user-avatar">
            <p>So good!</p>
          </div>
        </div>
 
        <hr>

        <div class="comments-content">
          <div class="comments-grid-2">
            <img src="/images/user-eight.png" alt="user-eight-img" class="read-comments-user-avatar">
            <p>Keep going!!</p>
          </div>
        </div>

      </sl-card>


    </div>     
    `
    render(template, App.rootEl)
  }
}


export default new ReadView()
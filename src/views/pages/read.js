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
      
      <sl-card class="read-card-top">
        <div class="profile">
          ${Auth.currentUser && Auth.currentUser.avatar ? html`
            <sl-avatar style="--size: 30px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
          `:html`
          <sl-avatar style="--size: 30px; margin-bottom: 1em;"></sl-avatar>
          `}
          <p>${Auth.currentUser.userName}</p>
        </div>

        <div class="read-card-img">
          <img src="/images/sinking-ships.jpg" alt="sinking-ships">
        </div>
        <div class="img-title">
          <h3>Sinking Ships</h3>
        </div>

        <div class="read-card-icon">
          <sl-icon-button name="eye" label="Views" style="font-size: 23px"></sl-icon-button>
        </div>
        <div class="read-card-icon">
          <sl-icon-button name="pencil-square" label="Status" style="font-size: 23px"></sl-icon-button>
        </div>
        <div class="read-card-icon">
          <sl-icon-button name="book" label="Pages" style="font-size: 23px"></sl-icon-button>
        </div>

        <sl-button size="small" pill>Chapter 1 | "The ship is sinking"
          <sl-icon style="margin-left:5px;" name="chevron-down"></sl-icon>
        </sl-button>

        <div class="progress">
          <progress max="100" value="30"></progress>
        </div>
      </sl-card>

      <hr>
        <sl-button size="small" pill>Edit
          <sl-icon style="margin-left:5px;" name="chevron-down"></sl-icon>
        </sl-button>

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
          <iconify-icon icon="vs:rose" width="30" height="50"></iconify-icon>
        </div>
        <div class="rose-read-text">
          <p>Send a rose</p>
        </div>
      </div>
      <hr> 

      <sl-card class="comments-div">
        <div class="comments-content">
          ${Auth.currentUser && Auth.currentUser.avatar ? html`
            <sl-avatar style="--size: 50px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
          `:html`
          <sl-avatar style="--size: 50px; margin-bottom: 1em;"></sl-avatar>
          `}
        </div>
        <sl-input placeholder="Add comment"></sl-input>
        <hr>

        <div class="comments-content">
          ${Auth.currentUser && Auth.currentUser.avatar ? html`
            <sl-avatar style="--size: 50px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
          `:html`
          <sl-avatar style="--size: 50px; margin-bottom: 1em;"></sl-avatar>
          `}
        </div>
        <hr>
        <div class="comments-content">
          ${Auth.currentUser && Auth.currentUser.avatar ? html`
            <sl-avatar style="--size: 50px; margin-bottom: 1em;" image=${(Auth.currentUser && Auth.currentUser.avatar) ? `${App.apiBase}/images/${Auth.currentUser.avatar}` : ''}></sl-avatar>
          `:html`
          <sl-avatar style="--size: 50px; margin-bottom: 1em;"></sl-avatar>
          `}
        </div>
        <hr>
      </sl-card>


    </div>     
    `
    render(template, App.rootEl)
  }
}


export default new ReadView()
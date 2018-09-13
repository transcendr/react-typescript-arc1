import { LitElement, html } from '@polymer/lit-element'
import { repeat } from 'lit-html/lib/repeat'
console.log('rep', repeat)

interface ContentView {
  [key: string]: any
}

interface ComponentProps {
  [key: string]: any
}

interface ComponentAPI {
  [key: string]: any
}
class FirebaseChat extends LitElement implements ComponentProps {
  messages: any[]

  // static get properties() {
  //   return {
  //     postid: String,
  //     count: Number,
  //   }
  // }

  constructor() {
    super()
  }

  __setRoot(root: object) {
    this.root = root
  }

  _firstRendered() {
    this.__initRender()
    this.messages = []
  }

  __initRender() {
    //Set component root
    this.__setRoot(this.shadowRoot)

    //Attach Custom Event Dispatchers
    this.onNewMessage = (e: Event) => this.__eventsApi(e).newMessage()
    this.form = this.root.querySelector('#message-form')
    this.form.addEventListener('submit', this.onNewMessage)
  }

  __eventsApi(e: Event) {
    e.preventDefault()
    return {
      init: () => {
        this.dispatchEvent(new CustomEvent('init'))
      },
      newMessage: () => {
        const textarea = this.root.querySelector('#message-form textarea')
        const text = textarea.value
        this.dispatchEvent(
          new CustomEvent('new-message', {
            detail: {
              text,
            },
          })
        )
        //Clear form
        textarea.value = ''
      },
    }
  }

  _render({  }: ComponentAPI) {
    let placeholder = this.__renderContentView({
      type: 'loading',
    })
    return placeholder
  }

  __styles() {
    return html`
      <style>
        @import url('https://fonts.googleapis.com/css?family=Lato');
        * {
          font-family: Lato, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }

        *, *:before, *:after {
          box-sizing: border-box;
        }

        .clear {
          width: 100%;
          clear: both;
        }

        #firebase-chat {
          position: fixed;
          top: 0;
          right: 0;
          width: 400px;
          border-left: 12px solid #444;
          padding: 5px 3px;
          background: #ededed;
          height: 100%;
          box-shadow: -5px 0px 10px 1px rgba(0, 0, 0, .35);
        }

        header {
          text-align: center;
          font-weight: bold;
          background: #ccc;
          margin: 0 0 20px 0;
          padding: 10px 0;
          border-radius: 4px;
        }

        #chat-window {
          height: 80%;
          height: 500px;
          overflow-y: scroll;
        }

        #message-window {
          width: 90%;
          height: 20%;
          position: absolute;
          bottom: 0px;
          border-top: 2px solid #444;
          padding: 10px 0;
        }

        textarea {
          width: 100%;
          padding: 15px;
        }

        button {
          width: 100%;
          float: right;
          padding: 7px 0;
        }

        .chat-block {
          padding: 10px 0;
          border-bottom: 1px solid #ccc;
          padding: 20px 5px;
        }

        .chat-block .heading {
          width: 100%;
          font-size: .8em;
        }

        .chat-block .heading .username {
          float: left;
        }

        .chat-block .heading .time {
          float: right;
        }

        .chat-block .message {
          clear: both;
          display: block;
          height: auto;
          padding: 20px 0 0 0;
        }

        .chat-block .message .avatar {
          float: left;
          width: 50px;
        }

        .chat-block .message .avatar img {
          border-radius: 80px;
        }

        .chat-block .message .text {
          float: right;
          padding: 0 5px;
          width: 300px;
        }
      </style>
    `
  }

  __renderContentView(options: ContentView) {
    this.messages = [
      {
        id: 1,
        text: 'message 1',
      },
      {
        id: 2,
        text: 'message 2',
      },
      {
        id: 3,
        text: 'message 3',
      },
    ]
    return html`
      ${this.__styles()}
      <div id="firebase-chat">

        <header>Game Chat</header>

        <main>
          <div id="chat-window">
            ${repeat(
              this.messages,
              i => i.id,
              (i, index) => html`<div>hi</div>`
            )}
          </div>
          <div id="message-window">
            <form id="message-form">
              <textarea rows="4" placeholder="Join the conversation!"></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </main>

        <footer></footer>

      </div>
    `
  }

  __chatBlock() {
    return html`
      <div class="chat-block">
        <div class="heading">
          <div class="username">
            TRANSCENDRSTUDIO
          </div>
          <div class="time">
            3:40 pm
          </div>
        </div>

        <div class="message">
          <div class="avatar">
            <img src="https://via.placeholder.com/50x50" />
          </div>
          <div class="text">
            I really love this game, it's so interesting!
          </div>
        </div>

        <div class="clear"></div>
      </div>
    `
  }
}

export default FirebaseChat

//Define custom element
try {
  customElements.define('gtove-firebasechat', FirebaseChat)
} catch (e) {
  console.log('Web component already exists')
}

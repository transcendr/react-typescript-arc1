import { LitElement, html } from '@polymer/lit-element'

interface NonContentView {
  type: string
}

interface GiphyEmbedProps {
  giphyId: string
  count: number
}

interface ComponentAPI {
  postid: string
  count: number
}

export namespace ComponentNS {
  export interface IntrinsicElements {
    'naia-giphyembed': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >
  }
}

class GiphyEmbed extends LitElement implements GiphyEmbedProps {
  static get properties() {
    return {
      postid: String,
      count: Number,
    }
  }

  giphyId: string
  count: number
  postid: string
  root: any
  onKick: (e: Event) => void
  gifimg: HTMLElement

  constructor() {
    super()
  }

  __eventsApi(e: Event) {
    return {
      kick: () => {
        // console.log('Dispatch: Kick', e)
        this.dispatchEvent(
          new CustomEvent('kick', { detail: { kicked: true } })
        )
      },
    }
  }

  __api() {
    return {
      postid: this.postid,
    }
  }

  __setRoot(root: ShadowRoot | null) {
    this.root = root
  }

  _firstRendered() {
    this.__initRender()
  }

  __initRender() {
    // Set component root
    this.__setRoot(this.shadowRoot)

    // Attach Custom Event Dispatchers
    this.onKick = (e: Event) => this.__eventsApi(e).kick()
    this.gifimg = this.root.querySelector('img')
    this.gifimg.addEventListener('click', this.onKick)
  }

  __styles() {
    return html`
      <style>
        @import url('https://fonts.googleapis.com/css?family=Lato');
        h1,h2, p {
          font-family: Lato, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
        code { background: #efefef; font-size: 1.1em; border-radius: 4px; padding: 0 5px;}
      </style>
    `
  }

  _render({ postid, count }: ComponentAPI) {
    this.giphyId = postid
    this.count = count

    //Load dummy placeholder concept
    let placeholder = this.__renderContentView({
      type: 'loading',
    })
    return placeholder
  }

  __renderContentView(options: NonContentView) {
    return html`
      ${this.__styles()}
      <img src="https://i.giphy.com/${this.giphyId}.gif" />
      <p>Click me to load a gif using the custom <code>kick</code> event listener</p>
      <p>I've been clicked ${this.count} times!</p>
    `
  }

  //Cleanup component listeners, etc when disconnected
  __cleanup() {
    this.gifimg.removeEventListener('click', this.onKick)
  }
}

export default GiphyEmbed

//Define custom element
//https://stackoverflow.com/questions/46496097/prevent-duplicate-component-registration-when-using-webpack2-with-hot-reload
try {
  customElements.define('naia-giphyembed', GiphyEmbed)
} catch (e) {
  console.log('Web component already exists')
}

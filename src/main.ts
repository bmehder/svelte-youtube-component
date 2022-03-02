import App from './App.svelte'

// const app = new App({
//   target: document.querySelector('#youtube'),
//   props: {
//     id: 'h9MSHl40z-g',
//     poster: 'maxresdefault.jpg',
//     title: 'Youtube Svelte Component',
//     color: 'white',
//   },
// })

export default function (target, props) {
  new App({
    target,
    props,
  })
}

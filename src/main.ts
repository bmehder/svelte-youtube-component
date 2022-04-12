import Youtube from './Youtube.svelte'

export default function (target, props, anchor = null) {
  new Youtube({
    target,
    props,
    anchor,
  })
}

module.exports = scrollToAnchor

function scrollToAnchor (anchor) {
  if (anchor) {
    try {
      var el = document.querySelector(anchor)
      if (el) el.scrollIntoView(true)
    } catch (e) {}
  }
}

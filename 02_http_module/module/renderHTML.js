function renderHTML(url) {
  switch(url) {
    case '/home':
      return `
        <html>
          <div>home page</div>
        </html>
      `
    case '/list':
      return `
        <html>
          <div>list page</div>
        </html>
      `
    default:
      return `
        <html>
          <div>404 not found</div>
        </html>
      `
  }
}

module.exports = {
  renderHTML
}
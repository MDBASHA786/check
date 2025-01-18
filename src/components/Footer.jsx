import React from 'react'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
        <div className="d-flex">
            <div className="copy-rights">
                <h4>COPYRIGHT © ICON {year}</h4>
                <p>Made with ❤️ by <a target='_blank' href="http://linkedin.com/in/mohamed-halith-smh">ICON DEVELOPERS</a></p>
            </div>
            <div className="social-links">
            <i className='bx bxl-instagram'></i> <a target='_blank' href="https://www.instagram.com/petrona.act">Petrona.act</a>
            </div>
        </div>
    </div>
  )
}

export default Footer
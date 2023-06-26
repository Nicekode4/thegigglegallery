import React from 'react'
import { HeaderStyle } from './Header.style'
import SidebarDrawer from '../SidebarDrawer/SidebarDrawer'

function Header() {
	return (
		<HeaderStyle>
      <ul>
        <li></li>
      </ul>
			<div className="top">
        <SidebarDrawer />
				<h1><span className="s1">The</span> Gi<span className="s2">gg</span>le Ga<span className="s3">ll</span>ery</h1>
			</div>
		</HeaderStyle>
	
	)
}

export default Header
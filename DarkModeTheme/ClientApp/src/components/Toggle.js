import React from 'react';

import SunIcon from '../assets/sun.svg';
import MoonIcon from '../assets/moon.svg';
import './Toggle.scss';

const Toggle = (props) => {
    return (
        <>
			<label class="switch" for="checkbox">
				<input type="checkbox" defaultChecked={props.darkMode} onChange={props.onClick} id="checkbox" />
				<div class="slider">
					<div class="scenary">
						<div class="moon"><img src={MoonIcon} alt="Dark Mode" /></div>
						<div class="sun"><img src={SunIcon} alt="Light Mode" /></div>
					</div>
				</div>

			</label>
        </>
    );
}

export default Toggle;
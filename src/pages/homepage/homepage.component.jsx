import React from 'react';

//Sytles
import './homepage.styles.scss';

//Components
import MenuItem from '../../components/menu-item/menu-item.component';
import Directory from '../../components/directory/directory.component';

const HomePage = (props) => {
    return (
        <div className="homepage">
            <Directory/>
        </div>
    );
}

export default HomePage;
import React from "react";

class App extends React.Component{
    render() {
        const myBio = {
            name: 'Rakibul Islam',
            bio: 'Front-End and WordPress Developer',
        }
        const mySkill = [
            'HTML5',
            'CSS3',
            'Bootstrap',
            'Tailwind',
            'Javscript',
            'Javscript ES6',
            'Javascript API',
            'React'
        ]
        const mySocialLinks = [
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/rakibul.islam.1990'
            },
            {
                name: 'Github',
                url: 'https://github.com/Rakib0101'
            },
            {
                name: 'Netlify',
                url: 'https://app.netlify.com/teams/rakib0101/overview'
            }
        ]
        return (
            <div className='Profile'>
                <h1>I am {myBio.name}</h1>
                <h4>{myBio.bio}</h4>
                <div className='Skill'>
                    <h2>My Skill List:</h2>
                    <ul>
                        {mySkill.map((skillItem) => <li>{skillItem}</li>) }
                    </ul>
                </div>
                <div className='Links'>
                    <h2>My Social Links:</h2>
                    <ul>
                        {mySocialLinks.map((socialItem) => <li> <a href={socialItem.url}>{ socialItem.name}</a></li>) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default App
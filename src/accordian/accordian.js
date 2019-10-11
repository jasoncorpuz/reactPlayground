import React from 'react'

//each li will be a button
//when the button is clicked, content will show

class Accordian extends React.Component {
    static defaultProps = { sections: [] }
    state = {
        currentSectionIndex: 0
    }

    handleClick = (index) => {
        console.log('I got clicked!')
        this.setState({ currentSectionIndex:index})
        console.log(this.state)
    }

    renderList(){
        return this.props.sections.map((sections, index) => (
            <li>
                <button key={index} onClick={() => this.handleClick(index)}>
                    {sections.title}
                </button>
            </li>
        ))
    }

    renderContent(){
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        return(
            <div className='content'>
                {currentSection.content}
            </div>
        )
    }

    render(){
        return(
            <div>
                <ul>
                    {this.renderList()}
                </ul>
                    {!!this.props.sections.length && this.renderContent()}
            </div>
        )
    }
}

export default Accordian;
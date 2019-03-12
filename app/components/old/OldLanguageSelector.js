import React from "react";

class LanguageSelector extends React.Component {
    constructor( props ) {
        super( props );
        this.languages = [
            'All',
            'JavaScript',
            'Ruby',
            'Java',
            'CSS',
            'Python'
        ];
    }

    render() {
        return (
            <ul className='languages'>
                { this.languages.map( ( lang, i ) => { return (
                    <li key={i}
                        style={ lang === this.props.selectedLanguage ? { color : '#D0021B' } : null }
                        onClick={ () => this.props.onSelect( lang ) }>
                        {lang}
                    </li> ) } )}
            </ul>
        )
    }
}

export default LanguageSelector;

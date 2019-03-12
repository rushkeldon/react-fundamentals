import React from "react";

const LanguageSelector = ( props ) => {
    const languages = [
        'All',
        'JavaScript',
        'Ruby',
        'Java',
        'CSS',
        'Python'
    ];

    return (
        <ul className = 'languages'>
            { languages.map( ( lang, i ) => { return (
                <li key = { i }
                    style = { lang === props.selectedLanguage ? { color : '#D0021B' } : null }
                    onClick = { () => props.onSelect( lang ) }>
                    { lang }
                </li>
            ) } ) }
        </ul>
    );
};

export default LanguageSelector;

import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList";

function lang(){
    var lang = navigator.language || navigator.userLanguage
    
    if(lang.includes("es")){
        return localeEsMessages;
    }else if(lang.includes("en")){
        return localeEnMessages;
    }

}
function locale(){
    

    var lang = navigator.language || navigator.userLanguage;
    
    if(lang.includes("es")){
        return "es";
    }else if(lang.includes("en")){
        return "en";
    }

}
ReactDOM.render(
	<IntlProvider locale={locale()} messages= {lang()}>
		<JobsList/>
       
	</IntlProvider>, document.getElementById("root")
);
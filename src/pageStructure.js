import {header, footer} from "./header_footer";
import sidebar from "./sidebar";
import mainContent from "./mainContent";

function pageStucture(){
    document.body.appendChild(header());
    document.body.appendChild(sidebar());
    document.body.appendChild(mainContent());
    document.body.appendChild(footer());
}

export default pageStucture;
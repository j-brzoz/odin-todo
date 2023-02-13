import {header, footer} from "./header_footer";
import sidebar from "./sidebar";
import main from "./main";

function pageStucture(){
    document.body.appendChild(header());
    document.body.appendChild(sidebar());
    document.body.appendChild(main());
    document.body.appendChild(footer());
}

export default pageStucture;
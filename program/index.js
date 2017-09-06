import {getActions} from "./actions";
import ReduxCreateConstant from "../actions/ReduxCreateConstant"

export default {
    start(){
        const action1 = new ReduxCreateConstant();
        action1.run().then(()=>{

        });
    }
}
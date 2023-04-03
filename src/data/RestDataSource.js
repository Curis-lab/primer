import Axios from "axios";
import { ResultUrls } from "./Urls";

export class RestDataSource{
    GetData = (dataType) => this.SendRequest("get",ResultUrls[dataType]);
    SendRequest = (method, url) => Axios.request({method, url});
}
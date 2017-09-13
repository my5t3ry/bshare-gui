import {DaemonConnectorService} from "./DaemonConnectorService";
import {NgModule} from "@angular/core";
import {ConfigurationService} from "./ConfigurationService";

@NgModule({
  declarations: [],
  providers:[ConfigurationService],
  imports: [DaemonConnectorService],
})
export class DaemonConnectorModule {
}

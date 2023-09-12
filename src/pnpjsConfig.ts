import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ConsoleListener, Logger, LogLevel } from "@pnp/logging";
import { spfi, SPFI, SPFx } from "@pnp/sp";

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/files";
import "@pnp/sp/folders";

let _sp: SPFI;

Logger.subscribe(new ConsoleListener())
Logger.activeLogLevel = LogLevel.Warning;

export const getSP = (context?: WebPartContext): SPFI => {
  if (!_sp && context) {
    _sp = spfi().using(SPFx(context))
  }
  return _sp;
}

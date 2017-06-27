import { log } from "./utilities.js";

import * as math from "./math/addition";
import { users } from "./data/users";
import { promise } from "./es2015/promises";

function ajax({ type = "GET", url = requiredParameter("url")} = {}) {
  console.log(JSON.stringify({ type, url }, null, 2));
}

function requiredParameter(name) {
  throw new Error(`Missing parameter "${name}"`);
}

ajax();

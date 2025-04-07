"use strict";

import bencode from "bencode";
import fs from "fs";
import tracker from "./tracker";

const torrent = bencode.decode(fs.readFileSync("puppy.torrent"));

tracker.getPeers(torrent, (peers) => {
  console.log("Peers:", peers);
});

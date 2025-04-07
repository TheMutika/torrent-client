"use strict";

import bencode from "bencode";
import fs from "fs";

import dgram from "dgram";
import { Buffer } from "buffer";

const torrent = bencode.decode(fs.readFileSync("puppy.torrent"));
const url = new URL(torrent.announce.toString("utf-8"));
const socket = dgram.createSocket("udp4");
const myMsg = Buffer.from("hello?", "utf-8");
socket.send(myMsg, 0, myMsg.length, url.port, url.hostname, () => {});
socket.on("message", (msg) => {
  console.log("message is", msg);
});

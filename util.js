"use strict";

import crypto from "crypto";

let id = null;

module.exports.genId = () => {
  if (!id) {
    id = crypto.randomBytes(20);
    Buffer.from("-OT0001-").copy(id, 0); // OT stands for OmegaTorrent / ΩTorrent
  }
  return id;
};

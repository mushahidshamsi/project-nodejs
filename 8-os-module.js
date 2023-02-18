const os = require("os");

const user = os.userInfo();

console.log(user);

const uptime = os.uptime();

console.log(`The system uptime is ${uptime / 3600}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

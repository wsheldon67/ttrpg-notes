const lgv = true
global.verbose = (...thing) => {if(lgv){console.log(...thing)}}

// TODO redirect to /campaign if there is not a campaign chosen
const fs = require('fs');
//used for compression
const zlib =require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./stream.txt','utf-8');
const writeStream = fs.createWriteStream('./stream2.txt');
const wStream = fs.createWriteStream('./stream2.txt.gz');

readStream.on('data',(chunk)=>{
    //console.log(chunk);
    // write into new file
    writeStream.write(chunk);
});


/**
 * Using pipe to achieve above
 */
readStream.pipe(writeStream);

/**
 * Pipe chaining
 * use Gunzip to uncompress
 */
readStream.pipe(gzip).pipe(wStream);
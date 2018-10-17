
function jsmeter ({isPrint = true, isMs = true, isKb = true}) {
    /*_*_*_*_ Init _*_*_*/
    this.old_time = new Date();
    this.m0 = process.memoryUsage()
    this.c0 = process.cpuUsage()

    this.isPrint = isPrint
    this.isMs = isMs
    this.isKb = isKb
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};
 
jsmeter.prototype.stop = function() {
    var new_time = new Date();
    var m1 = process.memoryUsage()
    var c1 = process.cpuUsage()
    var diffCPU = process.cpuUsage(this.c0)
    var tCPUFriction = (this.isMs) ? 1000 : 1000000
    var tFriction = (this.isMs) ? 1 : 1000
    
    var tUnit = (this.isMs) ? 'ms' : 's'

    var diffRAM = bytesToSize(m1['rss'] - this.m0['rss'])
    var diffHeapTotal = bytesToSize(m1['heapTotal'] - this.m0['heapTotal'])
    var diffHeapUsed = bytesToSize(m1['heapUsed'] - this.m0['heapUsed'])
    var diffExternal = bytesToSize(m1['external'] - this.m0['external'])
    var diffCPU = (diffCPU.user + diffCPU.system) / tCPUFriction
    var diffTime = (new_time - this.old_time) / tFriction

    if(this.isPrint) {
        console.log('RAM        : ', diffRAM)
        console.log('HeapTotal  : ', diffHeapTotal)
        console.log('HeapUsed   : ', diffHeapUsed)
        console.log('External   : ', diffExternal)
        console.log('CPU        : ', diffCPU, tUnit)
        console.log('Spend time : ', diffTime, tUnit)
    }

    return {
        diffRAM, 
        diffHeapTotal,
        diffHeapUsed,
        diffExternal,
        diffCPU,
        diffTime
    }
}

module.exports = jsmeter
let data1 = '';
this.onconnect = function(e) {
    console.log('e', e);
    let port = e.ports[0];
    port.onmessage = function(e) {
        console.log(e)
        port.postMessage(99888)
        if(e.data === 'get') {
            port.postMessage('uuiio')
        }else {
            data1 = e.data
        }
    }
}
// onconnect = function(e) {
//     const port = e.ports[0]
//     port.addEventListener('message', function(e) {
//         console.log(e)

//     })
//     port.start()
// }
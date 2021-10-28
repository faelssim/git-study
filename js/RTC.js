(function (_w, _n) {
    const RTC = {
        open(id) {
            _n .getUserMedia || 
            (
                // firefox chrome safari ie
                _n .getUserMedia = _n .mozGetUserMedia || 
                                            _n .webkitGetUserMedia ||
                                            _n .msGetUserMedia
            )
            if (_n .getUserMedia) {
                _n .getUserMedia({
                    video: true,
                    audio: true
                }, (steam) => {
                    const video = document.getElementById(id)
                    video.srcObject = steam
                    // video.autoplay = true
                }, (err) => {
                    console.log(err)
                })
            } else {
                // not support...
            }
        }
    }
    _w.RTC = RTC
})(window, window.navigator)
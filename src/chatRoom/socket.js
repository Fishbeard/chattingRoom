/**
 * Created by hshen on 9/29/16.
 */
import io from 'socket.io-client'


const Singleton = (function () {
    let instance;

    function createInstance() {
        const socket = io.connect('http://localhost:3000');
        return socket;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton;
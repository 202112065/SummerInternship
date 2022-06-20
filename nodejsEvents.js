const EventEmitter =   require('events');

class MyEmitter extends  EventEmitter{}

const myEmitter =   new MyEmitter();

myEmitter.on('WaterFall',()=>{
    console.log("Please turn of motor!");
    setTimeout(()=>{
        console.log('Please turn of motor ! gentle reminder');
    },3000);
});
myEmitter.emit('WaterFall');
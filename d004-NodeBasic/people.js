const people = [
    {name:'Jim', id:101},
    {name:'Mike', id:102},
    {name:'Marry', id:103},
]

const vip=[
    'Sammy',
    'Jimmy',
    'Lancy'
]


//export singular object
//module.exports = people;


//export multiple objects
module.exports = {
    pp:people,
    vip//while the export name equals the internal variable, can just put one value to represent both key and value.
};
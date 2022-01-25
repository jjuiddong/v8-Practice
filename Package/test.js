
let v1 = 'val1'
let v2 = 'val2'

let r1 = getvar(v1)
let r2 = getvar(v2)

//console.log(r1 + r2)
print(r1 + r2)

//setTimeout(() => {
//    print('timer')
//}, 1000)


function testFunction() {
    let ar = [1, 2, 3, 4]
    let ar2 = [5, 6, 7, 8]
    for (let i = 0; i < ar.length; ++i) {
        print(ar[i] + ar2[i])
    }
}


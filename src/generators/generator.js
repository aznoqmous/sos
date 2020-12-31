import md5 from 'md5'

export default class Generator {
    static getSalted(string, length=null){
        let res = md5(string)
            .split('')
            .map(char => {
                if(parseInt(char)) return char
                else return ((char.charCodeAt(0)+'').split(''))[0]
            })
        if(length) res.splice(length)
        return res.join('')
    }

    static getSaltedArr(string, length=null){
        return Generator.getSalted(string, length).split('').map(char => parseInt(char))
    }

    static getColor(secret){
        secret = Generator.getSaltedArr(secret, 3)
        return  `hsl(${secret[0] * secret[1] * secret[2]  % 255 * 255}, 50%, 60%)`
    }
}
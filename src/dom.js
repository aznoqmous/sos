export default class DOM {

    static loaded(){
        return new Promise(res =>{
            if(document.body) return res(document.body)
            document.addEventListener('DOMContentLoaded', ()=>{
                return res(document.body)
            })
        })
        .then(body => {
            DOM.setStyles({
                padding: 0,
                margin: 0,
                overflow: 'hidden',
                width: '100vw',
                height: '100vh'
            }, body)
            return body
        })
    }

    static setStyles(styles, element){
        for(let key in styles) element.style[key] = styles[key]
    }

    static wheelup(callback){
        document.addEventListener('wheel', (e)=>{
            if(e.deltaY > 0) callback()
        })
    }
    static wheeldown(callback){
        document.addEventListener('wheel', (e)=>{
            if(e.deltaY < 0) callback()
        })
    }
}
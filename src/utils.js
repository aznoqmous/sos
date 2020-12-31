export default class Utils {
    static minMax(value, min=0, max=null){
        if(value < min) return min
        if(max !== null && value > max) return max
        return value
    }
}
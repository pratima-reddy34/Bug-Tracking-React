const colors = ["#d33a3a","#ff6700","#32cd32"]

export default(priority)=>{
    const level = ["High","medium","Low"]
    return{
        level:(level[priority-1]),
        color:colors[priority-1]
    }
}
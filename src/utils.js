const paginate = (data) => {
console.log(data);
    const itemNum=4;
    const totalPage=Math.ceil(data.length/itemNum);
    console.log(totalPage);
    const newData=Array.from({length:totalPage}, (_,index)=>{  //must add length:num, or length will 0
        const start=index*itemNum;
        console.log(start);
        return data.slice(start, start+itemNum);
    })
    console.log(newData);
    return(newData);  //must return
}

export default paginate

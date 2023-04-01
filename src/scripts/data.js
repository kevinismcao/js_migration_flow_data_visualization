
// export default async function getData(){
//     const finalData = [];

//     const stateNum = "06" //this will be change as state changed currently set as California
//     const censusUrl = `https://api.census.gov/data/2020/acs/flows?get=FULL1_NAME,FULL2_NAME,MOVEDNET&for=county:*&in=state:${stateNum}`
//     try{
//         let res = await fetch(censusUrl,{
//             headers: { 'Accept':'application/json' }
//         });
//         if (res.ok){
//             let data = await res.json();
//             console.log(data)
//         }else{
//             throw new Error(res);
//         }
//     }catch (err){
//         console.error(err);
//     }
// };
export const fetchData = async (e) => { 
    // e.preventDefault();
    const stateNum = "*" //or "*"this will be change as state changed currently set as California
    const countyNum = "*" //or "*"
    const censusUrl = `https://api.census.gov/data/2020/acs/flows?get=FULL1_NAME,STATE2,STATE2_NAME,FULL2_NAME,MOVEDNET&for=county:${countyNum}&in=state:${stateNum}`
   
    try{
        let res = await fetch(censusUrl,{
            headers: { 'Accept':'application/json' }
        });
        if (res.ok){
            let data = await res.json();
            
            
            const migrationCount = {}
            console.log(data[5])
            data.filter(ele => ele[2] === "00")
            data.slice(1).forEach(ele =>{
                const currentStateArray = ele[0].split(", ")
                const currentState = (currentStateArray[currentStateArray.length - 1])
                let migrateDes = ele[2]
                // console.log(migrateDes);
                // if (migrateDes === currentState){
                //     migrateDes = ele[1]
                // }
                if (!ele[4]) {
                    ele[4] = 0;
                }
                if (!migrationCount[currentState, migrateDes]) {
                    migrationCount[currentState, migrateDes] = 0
                }
                migrationCount[currentState, migrateDes] += parseInt(ele[4]);
                
            })
            console.log(migrationCount)
            console.log(migrationCount[1])
        }else{
            throw new Error(res);
        }
    }catch (err){
        console.error(err);
    }
}

export {migrationCount};

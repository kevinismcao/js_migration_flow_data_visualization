
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
    const stateNum = "06" //or "*"this will be change as state changed currently set as California
    const countyNum = "*" //or "*"
    const censusUrl = `https://api.census.gov/data/2020/acs/flows?get=FULL1_NAME,STATE2,STATE2_NAME,FULL2_NAME,MOVEDNET&for=county:${countyNum}&in=state:${stateNum}`
   
    try{
        let res = await fetch(censusUrl,{
            headers: { 'Accept':'application/json' }
        });
        if (res.ok){
            let data = await res.json();
            
            const currentStateArray = data[1][0].split(", ")
            const currentState = (currentStateArray[currentStateArray.length-1])
            const migrationCount = {}
            console.log(data[5])
            data.slice(1).forEach(ele =>{
                
                const migrateStateArray = ele[1].split(", ")
                let migrateDes = (migrateStateArray[migrateStateArray.length - 1])
                // console.log(migrateDes);
                // if (migrateDes === currentState){
                //     migrateDes = ele[1]
                // }
                if (!ele[2]){
                    ele[2] = 0;
                }
                if (!migrationCount[[ele[0], migrateDes]]) {
                    migrationCount[[ele[0], migrateDes]] = 0
                }
                migrationCount[[ele[0], migrateDes]] += parseInt(ele[2]);
                
            })
            console.log(migrationCount)
        }else{
            throw new Error(res);
        }
    }catch (err){
        console.error(err);
    }
}



export const fetchData = async (year, countyNum, stateNum, statesArray) => { 
    // e.preventDefault();
    // const stateNum = "*" //or "*"this will be change as state changed currently set as California
    // const countyNum = "*" //or "*"
    const names = statesArray
    const censusUrl = `https://api.census.gov/data/${year}/acs/flows?get=FULL1_NAME,STATE2,STATE2_NAME,FULL2_NAME,MOVEDOUT&for=county:${countyNum}&in=state:${stateNum}`
   
    try{
        let res = await fetch(censusUrl,{
            headers: { 'Accept':'application/json' }
        });
        if (res.ok){
            let data = await res.json();
            const matrix = new Array(names.length).fill(0).map(x => Array(names.length).fill(0));
           
            console.log(data[5])
            data.filter(ele => ele[1] === "00")
            data.slice(1).forEach(ele =>{
                let currentState = ""
                if (stateNum === "*"){
                    const currentStateArray = ele[0].split(", ");
                     currentState = (currentStateArray[currentStateArray.length - 1]);
                    }else{
                     currentState = ele[0]
                    }
                let migrateDes = ele[2];
                const currentStateIndex = names.indexOf(currentState);
                const migrateDesIndex = names.indexOf(migrateDes);
                  if (!ele[4]) {
                    ele[4] = 0;
                } 
                if (currentStateIndex >= 0 && currentStateIndex < names.length && migrateDesIndex >= 0 && migrateDesIndex < names.length && currentStateIndex === migrateDesIndex){
                    matrix[currentStateIndex][migrateDesIndex] = 0;
                }
            
                if (currentStateIndex >= 0 && currentStateIndex < names.length && migrateDesIndex >= 0 && migrateDesIndex < names.length && currentStateIndex!==migrateDesIndex){
                    matrix[currentStateIndex][migrateDesIndex] += parseInt(ele[4]);
                }  
                for (let i = 0; i < names.length-1; i++){
                    for (let j=i+1; j<names.length; j++){
                        let num1 = matrix[i][j];
                        let num2 = matrix[j][i];
                        if (num1 > num2){
                            matrix[i][j] = (num1 - num2);
                            matrix[j][i] = 0;
                        }else if (num1 < num2){
                            matrix[i][j] = 0;
                            matrix[j][i] = (num2 - num1);
                        }else{
                            matrix[i][j] = 0;
                            matrix[j][i] = 0
                        }
                    }
                }
            })
           return matrix
            
        }else{
            throw new Error(res);
        }
    }catch (err){
        console.error(err);
    }
}






const statesArray = ["Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "American Samoa",
    "Guam",
    "Northern Mariana Islands",
    "Puerto Rico",
    "U.S.Minor Outlying Islands",
    "U.S.Virgin Islands"]
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
    const name = statesArray
    const censusUrl = `https://api.census.gov/data/2020/acs/flows?get=FULL1_NAME,STATE2,STATE2_NAME,FULL2_NAME,MOVEDOUT&for=county:${countyNum}&in=state:${stateNum}`
   
    try{
        let res = await fetch(censusUrl,{
            headers: { 'Accept':'application/json' }
        });
        if (res.ok){
            let data = await res.json();
            const matrix = new Array(name.length).fill(0).map(x => Array(name.length).fill(0));
            const migrationCount = {}
            console.log(data[5])
            data.filter(ele => ele[1] === "00")
            data.slice(1).forEach(ele =>{
                const currentStateArray = ele[0].split(", ");
                const currentState = (currentStateArray[currentStateArray.length - 1]);
                let migrateDes = ele[2];
                const currentStateIndex = statesArray.indexOf(currentState);
                const migrateDesIndex = statesArray.indexOf(migrateDes);
                  if (!ele[4]) {
                    ele[4] = 0;
                } 
                if (currentStateIndex === migrateDesIndex){
                    matrix[currentStateIndex][migrateDesIndex] = 0;
                }
            
                if (currentStateIndex >= 0 && currentStateIndex < 57 && migrateDesIndex >= 0 && migrateDesIndex < 57 && currentStateIndex!==migrateDesIndex){
                    matrix[currentStateIndex][migrateDesIndex] += parseInt(ele[4]);
                }  
                for (let i = 0; i < name.length-1; i++){
                    for (let j=i+1; j<name.length; j++){
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




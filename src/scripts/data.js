
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
            function inState(value){
                if (value === "00"){
                    return true
                };
                if (value === "01") {
                    return true
                };
                if (value === "02") {
                    return true
                };
                if (value === "03") {
                    return true
                };
                if (value === "04") {
                    return true
                };
                if (value === "05") {
                    return true
                };
                return false
            }
            data.filter(ele => inState(ele))
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
            document.getElementById("loading").style.display = "none"
           return matrix
            
        }else{
            throw new Error(res);
        }
    }catch (err){
        console.error(err);
    }
}


export const fetchStateData = async ( ) => {
    // e.preventDefault();
    const stateNum = "*" //or "*"this will be change as state changed currently set as California
    const countyNum = "*" //or "*"
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
    const names = statesArray
    const censusUrl = `src/scripts/2020migration.json`

    try {
        let res = await fetch(censusUrl, { mode: 'no-cors' }, {
            headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
            let data = await res.json();
            const matrix = new Array(names.length).fill(0).map(x => Array(names.length).fill(0));

            console.log(data[5])
            function inState(value) {
                if (value === "00") {
                    return true
                };
                if (value === "01") {
                    return true
                };
                if (value === "02") {
                    return true
                };
                if (value === "03") {
                    return true
                };
                if (value === "04") {
                    return true
                };
                if (value === "05") {
                    return true
                };
                return false
            }
            data.filter(ele => inState(ele))
            data.slice(1).forEach(ele => {
                let currentState = ""
                if (stateNum === "*") {
                    const currentStateArray = ele[0].split(", ");
                    currentState = (currentStateArray[currentStateArray.length - 1]);
                } else {
                    currentState = ele[0]
                }
                let migrateDes = ele[2];
                const currentStateIndex = names.indexOf(currentState);
                const migrateDesIndex = names.indexOf(migrateDes);
                if (!ele[4]) {
                    ele[4] = 0;
                }
                if (currentStateIndex >= 0 && currentStateIndex < names.length && migrateDesIndex >= 0 && migrateDesIndex < names.length && currentStateIndex === migrateDesIndex) {
                    matrix[currentStateIndex][migrateDesIndex] = 0;
                }

                if (currentStateIndex >= 0 && currentStateIndex < names.length && migrateDesIndex >= 0 && migrateDesIndex < names.length && currentStateIndex !== migrateDesIndex) {
                    matrix[currentStateIndex][migrateDesIndex] += parseInt(ele[4]);
                }
                for (let i = 0; i < names.length - 1; i++) {
                    for (let j = i + 1; j < names.length; j++) {
                        let num1 = matrix[i][j];
                        let num2 = matrix[j][i];
                        if (num1 > num2) {
                            matrix[i][j] = (num1 - num2);
                            matrix[j][i] = 0;
                        } else if (num1 < num2) {
                            matrix[i][j] = 0;
                            matrix[j][i] = (num2 - num1);
                        } else {
                            matrix[i][j] = 0;
                            matrix[j][i] = 0
                        }
                    }
                }
            })
            document.getElementById("loading").style.display = "none";
            return matrix

        } else {
            throw new Error(res);
        }
    } catch (err) {
        console.error(err);
    }
}

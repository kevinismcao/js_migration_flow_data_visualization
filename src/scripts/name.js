export const fetchCountyNameData = async (e) => {
    // e.preventDefault();
    const stateNum = "*" //or "*"this will be change as state changed currently set as California
    const countyNum = "*" //or "*"
    const censusUrl = `https://api.census.gov/data/2020/acs/flows?get=FULL1_NAME&for=county:${countyNum}&in=state:${stateNum}`

    try {
        let res = await fetch(censusUrl, {
            headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
            let data = await res.json();

            
            const countyName = []
            console.log(data[5])
            data.slice(1).forEach(ele => {
                const name = ele[0]
                if (!countyName.includes(name)){
                    countyName.push(name)
                }
               
            })
            console.log(countyName)
        } else {
            throw new Error(res);
        }
    } catch (err) {
        console.error(err);
    }
}


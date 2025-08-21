//get req
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",)

// console.log(fetchPromise)

fetchPromise
.then(res => res.json())
.then(jsonData => {
    jsonData.forEach(element => {
        console.log(element.name)
    })
})
.catch(err => {
    console.log(err)
})

//using async and await
//while using this make use of try catch lock
const asyncFetch = async () => {
    try {
        const fetchPromise = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",)
        if(!fetchPromise.ok){
            console.log('Https error')
        }

        const jsonData = await fetchPromise.json()
        console.log(jsonData)
        
    } catch (error) {
        console.error('some error -', error)
    }
}

asyncFetch()
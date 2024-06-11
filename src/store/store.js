export const getState = ({ getActions, getStore, setStore }) => {
    return {
        store: {

            listOfpeople: [],
            listOfplanets: [],
            listOfvehicles: [],
            wishlist: [],
            favorites: [],
            clickedObj: [],
            clickedObjmoreinfo:[],


        },
        actions: {
            appendFav: (fav) => {
                const store = getStore()
                const addfavs = store.favorites
                addfavs.push(fav)
                setStore({ favorites: addfavs })
                console.log(store.favorites)
            },
            delFav: (index) => {
                const store = getStore()
                store.favorites.splice(index, 1)
                setStore({ favorites: store.favorites })
                console.log(store.favorites)

            },
            objinfo: async(obj) => {
                
                const store=getStore()
                setStore({ clickedObjmoreinfo: obj })
                await fetch(obj.url)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ clickedObj: data.result })
                        console.log(store.clickedObj)
                        console.log(store.clickedObjmoreinfo)
                        return true
                    })
                    .catch(error => console.error(error))
                return true

            },
            getPeople: async() => {
                const store = getStore()
                fetch("https://www.swapi.tech/api/people")
                    .then(res => res.json())
                    .then(data => setStore({ listOfpeople: data.results }))
                    .catch(error => console.error(error))
                console.log(store.listOfpeople)
            },
            getPlanets: () => {
                const store = getStore()

                fetch("https://www.swapi.tech/api/planets")
                    .then(res => res.json())
                    .then(data => setStore({ listOfplanets: data.results }))
                    .catch(err => console.error(err))
                console.log(store.listOfplanets)
            },
            getVehicles: () => {
                const store = getStore()
                fetch("https://www.swapi.tech/api/vehicles")
                    .then(res => res.json())
                    .then(data => setStore({ listOfvehicles: data.results }))
                    .catch(err => console.error(err))
                console.log(store.listOfvehicles)


            }

        }
    }
}
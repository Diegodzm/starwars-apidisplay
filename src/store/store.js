export const getState = ({ getActions, getStore, setStore }) => {
    return {
        store: {

            listOfpeople: [],
            listOfplanets: [],
            listOfvehicles: [],
            wishlist: [],



        },
        actions: {


            getPeople: () => {
                const store = getStore()
                fetch("https://www.swapi.tech/api/people")
                    .then(res => res.json())
                    .then(data => setStore({ listOfpeople: data.results }))
                    .catch(error => console.error(error))
                console.log(store.listOfpeople)
            },
            getPlanets: () => {
                const store= getStore()

                fetch("https://www.swapi.tech/api/planets")
                    .then(res => res.json())
                    .then(data => setStore({ listOfplanets: data.results  }))
                    .catch(err => console.error(err))
                    console.log(store.listOfplanets)
            },
            getVehicles: () => {
                const store= getStore()
                fetch("https://www.swapi.tech/api/vehicles")
                    .then(res => res.json())
                    .then(data => setStore({ listOfvehicles: data.results  }))
                    .catch(err => console.error(err))
                    console.log(store.listOfvehicles)


            }

        }
    }
}
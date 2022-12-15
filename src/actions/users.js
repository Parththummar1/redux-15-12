import axios from 'axios';;

export const getusers = () => async (dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            dispatch({
                type : 'sdsdsds',
                payload : response.data
            })
            
        })

}
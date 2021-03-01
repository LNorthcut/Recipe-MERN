import axios from 'axios';

export default {
    addRecipe: (recipeInfo)=> {
        return axios.post('/api/add', recipeInfo)
    },
    signIn: (signIn)=> {
        return axios.post('/api/login', signIn)
    },
    signUp: (signUp)=> {
        return axios.post('/api/register', signUp)
    }
}
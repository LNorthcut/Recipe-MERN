import axios from 'axios';

export default {
    addRecipe: (recipeInfo)=> {
        return axios.post('/api/add', recipeInfo)
    }
}
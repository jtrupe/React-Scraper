import axios from 'axios' ;

export default {
    findAllWhereUnsaved: () => {
        return axios.get('/api/articles');
    },
    findAllWhereSaved: () => {
        return axios.get('/api/articles/saved');
    }
}

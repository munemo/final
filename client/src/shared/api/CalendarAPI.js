import axios from 'axios'

const productionAPI = ''
const developmentAPI = 'http://localhost:3001'

const CalendarAPI = axios.create({
    baseURL:developmentAPI

})

export default CalendarAPI
export default class GlassesSer {
    constructor(){
    }
    layDSGlass(){
      return axios({
          method: 'get',
          url: 'https://620274b3b8735d00174cbad6.mockapi.io/Glass'
        });
  }
      xemGlass(id){
        return axios({
            method: 'get',
            url: `https://620274b3b8735d00174cbad6.mockapi.io/Glass/${id}`
        });
    }
  } 
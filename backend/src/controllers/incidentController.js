const connection = require('../database/connection');


module.exports = {

  async index(request, response) {
  
    const incidents = await connection('incidents').select('*');
  
    return response.json(incidents);
  },

  async create(request, response) {
    const {name, email, whatsapp, city, uf} = request.body;

  
  
    await connection('incidents').insert({
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    return response.json( 'zero' );

  }
};
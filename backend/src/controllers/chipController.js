const connection = require('../database/connection');


module.exports = {
  async index(request, response) {
    const chips = await connection('chips').select('*');
  
    return response.json(chips);
  },

  async create(request, response) {
    const {
      mei, 
      linha, 
      operadora,
      franquia_dados,
      franquia_voz
    } = request.body;

    const [id] = await connection('chips').insert({
      mei, 
      linha, 
      operadora,
      franquia_dados,
      franquia_voz
    })
    return response.json({ id });

  },
};
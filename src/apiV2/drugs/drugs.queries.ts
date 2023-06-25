import db from '../../db';

export default {
  getAllDrugs() {
    return db.drugNames.findMany();
  },

  async getDrug(name:string) {
    return db.drugNames.findFirst({
      where: {
        name: name.toUpperCase()
      }
    })
  },
};
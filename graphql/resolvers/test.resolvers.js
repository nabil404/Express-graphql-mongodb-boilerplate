var testModel = require('../../models/test.model');


module.exports = {
  Query: {
    Tests: () => testModel.find().exec(),
    Test: (obj, args) => {      
      return testModel.findOne(args).exec()
  }

  },
  Mutation: {
    addTest(source, args) {
      return testModel.create(args)
    },
    updateTest(source, params) {
      return testModel.findByIdAndUpdate(
        params.id,
        { 
            $set: { 
              name: params.name 
            } 
        },{ new: true }).catch(err => new Error(err));    
      }
  }
}

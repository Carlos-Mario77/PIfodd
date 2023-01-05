const { Recipe } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  it('should have a name field', () => {
    expect(Recipe.attributes.name).to.exist;
  });

  it('should have a summary field', () => {
    expect(Recipe.attributes.summary).to.exist;
  });

  it('should have a health_score field', () => {
    expect(Recipe.attributes.health_score).to.exist;
  });

  it('should have an instructions field', () => {
    expect(Recipe.attributes.instructions).to.exist;
  });

  it('should have an image field', () => {
    expect(Recipe.attributes.image).to.exist;
  });

  it('should have a diets field', () => {
    expect(Recipe.attributes.diets).to.exist;
  });
});



// const { Recipe, conn } = require('../../src/db.js');
// const { expect } = require('chai');

// describe('Recipe model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Recipe.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Recipe.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Recipe.create({ name: 'Milanesa a la napolitana' });
//       });
//     });
//   });
// });
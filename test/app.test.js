import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/index.js';

chai.use(chaiHttp);
const expect = chai.expect;


describe('API Tests', () => {
  it('debería crear un usuario correctamente', (done) => {
    chai
      .request(app)
      .post('/users')
      .send({ nombre: 'John Doe', email: 'johndoe@example.com', password:'12345', rol_id: 1 })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('user_id');
        expect(res.body.nombre).to.equal('John Doe');
        expect(res.body.email).to.equal('johndoe@example.com');
        expect(res.body.rol_id).to.equal(1);
        expect(res.body.password).to.equal('12345');
        done();
      });
  });

  it('debería obtener una lista de todos los usuarios', (done) => {
    chai
      .request(app)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('debería eliminar un usuario existente', (done) => {
    chai
      .request(app)
      .delete('/users/1')
      .end((err, res) => {
        expect(res).to.have.status(204);
        done();
      });
  });
});
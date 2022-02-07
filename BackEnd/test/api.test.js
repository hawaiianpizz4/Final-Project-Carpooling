// const { contentType }= require('express/lib/response')
// const request= require('supertest')
// const app=require('../server/index')

// describe('GET /api/gastos', function() {
//     it('Test 1', function(done) {
//       request(app)
//         .get('/api/gastos')
//         .set('Correcto', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
  

//     it('Test 2 ', function(done) {
//         request(app)
//           .get('/api/gastos')
//           .set('Correcto', 'application/json')
//           .expect('Content-Type', /json/)
//           .expect(200, done);
//       });


//   });

//   describe('POST api/gastos', function() {
//     it('Administrando Gastos', function(done) {
//       request(app)
//         .post('/api/gastos')
//         .send({
//           "tipo": "alimentacion",
//           "ruc": "7698",
//           "empresa": "Santa Maria",
//           "monto": 170
//       })
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .end(function(err, res) {
//           if (err) return done(err);
//           return done();
//         });
//     });
//   });


const { contentType }= require('express/lib/response')
const request= require('supertest')
const app=require('../index')


//Pruebas Usuarios
describe('GET /api/logins2', function() {
    it('Test 1', function(done) {
      request(app)
        .get('/api/logins2')
        .set('Correcto', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

  });
  describe('POST /api/logins2', function() {
    it('Administrando Usuarios', function(done) {
      request(app)
        .post('/api/logins2')
        .send({
          "email": "creandonuevo11@gmail.com",
          "password": "12345"
         // "empresa": "Santa Maria",
         // "monto": 170
      })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        })
    });
    // it('Usuario no creado',function(done){
    //   const data={};
    //   request(app)
    //   .post('/api/logins2')
    //   .send(data)
    //   .set('Aceptado','application/json')
    //   .expect('Content-Type', /json/)
    //   .expect(400)
    //   .expect('Usuario no creado')
    //   .end((err)=>{
    //   if(err) return done(err);
    //   done();
    //   })
    //   });
  });

  describe('GET /api/productos/:id',function(){
    it('Respuesta cuando llamo por id', function(done){
    request(app)
    .get('/api/productos')
    .set('Aceptado','application/json')
    .expect('Content-Type', /json/)
    .expect(200,done)
    });
    it('Respuesta cuando llamo por id y no funciona', function(){
      request(app)
      .get('/users/afdfdf')
      .set('Aceptado','application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .expect('Usuario no creado');
  });
});

//Pruebas rutas

describe('GET /api/productos', function() {
    it('Test 1', function(done) {
      request(app)
        .get('/api/productos')
        .set('Correcto', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

  });
  describe('POST /api/productos', function() {
    it('Administrando Usuarios', function(done) {
      request(app)
        .post('/api/productos')
        .send({
          "nombre":"Jhon Idrovo",
          "email": "jhonidrovo@gmail.com",
          "categoria":"0998945876",
          "ubicacion": "Simon Bolivar",
          "precio":"3"
         // "empresa": "Santa Maria",
         // "monto": 170
      })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        })
    });
    // it('Usuario no creado',function(done){
    //   const data={};
    //   request(app)
    //   .post('/api/logins2')
    //   .send(data)
    //   .set('Aceptado','application/json')
    //   .expect('Content-Type', /json/)
    //   .expect(400)
    //   .expect('Usuario no creado')
    //   .end((err)=>{
    //   if(err) return done(err);
    //   done();
    //   })
    //   });
  });

  describe('GET /api/logins2/:id',function(){
    it('Respuesta cuando llamo por id', function(done){
    request(app)
    .get('/api/logins2')
    .set('Aceptado','application/json')
    .expect('Content-Type', /json/)
    .expect(200,done)
    });
    it('Respuesta cuando llamo por id y no funciona', function(){
      request(app)
      .get('/users/afdfdf')
      .set('Aceptado','application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .expect('Usuario no creado');
  });
});

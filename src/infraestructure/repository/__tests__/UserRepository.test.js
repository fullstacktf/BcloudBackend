import { UserRepository } from '../userRepository'


describe('UserRepository', () => {
  describe('existUser', () => {
    test('should return undefined if user dosent exist', done => {

        const userModelSpy = jest.fn();
        const calledSpy = jest.fn().mockResolvedValue(null);
        userModelSpy.findOne = calledSpy;
        const userRepository = new UserRepository(userModelSpy);
        userRepository.existUser('sergio').then(data =>{
            expect(data).toBeFalsy();
            expect(calledSpy).toHaveBeenCalledWith({email:'sergio'});
            done();
        });
    });

      test('should return undefined if email is empty', done => {

          const userModelSpy = jest.fn();
          const calledSpy = jest.fn().mockResolvedValue(null);
          userModelSpy.findOne = calledSpy;
          const userRepository = new UserRepository(userModelSpy);
          userRepository.existUser('').then(data =>{
              expect(data).toBeFalsy();
              expect(calledSpy).not.toHaveBeenCalledWith({email:''});
              done();
          });
      });


    test('should throw an error if database is down ', done => {

        const userModelSpy = jest.fn();
        const calledSpy = jest.fn().mockRejectedValue(new Error("database down"));
        userModelSpy.findOne = calledSpy;

        const userRepository = new UserRepository(userModelSpy);
        userRepository.existUser('sergio').catch(error =>{
            expect(error).not.toBeUndefined();
            expect(calledSpy).toHaveBeenCalledWith({email:'sergio'});
            done();
        });
    });

  });
});


import { SingUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided ', () => {
    const sut = new SingUpController()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_pass',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})

export interface RegistrationRequest {
  givenName: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

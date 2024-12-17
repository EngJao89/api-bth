import {
  IsEmail,
  IsMobilePhone,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class CreateOngDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsMobilePhone()
  phone: string;

  @IsStrongPassword({
    minLength: 8,
    minUppercase: 1,
    minSymbols: 1,
  })
  password: string;

  @IsString()
  city: string;

  @IsString()
  @Length(2, 2)
  uf: string;
}

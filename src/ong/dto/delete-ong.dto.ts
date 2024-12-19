import { IsString, IsUUID } from 'class-validator';

export class DeleteOngDto {
  @IsString()
  @IsUUID()
  id: string;
}

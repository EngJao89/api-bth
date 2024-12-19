import { PartialType } from '@nestjs/mapped-types';
import { CreateOngDTO } from './create-ong.dto';

export class UpdatePatchOngDTO extends PartialType(CreateOngDTO) {}

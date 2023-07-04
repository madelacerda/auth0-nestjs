import { IsOptional } from 'class-validator';

export class Item {
  @IsOptional() readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly image: string;
}
